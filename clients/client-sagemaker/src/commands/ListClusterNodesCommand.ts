// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListClusterNodesRequest, ListClusterNodesResponse } from "../models/models_3";
import { de_ListClusterNodesCommand, se_ListClusterNodesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClusterNodesCommand}.
 */
export interface ListClusterNodesCommandInput extends ListClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterNodesCommand}.
 */
export interface ListClusterNodesCommandOutput extends ListClusterNodesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the list of instances (also called <i>nodes</i> interchangeably)
 *          in a SageMaker HyperPod cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterNodesRequest
 *   ClusterName: "STRING_VALUE", // required
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   InstanceGroupNameContains: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "CREATION_TIME" || "NAME",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterNodesResponse
 * //   NextToken: "STRING_VALUE", // required
 * //   ClusterNodeSummaries: [ // ClusterNodeSummaries // required
 * //     { // ClusterNodeSummary
 * //       InstanceGroupName: "STRING_VALUE", // required
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceType: "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.c5n.large" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.16xlarge" || "ml.g6.12xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.gr6.4xlarge" || "ml.gr6.8xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.16xlarge" || "ml.g6e.12xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.p5e.48xlarge", // required
 * //       LaunchTime: new Date("TIMESTAMP"), // required
 * //       InstanceStatus: { // ClusterInstanceStatusDetails
 * //         Status: "Running" || "Failure" || "Pending" || "ShuttingDown" || "SystemUpdating" || "DeepHealthCheckInProgress", // required
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListClusterNodesCommandInput - {@link ListClusterNodesCommandInput}
 * @returns {@link ListClusterNodesCommandOutput}
 * @see {@link ListClusterNodesCommandInput} for command's `input` shape.
 * @see {@link ListClusterNodesCommandOutput} for command's `response` shape.
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
export class ListClusterNodesCommand extends $Command
  .classBuilder<
    ListClusterNodesCommandInput,
    ListClusterNodesCommandOutput,
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
  .s("SageMaker", "ListClusterNodes", {})
  .n("SageMakerClient", "ListClusterNodesCommand")
  .f(void 0, void 0)
  .ser(se_ListClusterNodesCommand)
  .de(de_ListClusterNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterNodesRequest;
      output: ListClusterNodesResponse;
    };
    sdk: {
      input: ListClusterNodesCommandInput;
      output: ListClusterNodesCommandOutput;
    };
  };
}
