// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { EventBridgeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./EventBridgeV2Client";


/**
 * @internal
 */
export const command = makeBuilder<EventBridgeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSEventsV2", "EventBridgeV2Client", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  EventBusArn: { type: "contextParams", name: "EventBusArn" },
};

/**
 * @internal
 */
export const _ep2: EndpointParameterInstructions = {
  EventBusArn: { type: "contextParams", name: "ResourceArn" },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
