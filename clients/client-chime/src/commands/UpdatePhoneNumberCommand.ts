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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberRequestFilterSensitiveLog,
  UpdatePhoneNumberResponse,
  UpdatePhoneNumberResponseFilterSensitiveLog,
} from "../models/models_1";
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
 * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p>
 *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // UpdatePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 *   CallingName: "STRING_VALUE",
 * };
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePhoneNumberResponse
 * //   PhoneNumber: { // PhoneNumber
 * //     PhoneNumberId: "STRING_VALUE",
 * //     E164PhoneNumber: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     Type: "Local" || "TollFree",
 * //     ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 * //     Status: "AcquireInProgress" || "AcquireFailed" || "Unassigned" || "Assigned" || "ReleaseInProgress" || "DeleteInProgress" || "ReleaseFailed" || "DeleteFailed",
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
 * //         Name: "AccountId" || "UserId" || "VoiceConnectorId" || "VoiceConnectorGroupId" || "SipRuleId",
 * //         AssociatedTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     CallingName: "STRING_VALUE",
 * //     CallingNameStatus: "Unassigned" || "UpdateInProgress" || "UpdateSucceeded" || "UpdateFailed",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     DeletionTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePhoneNumberCommandInput - {@link UpdatePhoneNumberCommandInput}
 * @returns {@link UpdatePhoneNumberCommandOutput}
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
export class UpdatePhoneNumberCommand extends $Command<
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
  ChimeClientResolvedConfig
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
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
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
