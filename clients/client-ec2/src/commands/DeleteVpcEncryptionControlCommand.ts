// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpcEncryptionControlRequest, DeleteVpcEncryptionControlResult } from "../models/models_3";
import { DeleteVpcEncryptionControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEncryptionControlCommand}.
 */
export interface DeleteVpcEncryptionControlCommandInput extends DeleteVpcEncryptionControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEncryptionControlCommand}.
 */
export interface DeleteVpcEncryptionControlCommandOutput extends DeleteVpcEncryptionControlResult, __MetadataBearer {}

/**
 * <p>Deletes a VPC Encryption Control configuration. This removes the encryption policy enforcement from the specified VPC.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEncryptionControlCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEncryptionControlCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcEncryptionControlRequest
 *   DryRun: true || false,
 *   VpcEncryptionControlId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcEncryptionControlCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEncryptionControlResult
 * //   VpcEncryptionControl: { // VpcEncryptionControl
 * //     VpcId: "STRING_VALUE",
 * //     VpcEncryptionControlId: "STRING_VALUE",
 * //     Mode: "monitor" || "enforce",
 * //     State: "enforce-in-progress" || "monitor-in-progress" || "enforce-failed" || "monitor-failed" || "deleting" || "deleted" || "available" || "creating" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     ResourceExclusions: { // VpcEncryptionControlExclusions
 * //       InternetGateway: { // VpcEncryptionControlExclusion
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       EgressOnlyInternetGateway: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       NatGateway: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       VirtualPrivateGateway: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       VpcPeering: {
 * //         State: "enabling" || "enabled" || "disabling" || "disabled",
 * //         StateMessage: "STRING_VALUE",
 * //       },
 * //       Lambda: "<VpcEncryptionControlExclusion>",
 * //       VpcLattice: "<VpcEncryptionControlExclusion>",
 * //       ElasticFileSystem: "<VpcEncryptionControlExclusion>",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcEncryptionControlCommandInput - {@link DeleteVpcEncryptionControlCommandInput}
 * @returns {@link DeleteVpcEncryptionControlCommandOutput}
 * @see {@link DeleteVpcEncryptionControlCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEncryptionControlCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpcEncryptionControlCommand extends $Command
  .classBuilder<
    DeleteVpcEncryptionControlCommandInput,
    DeleteVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpcEncryptionControl", {})
  .n("EC2Client", "DeleteVpcEncryptionControlCommand")
  .sc(DeleteVpcEncryptionControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcEncryptionControlRequest;
      output: DeleteVpcEncryptionControlResult;
    };
    sdk: {
      input: DeleteVpcEncryptionControlCommandInput;
      output: DeleteVpcEncryptionControlCommandOutput;
    };
  };
}
