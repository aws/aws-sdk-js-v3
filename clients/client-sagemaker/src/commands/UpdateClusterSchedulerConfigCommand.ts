// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterSchedulerConfigRequest, UpdateClusterSchedulerConfigResponse } from "../models/models_4";
import { UpdateClusterSchedulerConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterSchedulerConfigCommand}.
 */
export interface UpdateClusterSchedulerConfigCommandInput extends UpdateClusterSchedulerConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterSchedulerConfigCommand}.
 */
export interface UpdateClusterSchedulerConfigCommandOutput extends UpdateClusterSchedulerConfigResponse, __MetadataBearer {}

/**
 * Update the cluster policy configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateClusterSchedulerConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateClusterSchedulerConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateClusterSchedulerConfigRequest
 *   ClusterSchedulerConfigId: "STRING_VALUE", // required
 *   TargetVersion: Number("int"), // required
 *   SchedulerConfig: { // SchedulerConfig
 *     PriorityClasses: [ // PriorityClassList
 *       { // PriorityClass
 *         Name: "STRING_VALUE", // required
 *         Weight: Number("int"), // required
 *       },
 *     ],
 *     FairShare: "Enabled" || "Disabled",
 *     IdleResourceSharing: "Enabled" || "Disabled",
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateClusterSchedulerConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterSchedulerConfigResponse
 * //   ClusterSchedulerConfigArn: "STRING_VALUE", // required
 * //   ClusterSchedulerConfigVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateClusterSchedulerConfigCommandInput - {@link UpdateClusterSchedulerConfigCommandInput}
 * @returns {@link UpdateClusterSchedulerConfigCommandOutput}
 * @see {@link UpdateClusterSchedulerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterSchedulerConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
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
export class UpdateClusterSchedulerConfigCommand extends command<UpdateClusterSchedulerConfigCommandInput, UpdateClusterSchedulerConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClusterSchedulerConfig",
  UpdateClusterSchedulerConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterSchedulerConfigRequest;
      output: UpdateClusterSchedulerConfigResponse;
    };
    sdk: {
      input: UpdateClusterSchedulerConfigCommandInput;
      output: UpdateClusterSchedulerConfigCommandOutput;
    };
  };
}
