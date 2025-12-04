// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RequestPhoneNumberRequest, RequestPhoneNumberResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { RequestPhoneNumber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-request.html">Request a phone number</a> in the <i>End User MessagingSMS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, RequestPhoneNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, RequestPhoneNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
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
 *   InternationalSendingEnabled: true || false,
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
 * //   TwoWayChannelRole: "STRING_VALUE",
 * //   SelfManagedOptOutsEnabled: true || false,
 * //   OptOutListName: "STRING_VALUE",
 * //   InternationalSendingEnabled: true || false,
 * //   DeletionProtectionEnabled: true || false,
 * //   PoolId: "STRING_VALUE",
 * //   RegistrationId: "STRING_VALUE",
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
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class RequestPhoneNumberCommand extends $Command
  .classBuilder<
    RequestPhoneNumberCommandInput,
    RequestPhoneNumberCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "RequestPhoneNumber", {})
  .n("PinpointSMSVoiceV2Client", "RequestPhoneNumberCommand")
  .sc(RequestPhoneNumber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestPhoneNumberRequest;
      output: RequestPhoneNumberResult;
    };
    sdk: {
      input: RequestPhoneNumberCommandInput;
      output: RequestPhoneNumberCommandOutput;
    };
  };
}
