import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AlgorithmSpec {
  RSAES_OAEP_SHA_1 = "RSAES_OAEP_SHA_1",
  RSAES_OAEP_SHA_256 = "RSAES_OAEP_SHA_256",
  RSAES_PKCS1_V1_5 = "RSAES_PKCS1_V1_5",
}

/**
 * <p>Contains information about an alias.</p>
 */
export interface AliasListEntry {
  /**
   * <p>String that contains the alias. This value begins with <code>alias/</code>.</p>
   */
  AliasName?: string;

  /**
   * <p>String that contains the key ARN.</p>
   */
  AliasArn?: string;

  /**
   * <p>String that contains the key identifier of the KMS key associated with the alias.</p>
   */
  TargetKeyId?: string;

  /**
   * <p>Date and time that the alias was most recently created in the account and Region. Formatted as Unix time.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date and time that the alias was most recently associated with a KMS key in the account and Region. Formatted as Unix time.</p>
   */
  LastUpdatedDate?: Date;
}

export namespace AliasListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AliasListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace AlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
}

export interface CancelKeyDeletionRequest {
  /**
   * <p>Identifies the KMS key whose deletion is being canceled.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace CancelKeyDeletionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelKeyDeletionRequest): any => ({
    ...obj,
  });
}

export interface CancelKeyDeletionResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key whose deletion is canceled.</p>
   */
  KeyId?: string;
}

export namespace CancelKeyDeletionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelKeyDeletionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The system timed out while trying to fulfill the request. The request can be
 *       retried.</p>
 */
export interface DependencyTimeoutException extends __SmithyException, $MetadataBearer {
  name: "DependencyTimeoutException";
  $fault: "server";
  message?: string;
}

export namespace DependencyTimeoutException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DependencyTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 */
export interface InvalidArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidArnException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArnException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidArnException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 */
export interface KMSInternalException extends __SmithyException, $MetadataBearer {
  name: "KMSInternalException";
  $fault: "server";
  message?: string;
}

export namespace KMSInternalException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSInternalException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>.</p>
 */
export interface KMSInvalidStateException extends __SmithyException, $MetadataBearer {
  name: "KMSInvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace KMSInvalidStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSInvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified CloudHSM cluster is already associated with a
 *       custom key store or it shares a backup history with a cluster that is associated with a custom
 *       key store. Each custom key store must be associated with a different CloudHSM cluster.</p>
 *          <p>Clusters that share a backup history have the same cluster certificate. To view the
 *       cluster certificate of a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
 */
export interface CloudHsmClusterInUseException extends __SmithyException, $MetadataBearer {
  name: "CloudHsmClusterInUseException";
  $fault: "client";
  message?: string;
}

export namespace CloudHsmClusterInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudHsmClusterInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the associated CloudHSM cluster did not meet the
 *       configuration requirements for a custom key store.</p>
 *
 *          <ul>
 *             <li>
 *                <p>The cluster must be configured with private subnets in at least two different
 *           Availability Zones in the Region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">security group for
 *             the cluster</a> (cloudhsm-cluster-<i><cluster-id></i>-sg) must
 *           include inbound rules and outbound rules that allow TCP traffic on ports 2223-2225. The
 *             <b>Source</b> in the inbound rules and the <b>Destination</b> in the outbound rules must match the security group
 *           ID. These rules are set by default when you create the cluster. Do not delete or change
 *           them. To get information about a particular security group, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html">DescribeSecurityGroups</a> operation.</p>
 *             </li>
 *             <li>
 *                <p>The cluster must contain at least as many HSMs as the operation requires. To add HSMs,
 *           use the CloudHSM <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation.</p>
 *                <p>For the <a>CreateCustomKeyStore</a>, <a>UpdateCustomKeyStore</a>, and <a>CreateKey</a> operations, the CloudHSM cluster must have at least two
 *           active HSMs, each in a different Availability Zone. For the <a>ConnectCustomKeyStore</a> operation, the CloudHSM must contain at least one active
 *           HSM.</p>
 *             </li>
 *          </ul>
 *          <p>For information about the requirements for an CloudHSM cluster that is associated with a
 *       custom key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a>
 *       in the <i>Key Management Service Developer Guide</i>. For information about creating a private subnet for an CloudHSM cluster,
 *       see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/create-subnets.html">Create a Private
 *         Subnet</a> in the <i>CloudHSM User Guide</i>. For information about cluster security groups, see
 *         <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">Configure a Default Security
 *         Group</a> in the <i>
 *                <i>CloudHSM User Guide</i>
 *             </i>. </p>
 */
export interface CloudHsmClusterInvalidConfigurationException extends __SmithyException, $MetadataBearer {
  name: "CloudHsmClusterInvalidConfigurationException";
  $fault: "client";
  message?: string;
}

export namespace CloudHsmClusterInvalidConfigurationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudHsmClusterInvalidConfigurationException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the CloudHSM cluster that is associated with the custom key
 *       store is not active. Initialize and activate the cluster and try the command again. For
 *       detailed instructions, see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html">Getting Started</a> in the <i>CloudHSM User Guide</i>.</p>
 */
export interface CloudHsmClusterNotActiveException extends __SmithyException, $MetadataBearer {
  name: "CloudHsmClusterNotActiveException";
  $fault: "client";
  message?: string;
}

export namespace CloudHsmClusterNotActiveException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudHsmClusterNotActiveException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because KMS cannot find the CloudHSM cluster with the specified
 *       cluster ID. Retry the request with a different cluster ID.</p>
 */
export interface CloudHsmClusterNotFoundException extends __SmithyException, $MetadataBearer {
  name: "CloudHsmClusterNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace CloudHsmClusterNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudHsmClusterNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified CloudHSM cluster has a different cluster
 *       certificate than the original cluster. You cannot use the operation to specify an unrelated
 *       cluster.</p>
 *          <p>Specify a cluster that shares a backup history with the original cluster. This includes
 *       clusters that were created from a backup of the current cluster, and clusters that were
 *       created from the same backup that produced the current cluster.</p>
 *          <p>Clusters that share a backup history have the same cluster certificate. To view the
 *       cluster certificate of a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
 */
export interface CloudHsmClusterNotRelatedException extends __SmithyException, $MetadataBearer {
  name: "CloudHsmClusterNotRelatedException";
  $fault: "client";
  message?: string;
}

export namespace CloudHsmClusterNotRelatedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudHsmClusterNotRelatedException): any => ({
    ...obj,
  });
}

export interface ConnectCustomKeyStoreRequest {
  /**
   * <p>Enter the key store ID of the custom key store that you want to connect.
   *       To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;
}

export namespace ConnectCustomKeyStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectCustomKeyStoreRequest): any => ({
    ...obj,
  });
}

export interface ConnectCustomKeyStoreResponse {}

export namespace ConnectCustomKeyStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectCustomKeyStoreResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because of the <code>ConnectionState</code> of the custom key
 *       store. To get the <code>ConnectionState</code> of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p>This exception is thrown under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>You requested the <a>CreateKey</a> or <a>GenerateRandom</a>
 *           operation in a custom key store that is not connected. These operations are valid only
 *           when the custom key store <code>ConnectionState</code> is <code>CONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>UpdateCustomKeyStore</a> or <a>DeleteCustomKeyStore</a> operation on a custom key store that is not
 *           disconnected. This operation is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>DISCONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>ConnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>FAILED</code>. This operation is valid for all other <code>ConnectionState</code>
 *           values.</p>
 *             </li>
 *          </ul>
 */
export interface CustomKeyStoreInvalidStateException extends __SmithyException, $MetadataBearer {
  name: "CustomKeyStoreInvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace CustomKeyStoreInvalidStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomKeyStoreInvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 */
export interface CustomKeyStoreNotFoundException extends __SmithyException, $MetadataBearer {
  name: "CustomKeyStoreNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace CustomKeyStoreNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomKeyStoreNotFoundException): any => ({
    ...obj,
  });
}

export enum ConnectionErrorCodeType {
  CLUSTER_NOT_FOUND = "CLUSTER_NOT_FOUND",
  INSUFFICIENT_CLOUDHSM_HSMS = "INSUFFICIENT_CLOUDHSM_HSMS",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  NETWORK_ERRORS = "NETWORK_ERRORS",
  SUBNET_NOT_FOUND = "SUBNET_NOT_FOUND",
  USER_LOCKED_OUT = "USER_LOCKED_OUT",
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_NOT_FOUND = "USER_NOT_FOUND",
}

export enum ConnectionStateType {
  CONNECTED = "CONNECTED",
  CONNECTING = "CONNECTING",
  DISCONNECTED = "DISCONNECTED",
  DISCONNECTING = "DISCONNECTING",
  FAILED = "FAILED",
}

export interface CreateAliasRequest {
  /**
   * <p>Specifies the alias name. This value must begin with <code>alias/</code> followed by a
   *       name, such as <code>alias/ExampleAlias</code>. </p>
   *          <p>The <code>AliasName</code> value must be string of 1-256 characters. It can contain only alphanumeric characters,
   *       forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with <code>alias/aws/</code>. The <code>alias/aws/</code> prefix is reserved
   *       for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>Associates the alias with the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>. The KMS key must be
   *       in the same Amazon Web Services Region. </p>
   *          <p>A valid key ID is required. If you supply a null or empty string value, this operation
   *       returns an error.</p>
   *          <p>For help finding the key ID and ARN, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn">Finding the Key ID and
   *         ARN</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  TargetKeyId: string | undefined;
}

export namespace CreateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified alias name is not valid.</p>
 */
export interface InvalidAliasNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidAliasNameException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAliasNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidAliasNameException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateCustomKeyStoreRequest {
  /**
   * <p>Specifies a friendly name for the custom key store. The name must be unique in your Amazon Web Services account.</p>
   */
  CustomKeyStoreName: string | undefined;

  /**
   * <p>Identifies the CloudHSM cluster for the custom key store. Enter the cluster ID of any active
   *       CloudHSM cluster that is not already associated with a custom key store. To find the cluster ID,
   *       use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
   */
  CloudHsmClusterId: string | undefined;

  /**
   * <p>Enter the content of the trust anchor certificate for the cluster. This is the content of
   *       the <code>customerCA.crt</code> file that you created when you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html">initialized the cluster</a>.</p>
   */
  TrustAnchorCertificate: string | undefined;

  /**
   * <p>Enter the password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
   *                <code>kmsuser</code> crypto user
   *         (CU) account</a> in the specified CloudHSM cluster. KMS logs into the cluster as this
   *       user to manage key material on your behalf.</p>
   *          <p>The password must be a string of 7 to 32 characters. Its value is case sensitive.</p>
   *          <p>This parameter tells KMS the <code>kmsuser</code> account password; it does not change
   *       the password in the CloudHSM cluster.</p>
   */
  KeyStorePassword: string | undefined;
}

export namespace CreateCustomKeyStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomKeyStoreRequest): any => ({
    ...obj,
    ...(obj.KeyStorePassword && { KeyStorePassword: SENSITIVE_STRING }),
  });
}

export interface CreateCustomKeyStoreResponse {
  /**
   * <p>A unique identifier for the new custom key store.</p>
   */
  CustomKeyStoreId?: string;
}

export namespace CreateCustomKeyStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomKeyStoreResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified custom key store name is already assigned
 *       to another custom key store in the account. Try again with a custom key store name that is
 *       unique in the account.</p>
 */
export interface CustomKeyStoreNameInUseException extends __SmithyException, $MetadataBearer {
  name: "CustomKeyStoreNameInUseException";
  $fault: "client";
  message?: string;
}

export namespace CustomKeyStoreNameInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomKeyStoreNameInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the trust anchor certificate in the request is not the
 *       trust anchor certificate for the specified CloudHSM cluster.</p>
 *          <p>When you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize the cluster</a>, you create the trust anchor certificate and save it in the
 *         <code>customerCA.crt</code> file.</p>
 */
export interface IncorrectTrustAnchorException extends __SmithyException, $MetadataBearer {
  name: "IncorrectTrustAnchorException";
  $fault: "client";
  message?: string;
}

export namespace IncorrectTrustAnchorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncorrectTrustAnchorException): any => ({
    ...obj,
  });
}

