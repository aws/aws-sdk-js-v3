// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppStreamClient } from "./AppStreamClient";
import {
  AssociateAppBlockBuilderAppBlockCommand,
  AssociateAppBlockBuilderAppBlockCommandInput,
  AssociateAppBlockBuilderAppBlockCommandOutput,
} from "./commands/AssociateAppBlockBuilderAppBlockCommand";
import {
  AssociateApplicationFleetCommand,
  AssociateApplicationFleetCommandInput,
  AssociateApplicationFleetCommandOutput,
} from "./commands/AssociateApplicationFleetCommand";
import {
  AssociateApplicationToEntitlementCommand,
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
} from "./commands/AssociateApplicationToEntitlementCommand";
import {
  AssociateFleetCommand,
  AssociateFleetCommandInput,
  AssociateFleetCommandOutput,
} from "./commands/AssociateFleetCommand";
import {
  AssociateSoftwareToImageBuilderCommand,
  AssociateSoftwareToImageBuilderCommandInput,
  AssociateSoftwareToImageBuilderCommandOutput,
} from "./commands/AssociateSoftwareToImageBuilderCommand";
import {
  BatchAssociateUserStackCommand,
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "./commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommand,
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommand, CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import {
  CreateAppBlockBuilderCommand,
  CreateAppBlockBuilderCommandInput,
  CreateAppBlockBuilderCommandOutput,
} from "./commands/CreateAppBlockBuilderCommand";
import {
  CreateAppBlockBuilderStreamingURLCommand,
  CreateAppBlockBuilderStreamingURLCommandInput,
  CreateAppBlockBuilderStreamingURLCommandOutput,
} from "./commands/CreateAppBlockBuilderStreamingURLCommand";
import {
  CreateAppBlockCommand,
  CreateAppBlockCommandInput,
  CreateAppBlockCommandOutput,
} from "./commands/CreateAppBlockCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDirectoryConfigCommand,
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "./commands/CreateDirectoryConfigCommand";
import {
  CreateEntitlementCommand,
  CreateEntitlementCommandInput,
  CreateEntitlementCommandOutput,
} from "./commands/CreateEntitlementCommand";
import {
  CreateExportImageTaskCommand,
  CreateExportImageTaskCommandInput,
  CreateExportImageTaskCommandOutput,
} from "./commands/CreateExportImageTaskCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateImageBuilderCommand,
  CreateImageBuilderCommandInput,
  CreateImageBuilderCommandOutput,
} from "./commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommand,
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "./commands/CreateImageBuilderStreamingURLCommand";
import {
  CreateImportedImageCommand,
  CreateImportedImageCommandInput,
  CreateImportedImageCommandOutput,
} from "./commands/CreateImportedImageCommand";
import { CreateStackCommand, CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStreamingURLCommand,
  CreateStreamingURLCommandInput,
  CreateStreamingURLCommandOutput,
} from "./commands/CreateStreamingURLCommand";
import {
  CreateThemeForStackCommand,
  CreateThemeForStackCommandInput,
  CreateThemeForStackCommandOutput,
} from "./commands/CreateThemeForStackCommand";
import {
  CreateUpdatedImageCommand,
  CreateUpdatedImageCommandInput,
  CreateUpdatedImageCommandOutput,
} from "./commands/CreateUpdatedImageCommand";
import {
  CreateUsageReportSubscriptionCommand,
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAppBlockBuilderCommand,
  DeleteAppBlockBuilderCommandInput,
  DeleteAppBlockBuilderCommandOutput,
} from "./commands/DeleteAppBlockBuilderCommand";
import {
  DeleteAppBlockCommand,
  DeleteAppBlockCommandInput,
  DeleteAppBlockCommandOutput,
} from "./commands/DeleteAppBlockCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteDirectoryConfigCommand,
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "./commands/DeleteDirectoryConfigCommand";
import {
  DeleteEntitlementCommand,
  DeleteEntitlementCommandInput,
  DeleteEntitlementCommandOutput,
} from "./commands/DeleteEntitlementCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteImageBuilderCommand,
  DeleteImageBuilderCommandInput,
  DeleteImageBuilderCommandOutput,
} from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommand, DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommand,
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommand, DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteThemeForStackCommand,
  DeleteThemeForStackCommandInput,
  DeleteThemeForStackCommandOutput,
} from "./commands/DeleteThemeForStackCommand";
import {
  DeleteUsageReportSubscriptionCommand,
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
} from "./commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import {
  DescribeAppBlockBuildersCommand,
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput,
} from "./commands/DescribeAppBlockBuildersCommand";
import {
  DescribeAppBlocksCommand,
  DescribeAppBlocksCommandInput,
  DescribeAppBlocksCommandOutput,
} from "./commands/DescribeAppBlocksCommand";
import {
  DescribeApplicationFleetAssociationsCommand,
  DescribeApplicationFleetAssociationsCommandInput,
  DescribeApplicationFleetAssociationsCommandOutput,
} from "./commands/DescribeApplicationFleetAssociationsCommand";
import {
  DescribeApplicationsCommand,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeAppLicenseUsageCommand,
  DescribeAppLicenseUsageCommandInput,
  DescribeAppLicenseUsageCommandOutput,
} from "./commands/DescribeAppLicenseUsageCommand";
import {
  DescribeDirectoryConfigsCommand,
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "./commands/DescribeDirectoryConfigsCommand";
import {
  DescribeEntitlementsCommand,
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
} from "./commands/DescribeEntitlementsCommand";
import {
  DescribeFleetsCommand,
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput,
} from "./commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommand,
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "./commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommand,
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "./commands/DescribeImagePermissionsCommand";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "./commands/DescribeImagesCommand";
import {
  DescribeSessionsCommand,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
} from "./commands/DescribeSessionsCommand";
import {
  DescribeSoftwareAssociationsCommand,
  DescribeSoftwareAssociationsCommandInput,
  DescribeSoftwareAssociationsCommandOutput,
} from "./commands/DescribeSoftwareAssociationsCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "./commands/DescribeStacksCommand";
import {
  DescribeThemeForStackCommand,
  DescribeThemeForStackCommandInput,
  DescribeThemeForStackCommandOutput,
} from "./commands/DescribeThemeForStackCommand";
import {
  DescribeUsageReportSubscriptionsCommand,
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "./commands/DescribeUsageReportSubscriptionsCommand";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "./commands/DescribeUsersCommand";
import {
  DescribeUserStackAssociationsCommand,
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "./commands/DescribeUserStackAssociationsCommand";
import { DisableUserCommand, DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  DisassociateAppBlockBuilderAppBlockCommand,
  DisassociateAppBlockBuilderAppBlockCommandInput,
  DisassociateAppBlockBuilderAppBlockCommandOutput,
} from "./commands/DisassociateAppBlockBuilderAppBlockCommand";
import {
  DisassociateApplicationFleetCommand,
  DisassociateApplicationFleetCommandInput,
  DisassociateApplicationFleetCommandOutput,
} from "./commands/DisassociateApplicationFleetCommand";
import {
  DisassociateApplicationFromEntitlementCommand,
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
} from "./commands/DisassociateApplicationFromEntitlementCommand";
import {
  DisassociateFleetCommand,
  DisassociateFleetCommandInput,
  DisassociateFleetCommandOutput,
} from "./commands/DisassociateFleetCommand";
import {
  DisassociateSoftwareFromImageBuilderCommand,
  DisassociateSoftwareFromImageBuilderCommandInput,
  DisassociateSoftwareFromImageBuilderCommandOutput,
} from "./commands/DisassociateSoftwareFromImageBuilderCommand";
import { EnableUserCommand, EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import {
  ExpireSessionCommand,
  ExpireSessionCommandInput,
  ExpireSessionCommandOutput,
} from "./commands/ExpireSessionCommand";
import {
  GetExportImageTaskCommand,
  GetExportImageTaskCommandInput,
  GetExportImageTaskCommandOutput,
} from "./commands/GetExportImageTaskCommand";
import {
  ListAssociatedFleetsCommand,
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "./commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommand,
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "./commands/ListAssociatedStacksCommand";
import {
  ListEntitledApplicationsCommand,
  ListEntitledApplicationsCommandInput,
  ListEntitledApplicationsCommandOutput,
} from "./commands/ListEntitledApplicationsCommand";
import {
  ListExportImageTasksCommand,
  ListExportImageTasksCommandInput,
  ListExportImageTasksCommandOutput,
} from "./commands/ListExportImageTasksCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartAppBlockBuilderCommand,
  StartAppBlockBuilderCommandInput,
  StartAppBlockBuilderCommandOutput,
} from "./commands/StartAppBlockBuilderCommand";
import { StartFleetCommand, StartFleetCommandInput, StartFleetCommandOutput } from "./commands/StartFleetCommand";
import {
  StartImageBuilderCommand,
  StartImageBuilderCommandInput,
  StartImageBuilderCommandOutput,
} from "./commands/StartImageBuilderCommand";
import {
  StartSoftwareDeploymentToImageBuilderCommand,
  StartSoftwareDeploymentToImageBuilderCommandInput,
  StartSoftwareDeploymentToImageBuilderCommandOutput,
} from "./commands/StartSoftwareDeploymentToImageBuilderCommand";
import {
  StopAppBlockBuilderCommand,
  StopAppBlockBuilderCommandInput,
  StopAppBlockBuilderCommandOutput,
} from "./commands/StopAppBlockBuilderCommand";
import { StopFleetCommand, StopFleetCommandInput, StopFleetCommandOutput } from "./commands/StopFleetCommand";
import {
  StopImageBuilderCommand,
  StopImageBuilderCommandInput,
  StopImageBuilderCommandOutput,
} from "./commands/StopImageBuilderCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAppBlockBuilderCommand,
  UpdateAppBlockBuilderCommandInput,
  UpdateAppBlockBuilderCommandOutput,
} from "./commands/UpdateAppBlockBuilderCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateDirectoryConfigCommand,
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "./commands/UpdateDirectoryConfigCommand";
import {
  UpdateEntitlementCommand,
  UpdateEntitlementCommandInput,
  UpdateEntitlementCommandOutput,
} from "./commands/UpdateEntitlementCommand";
import { UpdateFleetCommand, UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommand,
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommand, UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateThemeForStackCommand,
  UpdateThemeForStackCommandInput,
  UpdateThemeForStackCommandOutput,
} from "./commands/UpdateThemeForStackCommand";

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

export interface AppStream {
  /**
   * @see {@link AssociateAppBlockBuilderAppBlockCommand}
   */
  associateAppBlockBuilderAppBlock(
    args: AssociateAppBlockBuilderAppBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAppBlockBuilderAppBlockCommandOutput>;
  associateAppBlockBuilderAppBlock(
    args: AssociateAppBlockBuilderAppBlockCommandInput,
    cb: (err: any, data?: AssociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;
  associateAppBlockBuilderAppBlock(
    args: AssociateAppBlockBuilderAppBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationFleetCommand}
   */
  associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationFleetCommandOutput>;
  associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    cb: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): void;
  associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateApplicationToEntitlementCommand}
   */
  associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationToEntitlementCommandOutput>;
  associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    cb: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): void;
  associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateFleetCommand}
   */
  associateFleet(
    args: AssociateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFleetCommandOutput>;
  associateFleet(args: AssociateFleetCommandInput, cb: (err: any, data?: AssociateFleetCommandOutput) => void): void;
  associateFleet(
    args: AssociateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSoftwareToImageBuilderCommand}
   */
  associateSoftwareToImageBuilder(
    args: AssociateSoftwareToImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSoftwareToImageBuilderCommandOutput>;
  associateSoftwareToImageBuilder(
    args: AssociateSoftwareToImageBuilderCommandInput,
    cb: (err: any, data?: AssociateSoftwareToImageBuilderCommandOutput) => void
  ): void;
  associateSoftwareToImageBuilder(
    args: AssociateSoftwareToImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSoftwareToImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateUserStackCommand}
   */
  batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateUserStackCommandOutput>;
  batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): void;
  batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateUserStackCommand}
   */
  batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateUserStackCommandOutput>;
  batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): void;
  batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyImageCommand}
   */
  copyImage(args: CopyImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyImageCommandOutput>;
  copyImage(args: CopyImageCommandInput, cb: (err: any, data?: CopyImageCommandOutput) => void): void;
  copyImage(
    args: CopyImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBlockCommand}
   */
  createAppBlock(
    args: CreateAppBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppBlockCommandOutput>;
  createAppBlock(args: CreateAppBlockCommandInput, cb: (err: any, data?: CreateAppBlockCommandOutput) => void): void;
  createAppBlock(
    args: CreateAppBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBlockBuilderCommand}
   */
  createAppBlockBuilder(
    args: CreateAppBlockBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppBlockBuilderCommandOutput>;
  createAppBlockBuilder(
    args: CreateAppBlockBuilderCommandInput,
    cb: (err: any, data?: CreateAppBlockBuilderCommandOutput) => void
  ): void;
  createAppBlockBuilder(
    args: CreateAppBlockBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppBlockBuilderStreamingURLCommand}
   */
  createAppBlockBuilderStreamingURL(
    args: CreateAppBlockBuilderStreamingURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppBlockBuilderStreamingURLCommandOutput>;
  createAppBlockBuilderStreamingURL(
    args: CreateAppBlockBuilderStreamingURLCommandInput,
    cb: (err: any, data?: CreateAppBlockBuilderStreamingURLCommandOutput) => void
  ): void;
  createAppBlockBuilderStreamingURL(
    args: CreateAppBlockBuilderStreamingURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppBlockBuilderStreamingURLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectoryConfigCommand}
   */
  createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryConfigCommandOutput>;
  createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): void;
  createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEntitlementCommand}
   */
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntitlementCommandOutput>;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportImageTaskCommand}
   */
  createExportImageTask(
    args: CreateExportImageTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportImageTaskCommandOutput>;
  createExportImageTask(
    args: CreateExportImageTaskCommandInput,
    cb: (err: any, data?: CreateExportImageTaskCommandOutput) => void
  ): void;
  createExportImageTask(
    args: CreateExportImageTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportImageTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageBuilderCommand}
   */
  createImageBuilder(
    args: CreateImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageBuilderCommandOutput>;
  createImageBuilder(
    args: CreateImageBuilderCommandInput,
    cb: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): void;
  createImageBuilder(
    args: CreateImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageBuilderStreamingURLCommand}
   */
  createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageBuilderStreamingURLCommandOutput>;
  createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): void;
  createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImportedImageCommand}
   */
  createImportedImage(
    args: CreateImportedImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImportedImageCommandOutput>;
  createImportedImage(
    args: CreateImportedImageCommandInput,
    cb: (err: any, data?: CreateImportedImageCommandOutput) => void
  ): void;
  createImportedImage(
    args: CreateImportedImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImportedImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStackCommand}
   */
  createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
  createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
  createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingURLCommand}
   */
  createStreamingURL(
    args: CreateStreamingURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingURLCommandOutput>;
  createStreamingURL(
    args: CreateStreamingURLCommandInput,
    cb: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): void;
  createStreamingURL(
    args: CreateStreamingURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThemeForStackCommand}
   */
  createThemeForStack(
    args: CreateThemeForStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThemeForStackCommandOutput>;
  createThemeForStack(
    args: CreateThemeForStackCommandInput,
    cb: (err: any, data?: CreateThemeForStackCommandOutput) => void
  ): void;
  createThemeForStack(
    args: CreateThemeForStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUpdatedImageCommand}
   */
  createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUpdatedImageCommandOutput>;
  createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    cb: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): void;
  createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUsageReportSubscriptionCommand}
   */
  createUsageReportSubscription(): Promise<CreateUsageReportSubscriptionCommandOutput>;
  createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageReportSubscriptionCommandOutput>;
  createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): void;
  createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppBlockCommand}
   */
  deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppBlockCommandOutput>;
  deleteAppBlock(args: DeleteAppBlockCommandInput, cb: (err: any, data?: DeleteAppBlockCommandOutput) => void): void;
  deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppBlockBuilderCommand}
   */
  deleteAppBlockBuilder(
    args: DeleteAppBlockBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppBlockBuilderCommandOutput>;
  deleteAppBlockBuilder(
    args: DeleteAppBlockBuilderCommandInput,
    cb: (err: any, data?: DeleteAppBlockBuilderCommandOutput) => void
  ): void;
  deleteAppBlockBuilder(
    args: DeleteAppBlockBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectoryConfigCommand}
   */
  deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryConfigCommandOutput>;
  deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): void;
  deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntitlementCommand}
   */
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntitlementCommandOutput>;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageCommand}
   */
  deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
  deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
  deleteImage(
    args: DeleteImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageBuilderCommand}
   */
  deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImageBuilderCommandOutput>;
  deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): void;
  deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImagePermissionsCommand}
   */
  deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImagePermissionsCommandOutput>;
  deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): void;
  deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStackCommand}
   */
  deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
  deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
  deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThemeForStackCommand}
   */
  deleteThemeForStack(
    args: DeleteThemeForStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThemeForStackCommandOutput>;
  deleteThemeForStack(
    args: DeleteThemeForStackCommandInput,
    cb: (err: any, data?: DeleteThemeForStackCommandOutput) => void
  ): void;
  deleteThemeForStack(
    args: DeleteThemeForStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUsageReportSubscriptionCommand}
   */
  deleteUsageReportSubscription(): Promise<DeleteUsageReportSubscriptionCommandOutput>;
  deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageReportSubscriptionCommandOutput>;
  deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): void;
  deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlockBuilderAppBlockAssociationsCommand}
   */
  describeAppBlockBuilderAppBlockAssociations(): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput>;
  describeAppBlockBuilderAppBlockAssociations(
    args: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput>;
  describeAppBlockBuilderAppBlockAssociations(
    args: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    cb: (err: any, data?: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput) => void
  ): void;
  describeAppBlockBuilderAppBlockAssociations(
    args: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlockBuildersCommand}
   */
  describeAppBlockBuilders(): Promise<DescribeAppBlockBuildersCommandOutput>;
  describeAppBlockBuilders(
    args: DescribeAppBlockBuildersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppBlockBuildersCommandOutput>;
  describeAppBlockBuilders(
    args: DescribeAppBlockBuildersCommandInput,
    cb: (err: any, data?: DescribeAppBlockBuildersCommandOutput) => void
  ): void;
  describeAppBlockBuilders(
    args: DescribeAppBlockBuildersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppBlockBuildersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppBlocksCommand}
   */
  describeAppBlocks(): Promise<DescribeAppBlocksCommandOutput>;
  describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppBlocksCommandOutput>;
  describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    cb: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): void;
  describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationFleetAssociationsCommand}
   */
  describeApplicationFleetAssociations(): Promise<DescribeApplicationFleetAssociationsCommandOutput>;
  describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationFleetAssociationsCommandOutput>;
  describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    cb: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): void;
  describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationsCommand}
   */
  describeApplications(): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppLicenseUsageCommand}
   */
  describeAppLicenseUsage(
    args: DescribeAppLicenseUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppLicenseUsageCommandOutput>;
  describeAppLicenseUsage(
    args: DescribeAppLicenseUsageCommandInput,
    cb: (err: any, data?: DescribeAppLicenseUsageCommandOutput) => void
  ): void;
  describeAppLicenseUsage(
    args: DescribeAppLicenseUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppLicenseUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDirectoryConfigsCommand}
   */
  describeDirectoryConfigs(): Promise<DescribeDirectoryConfigsCommandOutput>;
  describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectoryConfigsCommandOutput>;
  describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): void;
  describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntitlementsCommand}
   */
  describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntitlementsCommandOutput>;
  describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    cb: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): void;
  describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetsCommand}
   */
  describeFleets(): Promise<DescribeFleetsCommandOutput>;
  describeFleets(
    args: DescribeFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetsCommandOutput>;
  describeFleets(args: DescribeFleetsCommandInput, cb: (err: any, data?: DescribeFleetsCommandOutput) => void): void;
  describeFleets(
    args: DescribeFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageBuildersCommand}
   */
  describeImageBuilders(): Promise<DescribeImageBuildersCommandOutput>;
  describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageBuildersCommandOutput>;
  describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): void;
  describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagePermissionsCommand}
   */
  describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagePermissionsCommandOutput>;
  describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): void;
  describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImagesCommand}
   */
  describeImages(): Promise<DescribeImagesCommandOutput>;
  describeImages(
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagesCommandOutput>;
  describeImages(args: DescribeImagesCommandInput, cb: (err: any, data?: DescribeImagesCommandOutput) => void): void;
  describeImages(
    args: DescribeImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSessionsCommand}
   */
  describeSessions(
    args: DescribeSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSessionsCommandOutput>;
  describeSessions(
    args: DescribeSessionsCommandInput,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  describeSessions(
    args: DescribeSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSoftwareAssociationsCommand}
   */
  describeSoftwareAssociations(
    args: DescribeSoftwareAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSoftwareAssociationsCommandOutput>;
  describeSoftwareAssociations(
    args: DescribeSoftwareAssociationsCommandInput,
    cb: (err: any, data?: DescribeSoftwareAssociationsCommandOutput) => void
  ): void;
  describeSoftwareAssociations(
    args: DescribeSoftwareAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSoftwareAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStacksCommand}
   */
  describeStacks(): Promise<DescribeStacksCommandOutput>;
  describeStacks(
    args: DescribeStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStacksCommandOutput>;
  describeStacks(args: DescribeStacksCommandInput, cb: (err: any, data?: DescribeStacksCommandOutput) => void): void;
  describeStacks(
    args: DescribeStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeThemeForStackCommand}
   */
  describeThemeForStack(
    args: DescribeThemeForStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThemeForStackCommandOutput>;
  describeThemeForStack(
    args: DescribeThemeForStackCommandInput,
    cb: (err: any, data?: DescribeThemeForStackCommandOutput) => void
  ): void;
  describeThemeForStack(
    args: DescribeThemeForStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThemeForStackCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsageReportSubscriptionsCommand}
   */
  describeUsageReportSubscriptions(): Promise<DescribeUsageReportSubscriptionsCommandOutput>;
  describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsageReportSubscriptionsCommandOutput>;
  describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): void;
  describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUsersCommand}
   */
  describeUsers(args: DescribeUsersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsersCommandOutput>;
  describeUsers(args: DescribeUsersCommandInput, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
  describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserStackAssociationsCommand}
   */
  describeUserStackAssociations(): Promise<DescribeUserStackAssociationsCommandOutput>;
  describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserStackAssociationsCommandOutput>;
  describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): void;
  describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableUserCommand}
   */
  disableUser(args: DisableUserCommandInput, options?: __HttpHandlerOptions): Promise<DisableUserCommandOutput>;
  disableUser(args: DisableUserCommandInput, cb: (err: any, data?: DisableUserCommandOutput) => void): void;
  disableUser(
    args: DisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAppBlockBuilderAppBlockCommand}
   */
  disassociateAppBlockBuilderAppBlock(
    args: DisassociateAppBlockBuilderAppBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAppBlockBuilderAppBlockCommandOutput>;
  disassociateAppBlockBuilderAppBlock(
    args: DisassociateAppBlockBuilderAppBlockCommandInput,
    cb: (err: any, data?: DisassociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;
  disassociateAppBlockBuilderAppBlock(
    args: DisassociateAppBlockBuilderAppBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAppBlockBuilderAppBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationFleetCommand}
   */
  disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationFleetCommandOutput>;
  disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    cb: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): void;
  disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApplicationFromEntitlementCommand}
   */
  disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationFromEntitlementCommandOutput>;
  disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    cb: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): void;
  disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFleetCommand}
   */
  disassociateFleet(
    args: DisassociateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFleetCommandOutput>;
  disassociateFleet(
    args: DisassociateFleetCommandInput,
    cb: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): void;
  disassociateFleet(
    args: DisassociateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSoftwareFromImageBuilderCommand}
   */
  disassociateSoftwareFromImageBuilder(
    args: DisassociateSoftwareFromImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSoftwareFromImageBuilderCommandOutput>;
  disassociateSoftwareFromImageBuilder(
    args: DisassociateSoftwareFromImageBuilderCommandInput,
    cb: (err: any, data?: DisassociateSoftwareFromImageBuilderCommandOutput) => void
  ): void;
  disassociateSoftwareFromImageBuilder(
    args: DisassociateSoftwareFromImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSoftwareFromImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableUserCommand}
   */
  enableUser(args: EnableUserCommandInput, options?: __HttpHandlerOptions): Promise<EnableUserCommandOutput>;
  enableUser(args: EnableUserCommandInput, cb: (err: any, data?: EnableUserCommandOutput) => void): void;
  enableUser(
    args: EnableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ExpireSessionCommand}
   */
  expireSession(args: ExpireSessionCommandInput, options?: __HttpHandlerOptions): Promise<ExpireSessionCommandOutput>;
  expireSession(args: ExpireSessionCommandInput, cb: (err: any, data?: ExpireSessionCommandOutput) => void): void;
  expireSession(
    args: ExpireSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportImageTaskCommand}
   */
  getExportImageTask(): Promise<GetExportImageTaskCommandOutput>;
  getExportImageTask(
    args: GetExportImageTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExportImageTaskCommandOutput>;
  getExportImageTask(
    args: GetExportImageTaskCommandInput,
    cb: (err: any, data?: GetExportImageTaskCommandOutput) => void
  ): void;
  getExportImageTask(
    args: GetExportImageTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportImageTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedFleetsCommand}
   */
  listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedFleetsCommandOutput>;
  listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): void;
  listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedStacksCommand}
   */
  listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedStacksCommandOutput>;
  listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): void;
  listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitledApplicationsCommand}
   */
  listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitledApplicationsCommandOutput>;
  listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    cb: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): void;
  listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExportImageTasksCommand}
   */
  listExportImageTasks(): Promise<ListExportImageTasksCommandOutput>;
  listExportImageTasks(
    args: ListExportImageTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportImageTasksCommandOutput>;
  listExportImageTasks(
    args: ListExportImageTasksCommandInput,
    cb: (err: any, data?: ListExportImageTasksCommandOutput) => void
  ): void;
  listExportImageTasks(
    args: ListExportImageTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportImageTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAppBlockBuilderCommand}
   */
  startAppBlockBuilder(
    args: StartAppBlockBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAppBlockBuilderCommandOutput>;
  startAppBlockBuilder(
    args: StartAppBlockBuilderCommandInput,
    cb: (err: any, data?: StartAppBlockBuilderCommandOutput) => void
  ): void;
  startAppBlockBuilder(
    args: StartAppBlockBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFleetCommand}
   */
  startFleet(args: StartFleetCommandInput, options?: __HttpHandlerOptions): Promise<StartFleetCommandOutput>;
  startFleet(args: StartFleetCommandInput, cb: (err: any, data?: StartFleetCommandOutput) => void): void;
  startFleet(
    args: StartFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImageBuilderCommand}
   */
  startImageBuilder(
    args: StartImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImageBuilderCommandOutput>;
  startImageBuilder(
    args: StartImageBuilderCommandInput,
    cb: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): void;
  startImageBuilder(
    args: StartImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSoftwareDeploymentToImageBuilderCommand}
   */
  startSoftwareDeploymentToImageBuilder(
    args: StartSoftwareDeploymentToImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSoftwareDeploymentToImageBuilderCommandOutput>;
  startSoftwareDeploymentToImageBuilder(
    args: StartSoftwareDeploymentToImageBuilderCommandInput,
    cb: (err: any, data?: StartSoftwareDeploymentToImageBuilderCommandOutput) => void
  ): void;
  startSoftwareDeploymentToImageBuilder(
    args: StartSoftwareDeploymentToImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSoftwareDeploymentToImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAppBlockBuilderCommand}
   */
  stopAppBlockBuilder(
    args: StopAppBlockBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAppBlockBuilderCommandOutput>;
  stopAppBlockBuilder(
    args: StopAppBlockBuilderCommandInput,
    cb: (err: any, data?: StopAppBlockBuilderCommandOutput) => void
  ): void;
  stopAppBlockBuilder(
    args: StopAppBlockBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link StopFleetCommand}
   */
  stopFleet(args: StopFleetCommandInput, options?: __HttpHandlerOptions): Promise<StopFleetCommandOutput>;
  stopFleet(args: StopFleetCommandInput, cb: (err: any, data?: StopFleetCommandOutput) => void): void;
  stopFleet(
    args: StopFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link StopImageBuilderCommand}
   */
  stopImageBuilder(
    args: StopImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopImageBuilderCommandOutput>;
  stopImageBuilder(
    args: StopImageBuilderCommandInput,
    cb: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): void;
  stopImageBuilder(
    args: StopImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppBlockBuilderCommand}
   */
  updateAppBlockBuilder(
    args: UpdateAppBlockBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppBlockBuilderCommandOutput>;
  updateAppBlockBuilder(
    args: UpdateAppBlockBuilderCommandInput,
    cb: (err: any, data?: UpdateAppBlockBuilderCommandOutput) => void
  ): void;
  updateAppBlockBuilder(
    args: UpdateAppBlockBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppBlockBuilderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDirectoryConfigCommand}
   */
  updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectoryConfigCommandOutput>;
  updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): void;
  updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEntitlementCommand}
   */
  updateEntitlement(
    args: UpdateEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEntitlementCommandOutput>;
  updateEntitlement(
    args: UpdateEntitlementCommandInput,
    cb: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): void;
  updateEntitlement(
    args: UpdateEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetCommand}
   */
  updateFleet(): Promise<UpdateFleetCommandOutput>;
  updateFleet(args: UpdateFleetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFleetCommandOutput>;
  updateFleet(args: UpdateFleetCommandInput, cb: (err: any, data?: UpdateFleetCommandOutput) => void): void;
  updateFleet(
    args: UpdateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImagePermissionsCommand}
   */
  updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImagePermissionsCommandOutput>;
  updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): void;
  updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStackCommand}
   */
  updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
  updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
  updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThemeForStackCommand}
   */
  updateThemeForStack(
    args: UpdateThemeForStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThemeForStackCommandOutput>;
  updateThemeForStack(
    args: UpdateThemeForStackCommandInput,
    cb: (err: any, data?: UpdateThemeForStackCommandOutput) => void
  ): void;
  updateThemeForStack(
    args: UpdateThemeForStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThemeForStackCommandOutput) => void
  ): void;
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
createAggregatedClient(commands, AppStream);
