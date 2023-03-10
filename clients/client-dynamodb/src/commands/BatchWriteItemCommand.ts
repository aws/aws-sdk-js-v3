// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
import {
  BatchWriteItemInput,
  BatchWriteItemInputFilterSensitiveLog,
  BatchWriteItemOutput,
  BatchWriteItemOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0BatchWriteItemCommand,
  serializeAws_json1_0BatchWriteItemCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link BatchWriteItemCommand}.
 */
export interface BatchWriteItemCommandInput extends BatchWriteItemInput {}
/**
 * The output of {@link BatchWriteItemCommand}.
 */
export interface BatchWriteItemCommandOutput extends BatchWriteItemOutput, __MetadataBearer {}

/**
 * <p>The <code>BatchWriteItem</code> operation puts or deletes multiple items in one or
 *             more tables. A single call to <code>BatchWriteItem</code> can transmit up to 16MB of
 *             data over the network, consisting of up to 25 item put or delete operations. While
 *             individual items can be up to 400 KB once stored, it's important to note that an item's
 *             representation might be greater than 400KB while being sent in DynamoDB's JSON format
 *             for the API call. For more details on this distinction, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html">Naming Rules and Data Types</a>.</p>
 *          <note>
 *             <p>
 *                <code>BatchWriteItem</code> cannot update items. If you perform a <code>BatchWriteItem</code>
 *                 operation on an existing item, that item's values will be overwritten by the
 *                 operation and it will appear like it was updated. To update items, we recommend you
 *                 use the <code>UpdateItem</code> action.</p>
 *          </note>
 *          <p>The individual <code>PutItem</code> and <code>DeleteItem</code> operations specified
 *             in <code>BatchWriteItem</code> are atomic; however <code>BatchWriteItem</code> as a
 *             whole is not. If any requested operations fail because the table's provisioned
 *             throughput is exceeded or an internal processing failure occurs, the failed operations
 *             are returned in the <code>UnprocessedItems</code> response parameter. You can
 *             investigate and optionally resend the requests. Typically, you would call
 *                 <code>BatchWriteItem</code> in a loop. Each iteration would check for unprocessed
 *             items and submit a new <code>BatchWriteItem</code> request with those unprocessed items
 *             until all items have been processed.</p>
 *          <p>If <i>none</i> of the items can be processed due to insufficient
 *             provisioned throughput on all of the tables in the request, then
 *                 <code>BatchWriteItem</code> returns a
 *                 <code>ProvisionedThroughputExceededException</code>.</p>
 *          <important>
 *             <p>If DynamoDB returns any unprocessed items, you should retry the batch operation on
 *                 those items. However, <i>we strongly recommend that you use an exponential
 *                     backoff algorithm</i>. If you retry the batch operation immediately, the
 *                 underlying read or write requests can still fail due to throttling on the individual
 *                 tables. If you delay the batch operation using exponential backoff, the individual
 *                 requests in the batch are much more likely to succeed.</p>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#Programming.Errors.BatchOperations">Batch Operations and Error Handling</a> in the <i>Amazon DynamoDB
 *                     Developer Guide</i>.</p>
 *          </important>
 *          <p>With <code>BatchWriteItem</code>, you can efficiently write or delete large amounts of
 *             data, such as from Amazon EMR, or copy data from another database into DynamoDB. In
 *             order to improve performance with these large-scale operations,
 *                 <code>BatchWriteItem</code> does not behave in the same way as individual
 *                 <code>PutItem</code> and <code>DeleteItem</code> calls would. For example, you
 *             cannot specify conditions on individual put and delete requests, and
 *                 <code>BatchWriteItem</code> does not return deleted items in the response.</p>
 *          <p>If you use a programming language that supports concurrency, you can use threads to
 *             write items in parallel. Your application must include the necessary logic to manage the
 *             threads. With languages that don't support threading, you must update or delete the
 *             specified items one at a time. In both situations, <code>BatchWriteItem</code> performs
 *             the specified put and delete operations in parallel, giving you the power of the thread
 *             pool approach without having to introduce complexity into your application.</p>
 *          <p>Parallel processing reduces latency, but each specified put and delete request
 *             consumes the same number of write capacity units whether it is processed in parallel or
 *             not. Delete operations on nonexistent items consume one write capacity unit.</p>
 *          <p>If one or more of the following is true, DynamoDB rejects the entire batch write
 *             operation:</p>
 *          <ul>
 *             <li>
 *                <p>One or more tables specified in the <code>BatchWriteItem</code> request does
 *                     not exist.</p>
 *             </li>
 *             <li>
 *                <p>Primary key attributes specified on an item in the request do not match those
 *                     in the corresponding table's primary key schema.</p>
 *             </li>
 *             <li>
 *                <p>You try to perform multiple operations on the same item in the same
 *                         <code>BatchWriteItem</code> request. For example, you cannot put and delete
 *                     the same item in the same <code>BatchWriteItem</code> request. </p>
 *             </li>
 *             <li>
 *                <p> Your request contains at least two items with identical hash and range keys
 *                     (which essentially is two put operations). </p>
 *             </li>
 *             <li>
 *                <p>There are more than 25 requests in the batch.</p>
 *             </li>
 *             <li>
 *                <p>Any individual item in a batch exceeds 400 KB.</p>
 *             </li>
 *             <li>
 *                <p>The total request size exceeds 16 MB.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, BatchWriteItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new BatchWriteItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchWriteItemCommandInput} for command's `input` shape.
 * @see {@link BatchWriteItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @example To add multiple items to a table
 * ```javascript
 * // This example adds three new items to the Music table using a batch of three PutItem requests.
 * const input = {
 *   "RequestItems": {
 *     "Music": [
 *       {
 *         "PutRequest": {
 *           "Item": {
 *             "AlbumTitle": {
 *               "S": "Somewhat Famous"
 *             },
 *             "Artist": {
 *               "S": "No One You Know"
 *             },
 *             "SongTitle": {
 *               "S": "Call Me Today"
 *             }
 *           }
 *         }
 *       },
 *       {
 *         "PutRequest": {
 *           "Item": {
 *             "AlbumTitle": {
 *               "S": "Songs About Life"
 *             },
 *             "Artist": {
 *               "S": "Acme Band"
 *             },
 *             "SongTitle": {
 *               "S": "Happy Day"
 *             }
 *           }
 *         }
 *       },
 *       {
 *         "PutRequest": {
 *           "Item": {
 *             "AlbumTitle": {
 *               "S": "Blue Sky Blues"
 *             },
 *             "Artist": {
 *               "S": "No One You Know"
 *             },
 *             "SongTitle": {
 *               "S": "Scared of My Shadow"
 *             }
 *           }
 *         }
 *       }
 *     ]
 *   }
 * };
 * const command = new BatchWriteItemCommand(input);
 * await client.send(command);
 * // example id: to-add-multiple-items-to-a-table-1476118519747
 * ```
 *
 */
export class BatchWriteItemCommand extends $Command<
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput,
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

  constructor(readonly input: BatchWriteItemCommandInput) {
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
  ): Handler<BatchWriteItemCommandInput, BatchWriteItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchWriteItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "BatchWriteItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchWriteItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchWriteItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchWriteItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0BatchWriteItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchWriteItemCommandOutput> {
    return deserializeAws_json1_0BatchWriteItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