/**
 * <p>Use this structure to allow <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request
 *       includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. </p>
 *          <p>KMS applies the grant constraints only to cryptographic operations that support an
 *       encryption context, that is, all cryptographic operations with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#symmetric-cmks">symmetric KMS key</a>. Grant
 *       constraints are not applied to operations that do not support an encryption context, such as
 *       cryptographic operations with asymmetric KMS keys and management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p>
 *          <important>
 *             <p>In a cryptographic operation, the encryption context in the decryption operation must be
 *         an exact, case-sensitive match for the keys and values in the encryption context of the
 *         encryption operation. Only the order of the pairs can vary.</p>
 *             <p>However, in a grant constraint, the key in each key-value pair is not case sensitive,
 *         but the value is case sensitive.</p>
 *             <p>To avoid confusion, do not use multiple encryption context pairs that differ only by
 *         case. To require a fully case-sensitive encryption context, use the
 *           <code>kms:EncryptionContext:</code> and <code>kms:EncryptionContextKeys</code> conditions
 *         in an IAM or key policy. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context">kms:EncryptionContext:</a> in the <i>
 *                   <i>Key Management Service Developer Guide</i>
 *                </i>.</p>
 *          </important>
 */
export interface GrantConstraints {
  /**
   * <p>A list of key-value pairs that must be included in the encryption context of the
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> request. The grant allows the cryptographic operation only when the encryption
   *       context in the request includes the key-value pairs specified in this constraint, although it
   *       can include additional key-value pairs.</p>
   */
  EncryptionContextSubset?: { [key: string]: string };

  /**
   * <p>A list of key-value pairs that must match the encryption context in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a>
   *       request. The grant allows the operation only when the encryption context in the request is the
   *       same as the encryption context specified in this constraint.</p>
   */
  EncryptionContextEquals?: { [key: string]: string };
}

export namespace GrantConstraints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantConstraints): any => ({
    ...obj,
  });
}

export enum GrantOperation {
  CreateGrant = "CreateGrant",
  Decrypt = "Decrypt",
  DescribeKey = "DescribeKey",
  Encrypt = "Encrypt",
  GenerateDataKey = "GenerateDataKey",
  GenerateDataKeyPair = "GenerateDataKeyPair",
  GenerateDataKeyPairWithoutPlaintext = "GenerateDataKeyPairWithoutPlaintext",
  GenerateDataKeyWithoutPlaintext = "GenerateDataKeyWithoutPlaintext",
  GetPublicKey = "GetPublicKey",
  ReEncryptFrom = "ReEncryptFrom",
  ReEncryptTo = "ReEncryptTo",
  RetireGrant = "RetireGrant",
  Sign = "Sign",
  Verify = "Verify",
}

export interface CreateGrantRequest {
  /**
   * <p>Identifies the KMS key for the grant. The grant gives principals permission to use this KMS key.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key. To specify a KMS key in a
   * different Amazon Web Services account, you must use the key ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The identity that gets the permissions specified in the grant.</p>
   *          <p>To specify the principal, use the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, IAM roles, federated
   *       users, and assumed role users. For examples of the ARN syntax to use for specifying a
   *       principal, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access
   *         Management (IAM)</a> in the Example ARNs section of the <i>Amazon Web Services General
   *           Reference</i>.</p>
   */
  GranteePrincipal: string | undefined;

  /**
   * <p>The principal that has permission to use the <a>RetireGrant</a> operation to
   *       retire the grant. </p>
   *          <p>To specify the principal, use the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, federated users, and
   *       assumed role users. For examples of the ARN syntax to use for specifying a principal, see
   *       <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access Management (IAM)</a> in the Example ARNs section of the
   *       <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The grant determines the retiring principal. Other principals might have permission to
   *       retire the grant or revoke the grant. For details, see <a>RevokeGrant</a> and
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>. </p>
   */
  RetiringPrincipal?: string;

  /**
   * <p>A list of operations that the grant permits. </p>
   *          <p>The operation must be supported on the KMS key. For example, you cannot create a grant for a
   *       symmetric KMS key that allows the <a>Sign</a> operation, or a grant for an asymmetric KMS key that allows the <a>GenerateDataKey</a> operation. If you try, KMS returns a
   *       <code>ValidationError</code> exception. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations">Grant operations</a> in the
   *       <i>Key Management Service Developer Guide</i>.</p>
   */
  Operations: (GrantOperation | string)[] | undefined;

  /**
   * <p>Specifies a grant constraint. </p>
   *          <p>KMS supports the <code>EncryptionContextEquals</code> and
   *       <code>EncryptionContextSubset</code> grant constraints. Each constraint value can include up
   *       to 8 encryption context pairs. The encryption context value in each constraint cannot exceed
   *       384 characters.</p>
   *          <p>These grant constraints allow the permissions in the grant only when the encryption
   *       context in the request matches (<code>EncryptionContextEquals</code>) or includes
   *       (<code>EncryptionContextSubset</code>) the encryption context specified in this structure.
   *       For information about grant constraints, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-grant-overview.html#grant-constraints">Using grant
   *         constraints</a> in the <i>Key Management Service Developer Guide</i>. For more information about encryption context,
   *       see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>. </p>
   *          <p>The encryption context grant constraints are supported only on operations that include an
   *       encryption context. You cannot use an encryption context grant constraint for cryptographic
   *       operations with asymmetric KMS keys or for management operations, such as <a>DescribeKey</a> or <a>RetireGrant</a>.</p>
   */
  Constraints?: GrantConstraints;

  /**
   * <p>A list of grant tokens. </p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];

  /**
   * <p>A friendly name for the grant. Use this value to prevent the unintended
   *       creation of duplicate grants when retrying this request.</p>
   *          <p>When this value is absent, all <code>CreateGrant</code> requests result in a new grant
   *       with a unique <code>GrantId</code> even if all the supplied parameters are identical. This can
   *       result in unintended duplicates when you retry the <code>CreateGrant</code> request.</p>
   *          <p>When this value is present, you can retry a <code>CreateGrant</code> request with
   *       identical parameters; if the grant already exists, the original <code>GrantId</code> is
   *       returned without creating a new grant. Note that the returned grant token is unique with every
   *       <code>CreateGrant</code> request, even when a duplicate <code>GrantId</code> is returned.
   *       All grant tokens for the same grant ID can be used interchangeably.</p>
   */
  Name?: string;
}

export namespace CreateGrantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGrantRequest): any => ({
    ...obj,
  });
}

export interface CreateGrantResponse {
  /**
   * <p>The grant token.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantToken?: string;

  /**
   * <p>The unique identifier for the grant.</p>
   *          <p>You can use the <code>GrantId</code> in a <a>ListGrants</a>, <a>RetireGrant</a>, or <a>RevokeGrant</a> operation.</p>
   */
  GrantId?: string;
}

export namespace CreateGrantResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGrantResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified KMS key is not enabled.</p>
 */
export interface DisabledException extends __SmithyException, $MetadataBearer {
  name: "DisabledException";
  $fault: "client";
  message?: string;
}

export namespace DisabledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisabledException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified grant token is not valid.</p>
 */
export interface InvalidGrantTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidGrantTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidGrantTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidGrantTokenException): any => ({
    ...obj,
  });
}

export enum CustomerMasterKeySpec {
  ECC_NIST_P256 = "ECC_NIST_P256",
  ECC_NIST_P384 = "ECC_NIST_P384",
  ECC_NIST_P521 = "ECC_NIST_P521",
  ECC_SECG_P256K1 = "ECC_SECG_P256K1",
  RSA_2048 = "RSA_2048",
  RSA_3072 = "RSA_3072",
  RSA_4096 = "RSA_4096",
  SYMMETRIC_DEFAULT = "SYMMETRIC_DEFAULT",
}

export enum KeySpec {
  ECC_NIST_P256 = "ECC_NIST_P256",
  ECC_NIST_P384 = "ECC_NIST_P384",
  ECC_NIST_P521 = "ECC_NIST_P521",
  ECC_SECG_P256K1 = "ECC_SECG_P256K1",
  RSA_2048 = "RSA_2048",
  RSA_3072 = "RSA_3072",
  RSA_4096 = "RSA_4096",
  SYMMETRIC_DEFAULT = "SYMMETRIC_DEFAULT",
}

export enum KeyUsageType {
  ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT",
  SIGN_VERIFY = "SIGN_VERIFY",
}

export enum OriginType {
  AWS_CLOUDHSM = "AWS_CLOUDHSM",
  AWS_KMS = "AWS_KMS",
  EXTERNAL = "EXTERNAL",
}

/**
 * <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are
 *       both required, but tag values can be empty (null) strings.</p>
 *          <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User
 *         Guide</i>.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  TagKey: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  TagValue: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateKeyRequest {
  /**
   * <p>The key policy to attach to the KMS key.</p>
   *          <p>If you provide a key policy, it must meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't set <code>BypassPolicyLockoutSafetyCheck</code> to true, the key policy
   *           must allow the principal that is making the <code>CreateKey</code> request to make a
   *           subsequent <a>PutKeyPolicy</a> request on the KMS key. This reduces the risk that
   *           the KMS key becomes unmanageable. For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i>
   *                      <i>Key Management Service Developer Guide</i>
   *                   </i>.</p>
   *             </li>
   *             <li>
   *                <p>Each statement in the key policy must contain one or more principals. The principals
   *           in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal
   *           (for example, an IAM user or role), you might need to enforce a delay before including the
   *           new principal in a key policy because the new principal might not be immediately visible
   *           to KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For
   *       more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default Key Policy</a> in the
   *       <i>Key Management Service Developer Guide</i>. </p>
   *          <p>The key policy size quota is 32 kilobytes (32768 bytes).</p>
   *          <p>For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>
   *                <i>Identity and Access Management User Guide</i>
   *             </i>.</p>
   */
  Policy?: string;

  /**
   * <p>A description of the KMS key.</p>
   *          <p>Use a description that helps you decide whether the KMS key is
   *       appropriate for a task. The default value is an empty string (no description).</p>
   *          <p>To set or change the description after the key is created, use <a>UpdateKeyDescription</a>.</p>
   */
  Description?: string;

  /**
   * <p>Determines the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> for which you can use the KMS key. The default value is
   *         <code>ENCRYPT_DECRYPT</code>. This parameter is required only for asymmetric KMS keys. You can't
   *       change the <code>KeyUsage</code> value after the KMS key is created.</p>
   *          <p>Select only one valid value.</p>
   *          <ul>
   *             <li>
   *                <p>For symmetric KMS keys, omit the parameter or specify <code>ENCRYPT_DECRYPT</code>.</p>
   *             </li>
   *             <li>
   *                <p>For asymmetric KMS keys with RSA key material, specify <code>ENCRYPT_DECRYPT</code> or
   *             <code>SIGN_VERIFY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For asymmetric KMS keys with ECC key material, specify <code>SIGN_VERIFY</code>.</p>
   *             </li>
   *          </ul>
   */
  KeyUsage?: KeyUsageType | string;

  /**
   * @deprecated
   *
   * <p>Instead, use the <code>KeySpec</code> parameter.</p>
   *          <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> parameters work the same way. Only the names differ. We recommend that you use <code>KeySpec</code> parameter in your code. However, to avoid breaking changes, KMS will support both parameters.</p>
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | string;

  /**
   * <p>Specifies the type of KMS key to create. The default value, <code>SYMMETRIC_DEFAULT</code>,
   *       creates a KMS key with a 256-bit symmetric key for encryption and decryption. For help choosing a
   *       key spec for your KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html">How to Choose Your KMS key
   *         Configuration</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>.</p>
   *          <p>The <code>KeySpec</code> determines whether the KMS key contains a symmetric key or an
   *       asymmetric key pair. It also determines the encryption algorithms or signing algorithms that
   *       the KMS key supports. You can't change the <code>KeySpec</code> after the KMS key is created.
   *       To further restrict the algorithms that can be used with the KMS key, use a condition key in
   *       its key policy or IAM policy. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm">kms:EncryptionAlgorithm</a> or <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm">kms:Signing Algorithm</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>.</p>
   *          <important>
   *             <p>
   *                <a href="http://aws.amazon.com/kms/features/#AWS_Service_Integration">Amazon Web Services services that
   *         are integrated with KMS</a> use symmetric KMS keys to protect your data. These
   *         services do not support asymmetric KMS keys. For help determining whether a KMS key is symmetric or
   *         asymmetric, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html">Identifying Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer
   *             Guide</i>.</p>
   *          </important>
   *          <p>KMS supports the following key specs for KMS keys:</p>
   *          <ul>
   *             <li>
   *                <p>Symmetric key (default)</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>SYMMETRIC_DEFAULT</code> (AES-256-GCM)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Asymmetric RSA key pairs</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RSA_2048</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RSA_3072</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RSA_4096</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Asymmetric NIST-recommended elliptic curve key pairs</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ECC_NIST_P256</code> (secp256r1)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ECC_NIST_P384</code> (secp384r1)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ECC_NIST_P521</code> (secp521r1)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Other asymmetric elliptic curve key pairs</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ECC_SECG_P256K1</code> (secp256k1), commonly used for
   *               cryptocurrencies.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  KeySpec?: KeySpec | string;

  /**
   * <p>The source of the key material for the KMS key. You cannot change the origin after you create
   *       the KMS key. The default is <code>AWS_KMS</code>, which means that KMS creates the key
   *       material.</p>
   *          <p>To create a KMS key with no key material (for imported key material), set the value to
   *         <code>EXTERNAL</code>. For more information about importing key material into KMS, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key
   *         Material</a> in the <i>Key Management Service Developer Guide</i>. This value is valid only for symmetric KMS keys.</p>
   *          <p>To create a KMS key in an KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> and create its key material in the associated
   *       CloudHSM cluster, set this value to <code>AWS_CLOUDHSM</code>. You must also use the
   *         <code>CustomKeyStoreId</code> parameter to identify the custom key store. This value is
   *       valid only for symmetric KMS keys.</p>
   */
  Origin?: OriginType | string;

  /**
   * <p>Creates the KMS key in the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> and the key material in its associated
   *       CloudHSM cluster. To create a KMS key in a custom key store, you must also specify the
   *         <code>Origin</code> parameter with a value of <code>AWS_CLOUDHSM</code>. The CloudHSM cluster
   *       that is associated with the custom key store must have at least two active HSMs, each in a
   *       different Availability Zone in the Region.</p>
   *          <p>This parameter is valid only for symmetric KMS keys and regional KMS keys. You cannot create an
   *       asymmetric KMS key or a multi-Region key in a custom key store.</p>
   *          <p>To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   *          <p>The response includes the custom key store ID and the ID of the CloudHSM cluster.</p>
   *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which
   * combines the convenience and extensive integration of KMS with the isolation and control of a
   * single-tenant key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not
   *         set this value to true indiscriminately.</p>
   *             <p>For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>
   *                   <i>Key Management Service Developer Guide</i>
   *                </i>.</p>
   *          </important>
   *          <p>Use this parameter only when you include a policy in the request and you intend to prevent
   *       the principal that is making the request from making a subsequent <a>PutKeyPolicy</a> request on the KMS key.</p>
   *          <p>The default value is false.</p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * <p>Assigns one or more tags to the KMS key. Use this parameter to tag the KMS key when it is created.
   *       To tag an existing KMS key, use the <a>TagResource</a> operation.</p>
   *          <note>
   *             <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          </note>
   *          <p>To use this parameter, you must have <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> permission in an IAM policy.</p>
   *          <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are
   *       required, but the tag value can be an empty (null) string. You cannot have more than one tag
   *       on a KMS key with the same tag key. If you specify an existing tag key with a different tag value,
   *       KMS replaces the current tag value with the specified one.</p>
   *          <p>When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation
   *               report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details,
   *               see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging Keys</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You
   *       cannot change this value after you create the KMS key. </p>
   *          <p>For a multi-Region key, set this parameter to <code>True</code>. For a single-Region KMS key,
   *       omit this parameter or set it to <code>False</code>. The default value is
   *       <code>False</code>.</p>
   *          <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
   *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
   *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
   *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>This value creates a <i>primary key</i>, not a replica. To create a
   *         <i>replica key</i>, use the <a>ReplicateKey</a> operation. </p>
   *          <p>You can create a symmetric or asymmetric multi-Region key, and you can create a
   *       multi-Region key with imported key material. However, you cannot create a multi-Region key in
   *       a custom key store.</p>
   */
  MultiRegion?: boolean;
}

