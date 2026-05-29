// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOAuthClientApplicationsRequest, ListOAuthClientApplicationsResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListOAuthClientApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOAuthClientApplicationsCommand}.
 */
export interface ListOAuthClientApplicationsCommandInput extends ListOAuthClientApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOAuthClientApplicationsCommand}.
 */
export interface ListOAuthClientApplicationsCommandOutput extends ListOAuthClientApplicationsResponse, __MetadataBearer {}

/**
 * <p>Lists all OAuthClientApplications in the current Amazon Web Services Region that belong to this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListOAuthClientApplicationsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListOAuthClientApplicationsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListOAuthClientApplicationsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOAuthClientApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOAuthClientApplicationsResponse
 * //   OAuthClientApplications: [ // OAuthClientApplicationSummaryList
 * //     { // OAuthClientApplicationSummary
 * //       OAuthClientApplicationId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       OAuthClientAuthenticationType: "TOKEN",
 * //       DataSourceType: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "S3_TABLES" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY" || "GOOGLESHEETS" || "GOOGLE_DRIVE" || "CONFLUENCE" || "SHAREPOINT" || "ONE_DRIVE" || "WEB_CRAWLER" || "S3_KNOWLEDGE_BASE" || "QBUSINESS",
 * //       IdentityProviderVpcConnectionProperties: { // VpcConnectionProperties
 * //         VpcConnectionArn: "STRING_VALUE", // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListOAuthClientApplicationsCommandInput - {@link ListOAuthClientApplicationsCommandInput}
 * @returns {@link ListOAuthClientApplicationsCommandOutput}
 * @see {@link ListOAuthClientApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListOAuthClientApplicationsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
 *
 * @public
 */
export class ListOAuthClientApplicationsCommand extends $Command
  .classBuilder<
    ListOAuthClientApplicationsCommandInput,
    ListOAuthClientApplicationsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListOAuthClientApplications", {})
  .n("QuickSightClient", "ListOAuthClientApplicationsCommand")
  .sc(ListOAuthClientApplications$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOAuthClientApplicationsRequest;
      output: ListOAuthClientApplicationsResponse;
    };
    sdk: {
      input: ListOAuthClientApplicationsCommandInput;
      output: ListOAuthClientApplicationsCommandOutput;
    };
  };
}
