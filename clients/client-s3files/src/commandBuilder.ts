// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./S3FilesClient";


/**
 * @internal
 */
export const command = makeBuilder<S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "S3Files", "S3FilesClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