export namespace CreateKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyRequest): any => ({
    ...obj,
  });
}

export enum EncryptionAlgorithmSpec {
  RSAES_OAEP_SHA_1 = "RSAES_OAEP_SHA_1",
  RSAES_OAEP_SHA_256 = "RSAES_OAEP_SHA_256",
  SYMMETRIC_DEFAULT = "SYMMETRIC_DEFAULT",
}

export enum ExpirationModelType {
  KEY_MATERIAL_DOES_NOT_EXPIRE = "KEY_MATERIAL_DOES_NOT_EXPIRE",
  KEY_MATERIAL_EXPIRES = "KEY_MATERIAL_EXPIRES",
}

export enum KeyManagerType {
  AWS = "AWS",
  CUSTOMER = "CUSTOMER",
}

export enum KeyState {
  Creating = "Creating",
  Disabled = "Disabled",
  Enabled = "Enabled",
  PendingDeletion = "PendingDeletion",
  PendingImport = "PendingImport",
  PendingReplicaDeletion = "PendingReplicaDeletion",
  Unavailable = "Unavailable",
  Updating = "Updating",
}

export enum MultiRegionKeyType {
  PRIMARY = "PRIMARY",
  REPLICA = "REPLICA",
}

/**
 * <p>Describes the primary or replica key in a multi-Region key.</p>
 */
export interface MultiRegionKey {
  /**
   * <p>Displays the key ARN of a primary or replica key of a multi-Region key.</p>
   */
  Arn?: string;

  /**
   * <p>Displays the Amazon Web Services Region of a primary or replica key in a multi-Region key.</p>
   */
  Region?: string;
}

export namespace MultiRegionKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiRegionKey): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key
 *       is a primary or replica of a multi-Region key.</p>
 *          <p>For more information about any listed KMS key, use the <a>DescribeKey</a>
 *       operation.</p>
 */
export interface MultiRegionConfiguration {
  /**
   * <p>Indicates whether the KMS key is a <code>PRIMARY</code> or <code>REPLICA</code> key.</p>
   */
  MultiRegionKeyType?: MultiRegionKeyType | string;

  /**
   * <p>Displays the key ARN and Region of the primary key. This field includes the current KMS key if
   *       it is the primary key.</p>
   */
  PrimaryKey?: MultiRegionKey;

  /**
   * <p>displays the key ARNs and Regions of all replica keys. This field includes the current KMS key
   *       if it is a replica key.</p>
   */
  ReplicaKeys?: MultiRegionKey[];
}

export namespace MultiRegionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiRegionConfiguration): any => ({
    ...obj,
  });
}

export enum SigningAlgorithmSpec {
  ECDSA_SHA_256 = "ECDSA_SHA_256",
  ECDSA_SHA_384 = "ECDSA_SHA_384",
  ECDSA_SHA_512 = "ECDSA_SHA_512",
  RSASSA_PKCS1_V1_5_SHA_256 = "RSASSA_PKCS1_V1_5_SHA_256",
  RSASSA_PKCS1_V1_5_SHA_384 = "RSASSA_PKCS1_V1_5_SHA_384",
  RSASSA_PKCS1_V1_5_SHA_512 = "RSASSA_PKCS1_V1_5_SHA_512",
  RSASSA_PSS_SHA_256 = "RSASSA_PSS_SHA_256",
  RSASSA_PSS_SHA_384 = "RSASSA_PSS_SHA_384",
  RSASSA_PSS_SHA_512 = "RSASSA_PSS_SHA_512",
}

/**
 * <p>Contains metadata about a KMS key.</p>
 *          <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
 */
export interface KeyMetadata {
  /**
   * <p>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>The globally unique identifier for the KMS key.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. For examples, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Key Management Service
   *         (KMS)</a> in the Example ARNs section of the <i>Amazon Web Services General
   *         Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time when the KMS key was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Specifies whether the KMS key is enabled. When <code>KeyState</code> is <code>Enabled</code>
   *       this value is true, otherwise it is false.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The description of the KMS key.</p>
   */
  Description?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> for which you can use the KMS key.</p>
   */
  KeyUsage?: KeyUsageType | string;

  /**
   * <p>The current status of the KMS key.</p>
   *          <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a>
   *       in the <i>Key Management Service Developer Guide</i>.</p>
   */
  KeyState?: KeyState | string;

  /**
   * <p>The date and time after which KMS deletes this KMS key. This value is present only when the KMS key is scheduled for deletion, that is, when its <code>KeyState</code> is
   *         <code>PendingDeletion</code>.</p>
   *          <p>When the primary key in a multi-Region key is scheduled for deletion but still has replica
   *       keys, its key state is <code>PendingReplicaDeletion</code> and the length of its waiting
   *       period is displayed in the <code>PendingDeletionWindowInDays</code> field.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The time at which the imported key material expires. When the key material expires, KMS
   *       deletes the key material and the KMS key becomes unusable. This value is present only for KMS keys
   *       whose <code>Origin</code> is <code>EXTERNAL</code> and whose <code>ExpirationModel</code> is
   *         <code>KEY_MATERIAL_EXPIRES</code>, otherwise this value is omitted.</p>
   */
  ValidTo?: Date;

  /**
   * <p>The source of the key material for the KMS key. When this value is <code>AWS_KMS</code>, KMS
   *       created the key material. When this value is <code>EXTERNAL</code>, the key material was
   *       imported or the KMS key doesn't have any key material. When
   *       this value is <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster
   *       associated with a custom key store.</p>
   */
  Origin?: OriginType | string;

  /**
   * <p>A unique identifier for the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> that contains the KMS key. This value is present
   *       only when the KMS key is created in a custom key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>The cluster ID of the CloudHSM cluster that contains the key material for the KMS key. When you
   *       create a KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, KMS creates the key material for the KMS key in the
   *       associated CloudHSM cluster. This value is present only when the KMS key is created in a custom key
   *       store.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>Specifies whether the KMS key's key material expires. This value is present only when
   *         <code>Origin</code> is <code>EXTERNAL</code>, otherwise this value is omitted.</p>
   */
  ExpirationModel?: ExpirationModelType | string;

  /**
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed. For more information about the difference, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a> in the
   *       <i>Key Management Service Developer Guide</i>.</p>
   */
  KeyManager?: KeyManagerType | string;

  /**
   * @deprecated
   *
   * <p>Instead, use the <code>KeySpec</code> field.</p>
   *          <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> fields have the same value. We recommend that you use the <code>KeySpec</code> field in your code. However, to avoid breaking changes, KMS will support both fields.</p>
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | string;

  /**
   * <p>Describes the type of key material in the KMS key.</p>
   */
  KeySpec?: KeySpec | string;

  /**
   * <p>The encryption algorithms that the KMS key supports. You cannot use the KMS key with other
   *       encryption algorithms within KMS.</p>
   *          <p>This value is present only when the <code>KeyUsage</code> of the KMS key is
   *         <code>ENCRYPT_DECRYPT</code>.</p>
   */
  EncryptionAlgorithms?: (EncryptionAlgorithmSpec | string)[];

  /**
   * <p>The signing algorithms that the KMS key supports. You cannot use the KMS key with other signing
   *       algorithms within KMS.</p>
   *          <p>This field appears only when the <code>KeyUsage</code> of the KMS key is
   *         <code>SIGN_VERIFY</code>.</p>
   */
  SigningAlgorithms?: (SigningAlgorithmSpec | string)[];

  /**
   * <p>Indicates whether the KMS key is a multi-Region (<code>True</code>) or regional
   *         (<code>False</code>) key. This value is <code>True</code> for multi-Region primary and
   *       replica keys and <code>False</code> for regional KMS keys.</p>
   *          <p>For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  MultiRegion?: boolean;

  /**
   * <p>Lists the primary and replica keys in same multi-Region key. This field is present only
   *       when the value of the <code>MultiRegion</code> field is <code>True</code>.</p>
   *          <p>For more information about any listed KMS key, use the <a>DescribeKey</a>
   *       operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MultiRegionKeyType</code> indicates whether the KMS key is a <code>PRIMARY</code> or
   *             <code>REPLICA</code> key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PrimaryKey</code> displays the key ARN and Region of the primary key. This field
   *           displays the current KMS key if it is the primary key.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplicaKeys</code> displays the key ARNs and Regions of all replica keys. This
   *           field includes the current KMS key if it is a replica key.</p>
   *             </li>
   *          </ul>
   */
  MultiRegionConfiguration?: MultiRegionConfiguration;

