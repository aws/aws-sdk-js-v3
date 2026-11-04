// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDestinationRequest, GetDestinationResponse } from "../models/models_0";
import { GetDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about a destination.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetDestinationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetDestinationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetDestinationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetDestinationResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Expression: "STRING_VALUE",
 * //   ExpressionType: "RuleName" || "MqttTopic",
 * //   Description: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDestinationCommandInput - {@link GetDestinationCommandInput}
 * @returns {@link GetDestinationCommandOutput}
 * @see {@link GetDestinationCommandInput} for command's `input` shape.
 * @see {@link GetDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class GetDestinationCommand extends command<GetDestinationCommandInput, GetDestinationCommandOutput>(
  _ep0,
  _mw0,
  "GetDestination",
  GetDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDestinationRequest;
      output: GetDestinationResponse;
    };
    sdk: {
      input: GetDestinationCommandInput;
      output: GetDestinationCommandOutput;
    };
  };
}
