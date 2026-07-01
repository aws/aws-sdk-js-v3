// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableVpcClassicLinkDnsSupportRequest, DisableVpcClassicLinkDnsSupportResult } from "../models/models_5";
import { DisableVpcClassicLinkDnsSupport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisableVpcClassicLinkDnsSupportCommandOutput extends DisableVpcClassicLinkDnsSupportResult, __MetadataBearer {}

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
export class DisableVpcClassicLinkDnsSupportCommand extends command<DisableVpcClassicLinkDnsSupportCommandInput, DisableVpcClassicLinkDnsSupportCommandOutput>(
  _ep0,
  _mw0,
  "DisableVpcClassicLinkDnsSupport",
  DisableVpcClassicLinkDnsSupport$
) {
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
