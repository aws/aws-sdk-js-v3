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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  se_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommand}.
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput
  extends DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommand}.
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
  extends DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice
 *          Connector group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 *   E164PhoneNumbers: [ // E164PhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
 * //   PhoneNumberErrors: [ // PhoneNumberErrorList
 * //     { // PhoneNumberError
 * //       PhoneNumberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist" || "Gone",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput - {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput}
 * @returns {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput}
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 */
export class DisassociatePhoneNumbersFromVoiceConnectorGroupCommand extends $Command<
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociatePhoneNumbersFromVoiceConnectorGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "DisassociatePhoneNumbersFromVoiceConnectorGroup",
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
    input: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> {
    return de_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
