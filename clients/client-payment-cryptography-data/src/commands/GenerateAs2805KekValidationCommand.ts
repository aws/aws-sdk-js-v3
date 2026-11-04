// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateAs2805KekValidationInput, GenerateAs2805KekValidationOutput } from "../models/models_0";
import { GenerateAs2805KekValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates a `KekValidationRequest` or a `KekValidationResponse` for node-to-node initialization between payment processing nodes using [Australian Standard 2805 (AS2805)](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/as2805.html).
 *
 * During node-to-node initialization, both communicating nodes must validate that they possess the correct Key Encrypting Keys (KEKs) before proceeding with session key exchange. In AS2805, the sending KEK (KEKs) of one node corresponds to the receiving KEK (KEKr) of its partner node. Each node uses its KEK to encrypt and decrypt session keys exchanged between the nodes. A KEK can be created or imported into Amazon Web Services Payment Cryptography using either the [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html) or [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html) operations.
 *
 * To use `GenerateAs2805KekValidation` to generate a KEK validation request, set `KekValidationType` to `KekValidationRequest`. This operation returns both `RandomKeySend` (KRs) and `RandomKeyReceive` (KRr) as response values. The partnering node receives the KRs, uses its KEKr to decrypt it, and generates a KRr which is an inverted value of KRs. The node receiving the KRr validates it against its own KRr generated during KEK validation request outside of Amazon Web Services Payment Cryptography.
 *
 * You can also use this operation to generate a KEK validation response, by setting `KekValidationType` to `KekValidationResponse` and providing the incoming KRs. This operation then calculates a KRr. To learn more about more about node-to-node initialization, see [Validation of KEK](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/as2805.kekvalidation.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * For information about valid keys for this operation, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) and [Key types for specific data operations](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * **Cross-account use**: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied due to an invalid resource error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied due to an invalid request error.
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptographyData service.
 *
 * @public
 */
export class GenerateAs2805KekValidationCommand extends command<GenerateAs2805KekValidationCommandInput, GenerateAs2805KekValidationCommandOutput>(
  _ep0,
  _mw0,
  "GenerateAs2805KekValidation",
  GenerateAs2805KekValidation$
) {
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
