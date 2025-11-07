// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendMediaMessageRequest, SendMediaMessageResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { SendMediaMessage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendMediaMessageCommand}.
 */
export interface SendMediaMessageCommandInput extends SendMediaMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendMediaMessageCommand}.
 */
export interface SendMediaMessageCommandOutput extends SendMediaMessageResult, __MetadataBearer {}

/**
 * <p>Creates a new multimedia message (MMS) and sends it to a recipient's phone number. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendMediaMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendMediaMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendMediaMessageRequest
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   MessageBody: "STRING_VALUE",
 *   MediaUrls: [ // MediaUrlList
 *     "STRING_VALUE",
 *   ],
 *   ConfigurationSetName: "STRING_VALUE",
 *   MaxPrice: "STRING_VALUE",
 *   TimeToLive: Number("int"),
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 *   ProtectConfigurationId: "STRING_VALUE",
 *   MessageFeedbackEnabled: true || false,
 * };
 * const command = new SendMediaMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendMediaMessageResult
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendMediaMessageCommandInput - {@link SendMediaMessageCommandInput}
 * @returns {@link SendMediaMessageCommandOutput}
 * @see {@link SendMediaMessageCommandInput} for command's `input` shape.
 * @see {@link SendMediaMessageCommandOutput} for command's `response` shape.
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
export class SendMediaMessageCommand extends $Command
  .classBuilder<
    SendMediaMessageCommandInput,
    SendMediaMessageCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "SendMediaMessage", {})
  .n("PinpointSMSVoiceV2Client", "SendMediaMessageCommand")
  .sc(SendMediaMessage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendMediaMessageRequest;
      output: SendMediaMessageResult;
    };
    sdk: {
      input: SendMediaMessageCommandInput;
      output: SendMediaMessageCommandOutput;
    };
  };
}
