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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
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
 * @deprecated
 *
 * <p>Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_DisassociatePhoneNumbersFromVoiceConnectorGroup.html">DisassociatePhoneNumbersFromVoiceConnectorGroup</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociatePhoneNumbersFromVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
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
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class DisassociatePhoneNumbersFromVoiceConnectorGroupCommand extends $Command<
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
  ChimeClientResolvedConfig
> {
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
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
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
    const clientName = "ChimeClient";
    const commandName = "DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
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
}
