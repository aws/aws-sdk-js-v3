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
import { DisassociateDeviceFromPlacementRequest, DisassociateDeviceFromPlacementResponse } from "../models/models_0";
import {
  de_DisassociateDeviceFromPlacementCommand,
  se_DisassociateDeviceFromPlacementCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateDeviceFromPlacementCommand}.
 */
export interface DisassociateDeviceFromPlacementCommandInput extends DisassociateDeviceFromPlacementRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDeviceFromPlacementCommand}.
 */
export interface DisassociateDeviceFromPlacementCommandOutput
  extends DisassociateDeviceFromPlacementResponse,
    __MetadataBearer {}

/**
 * <p>Removes a physical device from a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DisassociateDeviceFromPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DisassociateDeviceFromPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // DisassociateDeviceFromPlacementRequest
 *   projectName: "STRING_VALUE", // required
 *   placementName: "STRING_VALUE", // required
 *   deviceTemplateName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDeviceFromPlacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDeviceFromPlacementCommandInput - {@link DisassociateDeviceFromPlacementCommandInput}
 * @returns {@link DisassociateDeviceFromPlacementCommandOutput}
 * @see {@link DisassociateDeviceFromPlacementCommandInput} for command's `input` shape.
 * @see {@link DisassociateDeviceFromPlacementCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoT1ClickProjectsServiceException}
 * <p>Base exception class for all service exceptions from IoT1ClickProjects service.</p>
 *
 * @public
 */
export class DisassociateDeviceFromPlacementCommand extends $Command
  .classBuilder<
    DisassociateDeviceFromPlacementCommandInput,
    DisassociateDeviceFromPlacementCommandOutput,
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
  .s("AWSIoT1ClickProjects", "DisassociateDeviceFromPlacement", {})
  .n("IoT1ClickProjectsClient", "DisassociateDeviceFromPlacementCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateDeviceFromPlacementCommand)
  .de(de_DisassociateDeviceFromPlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDeviceFromPlacementRequest;
      output: {};
    };
    sdk: {
      input: DisassociateDeviceFromPlacementCommandInput;
      output: DisassociateDeviceFromPlacementCommandOutput;
    };
  };
}
