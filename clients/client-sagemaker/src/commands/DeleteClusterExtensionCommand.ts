// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteClusterExtensionRequest, DeleteClusterExtensionResponse } from "../models/models_2";
import { DeleteClusterExtension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteClusterExtensionCommand}.
 */
export interface DeleteClusterExtensionCommandInput extends DeleteClusterExtensionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterExtensionCommand}.
 */
export interface DeleteClusterExtensionCommandOutput extends DeleteClusterExtensionResponse, __MetadataBearer {}

/**
 * <p>Deletes an extension from a SageMaker HyperPod cluster. SageMaker HyperPod removes the extension's software from every node in the cluster. While SageMaker HyperPod removes the extension, its status is <code>Deleting</code>. After SageMaker HyperPod removes the extension from all nodes, it no longer appears in <code>ListClusterExtensions</code>, and <code>DescribeClusterExtension</code> returns a <code>ResourceNotFound</code> error.</p> <p>Deleting an extension doesn't delete data that the extension sent to other Amazon Web Services services, such as metrics in Amazon CloudWatch or Amazon Managed Service for Prometheus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteClusterExtensionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteClusterExtensionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteClusterExtensionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ExtensionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterExtensionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterExtensionResponse
 * //   ExtensionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteClusterExtensionCommandInput - {@link DeleteClusterExtensionCommandInput}
 * @returns {@link DeleteClusterExtensionCommandOutput}
 * @see {@link DeleteClusterExtensionCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterExtensionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
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
export class DeleteClusterExtensionCommand extends command<DeleteClusterExtensionCommandInput, DeleteClusterExtensionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteClusterExtension",
  DeleteClusterExtension$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterExtensionRequest;
      output: DeleteClusterExtensionResponse;
    };
    sdk: {
      input: DeleteClusterExtensionCommandInput;
      output: DeleteClusterExtensionCommandOutput;
    };
  };
}
