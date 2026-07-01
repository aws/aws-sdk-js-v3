// smithy-typescript generated code
import { getLongPollPlugin } from "@aws-sdk/core/client";
import { getReceiveMessagePlugin, getSendMessageBatchPlugin, getSendMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "./SQSClient";


/**
 * @internal
 */
export const command = makeBuilder<SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "AmazonSQS", "SQSClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];

/**
 * @internal
 */
export const _mw1 = (Command: any, cs: any, config: any, o: any) => [
  getReceiveMessagePlugin(config),
  getLongPollPlugin(config),
];

/**
 * @internal
 */
export const _mw2 = (Command: any, cs: any, config: any, o: any) => [
  getSendMessageBatchPlugin(config),
];

/**
 * @internal
 */
export const _mw3 = (Command: any, cs: any, config: any, o: any) => [
  getSendMessagePlugin(config),
];
