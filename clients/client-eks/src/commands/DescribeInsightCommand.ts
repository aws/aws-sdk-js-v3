// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInsightRequest, DescribeInsightResponse } from "../models/models_0";
import { de_DescribeInsightCommand, se_DescribeInsightCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInsightCommand}.
 */
export interface DescribeInsightCommandInput extends DescribeInsightRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInsightCommand}.
 */
export interface DescribeInsightCommandOutput extends DescribeInsightResponse, __MetadataBearer {}

/**
 * <p>Returns details about an insight that you specify using its ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeInsightCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeInsightCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeInsightRequest
 *   clusterName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeInsightCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInsightResponse
 * //   insight: { // Insight
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     category: "UPGRADE_READINESS",
 * //     kubernetesVersion: "STRING_VALUE",
 * //     lastRefreshTime: new Date("TIMESTAMP"),
 * //     lastTransitionTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     insightStatus: { // InsightStatus
 * //       status: "PASSING" || "WARNING" || "ERROR" || "UNKNOWN",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     recommendation: "STRING_VALUE",
 * //     additionalInfo: { // AdditionalInfoMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     resources: [ // InsightResourceDetails
 * //       { // InsightResourceDetail
 * //         insightStatus: {
 * //           status: "PASSING" || "WARNING" || "ERROR" || "UNKNOWN",
 * //           reason: "STRING_VALUE",
 * //         },
 * //         kubernetesResourceUri: "STRING_VALUE",
 * //         arn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     categorySpecificSummary: { // InsightCategorySpecificSummary
 * //       deprecationDetails: [ // DeprecationDetails
 * //         { // DeprecationDetail
 * //           usage: "STRING_VALUE",
 * //           replacedWith: "STRING_VALUE",
 * //           stopServingVersion: "STRING_VALUE",
 * //           startServingReplacementVersion: "STRING_VALUE",
 * //           clientStats: [ // ClientStats
 * //             { // ClientStat
 * //               userAgent: "STRING_VALUE",
 * //               numberOfRequestsLast30Days: Number("int"),
 * //               lastRequestTime: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       addonCompatibilityDetails: [ // AddonCompatibilityDetails
 * //         { // AddonCompatibilityDetail
 * //           name: "STRING_VALUE",
 * //           compatibleVersions: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInsightCommandInput - {@link DescribeInsightCommandInput}
 * @returns {@link DescribeInsightCommandOutput}
 * @see {@link DescribeInsightCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class DescribeInsightCommand extends $Command
  .classBuilder<
    DescribeInsightCommandInput,
    DescribeInsightCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "DescribeInsight", {})
  .n("EKSClient", "DescribeInsightCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInsightCommand)
  .de(de_DescribeInsightCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInsightRequest;
      output: DescribeInsightResponse;
    };
    sdk: {
      input: DescribeInsightCommandInput;
      output: DescribeInsightCommandOutput;
    };
  };
}
