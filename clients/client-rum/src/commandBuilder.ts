// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./RUMClient";


/**
 * @internal
 */
export const command = makeBuilder<RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "RUM", "RUMClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