  /**
   * <p>The waiting period before the primary key in a multi-Region key is deleted. This waiting
   *       period begins when the last of its replica keys is deleted. This value is present only when
   *       the <code>KeyState</code> of the KMS key is <code>PendingReplicaDeletion</code>. That indicates
   *       that the KMS key is the primary key in a multi-Region key, it is scheduled for deletion, and it
   *       still has existing replica keys.</p>
   *          <p>When a single-Region KMS key or a multi-Region replica key is scheduled for deletion, its
   *       deletion date is displayed in the <code>DeletionDate</code> field. However, when the primary
   *       key in a multi-Region key is scheduled for deletion, its waiting period doesn't begin until
   *       all of its replica keys are deleted. This value displays that waiting period. When the last
   *       replica key in the multi-Region key is deleted, the <code>KeyState</code> of the scheduled
   *       primary key changes from <code>PendingReplicaDeletion</code> to <code>PendingDeletion</code>
   *       and the deletion date appears in the <code>DeletionDate</code> field.</p>
   */
  PendingDeletionWindowInDays?: number;
}

export namespace KeyMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyMetadata): any => ({
    ...obj,
  });
}

export interface CreateKeyResponse {
  /**
   * <p>Metadata associated with the KMS key.</p>
   */
  KeyMetadata?: KeyMetadata;
}

export namespace CreateKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified policy is not syntactically or semantically
 *       correct.</p>
 */
export interface MalformedPolicyDocumentException extends __SmithyException, $MetadataBearer {
  name: "MalformedPolicyDocumentException";
  $fault: "client";
  message?: string;
}

export namespace MalformedPolicyDocumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MalformedPolicyDocumentException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because one or more tags are not valid.</p>
 */
export interface TagException extends __SmithyException, $MetadataBearer {
  name: "TagException";
  $fault: "client";
  message?: string;
}

export namespace TagException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the custom key store contains KMS keys. After verifying that you do not need to use the KMS keys, use the <a>ScheduleKeyDeletion</a> operation to delete the KMS keys. After they are deleted, you
 *       can delete the custom key store.</p>
 */
export interface CustomKeyStoreHasCMKsException extends __SmithyException, $MetadataBearer {
  name: "CustomKeyStoreHasCMKsException";
  $fault: "client";
  message?: string;
}

export namespace CustomKeyStoreHasCMKsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomKeyStoreHasCMKsException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about each custom key store in the custom key store list.</p>
 */
export interface CustomKeyStoresListEntry {
  /**
   * <p>A unique identifier for the custom key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>The user-specified friendly name for the custom key store.</p>
   */
  CustomKeyStoreName?: string;

  /**
   * <p>A unique identifier for the CloudHSM cluster that is associated with the custom key
   *       store.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>The trust anchor certificate of the associated CloudHSM cluster. When you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize the
   *         cluster</a>, you create this certificate and save it in the <code>customerCA.crt</code>
   *       file.</p>
   */
  TrustAnchorCertificate?: string;

  /**
   * <p>Indicates whether the custom key store is connected to its CloudHSM cluster.</p>
   *          <p>You can create and use KMS keys in your custom key stores only when its connection state is
   *         <code>CONNECTED</code>.</p>
   *          <p>The value is <code>DISCONNECTED</code> if the key store has never been connected or you
   *       use the <a>DisconnectCustomKeyStore</a> operation to disconnect it. If the value is
   *         <code>CONNECTED</code> but you are having trouble using the custom key store, make sure that
   *       its associated CloudHSM cluster is active and contains at least one active HSM.</p>
   *          <p>A value of <code>FAILED</code> indicates that an attempt to connect was unsuccessful. The
   *         <code>ConnectionErrorCode</code> field in the response indicates the cause of the failure.
   *       For help resolving a connection failure, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the
   *       <i>Key Management Service Developer Guide</i>.</p>
   */
  ConnectionState?: ConnectionStateType | string;

  /**
   * <p>Describes the connection error. This field appears in the response only when the
   *         <code>ConnectionState</code> is <code>FAILED</code>. For help resolving these errors, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed">How to
   *         Fix a Connection Failure</a> in <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLUSTER_NOT_FOUND</code> - KMS cannot find the CloudHSM cluster with the
   *           specified cluster ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CLOUDHSM_HSMS</code> - The associated CloudHSM cluster does not
   *           contain any active HSMs. To connect a custom key store to its CloudHSM cluster, the cluster
   *           must contain at least one active HSM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code> - KMS could not complete the request due to an internal
   *           error. Retry the request. For <code>ConnectCustomKeyStore</code> requests, disconnect the
   *           custom key store before trying to connect again.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_CREDENTIALS</code> - KMS does not have the correct password for the
   *             <code>kmsuser</code> crypto user in the CloudHSM cluster. Before you can connect your
   *           custom key store to its CloudHSM cluster, you must change the <code>kmsuser</code> account
   *           password and update the key store password value for the custom key store.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_ERRORS</code> - Network errors are preventing KMS from connecting to
   *           the custom key store.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBNET_NOT_FOUND</code> - A subnet in the CloudHSM cluster configuration was
   *           deleted. If KMS cannot find all of the subnets in the cluster configuration, attempts to
   *           connect the custom key store to the CloudHSM cluster fail. To fix this error, create a
   *           cluster from a recent backup and associate it with your custom key store. (This process
   *           creates a new cluster configuration with a VPC and private subnets.) For details, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed">How
   *             to Fix a Connection Failure</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_LOCKED_OUT</code> - The <code>kmsuser</code> CU account is locked out of
   *           the associated CloudHSM cluster due to too many failed password attempts. Before you can
   *           connect your custom key store to its CloudHSM cluster, you must change the
   *             <code>kmsuser</code> account password and update the key store password value for the
   *           custom key store.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_LOGGED_IN</code> - The <code>kmsuser</code> CU account is logged into the
   *           the associated CloudHSM cluster. This prevents KMS from rotating the <code>kmsuser</code>
   *           account password and logging into the cluster. Before you can connect your custom key
   *           store to its CloudHSM cluster, you must log the <code>kmsuser</code> CU out of the cluster.
   *           If you changed the <code>kmsuser</code> password to log into the cluster, you must also
   *           and update the key store password value for the custom key store. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#login-kmsuser-2">How to Log Out
   *             and Reconnect</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_NOT_FOUND</code> - KMS cannot find a <code>kmsuser</code> CU account in
   *           the associated CloudHSM cluster. Before you can connect your custom key store to its CloudHSM
   *           cluster, you must create a <code>kmsuser</code> CU account in the cluster, and then update
   *           the key store password value for the custom key store.</p>
   *             </li>
   *          </ul>
   */
  ConnectionErrorCode?: ConnectionErrorCodeType | string;

  /**
   * <p>The date and time when the custom key store was created.</p>
   */
  CreationDate?: Date;
}

export namespace CustomKeyStoresListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomKeyStoresListEntry): any => ({
    ...obj,
  });
}

export enum DataKeyPairSpec {
  ECC_NIST_P256 = "ECC_NIST_P256",
  ECC_NIST_P384 = "ECC_NIST_P384",
  ECC_NIST_P521 = "ECC_NIST_P521",
  ECC_SECG_P256K1 = "ECC_SECG_P256K1",
  RSA_2048 = "RSA_2048",
  RSA_3072 = "RSA_3072",
  RSA_4096 = "RSA_4096",
}

export enum DataKeySpec {
  AES_128 = "AES_128",
  AES_256 = "AES_256",
}

export interface DecryptRequest {
  /**
   * <p>Ciphertext to be decrypted. The blob includes metadata.</p>
   */
  CiphertextBlob: Uint8Array | undefined;

  /**
   * <p>Specifies the encryption context to use when decrypting the data.
   *       An encryption context is valid only for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> with a symmetric KMS key. The standard asymmetric encryption algorithms that KMS uses do not support an encryption context.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: { [key: string]: string };

  /**
   * <p>A list of grant tokens. </p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];

  /**
   * <p>Specifies the KMS key that KMS uses to decrypt the ciphertext. Enter a
   *       key ID of the KMS key that was used to encrypt the ciphertext. </p>
   *
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.
   *       If you used a symmetric KMS key, KMS can get the KMS key from metadata that it adds to the
   *       symmetric ciphertext blob. However, it is always recommended as a best practice. This practice
   *       ensures that you use the KMS key that you intend.</p>
   *
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId?: string;

  /**
   * <p>Specifies the encryption algorithm that will be used to decrypt the ciphertext. Specify
   *       the same algorithm that was used to encrypt the data. If you specify a different algorithm,
   *       the <code>Decrypt</code> operation fails.</p>
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.
   *       The default value, <code>SYMMETRIC_DEFAULT</code>, represents the only supported algorithm
   *       that is valid for symmetric KMS keys.</p>
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
}

export namespace DecryptRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecryptRequest): any => ({
    ...obj,
  });
}

export interface DecryptResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that was used to decrypt the ciphertext.</p>
   */
  KeyId?: string;

  /**
   * <p>Decrypted plaintext data. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  Plaintext?: Uint8Array;

  /**
   * <p>The encryption algorithm that was used to decrypt the ciphertext.</p>
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
}

export namespace DecryptResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecryptResponse): any => ({
    ...obj,
    ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
  });
}

/**
 * <p>The request was rejected because the specified KMS key cannot decrypt the data. The
 *         <code>KeyId</code> in a <a>Decrypt</a> request and the <code>SourceKeyId</code>
 *       in a <a>ReEncrypt</a> request must identify the same KMS key that was used to encrypt
 *       the ciphertext.</p>
 */
export interface IncorrectKeyException extends __SmithyException, $MetadataBearer {
  name: "IncorrectKeyException";
  $fault: "client";
  message?: string;
}

export namespace IncorrectKeyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncorrectKeyException): any => ({
    ...obj,
  });
}

/**
 * <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
 */
export interface InvalidCiphertextException extends __SmithyException, $MetadataBearer {
  name: "InvalidCiphertextException";
  $fault: "client";
  message?: string;
}

export namespace InvalidCiphertextException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCiphertextException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected for one of the following reasons: </p>
 *          <ul>
 *             <li>
 *                <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *           incompatible with the type of key material in the KMS key
 *           <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying, the
 *         <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. To find the <code>KeyUsage</code> of
 *       a KMS key, use the <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the <a>DescribeKey</a> operation.</p>
 */
export interface InvalidKeyUsageException extends __SmithyException, $MetadataBearer {
  name: "InvalidKeyUsageException";
  $fault: "client";
  message?: string;
}

export namespace InvalidKeyUsageException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKeyUsageException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified KMS key was not available. You can retry the
 *       request.</p>
 */
export interface KeyUnavailableException extends __SmithyException, $MetadataBearer {
  name: "KeyUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace KeyUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyUnavailableException): any => ({
    ...obj,
  });
}

export interface DeleteAliasRequest {
  /**
   * <p>The alias to be deleted. The alias name must begin with <code>alias/</code> followed by
   *       the alias name, such as <code>alias/ExampleAlias</code>.</p>
   */
  AliasName: string | undefined;
}

export namespace DeleteAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomKeyStoreRequest {
  /**
   * <p>Enter the ID of the custom key store you want to delete. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;
}

export namespace DeleteCustomKeyStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomKeyStoreRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomKeyStoreResponse {}

export namespace DeleteCustomKeyStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomKeyStoreResponse): any => ({
    ...obj,
  });
}

export interface DeleteImportedKeyMaterialRequest {
  /**
   * <p>Identifies the KMS key from which you are deleting imported key material. The
   *         <code>Origin</code> of the KMS key must be <code>EXTERNAL</code>.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace DeleteImportedKeyMaterialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImportedKeyMaterialRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomKeyStoresRequest {
  /**
   * <p>Gets only information about the specified custom key store. Enter the key store ID.</p>
   *          <p>By default, this operation gets information about all custom key stores in the account and
   *       Region. To limit the output to a particular custom key store, you can use either the
   *         <code>CustomKeyStoreId</code> or <code>CustomKeyStoreName</code> parameter, but not
   *       both.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>Gets only information about the specified custom key store. Enter the friendly name of the
   *       custom key store.</p>
   *          <p>By default, this operation gets information about all custom key stores in the account and
   *       Region. To limit the output to a particular custom key store, you can use either the
   *         <code>CustomKeyStoreId</code> or <code>CustomKeyStoreName</code> parameter, but not
   *       both.</p>
   */
  CustomKeyStoreName?: string;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   */
  Marker?: string;
}

export namespace DescribeCustomKeyStoresRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomKeyStoresRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomKeyStoresResponse {
  /**
   * <p>Contains metadata about each custom key store.</p>
   */
  CustomKeyStores?: CustomKeyStoresListEntry[];

  /**
   * <p>When <code>Truncated</code> is true, this element is present and contains the
   *     value to use for the <code>Marker</code> parameter in a subsequent request.</p>
   */
  NextMarker?: string;

  /**
   * <p>A flag that indicates whether there are more items in the list. When this
   *     value is true, the list in this response is truncated. To get more items, pass the value of
   *     the <code>NextMarker</code> element in thisresponse to the <code>Marker</code> parameter in a
   *     subsequent request.</p>
   */
  Truncated?: boolean;
}

export namespace DescribeCustomKeyStoresResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomKeyStoresResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 */
export interface InvalidMarkerException extends __SmithyException, $MetadataBearer {
  name: "InvalidMarkerException";
  $fault: "client";
  message?: string;
}

export namespace InvalidMarkerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidMarkerException): any => ({
    ...obj,
  });
}

export interface DescribeKeyRequest {
  /**
   * <p>Describes the specified KMS key. </p>
   *          <p>If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), KMS associates the
   *       alias with an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html##aws-managed-cmk">Amazon Web Services managed key</a> and returns its <code>KeyId</code> and <code>Arn</code> in the
   *       response.</p>
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace DescribeKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKeyRequest): any => ({
    ...obj,
  });
}

export interface DescribeKeyResponse {
  /**
   * <p>Metadata associated with the key.</p>
   */
  KeyMetadata?: KeyMetadata;
}

export namespace DescribeKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeKeyResponse): any => ({
    ...obj,
  });
}

export interface DisableKeyRequest {
  /**
   * <p>Identifies the KMS key to disable.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace DisableKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableKeyRequest): any => ({
    ...obj,
  });
}

export interface DisableKeyRotationRequest {
  /**
   * <p>Identifies a symmetric KMS key. You cannot enable or disable automatic
   *       rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html#asymmetric-cmks">asymmetric KMS keys</a>, KMS keys
   *       with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key
   *         material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace DisableKeyRotationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableKeyRotationRequest): any => ({
    ...obj,
  });
}

export interface DisconnectCustomKeyStoreRequest {
  /**
   * <p>Enter the ID of the custom key store you want to disconnect. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;
}

export namespace DisconnectCustomKeyStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisconnectCustomKeyStoreRequest): any => ({
    ...obj,
  });
}

export interface DisconnectCustomKeyStoreResponse {}

export namespace DisconnectCustomKeyStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisconnectCustomKeyStoreResponse): any => ({
    ...obj,
  });
}

export interface EnableKeyRequest {
  /**
   * <p>Identifies the KMS key to enable.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace EnableKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableKeyRequest): any => ({
    ...obj,
  });
}

export interface EnableKeyRotationRequest {
  /**
   * <p>Identifies a symmetric KMS key. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-replica-key">multi-Region keys</a>, set the property on the primary key.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace EnableKeyRotationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableKeyRotationRequest): any => ({
    ...obj,
  });
}

export interface EncryptRequest {
  /**
   * <p>Identifies the KMS key to use in the encryption operation.</p>
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Data to be encrypted.</p>
   */
  Plaintext: Uint8Array | undefined;

  /**
   * <p>Specifies the encryption context that will be used to encrypt the data.
   *       An encryption context is valid only for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> with a symmetric KMS key. The standard asymmetric encryption algorithms that KMS uses do not support an encryption context. </p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: { [key: string]: string };

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];

  /**
   * <p>Specifies the encryption algorithm that KMS will use to encrypt the plaintext message.
   *       The algorithm must be compatible with the KMS key that you specify.</p>
   *          <p>This parameter is required only for asymmetric KMS keys. The default value,
   *         <code>SYMMETRIC_DEFAULT</code>, is the algorithm used for symmetric KMS keys. If you are using
   *       an asymmetric KMS key, we recommend RSAES_OAEP_SHA_256.</p>
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
}

export namespace EncryptRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptRequest): any => ({
    ...obj,
    ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
  });
}

export interface EncryptResponse {
  /**
   * <p>The encrypted plaintext. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  CiphertextBlob?: Uint8Array;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that was used to encrypt the plaintext.</p>
   */
  KeyId?: string;

  /**
   * <p>The encryption algorithm that was used to encrypt the plaintext.</p>
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
}

export namespace EncryptResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new
 *       public key to encrypt the key material, and then try the request again.</p>
 */
export interface ExpiredImportTokenException extends __SmithyException, $MetadataBearer {
  name: "ExpiredImportTokenException";
  $fault: "client";
  message?: string;
}

export namespace ExpiredImportTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpiredImportTokenException): any => ({
    ...obj,
  });
}

export interface GenerateDataKeyRequest {
  /**
   * <p>Identifies the symmetric KMS key that encrypts the data key.</p>
   *
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Specifies the encryption context that will be used when encrypting the data key.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: { [key: string]: string };

  /**
   * <p>Specifies the length of the data key in bytes. For example, use the value 64 to generate a
   *       512-bit data key (64 bytes is 512 bits). For 128-bit (16-byte) and 256-bit (32-byte) data
   *       keys, use the <code>KeySpec</code> parameter.</p>
   *          <p>You must specify either the <code>KeySpec</code> or the <code>NumberOfBytes</code>
   *       parameter (but not both) in every <code>GenerateDataKey</code> request.</p>
   */
  NumberOfBytes?: number;

  /**
   * <p>Specifies the length of the data key. Use <code>AES_128</code> to generate a 128-bit
   *       symmetric key, or <code>AES_256</code> to generate a 256-bit symmetric key.</p>
   *          <p>You must specify either the <code>KeySpec</code> or the <code>NumberOfBytes</code>
   *       parameter (but not both) in every <code>GenerateDataKey</code> request.</p>
   */
  KeySpec?: DataKeySpec | string;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace GenerateDataKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyRequest): any => ({
    ...obj,
  });
}

export interface GenerateDataKeyResponse {
  /**
   * <p>The encrypted copy of the data key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  CiphertextBlob?: Uint8Array;

  /**
   * <p>The plaintext data key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded. Use this data key to encrypt your data outside of
   *       KMS. Then, remove it from memory as soon as possible.</p>
   */
  Plaintext?: Uint8Array;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that encrypted the data key.</p>
   */
  KeyId?: string;
}

export namespace GenerateDataKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyResponse): any => ({
    ...obj,
    ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
  });
}

export interface GenerateDataKeyPairRequest {
  /**
   * <p>Specifies the encryption context that will be used when encrypting the private key in the
   *       data key pair.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: { [key: string]: string };

  /**
   * <p>Specifies the symmetric KMS key that encrypts the private key in the data key pair. You cannot
   *       specify an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation.</p>
   *
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Determines the type of data key pair that is generated. </p>
   *          <p>The KMS rule that restricts the use of asymmetric RSA KMS keys to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC KMS keys only to sign and verify, are not effective on data key pairs, which are used outside of KMS.</p>
   */
  KeyPairSpec: DataKeyPairSpec | string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace GenerateDataKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyPairRequest): any => ({
    ...obj,
  });
}

export interface GenerateDataKeyPairResponse {
  /**
   * <p>The encrypted copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  PrivateKeyCiphertextBlob?: Uint8Array;

  /**
   * <p>The plaintext copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  PrivateKeyPlaintext?: Uint8Array;

  /**
   * <p>The public key (in plaintext).</p>
   */
  PublicKey?: Uint8Array;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that encrypted the private key.</p>
   */
  KeyId?: string;

  /**
   * <p>The type of data key pair that was generated.</p>
   */
  KeyPairSpec?: DataKeyPairSpec | string;
}

export namespace GenerateDataKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyPairResponse): any => ({
    ...obj,
    ...(obj.PrivateKeyPlaintext && { PrivateKeyPlaintext: SENSITIVE_STRING }),
  });
}

export interface GenerateDataKeyPairWithoutPlaintextRequest {
  /**
   * <p>Specifies the encryption context that will be used when encrypting the private key in the
   *       data key pair.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: { [key: string]: string };

  /**
   * <p>Specifies the KMS key that encrypts the private key in the data key pair. You must specify a
   *       symmetric KMS key. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the
   *       type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p>
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Determines the type of data key pair that is generated.</p>
   *          <p>The KMS rule that restricts the use of asymmetric RSA KMS keys to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC KMS keys only to sign and verify, are not effective on data key pairs, which are used outside of KMS.</p>
   */
  KeyPairSpec: DataKeyPairSpec | string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace GenerateDataKeyPairWithoutPlaintextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyPairWithoutPlaintextRequest): any => ({
    ...obj,
  });
}

export interface GenerateDataKeyPairWithoutPlaintextResponse {
  /**
   * <p>The encrypted copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  PrivateKeyCiphertextBlob?: Uint8Array;

  /**
   * <p>The public key (in plaintext).</p>
   */
  PublicKey?: Uint8Array;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that encrypted the private key.</p>
   */
  KeyId?: string;

  /**
   * <p>The type of data key pair that was generated.</p>
   */
  KeyPairSpec?: DataKeyPairSpec | string;
}

export namespace GenerateDataKeyPairWithoutPlaintextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyPairWithoutPlaintextResponse): any => ({
    ...obj,
  });
}

export interface GenerateDataKeyWithoutPlaintextRequest {
  /**
   * <p>The identifier of the symmetric KMS key that encrypts the data
   *       key.</p>
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Specifies the encryption context that will be used when encrypting the data key.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: { [key: string]: string };

  /**
   * <p>The length of the data key. Use <code>AES_128</code> to generate a 128-bit symmetric key,
   *       or <code>AES_256</code> to generate a 256-bit symmetric key.</p>
   */
  KeySpec?: DataKeySpec | string;

  /**
   * <p>The length of the data key in bytes. For example, use the value 64 to generate a 512-bit
   *       data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys),
   *       we recommend that you use the <code>KeySpec</code> field instead of this one.</p>
   */
  NumberOfBytes?: number;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace GenerateDataKeyWithoutPlaintextRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyWithoutPlaintextRequest): any => ({
    ...obj,
  });
}

export interface GenerateDataKeyWithoutPlaintextResponse {
  /**
   * <p>The encrypted data key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  CiphertextBlob?: Uint8Array;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that encrypted the data key.</p>
   */
  KeyId?: string;
}

export namespace GenerateDataKeyWithoutPlaintextResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateDataKeyWithoutPlaintextResponse): any => ({
    ...obj,
  });
}

export interface GenerateRandomRequest {
  /**
   * <p>The length of the byte string.</p>
   */
  NumberOfBytes?: number;

  /**
   * <p>Generates the random byte string in the CloudHSM cluster that is associated with the
   *       specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId?: string;
}

export namespace GenerateRandomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateRandomRequest): any => ({
    ...obj,
  });
}

export interface GenerateRandomResponse {
  /**
   * <p>The random byte string. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  Plaintext?: Uint8Array;
}

export namespace GenerateRandomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GenerateRandomResponse): any => ({
    ...obj,
    ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
  });
}

export interface GetKeyPolicyRequest {
  /**
   * <p>Gets the key policy for the specified KMS key.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Specifies the name of the key policy. The only valid name is <code>default</code>. To get
   *       the names of key policies, use <a>ListKeyPolicies</a>.</p>
   */
  PolicyName: string | undefined;
}

export namespace GetKeyPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetKeyPolicyResponse {
  /**
   * <p>A key policy document in JSON format.</p>
   */
  Policy?: string;
}

export namespace GetKeyPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetKeyRotationStatusRequest {
  /**
   * <p>Gets the rotation status for the specified KMS key.</p>
   *          <p>Specify the key ID or key ARN of the KMS key. To specify a KMS key in a
   * different Amazon Web Services account, you must use the key ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;
}

export namespace GetKeyRotationStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyRotationStatusRequest): any => ({
    ...obj,
  });
}

export interface GetKeyRotationStatusResponse {
  /**
   * <p>A Boolean value that specifies whether key rotation is enabled.</p>
   */
  KeyRotationEnabled?: boolean;
}

export namespace GetKeyRotationStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKeyRotationStatusResponse): any => ({
    ...obj,
  });
}

