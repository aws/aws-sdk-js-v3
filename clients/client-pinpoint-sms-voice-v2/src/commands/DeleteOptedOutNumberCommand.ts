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
  DeleteOptedOutNumberRequest,
  DeleteOptedOutNumberRequestFilterSensitiveLog,
  DeleteOptedOutNumberResult,
  DeleteOptedOutNumberResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DeleteOptedOutNumberCommand,
  serializeAws_json1_0DeleteOptedOutNumberCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteOptedOutNumberCommandInput extends DeleteOptedOutNumberRequest {}
export interface DeleteOptedOutNumberCommandOutput extends DeleteOptedOutNumberResult, __MetadataBearer {}

/**
 * <p>Deletes an existing opted out destination phone number from the specified opt-out
 *             list.</p>
 *         <p>Each destination phone number can only be deleted once every 30 days.</p>
 *         <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't
 *             exist, an Error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteOptedOutNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteOptedOutNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DeleteOptedOutNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOptedOutNumberCommandInput} for command's `input` shape.
 * @see {@link DeleteOptedOutNumberCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DeleteOptedOutNumberCommand extends $Command<
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
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

  constructor(readonly input: DeleteOptedOutNumberCommandInput) {
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
  ): Handler<DeleteOptedOutNumberCommandInput, DeleteOptedOutNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteOptedOutNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DeleteOptedOutNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOptedOutNumberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteOptedOutNumberResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOptedOutNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteOptedOutNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOptedOutNumberCommandOutput> {
    return deserializeAws_json1_0DeleteOptedOutNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
