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

import {
  GetQueueUrlRequest,
  GetQueueUrlRequestFilterSensitiveLog,
  GetQueueUrlResult,
  GetQueueUrlResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryGetQueueUrlCommand, serializeAws_queryGetQueueUrlCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface GetQueueUrlCommandInput extends GetQueueUrlRequest {}
export interface GetQueueUrlCommandOutput extends GetQueueUrlResult, __MetadataBearer {}

/**
 * <p>Returns the URL of an existing Amazon SQS queue.</p>
 *          <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue.
 *           For more information about shared queue access, see <code>
 *                <a>AddPermission</a>
 *             </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, GetQueueUrlCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, GetQueueUrlCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new GetQueueUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueueUrlCommandInput} for command's `input` shape.
 * @see {@link GetQueueUrlCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class GetQueueUrlCommand extends $Command<
  GetQueueUrlCommandInput,
  GetQueueUrlCommandOutput,
  SQSClientResolvedConfig
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

  constructor(readonly input: GetQueueUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueueUrlCommandInput, GetQueueUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetQueueUrlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "GetQueueUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQueueUrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetQueueUrlResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQueueUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetQueueUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueueUrlCommandOutput> {
    return deserializeAws_queryGetQueueUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