export enum WrappingKeySpec {
  RSA_2048 = "RSA_2048",
}

export interface GetParametersForImportRequest {
  /**
   * <p>The identifier of the symmetric KMS key into which you will import key material. The
   *         <code>Origin</code> of the KMS key must be <code>EXTERNAL</code>.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The algorithm you will use to encrypt the key material before importing it with <a>ImportKeyMaterial</a>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-encrypt-key-material.html">Encrypt the Key Material</a>
   *       in the <i>Key Management Service Developer Guide</i>.</p>
   */
  WrappingAlgorithm: AlgorithmSpec | string | undefined;

  /**
   * <p>The type of wrapping key (public key) to return in the response. Only 2048-bit RSA public
   *       keys are supported.</p>
   */
  WrappingKeySpec: WrappingKeySpec | string | undefined;
}

export namespace GetParametersForImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParametersForImportRequest): any => ({
    ...obj,
  });
}

export interface GetParametersForImportResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key to use in a subsequent <a>ImportKeyMaterial</a>
   *       request. This is the same KMS key specified in the <code>GetParametersForImport</code>
   *       request.</p>
   */
  KeyId?: string;

  /**
   * <p>The import token to send in a subsequent <a>ImportKeyMaterial</a>
   *       request.</p>
   */
  ImportToken?: Uint8Array;

  /**
   * <p>The public key to use to encrypt the key material before importing it with <a>ImportKeyMaterial</a>.</p>
   */
  PublicKey?: Uint8Array;

  /**
   * <p>The time at which the import token and public key are no longer valid. After this time,
   *       you cannot use them to make an <a>ImportKeyMaterial</a> request and you must send
   *       another <code>GetParametersForImport</code> request to get new ones.</p>
   */
  ParametersValidTo?: Date;
}

export namespace GetParametersForImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetParametersForImportResponse): any => ({
    ...obj,
    ...(obj.PublicKey && { PublicKey: SENSITIVE_STRING }),
  });
}

export interface GetPublicKeyRequest {
  /**
   * <p>Identifies the asymmetric KMS key that includes the public key.</p>
   *
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace GetPublicKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPublicKeyRequest): any => ({
    ...obj,
  });
}

export interface GetPublicKeyResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the asymmetric KMS key from which the public key was downloaded.</p>
   */
  KeyId?: string;

  /**
   * <p>The exported public key. </p>
   *          <p>The value is a DER-encoded X.509 public key, also known as
   *         <code>SubjectPublicKeyInfo</code> (SPKI), as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   *          <p></p>
   */
  PublicKey?: Uint8Array;

  /**
   * @deprecated
   *
   * <p>Instead, use the <code>KeySpec</code> field in the <code>GetPublicKey</code> response.</p>
   *          <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> fields have the same value. We recommend that you use the <code>KeySpec</code> field in your code. However, to avoid breaking changes, KMS will support both fields.</p>
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | string;

  /**
   * <p>The type of the of the public key that was downloaded.</p>
   */
  KeySpec?: KeySpec | string;

  /**
   * <p>The permitted use of the public key. Valid values are <code>ENCRYPT_DECRYPT</code> or
   *         <code>SIGN_VERIFY</code>. </p>
   *          <p>This information is critical. If a public key with <code>SIGN_VERIFY</code> key usage
   *       encrypts data outside of KMS, the ciphertext cannot be decrypted. </p>
   */
  KeyUsage?: KeyUsageType | string;

  /**
   * <p>The encryption algorithms that KMS supports for this key. </p>
   *          <p>This information is critical. If a public key encrypts data outside of KMS by using an
   *       unsupported encryption algorithm, the ciphertext cannot be decrypted. </p>
   *          <p>This field appears in the response only when the <code>KeyUsage</code> of the public key
   *       is <code>ENCRYPT_DECRYPT</code>.</p>
   */
  EncryptionAlgorithms?: (EncryptionAlgorithmSpec | string)[];

  /**
   * <p>The signing algorithms that KMS supports for this key.</p>
   *          <p>This field appears in the response only when the <code>KeyUsage</code> of the public key
   *       is <code>SIGN_VERIFY</code>.</p>
   */
  SigningAlgorithms?: (SigningAlgorithmSpec | string)[];
}

export namespace GetPublicKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPublicKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a grant.</p>
 */
export interface GrantListEntry {
  /**
   * <p>The unique identifier for the KMS key to which the grant applies.</p>
   */
  KeyId?: string;

  /**
   * <p>The unique identifier for the grant.</p>
   */
  GrantId?: string;

  /**
   * <p>The friendly name that identifies the grant. If a name was provided in the <a>CreateGrant</a> request, that name is returned. Otherwise this value is null.</p>
   */
  Name?: string;

  /**
   * <p>The date and time when the grant was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The identity that gets the permissions in the grant.</p>
   *          <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the
   *         user or role designated as the grantee principal in the grant. However, when the grantee
   *         principal in the grant is an Amazon Web Services service, the <code>GranteePrincipal</code> field contains
   *         the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service
   *           principal</a>, which might represent several different grantee principals.</p>
   */
  GranteePrincipal?: string;

  /**
   * <p>The principal that can retire the grant.</p>
   */
  RetiringPrincipal?: string;

  /**
   * <p>The Amazon Web Services account under which the grant was issued.</p>
   */
  IssuingAccount?: string;

  /**
   * <p>The list of operations permitted by the grant.</p>
   */
  Operations?: (GrantOperation | string)[];

  /**
   * <p>A list of key-value pairs that must be present in the encryption context of certain
   *       subsequent operations that the grant allows.</p>
   */
  Constraints?: GrantConstraints;
}

export namespace GrantListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantListEntry): any => ({
    ...obj,
  });
}

export interface ImportKeyMaterialRequest {
  /**
   * <p>The identifier of the symmetric KMS key that receives the imported key material. The KMS key's
   *         <code>Origin</code> must be <code>EXTERNAL</code>. This must be the same KMS key specified in
   *       the <code>KeyID</code> parameter of the corresponding <a>GetParametersForImport</a>
   *       request.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The import token that you received in the response to a previous <a>GetParametersForImport</a> request. It must be from the same response that contained
   *       the public key that you used to encrypt the key material.</p>
   */
  ImportToken: Uint8Array | undefined;

  /**
   * <p>The encrypted key material to import. The key material must be encrypted with the public
   *       wrapping key that <a>GetParametersForImport</a> returned, using the wrapping
   *       algorithm that you specified in the same <code>GetParametersForImport</code> request.</p>
   */
  EncryptedKeyMaterial: Uint8Array | undefined;

  /**
   * <p>The time at which the imported key material expires. When the key material expires, KMS
   *       deletes the key material and the KMS key becomes unusable. You must omit this parameter when the
   *         <code>ExpirationModel</code> parameter is set to <code>KEY_MATERIAL_DOES_NOT_EXPIRE</code>.
   *       Otherwise it is required.</p>
   */
  ValidTo?: Date;

  /**
   * <p>Specifies whether the key material expires. The default is
   *         <code>KEY_MATERIAL_EXPIRES</code>, in which case you must include the <code>ValidTo</code>
   *       parameter. When this parameter is set to <code>KEY_MATERIAL_DOES_NOT_EXPIRE</code>, you must
   *       omit the <code>ValidTo</code> parameter.</p>
   */
  ExpirationModel?: ExpirationModelType | string;
}

export namespace ImportKeyMaterialRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportKeyMaterialRequest): any => ({
    ...obj,
  });
}

export interface ImportKeyMaterialResponse {}

export namespace ImportKeyMaterialResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportKeyMaterialResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the key material in the request is, expired, invalid, or
 *       is not the same key material that was previously imported into this KMS key.</p>
 */
export interface IncorrectKeyMaterialException extends __SmithyException, $MetadataBearer {
  name: "IncorrectKeyMaterialException";
  $fault: "client";
  message?: string;
}

export namespace IncorrectKeyMaterialException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IncorrectKeyMaterialException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the provided import token is invalid or is associated
 *       with a different KMS key.</p>
 */
export interface InvalidImportTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidImportTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidImportTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidImportTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
 */
export interface InvalidGrantIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidGrantIdException";
  $fault: "client";
  message?: string;
}

export namespace InvalidGrantIdException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidGrantIdException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about each entry in the key list.</p>
 */
export interface KeyListEntry {
  /**
   * <p>Unique identifier of the key.</p>
   */
  KeyId?: string;

  /**
   * <p>ARN of the key.</p>
   */
  KeyArn?: string;
}

export namespace KeyListEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the signature verification failed. Signature verification
 *       fails when it cannot confirm that signature was produced by signing the specified message with
 *       the specified KMS key and signing algorithm.</p>
 */
export interface KMSInvalidSignatureException extends __SmithyException, $MetadataBearer {
  name: "KMSInvalidSignatureException";
  $fault: "client";
  message?: string;
}

export namespace KMSInvalidSignatureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSInvalidSignatureException): any => ({
    ...obj,
  });
}

export interface ListAliasesRequest {
  /**
   * <p>Lists only aliases that are associated with the specified KMS key. Enter a KMS key in your Amazon Web Services account. </p>
   *          <p>This parameter is optional. If you omit it, <code>ListAliases</code> returns all aliases
   *       in the account and Region.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId?: string;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1
   *     and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   */
  Marker?: string;
}

export namespace ListAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListAliasesResponse {
  /**
   * <p>A list of aliases.</p>
   */
  Aliases?: AliasListEntry[];

  /**
   * <p>When <code>Truncated</code> is true, this element is present and contains the
   *     value to use for the <code>Marker</code> parameter in a subsequent request.</p>
   */
  NextMarker?: string;

  /**
   * <p>A flag that indicates whether there are more items in the list. When this
   *     value is true, the list in this response is truncated. To get more items, pass the value of
   *     the <code>NextMarker</code> element in thisresponse to the <code>Marker</code> parameter in a
   *     subsequent request.</p>
   */
  Truncated?: boolean;
}

export namespace ListAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListGrantsRequest {
  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1
   *     and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   */
  Marker?: string;

  /**
   * <p>Returns only grants for the specified KMS key. This parameter is
   *       required.</p>
   *          <p>Specify the key ID or key ARN of the KMS key. To specify a KMS key in a
   * different Amazon Web Services account, you must use the key ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Returns only the grant with the specified grant ID. The grant ID uniquely identifies the
   *       grant. </p>
   */
  GrantId?: string;

  /**
   * <p>Returns only grants where the specified principal is the grantee principal for the
   *       grant.</p>
   */
  GranteePrincipal?: string;
}

export namespace ListGrantsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGrantsRequest): any => ({
    ...obj,
  });
}

export interface ListGrantsResponse {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: GrantListEntry[];

  /**
   * <p>When <code>Truncated</code> is true, this element is present and contains the
   *     value to use for the <code>Marker</code> parameter in a subsequent request.</p>
   */
  NextMarker?: string;

  /**
   * <p>A flag that indicates whether there are more items in the list. When this
   *     value is true, the list in this response is truncated. To get more items, pass the value of
   *     the <code>NextMarker</code> element in thisresponse to the <code>Marker</code> parameter in a
   *     subsequent request.</p>
   */
  Truncated?: boolean;
}

export namespace ListGrantsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGrantsResponse): any => ({
    ...obj,
  });
}

export interface ListKeyPoliciesRequest {
  /**
   * <p>Gets the names of key policies for the specified KMS key.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between
   *     1 and 1000, inclusive. If you do not include a value, it defaults to 100.</p>
   *          <p>Only one policy can be attached to a key.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   */
  Marker?: string;
}

export namespace ListKeyPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListKeyPoliciesResponse {
  /**
   * <p>A list of key policy names. The only valid value is <code>default</code>.</p>
   */
  PolicyNames?: string[];

  /**
   * <p>When <code>Truncated</code> is true, this element is present and contains the
   *     value to use for the <code>Marker</code> parameter in a subsequent request.</p>
   */
  NextMarker?: string;

  /**
   * <p>A flag that indicates whether there are more items in the list. When this
   *     value is true, the list in this response is truncated. To get more items, pass the value of
   *     the <code>NextMarker</code> element in thisresponse to the <code>Marker</code> parameter in a
   *     subsequent request.</p>
   */
  Truncated?: boolean;
}

export namespace ListKeyPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeyPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListKeysRequest {
  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between
   *     1 and 1000, inclusive. If you do not include a value, it defaults to 100.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   */
  Marker?: string;
}

