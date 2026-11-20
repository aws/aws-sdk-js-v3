// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  SageMakerGatewayRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./SageMakerGatewayRuntimeClient";


/**
 * @internal
 */
export const command = makeBuilder<SageMakerGatewayRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "GlobalInferenceGatewayRuntime", "SageMakerGatewayRuntimeClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
