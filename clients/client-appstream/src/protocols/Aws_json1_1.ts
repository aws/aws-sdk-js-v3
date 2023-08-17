// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateAppBlockBuilderAppBlockCommandInput,
  AssociateAppBlockBuilderAppBlockCommandOutput,
} from "../commands/AssociateAppBlockBuilderAppBlockCommand";
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
import {
  CreateAppBlockBuilderCommandInput,
  CreateAppBlockBuilderCommandOutput,
} from "../commands/CreateAppBlockBuilderCommand";
import {
  CreateAppBlockBuilderStreamingURLCommandInput,
  CreateAppBlockBuilderStreamingURLCommandOutput,
} from "../commands/CreateAppBlockBuilderStreamingURLCommand";
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
import {
  DeleteAppBlockBuilderCommandInput,
  DeleteAppBlockBuilderCommandOutput,
} from "../commands/DeleteAppBlockBuilderCommand";
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
import {
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
} from "../commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import {
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput,
} from "../commands/DescribeAppBlockBuildersCommand";
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
  DisassociateAppBlockBuilderAppBlockCommandInput,
  DisassociateAppBlockBuilderAppBlockCommandOutput,
} from "../commands/DisassociateAppBlockBuilderAppBlockCommand";
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
import {
  StartAppBlockBuilderCommandInput,
  StartAppBlockBuilderCommandOutput,
} from "../commands/StartAppBlockBuilderCommand";
import { StartFleetCommandInput, StartFleetCommandOutput } from "../commands/StartFleetCommand";
import { StartImageBuilderCommandInput, StartImageBuilderCommandOutput } from "../commands/StartImageBuilderCommand";
import {
  StopAppBlockBuilderCommandInput,
  StopAppBlockBuilderCommandOutput,
} from "../commands/StopAppBlockBuilderCommand";
import { StopFleetCommandInput, StopFleetCommandOutput } from "../commands/StopFleetCommand";
import { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "../commands/StopImageBuilderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAppBlockBuilderCommandInput,
  UpdateAppBlockBuilderCommandOutput,
} from "../commands/UpdateAppBlockBuilderCommand";
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
  AppBlockBuilder,
  AppBlockBuilderAttribute,
  Application,
  ApplicationAttribute,
  ApplicationSettings,
  AssociateAppBlockBuilderAppBlockRequest,
  AssociateApplicationFleetRequest,
  AssociateApplicationToEntitlementRequest,
  AssociateFleetRequest,
  BatchAssociateUserStackRequest,
  BatchDisassociateUserStackRequest,
  CertificateBasedAuthProperties,
  ComputeCapacity,
  ConcurrentModificationException,
  CopyImageRequest,
  CreateAppBlockBuilderRequest,
  CreateAppBlockBuilderResult,
  CreateAppBlockBuilderStreamingURLRequest,
  CreateAppBlockBuilderStreamingURLResult,
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
  CreateUserRequest,
  DeleteAppBlockBuilderRequest,
  DeleteAppBlockRequest,
  DeleteApplicationRequest,
  DeleteDirectoryConfigRequest,
  DeleteEntitlementRequest,
  DeleteFleetRequest,
  DeleteImageBuilderRequest,
  DeleteImageBuilderResult,
  DeleteImagePermissionsRequest,
  DeleteImageRequest,
  DeleteImageResult,
  DeleteStackRequest,
  DeleteUsageReportSubscriptionRequest,
  DeleteUserRequest,
  DescribeAppBlockBuilderAppBlockAssociationsRequest,
  DescribeAppBlockBuildersRequest,
  DescribeAppBlockBuildersResult,
  DescribeAppBlocksRequest,
  DescribeAppBlocksResult,
  DescribeApplicationFleetAssociationsRequest,
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
  DirectoryConfig,
  DisableUserRequest,
  DisassociateAppBlockBuilderAppBlockRequest,
  DisassociateApplicationFleetRequest,
  DisassociateApplicationFromEntitlementRequest,
  DisassociateFleetRequest,
  DomainJoinInfo,
  EnableUserRequest,
  Entitlement,
  EntitlementAlreadyExistsException,
  EntitlementAttribute,
  EntitlementNotFoundException,
  ExpireSessionRequest,
  Fleet,
  FleetAttribute,
  Image,
  ImageBuilder,
  ImagePermissions,
  IncompatibleImageException,
  InvalidAccountStatusException,
  InvalidParameterCombinationException,
  InvalidRoleException,
  LimitExceededException,
  ListAssociatedFleetsRequest,
  ListAssociatedStacksRequest,
  ListEntitledApplicationsRequest,
  ListTagsForResourceRequest,
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
  Stack,
  StackAttribute,
  StartAppBlockBuilderRequest,
  StartAppBlockBuilderResult,
  StartFleetRequest,
  StartImageBuilderRequest,
  StartImageBuilderResult,
  StopAppBlockBuilderRequest,
  StopAppBlockBuilderResult,
  StopFleetRequest,
  StopImageBuilderRequest,
  StopImageBuilderResult,
  StorageConnector,
  StreamingExperienceSettings,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateAppBlockBuilderRequest,
  UpdateAppBlockBuilderResult,
  UpdateApplicationRequest,
  UpdateApplicationResult,
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigResult,
  UpdateEntitlementRequest,
  UpdateEntitlementResult,
  UpdateFleetRequest,
  UpdateFleetResult,
  UpdateImagePermissionsRequest,
  UpdateStackRequest,
  UpdateStackResult,
  UsageReportSubscription,
  User,
  UserSetting,
  UserStackAssociation,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateAppBlockBuilderAppBlockCommand
 */
