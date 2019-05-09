import {
  idNormalizerMiddleware,
  changeBatchAliasTargetIdNormalizerMiddleware
} from "./";

const prefixedProps = ["/hostedzone/ID", "/change/ID", "/delegationset/ID"];
const idParams = ["DelegationSetId", "HostedZoneId", "Id"];

describe("locationConstrainMiddleware", () => {
  for (const paramName of idParams) {
    for (const prefixed of prefixedProps) {
      it(`should strip the prefix from the ${paramName} parameter`, async () => {
        const next = jest.fn();
        const input = { [paramName]: prefixed };

        await idNormalizerMiddleware(next)({ input });

        expect(next.mock.calls.length).toBe(1);
        expect(next.mock.calls[0][0]).toEqual({
          input: { [paramName]: "ID" }
        });
      });
    }
  }
});

describe("changeBatchAliasTargetIdNormalizerMiddleware", () => {
  for (const prefixed of prefixedProps) {
    it(`should strip the prefix from the ChangeBatch.Changes[*].ResourceRecordSet.AliasTarget.HostedZoneId parameter`, async () => {
      const next = jest.fn();
      const input = {
        ChangeBatch: {
          Changes: (function*() {
            for (let i = 0; i < 6; i++) {
              yield {
                ResourceRecordSet: {
                  AliasTarget:
                    i % 2 === 0
                      ? { HostedZoneId: `${prefixed}/${i}` }
                      : undefined
                }
              };
            }
          })()
        }
      };

      await changeBatchAliasTargetIdNormalizerMiddleware(next)({
        input
      });

      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toEqual({
        input: {
          ChangeBatch: {
            Changes: [
              {
                ResourceRecordSet: {
                  AliasTarget: {
                    HostedZoneId: "ID/0"
                  }
                }
              },
              { ResourceRecordSet: {} },
              {
                ResourceRecordSet: {
                  AliasTarget: {
                    HostedZoneId: "ID/2"
                  }
                }
              },
              { ResourceRecordSet: {} },
              {
                ResourceRecordSet: {
                  AliasTarget: {
                    HostedZoneId: "ID/4"
                  }
                }
              },
              { ResourceRecordSet: {} }
            ]
          }
        }
      });
    });
  }
});
