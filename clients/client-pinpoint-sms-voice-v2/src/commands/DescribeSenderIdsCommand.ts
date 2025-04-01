// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSenderIdsRequest, DescribeSenderIdsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribeSenderIdsCommand, se_DescribeSenderIdsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSenderIdsCommand}.
 */
export interface DescribeSenderIdsCommandInput extends DescribeSenderIdsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSenderIdsCommand}.
 */
export interface DescribeSenderIdsCommandOutput extends DescribeSenderIdsResult, __MetadataBearer {}

/**
 * <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p>
 *          <p>If you specify SenderIds, the output includes information for only the specified
 *             SenderIds. If you specify filters, the output includes information for only those
 *             SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the
 *             output includes information for all SenderIds.</p>
 *          <p>f you specify a sender ID that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeSenderIdsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeSenderIdsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeSenderIdsRequest
 *   SenderIds: [ // SenderIdList
 *     { // SenderIdAndCountry
 *       SenderId: "STRING_VALUE", // required
 *       IsoCountryCode: "STRING_VALUE", // required
 *     },
 *   ],
 *   Filters: [ // SenderIdFilterList
 *     { // SenderIdFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Owner: "STRING_VALUE",
 * };
 * const command = new DescribeSenderIdsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSenderIdsResult
 * //   SenderIds: [ // SenderIdInformationList
 * //     { // SenderIdInformation
 * //       SenderIdArn: "STRING_VALUE", // required
 * //       SenderId: "STRING_VALUE", // required
 * //       IsoCountryCode: "STRING_VALUE", // required
 * //       MessageTypes: [ // MessageTypeList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       MonthlyLeasingPrice: "STRING_VALUE", // required
 * //       DeletionProtectionEnabled: true || false, // required
 * //       Registered: true || false, // required
 * //       RegistrationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSenderIdsCommandInput - {@link DescribeSenderIdsCommandInput}
 * @returns {@link DescribeSenderIdsCommandOutput}
 * @see {@link DescribeSenderIdsCommandInput} for command's `input` shape.
 * @see {@link DescribeSenderIdsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
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
 *
 * @public
 */
export class DescribeSenderIdsCommand extends $Command
  .classBuilder<
    DescribeSenderIdsCommandInput,
    DescribeSenderIdsCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DescribeSenderIds", {})
  .n("PinpointSMSVoiceV2Client", "DescribeSenderIdsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSenderIdsCommand)
  .de(de_DescribeSenderIdsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSenderIdsRequest;
      output: DescribeSenderIdsResult;
    };
    sdk: {
      input: DescribeSenderIdsCommandInput;
      output: DescribeSenderIdsCommandOutput;
    };
  };
}
