// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { LambdaWebClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./LambdaWebClient";


/**
 * @internal
 */
export const command = makeBuilder<LambdaWebClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "LambdaWeb", "LambdaWebClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
