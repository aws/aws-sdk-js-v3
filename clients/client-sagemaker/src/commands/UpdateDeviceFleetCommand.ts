// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeviceFleetRequest } from "../models/models_4";
import { de_UpdateDeviceFleetCommand, se_UpdateDeviceFleetCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceFleetCommand}.
 */
export interface UpdateDeviceFleetCommandInput extends UpdateDeviceFleetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceFleetCommand}.
 */
export interface UpdateDeviceFleetCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a fleet of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateDeviceFleetRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   OutputConfig: { // EdgeOutputConfig
 *     S3OutputLocation: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *     PresetDeploymentType: "GreengrassV2Component",
 *     PresetDeploymentConfig: "STRING_VALUE",
 *   },
 *   EnableIotRoleAlias: true || false,
 * };
 * const command = new UpdateDeviceFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeviceFleetCommandInput - {@link UpdateDeviceFleetCommandInput}
 * @returns {@link UpdateDeviceFleetCommandOutput}
 * @see {@link UpdateDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateDeviceFleetCommand extends $Command
  .classBuilder<
    UpdateDeviceFleetCommandInput,
    UpdateDeviceFleetCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateDeviceFleet", {})
  .n("SageMakerClient", "UpdateDeviceFleetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDeviceFleetCommand)
  .de(de_UpdateDeviceFleetCommand)
  .build() {}
