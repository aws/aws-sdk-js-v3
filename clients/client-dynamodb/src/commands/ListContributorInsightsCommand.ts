// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContributorInsightsInput, ListContributorInsightsOutput } from "../models/models_0";
import { de_ListContributorInsightsCommand, se_ListContributorInsightsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContributorInsightsCommand}.
 */
export interface ListContributorInsightsCommandInput extends ListContributorInsightsInput {}
/**
 * @public
 *
 * The output of {@link ListContributorInsightsCommand}.
 */
export interface ListContributorInsightsCommandOutput extends ListContributorInsightsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of ContributorInsightsSummary for a table and all its global secondary
 *             indexes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ListContributorInsightsInput
 *   TableName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContributorInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListContributorInsightsOutput
 * //   ContributorInsightsSummaries: [ // ContributorInsightsSummaries
 * //     { // ContributorInsightsSummary
 * //       TableName: "STRING_VALUE",
 * //       IndexName: "STRING_VALUE",
 * //       ContributorInsightsStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContributorInsightsCommandInput - {@link ListContributorInsightsCommandInput}
 * @returns {@link ListContributorInsightsCommandOutput}
 * @see {@link ListContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link ListContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class ListContributorInsightsCommand extends $Command
  .classBuilder<
    ListContributorInsightsCommandInput,
    ListContributorInsightsCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "ListContributorInsights", {})
  .n("DynamoDBClient", "ListContributorInsightsCommand")
  .f(void 0, void 0)
  .ser(se_ListContributorInsightsCommand)
  .de(de_ListContributorInsightsCommand)
  .build() {}
