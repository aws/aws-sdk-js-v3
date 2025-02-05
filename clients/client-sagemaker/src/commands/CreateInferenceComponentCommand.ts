// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInferenceComponentInput, CreateInferenceComponentOutput } from "../models/models_1";
import { de_CreateInferenceComponentCommand, se_CreateInferenceComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInferenceComponentCommand}.
 */
export interface CreateInferenceComponentCommandInput extends CreateInferenceComponentInput {}
/**
 * @public
 *
 * The output of {@link CreateInferenceComponentCommand}.
 */
export interface CreateInferenceComponentCommandOutput extends CreateInferenceComponentOutput, __MetadataBearer {}

/**
 * <p>Creates an inference component, which is a SageMaker AI hosting object that you can
 *          use to deploy a model to an endpoint. In the inference component settings, you specify the
 *          model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You
 *          can optimize resource utilization by tailoring how the required CPU cores, accelerators,
 *          and memory are allocated. You can deploy multiple inference components to an endpoint,
 *          where each inference component contains one model and the resource utilization needs for
 *          that individual model. After you deploy an inference component, you can directly invoke the
 *          associated model when you use the InvokeEndpoint API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateInferenceComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateInferenceComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // CreateInferenceComponentInput
 *   InferenceComponentName: "STRING_VALUE", // required
 *   EndpointName: "STRING_VALUE", // required
 *   VariantName: "STRING_VALUE",
 *   Specification: { // InferenceComponentSpecification
 *     ModelName: "STRING_VALUE",
 *     Container: { // InferenceComponentContainerSpecification
 *       Image: "STRING_VALUE",
 *       ArtifactUrl: "STRING_VALUE",
 *       Environment: { // EnvironmentMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     StartupParameters: { // InferenceComponentStartupParameters
 *       ModelDataDownloadTimeoutInSeconds: Number("int"),
 *       ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 *     },
 *     ComputeResourceRequirements: { // InferenceComponentComputeResourceRequirements
 *       NumberOfCpuCoresRequired: Number("float"),
 *       NumberOfAcceleratorDevicesRequired: Number("float"),
 *       MinMemoryRequiredInMb: Number("int"), // required
 *       MaxMemoryRequiredInMb: Number("int"),
 *     },
 *     BaseInferenceComponentName: "STRING_VALUE",
 *   },
 *   RuntimeConfig: { // InferenceComponentRuntimeConfig
 *     CopyCount: Number("int"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceComponentCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceComponentOutput
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInferenceComponentCommandInput - {@link CreateInferenceComponentCommandInput}
 * @returns {@link CreateInferenceComponentCommandOutput}
 * @see {@link CreateInferenceComponentCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateInferenceComponentCommand extends $Command
  .classBuilder<
    CreateInferenceComponentCommandInput,
    CreateInferenceComponentCommandOutput,
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
  .s("SageMaker", "CreateInferenceComponent", {})
  .n("SageMakerClient", "CreateInferenceComponentCommand")
  .f(void 0, void 0)
  .ser(se_CreateInferenceComponentCommand)
  .de(de_CreateInferenceComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInferenceComponentInput;
      output: CreateInferenceComponentOutput;
    };
    sdk: {
      input: CreateInferenceComponentCommandInput;
      output: CreateInferenceComponentCommandOutput;
    };
  };
}
