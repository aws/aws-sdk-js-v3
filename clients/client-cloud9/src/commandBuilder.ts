// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./Cloud9Client";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSCloud9WorkspaceManagementService", "Cloud9Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
