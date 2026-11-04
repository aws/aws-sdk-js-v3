// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomKeyStoreRequest, DeleteCustomKeyStoreResponse } from "../models/models_0";
import { DeleteCustomKeyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomKeyStoreCommand}.
 */
export interface DeleteCustomKeyStoreCommandInput extends DeleteCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomKeyStoreCommand}.
 */
export interface DeleteCustomKeyStoreCommandOutput extends DeleteCustomKeyStoreResponse, __MetadataBearer {}

/**
 * Deletes a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). This operation does not affect any backing elements of the custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key store, or affect any users or keys in the cluster. For an external key store, it does not affect the external key store proxy, external key manager, or any external keys.
 *
 * This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.
 *
 * The custom key store that you delete cannot contain any [KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys). Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations). Then, use ScheduleKeyDeletion to delete the KMS keys from the key store. After the required waiting period expires and all KMS keys are deleted from the custom key store, use DisconnectCustomKeyStore to disconnect the key store from KMS. Then, you can delete the custom key store.
 *
 * For keys in an CloudHSM key store, the `ScheduleKeyDeletion` operation makes a best effort to delete the key material from the associated cluster. However, you might need to manually [delete the orphaned key material](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key) from the cluster and its backups. KMS never creates, manages, or deletes cryptographic keys in the external key manager associated with an external key store. You must manage them using your external key manager tools.
 *
 * Instead of deleting the custom key store, consider using the DisconnectCustomKeyStore operation to disconnect the custom key store from its backing key store. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time.
 *
 * If the operation succeeds, it returns a JSON object with no properties.
 *
 * **Cross-account use**: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:DeleteCustomKeyStore](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * **Related operations:**
 *
 * - ConnectCustomKeyStore
 * - CreateCustomKeyStore
 * - DescribeCustomKeyStores
 * - DisconnectCustomKeyStore
 * - UpdateCustomKeyStore
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeleteCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeleteCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DeleteCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomKeyStoreCommandInput - {@link DeleteCustomKeyStoreCommandInput}
 * @returns {@link DeleteCustomKeyStoreCommandOutput}
 * @see {@link DeleteCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CustomKeyStoreHasCMKsException} (client fault)
 *
 * The request was rejected because the custom key store contains KMS keys. After verifying that you do not need to use the KMS keys, use the ScheduleKeyDeletion operation to delete the KMS keys. After they are deleted, you can delete the custom key store.
 *
 * @throws {@link CustomKeyStoreInvalidStateException} (client fault)
 *
 * The request was rejected because of the `ConnectionState` of the custom key store. To get the `ConnectionState` of a custom key store, use the DescribeCustomKeyStores operation.
 *
 * This exception is thrown under the following conditions:
 *
 * - You requested the ConnectCustomKeyStore operation on a custom key store with a `ConnectionState` of `DISCONNECTING` or `FAILED`. This operation is valid for all other `ConnectionState` values. To reconnect a custom key store in a `FAILED` state, disconnect it (DisconnectCustomKeyStore), then connect it (`ConnectCustomKeyStore`).
 * - You requested the CreateKey operation in a custom key store that is not connected. This operations is valid only when the custom key store `ConnectionState` is `CONNECTED`.
 * - You requested the DisconnectCustomKeyStore operation on a custom key store with a `ConnectionState` of `DISCONNECTING` or `DISCONNECTED`. This operation is valid for all other `ConnectionState` values.
 * - You requested the UpdateCustomKeyStore or DeleteCustomKeyStore operation on a custom key store that is not disconnected. `UpdateCustomKeyStore` can be called on a custom key store in the `CONNECTED` state only to update `NewCustomKeyStoreName`. For all other properties, the custom key store `ConnectionState` must be `DISCONNECTED`.
 * - You requested the GenerateRandom operation in an CloudHSM key store that is not connected. This operation is valid only when the CloudHSM key store `ConnectionState` is `CONNECTED`.
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *
 * The request was rejected because KMS cannot find a custom key store with the specified key store name or ID.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To delete a custom key store from AWS KMS
 * ```javascript
 * // This example deletes a custom key store from AWS KMS. This operation does not affect the backing key store, such as a CloudHSM cluster, external key store proxy, or your external key manager. This operation doesn't return any data. To verify that the operation was successful, use the DescribeCustomKeyStores operation.
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0"
 * };
 * const command = new DeleteCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCustomKeyStoreCommand extends command<DeleteCustomKeyStoreCommandInput, DeleteCustomKeyStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomKeyStore",
  DeleteCustomKeyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomKeyStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomKeyStoreCommandInput;
      output: DeleteCustomKeyStoreCommandOutput;
    };
  };
}
