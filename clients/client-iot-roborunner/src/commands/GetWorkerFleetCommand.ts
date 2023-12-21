// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { GetWorkerFleetRequest, GetWorkerFleetResponse } from "../models/models_0";
import { de_GetWorkerFleetCommand, se_GetWorkerFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkerFleetCommand}.
 */
export interface GetWorkerFleetCommandInput extends GetWorkerFleetRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkerFleetCommand}.
 */
export interface GetWorkerFleetCommandOutput extends GetWorkerFleetResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to get a worker fleet
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, GetWorkerFleetCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, GetWorkerFleetCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // GetWorkerFleetRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetWorkerFleetCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkerFleetResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   site: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   additionalFixedProperties: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkerFleetCommandInput - {@link GetWorkerFleetCommandInput}
 * @returns {@link GetWorkerFleetCommandOutput}
 * @see {@link GetWorkerFleetCommandInput} for command's `input` shape.
 * @see {@link GetWorkerFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTRoboRunnerClientResolvedConfig | config} for IoTRoboRunnerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *   User does not have sufficient access to perform this action.
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
export class GetWorkerFleetCommand extends $Command
  .classBuilder<
    GetWorkerFleetCommandInput,
    GetWorkerFleetCommandOutput,
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
  .s("IoTRoboRunner", "GetWorkerFleet", {})
  .n("IoTRoboRunnerClient", "GetWorkerFleetCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkerFleetCommand)
  .de(de_GetWorkerFleetCommand)
  .build() {}
