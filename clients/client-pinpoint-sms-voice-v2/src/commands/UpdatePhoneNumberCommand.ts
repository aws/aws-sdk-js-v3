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

import { UpdatePhoneNumberRequest, UpdatePhoneNumberResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_UpdatePhoneNumberCommand, se_UpdatePhoneNumberCommand } from "../protocols/Aws_json1_0";

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
export interface UpdatePhoneNumberCommandOutput extends UpdatePhoneNumberResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of an existing origination phone number. You can update the
 *             opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable
 *             or disable self-managed opt-outs, and enable or disable deletion protection.</p>
 *         <p>If the origination phone number is associated with a pool, an Error is
 *             returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdatePhoneNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdatePhoneNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdatePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   TwoWayEnabled: true || false,
 *   TwoWayChannelArn: "STRING_VALUE",
 *   SelfManagedOptOutsEnabled: true || false,
 *   OptOutListName: "STRING_VALUE",
 *   DeletionProtectionEnabled: true || false,
 * };
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePhoneNumberResult
 * //   PhoneNumberArn: "STRING_VALUE",
 * //   PhoneNumberId: "STRING_VALUE",
 * //   PhoneNumber: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   IsoCountryCode: "STRING_VALUE",
 * //   MessageType: "STRING_VALUE",
 * //   NumberCapabilities: [ // NumberCapabilityList
 * //     "STRING_VALUE",
 * //   ],
 * //   NumberType: "STRING_VALUE",
 * //   MonthlyLeasingPrice: "STRING_VALUE",
 * //   TwoWayEnabled: true || false,
 * //   TwoWayChannelArn: "STRING_VALUE",
 * //   SelfManagedOptOutsEnabled: true || false,
 * //   OptOutListName: "STRING_VALUE",
 * //   DeletionProtectionEnabled: true || false,
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdatePhoneNumberCommandInput - {@link UpdatePhoneNumberCommandInput}
 * @returns {@link UpdatePhoneNumberCommandOutput}
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
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
export class UpdatePhoneNumberCommand extends $Command<
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
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
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "UpdatePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "UpdatePhoneNumber",
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
