// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  AgentRegistryControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./AgentRegistryControlClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<AgentRegistryControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AgentRegistryControl", "AgentRegistryControlClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
