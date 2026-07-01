// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "./ServiceQuotasClient";


/**
 * @internal
 */
export const command = makeBuilder<ServiceQuotasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ServiceQuotasV20190624", "ServiceQuotasClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
