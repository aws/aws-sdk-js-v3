// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./ConnectHealthClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "ConnectHealth", "ConnectHealthClient", getEndpointPlugin);

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
