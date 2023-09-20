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

import { SetDefaultMessageTypeRequest, SetDefaultMessageTypeResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_SetDefaultMessageTypeCommand, se_SetDefaultMessageTypeCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultMessageTypeCommand}.
 */
export interface SetDefaultMessageTypeCommandInput extends SetDefaultMessageTypeRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultMessageTypeCommand}.
 */
export interface SetDefaultMessageTypeCommandOutput extends SetDefaultMessageTypeResult, __MetadataBearer {}

/**
 * @public
 * <p>Sets the default message type on a configuration set.</p>
 *         <p>Choose the category of SMS messages that you plan to send from this account. If you
 *             send account-related messages or time-sensitive messages such as one-time passcodes,
 *             choose <b>Transactional</b>. If you plan to send messages that
 *             contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultMessageTypeCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultMessageTypeCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetDefaultMessageTypeRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   MessageType: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultMessageTypeCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultMessageTypeResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   MessageType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultMessageTypeCommandInput - {@link SetDefaultMessageTypeCommandInput}
 * @returns {@link SetDefaultMessageTypeCommandOutput}
 * @see {@link SetDefaultMessageTypeCommandInput} for command's `input` shape.
 * @see {@link SetDefaultMessageTypeCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 */
export class SetDefaultMessageTypeCommand extends $Command<
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: SetDefaultMessageTypeCommandInput) {
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
  ): Handler<SetDefaultMessageTypeCommandInput, SetDefaultMessageTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetDefaultMessageTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SetDefaultMessageTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "SetDefaultMessageType",
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
  private serialize(input: SetDefaultMessageTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetDefaultMessageTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDefaultMessageTypeCommandOutput> {
    return de_SetDefaultMessageTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
