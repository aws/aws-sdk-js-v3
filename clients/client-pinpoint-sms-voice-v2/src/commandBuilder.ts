// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./PinpointSMSVoiceV2Client";


/**
 * @internal
 */
export const command = makeBuilder<PinpointSMSVoiceV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "PinpointSMSVoiceV2", "PinpointSMSVoiceV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
