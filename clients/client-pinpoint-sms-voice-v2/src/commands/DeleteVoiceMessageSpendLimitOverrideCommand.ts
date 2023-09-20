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

import {
  DeleteVoiceMessageSpendLimitOverrideRequest,
  DeleteVoiceMessageSpendLimitOverrideResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DeleteVoiceMessageSpendLimitOverrideCommand,
  se_DeleteVoiceMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceMessageSpendLimitOverrideCommand}.
 */
export interface DeleteVoiceMessageSpendLimitOverrideCommandInput extends DeleteVoiceMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceMessageSpendLimitOverrideCommand}.
 */
export interface DeleteVoiceMessageSpendLimitOverrideCommandOutput
  extends DeleteVoiceMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an account level monthly spend limit override for sending voice messages.
 *             Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the
 *                 <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more
 *             information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a>
 *             in the <i>Amazon Pinpoint Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteVoiceMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteVoiceMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteVoiceMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVoiceMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteVoiceMessageSpendLimitOverrideCommandInput - {@link DeleteVoiceMessageSpendLimitOverrideCommandInput}
 * @returns {@link DeleteVoiceMessageSpendLimitOverrideCommandOutput}
 * @see {@link DeleteVoiceMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class DeleteVoiceMessageSpendLimitOverrideCommand extends $Command<
  DeleteVoiceMessageSpendLimitOverrideCommandInput,
  DeleteVoiceMessageSpendLimitOverrideCommandOutput,
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
  constructor(readonly input: DeleteVoiceMessageSpendLimitOverrideCommandInput) {
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
  ): Handler<DeleteVoiceMessageSpendLimitOverrideCommandInput, DeleteVoiceMessageSpendLimitOverrideCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVoiceMessageSpendLimitOverrideCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DeleteVoiceMessageSpendLimitOverrideCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "DeleteVoiceMessageSpendLimitOverride",
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
  private serialize(
    input: DeleteVoiceMessageSpendLimitOverrideCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteVoiceMessageSpendLimitOverrideCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput> {
    return de_DeleteVoiceMessageSpendLimitOverrideCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
