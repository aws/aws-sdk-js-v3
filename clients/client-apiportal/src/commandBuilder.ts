// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { APIPortalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./APIPortalClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<APIPortalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "APIPortalControlService", "APIPortalClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
