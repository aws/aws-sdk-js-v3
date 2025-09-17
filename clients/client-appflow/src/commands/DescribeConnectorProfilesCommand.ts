// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectorProfilesRequest, DescribeConnectorProfilesResponse } from "../models/models_0";
import { de_DescribeConnectorProfilesCommand, se_DescribeConnectorProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectorProfilesCommand}.
 */
export interface DescribeConnectorProfilesCommandInput extends DescribeConnectorProfilesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectorProfilesCommand}.
 */
export interface DescribeConnectorProfilesCommandOutput extends DescribeConnectorProfilesResponse, __MetadataBearer {}

/**
 * <p> Returns a list of <code>connector-profile</code> details matching the provided
 *         <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are
 *       optional, and you can use them to filter the result. </p>
 *          <p>If no names or <code>connector-types</code> are provided, returns all connector profiles
 *       in a paginated form. If there is no match, this operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DescribeConnectorProfilesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DescribeConnectorProfilesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // DescribeConnectorProfilesRequest
 *   connectorProfileNames: [ // ConnectorProfileNameList
 *     "STRING_VALUE",
 *   ],
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 *   connectorLabel: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConnectorProfilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectorProfilesResponse
 * //   connectorProfileDetails: [ // ConnectorProfileDetailList
 * //     { // ConnectorProfile
 * //       connectorProfileArn: "STRING_VALUE",
 * //       connectorProfileName: "STRING_VALUE",
 * //       connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 * //       connectorLabel: "STRING_VALUE",
 * //       connectionMode: "Public" || "Private",
 * //       credentialsArn: "STRING_VALUE",
 * //       connectorProfileProperties: { // ConnectorProfileProperties
 * //         Amplitude: {},
 * //         Datadog: { // DatadogConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         Dynatrace: { // DynatraceConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         GoogleAnalytics: {},
 * //         Honeycode: {},
 * //         InforNexus: { // InforNexusConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         Marketo: { // MarketoConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         Redshift: { // RedshiftConnectorProfileProperties
 * //           databaseUrl: "STRING_VALUE",
 * //           bucketName: "STRING_VALUE", // required
 * //           bucketPrefix: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE", // required
 * //           dataApiRoleArn: "STRING_VALUE",
 * //           isRedshiftServerless: true || false,
 * //           clusterIdentifier: "STRING_VALUE",
 * //           workgroupName: "STRING_VALUE",
 * //           databaseName: "STRING_VALUE",
 * //         },
 * //         Salesforce: { // SalesforceConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE",
 * //           isSandboxEnvironment: true || false,
 * //           usePrivateLinkForMetadataAndAuthorization: true || false,
 * //         },
 * //         ServiceNow: { // ServiceNowConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         Singular: {},
 * //         Slack: { // SlackConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         Snowflake: { // SnowflakeConnectorProfileProperties
 * //           warehouse: "STRING_VALUE", // required
 * //           stage: "STRING_VALUE", // required
 * //           bucketName: "STRING_VALUE", // required
 * //           bucketPrefix: "STRING_VALUE",
 * //           privateLinkServiceName: "STRING_VALUE",
 * //           accountName: "STRING_VALUE",
 * //           region: "STRING_VALUE",
 * //         },
 * //         Trendmicro: {},
 * //         Veeva: { // VeevaConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         Zendesk: { // ZendeskConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE", // required
 * //         },
 * //         SAPOData: { // SAPODataConnectorProfileProperties
 * //           applicationHostUrl: "STRING_VALUE", // required
 * //           applicationServicePath: "STRING_VALUE", // required
 * //           portNumber: Number("int"), // required
 * //           clientNumber: "STRING_VALUE", // required
 * //           logonLanguage: "STRING_VALUE",
 * //           privateLinkServiceName: "STRING_VALUE",
 * //           oAuthProperties: { // OAuthProperties
 * //             tokenUrl: "STRING_VALUE", // required
 * //             authCodeUrl: "STRING_VALUE", // required
 * //             oAuthScopes: [ // OAuthScopeList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           disableSSO: true || false,
 * //         },
 * //         CustomConnector: { // CustomConnectorProfileProperties
 * //           profileProperties: { // ProfilePropertiesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           oAuth2Properties: { // OAuth2Properties
 * //             tokenUrl: "STRING_VALUE", // required
 * //             oAuth2GrantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "JWT_BEARER", // required
 * //             tokenUrlCustomProperties: { // TokenUrlCustomProperties
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         Pardot: { // PardotConnectorProfileProperties
 * //           instanceUrl: "STRING_VALUE",
 * //           isSandboxEnvironment: true || false,
 * //           businessUnitId: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       privateConnectionProvisioningState: { // PrivateConnectionProvisioningState
 * //         status: "FAILED" || "PENDING" || "CREATED",
 * //         failureMessage: "STRING_VALUE",
 * //         failureCause: "CONNECTOR_AUTHENTICATION" || "CONNECTOR_SERVER" || "INTERNAL_SERVER" || "ACCESS_DENIED" || "VALIDATION",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectorProfilesCommandInput - {@link DescribeConnectorProfilesCommandInput}
 * @returns {@link DescribeConnectorProfilesCommandOutput}
 * @see {@link DescribeConnectorProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectorProfilesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 *
 * @public
 */
export class DescribeConnectorProfilesCommand extends $Command
  .classBuilder<
    DescribeConnectorProfilesCommandInput,
    DescribeConnectorProfilesCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "DescribeConnectorProfiles", {})
  .n("AppflowClient", "DescribeConnectorProfilesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConnectorProfilesCommand)
  .de(de_DescribeConnectorProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectorProfilesRequest;
      output: DescribeConnectorProfilesResponse;
    };
    sdk: {
      input: DescribeConnectorProfilesCommandInput;
      output: DescribeConnectorProfilesCommandOutput;
    };
  };
}
