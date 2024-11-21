// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableVpcClassicLinkDnsSupportRequest, EnableVpcClassicLinkDnsSupportResult } from "../models/models_6";
import {
  de_EnableVpcClassicLinkDnsSupportCommand,
  se_EnableVpcClassicLinkDnsSupportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableVpcClassicLinkDnsSupportCommand}.
 */
export interface EnableVpcClassicLinkDnsSupportCommandInput extends EnableVpcClassicLinkDnsSupportRequest {}
/**
 * @public
 *
 * The output of {@link EnableVpcClassicLinkDnsSupportCommand}.
 */
export interface EnableVpcClassicLinkDnsSupportCommandOutput
  extends EnableVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS
 * 			hostname of a linked EC2-Classic instance resolves to its private IP address when
 * 			addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 * 			of an instance in a VPC resolves to its private IP address when addressed from a linked
 * 			EC2-Classic instance.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableVpcClassicLinkDnsSupportRequest
 *   VpcId: "STRING_VALUE",
 * };
 * const command = new EnableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * // { // EnableVpcClassicLinkDnsSupportResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableVpcClassicLinkDnsSupportCommandInput - {@link EnableVpcClassicLinkDnsSupportCommandInput}
 * @returns {@link EnableVpcClassicLinkDnsSupportCommandOutput}
 * @see {@link EnableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link EnableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class EnableVpcClassicLinkDnsSupportCommand extends $Command
  .classBuilder<
    EnableVpcClassicLinkDnsSupportCommandInput,
    EnableVpcClassicLinkDnsSupportCommandOutput,
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
  .s("AmazonEC2", "EnableVpcClassicLinkDnsSupport", {})
  .n("EC2Client", "EnableVpcClassicLinkDnsSupportCommand")
  .f(void 0, void 0)
  .ser(se_EnableVpcClassicLinkDnsSupportCommand)
  .de(de_EnableVpcClassicLinkDnsSupportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableVpcClassicLinkDnsSupportRequest;
      output: EnableVpcClassicLinkDnsSupportResult;
    };
    sdk: {
      input: EnableVpcClassicLinkDnsSupportCommandInput;
      output: EnableVpcClassicLinkDnsSupportCommandOutput;
    };
  };
}
