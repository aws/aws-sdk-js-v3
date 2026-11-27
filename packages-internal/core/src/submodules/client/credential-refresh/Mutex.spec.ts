import { describe, expect, it } from "vitest";

import { Mutex } from "./Mutex";

/** A task that stays pending until `finish()` is called, recording when it starts and ends. */
const deferredTask = (name: string, log: string[]) => {
  let finish!: () => void;
  const done = new Promise<void>((resolve) => {
    finish = resolve;
  });
  const task = async () => {
    log.push(`${name} start`);
    await done;
    log.push(`${name} end`);
    return name;
  };
  return { task, finish };
};

/** Lets pending promise callbacks run. */
const flush = async () => {
  for (let i = 0; i < 10; i++) {
    await Promise.resolve();
  }
};

describe("Mutex", () => {
  it("is unlocked until a task runs, and unlocked again after it finishes", async () => {
    const mutex = new Mutex();
    const log: string[] = [];
    const a = deferredTask("a", log);

    expect(mutex.isLocked).toBe(false);
    const running = mutex.runExclusive(a.task);
    expect(mutex.isLocked).toBe(true);

    a.finish();
    await expect(running).resolves.toBe("a");
    expect(mutex.isLocked).toBe(false);
  });

  it("runs tasks one at a time, starting each after the previous one finishes", async () => {
    const mutex = new Mutex();
    const log: string[] = [];
    const a = deferredTask("a", log);
    const b = deferredTask("b", log);
    const c = deferredTask("c", log);

    const results = [mutex.runExclusive(a.task), mutex.runExclusive(b.task), mutex.runExclusive(c.task)];
    await flush();
    expect(log).toEqual(["a start"]);

    a.finish();
    await flush();
    b.finish();
    await flush();
    c.finish();

    await expect(Promise.all(results)).resolves.toEqual(["a", "b", "c"]);
    expect(log).toEqual(["a start", "a end", "b start", "b end", "c start", "c end"]);
  });

  it("takes the lock before returning, so a caller that checks isLocked right after sees it held", () => {
    const mutex = new Mutex();

    void mutex.runExclusive(() => new Promise(() => {}));

    expect(mutex.isLocked).toBe(true);
  });

  it("releases the lock when a task throws, and the next task still runs", async () => {
    const mutex = new Mutex();
    const failure = new Error("refresh failed");

    const first = mutex.runExclusive(async () => {
      throw failure;
    });
    const second = mutex.runExclusive(async () => "ok");

    await expect(first).rejects.toBe(failure);
    await expect(second).resolves.toBe("ok");
    expect(mutex.isLocked).toBe(false);
  });
});
