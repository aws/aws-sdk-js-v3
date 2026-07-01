// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./DocDBClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonRDSv19", "DocDBClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getCrossRegionPresignedUrlPlugin(config),
];
