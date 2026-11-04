// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { KMSServiceException as __BaseException } from "./KMSServiceException";

/**
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#AlreadyExistsException";
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
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @public
 */
export class DependencyTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#DependencyTimeoutException";
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
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @public
 */
export class InvalidArnException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidArnException";
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
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @public
 */
export class KMSInternalException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#KMSInternalException";
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
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * This exceptions means one of the following:
 *
 * - The key state of the KMS key is not compatible with the operation.
 *
 *   To find the key state, use the DescribeKey operation. For more information about which key states are compatible with each KMS operation, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the **Key Management Service Developer Guide** .
 * - For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.
 *
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#KMSInvalidStateException";
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
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#NotFoundException";
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
 * The request was rejected because the specified CloudHSM cluster is already associated with an CloudHSM key store in the account, or it shares a backup history with an CloudHSM key store in the account. Each CloudHSM key store in the account must be associated with a different CloudHSM cluster.
 *
 * CloudHSM clusters that share a backup history have the same cluster certificate. To view the cluster certificate of an CloudHSM cluster, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation.
 *
 * @public
 */
export class CloudHsmClusterInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CloudHsmClusterInUseException";
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
 * @public
 */
export class CloudHsmClusterInvalidConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException";
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
 * The request was rejected because the CloudHSM cluster associated with the CloudHSM key store is not active. Initialize and activate the cluster and try the command again. For detailed instructions, see [Getting Started](https://docs.aws.amazon.com/cloudhsm/latest/userguide/getting-started.html) in the *CloudHSM User Guide*.
 *
 * @public
 */
export class CloudHsmClusterNotActiveException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CloudHsmClusterNotActiveException";
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
 * The request was rejected because KMS cannot find the CloudHSM cluster with the specified cluster ID. Retry the request with a different cluster ID.
 *
 * @public
 */
export class CloudHsmClusterNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CloudHsmClusterNotFoundException";
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
 * The request was rejected because the specified CloudHSM cluster has a different cluster certificate than the original cluster. You cannot use the operation to specify an unrelated cluster for an CloudHSM key store.
 *
 * Specify an CloudHSM cluster that shares a backup history with the original cluster. This includes clusters that were created from a backup of the current cluster, and clusters that were created from the same backup that produced the current cluster.
 *
 * CloudHSM clusters that share a backup history have the same cluster certificate. To view the cluster certificate of an CloudHSM cluster, use the [DescribeClusters](https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html) operation.
 *
 * @public
 */
export class CloudHsmClusterNotRelatedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CloudHsmClusterNotRelatedException";
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
 * The request was rejected because an automatic rotation of this key is currently in progress or scheduled to begin within the next 20 minutes.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#ConflictException";
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
 * @public
 */
export class CustomKeyStoreInvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CustomKeyStoreInvalidStateException";
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
 * The request was rejected because KMS cannot find a custom key store with the specified key store name or ID.
 *
 * @public
 */
export class CustomKeyStoreNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CustomKeyStoreNotFoundException";
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
 * The request was rejected because the specified alias name is not valid.
 *
 * @public
 */
export class InvalidAliasNameException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidAliasNameException";
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
 * The request was rejected because a length constraint or quota was exceeded. For more information, see [Quotas](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) in the *Key Management Service Developer Guide*.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#LimitExceededException";
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
 * The request was rejected because the specified custom key store name is already assigned to another custom key store in the account. Try again with a custom key store name that is unique in the account.
 *
 * @public
 */
export class CustomKeyStoreNameInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CustomKeyStoreNameInUseException";
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
 * The request was rejected because the trust anchor certificate in the request to create an CloudHSM key store is not the trust anchor certificate for the specified CloudHSM cluster.
 *
 * When you [initialize the CloudHSM cluster](https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr), you create the trust anchor certificate and save it in the `customerCA.crt` file.
 *
 * @public
 */
export class IncorrectTrustAnchorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#IncorrectTrustAnchorException";
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
 * The request was rejected because the proxy credentials failed to authenticate to the specified external key store proxy. The specified external key store proxy rejected a status request from KMS due to invalid credentials. This can indicate an error in the credentials or in the identification of the external key store proxy.
 *
 * @public
 */
export class XksProxyIncorrectAuthenticationCredentialException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyIncorrectAuthenticationCredentialException";
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
 * The request was rejected because the external key store proxy is not configured correctly. To identify the cause, see the error message that accompanies the exception.
 *
 * @public
 */
export class XksProxyInvalidConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyInvalidConfigurationException";
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
 * KMS cannot interpret the response it received from the external key store proxy. The problem might be a poorly constructed response, but it could also be a transient network issue. If you see this error repeatedly, report it to the proxy vendor.
 *
 * @public
 */
export class XksProxyInvalidResponseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyInvalidResponseException";
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
 * The request was rejected because the `XksProxyUriEndpoint` is already associated with another external key store in this Amazon Web Services Region. To identify the cause, see the error message that accompanies the exception.
 *
 * @public
 */
export class XksProxyUriEndpointInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyUriEndpointInUseException";
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
 * The request was rejected because the concatenation of the `XksProxyUriEndpoint` and `XksProxyUriPath` is already associated with another external key store in this Amazon Web Services Region. Each external key store in a Region must use a unique external key store proxy API address.
 *
 * @public
 */
export class XksProxyUriInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyUriInUseException";
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
 * KMS was unable to reach the specified `XksProxyUriPath`. The path must be reachable before you create the external key store or update its settings.
 *
 * This exception is also thrown when the external key store proxy response to a `GetHealthStatus` request indicates that all external key manager instances are unavailable.
 *
 * @public
 */
export class XksProxyUriUnreachableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyUriUnreachableException";
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
 * The request was rejected because the specified Amazon VPC endpoint service is already associated with another external key store in this Amazon Web Services Region. Each external key store in a Region must use a different Amazon VPC endpoint service.
 *
 * @public
 */
export class XksProxyVpcEndpointServiceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyVpcEndpointServiceInUseException";
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
 * The request was rejected because the Amazon VPC endpoint service configuration does not fulfill the requirements for an external key store. To identify the cause, see the error message that accompanies the exception and [review the requirements](https://docs.aws.amazon.com/kms/latest/developerguide/vpc-connectivity.html#xks-vpc-requirements) for Amazon VPC endpoint service connectivity for an external key store.
 *
 * @public
 */
export class XksProxyVpcEndpointServiceInvalidConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyVpcEndpointServiceInvalidConfigurationException";
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
 * The request was rejected because KMS could not find the specified VPC endpoint service. Use DescribeCustomKeyStores to verify the VPC endpoint service name for the external key store. Also, confirm that the `Allow principals` list for the VPC endpoint service includes the KMS service principal for the Region, such as `cks.kms.us-east-1.amazonaws.com`.
 *
 * @public
 */
export class XksProxyVpcEndpointServiceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksProxyVpcEndpointServiceNotFoundException";
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
 * The request was rejected because the specified KMS key is not enabled.
 *
 * @public
 */
export class DisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#DisabledException";
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
 * The request was rejected because the DryRun parameter was specified.
 *
 * @public
 */
export class DryRunOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#DryRunOperationException";
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
 * The request was rejected because the specified grant token is not valid.
 *
 * @public
 */
export class InvalidGrantTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidGrantTokenException";
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
 * The request was rejected because the specified policy is not syntactically or semantically correct.
 *
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#MalformedPolicyDocumentException";
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
 * The request was rejected because one or more tags are not valid.
 *
 * @public
 */
export class TagException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#TagException";
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
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#UnsupportedOperationException";
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
 * The request was rejected because the (`XksKeyId`) is already associated with another KMS key in this external key store. Each KMS key in an external key store must be associated with a different external key.
 *
 * @public
 */
export class XksKeyAlreadyInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksKeyAlreadyInUseException";
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
 * The request was rejected because the external key specified by the `XksKeyId` parameter did not meet the configuration requirements for an external key store.
 *
 * The external key must be an AES-256 symmetric key that is enabled and performs encryption and decryption.
 *
 * @public
 */
export class XksKeyInvalidConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksKeyInvalidConfigurationException";
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
 * The request was rejected because the external key store proxy could not find the external key. This exception is thrown when the value of the `XksKeyId` parameter doesn't identify a key in the external key manager associated with the external key proxy.
 *
 * Verify that the `XksKeyId` represents an existing key in the external key manager. Use the key identifier that the external key store proxy uses to identify the key. For details, see the documentation provided with your external key store proxy or key manager.
 *
 * @public
 */
export class XksKeyNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#XksKeyNotFoundException";
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
 * The request was rejected because the custom key store contains KMS keys. After verifying that you do not need to use the KMS keys, use the ScheduleKeyDeletion operation to delete the KMS keys. After they are deleted, you can delete the custom key store.
 *
 * @public
 */
export class CustomKeyStoreHasCMKsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#CustomKeyStoreHasCMKsException";
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
 * From the Decrypt or ReEncrypt operation, the request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.
 *
 * From the ImportKeyMaterial operation, the request was rejected because KMS could not decrypt the encrypted (wrapped) key material.
 *
 * From the Decapsulate operation, the request was rejected because the length of the `SharedSecretCiphertextBlob` is inconsistent with the specified ML-KEM key spec.
 *
 * @public
 */
export class InvalidCiphertextException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidCiphertextException";
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
 * The request was rejected for one of the following reasons:
 *
 * - The `KeyUsage` value of the KMS key is incompatible with the API operation.
 * - The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key `(KeySpec`).
 *
 * For encrypting, decrypting, re-encrypting, and generating data keys, the `KeyUsage` must be `ENCRYPT_DECRYPT`. For signing and verifying messages, the `KeyUsage` must be `SIGN_VERIFY`. For generating and verifying message authentication codes (MACs), the `KeyUsage` must be `GENERATE_VERIFY_MAC`. For deriving key agreement secrets, the `KeyUsage` must be `KEY_AGREEMENT`. For encapsulating and decapsulating shared secrets, the `KeyUsage` must be `ENCAPSULATE_DECAPSULATE`. To find the `KeyUsage` of a KMS key, use the DescribeKey operation.
 *
 * To find the encryption or signing algorithms supported for a particular KMS key, use the DescribeKey operation.
 *
 * @public
 */
export class InvalidKeyUsageException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidKeyUsageException";
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
 * The request was rejected because the specified KMS key was not available. You can retry the request.
 *
 * @public
 */
export class KeyUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#KeyUnavailableException";
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
 * The request was rejected because the specified KMS key cannot decrypt the data. The `KeyId` in a Decrypt request and the `SourceKeyId` in a ReEncrypt request must identify the same KMS key that was used to encrypt the ciphertext.
 *
 * @public
 */
export class IncorrectKeyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#IncorrectKeyException";
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
 * The request was rejected because the marker that specifies where pagination should next begin is not valid.
 *
 * @public
 */
export class InvalidMarkerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidMarkerException";
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
 * The request was rejected because the specified import token is expired. Use GetParametersForImport to get a new import token and public key, use the new public key to encrypt the key material, and then try the request again.
 *
 * @public
 */
export class ExpiredImportTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#ExpiredImportTokenException";
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
 * The request was rejected because the key material in the request is, expired, invalid, or does not meet expectations. For example, it is not the same key material that was previously imported or KMS expected new key material but the key material being imported is already associated with the KMS key.
 *
 * @public
 */
export class IncorrectKeyMaterialException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#IncorrectKeyMaterialException";
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
 * The request was rejected because the provided import token is invalid or is associated with a different KMS key.
 *
 * @public
 */
export class InvalidImportTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidImportTokenException";
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
 * The request was rejected because the specified `GrantId` is not valid.
 *
 * @public
 */
export class InvalidGrantIdException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#InvalidGrantIdException";
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
 * The request was rejected because the HMAC verification failed. HMAC verification fails when the HMAC computed by using the specified message, HMAC KMS key, and MAC algorithm does not match the HMAC specified in the request.
 *
 * @public
 */
export class KMSInvalidMacException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#KMSInvalidMacException";
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
 * The request was rejected because the signature verification failed. Signature verification fails when it cannot confirm that signature was produced by signing the specified message with the specified KMS key and signing algorithm.
 *
 * @public
 */
export class KMSInvalidSignatureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kms#KMSInvalidSignatureException";
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
