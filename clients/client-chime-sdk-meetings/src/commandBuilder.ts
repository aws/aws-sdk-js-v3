// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  ChimeSDKMeetingsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./ChimeSDKMeetingsClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ChimeMeetingsSDKService", "ChimeSDKMeetingsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
