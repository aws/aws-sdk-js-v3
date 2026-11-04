// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomModelRequest, CreateCustomModelResponse } from "../models/models_0";
import { CreateCustomModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomModelCommand}.
 */
export interface CreateCustomModelCommandInput extends CreateCustomModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomModelCommand}.
 */
export interface CreateCustomModelCommandOutput extends CreateCustomModelResponse, __MetadataBearer {}

/**
 * Creates a new custom model in Amazon Bedrock. After the model is active, you can use it for inference.
 *
 * You can provide the model data source in one of the following ways:
 *
 * - `customModelDataSource` — Specify a SageMaker AI model package ARN. Amazon Bedrock resolves the model package to retrieve the model artifacts. This is the preferred method for new SageMaker AI training outputs.
 * - `modelSourceConfig` — Specify an Amazon S3 URI pointing to the Amazon-managed Amazon S3 bucket containing your model artifacts.
 *
 * To use the model for inference, you must purchase Provisioned Throughput for it. You can't use On-demand inference with these custom models. For more information about Provisioned Throughput, see [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html).
 *
 * The model appears in `ListCustomModels` with a `customizationType` of `imported`. To track the status of the new model, you use the `GetCustomModel` API operation. The model can be in the following states:
 *
 * - `Creating` - Initial state during validation and registration
 * - `Active` - Model is ready for use in inference
 * - `Failed` - Creation process encountered an error
 *
 * **Related APIs**
 *
 * - [GetCustomModel](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetCustomModel.html)
 * - [ListCustomModels](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListCustomModels.html)
 * - [DeleteCustomModel](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_DeleteCustomModel.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateCustomModelCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateCustomModelCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // CreateCustomModelRequest
 *   modelName: "STRING_VALUE", // required
 *   modelSourceConfig: { // ModelDataSource Union: only one key present
 *     s3DataSource: { // S3DataSource
 *       s3Uri: "STRING_VALUE", // required
 *     },
 *   },
 *   customModelDataSource: { // CustomModelDataSource Union: only one key present
 *     modelPackageArnDataSource: { // ModelPackageArnDataSource
 *       modelPackageArn: "STRING_VALUE", // required
 *     },
 *   },
 *   modelKmsKeyArn: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 *   modelTags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateCustomModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomModelResponse
 * //   modelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCustomModelCommandInput - {@link CreateCustomModelCommandInput}
 * @returns {@link CreateCustomModelCommandOutput}
 * @see {@link CreateCustomModelCommandInput} for command's `input` shape.
 * @see {@link CreateCustomModelCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @example Successful CreateCustomModel API call
 * ```javascript
 * //
 * const input = {
 *   clientRequestToken: "foo",
 *   modelKmsKeyArn: "arn:aws:kms:us-east-1:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   modelName: "SampleModel",
 *   modelSourceConfig: {
 *     s3DataSource: {
 *       s3Uri: "s3://my-bucket/folder"
 *     }
 *   },
 *   modelTags: [
 *     {
 *       key: "foo",
 *       value: "foo"
 *     },
 *     {
 *       key: "foo",
 *       value: "foo"
 *     }
 *   ],
 *   roleArn: "arn:aws:iam::123456789012:role/SampleRole"
 * };
 * const command = new CreateCustomModelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   modelArn: "arn:aws:bedrock:us-east-1:123456789012:custom-model/imported/abcdef123456"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCustomModelCommand extends command<CreateCustomModelCommandInput, CreateCustomModelCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomModel",
  CreateCustomModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomModelRequest;
      output: CreateCustomModelResponse;
    };
    sdk: {
      input: CreateCustomModelCommandInput;
      output: CreateCustomModelCommandOutput;
    };
  };
}
