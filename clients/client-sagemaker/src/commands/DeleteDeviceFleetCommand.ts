// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeviceFleetRequest } from "../models/models_2";
import { de_DeleteDeviceFleetCommand, se_DeleteDeviceFleetCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeviceFleetCommand}.
 */
export interface DeleteDeviceFleetCommandInput extends DeleteDeviceFleetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeviceFleetCommand}.
 */
export interface DeleteDeviceFleetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteDeviceFleetRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeviceFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeviceFleetCommandInput - {@link DeleteDeviceFleetCommandInput}
 * @returns {@link DeleteDeviceFleetCommandOutput}
 * @see {@link DeleteDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteDeviceFleetCommand extends $Command
  .classBuilder<
    DeleteDeviceFleetCommandInput,
    DeleteDeviceFleetCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DeleteDeviceFleet", {})
  .n("SageMakerClient", "DeleteDeviceFleetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeviceFleetCommand)
  .de(de_DeleteDeviceFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeviceFleetRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeviceFleetCommandInput;
      output: DeleteDeviceFleetCommandOutput;
    };
  };
}
