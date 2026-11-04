// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisconnectCustomKeyStoreRequest, DisconnectCustomKeyStoreResponse } from "../models/models_0";
import { DisconnectCustomKeyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisconnectCustomKeyStoreCommand}.
 */
export interface DisconnectCustomKeyStoreCommandInput extends DisconnectCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link DisconnectCustomKeyStoreCommand}.
 */
export interface DisconnectCustomKeyStoreCommandOutput extends DisconnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * Disconnects the [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html) from its backing key store. This operation disconnects an CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from the external key store proxy that communicates with your external key manager.
 *
 * This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.
 *
 * While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any time.
 *
 * > **Note:** While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) will fail. This action can prevent users from storing and accessing sensitive data.
 *
 * When you disconnect a custom key store, its `ConnectionState` changes to `Disconnected`. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. To reconnect a custom key store, use the ConnectCustomKeyStore operation.
 *
 * If the operation succeeds, it returns a JSON object with no properties.
 *
 * **Cross-account use**: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:DisconnectCustomKeyStore](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * **Related operations:**
 *
 * - ConnectCustomKeyStore
 * - CreateCustomKeyStore
 * - DeleteCustomKeyStore
 * - DescribeCustomKeyStores
 * - UpdateCustomKeyStore
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DisconnectCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DisconnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DisconnectCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 * };
 * const command = new DisconnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisconnectCustomKeyStoreCommandInput - {@link DisconnectCustomKeyStoreCommandInput}
 * @returns {@link DisconnectCustomKeyStoreCommandOutput}
 * @see {@link DisconnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link DisconnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
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
 * @example To disconnect a custom key store from its CloudHSM cluster
 * ```javascript
 * // This example disconnects an AWS KMS custom key store from its backing key store. For an AWS CloudHSM key store, it disconnects the key store from its AWS CloudHSM cluster. For an external key store, it disconnects the key store from the external key store proxy that communicates with your external key manager. This operation doesn't return any data. To verify that the custom key store is disconnected, use the <code>DescribeCustomKeyStores</code> operation.
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0"
 * };
 * const command = new DisconnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisconnectCustomKeyStoreCommand extends command<DisconnectCustomKeyStoreCommandInput, DisconnectCustomKeyStoreCommandOutput>(
  _ep0,
  _mw0,
  "DisconnectCustomKeyStore",
  DisconnectCustomKeyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisconnectCustomKeyStoreRequest;
      output: {};
    };
    sdk: {
      input: DisconnectCustomKeyStoreCommandInput;
      output: DisconnectCustomKeyStoreCommandOutput;
    };
  };
}
