// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { UpdateCrawlerRequest, UpdateCrawlerResponse } from "../models/models_2";
import { UpdateCrawler } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCrawlerCommand}.
 */
export interface UpdateCrawlerCommandInput extends UpdateCrawlerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCrawlerCommand}.
 */
export interface UpdateCrawlerCommandOutput extends UpdateCrawlerResponse, __MetadataBearer {}

/**
 * <p>Updates a crawler. If a crawler is
 *       running, you must stop it using <code>StopCrawler</code> before updating
 *       it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateCrawlerRequest
 *   Name: "STRING_VALUE", // required
 *   Role: "STRING_VALUE",
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
 * };
 * const command = new UpdateCrawlerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCrawlerCommandInput - {@link UpdateCrawlerCommandInput}
 * @returns {@link UpdateCrawlerCommandOutput}
 * @see {@link UpdateCrawlerCommandInput} for command's `input` shape.
 * @see {@link UpdateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link CrawlerRunningException} (client fault)
 *  <p>The operation cannot be performed because the crawler is already running.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>There was a version conflict.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateCrawlerCommand extends $Command
  .classBuilder<
    UpdateCrawlerCommandInput,
    UpdateCrawlerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateCrawler", {})
  .n("GlueClient", "UpdateCrawlerCommand")
  .sc(UpdateCrawler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCrawlerRequest;
      output: {};
    };
    sdk: {
      input: UpdateCrawlerCommandInput;
      output: UpdateCrawlerCommandOutput;
    };
  };
}
