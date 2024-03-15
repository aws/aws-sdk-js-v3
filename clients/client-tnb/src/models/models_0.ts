// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { TnbServiceException as __BaseException } from "./TnbServiceException";

/**
 * <p>Insufficient permissions to make request.</p>
 * @public
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
   * @public
   */
  nsLcmOpOccId: string | undefined;
}

/**
 * <p>Unexpected error occurred. Problem on the server.</p>
 * @public
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
 * <p>Request references a resource that doesn't exist.</p>
 * @public
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
 * <p>Exception caused by throttling.</p>
 * @public
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
 * <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 * @public
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
   * @public
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
   * @public
   */
  id: string | undefined;

  /**
   * <p>Function package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the function package.</p>
   * @public
   */
  onboardingState: OnboardingState | undefined;

  /**
   * <p>Operational state of the function package.</p>
   * @public
   */
  operationalState: OperationalState | undefined;

  /**
   * <p>Usage state of the function package.</p>
   * @public
   */
  usageState: UsageState | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Service quotas have been exceeded.</p>
 * @public
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
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network instance name.</p>
   * @public
   */
  nsName: string | undefined;

  /**
   * <p>Network instance description.</p>
   * @public
   */
  nsDescription?: string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSolNetworkInstanceOutput {
  /**
   * <p>Network instance ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network instance ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network instance name.</p>
   * @public
   */
  nsInstanceName: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSolNetworkPackageInput {
  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
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
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdOnboardingState: NsdOnboardingState | undefined;

  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdOperationalState: NsdOperationalState | undefined;

  /**
   * <p>Usage state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdUsageState: NsdUsageState | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteSolFunctionPackageInput {
  /**
   * <p>ID of the function package.</p>
   * @public
   */
  vnfPkgId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSolNetworkInstanceInput {
  /**
   * <p>Network instance ID.</p>
   * @public
   */
  nsInstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSolNetworkPackageInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
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
 * <p>Provides error information.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>Error cause.</p>
   * @public
   */
  cause?: string;

  /**
   * <p>Error details.</p>
   * @public
   */
  details?: string;
}

/**
 * <p>Overrides of the TOSCA node.</p>
 * @public
 */
export interface ToscaOverride {
  /**
   * <p>Name of the TOSCA override.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Default value for the override.</p>
   * @public
   */
  defaultValue?: string;
}

/**
 * <p>Metadata for function package artifacts.</p>
 *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
 * @public
 */
export interface FunctionArtifactMeta {
  /**
   * <p>Lists of function package overrides.</p>
   * @public
   */
  overrides?: ToscaOverride[];
}

/**
 * @public
 */
export interface GetSolFunctionInstanceInput {
  /**
   * <p>ID of the network function.</p>
   * @public
   */
  vnfInstanceId: string | undefined;
}

/**
 * <p>The metadata of a network function.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @public
 */
export interface GetSolVnfcResourceInfoMetadata {
  /**
   * <p>Information about the node group.</p>
   * @public
   */
  nodeGroup?: string;

  /**
   * <p>Information about the cluster.</p>
   * @public
   */
  cluster?: string;

  /**
   * <p>Information about the helm chart.</p>
   * @public
   */
  helmChart?: string;
}

/**
 * <p>Details of resource associated with a network function.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @public
 */
export interface GetSolVnfcResourceInfo {
  /**
   * <p>The metadata of the network function compute.</p>
   * @public
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
 * <p>Information about the network function.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @public
 */
export interface GetSolVnfInfo {
  /**
   * <p>State of the network function instance.</p>
   * @public
   */
  vnfState?: VnfOperationalState;

  /**
   * <p>Compute info used by the network function instance.</p>
   * @public
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
 * <p>The metadata of a network function instance.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @public
 */
export interface GetSolFunctionInstanceMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionInstanceOutput {
  /**
   * <p>Network function instance ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network function instance ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network instance ID.</p>
   * @public
   */
  nsInstanceId: string | undefined;

  /**
   * <p>Function package ID.</p>
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package descriptor ID.</p>
   * @public
   */
  vnfdId: string | undefined;

  /**
   * <p>Network function provider.</p>
   * @public
   */
  vnfProvider?: string;

  /**
   * <p>Network function product name.</p>
   * @public
   */
  vnfProductName?: string;

  /**
   * <p>Function package descriptor version.</p>
   * @public
   */
  vnfdVersion?: string;

  /**
   * <p>Network function instantiation state.</p>
   * @public
   */
  instantiationState: VnfInstantiationState | undefined;

  /**
   * <p>Information about the network function.</p>
   *          <p>A network function instance is a function in a function package .</p>
   * @public
   */
  instantiatedVnfInfo?: GetSolVnfInfo;

  /**
   * <p>The metadata of a network function instance.</p>
   *          <p>A network function instance is a function in a function package .</p>
   * @public
   */
  metadata: GetSolFunctionInstanceMetadata | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolFunctionPackageInput {
  /**
   * <p>ID of the function package.</p>
   * @public
   */
  vnfPkgId: string | undefined;
}

/**
 * <p>Metadata related to the function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @public
 */
export interface GetSolFunctionPackageMetadata {
  /**
   * <p>Metadata related to the function package descriptor of the function package.</p>
   * @public
   */
  vnfd?: FunctionArtifactMeta;

  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionPackageOutput {
  /**
   * <p>Function package ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Function package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Function package onboarding state.</p>
   * @public
   */
  onboardingState: OnboardingState | undefined;

  /**
   * <p>Function package operational state.</p>
   * @public
   */
  operationalState: OperationalState | undefined;

  /**
   * <p>Function package usage state.</p>
   * @public
   */
  usageState: UsageState | undefined;

  /**
   * <p>Function package descriptor  ID.</p>
   * @public
   */
  vnfdId?: string;

  /**
   * <p>Network function provider.</p>
   * @public
   */
  vnfProvider?: string;

  /**
   * <p>Network function product name.</p>
   * @public
   */
  vnfProductName?: string;

  /**
   * <p>Function package descriptor version.</p>
   * @public
   */
  vnfdVersion?: string;

  /**
   * <p>Metadata related to the function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   * @public
   */
  metadata?: GetSolFunctionPackageMetadata;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
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
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>The format of the package that you want to download from the function packages.</p>
   * @public
   */
  accept: PackageContentType | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionPackageContentOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   * @public
   */
  contentType?: PackageContentType;

  /**
   * <p>Contents of the function package.</p>
   * @public
   */
  packageContent?: Uint8Array;
}

/**
 * @public
 */
export interface GetSolFunctionPackageDescriptorInput {
  /**
   * <p>ID of the function package.</p>
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Indicates which content types, expressed as MIME types, the client is able to understand.</p>
   * @public
   */
  accept: DescriptorContentType | undefined;
}

/**
 * @public
 */
export interface GetSolFunctionPackageDescriptorOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   * @public
   */
  contentType?: DescriptorContentType;

  /**
   * <p>Contents of the function package descriptor.</p>
   * @public
   */
  vnfd?: Uint8Array;
}

/**
 * <p>Information about a network function.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @public
 */
export interface GetSolInstantiatedVnfInfo {
  /**
   * <p>State of the network function.</p>
   * @public
   */
  vnfState?: VnfOperationalState;
}

/**
 * @public
 */
export interface GetSolNetworkInstanceInput {
  /**
   * <p>ID of the network instance.</p>
   * @public
   */
  nsInstanceId: string | undefined;
}

/**
 * <p>Lifecycle management operation details on the network instance.</p>
 *          <p>Lifecycle management operations are deploy, update, or delete operations.</p>
 * @public
 */
export interface LcmOperationInfo {
  /**
   * <p>The identifier of the network operation.</p>
   * @public
   */
  nsLcmOpOccId: string | undefined;
}

/**
 * <p>The metadata of a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @public
 */
export interface GetSolNetworkInstanceMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
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
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network instance ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network instance name.</p>
   * @public
   */
  nsInstanceName: string | undefined;

  /**
   * <p>Network instance description.</p>
   * @public
   */
  nsInstanceDescription: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   * @public
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor info ID.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network instance state.</p>
   * @public
   */
  nsState?: NsState;

  /**
   * <p>Lifecycle management operation details on the network instance.</p>
   *          <p>Lifecycle management operations are deploy, update, or delete operations.</p>
   * @public
   */
  lcmOpInfo?: LcmOperationInfo;

  /**
   * <p>The metadata of a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   * @public
   */
  metadata: GetSolNetworkInstanceMetadata | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolNetworkOperationInput {
  /**
   * <p>The identifier of the network operation.</p>
   * @public
   */
  nsLcmOpOccId: string | undefined;
}

/**
 * <p>Details related to problems with AWS TNB resources.</p>
 * @public
 */
export interface ProblemDetails {
  /**
   * <p>A human-readable explanation specific to this occurrence of the problem.</p>
   * @public
   */
  detail: string | undefined;

  /**
   * <p>A human-readable title of the problem type.</p>
   * @public
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
 * <p>Metadata related to a network operation occurrence.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @public
 */
export interface GetSolNetworkOperationMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
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
 * <p>Gets the details of a network operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @public
 */
export interface GetSolNetworkOperationTaskDetails {
  /**
   * <p>Task name.</p>
   * @public
   */
  taskName?: string;

  /**
   * <p>Context for the network operation task.</p>
   * @public
   */
  taskContext?: Record<string, string>;

  /**
   * <p>Task error details.</p>
   * @public
   */
  taskErrorDetails?: ErrorInfo;

  /**
   * <p>Task status.</p>
   * @public
   */
  taskStatus?: TaskStatus;

  /**
   * <p>Task start time.</p>
   * @public
   */
  taskStartTime?: Date;

  /**
   * <p>Task end time.</p>
   * @public
   */
  taskEndTime?: Date;
}

/**
 * @public
 */
export interface GetSolNetworkOperationOutput {
  /**
   * <p>ID of this network operation occurrence.</p>
   * @public
   */
  id?: string;

  /**
   * <p>Network operation ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The state of the network operation.</p>
   * @public
   */
  operationState?: NsLcmOperationState;

  /**
   * <p>ID of the network operation instance.</p>
   * @public
   */
  nsInstanceId?: string;

  /**
   * <p>Type of the operation represented by this occurrence.</p>
   * @public
   */
  lcmOperationType?: LcmOperationType;

  /**
   * <p>Error related to this specific network operation occurrence.</p>
   * @public
   */
  error?: ProblemDetails;

  /**
   * <p>Metadata of this network operation occurrence.</p>
   * @public
   */
  metadata?: GetSolNetworkOperationMetadata;

  /**
   * <p>All tasks associated with this operation occurrence.</p>
   * @public
   */
  tasks?: GetSolNetworkOperationTaskDetails[];

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolNetworkPackageInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
   */
  nsdInfoId: string | undefined;
}

/**
 * <p>Metadata for network package artifacts.</p>
 *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
 * @public
 */
export interface NetworkArtifactMeta {
  /**
   * <p>Lists network package overrides.</p>
   * @public
   */
  overrides?: ToscaOverride[];
}

/**
 * <p>Metadata associated with a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @public
 */
export interface GetSolNetworkPackageMetadata {
  /**
   * <p>Metadata related to the onboarded network service descriptor in the network package.</p>
   * @public
   */
  nsd?: NetworkArtifactMeta;

  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * @public
 */
export interface GetSolNetworkPackageOutput {
  /**
   * <p>Network package ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor onboarding state.</p>
   * @public
   */
  nsdOnboardingState: NsdOnboardingState | undefined;

  /**
   * <p>Network service descriptor operational state.</p>
   * @public
   */
  nsdOperationalState: NsdOperationalState | undefined;

  /**
   * <p>Network service descriptor usage state.</p>
   * @public
   */
  nsdUsageState: NsdUsageState | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   * @public
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor name.</p>
   * @public
   */
  nsdName: string | undefined;

  /**
   * <p>Network service descriptor version.</p>
   * @public
   */
  nsdVersion: string | undefined;

  /**
   * <p>Identifies the function package for the function package descriptor referenced by the onboarded network package.</p>
   * @public
   */
  vnfPkgIds: string[] | undefined;

  /**
   * <p>Metadata associated with a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   * @public
   */
  metadata: GetSolNetworkPackageMetadata | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSolNetworkPackageContentInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>The format of the package you want to download from the network package.</p>
   * @public
   */
  accept: PackageContentType | undefined;
}

/**
 * @public
 */
export interface GetSolNetworkPackageContentOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   * @public
   */
  contentType?: PackageContentType;

  /**
   * <p>Content of the network service descriptor in the network package.</p>
   * @public
   */
  nsdContent?: Uint8Array;
}

/**
 * @public
 */
export interface GetSolNetworkPackageDescriptorInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
   */
  nsdInfoId: string | undefined;
}

/**
 * @public
 */
export interface GetSolNetworkPackageDescriptorOutput {
  /**
   * <p>Indicates the media type of the resource.</p>
   * @public
   */
  contentType?: DescriptorContentType;

  /**
   * <p>Contents of the network service descriptor in the network package.</p>
   * @public
   */
  nsd?: Uint8Array;
}

/**
 * @public
 */
export interface InstantiateSolNetworkInstanceInput {
  /**
   * <p>ID of the network instance.</p>
   * @public
   */
  nsInstanceId: string | undefined;

  /**
   * <p>A check for whether you have the required permissions for the action without actually making the request
   *    and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>.
   *    Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   * @public
   */
  dryRun?: boolean;

  /**
   * <p>Provides values for the configurable properties.</p>
   * @public
   */
  additionalParamsForNs?: __DocumentType;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface InstantiateSolNetworkInstanceOutput {
  /**
   * <p>The identifier of the network operation.</p>
   * @public
   */
  nsLcmOpOccId: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Lists network function instance metadata.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @public
 */
export interface ListSolFunctionInstanceMetadata {
  /**
   * <p>When the network function instance was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>When the network function instance was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * <p>Lists information about a network function instance.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @public
 */
export interface ListSolFunctionInstanceInfo {
  /**
   * <p>Network function instance ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network function instance ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network instance ID.</p>
   * @public
   */
  nsInstanceId: string | undefined;

  /**
   * <p>Function package ID.</p>
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package name.</p>
   * @public
   */
  vnfPkgName?: string;

  /**
   * <p>Network function instance instantiation state.</p>
   * @public
   */
  instantiationState: VnfInstantiationState | undefined;

  /**
   * <p>Information about a network function.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   * @public
   */
  instantiatedVnfInfo?: GetSolInstantiatedVnfInfo;

  /**
   * <p>Network function instance metadata.</p>
   * @public
   */
  metadata: ListSolFunctionInstanceMetadata | undefined;
}

/**
 * @public
 */
export interface ListSolFunctionInstancesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolFunctionInstancesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Network function instances.</p>
   * @public
   */
  functionInstances?: ListSolFunctionInstanceInfo[];
}

/**
 * <p>Details for the function package metadata.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @public
 */
export interface ListSolFunctionPackageMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * <p>Information about a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @public
 */
export interface ListSolFunctionPackageInfo {
  /**
   * <p>ID of the function package.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Function package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the function package.</p>
   * @public
   */
  onboardingState: OnboardingState | undefined;

  /**
   * <p>Operational state of the function package.</p>
   * @public
   */
  operationalState: OperationalState | undefined;

  /**
   * <p>Usage state of the function package.</p>
   * @public
   */
  usageState: UsageState | undefined;

  /**
   * <p>Identifies the function package and the function package descriptor.</p>
   * @public
   */
  vnfdId?: string;

  /**
   * <p>Provider of the function package and the function package descriptor.</p>
   * @public
   */
  vnfProvider?: string;

  /**
   * <p>The product name for the network function.</p>
   * @public
   */
  vnfProductName?: string;

  /**
   * <p>Identifies the version of the function package descriptor.</p>
   * @public
   */
  vnfdVersion?: string;

  /**
   * <p>The metadata of the function package.</p>
   * @public
   */
  metadata?: ListSolFunctionPackageMetadata;
}

/**
 * @public
 */
export interface ListSolFunctionPackagesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolFunctionPackagesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Function packages. A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   * @public
   */
  functionPackages: ListSolFunctionPackageInfo[] | undefined;
}

/**
 * <p>Metadata details for a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @public
 */
export interface ListSolNetworkInstanceMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * <p>Info about the specific network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 * @public
 */
export interface ListSolNetworkInstanceInfo {
  /**
   * <p>ID of the network instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network instance ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Human-readable name of the network instance.</p>
   * @public
   */
  nsInstanceName: string | undefined;

  /**
   * <p>Human-readable description of the network instance.</p>
   * @public
   */
  nsInstanceDescription: string | undefined;

  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
   */
  nsdId: string | undefined;

  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>The state of the network instance.</p>
   * @public
   */
  nsState: NsState | undefined;

  /**
   * <p>The metadata of the network instance.</p>
   * @public
   */
  metadata: ListSolNetworkInstanceMetadata | undefined;
}

/**
 * @public
 */
export interface ListSolNetworkInstancesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolNetworkInstancesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Lists network instances.</p>
   * @public
   */
  networkInstances?: ListSolNetworkInstanceInfo[];
}

/**
 * @public
 */
export interface ListSolNetworkOperationsInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Metadata related to a network operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @public
 */
export interface ListSolNetworkOperationsMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * <p>Information parameters for a network operation.</p>
 * @public
 */
export interface ListSolNetworkOperationsInfo {
  /**
   * <p>ID of this network operation.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network operation ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The state of the network operation.</p>
   * @public
   */
  operationState: NsLcmOperationState | undefined;

  /**
   * <p>ID of the network instance related to this operation.</p>
   * @public
   */
  nsInstanceId: string | undefined;

  /**
   * <p>Type of lifecycle management network operation.</p>
   * @public
   */
  lcmOperationType: LcmOperationType | undefined;

  /**
   * <p>Error related to this specific network operation.</p>
   * @public
   */
  error?: ProblemDetails;

  /**
   * <p>Metadata related to this network operation.</p>
   * @public
   */
  metadata?: ListSolNetworkOperationsMetadata;
}

/**
 * @public
 */
export interface ListSolNetworkOperationsOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Lists network operation occurrences. Lifecycle management operations are deploy, update, or delete operations.</p>
   * @public
   */
  networkOperations?: ListSolNetworkOperationsInfo[];
}

/**
 * <p>Metadata related to a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @public
 */
export interface ListSolNetworkPackageMetadata {
  /**
   * <p>The date that the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date that the resource was last modified.</p>
   * @public
   */
  lastModified: Date | undefined;
}

/**
 * <p>Details of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @public
 */
export interface ListSolNetworkPackageInfo {
  /**
   * <p>ID of the individual network package.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Onboarding state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdOnboardingState: NsdOnboardingState | undefined;

  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdOperationalState: NsdOperationalState | undefined;

  /**
   * <p>Usage state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdUsageState: NsdUsageState | undefined;

  /**
   * <p>ID of the network service descriptor on which the network package is based.</p>
   * @public
   */
  nsdId?: string;

  /**
   * <p>Name of the onboarded network service descriptor in the network package.</p>
   * @public
   */
  nsdName?: string;

  /**
   * <p>Version of the onboarded network service descriptor in the network package.</p>
   * @public
   */
  nsdVersion?: string;

  /**
   * <p>Designer of the onboarded network service descriptor in the network package.</p>
   * @public
   */
  nsdDesigner?: string;

  /**
   * <p>Identifies a network service descriptor in a version independent manner.</p>
   * @public
   */
  nsdInvariantId?: string;

  /**
   * <p>Identifies the function package for the function package descriptor referenced by the onboarded network package.</p>
   * @public
   */
  vnfPkgIds?: string[];

  /**
   * <p>The metadata of the network package.</p>
   * @public
   */
  metadata: ListSolNetworkPackageMetadata | undefined;
}

/**
 * @public
 */
export interface ListSolNetworkPackagesInput {
  /**
   * <p>The maximum number of results to include in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSolNetworkPackagesOutput {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Network packages. A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   * @public
   */
  networkPackages: ListSolNetworkPackageInfo[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>Resource ARN.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutSolFunctionPackageContentInput {
  /**
   * <p>Function package ID.</p>
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package content type.</p>
   * @public
   */
  contentType?: PackageContentType;

  /**
   * <p>Function package file.</p>
   * @public
   */
  file: Uint8Array | undefined;
}

/**
 * <p>Update metadata in a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @public
 */
export interface PutSolFunctionPackageContentMetadata {
  /**
   * <p>Metadata for function package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   * @public
   */
  vnfd?: FunctionArtifactMeta;
}

/**
 * @public
 */
export interface PutSolFunctionPackageContentOutput {
  /**
   * <p>Function package ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Function package descriptor ID.</p>
   * @public
   */
  vnfdId: string | undefined;

  /**
   * <p>Function product name.</p>
   * @public
   */
  vnfProductName: string | undefined;

  /**
   * <p>Function provider.</p>
   * @public
   */
  vnfProvider: string | undefined;

  /**
   * <p>Function package descriptor version.</p>
   * @public
   */
  vnfdVersion: string | undefined;

  /**
   * <p>Function package metadata.</p>
   * @public
   */
  metadata: PutSolFunctionPackageContentMetadata | undefined;
}

/**
 * @public
 */
export interface PutSolNetworkPackageContentInput {
  /**
   * <p>Network service descriptor info ID.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network package content type.</p>
   * @public
   */
  contentType?: PackageContentType;

  /**
   * <p>Network package file.</p>
   * @public
   */
  file: Uint8Array | undefined;
}

/**
 * <p>Update metadata in a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @public
 */
export interface PutSolNetworkPackageContentMetadata {
  /**
   * <p>Metadata for network package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   * @public
   */
  nsd?: NetworkArtifactMeta;
}

/**
 * @public
 */
export interface PutSolNetworkPackageContentOutput {
  /**
   * <p>Network package ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   * @public
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor name.</p>
   * @public
   */
  nsdName: string | undefined;

  /**
   * <p>Network service descriptor version.</p>
   * @public
   */
  nsdVersion: string | undefined;

  /**
   * <p>Function package IDs.</p>
   * @public
   */
  vnfPkgIds: string[] | undefined;

  /**
   * <p>Network package metadata.</p>
   * @public
   */
  metadata: PutSolNetworkPackageContentMetadata | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>Resource ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
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
   * @public
   */
  nsInstanceId: string | undefined;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TerminateSolNetworkInstanceOutput {
  /**
   * <p>The identifier of the network operation.</p>
   * @public
   */
  nsLcmOpOccId?: string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>Resource ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag keys.</p>
   * @public
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
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Operational state of the function package.</p>
   * @public
   */
  operationalState: OperationalState | undefined;
}

/**
 * @public
 */
export interface UpdateSolFunctionPackageOutput {
  /**
   * <p>Operational state of the function package.</p>
   * @public
   */
  operationalState: OperationalState | undefined;
}

/**
 * <p>Information parameters and/or the configurable properties for a network function.</p>
 *          <p>A network function instance is a function in a function package .</p>
 * @public
 */
export interface UpdateSolNetworkModify {
  /**
   * <p>ID of the network function instance.</p>
   *          <p>A network function instance is a function in a function package .</p>
   * @public
   */
  vnfInstanceId: string | undefined;

  /**
   * <p>Provides values for the configurable properties declared in the function package descriptor.</p>
   * @public
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
   * @public
   */
  nsInstanceId: string | undefined;

  /**
   * <p>The type of update.</p>
   * @public
   */
  updateType: UpdateSolNetworkType | undefined;

  /**
   * <p>Identifies the network function information parameters and/or the configurable properties of the network function to be modified.</p>
   * @public
   */
  modifyVnfInfoData?: UpdateSolNetworkModify;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSolNetworkInstanceOutput {
  /**
   * <p>The identifier of the network operation.</p>
   * @public
   */
  nsLcmOpOccId?: string;

  /**
   * <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. When you use this API, the tags are transferred to the network operation that is created. Use tags to search and filter your resources or track your Amazon Web Services costs.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSolNetworkPackageInput {
  /**
   * <p>ID of the network service descriptor in the network package.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdOperationalState: NsdOperationalState | undefined;
}

/**
 * @public
 */
export interface UpdateSolNetworkPackageOutput {
  /**
   * <p>Operational state of the network service descriptor in the network package.</p>
   * @public
   */
  nsdOperationalState: NsdOperationalState | undefined;
}

/**
 * @public
 */
export interface ValidateSolFunctionPackageContentInput {
  /**
   * <p>Function package ID.</p>
   * @public
   */
  vnfPkgId: string | undefined;

  /**
   * <p>Function package content type.</p>
   * @public
   */
  contentType?: PackageContentType;

  /**
   * <p>Function package file.</p>
   * @public
   */
  file: Uint8Array | undefined;
}

/**
 * <p>Validates function package content metadata.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @public
 */
export interface ValidateSolFunctionPackageContentMetadata {
  /**
   * <p>Metadata for function package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   * @public
   */
  vnfd?: FunctionArtifactMeta;
}

/**
 * @public
 */
export interface ValidateSolFunctionPackageContentOutput {
  /**
   * <p>Function package ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Function package descriptor ID.</p>
   * @public
   */
  vnfdId: string | undefined;

  /**
   * <p>Network function product name.</p>
   * @public
   */
  vnfProductName: string | undefined;

  /**
   * <p>Network function provider.</p>
   * @public
   */
  vnfProvider: string | undefined;

  /**
   * <p>Function package descriptor version.</p>
   * @public
   */
  vnfdVersion: string | undefined;

  /**
   * <p>Function package metadata.</p>
   * @public
   */
  metadata: ValidateSolFunctionPackageContentMetadata | undefined;
}

/**
 * @public
 */
export interface ValidateSolNetworkPackageContentInput {
  /**
   * <p>Network service descriptor file.</p>
   * @public
   */
  nsdInfoId: string | undefined;

  /**
   * <p>Network package content type.</p>
   * @public
   */
  contentType?: PackageContentType;

  /**
   * <p>Network package file.</p>
   * @public
   */
  file: Uint8Array | undefined;
}

/**
 * <p>Validates network package content metadata.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @public
 */
export interface ValidateSolNetworkPackageContentMetadata {
  /**
   * <p>Metadata for network package artifacts.</p>
   *          <p>Artifacts are the contents of the package descriptor file and the state of the package.</p>
   * @public
   */
  nsd?: NetworkArtifactMeta;
}

/**
 * @public
 */
export interface ValidateSolNetworkPackageContentOutput {
  /**
   * <p>Network package ID.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Network package ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Network service descriptor ID.</p>
   * @public
   */
  nsdId: string | undefined;

  /**
   * <p>Network service descriptor name.</p>
   * @public
   */
  nsdName: string | undefined;

  /**
   * <p>Network service descriptor version.</p>
   * @public
   */
  nsdVersion: string | undefined;

  /**
   * <p>Function package IDs.</p>
   * @public
   */
  vnfPkgIds: string[] | undefined;

  /**
   * <p>Network package metadata.</p>
   * @public
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
