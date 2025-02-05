// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsTaskRunRequest, GetColumnStatisticsTaskRunResponse } from "../models/models_1";
import { de_GetColumnStatisticsTaskRunCommand, se_GetColumnStatisticsTaskRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsTaskRunCommand}.
 */
export interface GetColumnStatisticsTaskRunCommandInput extends GetColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsTaskRunCommand}.
 */
export interface GetColumnStatisticsTaskRunCommandOutput extends GetColumnStatisticsTaskRunResponse, __MetadataBearer {}

/**
 * <p>Get the associated metadata/information for a task run, given a task run ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsTaskRunRequest
 *   ColumnStatisticsTaskRunId: "STRING_VALUE", // required
 * };
 * const command = new GetColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsTaskRunResponse
 * //   ColumnStatisticsTaskRun: { // ColumnStatisticsTaskRun
 * //     CustomerId: "STRING_VALUE",
 * //     ColumnStatisticsTaskRunId: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     ColumnNameList: [ // ColumnNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     CatalogID: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     SampleSize: Number("double"),
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     NumberOfWorkers: Number("int"),
 * //     WorkerType: "STRING_VALUE",
 * //     ComputationType: "FULL" || "INCREMENTAL",
 * //     Status: "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorMessage: "STRING_VALUE",
 * //     DPUSeconds: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetColumnStatisticsTaskRunCommandInput - {@link GetColumnStatisticsTaskRunCommandInput}
 * @returns {@link GetColumnStatisticsTaskRunCommandOutput}
 * @see {@link GetColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetColumnStatisticsTaskRunCommand extends $Command
  .classBuilder<
    GetColumnStatisticsTaskRunCommandInput,
    GetColumnStatisticsTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetColumnStatisticsTaskRun", {})
  .n("GlueClient", "GetColumnStatisticsTaskRunCommand")
  .f(void 0, void 0)
  .ser(se_GetColumnStatisticsTaskRunCommand)
  .de(de_GetColumnStatisticsTaskRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetColumnStatisticsTaskRunRequest;
      output: GetColumnStatisticsTaskRunResponse;
    };
    sdk: {
      input: GetColumnStatisticsTaskRunCommandInput;
      output: GetColumnStatisticsTaskRunCommandOutput;
    };
  };
}
