// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./AutoScalingClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AutoScaling_2011_01_01", "AutoScalingClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
