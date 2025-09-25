// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { UpdateResourcePositionRequest, UpdateResourcePositionResponse } from "../models/models_1";
import { UpdateResourcePosition } from "../schemas/schemas_3_Position";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type UpdateResourcePositionCommandInputType = Omit<UpdateResourcePositionRequest, "GeoJsonPayload"> & {
  GeoJsonPayload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link UpdateResourcePositionCommand}.
 */
export interface UpdateResourcePositionCommandInput extends UpdateResourcePositionCommandInputType {}
/**
 * @public
 *
 * The output of {@link UpdateResourcePositionCommand}.
 */
export interface UpdateResourcePositionCommandOutput extends UpdateResourcePositionResponse, __MetadataBearer {}

/**
 * <p>Update the position information of a given wireless device or a wireless gateway
 *             resource. The position coordinates are based on the <a href="https://gisgeography.com/wgs84-world-geodetic-system/"> World Geodetic System
 *                 (WGS84)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdateResourcePositionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdateResourcePositionRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 *   GeoJsonPayload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateResourcePositionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourcePositionCommandInput - {@link UpdateResourcePositionCommandInput}
 * @returns {@link UpdateResourcePositionCommandOutput}
 * @see {@link UpdateResourcePositionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourcePositionCommandOutput} for command's `response` shape.
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
export class UpdateResourcePositionCommand extends $Command
  .classBuilder<
    UpdateResourcePositionCommandInput,
    UpdateResourcePositionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "UpdateResourcePosition", {})
  .n("IoTWirelessClient", "UpdateResourcePositionCommand")
  .sc(UpdateResourcePosition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourcePositionRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourcePositionCommandInput;
      output: UpdateResourcePositionCommandOutput;
    };
  };
}
