// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDataSourcesRequest, ListDataSourcesResponse } from "../models/models_0";
import { ListDataSources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourcesCommand}.
 */
export interface ListDataSourcesCommandInput extends ListDataSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSourcesCommand}.
 */
export interface ListDataSourcesCommandOutput extends ListDataSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists the data sources for a given API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListDataSourcesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListDataSourcesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // ListDataSourcesRequest
 *   apiId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourcesResponse
 * //   dataSources: [ // DataSources
 * //     { // DataSource
 * //       dataSourceArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "AWS_LAMBDA" || "AMAZON_DYNAMODB" || "AMAZON_ELASTICSEARCH" || "NONE" || "HTTP" || "RELATIONAL_DATABASE" || "AMAZON_OPENSEARCH_SERVICE" || "AMAZON_EVENTBRIDGE" || "AMAZON_BEDROCK_RUNTIME",
 * //       serviceRoleArn: "STRING_VALUE",
 * //       dynamodbConfig: { // DynamodbDataSourceConfig
 * //         tableName: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE", // required
 * //         useCallerCredentials: true || false,
 * //         deltaSyncConfig: { // DeltaSyncConfig
 * //           baseTableTTL: Number("long"),
 * //           deltaSyncTableName: "STRING_VALUE",
 * //           deltaSyncTableTTL: Number("long"),
 * //         },
 * //         versioned: true || false,
 * //       },
 * //       lambdaConfig: { // LambdaDataSourceConfig
 * //         lambdaFunctionArn: "STRING_VALUE", // required
 * //       },
 * //       elasticsearchConfig: { // ElasticsearchDataSourceConfig
 * //         endpoint: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE", // required
 * //       },
 * //       openSearchServiceConfig: { // OpenSearchServiceDataSourceConfig
 * //         endpoint: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE", // required
 * //       },
 * //       httpConfig: { // HttpDataSourceConfig
 * //         endpoint: "STRING_VALUE",
 * //         authorizationConfig: { // AuthorizationConfig
 * //           authorizationType: "AWS_IAM", // required
 * //           awsIamConfig: { // AwsIamConfig
 * //             signingRegion: "STRING_VALUE",
 * //             signingServiceName: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       relationalDatabaseConfig: { // RelationalDatabaseDataSourceConfig
 * //         relationalDatabaseSourceType: "RDS_HTTP_ENDPOINT",
 * //         rdsHttpEndpointConfig: { // RdsHttpEndpointConfig
 * //           awsRegion: "STRING_VALUE",
 * //           dbClusterIdentifier: "STRING_VALUE",
 * //           databaseName: "STRING_VALUE",
 * //           schema: "STRING_VALUE",
 * //           awsSecretStoreArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       eventBridgeConfig: { // EventBridgeDataSourceConfig
 * //         eventBusArn: "STRING_VALUE", // required
 * //       },
 * //       metricsConfig: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourcesCommandInput - {@link ListDataSourcesCommandInput}
 * @returns {@link ListDataSourcesCommandOutput}
 * @see {@link ListDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class ListDataSourcesCommand extends $Command
  .classBuilder<
    ListDataSourcesCommandInput,
    ListDataSourcesCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "ListDataSources", {})
  .n("AppSyncClient", "ListDataSourcesCommand")
  .sc(ListDataSources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSourcesRequest;
      output: ListDataSourcesResponse;
    };
    sdk: {
      input: ListDataSourcesCommandInput;
      output: ListDataSourcesCommandOutput;
    };
  };
}
