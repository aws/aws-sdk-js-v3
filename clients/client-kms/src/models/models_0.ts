// smithy-typescript generated code
import type {
  AlgorithmSpec,
  ConnectionErrorCodeType,
  ConnectionStateType,
  CustomerMasterKeySpec,
  CustomKeyStoreType,
  DataKeyPairSpec,
  DataKeySpec,
  DryRunModifierType,
  EncapsulationAlgorithmSpec,
  EncryptionAlgorithmSpec,
  ExpirationModelType,
  GrantOperation,
  ImportState,
  ImportType,
  IncludeKeyMaterial,
  KeyAgreementAlgorithmSpec,
  KeyEncryptionMechanism,
  KeyLastUsageTrackingOperation,
  KeyManagerType,
  KeyMaterialState,
  KeySpec,
  KeyState,
  KeyUsageType,
  MacAlgorithmSpec,
  MessageType,
  MultiRegionKeyType,
  OriginType,
  RotationType,
  SigningAlgorithmSpec,
  WrappingKeySpec,
  XksProxyConnectivityType,
} from "./enums";

/**
 * Contains information about an alias.
 *
 * @public
 */
export interface AliasListEntry {
  /**
   * String that contains the alias. This value begins with `alias/`.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * String that contains the key ARN.
   *
   * @public
   */
  AliasArn?: string | undefined;

  /**
   * String that contains the key identifier of the KMS key associated with the alias.
   *
   * @public
   */
  TargetKeyId?: string | undefined;

  /**
   * Date and time that the alias was most recently created in the account and Region. Formatted as Unix time.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Date and time that the alias was most recently associated with a KMS key in the account and Region. Formatted as Unix time.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;
}

/**
 * @public
 */
export interface CancelKeyDeletionRequest {
  /**
   * Identifies the KMS key whose deletion is being canceled.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface CancelKeyDeletionResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key whose deletion is canceled.
   *
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * @public
 */
export interface ConnectCustomKeyStoreRequest {
  /**
   * Enter the key store ID of the custom key store that you want to connect. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
   *
   * @public
   */
  CustomKeyStoreId: string | undefined;
}

/**
 * @public
 */
export interface ConnectCustomKeyStoreResponse {}

/**
 * @public
 */
export interface CreateAliasRequest {
  /**
   * Specifies the alias name. This value must begin with `alias/` followed by a name, such as `alias/ExampleAlias`.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * The `AliasName` value must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with `alias/aws/`. The `alias/aws/` prefix is reserved for [Amazon Web Services managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key).
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * Associates the alias with the specified [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key). The KMS key must be in the same Amazon Web Services Region.
   *
   * A valid key ID is required. If you supply a null or empty string value, this operation returns an error.
   *
   * For help finding the key ID and ARN, see [Find the key ID and key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html) in the **Key Management Service Developer Guide** .
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  TargetKeyId: string | undefined;
}

/**
 * KMS uses the authentication credential to sign requests that it sends to the external key store proxy (XKS proxy) on your behalf. You establish these credentials on your external key store proxy and report them to KMS.
 *
 * The `XksProxyAuthenticationCredential` includes two required elements.
 *
 * @public
 */
export interface XksProxyAuthenticationCredentialType {
  /**
   * A unique identifier for the raw secret access key.
   *
   * @public
   */
  AccessKeyId: string | undefined;

  /**
   * A secret string of 43-64 characters. Valid characters are a-z, A-Z, 0-9, /, +, and =.
   *
   * @public
   */
  RawSecretAccessKey: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomKeyStoreRequest {
  /**
   * Specifies a friendly name for the custom key store. The name must be unique in your Amazon Web Services account and Region. This parameter is required for all custom key stores.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  CustomKeyStoreName: string | undefined;

  /**
   * Identifies the CloudHSM cluster for an CloudHSM key store. This parameter is required for custom key stores with `CustomKeyStoreType` of `AWS_CLOUDHSM`.
   *
   * Enter the cluster ID of any active CloudHSM cluster that is not already associated with a custom key store. To find the cluster ID, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation.
   *
   * @public
   */
  CloudHsmClusterId?: string | undefined;

  /**
   * Specifies the certificate for an CloudHSM key store. This parameter is required for custom key stores with a `CustomKeyStoreType` of `AWS_CLOUDHSM`.
   *
   * Enter the content of the trust anchor certificate for the CloudHSM cluster. This is the content of the `customerCA.crt` file that you created when you [initialized the cluster](https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html).
   *
   * @public
   */
  TrustAnchorCertificate?: string | undefined;

  /**
   * Specifies the `kmsuser` password for an CloudHSM key store. This parameter is required for custom key stores with a `CustomKeyStoreType` of `AWS_CLOUDHSM`.
   *
   * Enter the password of the [`kmsuser` crypto user (CU) account](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html#concept-kmsuser) in the specified CloudHSM cluster. KMS logs into the cluster as this user to manage key material on your behalf.
   *
   * The password must be a string of 7 to 32 characters. Its value is case sensitive.
   *
   * This parameter tells KMS the `kmsuser` account password; it does not change the password in the CloudHSM cluster.
   *
   * @public
   */
  KeyStorePassword?: string | undefined;

  /**
   * Specifies the type of custom key store. The default value is `AWS_CLOUDHSM`.
   *
   * For a custom key store backed by an CloudHSM cluster, omit the parameter or enter `AWS_CLOUDHSM`. For a custom key store backed by an external key manager outside of Amazon Web Services, enter `EXTERNAL_KEY_STORE`. You cannot change this property after the key store is created.
   *
   * @public
   */
  CustomKeyStoreType?: CustomKeyStoreType | undefined;

  /**
   * Specifies the endpoint that KMS uses to send requests to the external key store proxy (XKS proxy). This parameter is required for custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * The protocol must be HTTPS. KMS communicates on port 443. Do not specify the port in the `XksProxyUriEndpoint` value.
   *
   * For external key stores with `XksProxyConnectivity` value of `VPC_ENDPOINT_SERVICE`, specify `https://` followed by the private DNS name of the VPC endpoint service.
   *
   * For external key stores with `PUBLIC_ENDPOINT` connectivity, this endpoint must be reachable before you create the custom key store. KMS connects to the external key store proxy while creating the custom key store. For external key stores with `VPC_ENDPOINT_SERVICE` connectivity, KMS connects when you call the ConnectCustomKeyStore operation.
   *
   * The value of this parameter must begin with `https://`. The remainder can contain upper and lower case letters (A-Z and a-z), numbers (0-9), dots (`.`), and hyphens (`-`). Additional slashes (`/` and `\`) are not permitted.
   *
   * **Uniqueness requirements:**
   *
   * - The combined `XksProxyUriEndpoint` and `XksProxyUriPath` values must be unique in the Amazon Web Services account and Region.
   * - An external key store with `PUBLIC_ENDPOINT` connectivity cannot use the same `XksProxyUriEndpoint` value as an external key store with `VPC_ENDPOINT_SERVICE` connectivity in this Amazon Web Services Region.
   * - Each external key store with `VPC_ENDPOINT_SERVICE` connectivity must have its own private DNS name. The `XksProxyUriEndpoint` value for external key stores with `VPC_ENDPOINT_SERVICE` connectivity (private DNS name) must be unique in the Amazon Web Services account and Region.
   *
   * @public
   */
  XksProxyUriEndpoint?: string | undefined;

  /**
   * Specifies the base path to the proxy APIs for this external key store. To find this value, see the documentation for your external key store proxy. This parameter is required for all custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * The value must start with `/` and must end with `/kms/xks/v1` where `v1` represents the version of the KMS external key store proxy API. This path can include an optional prefix between the required elements such as `/prefix/kms/xks/v1`.
   *
   * **Uniqueness requirements:**
   *
   * - The combined `XksProxyUriEndpoint` and `XksProxyUriPath` values must be unique in the Amazon Web Services account and Region.
   *
   * @public
   */
  XksProxyUriPath?: string | undefined;

  /**
   * Specifies the name of the Amazon VPC endpoint service for interface endpoints that is used to communicate with your external key store proxy (XKS proxy). This parameter is required when the value of `CustomKeyStoreType` is `EXTERNAL_KEY_STORE` and the value of `XksProxyConnectivity` is `VPC_ENDPOINT_SERVICE`.
   *
   * The Amazon VPC endpoint service must [fulfill all requirements](https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements) for use with an external key store.
   *
   * **Uniqueness requirements:**
   *
   * - External key stores with `VPC_ENDPOINT_SERVICE` connectivity can share an Amazon VPC, but each external key store must have its own VPC endpoint service and private DNS name.
   *
   * @public
   */
  XksProxyVpcEndpointServiceName?: string | undefined;

  /**
   * Specifies the Amazon Web Services account ID that owns the Amazon VPC service endpoint for the interface that is used to communicate with your external key store proxy (XKS proxy). This parameter is optional. If not provided, the Amazon Web Services account ID calling the action will be used.
   *
   * @public
   */
  XksProxyVpcEndpointServiceOwner?: string | undefined;

  /**
   * Specifies an authentication credential for the external key store proxy (XKS proxy). This parameter is required for all custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * The `XksProxyAuthenticationCredential` has two required elements: `RawSecretAccessKey`, a secret key, and `AccessKeyId`, a unique identifier for the `RawSecretAccessKey`. For character requirements, see [XksProxyAuthenticationCredentialType](API_XksProxyAuthenticationCredentialType.html).
   *
   * KMS uses this authentication credential to sign requests to the external key store proxy on your behalf. This credential is unrelated to Identity and Access Management (IAM) and Amazon Web Services credentials.
   *
   * This parameter doesn't set or change the authentication credentials on the XKS proxy. It just tells KMS the credential that you established on your external key store proxy. If you rotate your proxy authentication credential, use the UpdateCustomKeyStore operation to provide the new credential to KMS.
   *
   * @public
   */
  XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType | undefined;

  /**
   * Indicates how KMS communicates with the external key store proxy. This parameter is required for custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * If the external key store proxy uses a public endpoint, specify `PUBLIC_ENDPOINT`. If the external key store proxy uses a Amazon VPC endpoint service for communication with KMS, specify `VPC_ENDPOINT_SERVICE`. For help making this choice, see [Choosing a connectivity option](https://docs.aws.amazon.com/kms/latest/developerguide/choose-xks-connectivity.html) in the *Key Management Service Developer Guide*.
   *
   * An Amazon VPC endpoint service keeps your communication with KMS in a private address space entirely within Amazon Web Services, but it requires more configuration, including establishing a Amazon VPC with multiple subnets, a VPC endpoint service, a network load balancer, and a verified private DNS name. A public endpoint is simpler to set up, but it might be slower and might not fulfill your security requirements. You might consider testing with a public endpoint, and then establishing a VPC endpoint service for production tasks. Note that this choice does not determine the location of the external key store proxy. Even if you choose a VPC endpoint service, the proxy can be hosted within the VPC or outside of Amazon Web Services such as in your corporate data center.
   *
   * @public
   */
  XksProxyConnectivity?: XksProxyConnectivityType | undefined;
}

/**
 * @public
 */
export interface CreateCustomKeyStoreResponse {
  /**
   * A unique identifier for the new custom key store.
   *
   * @public
   */
  CustomKeyStoreId?: string | undefined;
}

/**
 * Use this structure to allow [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) in the grant only when the operation request meets the specified constraints.
 *
 * KMS supports the following grant constraints:
 *
 * - `EncryptionContextEquals` and `EncryptionContextSubset` — These encryption context constraints apply only to cryptographic operations that support an encryption context, that is, all cryptographic operations with a symmetric KMS key. Encryption context grant constraints are not applied to operations that do not support an encryption context, such as cryptographic operations with asymmetric KMS keys and management operations, such as DescribeKey or RetireGrant.
 *
 *   > **Important:**
 *   >
 *   > In a cryptographic operation, the encryption context in the decryption operation must be an exact, case-sensitive match for the keys and values in the encryption context of the encryption operation. Only the order of the pairs can vary.
 *   >
 *   > However, in a grant constraint, the key in each key-value pair is not case sensitive, but the value is case sensitive.
 *   >
 *   > To avoid confusion, do not use multiple encryption context pairs that differ only by case. To require a fully case-sensitive encryption context, use the `kms:EncryptionContext:` and `kms:EncryptionContextKeys` conditions in an IAM or key policy. For details, see [kms:EncryptionContext:context-key](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-encryption-context) in the **Key Management Service Developer Guide** .
 * - `SourceArn` — This grant constraint allows the permissions in the grant only when the request is made on behalf of a specific Amazon Web Services resource, identified by its [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html). This is effectively the same as having the [aws:SourceArn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn) global condition key in the grant. The SourceArn constraint is supported on grants for all types of KMS keys and can also be applied to the DescribeKey operation when specified in the request. However, it does not apply to RetireGrant operation.
 *
 * @public
 */
export interface GrantConstraints {
  /**
   * A list of key-value pairs that must be included in the encryption context of the [cryptographic operation](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) request. The grant allows the cryptographic operation only when the encryption context in the request includes the key-value pairs specified in this constraint, although it can include additional key-value pairs.
   *
   * @public
   */
  EncryptionContextSubset?: Record<string, string> | undefined;

