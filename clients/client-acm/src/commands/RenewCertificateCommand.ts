// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RenewCertificateRequest } from "../models/models_0";
import { de_RenewCertificateCommand, se_RenewCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RenewCertificateCommand}.
 */
export interface RenewCertificateCommandInput extends RenewCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RenewCertificateCommand}.
 */
export interface RenewCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Renews an eligible ACM certificate. At this time, only exported private certificates can
 *       be renewed with this operation. In order to renew your Amazon Web Services Private CA certificates with ACM, you
 *       must first <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaPermissions.html">grant the ACM
 *         service principal permission to do so</a>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/manual-renewal.html">Testing Managed Renewal</a>
 *       in the ACM User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RenewCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RenewCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const input = { // RenewCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new RenewCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RenewCertificateCommandInput - {@link RenewCertificateCommandInput}
 * @returns {@link RenewCertificateCommandOutput}
 * @see {@link RenewCertificateCommandInput} for command's `input` shape.
 * @see {@link RenewCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class RenewCertificateCommand extends $Command
  .classBuilder<
    RenewCertificateCommandInput,
    RenewCertificateCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CertificateManager", "RenewCertificate", {})
  .n("ACMClient", "RenewCertificateCommand")
  .f(void 0, void 0)
  .ser(se_RenewCertificateCommand)
  .de(de_RenewCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenewCertificateRequest;
      output: {};
    };
    sdk: {
      input: RenewCertificateCommandInput;
      output: RenewCertificateCommandOutput;
    };
  };
}
