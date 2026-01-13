// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetColumnStatisticsTaskRunsRequest, GetColumnStatisticsTaskRunsResponse } from "../models/models_1";
import { GetColumnStatisticsTaskRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsTaskRunsCommand}.
 */
export interface GetColumnStatisticsTaskRunsCommandInput extends GetColumnStatisticsTaskRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsTaskRunsCommand}.
 */
export interface GetColumnStatisticsTaskRunsCommandOutput extends GetColumnStatisticsTaskRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about all runs associated with the specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsTaskRunsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetColumnStatisticsTaskRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsTaskRunsResponse
 * //   ColumnStatisticsTaskRuns: [ // ColumnStatisticsTaskRunsList
 * //     { // ColumnStatisticsTaskRun
 * //       CustomerId: "STRING_VALUE",
 * //       ColumnStatisticsTaskRunId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       ColumnNameList: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       CatalogID: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       SampleSize: Number("double"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       WorkerType: "STRING_VALUE",
 * //       ComputationType: "FULL" || "INCREMENTAL",
 * //       Status: "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ErrorMessage: "STRING_VALUE",
 * //       DPUSeconds: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetColumnStatisticsTaskRunsCommandInput - {@link GetColumnStatisticsTaskRunsCommandInput}
 * @returns {@link GetColumnStatisticsTaskRunsCommandOutput}
 * @see {@link GetColumnStatisticsTaskRunsCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsTaskRunsCommandOutput} for command's `response` shape.
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
export class GetColumnStatisticsTaskRunsCommand extends $Command
  .classBuilder<
    GetColumnStatisticsTaskRunsCommandInput,
    GetColumnStatisticsTaskRunsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetColumnStatisticsTaskRuns", {})
  .n("GlueClient", "GetColumnStatisticsTaskRunsCommand")
  .sc(GetColumnStatisticsTaskRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetColumnStatisticsTaskRunsRequest;
      output: GetColumnStatisticsTaskRunsResponse;
    };
    sdk: {
      input: GetColumnStatisticsTaskRunsCommandInput;
      output: GetColumnStatisticsTaskRunsCommandOutput;
    };
  };
}
