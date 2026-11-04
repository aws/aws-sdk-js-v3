// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ECSServiceException as __BaseException } from "./ECSServiceException";

/**
 * You don't have authorization to perform the requested action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#AccessDeniedException";
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
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @public
 */
export class ClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ClientException";
  readonly name = "ClientException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @public
 */
export class ClusterNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ClusterNotFoundException";
  readonly name = "ClusterNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterNotFoundException, __BaseException>) {
    super({
      name: "ClusterNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterNotFoundException.prototype);
  }
}

/**
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The limit for the resource was exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#LimitExceededException";
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
 * These errors are usually caused by a server issue.
 *
 * @public
 */
export class ServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ServerException";
  readonly name = "ServerException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * The specified task isn't supported in this Region.
 *
 * @public
 */
export class UnsupportedFeatureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#UnsupportedFeatureException";
  readonly name = "UnsupportedFeatureException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedFeatureException, __BaseException>) {
    super({
      name: "UnsupportedFeatureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedFeatureException.prototype);
  }
}

/**
 * There's already a current Amazon ECS container agent update in progress on the container instance that's specified. If the container agent becomes disconnected while it's in a transitional stage, such as `PENDING` or `STAGING`, the update process can get stuck in that state. However, when the agent reconnects, it resumes where it stopped previously.
 *
 * @public
 */
export class UpdateInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#UpdateInProgressException";
  readonly name = "UpdateInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateInProgressException, __BaseException>) {
    super({
      name: "UpdateInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateInProgressException.prototype);
  }
}

/**
 * The specified namespace wasn't found.
 *
 * @public
 */
export class NamespaceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#NamespaceNotFoundException";
  readonly name = "NamespaceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NamespaceNotFoundException, __BaseException>) {
    super({
      name: "NamespaceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NamespaceNotFoundException.prototype);
  }
}

/**
 * The cluster contains one or more capacity providers that prevent the requested operation. This exception occurs when you try to delete a cluster that still has active capacity providers, including Amazon ECS Managed Instances capacity providers. You must first delete all capacity providers from the cluster before you can delete the cluster itself.
 *
 * @public
 */
export class ClusterContainsCapacityProviderException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ClusterContainsCapacityProviderException";
  readonly name = "ClusterContainsCapacityProviderException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsCapacityProviderException, __BaseException>) {
    super({
      name: "ClusterContainsCapacityProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsCapacityProviderException.prototype);
  }
}

/**
 * You can't delete a cluster that has registered container instances. First, deregister the container instances before you can delete the cluster. For more information, see [DeregisterContainerInstance](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html).
 *
 * @public
 */
export class ClusterContainsContainerInstancesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ClusterContainsContainerInstancesException";
  readonly name = "ClusterContainsContainerInstancesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsContainerInstancesException, __BaseException>) {
    super({
      name: "ClusterContainsContainerInstancesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsContainerInstancesException.prototype);
  }
}

/**
 * You can't delete a cluster that contains services. First, update the service to reduce its desired task count to 0, and then delete the service. For more information, see [UpdateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html) and [DeleteService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html).
 *
 * @public
 */
export class ClusterContainsServicesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ClusterContainsServicesException";
  readonly name = "ClusterContainsServicesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsServicesException, __BaseException>) {
    super({
      name: "ClusterContainsServicesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsServicesException.prototype);
  }
}

/**
 * You can't delete a cluster that has active tasks.
 *
 * @public
 */
export class ClusterContainsTasksException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ClusterContainsTasksException";
  readonly name = "ClusterContainsTasksException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClusterContainsTasksException, __BaseException>) {
    super({
      name: "ClusterContainsTasksException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClusterContainsTasksException.prototype);
  }
}

/**
 * The execute command cannot run. This error can be caused by any of the following configuration issues:
 *
 * - Incorrect IAM permissions
 * - The SSM agent is not installed or is not running
 * - There is an interface Amazon VPC endpoint for Amazon ECS, but there is not one for Systems Manager Session Manager
 *
 * For information about how to troubleshoot the issues, see [Troubleshooting issues with ECS Exec](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export class TargetNotConnectedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#TargetNotConnectedException";
  readonly name = "TargetNotConnectedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotConnectedException, __BaseException>) {
    super({
      name: "TargetNotConnectedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotConnectedException.prototype);
  }
}

/**
 * The specified resource is in-use and can't be removed.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The specified target wasn't found. You can view your available container instances with [ListContainerInstances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html). Amazon ECS container instances are cluster-specific and Region-specific.
 *
 * @public
 */
export class TargetNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#TargetNotFoundException";
  readonly name = "TargetNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetNotFoundException, __BaseException>) {
    super({
      name: "TargetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetNotFoundException.prototype);
  }
}

/**
 * The specified service wasn't found. You can view your available services with [ListServices](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html). Amazon ECS services are cluster specific and Region specific.
 *
 * @public
 */
export class ServiceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ServiceNotFoundException";
  readonly name = "ServiceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotFoundException, __BaseException>) {
    super({
      name: "ServiceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotFoundException.prototype);
  }
}

