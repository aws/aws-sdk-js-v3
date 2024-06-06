// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateComputeEnvironmentRequest, UpdateComputeEnvironmentResponse } from "../models/models_0";
import { de_UpdateComputeEnvironmentCommand, se_UpdateComputeEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComputeEnvironmentCommand}.
 */
export interface UpdateComputeEnvironmentCommandInput extends UpdateComputeEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComputeEnvironmentCommand}.
 */
export interface UpdateComputeEnvironmentCommandOutput extends UpdateComputeEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Updates an Batch compute environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // UpdateComputeEnvironmentRequest
 *   computeEnvironment: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   unmanagedvCpus: Number("int"),
 *   computeResources: { // ComputeResourceUpdate
 *     minvCpus: Number("int"),
 *     maxvCpus: Number("int"),
 *     desiredvCpus: Number("int"),
 *     subnets: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     allocationStrategy: "BEST_FIT_PROGRESSIVE" || "SPOT_CAPACITY_OPTIMIZED" || "SPOT_PRICE_CAPACITY_OPTIMIZED",
 *     instanceTypes: [
 *       "STRING_VALUE",
 *     ],
 *     ec2KeyPair: "STRING_VALUE",
 *     instanceRole: "STRING_VALUE",
 *     tags: { // TagsMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     placementGroup: "STRING_VALUE",
 *     bidPercentage: Number("int"),
 *     launchTemplate: { // LaunchTemplateSpecification
 *       launchTemplateId: "STRING_VALUE",
 *       launchTemplateName: "STRING_VALUE",
 *       version: "STRING_VALUE",
 *     },
 *     ec2Configuration: [ // Ec2ConfigurationList
 *       { // Ec2Configuration
 *         imageType: "STRING_VALUE", // required
 *         imageIdOverride: "STRING_VALUE",
 *         imageKubernetesVersion: "STRING_VALUE",
 *       },
 *     ],
 *     updateToLatestImageVersion: true || false,
 *     type: "EC2" || "SPOT" || "FARGATE" || "FARGATE_SPOT",
 *     imageId: "STRING_VALUE",
 *   },
 *   serviceRole: "STRING_VALUE",
 *   updatePolicy: { // UpdatePolicy
 *     terminateJobsOnUpdate: true || false,
 *     jobExecutionTimeoutMinutes: Number("long"),
 *   },
 * };
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateComputeEnvironmentResponse
 * //   computeEnvironmentName: "STRING_VALUE",
 * //   computeEnvironmentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateComputeEnvironmentCommandInput - {@link UpdateComputeEnvironmentCommandInput}
 * @returns {@link UpdateComputeEnvironmentCommandOutput}
 * @see {@link UpdateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @public
 * @example To update a compute environment
 * ```javascript
 * // This example disables the P2OnDemand compute environment so it can be deleted.
 * const input = {
 *   "computeEnvironment": "P2OnDemand",
 *   "state": "DISABLED"
 * };
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
 *   "computeEnvironmentName": "P2OnDemand"
 * }
 * *\/
 * // example id: to-update-a-compute-environment-1481154702731
 * ```
 *
 */
export class UpdateComputeEnvironmentCommand extends $Command
  .classBuilder<
    UpdateComputeEnvironmentCommandInput,
    UpdateComputeEnvironmentCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "UpdateComputeEnvironment", {})
  .n("BatchClient", "UpdateComputeEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateComputeEnvironmentCommand)
  .de(de_UpdateComputeEnvironmentCommand)
  .build() {}
