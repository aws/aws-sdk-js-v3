// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./Route53DomainsClient";


/**
 * @internal
 */
export const command = makeBuilder<Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Route53Domains_v20140515", "Route53DomainsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
