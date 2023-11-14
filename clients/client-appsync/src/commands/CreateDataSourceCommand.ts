// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { CreateDataSourceRequest, CreateDataSourceResponse } from "../models/models_0";
import { de_CreateDataSourceCommand, se_CreateDataSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataSourceCommand}.
 */
export interface CreateDataSourceCommandInput extends CreateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSourceCommand}.
 */
export interface CreateDataSourceCommandOutput extends CreateDataSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <code>DataSource</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateDataSourceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateDataSourceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateDataSourceRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "AWS_LAMBDA" || "AMAZON_DYNAMODB" || "AMAZON_ELASTICSEARCH" || "NONE" || "HTTP" || "RELATIONAL_DATABASE" || "AMAZON_OPENSEARCH_SERVICE" || "AMAZON_EVENTBRIDGE", // required
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
 * };
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSourceResponse
 * //   dataSource: { // DataSource
 * //     dataSourceArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "AWS_LAMBDA" || "AMAZON_DYNAMODB" || "AMAZON_ELASTICSEARCH" || "NONE" || "HTTP" || "RELATIONAL_DATABASE" || "AMAZON_OPENSEARCH_SERVICE" || "AMAZON_EVENTBRIDGE",
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDataSourceCommandInput - {@link CreateDataSourceCommandInput}
 * @returns {@link CreateDataSourceCommandOutput}
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
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
 */
export class CreateDataSourceCommand extends $Command<
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
  AppSyncClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateDataSourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "CreateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "CreateDataSource",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceCommandOutput> {
    return de_CreateDataSourceCommand(output, context);
  }
}
