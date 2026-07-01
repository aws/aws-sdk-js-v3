// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./Route53RecoveryReadinessClient";


/**
 * @internal
 */
export const command = makeBuilder<Route53RecoveryReadinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Route53RecoveryReadiness", "Route53RecoveryReadinessClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
