// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOptOutListRequest, CreateOptOutListResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_CreateOptOutListCommand, se_CreateOptOutListCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOptOutListCommand}.
 */
export interface CreateOptOutListCommandInput extends CreateOptOutListRequest {}
/**
 * @public
 *
 * The output of {@link CreateOptOutListCommand}.
 */
export interface CreateOptOutListCommandOutput extends CreateOptOutListResult, __MetadataBearer {}

/**
 * <p>Creates a new opt-out list.</p>
 *          <p>If the opt-out list name already exists, an error is returned.</p>
 *          <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send
 *             SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for
 *             the phone number is added to the opt-out list. In addition to STOP, your recipients can
 *             use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported
 *             opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout">
 *                 SMS opt out </a> in the <i>AWS End User Messaging SMS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, CreateOptOutListCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, CreateOptOutListCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // CreateOptOutListRequest
 *   OptOutListName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateOptOutListCommand(input);
 * const response = await client.send(command);
 * // { // CreateOptOutListResult
 * //   OptOutListArn: "STRING_VALUE",
 * //   OptOutListName: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateOptOutListCommandInput - {@link CreateOptOutListCommandInput}
 * @returns {@link CreateOptOutListCommandOutput}
 * @see {@link CreateOptOutListCommandInput} for command's `input` shape.
 * @see {@link CreateOptOutListCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateOptOutListCommand extends $Command
  .classBuilder<
    CreateOptOutListCommandInput,
    CreateOptOutListCommandOutput,
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
  .s("PinpointSMSVoiceV2", "CreateOptOutList", {})
  .n("PinpointSMSVoiceV2Client", "CreateOptOutListCommand")
  .f(void 0, void 0)
  .ser(se_CreateOptOutListCommand)
  .de(de_CreateOptOutListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOptOutListRequest;
      output: CreateOptOutListResult;
    };
    sdk: {
      input: CreateOptOutListCommandInput;
      output: CreateOptOutListCommandOutput;
    };
  };
}
