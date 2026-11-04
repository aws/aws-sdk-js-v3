// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCampaignRequest, UpdateCampaignResponse } from "../models/models_0";
import { UpdateCampaign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a campaign to deploy a retrained solution version with an existing campaign, change your campaign's `minProvisionedTPS`, or modify your campaign's configuration. For example, you can set `enableMetadataWithRecommendations` to true for an existing campaign.
 *
 * To update a campaign to start automatically using the latest solution version, specify the following:
 *
 * - For the `SolutionVersionArn` parameter, specify the Amazon Resource Name (ARN) of your solution in `SolutionArn/$LATEST` format.
 * - In the `campaignConfig`, set `syncWithLatestSolutionVersion` to `true`.
 *
 * To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the [DescribeCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html) operation.
 *
 * > **Note:** You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is `Active`.
 *
 * For more information about updating a campaign, including code samples, see [Updating a campaign](https://docs.aws.amazon.com/personalize/latest/dg/update-campaigns.html). For more information about campaigns, see [Creating a campaign](https://docs.aws.amazon.com/personalize/latest/dg/campaigns.html).
 *
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
 *     rankingInfluence: { // RankingInfluence
 *       "<keys>": Number("double"),
 *     },
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class UpdateCampaignCommand extends command<UpdateCampaignCommandInput, UpdateCampaignCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCampaign",
  UpdateCampaign$
) {
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
