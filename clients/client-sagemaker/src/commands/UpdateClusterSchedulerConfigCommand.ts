// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateClusterSchedulerConfigRequest, UpdateClusterSchedulerConfigResponse } from "../models/models_5";
import {
  de_UpdateClusterSchedulerConfigCommand,
  se_UpdateClusterSchedulerConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateClusterSchedulerConfigCommandOutput
  extends UpdateClusterSchedulerConfigResponse,
    __MetadataBearer {}

/**
 * <p>Update the cluster policy configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateClusterSchedulerConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateClusterSchedulerConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
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
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
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
export class UpdateClusterSchedulerConfigCommand extends $Command
  .classBuilder<
    UpdateClusterSchedulerConfigCommandInput,
    UpdateClusterSchedulerConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateClusterSchedulerConfig", {})
  .n("SageMakerClient", "UpdateClusterSchedulerConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterSchedulerConfigCommand)
  .de(de_UpdateClusterSchedulerConfigCommand)
  .build() {
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
