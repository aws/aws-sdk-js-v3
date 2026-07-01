// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./PricingClient";


/**
 * @internal
 */
export const command = makeBuilder<PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSPriceListService", "PricingClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
