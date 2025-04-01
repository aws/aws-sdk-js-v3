// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportClientVpnClientCertificateRevocationListRequest,
  ExportClientVpnClientCertificateRevocationListResult,
} from "../models/models_6";
import {
  de_ExportClientVpnClientCertificateRevocationListCommand,
  se_ExportClientVpnClientCertificateRevocationListCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ExportClientVpnClientCertificateRevocationListCommandInput
  extends ExportClientVpnClientCertificateRevocationListRequest {}
/**
 * @public
 *
 * The output of {@link ExportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ExportClientVpnClientCertificateRevocationListCommandOutput
  extends ExportClientVpnClientCertificateRevocationListResult,
    __MetadataBearer {}

/**
 * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ExportClientVpnClientCertificateRevocationListRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * // { // ExportClientVpnClientCertificateRevocationListResult
 * //   CertificateRevocationList: "STRING_VALUE",
 * //   Status: { // ClientCertificateRevocationListStatus
 * //     Code: "pending" || "active",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportClientVpnClientCertificateRevocationListCommandInput - {@link ExportClientVpnClientCertificateRevocationListCommandInput}
 * @returns {@link ExportClientVpnClientCertificateRevocationListCommandOutput}
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ExportClientVpnClientCertificateRevocationListCommand extends $Command
  .classBuilder<
    ExportClientVpnClientCertificateRevocationListCommandInput,
    ExportClientVpnClientCertificateRevocationListCommandOutput,
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
  .s("AmazonEC2", "ExportClientVpnClientCertificateRevocationList", {})
  .n("EC2Client", "ExportClientVpnClientCertificateRevocationListCommand")
  .f(void 0, void 0)
  .ser(se_ExportClientVpnClientCertificateRevocationListCommand)
  .de(de_ExportClientVpnClientCertificateRevocationListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportClientVpnClientCertificateRevocationListRequest;
      output: ExportClientVpnClientCertificateRevocationListResult;
    };
    sdk: {
      input: ExportClientVpnClientCertificateRevocationListCommandInput;
      output: ExportClientVpnClientCertificateRevocationListCommandOutput;
    };
  };
}
