import {
  AddTagsToResourceRequest,
  AddTagsToResourceResult,
  CancelCommandRequest,
  CancelCommandResult,
  CancelMaintenanceWindowExecutionRequest,
  CancelMaintenanceWindowExecutionResult,
  CreateActivationRequest,
  CreateActivationResult,
  CreateAssociationBatchRequest,
  CreateAssociationBatchResult,
  CreateAssociationRequest,
  CreateAssociationResult,
  CreateDocumentRequest,
  CreateDocumentResult,
  CreateMaintenanceWindowRequest,
  CreateMaintenanceWindowResult,
  CreateOpsItemRequest,
  CreateOpsItemResponse,
  CreatePatchBaselineRequest,
  CreatePatchBaselineResult,
  CreateResourceDataSyncRequest,
  CreateResourceDataSyncResult,
  DeleteActivationRequest,
  DeleteActivationResult,
  DeleteAssociationRequest,
  DeleteAssociationResult,
  DeleteDocumentRequest,
  DeleteDocumentResult,
  DeleteInventoryRequest,
  DeleteInventoryResult,
  DeleteMaintenanceWindowRequest,
  DeleteMaintenanceWindowResult,
  DeleteParameterRequest,
  DeleteParameterResult,
  DeleteParametersRequest,
  DeleteParametersResult,
  DeletePatchBaselineRequest,
  DeletePatchBaselineResult,
  DeleteResourceDataSyncRequest,
  DeleteResourceDataSyncResult,
  DeregisterManagedInstanceRequest,
  DeregisterManagedInstanceResult,
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterPatchBaselineForPatchGroupResult,
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowResult,
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
  DescribeActivationsRequest,
  DescribeActivationsResult,
  DescribeAssociationExecutionTargetsRequest,
  DescribeAssociationExecutionTargetsResult,
  DescribeAssociationExecutionsRequest,
  DescribeAssociationExecutionsResult,
  DescribeAssociationRequest,
  DescribeAssociationResult,
  DescribeAutomationExecutionsRequest,
  DescribeAutomationExecutionsResult,
  DescribeAutomationStepExecutionsRequest,
  DescribeAutomationStepExecutionsResult,
  DescribeAvailablePatchesRequest,
  DescribeAvailablePatchesResult,
  DescribeDocumentPermissionRequest,
  DescribeDocumentPermissionResponse,
  DescribeDocumentRequest,
  DescribeDocumentResult,
  DescribeEffectiveInstanceAssociationsRequest,
  DescribeEffectiveInstanceAssociationsResult,
  DescribeEffectivePatchesForPatchBaselineRequest,
  DescribeEffectivePatchesForPatchBaselineResult,
  DescribeInstanceAssociationsStatusRequest,
  DescribeInstanceAssociationsStatusResult,
  DescribeInstanceInformationRequest,
  DescribeInstanceInformationResult,
  DescribeInstancePatchStatesForPatchGroupRequest,
  DescribeInstancePatchStatesForPatchGroupResult,
  DescribeInstancePatchStatesRequest,
  DescribeInstancePatchStatesResult,
  DescribeInstancePatchesRequest,
  DescribeInstancePatchesResult,
  DescribeInventoryDeletionsRequest,
  DescribeInventoryDeletionsResult,
  DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  DescribeMaintenanceWindowExecutionTaskInvocationsResult,
  DescribeMaintenanceWindowExecutionTasksRequest,
  DescribeMaintenanceWindowExecutionTasksResult,
  DescribeMaintenanceWindowExecutionsRequest,
  DescribeMaintenanceWindowExecutionsResult,
  DescribeMaintenanceWindowScheduleRequest,
  DescribeMaintenanceWindowScheduleResult,
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTargetsResult,
  DescribeMaintenanceWindowTasksRequest,
  DescribeMaintenanceWindowTasksResult,
  DescribeMaintenanceWindowsForTargetRequest,
  DescribeMaintenanceWindowsForTargetResult,
  DescribeMaintenanceWindowsRequest,
  DescribeMaintenanceWindowsResult,
  DescribeOpsItemsRequest,
  DescribeOpsItemsResponse,
  DescribeParametersRequest,
  DescribeParametersResult,
  DescribePatchBaselinesRequest,
  DescribePatchBaselinesResult,
  DescribePatchGroupStateRequest,
  DescribePatchGroupStateResult,
  DescribePatchGroupsRequest,
  DescribePatchGroupsResult,
  DescribePatchPropertiesRequest,
  DescribePatchPropertiesResult,
  DescribeSessionsRequest,
  DescribeSessionsResponse,
  GetAutomationExecutionRequest,
  GetAutomationExecutionResult,
  GetCommandInvocationRequest,
  GetCommandInvocationResult,
  GetConnectionStatusRequest,
  GetConnectionStatusResponse,
  GetDefaultPatchBaselineRequest,
  GetDefaultPatchBaselineResult,
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceResult,
  GetDocumentRequest,
  GetDocumentResult,
  GetInventoryRequest,
  GetInventoryResult,
  GetInventorySchemaRequest,
  GetInventorySchemaResult,
  GetMaintenanceWindowExecutionRequest,
  GetMaintenanceWindowExecutionResult,
  GetMaintenanceWindowExecutionTaskInvocationRequest,
  GetMaintenanceWindowExecutionTaskInvocationResult,
  GetMaintenanceWindowExecutionTaskRequest,
  GetMaintenanceWindowExecutionTaskResult,
  GetMaintenanceWindowRequest,
  GetMaintenanceWindowResult,
  GetMaintenanceWindowTaskRequest,
  GetMaintenanceWindowTaskResult,
  GetOpsItemRequest,
  GetOpsItemResponse,
  GetOpsSummaryRequest,
  GetOpsSummaryResult,
  GetParameterHistoryRequest,
  GetParameterHistoryResult,
  GetParameterRequest,
  GetParameterResult,
  GetParametersByPathRequest,
  GetParametersByPathResult,
  GetParametersRequest,
  GetParametersResult,
  GetPatchBaselineForPatchGroupRequest,
  GetPatchBaselineForPatchGroupResult,
  GetPatchBaselineRequest,
  GetPatchBaselineResult,
  GetServiceSettingRequest,
  GetServiceSettingResult,
  LabelParameterVersionRequest,
  LabelParameterVersionResult,
  ListAssociationVersionsRequest,
  ListAssociationVersionsResult,
  ListAssociationsRequest,
  ListAssociationsResult,
  ListCommandInvocationsRequest,
  ListCommandInvocationsResult,
  ListCommandsRequest,
  ListCommandsResult,
  ListComplianceItemsRequest,
  ListComplianceItemsResult,
  ListComplianceSummariesRequest,
  ListComplianceSummariesResult,
  ListDocumentVersionsRequest,
  ListDocumentVersionsResult,
  ListDocumentsRequest,
  ListDocumentsResult,
  ListInventoryEntriesRequest,
  ListInventoryEntriesResult,
  ListResourceComplianceSummariesRequest,
  ListResourceComplianceSummariesResult,
  ListResourceDataSyncRequest,
  ListResourceDataSyncResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ModifyDocumentPermissionRequest,
  ModifyDocumentPermissionResponse,
  PutComplianceItemsRequest,
  PutComplianceItemsResult,
  PutInventoryRequest,
  PutInventoryResult,
  PutParameterRequest,
  PutParameterResult,
  RegisterDefaultPatchBaselineRequest,
  RegisterDefaultPatchBaselineResult,
  RegisterPatchBaselineForPatchGroupRequest,
  RegisterPatchBaselineForPatchGroupResult,
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTargetWithMaintenanceWindowResult,
  RegisterTaskWithMaintenanceWindowRequest,
  RegisterTaskWithMaintenanceWindowResult,
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
  ResetServiceSettingRequest,
  ResetServiceSettingResult,
  ResumeSessionRequest,
  ResumeSessionResponse,
  SendAutomationSignalRequest,
  SendAutomationSignalResult,
  SendCommandRequest,
  SendCommandResult,
  StartAssociationsOnceRequest,
  StartAssociationsOnceResult,
  StartAutomationExecutionRequest,
  StartAutomationExecutionResult,
  StartSessionRequest,
  StartSessionResponse,
  StopAutomationExecutionRequest,
  StopAutomationExecutionResult,
  TerminateSessionRequest,
  TerminateSessionResponse,
  UpdateAssociationRequest,
  UpdateAssociationResult,
  UpdateAssociationStatusRequest,
  UpdateAssociationStatusResult,
  UpdateDocumentDefaultVersionRequest,
  UpdateDocumentDefaultVersionResult,
  UpdateDocumentRequest,
  UpdateDocumentResult,
  UpdateMaintenanceWindowRequest,
  UpdateMaintenanceWindowResult,
  UpdateMaintenanceWindowTargetRequest,
  UpdateMaintenanceWindowTargetResult,
  UpdateMaintenanceWindowTaskRequest,
  UpdateMaintenanceWindowTaskResult,
  UpdateManagedInstanceRoleRequest,
  UpdateManagedInstanceRoleResult,
  UpdateOpsItemRequest,
  UpdateOpsItemResponse,
  UpdatePatchBaselineRequest,
  UpdatePatchBaselineResult,
  UpdateResourceDataSyncRequest,
  UpdateResourceDataSyncResult,
  UpdateServiceSettingRequest,
  UpdateServiceSettingResult
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddTagsToResourceRequest
  | CancelCommandRequest
  | CancelMaintenanceWindowExecutionRequest
  | CreateActivationRequest
  | CreateAssociationBatchRequest
  | CreateAssociationRequest
  | CreateDocumentRequest
  | CreateMaintenanceWindowRequest
  | CreateOpsItemRequest
  | CreatePatchBaselineRequest
  | CreateResourceDataSyncRequest
  | DeleteActivationRequest
  | DeleteAssociationRequest
  | DeleteDocumentRequest
  | DeleteInventoryRequest
  | DeleteMaintenanceWindowRequest
  | DeleteParameterRequest
  | DeleteParametersRequest
  | DeletePatchBaselineRequest
  | DeleteResourceDataSyncRequest
  | DeregisterManagedInstanceRequest
  | DeregisterPatchBaselineForPatchGroupRequest
  | DeregisterTargetFromMaintenanceWindowRequest
  | DeregisterTaskFromMaintenanceWindowRequest
  | DescribeActivationsRequest
  | DescribeAssociationExecutionTargetsRequest
  | DescribeAssociationExecutionsRequest
  | DescribeAssociationRequest
  | DescribeAutomationExecutionsRequest
  | DescribeAutomationStepExecutionsRequest
  | DescribeAvailablePatchesRequest
  | DescribeDocumentPermissionRequest
  | DescribeDocumentRequest
  | DescribeEffectiveInstanceAssociationsRequest
  | DescribeEffectivePatchesForPatchBaselineRequest
  | DescribeInstanceAssociationsStatusRequest
  | DescribeInstanceInformationRequest
  | DescribeInstancePatchStatesForPatchGroupRequest
  | DescribeInstancePatchStatesRequest
  | DescribeInstancePatchesRequest
  | DescribeInventoryDeletionsRequest
  | DescribeMaintenanceWindowExecutionTaskInvocationsRequest
  | DescribeMaintenanceWindowExecutionTasksRequest
  | DescribeMaintenanceWindowExecutionsRequest
  | DescribeMaintenanceWindowScheduleRequest
  | DescribeMaintenanceWindowTargetsRequest
  | DescribeMaintenanceWindowTasksRequest
  | DescribeMaintenanceWindowsForTargetRequest
  | DescribeMaintenanceWindowsRequest
  | DescribeOpsItemsRequest
  | DescribeParametersRequest
  | DescribePatchBaselinesRequest
  | DescribePatchGroupStateRequest
  | DescribePatchGroupsRequest
  | DescribePatchPropertiesRequest
  | DescribeSessionsRequest
  | GetAutomationExecutionRequest
  | GetCommandInvocationRequest
  | GetConnectionStatusRequest
  | GetDefaultPatchBaselineRequest
  | GetDeployablePatchSnapshotForInstanceRequest
  | GetDocumentRequest
  | GetInventoryRequest
  | GetInventorySchemaRequest
  | GetMaintenanceWindowExecutionRequest
  | GetMaintenanceWindowExecutionTaskInvocationRequest
  | GetMaintenanceWindowExecutionTaskRequest
  | GetMaintenanceWindowRequest
  | GetMaintenanceWindowTaskRequest
  | GetOpsItemRequest
  | GetOpsSummaryRequest
  | GetParameterHistoryRequest
  | GetParameterRequest
  | GetParametersByPathRequest
  | GetParametersRequest
  | GetPatchBaselineForPatchGroupRequest
  | GetPatchBaselineRequest
  | GetServiceSettingRequest
  | LabelParameterVersionRequest
  | ListAssociationVersionsRequest
  | ListAssociationsRequest
  | ListCommandInvocationsRequest
  | ListCommandsRequest
  | ListComplianceItemsRequest
  | ListComplianceSummariesRequest
  | ListDocumentVersionsRequest
  | ListDocumentsRequest
  | ListInventoryEntriesRequest
  | ListResourceComplianceSummariesRequest
  | ListResourceDataSyncRequest
  | ListTagsForResourceRequest
  | ModifyDocumentPermissionRequest
  | PutComplianceItemsRequest
  | PutInventoryRequest
  | PutParameterRequest
  | RegisterDefaultPatchBaselineRequest
  | RegisterPatchBaselineForPatchGroupRequest
  | RegisterTargetWithMaintenanceWindowRequest
  | RegisterTaskWithMaintenanceWindowRequest
  | RemoveTagsFromResourceRequest
  | ResetServiceSettingRequest
  | ResumeSessionRequest
  | SendAutomationSignalRequest
  | SendCommandRequest
  | StartAssociationsOnceRequest
  | StartAutomationExecutionRequest
  | StartSessionRequest
  | StopAutomationExecutionRequest
  | TerminateSessionRequest
  | UpdateAssociationRequest
  | UpdateAssociationStatusRequest
  | UpdateDocumentDefaultVersionRequest
  | UpdateDocumentRequest
  | UpdateMaintenanceWindowRequest
  | UpdateMaintenanceWindowTargetRequest
  | UpdateMaintenanceWindowTaskRequest
  | UpdateManagedInstanceRoleRequest
  | UpdateOpsItemRequest
  | UpdatePatchBaselineRequest
  | UpdateResourceDataSyncRequest
  | UpdateServiceSettingRequest;

export type ServiceOutputTypes =
  | AddTagsToResourceResult
  | CancelCommandResult
  | CancelMaintenanceWindowExecutionResult
  | CreateActivationResult
  | CreateAssociationBatchResult
  | CreateAssociationResult
  | CreateDocumentResult
  | CreateMaintenanceWindowResult
  | CreateOpsItemResponse
  | CreatePatchBaselineResult
  | CreateResourceDataSyncResult
  | DeleteActivationResult
  | DeleteAssociationResult
  | DeleteDocumentResult
  | DeleteInventoryResult
  | DeleteMaintenanceWindowResult
  | DeleteParameterResult
  | DeleteParametersResult
  | DeletePatchBaselineResult
  | DeleteResourceDataSyncResult
  | DeregisterManagedInstanceResult
  | DeregisterPatchBaselineForPatchGroupResult
  | DeregisterTargetFromMaintenanceWindowResult
  | DeregisterTaskFromMaintenanceWindowResult
  | DescribeActivationsResult
  | DescribeAssociationExecutionTargetsResult
  | DescribeAssociationExecutionsResult
  | DescribeAssociationResult
  | DescribeAutomationExecutionsResult
  | DescribeAutomationStepExecutionsResult
  | DescribeAvailablePatchesResult
  | DescribeDocumentPermissionResponse
  | DescribeDocumentResult
  | DescribeEffectiveInstanceAssociationsResult
  | DescribeEffectivePatchesForPatchBaselineResult
  | DescribeInstanceAssociationsStatusResult
  | DescribeInstanceInformationResult
  | DescribeInstancePatchStatesForPatchGroupResult
  | DescribeInstancePatchStatesResult
  | DescribeInstancePatchesResult
  | DescribeInventoryDeletionsResult
  | DescribeMaintenanceWindowExecutionTaskInvocationsResult
  | DescribeMaintenanceWindowExecutionTasksResult
  | DescribeMaintenanceWindowExecutionsResult
  | DescribeMaintenanceWindowScheduleResult
  | DescribeMaintenanceWindowTargetsResult
  | DescribeMaintenanceWindowTasksResult
  | DescribeMaintenanceWindowsForTargetResult
  | DescribeMaintenanceWindowsResult
  | DescribeOpsItemsResponse
  | DescribeParametersResult
  | DescribePatchBaselinesResult
  | DescribePatchGroupStateResult
  | DescribePatchGroupsResult
  | DescribePatchPropertiesResult
  | DescribeSessionsResponse
  | GetAutomationExecutionResult
  | GetCommandInvocationResult
  | GetConnectionStatusResponse
  | GetDefaultPatchBaselineResult
  | GetDeployablePatchSnapshotForInstanceResult
  | GetDocumentResult
  | GetInventoryResult
  | GetInventorySchemaResult
  | GetMaintenanceWindowExecutionResult
  | GetMaintenanceWindowExecutionTaskInvocationResult
  | GetMaintenanceWindowExecutionTaskResult
  | GetMaintenanceWindowResult
  | GetMaintenanceWindowTaskResult
  | GetOpsItemResponse
  | GetOpsSummaryResult
  | GetParameterHistoryResult
  | GetParameterResult
  | GetParametersByPathResult
  | GetParametersResult
  | GetPatchBaselineForPatchGroupResult
  | GetPatchBaselineResult
  | GetServiceSettingResult
  | LabelParameterVersionResult
  | ListAssociationVersionsResult
  | ListAssociationsResult
  | ListCommandInvocationsResult
  | ListCommandsResult
  | ListComplianceItemsResult
  | ListComplianceSummariesResult
  | ListDocumentVersionsResult
  | ListDocumentsResult
  | ListInventoryEntriesResult
  | ListResourceComplianceSummariesResult
  | ListResourceDataSyncResult
  | ListTagsForResourceResult
  | ModifyDocumentPermissionResponse
  | PutComplianceItemsResult
  | PutInventoryResult
  | PutParameterResult
  | RegisterDefaultPatchBaselineResult
  | RegisterPatchBaselineForPatchGroupResult
  | RegisterTargetWithMaintenanceWindowResult
  | RegisterTaskWithMaintenanceWindowResult
  | RemoveTagsFromResourceResult
  | ResetServiceSettingResult
  | ResumeSessionResponse
  | SendAutomationSignalResult
  | SendCommandResult
  | StartAssociationsOnceResult
  | StartAutomationExecutionResult
  | StartSessionResponse
  | StopAutomationExecutionResult
  | TerminateSessionResponse
  | UpdateAssociationResult
  | UpdateAssociationStatusResult
  | UpdateDocumentDefaultVersionResult
  | UpdateDocumentResult
  | UpdateMaintenanceWindowResult
  | UpdateMaintenanceWindowTargetResult
  | UpdateMaintenanceWindowTaskResult
  | UpdateManagedInstanceRoleResult
  | UpdateOpsItemResponse
  | UpdatePatchBaselineResult
  | UpdateResourceDataSyncResult
  | UpdateServiceSettingResult;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type SSMClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SSMClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *          <fullname>AWS Systems Manager</fullname>
 *          <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as
 *    collecting system inventory, applying operating system (OS) patches, automating the creation of
 *    Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale.
 *    Systems Manager lets you remotely and securely manage the configuration of your managed instances. A
 *     <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your
 *    hybrid environment that has been configured for Systems Manager.</p>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p>
 *          <p>To get started, verify prerequisites and configure managed instances. For more information,
 *    see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting Up AWS Systems Manager</a> in
 *    the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>For information about other API actions you can perform on Amazon EC2 instances, see the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information about how to use a Query API, see
 *     <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API Requests</a>. </p>
 *
 */
export class SSMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig
> {
  readonly config: SSMClientResolvedConfig;

  constructor(configuration: SSMClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
