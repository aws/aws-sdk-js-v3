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
import { BatchGetItemInput, BatchGetItemOutput } from "../models/models_0";
import {
  deserializeAws_json1_0BatchGetItemCommand,
  serializeAws_json1_0BatchGetItemCommand,
} from "../protocols/Aws_json1_0";

export interface BatchGetItemCommandInput extends BatchGetItemInput {}
export interface BatchGetItemCommandOutput extends BatchGetItemOutput, __MetadataBearer {}

/**
 * <p>The <code>BatchGetItem</code> operation returns the attributes of one or more items from one or
 *       more tables. You identify requested items by primary key.</p>
 *          <p>A single operation can retrieve up to 16 MB of data, which can contain as many as 100
 *             items. <code>BatchGetItem</code> returns a partial result if the response size limit is
 *             exceeded, the table's provisioned throughput is exceeded, or an internal processing
 *             failure occurs. If a partial result is returned, the operation returns a value for
 *                 <code>UnprocessedKeys</code>. You can use this value to retry the operation starting
 *             with the next item to get.</p>
 *          <important>
 *             <p>If you request more than 100 items, <code>BatchGetItem</code> returns a
 *                     <code>ValidationException</code> with the message "Too many items requested for
 *                 the BatchGetItem call."</p>
 *          </important>
 *          <p>For example, if you ask to retrieve 100 items, but each individual item is 300 KB in
 *             size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns
 *             an appropriate <code>UnprocessedKeys</code> value so you can get the next page of
 *             results. If desired, your application can include its own logic to assemble the pages of
 *             results into one dataset.</p>
 *          <p>If <i>none</i> of the items can be processed due to insufficient
 *             provisioned throughput on all of the tables in the request, then
 *                 <code>BatchGetItem</code> returns a
 *                 <code>ProvisionedThroughputExceededException</code>. If <i>at least
 *                 one</i> of the items is successfully processed, then
 *                 <code>BatchGetItem</code> completes successfully, while returning the keys of the
 *             unread items in <code>UnprocessedKeys</code>.</p>
 *          <important>
 *             <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on those
 *         items. However, <i>we strongly recommend that you use an exponential backoff algorithm</i>.
 *         If you retry the batch operation immediately, the underlying read or write requests can
 *         still fail due to throttling on the individual tables. If you delay the batch operation
 *         using exponential backoff, the individual requests in the batch are much more likely to
 *         succeed.</p>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations">Batch
 *           Operations and Error Handling</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 *          </important>
 *          <p>By default, <code>BatchGetItem</code> performs eventually consistent reads on every table in the
 *       request. If you want strongly consistent reads instead, you can set <code>ConsistentRead</code> to
 *         <code>true</code> for any or all tables.</p>
 *          <p>In order to minimize response latency, <code>BatchGetItem</code> retrieves items in parallel.</p>
 *          <p>When designing your application, keep in mind that DynamoDB does not return items in any
 *       particular order. To help parse the response by item, include the primary key values for the
 *       items in your request in the <code>ProjectionExpression</code> parameter.</p>
 *          <p>If a requested item does not exist, it is not returned in the result. Requests for
 *             nonexistent items consume the minimum read capacity units according to the type of read.
 *             For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations">Working with Tables</a> in the <i>Amazon DynamoDB Developer
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, BatchGetItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new BatchGetItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetItemCommandInput} for command's `input` shape.
 * @see {@link BatchGetItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchGetItemCommand extends $Command<
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetItemCommandInput) {
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
  ): Handler<BatchGetItemCommandInput, BatchGetItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "BatchGetItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetItemInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetItemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0BatchGetItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetItemCommandOutput> {
    return deserializeAws_json1_0BatchGetItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
