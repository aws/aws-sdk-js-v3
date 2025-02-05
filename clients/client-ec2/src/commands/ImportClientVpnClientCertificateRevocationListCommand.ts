// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ImportClientVpnClientCertificateRevocationListRequest,
  ImportClientVpnClientCertificateRevocationListResult,
} from "../models/models_6";
import {
  de_ImportClientVpnClientCertificateRevocationListCommand,
  se_ImportClientVpnClientCertificateRevocationListCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ImportClientVpnClientCertificateRevocationListCommandInput
  extends ImportClientVpnClientCertificateRevocationListRequest {}
/**
 * @public
 *
 * The output of {@link ImportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ImportClientVpnClientCertificateRevocationListCommandOutput
  extends ImportClientVpnClientCertificateRevocationListResult,
    __MetadataBearer {}

/**
 * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p>
 *          <p>Uploading a client certificate revocation list resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ImportClientVpnClientCertificateRevocationListRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   CertificateRevocationList: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ImportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * // { // ImportClientVpnClientCertificateRevocationListResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ImportClientVpnClientCertificateRevocationListCommandInput - {@link ImportClientVpnClientCertificateRevocationListCommandInput}
 * @returns {@link ImportClientVpnClientCertificateRevocationListCommandOutput}
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ImportClientVpnClientCertificateRevocationListCommand extends $Command
  .classBuilder<
    ImportClientVpnClientCertificateRevocationListCommandInput,
    ImportClientVpnClientCertificateRevocationListCommandOutput,
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
  .s("AmazonEC2", "ImportClientVpnClientCertificateRevocationList", {})
  .n("EC2Client", "ImportClientVpnClientCertificateRevocationListCommand")
  .f(void 0, void 0)
  .ser(se_ImportClientVpnClientCertificateRevocationListCommand)
  .de(de_ImportClientVpnClientCertificateRevocationListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportClientVpnClientCertificateRevocationListRequest;
      output: ImportClientVpnClientCertificateRevocationListResult;
    };
    sdk: {
      input: ImportClientVpnClientCertificateRevocationListCommandInput;
      output: ImportClientVpnClientCertificateRevocationListCommandOutput;
    };
  };
}
