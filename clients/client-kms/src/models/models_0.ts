// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { KMSServiceException as __BaseException } from "./KMSServiceException";

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
   * <p>Date and time that the alias was most recently created in the account and Region.
   *       Formatted as Unix time.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date and time that the alias was most recently associated with a KMS key in the account
   *       and Region. Formatted as Unix time.</p>
   */
  LastUpdatedDate?: Date;
}

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
  }
}

export interface CancelKeyDeletionRequest {
  /**
   * <p>Identifies the KMS key whose deletion is being canceled.</p>
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

export interface CancelKeyDeletionResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key whose deletion is canceled.</p>
   */
  KeyId?: string;
}

/**
 * <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 */
export class DependencyTimeoutException extends __BaseException {
  readonly name: "DependencyTimeoutException" = "DependencyTimeoutException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyTimeoutException, __BaseException>) {
    super({
      name: "DependencyTimeoutException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyTimeoutException.prototype);
  }
}

/**
 * <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 */
export class InvalidArnException extends __BaseException {
  readonly name: "InvalidArnException" = "InvalidArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
  }
}

/**
 * <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 */
export class KMSInternalException extends __BaseException {
  readonly name: "KMSInternalException" = "KMSInternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInternalException, __BaseException>) {
    super({
      name: "KMSInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInternalException.prototype);
  }
}

/**
 * <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 */
export class KMSInvalidStateException extends __BaseException {
  readonly name: "KMSInvalidStateException" = "KMSInvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>) {
    super({
      name: "KMSInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified CloudHSM cluster is already associated with an
 *       CloudHSM key store in the account, or it shares a backup history with an CloudHSM key store in the
 *       account. Each CloudHSM key store in the account must be associated with a different CloudHSM
 *       cluster.</p>
 *          <p>CloudHSM clusters that share a backup history have the same cluster certificate. To view the
 *       cluster certificate of an CloudHSM cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
 */
export class CloudHsmClusterInUseException extends __BaseException {
  readonly name: "CloudHsmClusterInUseException" = "CloudHsmClusterInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmClusterInUseException, __BaseException>) {
    super({
      name: "CloudHsmClusterInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmClusterInUseException.prototype);
  }
}

/**
 * <p>The request was rejected because the associated CloudHSM cluster did not meet the
 *       configuration requirements for an CloudHSM key store.</p>
 *
 *          <ul>
 *             <li>
 *                <p>The CloudHSM cluster must be configured with private subnets in at least two different
 *           Availability Zones in the Region.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">security group for
 *             the cluster</a> (cloudhsm-cluster-<i><cluster-id></i>-sg) must
 *           include inbound rules and outbound rules that allow TCP traffic on ports 2223-2225. The
 *             <b>Source</b> in the inbound rules and the <b>Destination</b> in the outbound rules must match the security group
 *           ID. These rules are set by default when you create the CloudHSM cluster. Do not delete or
 *           change them. To get information about a particular security group, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html">DescribeSecurityGroups</a> operation.</p>
 *             </li>
 *             <li>
 *                <p>The CloudHSM cluster must contain at least as many HSMs as the operation requires. To add
 *           HSMs, use the CloudHSM <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation.</p>
 *                <p>For the <a>CreateCustomKeyStore</a>, <a>UpdateCustomKeyStore</a>, and <a>CreateKey</a> operations, the CloudHSM cluster must have at least two
 *           active HSMs, each in a different Availability Zone. For the <a>ConnectCustomKeyStore</a> operation, the CloudHSM must contain at least one active
 *           HSM.</p>
 *             </li>
 *          </ul>
 *          <p>For information about the requirements for an CloudHSM cluster that is associated with an
 *       CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the Prerequisites</a>
 *       in the <i>Key Management Service Developer Guide</i>. For information about creating a private subnet for an CloudHSM cluster,
 *       see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/create-subnets.html">Create a Private
 *         Subnet</a> in the <i>CloudHSM User Guide</i>. For information about cluster security groups, see
 *         <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/configure-sg.html">Configure a Default Security
 *         Group</a> in the <i>
 *                <i>CloudHSM User Guide</i>
 *             </i>. </p>
 */
export class CloudHsmClusterInvalidConfigurationException extends __BaseException {
  readonly name: "CloudHsmClusterInvalidConfigurationException" = "CloudHsmClusterInvalidConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmClusterInvalidConfigurationException, __BaseException>) {
    super({
      name: "CloudHsmClusterInvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmClusterInvalidConfigurationException.prototype);
  }
}

/**
 * <p>The request was rejected because the CloudHSM cluster associated with the CloudHSM key store is
 *       not active. Initialize and activate the cluster and try the command again. For detailed
 *       instructions, see <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html">Getting
 *         Started</a> in the <i>CloudHSM User Guide</i>.</p>
 */
export class CloudHsmClusterNotActiveException extends __BaseException {
  readonly name: "CloudHsmClusterNotActiveException" = "CloudHsmClusterNotActiveException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmClusterNotActiveException, __BaseException>) {
    super({
      name: "CloudHsmClusterNotActiveException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmClusterNotActiveException.prototype);
  }
}

/**
 * <p>The request was rejected because KMS cannot find the CloudHSM cluster with the specified
 *       cluster ID. Retry the request with a different cluster ID.</p>
 */
export class CloudHsmClusterNotFoundException extends __BaseException {
  readonly name: "CloudHsmClusterNotFoundException" = "CloudHsmClusterNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmClusterNotFoundException, __BaseException>) {
    super({
      name: "CloudHsmClusterNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmClusterNotFoundException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified CloudHSM cluster has a different cluster
 *       certificate than the original cluster. You cannot use the operation to specify an unrelated
 *       cluster for an CloudHSM key store.</p>
 *          <p>Specify an CloudHSM cluster that shares a backup history with the original cluster. This
 *       includes clusters that were created from a backup of the current cluster, and clusters that
 *       were created from the same backup that produced the current cluster.</p>
 *          <p>CloudHSM clusters that share a backup history have the same cluster certificate. To view the
 *       cluster certificate of an CloudHSM cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
 */
export class CloudHsmClusterNotRelatedException extends __BaseException {
  readonly name: "CloudHsmClusterNotRelatedException" = "CloudHsmClusterNotRelatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmClusterNotRelatedException, __BaseException>) {
    super({
      name: "CloudHsmClusterNotRelatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmClusterNotRelatedException.prototype);
  }
}

export interface ConnectCustomKeyStoreRequest {
  /**
   * <p>Enter the key store ID of the custom key store that you want to connect.
   *       To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;
}

export interface ConnectCustomKeyStoreResponse {}

/**
 * <p>The request was rejected because of the <code>ConnectionState</code> of the custom key
 *       store. To get the <code>ConnectionState</code> of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p>This exception is thrown under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>You requested the <a>ConnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>FAILED</code>. This operation is valid for all other <code>ConnectionState</code>
 *           values. To reconnect a custom key store in a <code>FAILED</code> state, disconnect it
 *             (<a>DisconnectCustomKeyStore</a>), then connect it
 *             (<code>ConnectCustomKeyStore</code>).</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>CreateKey</a> operation in a custom key store that is
 *           not connected. This operations is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>DisconnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>DISCONNECTED</code>. This operation is valid for all other
 *             <code>ConnectionState</code> values.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>UpdateCustomKeyStore</a> or <a>DeleteCustomKeyStore</a> operation on a custom key store that is not
 *           disconnected. This operation is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>DISCONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>GenerateRandom</a> operation in an CloudHSM key store
 *           that is not connected. This operation is valid only when the CloudHSM key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>. </p>
 *             </li>
 *          </ul>
 */
export class CustomKeyStoreInvalidStateException extends __BaseException {
  readonly name: "CustomKeyStoreInvalidStateException" = "CustomKeyStoreInvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomKeyStoreInvalidStateException, __BaseException>) {
    super({
      name: "CustomKeyStoreInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomKeyStoreInvalidStateException.prototype);
  }
}

/**
 * <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 */
export class CustomKeyStoreNotFoundException extends __BaseException {
  readonly name: "CustomKeyStoreNotFoundException" = "CustomKeyStoreNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomKeyStoreNotFoundException, __BaseException>) {
    super({
      name: "CustomKeyStoreNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomKeyStoreNotFoundException.prototype);
  }
}

export enum ConnectionErrorCodeType {
  CLUSTER_NOT_FOUND = "CLUSTER_NOT_FOUND",
  INSUFFICIENT_CLOUDHSM_HSMS = "INSUFFICIENT_CLOUDHSM_HSMS",
  INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET = "INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  NETWORK_ERRORS = "NETWORK_ERRORS",
  SUBNET_NOT_FOUND = "SUBNET_NOT_FOUND",
  USER_LOCKED_OUT = "USER_LOCKED_OUT",
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  XKS_PROXY_ACCESS_DENIED = "XKS_PROXY_ACCESS_DENIED",
  XKS_PROXY_INVALID_CONFIGURATION = "XKS_PROXY_INVALID_CONFIGURATION",
  XKS_PROXY_INVALID_RESPONSE = "XKS_PROXY_INVALID_RESPONSE",
  XKS_PROXY_INVALID_TLS_CONFIGURATION = "XKS_PROXY_INVALID_TLS_CONFIGURATION",
  XKS_PROXY_NOT_REACHABLE = "XKS_PROXY_NOT_REACHABLE",
  XKS_PROXY_TIMED_OUT = "XKS_PROXY_TIMED_OUT",
  XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION = "XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION",
  XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND = "XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND",
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
   *          <p>The <code>AliasName</code> value must be string of 1-256 characters. It can contain only
   *       alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name
   *       cannot begin with <code>alias/aws/</code>. The <code>alias/aws/</code> prefix is reserved for
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed
   *         keys</a>.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>Associates the alias with the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a>. The KMS key must
   *       be in the same Amazon Web Services Region. </p>
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

/**
 * <p>The request was rejected because the specified alias name is not valid.</p>
 */
export class InvalidAliasNameException extends __BaseException {
  readonly name: "InvalidAliasNameException" = "InvalidAliasNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAliasNameException, __BaseException>) {
    super({
      name: "InvalidAliasNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAliasNameException.prototype);
  }
}

/**
 * <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

export enum CustomKeyStoreType {
  AWS_CLOUDHSM = "AWS_CLOUDHSM",
  EXTERNAL_KEY_STORE = "EXTERNAL_KEY_STORE",
}

/**
 * <p>KMS uses the authentication credential to sign requests that it sends to the external
 *       key store proxy (XKS proxy) on your behalf. You establish these credentials on your external
 *       key store proxy and report them to KMS.</p>
 *          <p>The <code>XksProxyAuthenticationCredential</code> includes two required elements.</p>
 */
export interface XksProxyAuthenticationCredentialType {
  /**
   * <p>A unique identifier for the raw secret access key.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p>A secret string of 43-64 characters. Valid characters are a-z, A-Z, 0-9, /, +, and
   *       =.</p>
   */
  RawSecretAccessKey: string | undefined;
}

export enum XksProxyConnectivityType {
  PUBLIC_ENDPOINT = "PUBLIC_ENDPOINT",
  VPC_ENDPOINT_SERVICE = "VPC_ENDPOINT_SERVICE",
}

export interface CreateCustomKeyStoreRequest {
  /**
   * <p>Specifies a friendly name for the custom key store. The name must be unique in your
   *       Amazon Web Services account and Region. This parameter is required for all custom key stores.</p>
   */
  CustomKeyStoreName: string | undefined;

  /**
   * <p>Identifies the CloudHSM cluster for an CloudHSM key store. This parameter is required for custom
   *       key stores with <code>CustomKeyStoreType</code> of <code>AWS_CLOUDHSM</code>.</p>
   *          <p>Enter the cluster ID of any active CloudHSM cluster that is not already associated with a
   *       custom key store. To find the cluster ID, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>Specifies the certificate for an CloudHSM key store. This parameter is required for custom
   *       key stores with a <code>CustomKeyStoreType</code> of <code>AWS_CLOUDHSM</code>.</p>
   *          <p>Enter the content of the trust anchor certificate for the CloudHSM cluster. This is the
   *       content of the <code>customerCA.crt</code> file that you created when you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html">initialized the
   *         cluster</a>.</p>
   */
  TrustAnchorCertificate?: string;

  /**
   * <p>Specifies the <code>kmsuser</code> password for an CloudHSM key store. This parameter is
   *       required for custom key stores with a <code>CustomKeyStoreType</code> of
   *         <code>AWS_CLOUDHSM</code>.</p>
   *          <p>Enter the password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
   *                <code>kmsuser</code> crypto user
   *         (CU) account</a> in the specified CloudHSM cluster. KMS logs into the cluster as this
   *       user to manage key material on your behalf.</p>
   *          <p>The password must be a string of 7 to 32 characters. Its value is case sensitive.</p>
   *          <p>This parameter tells KMS the <code>kmsuser</code> account password; it does not change
   *       the password in the CloudHSM cluster.</p>
   */
  KeyStorePassword?: string;

  /**
   * <p>Specifies the type of custom key store. The default value is
   *       <code>AWS_CLOUDHSM</code>.</p>
   *          <p>For a custom key store backed by an CloudHSM cluster, omit the parameter or enter
   *         <code>AWS_CLOUDHSM</code>. For a custom key store backed by an external key manager outside
   *       of Amazon Web Services, enter <code>EXTERNAL_KEY_STORE</code>. You cannot change this property after the key
   *       store is created.</p>
   */
  CustomKeyStoreType?: CustomKeyStoreType | string;

  /**
   * <p>Specifies the endpoint that KMS uses to send requests to the external key store proxy
   *       (XKS proxy). This parameter is required for custom key stores with a
   *         <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>The protocol must be HTTPS. KMS communicates on port 443. Do not specify the port in the
   *         <code>XksProxyUriEndpoint</code> value.</p>
   *          <p>For external key stores with <code>XksProxyConnectivity</code> value of
   *         <code>VPC_ENDPOINT_SERVICE</code>, specify <code>https://</code> followed by the private DNS
   *       name of the VPC endpoint service.</p>
   *          <p>For external key stores with <code>PUBLIC_ENDPOINT</code> connectivity, this endpoint must
   *       be reachable before you create the custom key store. KMS connects to the external key store
   *       proxy while creating the custom key store. For external key stores with
   *         <code>VPC_ENDPOINT_SERVICE</code> connectivity, KMS connects when you call the <a>ConnectCustomKeyStore</a> operation.</p>
   *          <p>The value of this parameter must begin with <code>https://</code>. The remainder can
   *       contain upper and lower case letters (A-Z and a-z), numbers (0-9), dots (<code>.</code>), and
   *       hyphens (<code>-</code>). Additional slashes (<code>/</code> and <code>\</code>) are not
   *       permitted.</p>
   *          <p>
   *             <b>Uniqueness requirements: </b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>The combined <code>XksProxyUriEndpoint</code> and <code>XksProxyUriPath</code> values
   *           must be unique in the Amazon Web Services account and Region.</p>
   *             </li>
   *             <li>
   *                <p>An external key store with <code>PUBLIC_ENDPOINT</code> connectivity cannot use the
   *           same <code>XksProxyUriEndpoint</code> value as an external key store with
   *             <code>VPC_ENDPOINT_SERVICE</code> connectivity in the same Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>Each external key store with <code>VPC_ENDPOINT_SERVICE</code> connectivity must have
   *           its own private DNS name. The <code>XksProxyUriEndpoint</code> value for external key
   *           stores with <code>VPC_ENDPOINT_SERVICE</code> connectivity (private DNS name) must be
   *           unique in the Amazon Web Services account and Region.</p>
   *             </li>
   *          </ul>
   */
  XksProxyUriEndpoint?: string;

  /**
   * <p>Specifies the base path to the proxy APIs for this external key store. To find this value,
   *       see the documentation for your external key store proxy. This parameter is required for all
   *       custom key stores with a <code>CustomKeyStoreType</code> of
   *       <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>The value must start with <code>/</code> and must end with <code>/kms/xks/v1</code> where
   *         <code>v1</code> represents the version of the KMS external key store proxy API. This path
   *       can include an optional prefix between the required elements such as
   *           <code>/<i>prefix</i>/kms/xks/v1</code>.</p>
   *          <p>
   *             <b>Uniqueness requirements: </b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>The combined <code>XksProxyUriEndpoint</code> and <code>XksProxyUriPath</code> values
   *           must be unique in the Amazon Web Services account and Region.</p>
   *             </li>
   *          </ul>
   */
  XksProxyUriPath?: string;

  /**
   * <p>Specifies the name of the Amazon VPC endpoint service for interface endpoints that is used to
   *       communicate with your external key store proxy (XKS proxy). This parameter is required when
   *       the value of <code>CustomKeyStoreType</code> is <code>EXTERNAL_KEY_STORE</code> and the value
   *       of <code>XksProxyConnectivity</code> is <code>VPC_ENDPOINT_SERVICE</code>.</p>
   *          <p>The Amazon VPC endpoint service must <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements">fulfill all requirements</a> for use with an external key
   *       store. </p>
   *          <p>
   *             <b>Uniqueness requirements:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>External key stores with <code>VPC_ENDPOINT_SERVICE</code> connectivity can share an
   *           Amazon VPC, but each external key store must have its own VPC endpoint service and private DNS
   *           name.</p>
   *             </li>
   *          </ul>
   */
  XksProxyVpcEndpointServiceName?: string;

  /**
   * <p>Specifies an authentication credential for the external key store proxy (XKS proxy). This
   *       parameter is required for all custom key stores with a <code>CustomKeyStoreType</code> of
   *         <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>The <code>XksProxyAuthenticationCredential</code> has two required elements:
   *         <code>RawSecretAccessKey</code>, a secret key, and <code>AccessKeyId</code>, a unique
   *       identifier for the <code>RawSecretAccessKey</code>. For character requirements, see <a href="kms/latest/APIReference/API_XksProxyAuthenticationCredentialType.html">XksProxyAuthenticationCredentialType</a>.</p>
   *          <p>KMS uses this authentication credential to sign requests to the external key store proxy
   *       on your behalf. This credential is unrelated to Identity and Access Management (IAM) and Amazon Web Services credentials.</p>
   *          <p>This parameter doesn't set or change the authentication credentials on the XKS proxy. It
   *       just tells KMS the credential that you established on your external key store proxy. If you
   *       rotate your proxy authentication credential, use the <a>UpdateCustomKeyStore</a>
   *       operation to provide the new credential to KMS.</p>
   */
  XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;

  /**
   * <p>Indicates how KMS communicates with the external key store proxy. This parameter is
   *       required for custom key stores with a <code>CustomKeyStoreType</code> of
   *         <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>If the external key store proxy uses a public endpoint, specify
   *         <code>PUBLIC_ENDPOINT</code>. If the external key store proxy uses a Amazon VPC
   *       endpoint service for communication with KMS, specify <code>VPC_ENDPOINT_SERVICE</code>. For
   *       help making this choice, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/plan-xks-keystore.html#choose-xks-connectivity">Choosing a connectivity option</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>An Amazon VPC endpoint service keeps your communication with KMS in a private address space
   *       entirely within Amazon Web Services, but it requires more configuration, including establishing a Amazon VPC with multiple subnets, a VPC endpoint service, a network load balancer, and a
   *       verified private DNS name. A public endpoint is simpler to set up, but it might be slower and
   *       might not fulfill your security requirements. You might consider testing with a public
   *       endpoint, and then establishing a VPC endpoint service for production tasks. Note that this
   *       choice does not determine the location of the external key store proxy. Even if you choose a
   *       VPC endpoint service, the proxy can be hosted within the VPC or outside of Amazon Web Services such as in
   *       your corporate data center.</p>
   */
  XksProxyConnectivity?: XksProxyConnectivityType | string;
}

export interface CreateCustomKeyStoreResponse {
  /**
   * <p>A unique identifier for the new custom key store.</p>
   */
  CustomKeyStoreId?: string;
}

/**
 * <p>The request was rejected because the specified custom key store name is already assigned
 *       to another custom key store in the account. Try again with a custom key store name that is
 *       unique in the account.</p>
 */
export class CustomKeyStoreNameInUseException extends __BaseException {
  readonly name: "CustomKeyStoreNameInUseException" = "CustomKeyStoreNameInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomKeyStoreNameInUseException, __BaseException>) {
    super({
      name: "CustomKeyStoreNameInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomKeyStoreNameInUseException.prototype);
  }
}

/**
 * <p>The request was rejected because the trust anchor certificate in the request to create an
 *       CloudHSM key store is not the trust anchor certificate for the specified CloudHSM cluster.</p>
 *          <p>When you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize the CloudHSM cluster</a>, you create the trust anchor certificate and save it
 *       in the <code>customerCA.crt</code> file.</p>
 */
export class IncorrectTrustAnchorException extends __BaseException {
  readonly name: "IncorrectTrustAnchorException" = "IncorrectTrustAnchorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectTrustAnchorException, __BaseException>) {
    super({
      name: "IncorrectTrustAnchorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectTrustAnchorException.prototype);
  }
}

/**
 * <p>The request was rejected because the proxy credentials failed to authenticate to the
 *       specified external key store proxy. The specified external key store proxy rejected a status
 *       request from KMS due to invalid credentials. This can indicate an error in the credentials
 *       or in the identification of the external key store proxy.</p>
 */
export class XksProxyIncorrectAuthenticationCredentialException extends __BaseException {
  readonly name: "XksProxyIncorrectAuthenticationCredentialException" =
    "XksProxyIncorrectAuthenticationCredentialException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyIncorrectAuthenticationCredentialException, __BaseException>) {
    super({
      name: "XksProxyIncorrectAuthenticationCredentialException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyIncorrectAuthenticationCredentialException.prototype);
  }
}

/**
 * <p>The request was rejected because the Amazon VPC endpoint service configuration does not fulfill
 *       the requirements for an external key store proxy. For details, see the exception
 *       message.</p>
 */
export class XksProxyInvalidConfigurationException extends __BaseException {
  readonly name: "XksProxyInvalidConfigurationException" = "XksProxyInvalidConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyInvalidConfigurationException, __BaseException>) {
    super({
      name: "XksProxyInvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyInvalidConfigurationException.prototype);
  }
}

/**
 * <p></p>
 *          <p>KMS cannot interpret the response it received from the external key store proxy. The
 *       problem might be a poorly constructed response, but it could also be a transient network
 *       issue. If you see this error repeatedly, report it to the proxy vendor.</p>
 */
export class XksProxyInvalidResponseException extends __BaseException {
  readonly name: "XksProxyInvalidResponseException" = "XksProxyInvalidResponseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyInvalidResponseException, __BaseException>) {
    super({
      name: "XksProxyInvalidResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyInvalidResponseException.prototype);
  }
}

/**
 * <p>The request was rejected because the concatenation of the <code>XksProxyUriEndpoint</code>
 *       is already associated with an external key store in the Amazon Web Services account and Region. Each
 *       external key store in an account and Region must use a unique external key store proxy
 *       address.</p>
 */
export class XksProxyUriEndpointInUseException extends __BaseException {
  readonly name: "XksProxyUriEndpointInUseException" = "XksProxyUriEndpointInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyUriEndpointInUseException, __BaseException>) {
    super({
      name: "XksProxyUriEndpointInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyUriEndpointInUseException.prototype);
  }
}

/**
 * <p>The request was rejected because the concatenation of the <code>XksProxyUriEndpoint</code>
 *       and <code>XksProxyUriPath</code> is already associated with an external key store in the
 *       Amazon Web Services account and Region. Each external key store in an account and Region must use a unique
 *       external key store proxy API address.</p>
 */
export class XksProxyUriInUseException extends __BaseException {
  readonly name: "XksProxyUriInUseException" = "XksProxyUriInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyUriInUseException, __BaseException>) {
    super({
      name: "XksProxyUriInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyUriInUseException.prototype);
  }
}

/**
 * <p>KMS was unable to reach the specified <code>XksProxyUriPath</code>. The path must be
 *       reachable before you create the external key store or update its settings.</p>
 *          <p>This exception is also thrown when the external key store proxy response to a <code>GetHealthStatus</code>
 *       request indicates that all external key manager instances are unavailable.</p>
 */
export class XksProxyUriUnreachableException extends __BaseException {
  readonly name: "XksProxyUriUnreachableException" = "XksProxyUriUnreachableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyUriUnreachableException, __BaseException>) {
    super({
      name: "XksProxyUriUnreachableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyUriUnreachableException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified Amazon VPC endpoint service is already
 *       associated with an external key store in the Amazon Web Services account and Region. Each external key store
 *       in an Amazon Web Services account and Region must use a different Amazon VPC endpoint service.</p>
 */
export class XksProxyVpcEndpointServiceInUseException extends __BaseException {
  readonly name: "XksProxyVpcEndpointServiceInUseException" = "XksProxyVpcEndpointServiceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyVpcEndpointServiceInUseException, __BaseException>) {
    super({
      name: "XksProxyVpcEndpointServiceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyVpcEndpointServiceInUseException.prototype);
  }
}

/**
 * <p>The request was rejected because the Amazon VPC endpoint service configuration does not fulfill
 *       the requirements for an external key store proxy. For details, see the exception message and
 *         <a href="kms/latest/developerguide/vpc-connectivity.html#xks-vpc-requirements">review the requirements</a> for Amazon VPC endpoint service connectivity for an external key
 *       store.</p>
 */
export class XksProxyVpcEndpointServiceInvalidConfigurationException extends __BaseException {
  readonly name: "XksProxyVpcEndpointServiceInvalidConfigurationException" =
    "XksProxyVpcEndpointServiceInvalidConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyVpcEndpointServiceInvalidConfigurationException, __BaseException>) {
    super({
      name: "XksProxyVpcEndpointServiceInvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyVpcEndpointServiceInvalidConfigurationException.prototype);
  }
}

/**
 * <p>The request was rejected because KMS could not find the specified VPC endpoint service.
 *       Use <a>DescribeCustomKeyStores</a> to verify the VPC endpoint service name for the
 *       external key store. Also, confirm that the <code>Allow principals</code> list for the VPC
 *       endpoint service includes the KMS service principal for the Region, such as
 *         <code>cks.kms.us-east-1.amazonaws.com</code>.</p>
 */
export class XksProxyVpcEndpointServiceNotFoundException extends __BaseException {
  readonly name: "XksProxyVpcEndpointServiceNotFoundException" = "XksProxyVpcEndpointServiceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksProxyVpcEndpointServiceNotFoundException, __BaseException>) {
    super({
      name: "XksProxyVpcEndpointServiceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksProxyVpcEndpointServiceNotFoundException.prototype);
  }
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
  EncryptionContextSubset?: Record<string, string>;

  /**
   * <p>A list of key-value pairs that must match the encryption context in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a>
   *       request. The grant allows the operation only when the encryption context in the request is the
   *       same as the encryption context specified in this constraint.</p>
   */
  EncryptionContextEquals?: Record<string, string>;
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
  GenerateMac = "GenerateMac",
  GetPublicKey = "GetPublicKey",
  ReEncryptFrom = "ReEncryptFrom",
  ReEncryptTo = "ReEncryptTo",
  RetireGrant = "RetireGrant",
  Sign = "Sign",
  Verify = "Verify",
  VerifyMac = "VerifyMac",
}

export interface CreateGrantRequest {
  /**
   * <p>Identifies the KMS key for the grant. The grant gives principals permission to use this
   *       KMS key.</p>
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
   *          <p>To specify the principal, use the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an
   *       Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, IAM roles,
   *       federated users, and assumed role users. For examples of the ARN syntax to use for specifying
   *       a principal, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access
   *         Management (IAM)</a> in the Example ARNs section of the <i>Amazon Web Services General
   *         Reference</i>.</p>
   */
  GranteePrincipal: string | undefined;

  /**
   * <p>The principal that has permission to use the <a>RetireGrant</a> operation to
   *       retire the grant. </p>
   *          <p>To specify the principal, use the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an
   *       Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, federated
   *       users, and assumed role users. For examples of the ARN syntax to use for specifying a
   *       principal, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access
   *         Management (IAM)</a> in the Example ARNs section of the <i>Amazon Web Services General
   *         Reference</i>.</p>
   *          <p>The grant determines the retiring principal. Other principals might have permission to
   *       retire the grant or revoke the grant. For details, see <a>RevokeGrant</a> and
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and
   *         revoking grants</a> in the <i>Key Management Service Developer Guide</i>. </p>
   */
  RetiringPrincipal?: string;

  /**
   * <p>A list of operations that the grant permits. </p>
   *          <p>This list must include only operations that are permitted in a grant. Also, the operation
   *       must be supported on the KMS key. For example, you cannot create a grant for a symmetric
   *       encryption KMS key that allows the <a>Sign</a> operation, or a grant for an
   *       asymmetric KMS key that allows the <a>GenerateDataKey</a> operation. If you try,
   *       KMS returns a <code>ValidationError</code> exception. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations">Grant
   *         operations</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  Operations: (GrantOperation | string)[] | undefined;

  /**
   * <p>Specifies a grant constraint. </p>
   *          <p>KMS supports the <code>EncryptionContextEquals</code> and
   *         <code>EncryptionContextSubset</code> grant constraints. Each constraint value can include up
   *       to 8 encryption context pairs. The encryption context value in each constraint cannot exceed
   *       384 characters. For information about grant constraints, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-grant-overview.html#grant-constraints">Using grant
   *         constraints</a> in the <i>Key Management Service Developer Guide</i>. For more information about encryption context,
   *       see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
   *         context</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>. </p>
   *          <p>The encryption context grant constraints allow the permissions in the grant only when the
   *       encryption context in the request matches (<code>EncryptionContextEquals</code>) or includes
   *         (<code>EncryptionContextSubset</code>) the encryption context specified in this structure. </p>
   *          <p>The encryption context grant constraints are supported only on <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-grant-operations">grant operations</a> that include
   *       an <code>EncryptionContext</code> parameter, such as cryptographic operations on symmetric
   *       encryption KMS keys. Grants with grant constraints can include the <a>DescribeKey</a> and <a>RetireGrant</a> operations, but the constraint doesn't apply to these
   *       operations. If a grant with a grant constraint includes the <code>CreateGrant</code>
   *       operation, the constraint requires that any grants created with the <code>CreateGrant</code>
   *       permission have an equally strict or stricter encryption context constraint.</p>
   *          <p>You cannot use an encryption context grant constraint for cryptographic operations with
   *       asymmetric KMS keys or HMAC KMS keys. These keys don't support an encryption context. </p>
   *          <p></p>
   */
  Constraints?: GrantConstraints;

  /**
   * <p>A list of grant tokens. </p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];

  /**
   * <p>A friendly name for the grant. Use this value to prevent the unintended creation of
   *       duplicate grants when retrying this request.</p>
   *          <p>When this value is absent, all <code>CreateGrant</code> requests result in a new grant
   *       with a unique <code>GrantId</code> even if all the supplied parameters are identical. This can
   *       result in unintended duplicates when you retry the <code>CreateGrant</code> request.</p>
   *          <p>When this value is present, you can retry a <code>CreateGrant</code> request with
   *       identical parameters; if the grant already exists, the original <code>GrantId</code> is
   *       returned without creating a new grant. Note that the returned grant token is unique with every
   *         <code>CreateGrant</code> request, even when a duplicate <code>GrantId</code> is returned.
   *       All grant tokens for the same grant ID can be used interchangeably.</p>
   */
  Name?: string;
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

/**
 * <p>The request was rejected because the specified KMS key is not enabled.</p>
 */
export class DisabledException extends __BaseException {
  readonly name: "DisabledException" = "DisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledException, __BaseException>) {
    super({
      name: "DisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified grant token is not valid.</p>
 */
export class InvalidGrantTokenException extends __BaseException {
  readonly name: "InvalidGrantTokenException" = "InvalidGrantTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGrantTokenException, __BaseException>) {
    super({
      name: "InvalidGrantTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGrantTokenException.prototype);
  }
}

export enum CustomerMasterKeySpec {
  ECC_NIST_P256 = "ECC_NIST_P256",
  ECC_NIST_P384 = "ECC_NIST_P384",
  ECC_NIST_P521 = "ECC_NIST_P521",
  ECC_SECG_P256K1 = "ECC_SECG_P256K1",
  HMAC_224 = "HMAC_224",
  HMAC_256 = "HMAC_256",
  HMAC_384 = "HMAC_384",
  HMAC_512 = "HMAC_512",
  RSA_2048 = "RSA_2048",
  RSA_3072 = "RSA_3072",
  RSA_4096 = "RSA_4096",
  SM2 = "SM2",
  SYMMETRIC_DEFAULT = "SYMMETRIC_DEFAULT",
}

export enum KeySpec {
  ECC_NIST_P256 = "ECC_NIST_P256",
  ECC_NIST_P384 = "ECC_NIST_P384",
  ECC_NIST_P521 = "ECC_NIST_P521",
  ECC_SECG_P256K1 = "ECC_SECG_P256K1",
  HMAC_224 = "HMAC_224",
  HMAC_256 = "HMAC_256",
  HMAC_384 = "HMAC_384",
  HMAC_512 = "HMAC_512",
  RSA_2048 = "RSA_2048",
  RSA_3072 = "RSA_3072",
  RSA_4096 = "RSA_4096",
  SM2 = "SM2",
  SYMMETRIC_DEFAULT = "SYMMETRIC_DEFAULT",
}

export enum KeyUsageType {
  ENCRYPT_DECRYPT = "ENCRYPT_DECRYPT",
  GENERATE_VERIFY_MAC = "GENERATE_VERIFY_MAC",
  SIGN_VERIFY = "SIGN_VERIFY",
}

export enum OriginType {
  AWS_CLOUDHSM = "AWS_CLOUDHSM",
  AWS_KMS = "AWS_KMS",
  EXTERNAL = "EXTERNAL",
  EXTERNAL_KEY_STORE = "EXTERNAL_KEY_STORE",
}

/**
 * <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are
 *       both required, but tag values can be empty (null) strings.</p>
 *          <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Amazon Web Services Billing and Cost Management
 *         User Guide</i>.</p>
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

export interface CreateKeyRequest {
  /**
   * <p>The key policy to attach to the KMS key.</p>
   *          <p>If you provide a key policy, it must meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't set <code>BypassPolicyLockoutSafetyCheck</code> to true, the key policy
   *           must allow the principal that is making the <code>CreateKey</code> request to make a
   *           subsequent <a>PutKeyPolicy</a> request on the KMS key. This reduces the risk
   *           that the KMS key becomes unmanageable. For more information, refer to the scenario in the
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i>
   *                      <i>Key Management Service Developer Guide</i>
   *                   </i>.</p>
   *             </li>
   *             <li>
   *                <p>Each statement in the key policy must contain one or more principals. The principals
   *           in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services
   *           principal (for example, an IAM user or role), you might need to enforce a delay before
   *           including the new principal in a key policy because the new principal might not be
   *           immediately visible to KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>Amazon Web Services
   *             Identity and Access Management User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>If you do not provide a key policy, KMS attaches a default key policy to the KMS key.
   *       For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default Key Policy</a> in the
   *       <i>Key Management Service Developer Guide</i>. </p>
   *          <p>The key policy size quota is 32 kilobytes (32768 bytes).</p>
   *          <p>For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>
   *                <i>Identity and Access Management User Guide</i>
   *             </i>.</p>
   */
  Policy?: string;

  /**
   * <p>A description of the KMS key.</p>
   *          <p>Use a description that helps you decide whether the KMS key is appropriate for a task. The
   *       default value is an empty string (no description).</p>
   *          <p>To set or change the description after the key is created, use <a>UpdateKeyDescription</a>.</p>
   */
  Description?: string;

  /**
   * <p>Determines the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> for which you can use the KMS key. The default value is
   *         <code>ENCRYPT_DECRYPT</code>. This parameter is optional when you are creating a symmetric
   *       encryption KMS key; otherwise, it is required. You can't change the <code>KeyUsage</code>
   *       value after the KMS key is created.</p>
   *          <p>Select only one valid value.</p>
   *          <ul>
   *             <li>
   *                <p>For symmetric encryption KMS keys, omit the parameter or specify
   *             <code>ENCRYPT_DECRYPT</code>.</p>
   *             </li>
   *             <li>
   *                <p>For HMAC KMS keys (symmetric), specify <code>GENERATE_VERIFY_MAC</code>.</p>
   *             </li>
   *             <li>
   *                <p>For asymmetric KMS keys with RSA key material, specify <code>ENCRYPT_DECRYPT</code> or
   *             <code>SIGN_VERIFY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For asymmetric KMS keys with ECC key material, specify
   *           <code>SIGN_VERIFY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For asymmetric KMS keys with SM2 key material (China Regions only), specify <code>ENCRYPT_DECRYPT</code> or
   *           <code>SIGN_VERIFY</code>.</p>
   *             </li>
   *          </ul>
   */
  KeyUsage?: KeyUsageType | string;

  /**
   * @deprecated
   *
   * <p>Instead, use the <code>KeySpec</code> parameter.</p>
   *          <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> parameters work the same
   *       way. Only the names differ. We recommend that you use <code>KeySpec</code> parameter in your
   *       code. However, to avoid breaking changes, KMS supports both parameters.</p>
   */
  CustomerMasterKeySpec?: CustomerMasterKeySpec | string;

  /**
   * <p>Specifies the type of KMS key to create. The default value,
   *       <code>SYMMETRIC_DEFAULT</code>, creates a KMS key with a 256-bit AES-GCM key that is used for encryption and decryption, except in China Regions,
   *       where it creates a 128-bit symmetric key that uses SM4 encryption. For help choosing a key spec for your KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-types.html#symm-asymm-choose">Choosing a KMS key type</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>.</p>
   *          <p>The <code>KeySpec</code> determines whether the KMS key contains a symmetric key or an
   *       asymmetric key pair. It also determines the algorithms that the KMS key supports. You can't
   *       change the <code>KeySpec</code> after the KMS key is created. To further restrict the
   *       algorithms that can be used with the KMS key, use a condition key in its key policy or IAM
   *       policy. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm">kms:EncryptionAlgorithm</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-mac-algorithm">kms:MacAlgorithm</a> or <a href="https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm">kms:Signing Algorithm</a> in the <i>
   *                <i>Key Management Service Developer Guide</i>
   *             </i>.</p>
   *          <important>
   *             <p>
   *                <a href="http://aws.amazon.com/kms/features/#AWS_Service_Integration">Amazon Web Services services that
   *           are integrated with KMS</a> use symmetric encryption KMS keys to protect your data.
   *         These services do not support asymmetric KMS keys or HMAC KMS keys.</p>
   *          </important>
   *          <p>KMS supports the following key specs for KMS keys:</p>
   *          <ul>
   *             <li>
   *                <p>Symmetric encryption key (default)</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>SYMMETRIC_DEFAULT</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>HMAC keys (symmetric)</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>HMAC_224</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>HMAC_256</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>HMAC_384</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>HMAC_512</code>
   *                      </p>
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
   *             <li>
   *                <p>SM2 key pairs (China Regions only)</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>SM2</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  KeySpec?: KeySpec | string;

  /**
   * <p>The source of the key material for the KMS key. You cannot change the origin after you
   *       create the KMS key. The default is <code>AWS_KMS</code>, which means that KMS creates the
   *       key material.</p>
   *          <p>To <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html">create a
   *         KMS key with no key material</a> (for imported key material), set this value to
   *         <code>EXTERNAL</code>. For more information about importing key material into KMS, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key
   *         Material</a> in the <i>Key Management Service Developer Guide</i>. The <code>EXTERNAL</code> origin value is valid
   *       only for symmetric KMS keys.</p>
   *          <p>To <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-cmk-keystore.html">create a KMS key in an CloudHSM key store</a> and create its key
   *       material in the associated CloudHSM cluster, set this value to <code>AWS_CLOUDHSM</code>. You
   *       must also use the <code>CustomKeyStoreId</code> parameter to identify the CloudHSM key store. The
   *         <code>KeySpec</code> value must be <code>SYMMETRIC_DEFAULT</code>.</p>
   *          <p>To <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keys.html">create a KMS key in
   *         an external key store</a>, set this value to <code>EXTERNAL_KEY_STORE</code>. You must
   *       also use the <code>CustomKeyStoreId</code> parameter to identify the external key store and
   *       the <code>XksKeyId</code> parameter to identify the associated external key. The
   *         <code>KeySpec</code> value must be <code>SYMMETRIC_DEFAULT</code>.</p>
   */
  Origin?: OriginType | string;

  /**
   * <p>Creates the KMS key in the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. The <code>ConnectionState</code> of
   *       the custom key store must be <code>CONNECTED</code>. To find the CustomKeyStoreID and
   *       ConnectionState use the <a>DescribeCustomKeyStores</a> operation.</p>
   *          <p>This parameter is valid only for symmetric encryption KMS keys in a single Region. You
   *       cannot create any other type of KMS key in a custom key store.</p>
   *          <p>When you create a KMS key in an CloudHSM key store, KMS generates a non-exportable 256-bit
   *       symmetric key in its associated CloudHSM cluster and associates it with the KMS key. When you
   *       create a KMS key in an external key store, you must use the <code>XksKeyId</code> parameter to specify an
   *       external key that serves as key material for the KMS key.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do
   *         not set this value to true indiscriminately.</p>
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
   * <p>Assigns one or more tags to the KMS key. Use this parameter to tag the KMS key when it is
   *       created. To tag an existing KMS key, use the <a>TagResource</a> operation.</p>
   *          <note>
   *             <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          </note>
   *          <p>To use this parameter, you must have <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> permission in an IAM policy.</p>
   *          <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are
   *       required, but the tag value can be an empty (null) string. You cannot have more than one tag
   *       on a KMS key with the same tag key. If you specify an existing tag key with a different tag
   *       value, KMS replaces the current tag value with the specified one.</p>
   *          <p>When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation
   *               report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details,
   *               see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging Keys</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You
   *       cannot change this value after you create the KMS key. </p>
   *          <p>For a multi-Region key, set this parameter to <code>True</code>. For a single-Region KMS
   *       key, omit this parameter or set it to <code>False</code>. The default value is
   *         <code>False</code>.</p>
   *          <p>This operation supports <i>multi-Region keys</i>, an KMS feature that lets you create multiple
   *       interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key
   *       material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt
   *       it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>This value creates a <i>primary key</i>, not a replica. To create a
   *         <i>replica key</i>, use the <a>ReplicateKey</a> operation. </p>
   *          <p>You can create a symmetric or asymmetric multi-Region key, and you can create a
   *       multi-Region key with imported key material. However, you cannot create a multi-Region key in
   *       a custom key store.</p>
   */
  MultiRegion?: boolean;

  /**
   * <p>Identifies the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">external key</a> that
   *       serves as key material for the KMS key in an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key store</a>. Specify the ID that
   *       the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-xks-proxy">external key store proxy</a> uses to refer to the external key. For help, see the
   *       documentation for your external key store proxy.</p>
   *          <p>This parameter is required for a KMS key with an <code>Origin</code> value of
   *         <code>EXTERNAL_KEY_STORE</code>. It is not valid for KMS keys with any other
   *         <code>Origin</code> value.</p>
   *          <p>The external key must be an existing 256-bit AES symmetric encryption key hosted outside
   *       of Amazon Web Services in an external key manager associated with the external key store specified by the
   *         <code>CustomKeyStoreId</code> parameter. This key must be enabled and configured to perform
   *       encryption and decryption. Each KMS key in an external key store must use a different external
   *       key. For details, see <a href="https://docs.aws.amazon.com/create-xks-keys.html#xks-key-requirements">Requirements for a KMS key in an external
   *         key store</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Each KMS key in an external key store is associated two backing keys. One is key material
   *       that KMS generates. The other is the external key specified by this parameter. When you use
   *       the KMS key in an external key store to encrypt data, the encryption operation is performed
   *       first by KMS using the KMS key material, and then by the external key manager using the
   *       specified external key, a process known as <i>double encryption</i>. For
   *       details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-double-encryption">Double
   *         encryption</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  XksKeyId?: string;
}

export enum EncryptionAlgorithmSpec {
  RSAES_OAEP_SHA_1 = "RSAES_OAEP_SHA_1",
  RSAES_OAEP_SHA_256 = "RSAES_OAEP_SHA_256",
  SM2PKE = "SM2PKE",
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

export enum MacAlgorithmSpec {
  HMAC_SHA_224 = "HMAC_SHA_224",
  HMAC_SHA_256 = "HMAC_SHA_256",
  HMAC_SHA_384 = "HMAC_SHA_384",
  HMAC_SHA_512 = "HMAC_SHA_512",
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

/**
 * <p>Describes the configuration of this multi-Region key. This field appears only when the KMS
 *       key is a primary or replica of a multi-Region key.</p>
 *          <p>For more information about any listed KMS key, use the <a>DescribeKey</a>
 *       operation.</p>
 */
export interface MultiRegionConfiguration {
  /**
   * <p>Indicates whether the KMS key is a <code>PRIMARY</code> or <code>REPLICA</code>
   *       key.</p>
   */
  MultiRegionKeyType?: MultiRegionKeyType | string;

  /**
   * <p>Displays the key ARN and Region of the primary key. This field includes the current KMS
   *       key if it is the primary key.</p>
   */
  PrimaryKey?: MultiRegionKey;

  /**
   * <p>displays the key ARNs and Regions of all replica keys. This field includes the current KMS
   *       key if it is a replica key.</p>
   */
  ReplicaKeys?: MultiRegionKey[];
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
  SM2DSA = "SM2DSA",
}

/**
 * <p>Information about the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">external key </a>that is associated with a KMS key in an
 *       external key store. </p>
 *          <p>This element appears in a <a>CreateKey</a> or <a>DescribeKey</a>
 *       response only for a KMS key in an external key store.</p>
 *          <p>The <i>external key</i> is a symmetric encryption key that is hosted by
 *       an external key manager outside of Amazon Web Services. When you use the KMS key in an external key store
 *       in a cryptographic operation, the cryptographic operation is performed in the
 *       external key manager using the specified external key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">External key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 */
export interface XksKeyConfigurationType {
  /**
   * <p>The ID of the external key in its external key manager. This is the ID that the external key store proxy uses to identify the external key.</p>
   */
  Id?: string;
}

/**
 * <p>Contains metadata about a KMS key.</p>
 *          <p>This data type is used as a response element for the <a>CreateKey</a>, <a>DescribeKey</a>, and <a>ReplicateKey</a> operations.</p>
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
   * <p>The Amazon Resource Name (ARN) of the KMS key. For examples, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kms">Key Management Service (KMS)</a> in the Example ARNs section of the <i>Amazon Web Services General
   *         Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time when the KMS key was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Specifies whether the KMS key is enabled. When <code>KeyState</code> is
   *         <code>Enabled</code> this value is true, otherwise it is false.</p>
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
   *          <p>For more information about how key state affects the use of a KMS key, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in
   *       the <i>Key Management Service Developer Guide</i>.</p>
   */
  KeyState?: KeyState | string;

  /**
   * <p>The date and time after which KMS deletes this KMS key. This value is present only when
   *       the KMS key is scheduled for deletion, that is, when its <code>KeyState</code> is
   *         <code>PendingDeletion</code>.</p>
   *          <p>When the primary key in a multi-Region key is scheduled for deletion but still has replica
   *       keys, its key state is <code>PendingReplicaDeletion</code> and the length of its waiting
   *       period is displayed in the <code>PendingDeletionWindowInDays</code> field.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The time at which the imported key material expires. When the key material expires, KMS
   *       deletes the key material and the KMS key becomes unusable. This value is present only for KMS
   *       keys whose <code>Origin</code> is <code>EXTERNAL</code> and whose <code>ExpirationModel</code>
   *       is <code>KEY_MATERIAL_EXPIRES</code>, otherwise this value is omitted.</p>
   */
  ValidTo?: Date;

  /**
   * <p>The source of the key material for the KMS key. When this value is <code>AWS_KMS</code>,
   *       KMS created the key material. When this value is <code>EXTERNAL</code>, the key material was
   *       imported or the KMS key doesn't have any key material. When this value is
   *         <code>AWS_CLOUDHSM</code>, the key material was created in the CloudHSM cluster associated with
   *       a custom key store.</p>
   */
  Origin?: OriginType | string;

  /**
   * <p>A unique identifier for the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> that contains the KMS key. This field is
   *       present only when the KMS key is created in a custom key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>The cluster ID of the CloudHSM cluster that contains the key material for the KMS key. When
   *       you create a KMS key in an CloudHSM <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, KMS creates the key material for the KMS
   *       key in the associated CloudHSM cluster. This field is present only when the KMS key is created in
   *       an CloudHSM key store.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>Specifies whether the KMS key's key material expires. This value is present only when
   *         <code>Origin</code> is <code>EXTERNAL</code>, otherwise this value is omitted.</p>
   */
  ExpirationModel?: ExpirationModelType | string;

  /**
   * <p>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or
   *       Amazon Web Services managed. For more information about the difference, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  KeyManager?: KeyManagerType | string;

  /**
   * @deprecated
   *
   * <p>Instead, use the <code>KeySpec</code> field.</p>
   *          <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> fields have the same
   *       value. We recommend that you use the <code>KeySpec</code> field in your code. However, to
   *       avoid breaking changes, KMS supports both fields.</p>
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
   * <p>The signing algorithms that the KMS key supports. You cannot use the KMS key with other
   *       signing algorithms within KMS.</p>
   *          <p>This field appears only when the <code>KeyUsage</code> of the KMS key is
   *         <code>SIGN_VERIFY</code>.</p>
   */
  SigningAlgorithms?: (SigningAlgorithmSpec | string)[];

  /**
   * <p>Indicates whether the KMS key is a multi-Region (<code>True</code>) or regional
   *         (<code>False</code>) key. This value is <code>True</code> for multi-Region primary and
   *       replica keys and <code>False</code> for regional KMS keys.</p>
   *          <p>For more information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Multi-Region keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
   *                   <code>MultiRegionKeyType</code> indicates whether the KMS key is a
   *             <code>PRIMARY</code> or <code>REPLICA</code> key.</p>
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
   *       the <code>KeyState</code> of the KMS key is <code>PendingReplicaDeletion</code>. That
   *       indicates that the KMS key is the primary key in a multi-Region key, it is scheduled for
   *       deletion, and it still has existing replica keys.</p>
   *          <p>When a single-Region KMS key or a multi-Region replica key is scheduled for deletion, its
   *       deletion date is displayed in the <code>DeletionDate</code> field. However, when the primary
   *       key in a multi-Region key is scheduled for deletion, its waiting period doesn't begin until
   *       all of its replica keys are deleted. This value displays that waiting period. When the last
   *       replica key in the multi-Region key is deleted, the <code>KeyState</code> of the scheduled
   *       primary key changes from <code>PendingReplicaDeletion</code> to <code>PendingDeletion</code>
   *       and the deletion date appears in the <code>DeletionDate</code> field.</p>
   */
  PendingDeletionWindowInDays?: number;

  /**
   * <p>The message authentication code (MAC) algorithm that the HMAC KMS key supports.</p>
   *          <p>This value is present only when the <code>KeyUsage</code> of the KMS key is
   *         <code>GENERATE_VERIFY_MAC</code>.</p>
   */
  MacAlgorithms?: (MacAlgorithmSpec | string)[];

  /**
   * <p>Information about the external key that is associated with a KMS key in an
   *       external key store.</p>
   *          <p>For more information, see
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">External key</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  XksKeyConfiguration?: XksKeyConfigurationType;
}

export interface CreateKeyResponse {
  /**
   * <p>Metadata associated with the KMS key.</p>
   */
  KeyMetadata?: KeyMetadata;
}

/**
 * <p>The request was rejected because the specified policy is not syntactically or semantically
 *       correct.</p>
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name: "MalformedPolicyDocumentException" = "MalformedPolicyDocumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
  }
}

/**
 * <p>The request was rejected because one or more tags are not valid.</p>
 */
export class TagException extends __BaseException {
  readonly name: "TagException" = "TagException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagException, __BaseException>) {
    super({
      name: "TagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagException.prototype);
  }
}

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}

/**
 * <p>The request was rejected because the (<code>XksKeyId</code>) is already associated with a
 *       KMS key in this external key store. Each KMS key in an external key store must be associated
 *       with a different external key.</p>
 */
export class XksKeyAlreadyInUseException extends __BaseException {
  readonly name: "XksKeyAlreadyInUseException" = "XksKeyAlreadyInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksKeyAlreadyInUseException, __BaseException>) {
    super({
      name: "XksKeyAlreadyInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksKeyAlreadyInUseException.prototype);
  }
}

/**
 * <p>The request was rejected because the external key specified by the <code>XksKeyId</code>
 *       parameter did not meet the configuration requirements for an external key store.</p>
 *          <p>The external key must be an AES-256 symmetric key that is enabled and performs encryption
 *       and decryption.</p>
 */
export class XksKeyInvalidConfigurationException extends __BaseException {
  readonly name: "XksKeyInvalidConfigurationException" = "XksKeyInvalidConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksKeyInvalidConfigurationException, __BaseException>) {
    super({
      name: "XksKeyInvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksKeyInvalidConfigurationException.prototype);
  }
}

/**
 * <p>The request was rejected because the external key store proxy could not find the external key. This
 *       exception is thrown when the value of the <code>XksKeyId</code> parameter doesn't identify a
 *       key in the external key manager associated with the external key proxy.</p>
 *          <p>Verify that the <code>XksKeyId</code> represents an existing key in the external key
 *       manager. Use the key identifier that the external key store proxy uses to identify the key.
 *       For details, see the documentation provided with your external key store proxy or key
 *       manager.</p>
 */
export class XksKeyNotFoundException extends __BaseException {
  readonly name: "XksKeyNotFoundException" = "XksKeyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<XksKeyNotFoundException, __BaseException>) {
    super({
      name: "XksKeyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, XksKeyNotFoundException.prototype);
  }
}

/**
 * <p>The request was rejected because the custom key store contains KMS keys. After verifying
 *       that you do not need to use the KMS keys, use the <a>ScheduleKeyDeletion</a>
 *       operation to delete the KMS keys. After they are deleted, you can delete the custom key
 *       store.</p>
 */
export class CustomKeyStoreHasCMKsException extends __BaseException {
  readonly name: "CustomKeyStoreHasCMKsException" = "CustomKeyStoreHasCMKsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomKeyStoreHasCMKsException, __BaseException>) {
    super({
      name: "CustomKeyStoreHasCMKsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomKeyStoreHasCMKsException.prototype);
  }
}

/**
 * <p>Detailed information about the external key store proxy (XKS proxy). Your external key
 *       store proxy translates KMS requests into a format that your external key manager can
 *       understand. These fields appear in a <a>DescribeCustomKeyStores</a> response only
 *       when the <code>CustomKeyStoreType</code> is <code>EXTERNAL_KEY_STORE</code>.</p>
 */
export interface XksProxyConfigurationType {
  /**
   * <p>Indicates whether the external key store proxy uses a public endpoint or an Amazon VPC endpoint
   *       service to communicate with KMS.</p>
   */
  Connectivity?: XksProxyConnectivityType | string;

  /**
   * <p>The part of the external key store <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html#KMS-CreateCustomKeyStore-request-XksProxyAuthenticationCredential">proxy authentication credential</a>
   *       that uniquely identifies the secret access key.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The URI endpoint for the external key store proxy.</p>
   *          <p>If the external key store proxy has a public endpoint, it is displayed here.</p>
   *          <p>If the external key store proxy uses an Amazon VPC endpoint service name, this field displays
   *       the private DNS name associated with the VPC endpoint service.</p>
   */
  UriEndpoint?: string;

  /**
   * <p>The path to the external key store proxy APIs.</p>
   */
  UriPath?: string;

  /**
   * <p>The Amazon VPC endpoint service used to communicate with the external key store proxy. This
   *       field appears only when the external key store proxy uses an Amazon VPC endpoint service to
   *       communicate with KMS.</p>
   */
  VpcEndpointServiceName?: string;
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
   * <p>A unique identifier for the CloudHSM cluster that is associated with an CloudHSM key store. This
   *       field appears only when the <code>CustomKeyStoreType</code> is
   *       <code>AWS_CLOUDHSM</code>.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>The trust anchor certificate of the CloudHSM cluster associated with an CloudHSM key store. When
   *       you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize
   *         the cluster</a>, you create this certificate and save it in the
   *         <code>customerCA.crt</code> file.</p>
   *          <p>This field appears only when the <code>CustomKeyStoreType</code> is
   *         <code>AWS_CLOUDHSM</code>.</p>
   */
  TrustAnchorCertificate?: string;

  /**
   * <p>Indicates whether the custom key store is connected to its backing key store. For an CloudHSM
   *       key store, the <code>ConnectionState</code> indicates whether it is connected to its CloudHSM
   *       cluster. For an external key store, the <code>ConnectionState</code> indicates whether it is
   *       connected to the external key store proxy that communicates with your external key
   *       manager.</p>
   *          <p>You can create and use KMS keys in your custom key stores only when its
   *         <code>ConnectionState</code> is <code>CONNECTED</code>.</p>
   *          <p>The <code>ConnectionState</code> value is <code>DISCONNECTED</code> only if the key store
   *       has never been connected or you use the <a>DisconnectCustomKeyStore</a> operation
   *       to disconnect it. If the value is <code>CONNECTED</code> but you are having trouble using the
   *       custom key store, make sure that the backing key store is reachable and active. For an CloudHSM
   *       key store, verify that its associated CloudHSM cluster is active and contains at least one active
   *       HSM. For an external key store, verify that the external key store proxy and external key
   *       manager are connected and enabled.</p>
   *          <p>A value of <code>FAILED</code> indicates that an attempt to connect was unsuccessful. The
   *         <code>ConnectionErrorCode</code> field in the response indicates the cause of the failure.
   *       For help resolving a connection failure, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a custom key store</a> in the
   *       <i>Key Management Service Developer Guide</i>.</p>
   */
  ConnectionState?: ConnectionStateType | string;

  /**
   * <p>Describes the connection error. This field appears in the response only when the
   *         <code>ConnectionState</code> is <code>FAILED</code>.</p>
   *          <p>Many failures can be resolved by updating the properties of the custom key store. To
   *       update a custom key store, disconnect it (<a>DisconnectCustomKeyStore</a>), correct
   *       the errors (<a>UpdateCustomKeyStore</a>), and try to connect again (<a>ConnectCustomKeyStore</a>). For additional help resolving these errors, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed">How to Fix a
   *         Connection Failure</a> in <i>Key Management Service Developer Guide</i>.</p>
   *          <p>
   *             <b>All custom key stores:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_ERROR</code> — KMS could not complete the request due to an
   *           internal error. Retry the request. For <code>ConnectCustomKeyStore</code> requests,
   *           disconnect the custom key store before trying to connect again.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_ERRORS</code> — Network errors are preventing KMS from
   *           connecting the custom key store to its backing key store.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>CloudHSM key stores:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLUSTER_NOT_FOUND</code> — KMS cannot find the CloudHSM cluster with the
   *           specified cluster ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CLOUDHSM_HSMS</code> — The associated CloudHSM cluster does not
   *           contain any active HSMs. To connect a custom key store to its CloudHSM cluster, the cluster
   *           must contain at least one active HSM.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET</code> — At least one private subnet
   *           associated with the CloudHSM cluster doesn't have any available IP addresses. A CloudHSM key
   *           store connection requires one free IP address in each of the associated private subnets,
   *           although two are preferable. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed">How to Fix a Connection
   *             Failure</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_CREDENTIALS</code> — The <code>KeyStorePassword</code> for the
   *           custom key store doesn't match the current password of the <code>kmsuser</code> crypto
   *           user in the CloudHSM cluster. Before you can connect your custom key store to its CloudHSM
   *           cluster, you must change the <code>kmsuser</code> account password and update the
   *             <code>KeyStorePassword</code> value for the custom key store.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBNET_NOT_FOUND</code> — A subnet in the CloudHSM cluster configuration was
   *           deleted. If KMS cannot find all of the subnets in the cluster configuration, attempts to
   *           connect the custom key store to the CloudHSM cluster fail. To fix this error, create a
   *           cluster from a recent backup and associate it with your custom key store. (This process
   *           creates a new cluster configuration with a VPC and private subnets.) For details, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-failed">How
   *             to Fix a Connection Failure</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_LOCKED_OUT</code> — The <code>kmsuser</code> CU account is locked
   *           out of the associated CloudHSM cluster due to too many failed password attempts. Before you
   *           can connect your custom key store to its CloudHSM cluster, you must change the
   *             <code>kmsuser</code> account password and update the key store password value for the
   *           custom key store.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_LOGGED_IN</code> — The <code>kmsuser</code> CU account is logged
   *           into the associated CloudHSM cluster. This prevents KMS from rotating the
   *             <code>kmsuser</code> account password and logging into the cluster. Before you can
   *           connect your custom key store to its CloudHSM cluster, you must log the <code>kmsuser</code>
   *           CU out of the cluster. If you changed the <code>kmsuser</code> password to log into the
   *           cluster, you must also and update the key store password value for the custom key store.
   *           For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#login-kmsuser-2">How to Log Out and
   *             Reconnect</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_NOT_FOUND</code> — KMS cannot find a <code>kmsuser</code> CU
   *           account in the associated CloudHSM cluster. Before you can connect your custom key store to
   *           its CloudHSM cluster, you must create a <code>kmsuser</code> CU account in the cluster, and
   *           then update the key store password value for the custom key store.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>External key stores:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INVALID_CREDENTIALS</code> — One or both of the
   *             <code>XksProxyAuthenticationCredential</code> values is not valid on the specified
   *           external key store proxy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_PROXY_ACCESS_DENIED</code> — KMS requests are denied access to the
   *           external key store proxy. If the external key store proxy has authorization rules, verify
   *           that they permit KMS to communicate with the proxy on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_PROXY_INVALID_CONFIGURATION</code> — A configuration error is
   *           preventing the external key store from connecting to its proxy. Verify the value of the
   *             <code>XksProxyUriPath</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_PROXY_INVALID_RESPONSE</code> — KMS cannot interpret the response
   *           from the external key store proxy. If you see this connection error code repeatedly,
   *           notify your external key store proxy vendor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_PROXY_INVALID_TLS_CONFIGURATION</code> — KMS cannot connect to the
   *           external key store proxy because the TLS configuration is invalid. Verify that the XKS
   *           proxy supports TLS 1.2 or 1.3. Also, verify that the TLS certificate is not expired, and
   *           that it matches the hostname in the <code>XksProxyUriEndpoint</code> value, and that it is
   *           signed by a certificate authority included in the <a href="https://github.com/aws/aws-kms-xksproxy-api-spec/blob/main/TrustedCertificateAuthorities">Trusted Certificate Authorities</a>
   *           list.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_PROXY_NOT_REACHABLE</code> — KMS can't communicate with your
   *           external key store proxy. Verify that the <code>XksProxyUriEndpoint</code> and
   *             <code>XksProxyUriPath</code> are correct. Use the tools for your external key store
   *           proxy to verify that the proxy is active and available on its network. Also, verify that
   *           your external key manager instances are operating properly. Connection attempts fail with
   *           this connection error code if the proxy reports that all external key manager instances
   *           are unavailable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_PROXY_TIMED_OUT</code> — KMS can connect to the external key store
   *           proxy, but the proxy does not respond to KMS in the time allotted. If you see this
   *           connection error code repeatedly, notify your external key store proxy vendor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION</code> — The Amazon VPC
   *           endpoint service configuration doesn't conform to the requirements for an KMS external
   *           key store.</p>
   *
   *
   * 	              <ul>
   *                   <li>
   *                      <p>The VPC endpoint service must be an endpoint service for interface endpoints in the caller's Amazon Web Services account.</p>
   *                   </li>
   *                   <li>
   *                      <p>It must have a network load balancer (NLB) connected to at least two subnets, each in a different Availability Zone.</p>
   *                   </li>
   *                   <li>
   *                      <p>The <code>Allow principals</code> list must include
   * 	         the KMS service principal for the Region, <code>cks.kms.<region>.amazonaws.com</code>,
   * 	         such as <code>cks.kms.us-east-1.amazonaws.com</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>It must <i>not</i> require <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html">acceptance</a> of connection requests.</p>
   *                   </li>
   *                   <li>
   *                      <p>It must have a private DNS name. The private DNS name for an external key store with <code>VPC_ENDPOINT_SERVICE</code> connectivity
   * 	       must be unique in its Amazon Web Services Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>The domain of the private DNS name must have a <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/verify-domains.html">verification status</a> of
   * 	         <code>verified</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS certificate</a> specifies the private DNS hostname at which the endpoint is reachable.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND</code> — KMS can't find the VPC
   *           endpoint service that it uses to communicate with the external key store proxy. Verify
   *           that the <code>XksProxyVpcEndpointServiceName</code> is correct and the KMS service
   *           principal has service consumer permissions on the Amazon VPC endpoint service.</p>
   *             </li>
   *          </ul>
   */
  ConnectionErrorCode?: ConnectionErrorCodeType | string;

  /**
   * <p>The date and time when the custom key store was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Indicates the type of the custom key store. <code>AWS_CLOUDHSM</code> indicates a custom
   *       key store backed by an CloudHSM cluster. <code>EXTERNAL_KEY_STORE</code> indicates a custom key
   *       store backed by an external key store proxy and external key manager outside of Amazon Web Services.</p>
   */
  CustomKeyStoreType?: CustomKeyStoreType | string;

  /**
   * <p>Configuration settings for the external key store proxy (XKS proxy). The external key
   *       store proxy translates KMS requests into a format that your external key manager can
   *       understand. The proxy configuration includes connection information that KMS
   *       requires.</p>
   *          <p>This field appears only when the <code>CustomKeyStoreType</code> is
   *         <code>EXTERNAL_KEY_STORE</code>.</p>
   */
  XksProxyConfiguration?: XksProxyConfigurationType;
}

export enum DataKeyPairSpec {
  ECC_NIST_P256 = "ECC_NIST_P256",
  ECC_NIST_P384 = "ECC_NIST_P384",
  ECC_NIST_P521 = "ECC_NIST_P521",
  ECC_SECG_P256K1 = "ECC_SECG_P256K1",
  RSA_2048 = "RSA_2048",
  RSA_3072 = "RSA_3072",
  RSA_4096 = "RSA_4096",
  SM2 = "SM2",
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
   *       An encryption context is valid only for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> with a symmetric encryption KMS key. The standard asymmetric encryption algorithms and HMAC algorithms that KMS uses do not support an encryption context.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: Record<string, string>;

  /**
   * <p>A list of grant tokens. </p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];

  /**
   * <p>Specifies the KMS key that KMS uses to decrypt the ciphertext.</p>
   *
   *          <p>Enter a key ID of the KMS key that was used to encrypt the ciphertext. If you identify a
   *       different KMS key, the <code>Decrypt</code> operation throws an
   *         <code>IncorrectKeyException</code>.</p>
   *
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS
   *       key. If you used a symmetric encryption KMS key, KMS can get the KMS key from metadata that
   *       it adds to the symmetric ciphertext blob. However, it is always recommended as a best
   *       practice. This practice ensures that you use the KMS key that you intend.</p>
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
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS
   *       key. The default value, <code>SYMMETRIC_DEFAULT</code>, represents the only supported
   *       algorithm that is valid for symmetric encryption KMS keys.</p>
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
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

/**
 * <p>The request was rejected because the specified KMS key cannot decrypt the data. The
 *         <code>KeyId</code> in a <a>Decrypt</a> request and the <code>SourceKeyId</code>
 *       in a <a>ReEncrypt</a> request must identify the same KMS key that was used to
 *       encrypt the ciphertext.</p>
 */
export class IncorrectKeyException extends __BaseException {
  readonly name: "IncorrectKeyException" = "IncorrectKeyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectKeyException, __BaseException>) {
    super({
      name: "IncorrectKeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectKeyException.prototype);
  }
}

/**
 * <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
 */
export class InvalidCiphertextException extends __BaseException {
  readonly name: "InvalidCiphertextException" = "InvalidCiphertextException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCiphertextException, __BaseException>) {
    super({
      name: "InvalidCiphertextException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCiphertextException.prototype);
  }
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
 *           incompatible with the type of key material in the KMS key <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying
 *       messages, the <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. For generating and
 *       verifying message authentication codes (MACs), the <code>KeyUsage</code> must be
 *         <code>GENERATE_VERIFY_MAC</code>. To find the <code>KeyUsage</code> of a KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 */
export class InvalidKeyUsageException extends __BaseException {
  readonly name: "InvalidKeyUsageException" = "InvalidKeyUsageException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKeyUsageException, __BaseException>) {
    super({
      name: "InvalidKeyUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKeyUsageException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified KMS key was not available. You can retry
 *       the request.</p>
 */
export class KeyUnavailableException extends __BaseException {
  readonly name: "KeyUnavailableException" = "KeyUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KeyUnavailableException, __BaseException>) {
    super({
      name: "KeyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, KeyUnavailableException.prototype);
  }
}

export interface DeleteAliasRequest {
  /**
   * <p>The alias to be deleted. The alias name must begin with <code>alias/</code> followed by
   *       the alias name, such as <code>alias/ExampleAlias</code>.</p>
   */
  AliasName: string | undefined;
}

export interface DeleteCustomKeyStoreRequest {
  /**
   * <p>Enter the ID of the custom key store you want to delete. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;
}

export interface DeleteCustomKeyStoreResponse {}

export interface DeleteImportedKeyMaterialRequest {
  /**
   * <p>Identifies the KMS key from which you are deleting imported key material. The
   *         <code>Origin</code> of the KMS key must be <code>EXTERNAL</code>.</p>
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

export interface DescribeCustomKeyStoresRequest {
  /**
   * <p>Gets only information about the specified custom key store. Enter the key store ID.</p>
   *          <p>By default, this operation gets information about all custom key stores in the account and
   *       Region. To limit the output to a particular custom key store, provide either the
   *         <code>CustomKeyStoreId</code> or <code>CustomKeyStoreName</code> parameter, but not
   *       both.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>Gets only information about the specified custom key store. Enter the friendly name of the
   *       custom key store.</p>
   *          <p>By default, this operation gets information about all custom key stores in the account and
   *       Region. To limit the output to a particular custom key store, provide either the
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

/**
 * <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 */
export class InvalidMarkerException extends __BaseException {
  readonly name: "InvalidMarkerException" = "InvalidMarkerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMarkerException, __BaseException>) {
    super({
      name: "InvalidMarkerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMarkerException.prototype);
  }
}

export interface DescribeKeyRequest {
  /**
   * <p>Describes the specified KMS key. </p>
   *          <p>If you specify a predefined Amazon Web Services alias (an Amazon Web Services alias with no key ID), KMS associates
   *       the alias with an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html##aws-managed-cmk">Amazon Web Services managed key</a> and returns its
   *         <code>KeyId</code> and <code>Arn</code> in the response.</p>
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

export interface DescribeKeyResponse {
  /**
   * <p>Metadata associated with the key.</p>
   */
  KeyMetadata?: KeyMetadata;
}

export interface DisableKeyRequest {
  /**
   * <p>Identifies the KMS key to disable.</p>
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

export interface DisableKeyRotationRequest {
  /**
   * <p>Identifies a symmetric encryption KMS key. You cannot enable or disable automatic rotation
   *       of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html#asymmetric-cmks">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC
   *         KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p>
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

export interface DisconnectCustomKeyStoreRequest {
  /**
   * <p>Enter the ID of the custom key store you want to disconnect. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   */
  CustomKeyStoreId: string | undefined;
}

export interface DisconnectCustomKeyStoreResponse {}

export interface EnableKeyRequest {
  /**
   * <p>Identifies the KMS key to enable.</p>
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

export interface EnableKeyRotationRequest {
  /**
   * <p>Identifies a symmetric encryption KMS key. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key.</p>
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

export interface EncryptRequest {
  /**
   * <p>Identifies the KMS key to use in the encryption operation. The KMS key must have a
   *         <code>KeyUsage</code> of <code>ENCRYPT_DECRYPT</code>. To find the <code>KeyUsage</code> of
   *       a KMS key, use the <a>DescribeKey</a> operation.</p>
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
   * <p>Data to be encrypted.</p>
   */
  Plaintext: Uint8Array | undefined;

  /**
   * <p>Specifies the encryption context that will be used to encrypt the data.
   *       An encryption context is valid only for <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> with a symmetric encryption KMS key. The standard asymmetric encryption algorithms and HMAC algorithms that KMS uses do not support an encryption context. </p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: Record<string, string>;

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
   *         <code>SYMMETRIC_DEFAULT</code>, is the algorithm used for symmetric encryption KMS keys. If you are
   *       using an asymmetric KMS key, we recommend RSAES_OAEP_SHA_256.</p>
   *          <p>The SM2PKE algorithm is only available in China Regions.</p>
   */
  EncryptionAlgorithm?: EncryptionAlgorithmSpec | string;
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

/**
 * <p>The request was rejected because the specified import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new
 *       public key to encrypt the key material, and then try the request again.</p>
 */
export class ExpiredImportTokenException extends __BaseException {
  readonly name: "ExpiredImportTokenException" = "ExpiredImportTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredImportTokenException, __BaseException>) {
    super({
      name: "ExpiredImportTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredImportTokenException.prototype);
  }
}

export interface GenerateDataKeyRequest {
  /**
   * <p>Specifies the symmetric encryption KMS key that encrypts the data key. You cannot specify
   *       an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your
   *       KMS key, use the <a>DescribeKey</a> operation.</p>
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
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: Record<string, string>;

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

export interface GenerateDataKeyPairRequest {
  /**
   * <p>Specifies the encryption context that will be used when encrypting the private key in the
   *       data key pair.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: Record<string, string>;

  /**
   * <p>Specifies the symmetric encryption KMS key that encrypts the private key in the data key
   *       pair. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the
   *       type and origin of your KMS key, use the <a>DescribeKey</a> operation.</p>
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
   *          <p>The KMS rule that restricts the use of asymmetric RSA and SM2 KMS keys to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC KMS keys only to sign and verify, are not effective on data key pairs, which are used outside of KMS. The SM2 key spec is only available in China Regions.</p>
   */
  KeyPairSpec: DataKeyPairSpec | string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
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
   * <p>The public key (in plaintext). When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
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

export interface GenerateDataKeyPairWithoutPlaintextRequest {
  /**
   * <p>Specifies the encryption context that will be used when encrypting the private key in the
   *       data key pair.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: Record<string, string>;

  /**
   * <p>Specifies the symmetric encryption KMS key that encrypts the private key in the data key
   *       pair. You cannot specify an asymmetric KMS key or a KMS key in a custom key store. To get the
   *       type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p>
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
   * <p>Determines the type of data key pair that is generated.</p>
   *          <p>The KMS rule that restricts the use of asymmetric RSA and SM2 KMS keys to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC KMS keys only to sign and verify, are not effective on data key pairs, which are used outside of KMS. The SM2 key spec is only available in China Regions.</p>
   */
  KeyPairSpec: DataKeyPairSpec | string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export interface GenerateDataKeyPairWithoutPlaintextResponse {
  /**
   * <p>The encrypted copy of the private key. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  PrivateKeyCiphertextBlob?: Uint8Array;

  /**
   * <p>The public key (in plaintext). When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
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

export interface GenerateDataKeyWithoutPlaintextRequest {
  /**
   * <p>Specifies the symmetric encryption KMS key that encrypts the data key. You cannot specify
   *       an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your
   *       KMS key, use the <a>DescribeKey</a> operation.</p>
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
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  EncryptionContext?: Record<string, string>;

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

export interface GenerateMacRequest {
  /**
   * <p>The message to be hashed. Specify a message of up to 4,096 bytes. </p>
   *          <p>
   *             <code>GenerateMac</code> and <a>VerifyMac</a> do not provide special handling
   *       for message digests. If you generate an HMAC for a hash digest of a message, you must verify
   *       the HMAC of the same hash digest.</p>
   */
  Message: Uint8Array | undefined;

  /**
   * <p>The HMAC KMS key to use in the operation. The MAC algorithm computes the HMAC for the
   *       message and the key as described in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p>
   *          <p>To identify an HMAC KMS key, use the <a>DescribeKey</a> operation and see the
   *         <code>KeySpec</code> field in the response.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The MAC algorithm used in the operation.</p>
   *          <p> The algorithm must be compatible with the HMAC KMS key that you specify. To find the MAC
   *       algorithms that your HMAC KMS key supports, use the <a>DescribeKey</a> operation
   *       and see the <code>MacAlgorithms</code> field in the <code>DescribeKey</code> response.</p>
   */
  MacAlgorithm: MacAlgorithmSpec | string | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export interface GenerateMacResponse {
  /**
   * <p>The hash-based message authentication code (HMAC) that was generated for the
   *       specified message, HMAC KMS key, and MAC algorithm.</p>
   *          <p>This is the standard, raw HMAC defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p>
   */
  Mac?: Uint8Array;

  /**
   * <p>The MAC algorithm that was used to generate the HMAC.</p>
   */
  MacAlgorithm?: MacAlgorithmSpec | string;

  /**
   * <p>The HMAC KMS key used in the operation.</p>
   */
  KeyId?: string;
}

export interface GenerateRandomRequest {
  /**
   * <p>The length of the random byte string. This parameter is required.</p>
   */
  NumberOfBytes?: number;

  /**
   * <p>Generates the random byte string in the CloudHSM cluster that is associated with the
   *       specified CloudHSM key store. To find the ID of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
   *          <p>External key store IDs are not valid for this parameter. If you specify the ID of an
   *       external key store, <code>GenerateRandom</code> throws an
   *         <code>UnsupportedOperationException</code>.</p>
   */
  CustomKeyStoreId?: string;
}

export interface GenerateRandomResponse {
  /**
   * <p>The random byte string. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</p>
   */
  Plaintext?: Uint8Array;
}

export interface GetKeyPolicyRequest {
  /**
   * <p>Gets the key policy for the specified KMS key.</p>
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
   * <p>Specifies the name of the key policy. The only valid name is <code>default</code>. To get
   *       the names of key policies, use <a>ListKeyPolicies</a>.</p>
   */
  PolicyName: string | undefined;
}

export interface GetKeyPolicyResponse {
  /**
   * <p>A key policy document in JSON format.</p>
   */
  Policy?: string;
}

export interface GetKeyRotationStatusRequest {
  /**
   * <p>Gets the rotation status for the specified KMS key.</p>
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
}

export interface GetKeyRotationStatusResponse {
  /**
   * <p>A Boolean value that specifies whether key rotation is enabled.</p>
   */
  KeyRotationEnabled?: boolean;
}

export enum WrappingKeySpec {
  RSA_2048 = "RSA_2048",
}

export interface GetParametersForImportRequest {
  /**
   * <p>The identifier of the symmetric encryption KMS key into which you will import key
   *       material. The <code>Origin</code> of the KMS key must be <code>EXTERNAL</code>.</p>
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

export interface GetParametersForImportResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key to use in a subsequent <a>ImportKeyMaterial</a> request. This is the same KMS key specified in the <code>GetParametersForImport</code>
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

export interface GetPublicKeyResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the asymmetric KMS key from which the public key was
   *       downloaded.</p>
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
   * <p>Instead, use the <code>KeySpec</code> field in the <code>GetPublicKey</code>
   *       response.</p>
   *          <p>The <code>KeySpec</code> and <code>CustomerMasterKeySpec</code> fields have the same
   *       value. We recommend that you use the <code>KeySpec</code> field in your code. However, to
   *       avoid breaking changes, KMS supports both fields.</p>
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

export interface ImportKeyMaterialRequest {
  /**
   * <p>The identifier of the symmetric encryption KMS key that receives the imported key
   *       material. This must be the same KMS key specified in the <code>KeyID</code> parameter of the
   *       corresponding <a>GetParametersForImport</a> request. The <code>Origin</code> of the
   *       KMS key must be <code>EXTERNAL</code>. You cannot perform this operation on an asymmetric KMS
   *       key, an HMAC KMS key, a KMS key in a custom key store, or on a KMS key in a different
   *       Amazon Web Services account</p>
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
   * <p>The date and time when the imported key material expires. This parameter is required when
   *       the value of the <code>ExpirationModel</code> parameter is <code>KEY_MATERIAL_EXPIRES</code>.
   *       Otherwise it is not valid.</p>
   *          <p>The value of this parameter must be a future date and time. The maximum value is 365 days
   *       from the request date.</p>
   *          <p>When the key material expires, KMS deletes the key material from the KMS key. Without
   *       its key material, the KMS key is unusable. To use the KMS key in cryptographic operations, you
   *       must reimport the same key material.</p>
   *          <p>You cannot change the <code>ExpirationModel</code> or <code>ValidTo</code> values for the
   *       current import after the request completes. To change either value, you must delete (<a>DeleteImportedKeyMaterial</a>) and reimport the key material.</p>
   */
  ValidTo?: Date;

  /**
   * <p>Specifies whether the key material expires. The default is
   *         <code>KEY_MATERIAL_EXPIRES</code>.</p>
   *          <p>When the value of <code>ExpirationModel</code> is <code>KEY_MATERIAL_EXPIRES</code>, you
   *       must specify a value for the <code>ValidTo</code> parameter. When value is
   *         <code>KEY_MATERIAL_DOES_NOT_EXPIRE</code>, you must omit the <code>ValidTo</code>
   *       parameter.</p>
   *          <p>You cannot change the <code>ExpirationModel</code> or <code>ValidTo</code> values for the
   *       current import after the request completes. To change either value, you must delete (<a>DeleteImportedKeyMaterial</a>) and reimport the key material.</p>
   */
  ExpirationModel?: ExpirationModelType | string;
}

export interface ImportKeyMaterialResponse {}

/**
 * <p>The request was rejected because the key material in the request is, expired, invalid, or
 *       is not the same key material that was previously imported into this KMS key.</p>
 */
export class IncorrectKeyMaterialException extends __BaseException {
  readonly name: "IncorrectKeyMaterialException" = "IncorrectKeyMaterialException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectKeyMaterialException, __BaseException>) {
    super({
      name: "IncorrectKeyMaterialException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectKeyMaterialException.prototype);
  }
}

/**
 * <p>The request was rejected because the provided import token is invalid or is associated
 *       with a different KMS key.</p>
 */
export class InvalidImportTokenException extends __BaseException {
  readonly name: "InvalidImportTokenException" = "InvalidImportTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidImportTokenException, __BaseException>) {
    super({
      name: "InvalidImportTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidImportTokenException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified <code>GrantId</code> is not valid.</p>
 */
export class InvalidGrantIdException extends __BaseException {
  readonly name: "InvalidGrantIdException" = "InvalidGrantIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGrantIdException, __BaseException>) {
    super({
      name: "InvalidGrantIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGrantIdException.prototype);
  }
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

/**
 * <p>The request was rejected because the HMAC verification failed. HMAC verification fails
 *       when the HMAC computed by using the specified message, HMAC KMS key, and MAC algorithm does
 *       not match the HMAC specified in the request.</p>
 */
export class KMSInvalidMacException extends __BaseException {
  readonly name: "KMSInvalidMacException" = "KMSInvalidMacException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidMacException, __BaseException>) {
    super({
      name: "KMSInvalidMacException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidMacException.prototype);
  }
}

/**
 * <p>The request was rejected because the signature verification failed. Signature verification
 *       fails when it cannot confirm that signature was produced by signing the specified message with
 *       the specified KMS key and signing algorithm.</p>
 */
export class KMSInvalidSignatureException extends __BaseException {
  readonly name: "KMSInvalidSignatureException" = "KMSInvalidSignatureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidSignatureException, __BaseException>) {
    super({
      name: "KMSInvalidSignatureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidSignatureException.prototype);
  }
}

export interface ListAliasesRequest {
  /**
   * <p>Lists only aliases that are associated with the specified KMS key. Enter a KMS key in your
   *       Amazon Web Services account. </p>
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
   * <p>Returns only grants for the specified KMS key. This parameter is required.</p>
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

export interface ListKeyPoliciesRequest {
  /**
   * <p>Gets the names of key policies for the specified KMS key.</p>
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

export interface ListResourceTagsRequest {
  /**
   * <p>Gets tags on the specified KMS key.</p>
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

export interface ListResourceTagsResponse {
  /**
   * <p>A list of tags. Each tag consists of a tag key and a tag value.</p>
   *          <note>
   *             <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
   * <p>The retiring principal for which to list grants. Enter a principal in your
   *       Amazon Web Services account.</p>
   *          <p>To specify the retiring principal, use the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an
   *       Amazon Web Services principal. Valid Amazon Web Services principals include Amazon Web Services accounts (root), IAM users, federated
   *       users, and assumed role users. For examples of the ARN syntax for specifying a principal, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services Identity and Access Management (IAM)</a> in the Example ARNs section of the
   *         <i>Amazon Web Services General Reference</i>.</p>
   */
  RetiringPrincipal: string | undefined;
}

export enum MessageType {
  DIGEST = "DIGEST",
  RAW = "RAW",
}

export interface PutKeyPolicyRequest {
  /**
   * <p>Sets the key policy on the specified KMS key.</p>
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
   *           subsequent <code>PutKeyPolicy</code> request on the KMS key. This reduces the risk that
   *           the KMS key becomes unmanageable. For more information, refer to the scenario in the
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i>Key Management Service Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>Each statement in the key policy must contain one or more principals. The principals
   *           in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services
   *           principal (for example, an IAM user or role), you might need to enforce a delay before
   *           including the new principal in a key policy because the new principal might not be
   *           immediately visible to KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>Amazon Web Services
   *             Identity and Access Management User Guide</i>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>A key policy document can include only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Printable ASCII characters from the space character (<code>\u0020</code>) through the end of the ASCII character range.</p>
   *             </li>
   *             <li>
   *                <p>Printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>).</p>
   *             </li>
   *             <li>
   *                <p>The tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>) special characters</p>
   *             </li>
   *          </ul>
   *          <p>For information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key policies in KMS</a> in the
   *       <i>Key Management Service Developer Guide</i>.For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>
   *                <i>Identity and Access Management User Guide</i>
   *             </i>.</p>
   */
  Policy: string | undefined;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do
   *         not set this value to true indiscriminately.</p>
   *             <p>For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>Key Management Service Developer Guide</i>.</p>
   *          </important>
   *          <p>Use this parameter only when you intend to prevent the principal that is making the
   *       request from making a subsequent <code>PutKeyPolicy</code> request on the KMS key.</p>
   *          <p>The default value is false.</p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;
}

export interface ReEncryptRequest {
  /**
   * <p>Ciphertext of the data to reencrypt.</p>
   */
  CiphertextBlob: Uint8Array | undefined;

  /**
   * <p>Specifies the encryption context to use to decrypt the ciphertext. Enter the same
   *       encryption context that was used to encrypt the ciphertext.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  SourceEncryptionContext?: Record<string, string>;

  /**
   * <p>Specifies the KMS key that KMS will use to decrypt the ciphertext before it is
   *       re-encrypted.</p>
   *          <p>Enter a key ID of the KMS key that was used to encrypt the ciphertext. If you identify a
   *       different KMS key, the <code>ReEncrypt</code> operation throws an
   *         <code>IncorrectKeyException</code>.</p>
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS
   *       key. If you used a symmetric encryption KMS key, KMS can get the KMS key from metadata that
   *       it adds to the symmetric ciphertext blob. However, it is always recommended as a best
   *       practice. This practice ensures that you use the KMS key that you intend.</p>
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
   * <p>A unique identifier for the KMS key that is used to reencrypt the data. Specify a
   *       symmetric encryption KMS key or an asymmetric KMS key with a <code>KeyUsage</code> value of
   *         <code>ENCRYPT_DECRYPT</code>. To find the <code>KeyUsage</code> value of a KMS key, use the
   *         <a>DescribeKey</a> operation.</p>
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
  DestinationKeyId: string | undefined;

  /**
   * <p>Specifies that encryption context to use when the reencrypting the data.</p>
   *          <p>A destination encryption context is valid only when the destination KMS key is a symmetric
   *       encryption KMS key. The standard ciphertext format for asymmetric KMS keys does not include
   *       fields for metadata.</p>
   *          <p>An <i>encryption context</i> is a collection of non-secret key-value pairs that represent additional authenticated data.
   * When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is supported
   * only on operations with symmetric encryption KMS keys. On operations with symmetric encryption KMS keys, an encryption context is optional, but it is strongly recommended.</p>
   *          <p>For more information, see
   * <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption context</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  DestinationEncryptionContext?: Record<string, string>;

  /**
   * <p>Specifies the encryption algorithm that KMS will use to decrypt the ciphertext before it
   *       is reencrypted. The default value, <code>SYMMETRIC_DEFAULT</code>, represents the algorithm
   *       used for symmetric encryption KMS keys.</p>
   *          <p>Specify the same algorithm that was used to encrypt the ciphertext. If you specify a
   *       different algorithm, the decrypt attempt fails.</p>
   *          <p>This parameter is required only when the ciphertext was encrypted under an asymmetric KMS
   *       key.</p>
   */
  SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec | string;

  /**
   * <p>Specifies the encryption algorithm that KMS will use to reecrypt the data after it has
   *       decrypted it. The default value, <code>SYMMETRIC_DEFAULT</code>, represents the encryption
   *       algorithm used for symmetric encryption KMS keys.</p>
   *          <p>This parameter is required only when the destination KMS key is an asymmetric KMS
   *       key.</p>
   */
  DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec | string;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
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

export interface ReplicateKeyRequest {
  /**
   * <p>Identifies the multi-Region primary key that is being replicated. To determine whether a
   *       KMS key is a multi-Region primary key, use the <a>DescribeKey</a> operation to
   *       check the value of the <code>MultiRegionKeyType</code> property.</p>
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
   *          <note>
   *             <p>HMAC KMS keys are not supported in all Amazon Web Services Regions. If you try to replicate an HMAC
   *         KMS key in an Amazon Web Services Region in which HMAC keys are not supported, the
   *           <code>ReplicateKey</code> operation returns an <code>UnsupportedOperationException</code>.
   *         For a list of Regions in which HMAC KMS keys are supported, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          </note>
   *          <p>The replica must be in a different Amazon Web Services Region than its primary key and other replicas of
   *       that primary key, but in the same Amazon Web Services partition. KMS must be available in the replica
   *       Region. If the Region is not enabled by default, the Amazon Web Services account must be enabled in the
   *       Region. For information about Amazon Web Services partitions, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the
   *       <i>Amazon Web Services General Reference</i>. For information about enabling and disabling Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a
   *         Region</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-disable">Disabling a Region</a> in the
   *       <i>Amazon Web Services General Reference</i>.</p>
   */
  ReplicaRegion: string | undefined;

  /**
   * <p>The key policy to attach to the KMS key. This parameter is optional. If you do not provide
   *       a key policy, KMS attaches the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">default key policy</a> to the
   *       KMS key.</p>
   *          <p>The key policy is not a shared property of multi-Region keys. You can specify the same key
   *       policy or a different key policy for each key in a set of related multi-Region keys. KMS
   *       does not synchronize this property.</p>
   *          <p>If you provide a key policy, it must meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't set <code>BypassPolicyLockoutSafetyCheck</code> to true, the key policy
   *           must give the caller <code>kms:PutKeyPolicy</code> permission on the replica key. This
   *           reduces the risk that the KMS key becomes unmanageable. For more information, refer to the
   *           scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section of the <i>
   *                      <i>Key Management Service Developer Guide</i>
   *                   </i>.</p>
   *             </li>
   *             <li>
   *                <p>Each statement in the key policy must contain one or more principals. The principals
   *           in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services
   *           principal (for example, an IAM user or role), you might need to enforce a delay before
   *           including the new principal in a key policy because the new principal might not be
   *           immediately visible to KMS. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the
   *             <i>
   *                      <i>Identity and Access Management User Guide</i>
   *                   </i>.</p>
   *             </li>
   *          </ul>
   *
   *          <p>A key policy document can include only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Printable ASCII characters from the space character (<code>\u0020</code>) through the end of the ASCII character range.</p>
   *             </li>
   *             <li>
   *                <p>Printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>).</p>
   *             </li>
   *             <li>
   *                <p>The tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>) special characters</p>
   *             </li>
   *          </ul>
   *          <p>For information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key policies in KMS</a> in the <i>Key Management Service Developer Guide</i>.
   *       For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>
   *                <i>Identity and Access Management User Guide</i>
   *             </i>.</p>
   */
  Policy?: string;

  /**
   * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the KMS key becomes unmanageable. Do
   *         not set this value to true indiscriminately.</p>
   *             <p>For more information, refer to the scenario in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>Key Management Service Developer Guide</i>.</p>
   *          </important>
   *          <p>Use this parameter only when you intend to prevent the principal that is making the
   *       request from making a subsequent <code>PutKeyPolicy</code> request on the KMS key.</p>
   *          <p>The default value is false.</p>
   */
  BypassPolicyLockoutSafetyCheck?: boolean;

  /**
   * <p>A description of the KMS key. The default value is an empty string (no
   *       description).</p>
   *          <p>The description is not a shared property of multi-Region keys. You can specify the same
   *       description or a different description for each key in a set of related multi-Region keys.
   *       KMS does not synchronize this property.</p>
   */
  Description?: string;

  /**
   * <p>Assigns one or more tags to the replica key. Use this parameter to tag the KMS key when it
   *       is created. To tag an existing KMS key, use the <a>TagResource</a>
   *       operation.</p>
   *          <note>
   *             <p>Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/abac.html">ABAC for KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          </note>
   *          <p>To use this parameter, you must have <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:TagResource</a> permission in an IAM policy.</p>
   *          <p>Tags are not a shared property of multi-Region keys. You can specify the same tags or
   *       different tags for each key in a set of related multi-Region keys. KMS does not synchronize
   *       this property.</p>
   *          <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are
   *       required, but the tag value can be an empty (null) string. You cannot have more than one tag
   *       on a KMS key with the same tag key. If you specify an existing tag key with a different tag
   *       value, KMS replaces the current tag value with the specified one.</p>
   *          <p>When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation
   *               report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details,
   *               see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging Keys</a>.</p>
   */
  Tags?: Tag[];
}

export interface ReplicateKeyResponse {
  /**
   * <p>Displays details about the new replica key, including its Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) and
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a>. It also includes the ARN and Amazon Web Services Region of its primary key and other
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

export interface RetireGrantRequest {
  /**
   * <p>Identifies the grant to be retired. You can use a grant token to identify a new grant even
   *       before it has achieved eventual consistency.</p>
   *          <p>Only the <a>CreateGrant</a> operation returns a grant token. For details, see
   *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a>
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
   *         <a>ListGrants</a>, or <a>ListRetirableGrants</a>.</p>
   *          <ul>
   *             <li>
   *                <p>Grant ID Example -
   *           0123456789012345678901234567890123456789012345678901234567890123</p>
   *             </li>
   *          </ul>
   */
  GrantId?: string;
}

export interface RevokeGrantRequest {
  /**
   * <p>A unique identifier for the KMS key associated with the grant. To get the key ID and key
   *       ARN for a KMS key, use <a>ListKeys</a> or <a>DescribeKey</a>.</p>
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
   *         <a>ListGrants</a>, or <a>ListRetirableGrants</a>.</p>
   */
  GrantId: string | undefined;
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
   *          <p>If the KMS key is a multi-Region primary key with replica keys, the waiting period begins
   *       when the last of its replica keys is deleted. Otherwise, the waiting period begins
   *       immediately.</p>
   *          <p>This value is optional. If you include a value, it must be between 7 and 30, inclusive. If
   *       you do not include a value, it defaults to 30.</p>
   */
  PendingWindowInDays?: number;
}

export interface ScheduleKeyDeletionResponse {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">key ARN</a>) of the KMS key whose deletion is scheduled.</p>
   */
  KeyId?: string;

  /**
   * <p>The date and time after which KMS deletes the KMS key.</p>
   *          <p>If the KMS key is a multi-Region primary key with replica keys, this field does not
   *       appear. The deletion date for the primary key isn't known until its last replica key is
   *       deleted.</p>
   */
  DeletionDate?: Date;

  /**
   * <p>The current status of the KMS key.</p>
   *          <p>For more information about how key state affects the use of a KMS key, see
   *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  KeyState?: KeyState | string;

  /**
   * <p>The waiting period before the KMS key is deleted. </p>
   *          <p>If the KMS key is a multi-Region primary key with replicas, the waiting period begins when
   *       the last of its replica keys is deleted. Otherwise, the waiting period begins
   *       immediately.</p>
   */
  PendingWindowInDays?: number;
}

export interface SignRequest {
  /**
   * <p>Identifies an asymmetric KMS key. KMS uses the private key in the asymmetric KMS key to
   *       sign the message. The <code>KeyUsage</code> type of the KMS key must be
   *         <code>SIGN_VERIFY</code>. To find the <code>KeyUsage</code> of a KMS key, use the <a>DescribeKey</a> operation.</p>
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
   *          <p>Choose an algorithm that is compatible with the type and size of the specified asymmetric
   *       KMS key.</p>
   */
  SigningAlgorithm: SigningAlgorithmSpec | string | undefined;
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

export interface UpdateAliasRequest {
  /**
   * <p>Identifies the alias that is changing its KMS key. This value must begin with
   *         <code>alias/</code> followed by the alias name, such as <code>alias/ExampleAlias</code>. You
   *       cannot use <code>UpdateAlias</code> to change the alias name.</p>
   */
  AliasName: string | undefined;

  /**
   * <p>Identifies the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> to associate with the alias. You don't have permission to
   *       associate an alias with an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
   *          <p>The KMS key must be in the same Amazon Web Services account and Region as the alias. Also, the new
   *       target KMS key must be the same type as the current target KMS key (both symmetric or both
   *       asymmetric or both HMAC) and they must have the same key usage. </p>
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
   *
   *          <p>To verify that the alias is mapped to the correct KMS key, use <a>ListAliases</a>.</p>
   */
  TargetKeyId: string | undefined;
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
   *          <p>To change this value, an CloudHSM key store must be disconnected. An external key store can
   *       be connected or disconnected.</p>
   */
  NewCustomKeyStoreName?: string;

  /**
   * <p>Enter the current password of the <code>kmsuser</code> crypto user (CU) in the CloudHSM
   *       cluster that is associated with the custom key store. This parameter is valid only for custom
   *       key stores with a <code>CustomKeyStoreType</code> of <code>AWS_CLOUDHSM</code>.</p>
   *          <p>This parameter tells KMS the current password of the <code>kmsuser</code> crypto user
   *       (CU). It does not set or change the password of any users in the CloudHSM cluster.</p>
   *          <p>To change this value, the CloudHSM key store must be disconnected.</p>
   */
  KeyStorePassword?: string;

  /**
   * <p>Associates the custom key store with a related CloudHSM cluster. This parameter is valid only
   *       for custom key stores with a <code>CustomKeyStoreType</code> of
   *       <code>AWS_CLOUDHSM</code>.</p>
   *          <p>Enter the cluster ID of the cluster that you used to create the custom key store or a
   *       cluster that shares a backup history and has the same cluster certificate as the original
   *       cluster. You cannot use this parameter to associate a custom key store with an unrelated
   *       cluster. In addition, the replacement cluster must <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">fulfill the requirements</a> for
   *       a cluster associated with a custom key store. To view the cluster certificate of a cluster,
   *       use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
   *          <p>To change this value, the CloudHSM key store must be disconnected.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>Changes the URI endpoint that KMS uses to connect to your external key store proxy (XKS
   *       proxy). This parameter is valid only for custom key stores with a
   *         <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>For external key stores with an <code>XksProxyConnectivity</code> value of
   *         <code>PUBLIC_ENDPOINT</code>, the protocol must be HTTPS.</p>
   *          <p>For external key stores with an <code>XksProxyConnectivity</code> value of
   *         <code>VPC_ENDPOINT_SERVICE</code>, specify <code>https://</code> followed by the private DNS
   *       name associated with the VPC endpoint service. Each external key store must use a different
   *       private DNS name.</p>
   *          <p>The combined <code>XksProxyUriEndpoint</code> and <code>XksProxyUriPath</code> values must
   *       be unique in the Amazon Web Services account and Region.</p>
   *          <p>To change this value, the external key store must be disconnected.</p>
   */
  XksProxyUriEndpoint?: string;

  /**
   * <p>Changes the base path to the proxy APIs for this external key store. To find this value,
   *       see the documentation for your external key manager and external key store proxy (XKS proxy).
   *       This parameter is valid only for custom key stores with a <code>CustomKeyStoreType</code> of
   *         <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>The value must start with <code>/</code> and must end with <code>/kms/xks/v1</code>, where
   *         <code>v1</code> represents the version of the KMS external key store proxy API. You can
   *       include an optional prefix between the required elements such as
   *           <code>/<i>example</i>/kms/xks/v1</code>.</p>
   *          <p>The combined <code>XksProxyUriEndpoint</code> and <code>XksProxyUriPath</code> values must
   *       be unique in the Amazon Web Services account and Region.</p>
   *          <p>You can change this value when the external key store is connected or disconnected.</p>
   */
  XksProxyUriPath?: string;

  /**
   * <p>Changes the name that KMS uses to identify the Amazon VPC endpoint service for your external
   *       key store proxy (XKS proxy). This parameter is valid when the <code>CustomKeyStoreType</code>
   *       is <code>EXTERNAL_KEY_STORE</code> and the <code>XksProxyConnectivity</code> is
   *         <code>VPC_ENDPOINT_SERVICE</code>.</p>
   *          <p>To change this value, the external key store must be disconnected.</p>
   */
  XksProxyVpcEndpointServiceName?: string;

  /**
   * <p>Changes the credentials that KMS uses to sign requests to the external key store proxy
   *       (XKS proxy). This parameter is valid only for custom key stores with a
   *         <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>.</p>
   *          <p>You must specify both the <code>AccessKeyId</code> and <code>SecretAccessKey</code> value
   *       in the authentication credential, even if you are only updating one value.</p>
   *          <p>This parameter doesn't establish or change your authentication credentials on the proxy.
   *       It just tells KMS the credential that you established with your external key store proxy.
   *       For example, if you rotate the credential on your external key store proxy, you can use this
   *       parameter to update the credential in KMS.</p>
   *          <p>You can change this value when the external key store is connected or disconnected.</p>
   */
  XksProxyAuthenticationCredential?: XksProxyAuthenticationCredentialType;

  /**
   * <p>Changes the connectivity setting for the external key store. To indicate that the external
   *       key store proxy uses a Amazon VPC endpoint service to communicate with KMS, specify
   *         <code>VPC_ENDPOINT_SERVICE</code>. Otherwise, specify <code>PUBLIC_ENDPOINT</code>.</p>
   *          <p>If you change the <code>XksProxyConnectivity</code> to <code>VPC_ENDPOINT_SERVICE</code>,
   *       you must also change the <code>XksProxyUriEndpoint</code> and add an
   *         <code>XksProxyVpcEndpointServiceName</code> value. </p>
   *          <p>If you change the <code>XksProxyConnectivity</code> to <code>PUBLIC_ENDPOINT</code>, you
   *       must also change the <code>XksProxyUriEndpoint</code> and specify a null or empty string for
   *       the <code>XksProxyVpcEndpointServiceName</code> value.</p>
   *          <p>To change this value, the external key store must be disconnected.</p>
   */
  XksProxyConnectivity?: XksProxyConnectivityType | string;
}

export interface UpdateCustomKeyStoreResponse {}

export interface UpdateKeyDescriptionRequest {
  /**
   * <p>Updates the description of the specified KMS key.</p>
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
   * <p>New description for the KMS key.</p>
   */
  Description: string | undefined;
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
   * <p>The Amazon Web Services Region of the new primary key. Enter the Region ID, such as
   *         <code>us-east-1</code> or <code>ap-southeast-2</code>. There must be an existing replica key
   *       in this Region. </p>
   *          <p>When the operation completes, the multi-Region key in this Region will be the primary
   *       key.</p>
   */
  PrimaryRegion: string | undefined;
}

export interface VerifyRequest {
  /**
   * <p>Identifies the asymmetric KMS key that will be used to verify the signature. This must be
   *       the same KMS key that was used to generate the signature. If you specify a different KMS key,
   *       the signature verification fails.</p>
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

export interface VerifyMacRequest {
  /**
   * <p>The message that will be used in the verification. Enter the same message that was used to
   *       generate the HMAC.</p>
   *          <p>
   *             <a>GenerateMac</a> and <code>VerifyMac</code> do not provide special handling
   *       for message digests. If you generated an HMAC for a hash digest of a message, you must verify
   *       the HMAC for the same hash digest.</p>
   */
  Message: Uint8Array | undefined;

  /**
   * <p>The KMS key that will be used in the verification.</p>
   *
   *          <p>Enter a key ID of the KMS key that was used to generate the HMAC. If you identify a
   *       different KMS key, the <code>VerifyMac</code> operation fails.</p>
   */
  KeyId: string | undefined;

  /**
   * <p>The MAC algorithm that will be used in the verification. Enter the same MAC algorithm that
   *       was used to compute the HMAC. This algorithm must be supported by the HMAC KMS key identified
   *       by the <code>KeyId</code> parameter.</p>
   */
  MacAlgorithm: MacAlgorithmSpec | string | undefined;

  /**
   * <p>The HMAC to verify. Enter the HMAC that was generated by the <a>GenerateMac</a>
   *       operation when you specified the same message, HMAC KMS key, and MAC algorithm as the values
   *       specified in this request.</p>
   */
  Mac: Uint8Array | undefined;

  /**
   * <p>A list of grant tokens.</p>
   *          <p>Use a grant token when your permission to call this operation comes from a new grant that has not yet achieved <i>eventual consistency</i>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">Grant token</a> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#using-grant-token">Using a grant token</a> in the
   *     <i>Key Management Service Developer Guide</i>.</p>
   */
  GrantTokens?: string[];
}

export interface VerifyMacResponse {
  /**
   * <p>The HMAC KMS key used in the verification.</p>
   */
  KeyId?: string;

  /**
   * <p>A Boolean value that indicates whether the HMAC was verified. A value of <code>True</code>
   *       indicates that the HMAC (<code>Mac</code>) was generated with the specified
   *         <code>Message</code>, HMAC KMS key (<code>KeyID</code>) and
   *       <code>MacAlgorithm.</code>.</p>
   *          <p>If the HMAC is not verified, the <code>VerifyMac</code> operation fails with a
   *         <code>KMSInvalidMacException</code> exception. This exception indicates that one or more of
   *       the inputs changed since the HMAC was computed.</p>
   */
  MacValid?: boolean;

  /**
   * <p>The MAC algorithm used in the verification.</p>
   */
  MacAlgorithm?: MacAlgorithmSpec | string;
}

/**
 * @internal
 */
export const AliasListEntryFilterSensitiveLog = (obj: AliasListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelKeyDeletionRequestFilterSensitiveLog = (obj: CancelKeyDeletionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelKeyDeletionResponseFilterSensitiveLog = (obj: CancelKeyDeletionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectCustomKeyStoreRequestFilterSensitiveLog = (obj: ConnectCustomKeyStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectCustomKeyStoreResponseFilterSensitiveLog = (obj: ConnectCustomKeyStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAliasRequestFilterSensitiveLog = (obj: CreateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const XksProxyAuthenticationCredentialTypeFilterSensitiveLog = (
  obj: XksProxyAuthenticationCredentialType
): any => ({
  ...obj,
  ...(obj.AccessKeyId && { AccessKeyId: SENSITIVE_STRING }),
  ...(obj.RawSecretAccessKey && { RawSecretAccessKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateCustomKeyStoreRequestFilterSensitiveLog = (obj: CreateCustomKeyStoreRequest): any => ({
  ...obj,
  ...(obj.KeyStorePassword && { KeyStorePassword: SENSITIVE_STRING }),
  ...(obj.XksProxyAuthenticationCredential && {
    XksProxyAuthenticationCredential: XksProxyAuthenticationCredentialTypeFilterSensitiveLog(
      obj.XksProxyAuthenticationCredential
    ),
  }),
});

/**
 * @internal
 */
export const CreateCustomKeyStoreResponseFilterSensitiveLog = (obj: CreateCustomKeyStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantConstraintsFilterSensitiveLog = (obj: GrantConstraints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGrantRequestFilterSensitiveLog = (obj: CreateGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGrantResponseFilterSensitiveLog = (obj: CreateGrantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateKeyRequestFilterSensitiveLog = (obj: CreateKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionKeyFilterSensitiveLog = (obj: MultiRegionKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiRegionConfigurationFilterSensitiveLog = (obj: MultiRegionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const XksKeyConfigurationTypeFilterSensitiveLog = (obj: XksKeyConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyMetadataFilterSensitiveLog = (obj: KeyMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateKeyResponseFilterSensitiveLog = (obj: CreateKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const XksProxyConfigurationTypeFilterSensitiveLog = (obj: XksProxyConfigurationType): any => ({
  ...obj,
  ...(obj.AccessKeyId && { AccessKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomKeyStoresListEntryFilterSensitiveLog = (obj: CustomKeyStoresListEntry): any => ({
  ...obj,
  ...(obj.XksProxyConfiguration && {
    XksProxyConfiguration: XksProxyConfigurationTypeFilterSensitiveLog(obj.XksProxyConfiguration),
  }),
});

/**
 * @internal
 */
export const DecryptRequestFilterSensitiveLog = (obj: DecryptRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DecryptResponseFilterSensitiveLog = (obj: DecryptResponse): any => ({
  ...obj,
  ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteAliasRequestFilterSensitiveLog = (obj: DeleteAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomKeyStoreRequestFilterSensitiveLog = (obj: DeleteCustomKeyStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomKeyStoreResponseFilterSensitiveLog = (obj: DeleteCustomKeyStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImportedKeyMaterialRequestFilterSensitiveLog = (obj: DeleteImportedKeyMaterialRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomKeyStoresRequestFilterSensitiveLog = (obj: DescribeCustomKeyStoresRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomKeyStoresResponseFilterSensitiveLog = (obj: DescribeCustomKeyStoresResponse): any => ({
  ...obj,
  ...(obj.CustomKeyStores && {
    CustomKeyStores: obj.CustomKeyStores.map((item) => CustomKeyStoresListEntryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeKeyRequestFilterSensitiveLog = (obj: DescribeKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeKeyResponseFilterSensitiveLog = (obj: DescribeKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableKeyRequestFilterSensitiveLog = (obj: DisableKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableKeyRotationRequestFilterSensitiveLog = (obj: DisableKeyRotationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisconnectCustomKeyStoreRequestFilterSensitiveLog = (obj: DisconnectCustomKeyStoreRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisconnectCustomKeyStoreResponseFilterSensitiveLog = (obj: DisconnectCustomKeyStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableKeyRequestFilterSensitiveLog = (obj: EnableKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableKeyRotationRequestFilterSensitiveLog = (obj: EnableKeyRotationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptRequestFilterSensitiveLog = (obj: EncryptRequest): any => ({
  ...obj,
  ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EncryptResponseFilterSensitiveLog = (obj: EncryptResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateDataKeyRequestFilterSensitiveLog = (obj: GenerateDataKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateDataKeyResponseFilterSensitiveLog = (obj: GenerateDataKeyResponse): any => ({
  ...obj,
  ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GenerateDataKeyPairRequestFilterSensitiveLog = (obj: GenerateDataKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateDataKeyPairResponseFilterSensitiveLog = (obj: GenerateDataKeyPairResponse): any => ({
  ...obj,
  ...(obj.PrivateKeyPlaintext && { PrivateKeyPlaintext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GenerateDataKeyPairWithoutPlaintextRequestFilterSensitiveLog = (
  obj: GenerateDataKeyPairWithoutPlaintextRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateDataKeyPairWithoutPlaintextResponseFilterSensitiveLog = (
  obj: GenerateDataKeyPairWithoutPlaintextResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateDataKeyWithoutPlaintextRequestFilterSensitiveLog = (
  obj: GenerateDataKeyWithoutPlaintextRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateDataKeyWithoutPlaintextResponseFilterSensitiveLog = (
  obj: GenerateDataKeyWithoutPlaintextResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateMacRequestFilterSensitiveLog = (obj: GenerateMacRequest): any => ({
  ...obj,
  ...(obj.Message && { Message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GenerateMacResponseFilterSensitiveLog = (obj: GenerateMacResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateRandomRequestFilterSensitiveLog = (obj: GenerateRandomRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GenerateRandomResponseFilterSensitiveLog = (obj: GenerateRandomResponse): any => ({
  ...obj,
  ...(obj.Plaintext && { Plaintext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetKeyPolicyRequestFilterSensitiveLog = (obj: GetKeyPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyPolicyResponseFilterSensitiveLog = (obj: GetKeyPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyRotationStatusRequestFilterSensitiveLog = (obj: GetKeyRotationStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKeyRotationStatusResponseFilterSensitiveLog = (obj: GetKeyRotationStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetParametersForImportRequestFilterSensitiveLog = (obj: GetParametersForImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetParametersForImportResponseFilterSensitiveLog = (obj: GetParametersForImportResponse): any => ({
  ...obj,
  ...(obj.PublicKey && { PublicKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPublicKeyRequestFilterSensitiveLog = (obj: GetPublicKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPublicKeyResponseFilterSensitiveLog = (obj: GetPublicKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantListEntryFilterSensitiveLog = (obj: GrantListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportKeyMaterialRequestFilterSensitiveLog = (obj: ImportKeyMaterialRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportKeyMaterialResponseFilterSensitiveLog = (obj: ImportKeyMaterialResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KeyListEntryFilterSensitiveLog = (obj: KeyListEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAliasesRequestFilterSensitiveLog = (obj: ListAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAliasesResponseFilterSensitiveLog = (obj: ListAliasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGrantsRequestFilterSensitiveLog = (obj: ListGrantsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGrantsResponseFilterSensitiveLog = (obj: ListGrantsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeyPoliciesRequestFilterSensitiveLog = (obj: ListKeyPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeyPoliciesResponseFilterSensitiveLog = (obj: ListKeyPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeysRequestFilterSensitiveLog = (obj: ListKeysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKeysResponseFilterSensitiveLog = (obj: ListKeysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceTagsRequestFilterSensitiveLog = (obj: ListResourceTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceTagsResponseFilterSensitiveLog = (obj: ListResourceTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRetirableGrantsRequestFilterSensitiveLog = (obj: ListRetirableGrantsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutKeyPolicyRequestFilterSensitiveLog = (obj: PutKeyPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReEncryptRequestFilterSensitiveLog = (obj: ReEncryptRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReEncryptResponseFilterSensitiveLog = (obj: ReEncryptResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicateKeyRequestFilterSensitiveLog = (obj: ReplicateKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplicateKeyResponseFilterSensitiveLog = (obj: ReplicateKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetireGrantRequestFilterSensitiveLog = (obj: RetireGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeGrantRequestFilterSensitiveLog = (obj: RevokeGrantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleKeyDeletionRequestFilterSensitiveLog = (obj: ScheduleKeyDeletionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleKeyDeletionResponseFilterSensitiveLog = (obj: ScheduleKeyDeletionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SignRequestFilterSensitiveLog = (obj: SignRequest): any => ({
  ...obj,
  ...(obj.Message && { Message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SignResponseFilterSensitiveLog = (obj: SignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAliasRequestFilterSensitiveLog = (obj: UpdateAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomKeyStoreRequestFilterSensitiveLog = (obj: UpdateCustomKeyStoreRequest): any => ({
  ...obj,
  ...(obj.KeyStorePassword && { KeyStorePassword: SENSITIVE_STRING }),
  ...(obj.XksProxyAuthenticationCredential && {
    XksProxyAuthenticationCredential: XksProxyAuthenticationCredentialTypeFilterSensitiveLog(
      obj.XksProxyAuthenticationCredential
    ),
  }),
});

/**
 * @internal
 */
export const UpdateCustomKeyStoreResponseFilterSensitiveLog = (obj: UpdateCustomKeyStoreResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateKeyDescriptionRequestFilterSensitiveLog = (obj: UpdateKeyDescriptionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePrimaryRegionRequestFilterSensitiveLog = (obj: UpdatePrimaryRegionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifyRequestFilterSensitiveLog = (obj: VerifyRequest): any => ({
  ...obj,
  ...(obj.Message && { Message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifyResponseFilterSensitiveLog = (obj: VerifyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerifyMacRequestFilterSensitiveLog = (obj: VerifyMacRequest): any => ({
  ...obj,
  ...(obj.Message && { Message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const VerifyMacResponseFilterSensitiveLog = (obj: VerifyMacResponse): any => ({
  ...obj,
});
