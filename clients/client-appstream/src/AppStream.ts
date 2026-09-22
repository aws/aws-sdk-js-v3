// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AppStreamClient } from "./AppStreamClient";
import {
  type AssociateAppBlockBuilderAppBlockCommandInput,
  type AssociateAppBlockBuilderAppBlockCommandOutput,
  AssociateAppBlockBuilderAppBlockCommand,
} from "./commands/AssociateAppBlockBuilderAppBlockCommand";
import {
  type AssociateApplicationFleetCommandInput,
  type AssociateApplicationFleetCommandOutput,
  AssociateApplicationFleetCommand,
} from "./commands/AssociateApplicationFleetCommand";
import {
  type AssociateApplicationToEntitlementCommandInput,
  type AssociateApplicationToEntitlementCommandOutput,
  AssociateApplicationToEntitlementCommand,
} from "./commands/AssociateApplicationToEntitlementCommand";
import {
  type AssociateFleetCommandInput,
  type AssociateFleetCommandOutput,
  AssociateFleetCommand,
} from "./commands/AssociateFleetCommand";
import {
  type AssociateSoftwareToImageBuilderCommandInput,
  type AssociateSoftwareToImageBuilderCommandOutput,
  AssociateSoftwareToImageBuilderCommand,
} from "./commands/AssociateSoftwareToImageBuilderCommand";
import {
  type BatchAssociateUserStackCommandInput,
  type BatchAssociateUserStackCommandOutput,
  BatchAssociateUserStackCommand,
} from "./commands/BatchAssociateUserStackCommand";
import {
  type BatchDisassociateUserStackCommandInput,
  type BatchDisassociateUserStackCommandOutput,
  BatchDisassociateUserStackCommand,
} from "./commands/BatchDisassociateUserStackCommand";
import { type CopyImageCommandInput, type CopyImageCommandOutput, CopyImageCommand } from "./commands/CopyImageCommand";
import {
  type CreateAppBlockBuilderCommandInput,
  type CreateAppBlockBuilderCommandOutput,
  CreateAppBlockBuilderCommand,
} from "./commands/CreateAppBlockBuilderCommand";
import {
  type CreateAppBlockBuilderStreamingURLCommandInput,
  type CreateAppBlockBuilderStreamingURLCommandOutput,
  CreateAppBlockBuilderStreamingURLCommand,
} from "./commands/CreateAppBlockBuilderStreamingURLCommand";
import {
  type CreateAppBlockCommandInput,
  type CreateAppBlockCommandOutput,
  CreateAppBlockCommand,
} from "./commands/CreateAppBlockCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateDirectoryConfigCommandInput,
  type CreateDirectoryConfigCommandOutput,
  CreateDirectoryConfigCommand,
} from "./commands/CreateDirectoryConfigCommand";
import {
  type CreateEntitlementCommandInput,
  type CreateEntitlementCommandOutput,
  CreateEntitlementCommand,
} from "./commands/CreateEntitlementCommand";
import {
  type CreateExportImageTaskCommandInput,
  type CreateExportImageTaskCommandOutput,
  CreateExportImageTaskCommand,
} from "./commands/CreateExportImageTaskCommand";
import {
  type CreateFleetCommandInput,
  type CreateFleetCommandOutput,
  CreateFleetCommand,
} from "./commands/CreateFleetCommand";
import {
  type CreateImageBuilderCommandInput,
  type CreateImageBuilderCommandOutput,
  CreateImageBuilderCommand,
} from "./commands/CreateImageBuilderCommand";
import {
  type CreateImageBuilderStreamingURLCommandInput,
  type CreateImageBuilderStreamingURLCommandOutput,
  CreateImageBuilderStreamingURLCommand,
} from "./commands/CreateImageBuilderStreamingURLCommand";
import {
  type CreateImportedImageCommandInput,
  type CreateImportedImageCommandOutput,
  CreateImportedImageCommand,
} from "./commands/CreateImportedImageCommand";
import {
  type CreateStackCommandInput,
  type CreateStackCommandOutput,
  CreateStackCommand,
} from "./commands/CreateStackCommand";
import {
  type CreateStreamingURLCommandInput,
  type CreateStreamingURLCommandOutput,
  CreateStreamingURLCommand,
} from "./commands/CreateStreamingURLCommand";
import {
  type CreateThemeForStackCommandInput,
  type CreateThemeForStackCommandOutput,
  CreateThemeForStackCommand,
} from "./commands/CreateThemeForStackCommand";
import {
  type CreateUpdatedImageCommandInput,
  type CreateUpdatedImageCommandOutput,
  CreateUpdatedImageCommand,
} from "./commands/CreateUpdatedImageCommand";
import {
  type CreateUsageReportSubscriptionCommandInput,
  type CreateUsageReportSubscriptionCommandOutput,
  CreateUsageReportSubscriptionCommand,
} from "./commands/CreateUsageReportSubscriptionCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeleteAppBlockBuilderCommandInput,
  type DeleteAppBlockBuilderCommandOutput,
  DeleteAppBlockBuilderCommand,
} from "./commands/DeleteAppBlockBuilderCommand";
import {
  type DeleteAppBlockCommandInput,
  type DeleteAppBlockCommandOutput,
  DeleteAppBlockCommand,
} from "./commands/DeleteAppBlockCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteDirectoryConfigCommandInput,
  type DeleteDirectoryConfigCommandOutput,
  DeleteDirectoryConfigCommand,
} from "./commands/DeleteDirectoryConfigCommand";
import {
  type DeleteEntitlementCommandInput,
  type DeleteEntitlementCommandOutput,
  DeleteEntitlementCommand,
} from "./commands/DeleteEntitlementCommand";
import {
  type DeleteFleetCommandInput,
  type DeleteFleetCommandOutput,
  DeleteFleetCommand,
} from "./commands/DeleteFleetCommand";
import {
  type DeleteImageBuilderCommandInput,
  type DeleteImageBuilderCommandOutput,
  DeleteImageBuilderCommand,
} from "./commands/DeleteImageBuilderCommand";
import {
  type DeleteImageCommandInput,
  type DeleteImageCommandOutput,
  DeleteImageCommand,
} from "./commands/DeleteImageCommand";
import {
  type DeleteImagePermissionsCommandInput,
  type DeleteImagePermissionsCommandOutput,
  DeleteImagePermissionsCommand,
} from "./commands/DeleteImagePermissionsCommand";
import {
  type DeleteStackCommandInput,
  type DeleteStackCommandOutput,
  DeleteStackCommand,
} from "./commands/DeleteStackCommand";
import {
  type DeleteThemeForStackCommandInput,
  type DeleteThemeForStackCommandOutput,
  DeleteThemeForStackCommand,
} from "./commands/DeleteThemeForStackCommand";
import {
  type DeleteUsageReportSubscriptionCommandInput,
  type DeleteUsageReportSubscriptionCommandOutput,
  DeleteUsageReportSubscriptionCommand,
} from "./commands/DeleteUsageReportSubscriptionCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  type DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
} from "./commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import {
  type DescribeAppBlockBuildersCommandInput,
  type DescribeAppBlockBuildersCommandOutput,
  DescribeAppBlockBuildersCommand,
} from "./commands/DescribeAppBlockBuildersCommand";
import {
  type DescribeAppBlocksCommandInput,
  type DescribeAppBlocksCommandOutput,
  DescribeAppBlocksCommand,
} from "./commands/DescribeAppBlocksCommand";
import {
  type DescribeApplicationFleetAssociationsCommandInput,
  type DescribeApplicationFleetAssociationsCommandOutput,
  DescribeApplicationFleetAssociationsCommand,
} from "./commands/DescribeApplicationFleetAssociationsCommand";
import {
  type DescribeApplicationsCommandInput,
  type DescribeApplicationsCommandOutput,
  DescribeApplicationsCommand,
} from "./commands/DescribeApplicationsCommand";
import {
  type DescribeAppLicenseUsageCommandInput,
  type DescribeAppLicenseUsageCommandOutput,
  DescribeAppLicenseUsageCommand,
} from "./commands/DescribeAppLicenseUsageCommand";
import {
  type DescribeDirectoryConfigsCommandInput,
  type DescribeDirectoryConfigsCommandOutput,
  DescribeDirectoryConfigsCommand,
} from "./commands/DescribeDirectoryConfigsCommand";
import {
  type DescribeEntitlementsCommandInput,
  type DescribeEntitlementsCommandOutput,
  DescribeEntitlementsCommand,
} from "./commands/DescribeEntitlementsCommand";
import {
  type DescribeFleetsCommandInput,
  type DescribeFleetsCommandOutput,
  DescribeFleetsCommand,
} from "./commands/DescribeFleetsCommand";
import {
  type DescribeImageBuildersCommandInput,
  type DescribeImageBuildersCommandOutput,
  DescribeImageBuildersCommand,
} from "./commands/DescribeImageBuildersCommand";
import {
  type DescribeImagePermissionsCommandInput,
  type DescribeImagePermissionsCommandOutput,
  DescribeImagePermissionsCommand,
} from "./commands/DescribeImagePermissionsCommand";
import {
  type DescribeImagesCommandInput,
  type DescribeImagesCommandOutput,
  DescribeImagesCommand,
} from "./commands/DescribeImagesCommand";
import {
  type DescribeSessionsCommandInput,
  type DescribeSessionsCommandOutput,
  DescribeSessionsCommand,
} from "./commands/DescribeSessionsCommand";
import {
  type DescribeSoftwareAssociationsCommandInput,
  type DescribeSoftwareAssociationsCommandOutput,
  DescribeSoftwareAssociationsCommand,
} from "./commands/DescribeSoftwareAssociationsCommand";
import {
  type DescribeStacksCommandInput,
  type DescribeStacksCommandOutput,
  DescribeStacksCommand,
} from "./commands/DescribeStacksCommand";
import {
  type DescribeThemeForStackCommandInput,
  type DescribeThemeForStackCommandOutput,
  DescribeThemeForStackCommand,
} from "./commands/DescribeThemeForStackCommand";
import {
  type DescribeUsageReportSubscriptionsCommandInput,
  type DescribeUsageReportSubscriptionsCommandOutput,
  DescribeUsageReportSubscriptionsCommand,
} from "./commands/DescribeUsageReportSubscriptionsCommand";
import {
  type DescribeUsersCommandInput,
  type DescribeUsersCommandOutput,
  DescribeUsersCommand,
} from "./commands/DescribeUsersCommand";
import {
  type DescribeUserStackAssociationsCommandInput,
  type DescribeUserStackAssociationsCommandOutput,
  DescribeUserStackAssociationsCommand,
} from "./commands/DescribeUserStackAssociationsCommand";
import {
  type DisableUserCommandInput,
  type DisableUserCommandOutput,
  DisableUserCommand,
} from "./commands/DisableUserCommand";
import {
  type DisassociateAppBlockBuilderAppBlockCommandInput,
  type DisassociateAppBlockBuilderAppBlockCommandOutput,
  DisassociateAppBlockBuilderAppBlockCommand,
} from "./commands/DisassociateAppBlockBuilderAppBlockCommand";
import {
  type DisassociateApplicationFleetCommandInput,
  type DisassociateApplicationFleetCommandOutput,
  DisassociateApplicationFleetCommand,
} from "./commands/DisassociateApplicationFleetCommand";
import {
  type DisassociateApplicationFromEntitlementCommandInput,
  type DisassociateApplicationFromEntitlementCommandOutput,
  DisassociateApplicationFromEntitlementCommand,
} from "./commands/DisassociateApplicationFromEntitlementCommand";
import {
  type DisassociateFleetCommandInput,
  type DisassociateFleetCommandOutput,
  DisassociateFleetCommand,
} from "./commands/DisassociateFleetCommand";
import {
  type DisassociateSoftwareFromImageBuilderCommandInput,
  type DisassociateSoftwareFromImageBuilderCommandOutput,
  DisassociateSoftwareFromImageBuilderCommand,
} from "./commands/DisassociateSoftwareFromImageBuilderCommand";
import {
  type DrainSessionInstanceCommandInput,
  type DrainSessionInstanceCommandOutput,
  DrainSessionInstanceCommand,
} from "./commands/DrainSessionInstanceCommand";
import {
  type EnableUserCommandInput,
  type EnableUserCommandOutput,
  EnableUserCommand,
} from "./commands/EnableUserCommand";
import {
  type ExpireSessionCommandInput,
  type ExpireSessionCommandOutput,
  ExpireSessionCommand,
} from "./commands/ExpireSessionCommand";
import {
  type GetExportImageTaskCommandInput,
  type GetExportImageTaskCommandOutput,
  GetExportImageTaskCommand,
} from "./commands/GetExportImageTaskCommand";
import {
  type ListAssociatedFleetsCommandInput,
  type ListAssociatedFleetsCommandOutput,
  ListAssociatedFleetsCommand,
} from "./commands/ListAssociatedFleetsCommand";
import {
  type ListAssociatedStacksCommandInput,
  type ListAssociatedStacksCommandOutput,
  ListAssociatedStacksCommand,
} from "./commands/ListAssociatedStacksCommand";
import {
  type ListEntitledApplicationsCommandInput,
  type ListEntitledApplicationsCommandOutput,
  ListEntitledApplicationsCommand,
} from "./commands/ListEntitledApplicationsCommand";
import {
  type ListExportImageTasksCommandInput,
  type ListExportImageTasksCommandOutput,
  ListExportImageTasksCommand,
} from "./commands/ListExportImageTasksCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartAppBlockBuilderCommandInput,
  type StartAppBlockBuilderCommandOutput,
  StartAppBlockBuilderCommand,
} from "./commands/StartAppBlockBuilderCommand";
import {
  type StartFleetCommandInput,
  type StartFleetCommandOutput,
  StartFleetCommand,
} from "./commands/StartFleetCommand";
import {
  type StartImageBuilderCommandInput,
  type StartImageBuilderCommandOutput,
  StartImageBuilderCommand,
} from "./commands/StartImageBuilderCommand";
import {
  type StartSoftwareDeploymentToImageBuilderCommandInput,
  type StartSoftwareDeploymentToImageBuilderCommandOutput,
  StartSoftwareDeploymentToImageBuilderCommand,
} from "./commands/StartSoftwareDeploymentToImageBuilderCommand";
import {
  type StopAppBlockBuilderCommandInput,
  type StopAppBlockBuilderCommandOutput,
  StopAppBlockBuilderCommand,
} from "./commands/StopAppBlockBuilderCommand";
import { type StopFleetCommandInput, type StopFleetCommandOutput, StopFleetCommand } from "./commands/StopFleetCommand";
import {
  type StopImageBuilderCommandInput,
  type StopImageBuilderCommandOutput,
  StopImageBuilderCommand,
} from "./commands/StopImageBuilderCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAppBlockBuilderCommandInput,
  type UpdateAppBlockBuilderCommandOutput,
  UpdateAppBlockBuilderCommand,
} from "./commands/UpdateAppBlockBuilderCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateDirectoryConfigCommandInput,
  type UpdateDirectoryConfigCommandOutput,
  UpdateDirectoryConfigCommand,
} from "./commands/UpdateDirectoryConfigCommand";
import {
  type UpdateEntitlementCommandInput,
  type UpdateEntitlementCommandOutput,
  UpdateEntitlementCommand,
} from "./commands/UpdateEntitlementCommand";
import {
  type UpdateFleetCommandInput,
  type UpdateFleetCommandOutput,
  UpdateFleetCommand,
} from "./commands/UpdateFleetCommand";
import {
  type UpdateImagePermissionsCommandInput,
  type UpdateImagePermissionsCommandOutput,
  UpdateImagePermissionsCommand,
} from "./commands/UpdateImagePermissionsCommand";
import {
  type UpdateStackCommandInput,
  type UpdateStackCommandOutput,
  UpdateStackCommand,
} from "./commands/UpdateStackCommand";
import {
  type UpdateThemeForStackCommandInput,
  type UpdateThemeForStackCommandOutput,
  UpdateThemeForStackCommand,
} from "./commands/UpdateThemeForStackCommand";
import type { AppStreamServiceException } from "./models/AppStreamServiceException";
import {
  paginateDescribeAppBlockBuilderAppBlockAssociations,
} from "./pagination/DescribeAppBlockBuilderAppBlockAssociationsPaginator";
import { paginateDescribeAppBlockBuilders } from "./pagination/DescribeAppBlockBuildersPaginator";
import { paginateDescribeImagePermissions } from "./pagination/DescribeImagePermissionsPaginator";
import { paginateDescribeImages } from "./pagination/DescribeImagesPaginator";
import { waitUntilFleetStarted } from "./waiters/waitForFleetStarted";
import { waitUntilFleetStopped } from "./waiters/waitForFleetStopped";

