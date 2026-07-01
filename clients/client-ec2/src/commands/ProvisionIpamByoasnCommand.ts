// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ProvisionIpamByoasnRequest, ProvisionIpamByoasnResult } from "../models/models_7";
import { ProvisionIpamByoasn$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ProvisionIpamByoasnCommand}.
 */
export interface ProvisionIpamByoasnCommandInput extends ProvisionIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionIpamByoasnCommand}.
 */
export interface ProvisionIpamByoasnCommandOutput extends ProvisionIpamByoasnResult, __MetadataBearer {}

/**
 * <p>Provisions your Autonomous System Number (ASN) for use in your Amazon Web Services account. This action requires authorization context for Amazon to bring the ASN to an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ProvisionIpamByoasnRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Asn: "STRING_VALUE", // required
 *   AsnAuthorizationContext: { // AsnAuthorizationContext
 *     Message: "STRING_VALUE", // required
 *     Signature: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ProvisionIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionIpamByoasnResult
 * //   Byoasn: { // Byoasn
 * //     Asn: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned",
 * //   },
 * // };
 *
 * ```
 *
 * @param ProvisionIpamByoasnCommandInput - {@link ProvisionIpamByoasnCommandInput}
 * @returns {@link ProvisionIpamByoasnCommandOutput}
 * @see {@link ProvisionIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link ProvisionIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ProvisionIpamByoasnCommand extends command<ProvisionIpamByoasnCommandInput, ProvisionIpamByoasnCommandOutput>(
  _ep0,
  _mw0,
  "ProvisionIpamByoasn",
  ProvisionIpamByoasn$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionIpamByoasnRequest;
      output: ProvisionIpamByoasnResult;
    };
    sdk: {
      input: ProvisionIpamByoasnCommandInput;
      output: ProvisionIpamByoasnCommandOutput;
    };
  };
}
