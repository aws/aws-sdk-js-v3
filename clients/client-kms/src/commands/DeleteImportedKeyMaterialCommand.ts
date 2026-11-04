// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImportedKeyMaterialRequest, DeleteImportedKeyMaterialResponse } from "../models/models_0";
import { DeleteImportedKeyMaterial$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteImportedKeyMaterialCommand}.
 */
export interface DeleteImportedKeyMaterialCommandInput extends DeleteImportedKeyMaterialRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImportedKeyMaterialCommand}.
 */
export interface DeleteImportedKeyMaterialCommandOutput extends DeleteImportedKeyMaterialResponse, __MetadataBearer {}

/**
 * Deletes key material that was previously imported. This operation makes the specified KMS key temporarily unusable. To restore the usability of the KMS key, reimport the same key material. For more information about importing key material into KMS, see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *Key Management Service Developer Guide*.
 *
 * When the specified KMS key is in the `PendingDeletion` state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to `PendingImport`.
 *
 * **Considerations for multi-Region symmetric encryption keys**
 *
 * - When you delete the key material of a primary Region key that is in `PENDING_ROTATION` or `PENDING_MULTI_REGION_IMPORT_AND_ROTATION`state, you'll also be deleting the key materials for the replica Region keys.
 * - If you delete any key material of a replica Region key, the primary Region key and other replica Region keys remain unchanged.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:DeleteImportedKeyMaterial](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - GetParametersForImport
 * - ListKeyRotations
 * - ImportKeyMaterial
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeleteImportedKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeleteImportedKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DeleteImportedKeyMaterialRequest
 *   KeyId: "STRING_VALUE", // required
 *   KeyMaterialId: "STRING_VALUE",
 * };
 * const command = new DeleteImportedKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImportedKeyMaterialResponse
 * //   KeyId: "STRING_VALUE",
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteImportedKeyMaterialCommandInput - {@link DeleteImportedKeyMaterialCommandInput}
 * @returns {@link DeleteImportedKeyMaterialCommandOutput}
 * @see {@link DeleteImportedKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link DeleteImportedKeyMaterialCommandOutput} for command's `response` shape.
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
 * @example To delete imported key material
 * ```javascript
 * // The following example deletes the imported key material from the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6"
 * };
 * const command = new DeleteImportedKeyMaterialCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteImportedKeyMaterialCommand extends command<DeleteImportedKeyMaterialCommandInput, DeleteImportedKeyMaterialCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImportedKeyMaterial",
  DeleteImportedKeyMaterial$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImportedKeyMaterialRequest;
      output: DeleteImportedKeyMaterialResponse;
    };
    sdk: {
      input: DeleteImportedKeyMaterialCommandInput;
      output: DeleteImportedKeyMaterialCommandOutput;
    };
  };
}
