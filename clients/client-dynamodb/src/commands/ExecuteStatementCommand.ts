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
import { ExecuteStatementInput, ExecuteStatementOutput } from "../models/models_0";
import { de_ExecuteStatementCommand, se_ExecuteStatementCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandInput extends ExecuteStatementInput {}
/**
 * @public
 *
 * The output of {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandOutput extends ExecuteStatementOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation allows you to perform reads and singleton writes on data stored in
 *             DynamoDB, using PartiQL.</p>
 *          <p>For PartiQL reads (<code>SELECT</code> statement), if the total number of processed
 *             items exceeds the maximum dataset size limit of 1 MB, the read stops and results are
 *             returned to the user as a <code>LastEvaluatedKey</code> value to continue the read in a
 *             subsequent operation. If the filter criteria in <code>WHERE</code> clause does not match
 *             any data, the read will return an empty result set.</p>
 *          <p>A single <code>SELECT</code> statement response can return up to the maximum number of
 *             items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any
 *             filtering to the results using <code>WHERE</code> clause). If
 *                 <code>LastEvaluatedKey</code> is present in the response, you need to paginate the
 *             result set. If <code>NextToken</code> is present, you need to paginate the result set and include
 *             <code>NextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteStatementCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteStatementCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ExecuteStatementInput
 *   Statement: "STRING_VALUE", // required
 *   Parameters: [ // PreparedStatementParameters
 *     { // AttributeValue Union: only one key present
 *       S: "STRING_VALUE",
 *       N: "STRING_VALUE",
 *       B: "BLOB_VALUE",
 *       SS: [ // StringSetAttributeValue
 *         "STRING_VALUE",
 *       ],
 *       NS: [ // NumberSetAttributeValue
 *         "STRING_VALUE",
 *       ],
 *       BS: [ // BinarySetAttributeValue
 *         "BLOB_VALUE",
 *       ],
 *       M: { // MapAttributeValue
 *         "<keys>": {//  Union: only one key present
 *           S: "STRING_VALUE",
 *           N: "STRING_VALUE",
 *           B: "BLOB_VALUE",
 *           SS: [
 *             "STRING_VALUE",
 *           ],
 *           NS: [
 *             "STRING_VALUE",
 *           ],
 *           BS: [
 *             "BLOB_VALUE",
 *           ],
 *           M: {
 *             "<keys>": "<AttributeValue>",
 *           },
 *           L: [ // ListAttributeValue
 *             "<AttributeValue>",
 *           ],
 *           NULL: true || false,
 *           BOOL: true || false,
 *         },
 *       },
 *       L: [
 *         "<AttributeValue>",
 *       ],
 *       NULL: true || false,
 *       BOOL: true || false,
 *     },
 *   ],
 *   ConsistentRead: true || false,
 *   NextToken: "STRING_VALUE",
 *   ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
 *   Limit: Number("int"),
 *   ReturnValuesOnConditionCheckFailure: "ALL_OLD" || "NONE",
 * };
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteStatementOutput
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
 * //   NextToken: "STRING_VALUE",
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
 * //   LastEvaluatedKey: { // Key
 * //     "<keys>": "<AttributeValue>",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExecuteStatementCommandInput - {@link ExecuteStatementCommandInput}
 * @returns {@link ExecuteStatementCommandOutput}
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link ConditionalCheckFailedException} (client fault)
 *  <p>A condition specified in the operation could not be evaluated.</p>
 *
 * @throws {@link DuplicateItemException} (client fault)
 *  <p> There was an attempt to insert an item with the same primary key as an item that
 *             already exists in the DynamoDB table.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ItemCollectionSizeLimitExceededException} (client fault)
 *  <p>An item collection is too large. This exception is only returned for tables that
 *             have one or more local secondary indexes.</p>
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
 * @throws {@link TransactionConflictException} (client fault)
 *  <p>Operation was rejected because there is an ongoing transaction for the
 *             item.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  DynamoDBClientResolvedConfig
> {
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
  constructor(readonly input: ExecuteStatementCommandInput) {
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
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ExecuteStatementCommand";
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
  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return de_ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
