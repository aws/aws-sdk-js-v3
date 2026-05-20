// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GenerateAs2805KekValidationInput, GenerateAs2805KekValidationOutput } from "../models/models_0";
import type {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { GenerateAs2805KekValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateAs2805KekValidationCommand}.
 */
export interface GenerateAs2805KekValidationCommandInput extends GenerateAs2805KekValidationInput {}
/**
 * @public
 *
 * The output of {@link GenerateAs2805KekValidationCommand}.
 */
export interface GenerateAs2805KekValidationCommandOutput extends GenerateAs2805KekValidationOutput, __MetadataBearer {}

/**
 * <p>Generates a <code>KekValidationRequest</code> or a <code>KekValidationResponse</code> for node-to-node initialization between payment processing nodes using <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/as2805.html">Australian Standard 2805 (AS2805)</a>.</p> <p>During node-to-node initialization, both communicating nodes must validate that they possess the correct Key Encrypting Keys (KEKs) before proceeding with session key exchange. In AS2805, the sending KEK (KEKs) of one node corresponds to the receiving KEK (KEKr) of its partner node. Each node uses its KEK to encrypt and decrypt session keys exchanged between the nodes. A KEK can be created or imported into Amazon Web Services Payment Cryptography using either the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> operations.</p> <p>To use <code>GenerateAs2805KekValidation</code> to generate a KEK validation request, set <code>KekValidationType</code> to <code>KekValidationRequest</code>. This operation returns both <code>RandomKeySend</code> (KRs) and <code>RandomKeyReceive</code> (KRr) as response values. The partnering node receives the KRs, uses its KEKr to decrypt it, and generates a KRr which is an inverted value of KRs. The node receiving the KRr validates it against its own KRr generated during KEK validation request outside of Amazon Web Services Payment Cryptography.</p> <p>You can also use this operation to generate a KEK validation response, by setting <code>KekValidationType</code> to <code>KekValidationResponse</code> and providing the incoming KRs. This operation then calculates a KRr. To learn more about more about node-to-node initialization, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/as2805.kekvalidation.html">Validation of KEK</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html">Resource-based policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, GenerateAs2805KekValidationCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GenerateAs2805KekValidationCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GenerateAs2805KekValidationInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   KekValidationType: { // As2805KekValidationType Union: only one key present
 *     KekValidationRequest: { // KekValidationRequest
 *       DeriveKeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *       RandomKeyMaxLength: "BYTES_8" || "BYTES_16" || "BYTES_24",
 *     },
 *     KekValidationResponse: { // KekValidationResponse
 *       RandomKeySend: "STRING_VALUE", // required
 *     },
 *   },
 *   RandomKeySendVariantMask: "VARIANT_MASK_82C0" || "VARIANT_MASK_82", // required
 * };
 * const command = new GenerateAs2805KekValidationCommand(input);
 * const response = await client.send(command);
 * // { // GenerateAs2805KekValidationOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   RandomKeySend: "STRING_VALUE", // required
 * //   RandomKeyReceive: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateAs2805KekValidationCommandInput - {@link GenerateAs2805KekValidationCommandInput}
 * @returns {@link GenerateAs2805KekValidationCommandOutput}
 * @see {@link GenerateAs2805KekValidationCommandInput} for command's `input` shape.
 * @see {@link GenerateAs2805KekValidationCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyDataClientResolvedConfig | config} for PaymentCryptographyDataClient's `config` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptographyData service.</p>
 *
 *
 * @public
 */
export class GenerateAs2805KekValidationCommand extends $Command
  .classBuilder<
    GenerateAs2805KekValidationCommandInput,
    GenerateAs2805KekValidationCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyDataPlane", "GenerateAs2805KekValidation", {})
  .n("PaymentCryptographyDataClient", "GenerateAs2805KekValidationCommand")
  .sc(GenerateAs2805KekValidation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateAs2805KekValidationInput;
      output: GenerateAs2805KekValidationOutput;
    };
    sdk: {
      input: GenerateAs2805KekValidationCommandInput;
      output: GenerateAs2805KekValidationCommandOutput;
    };
  };
}
