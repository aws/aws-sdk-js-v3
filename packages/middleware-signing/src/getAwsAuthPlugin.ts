import { Pluggable } from "@aws-sdk/types";

import { awsAuthMiddleware, awsAuthMiddlewareOptions } from "./awsAuthMiddleware";
import { AwsAuthResolvedConfig } from "./configurations";

export const getAwsAuthPlugin = (options: AwsAuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  },
});
