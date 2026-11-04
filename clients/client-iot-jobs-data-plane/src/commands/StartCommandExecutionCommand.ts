// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCommandExecutionRequest, StartCommandExecutionResponse } from "../models/models_0";
import { StartCommandExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCommandExecutionCommand}.
 */
export interface StartCommandExecutionCommandInput extends StartCommandExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartCommandExecutionCommand}.
 */
export interface StartCommandExecutionCommandOutput extends StartCommandExecutionResponse, __MetadataBearer {}

/**
 * Using the command created with the `CreateCommand` API, start a command execution on a specific device.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, StartCommandExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, StartCommandExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * // import type { IoTJobsDataPlaneClientConfig } from "@aws-sdk/client-iot-jobs-data-plane";
 * const config = {}; // type is IoTJobsDataPlaneClientConfig
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // StartCommandExecutionRequest
 *   targetArn: "STRING_VALUE", // required
 *   commandArn: "STRING_VALUE", // required
 *   parameters: { // CommandExecutionParameterMap
 *     "<keys>": { // CommandParameterValue
 *       S: "STRING_VALUE",
 *       B: true || false,
 *       I: Number("int"),
 *       L: Number("long"),
 *       D: Number("double"),
 *       BIN: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       UL: "STRING_VALUE",
 *     },
 *   },
 *   executionTimeoutSeconds: Number("long"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartCommandExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartCommandExecutionResponse
 * //   executionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartCommandExecutionCommandInput - {@link StartCommandExecutionCommandInput}
 * @returns {@link StartCommandExecutionCommandOutput}
 * @see {@link StartCommandExecutionCommandInput} for command's `input` shape.
 * @see {@link StartCommandExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict has occurred when performing the API request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred when performing the API request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded for this request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 *
 * Base exception class for all service exceptions from IoTJobsDataPlane service.
 *
 * @public
 */
export class StartCommandExecutionCommand extends command<StartCommandExecutionCommandInput, StartCommandExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartCommandExecution",
  StartCommandExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCommandExecutionRequest;
      output: StartCommandExecutionResponse;
    };
    sdk: {
      input: StartCommandExecutionCommandInput;
      output: StartCommandExecutionCommandOutput;
    };
  };
}
