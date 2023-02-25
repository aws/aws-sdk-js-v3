import { MiddlewareStack } from "@aws-sdk/types";

import { awsAuthMiddlewareOptions } from "./awsAuthMiddleware";
import { getAwsAuthPlugin } from "./getAwsAuthPlugin";

describe(getAwsAuthPlugin.name, () => {
  const mockClientStack = {
    addRelativeTo: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("adds middleware", () => {
    getAwsAuthPlugin({} as any).applyToStack(mockClientStack as unknown as MiddlewareStack<any, any>);
    expect(mockClientStack.addRelativeTo).toHaveBeenCalledTimes(1);
    expect(mockClientStack.addRelativeTo.mock.calls[0][1]).toEqual(awsAuthMiddlewareOptions);
  });
});
