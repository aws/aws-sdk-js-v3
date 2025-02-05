// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchDataSourcesRequest, SearchDataSourcesResponse } from "../models/models_4";
import { de_SearchDataSourcesCommand, se_SearchDataSourcesCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchDataSourcesCommand}.
 */
export interface SearchDataSourcesCommandInput extends SearchDataSourcesRequest {}
/**
 * @public
 *
 * The output of {@link SearchDataSourcesCommand}.
 */
export interface SearchDataSourcesCommandOutput extends SearchDataSourcesResponse, __MetadataBearer {}

/**
 * <p>Use the <code>SearchDataSources</code> operation to search for data sources that belong to an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchDataSourcesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchDataSourcesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // SearchDataSourcesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Filters: [ // DataSourceSearchFilterList // required
 *     { // DataSourceSearchFilter
 *       Operator: "StringEquals" || "StringLike", // required
 *       Name: "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER" || "DIRECT_QUICKSIGHT_OWNER" || "DIRECT_QUICKSIGHT_SOLE_OWNER" || "DATASOURCE_NAME", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchDataSourcesCommand(input);
 * const response = await client.send(command);
 * // { // SearchDataSourcesResponse
 * //   DataSourceSummaries: [ // DataSourceSummaryList
 * //     { // DataSourceSummary
 * //       Arn: "STRING_VALUE",
 * //       DataSourceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchDataSourcesCommandInput - {@link SearchDataSourcesCommandInput}
 * @returns {@link SearchDataSourcesCommandOutput}
 * @see {@link SearchDataSourcesCommandInput} for command's `input` shape.
 * @see {@link SearchDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class SearchDataSourcesCommand extends $Command
  .classBuilder<
    SearchDataSourcesCommandInput,
    SearchDataSourcesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "SearchDataSources", {})
  .n("QuickSightClient", "SearchDataSourcesCommand")
  .f(void 0, void 0)
  .ser(se_SearchDataSourcesCommand)
  .de(de_SearchDataSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDataSourcesRequest;
      output: SearchDataSourcesResponse;
    };
    sdk: {
      input: SearchDataSourcesCommandInput;
      output: SearchDataSourcesCommandOutput;
    };
  };
}
