// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./LexModelsV2Client";


/**
 * @internal
 */
export const command = makeBuilder<LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "LexModelBuildingServiceV2", "LexModelsV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