const commands = {
  AssociateAppBlockBuilderAppBlockCommand,
  AssociateApplicationFleetCommand,
  AssociateApplicationToEntitlementCommand,
  AssociateFleetCommand,
  AssociateSoftwareToImageBuilderCommand,
  BatchAssociateUserStackCommand,
  BatchDisassociateUserStackCommand,
  CopyImageCommand,
  CreateAppBlockCommand,
  CreateAppBlockBuilderCommand,
  CreateAppBlockBuilderStreamingURLCommand,
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
  DeleteAppBlockCommand,
  DeleteAppBlockBuilderCommand,
  DeleteApplicationCommand,
  DeleteDirectoryConfigCommand,
  DeleteEntitlementCommand,
  DeleteFleetCommand,
  DeleteImageCommand,
  DeleteImageBuilderCommand,
  DeleteImagePermissionsCommand,
  DeleteStackCommand,
  DeleteThemeForStackCommand,
  DeleteUsageReportSubscriptionCommand,
  DeleteUserCommand,
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
  DescribeAppBlockBuildersCommand,
  DescribeAppBlocksCommand,
  DescribeApplicationFleetAssociationsCommand,
  DescribeApplicationsCommand,
  DescribeAppLicenseUsageCommand,
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
  DescribeUsersCommand,
  DescribeUserStackAssociationsCommand,
  DisableUserCommand,
  DisassociateAppBlockBuilderAppBlockCommand,
  DisassociateApplicationFleetCommand,
  DisassociateApplicationFromEntitlementCommand,
  DisassociateFleetCommand,
  DisassociateSoftwareFromImageBuilderCommand,
  DrainSessionInstanceCommand,
  EnableUserCommand,
  ExpireSessionCommand,
  GetExportImageTaskCommand,
  ListAssociatedFleetsCommand,
  ListAssociatedStacksCommand,
  ListEntitledApplicationsCommand,
  ListExportImageTasksCommand,
  ListTagsForResourceCommand,
  StartAppBlockBuilderCommand,
  StartFleetCommand,
  StartImageBuilderCommand,
  StartSoftwareDeploymentToImageBuilderCommand,
  StopAppBlockBuilderCommand,
  StopFleetCommand,
  StopImageBuilderCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppBlockBuilderCommand,
  UpdateApplicationCommand,
  UpdateDirectoryConfigCommand,
  UpdateEntitlementCommand,
  UpdateFleetCommand,
  UpdateImagePermissionsCommand,
  UpdateStackCommand,
  UpdateThemeForStackCommand,
};
const paginators = {
  paginateDescribeAppBlockBuilderAppBlockAssociations,
  paginateDescribeAppBlockBuilders,
  paginateDescribeImagePermissions,
  paginateDescribeImages,
};
const waiters = {
  waitUntilFleetStarted,
  waitUntilFleetStopped,
};

