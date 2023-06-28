// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { TnbServiceException as __BaseException } from "./TnbServiceException";

/**
 * @public
 * <p>Insufficient permissions to make request.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface CancelSolNetworkOperationInput {
  /**
   * <p>The identifier of the network operation.</p>
   */
  nsLcmOpOccId: string | undefined;
}

/**
 * @public
 * <p>Unexpected error occurred. Problem on the server.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>Request references a resource that doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 * <p>Exception caused by throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface CreateSolFunctionPackageInput {
  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const OnboardingState = {
  CREATED: "CREATED",
  ERROR: "ERROR",
  ONBOARDED: "ONBOARDED",
} as const;

/**
 * @public
 */
export type OnboardingState = (typeof OnboardingState)[keyof typeof OnboardingState];

/**
 * @public
 * @enum
 */
export const OperationalState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type OperationalState = (typeof OperationalState)[keyof typeof OperationalState];

/**
 * @public
 * @enum
 */
export const UsageState = {
  IN_USE: "IN_USE",
  NOT_IN_USE: "NOT_IN_USE",
} as const;

/**
 * @public
 */
export type UsageState = (typeof UsageState)[keyof typeof UsageState];

/**
 * @public
 */
export interface CreateSolFunctionPackageOutput {
  /**
   * <p>ID of the function package.</p>
   */
  id: string | undefined;

  /**
   * <p>Function package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the function package.</p>
   */
  onboardingState: OnboardingState | string | undefined;

  /**
   * <p>Operational state of the function package.</p>
   */
  operationalState: OperationalState | string | undefined;

