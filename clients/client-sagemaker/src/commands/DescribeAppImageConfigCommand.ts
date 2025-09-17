// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppImageConfigRequest, DescribeAppImageConfigResponse } from "../models/models_2";
import { de_DescribeAppImageConfigCommand, se_DescribeAppImageConfigCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppImageConfigCommand}.
 */
export interface DescribeAppImageConfigCommandInput extends DescribeAppImageConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppImageConfigCommand}.
 */
export interface DescribeAppImageConfigCommandOutput extends DescribeAppImageConfigResponse, __MetadataBearer {}

/**
 * <p>Describes an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAppImageConfigRequest
 *   AppImageConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppImageConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppImageConfigResponse
 * //   AppImageConfigArn: "STRING_VALUE",
 * //   AppImageConfigName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   KernelGatewayImageConfig: { // KernelGatewayImageConfig
 * //     KernelSpecs: [ // KernelSpecs // required
 * //       { // KernelSpec
 * //         Name: "STRING_VALUE", // required
 * //         DisplayName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FileSystemConfig: { // FileSystemConfig
 * //       MountPath: "STRING_VALUE",
 * //       DefaultUid: Number("int"),
 * //       DefaultGid: Number("int"),
 * //     },
 * //   },
 * //   JupyterLabAppImageConfig: { // JupyterLabAppImageConfig
 * //     FileSystemConfig: {
 * //       MountPath: "STRING_VALUE",
 * //       DefaultUid: Number("int"),
 * //       DefaultGid: Number("int"),
 * //     },
 * //     ContainerConfig: { // ContainerConfig
 * //       ContainerArguments: [ // CustomImageContainerArguments
 * //         "STRING_VALUE",
 * //       ],
 * //       ContainerEntrypoint: [ // CustomImageContainerEntrypoint
 * //         "STRING_VALUE",
 * //       ],
 * //       ContainerEnvironmentVariables: { // CustomImageContainerEnvironmentVariables
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   CodeEditorAppImageConfig: { // CodeEditorAppImageConfig
 * //     FileSystemConfig: {
 * //       MountPath: "STRING_VALUE",
 * //       DefaultUid: Number("int"),
 * //       DefaultGid: Number("int"),
 * //     },
 * //     ContainerConfig: {
 * //       ContainerArguments: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ContainerEntrypoint: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ContainerEnvironmentVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppImageConfigCommandInput - {@link DescribeAppImageConfigCommandInput}
 * @returns {@link DescribeAppImageConfigCommandOutput}
 * @see {@link DescribeAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeAppImageConfigCommandOutput} for command's `response` shape.
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
export class DescribeAppImageConfigCommand extends $Command
  .classBuilder<
    DescribeAppImageConfigCommandInput,
    DescribeAppImageConfigCommandOutput,
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
  .s("SageMaker", "DescribeAppImageConfig", {})
  .n("SageMakerClient", "DescribeAppImageConfigCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAppImageConfigCommand)
  .de(de_DescribeAppImageConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppImageConfigRequest;
      output: DescribeAppImageConfigResponse;
    };
    sdk: {
      input: DescribeAppImageConfigCommandInput;
      output: DescribeAppImageConfigCommandOutput;
    };
  };
}