export const se_AssociateAppBlockBuilderAppBlockCommand = async (
  input: AssociateAppBlockBuilderAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateAppBlockBuilderAppBlock");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateApplicationFleetCommand
 */
export const se_AssociateApplicationFleetCommand = async (
  input: AssociateApplicationFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateApplicationFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateApplicationToEntitlementCommand
 */
export const se_AssociateApplicationToEntitlementCommand = async (
  input: AssociateApplicationToEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateApplicationToEntitlement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateFleetCommand
 */
export const se_AssociateFleetCommand = async (
  input: AssociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateUserStackCommand
 */
export const se_BatchAssociateUserStackCommand = async (
  input: BatchAssociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchAssociateUserStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateUserStackCommand
 */
export const se_BatchDisassociateUserStackCommand = async (
  input: BatchDisassociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDisassociateUserStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyImageCommand
 */
export const se_CopyImageCommand = async (
  input: CopyImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopyImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppBlockCommand
 */
export const se_CreateAppBlockCommand = async (
  input: CreateAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAppBlock");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppBlockBuilderCommand
 */
export const se_CreateAppBlockBuilderCommand = async (
  input: CreateAppBlockBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAppBlockBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppBlockBuilderStreamingURLCommand
 */
export const se_CreateAppBlockBuilderStreamingURLCommand = async (
  input: CreateAppBlockBuilderStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAppBlockBuilderStreamingURL");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectoryConfigCommand
 */
export const se_CreateDirectoryConfigCommand = async (
  input: CreateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDirectoryConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEntitlementCommand
 */
export const se_CreateEntitlementCommand = async (
  input: CreateEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEntitlement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageBuilderCommand
 */
export const se_CreateImageBuilderCommand = async (
  input: CreateImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImageBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageBuilderStreamingURLCommand
 */
export const se_CreateImageBuilderStreamingURLCommand = async (
  input: CreateImageBuilderStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImageBuilderStreamingURL");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStackCommand
 */
export const se_CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStreamingURLCommand
 */
export const se_CreateStreamingURLCommand = async (
  input: CreateStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStreamingURL");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUpdatedImageCommand
 */
export const se_CreateUpdatedImageCommand = async (
  input: CreateUpdatedImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUpdatedImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUsageReportSubscriptionCommand
 */
export const se_CreateUsageReportSubscriptionCommand = async (
  input: CreateUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUsageReportSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppBlockCommand
 */
export const se_DeleteAppBlockCommand = async (
  input: DeleteAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppBlock");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppBlockBuilderCommand
 */
export const se_DeleteAppBlockBuilderCommand = async (
  input: DeleteAppBlockBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppBlockBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectoryConfigCommand
 */
export const se_DeleteDirectoryConfigCommand = async (
  input: DeleteDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDirectoryConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEntitlementCommand
 */
export const se_DeleteEntitlementCommand = async (
  input: DeleteEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEntitlement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageCommand
 */
export const se_DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageBuilderCommand
 */
export const se_DeleteImageBuilderCommand = async (
  input: DeleteImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImageBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImagePermissionsCommand
 */
export const se_DeleteImagePermissionsCommand = async (
  input: DeleteImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImagePermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStackCommand
 */
export const se_DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUsageReportSubscriptionCommand
 */
export const se_DeleteUsageReportSubscriptionCommand = async (
  input: DeleteUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUsageReportSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppBlockBuilderAppBlockAssociationsCommand
 */
export const se_DescribeAppBlockBuilderAppBlockAssociationsCommand = async (
  input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAppBlockBuilderAppBlockAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppBlockBuildersCommand
 */
export const se_DescribeAppBlockBuildersCommand = async (
  input: DescribeAppBlockBuildersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAppBlockBuilders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppBlocksCommand
 */
export const se_DescribeAppBlocksCommand = async (
  input: DescribeAppBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAppBlocks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationFleetAssociationsCommand
 */
export const se_DescribeApplicationFleetAssociationsCommand = async (
  input: DescribeApplicationFleetAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationFleetAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationsCommand
 */
export const se_DescribeApplicationsCommand = async (
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectoryConfigsCommand
 */
export const se_DescribeDirectoryConfigsCommand = async (
  input: DescribeDirectoryConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDirectoryConfigs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntitlementsCommand
 */
export const se_DescribeEntitlementsCommand = async (
  input: DescribeEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntitlements");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFleetsCommand
 */
export const se_DescribeFleetsCommand = async (
  input: DescribeFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageBuildersCommand
 */
export const se_DescribeImageBuildersCommand = async (
  input: DescribeImageBuildersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageBuilders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImagePermissionsCommand
 */
export const se_DescribeImagePermissionsCommand = async (
  input: DescribeImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImagePermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImagesCommand
 */
export const se_DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSessionsCommand
 */
export const se_DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStacksCommand
 */
export const se_DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStacks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUsageReportSubscriptionsCommand
 */
export const se_DescribeUsageReportSubscriptionsCommand = async (
  input: DescribeUsageReportSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUsageReportSubscriptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUsersCommand
 */
export const se_DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUsers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserStackAssociationsCommand
 */
export const se_DescribeUserStackAssociationsCommand = async (
  input: DescribeUserStackAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserStackAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableUserCommand
 */
export const se_DisableUserCommand = async (
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateAppBlockBuilderAppBlockCommand
 */
export const se_DisassociateAppBlockBuilderAppBlockCommand = async (
  input: DisassociateAppBlockBuilderAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateAppBlockBuilderAppBlock");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateApplicationFleetCommand
 */
export const se_DisassociateApplicationFleetCommand = async (
  input: DisassociateApplicationFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateApplicationFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateApplicationFromEntitlementCommand
 */
export const se_DisassociateApplicationFromEntitlementCommand = async (
  input: DisassociateApplicationFromEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateApplicationFromEntitlement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFleetCommand
 */
export const se_DisassociateFleetCommand = async (
  input: DisassociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableUserCommand
 */
export const se_EnableUserCommand = async (
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExpireSessionCommand
 */
export const se_ExpireSessionCommand = async (
  input: ExpireSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExpireSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociatedFleetsCommand
 */
export const se_ListAssociatedFleetsCommand = async (
  input: ListAssociatedFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociatedFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociatedStacksCommand
 */
export const se_ListAssociatedStacksCommand = async (
  input: ListAssociatedStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociatedStacks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntitledApplicationsCommand
 */
export const se_ListEntitledApplicationsCommand = async (
  input: ListEntitledApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEntitledApplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAppBlockBuilderCommand
 */
export const se_StartAppBlockBuilderCommand = async (
  input: StartAppBlockBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAppBlockBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFleetCommand
 */
export const se_StartFleetCommand = async (
  input: StartFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImageBuilderCommand
 */
export const se_StartImageBuilderCommand = async (
  input: StartImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartImageBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAppBlockBuilderCommand
 */
export const se_StopAppBlockBuilderCommand = async (
  input: StopAppBlockBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAppBlockBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopFleetCommand
 */
export const se_StopFleetCommand = async (
  input: StopFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopImageBuilderCommand
 */
export const se_StopImageBuilderCommand = async (
  input: StopImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopImageBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAppBlockBuilderCommand
 */
export const se_UpdateAppBlockBuilderCommand = async (
  input: UpdateAppBlockBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAppBlockBuilder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDirectoryConfigCommand
 */
export const se_UpdateDirectoryConfigCommand = async (
  input: UpdateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDirectoryConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEntitlementCommand
 */
export const se_UpdateEntitlementCommand = async (
  input: UpdateEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEntitlement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFleetCommand
 */
export const se_UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImagePermissionsCommand
 */
export const se_UpdateImagePermissionsCommand = async (
  input: UpdateImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateImagePermissions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStackCommand
 */
export const se_UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateAppBlockBuilderAppBlockCommand
 */
export const de_AssociateAppBlockBuilderAppBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAppBlockBuilderAppBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateAppBlockBuilderAppBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateAppBlockBuilderAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateAppBlockBuilderAppBlockCommandError
 */
const de_AssociateAppBlockBuilderAppBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAppBlockBuilderAppBlockCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
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
  contents = _json(data);
  const response: AssociateApplicationFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateApplicationToEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchAssociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: BatchDisassociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CopyImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAppBlockBuilderCommand
 */
export const de_CreateAppBlockBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppBlockBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppBlockBuilderResult(data, context);
  const response: CreateAppBlockBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppBlockBuilderCommandError
 */
const de_CreateAppBlockBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockBuilderCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAppBlockBuilderStreamingURLCommand
 */
export const de_CreateAppBlockBuilderStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockBuilderStreamingURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppBlockBuilderStreamingURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppBlockBuilderStreamingURLResult(data, context);
  const response: CreateAppBlockBuilderStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppBlockBuilderStreamingURLCommandError
 */
const de_CreateAppBlockBuilderStreamingURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockBuilderStreamingURLCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAppBlockBuilderCommand
 */
export const de_DeleteAppBlockBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBlockBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppBlockBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAppBlockBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppBlockBuilderCommandError
 */
const de_DeleteAppBlockBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBlockBuilderCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAppBlockBuilderAppBlockAssociationsCommand
 */
export const de_DescribeAppBlockBuilderAppBlockAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppBlockBuilderAppBlockAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppBlockBuilderAppBlockAssociationsCommandError
 */
const de_DescribeAppBlockBuilderAppBlockAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAppBlockBuildersCommand
 */
export const de_DescribeAppBlockBuildersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlockBuildersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppBlockBuildersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppBlockBuildersResult(data, context);
  const response: DescribeAppBlockBuildersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppBlockBuildersCommandError
 */
const de_DescribeAppBlockBuildersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlockBuildersCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeApplicationFleetAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeUserStackAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateAppBlockBuilderAppBlockCommand
 */
export const de_DisassociateAppBlockBuilderAppBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAppBlockBuilderAppBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateAppBlockBuilderAppBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateAppBlockBuilderAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateAppBlockBuilderAppBlockCommandError
 */
const de_DisassociateAppBlockBuilderAppBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAppBlockBuilderAppBlockCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateApplicationFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateApplicationFromEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ExpireSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListAssociatedFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListAssociatedStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListEntitledApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartAppBlockBuilderCommand
 */
export const de_StartAppBlockBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppBlockBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAppBlockBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartAppBlockBuilderResult(data, context);
  const response: StartAppBlockBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartAppBlockBuilderCommandError
 */
const de_StartAppBlockBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppBlockBuilderCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopAppBlockBuilderCommand
 */
export const de_StopAppBlockBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppBlockBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopAppBlockBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopAppBlockBuilderResult(data, context);
  const response: StopAppBlockBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopAppBlockBuilderCommandError
 */
const de_StopAppBlockBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppBlockBuilderCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAppBlockBuilderCommand
 */
export const de_UpdateAppBlockBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppBlockBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAppBlockBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAppBlockBuilderResult(data, context);
  const response: UpdateAppBlockBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAppBlockBuilderCommandError
 */
const de_UpdateAppBlockBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppBlockBuilderCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccessEndpoint omitted.

// se_AccessEndpointList omitted.

// se_AppBlockBuilderAttributes omitted.

// se_ApplicationAttributes omitted.

// se_ApplicationSettings omitted.

// se_ArnList omitted.

// se_AssociateAppBlockBuilderAppBlockRequest omitted.

// se_AssociateApplicationFleetRequest omitted.

// se_AssociateApplicationToEntitlementRequest omitted.

// se_AssociateFleetRequest omitted.

// se_AwsAccountIdList omitted.

// se_BatchAssociateUserStackRequest omitted.

// se_BatchDisassociateUserStackRequest omitted.

// se_CertificateBasedAuthProperties omitted.

// se_ComputeCapacity omitted.

// se_CopyImageRequest omitted.

// se_CreateAppBlockBuilderRequest omitted.

// se_CreateAppBlockBuilderStreamingURLRequest omitted.

// se_CreateAppBlockRequest omitted.

// se_CreateApplicationRequest omitted.

// se_CreateDirectoryConfigRequest omitted.

// se_CreateEntitlementRequest omitted.

// se_CreateFleetRequest omitted.

// se_CreateImageBuilderRequest omitted.

// se_CreateImageBuilderStreamingURLRequest omitted.

// se_CreateStackRequest omitted.

// se_CreateStreamingURLRequest omitted.

// se_CreateUpdatedImageRequest omitted.

// se_CreateUsageReportSubscriptionRequest omitted.

// se_CreateUserRequest omitted.

// se_DeleteAppBlockBuilderRequest omitted.

// se_DeleteAppBlockRequest omitted.

// se_DeleteApplicationRequest omitted.

// se_DeleteDirectoryConfigRequest omitted.

// se_DeleteEntitlementRequest omitted.

// se_DeleteFleetRequest omitted.

// se_DeleteImageBuilderRequest omitted.

// se_DeleteImagePermissionsRequest omitted.

// se_DeleteImageRequest omitted.

// se_DeleteStackRequest omitted.

// se_DeleteUsageReportSubscriptionRequest omitted.

// se_DeleteUserRequest omitted.

// se_DescribeAppBlockBuilderAppBlockAssociationsRequest omitted.

// se_DescribeAppBlockBuildersRequest omitted.

// se_DescribeAppBlocksRequest omitted.

// se_DescribeApplicationFleetAssociationsRequest omitted.

// se_DescribeApplicationsRequest omitted.

// se_DescribeDirectoryConfigsRequest omitted.

// se_DescribeEntitlementsRequest omitted.

// se_DescribeFleetsRequest omitted.

// se_DescribeImageBuildersRequest omitted.

// se_DescribeImagePermissionsRequest omitted.

// se_DescribeImagesRequest omitted.

// se_DescribeSessionsRequest omitted.

// se_DescribeStacksRequest omitted.

// se_DescribeUsageReportSubscriptionsRequest omitted.

// se_DescribeUsersRequest omitted.

// se_DescribeUserStackAssociationsRequest omitted.

// se_DirectoryNameList omitted.

// se_DisableUserRequest omitted.

// se_DisassociateAppBlockBuilderAppBlockRequest omitted.

// se_DisassociateApplicationFleetRequest omitted.

// se_DisassociateApplicationFromEntitlementRequest omitted.

// se_DisassociateFleetRequest omitted.

// se_DomainJoinInfo omitted.

// se_DomainList omitted.

// se_EmbedHostDomains omitted.

// se_EnableUserRequest omitted.

// se_EntitlementAttribute omitted.

// se_EntitlementAttributeList omitted.

// se_ExpireSessionRequest omitted.

// se_FleetAttributes omitted.

// se_ImagePermissions omitted.

// se_ListAssociatedFleetsRequest omitted.

// se_ListAssociatedStacksRequest omitted.

// se_ListEntitledApplicationsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_OrganizationalUnitDistinguishedNamesList omitted.

// se_Platforms omitted.

// se_S3Location omitted.

// se_ScriptDetails omitted.

// se_SecurityGroupIdList omitted.

// se_ServiceAccountCredentials omitted.

// se_StackAttributes omitted.

// se_StartAppBlockBuilderRequest omitted.

// se_StartFleetRequest omitted.

// se_StartImageBuilderRequest omitted.

// se_StopAppBlockBuilderRequest omitted.

// se_StopFleetRequest omitted.

// se_StopImageBuilderRequest omitted.

// se_StorageConnector omitted.

// se_StorageConnectorList omitted.

// se_StreamingExperienceSettings omitted.

// se_StringList omitted.

// se_SubnetIdList omitted.

// se_TagKeyList omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAppBlockBuilderRequest omitted.

// se_UpdateApplicationRequest omitted.

// se_UpdateDirectoryConfigRequest omitted.

// se_UpdateEntitlementRequest omitted.

// se_UpdateFleetRequest omitted.

// se_UpdateImagePermissionsRequest omitted.

// se_UpdateStackRequest omitted.

// se_UsbDeviceFilterStrings omitted.

// se_UserSetting omitted.

// se_UserSettingList omitted.

// se_UserStackAssociation omitted.

// se_UserStackAssociationList omitted.

// se_VpcConfig omitted.

// de_AccessEndpoint omitted.

// de_AccessEndpointList omitted.

/**
 * deserializeAws_json1_1AppBlock
 */
const de_AppBlock = (output: any, context: __SerdeContext): AppBlock => {
  return take(output, {
    AppBlockErrors: _json,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    Name: __expectString,
    PackagingType: __expectString,
    PostSetupScriptDetails: _json,
    SetupScriptDetails: _json,
    SourceS3Location: _json,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AppBlockBuilder
 */
const de_AppBlockBuilder = (output: any, context: __SerdeContext): AppBlockBuilder => {
  return take(output, {
    AccessEndpoints: _json,
    AppBlockBuilderErrors: (_: any) => de_ResourceErrors(_, context),
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    EnableDefaultInternetAccess: __expectBoolean,
    IamRoleArn: __expectString,
    InstanceType: __expectString,
    Name: __expectString,
    Platform: __expectString,
    State: __expectString,
    StateChangeReason: _json,
    VpcConfig: _json,
  }) as any;
};

// de_AppBlockBuilderAppBlockAssociation omitted.

// de_AppBlockBuilderAppBlockAssociationsList omitted.

/**
 * deserializeAws_json1_1AppBlockBuilderList
 */
const de_AppBlockBuilderList = (output: any, context: __SerdeContext): AppBlockBuilder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppBlockBuilder(entry, context);
    });
  return retVal;
};

// de_AppBlockBuilderStateChangeReason omitted.

/**
 * deserializeAws_json1_1AppBlocks
 */
const de_AppBlocks = (output: any, context: __SerdeContext): AppBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppBlock(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return take(output, {
    AppBlockArn: __expectString,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    Enabled: __expectBoolean,
    IconS3Location: _json,
    IconURL: __expectString,
    InstanceFamilies: _json,
    LaunchParameters: __expectString,
    LaunchPath: __expectString,
    Metadata: _json,
    Name: __expectString,
    Platforms: _json,
    WorkingDirectory: __expectString,
  }) as any;
};

// de_ApplicationFleetAssociation omitted.

// de_ApplicationFleetAssociationList omitted.

/**
 * deserializeAws_json1_1Applications
 */
const de_Applications = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Application(entry, context);
    });
  return retVal;
};

// de_ApplicationSettingsResponse omitted.

// de_AssociateAppBlockBuilderAppBlockResult omitted.

// de_AssociateApplicationFleetResult omitted.

// de_AssociateApplicationToEntitlementResult omitted.

// de_AssociateFleetResult omitted.

// de_BatchAssociateUserStackResult omitted.

// de_BatchDisassociateUserStackResult omitted.

// de_CertificateBasedAuthProperties omitted.

// de_ComputeCapacityStatus omitted.

// de_ConcurrentModificationException omitted.

// de_CopyImageResponse omitted.

/**
 * deserializeAws_json1_1CreateAppBlockBuilderResult
 */
const de_CreateAppBlockBuilderResult = (output: any, context: __SerdeContext): CreateAppBlockBuilderResult => {
  return take(output, {
    AppBlockBuilder: (_: any) => de_AppBlockBuilder(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAppBlockBuilderStreamingURLResult
 */
const de_CreateAppBlockBuilderStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateAppBlockBuilderStreamingURLResult => {
  return take(output, {
    Expires: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamingURL: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAppBlockResult
 */
const de_CreateAppBlockResult = (output: any, context: __SerdeContext): CreateAppBlockResult => {
  return take(output, {
    AppBlock: (_: any) => de_AppBlock(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateApplicationResult
 */
const de_CreateApplicationResult = (output: any, context: __SerdeContext): CreateApplicationResult => {
  return take(output, {
    Application: (_: any) => de_Application(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDirectoryConfigResult
 */
const de_CreateDirectoryConfigResult = (output: any, context: __SerdeContext): CreateDirectoryConfigResult => {
  return take(output, {
    DirectoryConfig: (_: any) => de_DirectoryConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateEntitlementResult
 */
const de_CreateEntitlementResult = (output: any, context: __SerdeContext): CreateEntitlementResult => {
  return take(output, {
    Entitlement: (_: any) => de_Entitlement(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateFleetResult
 */
const de_CreateFleetResult = (output: any, context: __SerdeContext): CreateFleetResult => {
  return take(output, {
    Fleet: (_: any) => de_Fleet(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateImageBuilderResult
 */
const de_CreateImageBuilderResult = (output: any, context: __SerdeContext): CreateImageBuilderResult => {
  return take(output, {
    ImageBuilder: (_: any) => de_ImageBuilder(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateImageBuilderStreamingURLResult
 */
const de_CreateImageBuilderStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderStreamingURLResult => {
  return take(output, {
    Expires: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamingURL: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateStackResult
 */
const de_CreateStackResult = (output: any, context: __SerdeContext): CreateStackResult => {
  return take(output, {
    Stack: (_: any) => de_Stack(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateStreamingURLResult
 */
const de_CreateStreamingURLResult = (output: any, context: __SerdeContext): CreateStreamingURLResult => {
  return take(output, {
    Expires: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamingURL: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateUpdatedImageResult
 */
const de_CreateUpdatedImageResult = (output: any, context: __SerdeContext): CreateUpdatedImageResult => {
  return take(output, {
    canUpdateImage: __expectBoolean,
    image: (_: any) => de_Image(_, context),
  }) as any;
};

// de_CreateUsageReportSubscriptionResult omitted.

// de_CreateUserResult omitted.

// de_DeleteAppBlockBuilderResult omitted.

// de_DeleteAppBlockResult omitted.

// de_DeleteApplicationResult omitted.

// de_DeleteDirectoryConfigResult omitted.

// de_DeleteEntitlementResult omitted.

// de_DeleteFleetResult omitted.

/**
 * deserializeAws_json1_1DeleteImageBuilderResult
 */
const de_DeleteImageBuilderResult = (output: any, context: __SerdeContext): DeleteImageBuilderResult => {
  return take(output, {
    ImageBuilder: (_: any) => de_ImageBuilder(_, context),
  }) as any;
};

// de_DeleteImagePermissionsResult omitted.

/**
 * deserializeAws_json1_1DeleteImageResult
 */
const de_DeleteImageResult = (output: any, context: __SerdeContext): DeleteImageResult => {
  return take(output, {
    Image: (_: any) => de_Image(_, context),
  }) as any;
};

// de_DeleteStackResult omitted.

// de_DeleteUsageReportSubscriptionResult omitted.

// de_DeleteUserResult omitted.

// de_DescribeAppBlockBuilderAppBlockAssociationsResult omitted.

/**
 * deserializeAws_json1_1DescribeAppBlockBuildersResult
 */
const de_DescribeAppBlockBuildersResult = (output: any, context: __SerdeContext): DescribeAppBlockBuildersResult => {
  return take(output, {
    AppBlockBuilders: (_: any) => de_AppBlockBuilderList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAppBlocksResult
 */
const de_DescribeAppBlocksResult = (output: any, context: __SerdeContext): DescribeAppBlocksResult => {
  return take(output, {
    AppBlocks: (_: any) => de_AppBlocks(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeApplicationFleetAssociationsResult omitted.

/**
 * deserializeAws_json1_1DescribeApplicationsResult
 */
const de_DescribeApplicationsResult = (output: any, context: __SerdeContext): DescribeApplicationsResult => {
  return take(output, {
    Applications: (_: any) => de_Applications(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDirectoryConfigsResult
 */
const de_DescribeDirectoryConfigsResult = (output: any, context: __SerdeContext): DescribeDirectoryConfigsResult => {
  return take(output, {
    DirectoryConfigs: (_: any) => de_DirectoryConfigList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEntitlementsResult
 */
const de_DescribeEntitlementsResult = (output: any, context: __SerdeContext): DescribeEntitlementsResult => {
  return take(output, {
    Entitlements: (_: any) => de_EntitlementList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFleetsResult
 */
const de_DescribeFleetsResult = (output: any, context: __SerdeContext): DescribeFleetsResult => {
  return take(output, {
    Fleets: (_: any) => de_FleetList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageBuildersResult
 */
const de_DescribeImageBuildersResult = (output: any, context: __SerdeContext): DescribeImageBuildersResult => {
  return take(output, {
    ImageBuilders: (_: any) => de_ImageBuilderList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeImagePermissionsResult omitted.

/**
 * deserializeAws_json1_1DescribeImagesResult
 */
const de_DescribeImagesResult = (output: any, context: __SerdeContext): DescribeImagesResult => {
  return take(output, {
    Images: (_: any) => de_ImageList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSessionsResult
 */
const de_DescribeSessionsResult = (output: any, context: __SerdeContext): DescribeSessionsResult => {
  return take(output, {
    NextToken: __expectString,
    Sessions: (_: any) => de_SessionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStacksResult
 */
const de_DescribeStacksResult = (output: any, context: __SerdeContext): DescribeStacksResult => {
  return take(output, {
    NextToken: __expectString,
    Stacks: (_: any) => de_StackList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUsageReportSubscriptionsResult
 */
const de_DescribeUsageReportSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): DescribeUsageReportSubscriptionsResult => {
  return take(output, {
    NextToken: __expectString,
    UsageReportSubscriptions: (_: any) => de_UsageReportSubscriptionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUsersResult
 */
const de_DescribeUsersResult = (output: any, context: __SerdeContext): DescribeUsersResult => {
  return take(output, {
    NextToken: __expectString,
    Users: (_: any) => de_UserList(_, context),
  }) as any;
};

// de_DescribeUserStackAssociationsResult omitted.

/**
 * deserializeAws_json1_1DirectoryConfig
 */
const de_DirectoryConfig = (output: any, context: __SerdeContext): DirectoryConfig => {
  return take(output, {
    CertificateBasedAuthProperties: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryName: __expectString,
    OrganizationalUnitDistinguishedNames: _json,
    ServiceAccountCredentials: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DirectoryConfigList
 */
const de_DirectoryConfigList = (output: any, context: __SerdeContext): DirectoryConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DirectoryConfig(entry, context);
    });
  return retVal;
};

// de_DisableUserResult omitted.

// de_DisassociateAppBlockBuilderAppBlockResult omitted.

// de_DisassociateApplicationFleetResult omitted.

// de_DisassociateApplicationFromEntitlementResult omitted.

// de_DisassociateFleetResult omitted.

// de_DomainJoinInfo omitted.

// de_DomainList omitted.

// de_EmbedHostDomains omitted.

// de_EnableUserResult omitted.

// de_EntitledApplication omitted.

// de_EntitledApplicationList omitted.

/**
 * deserializeAws_json1_1Entitlement
 */
const de_Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return take(output, {
    AppVisibility: __expectString,
    Attributes: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    StackName: __expectString,
  }) as any;
};

// de_EntitlementAlreadyExistsException omitted.

// de_EntitlementAttribute omitted.

// de_EntitlementAttributeList omitted.

/**
 * deserializeAws_json1_1EntitlementList
 */
const de_EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Entitlement(entry, context);
    });
  return retVal;
};

// de_EntitlementNotFoundException omitted.

// de_ErrorDetails omitted.

// de_ErrorDetailsList omitted.

// de_ExpireSessionResult omitted.

/**
 * deserializeAws_json1_1Fleet
 */
const de_Fleet = (output: any, context: __SerdeContext): Fleet => {
  return take(output, {
    Arn: __expectString,
    ComputeCapacityStatus: _json,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisconnectTimeoutInSeconds: __expectInt32,
    DisplayName: __expectString,
    DomainJoinInfo: _json,
    EnableDefaultInternetAccess: __expectBoolean,
    FleetErrors: _json,
    FleetType: __expectString,
    IamRoleArn: __expectString,
    IdleDisconnectTimeoutInSeconds: __expectInt32,
    ImageArn: __expectString,
    ImageName: __expectString,
    InstanceType: __expectString,
    MaxConcurrentSessions: __expectInt32,
    MaxUserDurationInSeconds: __expectInt32,
    Name: __expectString,
    Platform: __expectString,
    SessionScriptS3Location: _json,
    State: __expectString,
    StreamView: __expectString,
    UsbDeviceFilterStrings: _json,
    VpcConfig: _json,
  }) as any;
};

// de_FleetError omitted.

// de_FleetErrors omitted.

/**
 * deserializeAws_json1_1FleetList
 */
const de_FleetList = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Fleet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return take(output, {
    Applications: (_: any) => de_Applications(_, context),
    AppstreamAgentVersion: __expectString,
    Arn: __expectString,
    BaseImageArn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    ImageBuilderName: __expectString,
    ImageBuilderSupported: __expectBoolean,
    ImageErrors: (_: any) => de_ResourceErrors(_, context),
    ImagePermissions: _json,
    Name: __expectString,
    Platform: __expectString,
    PublicBaseImageReleasedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateChangeReason: _json,
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageBuilder
 */
const de_ImageBuilder = (output: any, context: __SerdeContext): ImageBuilder => {
  return take(output, {
    AccessEndpoints: _json,
    AppstreamAgentVersion: __expectString,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    DomainJoinInfo: _json,
    EnableDefaultInternetAccess: __expectBoolean,
    IamRoleArn: __expectString,
    ImageArn: __expectString,
    ImageBuilderErrors: (_: any) => de_ResourceErrors(_, context),
    InstanceType: __expectString,
    Name: __expectString,
    NetworkAccessConfiguration: _json,
    Platform: __expectString,
    State: __expectString,
    StateChangeReason: _json,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageBuilderList
 */
const de_ImageBuilderList = (output: any, context: __SerdeContext): ImageBuilder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageBuilder(entry, context);
    });
  return retVal;
};

// de_ImageBuilderStateChangeReason omitted.

/**
 * deserializeAws_json1_1ImageList
 */
const de_ImageList = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Image(entry, context);
    });
  return retVal;
};

// de_ImagePermissions omitted.

// de_ImageStateChangeReason omitted.

// de_IncompatibleImageException omitted.

// de_InvalidAccountStatusException omitted.

// de_InvalidParameterCombinationException omitted.

// de_InvalidRoleException omitted.

// de_LastReportGenerationExecutionError omitted.

// de_LastReportGenerationExecutionErrors omitted.

// de_LimitExceededException omitted.

// de_ListAssociatedFleetsResult omitted.

// de_ListAssociatedStacksResult omitted.

// de_ListEntitledApplicationsResult omitted.

// de_ListTagsForResourceResponse omitted.

// de_Metadata omitted.

// de_NetworkAccessConfiguration omitted.

// de_OperationNotPermittedException omitted.

// de_OrganizationalUnitDistinguishedNamesList omitted.

// de_Platforms omitted.

// de_RequestLimitExceededException omitted.

// de_ResourceAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1ResourceError
 */
const de_ResourceError = (output: any, context: __SerdeContext): ResourceError => {
  return take(output, {
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    ErrorTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceErrors
 */
const de_ResourceErrors = (output: any, context: __SerdeContext): ResourceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceError(entry, context);
    });
  return retVal;
};

// de_ResourceInUseException omitted.

// de_ResourceNotAvailableException omitted.

// de_ResourceNotFoundException omitted.

// de_S3Location omitted.

// de_ScriptDetails omitted.

// de_SecurityGroupIdList omitted.

// de_ServiceAccountCredentials omitted.

/**
 * deserializeAws_json1_1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return take(output, {
    AuthenticationType: __expectString,
    ConnectionState: __expectString,
    FleetName: __expectString,
    Id: __expectString,
    MaxExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NetworkAccessConfiguration: _json,
    StackName: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SessionList
 */
const de_SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Session(entry, context);
    });
  return retVal;
};

// de_SharedImagePermissions omitted.

// de_SharedImagePermissionsList omitted.

/**
 * deserializeAws_json1_1Stack
 */
const de_Stack = (output: any, context: __SerdeContext): Stack => {
  return take(output, {
    AccessEndpoints: _json,
    ApplicationSettings: _json,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    EmbedHostDomains: _json,
    FeedbackURL: __expectString,
    Name: __expectString,
    RedirectURL: __expectString,
    StackErrors: _json,
    StorageConnectors: _json,
    StreamingExperienceSettings: _json,
    UserSettings: _json,
  }) as any;
};

// de_StackError omitted.

// de_StackErrors omitted.

/**
 * deserializeAws_json1_1StackList
 */
const de_StackList = (output: any, context: __SerdeContext): Stack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Stack(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartAppBlockBuilderResult
 */
const de_StartAppBlockBuilderResult = (output: any, context: __SerdeContext): StartAppBlockBuilderResult => {
  return take(output, {
    AppBlockBuilder: (_: any) => de_AppBlockBuilder(_, context),
  }) as any;
};

// de_StartFleetResult omitted.

/**
 * deserializeAws_json1_1StartImageBuilderResult
 */
const de_StartImageBuilderResult = (output: any, context: __SerdeContext): StartImageBuilderResult => {
  return take(output, {
    ImageBuilder: (_: any) => de_ImageBuilder(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopAppBlockBuilderResult
 */
const de_StopAppBlockBuilderResult = (output: any, context: __SerdeContext): StopAppBlockBuilderResult => {
  return take(output, {
    AppBlockBuilder: (_: any) => de_AppBlockBuilder(_, context),
  }) as any;
};

// de_StopFleetResult omitted.

/**
 * deserializeAws_json1_1StopImageBuilderResult
 */
const de_StopImageBuilderResult = (output: any, context: __SerdeContext): StopImageBuilderResult => {
  return take(output, {
    ImageBuilder: (_: any) => de_ImageBuilder(_, context),
  }) as any;
};

// de_StorageConnector omitted.

// de_StorageConnectorList omitted.

// de_StreamingExperienceSettings omitted.

// de_StringList omitted.

// de_SubnetIdList omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateAppBlockBuilderResult
 */
const de_UpdateAppBlockBuilderResult = (output: any, context: __SerdeContext): UpdateAppBlockBuilderResult => {
  return take(output, {
    AppBlockBuilder: (_: any) => de_AppBlockBuilder(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateApplicationResult
 */
const de_UpdateApplicationResult = (output: any, context: __SerdeContext): UpdateApplicationResult => {
  return take(output, {
    Application: (_: any) => de_Application(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateDirectoryConfigResult
 */
const de_UpdateDirectoryConfigResult = (output: any, context: __SerdeContext): UpdateDirectoryConfigResult => {
  return take(output, {
    DirectoryConfig: (_: any) => de_DirectoryConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateEntitlementResult
 */
const de_UpdateEntitlementResult = (output: any, context: __SerdeContext): UpdateEntitlementResult => {
  return take(output, {
    Entitlement: (_: any) => de_Entitlement(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateFleetResult
 */
const de_UpdateFleetResult = (output: any, context: __SerdeContext): UpdateFleetResult => {
  return take(output, {
    Fleet: (_: any) => de_Fleet(_, context),
  }) as any;
};

// de_UpdateImagePermissionsResult omitted.

/**
 * deserializeAws_json1_1UpdateStackResult
 */
const de_UpdateStackResult = (output: any, context: __SerdeContext): UpdateStackResult => {
  return take(output, {
    Stack: (_: any) => de_Stack(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UsageReportSubscription
 */
const de_UsageReportSubscription = (output: any, context: __SerdeContext): UsageReportSubscription => {
  return take(output, {
    LastGeneratedReportDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    S3BucketName: __expectString,
    Schedule: __expectString,
    SubscriptionErrors: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UsageReportSubscriptionList
 */
const de_UsageReportSubscriptionList = (output: any, context: __SerdeContext): UsageReportSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageReportSubscription(entry, context);
    });
  return retVal;
};

// de_UsbDeviceFilterStrings omitted.

/**
 * deserializeAws_json1_1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return take(output, {
    Arn: __expectString,
    AuthenticationType: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Enabled: __expectBoolean,
    FirstName: __expectString,
    LastName: __expectString,
    Status: __expectString,
    UserName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_User(entry, context);
    });
  return retVal;
};

// de_UserSetting omitted.

// de_UserSettingList omitted.

// de_UserStackAssociation omitted.

// de_UserStackAssociationError omitted.

// de_UserStackAssociationErrorList omitted.

// de_UserStackAssociationList omitted.

// de_VpcConfig omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `PhotonAdminProxyService.${operation}`,
  };
}

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
