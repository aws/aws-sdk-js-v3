// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateModelInvocationJobRequest, CreateModelInvocationJobResponse } from "../models/models_0";
import { de_CreateModelInvocationJobCommand, se_CreateModelInvocationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelInvocationJobCommand}.
 */
export interface CreateModelInvocationJobCommandInput extends CreateModelInvocationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelInvocationJobCommand}.
 */
export interface CreateModelInvocationJobCommandOutput extends CreateModelInvocationJobResponse, __MetadataBearer {}

/**
 * <p>Creates a batch inference job to invoke a model on multiple prompts. Format your data according to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data">Format your inference data</a> and upload it to an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html">Process multiple prompts with batch inference</a>.</p>
 *          <p>The response returns a <code>jobArn</code> that you can use to stop or get details about the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateModelInvocationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateModelInvocationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateModelInvocationJobRequest
 *   jobName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   modelId: "STRING_VALUE", // required
 *   inputDataConfig: { // ModelInvocationJobInputDataConfig Union: only one key present
 *     s3InputDataConfig: { // ModelInvocationJobS3InputDataConfig
 *       s3InputFormat: "JSONL",
 *       s3Uri: "STRING_VALUE", // required
 *       s3BucketOwner: "STRING_VALUE",
 *     },
 *   },
 *   outputDataConfig: { // ModelInvocationJobOutputDataConfig Union: only one key present
 *     s3OutputDataConfig: { // ModelInvocationJobS3OutputDataConfig
 *       s3Uri: "STRING_VALUE", // required
 *       s3EncryptionKeyId: "STRING_VALUE",
 *       s3BucketOwner: "STRING_VALUE",
 *     },
 *   },
 *   vpcConfig: { // VpcConfig
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   timeoutDurationInHours: Number("int"),
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelInvocationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelInvocationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelInvocationJobCommandInput - {@link CreateModelInvocationJobCommandInput}
 * @returns {@link CreateModelInvocationJobCommandOutput}
 * @see {@link CreateModelInvocationJobCommandInput} for command's `input` shape.
 * @see {@link CreateModelInvocationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 * @public
 */
export class CreateModelInvocationJobCommand extends $Command
  .classBuilder<
    CreateModelInvocationJobCommandInput,
    CreateModelInvocationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "CreateModelInvocationJob", {})
  .n("BedrockClient", "CreateModelInvocationJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelInvocationJobCommand)
  .de(de_CreateModelInvocationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelInvocationJobRequest;
      output: CreateModelInvocationJobResponse;
    };
    sdk: {
      input: CreateModelInvocationJobCommandInput;
      output: CreateModelInvocationJobCommandOutput;
    };
  };
}
