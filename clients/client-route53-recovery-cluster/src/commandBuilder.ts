// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./Route53RecoveryClusterClient";


/**
 * @internal
 */
export const command = makeBuilder<Route53RecoveryClusterClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ToggleCustomerAPI", "Route53RecoveryClusterClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
