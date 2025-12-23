// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeClusterSchedulerConfigRequest, DescribeClusterSchedulerConfigResponse } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeClusterSchedulerConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterSchedulerConfigCommand}.
 */
export interface DescribeClusterSchedulerConfigCommandInput extends DescribeClusterSchedulerConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterSchedulerConfigCommand}.
 */
export interface DescribeClusterSchedulerConfigCommandOutput extends DescribeClusterSchedulerConfigResponse, __MetadataBearer {}

/**
 * <p>Description of the cluster policy. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeClusterSchedulerConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeClusterSchedulerConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeClusterSchedulerConfigRequest
 *   ClusterSchedulerConfigId: "STRING_VALUE", // required
 *   ClusterSchedulerConfigVersion: Number("int"),
 * };
 * const command = new DescribeClusterSchedulerConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterSchedulerConfigResponse
 * //   ClusterSchedulerConfigArn: "STRING_VALUE", // required
 * //   ClusterSchedulerConfigId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   ClusterSchedulerConfigVersion: Number("int"), // required
 * //   Status: "Creating" || "CreateFailed" || "CreateRollbackFailed" || "Created" || "Updating" || "UpdateFailed" || "UpdateRollbackFailed" || "Updated" || "Deleting" || "DeleteFailed" || "DeleteRollbackFailed" || "Deleted", // required
 * //   FailureReason: "STRING_VALUE",
 * //   ClusterArn: "STRING_VALUE",
 * //   SchedulerConfig: { // SchedulerConfig
 * //     PriorityClasses: [ // PriorityClassList
 * //       { // PriorityClass
 * //         Name: "STRING_VALUE", // required
 * //         Weight: Number("int"), // required
 * //       },
 * //     ],
 * //     FairShare: "Enabled" || "Disabled",
 * //   },
 * //   Description: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterSchedulerConfigCommandInput - {@link DescribeClusterSchedulerConfigCommandInput}
 * @returns {@link DescribeClusterSchedulerConfigCommandOutput}
 * @see {@link DescribeClusterSchedulerConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSchedulerConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class DescribeClusterSchedulerConfigCommand extends $Command
  .classBuilder<
    DescribeClusterSchedulerConfigCommandInput,
    DescribeClusterSchedulerConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeClusterSchedulerConfig", {})
  .n("SageMakerClient", "DescribeClusterSchedulerConfigCommand")
  .sc(DescribeClusterSchedulerConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterSchedulerConfigRequest;
      output: DescribeClusterSchedulerConfigResponse;
    };
    sdk: {
      input: DescribeClusterSchedulerConfigCommandInput;
      output: DescribeClusterSchedulerConfigCommandOutput;
    };
  };
}
