// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListTableOptimizerRunsRequest, ListTableOptimizerRunsResponse } from "../models/models_2";
import { ListTableOptimizerRuns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTableOptimizerRunsCommand}.
 */
export interface ListTableOptimizerRunsCommandInput extends ListTableOptimizerRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListTableOptimizerRunsCommand}.
 */
export interface ListTableOptimizerRunsCommandOutput extends ListTableOptimizerRunsResponse, __MetadataBearer {}

/**
 * <p>Lists the history of previous optimizer runs for a specific table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListTableOptimizerRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListTableOptimizerRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListTableOptimizerRunsRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction" || "retention" || "orphan_file_deletion", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTableOptimizerRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListTableOptimizerRunsResponse
 * //   CatalogId: "STRING_VALUE",
 * //   DatabaseName: "STRING_VALUE",
 * //   TableName: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   TableOptimizerRuns: [ // TableOptimizerRuns
 * //     { // TableOptimizerRun
 * //       eventType: "starting" || "completed" || "failed" || "in_progress",
 * //       startTimestamp: new Date("TIMESTAMP"),
 * //       endTimestamp: new Date("TIMESTAMP"),
 * //       metrics: { // RunMetrics
 * //         NumberOfBytesCompacted: "STRING_VALUE",
 * //         NumberOfFilesCompacted: "STRING_VALUE",
 * //         NumberOfDpus: "STRING_VALUE",
 * //         JobDurationInHour: "STRING_VALUE",
 * //       },
 * //       error: "STRING_VALUE",
 * //       compactionMetrics: { // CompactionMetrics
 * //         IcebergMetrics: { // IcebergCompactionMetrics
 * //           NumberOfBytesCompacted: Number("long"),
 * //           NumberOfFilesCompacted: Number("long"),
 * //           DpuHours: Number("double"),
 * //           NumberOfDpus: Number("int"),
 * //           JobDurationInHour: Number("double"),
 * //         },
 * //       },
 * //       compactionStrategy: "binpack" || "sort" || "z-order",
 * //       retentionMetrics: { // RetentionMetrics
 * //         IcebergMetrics: { // IcebergRetentionMetrics
 * //           NumberOfDataFilesDeleted: Number("long"),
 * //           NumberOfManifestFilesDeleted: Number("long"),
 * //           NumberOfManifestListsDeleted: Number("long"),
 * //           DpuHours: Number("double"),
 * //           NumberOfDpus: Number("int"),
 * //           JobDurationInHour: Number("double"),
 * //         },
 * //       },
 * //       orphanFileDeletionMetrics: { // OrphanFileDeletionMetrics
 * //         IcebergMetrics: { // IcebergOrphanFileDeletionMetrics
 * //           NumberOfOrphanFilesDeleted: Number("long"),
 * //           DpuHours: Number("double"),
 * //           NumberOfDpus: Number("int"),
 * //           JobDurationInHour: Number("double"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTableOptimizerRunsCommandInput - {@link ListTableOptimizerRunsCommandInput}
 * @returns {@link ListTableOptimizerRunsCommandOutput}
 * @see {@link ListTableOptimizerRunsCommandInput} for command's `input` shape.
 * @see {@link ListTableOptimizerRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListTableOptimizerRunsCommand extends $Command
  .classBuilder<
    ListTableOptimizerRunsCommandInput,
    ListTableOptimizerRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListTableOptimizerRuns", {})
  .n("GlueClient", "ListTableOptimizerRunsCommand")
  .sc(ListTableOptimizerRuns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTableOptimizerRunsRequest;
      output: ListTableOptimizerRunsResponse;
    };
    sdk: {
      input: ListTableOptimizerRunsCommandInput;
      output: ListTableOptimizerRunsCommandOutput;
    };
  };
}
