// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDefaultSenderIdRequest, DeleteDefaultSenderIdResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DeleteDefaultSenderIdCommand, se_DeleteDefaultSenderIdCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDefaultSenderIdCommand}.
 */
export interface DeleteDefaultSenderIdCommandInput extends DeleteDefaultSenderIdRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDefaultSenderIdCommand}.
 */
export interface DeleteDefaultSenderIdCommandOutput extends DeleteDefaultSenderIdResult, __MetadataBearer {}

/**
 * <p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteDefaultSenderIdCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteDefaultSenderIdCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteDefaultSenderIdRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDefaultSenderIdCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDefaultSenderIdResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   SenderId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDefaultSenderIdCommandInput - {@link DeleteDefaultSenderIdCommandInput}
 * @returns {@link DeleteDefaultSenderIdCommandOutput}
 * @see {@link DeleteDefaultSenderIdCommandInput} for command's `input` shape.
 * @see {@link DeleteDefaultSenderIdCommandOutput} for command's `response` shape.
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
export class DeleteDefaultSenderIdCommand extends $Command
  .classBuilder<
    DeleteDefaultSenderIdCommandInput,
    DeleteDefaultSenderIdCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DeleteDefaultSenderId", {})
  .n("PinpointSMSVoiceV2Client", "DeleteDefaultSenderIdCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDefaultSenderIdCommand)
  .de(de_DeleteDefaultSenderIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDefaultSenderIdRequest;
      output: DeleteDefaultSenderIdResult;
    };
    sdk: {
      input: DeleteDefaultSenderIdCommandInput;
      output: DeleteDefaultSenderIdCommandOutput;
    };
  };
}