  /**
   * <p>Usage state of the function package.</p>
   */
  usageState: UsageState | string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Service quotas have been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface CreateSolNetworkInstanceInput {
  /**
   * <p>ID for network service descriptor.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network instance name.</p>
   */
  nsName: string | undefined;

  /**
   * <p>Network instance description.</p>
   */
  nsDescription?: string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSolNetworkInstanceOutput {
  /**
   * <p>Network instance ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network instance ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network instance name.</p>
   */
  nsInstanceName: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSolNetworkPackageInput {
  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const NsdOnboardingState = {
  CREATED: "CREATED",
  ERROR: "ERROR",
  ONBOARDED: "ONBOARDED",
} as const;

/**
 * @public
 */
export type NsdOnboardingState = (typeof NsdOnboardingState)[keyof typeof NsdOnboardingState];

/**
 * @public
 * @enum
 */
export const NsdOperationalState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type NsdOperationalState = (typeof NsdOperationalState)[keyof typeof NsdOperationalState];

/**
 * @public
 * @enum
 */
export const NsdUsageState = {
  IN_USE: "IN_USE",
  NOT_IN_USE: "NOT_IN_USE",
} as const;

/**
 * @public
 */
export type NsdUsageState = (typeof NsdUsageState)[keyof typeof NsdUsageState];

/**
 * @public
 */
export interface CreateSolNetworkPackageOutput {
  /**
   * <p>ID of the network package.</p>
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the network service descriptor in the network package.</p>
   */
  nsdOnboardingState: NsdOnboardingState | string | undefined;

  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   */
  nsdOperationalState: NsdOperationalState | string | undefined;

  /**
   * <p>Usage state of the network service descriptor in the network package.</p>
   */
  nsdUsageState: NsdUsageState | string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteSolFunctionPackageInput {
  /**
   * <p>ID of the function package.</p>
   */
  vnfPkgId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSolNetworkInstanceInput {
  /**
   * <p>Network instance ID.</p>
   */
  nsInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSolNetworkPackageInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdInfoId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DescriptorContentType = {
  TEXT_PLAIN: "text/plain",
} as const;

/**
 * @public
 */
export type DescriptorContentType = (typeof DescriptorContentType)[keyof typeof DescriptorContentType];

/**
 * @public
 * <p>Provides error information.</p>
 */
export interface ErrorInfo {
  /**
   * <p>Error cause.</p>
   */
  cause?: string;

  /**
   * <p>Error details.</p>
   */
  details?: string;
}

/**
 * @public
 * <p>Overrides of the TOSCA node.</p>
 */
export interface ToscaOverride {
  /**
   * <p>Name of the TOSCA override.</p>
   */
  name?: string;

  /**
   * <p>Default value for the override.</p>
   */
  defaultValue?: string;
}

/**
 * @public
 * <p>Metadata for function package artifacts.</p>
 *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
 */
export interface FunctionArtifactMeta {
  /**
   * <p>Lists of function package overrides.</p>
   */
  overrides?: ToscaOverride[];
}

/**
 * @public
 */
export interface GetSolFunctionInstanceInput {
  /**
   * <p>ID of the network function.</p>
   */
  vnfInstanceId: string | undefined;
}

/**
 * @public
 * <p>The metadata of a network function.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 */
export interface GetSolVnfcResourceInfoMetadata {
  /**
   * <p>Information about the node group.</p>
   */
  nodeGroup?: string;

  /**
   * <p>Information about the cluster.</p>
   */
  cluster?: string;

  /**
   * <p>Information about the helm chart.</p>
   */
  helmChart?: string;
}

/**
 * @public
 * <p>Details of resource associated with a network function.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 */
export interface GetSolVnfcResourceInfo {
  /**
   * <p>The metadata of the network function compute.</p>
   */
  metadata?: GetSolVnfcResourceInfoMetadata;
}

/**
 * @public
 * @enum
 */
export const VnfOperationalState = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type VnfOperationalState = (typeof VnfOperationalState)[keyof typeof VnfOperationalState];

/**
 * @public
 * <p>Information about the network function.</p>
 *          <p>A network function instance is a function in a function package .</p>
 */
export interface GetSolVnfInfo {
  /**
   * <p>State of the network function instance.</p>
   */
  vnfState?: VnfOperationalState | string;

  /**
   * <p>Compute info used by the network function instance.</p>
   */
  vnfcResourceInfo?: GetSolVnfcResourceInfo[];
}

/**
 * @public
 * @enum
 */
export const VnfInstantiationState = {
  INSTANTIATED: "INSTANTIATED",
  NOT_INSTANTIATED: "NOT_INSTANTIATED",
} as const;

/**
 * @public
 */
export type VnfInstantiationState = (typeof VnfInstantiationState)[keyof typeof VnfInstantiationState];

/**
 * @public
 * <p>The metadata of a network function instance.</p>
 *          <p>A network function instance is a function in a function package .</p>
 */
export interface GetSolFunctionInstanceMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionInstanceOutput {
  /**
   * <p>Network function instance ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network function instance ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network instance ID.</p>
   */
  nsInstanceId: string | undefined;

  /**
   * <p>Function package ID.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package descriptor ID.</p>
   */
  vnfdId: string | undefined;

  /**
   * <p>Network function provider.</p>
   */
  vnfProvider?: string;

  /**
   * <p>Network function product name.</p>
   */
  vnfProductName?: string;

  /**
   * <p>Function package descriptor version.</p>
   */
  vnfdVersion?: string;

  /**
   * <p>Network function instantiation state.</p>
   */
  instantiationState: VnfInstantiationState | string | undefined;

  /**
   * <p>Information about the network function.</p>
   *          <p>A network function instance is a function in a function package .</p>
   */
  instantiatedVnfInfo?: GetSolVnfInfo;

  /**
   * <p>The metadata of a network function instance.</p>
   *          <p>A network function instance is a function in a function package .</p>
   */
  metadata: GetSolFunctionInstanceMetadata | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolFunctionPackageInput {
  /**
   * <p>ID of the function package.</p>
   */
  vnfPkgId: string | undefined;
}

/**
 * @public
 * <p>Metadata related to the function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 */
export interface GetSolFunctionPackageMetadata {
  /**
   * <p>Metadata related to the function package descriptor of the function package.</p>
   */
  vnfd?: FunctionArtifactMeta;

  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionPackageOutput {
  /**
   * <p>Function package ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Function package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Function package onboarding state.</p>
   */
  onboardingState: OnboardingState | string | undefined;

  /**
   * <p>Function package operational state.</p>
   */
  operationalState: OperationalState | string | undefined;

  /**
   * <p>Function package usage state.</p>
   */
  usageState: UsageState | string | undefined;

  /**
   * <p>Function package descriptor  ID.</p>
   */
  vnfdId?: string;

  /**
   * <p>Network function provider.</p>
   */
  vnfProvider?: string;

  /**
   * <p>Network function product name.</p>
   */
  vnfProductName?: string;

  /**
   * <p>Function package descriptor version.</p>
   */
  vnfdVersion?: string;

  /**
   * <p>Metadata related to the function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  metadata?: GetSolFunctionPackageMetadata;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const PackageContentType = {
  APPLICATION_ZIP: "application/zip",
} as const;

/**
 * @public
 */
export type PackageContentType = (typeof PackageContentType)[keyof typeof PackageContentType];

/**
 * @public
 */
export interface GetSolFunctionPackageContentInput {
  /**
   * <p>ID of the function package.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>The format of the package that you want to download from the function packages.</p>
   */
  accept: PackageContentType | string | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionPackageContentOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   */
  contentType?: PackageContentType | string;

  /**
   * <p>Contents of the function package.</p>
   */
  packageContent?: Uint8Array;
}

/**
 * @public
 */
export interface GetSolFunctionPackageDescriptorInput {
  /**
   * <p>ID of the function package.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Indicates which content types, expressed as MIME types, the client is able to understand.</p>
   */
  accept: DescriptorContentType | string | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionPackageDescriptorOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   */
  contentType?: DescriptorContentType | string;

  /**
   * <p>Contents of the function package descriptor.</p>
   */
  vnfd?: Uint8Array;
}

/**
 * @public
 * <p>Information about a network function.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 */
export interface GetSolInstantiatedVnfInfo {
  /**
   * <p>State of the network function.</p>
   */
  vnfState?: VnfOperationalState | string;
}

/**
 * @public
 */
export interface GetSolNetworkInstanceInput {
  /**
   * <p>ID of the network instance.</p>
   */
  nsInstanceId: string | undefined;
}

/**
 * @public
 * <p>Lifecycle management operation details on the network instance.</p>
 *          <p>Lifecycle management operations are deploy, update, or delete operations.</p>
 */
export interface LcmOperationInfo {
  /**
   * <p>The identifier of the network operation.</p>
   */
  nsLcmOpOccId: string | undefined;
}

/**
 * @public
 * <p>The metadata of a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 */
export interface GetSolNetworkInstanceMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const NsState = {
  DELETED: "DELETED",
  IMPAIRED: "IMPAIRED",
  INSTANTIATED: "INSTANTIATED",
  INSTANTIATE_IN_PROGRESS: "INSTANTIATE_IN_PROGRESS",
  NOT_INSTANTIATED: "NOT_INSTANTIATED",
  STOPPED: "STOPPED",
  TERMINATE_IN_PROGRESS: "TERMINATE_IN_PROGRESS",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type NsState = (typeof NsState)[keyof typeof NsState];

/**
 * @public
 */
export interface GetSolNetworkInstanceOutput {
  /**
   * <p>Network instance ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network instance ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network instance name.</p>
   */
  nsInstanceName: string | undefined;

  /**
   * <p>Network instance description.</p>
   */
  nsInstanceDescription: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor info ID.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network instance state.</p>
   */
  nsState?: NsState | string;

  /**
   * <p>Lifecycle management operation details on the network instance.</p>
   *          <p>Lifecycle management operations are deploy, update, or delete operations.</p>
   */
  lcmOpInfo?: LcmOperationInfo;

  /**
   * <p>The metadata of a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   */
  metadata: GetSolNetworkInstanceMetadata | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolNetworkOperationInput {
  /**
   * <p>The identifier of the network operation.</p>
   */
  nsLcmOpOccId: string | undefined;
}

/**
 * @public
 * <p>Details related to problems with AWS TNB resources.</p>
 */
export interface ProblemDetails {
  /**
   * <p>A human-readable explanation specific to this occurrence of the problem.</p>
   */
  detail: string | undefined;

  /**
   * <p>A human-readable title of the problem type.</p>
   */
  title?: string;
}

/**
 * @public
 * @enum
 */
export const LcmOperationType = {
  INSTANTIATE: "INSTANTIATE",
  TERMINATE: "TERMINATE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type LcmOperationType = (typeof LcmOperationType)[keyof typeof LcmOperationType];

/**
 * @public
 * <p>Metadata related to a network operation occurrence.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 */
export interface GetSolNetworkOperationMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const NsLcmOperationState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type NsLcmOperationState = (typeof NsLcmOperationState)[keyof typeof NsLcmOperationState];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  ERROR: "ERROR",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
  SKIPPED: "SKIPPED",
  STARTED: "STARTED",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * <p>Gets the details of a network operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 */
export interface GetSolNetworkOperationTaskDetails {
  /**
   * <p>Task name.</p>
   */
  taskName?: string;

  /**
   * <p>Context for the network operation task.</p>
   */
  taskContext?: Record<string, string>;

  /**
   * <p>Task error details.</p>
   */
  taskErrorDetails?: ErrorInfo;

  /**
   * <p>Task status.</p>
   */
  taskStatus?: TaskStatus | string;

  /**
   * <p>Task start time.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Task end time.</p>
   */
  taskEndTime?: Date;
}

/**
 * @public
 */
export interface GetSolNetworkOperationOutput {
  /**
   * <p>ID of this network operation occurrence.</p>
   */
  id?: string;

  /**
   * <p>Network operation ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The state of the network operation.</p>
   */
  operationState?: NsLcmOperationState | string;

  /**
   * <p>ID of the network operation instance.</p>
   */
  nsInstanceId?: string;

  /**
   * <p>Type of the operation represented by this occurrence.</p>
   */
  lcmOperationType?: LcmOperationType | string;

  /**
   * <p>Error related to this specific network operation occurrence.</p>
   */
  error?: ProblemDetails;

  /**
   * <p>Metadata of this network operation occurrence.</p>
   */
  metadata?: GetSolNetworkOperationMetadata;

  /**
   * <p>All tasks associated with this operation occurrence.</p>
   */
  tasks?: GetSolNetworkOperationTaskDetails[];

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolNetworkPackageInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdInfoId: string | undefined;
}

/**
 * @public
 * <p>Metadata for network package artifacts.</p>
 *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
 */
export interface NetworkArtifactMeta {
  /**
   * <p>Lists network package overrides.</p>
   */
  overrides?: ToscaOverride[];
}

/**
 * @public
 * <p>Metadata associated with a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 */
export interface GetSolNetworkPackageMetadata {
  /**
   * <p>Metadata related to the onboarded network service descriptor in the network package.</p>
   */
  nsd?: NetworkArtifactMeta;

  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 */
export interface GetSolNetworkPackageOutput {
  /**
   * <p>Network package ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor onboarding state.</p>
   */
  nsdOnboardingState: NsdOnboardingState | string | undefined;

  /**
   * <p>Network service descriptor operational state.</p>
   */
  nsdOperationalState: NsdOperationalState | string | undefined;

  /**
   * <p>Network service descriptor usage state.</p>
   */
  nsdUsageState: NsdUsageState | string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor name.</p>
   */
  nsdName: string | undefined;

  /**
   * <p>Network service descriptor version.</p>
   */
  nsdVersion: string | undefined;

  /**
   * <p>Identifies the function package for the function package descriptor referenced by the onboarded network package.</p>
   */
  vnfPkgIds: string[] | undefined;

  /**
   * <p>Metadata associated with a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  metadata: GetSolNetworkPackageMetadata | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolNetworkPackageContentInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>The format of the package you want to download from the network package.</p>
   */
  accept: PackageContentType | string | undefined;
}

/**
 * @public
 */
export interface GetSolNetworkPackageContentOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   */
  contentType?: PackageContentType | string;

  /**
   * <p>Content of the network service descriptor in the network package.</p>
   */
  nsdContent?: Uint8Array;
}

/**
 * @public
 */
export interface GetSolNetworkPackageDescriptorInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdInfoId: string | undefined;
}

/**
 * @public
 */
export interface GetSolNetworkPackageDescriptorOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   */
  contentType?: DescriptorContentType | string;

  /**
   * <p>Contents of the network service descriptor in the network package.</p>
   */
  nsd?: Uint8Array;
}

/**
 * @public
 */
export interface InstantiateSolNetworkInstanceInput {
  /**
   * <p>ID of the network instance.</p>
   */
  nsInstanceId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  dryRun?: boolean;

  /**
   * <p>Provides values for the configurable properties.</p>
   */
  additionalParamsForNs?: __DocumentType;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface InstantiateSolNetworkInstanceOutput {
  /**
   * <p>The identifier of the network operation.</p>
   */
  nsLcmOpOccId: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Lists network function instance metadata.</p>
 *          <p>A network function instance is a function in a function package .</p>
 */
export interface ListSolFunctionInstanceMetadata {
  /**
   * <p>When the network function instance was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>When the network function instance was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * <p>Lists information about a network function instance.</p>
 *          <p>A network function instance is a function in a function package .</p>
 */
export interface ListSolFunctionInstanceInfo {
  /**
   * <p>Network function instance ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network function instance ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network instance ID.</p>
   */
  nsInstanceId: string | undefined;

  /**
   * <p>Function package ID.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package name.</p>
   */
  vnfPkgName?: string;

  /**
   * <p>Network function instance instantiation state.</p>
   */
  instantiationState: VnfInstantiationState | string | undefined;

  /**
   * <p>Information about a network function.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   */
  instantiatedVnfInfo?: GetSolInstantiatedVnfInfo;

  /**
   * <p>Network function instance metadata.</p>
   */
  metadata: ListSolFunctionInstanceMetadata | undefined;
}

/**
 * @public
 */
export interface ListSolFunctionInstancesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolFunctionInstancesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Network function instances.</p>
   */
  functionInstances?: ListSolFunctionInstanceInfo[];
}

/**
 * @public
 * <p>Details for the function package metadata.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 */
export interface ListSolFunctionPackageMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * <p>Information about a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 */
export interface ListSolFunctionPackageInfo {
  /**
   * <p>ID of the function package.</p>
   */
  id: string | undefined;

  /**
   * <p>Function package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the function package.</p>
   */
  onboardingState: OnboardingState | string | undefined;

  /**
   * <p>Operational state of the function package.</p>
   */
  operationalState: OperationalState | string | undefined;

  /**
   * <p>Usage state of the function package.</p>
   */
  usageState: UsageState | string | undefined;

  /**
   * <p>Identifies the function package and the function package descriptor.</p>
   */
  vnfdId?: string;

  /**
   * <p>Provider of the function package and the function package descriptor.</p>
   */
  vnfProvider?: string;

  /**
   * <p>The product name for the network function.</p>
   */
  vnfProductName?: string;

  /**
   * <p>Identifies the version of the function package descriptor.</p>
   */
  vnfdVersion?: string;

  /**
   * <p>The metadata of the function package.</p>
   */
  metadata?: ListSolFunctionPackageMetadata;
}

/**
 * @public
 */
export interface ListSolFunctionPackagesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolFunctionPackagesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Function packages. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  functionPackages: ListSolFunctionPackageInfo[] | undefined;
}

/**
 * @public
 * <p>Metadata details for a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 */
export interface ListSolNetworkInstanceMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * <p>Info about the specific network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 */
export interface ListSolNetworkInstanceInfo {
  /**
   * <p>ID of the network instance.</p>
   */
  id: string | undefined;

  /**
   * <p>Network instance ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Human-readable name of the network instance.</p>
   */
  nsInstanceName: string | undefined;

  /**
   * <p>Human-readable description of the network instance.</p>
   */
  nsInstanceDescription: string | undefined;

  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdId: string | undefined;

  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>The state of the network instance.</p>
   */
  nsState: NsState | string | undefined;

  /**
   * <p>The metadata of the network instance.</p>
   */
  metadata: ListSolNetworkInstanceMetadata | undefined;
}

/**
 * @public
 */
export interface ListSolNetworkInstancesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolNetworkInstancesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Lists network instances.</p>
   */
  networkInstances?: ListSolNetworkInstanceInfo[];
}

/**
 * @public
 */
export interface ListSolNetworkOperationsInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Metadata related to a network operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 */
export interface ListSolNetworkOperationsMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * <p>Information parameters for a network operation.</p>
 */
export interface ListSolNetworkOperationsInfo {
  /**
   * <p>ID of this network operation.</p>
   */
  id: string | undefined;

  /**
   * <p>Network operation ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>The state of the network operation.</p>
   */
  operationState: NsLcmOperationState | string | undefined;

  /**
   * <p>ID of the network instance related to this operation.</p>
   */
  nsInstanceId: string | undefined;

  /**
   * <p>Type of lifecycle management network operation.</p>
   */
  lcmOperationType: LcmOperationType | string | undefined;

  /**
   * <p>Error related to this specific network operation.</p>
   */
  error?: ProblemDetails;

  /**
   * <p>Metadata related to this network operation.</p>
   */
  metadata?: ListSolNetworkOperationsMetadata;
}

/**
 * @public
 */
export interface ListSolNetworkOperationsOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Lists network operation occurrences. Lifecycle management operations are deploy, update, or delete operations.</p>
   */
  networkOperations?: ListSolNetworkOperationsInfo[];
}

/**
 * @public
 * <p>Metadata related to a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 */
export interface ListSolNetworkPackageMetadata {
  /**
   * <p>The date that the resource was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   */
  lastModified: Date | undefined;
}

/**
 * @public
 * <p>Details of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 */
export interface ListSolNetworkPackageInfo {
  /**
   * <p>ID of the individual network package.</p>
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the network service descriptor in the network package.</p>
   */
  nsdOnboardingState: NsdOnboardingState | string | undefined;

  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   */
  nsdOperationalState: NsdOperationalState | string | undefined;

  /**
   * <p>Usage state of the network service descriptor in the network package.</p>
   */
  nsdUsageState: NsdUsageState | string | undefined;

  /**
   * <p>ID of the network service descriptor on which the network package is based.</p>
   */
  nsdId?: string;

  /**
   * <p>Name of the onboarded network service descriptor in the network package.</p>
   */
  nsdName?: string;

  /**
   * <p>Version of the onboarded network service descriptor in the network package.</p>
   */
  nsdVersion?: string;

  /**
   * <p>Designer of the onboarded network service descriptor in the network package.</p>
   */
  nsdDesigner?: string;

  /**
   * <p>Identifies a network service descriptor in a version independent manner.</p>
   */
  nsdInvariantId?: string;

  /**
   * <p>Identifies the function package for the function package descriptor referenced by the onboarded network package.</p>
   */
  vnfPkgIds?: string[];

  /**
   * <p>The metadata of the network package.</p>
   */
  metadata: ListSolNetworkPackageMetadata | undefined;
}

/**
 * @public
 */
export interface ListSolNetworkPackagesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolNetworkPackagesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Network packages. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  networkPackages: ListSolNetworkPackageInfo[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>Resource ARN.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutSolFunctionPackageContentInput {
  /**
   * <p>Function package ID.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package content type.</p>
   */
  contentType?: PackageContentType | string;

  /**
   * <p>Function package file.</p>
   */
  file: Uint8Array | undefined;
}

/**
 * @public
 * <p>Update metadata in a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 */
export interface PutSolFunctionPackageContentMetadata {
  /**
   * <p>Metadata for function package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   */
  vnfd?: FunctionArtifactMeta;
}

/**
 * @public
 */
export interface PutSolFunctionPackageContentOutput {
  /**
   * <p>Function package ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Function package descriptor ID.</p>
   */
  vnfdId: string | undefined;

  /**
   * <p>Function product name.</p>
   */
  vnfProductName: string | undefined;

  /**
   * <p>Function provider.</p>
   */
  vnfProvider: string | undefined;

  /**
   * <p>Function package descriptor version.</p>
   */
  vnfdVersion: string | undefined;

  /**
   * <p>Function package metadata.</p>
   */
  metadata: PutSolFunctionPackageContentMetadata | undefined;
}

/**
 * @public
 */
export interface PutSolNetworkPackageContentInput {
  /**
   * <p>Network service descriptor info ID.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network package content type.</p>
   */
  contentType?: PackageContentType | string;

  /**
   * <p>Network package file.</p>
   */
  file: Uint8Array | undefined;
}

/**
 * @public
 * <p>Update metadata in a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 */
export interface PutSolNetworkPackageContentMetadata {
  /**
   * <p>Metadata for network package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   */
  nsd?: NetworkArtifactMeta;
}

/**
 * @public
 */
export interface PutSolNetworkPackageContentOutput {
  /**
   * <p>Network package ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor name.</p>
   */
  nsdName: string | undefined;

  /**
   * <p>Network service descriptor version.</p>
   */
  nsdVersion: string | undefined;

  /**
   * <p>Function package IDs.</p>
   */
  vnfPkgIds: string[] | undefined;

  /**
   * <p>Network package metadata.</p>
   */
  metadata: PutSolNetworkPackageContentMetadata | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>Resource ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface TerminateSolNetworkInstanceInput {
  /**
   * <p>ID of the network instance.</p>
   */
  nsInstanceId: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TerminateSolNetworkInstanceOutput {
  /**
   * <p>The identifier of the network operation.</p>
   */
  nsLcmOpOccId?: string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>Resource ARN.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateSolFunctionPackageInput {
  /**
   * <p>ID of the function package.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Operational state of the function package.</p>
   */
  operationalState: OperationalState | string | undefined;
}

/**
 * @public
 */
export interface UpdateSolFunctionPackageOutput {
  /**
   * <p>Operational state of the function package.</p>
   */
  operationalState: OperationalState | string | undefined;
}

/**
 * @public
 * <p>Information parameters and/or the configurable properties for a network function.</p>
 *          <p>A network function instance is a function in a function package .</p>
 */
export interface UpdateSolNetworkModify {
  /**
   * <p>ID of the network function instance.</p>
   *          <p>A network function instance is a function in a function package .</p>
   */
  vnfInstanceId: string | undefined;

  /**
   * <p>Provides values for the configurable properties declared in the function package descriptor.</p>
   */
  vnfConfigurableProperties: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateSolNetworkType = {
  MODIFY_VNF_INFORMATION: "MODIFY_VNF_INFORMATION",
} as const;

/**
 * @public
 */
export type UpdateSolNetworkType = (typeof UpdateSolNetworkType)[keyof typeof UpdateSolNetworkType];

/**
 * @public
 */
export interface UpdateSolNetworkInstanceInput {
  /**
   * <p>ID of the network instance.</p>
   */
  nsInstanceId: string | undefined;

  /**
   * <p>The type of update.</p>
   */
  updateType: UpdateSolNetworkType | string | undefined;

  /**
   * <p>Identifies the network function information parameters and/or the configurable properties of the network function to be modified.</p>
   */
  modifyVnfInfoData?: UpdateSolNetworkModify;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSolNetworkInstanceOutput {
  /**
   * <p>The identifier of the network operation.</p>
   */
  nsLcmOpOccId?: string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSolNetworkPackageInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   */
  nsdOperationalState: NsdOperationalState | string | undefined;
}

/**
 * @public
 */
export interface UpdateSolNetworkPackageOutput {
  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   */
  nsdOperationalState: NsdOperationalState | string | undefined;
}

/**
 * @public
 */
export interface ValidateSolFunctionPackageContentInput {
  /**
   * <p>Function package ID.</p>
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package content type.</p>
   */
  contentType?: PackageContentType | string;

  /**
   * <p>Function package file.</p>
   */
  file: Uint8Array | undefined;
}

/**
 * @public
 * <p>Validates function package content metadata.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 */
export interface ValidateSolFunctionPackageContentMetadata {
  /**
   * <p>Metadata for function package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   */
  vnfd?: FunctionArtifactMeta;
}

/**
 * @public
 */
export interface ValidateSolFunctionPackageContentOutput {
  /**
   * <p>Function package ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Function package descriptor ID.</p>
   */
  vnfdId: string | undefined;

  /**
   * <p>Network function product name.</p>
   */
  vnfProductName: string | undefined;

  /**
   * <p>Network function provider.</p>
   */
  vnfProvider: string | undefined;

  /**
   * <p>Function package descriptor version.</p>
   */
  vnfdVersion: string | undefined;

  /**
   * <p>Function package metadata.</p>
   */
  metadata: ValidateSolFunctionPackageContentMetadata | undefined;
}

/**
 * @public
 */
export interface ValidateSolNetworkPackageContentInput {
  /**
   * <p>Network service descriptor file.</p>
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network package content type.</p>
   */
  contentType?: PackageContentType | string;

  /**
   * <p>Network package file.</p>
   */
  file: Uint8Array | undefined;
}

/**
 * @public
 * <p>Validates network package content metadata.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 */
export interface ValidateSolNetworkPackageContentMetadata {
  /**
   * <p>Metadata for network package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   */
  nsd?: NetworkArtifactMeta;
}

/**
 * @public
 */
export interface ValidateSolNetworkPackageContentOutput {
  /**
   * <p>Network package ID.</p>
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor name.</p>
   */
  nsdName: string | undefined;

  /**
   * <p>Network service descriptor version.</p>
   */
  nsdVersion: string | undefined;

  /**
   * <p>Function package IDs.</p>
   */
  vnfPkgIds: string[] | undefined;

  /**
   * <p>Network package metadata.</p>
   */
  metadata: ValidateSolNetworkPackageContentMetadata | undefined;
}

/**
 * @internal
 */
export const CreateSolFunctionPackageInputFilterSensitiveLog = (obj: CreateSolFunctionPackageInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSolFunctionPackageOutputFilterSensitiveLog = (obj: CreateSolFunctionPackageOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSolNetworkInstanceInputFilterSensitiveLog = (obj: CreateSolNetworkInstanceInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSolNetworkInstanceOutputFilterSensitiveLog = (obj: CreateSolNetworkInstanceOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSolNetworkPackageInputFilterSensitiveLog = (obj: CreateSolNetworkPackageInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSolNetworkPackageOutputFilterSensitiveLog = (obj: CreateSolNetworkPackageOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSolFunctionInstanceOutputFilterSensitiveLog = (obj: GetSolFunctionInstanceOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSolFunctionPackageOutputFilterSensitiveLog = (obj: GetSolFunctionPackageOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSolNetworkInstanceOutputFilterSensitiveLog = (obj: GetSolNetworkInstanceOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSolNetworkOperationOutputFilterSensitiveLog = (obj: GetSolNetworkOperationOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSolNetworkPackageOutputFilterSensitiveLog = (obj: GetSolNetworkPackageOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InstantiateSolNetworkInstanceInputFilterSensitiveLog = (obj: InstantiateSolNetworkInstanceInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InstantiateSolNetworkInstanceOutputFilterSensitiveLog = (
  obj: InstantiateSolNetworkInstanceOutput
): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceOutputFilterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceInputFilterSensitiveLog = (obj: TagResourceInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TerminateSolNetworkInstanceInputFilterSensitiveLog = (obj: TerminateSolNetworkInstanceInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TerminateSolNetworkInstanceOutputFilterSensitiveLog = (obj: TerminateSolNetworkInstanceOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSolNetworkInstanceInputFilterSensitiveLog = (obj: UpdateSolNetworkInstanceInput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSolNetworkInstanceOutputFilterSensitiveLog = (obj: UpdateSolNetworkInstanceOutput): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});
