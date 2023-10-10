import { Pluggable } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import {
  flexibleChecksumsMiddleware,
  flexibleChecksumsMiddlewareOptions,
  FlexibleChecksumsRequestMiddlewareConfig,
} from "./flexibleChecksumsMiddleware";
import {
  flexibleChecksumsResponseMiddleware,
  FlexibleChecksumsResponseMiddlewareConfig,
  flexibleChecksumsResponseMiddlewareOptions,
} from "./flexibleChecksumsResponseMiddleware";

export interface FlexibleChecksumsMiddlewareConfig
  extends FlexibleChecksumsRequestMiddlewareConfig,
    FlexibleChecksumsResponseMiddlewareConfig {}

export const getFlexibleChecksumsPlugin = (
  config: PreviouslyResolved,
  middlewareConfig: FlexibleChecksumsMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(
      flexibleChecksumsResponseMiddleware(config, middlewareConfig),
      flexibleChecksumsResponseMiddlewareOptions
    );
  },
});
