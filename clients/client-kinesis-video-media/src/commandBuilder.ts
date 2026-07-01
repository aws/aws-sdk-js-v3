// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type {
  KinesisVideoMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./KinesisVideoMediaClient";


/**
 * @internal
 */
export const command = makeBuilder<KinesisVideoMediaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AWSAcuityInletService", "KinesisVideoMediaClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
