// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateJobRequest, CreateJobResponse } from "../models/models_1";
import { CreateJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * <p>Creates a model customization job in Amazon SageMaker. A job runs a workload based on the job category and configuration you provide. You specify the job category, a schema-versioned configuration document, and an IAM role that grants Amazon SageMaker permission to access resources on your behalf.</p> <p>Specify one of the following job categories, which determines the type of workload that the job runs:</p> <dl> <dt>AgentRFT</dt> <dd> <p>Fine-tune a model using multi-turn reinforcement learning with reward signals.</p> </dd> <dt>AgentRFTEvaluation</dt> <dd> <p>Evaluate a fine-tuned or base model by running multi-turn rollouts against a held-out prompt dataset. This category computes metrics such as pass@k and mean reward.</p> </dd> <dt>DataQualityEvaluation</dt> <dd> <p>Evaluate the quality of a generated or bring-your-own dataset using quality metrics or your own specification.</p> </dd> <dt>DataTransformation</dt> <dd> <p>Transform datasets into the format you need, for example for model customization.</p> </dd> <dt>SyntheticDataGeneration</dt> <dd> <p>Generate synthetic training and testing datasets from your context data and specifications.</p> </dd> </dl> <p>Before creating a job, call <code>ListJobSchemaVersions</code> and <code>DescribeJobSchemaVersion</code> to retrieve the configuration schema for your job category. The <code>JobConfigDocument</code> must conform to the schema specified by <code>JobConfigSchemaVersion</code>.</p> <p>The following operations are related to <code>CreateJob</code>:</p> <ul> <li> <p> <code>DescribeJob</code> </p> </li> <li> <p> <code>ListJobs</code> </p> </li> <li> <p> <code>StopJob</code> </p> </li> <li> <p> <code>DeleteJob</code> </p> </li> <li> <p> <code>ListJobSchemaVersions</code> </p> </li> <li> <p> <code>DescribeJobSchemaVersion</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateJobRequest
 *   JobName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   JobCategory: "AgentRFT" || "SyntheticDataGeneration" || "DataQualityEvaluation" || "AgentRFTEvaluation" || "DataTransformation", // required
 *   JobConfigSchemaVersion: "STRING_VALUE", // required
 *   JobConfigDocument: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   JobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
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
export class CreateJobCommand extends command<CreateJobCommandInput, CreateJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateJob",
  CreateJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateJobRequest;
      output: CreateJobResponse;
    };
    sdk: {
      input: CreateJobCommandInput;
      output: CreateJobCommandOutput;
    };
  };
}
