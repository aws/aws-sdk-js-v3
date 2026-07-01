// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type {
  DynamoDBStreamsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "./DynamoDBStreamsClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "DynamoDBStreams_20120810", "DynamoDBStreamsClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
