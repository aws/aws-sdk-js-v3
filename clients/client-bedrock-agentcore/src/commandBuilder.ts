// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./BedrockAgentCoreClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonBedrockAgentCore", "BedrockAgentCoreClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
