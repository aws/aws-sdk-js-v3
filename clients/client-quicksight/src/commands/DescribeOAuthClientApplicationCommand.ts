// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeOAuthClientApplicationRequest, DescribeOAuthClientApplicationResponse } from "../models/models_4";
import { DescribeOAuthClientApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeOAuthClientApplicationCommand}.
 */
export interface DescribeOAuthClientApplicationCommandInput extends DescribeOAuthClientApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOAuthClientApplicationCommand}.
 */
export interface DescribeOAuthClientApplicationCommandOutput extends DescribeOAuthClientApplicationResponse, __MetadataBearer {}

/**
 * <p>Describes an OAuthClientApplication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeOAuthClientApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeOAuthClientApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeOAuthClientApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   OAuthClientApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeOAuthClientApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOAuthClientApplicationResponse
 * //   OAuthClientApplication: { // OAuthClientApplication
 * //     OAuthClientApplicationId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     OAuthClientAuthenticationType: "TOKEN",
 * //     OAuthTokenEndpointUrl: "STRING_VALUE",
 * //     OAuthAuthorizationEndpointUrl: "STRING_VALUE",
 * //     OAuthScopes: "STRING_VALUE",
 * //     DataSourceType: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "S3_TABLES" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY" || "GOOGLESHEETS" || "GOOGLE_DRIVE" || "CONFLUENCE" || "SHAREPOINT" || "ONE_DRIVE" || "WEB_CRAWLER" || "S3_KNOWLEDGE_BASE" || "QBUSINESS",
 * //     IdentityProviderVpcConnectionProperties: { // VpcConnectionProperties
 * //       VpcConnectionArn: "STRING_VALUE", // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeOAuthClientApplicationCommandInput - {@link DescribeOAuthClientApplicationCommandInput}
 * @returns {@link DescribeOAuthClientApplicationCommandOutput}
 * @see {@link DescribeOAuthClientApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeOAuthClientApplicationCommandOutput} for command's `response` shape.
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
export class DescribeOAuthClientApplicationCommand extends command<DescribeOAuthClientApplicationCommandInput, DescribeOAuthClientApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOAuthClientApplication",
  DescribeOAuthClientApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOAuthClientApplicationRequest;
      output: DescribeOAuthClientApplicationResponse;
    };
    sdk: {
      input: DescribeOAuthClientApplicationCommandInput;
      output: DescribeOAuthClientApplicationCommandOutput;
    };
  };
}