export namespace ListKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeysRequest): any => ({
    ...obj,
  });
}

export interface ListKeysResponse {
  /**
   * <p>A list of KMS keys.</p>
   */
  Keys?: KeyListEntry[];

  /**
   * <p>When <code>Truncated</code> is true, this element is present and contains the
   *     value to use for the <code>Marker</code> parameter in a subsequent request.</p>
   */
  NextMarker?: string;

  /**
   * <p>A flag that indicates whether there are more items in the list. When this
   *     value is true, the list in this response is truncated. To get more items, pass the value of
   *     the <code>NextMarker</code> element in thisresponse to the <code>Marker</code> parameter in a
   *     subsequent request.</p>
   */
  Truncated?: boolean;
}

export namespace ListKeysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKeysResponse): any => ({
    ...obj,
  });
}

export interface ListResourceTagsRequest {
  /**
   * <p>Gets tags on the specified KMS key.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1 and 50, inclusive. If
   *       you do not include a value, it defaults to 50.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   *          <p>Do not attempt to construct this value. Use only the value of <code>NextMarker</code> from
   *       the truncated response you just received.</p>
   */
  Marker?: string;
}

export namespace ListResourceTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceTagsRequest): any => ({
    ...obj,
  });
}

export interface ListResourceTagsResponse {
  /**
   * <p>A list of tags. Each tag consists of a tag key and a tag value.</p>
   *          <note>
   *             <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          </note>
   */
  Tags?: Tag[];

  /**
   * <p>When <code>Truncated</code> is true, this element is present and contains the
   *     value to use for the <code>Marker</code> parameter in a subsequent request.</p>
   *          <p>Do not assume or infer any information from this value.</p>
   */
  NextMarker?: string;

  /**
   * <p>A flag that indicates whether there are more items in the list. When this
   *     value is true, the list in this response is truncated. To get more items, pass the value of
   *     the <code>NextMarker</code> element in thisresponse to the <code>Marker</code> parameter in a
   *     subsequent request.</p>
   */
  Truncated?: boolean;
}

export namespace ListResourceTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListResourceTagsResponse): any => ({
    ...obj,
  });
}

export interface ListRetirableGrantsRequest {
  /**
   * <p>Use this parameter to specify the maximum number of items to return. When this
   *     value is present, KMS does not return more than the specified number of items, but it might
   *     return fewer.</p>
   *          <p>This value is optional. If you include a value, it must be between 1
   *     and 100, inclusive. If you do not include a value, it defaults to 50.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter in a subsequent request after you receive a response with
   *     truncated results. Set it to the value of <code>NextMarker</code> from the truncated response
   *     you just received.</p>
   */
  Marker?: string;

  /**
   * <p>The retiring principal for which to list grants. Enter a principal in your Amazon Web Services account.</p>
   *          <p>To specify the retiring principal, use the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, federated users, and
   *       assumed role users. For examples of the ARN syntax for specifying a principal, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access Management (IAM)</a> in the Example ARNs section of the
   *       <i>Amazon Web Services General Reference</i>.</p>
   */
  RetiringPrincipal: string | undefined;
}

export namespace ListRetirableGrantsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRetirableGrantsRequest): any => ({
    ...obj,
  });
}

export enum MessageType {
  DIGEST = "DIGEST",
  RAW = "RAW",
}

export interface PutKeyPolicyRequest {
  /**
   * <p>Sets the key policy on the specified KMS key.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The name of the key policy. The only valid value is <code>default</code>.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The key policy to attach to the KMS key.</p>
   *          <p>The key policy must meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't set <code>BypassPolicyLockoutSafetyCheck</code> to true, the key policy
   *           must allow the principal that is making the <code>PutKeyPolicy</code> request to make a
   *           subsequent <code>PutKeyPolicy</code> request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>Each statement in the key policy must contain one or more principals. The principals
   *           in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal
   *           (for example, an IAM user or role), you might need to enforce a delay before including the
   *           new principal in a key policy because the new principal might not be immediately visible
   *           to KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>The key policy cannot exceed 32 kilobytes (32768 bytes). For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource Quotas</a> in the
   *       <i>Key Management Service Developer Guide</i>.</p>
   */
  Policy: string | undefined;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not
   *         set this value to true indiscriminately.</p>
   *             <p>For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>Key Management Service Developer Guide</i>.</p>
   *          </important>
   *          <p>Use this parameter only when you intend to prevent the principal that is making the
   *       request from making a subsequent <code>PutKeyPolicy</code> request on the KMS key.</p>
   *          <p>The default value is false.</p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;
}

export namespace PutKeyPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutKeyPolicyRequest): any => ({
    ...obj,
  });
}

export interface ReEncryptRequest {
  /**
   * <p>Ciphertext of the data to reencrypt.</p>
   */
  CiphertextBlob: Uint8Array | undefined;

  /**
   * <p>Specifies the encryption context to use to decrypt the ciphertext. Enter the same
   *       encryption context that was used to encrypt the ciphertext.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  SourceEncryptionContext?: { [key: string]: string };

  /**
   * <p>Specifies the KMS key that
   *     KMS will use to decrypt the ciphertext before it is re-encrypted. Enter a key ID of the KMS key
   *     that was used to encrypt the ciphertext.</p>
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.
   *       If you used a symmetric KMS key, KMS can get the KMS key from metadata that it adds to the
   *       symmetric ciphertext blob. However, it is always recommended as a best practice. This practice
   *       ensures that you use the KMS key that you intend.</p>
   *
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  SourceKeyId?: string;

  /**
   * <p>A unique identifier for the KMS key that is used to reencrypt the data. Specify a symmetric or
   *       asymmetric KMS key with a <code>KeyUsage</code> value of <code>ENCRYPT_DECRYPT</code>. To find the
   *         <code>KeyUsage</code> value of a KMS key, use the <a>DescribeKey</a>
   *       operation.</p>
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  DestinationKeyId: string | undefined;

  /**
   * <p>Specifies that encryption context to use when the reencrypting the data.</p>
   *          <p>A destination encryption context is valid only when the destination KMS key is a symmetric KMS key. The standard ciphertext format for asymmetric KMS keys does not include fields for
   *       metadata.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric KMS key, but it is highly recommended.</p>
   *          <p>For more information, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  DestinationEncryptionContext?: { [key: string]: string };

  /**
   * <p>Specifies the encryption algorithm that KMS will use to decrypt the ciphertext before it
   *       is reencrypted. The default value, <code>SYMMETRIC_DEFAULT</code>, represents the algorithm
   *       used for symmetric KMS keys.</p>
   *          <p>Specify the same algorithm that was used to encrypt the ciphertext. If you specify a
   *       different algorithm, the decrypt attempt fails.</p>
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key.</p>
   */
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | string;

  /**
   * <p>Specifies the encryption algorithm that KMS will use to reecrypt the data after it has
   *       decrypted it. The default value, <code>SYMMETRIC_DEFAULT</code>, represents the encryption
   *       algorithm used for symmetric KMS keys.</p>
   *          <p>This parameter is required only when the destination KMS key is an asymmetric KMS key.</p>
   */
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | string;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace ReEncryptRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReEncryptRequest): any => ({
    ...obj,
  });
}

export interface ReEncryptResponse {
  /**
   * <p>The reencrypted data. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  CiphertextBlob?: Uint8Array;

  /**
   * <p>Unique identifier of the KMS key used to originally encrypt the data.</p>
   */
  SourceKeyId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key that was used to reencrypt the data.</p>
   */
  KeyId?: string;

  /**
   * <p>The encryption algorithm that was used to decrypt the ciphertext before it was
   *       reencrypted.</p>
   */
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | string;

  /**
   * <p>The encryption algorithm that was used to reencrypt the data.</p>
   */
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
}

export namespace ReEncryptResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReEncryptResponse): any => ({
    ...obj,
  });
}

export interface ReplicateKeyRequest {
  /**
   * <p>Identifies the multi-Region primary key that is being replicated. To determine whether a KMS key is a multi-Region primary key, use the <a>DescribeKey</a> operation to check
   *       the value of the <code>MultiRegionKeyType</code> property.</p>
   *
   *          <p>Specify the key ID or key ARN of a multi-Region primary key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>mrk-1234abcd12ab34cd56ef1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The Region ID of the Amazon Web Services Region for this replica key. </p>
   *          <p>Enter the Region ID, such as <code>us-east-1</code> or <code>ap-southeast-2</code>. For a
   *       list of Amazon Web Services Regions in which KMS is supported, see <a href="https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region">KMS service endpoints</a> in the
   *       <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The replica must be in a different Amazon Web Services Region than its primary key and other replicas of
   *       that primary key, but in the same Amazon Web Services partition. KMS must be available in the replica
   *       Region. If the Region is not enabled by default, the Amazon Web Services account must be enabled in the
   *       Region. </p>
   *          <p>For information about Amazon Web Services partitions, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) in the
   *         <i>Amazon Web Services General Reference</i>.</a> For information about enabling and disabling Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a
   *         Region</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-disable">Disabling a Region</a> in the
   *       <i>Amazon Web Services General Reference</i>.</p>
   */
  ReplicaRegion: string | undefined;

  /**
   * <p>The key policy to attach to the KMS key. This parameter is optional. If you do not provide a key policy, KMS attaches the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">default key policy</a> to the KMS key.</p>
   *          <p>The key policy is not a shared property of multi-Region keys. You can specify the same key
   *       policy or a different key policy for each key in a set of related multi-Region keys. KMS
   *       does not synchronize this property.</p>
   *          <p>If you provide a key policy, it must meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't set <code>BypassPolicyLockoutSafetyCheck</code> to true, the key policy
   *           must give the caller <code>kms:PutKeyPolicy</code> permission on the replica key. This reduces the
   *           risk that the KMS key becomes unmanageable. For more information, refer to the scenario in the
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i>
   *                      <i>Key Management Service Developer Guide</i>
   *                   </i>.</p>
   *             </li>
   *             <li>
   *                <p>Each statement in the key policy must contain one or more principals. The principals
   *           in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal
   *           (for example, an IAM user or role), you might need to enforce a delay before including the
   *           new principal in a key policy because the new principal might not be immediately visible
   *           to KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>
   *                      <i>Identity and Access Management User Guide</i>
   *                   </i>.</p>
   *             </li>
   *             <li>
   *                <p>The key policy size quota is 32 kilobytes (32768 bytes).</p>
   *             </li>
   *          </ul>
   */
  Policy?: string;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not
   *         set this value to true indiscriminately.</p>
   *             <p>For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>Key Management Service Developer Guide</i>.</p>
   *          </important>
   *          <p>Use this parameter only when you intend to prevent the principal that is making the
   *       request from making a subsequent <code>PutKeyPolicy</code> request on the KMS key.</p>
   *          <p>The default value is false.</p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * <p>A description of the KMS key. The default value is an empty string (no description).</p>
   *          <p>The description is not a shared property of multi-Region keys. You can specify the same
   *       description or a different description for each key in a set of related multi-Region keys. KMS does not synchronize this property.</p>
   */
  Description?: string;

  /**
   * <p>Assigns one or more tags to the replica key. Use this parameter to tag the KMS key when it is created.
   *           To tag an existing KMS key, use the <a>TagResource</a> operation.</p>
   *         <note>
   *             <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">Using ABAC in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          </note>
   *         <p>To use this parameter, you must have <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> permission in an IAM policy.</p>
   *          <p>Tags are not a shared property of multi-Region keys. You can specify the same tags or
   *       different tags for each key in a set of related multi-Region keys. KMS does not
   *       synchronize this property.</p>
   *         <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are
   *           required, but the tag value can be an empty (null) string. You cannot have more than one tag
   *           on a KMS key with the same tag key. If you specify an existing tag key with a different tag value,
   *           KMS replaces the current tag value with the specified one.</p>
   *         <p>When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation
   *               report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details,
   *               see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging Keys</a>.</p>
   */
  Tags?: Tag[];
}

export namespace ReplicateKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicateKeyRequest): any => ({
    ...obj,
  });
}

export interface ReplicateKeyResponse {
  /**
   * <p>Displays details about the new replica key, including its Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key
   *       ARN</a>) and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">key state</a>. It also includes the ARN and Amazon Web Services Region of its primary key and other
   *       replica keys.</p>
   */
  ReplicaKeyMetadata?: KeyMetadata;

