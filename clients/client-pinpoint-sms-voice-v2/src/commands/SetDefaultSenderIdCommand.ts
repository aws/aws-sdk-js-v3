// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetDefaultSenderIdRequest, SetDefaultSenderIdResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_SetDefaultSenderIdCommand, se_SetDefaultSenderIdCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultSenderIdCommand}.
 */
export interface SetDefaultSenderIdCommandInput extends SetDefaultSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultSenderIdCommand}.
 */
export interface SetDefaultSenderIdCommandOutput extends SetDefaultSenderIdResult, __MetadataBearer {}

/**
 * <p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetDefaultSenderIdRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   SenderId: "STRING_VALUE", // required
 * };
 * const command = new SetDefaultSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultSenderIdResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   SenderId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultSenderIdCommandInput - {@link SetDefaultSenderIdCommandInput}
 * @returns {@link SetDefaultSenderIdCommandOutput}
 * @see {@link SetDefaultSenderIdCommandInput} for command's `input` shape.
 * @see {@link SetDefaultSenderIdCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
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
export class SetDefaultSenderIdCommand extends $Command
  .classBuilder<
    SetDefaultSenderIdCommandInput,
    SetDefaultSenderIdCommandOutput,
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
  .s("PinpointSMSVoiceV2", "SetDefaultSenderId", {})
  .n("PinpointSMSVoiceV2Client", "SetDefaultSenderIdCommand")
  .f(void 0, void 0)
  .ser(se_SetDefaultSenderIdCommand)
  .de(de_SetDefaultSenderIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultSenderIdRequest;
      output: SetDefaultSenderIdResult;
    };
    sdk: {
      input: SetDefaultSenderIdCommandInput;
      output: SetDefaultSenderIdCommandOutput;
    };
  };
}
