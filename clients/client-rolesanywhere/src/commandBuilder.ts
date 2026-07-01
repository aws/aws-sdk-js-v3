// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./RolesAnywhereClient";


/**
 * @internal
 */
export const command = makeBuilder<RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "RolesAnywhere", "RolesAnywhereClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
