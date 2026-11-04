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
 * Creates a model customization job in Amazon SageMaker. A job runs a workload based on the job category and configuration you provide. You specify the job category, a schema-versioned configuration document, and an IAM role that grants Amazon SageMaker permission to access resources on your behalf.
 *
 * Use the `AgentRFT` category to fine-tune a model using multi-turn reinforcement learning with reward signals. Use the `AgentRFTEvaluation` category to evaluate a fine-tuned or base model by running multi-turn rollouts against a held-out prompt dataset and computing metrics such as pass@k and mean reward.
 *
 * Before creating a job, call `ListJobSchemaVersions` and `DescribeJobSchemaVersion` to retrieve the configuration schema for your job category. The `JobConfigDocument` must conform to the schema specified by `JobConfigSchemaVersion`.
 *
 * The following operations are related to `CreateJob`:
 *
 * - `DescribeJob`
 * - `ListJobs`
 * - `StopJob`
 * - `DeleteJob`
 * - `ListJobSchemaVersions`
 * - `DescribeJobSchemaVersion`
 *
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
 *   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
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
 *
 * Resource being accessed is in use.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
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
