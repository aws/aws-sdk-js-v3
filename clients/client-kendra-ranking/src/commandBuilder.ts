// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./KendraRankingClient";


/**
 * @internal
 */
export const command = makeBuilder<KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSKendraRerankingFrontendService", "KendraRankingClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
