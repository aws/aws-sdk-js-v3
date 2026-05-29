// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateOAuthClientApplicationRequest, CreateOAuthClientApplicationResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateOAuthClientApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOAuthClientApplicationCommand}.
 */
export interface CreateOAuthClientApplicationCommandInput extends CreateOAuthClientApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateOAuthClientApplicationCommand}.
 */
export interface CreateOAuthClientApplicationCommandOutput extends CreateOAuthClientApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates an OAuthClientApplication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateOAuthClientApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateOAuthClientApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateOAuthClientApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   OAuthClientApplicationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   OAuthClientAuthenticationType: "TOKEN", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientSecret: "STRING_VALUE", // required
 *   OAuthTokenEndpointUrl: "STRING_VALUE", // required
 *   OAuthAuthorizationEndpointUrl: "STRING_VALUE",
 *   OAuthScopes: "STRING_VALUE",
 *   DataSourceType: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "S3_TABLES" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY" || "GOOGLESHEETS" || "GOOGLE_DRIVE" || "CONFLUENCE" || "SHAREPOINT" || "ONE_DRIVE" || "WEB_CRAWLER" || "S3_KNOWLEDGE_BASE" || "QBUSINESS",
 *   IdentityProviderVpcConnectionProperties: { // VpcConnectionProperties
 *     VpcConnectionArn: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOAuthClientApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateOAuthClientApplicationResponse
 * //   Arn: "STRING_VALUE",
 * //   OAuthClientApplicationId: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateOAuthClientApplicationCommandInput - {@link CreateOAuthClientApplicationCommandInput}
 * @returns {@link CreateOAuthClientApplicationCommandOutput}
 * @see {@link CreateOAuthClientApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateOAuthClientApplicationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateOAuthClientApplicationCommand extends $Command
  .classBuilder<
    CreateOAuthClientApplicationCommandInput,
    CreateOAuthClientApplicationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateOAuthClientApplication", {})
  .n("QuickSightClient", "CreateOAuthClientApplicationCommand")
  .sc(CreateOAuthClientApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOAuthClientApplicationRequest;
      output: CreateOAuthClientApplicationResponse;
    };
    sdk: {
      input: CreateOAuthClientApplicationCommandInput;
      output: CreateOAuthClientApplicationCommandOutput;
    };
  };
}
