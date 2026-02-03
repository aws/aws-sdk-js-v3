import { Pluggable } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import {
  flexibleChecksumsInputMiddleware,
  FlexibleChecksumsInputMiddlewareConfig,
  flexibleChecksumsInputMiddlewareOptions,
} from "./flexibleChecksumsInputMiddleware";
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

/**
 * @internal
 */
export interface FlexibleChecksumsMiddlewareConfig
  extends FlexibleChecksumsRequestMiddlewareConfig,
    FlexibleChecksumsInputMiddlewareConfig,
    FlexibleChecksumsResponseMiddlewareConfig {}

/**
 * @internal
 */
export const getFlexibleChecksumsPlugin = (
  config: PreviouslyResolved,
  middlewareConfig: FlexibleChecksumsMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(
      flexibleChecksumsInputMiddleware(config, middlewareConfig),
      flexibleChecksumsInputMiddlewareOptions
    );
    clientStack.addRelativeTo(
      flexibleChecksumsResponseMiddleware(config, middlewareConfig),
      flexibleChecksumsResponseMiddlewareOptions
    );
  },
});
