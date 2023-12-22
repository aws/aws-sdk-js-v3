// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { DeleteWorkerFleetRequest, DeleteWorkerFleetResponse } from "../models/models_0";
import { de_DeleteWorkerFleetCommand, se_DeleteWorkerFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkerFleetCommand}.
 */
export interface DeleteWorkerFleetCommandInput extends DeleteWorkerFleetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkerFleetCommand}.
 */
export interface DeleteWorkerFleetCommandOutput extends DeleteWorkerFleetResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to delete a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, DeleteWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, DeleteWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // DeleteWorkerFleetRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkerFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkerFleetCommandInput - {@link DeleteWorkerFleetCommandInput}
 * @returns {@link DeleteWorkerFleetCommandOutput}
 * @see {@link DeleteWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkerFleetCommandOutput} for command's `response` shape.
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
export class DeleteWorkerFleetCommand extends $Command
  .classBuilder<
    DeleteWorkerFleetCommandInput,
    DeleteWorkerFleetCommandOutput,
    IoTRoboRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTRoboRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTRoboRunner", "DeleteWorkerFleet", {})
  .n("IoTRoboRunnerClient", "DeleteWorkerFleetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkerFleetCommand)
  .de(de_DeleteWorkerFleetCommand)
  .build() {}
