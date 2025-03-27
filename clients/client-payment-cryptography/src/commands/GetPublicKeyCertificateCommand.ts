// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPublicKeyCertificateInput,
  GetPublicKeyCertificateOutput,
  GetPublicKeyCertificateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_GetPublicKeyCertificateCommand, se_GetPublicKeyCertificateCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPublicKeyCertificateCommand}.
 */
export interface GetPublicKeyCertificateCommandInput extends GetPublicKeyCertificateInput {}
/**
 * @public
 *
 * The output of {@link GetPublicKeyCertificateCommand}.
 */
export interface GetPublicKeyCertificateCommandOutput extends GetPublicKeyCertificateOutput, __MetadataBearer {}

/**
 * <p>Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography.</p>
 *          <p>Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with <code>GetPublicKeyCertificate</code> permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetPublicKeyCertificateCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetPublicKeyCertificateCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetPublicKeyCertificateInput
 *   KeyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetPublicKeyCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicKeyCertificateOutput
 * //   KeyCertificate: "STRING_VALUE", // required
 * //   KeyCertificateChain: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetPublicKeyCertificateCommandInput - {@link GetPublicKeyCertificateCommandInput}
 * @returns {@link GetPublicKeyCertificateCommandOutput}
 * @see {@link GetPublicKeyCertificateCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCertificateCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class GetPublicKeyCertificateCommand extends $Command
  .classBuilder<
    GetPublicKeyCertificateCommandInput,
    GetPublicKeyCertificateCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyControlPlane", "GetPublicKeyCertificate", {})
  .n("PaymentCryptographyClient", "GetPublicKeyCertificateCommand")
  .f(void 0, GetPublicKeyCertificateOutputFilterSensitiveLog)
  .ser(se_GetPublicKeyCertificateCommand)
  .de(de_GetPublicKeyCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicKeyCertificateInput;
      output: GetPublicKeyCertificateOutput;
    };
    sdk: {
      input: GetPublicKeyCertificateCommandInput;
      output: GetPublicKeyCertificateCommandOutput;
    };
  };
}
