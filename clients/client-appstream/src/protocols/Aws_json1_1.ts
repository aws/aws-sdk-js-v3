// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateApplicationFleetCommandInput,
  AssociateApplicationFleetCommandOutput,
} from "../commands/AssociateApplicationFleetCommand";
import {
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
} from "../commands/AssociateApplicationToEntitlementCommand";
import { AssociateFleetCommandInput, AssociateFleetCommandOutput } from "../commands/AssociateFleetCommand";
import {
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "../commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "../commands/BatchDisassociateUserStackCommand";
import { CopyImageCommandInput, CopyImageCommandOutput } from "../commands/CopyImageCommand";
import { CreateAppBlockCommandInput, CreateAppBlockCommandOutput } from "../commands/CreateAppBlockCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "../commands/CreateDirectoryConfigCommand";
import { CreateEntitlementCommandInput, CreateEntitlementCommandOutput } from "../commands/CreateEntitlementCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import { CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput } from "../commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "../commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "../commands/CreateStackCommand";
import { CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput } from "../commands/CreateStreamingURLCommand";
import { CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput } from "../commands/CreateUpdatedImageCommand";
import {
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "../commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteAppBlockCommandInput, DeleteAppBlockCommandOutput } from "../commands/DeleteAppBlockCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "../commands/DeleteDirectoryConfigCommand";
import { DeleteEntitlementCommandInput, DeleteEntitlementCommandOutput } from "../commands/DeleteEntitlementCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import { DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput } from "../commands/DeleteImageBuilderCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "../commands/DeleteImagePermissionsCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "../commands/DeleteStackCommand";
import {
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "../commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DescribeAppBlocksCommandInput, DescribeAppBlocksCommandOutput } from "../commands/DescribeAppBlocksCommand";
import {
  DescribeApplicationFleetAssociationsCommandInput,
  DescribeApplicationFleetAssociationsCommandOutput,
} from "../commands/DescribeApplicationFleetAssociationsCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "../commands/DescribeApplicationsCommand";
import {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "../commands/DescribeDirectoryConfigsCommand";
import {
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
} from "../commands/DescribeEntitlementsCommand";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "../commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "../commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "../commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "../commands/DescribeSessionsCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import {
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "../commands/DescribeUsageReportSubscriptionsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "../commands/DescribeUserStackAssociationsCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "../commands/DisableUserCommand";
import {
  DisassociateApplicationFleetCommandInput,
  DisassociateApplicationFleetCommandOutput,
} from "../commands/DisassociateApplicationFleetCommand";
import {
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
} from "../commands/DisassociateApplicationFromEntitlementCommand";
import { DisassociateFleetCommandInput, DisassociateFleetCommandOutput } from "../commands/DisassociateFleetCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "../commands/EnableUserCommand";
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "../commands/ExpireSessionCommand";
import {
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "../commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "../commands/ListAssociatedStacksCommand";
import {
  ListEntitledApplicationsCommandInput,
  ListEntitledApplicationsCommandOutput,
} from "../commands/ListEntitledApplicationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartFleetCommandInput, StartFleetCommandOutput } from "../commands/StartFleetCommand";
import { StartImageBuilderCommandInput, StartImageBuilderCommandOutput } from "../commands/StartImageBuilderCommand";
import { StopFleetCommandInput, StopFleetCommandOutput } from "../commands/StopFleetCommand";
import { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "../commands/StopImageBuilderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "../commands/UpdateDirectoryConfigCommand";
import { UpdateEntitlementCommandInput, UpdateEntitlementCommandOutput } from "../commands/UpdateEntitlementCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "../commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "../commands/UpdateImagePermissionsCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "../commands/UpdateStackCommand";
import { AppStreamServiceException as __BaseException } from "../models/AppStreamServiceException";
import {
  AccessEndpoint,
  AppBlock,
  Application,
  ApplicationAttribute,
  ApplicationFleetAssociation,
  ApplicationSettings,
  ApplicationSettingsResponse,
  AssociateApplicationFleetRequest,
  AssociateApplicationFleetResult,
  AssociateApplicationToEntitlementRequest,
  AssociateApplicationToEntitlementResult,
  AssociateFleetRequest,
  AssociateFleetResult,
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackResult,
  BatchDisassociateUserStackRequest,
  BatchDisassociateUserStackResult,
  CertificateBasedAuthProperties,
  ComputeCapacity,
  ComputeCapacityStatus,
  ConcurrentModificationException,
  CopyImageRequest,
  CopyImageResponse,
  CreateAppBlockRequest,
  CreateAppBlockResult,
  CreateApplicationRequest,
  CreateApplicationResult,
  CreateDirectoryConfigRequest,
  CreateDirectoryConfigResult,
  CreateEntitlementRequest,
  CreateEntitlementResult,
  CreateFleetRequest,
  CreateFleetResult,
  CreateImageBuilderRequest,
  CreateImageBuilderResult,
  CreateImageBuilderStreamingURLRequest,
  CreateImageBuilderStreamingURLResult,
  CreateStackRequest,
  CreateStackResult,
  CreateStreamingURLRequest,
  CreateStreamingURLResult,
  CreateUpdatedImageRequest,
  CreateUpdatedImageResult,
  CreateUsageReportSubscriptionRequest,
  CreateUsageReportSubscriptionResult,
  CreateUserRequest,
  CreateUserResult,
  DeleteAppBlockRequest,
  DeleteAppBlockResult,
  DeleteApplicationRequest,
  DeleteApplicationResult,
  DeleteDirectoryConfigRequest,
  DeleteDirectoryConfigResult,
  DeleteEntitlementRequest,
  DeleteEntitlementResult,
  DeleteFleetRequest,
  DeleteFleetResult,
  DeleteImageBuilderRequest,
  DeleteImageBuilderResult,
  DeleteImagePermissionsRequest,
  DeleteImagePermissionsResult,
  DeleteImageRequest,
  DeleteImageResult,
  DeleteStackRequest,
  DeleteStackResult,
  DeleteUsageReportSubscriptionRequest,
  DeleteUsageReportSubscriptionResult,
  DeleteUserRequest,
  DeleteUserResult,
  DescribeAppBlocksRequest,
  DescribeAppBlocksResult,
  DescribeApplicationFleetAssociationsRequest,
  DescribeApplicationFleetAssociationsResult,
  DescribeApplicationsRequest,
  DescribeApplicationsResult,
  DescribeDirectoryConfigsRequest,
  DescribeDirectoryConfigsResult,
  DescribeEntitlementsRequest,
  DescribeEntitlementsResult,
  DescribeFleetsRequest,
  DescribeFleetsResult,
  DescribeImageBuildersRequest,
  DescribeImageBuildersResult,
  DescribeImagePermissionsRequest,
  DescribeImagePermissionsResult,
  DescribeImagesRequest,
  DescribeImagesResult,
  DescribeSessionsRequest,
  DescribeSessionsResult,
  DescribeStacksRequest,
  DescribeStacksResult,
  DescribeUsageReportSubscriptionsRequest,
  DescribeUsageReportSubscriptionsResult,
  DescribeUsersRequest,
  DescribeUsersResult,
  DescribeUserStackAssociationsRequest,
  DescribeUserStackAssociationsResult,
  DirectoryConfig,
  DisableUserRequest,
  DisableUserResult,
  DisassociateApplicationFleetRequest,
  DisassociateApplicationFleetResult,
  DisassociateApplicationFromEntitlementRequest,
  DisassociateApplicationFromEntitlementResult,
  DisassociateFleetRequest,
  DisassociateFleetResult,
  DomainJoinInfo,
  EnableUserRequest,
  EnableUserResult,
  EntitledApplication,
  Entitlement,
  EntitlementAlreadyExistsException,
  EntitlementAttribute,
  EntitlementNotFoundException,
  ExpireSessionRequest,
  ExpireSessionResult,
  Fleet,
  FleetAttribute,
  FleetError,
  Image,
  ImageBuilder,
  ImageBuilderStateChangeReason,
  ImagePermissions,
  ImageStateChangeReason,
  IncompatibleImageException,
  InvalidAccountStatusException,
  InvalidParameterCombinationException,
  InvalidRoleException,
  LastReportGenerationExecutionError,
  LimitExceededException,
  ListAssociatedFleetsRequest,
  ListAssociatedFleetsResult,
  ListAssociatedStacksRequest,
  ListAssociatedStacksResult,
  ListEntitledApplicationsRequest,
  ListEntitledApplicationsResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  NetworkAccessConfiguration,
  OperationNotPermittedException,
  PlatformType,
  RequestLimitExceededException,
  ResourceAlreadyExistsException,
  ResourceError,
  ResourceInUseException,
  ResourceNotAvailableException,
  ResourceNotFoundException,
  S3Location,
  ScriptDetails,
  ServiceAccountCredentials,
  Session,
  SharedImagePermissions,
  Stack,
  StackAttribute,
  StackError,
  StartFleetRequest,
  StartFleetResult,
  StartImageBuilderRequest,
  StartImageBuilderResult,
  StopFleetRequest,
  StopFleetResult,
  StopImageBuilderRequest,
  StopImageBuilderResult,
  StorageConnector,
  StreamingExperienceSettings,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateApplicationRequest,
  UpdateApplicationResult,
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigResult,
  UpdateEntitlementRequest,
  UpdateEntitlementResult,
  UpdateFleetRequest,
  UpdateFleetResult,
  UpdateImagePermissionsRequest,
  UpdateImagePermissionsResult,
  UpdateStackRequest,
  UpdateStackResult,
  UsageReportSubscription,
  User,
  UserSetting,
  UserStackAssociation,
  UserStackAssociationError,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateApplicationFleetCommand
 */
export const se_AssociateApplicationFleetCommand = async (
  input: AssociateApplicationFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateApplicationFleet",
  };
  let body: any;
  body = JSON.stringify(se_AssociateApplicationFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateApplicationToEntitlementCommand
 */
export const se_AssociateApplicationToEntitlementCommand = async (
  input: AssociateApplicationToEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateApplicationToEntitlement",
  };
  let body: any;
  body = JSON.stringify(se_AssociateApplicationToEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateFleetCommand
 */
export const se_AssociateFleetCommand = async (
  input: AssociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateFleet",
  };
  let body: any;
  body = JSON.stringify(se_AssociateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateUserStackCommand
 */
export const se_BatchAssociateUserStackCommand = async (
  input: BatchAssociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.BatchAssociateUserStack",
  };
  let body: any;
  body = JSON.stringify(se_BatchAssociateUserStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateUserStackCommand
 */
export const se_BatchDisassociateUserStackCommand = async (
  input: BatchDisassociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.BatchDisassociateUserStack",
  };
  let body: any;
  body = JSON.stringify(se_BatchDisassociateUserStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyImageCommand
 */
export const se_CopyImageCommand = async (
  input: CopyImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CopyImage",
  };
  let body: any;
  body = JSON.stringify(se_CopyImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppBlockCommand
 */
export const se_CreateAppBlockCommand = async (
  input: CreateAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateAppBlock",
  };
  let body: any;
  body = JSON.stringify(se_CreateAppBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(se_CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectoryConfigCommand
 */
export const se_CreateDirectoryConfigCommand = async (
  input: CreateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateDirectoryConfig",
  };
  let body: any;
  body = JSON.stringify(se_CreateDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEntitlementCommand
 */
export const se_CreateEntitlementCommand = async (
  input: CreateEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateEntitlement",
  };
  let body: any;
  body = JSON.stringify(se_CreateEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateFleet",
  };
  let body: any;
  body = JSON.stringify(se_CreateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageBuilderCommand
 */
export const se_CreateImageBuilderCommand = async (
  input: CreateImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateImageBuilder",
  };
  let body: any;
  body = JSON.stringify(se_CreateImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageBuilderStreamingURLCommand
 */
export const se_CreateImageBuilderStreamingURLCommand = async (
  input: CreateImageBuilderStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateImageBuilderStreamingURL",
  };
  let body: any;
  body = JSON.stringify(se_CreateImageBuilderStreamingURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStackCommand
 */
export const se_CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateStack",
  };
  let body: any;
  body = JSON.stringify(se_CreateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStreamingURLCommand
 */
export const se_CreateStreamingURLCommand = async (
  input: CreateStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateStreamingURL",
  };
  let body: any;
  body = JSON.stringify(se_CreateStreamingURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUpdatedImageCommand
 */
export const se_CreateUpdatedImageCommand = async (
  input: CreateUpdatedImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUpdatedImage",
  };
  let body: any;
  body = JSON.stringify(se_CreateUpdatedImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUsageReportSubscriptionCommand
 */
export const se_CreateUsageReportSubscriptionCommand = async (
  input: CreateUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUsageReportSubscription",
  };
  let body: any;
  body = JSON.stringify(se_CreateUsageReportSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUser",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppBlockCommand
 */
export const se_DeleteAppBlockCommand = async (
  input: DeleteAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteAppBlock",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAppBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteApplication",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectoryConfigCommand
 */
export const se_DeleteDirectoryConfigCommand = async (
  input: DeleteDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteDirectoryConfig",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEntitlementCommand
 */
export const se_DeleteEntitlementCommand = async (
  input: DeleteEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteEntitlement",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteFleet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageCommand
 */
export const se_DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImage",
  };
  let body: any;
  body = JSON.stringify(se_DeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageBuilderCommand
 */
export const se_DeleteImageBuilderCommand = async (
  input: DeleteImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImageBuilder",
  };
  let body: any;
  body = JSON.stringify(se_DeleteImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImagePermissionsCommand
 */
export const se_DeleteImagePermissionsCommand = async (
  input: DeleteImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImagePermissions",
  };
  let body: any;
  body = JSON.stringify(se_DeleteImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStackCommand
 */
export const se_DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteStack",
  };
  let body: any;
  body = JSON.stringify(se_DeleteStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUsageReportSubscriptionCommand
 */
export const se_DeleteUsageReportSubscriptionCommand = async (
  input: DeleteUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteUsageReportSubscription",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUsageReportSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppBlocksCommand
 */
export const se_DescribeAppBlocksCommand = async (
  input: DescribeAppBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeAppBlocks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAppBlocksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationFleetAssociationsCommand
 */
export const se_DescribeApplicationFleetAssociationsCommand = async (
  input: DescribeApplicationFleetAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeApplicationFleetAssociations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeApplicationFleetAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationsCommand
 */
export const se_DescribeApplicationsCommand = async (
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeApplications",
  };
  let body: any;
  body = JSON.stringify(se_DescribeApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectoryConfigsCommand
 */
export const se_DescribeDirectoryConfigsCommand = async (
  input: DescribeDirectoryConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeDirectoryConfigs",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDirectoryConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntitlementsCommand
 */
export const se_DescribeEntitlementsCommand = async (
  input: DescribeEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeEntitlements",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEntitlementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetsCommand
 */
export const se_DescribeFleetsCommand = async (
  input: DescribeFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeFleets",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageBuildersCommand
 */
export const se_DescribeImageBuildersCommand = async (
  input: DescribeImageBuildersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImageBuilders",
  };
  let body: any;
  body = JSON.stringify(se_DescribeImageBuildersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImagePermissionsCommand
 */
export const se_DescribeImagePermissionsCommand = async (
  input: DescribeImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImagePermissions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImagesCommand
 */
export const se_DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImages",
  };
  let body: any;
  body = JSON.stringify(se_DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSessionsCommand
 */
export const se_DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeSessions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStacksCommand
 */
export const se_DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeStacks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUsageReportSubscriptionsCommand
 */
export const se_DescribeUsageReportSubscriptionsCommand = async (
  input: DescribeUsageReportSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUsageReportSubscriptions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUsageReportSubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUsersCommand
 */
export const se_DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUsers",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserStackAssociationsCommand
 */
export const se_DescribeUserStackAssociationsCommand = async (
  input: DescribeUserStackAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUserStackAssociations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserStackAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableUserCommand
 */
export const se_DisableUserCommand = async (
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisableUser",
  };
  let body: any;
  body = JSON.stringify(se_DisableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateApplicationFleetCommand
 */
export const se_DisassociateApplicationFleetCommand = async (
  input: DisassociateApplicationFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateApplicationFleet",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateApplicationFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateApplicationFromEntitlementCommand
 */
export const se_DisassociateApplicationFromEntitlementCommand = async (
  input: DisassociateApplicationFromEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateApplicationFromEntitlement",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateApplicationFromEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFleetCommand
 */
export const se_DisassociateFleetCommand = async (
  input: DisassociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateFleet",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableUserCommand
 */
export const se_EnableUserCommand = async (
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.EnableUser",
  };
  let body: any;
  body = JSON.stringify(se_EnableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExpireSessionCommand
 */
export const se_ExpireSessionCommand = async (
  input: ExpireSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ExpireSession",
  };
  let body: any;
  body = JSON.stringify(se_ExpireSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociatedFleetsCommand
 */
export const se_ListAssociatedFleetsCommand = async (
  input: ListAssociatedFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListAssociatedFleets",
  };
  let body: any;
  body = JSON.stringify(se_ListAssociatedFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociatedStacksCommand
 */
export const se_ListAssociatedStacksCommand = async (
  input: ListAssociatedStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListAssociatedStacks",
  };
  let body: any;
  body = JSON.stringify(se_ListAssociatedStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntitledApplicationsCommand
 */
export const se_ListEntitledApplicationsCommand = async (
  input: ListEntitledApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListEntitledApplications",
  };
  let body: any;
  body = JSON.stringify(se_ListEntitledApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFleetCommand
 */
export const se_StartFleetCommand = async (
  input: StartFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StartFleet",
  };
  let body: any;
  body = JSON.stringify(se_StartFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImageBuilderCommand
 */
export const se_StartImageBuilderCommand = async (
  input: StartImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StartImageBuilder",
  };
  let body: any;
  body = JSON.stringify(se_StartImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopFleetCommand
 */
export const se_StopFleetCommand = async (
  input: StopFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StopFleet",
  };
  let body: any;
  body = JSON.stringify(se_StopFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopImageBuilderCommand
 */
export const se_StopImageBuilderCommand = async (
  input: StopImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StopImageBuilder",
  };
  let body: any;
  body = JSON.stringify(se_StopImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(se_UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDirectoryConfigCommand
 */
export const se_UpdateDirectoryConfigCommand = async (
  input: UpdateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateDirectoryConfig",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEntitlementCommand
 */
export const se_UpdateEntitlementCommand = async (
  input: UpdateEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateEntitlement",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFleetCommand
 */
export const se_UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateFleet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImagePermissionsCommand
 */
export const se_UpdateImagePermissionsCommand = async (
  input: UpdateImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateImagePermissions",
  };
  let body: any;
  body = JSON.stringify(se_UpdateImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStackCommand
 */
export const se_UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateStack",
  };
  let body: any;
  body = JSON.stringify(se_UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateApplicationFleetCommand
 */
export const de_AssociateApplicationFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateApplicationFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateApplicationFleetResult(data, context);
  const response: AssociateApplicationFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateApplicationFleetCommandError
 */
const de_AssociateApplicationFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateApplicationToEntitlementCommand
 */
export const de_AssociateApplicationToEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationToEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateApplicationToEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateApplicationToEntitlementResult(data, context);
  const response: AssociateApplicationToEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateApplicationToEntitlementCommandError
 */
const de_AssociateApplicationToEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationToEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await de_EntitlementNotFoundExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateFleetCommand
 */
export const de_AssociateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateFleetResult(data, context);
  const response: AssociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateFleetCommandError
 */
const de_AssociateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchAssociateUserStackCommand
 */
export const de_BatchAssociateUserStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchAssociateUserStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchAssociateUserStackResult(data, context);
  const response: BatchAssociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchAssociateUserStackCommandError
 */
const de_BatchAssociateUserStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDisassociateUserStackCommand
 */
export const de_BatchDisassociateUserStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDisassociateUserStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDisassociateUserStackResult(data, context);
  const response: BatchDisassociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchDisassociateUserStackCommandError
 */
const de_BatchDisassociateUserStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CopyImageCommand
 */
export const de_CopyImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyImageResponse(data, context);
  const response: CopyImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopyImageCommandError
 */
const de_CopyImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAppBlockCommand
 */
export const de_CreateAppBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppBlockResult(data, context);
  const response: CreateAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAppBlockCommandError
 */
const de_CreateAppBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApplicationResult(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDirectoryConfigCommand
 */
export const de_CreateDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDirectoryConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDirectoryConfigResult(data, context);
  const response: CreateDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDirectoryConfigCommandError
 */
const de_CreateDirectoryConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEntitlementCommand
 */
export const de_CreateEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEntitlementResult(data, context);
  const response: CreateEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEntitlementCommandError
 */
const de_CreateEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntitlementAlreadyExistsException":
    case "com.amazonaws.appstream#EntitlementAlreadyExistsException":
      throw await de_EntitlementAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFleetResult(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFleetCommandError
 */
const de_CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await de_RequestLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateImageBuilderCommand
 */
export const de_CreateImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateImageBuilderResult(data, context);
  const response: CreateImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateImageBuilderCommandError
 */
const de_CreateImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await de_RequestLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateImageBuilderStreamingURLCommand
 */
export const de_CreateImageBuilderStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateImageBuilderStreamingURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateImageBuilderStreamingURLResult(data, context);
  const response: CreateImageBuilderStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError
 */
const de_CreateImageBuilderStreamingURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStackCommand
 */
export const de_CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStackResult(data, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStackCommandError
 */
const de_CreateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStreamingURLCommand
 */
export const de_CreateStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStreamingURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStreamingURLResult(data, context);
  const response: CreateStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStreamingURLCommandError
 */
const de_CreateStreamingURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUpdatedImageCommand
 */
export const de_CreateUpdatedImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUpdatedImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUpdatedImageResult(data, context);
  const response: CreateUpdatedImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUpdatedImageCommandError
 */
const de_CreateUpdatedImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUsageReportSubscriptionCommand
 */
export const de_CreateUsageReportSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUsageReportSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUsageReportSubscriptionResult(data, context);
  const response: CreateUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUsageReportSubscriptionCommandError
 */
const de_CreateUsageReportSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserResult(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAppBlockCommand
 */
export const de_DeleteAppBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAppBlockResult(data, context);
  const response: DeleteAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAppBlockCommandError
 */
const de_DeleteAppBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteApplicationResult(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDirectoryConfigCommand
 */
export const de_DeleteDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDirectoryConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDirectoryConfigResult(data, context);
  const response: DeleteDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDirectoryConfigCommandError
 */
const de_DeleteDirectoryConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEntitlementCommand
 */
export const de_DeleteEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEntitlementResult(data, context);
  const response: DeleteEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEntitlementCommandError
 */
const de_DeleteEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await de_EntitlementNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFleetResult(data, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFleetCommandError
 */
const de_DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImageCommand
 */
export const de_DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteImageResult(data, context);
  const response: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteImageCommandError
 */
const de_DeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImageBuilderCommand
 */
export const de_DeleteImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteImageBuilderResult(data, context);
  const response: DeleteImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteImageBuilderCommandError
 */
const de_DeleteImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImagePermissionsCommand
 */
export const de_DeleteImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteImagePermissionsResult(data, context);
  const response: DeleteImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteImagePermissionsCommandError
 */
const de_DeleteImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStackCommand
 */
export const de_DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteStackResult(data, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStackCommandError
 */
const de_DeleteStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUsageReportSubscriptionCommand
 */
export const de_DeleteUsageReportSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUsageReportSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUsageReportSubscriptionResult(data, context);
  const response: DeleteUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError
 */
const de_DeleteUsageReportSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserResult(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAppBlocksCommand
 */
export const de_DescribeAppBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlocksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppBlocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppBlocksResult(data, context);
  const response: DescribeAppBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAppBlocksCommandError
 */
const de_DescribeAppBlocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeApplicationFleetAssociationsCommand
 */
export const de_DescribeApplicationFleetAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationFleetAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationFleetAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationFleetAssociationsResult(data, context);
  const response: DescribeApplicationFleetAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeApplicationFleetAssociationsCommandError
 */
const de_DescribeApplicationFleetAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationFleetAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeApplicationsCommand
 */
export const de_DescribeApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationsResult(data, context);
  const response: DescribeApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeApplicationsCommandError
 */
const de_DescribeApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDirectoryConfigsCommand
 */
export const de_DescribeDirectoryConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDirectoryConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDirectoryConfigsResult(data, context);
  const response: DescribeDirectoryConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDirectoryConfigsCommandError
 */
const de_DescribeDirectoryConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEntitlementsCommand
 */
export const de_DescribeEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitlementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntitlementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEntitlementsResult(data, context);
  const response: DescribeEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEntitlementsCommandError
 */
const de_DescribeEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await de_EntitlementNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFleetsCommand
 */
export const de_DescribeFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFleetsResult(data, context);
  const response: DescribeFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeFleetsCommandError
 */
const de_DescribeFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeImageBuildersCommand
 */
export const de_DescribeImageBuildersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImageBuildersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageBuildersResult(data, context);
  const response: DescribeImageBuildersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImageBuildersCommandError
 */
const de_DescribeImageBuildersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeImagePermissionsCommand
 */
export const de_DescribeImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImagePermissionsResult(data, context);
  const response: DescribeImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImagePermissionsCommandError
 */
const de_DescribeImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeImagesCommand
 */
export const de_DescribeImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImagesResult(data, context);
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeImagesCommandError
 */
const de_DescribeImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSessionsCommand
 */
export const de_DescribeSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSessionsResult(data, context);
  const response: DescribeSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSessionsCommandError
 */
const de_DescribeSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStacksCommand
 */
export const de_DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStacksResult(data, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStacksCommandError
 */
const de_DescribeStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand
 */
export const de_DescribeUsageReportSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUsageReportSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUsageReportSubscriptionsResult(data, context);
  const response: DescribeUsageReportSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError
 */
const de_DescribeUsageReportSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUsersCommand
 */
export const de_DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUsersResult(data, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUsersCommandError
 */
const de_DescribeUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserStackAssociationsCommand
 */
export const de_DescribeUserStackAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserStackAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserStackAssociationsResult(data, context);
  const response: DescribeUserStackAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserStackAssociationsCommandError
 */
const de_DescribeUserStackAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisableUserCommand
 */
export const de_DisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableUserResult(data, context);
  const response: DisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableUserCommandError
 */
const de_DisableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateApplicationFleetCommand
 */
export const de_DisassociateApplicationFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateApplicationFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateApplicationFleetResult(data, context);
  const response: DisassociateApplicationFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateApplicationFleetCommandError
 */
const de_DisassociateApplicationFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateApplicationFromEntitlementCommand
 */
export const de_DisassociateApplicationFromEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationFromEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateApplicationFromEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateApplicationFromEntitlementResult(data, context);
  const response: DisassociateApplicationFromEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateApplicationFromEntitlementCommandError
 */
const de_DisassociateApplicationFromEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationFromEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await de_EntitlementNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateFleetCommand
 */
export const de_DisassociateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateFleetResult(data, context);
  const response: DisassociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateFleetCommandError
 */
const de_DisassociateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableUserCommand
 */
export const de_EnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableUserResult(data, context);
  const response: EnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableUserCommandError
 */
const de_EnableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ExpireSessionCommand
 */
export const de_ExpireSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExpireSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExpireSessionResult(data, context);
  const response: ExpireSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExpireSessionCommandError
 */
const de_ExpireSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListAssociatedFleetsCommand
 */
export const de_ListAssociatedFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociatedFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociatedFleetsResult(data, context);
  const response: ListAssociatedFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAssociatedFleetsCommandError
 */
const de_ListAssociatedFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListAssociatedStacksCommand
 */
export const de_ListAssociatedStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociatedStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociatedStacksResult(data, context);
  const response: ListAssociatedStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAssociatedStacksCommandError
 */
const de_ListAssociatedStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListEntitledApplicationsCommand
 */
export const de_ListEntitledApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitledApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntitledApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntitledApplicationsResult(data, context);
  const response: ListEntitledApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEntitledApplicationsCommandError
 */
const de_ListEntitledApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitledApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await de_EntitlementNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartFleetCommand
 */
export const de_StartFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFleetResult(data, context);
  const response: StartFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartFleetCommandError
 */
const de_StartFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await de_RequestLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartImageBuilderCommand
 */
export const de_StartImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartImageBuilderResult(data, context);
  const response: StartImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartImageBuilderCommandError
 */
const de_StartImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopFleetCommand
 */
export const de_StopFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopFleetResult(data, context);
  const response: StopFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopFleetCommandError
 */
const de_StopFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopImageBuilderCommand
 */
export const de_StopImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopImageBuilderResult(data, context);
  const response: StopImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopImageBuilderCommandError
 */
const de_StopImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApplicationResult(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDirectoryConfigCommand
 */
export const de_UpdateDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDirectoryConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDirectoryConfigResult(data, context);
  const response: UpdateDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDirectoryConfigCommandError
 */
const de_UpdateDirectoryConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateEntitlementCommand
 */
export const de_UpdateEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEntitlementResult(data, context);
  const response: UpdateEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEntitlementCommandError
 */
const de_UpdateEntitlementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntitlementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await de_EntitlementNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFleetCommand
 */
export const de_UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFleetResult(data, context);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFleetCommandError
 */
const de_UpdateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await de_RequestLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateImagePermissionsCommand
 */
export const de_UpdateImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateImagePermissionsResult(data, context);
  const response: UpdateImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateImagePermissionsCommandError
 */
const de_UpdateImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await de_ResourceNotAvailableExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateStackCommand
 */
export const de_UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStackResult(data, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateStackCommandError
 */
const de_UpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await de_IncompatibleImageExceptionRes(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await de_InvalidAccountStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntitlementAlreadyExistsExceptionRes
 */
const de_EntitlementAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntitlementAlreadyExistsException(body, context);
  const exception = new EntitlementAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntitlementNotFoundExceptionRes
 */
const de_EntitlementNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntitlementNotFoundException(body, context);
  const exception = new EntitlementNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncompatibleImageExceptionRes
 */
const de_IncompatibleImageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleImageException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncompatibleImageException(body, context);
  const exception = new IncompatibleImageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAccountStatusExceptionRes
 */
const de_InvalidAccountStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccountStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAccountStatusException(body, context);
  const exception = new InvalidAccountStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRoleExceptionRes
 */
const de_InvalidRoleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRoleException(body, context);
  const exception = new InvalidRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestLimitExceededExceptionRes
 */
const de_RequestLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestLimitExceededException(body, context);
  const exception = new RequestLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotAvailableExceptionRes
 */
const de_ResourceNotAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotAvailableException(body, context);
  const exception = new ResourceNotAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccessEndpoint
 */
const se_AccessEndpoint = (input: AccessEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.VpceId != null && { VpceId: input.VpceId }),
  };
};

/**
 * serializeAws_json1_1AccessEndpointList
 */
const se_AccessEndpointList = (input: AccessEndpoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AccessEndpoint(entry, context);
    });
};

/**
 * serializeAws_json1_1ApplicationAttributes
 */
const se_ApplicationAttributes = (input: (ApplicationAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ApplicationSettings
 */
const se_ApplicationSettings = (input: ApplicationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.SettingsGroup != null && { SettingsGroup: input.SettingsGroup }),
  };
};

/**
 * serializeAws_json1_1ArnList
 */
const se_ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateApplicationFleetRequest
 */
const se_AssociateApplicationFleetRequest = (input: AssociateApplicationFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
  };
};

/**
 * serializeAws_json1_1AssociateApplicationToEntitlementRequest
 */
const se_AssociateApplicationToEntitlementRequest = (
  input: AssociateApplicationToEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationIdentifier != null && { ApplicationIdentifier: input.ApplicationIdentifier }),
    ...(input.EntitlementName != null && { EntitlementName: input.EntitlementName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1AssociateFleetRequest
 */
const se_AssociateFleetRequest = (input: AssociateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1AwsAccountIdList
 */
const se_AwsAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchAssociateUserStackRequest
 */
const se_BatchAssociateUserStackRequest = (input: BatchAssociateUserStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserStackAssociations != null && {
      UserStackAssociations: se_UserStackAssociationList(input.UserStackAssociations, context),
    }),
  };
};

/**
 * serializeAws_json1_1BatchDisassociateUserStackRequest
 */
const se_BatchDisassociateUserStackRequest = (
  input: BatchDisassociateUserStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserStackAssociations != null && {
      UserStackAssociations: se_UserStackAssociationList(input.UserStackAssociations, context),
    }),
  };
};

/**
 * serializeAws_json1_1CertificateBasedAuthProperties
 */
const se_CertificateBasedAuthProperties = (input: CertificateBasedAuthProperties, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ComputeCapacity
 */
const se_ComputeCapacity = (input: ComputeCapacity, context: __SerdeContext): any => {
  return {
    ...(input.DesiredInstances != null && { DesiredInstances: input.DesiredInstances }),
  };
};

/**
 * serializeAws_json1_1CopyImageRequest
 */
const se_CopyImageRequest = (input: CopyImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.DestinationImageDescription != null && {
      DestinationImageDescription: input.DestinationImageDescription,
    }),
    ...(input.DestinationImageName != null && { DestinationImageName: input.DestinationImageName }),
    ...(input.DestinationRegion != null && { DestinationRegion: input.DestinationRegion }),
    ...(input.SourceImageName != null && { SourceImageName: input.SourceImageName }),
  };
};

/**
 * serializeAws_json1_1CreateAppBlockRequest
 */
const se_CreateAppBlockRequest = (input: CreateAppBlockRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SetupScriptDetails != null && {
      SetupScriptDetails: se_ScriptDetails(input.SetupScriptDetails, context),
    }),
    ...(input.SourceS3Location != null && { SourceS3Location: se_S3Location(input.SourceS3Location, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppBlockArn != null && { AppBlockArn: input.AppBlockArn }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.IconS3Location != null && { IconS3Location: se_S3Location(input.IconS3Location, context) }),
    ...(input.InstanceFamilies != null && { InstanceFamilies: se_StringList(input.InstanceFamilies, context) }),
    ...(input.LaunchParameters != null && { LaunchParameters: input.LaunchParameters }),
    ...(input.LaunchPath != null && { LaunchPath: input.LaunchPath }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Platforms != null && { Platforms: se_Platforms(input.Platforms, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

/**
 * serializeAws_json1_1CreateDirectoryConfigRequest
 */
const se_CreateDirectoryConfigRequest = (input: CreateDirectoryConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateBasedAuthProperties != null && {
      CertificateBasedAuthProperties: se_CertificateBasedAuthProperties(input.CertificateBasedAuthProperties, context),
    }),
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedNames != null && {
      OrganizationalUnitDistinguishedNames: se_OrganizationalUnitDistinguishedNamesList(
        input.OrganizationalUnitDistinguishedNames,
        context
      ),
    }),
    ...(input.ServiceAccountCredentials != null && {
      ServiceAccountCredentials: se_ServiceAccountCredentials(input.ServiceAccountCredentials, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateEntitlementRequest
 */
const se_CreateEntitlementRequest = (input: CreateEntitlementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppVisibility != null && { AppVisibility: input.AppVisibility }),
    ...(input.Attributes != null && { Attributes: se_EntitlementAttributeList(input.Attributes, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1CreateFleetRequest
 */
const se_CreateFleetRequest = (input: CreateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComputeCapacity != null && { ComputeCapacity: se_ComputeCapacity(input.ComputeCapacity, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds != null && { DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo != null && { DomainJoinInfo: se_DomainJoinInfo(input.DomainJoinInfo, context) }),
    ...(input.EnableDefaultInternetAccess != null && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
    }),
    ...(input.FleetType != null && { FleetType: input.FleetType }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdleDisconnectTimeoutInSeconds != null && {
      IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds,
    }),
    ...(input.ImageArn != null && { ImageArn: input.ImageArn }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.MaxConcurrentSessions != null && { MaxConcurrentSessions: input.MaxConcurrentSessions }),
    ...(input.MaxUserDurationInSeconds != null && { MaxUserDurationInSeconds: input.MaxUserDurationInSeconds }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Platform != null && { Platform: input.Platform }),
    ...(input.SessionScriptS3Location != null && {
      SessionScriptS3Location: se_S3Location(input.SessionScriptS3Location, context),
    }),
    ...(input.StreamView != null && { StreamView: input.StreamView }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.UsbDeviceFilterStrings != null && {
      UsbDeviceFilterStrings: se_UsbDeviceFilterStrings(input.UsbDeviceFilterStrings, context),
    }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateImageBuilderRequest
 */
const se_CreateImageBuilderRequest = (input: CreateImageBuilderRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessEndpoints != null && { AccessEndpoints: se_AccessEndpointList(input.AccessEndpoints, context) }),
    ...(input.AppstreamAgentVersion != null && { AppstreamAgentVersion: input.AppstreamAgentVersion }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo != null && { DomainJoinInfo: se_DomainJoinInfo(input.DomainJoinInfo, context) }),
    ...(input.EnableDefaultInternetAccess != null && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
    }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ImageArn != null && { ImageArn: input.ImageArn }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateImageBuilderStreamingURLRequest
 */
const se_CreateImageBuilderStreamingURLRequest = (
  input: CreateImageBuilderStreamingURLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Validity != null && { Validity: input.Validity }),
  };
};

/**
 * serializeAws_json1_1CreateStackRequest
 */
const se_CreateStackRequest = (input: CreateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessEndpoints != null && { AccessEndpoints: se_AccessEndpointList(input.AccessEndpoints, context) }),
    ...(input.ApplicationSettings != null && {
      ApplicationSettings: se_ApplicationSettings(input.ApplicationSettings, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains != null && { EmbedHostDomains: se_EmbedHostDomains(input.EmbedHostDomains, context) }),
    ...(input.FeedbackURL != null && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedirectURL != null && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors != null && {
      StorageConnectors: se_StorageConnectorList(input.StorageConnectors, context),
    }),
    ...(input.StreamingExperienceSettings != null && {
      StreamingExperienceSettings: se_StreamingExperienceSettings(input.StreamingExperienceSettings, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.UserSettings != null && { UserSettings: se_UserSettingList(input.UserSettings, context) }),
  };
};

/**
 * serializeAws_json1_1CreateStreamingURLRequest
 */
const se_CreateStreamingURLRequest = (input: CreateStreamingURLRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.SessionContext != null && { SessionContext: input.SessionContext }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserId != null && { UserId: input.UserId }),
    ...(input.Validity != null && { Validity: input.Validity }),
  };
};

/**
 * serializeAws_json1_1CreateUpdatedImageRequest
 */
const se_CreateUpdatedImageRequest = (input: CreateUpdatedImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.dryRun != null && { dryRun: input.dryRun }),
    ...(input.existingImageName != null && { existingImageName: input.existingImageName }),
    ...(input.newImageDescription != null && { newImageDescription: input.newImageDescription }),
    ...(input.newImageDisplayName != null && { newImageDisplayName: input.newImageDisplayName }),
    ...(input.newImageName != null && { newImageName: input.newImageName }),
    ...(input.newImageTags != null && { newImageTags: se_Tags(input.newImageTags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUsageReportSubscriptionRequest
 */
const se_CreateUsageReportSubscriptionRequest = (
  input: CreateUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.MessageAction != null && { MessageAction: input.MessageAction }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DeleteAppBlockRequest
 */
const se_DeleteAppBlockRequest = (input: DeleteAppBlockRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationRequest
 */
const se_DeleteApplicationRequest = (input: DeleteApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteDirectoryConfigRequest
 */
const se_DeleteDirectoryConfigRequest = (input: DeleteDirectoryConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
  };
};

/**
 * serializeAws_json1_1DeleteEntitlementRequest
 */
const se_DeleteEntitlementRequest = (input: DeleteEntitlementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1DeleteFleetRequest
 */
const se_DeleteFleetRequest = (input: DeleteFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteImageBuilderRequest
 */
const se_DeleteImageBuilderRequest = (input: DeleteImageBuilderRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteImagePermissionsRequest
 */
const se_DeleteImagePermissionsRequest = (input: DeleteImagePermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

/**
 * serializeAws_json1_1DeleteImageRequest
 */
const se_DeleteImageRequest = (input: DeleteImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteStackRequest
 */
const se_DeleteStackRequest = (input: DeleteStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteUsageReportSubscriptionRequest
 */
const se_DeleteUsageReportSubscriptionRequest = (
  input: DeleteUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DescribeAppBlocksRequest
 */
const se_DescribeAppBlocksRequest = (input: DescribeAppBlocksRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arns != null && { Arns: se_ArnList(input.Arns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeApplicationFleetAssociationsRequest
 */
const se_DescribeApplicationFleetAssociationsRequest = (
  input: DescribeApplicationFleetAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeApplicationsRequest
 */
const se_DescribeApplicationsRequest = (input: DescribeApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arns != null && { Arns: se_ArnList(input.Arns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDirectoryConfigsRequest
 */
const se_DescribeDirectoryConfigsRequest = (input: DescribeDirectoryConfigsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryNames != null && { DirectoryNames: se_DirectoryNameList(input.DirectoryNames, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEntitlementsRequest
 */
const se_DescribeEntitlementsRequest = (input: DescribeEntitlementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1DescribeFleetsRequest
 */
const se_DescribeFleetsRequest = (input: DescribeFleetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: se_StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeImageBuildersRequest
 */
const se_DescribeImageBuildersRequest = (input: DescribeImageBuildersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Names != null && { Names: se_StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeImagePermissionsRequest
 */
const se_DescribeImagePermissionsRequest = (input: DescribeImagePermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SharedAwsAccountIds != null && {
      SharedAwsAccountIds: se_AwsAccountIdList(input.SharedAwsAccountIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeImagesRequest
 */
const se_DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arns != null && { Arns: se_ArnList(input.Arns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Names != null && { Names: se_StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DescribeSessionsRequest
 */
const se_DescribeSessionsRequest = (input: DescribeSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1DescribeStacksRequest
 */
const se_DescribeStacksRequest = (input: DescribeStacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: se_StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeUsageReportSubscriptionsRequest
 */
const se_DescribeUsageReportSubscriptionsRequest = (
  input: DescribeUsageReportSubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeUsersRequest
 */
const se_DescribeUsersRequest = (input: DescribeUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeUserStackAssociationsRequest
 */
const se_DescribeUserStackAssociationsRequest = (
  input: DescribeUserStackAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DirectoryNameList
 */
const se_DirectoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DisableUserRequest
 */
const se_DisableUserRequest = (input: DisableUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DisassociateApplicationFleetRequest
 */
const se_DisassociateApplicationFleetRequest = (
  input: DisassociateApplicationFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
  };
};

/**
 * serializeAws_json1_1DisassociateApplicationFromEntitlementRequest
 */
const se_DisassociateApplicationFromEntitlementRequest = (
  input: DisassociateApplicationFromEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationIdentifier != null && { ApplicationIdentifier: input.ApplicationIdentifier }),
    ...(input.EntitlementName != null && { EntitlementName: input.EntitlementName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1DisassociateFleetRequest
 */
const se_DisassociateFleetRequest = (input: DisassociateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1DomainJoinInfo
 */
const se_DomainJoinInfo = (input: DomainJoinInfo, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedName != null && {
      OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
    }),
  };
};

/**
 * serializeAws_json1_1DomainList
 */
const se_DomainList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EmbedHostDomains
 */
const se_EmbedHostDomains = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EnableUserRequest
 */
const se_EnableUserRequest = (input: EnableUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1EntitlementAttribute
 */
const se_EntitlementAttribute = (input: EntitlementAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1EntitlementAttributeList
 */
const se_EntitlementAttributeList = (input: EntitlementAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntitlementAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1ExpireSessionRequest
 */
const se_ExpireSessionRequest = (input: ExpireSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1FleetAttributes
 */
const se_FleetAttributes = (input: (FleetAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ImagePermissions
 */
const se_ImagePermissions = (input: ImagePermissions, context: __SerdeContext): any => {
  return {
    ...(input.allowFleet != null && { allowFleet: input.allowFleet }),
    ...(input.allowImageBuilder != null && { allowImageBuilder: input.allowImageBuilder }),
  };
};

/**
 * serializeAws_json1_1ListAssociatedFleetsRequest
 */
const se_ListAssociatedFleetsRequest = (input: ListAssociatedFleetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1ListAssociatedStacksRequest
 */
const se_ListAssociatedStacksRequest = (input: ListAssociatedStacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEntitledApplicationsRequest
 */
const se_ListEntitledApplicationsRequest = (input: ListEntitledApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntitlementName != null && { EntitlementName: input.EntitlementName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1OrganizationalUnitDistinguishedNamesList
 */
const se_OrganizationalUnitDistinguishedNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Platforms
 */
const se_Platforms = (input: (PlatformType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

/**
 * serializeAws_json1_1ScriptDetails
 */
const se_ScriptDetails = (input: ScriptDetails, context: __SerdeContext): any => {
  return {
    ...(input.ExecutableParameters != null && { ExecutableParameters: input.ExecutableParameters }),
    ...(input.ExecutablePath != null && { ExecutablePath: input.ExecutablePath }),
    ...(input.ScriptS3Location != null && { ScriptS3Location: se_S3Location(input.ScriptS3Location, context) }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ServiceAccountCredentials
 */
const se_ServiceAccountCredentials = (input: ServiceAccountCredentials, context: __SerdeContext): any => {
  return {
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.AccountPassword != null && { AccountPassword: input.AccountPassword }),
  };
};

/**
 * serializeAws_json1_1StackAttributes
 */
const se_StackAttributes = (input: (StackAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartFleetRequest
 */
const se_StartFleetRequest = (input: StartFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StartImageBuilderRequest
 */
const se_StartImageBuilderRequest = (input: StartImageBuilderRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppstreamAgentVersion != null && { AppstreamAgentVersion: input.AppstreamAgentVersion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StopFleetRequest
 */
const se_StopFleetRequest = (input: StopFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StopImageBuilderRequest
 */
const se_StopImageBuilderRequest = (input: StopImageBuilderRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StorageConnector
 */
const se_StorageConnector = (input: StorageConnector, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorType != null && { ConnectorType: input.ConnectorType }),
    ...(input.Domains != null && { Domains: se_DomainList(input.Domains, context) }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
  };
};

/**
 * serializeAws_json1_1StorageConnectorList
 */
const se_StorageConnectorList = (input: StorageConnector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StorageConnector(entry, context);
    });
};

/**
 * serializeAws_json1_1StreamingExperienceSettings
 */
const se_StreamingExperienceSettings = (input: StreamingExperienceSettings, context: __SerdeContext): any => {
  return {
    ...(input.PreferredProtocol != null && { PreferredProtocol: input.PreferredProtocol }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateApplicationRequest
 */
const se_UpdateApplicationRequest = (input: UpdateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppBlockArn != null && { AppBlockArn: input.AppBlockArn }),
    ...(input.AttributesToDelete != null && {
      AttributesToDelete: se_ApplicationAttributes(input.AttributesToDelete, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.IconS3Location != null && { IconS3Location: se_S3Location(input.IconS3Location, context) }),
    ...(input.LaunchParameters != null && { LaunchParameters: input.LaunchParameters }),
    ...(input.LaunchPath != null && { LaunchPath: input.LaunchPath }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

/**
 * serializeAws_json1_1UpdateDirectoryConfigRequest
 */
const se_UpdateDirectoryConfigRequest = (input: UpdateDirectoryConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateBasedAuthProperties != null && {
      CertificateBasedAuthProperties: se_CertificateBasedAuthProperties(input.CertificateBasedAuthProperties, context),
    }),
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedNames != null && {
      OrganizationalUnitDistinguishedNames: se_OrganizationalUnitDistinguishedNamesList(
        input.OrganizationalUnitDistinguishedNames,
        context
      ),
    }),
    ...(input.ServiceAccountCredentials != null && {
      ServiceAccountCredentials: se_ServiceAccountCredentials(input.ServiceAccountCredentials, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateEntitlementRequest
 */
const se_UpdateEntitlementRequest = (input: UpdateEntitlementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppVisibility != null && { AppVisibility: input.AppVisibility }),
    ...(input.Attributes != null && { Attributes: se_EntitlementAttributeList(input.Attributes, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

/**
 * serializeAws_json1_1UpdateFleetRequest
 */
const se_UpdateFleetRequest = (input: UpdateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToDelete != null && {
      AttributesToDelete: se_FleetAttributes(input.AttributesToDelete, context),
    }),
    ...(input.ComputeCapacity != null && { ComputeCapacity: se_ComputeCapacity(input.ComputeCapacity, context) }),
    ...(input.DeleteVpcConfig != null && { DeleteVpcConfig: input.DeleteVpcConfig }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds != null && { DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo != null && { DomainJoinInfo: se_DomainJoinInfo(input.DomainJoinInfo, context) }),
    ...(input.EnableDefaultInternetAccess != null && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
    }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdleDisconnectTimeoutInSeconds != null && {
      IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds,
    }),
    ...(input.ImageArn != null && { ImageArn: input.ImageArn }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.MaxConcurrentSessions != null && { MaxConcurrentSessions: input.MaxConcurrentSessions }),
    ...(input.MaxUserDurationInSeconds != null && { MaxUserDurationInSeconds: input.MaxUserDurationInSeconds }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Platform != null && { Platform: input.Platform }),
    ...(input.SessionScriptS3Location != null && {
      SessionScriptS3Location: se_S3Location(input.SessionScriptS3Location, context),
    }),
    ...(input.StreamView != null && { StreamView: input.StreamView }),
    ...(input.UsbDeviceFilterStrings != null && {
      UsbDeviceFilterStrings: se_UsbDeviceFilterStrings(input.UsbDeviceFilterStrings, context),
    }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateImagePermissionsRequest
 */
const se_UpdateImagePermissionsRequest = (input: UpdateImagePermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImagePermissions != null && { ImagePermissions: se_ImagePermissions(input.ImagePermissions, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

/**
 * serializeAws_json1_1UpdateStackRequest
 */
const se_UpdateStackRequest = (input: UpdateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessEndpoints != null && { AccessEndpoints: se_AccessEndpointList(input.AccessEndpoints, context) }),
    ...(input.ApplicationSettings != null && {
      ApplicationSettings: se_ApplicationSettings(input.ApplicationSettings, context),
    }),
    ...(input.AttributesToDelete != null && {
      AttributesToDelete: se_StackAttributes(input.AttributesToDelete, context),
    }),
    ...(input.DeleteStorageConnectors != null && { DeleteStorageConnectors: input.DeleteStorageConnectors }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains != null && { EmbedHostDomains: se_EmbedHostDomains(input.EmbedHostDomains, context) }),
    ...(input.FeedbackURL != null && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedirectURL != null && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors != null && {
      StorageConnectors: se_StorageConnectorList(input.StorageConnectors, context),
    }),
    ...(input.StreamingExperienceSettings != null && {
      StreamingExperienceSettings: se_StreamingExperienceSettings(input.StreamingExperienceSettings, context),
    }),
    ...(input.UserSettings != null && { UserSettings: se_UserSettingList(input.UserSettings, context) }),
  };
};

/**
 * serializeAws_json1_1UsbDeviceFilterStrings
 */
const se_UsbDeviceFilterStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UserSetting
 */
const se_UserSetting = (input: UserSetting, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Permission != null && { Permission: input.Permission }),
  };
};

/**
 * serializeAws_json1_1UserSettingList
 */
const se_UserSettingList = (input: UserSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UserSetting(entry, context);
    });
};

/**
 * serializeAws_json1_1UserStackAssociation
 */
const se_UserStackAssociation = (input: UserStackAssociation, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.SendEmailNotification != null && { SendEmailNotification: input.SendEmailNotification }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1UserStackAssociationList
 */
const se_UserStackAssociationList = (input: UserStackAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UserStackAssociation(entry, context);
    });
};

/**
 * serializeAws_json1_1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdList(input.SubnetIds, context) }),
  };
};

/**
 * deserializeAws_json1_1AccessEndpoint
 */
const de_AccessEndpoint = (output: any, context: __SerdeContext): AccessEndpoint => {
  return {
    EndpointType: __expectString(output.EndpointType),
    VpceId: __expectString(output.VpceId),
  } as any;
};

/**
 * deserializeAws_json1_1AccessEndpointList
 */
const de_AccessEndpointList = (output: any, context: __SerdeContext): AccessEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppBlock
 */
const de_AppBlock = (output: any, context: __SerdeContext): AppBlock => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    Name: __expectString(output.Name),
    SetupScriptDetails:
      output.SetupScriptDetails != null ? de_ScriptDetails(output.SetupScriptDetails, context) : undefined,
    SourceS3Location: output.SourceS3Location != null ? de_S3Location(output.SourceS3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AppBlocks
 */
const de_AppBlocks = (output: any, context: __SerdeContext): AppBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppBlock(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return {
    AppBlockArn: __expectString(output.AppBlockArn),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    Enabled: __expectBoolean(output.Enabled),
    IconS3Location: output.IconS3Location != null ? de_S3Location(output.IconS3Location, context) : undefined,
    IconURL: __expectString(output.IconURL),
    InstanceFamilies: output.InstanceFamilies != null ? de_StringList(output.InstanceFamilies, context) : undefined,
    LaunchParameters: __expectString(output.LaunchParameters),
    LaunchPath: __expectString(output.LaunchPath),
    Metadata: output.Metadata != null ? de_Metadata(output.Metadata, context) : undefined,
    Name: __expectString(output.Name),
    Platforms: output.Platforms != null ? de_Platforms(output.Platforms, context) : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationFleetAssociation
 */
const de_ApplicationFleetAssociation = (output: any, context: __SerdeContext): ApplicationFleetAssociation => {
  return {
    ApplicationArn: __expectString(output.ApplicationArn),
    FleetName: __expectString(output.FleetName),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationFleetAssociationList
 */
const de_ApplicationFleetAssociationList = (output: any, context: __SerdeContext): ApplicationFleetAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationFleetAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Applications
 */
const de_Applications = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Application(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApplicationSettingsResponse
 */
const de_ApplicationSettingsResponse = (output: any, context: __SerdeContext): ApplicationSettingsResponse => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    S3BucketName: __expectString(output.S3BucketName),
    SettingsGroup: __expectString(output.SettingsGroup),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateApplicationFleetResult
 */
const de_AssociateApplicationFleetResult = (output: any, context: __SerdeContext): AssociateApplicationFleetResult => {
  return {
    ApplicationFleetAssociation:
      output.ApplicationFleetAssociation != null
        ? de_ApplicationFleetAssociation(output.ApplicationFleetAssociation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociateApplicationToEntitlementResult
 */
const de_AssociateApplicationToEntitlementResult = (
  output: any,
  context: __SerdeContext
): AssociateApplicationToEntitlementResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateFleetResult
 */
const de_AssociateFleetResult = (output: any, context: __SerdeContext): AssociateFleetResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1BatchAssociateUserStackResult
 */
const de_BatchAssociateUserStackResult = (output: any, context: __SerdeContext): BatchAssociateUserStackResult => {
  return {
    errors: output.errors != null ? de_UserStackAssociationErrorList(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDisassociateUserStackResult
 */
const de_BatchDisassociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchDisassociateUserStackResult => {
  return {
    errors: output.errors != null ? de_UserStackAssociationErrorList(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CertificateBasedAuthProperties
 */
const de_CertificateBasedAuthProperties = (output: any, context: __SerdeContext): CertificateBasedAuthProperties => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ComputeCapacityStatus
 */
const de_ComputeCapacityStatus = (output: any, context: __SerdeContext): ComputeCapacityStatus => {
  return {
    Available: __expectInt32(output.Available),
    Desired: __expectInt32(output.Desired),
    InUse: __expectInt32(output.InUse),
    Running: __expectInt32(output.Running),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CopyImageResponse
 */
const de_CopyImageResponse = (output: any, context: __SerdeContext): CopyImageResponse => {
  return {
    DestinationImageName: __expectString(output.DestinationImageName),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAppBlockResult
 */
const de_CreateAppBlockResult = (output: any, context: __SerdeContext): CreateAppBlockResult => {
  return {
    AppBlock: output.AppBlock != null ? de_AppBlock(output.AppBlock, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateApplicationResult
 */
const de_CreateApplicationResult = (output: any, context: __SerdeContext): CreateApplicationResult => {
  return {
    Application: output.Application != null ? de_Application(output.Application, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDirectoryConfigResult
 */
const de_CreateDirectoryConfigResult = (output: any, context: __SerdeContext): CreateDirectoryConfigResult => {
  return {
    DirectoryConfig: output.DirectoryConfig != null ? de_DirectoryConfig(output.DirectoryConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateEntitlementResult
 */
const de_CreateEntitlementResult = (output: any, context: __SerdeContext): CreateEntitlementResult => {
  return {
    Entitlement: output.Entitlement != null ? de_Entitlement(output.Entitlement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFleetResult
 */
const de_CreateFleetResult = (output: any, context: __SerdeContext): CreateFleetResult => {
  return {
    Fleet: output.Fleet != null ? de_Fleet(output.Fleet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateImageBuilderResult
 */
const de_CreateImageBuilderResult = (output: any, context: __SerdeContext): CreateImageBuilderResult => {
  return {
    ImageBuilder: output.ImageBuilder != null ? de_ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateImageBuilderStreamingURLResult
 */
const de_CreateImageBuilderStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderStreamingURLResult => {
  return {
    Expires:
      output.Expires != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expires))) : undefined,
    StreamingURL: __expectString(output.StreamingURL),
  } as any;
};

/**
 * deserializeAws_json1_1CreateStackResult
 */
const de_CreateStackResult = (output: any, context: __SerdeContext): CreateStackResult => {
  return {
    Stack: output.Stack != null ? de_Stack(output.Stack, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateStreamingURLResult
 */
const de_CreateStreamingURLResult = (output: any, context: __SerdeContext): CreateStreamingURLResult => {
  return {
    Expires:
      output.Expires != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expires))) : undefined,
    StreamingURL: __expectString(output.StreamingURL),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUpdatedImageResult
 */
const de_CreateUpdatedImageResult = (output: any, context: __SerdeContext): CreateUpdatedImageResult => {
  return {
    canUpdateImage: __expectBoolean(output.canUpdateImage),
    image: output.image != null ? de_Image(output.image, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUsageReportSubscriptionResult
 */
const de_CreateUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateUsageReportSubscriptionResult => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    Schedule: __expectString(output.Schedule),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserResult
 */
const de_CreateUserResult = (output: any, context: __SerdeContext): CreateUserResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAppBlockResult
 */
const de_DeleteAppBlockResult = (output: any, context: __SerdeContext): DeleteAppBlockResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationResult
 */
const de_DeleteApplicationResult = (output: any, context: __SerdeContext): DeleteApplicationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDirectoryConfigResult
 */
const de_DeleteDirectoryConfigResult = (output: any, context: __SerdeContext): DeleteDirectoryConfigResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEntitlementResult
 */
const de_DeleteEntitlementResult = (output: any, context: __SerdeContext): DeleteEntitlementResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteFleetResult
 */
const de_DeleteFleetResult = (output: any, context: __SerdeContext): DeleteFleetResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteImageBuilderResult
 */
const de_DeleteImageBuilderResult = (output: any, context: __SerdeContext): DeleteImageBuilderResult => {
  return {
    ImageBuilder: output.ImageBuilder != null ? de_ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteImagePermissionsResult
 */
const de_DeleteImagePermissionsResult = (output: any, context: __SerdeContext): DeleteImagePermissionsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteImageResult
 */
const de_DeleteImageResult = (output: any, context: __SerdeContext): DeleteImageResult => {
  return {
    Image: output.Image != null ? de_Image(output.Image, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteStackResult
 */
const de_DeleteStackResult = (output: any, context: __SerdeContext): DeleteStackResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUsageReportSubscriptionResult
 */
const de_DeleteUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteUsageReportSubscriptionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUserResult
 */
const de_DeleteUserResult = (output: any, context: __SerdeContext): DeleteUserResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAppBlocksResult
 */
const de_DescribeAppBlocksResult = (output: any, context: __SerdeContext): DescribeAppBlocksResult => {
  return {
    AppBlocks: output.AppBlocks != null ? de_AppBlocks(output.AppBlocks, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationFleetAssociationsResult
 */
const de_DescribeApplicationFleetAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationFleetAssociationsResult => {
  return {
    ApplicationFleetAssociations:
      output.ApplicationFleetAssociations != null
        ? de_ApplicationFleetAssociationList(output.ApplicationFleetAssociations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationsResult
 */
const de_DescribeApplicationsResult = (output: any, context: __SerdeContext): DescribeApplicationsResult => {
  return {
    Applications: output.Applications != null ? de_Applications(output.Applications, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDirectoryConfigsResult
 */
const de_DescribeDirectoryConfigsResult = (output: any, context: __SerdeContext): DescribeDirectoryConfigsResult => {
  return {
    DirectoryConfigs:
      output.DirectoryConfigs != null ? de_DirectoryConfigList(output.DirectoryConfigs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEntitlementsResult
 */
const de_DescribeEntitlementsResult = (output: any, context: __SerdeContext): DescribeEntitlementsResult => {
  return {
    Entitlements: output.Entitlements != null ? de_EntitlementList(output.Entitlements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFleetsResult
 */
const de_DescribeFleetsResult = (output: any, context: __SerdeContext): DescribeFleetsResult => {
  return {
    Fleets: output.Fleets != null ? de_FleetList(output.Fleets, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImageBuildersResult
 */
const de_DescribeImageBuildersResult = (output: any, context: __SerdeContext): DescribeImageBuildersResult => {
  return {
    ImageBuilders: output.ImageBuilders != null ? de_ImageBuilderList(output.ImageBuilders, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImagePermissionsResult
 */
const de_DescribeImagePermissionsResult = (output: any, context: __SerdeContext): DescribeImagePermissionsResult => {
  return {
    Name: __expectString(output.Name),
    NextToken: __expectString(output.NextToken),
    SharedImagePermissionsList:
      output.SharedImagePermissionsList != null
        ? de_SharedImagePermissionsList(output.SharedImagePermissionsList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeImagesResult
 */
const de_DescribeImagesResult = (output: any, context: __SerdeContext): DescribeImagesResult => {
  return {
    Images: output.Images != null ? de_ImageList(output.Images, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSessionsResult
 */
const de_DescribeSessionsResult = (output: any, context: __SerdeContext): DescribeSessionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? de_SessionList(output.Sessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStacksResult
 */
const de_DescribeStacksResult = (output: any, context: __SerdeContext): DescribeStacksResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Stacks: output.Stacks != null ? de_StackList(output.Stacks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUsageReportSubscriptionsResult
 */
const de_DescribeUsageReportSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): DescribeUsageReportSubscriptionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    UsageReportSubscriptions:
      output.UsageReportSubscriptions != null
        ? de_UsageReportSubscriptionList(output.UsageReportSubscriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUsersResult
 */
const de_DescribeUsersResult = (output: any, context: __SerdeContext): DescribeUsersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? de_UserList(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserStackAssociationsResult
 */
const de_DescribeUserStackAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeUserStackAssociationsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    UserStackAssociations:
      output.UserStackAssociations != null
        ? de_UserStackAssociationList(output.UserStackAssociations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryConfig
 */
const de_DirectoryConfig = (output: any, context: __SerdeContext): DirectoryConfig => {
  return {
    CertificateBasedAuthProperties:
      output.CertificateBasedAuthProperties != null
        ? de_CertificateBasedAuthProperties(output.CertificateBasedAuthProperties, context)
        : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DirectoryName: __expectString(output.DirectoryName),
    OrganizationalUnitDistinguishedNames:
      output.OrganizationalUnitDistinguishedNames != null
        ? de_OrganizationalUnitDistinguishedNamesList(output.OrganizationalUnitDistinguishedNames, context)
        : undefined,
    ServiceAccountCredentials:
      output.ServiceAccountCredentials != null
        ? de_ServiceAccountCredentials(output.ServiceAccountCredentials, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryConfigList
 */
const de_DirectoryConfigList = (output: any, context: __SerdeContext): DirectoryConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DirectoryConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DisableUserResult
 */
const de_DisableUserResult = (output: any, context: __SerdeContext): DisableUserResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateApplicationFleetResult
 */
const de_DisassociateApplicationFleetResult = (
  output: any,
  context: __SerdeContext
): DisassociateApplicationFleetResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateApplicationFromEntitlementResult
 */
const de_DisassociateApplicationFromEntitlementResult = (
  output: any,
  context: __SerdeContext
): DisassociateApplicationFromEntitlementResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateFleetResult
 */
const de_DisassociateFleetResult = (output: any, context: __SerdeContext): DisassociateFleetResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DomainJoinInfo
 */
const de_DomainJoinInfo = (output: any, context: __SerdeContext): DomainJoinInfo => {
  return {
    DirectoryName: __expectString(output.DirectoryName),
    OrganizationalUnitDistinguishedName: __expectString(output.OrganizationalUnitDistinguishedName),
  } as any;
};

/**
 * deserializeAws_json1_1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EmbedHostDomains
 */
const de_EmbedHostDomains = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnableUserResult
 */
const de_EnableUserResult = (output: any, context: __SerdeContext): EnableUserResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EntitledApplication
 */
const de_EntitledApplication = (output: any, context: __SerdeContext): EntitledApplication => {
  return {
    ApplicationIdentifier: __expectString(output.ApplicationIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1EntitledApplicationList
 */
const de_EntitledApplicationList = (output: any, context: __SerdeContext): EntitledApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntitledApplication(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Entitlement
 */
const de_Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    AppVisibility: __expectString(output.AppVisibility),
    Attributes: output.Attributes != null ? de_EntitlementAttributeList(output.Attributes, context) : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    StackName: __expectString(output.StackName),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementAlreadyExistsException
 */
const de_EntitlementAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EntitlementAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementAttribute
 */
const de_EntitlementAttribute = (output: any, context: __SerdeContext): EntitlementAttribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EntitlementAttributeList
 */
const de_EntitlementAttributeList = (output: any, context: __SerdeContext): EntitlementAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntitlementAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntitlementList
 */
const de_EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Entitlement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntitlementNotFoundException
 */
const de_EntitlementNotFoundException = (output: any, context: __SerdeContext): EntitlementNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ExpireSessionResult
 */
const de_ExpireSessionResult = (output: any, context: __SerdeContext): ExpireSessionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Fleet
 */
const de_Fleet = (output: any, context: __SerdeContext): Fleet => {
  return {
    Arn: __expectString(output.Arn),
    ComputeCapacityStatus:
      output.ComputeCapacityStatus != null
        ? de_ComputeCapacityStatus(output.ComputeCapacityStatus, context)
        : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisconnectTimeoutInSeconds: __expectInt32(output.DisconnectTimeoutInSeconds),
    DisplayName: __expectString(output.DisplayName),
    DomainJoinInfo: output.DomainJoinInfo != null ? de_DomainJoinInfo(output.DomainJoinInfo, context) : undefined,
    EnableDefaultInternetAccess: __expectBoolean(output.EnableDefaultInternetAccess),
    FleetErrors: output.FleetErrors != null ? de_FleetErrors(output.FleetErrors, context) : undefined,
    FleetType: __expectString(output.FleetType),
    IamRoleArn: __expectString(output.IamRoleArn),
    IdleDisconnectTimeoutInSeconds: __expectInt32(output.IdleDisconnectTimeoutInSeconds),
    ImageArn: __expectString(output.ImageArn),
    ImageName: __expectString(output.ImageName),
    InstanceType: __expectString(output.InstanceType),
    MaxConcurrentSessions: __expectInt32(output.MaxConcurrentSessions),
    MaxUserDurationInSeconds: __expectInt32(output.MaxUserDurationInSeconds),
    Name: __expectString(output.Name),
    Platform: __expectString(output.Platform),
    SessionScriptS3Location:
      output.SessionScriptS3Location != null ? de_S3Location(output.SessionScriptS3Location, context) : undefined,
    State: __expectString(output.State),
    StreamView: __expectString(output.StreamView),
    UsbDeviceFilterStrings:
      output.UsbDeviceFilterStrings != null
        ? de_UsbDeviceFilterStrings(output.UsbDeviceFilterStrings, context)
        : undefined,
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FleetError
 */
const de_FleetError = (output: any, context: __SerdeContext): FleetError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FleetErrors
 */
const de_FleetErrors = (output: any, context: __SerdeContext): FleetError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FleetError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FleetList
 */
const de_FleetList = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Fleet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return {
    Applications: output.Applications != null ? de_Applications(output.Applications, context) : undefined,
    AppstreamAgentVersion: __expectString(output.AppstreamAgentVersion),
    Arn: __expectString(output.Arn),
    BaseImageArn: __expectString(output.BaseImageArn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    ImageBuilderName: __expectString(output.ImageBuilderName),
    ImageBuilderSupported: __expectBoolean(output.ImageBuilderSupported),
    ImageErrors: output.ImageErrors != null ? de_ResourceErrors(output.ImageErrors, context) : undefined,
    ImagePermissions:
      output.ImagePermissions != null ? de_ImagePermissions(output.ImagePermissions, context) : undefined,
    Name: __expectString(output.Name),
    Platform: __expectString(output.Platform),
    PublicBaseImageReleasedDate:
      output.PublicBaseImageReleasedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PublicBaseImageReleasedDate)))
        : undefined,
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null ? de_ImageStateChangeReason(output.StateChangeReason, context) : undefined,
    Visibility: __expectString(output.Visibility),
  } as any;
};

/**
 * deserializeAws_json1_1ImageBuilder
 */
const de_ImageBuilder = (output: any, context: __SerdeContext): ImageBuilder => {
  return {
    AccessEndpoints:
      output.AccessEndpoints != null ? de_AccessEndpointList(output.AccessEndpoints, context) : undefined,
    AppstreamAgentVersion: __expectString(output.AppstreamAgentVersion),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    DomainJoinInfo: output.DomainJoinInfo != null ? de_DomainJoinInfo(output.DomainJoinInfo, context) : undefined,
    EnableDefaultInternetAccess: __expectBoolean(output.EnableDefaultInternetAccess),
    IamRoleArn: __expectString(output.IamRoleArn),
    ImageArn: __expectString(output.ImageArn),
    ImageBuilderErrors:
      output.ImageBuilderErrors != null ? de_ResourceErrors(output.ImageBuilderErrors, context) : undefined,
    InstanceType: __expectString(output.InstanceType),
    Name: __expectString(output.Name),
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration != null
        ? de_NetworkAccessConfiguration(output.NetworkAccessConfiguration, context)
        : undefined,
    Platform: __expectString(output.Platform),
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? de_ImageBuilderStateChangeReason(output.StateChangeReason, context)
        : undefined,
    VpcConfig: output.VpcConfig != null ? de_VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImageBuilderList
 */
const de_ImageBuilderList = (output: any, context: __SerdeContext): ImageBuilder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageBuilder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageBuilderStateChangeReason
 */
const de_ImageBuilderStateChangeReason = (output: any, context: __SerdeContext): ImageBuilderStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ImageList
 */
const de_ImageList = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Image(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImagePermissions
 */
const de_ImagePermissions = (output: any, context: __SerdeContext): ImagePermissions => {
  return {
    allowFleet: __expectBoolean(output.allowFleet),
    allowImageBuilder: __expectBoolean(output.allowImageBuilder),
  } as any;
};

/**
 * deserializeAws_json1_1ImageStateChangeReason
 */
const de_ImageStateChangeReason = (output: any, context: __SerdeContext): ImageStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IncompatibleImageException
 */
const de_IncompatibleImageException = (output: any, context: __SerdeContext): IncompatibleImageException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAccountStatusException
 */
const de_InvalidAccountStatusException = (output: any, context: __SerdeContext): InvalidAccountStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationException
 */
const de_InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRoleException
 */
const de_InvalidRoleException = (output: any, context: __SerdeContext): InvalidRoleException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LastReportGenerationExecutionError
 */
const de_LastReportGenerationExecutionError = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1LastReportGenerationExecutionErrors
 */
const de_LastReportGenerationExecutionErrors = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LastReportGenerationExecutionError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssociatedFleetsResult
 */
const de_ListAssociatedFleetsResult = (output: any, context: __SerdeContext): ListAssociatedFleetsResult => {
  return {
    Names: output.Names != null ? de_StringList(output.Names, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssociatedStacksResult
 */
const de_ListAssociatedStacksResult = (output: any, context: __SerdeContext): ListAssociatedStacksResult => {
  return {
    Names: output.Names != null ? de_StringList(output.Names, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEntitledApplicationsResult
 */
const de_ListEntitledApplicationsResult = (output: any, context: __SerdeContext): ListEntitledApplicationsResult => {
  return {
    EntitledApplications:
      output.EntitledApplications != null
        ? de_EntitledApplicationList(output.EntitledApplications, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Metadata
 */
const de_Metadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1NetworkAccessConfiguration
 */
const de_NetworkAccessConfiguration = (output: any, context: __SerdeContext): NetworkAccessConfiguration => {
  return {
    EniId: __expectString(output.EniId),
    EniPrivateIpAddress: __expectString(output.EniPrivateIpAddress),
  } as any;
};

/**
 * deserializeAws_json1_1OperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList
 */
const de_OrganizationalUnitDistinguishedNamesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Platforms
 */
const de_Platforms = (output: any, context: __SerdeContext): (PlatformType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RequestLimitExceededException
 */
const de_RequestLimitExceededException = (output: any, context: __SerdeContext): RequestLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceError
 */
const de_ResourceError = (output: any, context: __SerdeContext): ResourceError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorTimestamp:
      output.ErrorTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ErrorTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceErrors
 */
const de_ResourceErrors = (output: any, context: __SerdeContext): ResourceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotAvailableException
 */
const de_ResourceNotAvailableException = (output: any, context: __SerdeContext): ResourceNotAvailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
  } as any;
};

/**
 * deserializeAws_json1_1ScriptDetails
 */
const de_ScriptDetails = (output: any, context: __SerdeContext): ScriptDetails => {
  return {
    ExecutableParameters: __expectString(output.ExecutableParameters),
    ExecutablePath: __expectString(output.ExecutablePath),
    ScriptS3Location: output.ScriptS3Location != null ? de_S3Location(output.ScriptS3Location, context) : undefined,
    TimeoutInSeconds: __expectInt32(output.TimeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceAccountCredentials
 */
const de_ServiceAccountCredentials = (output: any, context: __SerdeContext): ServiceAccountCredentials => {
  return {
    AccountName: __expectString(output.AccountName),
    AccountPassword: __expectString(output.AccountPassword),
  } as any;
};

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    ConnectionState: __expectString(output.ConnectionState),
    FleetName: __expectString(output.FleetName),
    Id: __expectString(output.Id),
    MaxExpirationTime:
      output.MaxExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MaxExpirationTime)))
        : undefined,
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration != null
        ? de_NetworkAccessConfiguration(output.NetworkAccessConfiguration, context)
        : undefined,
    StackName: __expectString(output.StackName),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_json1_1SessionList
 */
const de_SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Session(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SharedImagePermissions
 */
const de_SharedImagePermissions = (output: any, context: __SerdeContext): SharedImagePermissions => {
  return {
    imagePermissions:
      output.imagePermissions != null ? de_ImagePermissions(output.imagePermissions, context) : undefined,
    sharedAccountId: __expectString(output.sharedAccountId),
  } as any;
};

/**
 * deserializeAws_json1_1SharedImagePermissionsList
 */
const de_SharedImagePermissionsList = (output: any, context: __SerdeContext): SharedImagePermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SharedImagePermissions(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Stack
 */
const de_Stack = (output: any, context: __SerdeContext): Stack => {
  return {
    AccessEndpoints:
      output.AccessEndpoints != null ? de_AccessEndpointList(output.AccessEndpoints, context) : undefined,
    ApplicationSettings:
      output.ApplicationSettings != null
        ? de_ApplicationSettingsResponse(output.ApplicationSettings, context)
        : undefined,
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    EmbedHostDomains:
      output.EmbedHostDomains != null ? de_EmbedHostDomains(output.EmbedHostDomains, context) : undefined,
    FeedbackURL: __expectString(output.FeedbackURL),
    Name: __expectString(output.Name),
    RedirectURL: __expectString(output.RedirectURL),
    StackErrors: output.StackErrors != null ? de_StackErrors(output.StackErrors, context) : undefined,
    StorageConnectors:
      output.StorageConnectors != null ? de_StorageConnectorList(output.StorageConnectors, context) : undefined,
    StreamingExperienceSettings:
      output.StreamingExperienceSettings != null
        ? de_StreamingExperienceSettings(output.StreamingExperienceSettings, context)
        : undefined,
    UserSettings: output.UserSettings != null ? de_UserSettingList(output.UserSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StackError
 */
const de_StackError = (output: any, context: __SerdeContext): StackError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1StackErrors
 */
const de_StackErrors = (output: any, context: __SerdeContext): StackError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StackError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StackList
 */
const de_StackList = (output: any, context: __SerdeContext): Stack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Stack(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartFleetResult
 */
const de_StartFleetResult = (output: any, context: __SerdeContext): StartFleetResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartImageBuilderResult
 */
const de_StartImageBuilderResult = (output: any, context: __SerdeContext): StartImageBuilderResult => {
  return {
    ImageBuilder: output.ImageBuilder != null ? de_ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopFleetResult
 */
const de_StopFleetResult = (output: any, context: __SerdeContext): StopFleetResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StopImageBuilderResult
 */
const de_StopImageBuilderResult = (output: any, context: __SerdeContext): StopImageBuilderResult => {
  return {
    ImageBuilder: output.ImageBuilder != null ? de_ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StorageConnector
 */
const de_StorageConnector = (output: any, context: __SerdeContext): StorageConnector => {
  return {
    ConnectorType: __expectString(output.ConnectorType),
    Domains: output.Domains != null ? de_DomainList(output.Domains, context) : undefined,
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1StorageConnectorList
 */
const de_StorageConnectorList = (output: any, context: __SerdeContext): StorageConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StorageConnector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StreamingExperienceSettings
 */
const de_StreamingExperienceSettings = (output: any, context: __SerdeContext): StreamingExperienceSettings => {
  return {
    PreferredProtocol: __expectString(output.PreferredProtocol),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateApplicationResult
 */
const de_UpdateApplicationResult = (output: any, context: __SerdeContext): UpdateApplicationResult => {
  return {
    Application: output.Application != null ? de_Application(output.Application, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDirectoryConfigResult
 */
const de_UpdateDirectoryConfigResult = (output: any, context: __SerdeContext): UpdateDirectoryConfigResult => {
  return {
    DirectoryConfig: output.DirectoryConfig != null ? de_DirectoryConfig(output.DirectoryConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateEntitlementResult
 */
const de_UpdateEntitlementResult = (output: any, context: __SerdeContext): UpdateEntitlementResult => {
  return {
    Entitlement: output.Entitlement != null ? de_Entitlement(output.Entitlement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFleetResult
 */
const de_UpdateFleetResult = (output: any, context: __SerdeContext): UpdateFleetResult => {
  return {
    Fleet: output.Fleet != null ? de_Fleet(output.Fleet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateImagePermissionsResult
 */
const de_UpdateImagePermissionsResult = (output: any, context: __SerdeContext): UpdateImagePermissionsResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateStackResult
 */
const de_UpdateStackResult = (output: any, context: __SerdeContext): UpdateStackResult => {
  return {
    Stack: output.Stack != null ? de_Stack(output.Stack, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageReportSubscription
 */
const de_UsageReportSubscription = (output: any, context: __SerdeContext): UsageReportSubscription => {
  return {
    LastGeneratedReportDate:
      output.LastGeneratedReportDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastGeneratedReportDate)))
        : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    Schedule: __expectString(output.Schedule),
    SubscriptionErrors:
      output.SubscriptionErrors != null
        ? de_LastReportGenerationExecutionErrors(output.SubscriptionErrors, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageReportSubscriptionList
 */
const de_UsageReportSubscriptionList = (output: any, context: __SerdeContext): UsageReportSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageReportSubscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsbDeviceFilterStrings
 */
const de_UsbDeviceFilterStrings = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return {
    Arn: __expectString(output.Arn),
    AuthenticationType: __expectString(output.AuthenticationType),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    Status: __expectString(output.Status),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_User(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserSetting
 */
const de_UserSetting = (output: any, context: __SerdeContext): UserSetting => {
  return {
    Action: __expectString(output.Action),
    Permission: __expectString(output.Permission),
  } as any;
};

/**
 * deserializeAws_json1_1UserSettingList
 */
const de_UserSettingList = (output: any, context: __SerdeContext): UserSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserStackAssociation
 */
const de_UserStackAssociation = (output: any, context: __SerdeContext): UserStackAssociation => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    SendEmailNotification: __expectBoolean(output.SendEmailNotification),
    StackName: __expectString(output.StackName),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1UserStackAssociationError
 */
const de_UserStackAssociationError = (output: any, context: __SerdeContext): UserStackAssociationError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    UserStackAssociation:
      output.UserStackAssociation != null ? de_UserStackAssociation(output.UserStackAssociation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserStackAssociationErrorList
 */
const de_UserStackAssociationErrorList = (output: any, context: __SerdeContext): UserStackAssociationError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserStackAssociationError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserStackAssociationList
 */
const de_UserStackAssociationList = (output: any, context: __SerdeContext): UserStackAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserStackAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIdList(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIdList(output.SubnetIds, context) : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
