// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import { commonParams } from "./endpoint/EndpointParameters";
import type { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./KinesisClient";


/**
 * @internal
 */
export const command = makeBuilder<KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "Kinesis_20131202", "KinesisClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {
  OperationType: { type: "staticContextParams", value: `control` },
  StreamId: { type: "contextParams", name: "StreamId" },
  StreamARN: { type: "contextParams", name: "StreamARN" },
};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _ep2: EndpointParameterInstructions = {
  OperationType: { type: "staticContextParams", value: `control` },
  ResourceARN: { type: "contextParams", name: "ResourceARN" },
  StreamId: { type: "contextParams", name: "StreamId" },
};

/**
 * @internal
 */
export const _ep3: EndpointParameterInstructions = {
  OperationType: { type: "staticContextParams", value: `control` },
  StreamId: { type: "contextParams", name: "StreamId" },
  ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
  StreamARN: { type: "contextParams", name: "StreamARN" },
};

/**
 * @internal
 */
export const _ep4: EndpointParameterInstructions = {
  OperationType: { type: "staticContextParams", value: `data` },
  StreamId: { type: "contextParams", name: "StreamId" },
  StreamARN: { type: "contextParams", name: "StreamARN" },
};

/**
 * @internal
 */
export const _ep5: EndpointParameterInstructions = {
  OperationType: { type: "staticContextParams", value: `data` },
  StreamId: { type: "contextParams", name: "StreamId" },
  ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
