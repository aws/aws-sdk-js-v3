// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutKeywordRequest, PutKeywordResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { PutKeyword$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutKeywordCommand}.
 */
export interface PutKeywordCommandInput extends PutKeywordRequest {}
/**
 * @public
 *
 * The output of {@link PutKeywordCommand}.
 */
export interface PutKeywordCommandOutput extends PutKeywordResult, __MetadataBearer {}

/**
 * <p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutKeywordCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutKeywordCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // PutKeywordRequest
 *   OriginationIdentity: "STRING_VALUE", // required
 *   Keyword: "STRING_VALUE", // required
 *   KeywordMessage: "STRING_VALUE", // required
 *   KeywordAction: "STRING_VALUE",
 * };
 * const command = new PutKeywordCommand(input);
 * const response = await client.send(command);
 * // { // PutKeywordResult
 * //   OriginationIdentityArn: "STRING_VALUE",
 * //   OriginationIdentity: "STRING_VALUE",
 * //   Keyword: "STRING_VALUE",
 * //   KeywordMessage: "STRING_VALUE",
 * //   KeywordAction: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutKeywordCommandInput - {@link PutKeywordCommandInput}
 * @returns {@link PutKeywordCommandOutput}
 * @see {@link PutKeywordCommandInput} for command's `input` shape.
 * @see {@link PutKeywordCommandOutput} for command's `response` shape.
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
export class PutKeywordCommand extends $Command
  .classBuilder<
    PutKeywordCommandInput,
    PutKeywordCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "PutKeyword", {})
  .n("PinpointSMSVoiceV2Client", "PutKeywordCommand")
  .sc(PutKeyword$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutKeywordRequest;
      output: PutKeywordResult;
    };
    sdk: {
      input: PutKeywordCommandInput;
      output: PutKeywordCommandOutput;
    };
  };
}
