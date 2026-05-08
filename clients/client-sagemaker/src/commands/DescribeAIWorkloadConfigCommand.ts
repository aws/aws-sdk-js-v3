// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAIWorkloadConfigRequest, DescribeAIWorkloadConfigResponse } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeAIWorkloadConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAIWorkloadConfigCommand}.
 */
export interface DescribeAIWorkloadConfigCommandInput extends DescribeAIWorkloadConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAIWorkloadConfigCommand}.
 */
export interface DescribeAIWorkloadConfigCommandOutput extends DescribeAIWorkloadConfigResponse, __MetadataBearer {}

/**
 * <p>Returns details of an AI workload configuration, including the dataset configuration, benchmark tool settings, tags, and creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAIWorkloadConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAIWorkloadConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAIWorkloadConfigRequest
 *   AIWorkloadConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAIWorkloadConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAIWorkloadConfigResponse
 * //   AIWorkloadConfigName: "STRING_VALUE", // required
 * //   AIWorkloadConfigArn: "STRING_VALUE", // required
 * //   DatasetConfig: { // AIDatasetConfig Union: only one key present
 * //     InputDataConfig: [ // AIWorkloadInputDataConfigList
 * //       { // AIWorkloadInputDataConfig
 * //         ChannelName: "STRING_VALUE", // required
 * //         DataSource: { // AIWorkloadDataSource
 * //           S3DataSource: { // AIWorkloadS3DataSource
 * //             S3Uri: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   AIWorkloadConfigs: { // AIWorkloadConfigs
 * //     WorkloadSpec: { // WorkloadSpec Union: only one key present
 * //       Inline: "STRING_VALUE",
 * //     },
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeAIWorkloadConfigCommandInput - {@link DescribeAIWorkloadConfigCommandInput}
 * @returns {@link DescribeAIWorkloadConfigCommandOutput}
 * @see {@link DescribeAIWorkloadConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeAIWorkloadConfigCommandOutput} for command's `response` shape.
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
export class DescribeAIWorkloadConfigCommand extends $Command
  .classBuilder<
    DescribeAIWorkloadConfigCommandInput,
    DescribeAIWorkloadConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeAIWorkloadConfig", {})
  .n("SageMakerClient", "DescribeAIWorkloadConfigCommand")
  .sc(DescribeAIWorkloadConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAIWorkloadConfigRequest;
      output: DescribeAIWorkloadConfigResponse;
    };
    sdk: {
      input: DescribeAIWorkloadConfigCommandInput;
      output: DescribeAIWorkloadConfigCommandOutput;
    };
  };
}
