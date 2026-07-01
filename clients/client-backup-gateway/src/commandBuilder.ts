// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./BackupGatewayClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "BackupOnPremises_v20210101", "BackupGatewayClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
