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

import { SetQueueAttributesRequest, SetQueueAttributesRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_querySetQueueAttributesCommand,
  serializeAws_querySetQueueAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

export interface SetQueueAttributesCommandInput extends SetQueueAttributesRequest {}
export interface SetQueueAttributesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system.
 *       Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
 *               </li>
 *                <li>
 *                   <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a user name</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *               </li>
 *                <li>
 *                   <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p>
 *               </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SetQueueAttributesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SetQueueAttributesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new SetQueueAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetQueueAttributesCommandInput} for command's `input` shape.
 * @see {@link SetQueueAttributesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 */
export class SetQueueAttributesCommand extends $Command<
  SetQueueAttributesCommandInput,
  SetQueueAttributesCommandOutput,
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

  constructor(readonly input: SetQueueAttributesCommandInput) {
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
  ): Handler<SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetQueueAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SQSClient";
    const commandName = "SetQueueAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetQueueAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetQueueAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetQueueAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetQueueAttributesCommandOutput> {
    return deserializeAws_querySetQueueAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
