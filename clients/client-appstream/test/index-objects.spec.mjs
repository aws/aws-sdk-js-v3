import {
  AccessEndpoint$,
  AccessEndpointType,
  Action,
  AdminAppLicenseUsageRecord$,
  AgentSoftwareVersion,
  AppBlock$,
  AppBlockBuilder$,
  AppBlockBuilderAppBlockAssociation$,
  AppBlockBuilderAttribute,
  AppBlockBuilderPlatformType,
  AppBlockBuilderState,
  AppBlockBuilderStateChangeReason$,
  AppBlockBuilderStateChangeReasonCode,
  AppBlockState,
  AppStream,
  AppStreamClient,
  AppStreamServiceException,
  AppVisibility,
  Application$,
  ApplicationAttribute,
  ApplicationConfig$,
  ApplicationFleetAssociation$,
  ApplicationSettings$,
  ApplicationSettingsResponse$,
  AssociateAppBlockBuilderAppBlock$,
  AssociateAppBlockBuilderAppBlockCommand,
  AssociateAppBlockBuilderAppBlockRequest$,
  AssociateAppBlockBuilderAppBlockResult$,
  AssociateApplicationFleet$,
  AssociateApplicationFleetCommand,
  AssociateApplicationFleetRequest$,
  AssociateApplicationFleetResult$,
  AssociateApplicationToEntitlement$,
  AssociateApplicationToEntitlementCommand,
  AssociateApplicationToEntitlementRequest$,
  AssociateApplicationToEntitlementResult$,
  AssociateFleet$,
  AssociateFleetCommand,
  AssociateFleetRequest$,
  AssociateFleetResult$,
  AssociateSoftwareToImageBuilder$,
  AssociateSoftwareToImageBuilderCommand,
  AssociateSoftwareToImageBuilderRequest$,
  AssociateSoftwareToImageBuilderResult$,
  AuthenticationType,
  BatchAssociateUserStack$,
  BatchAssociateUserStackCommand,
  BatchAssociateUserStackRequest$,
  BatchAssociateUserStackResult$,
  BatchDisassociateUserStack$,
  BatchDisassociateUserStackCommand,
  BatchDisassociateUserStackRequest$,
  BatchDisassociateUserStackResult$,
  CertificateBasedAuthProperties$,
  CertificateBasedAuthStatus,
  ComputeCapacity$,
  ComputeCapacityStatus$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  CopyImage$,
  CopyImageCommand,
  CopyImageRequest$,
  CopyImageResponse$,
  CreateAppBlock$,
  CreateAppBlockBuilder$,
  CreateAppBlockBuilderCommand,
  CreateAppBlockBuilderRequest$,
  CreateAppBlockBuilderResult$,
  CreateAppBlockBuilderStreamingURL$,
  CreateAppBlockBuilderStreamingURLCommand,
  CreateAppBlockBuilderStreamingURLRequest$,
  CreateAppBlockBuilderStreamingURLResult$,
  CreateAppBlockCommand,
  CreateAppBlockRequest$,
  CreateAppBlockResult$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResult$,
  CreateDirectoryConfig$,
  CreateDirectoryConfigCommand,
  CreateDirectoryConfigRequest$,
  CreateDirectoryConfigResult$,
  CreateEntitlement$,
  CreateEntitlementCommand,
  CreateEntitlementRequest$,
  CreateEntitlementResult$,
  CreateExportImageTask$,
  CreateExportImageTaskCommand,
  CreateExportImageTaskRequest$,
  CreateExportImageTaskResult$,
  CreateFleet$,
  CreateFleetCommand,
  CreateFleetRequest$,
  CreateFleetResult$,
  CreateImageBuilder$,
  CreateImageBuilderCommand,
  CreateImageBuilderRequest$,
  CreateImageBuilderResult$,
  CreateImageBuilderStreamingURL$,
  CreateImageBuilderStreamingURLCommand,
  CreateImageBuilderStreamingURLRequest$,
  CreateImageBuilderStreamingURLResult$,
  CreateImportedImage$,
  CreateImportedImageCommand,
  CreateImportedImageRequest$,
  CreateImportedImageResult$,
  CreateStack$,
  CreateStackCommand,
  CreateStackRequest$,
  CreateStackResult$,
  CreateStreamingURL$,
  CreateStreamingURLCommand,
  CreateStreamingURLRequest$,
  CreateStreamingURLResult$,
  CreateThemeForStack$,
  CreateThemeForStackCommand,
  CreateThemeForStackRequest$,
  CreateThemeForStackResult$,
  CreateUpdatedImage$,
  CreateUpdatedImageCommand,
  CreateUpdatedImageRequest$,
  CreateUpdatedImageResult$,
  CreateUsageReportSubscription$,
  CreateUsageReportSubscriptionCommand,
  CreateUsageReportSubscriptionRequest$,
  CreateUsageReportSubscriptionResult$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResult$,
  DeleteAppBlock$,
  DeleteAppBlockBuilder$,
  DeleteAppBlockBuilderCommand,
  DeleteAppBlockBuilderRequest$,
  DeleteAppBlockBuilderResult$,
  DeleteAppBlockCommand,
  DeleteAppBlockRequest$,
  DeleteAppBlockResult$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResult$,
  DeleteDirectoryConfig$,
  DeleteDirectoryConfigCommand,
  DeleteDirectoryConfigRequest$,
  DeleteDirectoryConfigResult$,
  DeleteEntitlement$,
  DeleteEntitlementCommand,
  DeleteEntitlementRequest$,
  DeleteEntitlementResult$,
  DeleteFleet$,
  DeleteFleetCommand,
  DeleteFleetRequest$,
  DeleteFleetResult$,
  DeleteImage$,
  DeleteImageBuilder$,
  DeleteImageBuilderCommand,
  DeleteImageBuilderRequest$,
  DeleteImageBuilderResult$,
  DeleteImageCommand,
  DeleteImagePermissions$,
  DeleteImagePermissionsCommand,
  DeleteImagePermissionsRequest$,
  DeleteImagePermissionsResult$,
  DeleteImageRequest$,
  DeleteImageResult$,
  DeleteStack$,
  DeleteStackCommand,
  DeleteStackRequest$,
  DeleteStackResult$,
  DeleteThemeForStack$,
  DeleteThemeForStackCommand,
  DeleteThemeForStackRequest$,
  DeleteThemeForStackResult$,
  DeleteUsageReportSubscription$,
  DeleteUsageReportSubscriptionCommand,
  DeleteUsageReportSubscriptionRequest$,
  DeleteUsageReportSubscriptionResult$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResult$,
  DescribeAppBlockBuilderAppBlockAssociations$,
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
  DescribeAppBlockBuilderAppBlockAssociationsRequest$,
  DescribeAppBlockBuilderAppBlockAssociationsResult$,
  DescribeAppBlockBuilders$,
  DescribeAppBlockBuildersCommand,
  DescribeAppBlockBuildersRequest$,
  DescribeAppBlockBuildersResult$,
  DescribeAppBlocks$,
  DescribeAppBlocksCommand,
  DescribeAppBlocksRequest$,
  DescribeAppBlocksResult$,
  DescribeAppLicenseUsage$,
  DescribeAppLicenseUsageCommand,
  DescribeAppLicenseUsageRequest$,
  DescribeAppLicenseUsageResult$,
  DescribeApplicationFleetAssociations$,
  DescribeApplicationFleetAssociationsCommand,
  DescribeApplicationFleetAssociationsRequest$,
  DescribeApplicationFleetAssociationsResult$,
  DescribeApplications$,
  DescribeApplicationsCommand,
  DescribeApplicationsRequest$,
  DescribeApplicationsResult$,
  DescribeDirectoryConfigs$,
  DescribeDirectoryConfigsCommand,
  DescribeDirectoryConfigsRequest$,
  DescribeDirectoryConfigsResult$,
  DescribeEntitlements$,
  DescribeEntitlementsCommand,
  DescribeEntitlementsRequest$,
  DescribeEntitlementsResult$,
  DescribeFleets$,
  DescribeFleetsCommand,
  DescribeFleetsRequest$,
  DescribeFleetsResult$,
  DescribeImageBuilders$,
  DescribeImageBuildersCommand,
  DescribeImageBuildersRequest$,
  DescribeImageBuildersResult$,
  DescribeImagePermissions$,
  DescribeImagePermissionsCommand,
  DescribeImagePermissionsRequest$,
  DescribeImagePermissionsResult$,
  DescribeImages$,
  DescribeImagesCommand,
  DescribeImagesRequest$,
  DescribeImagesResult$,
  DescribeSessions$,
  DescribeSessionsCommand,
  DescribeSessionsRequest$,
  DescribeSessionsResult$,
  DescribeSoftwareAssociations$,
  DescribeSoftwareAssociationsCommand,
  DescribeSoftwareAssociationsRequest$,
  DescribeSoftwareAssociationsResult$,
  DescribeStacks$,
  DescribeStacksCommand,
  DescribeStacksRequest$,
  DescribeStacksResult$,
  DescribeThemeForStack$,
  DescribeThemeForStackCommand,
  DescribeThemeForStackRequest$,
  DescribeThemeForStackResult$,
  DescribeUsageReportSubscriptions$,
  DescribeUsageReportSubscriptionsCommand,
  DescribeUsageReportSubscriptionsRequest$,
  DescribeUsageReportSubscriptionsResult$,
  DescribeUserStackAssociations$,
  DescribeUserStackAssociationsCommand,
  DescribeUserStackAssociationsRequest$,
  DescribeUserStackAssociationsResult$,
  DescribeUsers$,
  DescribeUsersCommand,
  DescribeUsersRequest$,
  DescribeUsersResult$,
  DirectoryConfig$,
  DisableUser$,
  DisableUserCommand,
  DisableUserRequest$,
  DisableUserResult$,
  DisassociateAppBlockBuilderAppBlock$,
  DisassociateAppBlockBuilderAppBlockCommand,
  DisassociateAppBlockBuilderAppBlockRequest$,
  DisassociateAppBlockBuilderAppBlockResult$,
  DisassociateApplicationFleet$,
  DisassociateApplicationFleetCommand,
  DisassociateApplicationFleetRequest$,
  DisassociateApplicationFleetResult$,
  DisassociateApplicationFromEntitlement$,
  DisassociateApplicationFromEntitlementCommand,
  DisassociateApplicationFromEntitlementRequest$,
  DisassociateApplicationFromEntitlementResult$,
  DisassociateFleet$,
  DisassociateFleetCommand,
  DisassociateFleetRequest$,
  DisassociateFleetResult$,
  DisassociateSoftwareFromImageBuilder$,
  DisassociateSoftwareFromImageBuilderCommand,
  DisassociateSoftwareFromImageBuilderRequest$,
  DisassociateSoftwareFromImageBuilderResult$,
  DomainJoinInfo$,
  DryRunOperationException,
  DryRunOperationException$,
  DynamicAppProvidersEnabled,
  EnableUser$,
  EnableUserCommand,
  EnableUserRequest$,
  EnableUserResult$,
  EntitledApplication$,
  Entitlement$,
  EntitlementAlreadyExistsException,
  EntitlementAlreadyExistsException$,
  EntitlementAttribute$,
  EntitlementNotFoundException,
  EntitlementNotFoundException$,
  ErrorDetails$,
  ExpireSession$,
  ExpireSessionCommand,
  ExpireSessionRequest$,
  ExpireSessionResult$,
  ExportImageTask$,
  ExportImageTaskState,
  Filter$,
  Fleet$,
  FleetAttribute,
  FleetError$,
  FleetErrorCode,
  FleetState,
  FleetType,
  GetExportImageTask$,
  GetExportImageTaskCommand,
  GetExportImageTaskRequest$,
  GetExportImageTaskResult$,
  Image$,
  ImageBuilder$,
  ImageBuilderState,
  ImageBuilderStateChangeReason$,
  ImageBuilderStateChangeReasonCode,
  ImagePermissions$,
  ImageSharedWithOthers,
  ImageState,
  ImageStateChangeReason$,
  ImageStateChangeReasonCode,
  ImageType,
  IncompatibleImageException,
  IncompatibleImageException$,
  InvalidAccountStatusException,
  InvalidAccountStatusException$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidRoleException,
  InvalidRoleException$,
  LastReportGenerationExecutionError$,
  LatestAppstreamAgentVersion,
  LimitExceededException,
  LimitExceededException$,
  ListAssociatedFleets$,
  ListAssociatedFleetsCommand,
  ListAssociatedFleetsRequest$,
  ListAssociatedFleetsResult$,
  ListAssociatedStacks$,
  ListAssociatedStacksCommand,
  ListAssociatedStacksRequest$,
  ListAssociatedStacksResult$,
  ListEntitledApplications$,
  ListEntitledApplicationsCommand,
  ListEntitledApplicationsRequest$,
  ListEntitledApplicationsResult$,
  ListExportImageTasks$,
  ListExportImageTasksCommand,
  ListExportImageTasksRequest$,
  ListExportImageTasksResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MessageAction,
  NetworkAccessConfiguration$,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  PackagingType,
  Permission,
  PlatformType,
  PreferredProtocol,
  RequestLimitExceededException,
  RequestLimitExceededException$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceError$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotAvailableException,
  ResourceNotAvailableException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuntimeValidationConfig$,
  S3Location$,
  ScriptDetails$,
  ServiceAccountCredentials$,
  Session$,
  SessionConnectionState,
  SessionState,
  SharedImagePermissions$,
  SoftwareAssociations$,
  SoftwareDeploymentStatus,
  Stack$,
  StackAttribute,
  StackError$,
  StackErrorCode,
  StartAppBlockBuilder$,
  StartAppBlockBuilderCommand,
  StartAppBlockBuilderRequest$,
  StartAppBlockBuilderResult$,
  StartFleet$,
  StartFleetCommand,
  StartFleetRequest$,
  StartFleetResult$,
  StartImageBuilder$,
  StartImageBuilderCommand,
  StartImageBuilderRequest$,
  StartImageBuilderResult$,
  StartSoftwareDeploymentToImageBuilder$,
  StartSoftwareDeploymentToImageBuilderCommand,
  StartSoftwareDeploymentToImageBuilderRequest$,
  StartSoftwareDeploymentToImageBuilderResult$,
  StopAppBlockBuilder$,
  StopAppBlockBuilderCommand,
  StopAppBlockBuilderRequest$,
  StopAppBlockBuilderResult$,
  StopFleet$,
  StopFleetCommand,
  StopFleetRequest$,
  StopFleetResult$,
  StopImageBuilder$,
  StopImageBuilderCommand,
  StopImageBuilderRequest$,
  StopImageBuilderResult$,
  StorageConnector$,
  StorageConnectorType,
  StreamView,
  StreamingExperienceSettings$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Theme$,
  ThemeAttribute,
  ThemeFooterLink$,
  ThemeState,
  ThemeStyling,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAppBlockBuilder$,
  UpdateAppBlockBuilderCommand,
  UpdateAppBlockBuilderRequest$,
  UpdateAppBlockBuilderResult$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResult$,
  UpdateDirectoryConfig$,
  UpdateDirectoryConfigCommand,
  UpdateDirectoryConfigRequest$,
  UpdateDirectoryConfigResult$,
  UpdateEntitlement$,
  UpdateEntitlementCommand,
  UpdateEntitlementRequest$,
  UpdateEntitlementResult$,
  UpdateFleet$,
  UpdateFleetCommand,
  UpdateFleetRequest$,
  UpdateFleetResult$,
  UpdateImagePermissions$,
  UpdateImagePermissionsCommand,
  UpdateImagePermissionsRequest$,
  UpdateImagePermissionsResult$,
  UpdateStack$,
  UpdateStackCommand,
  UpdateStackRequest$,
  UpdateStackResult$,
  UpdateThemeForStack$,
  UpdateThemeForStackCommand,
  UpdateThemeForStackRequest$,
  UpdateThemeForStackResult$,
  UsageReportExecutionErrorCode,
  UsageReportSchedule,
  UsageReportSubscription$,
  User$,
  UserSetting$,
  UserStackAssociation$,
  UserStackAssociationError$,
  UserStackAssociationErrorCode,
  VisibilityType,
  VolumeConfig$,
  VpcConfig$,
  paginateDescribeAppBlockBuilderAppBlockAssociations,
  paginateDescribeAppBlockBuilders,
  paginateDescribeImagePermissions,
  paginateDescribeImages,
  waitForFleetStarted,
  waitForFleetStopped,
  waitUntilFleetStarted,
  waitUntilFleetStopped,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppStreamClient === "function");
