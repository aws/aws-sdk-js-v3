// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  Route53ProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./Route53ProfilesClient";


/**
 * @internal
 */
export const command = makeBuilder<Route53ProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Route53Profiles", "Route53ProfilesClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
