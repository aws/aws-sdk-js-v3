// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAIWorkloadConfigRequest, CreateAIWorkloadConfigResponse } from "../models/models_1";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAIWorkloadConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIWorkloadConfigCommand}.
 */
export interface CreateAIWorkloadConfigCommandInput extends CreateAIWorkloadConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIWorkloadConfigCommand}.
 */
export interface CreateAIWorkloadConfigCommandOutput extends CreateAIWorkloadConfigResponse, __MetadataBearer {}

/**
 * <p>Creates a reusable AI workload configuration that defines datasets, data sources, and benchmark tool settings for consistent performance testing of generative AI inference deployments on Amazon SageMaker AI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAIWorkloadConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAIWorkloadConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateAIWorkloadConfigRequest
 *   AIWorkloadConfigName: "STRING_VALUE", // required
 *   DatasetConfig: { // AIDatasetConfig Union: only one key present
 *     InputDataConfig: [ // AIWorkloadInputDataConfigList
 *       { // AIWorkloadInputDataConfig
 *         ChannelName: "STRING_VALUE", // required
 *         DataSource: { // AIWorkloadDataSource
 *           S3DataSource: { // AIWorkloadS3DataSource
 *             S3Uri: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   AIWorkloadConfigs: { // AIWorkloadConfigs
 *     WorkloadSpec: { // WorkloadSpec Union: only one key present
 *       Inline: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAIWorkloadConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIWorkloadConfigResponse
 * //   AIWorkloadConfigArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAIWorkloadConfigCommandInput - {@link CreateAIWorkloadConfigCommandInput}
 * @returns {@link CreateAIWorkloadConfigCommandOutput}
 * @see {@link CreateAIWorkloadConfigCommandInput} for command's `input` shape.
 * @see {@link CreateAIWorkloadConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateAIWorkloadConfigCommand extends $Command
  .classBuilder<
    CreateAIWorkloadConfigCommandInput,
    CreateAIWorkloadConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateAIWorkloadConfig", {})
  .n("SageMakerClient", "CreateAIWorkloadConfigCommand")
  .sc(CreateAIWorkloadConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIWorkloadConfigRequest;
      output: CreateAIWorkloadConfigResponse;
    };
    sdk: {
      input: CreateAIWorkloadConfigCommandInput;
      output: CreateAIWorkloadConfigCommandOutput;
    };
  };
}
