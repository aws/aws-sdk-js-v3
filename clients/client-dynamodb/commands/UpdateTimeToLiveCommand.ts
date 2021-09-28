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
import { UpdateTimeToLiveInput, UpdateTimeToLiveOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateTimeToLiveCommand,
  serializeAws_json1_0UpdateTimeToLiveCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateTimeToLiveCommandInput extends UpdateTimeToLiveInput {}
export interface UpdateTimeToLiveCommandOutput extends UpdateTimeToLiveOutput, __MetadataBearer {}

/**
 * <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the
 *             specified table. A successful <code>UpdateTimeToLive</code> call returns the current
 *                 <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to
 *             fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table
 *             during this one hour duration result in a <code>ValidationException</code>. </p>
 *          <p>TTL compares the current time in epoch time format to the time stored in the TTL
 *             attribute of an item. If the epoch time value stored in the attribute is less than the
 *             current time, the item is marked as expired and subsequently deleted.</p>
 *         <note>
 *             <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1,
 *                 1970 UTC. </p>
 *         </note>
 *         <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of
 *             throughput for other data operations.
 *         </p>
 *             <important>
 *                 <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration
 *                 within which an item gets deleted after expiration is specific to the
 *                 nature of the workload. Items that have expired and not been deleted will still show up in reads,
 *                     queries, and scans.</p>
 *             </important>
 *         <p>As items are deleted, they are removed from any local secondary index and global
 *             secondary index immediately in the same eventually consistent way as a standard delete
 *             operation.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTimeToLiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTimeToLiveCommandInput} for command's `input` shape.
 * @see {@link UpdateTimeToLiveCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTimeToLiveCommand extends $Command<
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTimeToLiveCommandInput) {
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
  ): Handler<UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateTimeToLiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTimeToLiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTimeToLiveOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTimeToLiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateTimeToLiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTimeToLiveCommandOutput> {
    return deserializeAws_json1_0UpdateTimeToLiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
