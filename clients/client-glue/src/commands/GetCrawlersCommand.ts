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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlersRequest, GetCrawlersResponse } from "../models/models_1";
import { de_GetCrawlersCommand, se_GetCrawlersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCrawlersCommand}.
 */
export interface GetCrawlersCommandInput extends GetCrawlersRequest {}
/**
 * @public
 *
 * The output of {@link GetCrawlersCommand}.
 */
export interface GetCrawlersCommandOutput extends GetCrawlersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves metadata for all crawlers defined in the customer
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetCrawlersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCrawlersCommand(input);
 * const response = await client.send(command);
 * // { // GetCrawlersResponse
 * //   Crawlers: [ // CrawlerList
 * //     { // Crawler
 * //       Name: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       Targets: { // CrawlerTargets
 * //         S3Targets: [ // S3TargetList
 * //           { // S3Target
 * //             Path: "STRING_VALUE",
 * //             Exclusions: [ // PathList
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             SampleSize: Number("int"),
 * //             EventQueueArn: "STRING_VALUE",
 * //             DlqEventQueueArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         JdbcTargets: [ // JdbcTargetList
 * //           { // JdbcTarget
 * //             ConnectionName: "STRING_VALUE",
 * //             Path: "STRING_VALUE",
 * //             Exclusions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             EnableAdditionalMetadata: [ // EnableAdditionalMetadata
 * //               "COMMENTS" || "RAWTYPES",
 * //             ],
 * //           },
 * //         ],
 * //         MongoDBTargets: [ // MongoDBTargetList
 * //           { // MongoDBTarget
 * //             ConnectionName: "STRING_VALUE",
 * //             Path: "STRING_VALUE",
 * //             ScanAll: true || false,
 * //           },
 * //         ],
 * //         DynamoDBTargets: [ // DynamoDBTargetList
 * //           { // DynamoDBTarget
 * //             Path: "STRING_VALUE",
 * //             scanAll: true || false,
 * //             scanRate: Number("double"),
 * //           },
 * //         ],
 * //         CatalogTargets: [ // CatalogTargetList
 * //           { // CatalogTarget
 * //             DatabaseName: "STRING_VALUE", // required
 * //             Tables: [ // CatalogTablesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             EventQueueArn: "STRING_VALUE",
 * //             DlqEventQueueArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DeltaTargets: [ // DeltaTargetList
 * //           { // DeltaTarget
 * //             DeltaTables: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             WriteManifest: true || false,
 * //             CreateNativeDeltaTable: true || false,
 * //           },
 * //         ],
 * //         IcebergTargets: [ // IcebergTargetList
 * //           { // IcebergTarget
 * //             Paths: [
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE",
 * //             Exclusions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             MaximumTraversalDepth: Number("int"),
 * //           },
 * //         ],
 * //         HudiTargets: [ // HudiTargetList
 * //           { // HudiTarget
 * //             Paths: "<PathList>",
 * //             ConnectionName: "STRING_VALUE",
 * //             Exclusions: "<PathList>",
 * //             MaximumTraversalDepth: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       DatabaseName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Classifiers: [ // ClassifierNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       RecrawlPolicy: { // RecrawlPolicy
 * //         RecrawlBehavior: "CRAWL_EVERYTHING" || "CRAWL_NEW_FOLDERS_ONLY" || "CRAWL_EVENT_MODE",
 * //       },
 * //       SchemaChangePolicy: { // SchemaChangePolicy
 * //         UpdateBehavior: "LOG" || "UPDATE_IN_DATABASE",
 * //         DeleteBehavior: "LOG" || "DELETE_FROM_DATABASE" || "DEPRECATE_IN_DATABASE",
 * //       },
 * //       LineageConfiguration: { // LineageConfiguration
 * //         CrawlerLineageSettings: "ENABLE" || "DISABLE",
 * //       },
 * //       State: "READY" || "RUNNING" || "STOPPING",
 * //       TablePrefix: "STRING_VALUE",
 * //       Schedule: { // Schedule
 * //         ScheduleExpression: "STRING_VALUE",
 * //         State: "SCHEDULED" || "NOT_SCHEDULED" || "TRANSITIONING",
 * //       },
 * //       CrawlElapsedTime: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       LastCrawl: { // LastCrawlInfo
 * //         Status: "SUCCEEDED" || "CANCELLED" || "FAILED",
 * //         ErrorMessage: "STRING_VALUE",
 * //         LogGroup: "STRING_VALUE",
 * //         LogStream: "STRING_VALUE",
 * //         MessagePrefix: "STRING_VALUE",
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       Version: Number("long"),
 * //       Configuration: "STRING_VALUE",
 * //       CrawlerSecurityConfiguration: "STRING_VALUE",
 * //       LakeFormationConfiguration: { // LakeFormationConfiguration
 * //         UseLakeFormationCredentials: true || false,
 * //         AccountId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCrawlersCommandInput - {@link GetCrawlersCommandInput}
 * @returns {@link GetCrawlersCommandOutput}
 * @see {@link GetCrawlersCommandInput} for command's `input` shape.
 * @see {@link GetCrawlersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetCrawlersCommand extends $Command<
  GetCrawlersCommandInput,
  GetCrawlersCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: GetCrawlersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCrawlersCommandInput, GetCrawlersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetCrawlersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetCrawlersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetCrawlers",
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
  private serialize(input: GetCrawlersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCrawlersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCrawlersCommandOutput> {
    return de_GetCrawlersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
