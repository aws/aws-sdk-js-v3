// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInsightsRequest, ListInsightsResponse } from "../models/models_0";
import { de_ListInsightsCommand, se_ListInsightsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInsightsCommand}.
 */
export interface ListInsightsCommandInput extends ListInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListInsightsCommand}.
 */
export interface ListInsightsCommandOutput extends ListInsightsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all insights checked for against the specified cluster. You can
 *             filter which insights are returned by category, associated Kubernetes version, and
 *             status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListInsightsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListInsightsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListInsightsRequest
 *   clusterName: "STRING_VALUE", // required
 *   filter: { // InsightsFilter
 *     categories: [ // CategoryList
 *       "UPGRADE_READINESS",
 *     ],
 *     kubernetesVersions: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     statuses: [ // InsightStatusValueList
 *       "PASSING" || "WARNING" || "ERROR" || "UNKNOWN",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListInsightsResponse
 * //   insights: [ // InsightSummaries
 * //     { // InsightSummary
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       category: "UPGRADE_READINESS",
 * //       kubernetesVersion: "STRING_VALUE",
 * //       lastRefreshTime: new Date("TIMESTAMP"),
 * //       lastTransitionTime: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       insightStatus: { // InsightStatus
 * //         status: "PASSING" || "WARNING" || "ERROR" || "UNKNOWN",
 * //         reason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInsightsCommandInput - {@link ListInsightsCommandInput}
 * @returns {@link ListInsightsCommandOutput}
 * @see {@link ListInsightsCommandInput} for command's `input` shape.
 * @see {@link ListInsightsCommandOutput} for command's `response` shape.
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
export class ListInsightsCommand extends $Command
  .classBuilder<
    ListInsightsCommandInput,
    ListInsightsCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "ListInsights", {})
  .n("EKSClient", "ListInsightsCommand")
  .f(void 0, void 0)
  .ser(se_ListInsightsCommand)
  .de(de_ListInsightsCommand)
  .build() {}
