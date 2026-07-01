// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOAuthClientApplicationRequest, UpdateOAuthClientApplicationResponse } from "../models/models_5";
import { UpdateOAuthClientApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOAuthClientApplicationCommand}.
 */
export interface UpdateOAuthClientApplicationCommandInput extends UpdateOAuthClientApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOAuthClientApplicationCommand}.
 */
export interface UpdateOAuthClientApplicationCommandOutput extends UpdateOAuthClientApplicationResponse, __MetadataBearer {}

/**
 * <p>Updates an OAuthClientApplication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateOAuthClientApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateOAuthClientApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateOAuthClientApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   OAuthClientApplicationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   ClientSecret: "STRING_VALUE",
 *   OAuthTokenEndpointUrl: "STRING_VALUE",
 *   OAuthAuthorizationEndpointUrl: "STRING_VALUE",
 *   OAuthScopes: "STRING_VALUE",
 *   DataSourceType: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "S3_TABLES" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS" || "STARBURST" || "TRINO" || "BIGQUERY" || "GOOGLESHEETS" || "GOOGLE_DRIVE" || "CONFLUENCE" || "SHAREPOINT" || "ONE_DRIVE" || "WEB_CRAWLER" || "S3_KNOWLEDGE_BASE" || "QBUSINESS",
 *   IdentityProviderVpcConnectionProperties: { // VpcConnectionProperties
 *     VpcConnectionArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateOAuthClientApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOAuthClientApplicationResponse
 * //   Arn: "STRING_VALUE",
 * //   OAuthClientApplicationId: "STRING_VALUE",
 * //   UpdateStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateOAuthClientApplicationCommandInput - {@link UpdateOAuthClientApplicationCommandInput}
 * @returns {@link UpdateOAuthClientApplicationCommandOutput}
 * @see {@link UpdateOAuthClientApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateOAuthClientApplicationCommandOutput} for command's `response` shape.
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
export class UpdateOAuthClientApplicationCommand extends command<UpdateOAuthClientApplicationCommandInput, UpdateOAuthClientApplicationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOAuthClientApplication",
  UpdateOAuthClientApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOAuthClientApplicationRequest;
      output: UpdateOAuthClientApplicationResponse;
    };
    sdk: {
      input: UpdateOAuthClientApplicationCommandInput;
      output: UpdateOAuthClientApplicationCommandOutput;
    };
  };
}
