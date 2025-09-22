// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { UpdateCampaign } from "../schemas/schemas_1_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignCommand}.
 */
export interface UpdateCampaignCommandInput extends UpdateCampaignRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignCommand}.
 */
export interface UpdateCampaignCommandOutput extends UpdateCampaignResponse, __MetadataBearer {}

/**
 * <p>
 *       Updates a campaign to deploy a retrained solution version with an existing campaign, change your campaign's <code>minProvisionedTPS</code>,
 *       or modify your campaign's configuration. For example, you can set <code>enableMetadataWithRecommendations</code> to true for an existing campaign.</p>
 *          <p>
 *       To update a campaign to start automatically using the latest solution version, specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>For the <code>SolutionVersionArn</code> parameter, specify the Amazon Resource Name (ARN) of your solution in
 *             <code>SolutionArn/$LATEST</code> format. </p>
 *             </li>
 *             <li>
 *                <p> In the <code>campaignConfig</code>, set <code>syncWithLatestSolutionVersion</code> to <code>true</code>.
 *         </p>
 *             </li>
 *          </ul>
 *          <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED.
 *       Check the campaign status using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html">DescribeCampaign</a> operation.</p>
 *          <note>
 *             <p>You can still get recommendations from a campaign while an update is in progress.
 *         The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is <code>Active</code>.
 *       </p>
 *          </note>
 *          <p>For more information about updating a campaign, including code samples, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/update-campaigns.html">Updating a campaign</a>.
 *       For more information about campaigns, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html">Creating a campaign</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, UpdateCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, UpdateCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // UpdateCampaignRequest
 *   campaignArn: "STRING_VALUE", // required
 *   solutionVersionArn: "STRING_VALUE",
 *   minProvisionedTPS: Number("int"),
 *   campaignConfig: { // CampaignConfig
 *     itemExplorationConfig: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     enableMetadataWithRecommendations: true || false,
 *     syncWithLatestSolutionVersion: true || false,
 *   },
 * };
 * const command = new UpdateCampaignCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCampaignResponse
 * //   campaignArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCampaignCommandInput - {@link UpdateCampaignCommandInput}
 * @returns {@link UpdateCampaignCommandOutput}
 * @see {@link UpdateCampaignCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class UpdateCampaignCommand extends $Command
  .classBuilder<
    UpdateCampaignCommandInput,
    UpdateCampaignCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "UpdateCampaign", {})
  .n("PersonalizeClient", "UpdateCampaignCommand")
  .sc(UpdateCampaign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCampaignRequest;
      output: UpdateCampaignResponse;
    };
    sdk: {
      input: UpdateCampaignCommandInput;
      output: UpdateCampaignCommandOutput;
    };
  };
}
