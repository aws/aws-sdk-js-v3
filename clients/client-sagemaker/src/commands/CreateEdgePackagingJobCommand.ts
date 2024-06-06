// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEdgePackagingJobRequest } from "../models/models_1";
import { de_CreateEdgePackagingJobCommand, se_CreateEdgePackagingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEdgePackagingJobCommand}.
 */
export interface CreateEdgePackagingJobCommandInput extends CreateEdgePackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateEdgePackagingJobCommand}.
 */
export interface CreateEdgePackagingJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateEdgePackagingJobRequest
 *   EdgePackagingJobName: "STRING_VALUE", // required
 *   CompilationJobName: "STRING_VALUE", // required
 *   ModelName: "STRING_VALUE", // required
 *   ModelVersion: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   OutputConfig: { // EdgeOutputConfig
 *     S3OutputLocation: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *     PresetDeploymentType: "GreengrassV2Component",
 *     PresetDeploymentConfig: "STRING_VALUE",
 *   },
 *   ResourceKey: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateEdgePackagingJobCommandInput - {@link CreateEdgePackagingJobCommandInput}
 * @returns {@link CreateEdgePackagingJobCommandOutput}
 * @see {@link CreateEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link CreateEdgePackagingJobCommandOutput} for command's `response` shape.
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
export class CreateEdgePackagingJobCommand extends $Command
  .classBuilder<
    CreateEdgePackagingJobCommandInput,
    CreateEdgePackagingJobCommandOutput,
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
  .s("SageMaker", "CreateEdgePackagingJob", {})
  .n("SageMakerClient", "CreateEdgePackagingJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateEdgePackagingJobCommand)
  .de(de_CreateEdgePackagingJobCommand)
  .build() {}
