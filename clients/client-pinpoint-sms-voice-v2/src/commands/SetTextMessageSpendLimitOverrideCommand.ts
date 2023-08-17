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
} from "@smithy/types";

import { SetTextMessageSpendLimitOverrideRequest, SetTextMessageSpendLimitOverrideResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_SetTextMessageSpendLimitOverrideCommand,
  se_SetTextMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetTextMessageSpendLimitOverrideCommand}.
 */
export interface SetTextMessageSpendLimitOverrideCommandInput extends SetTextMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetTextMessageSpendLimitOverrideCommand}.
 */
export interface SetTextMessageSpendLimitOverrideCommandOutput
  extends SetTextMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Sets an account level monthly spend limit override for sending text messages. The
 *             requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is
 *             set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetTextMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetTextMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetTextMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetTextMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetTextMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetTextMessageSpendLimitOverrideCommandInput - {@link SetTextMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetTextMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetTextMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetTextMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class SetTextMessageSpendLimitOverrideCommand extends $Command<
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
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
  constructor(readonly input: SetTextMessageSpendLimitOverrideCommandInput) {
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
  ): Handler<SetTextMessageSpendLimitOverrideCommandInput, SetTextMessageSpendLimitOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetTextMessageSpendLimitOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "SetTextMessageSpendLimitOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: SetTextMessageSpendLimitOverrideCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SetTextMessageSpendLimitOverrideCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetTextMessageSpendLimitOverrideCommandOutput> {
    return de_SetTextMessageSpendLimitOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
