// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePhoneNumberRequest, UpdatePhoneNumberResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { UpdatePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdatePhoneNumberCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdatePhoneNumberCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdatePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   TwoWayEnabled: true || false,
 *   TwoWayChannelArn: "STRING_VALUE",
 *   TwoWayChannelRole: "STRING_VALUE",
 *   SelfManagedOptOutsEnabled: true || false,
 *   OptOutListName: "STRING_VALUE",
 *   InternationalSendingEnabled: true || false,
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
 * //   TwoWayChannelRole: "STRING_VALUE",
 * //   SelfManagedOptOutsEnabled: true || false,
 * //   OptOutListName: "STRING_VALUE",
 * //   InternationalSendingEnabled: true || false,
 * //   DeletionProtectionEnabled: true || false,
 * //   RegistrationId: "STRING_VALUE",
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
export class UpdatePhoneNumberCommand extends $Command
  .classBuilder<
    UpdatePhoneNumberCommandInput,
    UpdatePhoneNumberCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "UpdatePhoneNumber", {})
  .n("PinpointSMSVoiceV2Client", "UpdatePhoneNumberCommand")
  .sc(UpdatePhoneNumber$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberRequest;
      output: UpdatePhoneNumberResult;
    };
    sdk: {
      input: UpdatePhoneNumberCommandInput;
      output: UpdatePhoneNumberCommandOutput;
    };
  };
}
