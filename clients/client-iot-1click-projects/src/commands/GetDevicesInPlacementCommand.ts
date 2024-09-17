// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { GetDevicesInPlacementRequest, GetDevicesInPlacementResponse } from "../models/models_0";
import { de_GetDevicesInPlacementCommand, se_GetDevicesInPlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDevicesInPlacementCommand}.
 */
export interface GetDevicesInPlacementCommandInput extends GetDevicesInPlacementRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicesInPlacementCommand}.
 */
export interface GetDevicesInPlacementCommandOutput extends GetDevicesInPlacementResponse, __MetadataBearer {}

/**
 * <p>Returns an object enumerating the devices in a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, GetDevicesInPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // GetDevicesInPlacementRequest
 *   projectName: "STRING_VALUE", // required
 *   placementName: "STRING_VALUE", // required
 * };
 * const command = new GetDevicesInPlacementCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicesInPlacementResponse
 * //   devices: { // DeviceMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDevicesInPlacementCommandInput - {@link GetDevicesInPlacementCommandInput}
 * @returns {@link GetDevicesInPlacementCommandOutput}
 * @see {@link GetDevicesInPlacementCommandInput} for command's `input` shape.
 * @see {@link GetDevicesInPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 * @public
 */
export class GetDevicesInPlacementCommand extends $Command
  .classBuilder<
    GetDevicesInPlacementCommandInput,
    GetDevicesInPlacementCommandOutput,
    IoT1ClickProjectsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoT1ClickProjectsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoT1ClickProjects", "GetDevicesInPlacement", {})
  .n("IoT1ClickProjectsClient", "GetDevicesInPlacementCommand")
  .f(void 0, void 0)
  .ser(se_GetDevicesInPlacementCommand)
  .de(de_GetDevicesInPlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevicesInPlacementRequest;
      output: GetDevicesInPlacementResponse;
    };
    sdk: {
      input: GetDevicesInPlacementCommandInput;
      output: GetDevicesInPlacementCommandOutput;
    };
  };
}
