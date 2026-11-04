// smithy-typescript generated code
import type { HandlerErrorCode, Operation, OperationStatus } from "./enums";

/**
 * @public
 */
export interface CancelResourceRequestInput {
  /**
   * The `RequestToken` of the `ProgressEvent` object returned by the resource operation request.
   *
   * @public
   */
  RequestToken: string | undefined;
}

/**
 * Represents the current status of a resource operation request. For more information, see [Managing resource operation requests](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html) in the *Amazon Web Services Cloud Control API User Guide*.
 *
 * @public
 */
export interface ProgressEvent {
  /**
   * The name of the resource type used in the operation.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The primary identifier for the resource.
   *
   * > **Note:** In some cases, the resource identifier may be available before the resource operation has reached a status of `SUCCESS`.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The unique token representing this resource operation request.
   *
   * Use the `RequestToken` with [GetResourceRequestStatus](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html) to return the current status of a resource operation request.
   *
   * @public
   */
  RequestToken?: string | undefined;

  /**
   * The unique token representing the Hooks operation for the request.
   *
   * @public
   */
  HooksRequestToken?: string | undefined;

  /**
   * The resource operation type.
   *
   * @public
   */
  Operation?: Operation | undefined;

  /**
   * The current status of the resource operation request.
   *
   * - `PENDING`: The resource operation hasn't yet started.
   * - `IN_PROGRESS`: The resource operation is currently in progress.
   * - `SUCCESS`: The resource operation has successfully completed.
   * - `FAILED`: The resource operation has failed. Refer to the error code and status message for more information.
   * - `CANCEL_IN_PROGRESS`: The resource operation is in the process of being canceled.
   * - `CANCEL_COMPLETE`: The resource operation has been canceled.
   *
   * @public
   */
  OperationStatus?: OperationStatus | undefined;

  /**
   * When the resource operation request was initiated.
   *
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * A JSON string containing the resource model, consisting of each resource property and its current value.
   *
   * @public
   */
  ResourceModel?: string | undefined;

  /**
   * Any message explaining the current status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * For requests with a status of `FAILED`, the associated error code.
   *
   * For error code definitions, see [Handler error codes](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-test-contract-errors.html) in the *CloudFormation Command Line Interface User Guide for Extension Development*.
   *
   * @public
   */
  ErrorCode?: HandlerErrorCode | undefined;

  /**
   * When to next request the status of this resource operation request.
   *
   * @public
   */
  RetryAfter?: Date | undefined;
}

/**
 * @public
 */
