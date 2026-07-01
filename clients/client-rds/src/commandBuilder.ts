// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./RDSClient";


/**
 * @internal
 */
export const command = makeBuilder<RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonRDSv19", "RDSClient", getEndpointPlugin);

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
