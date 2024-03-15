// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendAnnouncementRequest, SendAnnouncementResponse } from "../models/models_0";
import { de_SendAnnouncementCommand, se_SendAnnouncementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendAnnouncementCommand}.
 */
export interface SendAnnouncementCommandInput extends SendAnnouncementRequest {}
/**
 * @public
 *
 * The output of {@link SendAnnouncementCommand}.
 */
export interface SendAnnouncementCommandOutput extends SendAnnouncementResponse, __MetadataBearer {}

/**
 * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that
 *          are identified by a search or filter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SendAnnouncementCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SendAnnouncementCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SendAnnouncementRequest
 *   RoomFilters: [ // FilterList // required
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Content: { // Content
 *     TextList: [ // TextList
 *       { // Text
 *         Locale: "en-US", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     SsmlList: [ // SsmlList
 *       { // Ssml
 *         Locale: "en-US", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     AudioList: [ // AudioList
 *       { // Audio
 *         Locale: "en-US", // required
 *         Location: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   TimeToLiveInSeconds: Number("int"),
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new SendAnnouncementCommand(input);
 * const response = await client.send(command);
 * // { // SendAnnouncementResponse
 * //   AnnouncementArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendAnnouncementCommandInput - {@link SendAnnouncementCommandInput}
 * @returns {@link SendAnnouncementCommandOutput}
 * @see {@link SendAnnouncementCommandInput} for command's `input` shape.
 * @see {@link SendAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class SendAnnouncementCommand extends $Command
  .classBuilder<
    SendAnnouncementCommandInput,
    SendAnnouncementCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "SendAnnouncement", {})
  .n("AlexaForBusinessClient", "SendAnnouncementCommand")
  .f(void 0, void 0)
  .ser(se_SendAnnouncementCommand)
  .de(de_SendAnnouncementCommand)
  .build() {}
