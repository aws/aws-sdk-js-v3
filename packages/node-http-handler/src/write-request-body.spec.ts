import EventEmitter from "events";

import { writeRequestBody } from "./write-request-body";

describe(writeRequestBody.name, () => {
  it("should continue on the continue event", async () => {
    const emitter = Object.assign(new EventEmitter(), { end() {} }) as any;
    const request = {
      headers: { expect: "100-continue" },
      body: Buffer.from(""),
      end() {},
    } as any;

    const promise = writeRequestBody(emitter, request, 10_000);
    emitter.emit("continue", "ok");
    await promise;
  });

  it("should continue on the error event", async () => {
    const emitter = Object.assign(new EventEmitter(), { end() {} }) as any;
    const request = {
      headers: { expect: "100-continue" },
      body: Buffer.from(""),
    } as any;

    const promise = writeRequestBody(emitter, request, 10_000);
    emitter.emit("error", "uh oh");
    await promise;
  });
});
