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
import { AssociateDeviceWithPlacementRequest, AssociateDeviceWithPlacementResponse } from "../models/models_0";
import {
  de_AssociateDeviceWithPlacementCommand,
  se_AssociateDeviceWithPlacementCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDeviceWithPlacementCommand}.
 */
export interface AssociateDeviceWithPlacementCommandInput extends AssociateDeviceWithPlacementRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDeviceWithPlacementCommand}.
 */
export interface AssociateDeviceWithPlacementCommandOutput
  extends AssociateDeviceWithPlacementResponse,
    __MetadataBearer {}

/**
 * <p>Associates a physical device with a placement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, AssociateDeviceWithPlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // AssociateDeviceWithPlacementRequest
 *   projectName: "STRING_VALUE", // required
 *   placementName: "STRING_VALUE", // required
 *   deviceId: "STRING_VALUE", // required
 *   deviceTemplateName: "STRING_VALUE", // required
 * };
 * const command = new AssociateDeviceWithPlacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDeviceWithPlacementCommandInput - {@link AssociateDeviceWithPlacementCommandInput}
 * @returns {@link AssociateDeviceWithPlacementCommandOutput}
 * @see {@link AssociateDeviceWithPlacementCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithPlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceConflictException} (client fault)
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
export class AssociateDeviceWithPlacementCommand extends $Command
  .classBuilder<
    AssociateDeviceWithPlacementCommandInput,
    AssociateDeviceWithPlacementCommandOutput,
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
  .s("AWSIoT1ClickProjects", "AssociateDeviceWithPlacement", {})
  .n("IoT1ClickProjectsClient", "AssociateDeviceWithPlacementCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDeviceWithPlacementCommand)
  .de(de_AssociateDeviceWithPlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDeviceWithPlacementRequest;
      output: {};
    };
    sdk: {
      input: AssociateDeviceWithPlacementCommandInput;
      output: AssociateDeviceWithPlacementCommandOutput;
    };
  };
}
