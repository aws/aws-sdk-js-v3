// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteTransactionInput, ExecuteTransactionOutput } from "../models/models_0";
import { ExecuteTransaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteTransactionCommand}.
 */
export interface ExecuteTransactionCommandInput extends ExecuteTransactionInput {}
/**
 * @public
 *
 * The output of {@link ExecuteTransactionCommand}.
 */
export interface ExecuteTransactionCommandOutput extends ExecuteTransactionOutput, __MetadataBearer {}

/**
 * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.
 *
 * > **Note:** The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to `ConditionCheck` in the [TransactWriteItems](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteTransactionCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteTransactionCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // ExecuteTransactionInput
 *   TransactStatements: [ // ParameterizedStatements // required
 *     { // ParameterizedStatement
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
 *       ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 * };
 * const command = new ExecuteTransactionCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteTransactionOutput
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
 * @param ExecuteTransactionCommandInput - {@link ExecuteTransactionCommandInput}
 * @returns {@link ExecuteTransactionCommandOutput}
 * @see {@link ExecuteTransactionCommandInput} for command's `input` shape.
 * @see {@link ExecuteTransactionCommandOutput} for command's `response` shape.
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
export class ExecuteTransactionCommand extends command<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteTransaction",
  ExecuteTransaction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteTransactionInput;
      output: ExecuteTransactionOutput;
    };
    sdk: {
      input: ExecuteTransactionCommandInput;
      output: ExecuteTransactionCommandOutput;
    };
  };
}
