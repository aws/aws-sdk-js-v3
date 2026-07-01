// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "./SESv2Client";


/**
 * @internal
 */
export const command = makeBuilder<SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "SimpleEmailService_v2", "SESv2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  EndpointId: { type: "contextParams", name: "EndpointId" },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
