// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./InspectorClient";


/**
 * @internal
 */
export const command = makeBuilder<InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "InspectorService", "InspectorClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
