// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrainingPlanRequest, CreateTrainingPlanResponse } from "../models/models_2";
import { CreateTrainingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrainingPlanCommand}.
 */
export interface CreateTrainingPlanCommandInput extends CreateTrainingPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrainingPlanCommand}.
 */
export interface CreateTrainingPlanCommandOutput extends CreateTrainingPlanResponse, __MetadataBearer {}

/**
 * Creates a new training plan in SageMaker to reserve compute capacity.
 *
 * Amazon SageMaker Training Plan is a capability within SageMaker that allows customers to reserve and manage GPU capacity for large-scale AI model training. It provides a way to secure predictable access to computational resources within specific timelines and budgets, without the need to manage underlying infrastructure.
 *
 * **How it works**
 *
 * Plans can be created for specific resources such as SageMaker Training Jobs or SageMaker HyperPod clusters, automatically provisioning resources, setting up infrastructure, executing workloads, and handling infrastructure failures.
 *
 * **Plan creation workflow**
 *
 * - Users search for available plan offerings based on their requirements (e.g., instance type, count, start time, duration) using the `SearchTrainingPlanOfferings` API operation.
 * - They create a plan that best matches their needs using the ID of the plan offering they want to use.
 * - After successful upfront payment, the plan's status becomes `Scheduled`.
 * - The plan can be used to:
 *
 *   - Queue training jobs.
 *   - Allocate to an instance group of a SageMaker HyperPod cluster.
 * - When the plan start date arrives, it becomes `Active`. Based on available reserved capacity:
 *
 *   - Training jobs are launched.
 *   - Instance groups are provisioned.
 *
 * **Plan composition**
 *
 * A plan can consist of one or more Reserved Capacities, each defined by a specific instance type, quantity, Availability Zone, duration, and start and end times. For more information about Reserved Capacity, see `ReservedCapacitySummary`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrainingPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrainingPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateTrainingPlanRequest
 *   TrainingPlanName: "STRING_VALUE", // required
 *   TrainingPlanOfferingId: "STRING_VALUE", // required
 *   SpareInstanceCountPerUltraServer: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTrainingPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrainingPlanResponse
 * //   TrainingPlanArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrainingPlanCommandInput - {@link CreateTrainingPlanCommandInput}
 * @returns {@link CreateTrainingPlanCommandOutput}
 * @see {@link CreateTrainingPlanCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingPlanCommandOutput} for command's `response` shape.
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
export class CreateTrainingPlanCommand extends command<CreateTrainingPlanCommandInput, CreateTrainingPlanCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrainingPlan",
  CreateTrainingPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrainingPlanRequest;
      output: CreateTrainingPlanResponse;
    };
    sdk: {
      input: CreateTrainingPlanCommandInput;
      output: CreateTrainingPlanCommandOutput;
    };
  };
}
