// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./PinpointClient";


/**
 * @internal
 */
export const command = makeBuilder<PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Pinpoint", "PinpointClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
