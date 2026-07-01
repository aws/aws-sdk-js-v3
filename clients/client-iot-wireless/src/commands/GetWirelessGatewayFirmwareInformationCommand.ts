// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetWirelessGatewayFirmwareInformationRequest,
  GetWirelessGatewayFirmwareInformationResponse,
} from "../models/models_0";
import { GetWirelessGatewayFirmwareInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayFirmwareInformationCommand}.
 */
export interface GetWirelessGatewayFirmwareInformationCommandInput extends GetWirelessGatewayFirmwareInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayFirmwareInformationCommand}.
 */
export interface GetWirelessGatewayFirmwareInformationCommandOutput extends GetWirelessGatewayFirmwareInformationResponse, __MetadataBearer {}

/**
 * <p>Gets the firmware version and other information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayFirmwareInformationRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessGatewayFirmwareInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayFirmwareInformationResponse
 * //   LoRaWAN: { // LoRaWANGatewayCurrentVersion
 * //     CurrentVersion: { // LoRaWANGatewayVersion
 * //       PackageVersion: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       Station: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayFirmwareInformationCommandInput - {@link GetWirelessGatewayFirmwareInformationCommandInput}
 * @returns {@link GetWirelessGatewayFirmwareInformationCommandOutput}
 * @see {@link GetWirelessGatewayFirmwareInformationCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayFirmwareInformationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class GetWirelessGatewayFirmwareInformationCommand extends command<GetWirelessGatewayFirmwareInformationCommandInput, GetWirelessGatewayFirmwareInformationCommandOutput>(
  _ep0,
  _mw0,
  "GetWirelessGatewayFirmwareInformation",
  GetWirelessGatewayFirmwareInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessGatewayFirmwareInformationRequest;
      output: GetWirelessGatewayFirmwareInformationResponse;
    };
    sdk: {
      input: GetWirelessGatewayFirmwareInformationCommandInput;
      output: GetWirelessGatewayFirmwareInformationCommandOutput;
    };
  };
}
