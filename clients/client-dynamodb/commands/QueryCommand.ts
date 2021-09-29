import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { QueryInput, QueryOutput } from "../models/models_0";
import { deserializeAws_json1_0QueryCommand, serializeAws_json1_0QueryCommand } from "../protocols/Aws_json1_0";

export interface QueryCommandInput extends QueryInput {}
export interface QueryCommandOutput extends QueryOutput, __MetadataBearer {}

/**
 * <p>The <code>Query</code> operation finds items based on primary key values.
 *             You can query any table or secondary index that has a composite primary key (a partition
 *             key and a sort key).
 *         </p>
 *         <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value
 *             for the partition key. The <code>Query</code> operation will return all of the items
 *             from the table or index with that partition key value. You can optionally narrow the
 *             scope of the <code>Query</code> operation by specifying a sort key value and a
 *             comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results,
 *             you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items
 *             within the results should be returned to you. All of the other results are discarded.
 *         </p>
 *         <p>
 *             A <code>Query</code> operation always returns a result set. If no matching items are found,
 *             the result set will be empty. Queries that do not return results consume the minimum number of
 *             read capacity units for that type of read operation.
 *         </p>
 *         <note>
 *             <p>
 *                 DynamoDB calculates the number of read capacity units consumed based on item size,
 *                 not on the amount of data that is returned to an application. The number of capacity
 *                 units consumed will be the same whether you request all of the attributes (the default behavior)
 *                 or just some of them (using a projection expression). The number will also be the same
 *                 whether or not you use a <code>FilterExpression</code>.
 *             </p>
 *         </note>
 *         <p>
 *             <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number,
 *             the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes.
 *             By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter
 *             to false.
 *         </p>
 *         <p> A single <code>Query</code> operation will read up to the maximum number of items
 *             set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then
 *             apply any filtering to the results using <code>FilterExpression</code>. If
 *                 <code>LastEvaluatedKey</code> is present in the response, you will need to paginate
 *             the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating
 *                 the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
 *         <p>
 *             <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before
 *             the results are returned.
 *             A <code>FilterExpression</code> cannot contain partition key or sort key attributes.
 *             You need to specify those attributes in the <code>KeyConditionExpression</code>.
 *         </p>
 *         <note>
 *             <p>
 *                 A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code>
 *                 if all the items read for the page of results are filtered out.
 *             </p>
 *         </note>
 *         <p>You can query a table, a local secondary index, or a global secondary index. For a
 *             query on a table or on a local secondary index, you can set the
 *                 <code>ConsistentRead</code> parameter to <code>true</code> and obtain a
 *             strongly consistent result. Global secondary indexes support eventually consistent reads
 *             only, so do not specify <code>ConsistentRead</code> when querying a global
 *             secondary index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, DynamoDBClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "QueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: QueryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0QueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> {
    return deserializeAws_json1_0QueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
