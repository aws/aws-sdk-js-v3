// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./CloudHSMV2Client";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "BaldrApiService", "CloudHSMV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
