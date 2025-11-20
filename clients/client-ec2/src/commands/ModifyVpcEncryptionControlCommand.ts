// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcEncryptionControlRequest, ModifyVpcEncryptionControlResult } from "../models/models_7";
import { ModifyVpcEncryptionControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEncryptionControlCommand}.
 */
export interface ModifyVpcEncryptionControlCommandInput extends ModifyVpcEncryptionControlRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEncryptionControlCommand}.
 */
export interface ModifyVpcEncryptionControlCommandOutput extends ModifyVpcEncryptionControlResult, __MetadataBearer {}

/**
 * <p>Modifies the encryption control configuration for a VPC. You can update the encryption mode and exclusion settings for various gateway types and peering connections.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEncryptionControlCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEncryptionControlCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEncryptionControlRequest
 *   DryRun: true || false,
 *   VpcEncryptionControlId: "STRING_VALUE", // required
 *   Mode: "monitor" || "enforce",
 *   InternetGatewayExclusion: "enable" || "disable",
 *   EgressOnlyInternetGatewayExclusion: "enable" || "disable",
 *   NatGatewayExclusion: "enable" || "disable",
 *   VirtualPrivateGatewayExclusion: "enable" || "disable",
 *   VpcPeeringExclusion: "enable" || "disable",
 *   LambdaExclusion: "enable" || "disable",
 *   VpcLatticeExclusion: "enable" || "disable",
 *   ElasticFileSystemExclusion: "enable" || "disable",
 * };
 * const command = new ModifyVpcEncryptionControlCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEncryptionControlResult
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
 * @param ModifyVpcEncryptionControlCommandInput - {@link ModifyVpcEncryptionControlCommandInput}
 * @returns {@link ModifyVpcEncryptionControlCommandOutput}
 * @see {@link ModifyVpcEncryptionControlCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEncryptionControlCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcEncryptionControlCommand extends $Command
  .classBuilder<
    ModifyVpcEncryptionControlCommandInput,
    ModifyVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVpcEncryptionControl", {})
  .n("EC2Client", "ModifyVpcEncryptionControlCommand")
  .sc(ModifyVpcEncryptionControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcEncryptionControlRequest;
      output: ModifyVpcEncryptionControlResult;
    };
    sdk: {
      input: ModifyVpcEncryptionControlCommandInput;
      output: ModifyVpcEncryptionControlCommandOutput;
    };
  };
}
