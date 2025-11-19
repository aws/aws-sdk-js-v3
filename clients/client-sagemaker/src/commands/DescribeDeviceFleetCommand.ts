// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeviceFleetRequest, DescribeDeviceFleetResponse } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeDeviceFleet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceFleetCommand}.
 */
export interface DescribeDeviceFleetCommandInput extends DescribeDeviceFleetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceFleetCommand}.
 */
export interface DescribeDeviceFleetCommandOutput extends DescribeDeviceFleetResponse, __MetadataBearer {}

/**
 * <p>A description of the fleet the device belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeDeviceFleetRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeviceFleetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceFleetResponse
 * //   DeviceFleetName: "STRING_VALUE", // required
 * //   DeviceFleetArn: "STRING_VALUE", // required
 * //   OutputConfig: { // EdgeOutputConfig
 * //     S3OutputLocation: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     PresetDeploymentType: "GreengrassV2Component",
 * //     PresetDeploymentConfig: "STRING_VALUE",
 * //   },
 * //   Description: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   RoleArn: "STRING_VALUE",
 * //   IotRoleAlias: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeviceFleetCommandInput - {@link DescribeDeviceFleetCommandInput}
 * @returns {@link DescribeDeviceFleetCommandOutput}
 * @see {@link DescribeDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeDeviceFleetCommand extends $Command
  .classBuilder<
    DescribeDeviceFleetCommandInput,
    DescribeDeviceFleetCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeDeviceFleet", {})
  .n("SageMakerClient", "DescribeDeviceFleetCommand")
  .sc(DescribeDeviceFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeviceFleetRequest;
      output: DescribeDeviceFleetResponse;
    };
    sdk: {
      input: DescribeDeviceFleetCommandInput;
      output: DescribeDeviceFleetCommandOutput;
    };
  };
}
