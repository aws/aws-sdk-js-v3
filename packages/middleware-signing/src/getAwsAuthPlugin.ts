import { Pluggable } from "@aws-sdk/types";

import { AwsAuthResolvedConfig } from "./configurations";
import { awsAuthMiddleware, awsAuthMiddlewareOptions } from "./middleware";

export const getAwsAuthPlugin = (options: AwsAuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  },
});
