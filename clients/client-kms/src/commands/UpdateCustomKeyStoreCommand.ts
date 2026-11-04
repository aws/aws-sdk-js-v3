// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCustomKeyStoreRequest, UpdateCustomKeyStoreResponse } from "../models/models_0";
import { UpdateCustomKeyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCustomKeyStoreCommand}.
 */
export interface UpdateCustomKeyStoreCommandInput extends UpdateCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomKeyStoreCommand}.
 */
export interface UpdateCustomKeyStoreCommandOutput extends UpdateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * Changes the properties of a custom key store. You can use this operation to change the properties of an CloudHSM key store or an external key store.
 *
 * Use the required `CustomKeyStoreId` parameter to identify the custom key store. Use the remaining optional parameters to change its properties. This operation does not return any property values. To verify the updated property values, use the DescribeCustomKeyStores operation.
 *
 * This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.
 *
 * > **Important:** When updating the properties of an external key store, verify that the updated settings connect your key store, via the external key store proxy, to the same external key manager as the previous settings, or to a backup or snapshot of the external key manager with the same cryptographic keys. If the updated connection settings fail, you can fix them and retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is unrecoverable.
 *
 * > **Note:**
 * >
 * > For external key stores:
 * >
 * > Some external key managers provide a simpler method for updating an external key store. For details, see your external key manager documentation.
 * >
 * > When updating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot upload the proxy configuration file to the `UpdateCustomKeyStore` operation. However, you can use the file to help you determine the correct values for the `UpdateCustomKeyStore` parameters.
 *
 * For an CloudHSM key store, you can use this operation to change the custom key store friendly name (`NewCustomKeyStoreName`), to tell KMS about a change to the `kmsuser` crypto user password (`KeyStorePassword`), or to associate the custom key store with a different, but related, CloudHSM cluster (`CloudHsmClusterId`). To update most properties of an CloudHSM key store, the `ConnectionState` of the CloudHSM key store must be `DISCONNECTED`. However, you can update the `CustomKeyStoreName` of an AWS CloudHSM key store when it is in the `CONNECTED` or `DISCONNECTED` state.
 *
 * For an external key store, you can use this operation to change the custom key store friendly name (`NewCustomKeyStoreName`), or to tell KMS about a change to the external key store proxy authentication credentials (`XksProxyAuthenticationCredential`), connection method (`XksProxyConnectivity`), external proxy endpoint (`XksProxyUriEndpoint`) and path (`XksProxyUriPath`). For external key stores with an `XksProxyConnectivity` of `VPC_ENDPOINT_SERVICE`, you can also update the Amazon VPC endpoint service name (`XksProxyVpcEndpointServiceName`). To update most properties of an external key store, the `ConnectionState` of the external key store must be `DISCONNECTED`. However, you can update the `CustomKeyStoreName`, `XksProxyAuthenticationCredential`, and `XksProxyUriPath` of an external key store when it is in the CONNECTED or DISCONNECTED state.
 *
 * If your update requires a `DISCONNECTED` state, before using `UpdateCustomKeyStore`, use the DisconnectCustomKeyStore operation to disconnect the custom key store. After the `UpdateCustomKeyStore` operation completes, use the ConnectCustomKeyStore to reconnect the custom key store. To find the `ConnectionState` of the custom key store, use the DescribeCustomKeyStores operation.
 *
 * Before updating the custom key store, verify that the new values allow KMS to connect the custom key store to its backing key store. For example, before you change the `XksProxyUriPath` value, verify that the external key store proxy is reachable at the new path.
 *
 * If the operation succeeds, it returns a JSON object with no properties.
 *
 * **Cross-account use**: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:UpdateCustomKeyStore](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * **Related operations:**
 *
 * - ConnectCustomKeyStore
 * - CreateCustomKeyStore
 * - DeleteCustomKeyStore
 * - DescribeCustomKeyStores
 * - DisconnectCustomKeyStore
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // UpdateCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 *   NewCustomKeyStoreName: "STRING_VALUE",
 *   KeyStorePassword: "STRING_VALUE",
 *   CloudHsmClusterId: "STRING_VALUE",
 *   XksProxyUriEndpoint: "STRING_VALUE",
 *   XksProxyUriPath: "STRING_VALUE",
 *   XksProxyVpcEndpointServiceName: "STRING_VALUE",
 *   XksProxyVpcEndpointServiceOwner: "STRING_VALUE",
 *   XksProxyAuthenticationCredential: { // XksProxyAuthenticationCredentialType
 *     AccessKeyId: "STRING_VALUE", // required
 *     RawSecretAccessKey: "STRING_VALUE", // required
 *   },
 *   XksProxyConnectivity: "PUBLIC_ENDPOINT" || "VPC_ENDPOINT_SERVICE",
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCustomKeyStoreCommandInput - {@link UpdateCustomKeyStoreCommandInput}
 * @returns {@link UpdateCustomKeyStoreCommandOutput}
 * @see {@link UpdateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomKeyStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link CloudHsmClusterNotFoundException} (client fault)
 *
 * The request was rejected because KMS cannot find the CloudHSM cluster with the specified cluster ID. Retry the request with a different cluster ID.
 *
 * @throws {@link CloudHsmClusterNotRelatedException} (client fault)
 *
 * The request was rejected because the specified CloudHSM cluster has a different cluster certificate than the original cluster. You cannot use the operation to specify an unrelated cluster for an CloudHSM key store.
 *
 * Specify an CloudHSM cluster that shares a backup history with the original cluster. This includes clusters that were created from a backup of the current cluster, and clusters that were created from the same backup that produced the current cluster.
 *
 * CloudHSM clusters that share a backup history have the same cluster certificate. To view the cluster certificate of an CloudHSM cluster, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation.
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
 * @throws {@link CustomKeyStoreNameInUseException} (client fault)
 *
 * The request was rejected because the specified custom key store name is already assigned to another custom key store in the account. Try again with a custom key store name that is unique in the account.
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *
 * The request was rejected because KMS cannot find a custom key store with the specified key store name or ID.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link XksProxyIncorrectAuthenticationCredentialException} (client fault)
 *
 * The request was rejected because the proxy credentials failed to authenticate to the specified external key store proxy. The specified external key store proxy rejected a status request from KMS due to invalid credentials. This can indicate an error in the credentials or in the identification of the external key store proxy.
 *
 * @throws {@link XksProxyInvalidConfigurationException} (client fault)
 *
 * The request was rejected because the external key store proxy is not configured correctly. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link XksProxyInvalidResponseException} (client fault)
 *
 * KMS cannot interpret the response it received from the external key store proxy. The problem might be a poorly constructed response, but it could also be a transient network issue. If you see this error repeatedly, report it to the proxy vendor.
 *
 * @throws {@link XksProxyUriEndpointInUseException} (client fault)
 *
 * The request was rejected because the `XksProxyUriEndpoint` is already associated with another external key store in this Amazon Web Services Region. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link XksProxyUriInUseException} (client fault)
 *
 * The request was rejected because the concatenation of the `XksProxyUriEndpoint` and `XksProxyUriPath` is already associated with another external key store in this Amazon Web Services Region. Each external key store in a Region must use a unique external key store proxy API address.
 *
 * @throws {@link XksProxyUriUnreachableException} (client fault)
 *
 * KMS was unable to reach the specified `XksProxyUriPath`. The path must be reachable before you create the external key store or update its settings.
 *
 * This exception is also thrown when the external key store proxy response to a `GetHealthStatus` request indicates that all external key manager instances are unavailable.
 *
 * @throws {@link XksProxyVpcEndpointServiceInUseException} (client fault)
 *
 * The request was rejected because the specified Amazon VPC endpoint service is already associated with another external key store in this Amazon Web Services Region. Each external key store in a Region must use a different Amazon VPC endpoint service.
 *
 * @throws {@link XksProxyVpcEndpointServiceInvalidConfigurationException} (client fault)
 *
 * The request was rejected because the Amazon VPC endpoint service configuration does not fulfill the requirements for an external key store. To identify the cause, see the error message that accompanies the exception and [review the requirements](https://docs.aws.amazon.com/kms/latest/developerguide/vpc-connectivity.html#xks-vpc-requirements) for Amazon VPC endpoint service connectivity for an external key store.
 *
 * @throws {@link XksProxyVpcEndpointServiceNotFoundException} (client fault)
 *
 * The request was rejected because KMS could not find the specified VPC endpoint service. Use DescribeCustomKeyStores to verify the VPC endpoint service name for the external key store. Also, confirm that the `Allow principals` list for the VPC endpoint service includes the KMS service principal for the Region, such as `cks.kms.us-east-1.amazonaws.com`.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To edit the friendly name of a custom key store
 * ```javascript
 * // This example changes the friendly name of the AWS KMS custom key store to the name that you specify. This operation does not return any data. To verify that the operation worked, use the DescribeCustomKeyStores operation.
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0",
 *   NewCustomKeyStoreName: "DevelopmentKeys"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To edit the password of an AWS CloudHSM key store
 * ```javascript
 * // This example tells AWS KMS the password for the kmsuser crypto user in the AWS CloudHSM cluster that is associated with the AWS KMS custom key store. (It does not change the password in the CloudHSM cluster.) This operation does not return any data.
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0",
 *   KeyStorePassword: "ExamplePassword"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To update the proxy connectivity of an external key store to VPC_ENDPOINT_SERVICE
 * ```javascript
 * // To change the external key store proxy connectivity option from public endpoint connectivity to VPC endpoint service connectivity, in addition to changing the <code>XksProxyConnectivity</code> value, you must change the <code>XksProxyUriEndpoint</code> value to reflect the private DNS name associated with the VPC endpoint service. You must also add an <code>XksProxyVpcEndpointServiceName</code> value.
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0",
 *   XksProxyConnectivity: "VPC_ENDPOINT_SERVICE",
 *   XksProxyUriEndpoint: "https://myproxy-private.xks.example.com",
 *   XksProxyVpcEndpointServiceName: "com.amazonaws.vpce.us-east-1.vpce-svc-example"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To edit the proxy URI path of an external key store.
 * ```javascript
 * // This example updates the proxy URI path for an external key store
 * const input = {
 *   CustomKeyStoreId: "cks-1234567890abcdef0",
 *   XksProxyUriPath: "/new-path/kms/xks/v1"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To associate the custom key store with a different, but related, AWS CloudHSM cluster.
 * ```javascript
 * // This example changes the AWS CloudHSM cluster that is associated with an AWS CloudHSM key store to a related cluster, such as a different backup of the same cluster. This operation does not return any data. To verify that the operation worked, use the DescribeCustomKeyStores operation.
 * const input = {
 *   CloudHsmClusterId: "cluster-234abcdefABC",
 *   CustomKeyStoreId: "cks-1234567890abcdef0"
 * };
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCustomKeyStoreCommand extends command<UpdateCustomKeyStoreCommandInput, UpdateCustomKeyStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCustomKeyStore",
  UpdateCustomKeyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomKeyStoreRequest;
      output: {};
    };
    sdk: {
      input: UpdateCustomKeyStoreCommandInput;
      output: UpdateCustomKeyStoreCommandOutput;
    };
  };
}
