// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./Route53GlobalResolverClient";


/**
 * @internal
 */
export const command = makeBuilder<Route53GlobalResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "EC2DNSGlobalResolverCustomerAPI", "Route53GlobalResolverClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
