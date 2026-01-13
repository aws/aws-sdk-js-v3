// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ModifyVpcBlockPublicAccessOptionsRequest,
  ModifyVpcBlockPublicAccessOptionsResult,
} from "../models/models_7";
import { ModifyVpcBlockPublicAccessOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcBlockPublicAccessOptionsCommand}.
 */
export interface ModifyVpcBlockPublicAccessOptionsCommandInput extends ModifyVpcBlockPublicAccessOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcBlockPublicAccessOptionsCommand}.
 */
export interface ModifyVpcBlockPublicAccessOptionsCommandOutput extends ModifyVpcBlockPublicAccessOptionsResult, __MetadataBearer {}

/**
 * <p>Modify VPC Block Public Access (BPA) options. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcBlockPublicAccessOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcBlockPublicAccessOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcBlockPublicAccessOptionsRequest
 *   DryRun: true || false,
 *   InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress", // required
 * };
 * const command = new ModifyVpcBlockPublicAccessOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcBlockPublicAccessOptionsResult
 * //   VpcBlockPublicAccessOptions: { // VpcBlockPublicAccessOptions
 * //     AwsAccountId: "STRING_VALUE",
 * //     AwsRegion: "STRING_VALUE",
 * //     State: "default-state" || "update-in-progress" || "update-complete",
 * //     InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress",
 * //     Reason: "STRING_VALUE",
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     ManagedBy: "account" || "declarative-policy",
 * //     ExclusionsAllowed: "allowed" || "not-allowed",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVpcBlockPublicAccessOptionsCommandInput - {@link ModifyVpcBlockPublicAccessOptionsCommandInput}
 * @returns {@link ModifyVpcBlockPublicAccessOptionsCommandOutput}
 * @see {@link ModifyVpcBlockPublicAccessOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcBlockPublicAccessOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcBlockPublicAccessOptionsCommand extends $Command
  .classBuilder<
    ModifyVpcBlockPublicAccessOptionsCommandInput,
    ModifyVpcBlockPublicAccessOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVpcBlockPublicAccessOptions", {})
  .n("EC2Client", "ModifyVpcBlockPublicAccessOptionsCommand")
  .sc(ModifyVpcBlockPublicAccessOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcBlockPublicAccessOptionsRequest;
      output: ModifyVpcBlockPublicAccessOptionsResult;
    };
    sdk: {
      input: ModifyVpcBlockPublicAccessOptionsCommandInput;
      output: ModifyVpcBlockPublicAccessOptionsCommandOutput;
    };
  };
}
