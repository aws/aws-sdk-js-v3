// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataSourceRequest, UpdateDataSourceResponse } from "../models/models_0";
import { de_UpdateDataSourceCommand, se_UpdateDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceResponse, __MetadataBearer {}

/**
 * <p>Updates a <code>DataSource</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateDataSourceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateDataSourceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // UpdateDataSourceRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "AWS_LAMBDA" || "AMAZON_DYNAMODB" || "AMAZON_ELASTICSEARCH" || "NONE" || "HTTP" || "RELATIONAL_DATABASE" || "AMAZON_OPENSEARCH_SERVICE" || "AMAZON_EVENTBRIDGE" || "AMAZON_BEDROCK_RUNTIME", // required
 *   serviceRoleArn: "STRING_VALUE",
 *   dynamodbConfig: { // DynamodbDataSourceConfig
 *     tableName: "STRING_VALUE", // required
 *     awsRegion: "STRING_VALUE", // required
 *     useCallerCredentials: true || false,
 *     deltaSyncConfig: { // DeltaSyncConfig
 *       baseTableTTL: Number("long"),
 *       deltaSyncTableName: "STRING_VALUE",
 *       deltaSyncTableTTL: Number("long"),
 *     },
 *     versioned: true || false,
 *   },
 *   lambdaConfig: { // LambdaDataSourceConfig
 *     lambdaFunctionArn: "STRING_VALUE", // required
 *   },
 *   elasticsearchConfig: { // ElasticsearchDataSourceConfig
 *     endpoint: "STRING_VALUE", // required
 *     awsRegion: "STRING_VALUE", // required
 *   },
 *   openSearchServiceConfig: { // OpenSearchServiceDataSourceConfig
 *     endpoint: "STRING_VALUE", // required
 *     awsRegion: "STRING_VALUE", // required
 *   },
 *   httpConfig: { // HttpDataSourceConfig
 *     endpoint: "STRING_VALUE",
 *     authorizationConfig: { // AuthorizationConfig
 *       authorizationType: "AWS_IAM", // required
 *       awsIamConfig: { // AwsIamConfig
 *         signingRegion: "STRING_VALUE",
 *         signingServiceName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   relationalDatabaseConfig: { // RelationalDatabaseDataSourceConfig
 *     relationalDatabaseSourceType: "RDS_HTTP_ENDPOINT",
 *     rdsHttpEndpointConfig: { // RdsHttpEndpointConfig
 *       awsRegion: "STRING_VALUE",
 *       dbClusterIdentifier: "STRING_VALUE",
 *       databaseName: "STRING_VALUE",
 *       schema: "STRING_VALUE",
 *       awsSecretStoreArn: "STRING_VALUE",
 *     },
 *   },
 *   eventBridgeConfig: { // EventBridgeDataSourceConfig
 *     eventBusArn: "STRING_VALUE", // required
 *   },
 *   metricsConfig: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSourceResponse
 * //   dataSource: { // DataSource
 * //     dataSourceArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "AWS_LAMBDA" || "AMAZON_DYNAMODB" || "AMAZON_ELASTICSEARCH" || "NONE" || "HTTP" || "RELATIONAL_DATABASE" || "AMAZON_OPENSEARCH_SERVICE" || "AMAZON_EVENTBRIDGE" || "AMAZON_BEDROCK_RUNTIME",
 * //     serviceRoleArn: "STRING_VALUE",
 * //     dynamodbConfig: { // DynamodbDataSourceConfig
 * //       tableName: "STRING_VALUE", // required
 * //       awsRegion: "STRING_VALUE", // required
 * //       useCallerCredentials: true || false,
 * //       deltaSyncConfig: { // DeltaSyncConfig
 * //         baseTableTTL: Number("long"),
 * //         deltaSyncTableName: "STRING_VALUE",
 * //         deltaSyncTableTTL: Number("long"),
 * //       },
 * //       versioned: true || false,
 * //     },
 * //     lambdaConfig: { // LambdaDataSourceConfig
 * //       lambdaFunctionArn: "STRING_VALUE", // required
 * //     },
 * //     elasticsearchConfig: { // ElasticsearchDataSourceConfig
 * //       endpoint: "STRING_VALUE", // required
 * //       awsRegion: "STRING_VALUE", // required
 * //     },
 * //     openSearchServiceConfig: { // OpenSearchServiceDataSourceConfig
 * //       endpoint: "STRING_VALUE", // required
 * //       awsRegion: "STRING_VALUE", // required
 * //     },
 * //     httpConfig: { // HttpDataSourceConfig
 * //       endpoint: "STRING_VALUE",
 * //       authorizationConfig: { // AuthorizationConfig
 * //         authorizationType: "AWS_IAM", // required
 * //         awsIamConfig: { // AwsIamConfig
 * //           signingRegion: "STRING_VALUE",
 * //           signingServiceName: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     relationalDatabaseConfig: { // RelationalDatabaseDataSourceConfig
 * //       relationalDatabaseSourceType: "RDS_HTTP_ENDPOINT",
 * //       rdsHttpEndpointConfig: { // RdsHttpEndpointConfig
 * //         awsRegion: "STRING_VALUE",
 * //         dbClusterIdentifier: "STRING_VALUE",
 * //         databaseName: "STRING_VALUE",
 * //         schema: "STRING_VALUE",
 * //         awsSecretStoreArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     eventBridgeConfig: { // EventBridgeDataSourceConfig
 * //       eventBusArn: "STRING_VALUE", // required
 * //     },
 * //     metricsConfig: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class UpdateDataSourceCommand extends $Command
  .classBuilder<
    UpdateDataSourceCommandInput,
    UpdateDataSourceCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "UpdateDataSource", {})
  .n("AppSyncClient", "UpdateDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataSourceCommand)
  .de(de_UpdateDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSourceRequest;
      output: UpdateDataSourceResponse;
    };
    sdk: {
      input: UpdateDataSourceCommandInput;
      output: UpdateDataSourceCommandOutput;
    };
  };
}
