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
  DeleteDefaultMessageTypeRequest,
  DeleteDefaultMessageTypeRequestFilterSensitiveLog,
  DeleteDefaultMessageTypeResult,
  DeleteDefaultMessageTypeResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DeleteDefaultMessageTypeCommand,
  serializeAws_json1_0DeleteDefaultMessageTypeCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteDefaultMessageTypeCommandInput extends DeleteDefaultMessageTypeRequest {}
export interface DeleteDefaultMessageTypeCommandOutput extends DeleteDefaultMessageTypeResult, __MetadataBearer {}

/**
 * <p>Deletes an existing default message type on a configuration set.</p>
 *         <p> A message type is a type of messages that you plan to send. If you send
 *             account-related messages or time-sensitive messages such as one-time passcodes, choose
 *                 <b>Transactional</b>. If you plan to send messages that
 *             contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services
 *             account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteDefaultMessageTypeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteDefaultMessageTypeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DeleteDefaultMessageTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDefaultMessageTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteDefaultMessageTypeCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DeleteDefaultMessageTypeCommand extends $Command<
  DeleteDefaultMessageTypeCommandInput,
  DeleteDefaultMessageTypeCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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

  constructor(readonly input: DeleteDefaultMessageTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDefaultMessageTypeCommandInput, DeleteDefaultMessageTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDefaultMessageTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DeleteDefaultMessageTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDefaultMessageTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDefaultMessageTypeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDefaultMessageTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteDefaultMessageTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDefaultMessageTypeCommandOutput> {
    return deserializeAws_json1_0DeleteDefaultMessageTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
