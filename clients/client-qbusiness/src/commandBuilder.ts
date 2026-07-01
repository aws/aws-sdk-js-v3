// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./QBusinessClient";


/**
 * @internal
 */
export const command = makeBuilder<QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ExpertQ", "QBusinessClient", getEndpointPlugin);

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
];
