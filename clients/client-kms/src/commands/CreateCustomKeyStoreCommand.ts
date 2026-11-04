// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomKeyStoreRequest, CreateCustomKeyStoreResponse } from "../models/models_0";
import { CreateCustomKeyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomKeyStoreCommand}.
 */
export interface CreateCustomKeyStoreCommandInput extends CreateCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomKeyStoreCommand}.
 */
export interface CreateCustomKeyStoreCommandOutput extends CreateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * Creates a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html) backed by a key store that you own and manage. When you use a KMS key in a custom key store for a cryptographic operation, the cryptographic operation is actually performed in your key store using your keys. KMS supports [CloudHSM key stores](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html) backed by an [CloudHSM cluster](https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html) and [external key stores](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html) backed by an external key store proxy and external key manager outside of Amazon Web Services.
 *
 * This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage.
 *
 * Before you create the custom key store, the required elements must be in place and operational. We recommend that you use the test tools that KMS provides to verify the configuration your external key store proxy. For details about the required elements and verification tests, see [Assemble the prerequisites (for CloudHSM key stores)](https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore) or [Assemble the prerequisites (for external key stores)](https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements) in the *Key Management Service Developer Guide*.
 *
 * To create a custom key store, use the following parameters.
 *
 * - To create an CloudHSM key store, specify the `CustomKeyStoreName`, `CloudHsmClusterId`, `KeyStorePassword`, and `TrustAnchorCertificate`. The `CustomKeyStoreType` parameter is optional for CloudHSM key stores. If you include it, set it to the default value, `AWS_CLOUDHSM`. For help with failures, see [Troubleshooting an CloudHSM key store](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html) in the *Key Management Service Developer Guide*.
 * - To create an external key store, specify the `CustomKeyStoreName` and a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`. Also, specify values for `XksProxyConnectivity`, `XksProxyAuthenticationCredential`, `XksProxyUriEndpoint`, and `XksProxyUriPath`. If your `XksProxyConnectivity` value is `VPC_ENDPOINT_SERVICE`, specify the `XksProxyVpcEndpointServiceName` parameter. For help with failures, see [Troubleshooting an external key store](https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html) in the *Key Management Service Developer Guide*.
 *
 * > **Note:**
 * >
 * > For external key stores:
 * >
 * > Some external key managers provide a simpler method for creating an external key store. For details, see your external key manager documentation.
 * >
 * > When creating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot use a proxy configuration with the `CreateCustomKeyStore` operation. However, you can use the values in the file to help you determine the correct values for the `CreateCustomKeyStore` parameters.
 *
 * When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect a new CloudHSM key store to its CloudHSM cluster, or to connect a new external key store to the external key store proxy for your external key manager. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it.
 *
 * **Cross-account use**: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:CreateCustomKeyStore](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy).
 *
 * **Related operations:**
 *
 * - ConnectCustomKeyStore
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
 * import { KMSClient, CreateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // CreateCustomKeyStoreRequest
 *   CustomKeyStoreName: "STRING_VALUE", // required
 *   CloudHsmClusterId: "STRING_VALUE",
 *   TrustAnchorCertificate: "STRING_VALUE",
 *   KeyStorePassword: "STRING_VALUE",
 *   CustomKeyStoreType: "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
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
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomKeyStoreResponse
 * //   CustomKeyStoreId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomKeyStoreCommandInput - {@link CreateCustomKeyStoreCommandInput}
 * @returns {@link CreateCustomKeyStoreCommandOutput}
 * @see {@link CreateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link CreateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CloudHsmClusterInUseException} (client fault)
 *
 * The request was rejected because the specified CloudHSM cluster is already associated with an CloudHSM key store in the account, or it shares a backup history with an CloudHSM key store in the account. Each CloudHSM key store in the account must be associated with a different CloudHSM cluster.
 *
 * CloudHSM clusters that share a backup history have the same cluster certificate. To view the cluster certificate of an CloudHSM cluster, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation.
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
 * @throws {@link CustomKeyStoreNameInUseException} (client fault)
 *
 * The request was rejected because the specified custom key store name is already assigned to another custom key store in the account. Try again with a custom key store name that is unique in the account.
 *
 * @throws {@link IncorrectTrustAnchorException} (client fault)
 *
 * The request was rejected because the trust anchor certificate in the request to create an CloudHSM key store is not the trust anchor certificate for the specified CloudHSM cluster.
 *
 * When you [initialize the CloudHSM cluster](https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr), you create the trust anchor certificate and save it in the `customerCA.crt` file.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a length constraint or quota was exceeded. For more information, see [Quotas](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) in the *Key Management Service Developer Guide*.
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
 * @example To create an AWS CloudHSM key store
 * ```javascript
 * // This example creates a custom key store that is associated with an AWS CloudHSM cluster.
 * const input = {
 *   CloudHsmClusterId: "cluster-234abcdefABC",
 *   CustomKeyStoreName: "ExampleKeyStore",
 *   KeyStorePassword: "kmsPswd",
 *   TrustAnchorCertificate: "<certificate-goes-here>"
 * };
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomKeyStoreId: "cks-1234567890abcdef0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCustomKeyStoreCommand extends command<CreateCustomKeyStoreCommandInput, CreateCustomKeyStoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomKeyStore",
  CreateCustomKeyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomKeyStoreRequest;
      output: CreateCustomKeyStoreResponse;
    };
    sdk: {
      input: CreateCustomKeyStoreCommandInput;
      output: CreateCustomKeyStoreCommandOutput;
    };
  };
}
