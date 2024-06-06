// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCampaignRequest, DescribeCampaignResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeCampaignCommand, se_DescribeCampaignCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCampaignCommand}.
 */
export interface DescribeCampaignCommandInput extends DescribeCampaignRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCampaignCommand}.
 */
export interface DescribeCampaignCommandOutput extends DescribeCampaignResponse, __MetadataBearer {}

/**
 * <p>Describes the given campaign, including its status.</p>
 *          <p>A campaign can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the
 *       <code>failureReason</code> key, which describes why.</p>
 *          <p>For more information on campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html">CreateCampaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeCampaignRequest
 *   campaignArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCampaignCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCampaignResponse
 * //   campaign: { // Campaign
 * //     name: "STRING_VALUE",
 * //     campaignArn: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     minProvisionedTPS: Number("int"),
 * //     campaignConfig: { // CampaignConfig
 * //       itemExplorationConfig: { // HyperParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       enableMetadataWithRecommendations: true || false,
 * //       syncWithLatestSolutionVersion: true || false,
 * //     },
 * //     status: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     latestCampaignUpdate: { // CampaignUpdateSummary
 * //       solutionVersionArn: "STRING_VALUE",
 * //       minProvisionedTPS: Number("int"),
 * //       campaignConfig: {
 * //         itemExplorationConfig: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         enableMetadataWithRecommendations: true || false,
 * //         syncWithLatestSolutionVersion: true || false,
 * //       },
 * //       status: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCampaignCommandInput - {@link DescribeCampaignCommandInput}
 * @returns {@link DescribeCampaignCommandOutput}
 * @see {@link DescribeCampaignCommandInput} for command's `input` shape.
 * @see {@link DescribeCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class DescribeCampaignCommand extends $Command
  .classBuilder<
    DescribeCampaignCommandInput,
    DescribeCampaignCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeCampaign", {})
  .n("PersonalizeClient", "DescribeCampaignCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCampaignCommand)
  .de(de_DescribeCampaignCommand)
  .build() {}
