// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./RedshiftClient";


/**
 * @internal
 */
export const command = makeBuilder<RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "RedshiftServiceVersion20121201", "RedshiftClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
