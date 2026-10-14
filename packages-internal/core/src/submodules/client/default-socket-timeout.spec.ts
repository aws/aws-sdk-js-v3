import { readFileSync } from "node:fs";
import { join } from "node:path";
import { runInNewContext } from "node:vm";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import {
  isDefaultSocketTimeoutEnabled,
  readDefaultSocketTimeoutEnv,
  resetDefaultSocketTimeoutGateForTest,
  withDefaultSocketTimeout,
} from "./default-socket-timeout";

const ENV = "AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026";

describe("default socket timeout (JS-7140)", () => {
  const savedEnv = process.env[ENV];

  beforeEach(() => {
    delete process.env[ENV];
    resetDefaultSocketTimeoutGateForTest();
  });

  afterEach(() => {
    if (savedEnv === undefined) {
      delete process.env[ENV];
    } else {
      process.env[ENV] = savedEnv;
    }
    resetDefaultSocketTimeoutGateForTest();
  });

  describe("isDefaultSocketTimeoutEnabled", () => {
    it("is off by default", () => {
      expect(isDefaultSocketTimeoutEnabled()).toBe(false);
    });

    it("is on for the literal string true", () => {
      process.env[ENV] = "true";
      expect(isDefaultSocketTimeoutEnabled()).toBe(true);
    });

    it.each(["TRUE", "1", "false", "yes", " true", ""])("stays off for %j", (value) => {
      process.env[ENV] = value;
      expect(isDefaultSocketTimeoutEnabled()).toBe(false);
    });

    it("memoizes the first read", () => {
      process.env[ENV] = "true";
      expect(isDefaultSocketTimeoutEnabled()).toBe(true);
      delete process.env[ENV];
      expect(isDefaultSocketTimeoutEnabled()).toBe(true);
    });

    // Runs the env read's own code in a fresh context, the way a browser sees it.
    const readIn = (globals: object) => runInNewContext(`(${readDefaultSocketTimeoutEnv.toString()})()`, globals);

    it("is off without throwing when process is absent (browser, no bundler substitution)", () => {
      expect(readIn({})).toBe(false);
    });

    it("is off without throwing when process has no env (partial polyfill)", () => {
      expect(readIn({ process: {} })).toBe(false);
    });

    it("reads the exact member expression that browser bundlers substitute", () => {
      const source = readFileSync(join(__dirname, "default-socket-timeout.ts"), "utf8");
      expect(source).toContain(`process.env.${ENV} === "true"`);
      expect(source).not.toMatch(new RegExp(`typeof process[^\\n]*${ENV}`));
    });
  });

  describe("withDefaultSocketTimeout", () => {
    it("returns input unchanged when the gate is off", () => {
      const options = { connectionTimeout: 5000 };
      expect(withDefaultSocketTimeout(options, 900000)).toBe(options);
    });

    describe("gate on", () => {
      beforeEach(() => {
        process.env[ENV] = "true";
      });

      it("layers the default under plain caller options", () => {
        expect(withDefaultSocketTimeout({ connectionTimeout: 5000 }, 900000)).toEqual({
          socketTimeout: 900000,
          connectionTimeout: 5000,
        });
      });

      it("lets a caller socketTimeout win, including 0 to disable", () => {
        expect(withDefaultSocketTimeout({ socketTimeout: 1000 }, 900000)).toEqual({ socketTimeout: 1000 });
        expect(withDefaultSocketTimeout({ socketTimeout: 0 }, 900000)).toEqual({ socketTimeout: 0 });
      });

      it("uses the named option for NodeHttp2Handler", () => {
        expect(withDefaultSocketTimeout({ disableConcurrentStreams: true }, 900000, "defaultSocketTimeout")).toEqual({
          defaultSocketTimeout: 900000,
          disableConcurrentStreams: true,
        });
      });

      it("wraps an options provider, keeping provider keys over the default", async () => {
        const wrapped = withDefaultSocketTimeout(
          async () => ({ connectionTimeout: 1100 }),
          300000
        ) as () => Promise<object>;
        expect(await wrapped()).toEqual({ socketTimeout: 300000, connectionTimeout: 1100 });
        const own = withDefaultSocketTimeout(async () => ({ socketTimeout: 5 }), 300000) as () => Promise<object>;
        expect(await own()).toEqual({ socketTimeout: 5 });
      });

      it("handles a provider that resolves to nothing", async () => {
        const wrapped = withDefaultSocketTimeout(async () => undefined, 300000) as () => Promise<object>;
        expect(await wrapped()).toEqual({ socketTimeout: 300000 });
      });

      it("returns a handler instance unchanged", () => {
        const instance = { handle: async () => ({}) };
        expect(withDefaultSocketTimeout(instance, 900000)).toBe(instance);
      });

      it("returns a callable handler (a function with handle()) unchanged", () => {
        const callable = Object.assign(async () => ({}), { handle: async () => ({}) });
        expect(withDefaultSocketTimeout(callable, 900000)).toBe(callable);
      });

      it("fills a caller key that is present but undefined", () => {
        expect(withDefaultSocketTimeout({ socketTimeout: undefined }, 900000)).toEqual({ socketTimeout: 900000 });
      });

      it("does not mutate the caller's options", () => {
        const options = { connectionTimeout: 5000 };
        withDefaultSocketTimeout(options, 900000);
        expect(options).toEqual({ connectionTimeout: 5000 });
      });
    });
  });
});
