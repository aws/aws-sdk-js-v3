import { Pluggable } from "@smithy/types";

import { S3ControlResolvedConfig } from "../configurations";
import { parseOutpostArnablesMiddleaware, parseOutpostArnablesMiddleawareOptions } from "./parse-outpost-arnables";
import { updateArnablesRequestMiddleware, updateArnablesRequestMiddlewareOptions } from "./update-arnables-request";

export const getProcessArnablesPlugin = (options: S3ControlResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(parseOutpostArnablesMiddleaware(options), parseOutpostArnablesMiddleawareOptions);
    clientStack.add(updateArnablesRequestMiddleware(options), updateArnablesRequestMiddlewareOptions);
  },
});
