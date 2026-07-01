// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  CloudWatchEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./CloudWatchEventsClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSEvents", "CloudWatchEventsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
