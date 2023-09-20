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

import { RequestPhoneNumberRequest, RequestPhoneNumberResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_RequestPhoneNumberCommand, se_RequestPhoneNumberCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RequestPhoneNumberCommand}.
 */
export interface RequestPhoneNumberCommandInput extends RequestPhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link RequestPhoneNumberCommand}.
 */
export interface RequestPhoneNumberCommandOutput extends RequestPhoneNumberResult, __MetadataBearer {}

/**
 * @public
 * <p>Request an origination phone number for use in your account. For more information on
 *             phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a
 *                 number </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, RequestPhoneNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, RequestPhoneNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // RequestPhoneNumberRequest
 *   IsoCountryCode: "STRING_VALUE", // required
 *   MessageType: "STRING_VALUE", // required
 *   NumberCapabilities: [ // NumberCapabilityList // required
 *     "STRING_VALUE",
 *   ],
 *   NumberType: "STRING_VALUE", // required
 *   OptOutListName: "STRING_VALUE",
 *   PoolId: "STRING_VALUE",
 *   RegistrationId: "STRING_VALUE",
 *   DeletionProtectionEnabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RequestPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // RequestPhoneNumberResult
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
 * //   PoolId: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param RequestPhoneNumberCommandInput - {@link RequestPhoneNumberCommandInput}
 * @returns {@link RequestPhoneNumberCommandOutput}
 * @see {@link RequestPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link RequestPhoneNumberCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class RequestPhoneNumberCommand extends $Command<
  RequestPhoneNumberCommandInput,
  RequestPhoneNumberCommandOutput,
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
  constructor(readonly input: RequestPhoneNumberCommandInput) {
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
  ): Handler<RequestPhoneNumberCommandInput, RequestPhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestPhoneNumberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "RequestPhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PinpointSMSVoiceV2",
        operation: "RequestPhoneNumber",
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
  private serialize(input: RequestPhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RequestPhoneNumberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestPhoneNumberCommandOutput> {
    return de_RequestPhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
