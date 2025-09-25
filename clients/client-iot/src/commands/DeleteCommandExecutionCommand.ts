// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCommandExecutionRequest, DeleteCommandExecutionResponse } from "../models/models_1";
import { DeleteCommandExecution } from "../schemas/schemas_18_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCommandExecutionCommand}.
 */
export interface DeleteCommandExecutionCommandInput extends DeleteCommandExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCommandExecutionCommand}.
 */
export interface DeleteCommandExecutionCommandOutput extends DeleteCommandExecutionResponse, __MetadataBearer {}

/**
 * <p>Delete a command execution.</p>
 *          <note>
 *             <p>Only command executions that enter a terminal state can be deleted from
 *         your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCommandExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCommandExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteCommandExecutionRequest
 *   executionId: "STRING_VALUE", // required
 *   targetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCommandExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCommandExecutionCommandInput - {@link DeleteCommandExecutionCommandInput}
 * @returns {@link DeleteCommandExecutionCommandOutput}
 * @see {@link DeleteCommandExecutionCommandInput} for command's `input` shape.
 * @see {@link DeleteCommandExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
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
export class DeleteCommandExecutionCommand extends $Command
  .classBuilder<
    DeleteCommandExecutionCommandInput,
    DeleteCommandExecutionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeleteCommandExecution", {})
  .n("IoTClient", "DeleteCommandExecutionCommand")
  .sc(DeleteCommandExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCommandExecutionRequest;
      output: {};
    };
    sdk: {
      input: DeleteCommandExecutionCommandInput;
      output: DeleteCommandExecutionCommandOutput;
    };
  };
}
