// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { DeleteWorkerRequest, DeleteWorkerResponse } from "../models/models_0";
import { de_DeleteWorkerCommand, se_DeleteWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkerCommand}.
 */
export interface DeleteWorkerCommandInput extends DeleteWorkerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkerCommand}.
 */
export interface DeleteWorkerCommandOutput extends DeleteWorkerResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to delete a worker
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, DeleteWorkerCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, DeleteWorkerCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // DeleteWorkerRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkerCommandInput - {@link DeleteWorkerCommandInput}
 * @returns {@link DeleteWorkerCommandOutput}
 * @see {@link DeleteWorkerCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception thrown if a resource in a create request already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Exception thrown if something goes wrong within the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Exception thrown if a resource referenced in the request doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Exception thrown if the api has been called too quickly be the client.
 *
 * @throws {@link ValidationException} (client fault)
 *  Exception thrown if an invalid parameter is provided to an API.
 *
 * @throws {@link IoTRoboRunnerServiceException}
 * <p>Base exception class for all service exceptions from IoTRoboRunner service.</p>
 *
 */
export class DeleteWorkerCommand extends $Command
  .classBuilder<
    DeleteWorkerCommandInput,
    DeleteWorkerCommandOutput,
    IoTRoboRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: IoTRoboRunnerClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTRoboRunner", "DeleteWorker", {})
  .n("IoTRoboRunnerClient", "DeleteWorkerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkerCommand)
  .de(de_DeleteWorkerCommand)
  .build() {}