/**
 * @public
 */
export interface AppStreamRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AppStream {
  /**
   * @see {@link AssociateAppBlockBuilderAppBlockCommand}
   */
  associateAppBlockBuilderAppBlock(
    args: AssociateAppBlockBuilderAppBlockCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<AssociateAppBlockBuilderAppBlockCommandOutput>;
  associateAppBlockBuilderAppBlock(
    args: AssociateAppBlockBuilderAppBlockCommandInput,
    cb: (err: any, data?: AssociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;
  associateAppBlockBuilderAppBlock(
    args: AssociateAppBlockBuilderAppBlockCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: AssociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationFleetCommand}
   */
  associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<AssociateApplicationFleetCommandOutput>;
  associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    cb: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): void;
  associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationToEntitlementCommand}
   */
  associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<AssociateApplicationToEntitlementCommandOutput>;
  associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    cb: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): void;
  associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateFleetCommand}
   */
  associateFleet(
    args: AssociateFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<AssociateFleetCommandOutput>;
  associateFleet(
    args: AssociateFleetCommandInput,
    cb: (err: any, data?: AssociateFleetCommandOutput) => void
  ): void;
  associateFleet(
    args: AssociateFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: AssociateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSoftwareToImageBuilderCommand}
   */
  associateSoftwareToImageBuilder(
    args: AssociateSoftwareToImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<AssociateSoftwareToImageBuilderCommandOutput>;
  associateSoftwareToImageBuilder(
    args: AssociateSoftwareToImageBuilderCommandInput,
    cb: (err: any, data?: AssociateSoftwareToImageBuilderCommandOutput) => void
  ): void;
  associateSoftwareToImageBuilder(
    args: AssociateSoftwareToImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: AssociateSoftwareToImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateUserStackCommand}
   */
  batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<BatchAssociateUserStackCommandOutput>;
  batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): void;
  batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateUserStackCommand}
   */
  batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<BatchDisassociateUserStackCommandOutput>;
  batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): void;
  batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyImageCommand}
   */
  copyImage(
    args: CopyImageCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CopyImageCommandOutput>;
  copyImage(
    args: CopyImageCommandInput,
    cb: (err: any, data?: CopyImageCommandOutput) => void
  ): void;
  copyImage(
    args: CopyImageCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CopyImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBlockCommand}
   */
  createAppBlock(
    args: CreateAppBlockCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateAppBlockCommandOutput>;
  createAppBlock(
    args: CreateAppBlockCommandInput,
    cb: (err: any, data?: CreateAppBlockCommandOutput) => void
  ): void;
  createAppBlock(
    args: CreateAppBlockCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBlockBuilderCommand}
   */
  createAppBlockBuilder(
    args: CreateAppBlockBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateAppBlockBuilderCommandOutput>;
  createAppBlockBuilder(
    args: CreateAppBlockBuilderCommandInput,
    cb: (err: any, data?: CreateAppBlockBuilderCommandOutput) => void
  ): void;
  createAppBlockBuilder(
    args: CreateAppBlockBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBlockBuilderStreamingURLCommand}
   */
  createAppBlockBuilderStreamingURL(
    args: CreateAppBlockBuilderStreamingURLCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateAppBlockBuilderStreamingURLCommandOutput>;
  createAppBlockBuilderStreamingURL(
    args: CreateAppBlockBuilderStreamingURLCommandInput,
    cb: (err: any, data?: CreateAppBlockBuilderStreamingURLCommandOutput) => void
  ): void;
  createAppBlockBuilderStreamingURL(
    args: CreateAppBlockBuilderStreamingURLCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateAppBlockBuilderStreamingURLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectoryConfigCommand}
   */
  createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateDirectoryConfigCommandOutput>;
  createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): void;
  createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEntitlementCommand}
   */
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateEntitlementCommandOutput>;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportImageTaskCommand}
   */
  createExportImageTask(
    args: CreateExportImageTaskCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateExportImageTaskCommandOutput>;
  createExportImageTask(
    args: CreateExportImageTaskCommandInput,
    cb: (err: any, data?: CreateExportImageTaskCommandOutput) => void
  ): void;
  createExportImageTask(
    args: CreateExportImageTaskCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateExportImageTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(
    args: CreateFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateFleetCommandOutput>;
  createFleet(
    args: CreateFleetCommandInput,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageBuilderCommand}
   */
  createImageBuilder(
    args: CreateImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateImageBuilderCommandOutput>;
  createImageBuilder(
    args: CreateImageBuilderCommandInput,
    cb: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): void;
  createImageBuilder(
    args: CreateImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageBuilderStreamingURLCommand}
   */
  createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateImageBuilderStreamingURLCommandOutput>;
  createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): void;
  createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImportedImageCommand}
   */
  createImportedImage(
    args: CreateImportedImageCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateImportedImageCommandOutput>;
  createImportedImage(
    args: CreateImportedImageCommandInput,
    cb: (err: any, data?: CreateImportedImageCommandOutput) => void
  ): void;
  createImportedImage(
    args: CreateImportedImageCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateImportedImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStackCommand}
   */
  createStack(
    args: CreateStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateStackCommandOutput>;
  createStack(
    args: CreateStackCommandInput,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;
  createStack(
    args: CreateStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingURLCommand}
   */
  createStreamingURL(
    args: CreateStreamingURLCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateStreamingURLCommandOutput>;
  createStreamingURL(
    args: CreateStreamingURLCommandInput,
    cb: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): void;
  createStreamingURL(
    args: CreateStreamingURLCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeForStackCommand}
   */
  createThemeForStack(
    args: CreateThemeForStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateThemeForStackCommandOutput>;
  createThemeForStack(
    args: CreateThemeForStackCommandInput,
    cb: (err: any, data?: CreateThemeForStackCommandOutput) => void
  ): void;
  createThemeForStack(
    args: CreateThemeForStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUpdatedImageCommand}
   */
  createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateUpdatedImageCommandOutput>;
  createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    cb: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): void;
  createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageReportSubscriptionCommand}
   */
  createUsageReportSubscription(): Promise<CreateUsageReportSubscriptionCommandOutput>;
  createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateUsageReportSubscriptionCommandOutput>;
  createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): void;
  createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppBlockCommand}
   */
  deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteAppBlockCommandOutput>;
  deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    cb: (err: any, data?: DeleteAppBlockCommandOutput) => void
  ): void;
  deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppBlockBuilderCommand}
   */
  deleteAppBlockBuilder(
    args: DeleteAppBlockBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteAppBlockBuilderCommandOutput>;
  deleteAppBlockBuilder(
    args: DeleteAppBlockBuilderCommandInput,
    cb: (err: any, data?: DeleteAppBlockBuilderCommandOutput) => void
  ): void;
  deleteAppBlockBuilder(
    args: DeleteAppBlockBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectoryConfigCommand}
   */
  deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteDirectoryConfigCommandOutput>;
  deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): void;
  deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntitlementCommand}
   */
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteEntitlementCommandOutput>;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(
    args: DeleteFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteFleetCommandOutput>;
  deleteFleet(
    args: DeleteFleetCommandInput,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageCommand}
   */
  deleteImage(
    args: DeleteImageCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteImageCommandOutput>;
  deleteImage(
    args: DeleteImageCommandInput,
    cb: (err: any, data?: DeleteImageCommandOutput) => void
  ): void;
  deleteImage(
    args: DeleteImageCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageBuilderCommand}
   */
  deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteImageBuilderCommandOutput>;
  deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): void;
  deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImagePermissionsCommand}
   */
  deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteImagePermissionsCommandOutput>;
  deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): void;
  deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStackCommand}
   */
  deleteStack(
    args: DeleteStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteStackCommandOutput>;
  deleteStack(
    args: DeleteStackCommandInput,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;
  deleteStack(
    args: DeleteStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeForStackCommand}
   */
  deleteThemeForStack(
    args: DeleteThemeForStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteThemeForStackCommandOutput>;
  deleteThemeForStack(
    args: DeleteThemeForStackCommandInput,
    cb: (err: any, data?: DeleteThemeForStackCommandOutput) => void
  ): void;
  deleteThemeForStack(
    args: DeleteThemeForStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageReportSubscriptionCommand}
   */
  deleteUsageReportSubscription(): Promise<DeleteUsageReportSubscriptionCommandOutput>;
  deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteUsageReportSubscriptionCommandOutput>;
  deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): void;
  deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}
   */
  describeAppBlockBuilderAppBlockAssociations(): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput>;
  describeAppBlockBuilderAppBlockAssociations(
    args: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput>;
  describeAppBlockBuilderAppBlockAssociations(
    args: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    cb: (err: any, data?: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput) => void
  ): void;
  describeAppBlockBuilderAppBlockAssociations(
    args: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlockBuildersCommand}
   */
  describeAppBlockBuilders(): Promise<DescribeAppBlockBuildersCommandOutput>;
  describeAppBlockBuilders(
    args: DescribeAppBlockBuildersCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeAppBlockBuildersCommandOutput>;
  describeAppBlockBuilders(
    args: DescribeAppBlockBuildersCommandInput,
    cb: (err: any, data?: DescribeAppBlockBuildersCommandOutput) => void
  ): void;
  describeAppBlockBuilders(
    args: DescribeAppBlockBuildersCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeAppBlockBuildersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlocksCommand}
   */
  describeAppBlocks(): Promise<DescribeAppBlocksCommandOutput>;
  describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeAppBlocksCommandOutput>;
  describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    cb: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): void;
  describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationFleetAssociationsCommand}
   */
  describeApplicationFleetAssociations(): Promise<DescribeApplicationFleetAssociationsCommandOutput>;
  describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeApplicationFleetAssociationsCommandOutput>;
  describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    cb: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): void;
  describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationsCommand}
   */
  describeApplications(): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppLicenseUsageCommand}
   */
  describeAppLicenseUsage(
    args: DescribeAppLicenseUsageCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeAppLicenseUsageCommandOutput>;
  describeAppLicenseUsage(
    args: DescribeAppLicenseUsageCommandInput,
    cb: (err: any, data?: DescribeAppLicenseUsageCommandOutput) => void
  ): void;
  describeAppLicenseUsage(
    args: DescribeAppLicenseUsageCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeAppLicenseUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectoryConfigsCommand}
   */
  describeDirectoryConfigs(): Promise<DescribeDirectoryConfigsCommandOutput>;
  describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeDirectoryConfigsCommandOutput>;
  describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): void;
  describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntitlementsCommand}
   */
  describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeEntitlementsCommandOutput>;
  describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    cb: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): void;
  describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetsCommand}
   */
  describeFleets(): Promise<DescribeFleetsCommandOutput>;
  describeFleets(
    args: DescribeFleetsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeFleetsCommandOutput>;
  describeFleets(
    args: DescribeFleetsCommandInput,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;
  describeFleets(
    args: DescribeFleetsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageBuildersCommand}
   */
  describeImageBuilders(): Promise<DescribeImageBuildersCommandOutput>;
  describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeImageBuildersCommandOutput>;
  describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): void;
  describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagePermissionsCommand}
   */
  describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeImagePermissionsCommandOutput>;
  describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): void;
  describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(): Promise<DescribeImagesCommandOutput>;
  describeImages(
    args: DescribeImagesCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeImagesCommandOutput>;
  describeImages(
    args: DescribeImagesCommandInput,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  describeImages(
    args: DescribeImagesCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSessionsCommand}
   */
  describeSessions(
    args: DescribeSessionsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeSessionsCommandOutput>;
  describeSessions(
    args: DescribeSessionsCommandInput,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  describeSessions(
    args: DescribeSessionsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSoftwareAssociationsCommand}
   */
  describeSoftwareAssociations(
    args: DescribeSoftwareAssociationsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeSoftwareAssociationsCommandOutput>;
  describeSoftwareAssociations(
    args: DescribeSoftwareAssociationsCommandInput,
    cb: (err: any, data?: DescribeSoftwareAssociationsCommandOutput) => void
  ): void;
  describeSoftwareAssociations(
    args: DescribeSoftwareAssociationsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeSoftwareAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStacksCommand}
   */
  describeStacks(): Promise<DescribeStacksCommandOutput>;
  describeStacks(
    args: DescribeStacksCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeStacksCommandOutput>;
  describeStacks(
    args: DescribeStacksCommandInput,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  describeStacks(
    args: DescribeStacksCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemeForStackCommand}
   */
  describeThemeForStack(
    args: DescribeThemeForStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeThemeForStackCommandOutput>;
  describeThemeForStack(
    args: DescribeThemeForStackCommandInput,
    cb: (err: any, data?: DescribeThemeForStackCommandOutput) => void
  ): void;
  describeThemeForStack(
    args: DescribeThemeForStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsageReportSubscriptionsCommand}
   */
  describeUsageReportSubscriptions(): Promise<DescribeUsageReportSubscriptionsCommandOutput>;
  describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeUsageReportSubscriptionsCommandOutput>;
  describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): void;
  describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsersCommand}
   */
  describeUsers(
    args: DescribeUsersCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeUsersCommandOutput>;
  describeUsers(
    args: DescribeUsersCommandInput,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  describeUsers(
    args: DescribeUsersCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserStackAssociationsCommand}
   */
  describeUserStackAssociations(): Promise<DescribeUserStackAssociationsCommandOutput>;
  describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DescribeUserStackAssociationsCommandOutput>;
  describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): void;
  describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableUserCommand}
   */
  disableUser(
    args: DisableUserCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DisableUserCommandOutput>;
  disableUser(
    args: DisableUserCommandInput,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;
  disableUser(
    args: DisableUserCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAppBlockBuilderAppBlockCommand}
   */
  disassociateAppBlockBuilderAppBlock(
    args: DisassociateAppBlockBuilderAppBlockCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DisassociateAppBlockBuilderAppBlockCommandOutput>;
  disassociateAppBlockBuilderAppBlock(
    args: DisassociateAppBlockBuilderAppBlockCommandInput,
    cb: (err: any, data?: DisassociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;
  disassociateAppBlockBuilderAppBlock(
    args: DisassociateAppBlockBuilderAppBlockCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DisassociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationFleetCommand}
   */
  disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DisassociateApplicationFleetCommandOutput>;
  disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    cb: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): void;
  disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationFromEntitlementCommand}
   */
  disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DisassociateApplicationFromEntitlementCommandOutput>;
  disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    cb: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): void;
  disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFleetCommand}
   */
  disassociateFleet(
    args: DisassociateFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DisassociateFleetCommandOutput>;
  disassociateFleet(
    args: DisassociateFleetCommandInput,
    cb: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): void;
  disassociateFleet(
    args: DisassociateFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSoftwareFromImageBuilderCommand}
   */
  disassociateSoftwareFromImageBuilder(
    args: DisassociateSoftwareFromImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DisassociateSoftwareFromImageBuilderCommandOutput>;
  disassociateSoftwareFromImageBuilder(
    args: DisassociateSoftwareFromImageBuilderCommandInput,
    cb: (err: any, data?: DisassociateSoftwareFromImageBuilderCommandOutput) => void
  ): void;
  disassociateSoftwareFromImageBuilder(
    args: DisassociateSoftwareFromImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DisassociateSoftwareFromImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link DrainSessionInstanceCommand}
   */
  drainSessionInstance(
    args: DrainSessionInstanceCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<DrainSessionInstanceCommandOutput>;
  drainSessionInstance(
    args: DrainSessionInstanceCommandInput,
    cb: (err: any, data?: DrainSessionInstanceCommandOutput) => void
  ): void;
  drainSessionInstance(
    args: DrainSessionInstanceCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: DrainSessionInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableUserCommand}
   */
  enableUser(
    args: EnableUserCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<EnableUserCommandOutput>;
  enableUser(
    args: EnableUserCommandInput,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;
  enableUser(
    args: EnableUserCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ExpireSessionCommand}
   */
  expireSession(
    args: ExpireSessionCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<ExpireSessionCommandOutput>;
  expireSession(
    args: ExpireSessionCommandInput,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;
  expireSession(
    args: ExpireSessionCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportImageTaskCommand}
   */
  getExportImageTask(): Promise<GetExportImageTaskCommandOutput>;
  getExportImageTask(
    args: GetExportImageTaskCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<GetExportImageTaskCommandOutput>;
  getExportImageTask(
    args: GetExportImageTaskCommandInput,
    cb: (err: any, data?: GetExportImageTaskCommandOutput) => void
  ): void;
  getExportImageTask(
    args: GetExportImageTaskCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: GetExportImageTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedFleetsCommand}
   */
  listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<ListAssociatedFleetsCommandOutput>;
  listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): void;
  listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedStacksCommand}
   */
  listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<ListAssociatedStacksCommandOutput>;
  listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): void;
  listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitledApplicationsCommand}
   */
  listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<ListEntitledApplicationsCommandOutput>;
  listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    cb: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): void;
  listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportImageTasksCommand}
   */
  listExportImageTasks(): Promise<ListExportImageTasksCommandOutput>;
  listExportImageTasks(
    args: ListExportImageTasksCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<ListExportImageTasksCommandOutput>;
  listExportImageTasks(
    args: ListExportImageTasksCommandInput,
    cb: (err: any, data?: ListExportImageTasksCommandOutput) => void
  ): void;
  listExportImageTasks(
    args: ListExportImageTasksCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: ListExportImageTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAppBlockBuilderCommand}
   */
  startAppBlockBuilder(
    args: StartAppBlockBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StartAppBlockBuilderCommandOutput>;
  startAppBlockBuilder(
    args: StartAppBlockBuilderCommandInput,
    cb: (err: any, data?: StartAppBlockBuilderCommandOutput) => void
  ): void;
  startAppBlockBuilder(
    args: StartAppBlockBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StartAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFleetCommand}
   */
  startFleet(
    args: StartFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StartFleetCommandOutput>;
  startFleet(
    args: StartFleetCommandInput,
    cb: (err: any, data?: StartFleetCommandOutput) => void
  ): void;
  startFleet(
    args: StartFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StartFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImageBuilderCommand}
   */
  startImageBuilder(
    args: StartImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StartImageBuilderCommandOutput>;
  startImageBuilder(
    args: StartImageBuilderCommandInput,
    cb: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): void;
  startImageBuilder(
    args: StartImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSoftwareDeploymentToImageBuilderCommand}
   */
  startSoftwareDeploymentToImageBuilder(
    args: StartSoftwareDeploymentToImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StartSoftwareDeploymentToImageBuilderCommandOutput>;
  startSoftwareDeploymentToImageBuilder(
    args: StartSoftwareDeploymentToImageBuilderCommandInput,
    cb: (err: any, data?: StartSoftwareDeploymentToImageBuilderCommandOutput) => void
  ): void;
  startSoftwareDeploymentToImageBuilder(
    args: StartSoftwareDeploymentToImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StartSoftwareDeploymentToImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAppBlockBuilderCommand}
   */
  stopAppBlockBuilder(
    args: StopAppBlockBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StopAppBlockBuilderCommandOutput>;
  stopAppBlockBuilder(
    args: StopAppBlockBuilderCommandInput,
    cb: (err: any, data?: StopAppBlockBuilderCommandOutput) => void
  ): void;
  stopAppBlockBuilder(
    args: StopAppBlockBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StopAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFleetCommand}
   */
  stopFleet(
    args: StopFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StopFleetCommandOutput>;
  stopFleet(
    args: StopFleetCommandInput,
    cb: (err: any, data?: StopFleetCommandOutput) => void
  ): void;
  stopFleet(
    args: StopFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StopFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link StopImageBuilderCommand}
   */
  stopImageBuilder(
    args: StopImageBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<StopImageBuilderCommandOutput>;
  stopImageBuilder(
    args: StopImageBuilderCommandInput,
    cb: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): void;
  stopImageBuilder(
    args: StopImageBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppBlockBuilderCommand}
   */
  updateAppBlockBuilder(
    args: UpdateAppBlockBuilderCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateAppBlockBuilderCommandOutput>;
  updateAppBlockBuilder(
    args: UpdateAppBlockBuilderCommandInput,
    cb: (err: any, data?: UpdateAppBlockBuilderCommandOutput) => void
  ): void;
  updateAppBlockBuilder(
    args: UpdateAppBlockBuilderCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectoryConfigCommand}
   */
  updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateDirectoryConfigCommandOutput>;
  updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): void;
  updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEntitlementCommand}
   */
  updateEntitlement(
    args: UpdateEntitlementCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateEntitlementCommandOutput>;
  updateEntitlement(
    args: UpdateEntitlementCommandInput,
    cb: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): void;
  updateEntitlement(
    args: UpdateEntitlementCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(): Promise<UpdateFleetCommandOutput>;
  updateFleet(
    args: UpdateFleetCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateFleetCommandOutput>;
  updateFleet(
    args: UpdateFleetCommandInput,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImagePermissionsCommand}
   */
  updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateImagePermissionsCommandOutput>;
  updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): void;
  updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStackCommand}
   */
  updateStack(
    args: UpdateStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateStackCommandOutput>;
  updateStack(
    args: UpdateStackCommandInput,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;
  updateStack(
    args: UpdateStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeForStackCommand}
   */
  updateThemeForStack(
    args: UpdateThemeForStackCommandInput,
    options?: AppStreamRequestOptions
  ): Promise<UpdateThemeForStackCommandOutput>;
  updateThemeForStack(
    args: UpdateThemeForStackCommandInput,
    cb: (err: any, data?: UpdateThemeForStackCommandOutput) => void
  ): void;
  updateThemeForStack(
    args: UpdateThemeForStackCommandInput,
    options: AppStreamRequestOptions,
    cb: (err: any, data?: UpdateThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAppBlockBuilderAppBlockAssociationsCommandOutput}.
   */
  paginateDescribeAppBlockBuilderAppBlockAssociations(
    args?: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput>;

  /**
   * @see {@link DescribeAppBlockBuildersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAppBlockBuildersCommandOutput}.
   */
  paginateDescribeAppBlockBuilders(
    args?: DescribeAppBlockBuildersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAppBlockBuildersCommandOutput>;

  /**
   * @see {@link DescribeImagePermissionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeImagePermissionsCommandOutput}.
   */
  paginateDescribeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeImagePermissionsCommandOutput>;

  /**
   * @see {@link DescribeImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeImagesCommandOutput}.
   */
  paginateDescribeImages(
    args?: DescribeImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeImagesCommandOutput>;

  /**
   * @see {@link DescribeFleetsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFleetStarted(
    args: DescribeFleetsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AppStream>, "client">
  ): Promise<WaiterResult<DescribeFleetsCommandOutput>>;

  /**
   * @see {@link DescribeFleetsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFleetStopped(
    args: DescribeFleetsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AppStream>, "client">
  ): Promise<WaiterResult<DescribeFleetsCommandOutput>>;
}

/**
 * <fullname>Amazon WorkSpaces Applications</fullname>
 *          <p>This is the <i>Amazon WorkSpaces Applications API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in WorkSpaces Applications. WorkSpaces Applications is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. WorkSpaces Applications manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *          <note>
 *             <p>You can call the WorkSpaces Applications API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access WorkSpaces Applications API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
 *          </note>
 *          <p>To learn more about WorkSpaces Applications, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon WorkSpaces Applications product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon WorkSpaces Applications documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class AppStream extends AppStreamClient implements AppStream {}
createAggregatedClient(commands, AppStream, { paginators, waiters });
