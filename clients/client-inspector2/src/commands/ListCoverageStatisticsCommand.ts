// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListCoverageStatisticsRequest, ListCoverageStatisticsResponse } from "../models/models_1";
import { de_ListCoverageStatisticsCommand, se_ListCoverageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoverageStatisticsCommand}.
 */
export interface ListCoverageStatisticsCommandInput extends ListCoverageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoverageStatisticsCommand}.
 */
export interface ListCoverageStatisticsCommandOutput extends ListCoverageStatisticsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon Inspector coverage statistics for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCoverageStatisticsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCoverageStatisticsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Inspector2Client(config);
 * const input = { // ListCoverageStatisticsRequest
 *   filterCriteria: { // CoverageFilterCriteria
 *     scanStatusCode: [ // CoverageStringFilterList
 *       { // CoverageStringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanStatusReason: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     accountId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceType: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanType: "<CoverageStringFilterList>",
 *     ecrRepositoryName: "<CoverageStringFilterList>",
 *     ecrImageTags: "<CoverageStringFilterList>",
 *     ec2InstanceTags: [ // CoverageMapFilterList
 *       { // CoverageMapFilter
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionName: "<CoverageStringFilterList>",
 *     lambdaFunctionTags: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionRuntime: "<CoverageStringFilterList>",
 *     lastScannedAt: [ // CoverageDateFilterList
 *       { // CoverageDateFilter
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     scanMode: "<CoverageStringFilterList>",
 *     imagePulledAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *   },
 *   groupBy: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCoverageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoverageStatisticsResponse
 * //   countsByGroup: [ // CountsList
 * //     { // Counts
 * //       count: Number("long"),
 * //       groupKey: "STRING_VALUE",
 * //     },
 * //   ],
 * //   totalCounts: Number("long"), // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoverageStatisticsCommandInput - {@link ListCoverageStatisticsCommandInput}
 * @returns {@link ListCoverageStatisticsCommandOutput}
 * @see {@link ListCoverageStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListCoverageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class ListCoverageStatisticsCommand extends $Command
  .classBuilder<
    ListCoverageStatisticsCommandInput,
    ListCoverageStatisticsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "ListCoverageStatistics", {})
  .n("Inspector2Client", "ListCoverageStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_ListCoverageStatisticsCommand)
  .de(de_ListCoverageStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoverageStatisticsRequest;
      output: ListCoverageStatisticsResponse;
    };
    sdk: {
      input: ListCoverageStatisticsCommandInput;
      output: ListCoverageStatisticsCommandOutput;
    };
  };
}
