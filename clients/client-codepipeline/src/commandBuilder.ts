// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./CodePipelineClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "CodePipeline_20150709", "CodePipelineClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
