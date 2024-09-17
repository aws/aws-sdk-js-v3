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
import { DeletePlacementRequest, DeletePlacementResponse } from "../models/models_0";
import { de_DeletePlacementCommand, se_DeletePlacementCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlacementCommand}.
 */
export interface DeletePlacementCommandInput extends DeletePlacementRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlacementCommand}.
 */
export interface DeletePlacementCommandOutput extends DeletePlacementResponse, __MetadataBearer {}

/**
 * <p>Deletes a placement. To delete a placement, it must not have any devices associated with
 *       it.</p>
 *          <note>
 *             <p>When you delete a placement, all associated data becomes irretrievable.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DeletePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DeletePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const input = { // DeletePlacementRequest
 *   placementName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 * };
 * const command = new DeletePlacementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlacementCommandInput - {@link DeletePlacementCommandInput}
 * @returns {@link DeletePlacementCommandOutput}
 * @see {@link DeletePlacementCommandInput} for command's `input` shape.
 * @see {@link DeletePlacementCommandOutput} for command's `response` shape.
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
export class DeletePlacementCommand extends $Command
  .classBuilder<
    DeletePlacementCommandInput,
    DeletePlacementCommandOutput,
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
  .s("AWSIoT1ClickProjects", "DeletePlacement", {})
  .n("IoT1ClickProjectsClient", "DeletePlacementCommand")
  .f(void 0, void 0)
  .ser(se_DeletePlacementCommand)
  .de(de_DeletePlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlacementRequest;
      output: {};
    };
    sdk: {
      input: DeletePlacementCommandInput;
      output: DeletePlacementCommandOutput;
    };
  };
}
