// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./ObservabilityAdminClient";


/**
 * @internal
 */
export const command = makeBuilder<ObservabilityAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ObservabilityAdmin", "ObservabilityAdminClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
