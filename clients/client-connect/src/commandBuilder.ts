// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./ConnectClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonConnectService", "ConnectClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
