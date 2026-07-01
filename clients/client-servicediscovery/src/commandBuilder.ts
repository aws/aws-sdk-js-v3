// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  ServiceDiscoveryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./ServiceDiscoveryClient";


/**
 * @internal
 */
export const command = makeBuilder<ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Route53AutoNaming_v20170314", "ServiceDiscoveryClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
