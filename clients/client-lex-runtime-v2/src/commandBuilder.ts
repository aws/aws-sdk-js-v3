// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./LexRuntimeV2Client";


/**
 * @internal
 */
export const command = makeBuilder<LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSDeepSenseRunTimeServiceApi2_0", "LexRuntimeV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getEventStreamPlugin(config),
];
