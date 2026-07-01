// smithy-typescript generated code
import { getLongPollPlugin } from "@aws-sdk/core/client";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "./SWFClient";


/**
 * @internal
 */
export const command = makeBuilder<SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "SimpleWorkflowService", "SWFClient", getEndpointPlugin);

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
  getLongPollPlugin(config),
];
