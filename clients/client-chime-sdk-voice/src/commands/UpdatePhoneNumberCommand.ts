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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberRequestFilterSensitiveLog,
  UpdatePhoneNumberResponse,
  UpdatePhoneNumberResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePhoneNumberCommand, se_UpdatePhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberCommand}.
 */
export interface UpdatePhoneNumberCommandInput extends UpdatePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberCommand}.
 */
export interface UpdatePhoneNumberCommandOutput extends UpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates phone number details, such as product type or calling name, for the
 *          specified phone number ID. You can update one phone number detail at a time. For
 *          example, you can update either the product type or the calling name in one action.</p>
 *          <p>For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media
 *          Application Dial-In product type.</p>
 *          <p>Updates to outbound calling names can take 72 hours to complete. Pending
 *          updates to outbound calling names must be complete before you can request another
 *          update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdatePhoneNumberCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdatePhoneNumberCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdatePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 *   CallingName: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePhoneNumberResponse
 * //   PhoneNumber: { // PhoneNumber
 * //     PhoneNumberId: "STRING_VALUE",
 * //     E164PhoneNumber: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     Type: "Local" || "TollFree",
 * //     ProductType: "VoiceConnector" || "SipMediaApplicationDialIn",
 * //     Status: "Cancelled" || "PortinCancelRequested" || "PortinInProgress" || "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
 * //     Capabilities: { // PhoneNumberCapabilities
 * //       InboundCall: true || false,
 * //       OutboundCall: true || false,
 * //       InboundSMS: true || false,
 * //       OutboundSMS: true || false,
 * //       InboundMMS: true || false,
 * //       OutboundMMS: true || false,
 * //     },
 * //     Associations: [ // PhoneNumberAssociationList
 * //       { // PhoneNumberAssociation
 * //         Value: "STRING_VALUE",
 * //         Name: "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 * //         AssociatedTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     CallingName: "STRING_VALUE",
 * //     CallingNameStatus: "Unassigned" || "UpdateInProgress" || "UpdateSucceeded" || "UpdateFailed",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     DeletionTimestamp: new Date("TIMESTAMP"),
 * //     OrderId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePhoneNumberCommandInput - {@link UpdatePhoneNumberCommandInput}
 * @returns {@link UpdatePhoneNumberCommandOutput}
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
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
export class UpdatePhoneNumberCommand extends $Command<
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
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
  constructor(readonly input: UpdatePhoneNumberCommandInput) {
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
  ): Handler<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "UpdatePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePhoneNumberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePhoneNumberResponseFilterSensitiveLog,
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
  private serialize(input: UpdatePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePhoneNumberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePhoneNumberCommandOutput> {
    return de_UpdatePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
