// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { SendVoiceMessageRequest, SendVoiceMessageResponse } from "../models/models_0";
import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import { de_SendVoiceMessageCommand, se_SendVoiceMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendVoiceMessageCommand}.
 */
export interface SendVoiceMessageCommandInput extends SendVoiceMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendVoiceMessageCommand}.
 */
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResponse, __MetadataBearer {}

/**
 * @public
 * Create a new voice message and send it to a recipient's phone number.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const input = { // SendVoiceMessageRequest
 *   CallerId: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   Content: { // VoiceMessageContent
 *     CallInstructionsMessage: { // CallInstructionsMessageType
 *       Text: "STRING_VALUE",
 *     },
 *     PlainTextMessage: { // PlainTextMessageType
 *       LanguageCode: "STRING_VALUE",
 *       Text: "STRING_VALUE",
 *       VoiceId: "STRING_VALUE",
 *     },
 *     SSMLMessage: { // SSMLMessageType
 *       LanguageCode: "STRING_VALUE",
 *       Text: "STRING_VALUE",
 *       VoiceId: "STRING_VALUE",
 *     },
 *   },
 *   DestinationPhoneNumber: "STRING_VALUE",
 *   OriginationPhoneNumber: "STRING_VALUE",
 * };
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendVoiceMessageResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendVoiceMessageCommandInput - {@link SendVoiceMessageCommandInput}
 * @returns {@link SendVoiceMessageCommandOutput}
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for PinpointSMSVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The input you provided is invalid.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  You've issued too many requests to the resource. Wait a few minutes, and then try again.
 *
 * @throws {@link PinpointSMSVoiceServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoice service.</p>
 *
 */
export class SendVoiceMessageCommand extends $Command<
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput,
  PinpointSMSVoiceClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: SendVoiceMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendVoiceMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceClient";
    const commandName = "SendVoiceMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoice",
        operation: "SendVoiceMessage",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SendVoiceMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendVoiceMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendVoiceMessageCommandOutput> {
    return de_SendVoiceMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
