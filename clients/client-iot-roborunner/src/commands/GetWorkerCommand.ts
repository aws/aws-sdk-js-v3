// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { GetWorkerRequest, GetWorkerResponse } from "../models/models_0";
import { de_GetWorkerCommand, se_GetWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkerCommand}.
 */
export interface GetWorkerCommandInput extends GetWorkerRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkerCommand}.
 */
export interface GetWorkerCommandOutput extends GetWorkerResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to get a worker
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, GetWorkerCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, GetWorkerCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // GetWorkerRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetWorkerCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkerResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   fleet: "STRING_VALUE", // required
 * //   site: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   name: "STRING_VALUE", // required
 * //   additionalTransientProperties: "STRING_VALUE",
 * //   additionalFixedProperties: "STRING_VALUE",
 * //   vendorProperties: { // VendorProperties
 * //     vendorWorkerId: "STRING_VALUE", // required
 * //     vendorWorkerIpAddress: "STRING_VALUE",
 * //     vendorAdditionalTransientProperties: "STRING_VALUE",
 * //     vendorAdditionalFixedProperties: "STRING_VALUE",
 * //   },
 * //   position: { // PositionCoordinates Union: only one key present
 * //     cartesianCoordinates: { // CartesianCoordinates
 * //       x: Number("double"), // required
 * //       y: Number("double"), // required
 * //       z: Number("double"),
 * //     },
 * //   },
 * //   orientation: { // Orientation Union: only one key present
 * //     degrees: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkerCommandInput - {@link GetWorkerCommandInput}
 * @returns {@link GetWorkerCommandOutput}
 * @see {@link GetWorkerCommandInput} for command's `input` shape.
 * @see {@link GetWorkerCommandOutput} for command's `response` shape.
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
export class GetWorkerCommand extends $Command
  .classBuilder<
    GetWorkerCommandInput,
    GetWorkerCommandOutput,
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
  .s("IoTRoboRunner", "GetWorker", {})
  .n("IoTRoboRunnerClient", "GetWorkerCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkerCommand)
  .de(de_GetWorkerCommand)
  .build() {}
