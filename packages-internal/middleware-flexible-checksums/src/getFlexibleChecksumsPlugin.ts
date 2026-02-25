import type { Pluggable } from "@smithy/types";

import type { PreviouslyResolved } from "./configuration";
import type { FlexibleChecksumsInputMiddlewareConfig } from "./flexibleChecksumsInputMiddleware";
import {
  flexibleChecksumsInputMiddleware,
  flexibleChecksumsInputMiddlewareOptions,
} from "./flexibleChecksumsInputMiddleware";
import type { FlexibleChecksumsRequestMiddlewareConfig } from "./flexibleChecksumsMiddleware";
import { flexibleChecksumsMiddleware, flexibleChecksumsMiddlewareOptions } from "./flexibleChecksumsMiddleware";
import type { FlexibleChecksumsResponseMiddlewareConfig } from "./flexibleChecksumsResponseMiddleware";
import {
  flexibleChecksumsResponseMiddleware,
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