  /**
   * A list of key-value pairs that must match the encryption context in the [cryptographic operation](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) request. The grant allows the operation only when the encryption context in the request is the same as the encryption context specified in this constraint.
   *
   * @public
   */
  EncryptionContextEquals?: Record<string, string> | undefined;

  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services resource on behalf of which the request is made. This is effectively the same as having the [aws:SourceArn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn) global condition key in the grant. The SourceArn constraint ensures that the principal can use the KMS key only when the request is made on behalf of the specified resource.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateGrantRequest {
  /**
   * Identifies the KMS key for the grant. The grant gives principals permission to use this KMS key.
   *
   * Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The identity that gets the permissions specified in the grant.
   *
   * To specify the grantee principal, use the Amazon Resource Name (ARN) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns) in the **Identity and Access Management User Guide** .
   *
   * You must specify either `GranteePrincipal` or `GranteeServicePrincipal`, but not both.
   *
   * @public
   */
  GranteePrincipal?: string | undefined;

  /**
   * The principal that has permission to use the RetireGrant operation to retire the grant.
   *
   * To specify the principal, use the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns) in the **Identity and Access Management User Guide** .
   *
   * The grant determines the retiring principal. Other principals might have permission to retire the grant or revoke the grant. For details, see RevokeGrant and [Retiring and revoking grants](https://docs.aws.amazon.com/kms/latest/developerguide/grant-delete.html) in the *Key Management Service Developer Guide*.
   *
   * You can specify either `RetiringPrincipal` or `RetiringServicePrincipal`, but not both.
   *
   * @public
   */
  RetiringPrincipal?: string | undefined;

  /**
   * A list of operations that the grant permits.
   *
   * This list must include only operations that are permitted in a grant. Also, the operation must be supported on the KMS key. For example, you cannot create a grant for a symmetric encryption KMS key that allows the Sign operation, or a grant for an asymmetric KMS key that allows the GenerateDataKey operation. If you try, KMS returns a `ValidationError` exception. For details, see [Grant operations](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Operations: GrantOperation[] | undefined;

  /**
   * Specifies a grant constraint.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * KMS supports the following grant constraints.
   *
   * - `EncryptionContextEquals` and `EncryptionContextSubset` — These encryption context grant constraints allow the permissions in the grant only when the encryption context in the request matches (`EncryptionContextEquals`) or includes (`EncryptionContextSubset`) the encryption context specified in the constraint.
   *
   *   Encryption context grant constraints are supported only on [grant operations](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations) that include an `EncryptionContext` parameter, such as cryptographic operations on symmetric encryption KMS keys. You cannot use an encryption context grant constraint for cryptographic operations with asymmetric KMS keys or HMAC KMS keys. Operations with these keys don't support an encryption context. Grants with encryption context grant constraints can include the DescribeKey and RetireGrant operations, but the constraint doesn't apply to these operations. If a grant with an encryption context grant constraint includes the `CreateGrant` operation, the constraint requires that any grants created with the `CreateGrant` permission have an equally strict or stricter encryption context constraint.
   *
   *   Each constraint value can include up to 8 encryption context pairs. The encryption context value in each constraint cannot exceed 384 characters. For more information about encryption context, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the **Key Management Service Developer Guide** .
   * - `SourceArn` — This grant constraint allows the permissions in the grant only when the request is made on behalf of a specific Amazon Web Services resource, identified by its [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html). This is effectively the same as having the [aws:SourceArn](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourcearn) global condition key in the grant. The SourceArn constraint is supported on grants for all types of KMS keys and can also be applied to the DescribeKey operation when specified in the request. However, it does not apply to RetireGrant operation.
   *
   * For information about grant constraints, see [Using grant constraints](https://docs.aws.amazon.com/kms/latest/developerguide/create-grant-overview.html#grant-constraints) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Constraints?: GrantConstraints | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * A friendly name for the grant. Use this value to prevent the unintended creation of duplicate grants when retrying this request.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * When this value is absent, all `CreateGrant` requests result in a new grant with a unique `GrantId` even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the `CreateGrant` request.
   *
   * When this value is present, you can retry a `CreateGrant` request with identical parameters; if the grant already exists, the original `GrantId` is returned without creating a new grant. Note that the returned grant token is unique with every `CreateGrant` request, even when a duplicate `GrantId` is returned. All grant tokens for the same grant ID can be used interchangeably.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) that gets the permissions specified in the grant.
   *
   * When you specify a `GranteeServicePrincipal`, you must also specify a `SourceArn` grant constraint. In addition, you must specify either a `RetiringPrincipal` or a `RetiringServicePrincipal`.
   *
   * You must specify either `GranteePrincipal` or `GranteeServicePrincipal`, but not both.
   *
   * @public
   */
  GranteeServicePrincipal?: string | undefined;

  /**
   * The Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) that has permission to use the RetireGrant operation to retire the grant.
   *
   * You can specify either `RetiringPrincipal` or `RetiringServicePrincipal`, but not both.
   *
   * @public
   */
  RetiringServicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface CreateGrantResponse {
  /**
   * The grant token.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantToken?: string | undefined;

  /**
   * The unique identifier for the grant.
   *
   * You can use the `GrantId` in a ListGrants, RetireGrant, or RevokeGrant operation.
   *
   * @public
   */
  GrantId?: string | undefined;
}

/**
 * A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.
 *
 * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
 *
 * For information about the rules that apply to tag keys and tag values, see [User-Defined Tag Restrictions](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html) in the *Amazon Web Services Billing and Cost Management User Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  TagValue: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyRequest {
  /**
   * The key policy to attach to the KMS key.
   *
   * If you provide a key policy, it must meet the following criteria:
   *
   * - The key policy must allow the calling principal to make a subsequent `PutKeyPolicy` request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Key Management Service Developer Guide*. (To omit this condition, set `BypassPolicyLockoutSafetyCheck` to true.)
   * - Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * > **Note:**
   * >
   * > If either of the required `Resource` or `Action` elements are missing from a key policy statement, the policy statement has no effect. When a key policy statement is missing one of these elements, the KMS console correctly reports an error, but the `CreateKey` and `PutKeyPolicy` API requests succeed, even though the policy statement is ineffective.
   * >
   * > For more information on required key policy elements, see [Elements in a key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-overview.html#key-policy-elements) in the *Key Management Service Developer Guide*.
   *
   * If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html) in the *Key Management Service Developer Guide*.
   *
   * > **Note:** If the key policy exceeds the length constraint, KMS returns a `LimitExceededException`.
   *
   * For help writing and formatting a JSON policy document, see the [IAM JSON Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html) in the **Identity and Access Management User Guide** .
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * A description of the KMS key. Use a description that helps you decide whether the KMS key is appropriate for a task. The default value is an empty string (no description).
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * To set or change the description after the key is created, use UpdateKeyDescription.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) for which you can use the KMS key. The default value is `ENCRYPT_DECRYPT`. This parameter is optional when you are creating a symmetric encryption KMS key; otherwise, it is required. You can't change the [`KeyUsage`](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#key-usage) value after the KMS key is created. Each KMS key can have only one key usage. This follows key usage best practices according to [NIST SP 800-57 Recommendations for Key Management](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final), section 5.2, Key usage.
   *
   * Select only one valid value.
   *
   * - For symmetric encryption KMS keys, omit the parameter or specify `ENCRYPT_DECRYPT`.
   * - For HMAC KMS keys (symmetric), specify `GENERATE_VERIFY_MAC`.
   * - For asymmetric KMS keys with RSA key pairs, specify `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
   * - For asymmetric KMS keys with NIST-standard elliptic curve key pairs, specify `SIGN_VERIFY` or `KEY_AGREEMENT`.
   * - For asymmetric KMS keys with `ECC_SECG_P256K1` key pairs, specify `SIGN_VERIFY`.
   * - For asymmetric KMS keys with ML-DSA key pairs, specify `SIGN_VERIFY`.
   * - For asymmetric KMS keys with ML-KEM key pairs, specify `ENCAPSULATE_DECAPSULATE`.
   * - For asymmetric KMS keys with SM2 key pairs (China Regions only), specify `ENCRYPT_DECRYPT`, `SIGN_VERIFY`, or `KEY_AGREEMENT`.
   *
   * @public
   */
  KeyUsage?: KeyUsageType | undefined;

  /**
   * Instead, use the `KeySpec` parameter.
   *
   * The `KeySpec` and `CustomerMasterKeySpec` parameters work the same way. Only the names differ. We recommend that you use `KeySpec` parameter in your code. However, to avoid breaking changes, KMS supports both parameters.
   *
   * @deprecated This parameter has been deprecated. Instead, use the KeySpec parameter.
   * @public
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | undefined;

  /**
   * Specifies the type of KMS key to create. The default value, `SYMMETRIC_DEFAULT`, creates a KMS key with a 256-bit AES-GCM key that is used for encryption and decryption, except in China Regions, where it creates a 128-bit symmetric key that uses SM4 encryption. For a detailed description of all supported key specs, see [Key spec reference](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose-key-spec.html) in the **Key Management Service Developer Guide** .
   *
   * The `KeySpec` determines whether the KMS key contains a symmetric key or an asymmetric key pair. It also determines the algorithms that the KMS key supports. You can't change the `KeySpec` after the KMS key is created. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [kms:EncryptionAlgorithm](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-encryption-algorithm), [kms:MacAlgorithm](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-mac-algorithm), [kms:KeyAgreementAlgorithm](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-key-agreement-algorithm), or [kms:SigningAlgorithm](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-signing-algorithm) in the **Key Management Service Developer Guide** .
   *
   * > **Important:** [Amazon Web Services services that are integrated with KMS](http://aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support asymmetric KMS keys or HMAC KMS keys.
   *
   * KMS supports the following key specs for KMS keys:
   *
   * - Symmetric encryption key (default)
   *
   *   - `SYMMETRIC_DEFAULT`
   * - HMAC keys (symmetric)
   *
   *   - `HMAC_224`
   *   - `HMAC_256`
   *   - `HMAC_384`
   *   - `HMAC_512`
   * - Asymmetric RSA key pairs (encryption and decryption -or- signing and verification)
   *
   *   - `RSA_2048`
   *   - `RSA_3072`
   *   - `RSA_4096`
   * - Asymmetric NIST-standard elliptic curve key pairs (signing and verification -or- deriving shared secrets)
   *
   *   - `ECC_NIST_P256` (secp256r1)
   *   - `ECC_NIST_P384` (secp384r1)
   *   - `ECC_NIST_P521` (secp521r1)
   *   - `ECC_NIST_EDWARDS25519` (ed25519) - signing and verification only
   *
   *     - **Note:** For ECC_NIST_EDWARDS25519 KMS keys, the ED25519_SHA_512 signing algorithm requires [`MessageType:RAW`](kms/latest/APIReference/API_Sign.html#KMS-Sign-request-MessageType), while ED25519_PH_SHA_512 requires [`MessageType:DIGEST`](kms/latest/APIReference/API_Sign.html#KMS-Sign-request-MessageType). These message types cannot be used interchangeably.
   * - Other asymmetric elliptic curve key pairs (signing and verification)
   *
   *   - `ECC_SECG_P256K1` (secp256k1), commonly used for cryptocurrencies.
   * - Asymmetric ML-DSA key pairs (signing and verification)
   *
   *   - `ML_DSA_44`
   *   - `ML_DSA_65`
   *   - `ML_DSA_87`
   * - Asymmetric ML-KEM key pairs (establishing shared secrets)
   *
   *   - `ML_KEM_512`
   *   - `ML_KEM_768`
   *   - `ML_KEM_1024`
   *
   *   The ML-KEM key specs are not available in China Regions.
   * - SM2 key pairs (encryption and decryption -or- signing and verification -or- deriving shared secrets)
   *
   *   - `SM2` (China Regions only)
   *
   * @public
   */
  KeySpec?: KeySpec | undefined;

  /**
   * The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is `AWS_KMS`, which means that KMS creates the key material.
   *
   * To [create a KMS key with no key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to `EXTERNAL`. For more information about importing key material into KMS, see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *Key Management Service Developer Guide*. The `EXTERNAL` origin value is valid only for symmetric KMS keys.
   *
   * To [create a KMS key in an CloudHSM key store](https://docs.aws.amazon.com/kms/latest/developerguide/create-cmk-keystore.html) and create its key material in the associated CloudHSM cluster, set this value to `AWS_CLOUDHSM`. You must also use the `CustomKeyStoreId` parameter to identify the CloudHSM key store. The `KeySpec` value must be `SYMMETRIC_DEFAULT`.
   *
   * To [create a KMS key in an external key store](https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keys.html), set this value to `EXTERNAL_KEY_STORE`. You must also use the `CustomKeyStoreId` parameter to identify the external key store and the `XksKeyId` parameter to identify the associated external key. The `KeySpec` value must be `SYMMETRIC_DEFAULT`.
   *
   * @public
   */
  Origin?: OriginType | undefined;

  /**
   * Creates the KMS key in the specified [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). The `ConnectionState` of the custom key store must be `CONNECTED`. To find the CustomKeyStoreID and ConnectionState use the DescribeCustomKeyStores operation.
   *
   * This parameter is valid only for symmetric encryption KMS keys in a single Region. You cannot create any other type of KMS key in a custom key store.
   *
   * When you create a KMS key in an CloudHSM key store, KMS generates a non-exportable 256-bit symmetric key in its associated CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you must use the `XksKeyId` parameter to specify an external key that serves as key material for the KMS key.
   *
   * @public
   */
  CustomKeyStoreId?: string | undefined;

  /**
   * Skips ("bypasses") the key policy lockout safety check. The default value is false.
   *
   * > **Important:**
   * >
   * > Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
   * >
   * > For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Key Management Service Developer Guide*.
   *
   * Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.
   *
   * @public
   */
  BypassPolicyLockoutSafetyCheck?: boolean | undefined;

  /**
   * Assigns one or more tags to the KMS key. Use this parameter to tag the KMS key when it is created. To tag an existing KMS key, use the TagResource operation.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * > **Note:** Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Key Management Service Developer Guide*.
   *
   * To use this parameter, you must have [kms:TagResource](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) permission in an IAM policy.
   *
   * Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one.
   *
   * When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see [Tags in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You cannot change this value after you create the KMS key.
   *
   * For a multi-Region key, set this parameter to `True`. For a single-Region KMS key, omit this parameter or set it to `False`. The default value is `False`.
   *
   * This operation supports *multi-Region keys*, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see [Multi-Region keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
   *
   * This value creates a *primary key*, not a replica. To create a *replica key*, use the ReplicateKey operation.
   *
   * You can create a symmetric or asymmetric multi-Region key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
   *
   * @public
   */
  MultiRegion?: boolean | undefined;

  /**
   * Identifies the [external key](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key) that serves as key material for the KMS key in an [external key store](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html). Specify the ID that the [external key store proxy](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-xks-proxy) uses to refer to the external key. For help, see the documentation for your external key store proxy.
   *
   * This parameter is required for a KMS key with an `Origin` value of `EXTERNAL_KEY_STORE`. It is not valid for KMS keys with any other `Origin` value.
   *
   * The external key must be an existing 256-bit AES symmetric encryption key hosted outside of Amazon Web Services in an external key manager associated with the external key store specified by the `CustomKeyStoreId` parameter. This key must be enabled and configured to perform encryption and decryption. Each KMS key in an external key store must use a different external key. For details, see [Requirements for a KMS key in an external key store](https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keys.html#xks-key-requirements) in the *Key Management Service Developer Guide*.
   *
   * Each KMS key in an external key store is associated two backing keys. One is key material that KMS generates. The other is the external key specified by this parameter. When you use the KMS key in an external key store to encrypt data, the encryption operation is performed first by KMS using the KMS key material, and then by the external key manager using the specified external key, a process known as *double encryption*. For details, see [Double encryption](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-double-encryption) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  XksKeyId?: string | undefined;
}

/**
 * Describes the primary or replica key in a multi-Region key.
 *
 * @public
 */
export interface MultiRegionKey {
  /**
   * Displays the key ARN of a primary or replica key of a multi-Region key.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Displays the Amazon Web Services Region of a primary or replica key in a multi-Region key.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.
 *
 * For more information about any listed KMS key, use the DescribeKey operation.
 *
 * @public
 */
export interface MultiRegionConfiguration {
  /**
   * Indicates whether the KMS key is a `PRIMARY` or `REPLICA` key.
   *
   * @public
   */
  MultiRegionKeyType?: MultiRegionKeyType | undefined;

  /**
   * Displays the key ARN and Region of the primary key. This field includes the current KMS key if it is the primary key.
   *
   * @public
   */
  PrimaryKey?: MultiRegionKey | undefined;

  /**
   * displays the key ARNs and Regions of all replica keys. This field includes the current KMS key if it is a replica key.
   *
   * @public
   */
  ReplicaKeys?: MultiRegionKey[] | undefined;
}

/**
 * Information about the [external key](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key)that is associated with a KMS key in an external key store.
 *
 * This element appears in a CreateKey or DescribeKey response only for a KMS key in an external key store.
 *
 * The *external key* is a symmetric encryption key that is hosted by an external key manager outside of Amazon Web Services. When you use the KMS key in an external key store in a cryptographic operation, the cryptographic operation is performed in the external key manager using the specified external key. For more information, see [External key](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key) in the *Key Management Service Developer Guide*.
 *
 * @public
 */
export interface XksKeyConfigurationType {
  /**
   * The ID of the external key in its external key manager. This is the ID that the external key store proxy uses to identify the external key.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Contains metadata about a KMS key.
 *
 * This data type is used as a response element for the CreateKey, DescribeKey, and ReplicateKey operations.
 *
 * @public
 */
export interface KeyMetadata {
  /**
   * The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.
   *
   * @public
   */
  AWSAccountId?: string | undefined;

  /**
   * The globally unique identifier for the KMS key.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key. For examples, see [Key Management Service (KMS)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms) in the Example ARNs section of the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The date and time when the KMS key was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Specifies whether the KMS key is enabled. When `KeyState` is `Enabled` this value is true, otherwise it is false.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The description of the KMS key.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) for which you can use the KMS key.
   *
   * @public
   */
  KeyUsage?: KeyUsageType | undefined;

  /**
   * The current status of the KMS key.
   *
   * For more information about how key state affects the use of a KMS key, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  KeyState?: KeyState | undefined;

  /**
   * The date and time after which KMS deletes this KMS key. This value is present only when the KMS key is scheduled for deletion, that is, when its `KeyState` is `PendingDeletion`.
   *
   * When the primary key in a multi-Region key is scheduled for deletion but still has replica keys, its key state is `PendingReplicaDeletion` and the length of its waiting period is displayed in the `PendingDeletionWindowInDays` field.
   *
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * The earliest time at which any imported key material permanently associated with this KMS key expires. When a key material expires, KMS deletes the key material and the KMS key becomes unusable. This value is present only for KMS keys whose `Origin` is `EXTERNAL` and the `ExpirationModel` is `KEY_MATERIAL_EXPIRES`, otherwise this value is omitted.
   *
   * @public
   */
  ValidTo?: Date | undefined;

  /**
   * The source of the key material for the KMS key. When this value is `AWS_KMS`, KMS created the key material. When this value is `EXTERNAL`, the key material was imported or the KMS key doesn't have any key material. When this value is `AWS_CLOUDHSM`, the key material was created in the CloudHSM cluster associated with a custom key store.
   *
   * @public
   */
  Origin?: OriginType | undefined;

  /**
   * A unique identifier for the [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html) that contains the KMS key. This field is present only when the KMS key is created in a custom key store.
   *
   * @public
   */
  CustomKeyStoreId?: string | undefined;

  /**
   * The cluster ID of the CloudHSM cluster that contains the key material for the KMS key. When you create a KMS key in an CloudHSM [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html), KMS creates the key material for the KMS key in the associated CloudHSM cluster. This field is present only when the KMS key is created in an CloudHSM key store.
   *
   * @public
   */
  CloudHsmClusterId?: string | undefined;

  /**
   * Specifies whether the KMS key's key material expires. This value is present only when `Origin` is `EXTERNAL`, otherwise this value is omitted.
   *
   * @public
   */
  ExpirationModel?: ExpirationModelType | undefined;

  /**
   * The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed. For more information about the difference, see [KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  KeyManager?: KeyManagerType | undefined;

  /**
   * Instead, use the `KeySpec` field.
   *
   * The `KeySpec` and `CustomerMasterKeySpec` fields have the same value. We recommend that you use the `KeySpec` field in your code. However, to avoid breaking changes, KMS supports both fields.
   *
   * @deprecated This field has been deprecated. Instead, use the KeySpec field.
   * @public
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | undefined;

  /**
   * Describes the type of key material in the KMS key.
   *
   * @public
   */
  KeySpec?: KeySpec | undefined;

  /**
   * The encryption algorithms that the KMS key supports. You cannot use the KMS key with other encryption algorithms within KMS.
   *
   * This value is present only when the `KeyUsage` of the KMS key is `ENCRYPT_DECRYPT`.
   *
   * @public
   */
  EncryptionAlgorithms?: EncryptionAlgorithmSpec[] | undefined;

  /**
   * The signing algorithms that the KMS key supports. You cannot use the KMS key with other signing algorithms within KMS.
   *
   * This field appears only when the `KeyUsage` of the KMS key is `SIGN_VERIFY`.
   *
   * @public
   */
  SigningAlgorithms?: SigningAlgorithmSpec[] | undefined;

  /**
   * The key agreement algorithm used to derive a shared secret.
   *
   * @public
   */
  KeyAgreementAlgorithms?: KeyAgreementAlgorithmSpec[] | undefined;

  /**
   * The key encapsulation algorithm that the KMS key supports. This field appears only for KMS keys with a `KeyUsage` value of `ENCAPSULATE_DECAPSULATE`.
   *
   * @public
   */
  EncapsulationAlgorithms?: EncapsulationAlgorithmSpec[] | undefined;

  /**
   * Indicates whether the KMS key is a multi-Region (`True`) or regional (`False`) key. This value is `True` for multi-Region primary and replica keys and `False` for regional KMS keys.
   *
   * For more information about multi-Region keys, see [Multi-Region keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  MultiRegion?: boolean | undefined;

  /**
   * Lists the primary and replica keys in same multi-Region key. This field is present only when the value of the `MultiRegion` field is `True`.
   *
   * For more information about any listed KMS key, use the DescribeKey operation.
   *
   * - `MultiRegionKeyType` indicates whether the KMS key is a `PRIMARY` or `REPLICA` key.
   * - `PrimaryKey` displays the key ARN and Region of the primary key. This field displays the current KMS key if it is the primary key.
   * - `ReplicaKeys` displays the key ARNs and Regions of all replica keys. This field includes the current KMS key if it is a replica key.
   *
   * @public
   */
  MultiRegionConfiguration?: MultiRegionConfiguration | undefined;

  /**
   * The waiting period before the primary key in a multi-Region key is deleted. This waiting period begins when the last of its replica keys is deleted. This value is present only when the `KeyState` of the KMS key is `PendingReplicaDeletion`. That indicates that the KMS key is the primary key in a multi-Region key, it is scheduled for deletion, and it still has existing replica keys.
   *
   * When a single-Region KMS key or a multi-Region replica key is scheduled for deletion, its deletion date is displayed in the `DeletionDate` field. However, when the primary key in a multi-Region key is scheduled for deletion, its waiting period doesn't begin until all of its replica keys are deleted. This value displays that waiting period. When the last replica key in the multi-Region key is deleted, the `KeyState` of the scheduled primary key changes from `PendingReplicaDeletion` to `PendingDeletion` and the deletion date appears in the `DeletionDate` field.
   *
   * @public
   */
  PendingDeletionWindowInDays?: number | undefined;

  /**
   * The message authentication code (MAC) algorithm that the HMAC KMS key supports.
   *
   * This value is present only when the `KeyUsage` of the KMS key is `GENERATE_VERIFY_MAC`.
   *
   * @public
   */
  MacAlgorithms?: MacAlgorithmSpec[] | undefined;

  /**
   * Information about the external key that is associated with a KMS key in an external key store.
   *
   * For more information, see [External key](https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  XksKeyConfiguration?: XksKeyConfigurationType | undefined;

  /**
   * Identifies the current key material. This value is present for symmetric encryption keys with `AWS_KMS` or `EXTERNAL` origin. These KMS keys support automatic or on-demand key rotation and can have multiple key materials associated with them. KMS uses the current key material for both encryption and decryption, and the non-current key material for decryption operations only.
   *
   * @public
   */
  CurrentKeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface CreateKeyResponse {
  /**
   * Metadata associated with the KMS key.
   *
   * @public
   */
  KeyMetadata?: KeyMetadata | undefined;
}

/**
 * Detailed information about the external key store proxy (XKS proxy). Your external key store proxy translates KMS requests into a format that your external key manager can understand. These fields appear in a DescribeCustomKeyStores response only when the `CustomKeyStoreType` is `EXTERNAL_KEY_STORE`.
 *
 * @public
 */
export interface XksProxyConfigurationType {
  /**
   * Indicates whether the external key store proxy uses a public endpoint or an Amazon VPC endpoint service to communicate with KMS.
   *
   * @public
   */
  Connectivity?: XksProxyConnectivityType | undefined;

  /**
   * The part of the external key store [proxy authentication credential](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html#KMS-CreateCustomKeyStore-request-XksProxyAuthenticationCredential) that uniquely identifies the secret access key.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The URI endpoint for the external key store proxy.
   *
   * If the external key store proxy has a public endpoint, it is displayed here.
   *
   * If the external key store proxy uses an Amazon VPC endpoint service name, this field displays the private DNS name associated with the VPC endpoint service.
   *
   * @public
   */
  UriEndpoint?: string | undefined;

  /**
   * The path to the external key store proxy APIs.
   *
   * @public
   */
  UriPath?: string | undefined;

  /**
   * The Amazon VPC endpoint service used to communicate with the external key store proxy. This field appears only when the external key store proxy uses an Amazon VPC endpoint service to communicate with KMS.
   *
   * @public
   */
  VpcEndpointServiceName?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon VPC endpoint service used to communicate with the external key store proxy (XKS). This field appears only when the XKS uses an VPC endpoint service to communicate with KMS.
   *
   * @public
   */
  VpcEndpointServiceOwner?: string | undefined;
}

/**
 * Contains information about each custom key store in the custom key store list.
 *
 * @public
 */
export interface CustomKeyStoresListEntry {
  /**
   * A unique identifier for the custom key store.
   *
   * @public
   */
  CustomKeyStoreId?: string | undefined;

  /**
   * The user-specified friendly name for the custom key store.
   *
   * @public
   */
  CustomKeyStoreName?: string | undefined;

  /**
   * A unique identifier for the CloudHSM cluster that is associated with an CloudHSM key store. This field appears only when the `CustomKeyStoreType` is `AWS_CLOUDHSM`.
   *
   * @public
   */
  CloudHsmClusterId?: string | undefined;

  /**
   * The trust anchor certificate of the CloudHSM cluster associated with an CloudHSM key store. When you [initialize the cluster](https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr), you create this certificate and save it in the `customerCA.crt` file.
   *
   * This field appears only when the `CustomKeyStoreType` is `AWS_CLOUDHSM`.
   *
   * @public
   */
  TrustAnchorCertificate?: string | undefined;

  /**
   * Indicates whether the custom key store is connected to its backing key store. For an CloudHSM key store, the `ConnectionState` indicates whether it is connected to its CloudHSM cluster. For an external key store, the `ConnectionState` indicates whether it is connected to the external key store proxy that communicates with your external key manager.
   *
   * You can create and use KMS keys in your custom key stores only when its `ConnectionState` is `CONNECTED`.
   *
   * The `ConnectionState` value is `DISCONNECTED` only if the key store has never been connected or you use the DisconnectCustomKeyStore operation to disconnect it. If the value is `CONNECTED` but you are having trouble using the custom key store, make sure that the backing key store is reachable and active. For an CloudHSM key store, verify that its associated CloudHSM cluster is active and contains at least one active HSM. For an external key store, verify that the external key store proxy and external key manager are connected and enabled.
   *
   * A value of `FAILED` indicates that an attempt to connect was unsuccessful. The `ConnectionErrorCode` field in the response indicates the cause of the failure. For help resolving a connection failure, see [Troubleshooting a custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  ConnectionState?: ConnectionStateType | undefined;

  /**
   * Describes the connection error. This field appears in the response only when the `ConnectionState` is `FAILED`.
   *
   * Many failures can be resolved by updating the properties of the custom key store. To update a custom key store, disconnect it (DisconnectCustomKeyStore), correct the errors (UpdateCustomKeyStore), and try to connect again (ConnectCustomKeyStore). For additional help resolving these errors, see [How to Fix a Connection Failure](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed) in *Key Management Service Developer Guide*.
   *
   * **All custom key stores:**
   *
   * - `INTERNAL_ERROR` — KMS could not complete the request due to an internal error. Retry the request. For `ConnectCustomKeyStore` requests, disconnect the custom key store before trying to connect again.
   * - `NETWORK_ERRORS` — Network errors are preventing KMS from connecting the custom key store to its backing key store.
   *
   * **CloudHSM key stores:**
   *
   * - `CLUSTER_NOT_FOUND` — KMS cannot find the CloudHSM cluster with the specified cluster ID.
   * - `INSUFFICIENT_CLOUDHSM_HSMS` — The associated CloudHSM cluster does not contain any active HSMs. To connect a custom key store to its CloudHSM cluster, the cluster must contain at least one active HSM.
   * - `INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET` — At least one private subnet associated with the CloudHSM cluster doesn't have any available IP addresses. A CloudHSM key store connection requires one free IP address in each of the associated private subnets, although two are preferable. For details, see [How to Fix a Connection Failure](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed) in the *Key Management Service Developer Guide*.
   * - `INVALID_CREDENTIALS` — The `KeyStorePassword` for the custom key store doesn't match the current password of the `kmsuser` crypto user in the CloudHSM cluster. Before you can connect your custom key store to its CloudHSM cluster, you must change the `kmsuser` account password and update the `KeyStorePassword` value for the custom key store.
   * - `SUBNET_NOT_FOUND` — A subnet in the CloudHSM cluster configuration was deleted. If KMS cannot find all of the subnets in the cluster configuration, attempts to connect the custom key store to the CloudHSM cluster fail. To fix this error, create a cluster from a recent backup and associate it with your custom key store. (This process creates a new cluster configuration with a VPC and private subnets.) For details, see [How to Fix a Connection Failure](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed) in the *Key Management Service Developer Guide*.
   * - `USER_LOCKED_OUT` — The `kmsuser` CU account is locked out of the associated CloudHSM cluster due to too many failed password attempts. Before you can connect your custom key store to its CloudHSM cluster, you must change the `kmsuser` account password and update the key store password value for the custom key store.
   * - `USER_LOGGED_IN` — The `kmsuser` CU account is logged into the associated CloudHSM cluster. This prevents KMS from rotating the `kmsuser` account password and logging into the cluster. Before you can connect your custom key store to its CloudHSM cluster, you must log the `kmsuser` CU out of the cluster. If you changed the `kmsuser` password to log into the cluster, you must also and update the key store password value for the custom key store. For help, see [How to Log Out and Reconnect](https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#login-kmsuser-2) in the *Key Management Service Developer Guide*.
   * - `USER_NOT_FOUND` — KMS cannot find a `kmsuser` CU account in the associated CloudHSM cluster. Before you can connect your custom key store to its CloudHSM cluster, you must create a `kmsuser` CU account in the cluster, and then update the key store password value for the custom key store.
   *
   * **External key stores:**
   *
   * - `INVALID_CREDENTIALS` — One or both of the `XksProxyAuthenticationCredential` values is not valid on the specified external key store proxy.
   * - `XKS_PROXY_ACCESS_DENIED` — KMS requests are denied access to the external key store proxy. If the external key store proxy has authorization rules, verify that they permit KMS to communicate with the proxy on your behalf.
   * - `XKS_PROXY_INVALID_CONFIGURATION` — A configuration error is preventing the external key store from connecting to its proxy. Verify the value of the `XksProxyUriPath`.
   * - `XKS_PROXY_INVALID_RESPONSE` — KMS cannot interpret the response from the external key store proxy. If you see this connection error code repeatedly, notify your external key store proxy vendor.
   * - `XKS_PROXY_INVALID_TLS_CONFIGURATION` — KMS cannot connect to the external key store proxy because the TLS configuration is invalid. Verify that the XKS proxy supports TLS 1.2 or 1.3. Also, verify that the TLS certificate is not expired, and that it matches the hostname in the `XksProxyUriEndpoint` value, and that it is signed by a certificate authority included in the [Trusted Certificate Authorities](https://github.com/aws/aws-kms-xksproxy-api-spec/blob/main/TrustedCertificateAuthorities) list.
   * - `XKS_PROXY_NOT_REACHABLE` — KMS can't communicate with your external key store proxy. Verify that the `XksProxyUriEndpoint` and `XksProxyUriPath` are correct. Use the tools for your external key store proxy to verify that the proxy is active and available on its network. Also, verify that your external key manager instances are operating properly. Connection attempts fail with this connection error code if the proxy reports that all external key manager instances are unavailable.
   * - `XKS_PROXY_TIMED_OUT` — KMS can connect to the external key store proxy, but the proxy does not respond to KMS in the time allotted. If you see this connection error code repeatedly, notify your external key store proxy vendor.
   * - `XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION` — The Amazon VPC endpoint service configuration doesn't conform to the requirements for an KMS external key store.
   *
   *   - The VPC endpoint service must be an endpoint service for interface endpoints in the caller's Amazon Web Services account.
   *   - It must have a network load balancer (NLB) connected to at least two subnets, each in a different Availability Zone.
   *   - The `Allow principals` list must include the KMS service principal for the Region, `cks.kms.<region>.amazonaws.com`, such as `cks.kms.us-east-1.amazonaws.com`.
   *   - It must *not* require [acceptance](https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html) of connection requests.
   *   - It must have a private DNS name. The private DNS name for an external key store with `VPC_ENDPOINT_SERVICE` connectivity must be unique in its Amazon Web Services Region.
   *   - The domain of the private DNS name must have a [verification status](https://docs.aws.amazon.com/vpc/latest/privatelink/verify-domains.html) of `verified`.
   *   - The [TLS certificate](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html) specifies the private DNS hostname at which the endpoint is reachable.
   * - `XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND` — KMS can't find the VPC endpoint service that it uses to communicate with the external key store proxy. Verify that the `XksProxyVpcEndpointServiceName` is correct and the KMS service principal has service consumer permissions on the Amazon VPC endpoint service.
   *
   * @public
   */
  ConnectionErrorCode?: ConnectionErrorCodeType | undefined;

  /**
   * The date and time when the custom key store was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * Indicates the type of the custom key store. `AWS_CLOUDHSM` indicates a custom key store backed by an CloudHSM cluster. `EXTERNAL_KEY_STORE` indicates a custom key store backed by an external key store proxy and external key manager outside of Amazon Web Services.
   *
   * @public
   */
  CustomKeyStoreType?: CustomKeyStoreType | undefined;

  /**
   * Configuration settings for the external key store proxy (XKS proxy). The external key store proxy translates KMS requests into a format that your external key manager can understand. The proxy configuration includes connection information that KMS requires.
   *
   * This field appears only when the `CustomKeyStoreType` is `EXTERNAL_KEY_STORE`.
   *
   * @public
   */
  XksProxyConfiguration?: XksProxyConfigurationType | undefined;
}

/**
 * @public
 */
export interface DecapsulateRequest {
  /**
   * Identifies the asymmetric ML-KEM KMS key whose public key was used to produce the encapsulated shared secret. KMS uses the private key in the specified key pair to decapsulate the shared secret.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The encapsulated (ciphertext) form of the shared secret to recover. This is the `SharedSecretCiphertextBlob` value that the Encapsulate operation returns. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  SharedSecretCiphertextBlob: Uint8Array | undefined;

  /**
   * Specifies the key encapsulation algorithm used to recover the shared secret. The only valid value is `ML_KEM`.
   *
   * @public
   */
  EncapsulationAlgorithm: EncapsulationAlgorithmSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DecapsulateResponse {
  /**
   * The identifier of the ML-KEM KMS key used to decapsulate the shared secret.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The plaintext shared secret recovered from the encapsulated form. It is a 32-byte value that matches the shared secret held by the encapsulating party. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  SharedSecret?: Uint8Array | undefined;

  /**
   * The key encapsulation algorithm used to recover the shared secret.
   *
   * @public
   */
  EncapsulationAlgorithm?: EncapsulationAlgorithmSpec | undefined;
}

/**
 * Contains information about the party that receives the response from the API operation.
 *
 * This data type is designed to support Amazon Web Services Nitro Enclaves and Amazon Web Services NitroTPM, which lets you create an attested environment in Amazon EC2. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
 *
 * @public
 */
export interface RecipientInfo {
  /**
   * The encryption algorithm that KMS should use with the public key for an Amazon Web Services Nitro Enclave or NitroTPM to encrypt plaintext values for the response. The only valid value is `RSAES_OAEP_SHA_256`.
   *
   * @public
   */
  KeyEncryptionAlgorithm?: KeyEncryptionMechanism | undefined;

  /**
   * The attestation document for an Amazon Web Services Nitro Enclave or a NitroTPM. This document includes the enclave's public key.
   *
   * @public
   */
  AttestationDocument?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface DecryptRequest {
  /**
   * Ciphertext to be decrypted. The blob includes metadata.
   *
   * This parameter is required in all cases except when `DryRun` is `true` and `DryRunModifiers` is set to `IGNORE_CIPHERTEXT`.
   *
   * @public
   */
  CiphertextBlob?: Uint8Array | undefined;

  /**
   * Specifies the encryption context to use when decrypting the data. An encryption context is valid only for [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) with a symmetric encryption KMS key. The standard asymmetric encryption algorithms and HMAC algorithms that KMS uses do not support an encryption context.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Specifies the KMS key that KMS uses to decrypt the ciphertext.
   *
   * Enter a key ID of the KMS key that was used to encrypt the ciphertext. If you identify a different KMS key, the `Decrypt` operation throws an `IncorrectKeyException`.
   *
   * This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key or when `DryRun` is `true` and `DryRunModifiers` is set to `IGNORE_CIPHERTEXT`. If you used a symmetric encryption KMS key, KMS can get the KMS key from metadata that it adds to the symmetric ciphertext blob. However, it is always recommended as a best practice. This practice ensures that you use the KMS key that you intend.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you should use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Specifies the encryption algorithm that will be used to decrypt the ciphertext. Specify the same algorithm that was used to encrypt the data. If you specify a different algorithm, the `Decrypt` operation fails.
   *
   * This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. The default value, `SYMMETRIC_DEFAULT`, represents the only supported algorithm that is valid for symmetric encryption KMS keys.
   *
   * @public
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * A signed [attestation document](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-concepts.html#term-attestdoc) from an Amazon Web Services Nitro enclave or NitroTPM, and the encryption algorithm to use with the public key in the attestation document. The only valid encryption algorithm is `RSAES_OAEP_SHA_256`.
   *
   * This parameter supports the [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) or any Amazon Web Services SDK for Amazon Web Services Nitro Enclaves. It supports any Amazon Web Services SDK for Amazon Web Services NitroTPM.
   *
   * When you use this parameter, instead of returning the plaintext data, KMS encrypts the plaintext data with the public key in the attestation document, and returns the resulting ciphertext in the `CiphertextForRecipient` field in the response. This ciphertext can be decrypted only with the private key in the attested environment. The `Plaintext` field in the response is null or empty.
   *
   * For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Recipient?: RecipientInfo | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies the modifiers to apply to the dry run operation. `DryRunModifiers` is an optional parameter that only applies when `DryRun` is set to `true`.
   *
   * When set to `IGNORE_CIPHERTEXT`, KMS performs only authorization validation without ciphertext validation. This allows you to test permissions without requiring a valid ciphertext blob.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRunModifiers?: DryRunModifierType[] | undefined;
}

/**
 * @public
 */
export interface DecryptResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that was used to decrypt the ciphertext.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Decrypted plaintext data. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * If the response includes the `CiphertextForRecipient` field, the `Plaintext` field is null or empty.
   *
   * @public
   */
  Plaintext?: Uint8Array | undefined;

  /**
   * The encryption algorithm that was used to decrypt the ciphertext.
   *
   * @public
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * The plaintext data encrypted with the public key from the attestation document. This ciphertext can be decrypted only by using a private key from the attested environment.
   *
   * This field is included in the response only when the `Recipient` parameter in the request includes a valid attestation document from an Amazon Web Services Nitro enclave or NitroTPM. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  CiphertextForRecipient?: Uint8Array | undefined;

  /**
   * The identifier of the key material used to decrypt the ciphertext. This field is present only when the operation uses a symmetric encryption KMS key. This field is omitted if the request includes the `Recipient` parameter.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAliasRequest {
  /**
   * The alias to be deleted. The alias name must begin with `alias/` followed by the alias name, such as `alias/ExampleAlias`.
   *
   * @public
   */
  AliasName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomKeyStoreRequest {
  /**
   * Enter the ID of the custom key store you want to delete. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
   *
   * @public
   */
  CustomKeyStoreId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomKeyStoreResponse {}

/**
 * @public
 */
export interface DeleteImportedKeyMaterialRequest {
  /**
   * Identifies the KMS key from which you are deleting imported key material. The `Origin` of the KMS key must be `EXTERNAL`.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Identifies the imported key material you are deleting.
   *
   * > **Important:** If no KeyMaterialId is specified, KMS deletes the current key material.
   *
   * To get the list of key material IDs associated with a KMS key, use ListKeyRotations.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportedKeyMaterialResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key from which the key material was deleted.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Identifies the deleted key material.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface DeriveSharedSecretRequest {
  /**
   * Identifies an asymmetric NIST-standard ECC or SM2 (China Regions only) KMS key. KMS uses the private key in the specified key pair to derive the shared secret. The key usage of the KMS key must be `KEY_AGREEMENT`. To find the `KeyUsage` of a KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the key agreement algorithm used to derive the shared secret. The only valid value is `ECDH`.
   *
   * @public
   */
  KeyAgreementAlgorithm: KeyAgreementAlgorithmSpec | undefined;

  /**
   * Specifies the public key in your peer's NIST-standard elliptic curve (ECC) or SM2 (China Regions only) key pair.
   *
   * The public key must be a DER-encoded X.509 public key, also known as `SubjectPublicKeyInfo` (SPKI), as defined in [RFC 5280](https://tools.ietf.org/html/rfc5280).
   *
   * GetPublicKey returns the public key of an asymmetric KMS key pair in the required DER-encoded format.
   *
   * > **Note:** If you use [Amazon Web Services CLI version 1](https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-welcome.html), you must provide the DER-encoded X.509 public key in a file. Otherwise, the Amazon Web Services CLI Base64-encodes the public key a second time, resulting in a `ValidationException`.
   *
   * You can specify the public key as binary data in a file using fileb (`fileb://<path-to-file>`) or in-line using a Base64 encoded string.
   *
   * @public
   */
  PublicKey: Uint8Array | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * A signed [attestation document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave-how.html#term-attestdoc) from an Amazon Web Services Nitro enclave or NitroTPM, and the encryption algorithm to use with the public key in the attestation document. The only valid encryption algorithm is `RSAES_OAEP_SHA_256`.
   *
   * This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM. To call DeriveSharedSecret generate an attestation document use either [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) for an Amazon Web Services Nitro Enclaves or [Amazon Web Services NitroTPM tools](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/attestation-get-doc.html) for Amazon Web Services NitroTPM. Then use the Recipient parameter from any Amazon Web Services SDK to provide the attestation document for the attested environment.
   *
   * When you use this parameter, instead of returning a plaintext copy of the shared secret, KMS encrypts the plaintext shared secret under the public key in the attestation document, and returns the resulting ciphertext in the `CiphertextForRecipient` field in the response. This ciphertext can be decrypted only with the private key in the attested environment. The `CiphertextBlob` field in the response contains the encrypted shared secret derived from the KMS key specified by the `KeyId` parameter and public key specified by the `PublicKey` parameter. The `SharedSecret` field in the response is null or empty.
   *
   * For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Recipient?: RecipientInfo | undefined;
}

/**
 * @public
 */
export interface DeriveSharedSecretResponse {
  /**
   * Identifies the KMS key used to derive the shared secret.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The raw secret derived from the specified key agreement algorithm, private key in the asymmetric KMS key, and your peer's public key.
   *
   * If the response includes the `CiphertextForRecipient` field, the `SharedSecret` field is null or empty.
   *
   * @public
   */
  SharedSecret?: Uint8Array | undefined;

  /**
   * The plaintext shared secret encrypted with the public key from the attestation document. This ciphertext can be decrypted only by using a private key from the attested environment.
   *
   * This field is included in the response only when the `Recipient` parameter in the request includes a valid attestation document from an Amazon Web Services Nitro enclave or NitroTPM. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  CiphertextForRecipient?: Uint8Array | undefined;

  /**
   * Identifies the key agreement algorithm used to derive the shared secret.
   *
   * @public
   */
  KeyAgreementAlgorithm?: KeyAgreementAlgorithmSpec | undefined;

  /**
   * The source of the key material for the specified KMS key.
   *
   * When this value is `AWS_KMS`, KMS created the key material. When this value is `EXTERNAL`, the key material was imported or the KMS key doesn't have any key material.
   *
   * The only valid values for DeriveSharedSecret are `AWS_KMS` and `EXTERNAL`. DeriveSharedSecret does not support KMS keys with a `KeyOrigin` value of `AWS_CLOUDHSM` or `EXTERNAL_KEY_STORE`.
   *
   * @public
   */
  KeyOrigin?: OriginType | undefined;
}

/**
 * @public
 */
export interface DescribeCustomKeyStoresRequest {
  /**
   * Gets only information about the specified custom key store. Enter the key store ID.
   *
   * By default, this operation gets information about all custom key stores in the account and Region. To limit the output to a particular custom key store, provide either the `CustomKeyStoreId` or `CustomKeyStoreName` parameter, but not both.
   *
   * @public
   */
  CustomKeyStoreId?: string | undefined;

  /**
   * Gets only information about the specified custom key store. Enter the friendly name of the custom key store.
   *
   * By default, this operation gets information about all custom key stores in the account and Region. To limit the output to a particular custom key store, provide either the `CustomKeyStoreId` or `CustomKeyStoreName` parameter, but not both.
   *
   * @public
   */
  CustomKeyStoreName?: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomKeyStoresResponse {
  /**
   * Contains metadata about each custom key store.
   *
   * @public
   */
  CustomKeyStores?: CustomKeyStoresListEntry[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeKeyRequest {
  /**
   * Describes the specified KMS key.
   *
   * If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), KMS associates the alias with an [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key) and returns its `KeyId` and `Arn` in the response.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeKeyResponse {
  /**
   * Metadata associated with the key.
   *
   * @public
   */
  KeyMetadata?: KeyMetadata | undefined;
}

/**
 * @public
 */
export interface DisableKeyRequest {
  /**
   * Identifies the KMS key to disable.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface DisableKeyRotationRequest {
  /**
   * Identifies a symmetric encryption KMS key. You cannot enable or disable automatic rotation of [asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html#asymmetric-cmks), [HMAC KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html), KMS keys with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html), or KMS keys in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html).
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface DisconnectCustomKeyStoreRequest {
  /**
   * Enter the ID of the custom key store you want to disconnect. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
   *
   * @public
   */
  CustomKeyStoreId: string | undefined;
}

/**
 * @public
 */
export interface DisconnectCustomKeyStoreResponse {}

/**
 * @public
 */
export interface EnableKeyRequest {
  /**
   * Identifies the KMS key to enable.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface EnableKeyRotationRequest {
  /**
   * Identifies a symmetric encryption KMS key. You cannot enable automatic rotation of [asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html), [HMAC KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html), KMS keys with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html), or KMS keys in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). To enable or disable automatic rotation of a set of related [multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate), set the property on the primary key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Use this parameter to specify a custom period of time between each rotation date. If no value is specified, the default value is 365 days.
   *
   * The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter.
   *
   * You can use the [`kms:RotationPeriodInDays`](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-rotation-period-in-days) condition key to further constrain the values that principals can specify in the `RotationPeriodInDays` parameter.
   *
   * @public
   */
  RotationPeriodInDays?: number | undefined;
}

/**
 * @public
 */
export interface EncapsulateRequest {
  /**
   * Identifies an asymmetric ML-KEM KMS key. KMS uses the public key in the specified key pair to encapsulate the shared secret. ML-KEM KMS keys have a `KeySpec` value of `ML_KEM_512`, `ML_KEM_768`, or `ML_KEM_1024` and a `KeyUsage` value of `ENCAPSULATE_DECAPSULATE`. To find the `KeySpec` and `KeyUsage` of a KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the key encapsulation algorithm used to generate the shared secret and its encapsulated form. The only valid value is `ML_KEM`.
   *
   * @public
   */
  EncapsulationAlgorithm: EncapsulationAlgorithmSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EncapsulateResponse {
  /**
   * The identifier of the ML-KEM KMS key used to encapsulate the shared secret.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The plaintext shared secret. It is a 32-byte cryptographically random value that both parties can use directly as key material or pass through a key derivation function to generate multiple keys and nonces. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  SharedSecret?: Uint8Array | undefined;

  /**
   * The encapsulated form of the shared secret. Pass this value to the Decapsulate operation to recover the shared secret. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded. The length of `SharedSecretCiphertextBlob` depends on the ML-KEM key spec. Before Base64 encoding, the encapsulated shared secret is 768 bytes for `ML_KEM_512`, 1088 bytes for `ML_KEM_768`, and 1568 bytes for `ML_KEM_1024`.
   *
   * @public
   */
  SharedSecretCiphertextBlob?: Uint8Array | undefined;

  /**
   * The key encapsulation algorithm used to generate the shared secret.
   *
   * @public
   */
  EncapsulationAlgorithm?: EncapsulationAlgorithmSpec | undefined;
}

/**
 * @public
 */
export interface EncryptRequest {
  /**
   * Identifies the KMS key to use in the encryption operation. The KMS key must have a `KeyUsage` of `ENCRYPT_DECRYPT`. To find the `KeyUsage` of a KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Data to be encrypted.
   *
   * @public
   */
  Plaintext: Uint8Array | undefined;

  /**
   * Specifies the encryption context that will be used to encrypt the data. An encryption context is valid only for [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations) with a symmetric encryption KMS key. The standard asymmetric encryption algorithms and HMAC algorithms that KMS uses do not support an encryption context.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Specifies the encryption algorithm that KMS will use to encrypt the plaintext message. The algorithm must be compatible with the KMS key that you specify.
   *
   * This parameter is required only for asymmetric KMS keys. The default value, `SYMMETRIC_DEFAULT`, is the algorithm used for symmetric encryption KMS keys. If you are using an asymmetric KMS key, we recommend RSAES_OAEP_SHA_256.
   *
   * The SM2PKE algorithm is only available in China Regions.
   *
   * @public
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface EncryptResponse {
  /**
   * The encrypted plaintext. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  CiphertextBlob?: Uint8Array | undefined;

  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that was used to encrypt the plaintext.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The encryption algorithm that was used to encrypt the plaintext.
   *
   * @public
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyRequest {
  /**
   * Specifies the symmetric encryption KMS key that encrypts the data key. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the encryption context that will be used when encrypting the data key.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies the length of the data key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For 128-bit (16-byte) and 256-bit (32-byte) data keys, use the `KeySpec` parameter.
   *
   * You must specify either the `KeySpec` or the `NumberOfBytes` parameter (but not both) in every `GenerateDataKey` request.
   *
   * @public
   */
  NumberOfBytes?: number | undefined;

  /**
   * Specifies the length of the data key. Use `AES_128` to generate a 128-bit symmetric key, or `AES_256` to generate a 256-bit symmetric key.
   *
   * You must specify either the `KeySpec` or the `NumberOfBytes` parameter (but not both) in every `GenerateDataKey` request.
   *
   * @public
   */
  KeySpec?: DataKeySpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * A signed [attestation document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave-how.html#term-attestdoc) from an Amazon Web Services Nitro enclave or NitroTPM, and the encryption algorithm to use with the public key in the attestation document. The only valid encryption algorithm is `RSAES_OAEP_SHA_256`.
   *
   * This parameter supports the [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) or any Amazon Web Services SDK for Amazon Web Services Nitro Enclaves. It supports any Amazon Web Services SDK for Amazon Web Services NitroTPM.
   *
   * When you use this parameter, instead of returning the plaintext data key, KMS encrypts the plaintext data key under the public key in the attestation document, and returns the resulting ciphertext in the `CiphertextForRecipient` field in the response. This ciphertext can be decrypted only with the private key in the enclave. The `CiphertextBlob` field in the response contains a copy of the data key encrypted under the KMS key specified by the `KeyId` parameter. The `Plaintext` field in the response is null or empty.
   *
   * For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Recipient?: RecipientInfo | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyResponse {
  /**
   * The encrypted copy of the data key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  CiphertextBlob?: Uint8Array | undefined;

  /**
   * The plaintext data key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded. Use this data key to encrypt your data outside of KMS. Then, remove it from memory as soon as possible.
   *
   * If the response includes the `CiphertextForRecipient` field, the `Plaintext` field is null or empty.
   *
   * @public
   */
  Plaintext?: Uint8Array | undefined;

  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that encrypted the data key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The plaintext data key encrypted with the public key from the attestation document. This ciphertext can be decrypted only by using a private key from the attested environment.
   *
   * This field is included in the response only when the `Recipient` parameter in the request includes a valid attestation document from an Amazon Web Services Nitro enclave or NitroTPM. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  CiphertextForRecipient?: Uint8Array | undefined;

  /**
   * The identifier of the key material used to encrypt the data key. This field is omitted if the request includes the `Recipient` parameter.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyPairRequest {
  /**
   * Specifies the encryption context that will be used when encrypting the private key in the data key pair.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies the symmetric encryption KMS key that encrypts the private key in the data key pair. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Determines the type of data key pair that is generated.
   *
   * The KMS rule that restricts the use of asymmetric RSA and SM2 KMS keys to encrypt and decrypt or to sign and verify (but not both), the rule that permits you to use ECC KMS keys only to sign and verify, and the rule that permits you to use ML-DSA key pairs to sign and verify only are not effective on data key pairs, which are used outside of KMS. The SM2 key spec is only available in China Regions. The ML-KEM key specs are not available in China Regions.
   *
   * @public
   */
  KeyPairSpec: DataKeyPairSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * A signed [attestation document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave-how.html#term-attestdoc) from an Amazon Web Services Nitro enclave or NitroTPM, and the encryption algorithm to use with the public key in the attestation document. The only valid encryption algorithm is `RSAES_OAEP_SHA_256`.
   *
   * This parameter only supports attestation documents for Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM. To call GenerateDataKeyPair generate an attestation document use either [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) for an Amazon Web Services Nitro Enclaves or [Amazon Web Services NitroTPM tools](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/attestation-get-doc.html) for Amazon Web Services NitroTPM. Then use the Recipient parameter from any Amazon Web Services SDK to provide the attestation document for the attested environment.
   *
   * When you use this parameter, instead of returning a plaintext copy of the private data key, KMS encrypts the plaintext private data key under the public key in the attestation document, and returns the resulting ciphertext in the `CiphertextForRecipient` field in the response. This ciphertext can be decrypted only with the private key in the attested environment. The `CiphertextBlob` field in the response contains a copy of the private data key encrypted under the KMS key specified by the `KeyId` parameter. The `PrivateKeyPlaintext` field in the response is null or empty.
   *
   * For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Recipient?: RecipientInfo | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyPairResponse {
  /**
   * The encrypted copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  PrivateKeyCiphertextBlob?: Uint8Array | undefined;

  /**
   * The plaintext copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * If the response includes the `CiphertextForRecipient` field, the `PrivateKeyPlaintext` field is null or empty.
   *
   * @public
   */
  PrivateKeyPlaintext?: Uint8Array | undefined;

  /**
   * The public key (in plaintext). When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  PublicKey?: Uint8Array | undefined;

  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that encrypted the private key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The type of data key pair that was generated.
   *
   * @public
   */
  KeyPairSpec?: DataKeyPairSpec | undefined;

  /**
   * The plaintext private data key encrypted with the public key from the attestation document. This ciphertext can be decrypted only by using a private key from the attested environment.
   *
   * This field is included in the response only when the `Recipient` parameter in the request includes a valid attestation document from an Amazon Web Services Nitro enclave or NitroTPM. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  CiphertextForRecipient?: Uint8Array | undefined;

  /**
   * The identifier of the key material used to encrypt the private key.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyPairWithoutPlaintextRequest {
  /**
   * Specifies the encryption context that will be used when encrypting the private key in the data key pair.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies the symmetric encryption KMS key that encrypts the private key in the data key pair. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Determines the type of data key pair that is generated.
   *
   * The KMS rule that restricts the use of asymmetric RSA and SM2 KMS keys to encrypt and decrypt or to sign and verify (but not both), the rule that permits you to use ECC KMS keys only to sign and verify, and the rule that permits you to use ML-DSA key pairs to sign and verify only are not effective on data key pairs, which are used outside of KMS. The SM2 key spec is only available in China Regions. The ML-KEM key specs are not available in China Regions.
   *
   * @public
   */
  KeyPairSpec: DataKeyPairSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyPairWithoutPlaintextResponse {
  /**
   * The encrypted copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  PrivateKeyCiphertextBlob?: Uint8Array | undefined;

  /**
   * The public key (in plaintext). When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  PublicKey?: Uint8Array | undefined;

  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that encrypted the private key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The type of data key pair that was generated.
   *
   * @public
   */
  KeyPairSpec?: DataKeyPairSpec | undefined;

  /**
   * The identifier of the key material used to encrypt the private key.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyWithoutPlaintextRequest {
  /**
   * Specifies the symmetric encryption KMS key that encrypts the data key. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the encryption context that will be used when encrypting the data key.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  EncryptionContext?: Record<string, string> | undefined;

  /**
   * The length of the data key. Use `AES_128` to generate a 128-bit symmetric key, or `AES_256` to generate a 256-bit symmetric key.
   *
   * @public
   */
  KeySpec?: DataKeySpec | undefined;

  /**
   * The length of the data key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the `KeySpec` field instead of this one.
   *
   * @public
   */
  NumberOfBytes?: number | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GenerateDataKeyWithoutPlaintextResponse {
  /**
   * The encrypted data key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  CiphertextBlob?: Uint8Array | undefined;

  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that encrypted the data key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The identifier of the key material used to encrypt the data key.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateMacRequest {
  /**
   * The message to be hashed. Specify a message of up to 4,096 bytes.
   *
   * `GenerateMac` and VerifyMac do not provide special handling for message digests. If you generate an HMAC for a hash digest of a message, you must verify the HMAC of the same hash digest.
   *
   * @public
   */
  Message: Uint8Array | undefined;

  /**
   * The HMAC KMS key to use in the operation. The MAC algorithm computes the HMAC for the message and the key as described in [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104).
   *
   * To identify an HMAC KMS key, use the DescribeKey operation and see the `KeySpec` field in the response.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The MAC algorithm used in the operation.
   *
   * The algorithm must be compatible with the HMAC KMS key that you specify. To find the MAC algorithms that your HMAC KMS key supports, use the DescribeKey operation and see the `MacAlgorithms` field in the `DescribeKey` response.
   *
   * @public
   */
  MacAlgorithm: MacAlgorithmSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface GenerateMacResponse {
  /**
   * The hash-based message authentication code (HMAC) that was generated for the specified message, HMAC KMS key, and MAC algorithm.
   *
   * This is the standard, raw HMAC defined in [RFC 2104](https://datatracker.ietf.org/doc/html/rfc2104).
   *
   * @public
   */
  Mac?: Uint8Array | undefined;

  /**
   * The MAC algorithm that was used to generate the HMAC.
   *
   * @public
   */
  MacAlgorithm?: MacAlgorithmSpec | undefined;

  /**
   * The HMAC KMS key used in the operation.
   *
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * @public
 */
export interface GenerateRandomRequest {
  /**
   * The length of the random byte string. This parameter is required.
   *
   * @public
   */
  NumberOfBytes?: number | undefined;

  /**
   * Generates the random byte string in the CloudHSM cluster that is associated with the specified CloudHSM key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
   *
   * External key store IDs are not valid for this parameter. If you specify the ID of an external key store, `GenerateRandom` throws an `UnsupportedOperationException`.
   *
   * @public
   */
  CustomKeyStoreId?: string | undefined;

  /**
   * A signed [attestation document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave-how.html#term-attestdoc) from an Amazon Web Services Nitro enclave or NitroTPM, and the encryption algorithm to use with the public key in the attestation document. The only valid encryption algorithm is `RSAES_OAEP_SHA_256`.
   *
   * This parameter supports the [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) or any Amazon Web Services SDK for Amazon Web Services Nitro Enclaves. It supports any Amazon Web Services SDK for Amazon Web Services NitroTPM.
   *
   * When you use this parameter, instead of returning plaintext bytes, KMS encrypts the plaintext bytes under the public key in the attestation document, and returns the resulting ciphertext in the `CiphertextForRecipient` field in the response. This ciphertext can be decrypted only with the private key in the attested environment. The `Plaintext` field in the response is null or empty.
   *
   * For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Recipient?: RecipientInfo | undefined;
}

/**
 * @public
 */
export interface GenerateRandomResponse {
  /**
   * The random byte string. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * If the response includes the `CiphertextForRecipient` field, the `Plaintext` field is null or empty.
   *
   * @public
   */
  Plaintext?: Uint8Array | undefined;

  /**
   * The plaintext random bytes encrypted with the public key from the attestation document. This ciphertext can be decrypted only by using a private key from the attested environment.
   *
   * This field is included in the response only when the `Recipient` parameter in the request includes a valid attestation document from an Amazon Web Services Nitro enclave or NitroTPM. For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  CiphertextForRecipient?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetKeyLastUsageRequest {
  /**
   * Identifies the KMS key to get usage information for. To specify a KMS key, use its key ID or key ARN. Alias names are not supported.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * Contains usage information about the last time the KMS key was used for a successful cryptographic operation.
 *
 * @public
 */
export interface KeyLastUsageData {
  /**
   * The last successful cryptographic operation the KMS key was used for. Absent if the key has not been used since KMS began tracking.
   *
   * @public
   */
  Operation?: KeyLastUsageTrackingOperation | undefined;

  /**
   * The date and time when the KMS key was most recently used for a successful cryptographic operation. Absent if the key has not been used since KMS began tracking.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The CloudTrail `eventId` associated with the last successful cryptographic operation. Absent if the key has not been used since KMS began tracking.
   *
   * @public
   */
  CloudTrailEventId?: string | undefined;

  /**
   * The KMS request ID associated with the last successful cryptographic operation. Absent if the key has not been used since KMS began tracking.
   *
   * @public
   */
  KmsRequestId?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyLastUsageResponse {
  /**
   * The globally unique identifier for the KMS key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Contains usage information about the last time the KMS key was used for a successful cryptographic operation. If the key has not been used since tracking began, this response element is an empty object.
   *
   * @public
   */
  KeyLastUsage?: KeyLastUsageData | undefined;

  /**
   * The date from which KMS began recording cryptographic activity for this key, or the date the KMS key was created, whichever is later.
   *
   * @public
   */
  TrackingStartDate?: Date | undefined;

  /**
   * The date and time when the KMS key was created.
   *
   * @public
   */
  KeyCreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetKeyPolicyRequest {
  /**
   * Gets the key policy for the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the name of the key policy. If no policy name is specified, the default value is `default`. The only valid name is `default`. To get the names of key policies, use ListKeyPolicies.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyPolicyResponse {
  /**
   * A key policy document in JSON format.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The name of the key policy. The only valid value is `default`.
   *
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyRotationStatusRequest {
  /**
   * Gets the rotation status for the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface GetKeyRotationStatusResponse {
  /**
   * A Boolean value that specifies whether key rotation is enabled.
   *
   * @public
   */
  KeyRotationEnabled?: boolean | undefined;

  /**
   * Identifies the specified symmetric encryption KMS key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The number of days between each automatic rotation. The default value is 365 days.
   *
   * @public
   */
  RotationPeriodInDays?: number | undefined;

  /**
   * The next date that KMS will automatically rotate the key material.
   *
   * @public
   */
  NextRotationDate?: Date | undefined;

  /**
   * Identifies the date and time that an in progress on-demand rotation was initiated.
   *
   * KMS uses a background process to perform rotations. As a result, there might be a slight delay between initiating on-demand key rotation and the rotation's completion. Once the on-demand rotation is complete, KMS removes this field from the response. You can use ListKeyRotations to view the details of the completed on-demand rotation.
   *
   * @public
   */
  OnDemandRotationStartDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportRequest {
  /**
   * The identifier of the KMS key that will be associated with the imported key material. The `Origin` of the KMS key must be `EXTERNAL`.
   *
   * All KMS key types are supported, including multi-Region keys. However, you cannot import key material into a KMS key in a custom key store.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The algorithm you will use with the RSA public key (`PublicKey`) in the response to protect your key material during import. For more information, see [Select a wrapping algorithm](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-get-public-key-and-token.html#select-wrapping-algorithm) in the *Key Management Service Developer Guide*.
   *
   * For RSA_AES wrapping algorithms, you encrypt your key material with an AES key that you generate, then encrypt your AES key with the RSA public key from KMS. For RSAES wrapping algorithms, you encrypt your key material directly with the RSA public key from KMS.
   *
   * The wrapping algorithms that you can use depend on the type of key material that you are importing. To import an RSA private key, you must use an RSA_AES wrapping algorithm.
   *
   * - **RSA_AES_KEY_WRAP_SHA_256** — Supported for wrapping RSA and ECC key material.
   * - **RSA_AES_KEY_WRAP_SHA_1** — Supported for wrapping RSA and ECC key material.
   * - **RSAES_OAEP_SHA_256** — Supported for all types of key material, except RSA key material (private key).
   *
   *   You cannot use the RSAES_OAEP_SHA_256 wrapping algorithm with the RSA_2048 wrapping key spec to wrap ECC_NIST_P521 key material.
   * - **RSAES_OAEP_SHA_1** — Supported for all types of key material, except RSA key material (private key).
   *
   *   You cannot use the RSAES_OAEP_SHA_1 wrapping algorithm with the RSA_2048 wrapping key spec to wrap ECC_NIST_P521 key material.
   * - **RSAES_PKCS1_V1_5** (Deprecated) — As of October 10, 2023, KMS does not support the RSAES_PKCS1_V1_5 wrapping algorithm.
   *
   * @public
   */
  WrappingAlgorithm: AlgorithmSpec | undefined;

  /**
   * The type of RSA public key to return in the response. You will use this wrapping key with the specified wrapping algorithm to protect your key material during import.
   *
   * Use the longest RSA wrapping key that is practical.
   *
   * You cannot use an RSA_2048 public key to directly wrap an ECC_NIST_P521 private key. Instead, use an RSA_AES wrapping algorithm or choose a longer RSA public key.
   *
   * @public
   */
  WrappingKeySpec: WrappingKeySpec | undefined;
}

/**
 * @public
 */
export interface GetParametersForImportResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key to use in a subsequent ImportKeyMaterial request. This is the same KMS key specified in the `GetParametersForImport` request.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The import token to send in a subsequent ImportKeyMaterial request.
   *
   * @public
   */
  ImportToken?: Uint8Array | undefined;

  /**
   * The public key to use to encrypt the key material before importing it with ImportKeyMaterial.
   *
   * @public
   */
  PublicKey?: Uint8Array | undefined;

  /**
   * The time at which the import token and public key are no longer valid. After this time, you cannot use them to make an ImportKeyMaterial request and you must send another `GetParametersForImport` request to get new ones.
   *
   * @public
   */
  ParametersValidTo?: Date | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * Identifies the asymmetric KMS key that includes the public key.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the asymmetric KMS key from which the public key was downloaded.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The exported public key.
   *
   * The value is a DER-encoded X.509 public key, also known as `SubjectPublicKeyInfo` (SPKI), as defined in [RFC 5280](https://tools.ietf.org/html/rfc5280). When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  PublicKey?: Uint8Array | undefined;

  /**
   * Instead, use the `KeySpec` field in the `GetPublicKey` response.
   *
   * The `KeySpec` and `CustomerMasterKeySpec` fields have the same value. We recommend that you use the `KeySpec` field in your code. However, to avoid breaking changes, KMS supports both fields.
   *
   * @deprecated This field has been deprecated. Instead, use the KeySpec field.
   * @public
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | undefined;

  /**
   * The type of the of the public key that was downloaded.
   *
   * @public
   */
  KeySpec?: KeySpec | undefined;

  /**
   * The permitted use of the public key. Valid values for asymmetric key pairs are `ENCRYPT_DECRYPT`, `SIGN_VERIFY`, and `KEY_AGREEMENT`.
   *
   * This information is critical. For example, if a public key with `SIGN_VERIFY` key usage encrypts data outside of KMS, the ciphertext cannot be decrypted.
   *
   * @public
   */
  KeyUsage?: KeyUsageType | undefined;

  /**
   * The encryption algorithms that KMS supports for this key.
   *
   * This information is critical. If a public key encrypts data outside of KMS by using an unsupported encryption algorithm, the ciphertext cannot be decrypted.
   *
   * This field appears in the response only when the `KeyUsage` of the public key is `ENCRYPT_DECRYPT`.
   *
   * @public
   */
  EncryptionAlgorithms?: EncryptionAlgorithmSpec[] | undefined;

  /**
   * The signing algorithms that KMS supports for this key.
   *
   * This field appears in the response only when the `KeyUsage` of the public key is `SIGN_VERIFY`.
   *
   * @public
   */
  SigningAlgorithms?: SigningAlgorithmSpec[] | undefined;

  /**
   * The key agreement algorithm used to derive a shared secret. This field is present only when the KMS key has a `KeyUsage` value of `KEY_AGREEMENT`.
   *
   * @public
   */
  KeyAgreementAlgorithms?: KeyAgreementAlgorithmSpec[] | undefined;

  /**
   * The key encapsulation algorithm used to establish a shared secret. This field is present only when the KMS key has a `KeyUsage` value of `ENCAPSULATE_DECAPSULATE`.
   *
   * @public
   */
  EncapsulationAlgorithms?: EncapsulationAlgorithmSpec[] | undefined;
}

/**
 * Contains information about a grant.
 *
 * @public
 */
export interface GrantListEntry {
  /**
   * The unique identifier for the KMS key to which the grant applies.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The unique identifier for the grant.
   *
   * @public
   */
  GrantId?: string | undefined;

  /**
   * The friendly name that identifies the grant. If a name was provided in the CreateGrant request, that name is returned. Otherwise this value is null.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time when the grant was created.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The identity that gets the permissions in the grant.
   *
   * When a grant is created with the `GranteePrincipal` field, the `ListGrants` response usually contains the user or role designated as the grantee principal in the grant. However, if the grantee principal is an Amazon Web Services service, the `GranteePrincipal` field contains an Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services), which might correspond to several different grantee principals, such as an IAM user, IAM role, or Amazon Web Services account.
   *
   * @public
   */
  GranteePrincipal?: string | undefined;

  /**
   * The principal that can retire the grant.
   *
   * @public
   */
  RetiringPrincipal?: string | undefined;

  /**
   * The Amazon Web Services account under which the grant was issued.
   *
   * @public
   */
  IssuingAccount?: string | undefined;

  /**
   * The list of operations permitted by the grant.
   *
   * @public
   */
  Operations?: GrantOperation[] | undefined;

  /**
   * The constraints on the grant, such as encryption context pairs or a SourceArn, that restrict the subsequent operations the grant allows.
   *
   * @public
   */
  Constraints?: GrantConstraints | undefined;

  /**
   * The Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) that gets the permissions in the grant.
   *
   * @public
   */
  GranteeServicePrincipal?: string | undefined;

  /**
   * The Amazon Web Services [service principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services) that can retire the grant.
   *
   * @public
   */
  RetiringServicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyMaterialRequest {
  /**
   * The identifier of the KMS key that will be associated with the imported key material. This must be the same KMS key specified in the `KeyID` parameter of the corresponding GetParametersForImport request. The `Origin` of the KMS key must be `EXTERNAL` and its `KeyState` must be `PendingImport`.
   *
   * The KMS key can be a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key, including a [multi-Region key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) of any supported type. You cannot perform this operation on a KMS key in a custom key store, or on a KMS key in a different Amazon Web Services account.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The import token that you received in the response to a previous GetParametersForImport request. It must be from the same response that contained the public key that you used to encrypt the key material.
   *
   * @public
   */
  ImportToken: Uint8Array | undefined;

  /**
   * The encrypted key material to import. The key material must be encrypted under the public wrapping key that GetParametersForImport returned, using the wrapping algorithm that you specified in the same `GetParametersForImport` request.
   *
   * @public
   */
  EncryptedKeyMaterial: Uint8Array | undefined;

  /**
   * The date and time when the imported key material expires. This parameter is required when the value of the `ExpirationModel` parameter is `KEY_MATERIAL_EXPIRES`. Otherwise it is not valid.
   *
   * The value of this parameter must be a future date and time. The maximum value is 365 days from the request date.
   *
   * When the key material expires, KMS deletes the key material from the KMS key. Without its key material, the KMS key is unusable. To use the KMS key in cryptographic operations, you must reimport the same key material.
   *
   * You cannot change the `ExpirationModel` or `ValidTo` values for the current import after the request completes. To change either value, you must delete (DeleteImportedKeyMaterial) and reimport the key material.
   *
   * @public
   */
  ValidTo?: Date | undefined;

  /**
   * Specifies whether the key material expires. The default is `KEY_MATERIAL_EXPIRES`. For help with this choice, see [Setting an expiration time](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-expiration) in the *Key Management Service Developer Guide*.
   *
   * When the value of `ExpirationModel` is `KEY_MATERIAL_EXPIRES`, you must specify a value for the `ValidTo` parameter. When value is `KEY_MATERIAL_DOES_NOT_EXPIRE`, you must omit the `ValidTo` parameter.
   *
   * You cannot change the `ExpirationModel` or `ValidTo` values for the current import after the request completes. To change either value, you must reimport the key material.
   *
   * @public
   */
  ExpirationModel?: ExpirationModelType | undefined;

  /**
   * Indicates whether the key material being imported is previously associated with this KMS key or not. This parameter is optional and only usable with symmetric encryption keys. If no key material has ever been imported into the KMS key, and this parameter is omitted, the parameter defaults to `NEW_KEY_MATERIAL`. After the first key material is imported, if this parameter is omitted then the parameter defaults to `EXISTING_KEY_MATERIAL`.
   *
   * For multi-Region keys, you must first import new key material into the primary Region key. You should use the `NEW_KEY_MATERIAL` import type when importing key material into the primary Region key. Then, you can import the same key material into the replica Region key. The import type for the replica Region key should be `EXISTING_KEY_MATERIAL`.
   *
   * @public
   */
  ImportType?: ImportType | undefined;

  /**
   * Description for the key material being imported. This parameter is optional and only usable with symmetric encryption keys. If you do not specify a key material description, KMS retains the value you specified when you last imported the same key material into this KMS key.
   *
   * @public
   */
  KeyMaterialDescription?: string | undefined;

  /**
   * Identifies the key material being imported. This parameter is optional and only usable with symmetric encryption keys. You cannot specify a key material ID with `ImportType` set to `NEW_KEY_MATERIAL`. Whenever you import key material into a symmetric encryption key, KMS assigns a unique identifier to the key material based on the KMS key ID and the imported key material. When you re-import key material with a specified key material ID, KMS:
   *
   * - Computes the identifier for the key material
   * - Matches the computed identifier against the specified key material ID
   * - Verifies that the key material ID is already associated with the KMS key
   *
   * To get the list of key material IDs associated with a KMS key, use ListKeyRotations.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface ImportKeyMaterialResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key into which key material was imported.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Identifies the imported key material.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;
}

/**
 * Contains information about each entry in the key list.
 *
 * @public
 */
export interface KeyListEntry {
  /**
   * Unique identifier of the key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * ARN of the key.
   *
   * @public
   */
  KeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * Lists only aliases that are associated with the specified KMS key. Enter a KMS key in your Amazon Web Services account.
   *
   * This parameter is optional. If you omit it, `ListAliases` returns all aliases in the account and Region.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * A list of aliases.
   *
   * @public
   */
  Aliases?: AliasListEntry[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListGrantsRequest {
  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Returns only grants for the specified KMS key. This parameter is required.
   *
   * Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Returns only the grant with the specified grant ID. The grant ID uniquely identifies the grant.
   *
   * @public
   */
  GrantId?: string | undefined;

  /**
   * Returns only grants where the specified principal is the grantee principal for the grant.
   *
   * You can specify either `GranteePrincipal` or `GranteeServicePrincipal`, but not both.
   *
   * @public
   */
  GranteePrincipal?: string | undefined;

  /**
   * Returns only grants where the specified Amazon Web Services service principal is the grantee service principal for the grant. This filter is only usable by callers in a service principal.
   *
   * You can specify either `GranteePrincipal` or `GranteeServicePrincipal`, but not both.
   *
   * @public
   */
  GranteeServicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface ListGrantsResponse {
  /**
   * A list of grants.
   *
   * @public
   */
  Grants?: GrantListEntry[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListKeyPoliciesRequest {
  /**
   * Gets the names of key policies for the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100.
   *
   * Only one policy can be attached to a key.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListKeyPoliciesResponse {
  /**
   * A list of key policy names. The only valid value is `default`.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListKeyRotationsRequest {
  /**
   * Gets the key rotations for the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Use this optional parameter to control which key materials associated with this key are listed in the response. The default value of this parameter is `ROTATIONS_ONLY`. If you omit this parameter, KMS returns information on the key materials created by automatic or on-demand key rotation. When you specify a value of `ALL_KEY_MATERIAL`, KMS adds the first key material and any imported key material pending rotation to the response. This parameter can only be used with KMS keys that support automatic or on-demand key rotation.
   *
   * @public
   */
  IncludeKeyMaterial?: IncludeKeyMaterial | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Each entry contains information about one of the key materials associated with a KMS key.
 *
 * @public
 */
export interface RotationsListEntry {
  /**
   * Unique identifier of the key.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Unique identifier of the key material.
   *
   * @public
   */
  KeyMaterialId?: string | undefined;

  /**
   * User-specified description of the key material. This field is only present for symmetric encryption KMS keys with `EXTERNAL` origin.
   *
   * @public
   */
  KeyMaterialDescription?: string | undefined;

  /**
   * Indicates if the key material is currently imported into KMS. It has two possible values: `IMPORTED` or `PENDING_IMPORT`. This field is only present for symmetric encryption KMS keys with `EXTERNAL` origin.
   *
   * @public
   */
  ImportState?: ImportState | undefined;

  /**
   * There are four possible values for this field: `CURRENT`, `NON_CURRENT`, `PENDING_MULTI_REGION_IMPORT_AND_ROTATION` and `PENDING_ROTATION`. KMS uses `CURRENT` key material for both encryption and decryption and `NON_CURRENT` key material only for decryption. `PENDING_ROTATION` identifies key material that has been imported for on-demand key rotation but the rotation hasn't completed. The key material state `PENDING_MULTI_REGION_IMPORT_AND_ROTATION` is unique to multi-region, symmetric encryption keys with imported key material. It indicates key material that has been imported into the primary Region key but not all of the replica Region keys. When this key material is imported in to all of the replica Region keys, the key material state will change to `PENDING_ROTATION`. Key material in `PENDING_MULTI_REGION_IMPORT_AND_ROTATION` or `PENDING_ROTATION` state is not permanently associated with the KMS key. You can delete this key material and import different key material in its place. The `PENDING_MULTI_REGION_IMPORT_AND_ROTATION` and `PENDING_ROTATION` values are only used in symmetric encryption keys with imported key material. The other values, `CURRENT` and `NON_CURRENT`, are used for all KMS keys that support automatic or on-demand key rotation.
   *
   * @public
   */
  KeyMaterialState?: KeyMaterialState | undefined;

  /**
   * Indicates if the key material is configured to automatically expire. There are two possible values for this field: `KEY_MATERIAL_EXPIRES` and `KEY_MATERIAL_DOES_NOT_EXPIRE`. For any key material that expires, the expiration date and time is indicated in `ValidTo`. This field is only present for symmetric encryption KMS keys with `EXTERNAL` origin.
   *
   * @public
   */
  ExpirationModel?: ExpirationModelType | undefined;

  /**
   * Date and time at which the key material expires. This field is only present for symmetric encryption KMS keys with `EXTERNAL` origin in rotation list entries with an `ExpirationModel` value of `KEY_MATERIAL_EXPIRES`.
   *
   * @public
   */
  ValidTo?: Date | undefined;

  /**
   * Date and time that the key material rotation completed. Formatted as Unix time. This field is not present for the first key material or an imported key material in `PENDING_ROTATION` state.
   *
   * @public
   */
  RotationDate?: Date | undefined;

  /**
   * Identifies whether the key material rotation was a scheduled [automatic rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html) or an [on-demand rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-on-demand.html). This field is not present for the first key material or an imported key material in `PENDING_ROTATION` state.
   *
   * @public
   */
  RotationType?: RotationType | undefined;
}

/**
 * @public
 */
export interface ListKeyRotationsResponse {
  /**
   * A list of completed key material rotations. When the optional input parameter `IncludeKeyMaterial` is specified with a value of `ALL_KEY_MATERIAL`, this list includes the first key material and any imported key material pending rotation.
   *
   * @public
   */
  Rotations?: RotationsListEntry[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * A list of KMS keys.
   *
   * @public
   */
  Keys?: KeyListEntry[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListResourceTagsRequest {
  /**
   * Gets tags on the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 50, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * Do not attempt to construct this value. Use only the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTagsResponse {
  /**
   * A list of tags. Each tag consists of a tag key and a tag value.
   *
   * > **Note:** Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * When `Truncated` is true, this element is present and contains the value to use for the `Marker` parameter in a subsequent request.
   *
   * Do not assume or infer any information from this value.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the `NextMarker` element in this response to the `Marker` parameter in a subsequent request.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListRetirableGrantsRequest {
  /**
   * Use this parameter to specify the maximum number of items to return. When this value is present, KMS does not return more than the specified number of items, but it might return fewer.
   *
   * This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of `NextMarker` from the truncated response you just received.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The retiring principal for which to list grants. Enter a principal in your Amazon Web Services account.
   *
   * To specify the retiring principal, use the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of an Amazon Web Services principal. Valid principals include Amazon Web Services accounts, IAM users, IAM roles, federated users, and assumed role users. For help with the ARN syntax for a principal, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns) in the **Identity and Access Management User Guide** .
   *
   * You must specify either `RetiringPrincipal` or `RetiringServicePrincipal`, but not both.
   *
   * @public
   */
  RetiringPrincipal?: string | undefined;

  /**
   * The retiring service principal for which to list grants. This filter is only usable by callers in a service principal.
   *
   * You must specify either `RetiringPrincipal` or `RetiringServicePrincipal`, but not both.
   *
   * @public
   */
  RetiringServicePrincipal?: string | undefined;
}

/**
 * @public
 */
export interface PutKeyPolicyRequest {
  /**
   * Sets the key policy on the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The name of the key policy. If no policy name is specified, the default value is `default`. The only valid value is `default`.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The key policy to attach to the KMS key.
   *
   * The key policy must meet the following criteria:
   *
   * - The key policy must allow the calling principal to make a subsequent `PutKeyPolicy` request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Key Management Service Developer Guide*. (To omit this condition, set `BypassPolicyLockoutSafetyCheck` to true.)
   * - Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * > **Note:**
   * >
   * > If either of the required `Resource` or `Action` elements are missing from a key policy statement, the policy statement has no effect. When a key policy statement is missing one of these elements, the KMS console correctly reports an error, but the `PutKeyPolicy` API request succeeds, even though the policy statement is ineffective.
   * >
   * > For more information on required key policy elements, see [Elements in a key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-overview.html#key-policy-elements) in the *Key Management Service Developer Guide*.
   *
   * A key policy document can include only the following characters:
   *
   * - Printable ASCII characters from the space character (`\u0020`) through the end of the ASCII character range.
   * - Printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`).
   * - The tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`) special characters
   *
   * > **Note:** If the key policy exceeds the length constraint, KMS returns a `LimitExceededException`.
   *
   * For information about key policies, see [Key policies in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Key Management Service Developer Guide*.For help writing and formatting a JSON policy document, see the [IAM JSON Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html) in the **Identity and Access Management User Guide** .
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * Skips ("bypasses") the key policy lockout safety check. The default value is false.
   *
   * > **Important:**
   * >
   * > Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
   * >
   * > For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Key Management Service Developer Guide*.
   *
   * Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.
   *
   * @public
   */
  BypassPolicyLockoutSafetyCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface ReEncryptRequest {
  /**
   * Ciphertext of the data to reencrypt.
   *
   * This parameter is required in all cases except when `DryRun` is `true` and `DryRunModifiers` is set to `IGNORE_CIPHERTEXT`.
   *
   * @public
   */
  CiphertextBlob?: Uint8Array | undefined;

  /**
   * Specifies the encryption context to use to decrypt the ciphertext. Enter the same encryption context that was used to encrypt the ciphertext.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  SourceEncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies the KMS key that KMS will use to decrypt the ciphertext before it is re-encrypted.
   *
   * Enter a key ID of the KMS key that was used to encrypt the ciphertext. If you identify a different KMS key, the `ReEncrypt` operation throws an `IncorrectKeyException`.
   *
   * This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key or when `DryRun` is `true` and `DryRunModifiers` is set to `IGNORE_CIPHERTEXT`. If you used a symmetric encryption KMS key, KMS can get the KMS key from metadata that it adds to the symmetric ciphertext blob. However, it is always recommended as a best practice. This practice ensures that you use the KMS key that you intend.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you should use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  SourceKeyId?: string | undefined;

  /**
   * A unique identifier for the KMS key that is used to reencrypt the data. Specify a symmetric encryption KMS key or an asymmetric KMS key with a `KeyUsage` value of `ENCRYPT_DECRYPT`. To find the `KeyUsage` value of a KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  DestinationKeyId: string | undefined;

  /**
   * Specifies that encryption context to use when the reencrypting the data.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * A destination encryption context is valid only when the destination KMS key is a symmetric encryption KMS key. The standard ciphertext format for asymmetric KMS keys does not include fields for metadata.
   *
   * An *encryption context* is a collection of non-secret key-value pairs that represent additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.
   *
   * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DestinationEncryptionContext?: Record<string, string> | undefined;

  /**
   * Specifies the encryption algorithm that KMS will use to decrypt the ciphertext before it is reencrypted. The default value, `SYMMETRIC_DEFAULT`, represents the algorithm used for symmetric encryption KMS keys.
   *
   * Specify the same algorithm that was used to encrypt the ciphertext. If you specify a different algorithm, the decrypt attempt fails.
   *
   * This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.
   *
   * @public
   */
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * Specifies the encryption algorithm that KMS will use to reecrypt the data after it has decrypted it. The default value, `SYMMETRIC_DEFAULT`, represents the encryption algorithm used for symmetric encryption KMS keys.
   *
   * This parameter is required only when the destination KMS key is an asymmetric KMS key.
   *
   * @public
   */
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Specifies the modifiers to apply to the dry run operation. `DryRunModifiers` is an optional parameter that only applies when `DryRun` is set to `true`.
   *
   * When set to `IGNORE_CIPHERTEXT`, KMS performs only authorization validation without ciphertext validation. This allows you to test permissions without requiring a valid ciphertext blob.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRunModifiers?: DryRunModifierType[] | undefined;
}

/**
 * @public
 */
export interface ReEncryptResponse {
  /**
   * The reencrypted data. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  CiphertextBlob?: Uint8Array | undefined;

  /**
   * Unique identifier of the KMS key used to originally encrypt the data.
   *
   * @public
   */
  SourceKeyId?: string | undefined;

  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key that was used to reencrypt the data.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The encryption algorithm that was used to decrypt the ciphertext before it was reencrypted.
   *
   * @public
   */
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * The encryption algorithm that was used to reencrypt the data.
   *
   * @public
   */
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | undefined;

  /**
   * The identifier of the key material used to originally encrypt the data. This field is present only when the original encryption used a symmetric encryption KMS key.
   *
   * @public
   */
  SourceKeyMaterialId?: string | undefined;

  /**
   * The identifier of the key material used to reencrypt the data. This field is present only when data is reencrypted using a symmetric encryption KMS key.
   *
   * @public
   */
  DestinationKeyMaterialId?: string | undefined;
}

/**
 * @public
 */
export interface ReplicateKeyRequest {
  /**
   * Identifies the multi-Region primary key that is being replicated. To determine whether a KMS key is a multi-Region primary key, use the DescribeKey operation to check the value of the `MultiRegionKeyType` property.
   *
   * Specify the key ID or key ARN of a multi-Region primary key.
   *
   * For example:
   *
   * - Key ID: `mrk-1234abcd12ab34cd56ef1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The Region ID of the Amazon Web Services Region for this replica key.
   *
   * Enter the Region ID, such as `us-east-1` or `ap-southeast-2`. For a list of Amazon Web Services Regions in which KMS is supported, see [KMS service endpoints](https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region) in the *Amazon Web Services General Reference*.
   *
   * The replica must be in a different Amazon Web Services Region than its primary key and other replicas of that primary key, but in the same Amazon Web Services partition. KMS must be available in the replica Region. If the Region is not enabled by default, the Amazon Web Services account must be enabled in the Region. For information about Amazon Web Services partitions, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*. For information about enabling and disabling Regions, see [Enabling a Region](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable) and [Disabling a Region](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-disable) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  ReplicaRegion: string | undefined;

  /**
   * The key policy to attach to the KMS key. This parameter is optional. If you do not provide a key policy, KMS attaches the [default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html) to the KMS key.
   *
   * The key policy is not a shared property of multi-Region keys. You can specify the same key policy or a different key policy for each key in a set of related multi-Region keys. KMS does not synchronize this property.
   *
   * If you provide a key policy, it must meet the following criteria:
   *
   * - The key policy must allow the calling principal to make a subsequent `PutKeyPolicy` request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Key Management Service Developer Guide*. (To omit this condition, set `BypassPolicyLockoutSafetyCheck` to true.)
   * - Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * A key policy document can include only the following characters:
   *
   * - Printable ASCII characters from the space character (`\u0020`) through the end of the ASCII character range.
   * - Printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`).
   * - The tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`) special characters
   *
   * For information about key policies, see [Key policies in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Key Management Service Developer Guide*. For help writing and formatting a JSON policy document, see the [IAM JSON Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html) in the **Identity and Access Management User Guide** .
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * Skips ("bypasses") the key policy lockout safety check. The default value is false.
   *
   * > **Important:**
   * >
   * > Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
   * >
   * > For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Key Management Service Developer Guide*.
   *
   * Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.
   *
   * @public
   */
  BypassPolicyLockoutSafetyCheck?: boolean | undefined;

  /**
   * A description of the KMS key. The default value is an empty string (no description).
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * The description is not a shared property of multi-Region keys. You can specify the same description or a different description for each key in a set of related multi-Region keys. KMS does not synchronize this property.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Assigns one or more tags to the replica key. Use this parameter to tag the KMS key when it is created. To tag an existing KMS key, use the TagResource operation.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * > **Note:** Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Key Management Service Developer Guide*.
   *
   * To use this parameter, you must have [kms:TagResource](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) permission in an IAM policy.
   *
   * Tags are not a shared property of multi-Region keys. You can specify the same tags or different tags for each key in a set of related multi-Region keys. KMS does not synchronize this property.
   *
   * Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one.
   *
   * When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see [Tags in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ReplicateKeyResponse {
  /**
   * Displays details about the new replica key, including its Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) and [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html). It also includes the ARN and Amazon Web Services Region of its primary key and other replica keys.
   *
   * @public
   */
  ReplicaKeyMetadata?: KeyMetadata | undefined;

  /**
   * The key policy of the new replica key. The value is a key policy document in JSON format.
   *
   * @public
   */
  ReplicaPolicy?: string | undefined;

  /**
   * The tags on the new replica key. The value is a list of tag key and tag value pairs.
   *
   * @public
   */
  ReplicaTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RetireGrantRequest {
  /**
   * Identifies the grant to be retired. You can use a grant token to identify a new grant even before it has achieved eventual consistency.
   *
   * Only the CreateGrant operation returns a grant token. For details, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantToken?: string | undefined;

  /**
   * The key ARN KMS key associated with the grant. To find the key ARN, use the ListKeys operation.
   *
   * For example: `arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Identifies the grant to retire. To get the grant ID, use CreateGrant, ListGrants, or ListRetirableGrants.
   *
   * - Grant ID Example - 0123456789012345678901234567890123456789012345678901234567890123
   *
   * @public
   */
  GrantId?: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RevokeGrantRequest {
  /**
   * A unique identifier for the KMS key associated with the grant. To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * Specify the key ID or key ARN of the KMS key. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Identifies the grant to revoke. To get the grant ID, use CreateGrant, ListGrants, or ListRetirableGrants.
   *
   * @public
   */
  GrantId: string | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RotateKeyOnDemandRequest {
  /**
   * Identifies a symmetric encryption KMS key. You cannot perform on-demand rotation of [asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html), [HMAC KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html), multi-Region KMS keys with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html), or KMS keys in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). To perform on-demand rotation of a set of related [multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate), invoke the on-demand rotation on the primary key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;
}

/**
 * @public
 */
export interface RotateKeyOnDemandResponse {
  /**
   * Identifies the symmetric encryption KMS key that you initiated on-demand rotation on.
   *
   * @public
   */
  KeyId?: string | undefined;
}

/**
 * @public
 */
export interface ScheduleKeyDeletionRequest {
  /**
   * The unique identifier of the KMS key to delete.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The waiting period, specified in number of days. After the waiting period ends, KMS deletes the KMS key.
   *
   * If the KMS key is a multi-Region primary key with replica keys, the waiting period begins when the last of its replica keys is deleted. Otherwise, the waiting period begins immediately.
   *
   * This value is optional. If you include a value, it must be between 7 and 30, inclusive. If you do not include a value, it defaults to 30. You can use the [`kms:ScheduleKeyDeletionPendingWindowInDays`](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-schedule-key-deletion-pending-window-in-days) condition key to further constrain the values that principals can specify in the `PendingWindowInDays` parameter.
   *
   * @public
   */
  PendingWindowInDays?: number | undefined;
}

/**
 * @public
 */
export interface ScheduleKeyDeletionResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the KMS key whose deletion is scheduled.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The date and time after which KMS deletes the KMS key.
   *
   * If the KMS key is a multi-Region primary key with replica keys, this field does not appear. The deletion date for the primary key isn't known until its last replica key is deleted.
   *
   * @public
   */
  DeletionDate?: Date | undefined;

  /**
   * The current status of the KMS key.
   *
   * For more information about how key state affects the use of a KMS key, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  KeyState?: KeyState | undefined;

  /**
   * The waiting period before the KMS key is deleted.
   *
   * If the KMS key is a multi-Region primary key with replicas, the waiting period begins when the last of its replica keys is deleted. Otherwise, the waiting period begins immediately.
   *
   * @public
   */
  PendingWindowInDays?: number | undefined;
}

/**
 * @public
 */
export interface SignRequest {
  /**
   * Identifies an asymmetric KMS key. KMS uses the private key in the asymmetric KMS key to sign the message. The `KeyUsage` type of the KMS key must be `SIGN_VERIFY`. To find the `KeyUsage` of a KMS key, use the DescribeKey operation.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the message or message digest to sign. Messages can be 0-4096 bytes. To sign a larger message, provide a message digest.
   *
   * If you provide a message digest, use the `DIGEST` value of `MessageType` to prevent the digest from being hashed again while signing.
   *
   * @public
   */
  Message: Uint8Array | undefined;

  /**
   * Tells KMS whether the value of the `Message` parameter should be hashed as part of the signing algorithm. Use `RAW` for unhashed messages; use `DIGEST` for message digests, which are already hashed; use `EXTERNAL_MU` for 64-byte representative μ used in ML-DSA signing as defined in NIST FIPS 204 Section 6.2.
   *
   * When the value of `MessageType` is `RAW`, KMS uses the standard signing algorithm, which begins with a hash function. When the value is `DIGEST`, KMS skips the hashing step in the signing algorithm. When the value is `EXTERNAL_MU` KMS skips the concatenated hashing of the public key hash and the message done in the ML-DSA signing algorithm.
   *
   * > **Important:** Use the `DIGEST` or `EXTERNAL_MU` value only when the value of the `Message` parameter is a message digest. If you use the `DIGEST` value with an unhashed message, the security of the signing operation can be compromised.
   *
   * When using ECC_NIST_EDWARDS25519 KMS keys:
   *
   * - ED25519_SHA_512 signing algorithm requires KMS `MessageType:RAW`
   * - ED25519_PH_SHA_512 signing algorithm requires KMS `MessageType:DIGEST`
   *
   * > **Important:** When you specify the ED25519_PH_SHA_512 signing algorithm with `MessageType:DIGEST`, KMS still performs the SHA-512 prehash described in [Step 1 of Section 7.8.1 in FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf#page=39). This means the input is hashed twice: once by you and once by KMS.
   *
   * When the value of `MessageType` is `DIGEST`, the length of the `Message` value must match the length of hashed messages for the specified signing algorithm.
   *
   * When the value of `MessageType` is `EXTERNAL_MU` the length of the `Message` value must be 64 bytes.
   *
   * You can submit a message digest and omit the `MessageType` or specify `RAW` so the digest is hashed again while signing. However, this can cause verification failures when verifying with a system that assumes a single hash.
   *
   * The hashing algorithm that `Sign` uses is based on the `SigningAlgorithm` value.
   *
   * - Signing algorithms that end in SHA_256 use the SHA_256 hashing algorithm.
   * - Signing algorithms that end in SHA_384 use the SHA_384 hashing algorithm.
   * - Signing algorithms that end in SHA_512 use the SHA_512 hashing algorithm.
   * - Signing algorithms that end in SHAKE_256 use the SHAKE_256 hashing algorithm.
   * - SM2DSA uses the SM3 hashing algorithm. For details, see [Offline verification with SM2 key pairs](https://docs.aws.amazon.com/kms/latest/developerguide/offline-operations.html#key-spec-sm-offline-verification).
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Specifies the signing algorithm to use when signing the message.
   *
   * Choose an algorithm that is compatible with the type and size of the specified asymmetric KMS key. When signing with RSA key pairs, RSASSA-PSS algorithms are preferred. We include RSASSA-PKCS1-v1_5 algorithms for compatibility with existing applications.
   *
   * @public
   */
  SigningAlgorithm: SigningAlgorithmSpec | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface SignResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the asymmetric KMS key that was used to sign the message.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * The cryptographic signature that was generated for the message.
   *
   * - When used with the supported RSA signing algorithms, the encoding of this value is defined by [PKCS #1 in RFC 8017](https://tools.ietf.org/html/rfc8017).
   * - When used with the `ECDSA_SHA_256`, `ECDSA_SHA_384`, or `ECDSA_SHA_512` signing algorithms, this value is a DER-encoded object as defined by ANSI X9.62–2005 and [RFC 3279 Section 2.2.3](https://tools.ietf.org/html/rfc3279#section-2.2.3). This is the most commonly used signature format and is appropriate for most uses.
   *
   * When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
   *
   * @public
   */
  Signature?: Uint8Array | undefined;

  /**
   * The signing algorithm that was used to sign the message.
   *
   * @public
   */
  SigningAlgorithm?: SigningAlgorithmSpec | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Identifies a customer managed key in the account and Region.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Identifies the KMS key from which you are removing tags.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * One or more tag keys. Specify only the tag keys, not the tag values.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAliasRequest {
  /**
   * Identifies the alias that is changing its KMS key. This value must begin with `alias/` followed by the alias name, such as `alias/ExampleAlias`. You cannot use `UpdateAlias` to change the alias name.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  AliasName: string | undefined;

  /**
   * Identifies the [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key) to associate with the alias. You don't have permission to associate an alias with an [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key).
   *
   * The KMS key must be in the same Amazon Web Services account and Region as the alias. Also, the new target KMS key must be the same type as the current target KMS key (both symmetric or both asymmetric or both HMAC) and they must have the same key usage.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * To verify that the alias is mapped to the correct KMS key, use ListAliases.
   *
   * @public
   */
  TargetKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomKeyStoreRequest {
  /**
   * Identifies the custom key store that you want to update. Enter the ID of the custom key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
   *
   * @public
   */
  CustomKeyStoreId: string | undefined;

  /**
   * Changes the friendly name of the custom key store to the value that you specify. The custom key store name must be unique in the Amazon Web Services account.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * To change this value, the custom key store can be connected or disconnected.
   *
   * @public
   */
  NewCustomKeyStoreName?: string | undefined;

  /**
   * Enter the current password of the `kmsuser` crypto user (CU) in the CloudHSM cluster that is associated with the custom key store. This parameter is valid only for custom key stores with a `CustomKeyStoreType` of `AWS_CLOUDHSM`.
   *
   * This parameter tells KMS the current password of the `kmsuser` crypto user (CU). It does not set or change the password of any users in the CloudHSM cluster.
   *
   * To change this value, the CloudHSM key store must be disconnected.
   *
   * @public
   */
  KeyStorePassword?: string | undefined;

  /**
   * Associates the custom key store with a related CloudHSM cluster. This parameter is valid only for custom key stores with a `CustomKeyStoreType` of `AWS_CLOUDHSM`.
   *
   * Enter the cluster ID of the cluster that you used to create the custom key store or a cluster that shares a backup history and has the same cluster certificate as the original cluster. You cannot use this parameter to associate a custom key store with an unrelated cluster. In addition, the replacement cluster must [fulfill the requirements](https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore) for a cluster associated with a custom key store. To view the cluster certificate of a cluster, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation.
   *
   * To change this value, the CloudHSM key store must be disconnected.
   *
   * @public
   */
  CloudHsmClusterId?: string | undefined;

  /**
   * Changes the URI endpoint that KMS uses to connect to your external key store proxy (XKS proxy). This parameter is valid only for custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * For external key stores with an `XksProxyConnectivity` value of `PUBLIC_ENDPOINT`, the protocol must be HTTPS.
   *
   * For external key stores with an `XksProxyConnectivity` value of `VPC_ENDPOINT_SERVICE`, specify `https://` followed by the private DNS name associated with the VPC endpoint service. Each external key store must use a different private DNS name.
   *
   * The combined `XksProxyUriEndpoint` and `XksProxyUriPath` values must be unique in the Amazon Web Services account and Region.
   *
   * To change this value, the external key store must be disconnected.
   *
   * @public
   */
  XksProxyUriEndpoint?: string | undefined;

  /**
   * Changes the base path to the proxy APIs for this external key store. To find this value, see the documentation for your external key manager and external key store proxy (XKS proxy). This parameter is valid only for custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * The value must start with `/` and must end with `/kms/xks/v1`, where `v1` represents the version of the KMS external key store proxy API. You can include an optional prefix between the required elements such as `/example/kms/xks/v1`.
   *
   * The combined `XksProxyUriEndpoint` and `XksProxyUriPath` values must be unique in the Amazon Web Services account and Region.
   *
   * You can change this value when the external key store is connected or disconnected.
   *
   * @public
   */
  XksProxyUriPath?: string | undefined;

  /**
   * Changes the name that KMS uses to identify the Amazon VPC endpoint service for your external key store proxy (XKS proxy). This parameter is valid when the `CustomKeyStoreType` is `EXTERNAL_KEY_STORE` and the `XksProxyConnectivity` is `VPC_ENDPOINT_SERVICE`.
   *
   * To change this value, the external key store must be disconnected.
   *
   * @public
   */
  XksProxyVpcEndpointServiceName?: string | undefined;

  /**
   * Changes the Amazon Web Services account ID that KMS uses to identify the Amazon VPC endpoint service for your external key store proxy (XKS proxy). This parameter is optional. If not specified, the current Amazon Web Services account ID for the VPC endpoint service will not be updated.
   *
   * To change this value, the external key store must be disconnected.
   *
   * @public
   */
  XksProxyVpcEndpointServiceOwner?: string | undefined;

  /**
   * Changes the credentials that KMS uses to sign requests to the external key store proxy (XKS proxy). This parameter is valid only for custom key stores with a `CustomKeyStoreType` of `EXTERNAL_KEY_STORE`.
   *
   * You must specify both the `AccessKeyId` and `SecretAccessKey` value in the authentication credential, even if you are only updating one value.
   *
   * This parameter doesn't establish or change your authentication credentials on the proxy. It just tells KMS the credential that you established with your external key store proxy. For example, if you rotate the credential on your external key store proxy, you can use this parameter to update the credential in KMS.
   *
   * You can change this value when the external key store is connected or disconnected.
   *
   * @public
   */
  XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType | undefined;

  /**
   * Changes the connectivity setting for the external key store. To indicate that the external key store proxy uses a Amazon VPC endpoint service to communicate with KMS, specify `VPC_ENDPOINT_SERVICE`. Otherwise, specify `PUBLIC_ENDPOINT`.
   *
   * If you change the `XksProxyConnectivity` to `VPC_ENDPOINT_SERVICE`, you must also change the `XksProxyUriEndpoint` and add an `XksProxyVpcEndpointServiceName` value.
   *
   * If you change the `XksProxyConnectivity` to `PUBLIC_ENDPOINT`, you must also change the `XksProxyUriEndpoint` and specify a null or empty string for the `XksProxyVpcEndpointServiceName` value.
   *
   * To change this value, the external key store must be disconnected.
   *
   * @public
   */
  XksProxyConnectivity?: XksProxyConnectivityType | undefined;
}

/**
 * @public
 */
export interface UpdateCustomKeyStoreResponse {}

/**
 * @public
 */
export interface UpdateKeyDescriptionRequest {
  /**
   * Updates the description of the specified KMS key.
   *
   * Specify the key ID or key ARN of the KMS key.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * New description for the KMS key.
   *
   * > **Important:** Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   *
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface UpdatePrimaryRegionRequest {
  /**
   * Identifies the current primary key. When the operation completes, this KMS key will be a replica key.
   *
   * Specify the key ID or key ARN of a multi-Region primary key.
   *
   * For example:
   *
   * - Key ID: `mrk-1234abcd12ab34cd56ef1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The Amazon Web Services Region of the new primary key. Enter the Region ID, such as `us-east-1` or `ap-southeast-2`. There must be an existing replica key in this Region.
   *
   * When the operation completes, the multi-Region key in this Region will be the primary key.
   *
   * @public
   */
  PrimaryRegion: string | undefined;
}

/**
 * @public
 */
export interface VerifyRequest {
  /**
   * Identifies the asymmetric KMS key that will be used to verify the signature. This must be the same KMS key that was used to generate the signature. If you specify a different KMS key, the signature verification fails.
   *
   * To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.
   *
   * For example:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias ARN: `arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias`
   *
   * To get the key ID and key ARN for a KMS key, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * Specifies the message that was signed. You can submit a raw message of up to 4096 bytes, or a hash digest of the message. If you submit a digest, use the `MessageType` parameter with a value of `DIGEST`.
   *
   * If the message specified here is different from the message that was signed, the signature verification fails. A message and its hash digest are considered to be the same message.
   *
   * @public
   */
  Message: Uint8Array | undefined;

  /**
   * Tells KMS whether the value of the `Message` parameter should be hashed as part of the signing algorithm. Use `RAW` for unhashed messages; use `DIGEST` for message digests, which are already hashed; use `EXTERNAL_MU` for 64-byte representative μ used in ML-DSA signing as defined in NIST FIPS 204 Section 6.2.
   *
   * When the value of `MessageType` is `RAW`, KMS uses the standard signing algorithm, which begins with a hash function. When the value is `DIGEST`, KMS skips the hashing step in the signing algorithm. When the value is `EXTERNAL_MU` KMS skips the concatenated hashing of the public key hash and the message done in the ML-DSA signing algorithm.
   *
   * > **Important:** Use the `DIGEST` or `EXTERNAL_MU` value only when the value of the `Message` parameter is a message digest. If you use the `DIGEST` value with an unhashed message, the security of the signing operation can be compromised.
   *
   * When using ECC_NIST_EDWARDS25519 KMS keys:
   *
   * - ED25519_SHA_512 signing algorithm requires KMS `MessageType:RAW`
   * - ED25519_PH_SHA_512 signing algorithm requires KMS `MessageType:DIGEST`
   *
   * > **Important:** When you specify the ED25519_PH_SHA_512 signing algorithm with `MessageType:DIGEST`, KMS still performs the SHA-512 prehash described in [Step 1 of Section 7.8.1 in FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf#page=39). This means the input is hashed twice: once by you and once by KMS.
   *
   * When the value of `MessageType` is `DIGEST`, the length of the `Message` value must match the length of hashed messages for the specified signing algorithm.
   *
   * When the value of `MessageType` is `EXTERNAL_MU` the length of the `Message` value must be 64 bytes.
   *
   * You can submit a message digest and omit the `MessageType` or specify `RAW` so the digest is hashed again while signing. However, if the signed message is hashed once while signing, but twice while verifying, verification fails, even when the message hasn't changed.
   *
   * The hashing algorithm that `Verify` uses is based on the `SigningAlgorithm` value.
   *
   * - Signing algorithms that end in SHA_256 use the SHA_256 hashing algorithm.
   * - Signing algorithms that end in SHA_384 use the SHA_384 hashing algorithm.
   * - Signing algorithms that end in SHA_512 use the SHA_512 hashing algorithm.
   * - Signing algorithms that end in SHAKE_256 use the SHAKE_256 hashing algorithm.
   * - SM2DSA uses the SM3 hashing algorithm. For details, see [Offline verification with SM2 key pairs](https://docs.aws.amazon.com/kms/latest/developerguide/offline-operations.html#key-spec-sm-offline-verification).
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * The signature that the `Sign` operation generated.
   *
   * @public
   */
  Signature: Uint8Array | undefined;

  /**
   * The signing algorithm that was used to sign the message. If you submit a different algorithm, the signature verification fails.
   *
   * @public
   */
  SigningAlgorithm: SigningAlgorithmSpec | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface VerifyResponse {
  /**
   * The Amazon Resource Name ([key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN)) of the asymmetric KMS key that was used to verify the signature.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * A Boolean value that indicates whether the signature was verified. A value of `True` indicates that the `Signature` was produced by signing the `Message` with the specified `KeyID` and `SigningAlgorithm.` If the signature is not verified, the `Verify` operation fails with a `KMSInvalidSignatureException` exception.
   *
   * @public
   */
  SignatureValid?: boolean | undefined;

  /**
   * The signing algorithm that was used to verify the signature.
   *
   * @public
   */
  SigningAlgorithm?: SigningAlgorithmSpec | undefined;
}

/**
 * @public
 */
export interface VerifyMacRequest {
  /**
   * The message that will be used in the verification. Enter the same message that was used to generate the HMAC.
   *
   * GenerateMac and `VerifyMac` do not provide special handling for message digests. If you generated an HMAC for a hash digest of a message, you must verify the HMAC for the same hash digest.
   *
   * @public
   */
  Message: Uint8Array | undefined;

  /**
   * The KMS key that will be used in the verification.
   *
   * Enter a key ID of the KMS key that was used to generate the HMAC. If you identify a different KMS key, the `VerifyMac` operation fails.
   *
   * @public
   */
  KeyId: string | undefined;

  /**
   * The MAC algorithm that will be used in the verification. Enter the same MAC algorithm that was used to compute the HMAC. This algorithm must be supported by the HMAC KMS key identified by the `KeyId` parameter.
   *
   * @public
   */
  MacAlgorithm: MacAlgorithmSpec | undefined;

  /**
   * The HMAC to verify. Enter the HMAC that was generated by the GenerateMac operation when you specified the same message, HMAC KMS key, and MAC algorithm as the values specified in this request.
   *
   * @public
   */
  Mac: Uint8Array | undefined;

  /**
   * A list of grant tokens.
   *
   * Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved *eventual consistency*. For more information, see [Grant token](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token) and [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  GrantTokens?: string[] | undefined;

  /**
   * Checks if your request will succeed. `DryRun` is an optional parameter.
   *
   * To learn more about how to use this parameter, see [Testing your permissions](https://docs.aws.amazon.com/kms/latest/developerguide/testing-permissions.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface VerifyMacResponse {
  /**
   * The HMAC KMS key used in the verification.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * A Boolean value that indicates whether the HMAC was verified. A value of `True` indicates that the HMAC (`Mac`) was generated with the specified `Message`, HMAC KMS key (`KeyID`) and `MacAlgorithm.`.
   *
   * If the HMAC is not verified, the `VerifyMac` operation fails with a `KMSInvalidMacException` exception. This exception indicates that one or more of the inputs changed since the HMAC was computed.
   *
   * @public
   */
  MacValid?: boolean | undefined;

  /**
   * The MAC algorithm used in the verification.
   *
   * @public
   */
  MacAlgorithm?: MacAlgorithmSpec | undefined;
}
