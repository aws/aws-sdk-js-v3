// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KMSServiceException as __BaseException } from "./KMSServiceException";

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 * @public
 */
export class DependencyTimeoutException extends __BaseException {
  readonly name = "DependencyTimeoutException" as const;
  readonly $fault = "server" as const;
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
 * @public
 */
export class InvalidArnException extends __BaseException {
  readonly name = "InvalidArnException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class KMSInternalException extends __BaseException {
  readonly name = "KMSInternalException" as const;
  readonly $fault = "server" as const;
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
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
  readonly name = "KMSInvalidStateException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CloudHsmClusterInUseException extends __BaseException {
  readonly name = "CloudHsmClusterInUseException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CloudHsmClusterInvalidConfigurationException extends __BaseException {
  readonly name = "CloudHsmClusterInvalidConfigurationException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CloudHsmClusterNotActiveException extends __BaseException {
  readonly name = "CloudHsmClusterNotActiveException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CloudHsmClusterNotFoundException extends __BaseException {
  readonly name = "CloudHsmClusterNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CloudHsmClusterNotRelatedException extends __BaseException {
  readonly name = "CloudHsmClusterNotRelatedException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The request was rejected because an automatic rotation of this key is currently in
 *       progress or scheduled to begin within the next 20 minutes. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

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
 * @public
 */
export class CustomKeyStoreInvalidStateException extends __BaseException {
  readonly name = "CustomKeyStoreInvalidStateException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CustomKeyStoreNotFoundException extends __BaseException {
  readonly name = "CustomKeyStoreNotFoundException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The request was rejected because the specified alias name is not valid.</p>
 * @public
 */
export class InvalidAliasNameException extends __BaseException {
  readonly name = "InvalidAliasNameException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because a length constraint or quota was exceeded. For more
 *       information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in
 *       the <i>Key Management Service Developer Guide</i>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The request was rejected because the specified custom key store name is already assigned
 *       to another custom key store in the account. Try again with a custom key store name that is
 *       unique in the account.</p>
 * @public
 */
export class CustomKeyStoreNameInUseException extends __BaseException {
  readonly name = "CustomKeyStoreNameInUseException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class IncorrectTrustAnchorException extends __BaseException {
  readonly name = "IncorrectTrustAnchorException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class XksProxyIncorrectAuthenticationCredentialException extends __BaseException {
  readonly name = "XksProxyIncorrectAuthenticationCredentialException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the external key store proxy is not configured correctly.
 *       To identify the cause, see the error message that accompanies the exception.</p>
 * @public
 */
export class XksProxyInvalidConfigurationException extends __BaseException {
  readonly name = "XksProxyInvalidConfigurationException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class XksProxyInvalidResponseException extends __BaseException {
  readonly name = "XksProxyInvalidResponseException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the <code>XksProxyUriEndpoint</code> is already
 *       associated with another external key store in this Amazon Web Services Region. To identify the cause, see
 *       the error message that accompanies the exception. </p>
 * @public
 */
export class XksProxyUriEndpointInUseException extends __BaseException {
  readonly name = "XksProxyUriEndpointInUseException" as const;
  readonly $fault = "client" as const;
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
 *       and <code>XksProxyUriPath</code> is already associated with another external key store in this
 *       Amazon Web Services Region. Each external key store in a Region must use a unique external key store proxy
 *       API address.</p>
 * @public
 */
export class XksProxyUriInUseException extends __BaseException {
  readonly name = "XksProxyUriInUseException" as const;
  readonly $fault = "client" as const;
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
 *          <p>This exception is also thrown when the external key store proxy response to a
 *         <code>GetHealthStatus</code> request indicates that all external key manager instances are
 *       unavailable.</p>
 * @public
 */
export class XksProxyUriUnreachableException extends __BaseException {
  readonly name = "XksProxyUriUnreachableException" as const;
  readonly $fault = "client" as const;
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
 *       associated with another external key store in this Amazon Web Services Region. Each external key store in a
 *       Region must use a different Amazon VPC endpoint service.</p>
 * @public
 */
export class XksProxyVpcEndpointServiceInUseException extends __BaseException {
  readonly name = "XksProxyVpcEndpointServiceInUseException" as const;
  readonly $fault = "client" as const;
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
 *       the requirements for an external key store. To identify the cause, see the error message that
 *       accompanies the exception and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/vpc-connectivity.html#xks-vpc-requirements">review the
 *         requirements</a> for Amazon VPC endpoint service connectivity for an external key
 *       store.</p>
 * @public
 */
export class XksProxyVpcEndpointServiceInvalidConfigurationException extends __BaseException {
  readonly name = "XksProxyVpcEndpointServiceInvalidConfigurationException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class XksProxyVpcEndpointServiceNotFoundException extends __BaseException {
  readonly name = "XksProxyVpcEndpointServiceNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the specified KMS key is not enabled.</p>
 * @public
 */
export class DisabledException extends __BaseException {
  readonly name = "DisabledException" as const;
  readonly $fault = "client" as const;
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
 * <p> The request was rejected because the DryRun parameter was specified. </p>
 * @public
 */
export class DryRunOperationException extends __BaseException {
  readonly name = "DryRunOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperationException, __BaseException>) {
    super({
      name: "DryRunOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperationException.prototype);
  }
}

/**
 * <p>The request was rejected because the specified grant token is not valid.</p>
 * @public
 */
export class InvalidGrantTokenException extends __BaseException {
  readonly name = "InvalidGrantTokenException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The request was rejected because the specified policy is not syntactically or semantically
 *       correct.</p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name = "MalformedPolicyDocumentException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class TagException extends __BaseException {
  readonly name = "TagException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the (<code>XksKeyId</code>) is already associated with
 *       another KMS key in this external key store. Each KMS key in an external key store must be
 *       associated with a different external key.</p>
 * @public
 */
export class XksKeyAlreadyInUseException extends __BaseException {
  readonly name = "XksKeyAlreadyInUseException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class XksKeyInvalidConfigurationException extends __BaseException {
  readonly name = "XksKeyInvalidConfigurationException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the external key store proxy could not find the external
 *       key. This exception is thrown when the value of the <code>XksKeyId</code> parameter doesn't
 *       identify a key in the external key manager associated with the external key proxy.</p>
 *          <p>Verify that the <code>XksKeyId</code> represents an existing key in the external key
 *       manager. Use the key identifier that the external key store proxy uses to identify the key.
 *       For details, see the documentation provided with your external key store proxy or key
 *       manager.</p>
 * @public
 */
export class XksKeyNotFoundException extends __BaseException {
  readonly name = "XksKeyNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CustomKeyStoreHasCMKsException extends __BaseException {
  readonly name = "CustomKeyStoreHasCMKsException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the specified KMS key cannot decrypt the data. The
 *         <code>KeyId</code> in a <a>Decrypt</a> request and the <code>SourceKeyId</code>
 *       in a <a>ReEncrypt</a> request must identify the same KMS key that was used to
 *       encrypt the ciphertext.</p>
 * @public
 */
export class IncorrectKeyException extends __BaseException {
  readonly name = "IncorrectKeyException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidCiphertextException extends __BaseException {
  readonly name = "InvalidCiphertextException" as const;
  readonly $fault = "client" as const;
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
 *         <code>GENERATE_VERIFY_MAC</code>. For deriving key agreement secrets, the
 *         <code>KeyUsage</code> must be <code>KEY_AGREEMENT</code>. To find the <code>KeyUsage</code>
 *       of a KMS key, use the <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 * @public
 */
export class InvalidKeyUsageException extends __BaseException {
  readonly name = "InvalidKeyUsageException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class KeyUnavailableException extends __BaseException {
  readonly name = "KeyUnavailableException" as const;
  readonly $fault = "server" as const;
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

/**
 * <p>The request was rejected because the marker that specifies where pagination should next
 *       begin is not valid.</p>
 * @public
 */
export class InvalidMarkerException extends __BaseException {
  readonly name = "InvalidMarkerException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The request was rejected because the specified import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new
 *       public key to encrypt the key material, and then try the request again.</p>
 * @public
 */
export class ExpiredImportTokenException extends __BaseException {
  readonly name = "ExpiredImportTokenException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The request was rejected because the key material in the request is, expired, invalid, or
 *       does not meet expectations. For example, it is not the same key material that was previously
 *       imported or KMS expected new key material but the key material being imported is already
 *       associated with the KMS key.</p>
 * @public
 */
export class IncorrectKeyMaterialException extends __BaseException {
  readonly name = "IncorrectKeyMaterialException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidImportTokenException extends __BaseException {
  readonly name = "InvalidImportTokenException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidGrantIdException extends __BaseException {
  readonly name = "InvalidGrantIdException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because the HMAC verification failed. HMAC verification fails
 *       when the HMAC computed by using the specified message, HMAC KMS key, and MAC algorithm does
 *       not match the HMAC specified in the request.</p>
 * @public
 */
export class KMSInvalidMacException extends __BaseException {
  readonly name = "KMSInvalidMacException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class KMSInvalidSignatureException extends __BaseException {
  readonly name = "KMSInvalidSignatureException" as const;
  readonly $fault = "client" as const;
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
