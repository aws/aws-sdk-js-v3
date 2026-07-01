// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import { getCompressionPlugin } from "@smithy/middleware-compression";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./CloudWatchClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "GraniteServiceVersion20100801", "CloudWatchClient", getEndpointPlugin);

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
  getCompressionPlugin(config, {
    encodings: ["gzip"],
  }),
];
