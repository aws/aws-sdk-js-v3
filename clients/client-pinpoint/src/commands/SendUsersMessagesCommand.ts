// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendUsersMessagesRequest, SendUsersMessagesResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { SendUsersMessages } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendUsersMessagesCommand}.
 */
export interface SendUsersMessagesCommandInput extends SendUsersMessagesRequest {}
/**
 * @public
 *
 * The output of {@link SendUsersMessagesCommand}.
 */
export interface SendUsersMessagesCommandOutput extends SendUsersMessagesResponse, __MetadataBearer {}

/**
 * <p>Creates and sends a message to a list of users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendUsersMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendUsersMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // SendUsersMessagesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SendUsersMessageRequest: { // SendUsersMessageRequest
 *     Context: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     MessageConfiguration: { // DirectMessageConfiguration
 *       ADMMessage: { // ADMMessage
 *         Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *         Body: "STRING_VALUE",
 *         ConsolidationKey: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ExpiresAfter: "STRING_VALUE",
 *         IconReference: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         MD5: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         SmallImageIconUrl: "STRING_VALUE",
 *         Sound: "STRING_VALUE",
 *         Substitutions: { // MapOfListOf__string
 *           "<keys>": [ // ListOf__string
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       APNSMessage: { // APNSMessage
 *         APNSPushType: "STRING_VALUE",
 *         Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *         Badge: Number("int"),
 *         Body: "STRING_VALUE",
 *         Category: "STRING_VALUE",
 *         CollapseId: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         MediaUrl: "STRING_VALUE",
 *         PreferredAuthenticationMethod: "STRING_VALUE",
 *         Priority: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         Sound: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         ThreadId: "STRING_VALUE",
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       BaiduMessage: { // BaiduMessage
 *         Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *         Body: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         IconReference: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         SilentPush: true || false,
 *         SmallImageIconUrl: "STRING_VALUE",
 *         Sound: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       DefaultMessage: { // DefaultMessage
 *         Body: "STRING_VALUE",
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       DefaultPushNotificationMessage: { // DefaultPushNotificationMessage
 *         Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *         Body: "STRING_VALUE",
 *         Data: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         SilentPush: true || false,
 *         Substitutions: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       EmailMessage: { // EmailMessage
 *         Body: "STRING_VALUE",
 *         FeedbackForwardingAddress: "STRING_VALUE",
 *         FromAddress: "STRING_VALUE",
 *         RawEmail: { // RawEmail
 *           Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         },
 *         ReplyToAddresses: "<ListOf__string>",
 *         SimpleEmail: { // SimpleEmail
 *           HtmlPart: { // SimpleEmailPart
 *             Charset: "STRING_VALUE",
 *             Data: "STRING_VALUE",
 *           },
 *           Subject: {
 *             Charset: "STRING_VALUE",
 *             Data: "STRING_VALUE",
 *           },
 *           TextPart: {
 *             Charset: "STRING_VALUE",
 *             Data: "STRING_VALUE",
 *           },
 *           Headers: [ // ListOfMessageHeader
 *             { // MessageHeader
 *               Name: "STRING_VALUE",
 *               Value: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *         Substitutions: "<MapOfListOf__string>",
 *       },
 *       GCMMessage: { // GCMMessage
 *         Action: "OPEN_APP" || "DEEP_LINK" || "URL",
 *         Body: "STRING_VALUE",
 *         CollapseKey: "STRING_VALUE",
 *         Data: "<MapOf__string>",
 *         IconReference: "STRING_VALUE",
 *         ImageIconUrl: "STRING_VALUE",
 *         ImageUrl: "STRING_VALUE",
 *         PreferredAuthenticationMethod: "STRING_VALUE",
 *         Priority: "STRING_VALUE",
 *         RawContent: "STRING_VALUE",
 *         RestrictedPackageName: "STRING_VALUE",
 *         SilentPush: true || false,
 *         SmallImageIconUrl: "STRING_VALUE",
 *         Sound: "STRING_VALUE",
 *         Substitutions: "<MapOfListOf__string>",
 *         TimeToLive: Number("int"),
 *         Title: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       SMSMessage: { // SMSMessage
 *         Body: "STRING_VALUE",
 *         Keyword: "STRING_VALUE",
 *         MediaUrl: "STRING_VALUE",
 *         MessageType: "TRANSACTIONAL" || "PROMOTIONAL",
 *         OriginationNumber: "STRING_VALUE",
 *         SenderId: "STRING_VALUE",
 *         Substitutions: "<MapOfListOf__string>",
 *         EntityId: "STRING_VALUE",
 *         TemplateId: "STRING_VALUE",
 *       },
 *       VoiceMessage: { // VoiceMessage
 *         Body: "STRING_VALUE",
 *         LanguageCode: "STRING_VALUE",
 *         OriginationNumber: "STRING_VALUE",
 *         Substitutions: "<MapOfListOf__string>",
 *         VoiceId: "STRING_VALUE",
 *       },
 *     },
 *     TemplateConfiguration: { // TemplateConfiguration
 *       EmailTemplate: { // Template
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       PushTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       SMSTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       VoiceTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *       InAppTemplate: {
 *         Name: "STRING_VALUE",
 *         Version: "STRING_VALUE",
 *       },
 *     },
 *     TraceId: "STRING_VALUE",
 *     Users: { // MapOfEndpointSendConfiguration // required
 *       "<keys>": { // EndpointSendConfiguration
 *         BodyOverride: "STRING_VALUE",
 *         Context: "<MapOf__string>",
 *         RawContent: "STRING_VALUE",
 *         Substitutions: "<MapOfListOf__string>",
 *         TitleOverride: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new SendUsersMessagesCommand(input);
 * const response = await client.send(command);
 * // { // SendUsersMessagesResponse
 * //   SendUsersMessageResponse: { // SendUsersMessageResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     RequestId: "STRING_VALUE",
 * //     Result: { // MapOfMapOfEndpointMessageResult
 * //       "<keys>": { // MapOfEndpointMessageResult
 * //         "<keys>": { // EndpointMessageResult
 * //           Address: "STRING_VALUE",
 * //           DeliveryStatus: "SUCCESSFUL" || "THROTTLED" || "TEMPORARY_FAILURE" || "PERMANENT_FAILURE" || "UNKNOWN_FAILURE" || "OPT_OUT" || "DUPLICATE", // required
 * //           MessageId: "STRING_VALUE",
 * //           StatusCode: Number("int"), // required
 * //           StatusMessage: "STRING_VALUE",
 * //           UpdatedToken: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SendUsersMessagesCommandInput - {@link SendUsersMessagesCommandInput}
 * @returns {@link SendUsersMessagesCommandOutput}
 * @see {@link SendUsersMessagesCommandInput} for command's `input` shape.
 * @see {@link SendUsersMessagesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class SendUsersMessagesCommand extends $Command
  .classBuilder<
    SendUsersMessagesCommandInput,
    SendUsersMessagesCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "SendUsersMessages", {})
  .n("PinpointClient", "SendUsersMessagesCommand")
  .sc(SendUsersMessages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendUsersMessagesRequest;
      output: SendUsersMessagesResponse;
    };
    sdk: {
      input: SendUsersMessagesCommandInput;
      output: SendUsersMessagesCommandOutput;
    };
  };
}
