// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DiscardRegistrationVersionRequest, DiscardRegistrationVersionResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DiscardRegistrationVersionCommand, se_DiscardRegistrationVersionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DiscardRegistrationVersionCommand}.
 */
export interface DiscardRegistrationVersionCommandInput extends DiscardRegistrationVersionRequest {}
/**
 * @public
 *
 * The output of {@link DiscardRegistrationVersionCommand}.
 */
export interface DiscardRegistrationVersionCommandOutput extends DiscardRegistrationVersionResult, __MetadataBearer {}

/**
 * <p>Discard the current version of the registration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DiscardRegistrationVersionCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DiscardRegistrationVersionCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DiscardRegistrationVersionRequest
 *   RegistrationId: "STRING_VALUE", // required
 * };
 * const command = new DiscardRegistrationVersionCommand(input);
 * const response = await client.send(command);
 * // { // DiscardRegistrationVersionResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   VersionNumber: Number("long"), // required
 * //   RegistrationVersionStatus: "STRING_VALUE", // required
 * //   RegistrationVersionStatusHistory: { // RegistrationVersionStatusHistory
 * //     DraftTimestamp: new Date("TIMESTAMP"), // required
 * //     SubmittedTimestamp: new Date("TIMESTAMP"),
 * //     ReviewingTimestamp: new Date("TIMESTAMP"),
 * //     RequiresAuthenticationTimestamp: new Date("TIMESTAMP"),
 * //     ApprovedTimestamp: new Date("TIMESTAMP"),
 * //     DiscardedTimestamp: new Date("TIMESTAMP"),
 * //     DeniedTimestamp: new Date("TIMESTAMP"),
 * //     RevokedTimestamp: new Date("TIMESTAMP"),
 * //     ArchivedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DiscardRegistrationVersionCommandInput - {@link DiscardRegistrationVersionCommandInput}
 * @returns {@link DiscardRegistrationVersionCommandOutput}
 * @see {@link DiscardRegistrationVersionCommandInput} for command's `input` shape.
 * @see {@link DiscardRegistrationVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DiscardRegistrationVersionCommand extends $Command
  .classBuilder<
    DiscardRegistrationVersionCommandInput,
    DiscardRegistrationVersionCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DiscardRegistrationVersion", {})
  .n("PinpointSMSVoiceV2Client", "DiscardRegistrationVersionCommand")
  .f(void 0, void 0)
  .ser(se_DiscardRegistrationVersionCommand)
  .de(de_DiscardRegistrationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DiscardRegistrationVersionRequest;
      output: DiscardRegistrationVersionResult;
    };
    sdk: {
      input: DiscardRegistrationVersionCommandInput;
      output: DiscardRegistrationVersionCommandOutput;
    };
  };
}
