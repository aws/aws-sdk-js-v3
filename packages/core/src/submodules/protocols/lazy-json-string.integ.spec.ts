import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Schemas } from "@aws-sdk/client-schemas";
import { LazyJsonString } from "@smithy/core/serde";
import { describe, expect, test as it } from "vitest";

describe(LazyJsonString.name, () => {
  it("should auto-serialize fields to JSON", async () => {
    const client = new Schemas({
      region: "us-west-2",
    });

    let request = 0;

    requireRequestsFrom(client).toMatch({
      body(b) {
        if (request === 0) {
          expect(b).toEqual(`{"Policy":"this is a plain string"}`);
          request += 1;
        } else if (request === 1) {
          expect(b).toEqual(`{"Policy":"{\\"this\\":\\"is a json string\\"}"}`);
          request += 1;
        } else if (request === 2) {
          expect(b).toEqual(`{"Policy":"{\\"message\\":\\"this is a js object\\"}"}`);
          request += 1;
        }
      },
    });

    await client.putResourcePolicy({
      Policy: "this is a plain string",
    });
    await client.putResourcePolicy({
      Policy: `{"this":"is a json string"}`,
    });
    await client.putResourcePolicy({
      Policy: {
        message: "this is a js object",
      },
    });
    expect.assertions(3);
  });
});
