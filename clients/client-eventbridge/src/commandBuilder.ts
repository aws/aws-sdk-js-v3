// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./EventBridgeClient";


/**
 * @internal
 */
export const command = makeBuilder<EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSEvents", "EventBridgeClient", getEndpointPlugin);

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
