// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprovisionIpamByoasnRequest, DeprovisionIpamByoasnResult } from "../models/models_3";
import { DeprovisionIpamByoasn$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeprovisionIpamByoasnCommand}.
 */
export interface DeprovisionIpamByoasnCommandInput extends DeprovisionIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionIpamByoasnCommand}.
 */
export interface DeprovisionIpamByoasnCommandOutput extends DeprovisionIpamByoasnResult, __MetadataBearer {}

/**
 * <p>Deprovisions your Autonomous System Number (ASN) from your Amazon Web Services account. This action can only be called after any BYOIP CIDR associations are removed from your Amazon Web Services account with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIpamByoasn.html">DisassociateIpamByoasn</a>.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeprovisionIpamByoasnRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Asn: "STRING_VALUE", // required
 * };
 * const command = new DeprovisionIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionIpamByoasnResult
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
 * @param DeprovisionIpamByoasnCommandInput - {@link DeprovisionIpamByoasnCommandInput}
 * @returns {@link DeprovisionIpamByoasnCommandOutput}
 * @see {@link DeprovisionIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link DeprovisionIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeprovisionIpamByoasnCommand extends command<DeprovisionIpamByoasnCommandInput, DeprovisionIpamByoasnCommandOutput>(
  _ep0,
  _mw0,
  "DeprovisionIpamByoasn",
  DeprovisionIpamByoasn$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprovisionIpamByoasnRequest;
      output: DeprovisionIpamByoasnResult;
    };
    sdk: {
      input: DeprovisionIpamByoasnCommandInput;
      output: DeprovisionIpamByoasnCommandOutput;
    };
  };
}
