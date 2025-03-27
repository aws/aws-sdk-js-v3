// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableVpcClassicLinkDnsSupportRequest, DisableVpcClassicLinkDnsSupportResult } from "../models/models_5";
import {
  de_DisableVpcClassicLinkDnsSupportCommand,
  se_DisableVpcClassicLinkDnsSupportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableVpcClassicLinkDnsSupportCommand}.
 */
export interface DisableVpcClassicLinkDnsSupportCommandInput extends DisableVpcClassicLinkDnsSupportRequest {}
/**
 * @public
 *
 * The output of {@link DisableVpcClassicLinkDnsSupportCommand}.
 */
export interface DisableVpcClassicLinkDnsSupportCommandOutput
  extends DisableVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to
 * 			public IP addresses when addressed between a linked EC2-Classic instance and instances
 * 			in the VPC to which it's linked.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableVpcClassicLinkDnsSupportRequest
 *   VpcId: "STRING_VALUE",
 * };
 * const command = new DisableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * // { // DisableVpcClassicLinkDnsSupportResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableVpcClassicLinkDnsSupportCommandInput - {@link DisableVpcClassicLinkDnsSupportCommandInput}
 * @returns {@link DisableVpcClassicLinkDnsSupportCommandOutput}
 * @see {@link DisableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableVpcClassicLinkDnsSupportCommand extends $Command
  .classBuilder<
    DisableVpcClassicLinkDnsSupportCommandInput,
    DisableVpcClassicLinkDnsSupportCommandOutput,
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
  .s("AmazonEC2", "DisableVpcClassicLinkDnsSupport", {})
  .n("EC2Client", "DisableVpcClassicLinkDnsSupportCommand")
  .f(void 0, void 0)
  .ser(se_DisableVpcClassicLinkDnsSupportCommand)
  .de(de_DisableVpcClassicLinkDnsSupportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableVpcClassicLinkDnsSupportRequest;
      output: DisableVpcClassicLinkDnsSupportResult;
    };
    sdk: {
      input: DisableVpcClassicLinkDnsSupportCommandInput;
      output: DisableVpcClassicLinkDnsSupportCommandOutput;
    };
  };
}
