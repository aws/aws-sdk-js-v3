// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecommendationsMessage, ListRecommendationsResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ListRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsMessage {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResult, __MetadataBearer {}

/**
 * <p>List the Amazon Redshift Advisor recommendations for one or multiple Amazon Redshift clusters in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ListRecommendationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ListRecommendationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ListRecommendationsMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   NamespaceArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResult
 * //   Recommendations: [ // RecommendationList
 * //     { // Recommendation
 * //       Id: "STRING_VALUE",
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       NamespaceArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       RecommendationType: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Observation: "STRING_VALUE",
 * //       ImpactRanking: "HIGH" || "MEDIUM" || "LOW",
 * //       RecommendationText: "STRING_VALUE",
 * //       RecommendedActions: [ // RecommendedActionList
 * //         { // RecommendedAction
 * //           Text: "STRING_VALUE",
 * //           Database: "STRING_VALUE",
 * //           Command: "STRING_VALUE",
 * //           Type: "SQL" || "CLI",
 * //         },
 * //       ],
 * //       ReferenceLinks: [ // ReferenceLinkList
 * //         { // ReferenceLink
 * //           Text: "STRING_VALUE",
 * //           Link: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ListRecommendationsCommand extends $Command
  .classBuilder<
    ListRecommendationsCommandInput,
    ListRecommendationsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ListRecommendations", {})
  .n("RedshiftClient", "ListRecommendationsCommand")
  .sc(ListRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationsMessage;
      output: ListRecommendationsResult;
    };
    sdk: {
      input: ListRecommendationsCommandInput;
      output: ListRecommendationsCommandOutput;
    };
  };
}
