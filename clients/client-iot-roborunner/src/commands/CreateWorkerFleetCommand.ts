// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { CreateWorkerFleetRequest, CreateWorkerFleetResponse } from "../models/models_0";
import { de_CreateWorkerFleetCommand, se_CreateWorkerFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkerFleetCommand}.
 */
export interface CreateWorkerFleetCommandInput extends CreateWorkerFleetRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerFleetCommand}.
 */
export interface CreateWorkerFleetCommandOutput extends CreateWorkerFleetResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to create a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, CreateWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, CreateWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // CreateWorkerFleetRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   site: "STRING_VALUE", // required
 *   additionalFixedProperties: "STRING_VALUE",
 * };
 * const command = new CreateWorkerFleetCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkerFleetResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateWorkerFleetCommandInput - {@link CreateWorkerFleetCommandInput}
 * @returns {@link CreateWorkerFleetCommandOutput}
 * @see {@link CreateWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  Exception thrown if the user's AWS account has reached a service limit and the operation cannot proceed.
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
export class CreateWorkerFleetCommand extends $Command
  .classBuilder<
    CreateWorkerFleetCommandInput,
    CreateWorkerFleetCommandOutput,
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
  .s("IoTRoboRunner", "CreateWorkerFleet", {})
  .n("IoTRoboRunnerClient", "CreateWorkerFleetCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkerFleetCommand)
  .de(de_CreateWorkerFleetCommand)
  .build() {}
