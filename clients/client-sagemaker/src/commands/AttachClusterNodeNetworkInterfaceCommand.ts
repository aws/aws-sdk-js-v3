// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AttachClusterNodeNetworkInterfaceRequest,
  AttachClusterNodeNetworkInterfaceResponse,
} from "../models/models_0";
import { AttachClusterNodeNetworkInterface$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachClusterNodeNetworkInterfaceCommand}.
 */
export interface AttachClusterNodeNetworkInterfaceCommandInput extends AttachClusterNodeNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AttachClusterNodeNetworkInterfaceCommand}.
 */
export interface AttachClusterNodeNetworkInterfaceCommandOutput extends AttachClusterNodeNetworkInterfaceResponse, __MetadataBearer {}

/**
 * <p> Attaches an elastic network interface (ENI) to a node in a HyperPod cluster. </p> <p> To use this operation, you must have the <code>sagemaker:AttachClusterNodeNetworkInterface</code> permission. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AttachClusterNodeNetworkInterfaceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AttachClusterNodeNetworkInterfaceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // AttachClusterNodeNetworkInterfaceRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeId: "STRING_VALUE", // required
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new AttachClusterNodeNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // AttachClusterNodeNetworkInterfaceResponse
 * //   ClusterArn: "STRING_VALUE", // required
 * //   NodeId: "STRING_VALUE", // required
 * //   NetworkInterfaceId: "STRING_VALUE", // required
 * //   AttachmentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AttachClusterNodeNetworkInterfaceCommandInput - {@link AttachClusterNodeNetworkInterfaceCommandInput}
 * @returns {@link AttachClusterNodeNetworkInterfaceCommandOutput}
 * @see {@link AttachClusterNodeNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AttachClusterNodeNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class AttachClusterNodeNetworkInterfaceCommand extends command<AttachClusterNodeNetworkInterfaceCommandInput, AttachClusterNodeNetworkInterfaceCommandOutput>(
  _ep0,
  _mw0,
  "AttachClusterNodeNetworkInterface",
  AttachClusterNodeNetworkInterface$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachClusterNodeNetworkInterfaceRequest;
      output: AttachClusterNodeNetworkInterfaceResponse;
    };
    sdk: {
      input: AttachClusterNodeNetworkInterfaceCommandInput;
      output: AttachClusterNodeNetworkInterfaceCommandOutput;
    };
  };
}
