// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetPositionRequest, GetPositionResponse } from "../models/models_0";
import { GetPosition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPositionCommand}.
 */
export interface GetPositionCommandInput extends GetPositionRequest {}
/**
 * @public
 *
 * The output of {@link GetPositionCommand}.
 */
export interface GetPositionCommandOutput extends GetPositionResponse, __MetadataBearer {}

/**
 * <p>Get the position information for a given resource.</p>
 *          <important>
 *             <p>This action is no longer supported. Calls to retrieve the position information
 *                 should use the <a href="https://docs.aws.amazon.com/iot-wireless/latest/apireference/API_GetResourcePosition.html">GetResourcePosition</a> API operation instead.</p>
 *          </important>
 *
 * @deprecated This operation is no longer supported.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPositionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPositionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPositionRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 * };
 * const command = new GetPositionCommand(input);
 * const response = await client.send(command);
 * // { // GetPositionResponse
 * //   Position: [ // PositionCoordinate
 * //     Number("float"),
 * //   ],
 * //   Accuracy: { // Accuracy
 * //     HorizontalAccuracy: Number("float"),
 * //     VerticalAccuracy: Number("float"),
 * //   },
 * //   SolverType: "GNSS",
 * //   SolverProvider: "Semtech",
 * //   SolverVersion: "STRING_VALUE",
 * //   Timestamp: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPositionCommandInput - {@link GetPositionCommandInput}
 * @returns {@link GetPositionCommandOutput}
 * @see {@link GetPositionCommandInput} for command's `input` shape.
 * @see {@link GetPositionCommandOutput} for command's `response` shape.
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
export class GetPositionCommand extends $Command
  .classBuilder<
    GetPositionCommandInput,
    GetPositionCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetPosition", {})
  .n("IoTWirelessClient", "GetPositionCommand")
  .sc(GetPosition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPositionRequest;
      output: GetPositionResponse;
    };
    sdk: {
      input: GetPositionCommandInput;
      output: GetPositionCommandOutput;
    };
  };
}
