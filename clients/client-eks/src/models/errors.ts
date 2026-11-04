// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { EKSServiceException as __BaseException } from "./EKSServiceException";

/**
 * You don't have permissions to perform the requested operation. The [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The Fargate profile associated with the exception.
   *
   * @public
   */
  fargateProfileName?: string | undefined;

  /**
   * The specified parameter for the add-on name is invalid. Review the available parameters for the API request
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The Amazon EKS subscription ID with the exception.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.fargateProfileName = opts.fargateProfileName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * The specified resource could not be found. You can view your available clusters with `ListClusters`. You can view your available managed node groups with `ListNodegroups`. Amazon EKS clusters and node groups are Amazon Web Services Region specific.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The Fargate profile associated with the exception.
   *
   * @public
   */
  fargateProfileName?: string | undefined;

  /**
   * The Amazon EKS add-on name associated with the exception.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The Amazon EKS subscription ID with the exception.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.fargateProfileName = opts.fargateProfileName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * These errors are usually caused by a server-side issue.
 *
 * @public
 */
export class ServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ServerException";
  readonly name = "ServerException" as const;
  readonly $fault = "server" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The Amazon EKS add-on name associated with the exception.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The Amazon EKS subscription ID with the exception.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerException, __BaseException>) {
    super({
      name: "ServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * The service is unavailable. Back off and retry the operation.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The request is invalid given the state of the add-on name. Check the state of the cluster and the associated operations.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The Amazon EKS subscription ID with the exception.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * These errors are usually caused by a client action. Actions can include using an action or resource on behalf of an [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.
 *
 * @public
 */
export class ClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ClientException";
  readonly name = "ClientException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The Amazon EKS add-on name associated with the exception.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The Amazon EKS subscription ID with the exception.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>) {
    super({
      name: "ClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * The specified resource is in use.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The specified add-on name is in use.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
  }
}

/**
 * The request or operation couldn't be performed because a service is throttling requests.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.clusterName = opts.clusterName;
  }
}

/**
 * Amazon EKS detected upgrade readiness issues. Call the [`ListInsights`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListInsights.html) API to view detected upgrade blocking issues. Pass the [`force`](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html#API_UpdateClusterVersion_RequestBody) flag when updating to override upgrade readiness errors.
 *
 * @public
 */
export class InvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#InvalidStateException";
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.clusterName = opts.clusterName;
  }
}

/**
 * You have encountered a service limit on the specified resource.
 *
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ResourceLimitExceededException";
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The Amazon EKS subscription ID with the exception.
   *
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which you can choose subnets for your cluster.
 *
 * @public
 */
export class UnsupportedAvailabilityZoneException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#UnsupportedAvailabilityZoneException";
  readonly name = "UnsupportedAvailabilityZoneException" as const;
  readonly $fault = "client" as const;
  /**
   * The Amazon EKS cluster associated with the exception.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Amazon EKS managed node group associated with the exception.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The supported Availability Zones for your account. Choose subnets in these Availability Zones for your cluster.
   *
   * @public
   */
  validZones?: string[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAvailabilityZoneException, __BaseException>) {
    super({
      name: "UnsupportedAvailabilityZoneException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAvailabilityZoneException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.validZones = opts.validZones;
  }
}

/**
 * This exception is thrown if the request contains a semantic error. The precise meaning will depend on the API, and will be documented in the error message.
 *
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * A service resource associated with the request could not be found. Clients should not retry such requests.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#NotFoundException";
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
 * Required resources (such as service-linked roles) were created and are still propagating. Retry later.
 *
 * @public
 */
export class ResourcePropagationDelayException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.eks#ResourcePropagationDelayException";
  readonly name = "ResourcePropagationDelayException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePropagationDelayException, __BaseException>) {
    super({
      name: "ResourcePropagationDelayException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePropagationDelayException.prototype);
  }
}
