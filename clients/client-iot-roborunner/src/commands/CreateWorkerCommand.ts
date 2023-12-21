// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { CreateWorkerRequest, CreateWorkerResponse } from "../models/models_0";
import { de_CreateWorkerCommand, se_CreateWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkerCommand}.
 */
export interface CreateWorkerCommandInput extends CreateWorkerRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerCommand}.
 */
export interface CreateWorkerCommandOutput extends CreateWorkerResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to create a worker
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, CreateWorkerCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, CreateWorkerCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // CreateWorkerRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   fleet: "STRING_VALUE", // required
 *   additionalTransientProperties: "STRING_VALUE",
 *   additionalFixedProperties: "STRING_VALUE",
 *   vendorProperties: { // VendorProperties
 *     vendorWorkerId: "STRING_VALUE", // required
 *     vendorWorkerIpAddress: "STRING_VALUE",
 *     vendorAdditionalTransientProperties: "STRING_VALUE",
 *     vendorAdditionalFixedProperties: "STRING_VALUE",
 *   },
 *   position: { // PositionCoordinates Union: only one key present
 *     cartesianCoordinates: { // CartesianCoordinates
 *       x: Number("double"), // required
 *       y: Number("double"), // required
 *       z: Number("double"),
 *     },
 *   },
 *   orientation: { // Orientation Union: only one key present
 *     degrees: Number("double"),
 *   },
 * };
 * const command = new CreateWorkerCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkerResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   site: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkerCommandInput - {@link CreateWorkerCommandInput}
 * @returns {@link CreateWorkerCommandOutput}
 * @see {@link CreateWorkerCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerCommandOutput} for command's `response` shape.
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
export class CreateWorkerCommand extends $Command
  .classBuilder<
    CreateWorkerCommandInput,
    CreateWorkerCommandOutput,
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
  .s("IoTRoboRunner", "CreateWorker", {})
  .n("IoTRoboRunnerClient", "CreateWorkerCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkerCommand)
  .de(de_CreateWorkerCommand)
  .build() {}
