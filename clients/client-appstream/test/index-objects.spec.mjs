import {
  AccessEndpointType,
  Action,
  AgentSoftwareVersion,
  AppBlockBuilderAttribute,
  AppBlockBuilderPlatformType,
  AppBlockBuilderState,
  AppBlockBuilderStateChangeReasonCode,
  AppBlockState,
  AppStream,
  AppStreamClient,
  AppStreamServiceException,
  AppVisibility,
  ApplicationAttribute,
  AssociateAppBlockBuilderAppBlockCommand,
  AssociateApplicationFleetCommand,
  AssociateApplicationToEntitlementCommand,
  AssociateFleetCommand,
  AssociateSoftwareToImageBuilderCommand,
  AuthenticationType,
  BatchAssociateUserStackCommand,
  BatchDisassociateUserStackCommand,
  CertificateBasedAuthStatus,
  ConcurrentModificationException,
  CopyImageCommand,
  CreateAppBlockBuilderCommand,
  CreateAppBlockBuilderStreamingURLCommand,
  CreateAppBlockCommand,
  CreateApplicationCommand,
  CreateDirectoryConfigCommand,
  CreateEntitlementCommand,
  CreateExportImageTaskCommand,
  CreateFleetCommand,
  CreateImageBuilderCommand,
  CreateImageBuilderStreamingURLCommand,
  CreateImportedImageCommand,
  CreateStackCommand,
  CreateStreamingURLCommand,
  CreateThemeForStackCommand,
  CreateUpdatedImageCommand,
  CreateUsageReportSubscriptionCommand,
  CreateUserCommand,
  DeleteAppBlockBuilderCommand,
  DeleteAppBlockCommand,
  DeleteApplicationCommand,
  DeleteDirectoryConfigCommand,
  DeleteEntitlementCommand,
  DeleteFleetCommand,
  DeleteImageBuilderCommand,
  DeleteImageCommand,
  DeleteImagePermissionsCommand,
  DeleteStackCommand,
  DeleteThemeForStackCommand,
  DeleteUsageReportSubscriptionCommand,
  DeleteUserCommand,
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
  DescribeAppBlockBuildersCommand,
  DescribeAppBlocksCommand,
  DescribeAppLicenseUsageCommand,
  DescribeApplicationFleetAssociationsCommand,
  DescribeApplicationsCommand,
  DescribeDirectoryConfigsCommand,
  DescribeEntitlementsCommand,
  DescribeFleetsCommand,
  DescribeImageBuildersCommand,
  DescribeImagePermissionsCommand,
  DescribeImagesCommand,
  DescribeSessionsCommand,
  DescribeSoftwareAssociationsCommand,
  DescribeStacksCommand,
  DescribeThemeForStackCommand,
  DescribeUsageReportSubscriptionsCommand,
  DescribeUserStackAssociationsCommand,
  DescribeUsersCommand,
  DisableUserCommand,
  DisassociateAppBlockBuilderAppBlockCommand,
  DisassociateApplicationFleetCommand,
  DisassociateApplicationFromEntitlementCommand,
  DisassociateFleetCommand,
  DisassociateSoftwareFromImageBuilderCommand,
  DryRunOperationException,
  DynamicAppProvidersEnabled,
  EnableUserCommand,
  EntitlementAlreadyExistsException,
  EntitlementNotFoundException,
  ExpireSessionCommand,
  ExportImageTaskState,
  FleetAttribute,
  FleetErrorCode,
  FleetState,
  FleetType,
  GetExportImageTaskCommand,
  ImageBuilderState,
  ImageBuilderStateChangeReasonCode,
  ImageSharedWithOthers,
  ImageState,
  ImageStateChangeReasonCode,
  ImageType,
  IncompatibleImageException,
  InvalidAccountStatusException,
  InvalidParameterCombinationException,
  InvalidRoleException,
  LatestAppstreamAgentVersion,
  LimitExceededException,
  ListAssociatedFleetsCommand,
  ListAssociatedStacksCommand,
  ListEntitledApplicationsCommand,
  ListExportImageTasksCommand,
  ListTagsForResourceCommand,
  MessageAction,
  OperationNotPermittedException,
  PackagingType,
  Permission,
  PlatformType,
  PreferredProtocol,
  RequestLimitExceededException,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotAvailableException,
  ResourceNotFoundException,
  SessionConnectionState,
  SessionState,
  SoftwareDeploymentStatus,
  StackAttribute,
  StackErrorCode,
  StartAppBlockBuilderCommand,
  StartFleetCommand,
  StartImageBuilderCommand,
  StartSoftwareDeploymentToImageBuilderCommand,
  StopAppBlockBuilderCommand,
  StopFleetCommand,
  StopImageBuilderCommand,
  StorageConnectorType,
  StreamView,
  TagResourceCommand,
  ThemeAttribute,
  ThemeState,
  ThemeStyling,
  UntagResourceCommand,
  UpdateAppBlockBuilderCommand,
  UpdateApplicationCommand,
  UpdateDirectoryConfigCommand,
  UpdateEntitlementCommand,
  UpdateFleetCommand,
  UpdateImagePermissionsCommand,
  UpdateStackCommand,
  UpdateThemeForStackCommand,
  UsageReportExecutionErrorCode,
  UsageReportSchedule,
  UserStackAssociationErrorCode,
  VisibilityType,
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
assert(typeof AssociateApplicationFleetCommand === "function");
assert(typeof AssociateApplicationToEntitlementCommand === "function");
assert(typeof AssociateFleetCommand === "function");
assert(typeof AssociateSoftwareToImageBuilderCommand === "function");
assert(typeof BatchAssociateUserStackCommand === "function");
assert(typeof BatchDisassociateUserStackCommand === "function");
assert(typeof CopyImageCommand === "function");
assert(typeof CreateAppBlockCommand === "function");
assert(typeof CreateAppBlockBuilderCommand === "function");
assert(typeof CreateAppBlockBuilderStreamingURLCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateDirectoryConfigCommand === "function");
assert(typeof CreateEntitlementCommand === "function");
assert(typeof CreateExportImageTaskCommand === "function");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateImageBuilderCommand === "function");
assert(typeof CreateImageBuilderStreamingURLCommand === "function");
assert(typeof CreateImportedImageCommand === "function");
assert(typeof CreateStackCommand === "function");
assert(typeof CreateStreamingURLCommand === "function");
assert(typeof CreateThemeForStackCommand === "function");
assert(typeof CreateUpdatedImageCommand === "function");
assert(typeof CreateUsageReportSubscriptionCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteAppBlockCommand === "function");
assert(typeof DeleteAppBlockBuilderCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteDirectoryConfigCommand === "function");
assert(typeof DeleteEntitlementCommand === "function");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteImageCommand === "function");
assert(typeof DeleteImageBuilderCommand === "function");
assert(typeof DeleteImagePermissionsCommand === "function");
assert(typeof DeleteStackCommand === "function");
assert(typeof DeleteThemeForStackCommand === "function");
assert(typeof DeleteUsageReportSubscriptionCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeAppBlockBuilderAppBlockAssociationsCommand === "function");
assert(typeof DescribeAppBlockBuildersCommand === "function");
assert(typeof DescribeAppBlocksCommand === "function");
assert(typeof DescribeApplicationFleetAssociationsCommand === "function");
assert(typeof DescribeApplicationsCommand === "function");
assert(typeof DescribeAppLicenseUsageCommand === "function");
assert(typeof DescribeDirectoryConfigsCommand === "function");
assert(typeof DescribeEntitlementsCommand === "function");
assert(typeof DescribeFleetsCommand === "function");
assert(typeof DescribeImageBuildersCommand === "function");
assert(typeof DescribeImagePermissionsCommand === "function");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeSessionsCommand === "function");
assert(typeof DescribeSoftwareAssociationsCommand === "function");
assert(typeof DescribeStacksCommand === "function");
assert(typeof DescribeThemeForStackCommand === "function");
assert(typeof DescribeUsageReportSubscriptionsCommand === "function");
assert(typeof DescribeUsersCommand === "function");
assert(typeof DescribeUserStackAssociationsCommand === "function");
assert(typeof DisableUserCommand === "function");
assert(typeof DisassociateAppBlockBuilderAppBlockCommand === "function");
assert(typeof DisassociateApplicationFleetCommand === "function");
assert(typeof DisassociateApplicationFromEntitlementCommand === "function");
assert(typeof DisassociateFleetCommand === "function");
assert(typeof DisassociateSoftwareFromImageBuilderCommand === "function");
assert(typeof EnableUserCommand === "function");
assert(typeof ExpireSessionCommand === "function");
assert(typeof GetExportImageTaskCommand === "function");
assert(typeof ListAssociatedFleetsCommand === "function");
assert(typeof ListAssociatedStacksCommand === "function");
assert(typeof ListEntitledApplicationsCommand === "function");
assert(typeof ListExportImageTasksCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartAppBlockBuilderCommand === "function");
assert(typeof StartFleetCommand === "function");
assert(typeof StartImageBuilderCommand === "function");
assert(typeof StartSoftwareDeploymentToImageBuilderCommand === "function");
assert(typeof StopAppBlockBuilderCommand === "function");
assert(typeof StopFleetCommand === "function");
assert(typeof StopImageBuilderCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAppBlockBuilderCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateDirectoryConfigCommand === "function");
assert(typeof UpdateEntitlementCommand === "function");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateImagePermissionsCommand === "function");
assert(typeof UpdateStackCommand === "function");
assert(typeof UpdateThemeForStackCommand === "function");
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
assert(DryRunOperationException.prototype instanceof AppStreamServiceException);
assert(EntitlementAlreadyExistsException.prototype instanceof AppStreamServiceException);
assert(EntitlementNotFoundException.prototype instanceof AppStreamServiceException);
assert(IncompatibleImageException.prototype instanceof AppStreamServiceException);
assert(InvalidAccountStatusException.prototype instanceof AppStreamServiceException);
assert(InvalidParameterCombinationException.prototype instanceof AppStreamServiceException);
assert(InvalidRoleException.prototype instanceof AppStreamServiceException);
assert(LimitExceededException.prototype instanceof AppStreamServiceException);
assert(OperationNotPermittedException.prototype instanceof AppStreamServiceException);
assert(RequestLimitExceededException.prototype instanceof AppStreamServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof AppStreamServiceException);
assert(ResourceInUseException.prototype instanceof AppStreamServiceException);
assert(ResourceNotAvailableException.prototype instanceof AppStreamServiceException);
assert(ResourceNotFoundException.prototype instanceof AppStreamServiceException);
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