export interface CancelResourceRequestOutput {
  /**
   * Represents the current status of a resource operation request. For more information, see [Managing resource operation requests](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}

/**
 * @public
 */
export interface CreateResourceInput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the `handlers` section of the [resource type definition schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html).
   *
   * If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.
   *
   * For more information, see [Specifying credentials](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received.
   *
   * A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request.
   *
   * If you do not specify a client token, one is generated for inclusion in the request.
   *
   * For more information, see [Ensuring resource operation requests are unique](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Structured data format representing the desired state of the resource, consisting of that resource's properties and their desired values.
   *
   * > **Note:** Cloud Control API currently supports JSON as a structured data format.
   *
   * Specify the desired state as one of the following:
   *
   * - A JSON blob
   * - A local path containing the desired state in JSON data format
   *
   * For more information, see [Composing the desired state of the resource](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html#resource-operations-create-desiredstate) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * For more information about the properties of a specific resource, refer to the related topic for the resource in the [Resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation Users Guide*.
   *
   * @public
   */
  DesiredState: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceOutput {
  /**
   * Represents the current status of the resource creation request.
   *
   * After you have initiated a resource creation request, you can monitor the progress of your request by calling [GetResourceRequestStatus](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html) using the `RequestToken` of the `ProgressEvent` returned by `CreateResource`.
   *
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}

/**
 * @public
 */
export interface DeleteResourceInput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the `handlers` section of the [resource type definition schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html).
   *
   * If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.
   *
   * For more information, see [Specifying credentials](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received.
   *
   * A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request.
   *
   * If you do not specify a client token, one is generated for inclusion in the request.
   *
   * For more information, see [Ensuring resource operation requests are unique](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier for the resource.
   *
   * You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.
   *
   * For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values *in the order they are specified* in the primary identifier definition, separated by `|`.
   *
   * For more information, see [Identifying resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceOutput {
  /**
   * Represents the current status of the resource deletion request.
   *
   * After you have initiated a resource deletion request, you can monitor the progress of your request by calling [GetResourceRequestStatus](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html) using the `RequestToken` of the `ProgressEvent` returned by `DeleteResource`.
   *
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}

/**
 * @public
 */
export interface GetResourceInput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the `handlers` section of the [resource type definition schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html).
   *
   * If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.
   *
   * For more information, see [Specifying credentials](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The identifier for the resource.
   *
   * You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.
   *
   * For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values *in the order they are specified* in the primary identifier definition, separated by `|`.
   *
   * For more information, see [Identifying resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Represents information about a provisioned resource.
 *
 * @public
 */
export interface ResourceDescription {
  /**
   * The primary identifier for the resource.
   *
   * For more information, see [Identifying resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * A list of the resource properties and their current values.
   *
   * @public
   */
  Properties?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceOutput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * Represents information about a provisioned resource.
   *
   * @public
   */
  ResourceDescription?: ResourceDescription | undefined;
}

/**
 * @public
 */
export interface GetResourceRequestStatusInput {
  /**
   * A unique token used to track the progress of the resource operation request.
   *
   * Request tokens are included in the `ProgressEvent` type returned by a resource operation request.
   *
   * @public
   */
  RequestToken: string | undefined;
}

/**
 * Represents the current status of applicable Hooks for a resource operation request. It contains list of Hook invocation information for the resource specified in the request since the same target can invoke multiple Hooks. For more information, see [Managing resource operation requests with Amazon Web Services Cloud Control API](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html).
 *
 * @public
 */
export interface HookProgressEvent {
  /**
   * The type name of the Hook being invoked.
   *
   * @public
   */
  HookTypeName?: string | undefined;

  /**
   * The type version of the Hook being invoked.
   *
   * @public
   */
  HookTypeVersionId?: string | undefined;

  /**
   * The ARN of the Hook being invoked.
   *
   * @public
   */
  HookTypeArn?: string | undefined;

  /**
   * States whether the Hook is invoked before or after resource provisioning.
   *
   * @public
   */
  InvocationPoint?: string | undefined;

  /**
   * The status of the Hook invocation. The following are potential statuses:
   *
   * - `HOOK_PENDING`: The Hook was added to the invocation plan, but not yet invoked.
   * - `HOOK_IN_PROGRESS`: The Hook was invoked, but hasn't completed.
   * - `HOOK_COMPLETE_SUCCEEDED`: The Hook invocation is complete with a successful result.
   * - `HOOK_COMPLETE_FAILED`: The Hook invocation is complete with a failed result.
   * - `HOOK_FAILED`: The Hook invocation didn't complete successfully.
   *
   * @public
   */
  HookStatus?: string | undefined;

  /**
   * The time that the Hook invocation request initiated.
   *
   * @public
   */
  HookEventTime?: Date | undefined;

  /**
   * The message explaining the current Hook status.
   *
   * @public
   */
  HookStatusMessage?: string | undefined;

  /**
   * The failure mode of the invocation. The following are the potential statuses:
   *
   * - `FAIL`: This will fail the Hook invocation and the request associated with it.
   * - `WARN`: This will fail the Hook invocation, but not the request associated with it.
   *
   * @public
   */
  FailureMode?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceRequestStatusOutput {
  /**
   * Represents the current status of the resource operation request.
   *
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;

  /**
   * Lists Hook invocations for the specified target in the request. This is a list since the same target can invoke multiple Hooks.
   *
   * @public
   */
  HooksProgressEvent?: HookProgressEvent[] | undefined;
}

/**
 * The filter criteria to use in determining the requests returned.
 *
 * @public
 */
export interface ResourceRequestStatusFilter {
  /**
   * The operation types to include in the filter.
   *
   * @public
   */
  Operations?: Operation[] | undefined;

  /**
   * The operation statuses to include in the filter.
   *
   * - `PENDING`: The operation has been requested, but not yet initiated.
   * - `IN_PROGRESS`: The operation is in progress.
   * - `SUCCESS`: The operation completed.
   * - `FAILED`: The operation failed.
   * - `CANCEL_IN_PROGRESS`: The operation is in the process of being canceled.
   * - `CANCEL_COMPLETE`: The operation has been canceled.
   *
   * @public
   */
  OperationStatuses?: OperationStatus[] | undefined;
}

/**
 * @public
 */
export interface ListResourceRequestsInput {
  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * The default is `20`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous paginated request didn't return all of the remaining results, the response object's `NextToken` parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If there are no remaining results, the previous response object's `NextToken` parameter is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filter criteria to apply to the requests returned.
   *
   * @public
   */
  ResourceRequestStatusFilter?: ResourceRequestStatusFilter | undefined;
}

/**
 * @public
 */
export interface ListResourceRequestsOutput {
  /**
   * The requests that match the specified filter criteria.
   *
   * @public
   */
  ResourceRequestStatusSummaries?: ProgressEvent[] | undefined;

  /**
   * If the request doesn't return all of the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListResources` again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesInput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the `handlers` section of the [resource type definition schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html).
   *
   * If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.
   *
   * For more information, see [Specifying credentials](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * If the previous paginated request didn't return all of the remaining results, the response object's `NextToken` parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If there are no remaining results, the previous response object's `NextToken` parameter is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The resource model to use to select the resources to return.
   *
   * @public
   */
  ResourceModel?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesOutput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * Information about the specified resources, including primary identifier and resource model.
   *
   * @public
   */
  ResourceDescriptions?: ResourceDescription[] | undefined;

  /**
   * If the request doesn't return all of the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListResources` again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceInput {
  /**
   * The name of the resource type.
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the `handlers` section of the [resource type definition schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html).
   *
   * If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials.
   *
   * For more information, see [Specifying credentials](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-permissions) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received.
   *
   * A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request.
   *
   * If you do not specify a client token, one is generated for inclusion in the request.
   *
   * For more information, see [Ensuring resource operation requests are unique](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations.html#resource-operations-idempotency) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The identifier for the resource.
   *
   * You can specify the primary identifier, or any secondary identifier defined for the resource type in its resource schema. You can only specify one identifier. Primary identifiers can be specified as a string or JSON; secondary identifiers must be specified as JSON.
   *
   * For compound primary identifiers (that is, one that consists of multiple resource properties strung together), to specify the primary identifier as a string, list the property values *in the order they are specified* in the primary identifier definition, separated by `|`.
   *
   * For more information, see [Identifying resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-identifier.html) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A JavaScript Object Notation (JSON) document listing the patch operations that represent the updates to apply to the current resource properties. For details, see [Composing the patch document](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html#resource-operations-update-patch) in the *Amazon Web Services Cloud Control API User Guide*.
   *
   * @public
   */
  PatchDocument: string | undefined;
}

/**
 * @public
 */
export interface UpdateResourceOutput {
  /**
   * Represents the current status of the resource update request.
   *
   * Use the `RequestToken` of the `ProgressEvent` with [GetResourceRequestStatus](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html) to return the current status of a resource operation request.
   *
   * @public
   */
  ProgressEvent?: ProgressEvent | undefined;
}
