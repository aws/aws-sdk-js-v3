// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportKeyMaterialRequest, ImportKeyMaterialResponse } from "../models/models_0";
import { ImportKeyMaterial$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportKeyMaterialCommand}.
 */
export interface ImportKeyMaterialCommandInput extends ImportKeyMaterialRequest {}
/**
 * @public
 *
 * The output of {@link ImportKeyMaterialCommand}.
 */
export interface ImportKeyMaterialCommandOutput extends ImportKeyMaterialResponse, __MetadataBearer {}

/**
 * Imports or reimports key material into an existing KMS key that was created without key material. You can also use this operation to set or update the expiration model and expiration date of the imported key material.
 *
 * By default, KMS creates KMS keys with key material that it generates. You can also generate and import your own key material. For more information about importing key material, see [Importing key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html).
 *
 * For asymmetric and HMAC keys, you cannot change the key material after the initial import. You can import multiple key materials into symmetric encryption keys and rotate the key material on demand using `RotateKeyOnDemand`.
 *
 * You can import new key materials into multi-Region symmetric encryption keys. To do so, you must import the new key material into the primary Region key. Then you can import the same key materials into the replica Region keys. You cannot directly import new key material into the replica Region keys.
 *
 * To import new key material for a multi-Region symmetric key, you’ll need to complete the following:
 *
 * 1. Call `ImportKeyMaterial` on the primary Region key with the `ImportType`set to `NEW_KEY_MATERIAL`.
 * 2. Call `ImportKeyMaterial` on the replica Region key with the `ImportType` set to `EXISTING_KEY_MATERIAL` using the same key material imported to the primary Region key. You must do this for every replica Region key before you can perform the RotateKeyOnDemand operation on the primary Region key.
 *
 * After you import key material, you can [reimport the same key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#reimport-key-material) into that KMS key or, if the key supports on-demand rotation, import new key material. You can use the `ImportType` parameter to indicate whether you are importing new key material or re-importing previously imported key material. You might reimport key material to replace key material that expired or key material that you deleted. You might also reimport key material to change the expiration model or expiration date of the key material.
 *
 * Each time you import key material into KMS, you can determine whether (`ExpirationModel`) and when (`ValidTo`) the key material expires. To change the expiration of your key material, you must import it again, either by calling `ImportKeyMaterial` or using the [import features](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-import-key-material-console) of the KMS console.
 *
 * Before you call `ImportKeyMaterial`, complete these steps:
 *
 * - Create or identify a KMS key with `EXTERNAL` origin, which indicates that the KMS key is designed for imported key material.
 *
 *   To create a new KMS key for imported key material, call the CreateKey operation with an `Origin` value of `EXTERNAL`. You can create a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, asymmetric key agreement key, or asymmetric signing KMS key. You can also import key material into a [multi-Region key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) of any supported type. However, you can't import key material into a KMS key in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html).
 * - Call the GetParametersForImport operation to get a public key and import token set for importing key material.
 * - Use the public key in the GetParametersForImport response to encrypt your key material.
 *
 * Then, in an `ImportKeyMaterial` request, you submit your encrypted key material and import token. When calling this operation, you must specify the following values:
 *
 * - The key ID or key ARN of the KMS key to associate with the imported key material. Its `Origin` must be `EXTERNAL` and its `KeyState` must be `PendingImport` or `Enabled`. You cannot perform this operation on a KMS key in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html), or on a KMS key in a different Amazon Web Services account. To get the `Origin` and `KeyState` of a KMS key, call DescribeKey.
 * - The encrypted key material.
 * - The import token that GetParametersForImport returned. You must use a public key and token from the same `GetParametersForImport` response.
 * - Whether the key material expires (`ExpirationModel`) and, if so, when (`ValidTo`). For help with this choice, see [Setting an expiration time](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-expiration) in the *Key Management Service Developer Guide*.
 *
 *   If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, making the KMS key unusable. To use the KMS key in cryptographic operations again, you must reimport the same key material. However, you can delete and reimport the key material at any time, including before the key material expires. Each time you reimport, you can eliminate or reset the expiration time.
 *
 * When this operation is successful, the state of the KMS key changes to `Enabled`, and you can use the KMS key in cryptographic operations. For symmetric encryption keys, you will need to import all of the key materials associated with the KMS key to change its state to `Enabled`. Use the `ListKeyRotations` operation to list the ID and import state of each key material associated with a KMS key.
 *
 * If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use GetParametersForImport to get a new public key and import token for the KMS key and repeat the import procedure. For help, see [Create a KMS key with imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-conceptual.html) in the *Key Management Service Developer Guide*.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:ImportKeyMaterial](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - DeleteImportedKeyMaterial
 * - GetParametersForImport
 * - ListKeyRotations
 * - RotateKeyOnDemand
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ImportKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ImportKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ImportKeyMaterialRequest
 *   KeyId: "STRING_VALUE", // required
 *   ImportToken: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   EncryptedKeyMaterial: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ValidTo: new Date("TIMESTAMP"),
 *   ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 *   ImportType: "NEW_KEY_MATERIAL" || "EXISTING_KEY_MATERIAL",
 *   KeyMaterialDescription: "STRING_VALUE",
 *   KeyMaterialId: "STRING_VALUE",
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // { // ImportKeyMaterialResponse
 * //   KeyId: "STRING_VALUE",
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportKeyMaterialCommandInput - {@link ImportKeyMaterialCommandInput}
 * @returns {@link ImportKeyMaterialCommandOutput}
 * @see {@link ImportKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link ImportKeyMaterialCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link ExpiredImportTokenException} (client fault)
 *
 * The request was rejected because the specified import token is expired. Use GetParametersForImport to get a new import token and public key, use the new public key to encrypt the key material, and then try the request again.
 *
 * @throws {@link IncorrectKeyMaterialException} (client fault)
 *
 * The request was rejected because the key material in the request is, expired, invalid, or does not meet expectations. For example, it is not the same key material that was previously imported or KMS expected new key material but the key material being imported is already associated with the KMS key.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link InvalidCiphertextException} (client fault)
 *
 * From the Decrypt or ReEncrypt operation, the request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.
 *
 * From the ImportKeyMaterial operation, the request was rejected because KMS could not decrypt the encrypted (wrapped) key material.
 *
 * From the Decapsulate operation, the request was rejected because the length of the `SharedSecretCiphertextBlob` is inconsistent with the specified ML-KEM key spec.
 *
 * @throws {@link InvalidImportTokenException} (client fault)
 *
 * The request was rejected because the provided import token is invalid or is associated with a different KMS key.
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
 * @example To import key material into a KMS key
 * ```javascript
 * // The following example imports key material into the specified KMS key.
 * const input = {
 *   EncryptedKeyMaterial: "<binary data>",
 *   ExpirationModel: "KEY_MATERIAL_DOES_NOT_EXPIRE",
 *   ImportToken: "<binary data>",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ImportKeyMaterialCommand extends command<ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput>(
  _ep0,
  _mw0,
  "ImportKeyMaterial",
  ImportKeyMaterial$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportKeyMaterialRequest;
      output: ImportKeyMaterialResponse;
    };
    sdk: {
      input: ImportKeyMaterialCommandInput;
      output: ImportKeyMaterialCommandOutput;
    };
  };
}
