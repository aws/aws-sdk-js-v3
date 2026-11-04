// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterSoftwareRequest, UpdateClusterSoftwareResponse } from "../models/models_4";
import { UpdateClusterSoftware$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterSoftwareCommand}.
 */
export interface UpdateClusterSoftwareCommandInput extends UpdateClusterSoftwareRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterSoftwareCommand}.
 */
export interface UpdateClusterSoftwareCommandOutput extends UpdateClusterSoftwareResponse, __MetadataBearer {}

/**
 * Updates the platform software of a SageMaker HyperPod cluster for security patching. To learn how to use this API, see [Update the SageMaker HyperPod platform software of a cluster](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-operate.html#sagemaker-hyperpod-operate-cli-command-update-cluster-software).
 *
 * > **Important:** The `UpgradeClusterSoftware` API call may impact your SageMaker HyperPod cluster uptime and availability. Plan accordingly to mitigate potential disruptions to your workloads.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateClusterSoftwareCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateClusterSoftwareCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateClusterSoftwareRequest
 *   ClusterName: "STRING_VALUE", // required
 *   InstanceGroups: [ // UpdateClusterSoftwareInstanceGroups
 *     { // UpdateClusterSoftwareInstanceGroupSpecification
 *       InstanceGroupName: "STRING_VALUE", // required
 *       ImageReleaseVersion: "STRING_VALUE",
 *     },
 *   ],
 *   DeploymentConfig: { // DeploymentConfiguration
 *     RollingUpdatePolicy: { // RollingDeploymentPolicy
 *       MaximumBatchSize: { // CapacitySizeConfig
 *         Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *         Value: Number("int"), // required
 *       },
 *       RollbackMaximumBatchSize: {
 *         Type: "INSTANCE_COUNT" || "CAPACITY_PERCENTAGE", // required
 *         Value: Number("int"), // required
 *       },
 *     },
 *     WaitIntervalInSeconds: Number("int"),
 *     AutoRollbackConfiguration: [ // AutoRollbackAlarms
 *       { // AlarmDetails
 *         AlarmName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ImageId: "STRING_VALUE",
 * };
 * const command = new UpdateClusterSoftwareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterSoftwareResponse
 * //   ClusterArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateClusterSoftwareCommandInput - {@link UpdateClusterSoftwareCommandInput}
 * @returns {@link UpdateClusterSoftwareCommandOutput}
 * @see {@link UpdateClusterSoftwareCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterSoftwareCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
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
export class UpdateClusterSoftwareCommand extends command<UpdateClusterSoftwareCommandInput, UpdateClusterSoftwareCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClusterSoftware",
  UpdateClusterSoftware$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterSoftwareRequest;
      output: UpdateClusterSoftwareResponse;
    };
    sdk: {
      input: UpdateClusterSoftwareCommandInput;
      output: UpdateClusterSoftwareCommandOutput;
    };
  };
}
