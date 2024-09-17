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
import { UpdatePlacementRequest, UpdatePlacementResponse } from "../models/models_0";
import { de_UpdatePlacementCommand, se_UpdatePlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlacementCommand}.
 */
export interface UpdatePlacementCommandInput extends UpdatePlacementRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePlacementCommand}.
 */
export interface UpdatePlacementCommandOutput extends UpdatePlacementResponse, __MetadataBearer {}

/**
 * <p>Updates a placement with the given attributes. To clear an attribute, pass an empty value
 *       (i.e., "").</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, UpdatePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, UpdatePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // UpdatePlacementRequest
 *   placementName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   attributes: { // PlacementAttributeMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdatePlacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePlacementCommandInput - {@link UpdatePlacementCommandInput}
 * @returns {@link UpdatePlacementCommandOutput}
 * @see {@link UpdatePlacementCommandInput} for command's `input` shape.
 * @see {@link UpdatePlacementCommandOutput} for command's `response` shape.
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
export class UpdatePlacementCommand extends $Command
  .classBuilder<
    UpdatePlacementCommandInput,
    UpdatePlacementCommandOutput,
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
  .s("AWSIoT1ClickProjects", "UpdatePlacement", {})
  .n("IoT1ClickProjectsClient", "UpdatePlacementCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePlacementCommand)
  .de(de_UpdatePlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePlacementRequest;
      output: {};
    };
    sdk: {
      input: UpdatePlacementCommandInput;
      output: UpdatePlacementCommandOutput;
    };
  };
}
