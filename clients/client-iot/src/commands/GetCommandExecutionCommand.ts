// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetCommandExecutionRequest, GetCommandExecutionResponse } from "../models/models_1";
import { de_GetCommandExecutionCommand, se_GetCommandExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCommandExecutionCommand}.
 */
export interface GetCommandExecutionCommandInput extends GetCommandExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetCommandExecutionCommand}.
 */
export interface GetCommandExecutionCommandOutput extends GetCommandExecutionResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specific command execution on a single device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetCommandExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetCommandExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetCommandExecutionRequest
 *   executionId: "STRING_VALUE", // required
 *   targetArn: "STRING_VALUE", // required
 *   includeResult: true || false,
 * };
 * const command = new GetCommandExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetCommandExecutionResponse
 * //   executionId: "STRING_VALUE",
 * //   commandArn: "STRING_VALUE",
 * //   targetArn: "STRING_VALUE",
 * //   status: "CREATED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "REJECTED" || "TIMED_OUT",
 * //   statusReason: { // StatusReason
 * //     reasonCode: "STRING_VALUE", // required
 * //     reasonDescription: "STRING_VALUE",
 * //   },
 * //   result: { // CommandExecutionResultMap
 * //     "<keys>": { // CommandExecutionResult
 * //       S: "STRING_VALUE",
 * //       B: true || false,
 * //       BIN: new Uint8Array(),
 * //     },
 * //   },
 * //   parameters: { // CommandExecutionParameterMap
 * //     "<keys>": { // CommandParameterValue
 * //       S: "STRING_VALUE",
 * //       B: true || false,
 * //       I: Number("int"),
 * //       L: Number("long"),
 * //       D: Number("double"),
 * //       BIN: new Uint8Array(),
 * //       UL: "STRING_VALUE",
 * //     },
 * //   },
 * //   executionTimeoutSeconds: Number("long"),
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   startedAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * //   timeToLive: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCommandExecutionCommandInput - {@link GetCommandExecutionCommandInput}
 * @returns {@link GetCommandExecutionCommandOutput}
 * @see {@link GetCommandExecutionCommandInput} for command's `input` shape.
 * @see {@link GetCommandExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class GetCommandExecutionCommand extends $Command
  .classBuilder<
    GetCommandExecutionCommandInput,
    GetCommandExecutionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetCommandExecution", {})
  .n("IoTClient", "GetCommandExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetCommandExecutionCommand)
  .de(de_GetCommandExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCommandExecutionRequest;
      output: GetCommandExecutionResponse;
    };
    sdk: {
      input: GetCommandExecutionCommandInput;
      output: GetCommandExecutionCommandOutput;
    };
  };
}
