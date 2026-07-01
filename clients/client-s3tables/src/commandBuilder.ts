// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./S3TablesClient";


/**
 * @internal
 */
export const command = makeBuilder<S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "S3TableBuckets", "S3TablesClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
