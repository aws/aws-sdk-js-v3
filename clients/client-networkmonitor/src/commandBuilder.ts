// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./NetworkMonitorClient";


/**
 * @internal
 */
export const command = makeBuilder<NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "NetworkMonitor", "NetworkMonitorClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
