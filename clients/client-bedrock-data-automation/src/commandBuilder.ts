// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./BedrockDataAutomationClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<BedrockDataAutomationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonBedrockKeystoneBuildTimeService", "BedrockDataAutomationClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
