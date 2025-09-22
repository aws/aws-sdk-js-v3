// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCrawlerRequest, CreateCrawlerResponse } from "../models/models_1";
import { CreateCrawler } from "../schemas/schemas_3_Crawler";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCrawlerCommand}.
 */
export interface CreateCrawlerCommandInput extends CreateCrawlerRequest {}
/**
 * @public
 *
 * The output of {@link CreateCrawlerCommand}.
 */
export interface CreateCrawlerCommandOutput extends CreateCrawlerResponse, __MetadataBearer {}

/**
 * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
 *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
 *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateCrawlerRequest
 *   Name: "STRING_VALUE", // required
 *   Role: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Targets: { // CrawlerTargets
 *     S3Targets: [ // S3TargetList
 *       { // S3Target
 *         Path: "STRING_VALUE",
 *         Exclusions: [ // PathList
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         SampleSize: Number("int"),
 *         EventQueueArn: "STRING_VALUE",
 *         DlqEventQueueArn: "STRING_VALUE",
 *       },
 *     ],
 *     JdbcTargets: [ // JdbcTargetList
 *       { // JdbcTarget
 *         ConnectionName: "STRING_VALUE",
 *         Path: "STRING_VALUE",
 *         Exclusions: [
 *           "STRING_VALUE",
 *         ],
 *         EnableAdditionalMetadata: [ // EnableAdditionalMetadata
 *           "COMMENTS" || "RAWTYPES",
 *         ],
 *       },
 *     ],
 *     MongoDBTargets: [ // MongoDBTargetList
 *       { // MongoDBTarget
 *         ConnectionName: "STRING_VALUE",
 *         Path: "STRING_VALUE",
 *         ScanAll: true || false,
 *       },
 *     ],
 *     DynamoDBTargets: [ // DynamoDBTargetList
 *       { // DynamoDBTarget
 *         Path: "STRING_VALUE",
 *         scanAll: true || false,
 *         scanRate: Number("double"),
 *       },
 *     ],
 *     CatalogTargets: [ // CatalogTargetList
 *       { // CatalogTarget
 *         DatabaseName: "STRING_VALUE", // required
 *         Tables: [ // CatalogTablesList // required
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         EventQueueArn: "STRING_VALUE",
 *         DlqEventQueueArn: "STRING_VALUE",
 *       },
 *     ],
 *     DeltaTargets: [ // DeltaTargetList
 *       { // DeltaTarget
 *         DeltaTables: [
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         WriteManifest: true || false,
 *         CreateNativeDeltaTable: true || false,
 *       },
 *     ],
 *     IcebergTargets: [ // IcebergTargetList
 *       { // IcebergTarget
 *         Paths: [
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         Exclusions: [
 *           "STRING_VALUE",
 *         ],
 *         MaximumTraversalDepth: Number("int"),
 *       },
 *     ],
 *     HudiTargets: [ // HudiTargetList
 *       { // HudiTarget
 *         Paths: "<PathList>",
 *         ConnectionName: "STRING_VALUE",
 *         Exclusions: "<PathList>",
 *         MaximumTraversalDepth: Number("int"),
 *       },
 *     ],
 *   },
 *   Schedule: "STRING_VALUE",
 *   Classifiers: [ // ClassifierNameList
 *     "STRING_VALUE",
 *   ],
 *   TablePrefix: "STRING_VALUE",
 *   SchemaChangePolicy: { // SchemaChangePolicy
 *     UpdateBehavior: "LOG" || "UPDATE_IN_DATABASE",
 *     DeleteBehavior: "LOG" || "DELETE_FROM_DATABASE" || "DEPRECATE_IN_DATABASE",
 *   },
 *   RecrawlPolicy: { // RecrawlPolicy
 *     RecrawlBehavior: "CRAWL_EVERYTHING" || "CRAWL_NEW_FOLDERS_ONLY" || "CRAWL_EVENT_MODE",
 *   },
 *   LineageConfiguration: { // LineageConfiguration
 *     CrawlerLineageSettings: "ENABLE" || "DISABLE",
 *   },
 *   LakeFormationConfiguration: { // LakeFormationConfiguration
 *     UseLakeFormationCredentials: true || false,
 *     AccountId: "STRING_VALUE",
 *   },
 *   Configuration: "STRING_VALUE",
 *   CrawlerSecurityConfiguration: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCrawlerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateCrawlerCommandInput - {@link CreateCrawlerCommandInput}
 * @returns {@link CreateCrawlerCommandOutput}
 * @see {@link CreateCrawlerCommandInput} for command's `input` shape.
 * @see {@link CreateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateCrawlerCommand extends $Command
  .classBuilder<
    CreateCrawlerCommandInput,
    CreateCrawlerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreateCrawler", {})
  .n("GlueClient", "CreateCrawlerCommand")
  .sc(CreateCrawler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCrawlerRequest;
      output: {};
    };
    sdk: {
      input: CreateCrawlerCommandInput;
      output: CreateCrawlerCommandOutput;
    };
  };
}
