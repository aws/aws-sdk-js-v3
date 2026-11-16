// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  OpenSearchMemoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./OpenSearchMemoryClient";


/**
 * @internal
 */
export const command = makeBuilder<OpenSearchMemoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "OpenSearchMemory", "OpenSearchMemoryClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  SpaceId: { type: "contextParams", name: "spaceId" },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
