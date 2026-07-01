// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./CloudHSMClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "CloudHsmFrontendService", "CloudHSMClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
