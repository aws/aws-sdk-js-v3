// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./EMRServerlessClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AwsToledoWebService", "EMRServerlessClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
