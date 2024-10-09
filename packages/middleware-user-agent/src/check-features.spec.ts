import { AwsHandlerExecutionContext } from "@aws-sdk/types";

import { checkFeatures } from "./check-features";

describe(checkFeatures.name, () => {
  it("should not call the credentials provider to retrieve the identity", async () => {
    const config = {
      credentials: jest.fn(),
    };

    const context = {
      __smithy_context: {
        selectedHttpAuthScheme: {
          identity: {
            accountId: "123456789012",
            $source: {},
          },
        },
      },
    } as AwsHandlerExecutionContext;

    await checkFeatures(context, config, {
      request: undefined,
      input: undefined,
    });

    expect(config.credentials).not.toHaveBeenCalled();
    expect(context.__aws_sdk_context?.features?.RESOLVED_ACCOUNT_ID).toBe("T");
  });

  it("should not throw an error if no fields are present", async () => {
    await checkFeatures({}, {}, {} as any);
  });
});
