// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTRoboRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTRoboRunnerClient";
import { GetDestinationRequest, GetDestinationResponse } from "../models/models_0";
import { de_GetDestinationCommand, se_GetDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDestinationCommand}.
 */
export interface GetDestinationCommandInput extends GetDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetDestinationCommand}.
 */
export interface GetDestinationCommandOutput extends GetDestinationResponse, __MetadataBearer {}

/**
 * @public
 * Grants permission to get a destination
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTRoboRunnerClient, GetDestinationCommand } from "@aws-sdk/client-iot-roborunner"; // ES Modules import
 * // const { IoTRoboRunnerClient, GetDestinationCommand } = require("@aws-sdk/client-iot-roborunner"); // CommonJS import
 * const client = new IoTRoboRunnerClient(config);
 * const input = { // GetDestinationRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetDestinationResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   site: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * //   additionalFixedProperties: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDestinationCommandInput - {@link GetDestinationCommandInput}
 * @returns {@link GetDestinationCommandOutput}
 * @see {@link GetDestinationCommandInput} for command's `input` shape.
 * @see {@link GetDestinationCommandOutput} for command's `response` shape.
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
export class GetDestinationCommand extends $Command
  .classBuilder<
    GetDestinationCommandInput,
    GetDestinationCommandOutput,
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
  .s("IoTRoboRunner", "GetDestination", {})
  .n("IoTRoboRunnerClient", "GetDestinationCommand")
  .f(void 0, void 0)
  .ser(se_GetDestinationCommand)
  .de(de_GetDestinationCommand)
  .build() {}
