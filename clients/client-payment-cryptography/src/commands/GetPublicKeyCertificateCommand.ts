// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPublicKeyCertificateInput, GetPublicKeyCertificateOutput } from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { GetPublicKeyCertificate } from "../schemas/schemas_1_Key";

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
 * <p>Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography.</p> <p>Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with <code>GetPublicKeyCertificate</code> permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography</p> <p> <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetPublicKeyCertificateCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetPublicKeyCertificateCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
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
 *  <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p> <p>The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p> <p>You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p> <p>One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyControlPlane", "GetPublicKeyCertificate", {})
  .n("PaymentCryptographyClient", "GetPublicKeyCertificateCommand")
  .sc(GetPublicKeyCertificate)
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
