// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterExtensionRequest, CreateClusterExtensionResponse } from "../models/models_1";
import { CreateClusterExtension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterExtensionCommand}.
 */
export interface CreateClusterExtensionCommandInput extends CreateClusterExtensionRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterExtensionCommand}.
 */
export interface CreateClusterExtensionCommandOutput extends CreateClusterExtensionResponse, __MetadataBearer {}

/**
 * <p>Installs an extension, such as <code>sagemaker-observability</code>, on a SageMaker HyperPod cluster orchestrated by Slurm. The cluster must have <code>NodeProvisioningMode</code> set to <code>Continuous</code> and can have only one extension with a given name. To track the installation, call <code>DescribeClusterExtension</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateClusterExtensionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateClusterExtensionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateClusterExtensionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ExtensionName: "STRING_VALUE", // required
 *   ExtensionVersion: "STRING_VALUE",
 *   ConfigurationValues: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateClusterExtensionCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterExtensionResponse
 * //   ExtensionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateClusterExtensionCommandInput - {@link CreateClusterExtensionCommandInput}
 * @returns {@link CreateClusterExtensionCommandOutput}
 * @see {@link CreateClusterExtensionCommandInput} for command's `input` shape.
 * @see {@link CreateClusterExtensionCommandOutput} for command's `response` shape.
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
export class CreateClusterExtensionCommand extends command<CreateClusterExtensionCommandInput, CreateClusterExtensionCommandOutput>(
  _ep0,
  _mw0,
  "CreateClusterExtension",
  CreateClusterExtension$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterExtensionRequest;
      output: CreateClusterExtensionResponse;
    };
    sdk: {
      input: CreateClusterExtensionCommandInput;
      output: CreateClusterExtensionCommandOutput;
    };
  };
}
