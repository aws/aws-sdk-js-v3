// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClusterNodeRequest, DescribeClusterNodeResponse } from "../models/models_2";
import { de_DescribeClusterNodeCommand, se_DescribeClusterNodeCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterNodeCommand}.
 */
export interface DescribeClusterNodeCommandInput extends DescribeClusterNodeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterNodeCommand}.
 */
export interface DescribeClusterNodeCommandOutput extends DescribeClusterNodeResponse, __MetadataBearer {}

/**
 * <p>Retrieves information of a node (also called a <i>instance</i>
 *          interchangeably) of a SageMaker HyperPod cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeClusterNodeCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeClusterNodeCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeClusterNodeRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterNodeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterNodeResponse
 * //   NodeDetails: { // ClusterNodeDetails
 * //     InstanceGroupName: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     InstanceStatus: { // ClusterInstanceStatusDetails
 * //       Status: "Running" || "Failure" || "Pending" || "ShuttingDown" || "SystemUpdating", // required
 * //       Message: "STRING_VALUE",
 * //     },
 * //     InstanceType: "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge",
 * //     LaunchTime: new Date("TIMESTAMP"),
 * //     LifeCycleConfig: { // ClusterLifeCycleConfig
 * //       SourceS3Uri: "STRING_VALUE", // required
 * //       OnCreate: "STRING_VALUE", // required
 * //     },
 * //     ThreadsPerCore: Number("int"),
 * //     PrivatePrimaryIp: "STRING_VALUE",
 * //     PrivateDnsHostname: "STRING_VALUE",
 * //     Placement: { // ClusterInstancePlacement
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterNodeCommandInput - {@link DescribeClusterNodeCommandInput}
 * @returns {@link DescribeClusterNodeCommandOutput}
 * @see {@link DescribeClusterNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterNodeCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeClusterNodeCommand extends $Command
  .classBuilder<
    DescribeClusterNodeCommandInput,
    DescribeClusterNodeCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeClusterNode", {})
  .n("SageMakerClient", "DescribeClusterNodeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClusterNodeCommand)
  .de(de_DescribeClusterNodeCommand)
  .build() {}
