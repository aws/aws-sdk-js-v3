// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  PcaConnectorScepClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./PcaConnectorScepClient";


/**
 * @internal
 */
export const command = makeBuilder<PcaConnectorScepClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "PcaConnectorScep", "PcaConnectorScepClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
