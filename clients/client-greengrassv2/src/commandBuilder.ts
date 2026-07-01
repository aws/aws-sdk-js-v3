// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./GreengrassV2Client";


/**
 * @internal
 */
export const command = makeBuilder<GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "GreengrassV2", "GreengrassV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
