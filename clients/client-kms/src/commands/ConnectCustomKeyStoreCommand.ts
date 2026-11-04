// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConnectCustomKeyStoreRequest, ConnectCustomKeyStoreResponse } from "../models/models_0";
import { ConnectCustomKeyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConnectCustomKeyStoreCommand}.
 */
export interface ConnectCustomKeyStoreCommandInput extends ConnectCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link ConnectCustomKeyStoreCommand}.
 */
export interface ConnectCustomKeyStoreCommandOutput extends ConnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * Connects or reconnects a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html) to its backing key store. For an CloudHSM key store, `ConnectCustomKeyStore` connects the key store to its associated CloudHSM cluster. For an external key store, `ConnectCustomKeyStore` connects the key store to the external key store proxy that communicates with your external key manager.
 *
 * The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time.
 *
 * The connection process for a custom key store can take an extended amount of time to complete. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation.
 *
 * This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.
 *
 * The `ConnectCustomKeyStore` operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the `ConnectionErrorCode` in the response. For help interpreting the `ConnectionErrorCode`, see CustomKeyStoresListEntry.
 *
 * To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use `ConnectCustomKeyStore` again.
 *
 * **CloudHSM key store**
 *
 * During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the `kmsuser` CU, and rotates its password.
 *
 * To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation. To add HSMs to the cluster, use the [CreateHsm](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html) operation. Also, the [`kmsuser` crypto user](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html#concept-kmsuser) (CU) must not be logged into the cluster. This prevents KMS from using this account to log in.
 *
 * If you are having trouble connecting or disconnecting a CloudHSM key store, see [Troubleshooting an CloudHSM key store](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html) in the *Key Management Service Developer Guide*.
 *
 * **External key store**
 *
 * When you connect an external key store that uses public endpoint connectivity, KMS tests its ability to communicate with your external key manager by sending a request via the external key store proxy.
 *
 * When you connect to an external key store that uses VPC endpoint service connectivity, KMS establishes the networking elements that it needs to communicate with your external key manager via the external key store proxy. This includes creating an interface endpoint to the VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint service.
 *
 * To connect an external key store, KMS must be able to connect to the external key store proxy, the external key store proxy must be able to communicate with your external key manager, and the external key manager must be available for cryptographic operations.
 *
 * If you are having trouble connecting or disconnecting an external key store, see [Troubleshooting an external key store](https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:ConnectCustomKeyStore](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * **Related operations**
 *
 * - CreateCustomKeyStore
 * - DeleteCustomKeyStore
 * - DescribeCustomKeyStores
 * - DisconnectCustomKeyStore
 * - UpdateCustomKeyStore
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ConnectCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ConnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ConnectCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 * };
 * const command = new ConnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ConnectCustomKeyStoreCommandInput - {@link ConnectCustomKeyStoreCommandInput}
 * @returns {@link ConnectCustomKeyStoreCommandOutput}
 * @see {@link ConnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link ConnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CloudHsmClusterInvalidConfigurationException} (client fault)
 *
 * The request was rejected because the associated CloudHSM cluster did not meet the configuration requirements for an CloudHSM key store.
 *
 * - The CloudHSM cluster must be configured with private subnets in at least two different Availability Zones in the Region.
 * - The [security group for the cluster](https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html) (cloudhsm-cluster-*<cluster-id>*-sg) must include inbound rules and outbound rules that allow TCP traffic on ports 2223-2225. The **Source** in the inbound rules and the **Destination** in the outbound rules must match the security group ID. These rules are set by default when you create the CloudHSM cluster. Do not delete or change them. To get information about a particular security group, use the [DescribeSecurityGroups](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html) operation.
 * - The CloudHSM cluster must contain at least as many HSMs as the operation requires. To add HSMs, use the CloudHSM [CreateHsm](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html) operation.
 *
 *   For the CreateCustomKeyStore, UpdateCustomKeyStore, and CreateKey operations, the CloudHSM cluster must have at least two active HSMs, each in a different Availability Zone. For the ConnectCustomKeyStore operation, the CloudHSM must contain at least one active HSM.
 *
 * For information about the requirements for an CloudHSM cluster that is associated with an CloudHSM key store, see [Assemble the Prerequisites](https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore) in the *Key Management Service Developer Guide*. For information about creating a private subnet for an CloudHSM cluster, see [Create a Private Subnet](https://docs.aws.amazon.com/cloudhsm/latest/userguide/create-subnets.html) in the *CloudHSM User Guide*. For information about cluster security groups, see [Configure a Default Security Group](https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html) in the **CloudHSM User Guide** .
 *
 * @throws {@link CloudHsmClusterNotActiveException} (client fault)
 *
 * The request was rejected because the CloudHSM cluster associated with the CloudHSM key store is not active. Initialize and activate the cluster and try the command again. For detailed instructions, see [Getting Started](https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html) in the *CloudHSM User Guide*.
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
 * @example To connect a custom key store
 * ```javascript
 * // This example connects an AWS KMS custom key store to its backing key store. For an AWS CloudHSM key store, it connects the key store to its AWS CloudHSM cluster. For an external key store, it connects the key store to the external key store proxy that communicates with your external key manager. This operation does not return any data. To verify that the custom key store is connected, use the <code>DescribeCustomKeyStores</code> operation.
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0"
 * };
 * const command = new ConnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ConnectCustomKeyStoreCommand extends command<ConnectCustomKeyStoreCommandInput, ConnectCustomKeyStoreCommandOutput>(
  _ep0,
  _mw0,
  "ConnectCustomKeyStore",
  ConnectCustomKeyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConnectCustomKeyStoreRequest;
      output: {};
    };
    sdk: {
      input: ConnectCustomKeyStoreCommandInput;
      output: ConnectCustomKeyStoreCommandOutput;
    };
  };
}
