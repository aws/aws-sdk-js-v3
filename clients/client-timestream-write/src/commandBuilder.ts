// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamWriteClientResolvedConfig,
} from "./TimestreamWriteClient";


/**
 * @internal
 */
export const command = makeBuilder<TimestreamWriteClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Timestream_20181101", "TimestreamWriteClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getEndpointDiscoveryPlugin(config, {
    clientStack: cs,
    options: o,
    isDiscoveredEndpointRequired: true,
  }),
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
];
