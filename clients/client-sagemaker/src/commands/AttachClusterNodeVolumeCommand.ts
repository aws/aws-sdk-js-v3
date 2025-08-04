// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AttachClusterNodeVolumeRequest, AttachClusterNodeVolumeResponse } from "../models/models_0";
import { de_AttachClusterNodeVolumeCommand, se_AttachClusterNodeVolumeCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Attaches your Amazon Elastic Block Store (Amazon EBS) volume to a node in your EKS-orchestrated HyperPod cluster. </p> <p> This API works with the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver to manage the lifecycle of persistent storage in your HyperPod EKS clusters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AttachClusterNodeVolumeCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AttachClusterNodeVolumeCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
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
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class AttachClusterNodeVolumeCommand extends $Command
  .classBuilder<
    AttachClusterNodeVolumeCommandInput,
    AttachClusterNodeVolumeCommandOutput,
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
  .s("SageMaker", "AttachClusterNodeVolume", {})
  .n("SageMakerClient", "AttachClusterNodeVolumeCommand")
  .f(void 0, void 0)
  .ser(se_AttachClusterNodeVolumeCommand)
  .de(de_AttachClusterNodeVolumeCommand)
  .build() {
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
