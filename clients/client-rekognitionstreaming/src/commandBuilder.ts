// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  RekognitionStreamingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./RekognitionStreamingClient";


/**
 * @internal
 */
export const command = makeBuilder<RekognitionStreamingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "RekognitionStreamingService", "RekognitionStreamingClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
  getEventStreamPlugin(config),
  getWebSocketPlugin(config, {
    headerPrefix: "x-amz-rekognition-streaming-liveness-",
  }),
];
