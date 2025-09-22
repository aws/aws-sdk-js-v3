// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEdgePackagingJobRequest, DescribeEdgePackagingJobResponse } from "../models/models_3";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeEdgePackagingJob } from "../schemas/schemas_87_Fleet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEdgePackagingJobCommand}.
 */
export interface DescribeEdgePackagingJobCommandInput extends DescribeEdgePackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEdgePackagingJobCommand}.
 */
export interface DescribeEdgePackagingJobCommandOutput extends DescribeEdgePackagingJobResponse, __MetadataBearer {}

/**
 * <p>A description of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeEdgePackagingJobRequest
 *   EdgePackagingJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEdgePackagingJobResponse
 * //   EdgePackagingJobArn: "STRING_VALUE", // required
 * //   EdgePackagingJobName: "STRING_VALUE", // required
 * //   CompilationJobName: "STRING_VALUE",
 * //   ModelName: "STRING_VALUE",
 * //   ModelVersion: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   OutputConfig: { // EdgeOutputConfig
 * //     S3OutputLocation: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     PresetDeploymentType: "GreengrassV2Component",
 * //     PresetDeploymentConfig: "STRING_VALUE",
 * //   },
 * //   ResourceKey: "STRING_VALUE",
 * //   EdgePackagingJobStatus: "STARTING" || "INPROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //   EdgePackagingJobStatusMessage: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   ModelArtifact: "STRING_VALUE",
 * //   ModelSignature: "STRING_VALUE",
 * //   PresetDeploymentOutput: { // EdgePresetDeploymentOutput
 * //     Type: "GreengrassV2Component", // required
 * //     Artifact: "STRING_VALUE",
 * //     Status: "COMPLETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEdgePackagingJobCommandInput - {@link DescribeEdgePackagingJobCommandInput}
 * @returns {@link DescribeEdgePackagingJobCommandOutput}
 * @see {@link DescribeEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgePackagingJobCommandOutput} for command's `response` shape.
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
export class DescribeEdgePackagingJobCommand extends $Command
  .classBuilder<
    DescribeEdgePackagingJobCommandInput,
    DescribeEdgePackagingJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeEdgePackagingJob", {})
  .n("SageMakerClient", "DescribeEdgePackagingJobCommand")
  .sc(DescribeEdgePackagingJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEdgePackagingJobRequest;
      output: DescribeEdgePackagingJobResponse;
    };
    sdk: {
      input: DescribeEdgePackagingJobCommandInput;
      output: DescribeEdgePackagingJobCommandOutput;
    };
  };
}
