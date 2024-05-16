import type { Pluggable } from "@smithy/types";

import type { PreviouslyResolved } from "./configuration";
import type { FlexibleChecksumsRequestMiddlewareConfig } from "./flexibleChecksumsMiddleware";
import { flexibleChecksumsMiddleware, flexibleChecksumsMiddlewareOptions } from "./flexibleChecksumsMiddleware";
import type { FlexibleChecksumsResponseMiddlewareConfig } from "./flexibleChecksumsResponseMiddleware";
import {
  flexibleChecksumsResponseMiddleware,
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
