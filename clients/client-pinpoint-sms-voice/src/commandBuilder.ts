// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  PinpointSMSVoiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./PinpointSMSVoiceClient";


/**
 * @internal
 */
export const command = makeBuilder<PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "PinpointSMSVoice", "PinpointSMSVoiceClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
