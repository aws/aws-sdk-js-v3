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
  SetSMSAttributesInput,
  SetSMSAttributesInputFilterSensitiveLog,
  SetSMSAttributesResponse,
  SetSMSAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_querySetSMSAttributesCommand,
  serializeAws_querySetSMSAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface SetSMSAttributesCommandInput extends SetSMSAttributesInput {}
export interface SetSMSAttributesCommandOutput extends SetSMSAttributesResponse, __MetadataBearer {}

/**
 * <p>Use this request to set the default settings for sending SMS messages and receiving
 *             daily SMS usage reports.</p>
 *         <p>You can override some of these settings for a single message when you use the
 *                 <code>Publish</code> action with the <code>MessageAttributes.entry.N</code>
 *             parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a>
 *             in the <i>Amazon SNS Developer Guide</i>.</p>
 *         <note>
 *             <p>To use this operation, you must grant the Amazon SNS service principal
 *                     (<code>sns.amazonaws.com</code>) permission to perform the
 *                     <code>s3:ListBucket</code> action. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSMSAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class SetSMSAttributesCommand extends $Command<
  SetSMSAttributesCommandInput,
  SetSMSAttributesCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: SetSMSAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetSMSAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SetSMSAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSMSAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: SetSMSAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSMSAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSMSAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSMSAttributesCommandOutput> {
    return deserializeAws_querySetSMSAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
