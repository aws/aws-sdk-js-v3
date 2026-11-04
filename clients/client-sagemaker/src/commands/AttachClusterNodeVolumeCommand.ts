// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachClusterNodeVolumeRequest, AttachClusterNodeVolumeResponse } from "../models/models_0";
import { AttachClusterNodeVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachClusterNodeVolumeCommand}.
 */
export interface AttachClusterNodeVolumeCommandInput extends AttachClusterNodeVolumeRequest {}
/**
 * @public
 *
 * The output of {@link AttachClusterNodeVolumeCommand}.
 */
export interface AttachClusterNodeVolumeCommandOutput extends AttachClusterNodeVolumeResponse, __MetadataBearer {}

/**
 * Attaches your Amazon Elastic Block Store (Amazon EBS) volume to a node in your EKS orchestrated HyperPod cluster.
 *
 * This API works with the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver to manage the lifecycle of persistent storage in your HyperPod EKS clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AttachClusterNodeVolumeCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AttachClusterNodeVolumeCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // AttachClusterNodeVolumeRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   NodeId: "STRING_VALUE", // required
 *   VolumeId: "STRING_VALUE", // required
 * };
 * const command = new AttachClusterNodeVolumeCommand(input);
 * const response = await client.send(command);
 * // { // AttachClusterNodeVolumeResponse
 * //   ClusterArn: "STRING_VALUE", // required
 * //   NodeId: "STRING_VALUE", // required
 * //   VolumeId: "STRING_VALUE", // required
 * //   AttachTime: new Date("TIMESTAMP"), // required
 * //   Status: "attaching" || "attached" || "detaching" || "detached" || "busy", // required
 * //   DeviceName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AttachClusterNodeVolumeCommandInput - {@link AttachClusterNodeVolumeCommandInput}
 * @returns {@link AttachClusterNodeVolumeCommandOutput}
 * @see {@link AttachClusterNodeVolumeCommandInput} for command's `input` shape.
 * @see {@link AttachClusterNodeVolumeCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class AttachClusterNodeVolumeCommand extends command<AttachClusterNodeVolumeCommandInput, AttachClusterNodeVolumeCommandOutput>(
  _ep0,
  _mw0,
  "AttachClusterNodeVolume",
  AttachClusterNodeVolume$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachClusterNodeVolumeRequest;
      output: AttachClusterNodeVolumeResponse;
    };
    sdk: {
      input: AttachClusterNodeVolumeCommandInput;
      output: AttachClusterNodeVolumeCommandOutput;
    };
  };
}
