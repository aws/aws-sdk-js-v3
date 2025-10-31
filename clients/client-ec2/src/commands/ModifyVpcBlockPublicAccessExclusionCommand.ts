// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyVpcBlockPublicAccessExclusionRequest,
  ModifyVpcBlockPublicAccessExclusionResult,
} from "../models/models_8";
import {
  de_ModifyVpcBlockPublicAccessExclusionCommand,
  se_ModifyVpcBlockPublicAccessExclusionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcBlockPublicAccessExclusionCommand}.
 */
export interface ModifyVpcBlockPublicAccessExclusionCommandInput extends ModifyVpcBlockPublicAccessExclusionRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcBlockPublicAccessExclusionCommand}.
 */
export interface ModifyVpcBlockPublicAccessExclusionCommandOutput
  extends ModifyVpcBlockPublicAccessExclusionResult,
    __MetadataBearer {}

/**
 * <p>Modify VPC Block Public Access (BPA) exclusions. A VPC BPA exclusion is a mode that can be applied to a single VPC or subnet that exempts it from the account’s BPA mode and will allow bidirectional or egress-only access. You can create BPA exclusions for VPCs and subnets even when BPA is not enabled on the account to ensure that there is no traffic disruption to the exclusions when VPC BPA is turned on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcBlockPublicAccessExclusionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcBlockPublicAccessExclusionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcBlockPublicAccessExclusionRequest
 *   DryRun: true || false,
 *   ExclusionId: "STRING_VALUE", // required
 *   InternetGatewayExclusionMode: "allow-bidirectional" || "allow-egress", // required
 * };
 * const command = new ModifyVpcBlockPublicAccessExclusionCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcBlockPublicAccessExclusionResult
 * //   VpcBlockPublicAccessExclusion: { // VpcBlockPublicAccessExclusion
 * //     ExclusionId: "STRING_VALUE",
 * //     InternetGatewayExclusionMode: "allow-bidirectional" || "allow-egress",
 * //     ResourceArn: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "update-in-progress" || "update-complete" || "update-failed" || "delete-in-progress" || "delete-complete" || "disable-in-progress" || "disable-complete",
 * //     Reason: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     DeletionTimestamp: new Date("TIMESTAMP"),
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
 * @param ModifyVpcBlockPublicAccessExclusionCommandInput - {@link ModifyVpcBlockPublicAccessExclusionCommandInput}
 * @returns {@link ModifyVpcBlockPublicAccessExclusionCommandOutput}
 * @see {@link ModifyVpcBlockPublicAccessExclusionCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcBlockPublicAccessExclusionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcBlockPublicAccessExclusionCommand extends $Command
  .classBuilder<
    ModifyVpcBlockPublicAccessExclusionCommandInput,
    ModifyVpcBlockPublicAccessExclusionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyVpcBlockPublicAccessExclusion", {})
  .n("EC2Client", "ModifyVpcBlockPublicAccessExclusionCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVpcBlockPublicAccessExclusionCommand)
  .de(de_ModifyVpcBlockPublicAccessExclusionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcBlockPublicAccessExclusionRequest;
      output: ModifyVpcBlockPublicAccessExclusionResult;
    };
    sdk: {
      input: ModifyVpcBlockPublicAccessExclusionCommandInput;
      output: ModifyVpcBlockPublicAccessExclusionCommandOutput;
    };
  };
}
