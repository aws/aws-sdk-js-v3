// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./NeptuneClient";


/**
 * @internal
 */
export const command = makeBuilder<NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonRDSv19", "NeptuneClient", getEndpointPlugin);

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