  /**
   * <p>The key policy of the new replica key. The value is a key policy document in JSON
   *       format.</p>
   */
  ReplicaPolicy?: string;

  /**
   * <p>The tags on the new replica key. The value is a list of tag key and tag value
   *       pairs.</p>
   */
  ReplicaTags?: Tag[];
}

export namespace ReplicateKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplicateKeyResponse): any => ({
    ...obj,
  });
}

export interface RetireGrantRequest {
  /**
   * <p>Identifies the grant to be retired. You can use a grant token to identify a new grant even
   *       before it has achieved eventual consistency.</p>
   *          <p>Only the <a>CreateGrant</a> operation returns a grant token. For details, see
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a>
   *       and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency">Eventual consistency</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantToken?: string;

  /**
   * <p>The key ARN KMS key associated with the grant. To find the key ARN, use the <a>ListKeys</a> operation.</p>
   *          <p>For example: <code>arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *          </p>
   */
  KeyId?: string;

  /**
   * <p>Identifies the grant to retire. To get the grant ID, use <a>CreateGrant</a>,
   *       <a>ListGrants</a>, or <a>ListRetirableGrants</a>.</p>
   *          <ul>
   *             <li>
   *                <p>Grant ID Example -
   *           0123456789012345678901234567890123456789012345678901234567890123</p>
   *             </li>
   *          </ul>
   */
  GrantId?: string;
}

export namespace RetireGrantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetireGrantRequest): any => ({
    ...obj,
  });
}

export interface RevokeGrantRequest {
  /**
   * <p>A unique identifier for the KMS key associated with the grant. To get
   *       the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key. To specify a KMS key in a
   * different Amazon Web Services account, you must use the key ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Identifies the grant to revoke. To get the grant ID, use <a>CreateGrant</a>,
   *       <a>ListGrants</a>, or <a>ListRetirableGrants</a>.</p>
   */
  GrantId: string | undefined;
}

export namespace RevokeGrantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeGrantRequest): any => ({
    ...obj,
  });
}

export interface ScheduleKeyDeletionRequest {
  /**
   * <p>The unique identifier of the KMS key to delete.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The waiting period, specified in number of days. After the waiting period ends, KMS
   *       deletes the KMS key.</p>
   *          <p>If the KMS key is a multi-Region primary key with replicas, the waiting period begins when the
   *       last of its replica keys is deleted. Otherwise, the waiting period begins immediately.</p>
   *          <p>This value is optional. If you include a value, it must be between 7 and 30, inclusive. If
   *       you do not include a value, it defaults to 30.</p>
   */
  PendingWindowInDays?: number;
}

export namespace ScheduleKeyDeletionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleKeyDeletionRequest): any => ({
    ...obj,
  });
}

export interface ScheduleKeyDeletionResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key whose deletion is scheduled.</p>
   */
  KeyId?: string;

  /**
   * <p>The date and time after which KMS deletes the KMS key.</p>
   *          <p>If the KMS key is a multi-Region primary key with replica keys, this field does not appear.
   *       The deletion date for the primary key isn't known until its last replica key is
   *       deleted.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The current status of the KMS key.</p>
   *          <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a>
   *       in the <i>Key Management Service Developer Guide</i>.</p>
   */
  KeyState?: KeyState | string;

  /**
   * <p>The waiting period before the KMS key is deleted. </p>
   *          <p>If the KMS key is a multi-Region primary key with replicas, the waiting period begins when the
   *       last of its replica keys is deleted. Otherwise, the waiting period begins immediately.</p>
   */
  PendingWindowInDays?: number;
}

export namespace ScheduleKeyDeletionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleKeyDeletionResponse): any => ({
    ...obj,
  });
}

export interface SignRequest {
  /**
   * <p>Identifies an asymmetric KMS key. KMS uses the private key in the asymmetric KMS key to sign the
   *       message. The <code>KeyUsage</code> type of the KMS key must be <code>SIGN_VERIFY</code>. To find
   *       the <code>KeyUsage</code> of a KMS key, use the <a>DescribeKey</a> operation.</p>
   *
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Specifies the message or message digest to sign. Messages can be 0-4096 bytes. To sign a
   *       larger message, provide the message digest.</p>
   *          <p>If you provide a message, KMS generates a hash digest of the message and then signs
   *       it.</p>
   */
  Message: Uint8Array | undefined;

  /**
   * <p>Tells KMS whether the value of the <code>Message</code> parameter is a message or
   *       message digest. The default value, RAW, indicates a message. To indicate a message digest,
   *       enter <code>DIGEST</code>.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];

  /**
   * <p>Specifies the signing algorithm to use when signing the message. </p>
   *          <p>Choose an algorithm that is compatible with the type and size of the specified asymmetric KMS key.</p>
   */
  SigningAlgorithm: SigningAlgorithmSpec | string | undefined;
}

export namespace SignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SignRequest): any => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
  });
}

export interface SignResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the asymmetric KMS key that was used to sign the message.</p>
   */
  KeyId?: string;

  /**
   * <p>The cryptographic signature that was generated for the message. </p>
   *          <ul>
   *             <li>
   *                <p>When used with the supported RSA signing algorithms, the encoding of this value is
   *           defined by <a href="https://tools.ietf.org/html/rfc8017">PKCS #1 in RFC
   *           8017</a>.</p>
   *             </li>
   *             <li>
   *                <p>When used with the <code>ECDSA_SHA_256</code>, <code>ECDSA_SHA_384</code>, or
   *             <code>ECDSA_SHA_512</code> signing algorithms, this value is a DER-encoded object as
   *           defined by ANS X9.62–2005 and <a href="https://tools.ietf.org/html/rfc3279#section-2.2.3">RFC 3279 Section 2.2.3</a>.
   *           This is the most commonly used signature format and is appropriate for most uses.
   *           </p>
   *             </li>
   *          </ul>
   *          <p>When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  Signature?: Uint8Array;

  /**
   * <p>The signing algorithm that was used to sign the message.</p>
   */
  SigningAlgorithm?: SigningAlgorithmSpec | string;
}

export namespace SignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SignResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>Identifies a customer managed key in the account and Region.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>One or more tags. </p>
   *          <p>Each tag consists of a tag key and a tag value. The tag value can be an empty (null)
   *       string. </p>
   *          <p>You cannot have more than one tag on a KMS key with the same tag key. If you specify an
   *       existing tag key with a different tag value, KMS replaces the current tag value with the
   *       specified one.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>Identifies the KMS key from which you are removing tags.</p>
   *
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAliasRequest {
  /**
   * <p>Identifies the alias that is changing its KMS key. This value must begin with
   *         <code>alias/</code> followed by the alias name, such as <code>alias/ExampleAlias</code>. You
   *       cannot use UpdateAlias to change the alias name.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>Identifies the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> to associate with the alias. You don't have permission
   *       to associate an alias with an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
   *          <p>The KMS key must be in the same Amazon Web Services account and Region as the alias. Also, the new target KMS key
   *       must be the same type as the current target KMS key (both symmetric or both asymmetric) and they
   *       must have the same key usage. </p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   *          <p>To verify that the alias
   *       is mapped to the correct KMS key, use <a>ListAliases</a>.</p>
   */
  TargetKeyId: string | undefined;
}

export namespace UpdateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomKeyStoreRequest {
  /**
   * <p>Identifies the custom key store that you want to update. Enter the ID of the custom key
   *       store. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;

  /**
   * <p>Changes the friendly name of the custom key store to the value that you specify. The
   *       custom key store name must be unique in the Amazon Web Services account.</p>
   */
  NewCustomKeyStoreName?: string;

  /**
   * <p>Enter the current password of the <code>kmsuser</code> crypto user (CU) in the CloudHSM
   *       cluster that is associated with the custom key store.</p>
   *          <p>This parameter tells KMS the current password of the <code>kmsuser</code> crypto user
   *       (CU). It does not set or change the password of any users in the CloudHSM cluster.</p>
   */
  KeyStorePassword?: string;

  /**
   * <p>Associates the custom key store with a related CloudHSM cluster. </p>
   *          <p>Enter the cluster ID of the cluster that you used to create the custom key store or a
   *       cluster that shares a backup history and has the same cluster certificate as the original
   *       cluster. You cannot use this parameter to associate a custom key store with an unrelated
   *       cluster. In addition, the replacement cluster must <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">fulfill the requirements</a> for
   *       a cluster associated with a custom key store. To view the cluster certificate of a cluster,
   *       use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
   */
  CloudHsmClusterId?: string;
}

export namespace UpdateCustomKeyStoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomKeyStoreRequest): any => ({
    ...obj,
    ...(obj.KeyStorePassword && { KeyStorePassword: SENSITIVE_STRING }),
  });
}

export interface UpdateCustomKeyStoreResponse {}

export namespace UpdateCustomKeyStoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCustomKeyStoreResponse): any => ({
    ...obj,
  });
}

export interface UpdateKeyDescriptionRequest {
  /**
   * <p>Updates the description of the specified KMS key.</p>
   *          <p>Specify the key ID or key ARN of the KMS key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>New description for the KMS key.</p>
   */
  Description: string | undefined;
}

export namespace UpdateKeyDescriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateKeyDescriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePrimaryRegionRequest {
  /**
   * <p>Identifies the current primary key. When the operation completes, this KMS key will be a
   *       replica key.</p>
   *
   *          <p>Specify the key ID or key ARN of a multi-Region primary key.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>mrk-1234abcd12ab34cd56ef1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the new primary key. Enter the Region ID, such as <code>us-east-1</code>
   *       or <code>ap-southeast-2</code>. There must be an existing replica key in this Region. </p>
   *          <p>When the operation completes, the multi-Region key in this Region will be the primary
   *       key.</p>
   */
  PrimaryRegion: string | undefined;
}

export namespace UpdatePrimaryRegionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePrimaryRegionRequest): any => ({
    ...obj,
  });
}

export interface VerifyRequest {
  /**
   * <p>Identifies the asymmetric KMS key that will be used to verify the signature. This must be the
   *       same KMS key that was used to generate the signature. If you specify a different KMS key, the
   *       signature verification fails.</p>
   *          <p>To specify a KMS key, use its key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a KMS key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To get the key ID and key ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>. To get the alias name and alias ARN, use <a>ListAliases</a>.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>Specifies the message that was signed. You can submit a raw message of up to 4096 bytes,
   *       or a hash digest of the message. If you submit a digest, use the <code>MessageType</code>
   *       parameter with a value of <code>DIGEST</code>.</p>
   *          <p>If the message specified here is different from the message that was signed, the signature
   *       verification fails. A message and its hash digest are considered to be the same
   *       message.</p>
   */
  Message: Uint8Array | undefined;

  /**
   * <p>Tells KMS whether the value of the <code>Message</code> parameter is a message or
   *       message digest. The default value, RAW, indicates a message. To indicate a message digest,
   *       enter <code>DIGEST</code>.</p>
   *          <important>
   *             <p>Use the <code>DIGEST</code> value only when the value of the <code>Message</code>
   *         parameter is a message digest. If you use the <code>DIGEST</code> value with a raw message,
   *         the security of the verification operation can be compromised.</p>
   *          </important>
   */
  MessageType?: MessageType | string;

  /**
   * <p>The signature that the <code>Sign</code> operation generated.</p>
   */
  Signature: Uint8Array | undefined;

  /**
   * <p>The signing algorithm that was used to sign the message. If you submit a different
   *       algorithm, the signature verification fails.</p>
   */
  SigningAlgorithm: SigningAlgorithmSpec | string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export namespace VerifyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyRequest): any => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
  });
}

export interface VerifyResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the asymmetric KMS key that was used to verify the signature.</p>
   */
  KeyId?: string;

  /**
   * <p>A Boolean value that indicates whether the signature was verified. A value of
   *         <code>True</code> indicates that the <code>Signature</code> was produced by signing the
   *         <code>Message</code> with the specified <code>KeyID</code> and
   *         <code>SigningAlgorithm.</code> If the signature is not verified, the <code>Verify</code>
   *       operation fails with a <code>KMSInvalidSignatureException</code> exception. </p>
   */
  SignatureValid?: boolean;

  /**
   * <p>The signing algorithm that was used to verify the signature.</p>
   */
  SigningAlgorithm?: SigningAlgorithmSpec | string;
}

export namespace VerifyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyResponse): any => ({
    ...obj,
  });
}
