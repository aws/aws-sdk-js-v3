// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteClusterNodesRequest, BatchDeleteClusterNodesResponse } from "../models/models_0";
import { de_BatchDeleteClusterNodesCommand, se_BatchDeleteClusterNodesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteClusterNodesCommand}.
 */
export interface BatchDeleteClusterNodesCommandInput extends BatchDeleteClusterNodesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteClusterNodesCommand}.
 */
export interface BatchDeleteClusterNodesCommandOutput extends BatchDeleteClusterNodesResponse, __MetadataBearer {}

/**
 * <p>Deletes specific nodes within a SageMaker HyperPod cluster. <code>BatchDeleteClusterNodes</code> accepts a cluster name and a list of node IDs.</p> <important> <ul> <li> <p>To safeguard your work, back up your data to Amazon S3 or an FSx for Lustre file system before invoking the API on a worker node group. This will help prevent any potential data loss from the instance root volume. For more information about backup, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-operate-cli-command.html#sagemaker-hyperpod-operate-cli-command-update-cluster-software-backup">Use the backup script provided by SageMaker HyperPod</a>. </p> </li> <li> <p>If you want to invoke this API on an existing cluster, you'll first need to patch the cluster by running the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateClusterSoftware.html">UpdateClusterSoftware API</a>. For more information about patching a cluster, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-operate-cli-command.html#sagemaker-hyperpod-operate-cli-command-update-cluster-software">Update the SageMaker HyperPod platform software of a cluster</a>.</p> </li> </ul> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, BatchDeleteClusterNodesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, BatchDeleteClusterNodesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // BatchDeleteClusterNodesRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeIds: [ // ClusterNodeIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteClusterNodesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteClusterNodesResponse
 * //   Failed: [ // BatchDeleteClusterNodesErrorList
 * //     { // BatchDeleteClusterNodesError
 * //       Code: "NodeIdNotFound" || "InvalidNodeStatus" || "NodeIdInUse", // required
 * //       Message: "STRING_VALUE", // required
 * //       NodeId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Successful: [ // ClusterNodeIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteClusterNodesCommandInput - {@link BatchDeleteClusterNodesCommandInput}
 * @returns {@link BatchDeleteClusterNodesCommandOutput}
 * @see {@link BatchDeleteClusterNodesCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteClusterNodesCommandOutput} for command's `response` shape.
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
export class BatchDeleteClusterNodesCommand extends $Command
  .classBuilder<
    BatchDeleteClusterNodesCommandInput,
    BatchDeleteClusterNodesCommandOutput,
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
  .s("SageMaker", "BatchDeleteClusterNodes", {})
  .n("SageMakerClient", "BatchDeleteClusterNodesCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteClusterNodesCommand)
  .de(de_BatchDeleteClusterNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteClusterNodesRequest;
      output: BatchDeleteClusterNodesResponse;
    };
    sdk: {
      input: BatchDeleteClusterNodesCommandInput;
      output: BatchDeleteClusterNodesCommandOutput;
    };
  };
}
