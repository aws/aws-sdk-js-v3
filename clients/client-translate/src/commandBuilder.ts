// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "./TranslateClient";


/**
 * @internal
 */
export const command = makeBuilder<TranslateClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSShineFrontendService_20170701", "TranslateClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
