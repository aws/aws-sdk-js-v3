// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./SageMakerA2IRuntimeClient";


/**
 * @internal
 */
export const command = makeBuilder<SageMakerA2IRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonSageMakerA2IRuntime", "SageMakerA2IRuntimeClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
