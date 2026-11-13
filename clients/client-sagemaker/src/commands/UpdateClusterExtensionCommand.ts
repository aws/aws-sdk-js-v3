// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterExtensionRequest, UpdateClusterExtensionResponse } from "../models/models_5";
import { UpdateClusterExtension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterExtensionCommand}.
 */
export interface UpdateClusterExtensionCommandInput extends UpdateClusterExtensionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterExtensionCommand}.
 */
export interface UpdateClusterExtensionCommandOutput extends UpdateClusterExtensionResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration or the version of an extension installed on a SageMaker HyperPod cluster. SageMaker HyperPod applies the change to every node in the cluster. You can change the configuration, the version, or both in one request.</p> <ul> <li> <p> <b>Configuration:</b> You can change settings by sending <code>ConfigurationValues</code>. Settings that you include are changed. Settings that you omit keep their current values. A setting with the value <code>null</code> is removed and returns to its default value.</p> </li> <li> <p> <b>Version:</b> You can update to a later version. You can't update to an earlier version. To use an earlier version, delete the extension and create it again with that version.</p> </li> </ul> <p>To retry the operation on nodes where it failed, fix the cause that <code>DescribeClusterExtension</code> reports in <code>Health</code>, and then send an <code>UpdateClusterExtension</code> request that doesn't change the version or the configuration.</p> <p>You can't update an extension while it is being deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateClusterExtensionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateClusterExtensionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateClusterExtensionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ExtensionArn: "STRING_VALUE", // required
 *   ExtensionVersion: "STRING_VALUE",
 *   ConfigurationValues: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateClusterExtensionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterExtensionResponse
 * //   ExtensionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateClusterExtensionCommandInput - {@link UpdateClusterExtensionCommandInput}
 * @returns {@link UpdateClusterExtensionCommandOutput}
 * @see {@link UpdateClusterExtensionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterExtensionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
export class UpdateClusterExtensionCommand extends command<UpdateClusterExtensionCommandInput, UpdateClusterExtensionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClusterExtension",
  UpdateClusterExtension$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterExtensionRequest;
      output: UpdateClusterExtensionResponse;
    };
    sdk: {
      input: UpdateClusterExtensionCommandInput;
      output: UpdateClusterExtensionCommandOutput;
    };
  };
}
