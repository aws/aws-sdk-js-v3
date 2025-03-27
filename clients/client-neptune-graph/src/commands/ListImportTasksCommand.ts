// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListImportTasksInput, ListImportTasksOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListImportTasksCommand, se_ListImportTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportTasksCommand}.
 */
export interface ListImportTasksCommandInput extends ListImportTasksInput {}
/**
 * @public
 *
 * The output of {@link ListImportTasksCommand}.
 */
export interface ListImportTasksCommandOutput extends ListImportTasksOutput, __MetadataBearer {}

/**
 * <p>Lists import tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListImportTasksCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListImportTasksCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListImportTasksInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListImportTasksOutput
 * //   tasks: [ // ImportTaskSummaryList // required
 * //     { // ImportTaskSummary
 * //       graphId: "STRING_VALUE",
 * //       taskId: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       format: "CSV" || "OPEN_CYPHER" || "PARQUET" || "NTRIPLES",
 * //       parquetType: "COLUMNAR",
 * //       roleArn: "STRING_VALUE", // required
 * //       status: "INITIALIZING" || "EXPORTING" || "ANALYZING_DATA" || "IMPORTING" || "REPROVISIONING" || "ROLLING_BACK" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportTasksCommandInput - {@link ListImportTasksCommandInput}
 * @returns {@link ListImportTasksCommandOutput}
 * @see {@link ListImportTasksCommandInput} for command's `input` shape.
 * @see {@link ListImportTasksCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 *
 * @public
 */
export class ListImportTasksCommand extends $Command
  .classBuilder<
    ListImportTasksCommandInput,
    ListImportTasksCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "ListImportTasks", {})
  .n("NeptuneGraphClient", "ListImportTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListImportTasksCommand)
  .de(de_ListImportTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportTasksInput;
      output: ListImportTasksOutput;
    };
    sdk: {
      input: ListImportTasksCommandInput;
      output: ListImportTasksCommandOutput;
    };
  };
}
