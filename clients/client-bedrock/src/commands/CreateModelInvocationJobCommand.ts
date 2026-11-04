// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateModelInvocationJobRequest, CreateModelInvocationJobResponse } from "../models/models_1";
import { CreateModelInvocationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a batch inference job to invoke a model on multiple prompts. Format your data according to [Format your inference data](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data) and upload it to an Amazon S3 bucket. For more information, see [Process multiple prompts with batch inference](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference.html).
 *
 * The response returns a `jobArn` that you can use to stop or get details about the job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateModelInvocationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateModelInvocationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
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
 *   modelInvocationType: "InvokeModel" || "Converse",
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class CreateModelInvocationJobCommand extends command<CreateModelInvocationJobCommandInput, CreateModelInvocationJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateModelInvocationJob",
  CreateModelInvocationJob$
) {
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
