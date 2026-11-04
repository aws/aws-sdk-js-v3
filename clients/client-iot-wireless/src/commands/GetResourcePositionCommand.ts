// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcePositionRequest, GetResourcePositionResponse } from "../models/models_0";
import { GetResourcePosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePositionCommand}.
 */
export interface GetResourcePositionCommandInput extends GetResourcePositionRequest {}
/**
 * @public
 */
export type GetResourcePositionCommandOutputType = Omit<GetResourcePositionResponse, "GeoJsonPayload"> & {
  GeoJsonPayload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetResourcePositionCommand}.
 */
export interface GetResourcePositionCommandOutput extends GetResourcePositionCommandOutputType, __MetadataBearer {}

/**
 * Get the position information for a given wireless device or a wireless gateway resource. The position information uses the [World Geodetic System (WGS84)](https://gisgeography.com/wgs84-world-geodetic-system/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourcePositionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourcePositionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetResourcePositionRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 * };
 * const command = new GetResourcePositionCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePositionResponse
 * //   GeoJsonPayload: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetResourcePositionCommandInput - {@link GetResourcePositionCommandInput}
 * @returns {@link GetResourcePositionCommandOutput}
 * @see {@link GetResourcePositionCommandInput} for command's `input` shape.
 * @see {@link GetResourcePositionCommandOutput} for command's `response` shape.
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
export class GetResourcePositionCommand extends command<GetResourcePositionCommandInput, GetResourcePositionCommandOutput>(
  _ep0,
  _mw0,
  "GetResourcePosition",
  GetResourcePosition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePositionRequest;
      output: GetResourcePositionResponse;
    };
    sdk: {
      input: GetResourcePositionCommandInput;
      output: GetResourcePositionCommandOutput;
    };
  };
}
