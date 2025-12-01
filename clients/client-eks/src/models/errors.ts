// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EKSServiceException as __BaseException } from "./EKSServiceException";

/**
 * <p>You don't have permissions to perform the requested operation. The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a>
 *             making the request must have at least one IAM permissions policy attached that grants
 *             the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 management</a> in the <i>IAM User Guide</i>. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   * @public
   */
  fargateProfileName?: string | undefined;

  /**
   * <p>The specified parameter for the add-on name is invalid. Review the available
   *             parameters for the API request</p>
   * @public
   */
  addonName?: string | undefined;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
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
 * <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The request is invalid given the state of the add-on name. Check the state of the
   *             cluster and the associated operations.</p>
   * @public
   */
  addonName?: string | undefined;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
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
 * <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   * @public
   */
  fargateProfileName?: string | undefined;

  /**
   * <p>The Amazon EKS add-on name associated with the exception.</p>
   * @public
   */
  addonName?: string | undefined;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
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
 * <p>These errors are usually caused by a server-side issue.</p>
 * @public
 */
export class ServerException extends __BaseException {
  readonly name = "ServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The Amazon EKS add-on name associated with the exception.</p>
   * @public
   */
  addonName?: string | undefined;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
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
 * <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 * @public
 */
export class ClientException extends __BaseException {
  readonly name = "ClientException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The Amazon EKS add-on name associated with the exception.</p>
   * @public
   */
  addonName?: string | undefined;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
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
 * <p>The specified resource is in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The specified add-on name is in use.</p>
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
 * <p>The request or operation couldn't be performed because a service is throttling
 *             requests.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
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
 * <p>You have encountered a service limit on the specified resource.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
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
 * <p>The service is unavailable. Back off and retry the operation.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
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
 * <p>At least one of your specified cluster subnets is in an Availability Zone that does not support
 *             Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which
 *             you can choose subnets for your cluster.</p>
 * @public
 */
export class UnsupportedAvailabilityZoneException extends __BaseException {
  readonly name = "UnsupportedAvailabilityZoneException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string | undefined;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * <p>The supported Availability Zones for your account. Choose subnets in these Availability Zones for your
   *             cluster.</p>
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
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning
 *             will depend on the API, and will be documented in the error message.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
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
 * <p>A service resource associated with the request could not be found. Clients should not
 *             retry such requests.</p>
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
 * <p>Required resources (such as service-linked roles) were created and are still
 *             propagating. Retry later.</p>
 * @public
 */
export class ResourcePropagationDelayException extends __BaseException {
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

/**
 * <p>Amazon EKS detected upgrade readiness issues. Call the <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListInsights.html">
 *                <code>ListInsights</code>
 *             </a> API to view detected upgrade blocking issues.
 *             Pass the <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html#API_UpdateClusterVersion_RequestBody">
 *                <code>force</code>
 *             </a> flag when updating to override upgrade readiness
 *             errors.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
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
