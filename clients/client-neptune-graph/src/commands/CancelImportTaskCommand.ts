// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelImportTaskInput, CancelImportTaskOutput } from "../models/models_0";
import { CancelImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelImportTaskCommand}.
 */
export interface CancelImportTaskCommandInput extends CancelImportTaskInput {}
/**
 * @public
 *
 * The output of {@link CancelImportTaskCommand}.
 */
export interface CancelImportTaskCommandOutput extends CancelImportTaskOutput, __MetadataBearer {}

/**
 * Deletes the specified import task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CancelImportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CancelImportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // CancelImportTaskInput
 *   taskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelImportTaskOutput
 * //   graphId: "STRING_VALUE",
 * //   taskId: "STRING_VALUE", // required
 * //   source: "STRING_VALUE", // required
 * //   format: "CSV" || "OPEN_CYPHER" || "PARQUET" || "NTRIPLES",
 * //   parquetType: "COLUMNAR",
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "EXPORTING" || "ANALYZING_DATA" || "IMPORTING" || "REPROVISIONING" || "ROLLING_BACK" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param CancelImportTaskCommandInput - {@link CancelImportTaskCommandInput}
 * @returns {@link CancelImportTaskCommandOutput}
 * @see {@link CancelImportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelImportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Raised when a conflict is encountered.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class CancelImportTaskCommand extends command<CancelImportTaskCommandInput, CancelImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "CancelImportTask",
  CancelImportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelImportTaskInput;
      output: CancelImportTaskOutput;
    };
    sdk: {
      input: CancelImportTaskCommandInput;
      output: CancelImportTaskCommandOutput;
    };
  };
}
