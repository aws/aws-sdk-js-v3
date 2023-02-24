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

import { DeleteQueueRequest, DeleteQueueRequestFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_queryDeleteQueueCommand, serializeAws_queryDeleteQueueCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface DeleteQueueCommandInput extends DeleteQueueRequest {}
export interface DeleteQueueCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p>
 *          <important>
 *             <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available.
 *       </p>
 *          </important>
 *          <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a
 *           <code>
 *                <a>SendMessage</a>
 *             </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p>
 *          <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class DeleteQueueCommand extends $Command<
  DeleteQueueCommandInput,
  DeleteQueueCommandOutput,
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

  constructor(readonly input: DeleteQueueCommandInput) {
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
  ): Handler<DeleteQueueCommandInput, DeleteQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteQueueCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "DeleteQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQueueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQueueCommandOutput> {
    return deserializeAws_queryDeleteQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
