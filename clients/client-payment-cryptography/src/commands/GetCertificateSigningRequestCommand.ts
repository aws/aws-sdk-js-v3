// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCertificateSigningRequestInput,
  GetCertificateSigningRequestOutput,
  GetCertificateSigningRequestOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import {
  de_GetCertificateSigningRequestCommand,
  se_GetCertificateSigningRequestCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCertificateSigningRequestCommand}.
 */
export interface GetCertificateSigningRequestCommandInput extends GetCertificateSigningRequestInput {}
/**
 * @public
 *
 * The output of {@link GetCertificateSigningRequestCommand}.
 */
export interface GetCertificateSigningRequestCommandOutput
  extends GetCertificateSigningRequestOutput,
    __MetadataBearer {}

/**
 * Used to retrieve the public key for a keypair.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, GetCertificateSigningRequestCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, GetCertificateSigningRequestCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // GetCertificateSigningRequestInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   SigningAlgorithm: "STRING_VALUE", // required
 *   CertificateSubject: { // CertificateSubjectType
 *     CommonName: "STRING_VALUE", // required
 *     OrganizationUnit: "STRING_VALUE",
 *     Organization: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     StateOrProvince: "STRING_VALUE",
 *     EmailAddress: "STRING_VALUE",
 *   },
 * };
 * const command = new GetCertificateSigningRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificateSigningRequestOutput
 * //   CertificateSigningRequest: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCertificateSigningRequestCommandInput - {@link GetCertificateSigningRequestCommandInput}
 * @returns {@link GetCertificateSigningRequestCommandOutput}
 * @see {@link GetCertificateSigningRequestCommandInput} for command's `input` shape.
 * @see {@link GetCertificateSigningRequestCommandOutput} for command's `response` shape.
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
export class GetCertificateSigningRequestCommand extends $Command
  .classBuilder<
    GetCertificateSigningRequestCommandInput,
    GetCertificateSigningRequestCommandOutput,
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
  .s("PaymentCryptographyControlPlane", "GetCertificateSigningRequest", {})
  .n("PaymentCryptographyClient", "GetCertificateSigningRequestCommand")
  .f(void 0, GetCertificateSigningRequestOutputFilterSensitiveLog)
  .ser(se_GetCertificateSigningRequestCommand)
  .de(de_GetCertificateSigningRequestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCertificateSigningRequestInput;
      output: GetCertificateSigningRequestOutput;
    };
    sdk: {
      input: GetCertificateSigningRequestCommandInput;
      output: GetCertificateSigningRequestCommandOutput;
    };
  };
}
