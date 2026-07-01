// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./S3VectorsClient";


/**
 * @internal
 */
export const command = makeBuilder<S3VectorsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "S3Vectors", "S3VectorsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
