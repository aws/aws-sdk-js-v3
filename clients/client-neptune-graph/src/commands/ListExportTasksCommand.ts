// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListExportTasksInput, ListExportTasksOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListExportTasksCommand, se_ListExportTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportTasksCommand}.
 */
export interface ListExportTasksCommandInput extends ListExportTasksInput {}
/**
 * @public
 *
 * The output of {@link ListExportTasksCommand}.
 */
export interface ListExportTasksCommandOutput extends ListExportTasksOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of export tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListExportTasksCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListExportTasksCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListExportTasksInput
 *   graphIdentifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListExportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListExportTasksOutput
 * //   tasks: [ // ExportTaskSummaryList // required
 * //     { // ExportTaskSummary
 * //       graphId: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       status: "INITIALIZING" || "EXPORTING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //       format: "PARQUET" || "CSV", // required
 * //       destination: "STRING_VALUE", // required
 * //       kmsKeyIdentifier: "STRING_VALUE", // required
 * //       parquetType: "COLUMNAR",
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportTasksCommandInput - {@link ListExportTasksCommandInput}
 * @returns {@link ListExportTasksCommandOutput}
 * @see {@link ListExportTasksCommandInput} for command's `input` shape.
 * @see {@link ListExportTasksCommandOutput} for command's `response` shape.
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
export class ListExportTasksCommand extends $Command
  .classBuilder<
    ListExportTasksCommandInput,
    ListExportTasksCommandOutput,
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
  .s("AmazonNeptuneGraph", "ListExportTasks", {})
  .n("NeptuneGraphClient", "ListExportTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListExportTasksCommand)
  .de(de_ListExportTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportTasksInput;
      output: ListExportTasksOutput;
    };
    sdk: {
      input: ListExportTasksCommandInput;
      output: ListExportTasksCommandOutput;
    };
  };
}
