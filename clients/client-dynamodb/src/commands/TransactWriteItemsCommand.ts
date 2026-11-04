// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep13, _mw0, command } from "../commandBuilder";
import type { TransactWriteItemsInput, TransactWriteItemsOutput } from "../models/models_0";
import { TransactWriteItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TransactWriteItemsCommand}.
 */
export interface TransactWriteItemsCommandInput extends TransactWriteItemsInput {}
/**
 * @public
 *
 * The output of {@link TransactWriteItemsCommand}.
 */
export interface TransactWriteItemsCommandOutput extends TransactWriteItemsOutput, __MetadataBearer {}

/**
 * `TransactWriteItems` is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both `ConditionCheck` and `Update` the same item. The aggregate size of the items in the transaction cannot exceed 4 MB.
 *
 * The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:
 *
 * - `Put`  —   Initiates a `PutItem` operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.
 * - `Update`  —   Initiates an `UpdateItem` operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.
 * - `Delete`  —   Initiates a `DeleteItem` operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.
 * - `ConditionCheck`  —   Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.
 *
 * DynamoDB rejects the entire `TransactWriteItems` request if any of the following is true:
 *
 * - A condition in one of the condition expressions is not met.
 * - An ongoing operation is in the process of updating the same item.
 * - There is insufficient provisioned capacity for the transaction to be completed.
 * - An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.
 * - The aggregate size of the items in the transaction exceeds 4 MB.
 * - There is a user error, such as an invalid data format.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, TransactWriteItemsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, TransactWriteItemsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // TransactWriteItemsInput
 *   TransactItems: [ // TransactWriteItemList // required
 *     { // TransactWriteItem
 *       ConditionCheck: { // ConditionCheck
 *         Key: { // Key // required
 *           "<keys>": { // AttributeValue Union: only one key present
 *             S: "STRING_VALUE",
 *             N: "STRING_VALUE",
 *             B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *             SS: [ // StringSetAttributeValue
 *               "STRING_VALUE",
 *             ],
 *             NS: [ // NumberSetAttributeValue
 *               "STRING_VALUE",
 *             ],
 *             BS: [ // BinarySetAttributeValue
 *               new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *             ],
 *             M: { // MapAttributeValue
 *               "<keys>": {//  Union: only one key present
 *                 S: "STRING_VALUE",
 *                 N: "STRING_VALUE",
 *                 B: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                 SS: [
 *                   "STRING_VALUE",
 *                 ],
 *                 NS: [
 *                   "STRING_VALUE",
 *                 ],
 *                 BS: [
 *                   new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                 ],
 *                 M: {
 *                   "<keys>": "<AttributeValue>",
 *                 },
 *                 L: [ // ListAttributeValue
 *                   "<AttributeValue>",
 *                 ],
 *                 NULL: true || false,
 *                 BOOL: true || false,
 *               },
 *             },
 *             L: [
 *               "<AttributeValue>",
 *             ],
 *             NULL: true || false,
 *             BOOL: true || false,
 *           },
 *         },
 *         TableName: "STRING_VALUE", // required
 *         ConditionExpression: "STRING_VALUE", // required
 *         ExpressionAttributeNames: { // ExpressionAttributeNameMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ExpressionAttributeValues: { // ExpressionAttributeValueMap
 *           "<keys>": "<AttributeValue>",
 *         },
 *         ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 *       },
 *       Put: { // Put
 *         Item: { // PutItemInputAttributeMap // required
 *           "<keys>": "<AttributeValue>",
 *         },
 *         TableName: "STRING_VALUE", // required
 *         ConditionExpression: "STRING_VALUE",
 *         ExpressionAttributeNames: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ExpressionAttributeValues: {
 *           "<keys>": "<AttributeValue>",
 *         },
 *         ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 *       },
 *       Delete: { // Delete
 *         Key: { // required
 *           "<keys>": "<AttributeValue>",
 *         },
 *         TableName: "STRING_VALUE", // required
 *         ConditionExpression: "STRING_VALUE",
 *         ExpressionAttributeNames: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ExpressionAttributeValues: {
 *           "<keys>": "<AttributeValue>",
 *         },
 *         ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 *       },
 *       Update: { // Update
 *         Key: { // required
 *           "<keys>": "<AttributeValue>",
 *         },
 *         UpdateExpression: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         ConditionExpression: "STRING_VALUE",
 *         ExpressionAttributeNames: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ExpressionAttributeValues: {
 *           "<keys>": "<AttributeValue>",
 *         },
 *         ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 *       },
 *     },
 *   ],
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 *   ReturnItemCollectionMetrics: "SIZE" || "NONE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new TransactWriteItemsCommand(input);
 * const response = await client.send(command);
 * // { // TransactWriteItemsOutput
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
 * //   ItemCollectionMetrics: { // ItemCollectionMetricsPerTable
 * //     "<keys>": [ // ItemCollectionMetricsMultiple
 * //       { // ItemCollectionMetrics
 * //         ItemCollectionKey: { // ItemCollectionKeyAttributeMap
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
 * //         SizeEstimateRangeGB: [ // ItemCollectionSizeEstimateRange
 * //           Number("double"),
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param TransactWriteItemsCommandInput - {@link TransactWriteItemsCommandInput}
 * @returns {@link TransactWriteItemsCommandOutput}
 * @see {@link TransactWriteItemsCommandInput} for command's `input` shape.
 * @see {@link TransactWriteItemsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * DynamoDB rejected the request because you retried a request with a different payload but with an idempotent token that was already used.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. The Amazon Web Services SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to [Error Retries and Exponential Backoff](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff) in the *Amazon DynamoDB Developer Guide*.
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *
 * Throughput exceeds the current throughput quota for your account. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception. Contact [Amazon Web Services Support](https://aws.amazon.com/support) to request a quota increase.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For detailed information about why the request was throttled and the ARN of the impacted resource, find the [ThrottlingReason](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ThrottlingReason.html) field in the returned exception.
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *
 * The entire transaction request was canceled.
 *
 * DynamoDB cancels a `TransactWriteItems` request under the following circumstances:
 *
 * - A condition in one of the condition expressions is not met.
 * - A table in the `TransactWriteItems` request is in a different account or region.
 * - More than one action in the `TransactWriteItems` operation targets the same item.
 * - There is insufficient provisioned capacity for the transaction to be completed.
 * - An item size becomes too large (larger than 400 KB), or a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.
 * - There is a user error, such as an invalid data format.
 * - There is an ongoing `TransactWriteItems` operation that conflicts with a concurrent `TransactWriteItems` request. In this case the `TransactWriteItems` operation fails with a `TransactionCanceledException`.
 *
 * DynamoDB cancels a `TransactGetItems` request under the following circumstances:
 *
 * - There is an ongoing `TransactGetItems` operation that conflicts with a concurrent `PutItem`, `UpdateItem`, `DeleteItem` or `TransactWriteItems` request. In this case the `TransactGetItems` operation fails with a `TransactionCanceledException`.
 * - A table in the `TransactGetItems` request is in a different account or region.
 * - There is insufficient provisioned capacity for the transaction to be completed.
 * - There is a user error, such as an invalid data format.
 *
 * > **Note:** DynamoDB lists the cancellation reasons on the `CancellationReasons` property. Transaction cancellation reasons are ordered in the order of requested items, if an item has no error it will have `None` code and `Null` message. The `None` code is returned as the literal string `"None"`, not a null or absent value; the message field is omitted entirely for an item that has no error. This is important to note when using an SDK that surfaces the code as an optional or nullable type.
 *
 * Cancellation reason codes and possible error messages:
 *
 * - No Errors:
 *
 *   - Code: `None`
 *   - Message: `null`
 * - Conditional Check Failed:
 *
 *   - Code: `ConditionalCheckFailed`
 *   - Message: The conditional request failed.
 * - Item Collection Size Limit Exceeded:
 *
 *   - Code: `ItemCollectionSizeLimitExceeded`
 *   - Message: Collection size exceeded.
 * - Transaction Conflict:
 *
 *   - Code: `TransactionConflict`
 *   - Message: Transaction is ongoing for the item.
 * - Provisioned Throughput Exceeded:
 *
 *   - Code: `ProvisionedThroughputExceeded`
 *   - Messages:
 *
 *     - The level of configured provisioned throughput for the table was exceeded. Consider increasing your provisioning level with the UpdateTable API.
 *
 *       > **Note:** This Message is received when provisioned throughput is exceeded is on a provisioned DynamoDB table.
 *     - The level of configured provisioned throughput for one or more global secondary indexes of the table was exceeded. Consider increasing your provisioning level for the under-provisioned global secondary indexes with the UpdateTable API.
 *
 *       > **Note:** This message is returned when provisioned throughput is exceeded is on a provisioned GSI.
 * - Throttling Error:
 *
 *   - Code: `ThrottlingError`
 *   - Messages:
 *
 *     - Throughput exceeds the current capacity of your table or index. DynamoDB is automatically scaling your table or index so please try again shortly. If exceptions persist, check if you have a hot key: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.
 *
 *       > **Note:** This message is returned when writes get throttled on an On-Demand table as DynamoDB is automatically scaling the table.
 *     - Throughput exceeds the current capacity for one or more global secondary indexes. DynamoDB is automatically scaling your index so please try again shortly.
 *
 *       > **Note:** This message is returned when writes get throttled on an On-Demand GSI as DynamoDB is automatically scaling the GSI.
 * - Validation Error:
 *
 *   - Code: `ValidationError`
 *   - Messages:
 *
 *     - One or more parameter values were invalid.
 *     - The update expression attempted to update the secondary index key beyond allowed size limits.
 *     - The update expression attempted to update the secondary index key to unsupported type.
 *     - An operand in the update expression has an incorrect data type.
 *     - Item size to update has exceeded the maximum allowed size.
 *     - Number overflow. Attempting to store a number with magnitude larger than supported range.
 *     - Type mismatch for attribute to update.
 *     - Nesting Levels have exceeded supported limits.
 *     - The document path provided in the update expression is invalid for update.
 *     - The provided expression refers to an attribute that does not exist in the item.
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *
 * The transaction with the given request token is already in progress.
 *
 * Recommended Settings
 *
 * > **Note:** This is a general recommendation for handling the `TransactionInProgressException`. These settings help ensure that the client retries will trigger completion of the ongoing `TransactWriteItems` request.
 *
 * - Set `clientExecutionTimeout` to a value that allows at least one retry to be processed after 5 seconds have elapsed since the first attempt for the `TransactWriteItems` operation.
 * - Set `socketTimeout` to a value a little lower than the `requestTimeout` setting.
 * - `requestTimeout` should be set based on the time taken for the individual retries of a single HTTP request for your use case, but setting it to 1 second or higher should work well to reduce chances of retries and `TransactionInProgressException` errors.
 * - Use exponential backoff when retrying and tune backoff if needed.
 *
 * Assuming [default retry policy](https://github.com/aws/aws-sdk-java/blob/fd409dee8ae23fb8953e0bb4dbde65536a7e0514/aws-java-sdk-core/src/main/java/com/amazonaws/retry/PredefinedRetryPolicies.java#L97), example timeout settings based on the guidelines above are as follows:
 *
 * Example timeline:
 *
 * - 0-1000 first attempt
 * - 1000-1500 first sleep/delay (default retry policy uses 500 ms as base delay for 4xx errors)
 * - 1500-2500 second attempt
 * - 2500-3500 second sleep/delay (500 * 2, exponential backoff)
 * - 3500-4500 third attempt
 * - 4500-6500 third sleep/delay (500 * 2^2)
 * - 6500-7500 fourth attempt (this can trigger inline recovery since 5 seconds have elapsed since the first attempt reached TC)
 *
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class TransactWriteItemsCommand extends command<TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput>(
  _ep13,
  _mw0,
  "TransactWriteItems",
  TransactWriteItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransactWriteItemsInput;
      output: TransactWriteItemsOutput;
    };
    sdk: {
      input: TransactWriteItemsCommandInput;
      output: TransactWriteItemsCommandOutput;
    };
  };
}
