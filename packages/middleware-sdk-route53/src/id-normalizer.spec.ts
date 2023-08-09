import { idNormalizerMiddleware } from "./id-normalizer";

const prefixedProps = ["/hostedzone/ID", "/change/ID", "/delegationset/ID"];
const idParams = ["DelegationSetId", "HostedZoneId", "Id"];

describe("idNormalizerMiddleware", () => {
  for (const paramName of idParams) {
    for (const prefixed of prefixedProps) {
      it(`should strip the prefix from the ${paramName} parameter`, async () => {
        const next = jest.fn();
        const input = { [paramName]: prefixed };

        const handler = idNormalizerMiddleware()(next, {} as any);

        await handler({ input });

        expect(next.mock.calls.length).toBe(1);
        expect(next.mock.calls[0][0]).toEqual({
          input: { [paramName]: "ID" },
        });
      });
    }
  }
});
