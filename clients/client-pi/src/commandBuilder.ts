// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./PIClient";


/**
 * @internal
 */
export const command = makeBuilder<PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "PerformanceInsightsv20180227", "PIClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
