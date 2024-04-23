// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { UpdateDestinationRequest, UpdateDestinationResponse } from "../models/models_0";
import { de_UpdateDestinationCommand, se_UpdateDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandInput extends UpdateDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandOutput extends UpdateDestinationResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to update a destination
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, UpdateDestinationCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, UpdateDestinationCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // UpdateDestinationRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   state: "STRING_VALUE",
 *   additionalFixedProperties: "STRING_VALUE",
 * };
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDestinationResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * //   additionalFixedProperties: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDestinationCommandInput - {@link UpdateDestinationCommandInput}
 * @returns {@link UpdateDestinationCommandOutput}
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
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
export class UpdateDestinationCommand extends $Command
  .classBuilder<
    UpdateDestinationCommandInput,
    UpdateDestinationCommandOutput,
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
  .s("IoTRoboRunner", "UpdateDestination", {})
  .n("IoTRoboRunnerClient", "UpdateDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDestinationCommand)
  .de(de_UpdateDestinationCommand)
  .build() {}
