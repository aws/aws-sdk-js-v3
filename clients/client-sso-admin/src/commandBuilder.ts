// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "./SSOAdminClient";


/**
 * @internal
 */
export const command = makeBuilder<SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "SWBExternalService", "SSOAdminClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
