// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { CreateDestinationRequest, CreateDestinationResponse } from "../models/models_0";
import { de_CreateDestinationCommand, se_CreateDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDestinationCommand}.
 */
export interface CreateDestinationCommandInput extends CreateDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDestinationCommand}.
 */
export interface CreateDestinationCommandOutput extends CreateDestinationResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to create a destination
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, CreateDestinationCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, CreateDestinationCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // CreateDestinationRequest
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   site: "STRING_VALUE", // required
 *   state: "STRING_VALUE",
 *   additionalFixedProperties: "STRING_VALUE",
 * };
 * const command = new CreateDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDestinationResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDestinationCommandInput - {@link CreateDestinationCommandInput}
 * @returns {@link CreateDestinationCommandOutput}
 * @see {@link CreateDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateDestinationCommandOutput} for command's `response` shape.
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
export class CreateDestinationCommand extends $Command
  .classBuilder<
    CreateDestinationCommandInput,
    CreateDestinationCommandOutput,
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
  .s("IoTRoboRunner", "CreateDestination", {})
  .n("IoTRoboRunnerClient", "CreateDestinationCommand")
  .f(void 0, void 0)
  .ser(se_CreateDestinationCommand)
  .de(de_CreateDestinationCommand)
  .build() {}
