import { changeResourceRecordSetsMiddleware } from "./change-resource-record-sets";

const prefixedProps = ["/hostedzone/ID", "/change/ID", "/delegationset/ID"];

describe("changeResourceRecordSetsMiddleware", () => {
  for (const prefixed of prefixedProps) {
    it(`should strip the prefix from the ChangeBatch.Changes[*].ResourceRecordSet.AliasTarget.HostedZoneId parameter`, async () => {
      const next = jest.fn();
      const input = {
        ChangeBatch: {
          Changes: (function* () {
            for (let i = 0; i < 6; i++) {
              yield {
                ResourceRecordSet: {
                  AliasTarget: i % 2 === 0 ? { HostedZoneId: `${prefixed}/${i}` } : undefined,
                },
              };
            }
          })(),
        },
      };

      const handler = changeResourceRecordSetsMiddleware()(next, {} as any);

      await handler({ input });

      expect(next.mock.calls.length).toBe(1);
      expect(next.mock.calls[0][0]).toEqual({
        input: {
          ChangeBatch: {
            Changes: [
              {
                ResourceRecordSet: {
                  AliasTarget: {
                    HostedZoneId: "ID/0",
                  },
                },
              },
              { ResourceRecordSet: {} },
              {
                ResourceRecordSet: {
                  AliasTarget: {
                    HostedZoneId: "ID/2",
                  },
                },
              },
              { ResourceRecordSet: {} },
              {
                ResourceRecordSet: {
                  AliasTarget: {
                    HostedZoneId: "ID/4",
                  },
                },
              },
              { ResourceRecordSet: {} },
            ],
          },
        },
      });
    });
  }
});
