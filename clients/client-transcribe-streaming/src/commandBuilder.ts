// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getTranscribeStreamingPlugin } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig,
} from "./TranscribeStreamingClient";


/**
 * @internal
 */
export const command = makeBuilder<TranscribeStreamingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Transcribe", "TranscribeStreamingClient", getEndpointPlugin);

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
  getEventStreamPlugin(config),
  getWebSocketPlugin(config, {
    headerPrefix: "x-amzn-transcribe-",
  }),
  getTranscribeStreamingPlugin(config),
];
