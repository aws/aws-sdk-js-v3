// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKeywordRequest, DeleteKeywordResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DeleteKeywordCommand, se_DeleteKeywordCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeywordCommand}.
 */
export interface DeleteKeywordCommandInput extends DeleteKeywordRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeywordCommand}.
 */
export interface DeleteKeywordCommandOutput extends DeleteKeywordResult, __MetadataBearer {}

/**
 * <p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteKeywordCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteKeywordCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteKeywordRequest
 *   OriginationIdentity: "STRING_VALUE", // required
 *   Keyword: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeywordCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKeywordResult
 * //   OriginationIdentityArn: "STRING_VALUE",
 * //   OriginationIdentity: "STRING_VALUE",
 * //   Keyword: "STRING_VALUE",
 * //   KeywordMessage: "STRING_VALUE",
 * //   KeywordAction: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteKeywordCommandInput - {@link DeleteKeywordCommandInput}
 * @returns {@link DeleteKeywordCommandOutput}
 * @see {@link DeleteKeywordCommandInput} for command's `input` shape.
 * @see {@link DeleteKeywordCommandOutput} for command's `response` shape.
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
export class DeleteKeywordCommand extends $Command
  .classBuilder<
    DeleteKeywordCommandInput,
    DeleteKeywordCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DeleteKeyword", {})
  .n("PinpointSMSVoiceV2Client", "DeleteKeywordCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKeywordCommand)
  .de(de_DeleteKeywordCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeywordRequest;
      output: DeleteKeywordResult;
    };
    sdk: {
      input: DeleteKeywordCommandInput;
      output: DeleteKeywordCommandOutput;
    };
  };
}