assert(typeof AppStream === "function");
// commands
assert(typeof AssociateAppBlockBuilderAppBlockCommand === "function");
assert(typeof AssociateAppBlockBuilderAppBlock$ === "object");
assert(typeof AssociateApplicationFleetCommand === "function");
assert(typeof AssociateApplicationFleet$ === "object");
assert(typeof AssociateApplicationToEntitlementCommand === "function");
assert(typeof AssociateApplicationToEntitlement$ === "object");
assert(typeof AssociateFleetCommand === "function");
assert(typeof AssociateFleet$ === "object");
assert(typeof AssociateSoftwareToImageBuilderCommand === "function");
assert(typeof AssociateSoftwareToImageBuilder$ === "object");
assert(typeof BatchAssociateUserStackCommand === "function");
assert(typeof BatchAssociateUserStack$ === "object");
assert(typeof BatchDisassociateUserStackCommand === "function");
assert(typeof BatchDisassociateUserStack$ === "object");
assert(typeof CopyImageCommand === "function");
assert(typeof CopyImage$ === "object");
assert(typeof CreateAppBlockCommand === "function");
assert(typeof CreateAppBlock$ === "object");
assert(typeof CreateAppBlockBuilderCommand === "function");
assert(typeof CreateAppBlockBuilder$ === "object");
assert(typeof CreateAppBlockBuilderStreamingURLCommand === "function");
assert(typeof CreateAppBlockBuilderStreamingURL$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateDirectoryConfigCommand === "function");
assert(typeof CreateDirectoryConfig$ === "object");
assert(typeof CreateEntitlementCommand === "function");
assert(typeof CreateEntitlement$ === "object");
assert(typeof CreateExportImageTaskCommand === "function");
assert(typeof CreateExportImageTask$ === "object");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleet$ === "object");
assert(typeof CreateImageBuilderCommand === "function");
assert(typeof CreateImageBuilder$ === "object");
assert(typeof CreateImageBuilderStreamingURLCommand === "function");
assert(typeof CreateImageBuilderStreamingURL$ === "object");
assert(typeof CreateImportedImageCommand === "function");
assert(typeof CreateImportedImage$ === "object");
assert(typeof CreateStackCommand === "function");
assert(typeof CreateStack$ === "object");
assert(typeof CreateStreamingURLCommand === "function");
assert(typeof CreateStreamingURL$ === "object");
assert(typeof CreateThemeForStackCommand === "function");
assert(typeof CreateThemeForStack$ === "object");
assert(typeof CreateUpdatedImageCommand === "function");
assert(typeof CreateUpdatedImage$ === "object");
assert(typeof CreateUsageReportSubscriptionCommand === "function");
assert(typeof CreateUsageReportSubscription$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteAppBlockCommand === "function");
assert(typeof DeleteAppBlock$ === "object");
assert(typeof DeleteAppBlockBuilderCommand === "function");
assert(typeof DeleteAppBlockBuilder$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteDirectoryConfigCommand === "function");
assert(typeof DeleteDirectoryConfig$ === "object");
assert(typeof DeleteEntitlementCommand === "function");
assert(typeof DeleteEntitlement$ === "object");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteFleet$ === "object");
assert(typeof DeleteImageCommand === "function");
assert(typeof DeleteImage$ === "object");
assert(typeof DeleteImageBuilderCommand === "function");
assert(typeof DeleteImageBuilder$ === "object");
assert(typeof DeleteImagePermissionsCommand === "function");
assert(typeof DeleteImagePermissions$ === "object");
assert(typeof DeleteStackCommand === "function");
assert(typeof DeleteStack$ === "object");
assert(typeof DeleteThemeForStackCommand === "function");
assert(typeof DeleteThemeForStack$ === "object");
assert(typeof DeleteUsageReportSubscriptionCommand === "function");
assert(typeof DeleteUsageReportSubscription$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeAppBlockBuilderAppBlockAssociationsCommand === "function");
assert(typeof DescribeAppBlockBuilderAppBlockAssociations$ === "object");
assert(typeof DescribeAppBlockBuildersCommand === "function");
assert(typeof DescribeAppBlockBuilders$ === "object");
assert(typeof DescribeAppBlocksCommand === "function");
assert(typeof DescribeAppBlocks$ === "object");
assert(typeof DescribeApplicationFleetAssociationsCommand === "function");
assert(typeof DescribeApplicationFleetAssociations$ === "object");
assert(typeof DescribeApplicationsCommand === "function");
assert(typeof DescribeApplications$ === "object");
assert(typeof DescribeAppLicenseUsageCommand === "function");
assert(typeof DescribeAppLicenseUsage$ === "object");
assert(typeof DescribeDirectoryConfigsCommand === "function");
assert(typeof DescribeDirectoryConfigs$ === "object");
assert(typeof DescribeEntitlementsCommand === "function");
assert(typeof DescribeEntitlements$ === "object");
assert(typeof DescribeFleetsCommand === "function");
assert(typeof DescribeFleets$ === "object");
assert(typeof DescribeImageBuildersCommand === "function");
assert(typeof DescribeImageBuilders$ === "object");
assert(typeof DescribeImagePermissionsCommand === "function");
assert(typeof DescribeImagePermissions$ === "object");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImages$ === "object");
assert(typeof DescribeSessionsCommand === "function");
assert(typeof DescribeSessions$ === "object");
assert(typeof DescribeSoftwareAssociationsCommand === "function");
assert(typeof DescribeSoftwareAssociations$ === "object");
assert(typeof DescribeStacksCommand === "function");
assert(typeof DescribeStacks$ === "object");
assert(typeof DescribeThemeForStackCommand === "function");
assert(typeof DescribeThemeForStack$ === "object");
assert(typeof DescribeUsageReportSubscriptionsCommand === "function");
assert(typeof DescribeUsageReportSubscriptions$ === "object");
assert(typeof DescribeUsersCommand === "function");
assert(typeof DescribeUsers$ === "object");
assert(typeof DescribeUserStackAssociationsCommand === "function");
assert(typeof DescribeUserStackAssociations$ === "object");
assert(typeof DisableUserCommand === "function");
assert(typeof DisableUser$ === "object");
assert(typeof DisassociateAppBlockBuilderAppBlockCommand === "function");
assert(typeof DisassociateAppBlockBuilderAppBlock$ === "object");
assert(typeof DisassociateApplicationFleetCommand === "function");
assert(typeof DisassociateApplicationFleet$ === "object");
assert(typeof DisassociateApplicationFromEntitlementCommand === "function");
assert(typeof DisassociateApplicationFromEntitlement$ === "object");
assert(typeof DisassociateFleetCommand === "function");
assert(typeof DisassociateFleet$ === "object");
assert(typeof DisassociateSoftwareFromImageBuilderCommand === "function");
assert(typeof DisassociateSoftwareFromImageBuilder$ === "object");
assert(typeof EnableUserCommand === "function");
assert(typeof EnableUser$ === "object");
assert(typeof ExpireSessionCommand === "function");
assert(typeof ExpireSession$ === "object");
assert(typeof GetExportImageTaskCommand === "function");
assert(typeof GetExportImageTask$ === "object");
assert(typeof ListAssociatedFleetsCommand === "function");
assert(typeof ListAssociatedFleets$ === "object");
assert(typeof ListAssociatedStacksCommand === "function");
assert(typeof ListAssociatedStacks$ === "object");
assert(typeof ListEntitledApplicationsCommand === "function");
assert(typeof ListEntitledApplications$ === "object");
assert(typeof ListExportImageTasksCommand === "function");
assert(typeof ListExportImageTasks$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartAppBlockBuilderCommand === "function");
assert(typeof StartAppBlockBuilder$ === "object");
assert(typeof StartFleetCommand === "function");
assert(typeof StartFleet$ === "object");
assert(typeof StartImageBuilderCommand === "function");
assert(typeof StartImageBuilder$ === "object");
assert(typeof StartSoftwareDeploymentToImageBuilderCommand === "function");
assert(typeof StartSoftwareDeploymentToImageBuilder$ === "object");
assert(typeof StopAppBlockBuilderCommand === "function");
assert(typeof StopAppBlockBuilder$ === "object");
assert(typeof StopFleetCommand === "function");
assert(typeof StopFleet$ === "object");
assert(typeof StopImageBuilderCommand === "function");
assert(typeof StopImageBuilder$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAppBlockBuilderCommand === "function");
assert(typeof UpdateAppBlockBuilder$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateDirectoryConfigCommand === "function");
assert(typeof UpdateDirectoryConfig$ === "object");
assert(typeof UpdateEntitlementCommand === "function");
assert(typeof UpdateEntitlement$ === "object");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateFleet$ === "object");
assert(typeof UpdateImagePermissionsCommand === "function");
assert(typeof UpdateImagePermissions$ === "object");
assert(typeof UpdateStackCommand === "function");
assert(typeof UpdateStack$ === "object");
assert(typeof UpdateThemeForStackCommand === "function");
assert(typeof UpdateThemeForStack$ === "object");
// structural schemas
assert(typeof AccessEndpoint$ === "object");
assert(typeof AdminAppLicenseUsageRecord$ === "object");
assert(typeof AppBlock$ === "object");
assert(typeof AppBlockBuilder$ === "object");
assert(typeof AppBlockBuilderAppBlockAssociation$ === "object");
assert(typeof AppBlockBuilderStateChangeReason$ === "object");
assert(typeof Application$ === "object");
assert(typeof ApplicationConfig$ === "object");
assert(typeof ApplicationFleetAssociation$ === "object");
assert(typeof ApplicationSettings$ === "object");
assert(typeof ApplicationSettingsResponse$ === "object");
assert(typeof AssociateAppBlockBuilderAppBlockRequest$ === "object");
assert(typeof AssociateAppBlockBuilderAppBlockResult$ === "object");
assert(typeof AssociateApplicationFleetRequest$ === "object");
assert(typeof AssociateApplicationFleetResult$ === "object");
assert(typeof AssociateApplicationToEntitlementRequest$ === "object");
assert(typeof AssociateApplicationToEntitlementResult$ === "object");
assert(typeof AssociateFleetRequest$ === "object");
assert(typeof AssociateFleetResult$ === "object");
assert(typeof AssociateSoftwareToImageBuilderRequest$ === "object");
assert(typeof AssociateSoftwareToImageBuilderResult$ === "object");
assert(typeof BatchAssociateUserStackRequest$ === "object");
assert(typeof BatchAssociateUserStackResult$ === "object");
assert(typeof BatchDisassociateUserStackRequest$ === "object");
assert(typeof BatchDisassociateUserStackResult$ === "object");
assert(typeof CertificateBasedAuthProperties$ === "object");
assert(typeof ComputeCapacity$ === "object");
assert(typeof ComputeCapacityStatus$ === "object");
assert(typeof CopyImageRequest$ === "object");
assert(typeof CopyImageResponse$ === "object");
assert(typeof CreateAppBlockBuilderRequest$ === "object");
assert(typeof CreateAppBlockBuilderResult$ === "object");
assert(typeof CreateAppBlockBuilderStreamingURLRequest$ === "object");
assert(typeof CreateAppBlockBuilderStreamingURLResult$ === "object");
assert(typeof CreateAppBlockRequest$ === "object");
assert(typeof CreateAppBlockResult$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResult$ === "object");
assert(typeof CreateDirectoryConfigRequest$ === "object");
assert(typeof CreateDirectoryConfigResult$ === "object");
assert(typeof CreateEntitlementRequest$ === "object");
assert(typeof CreateEntitlementResult$ === "object");
assert(typeof CreateExportImageTaskRequest$ === "object");
assert(typeof CreateExportImageTaskResult$ === "object");
assert(typeof CreateFleetRequest$ === "object");
assert(typeof CreateFleetResult$ === "object");
assert(typeof CreateImageBuilderRequest$ === "object");
assert(typeof CreateImageBuilderResult$ === "object");
assert(typeof CreateImageBuilderStreamingURLRequest$ === "object");
assert(typeof CreateImageBuilderStreamingURLResult$ === "object");
assert(typeof CreateImportedImageRequest$ === "object");
assert(typeof CreateImportedImageResult$ === "object");
assert(typeof CreateStackRequest$ === "object");
assert(typeof CreateStackResult$ === "object");
assert(typeof CreateStreamingURLRequest$ === "object");
assert(typeof CreateStreamingURLResult$ === "object");
assert(typeof CreateThemeForStackRequest$ === "object");
assert(typeof CreateThemeForStackResult$ === "object");
assert(typeof CreateUpdatedImageRequest$ === "object");
assert(typeof CreateUpdatedImageResult$ === "object");
assert(typeof CreateUsageReportSubscriptionRequest$ === "object");
assert(typeof CreateUsageReportSubscriptionResult$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResult$ === "object");
assert(typeof DeleteAppBlockBuilderRequest$ === "object");
assert(typeof DeleteAppBlockBuilderResult$ === "object");
assert(typeof DeleteAppBlockRequest$ === "object");
assert(typeof DeleteAppBlockResult$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResult$ === "object");
assert(typeof DeleteDirectoryConfigRequest$ === "object");
assert(typeof DeleteDirectoryConfigResult$ === "object");
assert(typeof DeleteEntitlementRequest$ === "object");
assert(typeof DeleteEntitlementResult$ === "object");
assert(typeof DeleteFleetRequest$ === "object");
assert(typeof DeleteFleetResult$ === "object");
assert(typeof DeleteImageBuilderRequest$ === "object");
assert(typeof DeleteImageBuilderResult$ === "object");
assert(typeof DeleteImagePermissionsRequest$ === "object");
assert(typeof DeleteImagePermissionsResult$ === "object");
assert(typeof DeleteImageRequest$ === "object");
assert(typeof DeleteImageResult$ === "object");
assert(typeof DeleteStackRequest$ === "object");
assert(typeof DeleteStackResult$ === "object");
assert(typeof DeleteThemeForStackRequest$ === "object");
assert(typeof DeleteThemeForStackResult$ === "object");
assert(typeof DeleteUsageReportSubscriptionRequest$ === "object");
assert(typeof DeleteUsageReportSubscriptionResult$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResult$ === "object");
assert(typeof DescribeAppBlockBuilderAppBlockAssociationsRequest$ === "object");
assert(typeof DescribeAppBlockBuilderAppBlockAssociationsResult$ === "object");
assert(typeof DescribeAppBlockBuildersRequest$ === "object");
assert(typeof DescribeAppBlockBuildersResult$ === "object");
assert(typeof DescribeAppBlocksRequest$ === "object");
assert(typeof DescribeAppBlocksResult$ === "object");
assert(typeof DescribeApplicationFleetAssociationsRequest$ === "object");
assert(typeof DescribeApplicationFleetAssociationsResult$ === "object");
assert(typeof DescribeApplicationsRequest$ === "object");
assert(typeof DescribeApplicationsResult$ === "object");
assert(typeof DescribeAppLicenseUsageRequest$ === "object");
assert(typeof DescribeAppLicenseUsageResult$ === "object");
assert(typeof DescribeDirectoryConfigsRequest$ === "object");
assert(typeof DescribeDirectoryConfigsResult$ === "object");
assert(typeof DescribeEntitlementsRequest$ === "object");
assert(typeof DescribeEntitlementsResult$ === "object");
assert(typeof DescribeFleetsRequest$ === "object");
assert(typeof DescribeFleetsResult$ === "object");
assert(typeof DescribeImageBuildersRequest$ === "object");
assert(typeof DescribeImageBuildersResult$ === "object");
assert(typeof DescribeImagePermissionsRequest$ === "object");
assert(typeof DescribeImagePermissionsResult$ === "object");
assert(typeof DescribeImagesRequest$ === "object");
assert(typeof DescribeImagesResult$ === "object");
assert(typeof DescribeSessionsRequest$ === "object");
assert(typeof DescribeSessionsResult$ === "object");
assert(typeof DescribeSoftwareAssociationsRequest$ === "object");
assert(typeof DescribeSoftwareAssociationsResult$ === "object");
assert(typeof DescribeStacksRequest$ === "object");
assert(typeof DescribeStacksResult$ === "object");
assert(typeof DescribeThemeForStackRequest$ === "object");
assert(typeof DescribeThemeForStackResult$ === "object");
assert(typeof DescribeUsageReportSubscriptionsRequest$ === "object");
assert(typeof DescribeUsageReportSubscriptionsResult$ === "object");
assert(typeof DescribeUsersRequest$ === "object");
assert(typeof DescribeUsersResult$ === "object");
assert(typeof DescribeUserStackAssociationsRequest$ === "object");
assert(typeof DescribeUserStackAssociationsResult$ === "object");
assert(typeof DirectoryConfig$ === "object");
assert(typeof DisableUserRequest$ === "object");
assert(typeof DisableUserResult$ === "object");
assert(typeof DisassociateAppBlockBuilderAppBlockRequest$ === "object");
assert(typeof DisassociateAppBlockBuilderAppBlockResult$ === "object");
assert(typeof DisassociateApplicationFleetRequest$ === "object");
assert(typeof DisassociateApplicationFleetResult$ === "object");
assert(typeof DisassociateApplicationFromEntitlementRequest$ === "object");
assert(typeof DisassociateApplicationFromEntitlementResult$ === "object");
assert(typeof DisassociateFleetRequest$ === "object");
assert(typeof DisassociateFleetResult$ === "object");
assert(typeof DisassociateSoftwareFromImageBuilderRequest$ === "object");
assert(typeof DisassociateSoftwareFromImageBuilderResult$ === "object");
assert(typeof DomainJoinInfo$ === "object");
assert(typeof EnableUserRequest$ === "object");
assert(typeof EnableUserResult$ === "object");
assert(typeof EntitledApplication$ === "object");
assert(typeof Entitlement$ === "object");
assert(typeof EntitlementAttribute$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof ExpireSessionRequest$ === "object");
assert(typeof ExpireSessionResult$ === "object");
assert(typeof ExportImageTask$ === "object");
assert(typeof Filter$ === "object");
assert(typeof Fleet$ === "object");
assert(typeof FleetError$ === "object");
assert(typeof GetExportImageTaskRequest$ === "object");
assert(typeof GetExportImageTaskResult$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageBuilder$ === "object");
assert(typeof ImageBuilderStateChangeReason$ === "object");
assert(typeof ImagePermissions$ === "object");
assert(typeof ImageStateChangeReason$ === "object");
assert(typeof LastReportGenerationExecutionError$ === "object");
assert(typeof ListAssociatedFleetsRequest$ === "object");
assert(typeof ListAssociatedFleetsResult$ === "object");
assert(typeof ListAssociatedStacksRequest$ === "object");
assert(typeof ListAssociatedStacksResult$ === "object");
assert(typeof ListEntitledApplicationsRequest$ === "object");
assert(typeof ListEntitledApplicationsResult$ === "object");
assert(typeof ListExportImageTasksRequest$ === "object");
assert(typeof ListExportImageTasksResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NetworkAccessConfiguration$ === "object");
assert(typeof ResourceError$ === "object");
assert(typeof RuntimeValidationConfig$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof ScriptDetails$ === "object");
assert(typeof ServiceAccountCredentials$ === "object");
assert(typeof Session$ === "object");
assert(typeof SharedImagePermissions$ === "object");
assert(typeof SoftwareAssociations$ === "object");
assert(typeof Stack$ === "object");
assert(typeof StackError$ === "object");
assert(typeof StartAppBlockBuilderRequest$ === "object");
assert(typeof StartAppBlockBuilderResult$ === "object");
assert(typeof StartFleetRequest$ === "object");
assert(typeof StartFleetResult$ === "object");
assert(typeof StartImageBuilderRequest$ === "object");
assert(typeof StartImageBuilderResult$ === "object");
assert(typeof StartSoftwareDeploymentToImageBuilderRequest$ === "object");
assert(typeof StartSoftwareDeploymentToImageBuilderResult$ === "object");
assert(typeof StopAppBlockBuilderRequest$ === "object");
assert(typeof StopAppBlockBuilderResult$ === "object");
assert(typeof StopFleetRequest$ === "object");
assert(typeof StopFleetResult$ === "object");
assert(typeof StopImageBuilderRequest$ === "object");
assert(typeof StopImageBuilderResult$ === "object");
assert(typeof StorageConnector$ === "object");
assert(typeof StreamingExperienceSettings$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Theme$ === "object");
assert(typeof ThemeFooterLink$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAppBlockBuilderRequest$ === "object");
assert(typeof UpdateAppBlockBuilderResult$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResult$ === "object");
assert(typeof UpdateDirectoryConfigRequest$ === "object");
assert(typeof UpdateDirectoryConfigResult$ === "object");
assert(typeof UpdateEntitlementRequest$ === "object");
assert(typeof UpdateEntitlementResult$ === "object");
assert(typeof UpdateFleetRequest$ === "object");
assert(typeof UpdateFleetResult$ === "object");
assert(typeof UpdateImagePermissionsRequest$ === "object");
assert(typeof UpdateImagePermissionsResult$ === "object");
assert(typeof UpdateStackRequest$ === "object");
assert(typeof UpdateStackResult$ === "object");
assert(typeof UpdateThemeForStackRequest$ === "object");
assert(typeof UpdateThemeForStackResult$ === "object");
assert(typeof UsageReportSubscription$ === "object");
assert(typeof User$ === "object");
assert(typeof UserSetting$ === "object");
assert(typeof UserStackAssociation$ === "object");
assert(typeof UserStackAssociationError$ === "object");
assert(typeof VolumeConfig$ === "object");
assert(typeof VpcConfig$ === "object");
// enums
assert(typeof AccessEndpointType === "object");
assert(typeof Action === "object");
assert(typeof AgentSoftwareVersion === "object");
assert(typeof AppBlockBuilderAttribute === "object");
assert(typeof AppBlockBuilderPlatformType === "object");
assert(typeof AppBlockBuilderState === "object");
assert(typeof AppBlockBuilderStateChangeReasonCode === "object");
assert(typeof AppBlockState === "object");
assert(typeof ApplicationAttribute === "object");
assert(typeof AppVisibility === "object");
assert(typeof AuthenticationType === "object");
assert(typeof CertificateBasedAuthStatus === "object");
assert(typeof DynamicAppProvidersEnabled === "object");
assert(typeof ExportImageTaskState === "object");
assert(typeof FleetAttribute === "object");
assert(typeof FleetErrorCode === "object");
assert(typeof FleetState === "object");
assert(typeof FleetType === "object");
assert(typeof ImageBuilderState === "object");
assert(typeof ImageBuilderStateChangeReasonCode === "object");
assert(typeof ImageSharedWithOthers === "object");
assert(typeof ImageState === "object");
assert(typeof ImageStateChangeReasonCode === "object");
assert(typeof ImageType === "object");
assert(typeof LatestAppstreamAgentVersion === "object");
assert(typeof MessageAction === "object");
assert(typeof PackagingType === "object");
assert(typeof Permission === "object");
assert(typeof PlatformType === "object");
assert(typeof PreferredProtocol === "object");
assert(typeof SessionConnectionState === "object");
assert(typeof SessionState === "object");
assert(typeof SoftwareDeploymentStatus === "object");
assert(typeof StackAttribute === "object");
assert(typeof StackErrorCode === "object");
assert(typeof StorageConnectorType === "object");
assert(typeof StreamView === "object");
assert(typeof ThemeAttribute === "object");
assert(typeof ThemeState === "object");
assert(typeof ThemeStyling === "object");
assert(typeof UsageReportExecutionErrorCode === "object");
assert(typeof UsageReportSchedule === "object");
assert(typeof UserStackAssociationErrorCode === "object");
assert(typeof VisibilityType === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof AppStreamServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(DryRunOperationException.prototype instanceof AppStreamServiceException);
assert(typeof DryRunOperationException$ === "object");
assert(EntitlementAlreadyExistsException.prototype instanceof AppStreamServiceException);
assert(typeof EntitlementAlreadyExistsException$ === "object");
assert(EntitlementNotFoundException.prototype instanceof AppStreamServiceException);
assert(typeof EntitlementNotFoundException$ === "object");
assert(IncompatibleImageException.prototype instanceof AppStreamServiceException);
assert(typeof IncompatibleImageException$ === "object");
assert(InvalidAccountStatusException.prototype instanceof AppStreamServiceException);
assert(typeof InvalidAccountStatusException$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof AppStreamServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidRoleException.prototype instanceof AppStreamServiceException);
assert(typeof InvalidRoleException$ === "object");
assert(LimitExceededException.prototype instanceof AppStreamServiceException);
assert(typeof LimitExceededException$ === "object");
assert(OperationNotPermittedException.prototype instanceof AppStreamServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(RequestLimitExceededException.prototype instanceof AppStreamServiceException);
assert(typeof RequestLimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof AppStreamServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof AppStreamServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotAvailableException.prototype instanceof AppStreamServiceException);
assert(typeof ResourceNotAvailableException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppStreamServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(AppStreamServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFleetStarted === "function");
assert(typeof waitForFleetStopped === "function");
assert(typeof waitUntilFleetStarted === "function");
assert(typeof waitUntilFleetStopped === "function");
// paginators
assert(typeof paginateDescribeAppBlockBuilderAppBlockAssociations === "function");
assert(typeof paginateDescribeAppBlockBuilders === "function");
assert(typeof paginateDescribeImagePermissions === "function");
assert(typeof paginateDescribeImages === "function");
console.log(`AppStream index test passed.`);
