// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchExecuteStatementInput, BatchExecuteStatementOutput } from "../models/models_0";
import { BatchExecuteStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementInput {}
/**
 * @public
 *
 * The output of {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementOutput, __MetadataBearer {}

/**
 * This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a `BatchExecuteStatement` must specify an equality condition on all key attributes. This enforces that each `SELECT` statement in a batch returns at most a single item. For more information, see [Running batch operations with PartiQL for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.multiplestatements.batching.html).
 *
 * > **Note:** The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.
 *
 * > **Important:** A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the [Error](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchStatementResponse.html#DDB-Type-BatchStatementResponse-Error) field of the `BatchStatementResponse` for each statement.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // BatchExecuteStatementInput
 *   Statements: [ // PartiQLBatchRequest // required
 *     { // BatchStatementRequest
 *       Statement: "STRING_VALUE", // required
 *       Parameters: [ // PreparedStatementParameters
 *         { // AttributeValue Union: only one key present
 *           S: "STRING_VALUE",
 *           N: "STRING_VALUE",
 *           B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           SS: [ // StringSetAttributeValue
 *             "STRING_VALUE",
 *           ],
 *           NS: [ // NumberSetAttributeValue
 *             "STRING_VALUE",
 *           ],
 *           BS: [ // BinarySetAttributeValue
 *             new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           ],
 *           M: { // MapAttributeValue
 *             "<keys>": {//  Union: only one key present
 *               S: "STRING_VALUE",
 *               N: "STRING_VALUE",
 *               B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               SS: [
 *                 "STRING_VALUE",
 *               ],
 *               NS: [
 *                 "STRING_VALUE",
 *               ],
 *               BS: [
 *                 new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               ],
 *               M: {
 *                 "<keys>": "<AttributeValue>",
 *               },
 *               L: [ // ListAttributeValue
 *                 "<AttributeValue>",
 *               ],
 *               NULL: true || false,
 *               BOOL: true || false,
 *             },
 *           },
 *           L: [
 *             "<AttributeValue>",
 *           ],
 *           NULL: true || false,
 *           BOOL: true || false,
 *         },
 *       ],
 *       ConsistentRead: true || false,
 *       ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 *     },
 *   ],
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 * };
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // BatchExecuteStatementOutput
 * //   Responses: [ // PartiQLBatchResponse
 * //     { // BatchStatementResponse
 * //       Error: { // BatchStatementError
 * //         Code: "ConditionalCheckFailed" || "ItemCollectionSizeLimitExceeded" || "RequestLimitExceeded" || "ValidationError" || "ProvisionedThroughputExceeded" || "TransactionConflict" || "ThrottlingError" || "InternalServerError" || "ResourceNotFound" || "AccessDenied" || "DuplicateItem",
 * //         Message: "STRING_VALUE",
 * //         Item: { // AttributeMap
 * //           "<keys>": { // AttributeValue Union: only one key present
 * //             S: "STRING_VALUE",
 * //             N: "STRING_VALUE",
 * //             B: new Uint8Array(),
 * //             SS: [ // StringSetAttributeValue
 * //               "STRING_VALUE",
 * //             ],
 * //             NS: [ // NumberSetAttributeValue
 * //               "STRING_VALUE",
 * //             ],
 * //             BS: [ // BinarySetAttributeValue
 * //               new Uint8Array(),
 * //             ],
 * //             M: { // MapAttributeValue
 * //               "<keys>": {//  Union: only one key present
 * //                 S: "STRING_VALUE",
 * //                 N: "STRING_VALUE",
 * //                 B: new Uint8Array(),
 * //                 SS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BS: [
 * //                   new Uint8Array(),
 * //                 ],
 * //                 M: {
 * //                   "<keys>": "<AttributeValue>",
 * //                 },
 * //                 L: [ // ListAttributeValue
 * //                   "<AttributeValue>",
 * //                 ],
 * //                 NULL: true || false,
 * //                 BOOL: true || false,
 * //               },
 * //             },
 * //             L: [
 * //               "<AttributeValue>",
 * //             ],
 * //             NULL: true || false,
 * //             BOOL: true || false,
 * //           },
 * //         },
 * //       },
 * //       TableName: "STRING_VALUE",
 * //       Item: {
 * //         "<keys>": "<AttributeValue>",
 * //       },
 * //     },
 * //   ],
 * //   ConsumedCapacity: [ // ConsumedCapacityMultiple
 * //     { // ConsumedCapacity
 * //       TableName: "STRING_VALUE",
 * //       CapacityUnits: Number("double"),
 * //       ReadCapacityUnits: Number("double"),
 * //       WriteCapacityUnits: Number("double"),
 * //       Table: { // Capacity
 * //         ReadCapacityUnits: Number("double"),
 * //         WriteCapacityUnits: Number("double"),
 * //         CapacityUnits: Number("double"),
 * //       },
 * //       LocalSecondaryIndexes: { // SecondaryIndexesCapacityMap
 * //         "<keys>": {
 * //           ReadCapacityUnits: Number("double"),
 * //           WriteCapacityUnits: Number("double"),
 * //           CapacityUnits: Number("double"),
 * //         },
 * //       },
 * //       GlobalSecondaryIndexes: {
 * //         "<keys>": {
 * //           ReadCapacityUnits: Number("double"),
 * //           WriteCapacityUnits: Number("double"),
 * //           CapacityUnits: Number("double"),
 * //         },
 * //       },
 * //       VectorIndexes: { // VectorIndexesCapacityMap
 * //         "<keys>": { // VectorCapacity
 * //           VectorSearchRequestBytes: Number("double"),
 * //           VectorWriteRequestBytes: Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchExecuteStatementCommandInput - {@link BatchExecuteStatementCommandInput}
 * @returns {@link BatchExecuteStatementCommandOutput}
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *
 * Throughput exceeds the current throughput quota for your account. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. Contact [Amazon Web Services Support](https://aws.amazon.com/support) to request a quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception.
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class BatchExecuteStatementCommand extends command<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput>(
  _ep0,
  _mw0,
  "BatchExecuteStatement",
  BatchExecuteStatement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchExecuteStatementInput;
      output: BatchExecuteStatementOutput;
    };
    sdk: {
      input: BatchExecuteStatementCommandInput;
      output: BatchExecuteStatementCommandOutput;
    };
  };
}
