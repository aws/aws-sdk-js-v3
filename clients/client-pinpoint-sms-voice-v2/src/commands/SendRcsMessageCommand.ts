// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendRcsMessageRequest, SendRcsMessageResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { SendRcsMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendRcsMessageCommand}.
 */
export interface SendRcsMessageCommandInput extends SendRcsMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendRcsMessageCommand}.
 */
export interface SendRcsMessageCommandOutput extends SendRcsMessageResult, __MetadataBearer {}

/**
 * <p>Creates a new RCS message and sends it to a recipient's phone number. RCS messages support rich content including text, files, rich cards, and carousels with interactive suggested actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SendRcsMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SendRcsMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SendRcsMessageRequest
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   OriginationIdentity: "STRING_VALUE", // required
 *   RcsMessageContent: { // RcsMessageContent
 *     Content: { // RcsContent Union: only one key present
 *       TextMessage: { // RcsTextMessage
 *         Body: "STRING_VALUE", // required
 *       },
 *       FileMessage: { // RcsFileMessage
 *         FileUrl: "STRING_VALUE", // required
 *         ThumbnailUrl: "STRING_VALUE",
 *       },
 *       RichCard: { // RcsStandaloneCard
 *         CardOrientation: "STRING_VALUE", // required
 *         ThumbnailImageAlignment: "STRING_VALUE",
 *         CardContent: { // RcsCardContent
 *           Title: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *           Media: { // RcsCardMedia
 *             FileUrl: "STRING_VALUE", // required
 *             ThumbnailUrl: "STRING_VALUE",
 *             Height: "STRING_VALUE",
 *           },
 *           Suggestions: [ // RcsCardSuggestedActionList
 *             { // RcsSuggestedAction Union: only one key present
 *               Reply: { // RcsReplyAction
 *                 Text: "STRING_VALUE", // required
 *                 PostbackData: "STRING_VALUE", // required
 *               },
 *               OpenUrl: { // RcsOpenUrlAction
 *                 Text: "STRING_VALUE", // required
 *                 PostbackData: "STRING_VALUE", // required
 *                 Url: "STRING_VALUE", // required
 *                 Application: "STRING_VALUE",
 *                 WebviewViewMode: "STRING_VALUE",
 *               },
 *               DialPhone: { // RcsDialPhoneAction
 *                 Text: "STRING_VALUE", // required
 *                 PostbackData: "STRING_VALUE", // required
 *                 PhoneNumber: "STRING_VALUE", // required
 *               },
 *               ShowLocation: { // RcsShowLocationAction
 *                 Text: "STRING_VALUE", // required
 *                 PostbackData: "STRING_VALUE", // required
 *                 Latitude: Number("double"), // required
 *                 Longitude: Number("double"), // required
 *                 Label: "STRING_VALUE",
 *               },
 *               RequestLocation: { // RcsRequestLocationAction
 *                 Text: "STRING_VALUE", // required
 *                 PostbackData: "STRING_VALUE", // required
 *               },
 *               CreateCalendarEvent: { // RcsCreateCalendarEventAction
 *                 Text: "STRING_VALUE", // required
 *                 PostbackData: "STRING_VALUE", // required
 *                 Title: "STRING_VALUE", // required
 *                 StartTime: new Date("TIMESTAMP"), // required
 *                 EndTime: new Date("TIMESTAMP"), // required
 *                 Description: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       Carousel: { // RcsCarousel
 *         CardWidth: "STRING_VALUE", // required
 *         CardContents: [ // RcsCarouselCardContentList // required
 *           { // RcsCarouselCardContent
 *             Title: "STRING_VALUE",
 *             Description: "STRING_VALUE",
 *             Media: { // RcsCarouselCardMedia
 *               FileUrl: "STRING_VALUE", // required
 *               ThumbnailUrl: "STRING_VALUE",
 *               Height: "STRING_VALUE",
 *             },
 *             Suggestions: [
 *               {//  Union: only one key present
 *                 Reply: {
 *                   Text: "STRING_VALUE", // required
 *                   PostbackData: "STRING_VALUE", // required
 *                 },
 *                 OpenUrl: {
 *                   Text: "STRING_VALUE", // required
 *                   PostbackData: "STRING_VALUE", // required
 *                   Url: "STRING_VALUE", // required
 *                   Application: "STRING_VALUE",
 *                   WebviewViewMode: "STRING_VALUE",
 *                 },
 *                 DialPhone: {
 *                   Text: "STRING_VALUE", // required
 *                   PostbackData: "STRING_VALUE", // required
 *                   PhoneNumber: "STRING_VALUE", // required
 *                 },
 *                 ShowLocation: {
 *                   Text: "STRING_VALUE", // required
 *                   PostbackData: "STRING_VALUE", // required
 *                   Latitude: Number("double"), // required
 *                   Longitude: Number("double"), // required
 *                   Label: "STRING_VALUE",
 *                 },
 *                 RequestLocation: {
 *                   Text: "STRING_VALUE", // required
 *                   PostbackData: "STRING_VALUE", // required
 *                 },
 *                 CreateCalendarEvent: {
 *                   Text: "STRING_VALUE", // required
 *                   PostbackData: "STRING_VALUE", // required
 *                   Title: "STRING_VALUE", // required
 *                   StartTime: new Date("TIMESTAMP"), // required
 *                   EndTime: new Date("TIMESTAMP"), // required
 *                   Description: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *     Suggestions: [ // RcsSuggestedActionList
 *       "<RcsSuggestedAction>",
 *     ],
 *   },
 *   TimeToLive: Number("int"),
 *   MessageTrafficType: "STRING_VALUE",
 *   FallbackConfiguration: { // RcsFallbackConfiguration
 *     Channel: "STRING_VALUE", // required
 *     MessageBody: "STRING_VALUE",
 *     MediaUrls: [ // MediaUrlList
 *       "STRING_VALUE",
 *     ],
 *     OriginationIdentity: "STRING_VALUE",
 *   },
 *   ProtectConfigurationId: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   MaxPrice: "STRING_VALUE",
 *   DryRun: true || false,
 *   Context: { // ContextMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MessageFeedbackEnabled: true || false,
 * };
 * const command = new SendRcsMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendRcsMessageResult
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendRcsMessageCommandInput - {@link SendRcsMessageCommandInput}
 * @returns {@link SendRcsMessageCommandOutput}
 * @see {@link SendRcsMessageCommandInput} for command's `input` shape.
 * @see {@link SendRcsMessageCommandOutput} for command's `response` shape.
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
export class SendRcsMessageCommand extends $Command
  .classBuilder<
    SendRcsMessageCommandInput,
    SendRcsMessageCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "SendRcsMessage", {})
  .n("PinpointSMSVoiceV2Client", "SendRcsMessageCommand")
  .sc(SendRcsMessage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendRcsMessageRequest;
      output: SendRcsMessageResult;
    };
    sdk: {
      input: SendRcsMessageCommandInput;
      output: SendRcsMessageCommandOutput;
    };
  };
}
