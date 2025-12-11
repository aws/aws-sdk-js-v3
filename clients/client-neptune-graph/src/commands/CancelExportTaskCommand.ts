// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelExportTaskInput, CancelExportTaskOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { CancelExportTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelExportTaskCommand}.
 */
export interface CancelExportTaskCommandInput extends CancelExportTaskInput {}
/**
 * @public
 *
 * The output of {@link CancelExportTaskCommand}.
 */
export interface CancelExportTaskCommandOutput extends CancelExportTaskOutput, __MetadataBearer {}

/**
 * <p>Cancel the specified export task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CancelExportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CancelExportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // CancelExportTaskInput
 *   taskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelExportTaskOutput
 * //   graphId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   taskId: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "EXPORTING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //   format: "PARQUET" || "CSV", // required
 * //   destination: "STRING_VALUE", // required
 * //   kmsKeyIdentifier: "STRING_VALUE", // required
 * //   parquetType: "COLUMNAR",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelExportTaskCommandInput - {@link CancelExportTaskCommandInput}
 * @returns {@link CancelExportTaskCommandOutput}
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
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
export class CancelExportTaskCommand extends $Command
  .classBuilder<
    CancelExportTaskCommandInput,
    CancelExportTaskCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "CancelExportTask", {})
  .n("NeptuneGraphClient", "CancelExportTaskCommand")
  .sc(CancelExportTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelExportTaskInput;
      output: CancelExportTaskOutput;
    };
    sdk: {
      input: CancelExportTaskCommandInput;
      output: CancelExportTaskCommandOutput;
    };
  };
}
