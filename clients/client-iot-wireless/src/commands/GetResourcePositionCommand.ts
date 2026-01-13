// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { type GetResourcePositionRequest, GetResourcePositionResponse } from "../models/models_0";
import { GetResourcePosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get the position information for a given wireless device or a wireless gateway
 *             resource. The position information uses the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System
 *                 (WGS84)</a>.</p>
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
export class GetResourcePositionCommand extends $Command
  .classBuilder<
    GetResourcePositionCommandInput,
    GetResourcePositionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetResourcePosition", {})
  .n("IoTWirelessClient", "GetResourcePositionCommand")
  .sc(GetResourcePosition$)
  .build() {
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
