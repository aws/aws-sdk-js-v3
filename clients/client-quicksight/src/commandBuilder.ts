// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./QuickSightClient";


/**
 * @internal
 */
export const command = makeBuilder<QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "QuickSight_20180401", "QuickSightClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
