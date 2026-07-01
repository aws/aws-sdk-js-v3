// smithy-typescript generated code
import { makeBuilder } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { EndpointParameterInstructions } from "@smithy/types";

import type { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "./DynamoDBClient";
import { commonParams } from "./endpoint/EndpointParameters";


/**
 * @internal
 */
export const command = makeBuilder<DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>(commonParams, "DynamoDB_20120810", "DynamoDBClient", getEndpointPlugin);

/**
 * @internal
 */
export const _ep0: EndpointParameterInstructions = {};

/**
 * @internal
 */
export const _ep1: EndpointParameterInstructions = {
  ResourceArnList: { type: "operationContextParams", get: (input?: any) => Object.keys(input?.RequestItems ?? {}) },
};

/**
 * @internal
 */
export const _ep2: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "TableName" },
};

/**
 * @internal
 */
export const _ep3: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "GlobalTableName" },
};

/**
 * @internal
 */
export const _ep4: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "BackupArn" },
};

/**
 * @internal
 */
export const _ep5: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "ResourceArn" },
};

/**
 * @internal
 */
export const _ep6: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "ExportArn" },
};

/**
 * @internal
 */
export const _ep7: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "ImportArn" },
};

/**
 * @internal
 */
export const _ep8: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "TableArn" },
};

/**
 * @internal
 */
export const _ep9: EndpointParameterInstructions = {
  ResourceArn: { type: "operationContextParams", get: (input?: any) => input?.TableCreationParameters?.TableName },
};

/**
 * @internal
 */
export const _ep10: EndpointParameterInstructions = {
  ResourceArn: { type: "contextParams", name: "TargetTableName" },
};

/**
 * @internal
 */
export const _ep11: EndpointParameterInstructions = {
  ResourceArnList: { type: "operationContextParams", get: (input?: any) => input?.TransactItems?.map((obj: any) => obj?.Get?.TableName) },
};

/**
 * @internal
 */
export const _ep12: EndpointParameterInstructions = {
  ResourceArnList: { type: "operationContextParams", get: (input?: any) => input?.TransactItems?.map((obj: any) => [obj?.ConditionCheck?.TableName,obj?.Put?.TableName,obj?.Delete?.TableName,obj?.Update?.TableName].filter((i) => i)).flat() },
};

/**
 * @internal
 */
export const _mw0 = (Command: any, cs: any, config: any, o: any) => [
];
