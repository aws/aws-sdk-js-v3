// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteTransactionInput, ExecuteTransactionOutput } from "../models/models_0";
import { de_ExecuteTransactionCommand, se_ExecuteTransactionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation allows you to perform transactional reads or writes on data stored in
 *             DynamoDB, using PartiQL.</p>
 *          <note>
 *             <p>The entire transaction must consist of either read statements or write statements,
 *                 you cannot mix both in one transaction. The EXISTS function is an exception and can
 *                 be used to check the condition of specific attributes of the item in a similar
 *                 manner to <code>ConditionCheck</code> in the <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems">TransactWriteItems</a> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteTransactionCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteTransactionCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
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
 *  <p>DynamoDB rejected the request because you retried a request with a
 *             different payload but with an idempotent token that was already used.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>Your request rate is too high. The Amazon Web Services SDKs for DynamoDB
 *             automatically retry requests that receive this exception. Your request is eventually
 *             successful, unless your retry queue is too large to finish. Reduce the frequency of
 *             requests and use exponential backoff. For more information, go to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff">Error Retries and Exponential Backoff</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 *
 * @throws {@link RequestLimitExceeded} (client fault)
 *  <p>Throughput exceeds the current throughput quota for your account. Please contact
 *                 <a href="https://aws.amazon.com/support">Amazon Web Services Support</a> to request a
 *             quota increase.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *  <p>The entire transaction request was canceled.</p>
 *          <p>DynamoDB cancels a <code>TransactWriteItems</code> request under the following
 *             circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>A condition in one of the condition expressions is not met.</p>
 *             </li>
 *             <li>
 *                <p>A table in the <code>TransactWriteItems</code> request is in a different
 *                     account or region.</p>
 *             </li>
 *             <li>
 *                <p>More than one action in the <code>TransactWriteItems</code> operation
 *                     targets the same item.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction to be
 *                     completed.</p>
 *             </li>
 *             <li>
 *                <p>An item size becomes too large (larger than 400 KB), or a local secondary
 *                     index (LSI) becomes too large, or a similar validation error occurs because of
 *                     changes made by the transaction.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     There is an ongoing <code>TransactWriteItems</code> operation that conflicts with a concurrent
 *                     <code>TransactWriteItems</code> request. In this case the <code>TransactWriteItems</code> operation
 *                     fails with a <code>TransactionCanceledException</code>.
 *                 </p>
 *             </li>
 *          </ul>
 *          <p>DynamoDB cancels a <code>TransactGetItems</code> request under the
 *             following circumstances:</p>
 *          <ul>
 *             <li>
 *                <p>There is an ongoing <code>TransactGetItems</code> operation that conflicts
 *                     with a concurrent <code>PutItem</code>, <code>UpdateItem</code>,
 *                         <code>DeleteItem</code> or <code>TransactWriteItems</code> request. In this
 *                     case the <code>TransactGetItems</code> operation fails with a
 *                         <code>TransactionCanceledException</code>.</p>
 *             </li>
 *             <li>
 *                <p>A table in the <code>TransactGetItems</code> request is in a different
 *                     account or region.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction to be
 *                     completed.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If using Java, DynamoDB lists the cancellation reasons on the
 *                     <code>CancellationReasons</code> property. This property is not set for other
 *                 languages. Transaction cancellation reasons are ordered in the order of requested
 *                 items, if an item has no error it will have <code>None</code> code and
 *                     <code>Null</code> message.</p>
 *          </note>
 *          <p>Cancellation reason codes and possible error messages:</p>
 *          <ul>
 *             <li>
 *                <p>No Errors:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>None</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: <code>null</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Conditional Check Failed:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ConditionalCheckFailed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: The conditional request failed. </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Item Collection Size Limit Exceeded:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ItemCollectionSizeLimitExceeded</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: Collection size exceeded.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Transaction Conflict:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>TransactionConflict</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Message: Transaction is ongoing for the item.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Provisioned Throughput Exceeded:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ProvisionedThroughputExceeded</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages:</p>
 *                      <ul>
 *                         <li>
 *                            <p>The level of configured provisioned throughput for the
 *                                     table was exceeded. Consider increasing your provisioning level
 *                                     with the UpdateTable API.</p>
 *                            <note>
 *                               <p>This Message is received when provisioned throughput is
 *                                         exceeded is on a provisioned DynamoDB
 *                                         table.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>The level of configured provisioned throughput for one or
 *                                     more global secondary indexes of the table was exceeded.
 *                                     Consider increasing your provisioning level for the
 *                                     under-provisioned global secondary indexes with the UpdateTable
 *                                     API.</p>
 *                            <note>
 *                               <p>This message is returned when provisioned throughput is
 *                                         exceeded is on a provisioned GSI.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Throttling Error:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ThrottlingError</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                      <ul>
 *                         <li>
 *                            <p>Throughput exceeds the current capacity of your table or
 *                                     index. DynamoDB is automatically scaling your table or
 *                                     index so please try again shortly. If exceptions persist, check
 *                                     if you have a hot key:
 *                                     https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html.</p>
 *                            <note>
 *                               <p>This message is returned when writes get throttled on an
 *                                         On-Demand table as DynamoDB is automatically
 *                                         scaling the table.</p>
 *                            </note>
 *                         </li>
 *                         <li>
 *                            <p>Throughput exceeds the current capacity for one or more
 *                                     global secondary indexes. DynamoDB is automatically
 *                                     scaling your index so please try again shortly.</p>
 *                            <note>
 *                               <p>This message is returned when writes get throttled on
 *                                         an On-Demand GSI as DynamoDB is automatically
 *                                         scaling the GSI.</p>
 *                            </note>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Validation Error:</p>
 *                <ul>
 *                   <li>
 *                      <p>Code: <code>ValidationError</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Messages: </p>
 *                      <ul>
 *                         <li>
 *                            <p>One or more parameter values were invalid.</p>
 *                         </li>
 *                         <li>
 *                            <p>The update expression attempted to update the secondary
 *                                     index key beyond allowed size limits.</p>
 *                         </li>
 *                         <li>
 *                            <p>The update expression attempted to update the secondary
 *                                     index key to unsupported type.</p>
 *                         </li>
 *                         <li>
 *                            <p>An operand in the update expression has an incorrect data
 *                                     type.</p>
 *                         </li>
 *                         <li>
 *                            <p>Item size to update has exceeded the maximum allowed
 *                                     size.</p>
 *                         </li>
 *                         <li>
 *                            <p>Number overflow. Attempting to store a number with
 *                                     magnitude larger than supported range.</p>
 *                         </li>
 *                         <li>
 *                            <p>Type mismatch for attribute to update.</p>
 *                         </li>
 *                         <li>
 *                            <p>Nesting Levels have exceeded supported limits.</p>
 *                         </li>
 *                         <li>
 *                            <p>The document path provided in the update expression is
 *                                     invalid for update.</p>
 *                         </li>
 *                         <li>
 *                            <p>The provided expression refers to an attribute that does
 *                                     not exist in the item.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>The transaction with the given request token is already in progress.</p>
 *          <p>
 *             Recommended Settings
 *         </p>
 *          <note>
 *             <p>
 *                 This is a general recommendation for handling the <code>TransactionInProgressException</code>. These settings help
 *                 ensure that the client retries will trigger completion of the ongoing <code>TransactWriteItems</code> request.
 *             </p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>
 *                     Set <code>clientExecutionTimeout</code> to a value that allows at least one retry to be processed after 5
 *                     seconds have elapsed since the first attempt for the <code>TransactWriteItems</code> operation.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                     Set <code>socketTimeout</code> to a value a little lower than the <code>requestTimeout</code> setting.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>requestTimeout</code> should be set based on the time taken for the individual retries of a single
 *                     HTTP request for your use case, but setting it to 1 second or higher should work well to reduce chances of
 *                     retries and <code>TransactionInProgressException</code> errors.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>
 *                     Use exponential backoff when retrying and tune backoff if needed.
 *                 </p>
 *             </li>
 *          </ul>
 *          <p>
 *             Assuming <a href="https://github.com/aws/aws-sdk-java/blob/fd409dee8ae23fb8953e0bb4dbde65536a7e0514/aws-java-sdk-core/src/main/java/com/amazonaws/retry/PredefinedRetryPolicies.java#L97">default retry policy</a>,
 *             example timeout settings based on the guidelines above are as follows:
 *         </p>
 *          <p>Example timeline:</p>
 *          <ul>
 *             <li>
 *                <p>0-1000 first attempt</p>
 *             </li>
 *             <li>
 *                <p>1000-1500 first sleep/delay (default retry policy uses 500 ms as base delay for 4xx errors)</p>
 *             </li>
 *             <li>
 *                <p>1500-2500 second attempt</p>
 *             </li>
 *             <li>
 *                <p>2500-3500 second sleep/delay (500 * 2, exponential backoff)</p>
 *             </li>
 *             <li>
 *                <p>3500-4500 third attempt</p>
 *             </li>
 *             <li>
 *                <p>4500-6500 third sleep/delay (500 * 2^2)</p>
 *             </li>
 *             <li>
 *                <p>6500-7500 fourth attempt (this can trigger inline recovery since 5 seconds have elapsed since the first attempt reached TC)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class ExecuteTransactionCommand extends $Command
  .classBuilder<
    ExecuteTransactionCommandInput,
    ExecuteTransactionCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "ExecuteTransaction", {})
  .n("DynamoDBClient", "ExecuteTransactionCommand")
  .f(void 0, void 0)
  .ser(se_ExecuteTransactionCommand)
  .de(de_ExecuteTransactionCommand)
  .build() {}
