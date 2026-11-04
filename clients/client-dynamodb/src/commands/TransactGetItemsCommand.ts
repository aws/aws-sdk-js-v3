// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep12, _mw0, command } from "../commandBuilder";
import type { TransactGetItemsInput, TransactGetItemsOutput } from "../models/models_0";
import { TransactGetItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TransactGetItemsCommand}.
 */
export interface TransactGetItemsCommandInput extends TransactGetItemsInput {}
/**
 * @public
 *
 * The output of {@link TransactGetItemsCommand}.
 */
export interface TransactGetItemsCommandOutput extends TransactGetItemsOutput, __MetadataBearer {}

/**
 * `TransactGetItems` is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A `TransactGetItems` call can contain up to 100 `TransactGetItem` objects, each of which contains a `Get` structure that specifies an item to retrieve from a table in the account and Region. A call to `TransactGetItems` cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB.
 *
 * DynamoDB rejects the entire `TransactGetItems` request if any of the following is true:
 *
 * - A conflicting operation is in the process of updating an item to be read.
 * - There is insufficient provisioned capacity for the transaction to be completed.
 * - There is a user error, such as an invalid data format.
 * - The aggregate size of the items in the transaction exceeded 4 MB.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, TransactGetItemsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, TransactGetItemsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // TransactGetItemsInput
 *   TransactItems: [ // TransactGetItemList // required
 *     { // TransactGetItem
 *       Get: { // Get
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
 *         ProjectionExpression: "STRING_VALUE",
 *         ExpressionAttributeNames: { // ExpressionAttributeNameMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 * };
 * const command = new TransactGetItemsCommand(input);
 * const response = await client.send(command);
 * // { // TransactGetItemsOutput
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
 * //   Responses: [ // ItemResponseList
 * //     { // ItemResponse
 * //       Item: { // AttributeMap
 * //         "<keys>": { // AttributeValue Union: only one key present
 * //           S: "STRING_VALUE",
 * //           N: "STRING_VALUE",
 * //           B: new Uint8Array(),
 * //           SS: [ // StringSetAttributeValue
 * //             "STRING_VALUE",
 * //           ],
 * //           NS: [ // NumberSetAttributeValue
 * //             "STRING_VALUE",
 * //           ],
 * //           BS: [ // BinarySetAttributeValue
 * //             new Uint8Array(),
 * //           ],
 * //           M: { // MapAttributeValue
 * //             "<keys>": {//  Union: only one key present
 * //               S: "STRING_VALUE",
 * //               N: "STRING_VALUE",
 * //               B: new Uint8Array(),
 * //               SS: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NS: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               BS: [
 * //                 new Uint8Array(),
 * //               ],
 * //               M: {
 * //                 "<keys>": "<AttributeValue>",
 * //               },
 * //               L: [ // ListAttributeValue
 * //                 "<AttributeValue>",
 * //               ],
 * //               NULL: true || false,
 * //               BOOL: true || false,
 * //             },
 * //           },
 * //           L: [
 * //             "<AttributeValue>",
 * //           ],
 * //           NULL: true || false,
 * //           BOOL: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TransactGetItemsCommandInput - {@link TransactGetItemsCommandInput}
 * @returns {@link TransactGetItemsCommandOutput}
 * @see {@link TransactGetItemsCommandInput} for command's `input` shape.
 * @see {@link TransactGetItemsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
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
 * @throws {@link DynamoDBServiceException}
 *
 * Base exception class for all service exceptions from DynamoDB service.
 *
 * @public
 */
export class TransactGetItemsCommand extends command<TransactGetItemsCommandInput, TransactGetItemsCommandOutput>(
  _ep12,
  _mw0,
  "TransactGetItems",
  TransactGetItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransactGetItemsInput;
      output: TransactGetItemsOutput;
    };
    sdk: {
      input: TransactGetItemsCommandInput;
      output: TransactGetItemsCommandOutput;
    };
  };
}
