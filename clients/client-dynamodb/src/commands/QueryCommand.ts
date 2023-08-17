// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { QueryInput, QueryOutput } from "../models/models_0";
import { de_QueryCommand, se_QueryCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryCommand}.
 */
export interface QueryCommandInput extends QueryInput {}
/**
 * @public
 *
 * The output of {@link QueryCommand}.
 */
export interface QueryCommandOutput extends QueryOutput, __MetadataBearer {}

/**
 * @public
 * <p>You must provide the name of the partition key attribute and a single value for that
 *             attribute. <code>Query</code> returns all items with that partition key value.
 *             Optionally, you can provide a sort key attribute and use a comparison operator to refine
 *             the search results.</p>
 *          <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value for
 *             the partition key. The <code>Query</code> operation will return all of the items from
 *             the table or index with that partition key value. You can optionally narrow the scope of
 *             the <code>Query</code> operation by specifying a sort key value and a comparison
 *             operator in <code>KeyConditionExpression</code>. To further refine the
 *                 <code>Query</code> results, you can optionally provide a
 *                 <code>FilterExpression</code>. A <code>FilterExpression</code> determines which
 *             items within the results should be returned to you. All of the other results are
 *             discarded. </p>
 *          <p> A <code>Query</code> operation always returns a result set. If no matching items are
 *             found, the result set will be empty. Queries that do not return results consume the
 *             minimum number of read capacity units for that type of read operation. </p>
 *          <note>
 *             <p> DynamoDB calculates the number of read capacity units consumed based on item
 *                 size, not on the amount of data that is returned to an application. The number of
 *                 capacity units consumed will be the same whether you request all of the attributes
 *                 (the default behavior) or just some of them (using a projection expression). The
 *                 number will also be the same whether or not you use a <code>FilterExpression</code>.
 *             </p>
 *          </note>
 *          <p>
 *             <code>Query</code> results are always sorted by the sort key value. If the data type of
 *             the sort key is Number, the results are returned in numeric order; otherwise, the
 *             results are returned in order of UTF-8 bytes. By default, the sort order is ascending.
 *             To reverse the order, set the <code>ScanIndexForward</code> parameter to false. </p>
 *          <p> A single <code>Query</code> operation will read up to the maximum number of items set
 *             (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply
 *             any filtering to the results using <code>FilterExpression</code>. If
 *                 <code>LastEvaluatedKey</code> is present in the response, you will need to paginate
 *             the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating
 *                 the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
 *          <p>
 *             <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before
 *             the results are returned. A <code>FilterExpression</code> cannot contain partition key
 *             or sort key attributes. You need to specify those attributes in the
 *                 <code>KeyConditionExpression</code>. </p>
 *          <note>
 *             <p> A <code>Query</code> operation can return an empty result set and a
 *                     <code>LastEvaluatedKey</code> if all the items read for the page of results are
 *                 filtered out. </p>
 *          </note>
 *          <p>You can query a table, a local secondary index, or a global secondary index. For a
 *             query on a table or on a local secondary index, you can set the
 *                 <code>ConsistentRead</code> parameter to <code>true</code> and obtain a strongly
 *             consistent result. Global secondary indexes support eventually consistent reads only, so
 *             do not specify <code>ConsistentRead</code> when querying a global secondary
 *             index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // QueryInput
 *   TableName: "STRING_VALUE", // required
 *   IndexName: "STRING_VALUE",
 *   Select: "ALL_ATTRIBUTES" || "ALL_PROJECTED_ATTRIBUTES" || "SPECIFIC_ATTRIBUTES" || "COUNT",
 *   AttributesToGet: [ // AttributeNameList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   ConsistentRead: true || false,
 *   KeyConditions: { // KeyConditions
 *     "<keys>": { // Condition
 *       AttributeValueList: [ // AttributeValueList
 *         { // AttributeValue Union: only one key present
 *           S: "STRING_VALUE",
 *           N: "STRING_VALUE",
 *           B: "BLOB_VALUE",
 *           SS: [ // StringSetAttributeValue
 *             "STRING_VALUE",
 *           ],
 *           NS: [ // NumberSetAttributeValue
 *             "STRING_VALUE",
 *           ],
 *           BS: [ // BinarySetAttributeValue
 *             "BLOB_VALUE",
 *           ],
 *           M: { // MapAttributeValue
 *             "<keys>": {//  Union: only one key present
 *               S: "STRING_VALUE",
 *               N: "STRING_VALUE",
 *               B: "BLOB_VALUE",
 *               SS: [
 *                 "STRING_VALUE",
 *               ],
 *               NS: [
 *                 "STRING_VALUE",
 *               ],
 *               BS: [
 *                 "BLOB_VALUE",
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
 *       ComparisonOperator: "EQ" || "NE" || "IN" || "LE" || "LT" || "GE" || "GT" || "BETWEEN" || "NOT_NULL" || "NULL" || "CONTAINS" || "NOT_CONTAINS" || "BEGINS_WITH", // required
 *     },
 *   },
 *   QueryFilter: { // FilterConditionMap
 *     "<keys>": {
 *       AttributeValueList: [
 *         "<AttributeValue>",
 *       ],
 *       ComparisonOperator: "EQ" || "NE" || "IN" || "LE" || "LT" || "GE" || "GT" || "BETWEEN" || "NOT_NULL" || "NULL" || "CONTAINS" || "NOT_CONTAINS" || "BEGINS_WITH", // required
 *     },
 *   },
 *   ConditionalOperator: "AND" || "OR",
 *   ScanIndexForward: true || false,
 *   ExclusiveStartKey: { // Key
 *     "<keys>": "<AttributeValue>",
 *   },
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 *   ProjectionExpression: "STRING_VALUE",
 *   FilterExpression: "STRING_VALUE",
 *   KeyConditionExpression: "STRING_VALUE",
 *   ExpressionAttributeNames: { // ExpressionAttributeNameMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ExpressionAttributeValues: { // ExpressionAttributeValueMap
 *     "<keys>": "<AttributeValue>",
 *   },
 * };
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * // { // QueryOutput
 * //   Items: [ // ItemList
 * //     { // AttributeMap
 * //       "<keys>": { // AttributeValue Union: only one key present
 * //         S: "STRING_VALUE",
 * //         N: "STRING_VALUE",
 * //         B: "BLOB_VALUE",
 * //         SS: [ // StringSetAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //         NS: [ // NumberSetAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //         BS: [ // BinarySetAttributeValue
 * //           "BLOB_VALUE",
 * //         ],
 * //         M: { // MapAttributeValue
 * //           "<keys>": {//  Union: only one key present
 * //             S: "STRING_VALUE",
 * //             N: "STRING_VALUE",
 * //             B: "BLOB_VALUE",
 * //             SS: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NS: [
 * //               "STRING_VALUE",
 * //             ],
 * //             BS: [
 * //               "BLOB_VALUE",
 * //             ],
 * //             M: {
 * //               "<keys>": "<AttributeValue>",
 * //             },
 * //             L: [ // ListAttributeValue
 * //               "<AttributeValue>",
 * //             ],
 * //             NULL: true || false,
 * //             BOOL: true || false,
 * //           },
 * //         },
 * //         L: [
 * //           "<AttributeValue>",
 * //         ],
 * //         NULL: true || false,
 * //         BOOL: true || false,
 * //       },
 * //     },
 * //   ],
 * //   Count: Number("int"),
 * //   ScannedCount: Number("int"),
 * //   LastEvaluatedKey: { // Key
 * //     "<keys>": "<AttributeValue>",
 * //   },
 * //   ConsumedCapacity: { // ConsumedCapacity
 * //     TableName: "STRING_VALUE",
 * //     CapacityUnits: Number("double"),
 * //     ReadCapacityUnits: Number("double"),
 * //     WriteCapacityUnits: Number("double"),
 * //     Table: { // Capacity
 * //       ReadCapacityUnits: Number("double"),
 * //       WriteCapacityUnits: Number("double"),
 * //       CapacityUnits: Number("double"),
 * //     },
 * //     LocalSecondaryIndexes: { // SecondaryIndexesCapacityMap
 * //       "<keys>": {
 * //         ReadCapacityUnits: Number("double"),
 * //         WriteCapacityUnits: Number("double"),
 * //         CapacityUnits: Number("double"),
 * //       },
 * //     },
 * //     GlobalSecondaryIndexes: {
 * //       "<keys>": {
 * //         ReadCapacityUnits: Number("double"),
 * //         WriteCapacityUnits: Number("double"),
 * //         CapacityUnits: Number("double"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param QueryCommandInput - {@link QueryCommandInput}
 * @returns {@link QueryCommandOutput}
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
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
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @example To query an item
 * ```javascript
 * // This example queries items in the Music table. The table has a partition key and sort key (Artist and SongTitle), but this query only specifies the partition key value. It returns song titles by the artist named "No One You Know".
 * const input = {
 *   "ExpressionAttributeValues": {
 *     ":v1": {
 *       "S": "No One You Know"
 *     }
 *   },
 *   "KeyConditionExpression": "Artist = :v1",
 *   "ProjectionExpression": "SongTitle",
 *   "TableName": "Music"
 * };
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ConsumedCapacity": {},
 *   "Count": 2,
 *   "Items": [
 *     {
 *       "SongTitle": {
 *         "S": "Call Me Today"
 *       }
 *     }
 *   ],
 *   "ScannedCount": 2
 * }
 * *\/
 * // example id: to-query-an-item-1475883874631
 * ```
 *
 */
export class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, DynamoDBClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: QueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "QueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> {
    return de_QueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
