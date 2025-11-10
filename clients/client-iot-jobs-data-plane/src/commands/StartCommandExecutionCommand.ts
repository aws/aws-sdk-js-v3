// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { StartCommandExecutionRequest, StartCommandExecutionResponse } from "../models/models_0";
import { StartCommandExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Using the command created with the <code>CreateCommand</code> API, start a command
 *          execution on a specific device.</p>
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
 *  <p>A conflict has occurred when performing the API request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred when performing the API request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 *
 * @public
 */
export class StartCommandExecutionCommand extends $Command
  .classBuilder<
    StartCommandExecutionCommandInput,
    StartCommandExecutionCommandOutput,
    IoTJobsDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTJobsDataPlaneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotLaserThingJobManagerExternalService", "StartCommandExecution", {})
  .n("IoTJobsDataPlaneClient", "StartCommandExecutionCommand")
  .sc(StartCommandExecution)
  .build() {
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
