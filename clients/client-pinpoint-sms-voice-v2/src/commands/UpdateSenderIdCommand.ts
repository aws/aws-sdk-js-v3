// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSenderIdRequest, UpdateSenderIdResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_UpdateSenderIdCommand, se_UpdateSenderIdCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSenderIdCommand}.
 */
export interface UpdateSenderIdCommandInput extends UpdateSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSenderIdCommand}.
 */
export interface UpdateSenderIdCommandOutput extends UpdateSenderIdResult, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing sender ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateSenderIdRequest
 *   SenderId: "STRING_VALUE", // required
 *   IsoCountryCode: "STRING_VALUE", // required
 *   DeletionProtectionEnabled: true || false,
 * };
 * const command = new UpdateSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSenderIdResult
 * //   SenderIdArn: "STRING_VALUE", // required
 * //   SenderId: "STRING_VALUE", // required
 * //   IsoCountryCode: "STRING_VALUE", // required
 * //   MessageTypes: [ // MessageTypeList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   MonthlyLeasingPrice: "STRING_VALUE", // required
 * //   DeletionProtectionEnabled: true || false, // required
 * //   Registered: true || false, // required
 * //   RegistrationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSenderIdCommandInput - {@link UpdateSenderIdCommandInput}
 * @returns {@link UpdateSenderIdCommandOutput}
 * @see {@link UpdateSenderIdCommandInput} for command's `input` shape.
 * @see {@link UpdateSenderIdCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateSenderIdCommand extends $Command
  .classBuilder<
    UpdateSenderIdCommandInput,
    UpdateSenderIdCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "UpdateSenderId", {})
  .n("PinpointSMSVoiceV2Client", "UpdateSenderIdCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSenderIdCommand)
  .de(de_UpdateSenderIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSenderIdRequest;
      output: UpdateSenderIdResult;
    };
    sdk: {
      input: UpdateSenderIdCommandInput;
      output: UpdateSenderIdCommandOutput;
    };
  };
}