/**
 * You can apply up to 10 custom attributes for each resource. You can view the attributes of a resource with [ListAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html). You can remove existing attributes on a resource with [DeleteAttributes](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html).
 *
 * @public
 */
export class AttributeLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#AttributeLimitExceededException";
  readonly name = "AttributeLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttributeLimitExceededException, __BaseException>) {
    super({
      name: "AttributeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttributeLimitExceededException.prototype);
  }
}

/**
 * Amazon ECS can't determine the current version of the Amazon ECS container agent on the container instance and doesn't have enough information to proceed with an update. This could be because the agent running on the container instance is a previous or custom version that doesn't use our version information.
 *
 * @public
 */
export class MissingVersionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#MissingVersionException";
  readonly name = "MissingVersionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingVersionException, __BaseException>) {
    super({
      name: "MissingVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingVersionException.prototype);
  }
}

/**
 * There's no update available for this Amazon ECS container agent. This might be because the agent is already running the latest version or because it's so old that there's no update path to the current version.
 *
 * @public
 */
export class NoUpdateAvailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#NoUpdateAvailableException";
  readonly name = "NoUpdateAvailableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoUpdateAvailableException, __BaseException>) {
    super({
      name: "NoUpdateAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoUpdateAvailableException.prototype);
  }
}

/**
 * The service deploy ARN that you specified in the `ContinueServiceDeployment` doesn't exist. You can use `ListServiceDeployments` to retrieve the service deployment ARNs.
 *
 * @public
 */
export class ServiceDeploymentNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ServiceDeploymentNotFoundException";
  readonly name = "ServiceDeploymentNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceDeploymentNotFoundException, __BaseException>) {
    super({
      name: "ServiceDeploymentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceDeploymentNotFoundException.prototype);
  }
}

/**
 * The specified platform version doesn't exist.
 *
 * @public
 */
export class PlatformUnknownException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#PlatformUnknownException";
  readonly name = "PlatformUnknownException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformUnknownException, __BaseException>) {
    super({
      name: "PlatformUnknownException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformUnknownException.prototype);
  }
}

/**
 * The specified daemon isn't active. You can't update a daemon that's inactive. If you have previously deleted a daemon, you can re-create it with [CreateDaemon](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateDaemon.html).
 *
 * @public
 */
export class DaemonNotActiveException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#DaemonNotActiveException";
  readonly name = "DaemonNotActiveException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DaemonNotActiveException, __BaseException>) {
    super({
      name: "DaemonNotActiveException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DaemonNotActiveException.prototype);
  }
}

/**
 * The specified daemon wasn't found. You can view your available daemons with [ListDaemons](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListDaemons.html). Amazon ECS daemons are cluster specific and Region specific.
 *
 * @public
 */
export class DaemonNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#DaemonNotFoundException";
  readonly name = "DaemonNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DaemonNotFoundException, __BaseException>) {
    super({
      name: "DaemonNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DaemonNotFoundException.prototype);
  }
}

/**
 * The specified gateway wasn't found. Check that the gateway name or ARN is correct and that the gateway exists in your account and Region.
 *
 * @public
 */
export class GatewayNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#GatewayNotFoundException";
  readonly name = "GatewayNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GatewayNotFoundException, __BaseException>) {
    super({
      name: "GatewayNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GatewayNotFoundException.prototype);
  }
}

/**
 * The specified resource wasn't found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The specified platform version doesn't satisfy the required capabilities of the task definition.
 *
 * @public
 */
export class PlatformTaskDefinitionIncompatibilityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException";
  readonly name = "PlatformTaskDefinitionIncompatibilityException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformTaskDefinitionIncompatibilityException, __BaseException>) {
    super({
      name: "PlatformTaskDefinitionIncompatibilityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformTaskDefinitionIncompatibilityException.prototype);
  }
}

/**
 * The specified service isn't active. You can't update a service that's inactive. If you have previously deleted a service, you can re-create it with [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html).
 *
 * @public
 */
export class ServiceNotActiveException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ServiceNotActiveException";
  readonly name = "ServiceNotActiveException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotActiveException, __BaseException>) {
    super({
      name: "ServiceNotActiveException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotActiveException.prototype);
  }
}

/**
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The existing task ARNs which are already associated with the `clientToken`.
   *
   * @public
   */
  resourceIds?: string[] | undefined;

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
    this.resourceIds = opts.resourceIds;
  }
}

/**
 * The specified task set wasn't found. You can view your available task sets with [DescribeTaskSets](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html). Task sets are specific to each cluster, service and Region.
 *
 * @public
 */
export class TaskSetNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#TaskSetNotFoundException";
  readonly name = "TaskSetNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskSetNotFoundException, __BaseException>) {
    super({
      name: "TaskSetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskSetNotFoundException.prototype);
  }
}

/**
 * Your Amazon Web Services account was blocked. For more information, contact [Amazon Web Services Support](http://aws.amazon.com/contact-us/).
 *
 * @public
 */
export class BlockedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ecs#BlockedException";
  readonly name = "BlockedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlockedException, __BaseException>) {
    super({
      name: "BlockedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlockedException.prototype);
  }
}
