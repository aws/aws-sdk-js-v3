// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCampaignRequest, DescribeCampaignResponse } from "../models/models_0";
import { DescribeCampaign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the given campaign, including its status.
 *
 * A campaign can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 * - DELETE PENDING > DELETE IN_PROGRESS
 *
 * When the `status` is `CREATE FAILED`, the response includes the `failureReason` key, which describes why.
 *
 * For more information on campaigns, see [CreateCampaign](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeCampaignCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeCampaignCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
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
 * //       rankingInfluence: { // RankingInfluence
 * //         "<keys>": Number("double"),
 * //       },
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
 * //         rankingInfluence: {
 * //           "<keys>": Number("double"),
 * //         },
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
 *
 * Provide a valid value for the field or parameter.
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
export class DescribeCampaignCommand extends command<DescribeCampaignCommandInput, DescribeCampaignCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCampaign",
  DescribeCampaign$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCampaignRequest;
      output: DescribeCampaignResponse;
    };
    sdk: {
      input: DescribeCampaignCommandInput;
      output: DescribeCampaignCommandOutput;
    };
  };
}
