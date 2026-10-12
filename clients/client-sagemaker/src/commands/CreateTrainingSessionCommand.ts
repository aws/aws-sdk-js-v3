// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrainingSessionRequest, CreateTrainingSessionResponse } from "../models/models_2";
import { CreateTrainingSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrainingSessionCommand}.
 */
export interface CreateTrainingSessionCommandInput extends CreateTrainingSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrainingSessionCommand}.
 */
export interface CreateTrainingSessionCommandOutput extends CreateTrainingSessionResponse, __MetadataBearer {}

/**
 * <p>Creates a training session in Amazon SageMaker. A training session provisions compute resources for fine-tuning a foundation model using Low-Rank Adaptation (LoRA). After the session is created, you can submit training operations and sample inference requests through the Amazon SageMaker Training Session Runtime API.</p> <p>The following operations are related to <code>CreateTrainingSession</code>:</p> <ul> <li> <p> <code>DescribeTrainingSession</code> </p> </li> <li> <p> <code>ListTrainingSessions</code> </p> </li> <li> <p> <code>StopTrainingSession</code> </p> </li> <li> <p> <code>DeleteTrainingSession</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrainingSessionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrainingSessionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateTrainingSessionRequest
 *   TrainingSessionName: "STRING_VALUE", // required
 *   ModelPackageGroupArn: "STRING_VALUE",
 *   LoraConfig: { // LoraConfig
 *     Rank: Number("int"), // required
 *     Alpha: Number("int"), // required
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ModelConfig: { // TrainingSessionModelConfig
 *     BaseModelArn: "STRING_VALUE", // required
 *     AcceptEula: true || false,
 *   },
 *   OutputConfig: { // TrainingSessionOutputConfig
 *     S3Location: { // TrainingSessionS3Location
 *       Path: "STRING_VALUE", // required
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTrainingSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrainingSessionResponse
 * //   TrainingSessionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrainingSessionCommandInput - {@link CreateTrainingSessionCommandInput}
 * @returns {@link CreateTrainingSessionCommandOutput}
 * @see {@link CreateTrainingSessionCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingSessionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class CreateTrainingSessionCommand extends command<CreateTrainingSessionCommandInput, CreateTrainingSessionCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrainingSession",
  CreateTrainingSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrainingSessionRequest;
      output: CreateTrainingSessionResponse;
    };
    sdk: {
      input: CreateTrainingSessionCommandInput;
      output: CreateTrainingSessionCommandOutput;
    };
  };
}
