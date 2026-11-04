// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetParametersForImportRequest, GetParametersForImportResponse } from "../models/models_0";
import { GetParametersForImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandInput extends GetParametersForImportRequest {}
/**
 * @public
 *
 * The output of {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandOutput extends GetParametersForImportResponse, __MetadataBearer {}

/**
 * Returns the public key and an import token you need to import or reimport key material for a KMS key.
 *
 * By default, KMS keys are created with key material that KMS generates. This operation supports [Importing key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html), an advanced feature that lets you generate and import the cryptographic key material for a KMS key.
 *
 * Before calling `GetParametersForImport`, use the CreateKey operation with an `Origin` value of `EXTERNAL` to create a KMS key with no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a [multi-Region key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) of any supported type. However, you can't import key material into a KMS key in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). You can also use `GetParametersForImport` to get a public key and import token to [reimport the original key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#reimport-key-material) into a KMS key whose key material expired or was deleted.
 *
 * `GetParametersForImport` returns the items that you need to import your key material.
 *
 * - The public key (or "wrapping key") of an RSA key pair that KMS generates.
 *
 *   You will use this public key to encrypt ("wrap") your key material while it's in transit to KMS.
 * - A import token that ensures that KMS can decrypt your key material and associate it with the correct KMS key.
 *
 * The public key and its import token are permanently linked and must be used together. Each public key and import token set is valid for 24 hours. The expiration date and time appear in the `ParametersValidTo` field in the `GetParametersForImport` response. You cannot use an expired public key or import token in an ImportKeyMaterial request. If your key and token expire, send another `GetParametersForImport` request.
 *
 * `GetParametersForImport` requires the following information:
 *
 * - The key ID of the KMS key for which you are importing the key material.
 * - The key spec of the public key ("wrapping key") that you will use to encrypt your key material during import.
 * - The wrapping algorithm that you will use with the public key to encrypt your key material.
 *
 * You can use the same or a different public key spec and wrapping algorithm each time you import or reimport the same key material.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:GetParametersForImport](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - ImportKeyMaterial
 * - DeleteImportedKeyMaterial
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetParametersForImportCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetParametersForImportCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GetParametersForImportRequest
 *   KeyId: "STRING_VALUE", // required
 *   WrappingAlgorithm: "RSAES_PKCS1_V1_5" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "RSA_AES_KEY_WRAP_SHA_1" || "RSA_AES_KEY_WRAP_SHA_256" || "SM2PKE", // required
 *   WrappingKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "SM2", // required
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersForImportResponse
 * //   KeyId: "STRING_VALUE",
 * //   ImportToken: new Uint8Array(),
 * //   PublicKey: new Uint8Array(),
 * //   ParametersValidTo: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetParametersForImportCommandInput - {@link GetParametersForImportCommandInput}
 * @returns {@link GetParametersForImportCommandOutput}
 * @see {@link GetParametersForImportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForImportCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * This exceptions means one of the following:
 *
 * - The key state of the KMS key is not compatible with the operation.
 *
 *   To find the key state, use the DescribeKey operation. For more information about which key states are compatible with each KMS operation, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the **Key Management Service Developer Guide** .
 * - For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @public
 */
export class GetParametersForImportCommand extends command<GetParametersForImportCommandInput, GetParametersForImportCommandOutput>(
  _ep0,
  _mw0,
  "GetParametersForImport",
  GetParametersForImport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersForImportRequest;
      output: GetParametersForImportResponse;
    };
    sdk: {
      input: GetParametersForImportCommandInput;
      output: GetParametersForImportCommandOutput;
    };
  };
}
