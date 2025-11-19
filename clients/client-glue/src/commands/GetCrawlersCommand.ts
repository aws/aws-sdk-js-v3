// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlersRequest, GetCrawlersResponse } from "../models/models_1";
import { GetCrawlers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves metadata for all crawlers defined in the customer
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetCrawlersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetCrawlersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 *
 * @public
 */
export class GetCrawlersCommand extends $Command
  .classBuilder<
    GetCrawlersCommandInput,
    GetCrawlersCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetCrawlers", {})
  .n("GlueClient", "GetCrawlersCommand")
  .sc(GetCrawlers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCrawlersRequest;
      output: GetCrawlersResponse;
    };
    sdk: {
      input: GetCrawlersCommandInput;
      output: GetCrawlersCommandOutput;
    };
  };
}
