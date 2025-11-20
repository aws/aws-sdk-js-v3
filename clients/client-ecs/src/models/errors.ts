// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ECSServiceException as __BaseException } from "./ECSServiceException";

/**
 * <p>You don't have authorization to perform the requested action.</p>
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
 * <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 * @public
 */
export class ClientException extends __BaseException {
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
 * <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 * @public
 */
export class ClusterNotFoundException extends __BaseException {
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
 * <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS
 * 				service event messages</a>. </p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
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
 * <p>The limit for the resource was exceeded.</p>
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
 * <p>These errors are usually caused by a server issue.</p>
 * @public
 */
export class ServerException extends __BaseException {
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
 * <p>The specified task isn't supported in this Region.</p>
 * @public
 */
export class UnsupportedFeatureException extends __BaseException {
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
 * <p>There's already a current Amazon ECS container agent update in progress on the
 * 			container instance that's specified. If the container agent becomes disconnected while
 * 			it's in a transitional stage, such as <code>PENDING</code> or <code>STAGING</code>, the
 * 			update process can get stuck in that state. However, when the agent reconnects, it
 * 			resumes where it stopped previously.</p>
 * @public
 */
export class UpdateInProgressException extends __BaseException {
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
 * <p>The specified namespace wasn't found.</p>
 * @public
 */
export class NamespaceNotFoundException extends __BaseException {
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
 * <p>The specified platform version doesn't satisfy the required capabilities of the task
 * 			definition.</p>
 * @public
 */
export class PlatformTaskDefinitionIncompatibilityException extends __BaseException {
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
 * <p>The specified platform version doesn't exist.</p>
 * @public
 */
export class PlatformUnknownException extends __BaseException {
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
 * <p>The specified service isn't active. You can't update a service that's inactive. If you
 * 			have previously deleted a service, you can re-create it with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html">CreateService</a>.</p>
 * @public
 */
export class ServiceNotActiveException extends __BaseException {
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
 * <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 * @public
 */
export class ServiceNotFoundException extends __BaseException {
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
 * <p>The specified target wasn't found. You can view your available container instances
 * 			with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html">ListContainerInstances</a>. Amazon ECS container instances are cluster-specific
 * 			and Region-specific.</p>
 * @public
 */
export class TargetNotFoundException extends __BaseException {
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
 * <p>The cluster contains one or more capacity providers that prevent the requested
 * 			operation. This exception occurs when you try to delete a cluster that still has active
 * 			capacity providers, including Amazon ECS Managed Instances capacity providers. You must
 * 			first delete all capacity providers from the cluster before you can delete the cluster
 * 			itself.</p>
 * @public
 */
export class ClusterContainsCapacityProviderException extends __BaseException {
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
 * <p>You can't delete a cluster that has registered container instances. First, deregister
 * 			the container instances before you can delete the cluster. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html">DeregisterContainerInstance</a>.</p>
 * @public
 */
export class ClusterContainsContainerInstancesException extends __BaseException {
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
 * <p>You can't delete a cluster that contains services. First, update the service to reduce
 * 			its desired task count to 0, and then delete the service. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html">UpdateService</a> and
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html">DeleteService</a>.</p>
 * @public
 */
export class ClusterContainsServicesException extends __BaseException {
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
 * <p>You can't delete a cluster that has active tasks.</p>
 * @public
 */
export class ClusterContainsTasksException extends __BaseException {
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
 * <p>The specified task set wasn't found. You can view your available task sets with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html">DescribeTaskSets</a>. Task sets are specific to each cluster, service and
 * 			Region.</p>
 * @public
 */
export class TaskSetNotFoundException extends __BaseException {
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
 * <p>The specified resource wasn't found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>The execute command cannot run. This error can be caused by any of the following
 * 			configuration issues:</p>
 *          <ul>
 *             <li>
 *                <p>Incorrect IAM permissions</p>
 *             </li>
 *             <li>
 *                <p>The SSM agent is not installed or is not running</p>
 *             </li>
 *             <li>
 *                <p> There is an interface Amazon VPC endpoint for Amazon ECS, but there is not
 * 					one for Systems Manager Session Manager</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to troubleshoot the issues, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Troubleshooting issues with ECS
 * 				Exec</a> in the <i>Amazon Elastic Container Service Developer
 * 				Guide</i>.</p>
 * @public
 */
export class TargetNotConnectedException extends __BaseException {
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
 * <p>You can apply up to 10 custom attributes for each resource. You can view the
 * 			attributes of a resource with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html">ListAttributes</a>.
 * 			You can remove existing attributes on a resource with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html">DeleteAttributes</a>.</p>
 * @public
 */
export class AttributeLimitExceededException extends __BaseException {
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
 * <p>The specified resource is in-use and can't be removed.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
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
 * <p>Your Amazon Web
 * 				Services account was blocked. For more information, contact <a href="http://aws.amazon.com/contact-us/">
 * 				Amazon Web
 * 					Services Support</a>.</p>
 * @public
 */
export class BlockedException extends __BaseException {
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

/**
 * <p>The request could not be processed because of conflict in the current state of the
 * 			resource. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The existing task ARNs which are already associated with the
   * 			<code>clientToken</code>.</p>
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
 * <p>The service deploy ARN that you specified in the <code>StopServiceDeployment</code>
 * 			doesn't exist. You can use <code>ListServiceDeployments</code> to retrieve the service
 * 			deployment ARNs.</p>
 * @public
 */
export class ServiceDeploymentNotFoundException extends __BaseException {
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
 * <p>Amazon ECS can't determine the current version of the Amazon ECS container agent on
 * 			the container instance and doesn't have enough information to proceed with an update.
 * 			This could be because the agent running on the container instance is a previous or
 * 			custom version that doesn't use our version information.</p>
 * @public
 */
export class MissingVersionException extends __BaseException {
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
 * <p>There's no update available for this Amazon ECS container agent. This might be because
 * 			the agent is already running the latest version or because it's so old that there's no
 * 			update path to the current version.</p>
 * @public
 */
export class NoUpdateAvailableException extends __BaseException {
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
