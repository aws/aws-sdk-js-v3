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

export const serializeAws_json1_1AssociateApplicationFleetCommand = async (
  input: AssociateApplicationFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateApplicationFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateApplicationFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateApplicationToEntitlementCommand = async (
  input: AssociateApplicationToEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateApplicationToEntitlement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateApplicationToEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateFleetCommand = async (
  input: AssociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.AssociateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchAssociateUserStackCommand = async (
  input: BatchAssociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.BatchAssociateUserStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchAssociateUserStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDisassociateUserStackCommand = async (
  input: BatchDisassociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.BatchDisassociateUserStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDisassociateUserStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyImageCommand = async (
  input: CopyImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CopyImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAppBlockCommand = async (
  input: CreateAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateAppBlock",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAppBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDirectoryConfigCommand = async (
  input: CreateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateDirectoryConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEntitlementCommand = async (
  input: CreateEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateEntitlement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateImageBuilderCommand = async (
  input: CreateImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateImageBuilder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateImageBuilderStreamingURLCommand = async (
  input: CreateImageBuilderStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateImageBuilderStreamingURL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateImageBuilderStreamingURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStreamingURLCommand = async (
  input: CreateStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateStreamingURL",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStreamingURLRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUpdatedImageCommand = async (
  input: CreateUpdatedImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUpdatedImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUpdatedImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUsageReportSubscriptionCommand = async (
  input: CreateUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUsageReportSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUsageReportSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppBlockCommand = async (
  input: DeleteAppBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteAppBlock",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppBlockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDirectoryConfigCommand = async (
  input: DeleteDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteDirectoryConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEntitlementCommand = async (
  input: DeleteEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteEntitlement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteImageBuilderCommand = async (
  input: DeleteImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImageBuilder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteImagePermissionsCommand = async (
  input: DeleteImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteImagePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUsageReportSubscriptionCommand = async (
  input: DeleteUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteUsageReportSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUsageReportSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAppBlocksCommand = async (
  input: DescribeAppBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeAppBlocks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAppBlocksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationFleetAssociationsCommand = async (
  input: DescribeApplicationFleetAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeApplicationFleetAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationFleetAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationsCommand = async (
  input: DescribeApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectoryConfigsCommand = async (
  input: DescribeDirectoryConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeDirectoryConfigs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectoryConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEntitlementsCommand = async (
  input: DescribeEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeEntitlements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEntitlementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetsCommand = async (
  input: DescribeFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeFleets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImageBuildersCommand = async (
  input: DescribeImageBuildersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImageBuilders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImageBuildersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImagePermissionsCommand = async (
  input: DescribeImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImagePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeStacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUsageReportSubscriptionsCommand = async (
  input: DescribeUsageReportSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUsageReportSubscriptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUsageReportSubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserStackAssociationsCommand = async (
  input: DescribeUserStackAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DescribeUserStackAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserStackAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableUserCommand = async (
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisableUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateApplicationFleetCommand = async (
  input: DisassociateApplicationFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateApplicationFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateApplicationFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateApplicationFromEntitlementCommand = async (
  input: DisassociateApplicationFromEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateApplicationFromEntitlement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateApplicationFromEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateFleetCommand = async (
  input: DisassociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.DisassociateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableUserCommand = async (
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.EnableUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExpireSessionCommand = async (
  input: ExpireSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ExpireSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExpireSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociatedFleetsCommand = async (
  input: ListAssociatedFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListAssociatedFleets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssociatedFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociatedStacksCommand = async (
  input: ListAssociatedStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListAssociatedStacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAssociatedStacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntitledApplicationsCommand = async (
  input: ListEntitledApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListEntitledApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntitledApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartFleetCommand = async (
  input: StartFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StartFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartImageBuilderCommand = async (
  input: StartImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StartImageBuilder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopFleetCommand = async (
  input: StopFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StopFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopImageBuilderCommand = async (
  input: StopImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.StopImageBuilder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopImageBuilderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDirectoryConfigCommand = async (
  input: UpdateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateDirectoryConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDirectoryConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEntitlementCommand = async (
  input: UpdateEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateEntitlement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEntitlementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateImagePermissionsCommand = async (
  input: UpdateImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateImagePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateImagePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PhotonAdminProxyService.UpdateStack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateApplicationFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateApplicationFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateApplicationFleetResult(data, context);
  const response: AssociateApplicationFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateApplicationFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateApplicationToEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationToEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateApplicationToEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateApplicationToEntitlementResult(data, context);
  const response: AssociateApplicationToEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateApplicationToEntitlementCommandError = async (
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
      throw await deserializeAws_json1_1EntitlementNotFoundExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateFleetResult(data, context);
  const response: AssociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchAssociateUserStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchAssociateUserStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchAssociateUserStackResult(data, context);
  const response: BatchAssociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchAssociateUserStackCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchDisassociateUserStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDisassociateUserStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDisassociateUserStackResult(data, context);
  const response: BatchDisassociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDisassociateUserStackCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CopyImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyImageResponse(data, context);
  const response: CopyImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyImageCommandError = async (
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
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAppBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAppBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAppBlockResult(data, context);
  const response: CreateAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAppBlockCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResult(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDirectoryConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectoryConfigResult(data, context);
  const response: CreateDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDirectoryConfigCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEntitlementResult(data, context);
  const response: CreateEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEntitlementCommandError = async (
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
      throw await deserializeAws_json1_1EntitlementAlreadyExistsExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFleetResult(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateImageBuilderResult(data, context);
  const response: CreateImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateImageBuilderCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateImageBuilderStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateImageBuilderStreamingURLResult(data, context);
  const response: CreateImageBuilderStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError = async (
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
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStackResult(data, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStackCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStreamingURLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStreamingURLResult(data, context);
  const response: CreateStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStreamingURLCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUpdatedImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUpdatedImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUpdatedImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUpdatedImageResult(data, context);
  const response: CreateUpdatedImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUpdatedImageCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUsageReportSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUsageReportSubscriptionResult(data, context);
  const response: CreateUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUsageReportSubscriptionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResult(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAppBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBlockCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAppBlockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppBlockResult(data, context);
  const response: DeleteAppBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppBlockCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationResult(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDirectoryConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectoryConfigResult(data, context);
  const response: DeleteDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDirectoryConfigCommandError = async (
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
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEntitlementResult(data, context);
  const response: DeleteEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEntitlementCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await deserializeAws_json1_1EntitlementNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFleetResult(data, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImageResult(data, context);
  const response: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImageCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImageBuilderResult(data, context);
  const response: DeleteImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImageBuilderCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImagePermissionsResult(data, context);
  const response: DeleteImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImagePermissionsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStackResult(data, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStackCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteUsageReportSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUsageReportSubscriptionResult(data, context);
  const response: DeleteUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResult(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAppBlocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppBlocksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAppBlocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAppBlocksResult(data, context);
  const response: DescribeAppBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAppBlocksCommandError = async (
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
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeApplicationFleetAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationFleetAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationFleetAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationFleetAssociationsResult(data, context);
  const response: DescribeApplicationFleetAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationFleetAssociationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationsResult(data, context);
  const response: DescribeApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationsCommandError = async (
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
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDirectoryConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDirectoryConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectoryConfigsResult(data, context);
  const response: DescribeDirectoryConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectoryConfigsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitlementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEntitlementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntitlementsResult(data, context);
  const response: DescribeEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntitlementsCommandError = async (
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
      throw await deserializeAws_json1_1EntitlementNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetsResult(data, context);
  const response: DescribeFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeImageBuildersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImageBuildersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageBuildersResult(data, context);
  const response: DescribeImageBuildersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImageBuildersCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagePermissionsResult(data, context);
  const response: DescribeImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImagePermissionsCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagesResult(data, context);
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImagesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSessionsResult(data, context);
  const response: DescribeSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSessionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStacksResult(data, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStacksCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUsageReportSubscriptionsResult(data, context);
  const response: DescribeUsageReportSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUsersResult(data, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUsersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeUserStackAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserStackAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserStackAssociationsResult(data, context);
  const response: DescribeUserStackAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserStackAssociationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableUserResult(data, context);
  const response: DisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableUserCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateApplicationFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateApplicationFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateApplicationFleetResult(data, context);
  const response: DisassociateApplicationFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateApplicationFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateApplicationFromEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationFromEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateApplicationFromEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateApplicationFromEntitlementResult(data, context);
  const response: DisassociateApplicationFromEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateApplicationFromEntitlementCommandError = async (
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
      throw await deserializeAws_json1_1EntitlementNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateFleetResult(data, context);
  const response: DisassociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableUserResult(data, context);
  const response: EnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableUserCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExpireSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExpireSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExpireSessionResult(data, context);
  const response: ExpireSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExpireSessionCommandError = async (
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

export const deserializeAws_json1_1ListAssociatedFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociatedFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociatedFleetsResult(data, context);
  const response: ListAssociatedFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociatedFleetsCommandError = async (
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

export const deserializeAws_json1_1ListAssociatedStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAssociatedStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociatedStacksResult(data, context);
  const response: ListAssociatedStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociatedStacksCommandError = async (
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

export const deserializeAws_json1_1ListEntitledApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitledApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEntitledApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntitledApplicationsResult(data, context);
  const response: ListEntitledApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntitledApplicationsCommandError = async (
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
      throw await deserializeAws_json1_1EntitlementNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFleetResult(data, context);
  const response: StartFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImageBuilderResult(data, context);
  const response: StartImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartImageBuilderCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopFleetResult(data, context);
  const response: StopFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopImageBuilderResult(data, context);
  const response: StopImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopImageBuilderCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResult(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDirectoryConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDirectoryConfigResult(data, context);
  const response: UpdateDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDirectoryConfigCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateEntitlementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntitlementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEntitlementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEntitlementResult(data, context);
  const response: UpdateEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEntitlementCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntitlementNotFoundException":
    case "com.amazonaws.appstream#EntitlementNotFoundException":
      throw await deserializeAws_json1_1EntitlementNotFoundExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFleetResult(data, context);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFleetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "RequestLimitExceededException":
    case "com.amazonaws.appstream#RequestLimitExceededException":
      throw await deserializeAws_json1_1RequestLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateImagePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateImagePermissionsResult(data, context);
  const response: UpdateImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateImagePermissionsCommandError = async (
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
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      throw await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateStackResult(data, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStackCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      throw await deserializeAws_json1_1IncompatibleImageExceptionResponse(parsedOutput, context);
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      throw await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      throw await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntitlementAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntitlementAlreadyExistsException(body, context);
  const exception = new EntitlementAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntitlementNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntitlementNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntitlementNotFoundException(body, context);
  const exception = new EntitlementNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncompatibleImageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleImageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatibleImageException(body, context);
  const exception = new IncompatibleImageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidAccountStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccountStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAccountStatusException(body, context);
  const exception = new InvalidAccountStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRoleException(body, context);
  const exception = new InvalidRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RequestLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestLimitExceededException(body, context);
  const exception = new RequestLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotAvailableException(body, context);
  const exception = new ResourceNotAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccessEndpoint = (input: AccessEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.VpceId != null && { VpceId: input.VpceId }),
  };
};

const serializeAws_json1_1AccessEndpointList = (input: AccessEndpoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AccessEndpoint(entry, context);
    });
};

const serializeAws_json1_1ApplicationAttributes = (
  input: (ApplicationAttribute | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ApplicationSettings = (input: ApplicationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.SettingsGroup != null && { SettingsGroup: input.SettingsGroup }),
  };
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateApplicationFleetRequest = (
  input: AssociateApplicationFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
  };
};

const serializeAws_json1_1AssociateApplicationToEntitlementRequest = (
  input: AssociateApplicationToEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationIdentifier != null && { ApplicationIdentifier: input.ApplicationIdentifier }),
    ...(input.EntitlementName != null && { EntitlementName: input.EntitlementName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1AssociateFleetRequest = (input: AssociateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1AwsAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1BatchAssociateUserStackRequest = (
  input: BatchAssociateUserStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserStackAssociations != null && {
      UserStackAssociations: serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context),
    }),
  };
};

const serializeAws_json1_1BatchDisassociateUserStackRequest = (
  input: BatchDisassociateUserStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserStackAssociations != null && {
      UserStackAssociations: serializeAws_json1_1UserStackAssociationList(input.UserStackAssociations, context),
    }),
  };
};

const serializeAws_json1_1CertificateBasedAuthProperties = (
  input: CertificateBasedAuthProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ComputeCapacity = (input: ComputeCapacity, context: __SerdeContext): any => {
  return {
    ...(input.DesiredInstances != null && { DesiredInstances: input.DesiredInstances }),
  };
};

const serializeAws_json1_1CopyImageRequest = (input: CopyImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.DestinationImageDescription != null && {
      DestinationImageDescription: input.DestinationImageDescription,
    }),
    ...(input.DestinationImageName != null && { DestinationImageName: input.DestinationImageName }),
    ...(input.DestinationRegion != null && { DestinationRegion: input.DestinationRegion }),
    ...(input.SourceImageName != null && { SourceImageName: input.SourceImageName }),
  };
};

const serializeAws_json1_1CreateAppBlockRequest = (input: CreateAppBlockRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SetupScriptDetails != null && {
      SetupScriptDetails: serializeAws_json1_1ScriptDetails(input.SetupScriptDetails, context),
    }),
    ...(input.SourceS3Location != null && {
      SourceS3Location: serializeAws_json1_1S3Location(input.SourceS3Location, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppBlockArn != null && { AppBlockArn: input.AppBlockArn }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.IconS3Location != null && {
      IconS3Location: serializeAws_json1_1S3Location(input.IconS3Location, context),
    }),
    ...(input.InstanceFamilies != null && {
      InstanceFamilies: serializeAws_json1_1StringList(input.InstanceFamilies, context),
    }),
    ...(input.LaunchParameters != null && { LaunchParameters: input.LaunchParameters }),
    ...(input.LaunchPath != null && { LaunchPath: input.LaunchPath }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Platforms != null && { Platforms: serializeAws_json1_1Platforms(input.Platforms, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

const serializeAws_json1_1CreateDirectoryConfigRequest = (
  input: CreateDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateBasedAuthProperties != null && {
      CertificateBasedAuthProperties: serializeAws_json1_1CertificateBasedAuthProperties(
        input.CertificateBasedAuthProperties,
        context
      ),
    }),
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedNames != null && {
      OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
        input.OrganizationalUnitDistinguishedNames,
        context
      ),
    }),
    ...(input.ServiceAccountCredentials != null && {
      ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
        input.ServiceAccountCredentials,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateEntitlementRequest = (
  input: CreateEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppVisibility != null && { AppVisibility: input.AppVisibility }),
    ...(input.Attributes != null && {
      Attributes: serializeAws_json1_1EntitlementAttributeList(input.Attributes, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1CreateFleetRequest = (input: CreateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComputeCapacity != null && {
      ComputeCapacity: serializeAws_json1_1ComputeCapacity(input.ComputeCapacity, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds != null && { DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo != null && {
      DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
    }),
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
      SessionScriptS3Location: serializeAws_json1_1S3Location(input.SessionScriptS3Location, context),
    }),
    ...(input.StreamView != null && { StreamView: input.StreamView }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.UsbDeviceFilterStrings != null && {
      UsbDeviceFilterStrings: serializeAws_json1_1UsbDeviceFilterStrings(input.UsbDeviceFilterStrings, context),
    }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1CreateImageBuilderRequest = (
  input: CreateImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessEndpoints != null && {
      AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
    }),
    ...(input.AppstreamAgentVersion != null && { AppstreamAgentVersion: input.AppstreamAgentVersion }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo != null && {
      DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
    }),
    ...(input.EnableDefaultInternetAccess != null && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess,
    }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ImageArn != null && { ImageArn: input.ImageArn }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1CreateImageBuilderStreamingURLRequest = (
  input: CreateImageBuilderStreamingURLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Validity != null && { Validity: input.Validity }),
  };
};

const serializeAws_json1_1CreateStackRequest = (input: CreateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessEndpoints != null && {
      AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
    }),
    ...(input.ApplicationSettings != null && {
      ApplicationSettings: serializeAws_json1_1ApplicationSettings(input.ApplicationSettings, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains != null && {
      EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context),
    }),
    ...(input.FeedbackURL != null && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedirectURL != null && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors != null && {
      StorageConnectors: serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context),
    }),
    ...(input.StreamingExperienceSettings != null && {
      StreamingExperienceSettings: serializeAws_json1_1StreamingExperienceSettings(
        input.StreamingExperienceSettings,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.UserSettings != null && {
      UserSettings: serializeAws_json1_1UserSettingList(input.UserSettings, context),
    }),
  };
};

const serializeAws_json1_1CreateStreamingURLRequest = (
  input: CreateStreamingURLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.SessionContext != null && { SessionContext: input.SessionContext }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserId != null && { UserId: input.UserId }),
    ...(input.Validity != null && { Validity: input.Validity }),
  };
};

const serializeAws_json1_1CreateUpdatedImageRequest = (
  input: CreateUpdatedImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.dryRun != null && { dryRun: input.dryRun }),
    ...(input.existingImageName != null && { existingImageName: input.existingImageName }),
    ...(input.newImageDescription != null && { newImageDescription: input.newImageDescription }),
    ...(input.newImageDisplayName != null && { newImageDisplayName: input.newImageDisplayName }),
    ...(input.newImageName != null && { newImageName: input.newImageName }),
    ...(input.newImageTags != null && { newImageTags: serializeAws_json1_1Tags(input.newImageTags, context) }),
  };
};

const serializeAws_json1_1CreateUsageReportSubscriptionRequest = (
  input: CreateUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.MessageAction != null && { MessageAction: input.MessageAction }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteAppBlockRequest = (input: DeleteAppBlockRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteDirectoryConfigRequest = (
  input: DeleteDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
  };
};

const serializeAws_json1_1DeleteEntitlementRequest = (
  input: DeleteEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1DeleteFleetRequest = (input: DeleteFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteImageBuilderRequest = (
  input: DeleteImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteImagePermissionsRequest = (
  input: DeleteImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

const serializeAws_json1_1DeleteImageRequest = (input: DeleteImageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteStackRequest = (input: DeleteStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteUsageReportSubscriptionRequest = (
  input: DeleteUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DescribeAppBlocksRequest = (
  input: DescribeAppBlocksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arns != null && { Arns: serializeAws_json1_1ArnList(input.Arns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeApplicationFleetAssociationsRequest = (
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

const serializeAws_json1_1DescribeApplicationsRequest = (
  input: DescribeApplicationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arns != null && { Arns: serializeAws_json1_1ArnList(input.Arns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDirectoryConfigsRequest = (
  input: DescribeDirectoryConfigsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryNames != null && {
      DirectoryNames: serializeAws_json1_1DirectoryNameList(input.DirectoryNames, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeEntitlementsRequest = (
  input: DescribeEntitlementsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1DescribeFleetsRequest = (input: DescribeFleetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeImageBuildersRequest = (
  input: DescribeImageBuildersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Names != null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeImagePermissionsRequest = (
  input: DescribeImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SharedAwsAccountIds != null && {
      SharedAwsAccountIds: serializeAws_json1_1AwsAccountIdList(input.SharedAwsAccountIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeImagesRequest = (input: DescribeImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arns != null && { Arns: serializeAws_json1_1ArnList(input.Arns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Names != null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DescribeSessionsRequest = (input: DescribeSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1DescribeStacksRequest = (input: DescribeStacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.Names != null && { Names: serializeAws_json1_1StringList(input.Names, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeUsageReportSubscriptionsRequest = (
  input: DescribeUsageReportSubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeUsersRequest = (input: DescribeUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeUserStackAssociationsRequest = (
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

const serializeAws_json1_1DirectoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DisableUserRequest = (input: DisableUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DisassociateApplicationFleetRequest = (
  input: DisassociateApplicationFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
    ...(input.FleetName != null && { FleetName: input.FleetName }),
  };
};

const serializeAws_json1_1DisassociateApplicationFromEntitlementRequest = (
  input: DisassociateApplicationFromEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationIdentifier != null && { ApplicationIdentifier: input.ApplicationIdentifier }),
    ...(input.EntitlementName != null && { EntitlementName: input.EntitlementName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1DisassociateFleetRequest = (
  input: DisassociateFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1DomainJoinInfo = (input: DomainJoinInfo, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedName != null && {
      OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
    }),
  };
};

const serializeAws_json1_1DomainList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1EmbedHostDomains = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1EnableUserRequest = (input: EnableUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1EntitlementAttribute = (input: EntitlementAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1EntitlementAttributeList = (input: EntitlementAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EntitlementAttribute(entry, context);
    });
};

const serializeAws_json1_1ExpireSessionRequest = (input: ExpireSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1FleetAttributes = (input: (FleetAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ImagePermissions = (input: ImagePermissions, context: __SerdeContext): any => {
  return {
    ...(input.allowFleet != null && { allowFleet: input.allowFleet }),
    ...(input.allowImageBuilder != null && { allowImageBuilder: input.allowImageBuilder }),
  };
};

const serializeAws_json1_1ListAssociatedFleetsRequest = (
  input: ListAssociatedFleetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1ListAssociatedStacksRequest = (
  input: ListAssociatedStacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetName != null && { FleetName: input.FleetName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEntitledApplicationsRequest = (
  input: ListEntitledApplicationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntitlementName != null && { EntitlementName: input.EntitlementName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Platforms = (input: (PlatformType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

const serializeAws_json1_1ScriptDetails = (input: ScriptDetails, context: __SerdeContext): any => {
  return {
    ...(input.ExecutableParameters != null && { ExecutableParameters: input.ExecutableParameters }),
    ...(input.ExecutablePath != null && { ExecutablePath: input.ExecutablePath }),
    ...(input.ScriptS3Location != null && {
      ScriptS3Location: serializeAws_json1_1S3Location(input.ScriptS3Location, context),
    }),
    ...(input.TimeoutInSeconds != null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ServiceAccountCredentials = (
  input: ServiceAccountCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.AccountPassword != null && { AccountPassword: input.AccountPassword }),
  };
};

const serializeAws_json1_1StackAttributes = (input: (StackAttribute | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StartFleetRequest = (input: StartFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StartImageBuilderRequest = (
  input: StartImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppstreamAgentVersion != null && { AppstreamAgentVersion: input.AppstreamAgentVersion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopFleetRequest = (input: StopFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopImageBuilderRequest = (input: StopImageBuilderRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StorageConnector = (input: StorageConnector, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorType != null && { ConnectorType: input.ConnectorType }),
    ...(input.Domains != null && { Domains: serializeAws_json1_1DomainList(input.Domains, context) }),
    ...(input.ResourceIdentifier != null && { ResourceIdentifier: input.ResourceIdentifier }),
  };
};

const serializeAws_json1_1StorageConnectorList = (input: StorageConnector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StorageConnector(entry, context);
    });
};

const serializeAws_json1_1StreamingExperienceSettings = (
  input: StreamingExperienceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PreferredProtocol != null && { PreferredProtocol: input.PreferredProtocol }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppBlockArn != null && { AppBlockArn: input.AppBlockArn }),
    ...(input.AttributesToDelete != null && {
      AttributesToDelete: serializeAws_json1_1ApplicationAttributes(input.AttributesToDelete, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.IconS3Location != null && {
      IconS3Location: serializeAws_json1_1S3Location(input.IconS3Location, context),
    }),
    ...(input.LaunchParameters != null && { LaunchParameters: input.LaunchParameters }),
    ...(input.LaunchPath != null && { LaunchPath: input.LaunchPath }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

const serializeAws_json1_1UpdateDirectoryConfigRequest = (
  input: UpdateDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateBasedAuthProperties != null && {
      CertificateBasedAuthProperties: serializeAws_json1_1CertificateBasedAuthProperties(
        input.CertificateBasedAuthProperties,
        context
      ),
    }),
    ...(input.DirectoryName != null && { DirectoryName: input.DirectoryName }),
    ...(input.OrganizationalUnitDistinguishedNames != null && {
      OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
        input.OrganizationalUnitDistinguishedNames,
        context
      ),
    }),
    ...(input.ServiceAccountCredentials != null && {
      ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
        input.ServiceAccountCredentials,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateEntitlementRequest = (
  input: UpdateEntitlementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppVisibility != null && { AppVisibility: input.AppVisibility }),
    ...(input.Attributes != null && {
      Attributes: serializeAws_json1_1EntitlementAttributeList(input.Attributes, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StackName != null && { StackName: input.StackName }),
  };
};

const serializeAws_json1_1UpdateFleetRequest = (input: UpdateFleetRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToDelete != null && {
      AttributesToDelete: serializeAws_json1_1FleetAttributes(input.AttributesToDelete, context),
    }),
    ...(input.ComputeCapacity != null && {
      ComputeCapacity: serializeAws_json1_1ComputeCapacity(input.ComputeCapacity, context),
    }),
    ...(input.DeleteVpcConfig != null && { DeleteVpcConfig: input.DeleteVpcConfig }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds != null && { DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo != null && {
      DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(input.DomainJoinInfo, context),
    }),
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
      SessionScriptS3Location: serializeAws_json1_1S3Location(input.SessionScriptS3Location, context),
    }),
    ...(input.StreamView != null && { StreamView: input.StreamView }),
    ...(input.UsbDeviceFilterStrings != null && {
      UsbDeviceFilterStrings: serializeAws_json1_1UsbDeviceFilterStrings(input.UsbDeviceFilterStrings, context),
    }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context) }),
  };
};

const serializeAws_json1_1UpdateImagePermissionsRequest = (
  input: UpdateImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImagePermissions != null && {
      ImagePermissions: serializeAws_json1_1ImagePermissions(input.ImagePermissions, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SharedAccountId != null && { SharedAccountId: input.SharedAccountId }),
  };
};

const serializeAws_json1_1UpdateStackRequest = (input: UpdateStackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessEndpoints != null && {
      AccessEndpoints: serializeAws_json1_1AccessEndpointList(input.AccessEndpoints, context),
    }),
    ...(input.ApplicationSettings != null && {
      ApplicationSettings: serializeAws_json1_1ApplicationSettings(input.ApplicationSettings, context),
    }),
    ...(input.AttributesToDelete != null && {
      AttributesToDelete: serializeAws_json1_1StackAttributes(input.AttributesToDelete, context),
    }),
    ...(input.DeleteStorageConnectors != null && { DeleteStorageConnectors: input.DeleteStorageConnectors }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains != null && {
      EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(input.EmbedHostDomains, context),
    }),
    ...(input.FeedbackURL != null && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedirectURL != null && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors != null && {
      StorageConnectors: serializeAws_json1_1StorageConnectorList(input.StorageConnectors, context),
    }),
    ...(input.StreamingExperienceSettings != null && {
      StreamingExperienceSettings: serializeAws_json1_1StreamingExperienceSettings(
        input.StreamingExperienceSettings,
        context
      ),
    }),
    ...(input.UserSettings != null && {
      UserSettings: serializeAws_json1_1UserSettingList(input.UserSettings, context),
    }),
  };
};

const serializeAws_json1_1UsbDeviceFilterStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1UserSetting = (input: UserSetting, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Permission != null && { Permission: input.Permission }),
  };
};

const serializeAws_json1_1UserSettingList = (input: UserSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1UserSetting(entry, context);
    });
};

const serializeAws_json1_1UserStackAssociation = (input: UserStackAssociation, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.SendEmailNotification != null && { SendEmailNotification: input.SendEmailNotification }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1UserStackAssociationList = (input: UserStackAssociation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1UserStackAssociation(entry, context);
    });
};

const serializeAws_json1_1VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const deserializeAws_json1_1AccessEndpoint = (output: any, context: __SerdeContext): AccessEndpoint => {
  return {
    EndpointType: __expectString(output.EndpointType),
    VpceId: __expectString(output.VpceId),
  } as any;
};

const deserializeAws_json1_1AccessEndpointList = (output: any, context: __SerdeContext): AccessEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccessEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AppBlock = (output: any, context: __SerdeContext): AppBlock => {
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
      output.SetupScriptDetails != null
        ? deserializeAws_json1_1ScriptDetails(output.SetupScriptDetails, context)
        : undefined,
    SourceS3Location:
      output.SourceS3Location != null ? deserializeAws_json1_1S3Location(output.SourceS3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AppBlocks = (output: any, context: __SerdeContext): AppBlock[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AppBlock(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Application = (output: any, context: __SerdeContext): Application => {
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
    IconS3Location:
      output.IconS3Location != null ? deserializeAws_json1_1S3Location(output.IconS3Location, context) : undefined,
    IconURL: __expectString(output.IconURL),
    InstanceFamilies:
      output.InstanceFamilies != null ? deserializeAws_json1_1StringList(output.InstanceFamilies, context) : undefined,
    LaunchParameters: __expectString(output.LaunchParameters),
    LaunchPath: __expectString(output.LaunchPath),
    Metadata: output.Metadata != null ? deserializeAws_json1_1Metadata(output.Metadata, context) : undefined,
    Name: __expectString(output.Name),
    Platforms: output.Platforms != null ? deserializeAws_json1_1Platforms(output.Platforms, context) : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

const deserializeAws_json1_1ApplicationFleetAssociation = (
  output: any,
  context: __SerdeContext
): ApplicationFleetAssociation => {
  return {
    ApplicationArn: __expectString(output.ApplicationArn),
    FleetName: __expectString(output.FleetName),
  } as any;
};

const deserializeAws_json1_1ApplicationFleetAssociationList = (
  output: any,
  context: __SerdeContext
): ApplicationFleetAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationFleetAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Applications = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Application(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ApplicationSettingsResponse = (
  output: any,
  context: __SerdeContext
): ApplicationSettingsResponse => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    S3BucketName: __expectString(output.S3BucketName),
    SettingsGroup: __expectString(output.SettingsGroup),
  } as any;
};

const deserializeAws_json1_1AssociateApplicationFleetResult = (
  output: any,
  context: __SerdeContext
): AssociateApplicationFleetResult => {
  return {
    ApplicationFleetAssociation:
      output.ApplicationFleetAssociation != null
        ? deserializeAws_json1_1ApplicationFleetAssociation(output.ApplicationFleetAssociation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociateApplicationToEntitlementResult = (
  output: any,
  context: __SerdeContext
): AssociateApplicationToEntitlementResult => {
  return {} as any;
};

const deserializeAws_json1_1AssociateFleetResult = (output: any, context: __SerdeContext): AssociateFleetResult => {
  return {} as any;
};

const deserializeAws_json1_1BatchAssociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchAssociateUserStackResult => {
  return {
    errors:
      output.errors != null ? deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDisassociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchDisassociateUserStackResult => {
  return {
    errors:
      output.errors != null ? deserializeAws_json1_1UserStackAssociationErrorList(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateBasedAuthProperties = (
  output: any,
  context: __SerdeContext
): CertificateBasedAuthProperties => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ComputeCapacityStatus = (output: any, context: __SerdeContext): ComputeCapacityStatus => {
  return {
    Available: __expectInt32(output.Available),
    Desired: __expectInt32(output.Desired),
    InUse: __expectInt32(output.InUse),
    Running: __expectInt32(output.Running),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CopyImageResponse = (output: any, context: __SerdeContext): CopyImageResponse => {
  return {
    DestinationImageName: __expectString(output.DestinationImageName),
  } as any;
};

const deserializeAws_json1_1CreateAppBlockResult = (output: any, context: __SerdeContext): CreateAppBlockResult => {
  return {
    AppBlock: output.AppBlock != null ? deserializeAws_json1_1AppBlock(output.AppBlock, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateApplicationResult = (
  output: any,
  context: __SerdeContext
): CreateApplicationResult => {
  return {
    Application:
      output.Application != null ? deserializeAws_json1_1Application(output.Application, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): CreateDirectoryConfigResult => {
  return {
    DirectoryConfig:
      output.DirectoryConfig != null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEntitlementResult = (
  output: any,
  context: __SerdeContext
): CreateEntitlementResult => {
  return {
    Entitlement:
      output.Entitlement != null ? deserializeAws_json1_1Entitlement(output.Entitlement, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFleetResult = (output: any, context: __SerdeContext): CreateFleetResult => {
  return {
    Fleet: output.Fleet != null ? deserializeAws_json1_1Fleet(output.Fleet, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateImageBuilderResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderResult => {
  return {
    ImageBuilder:
      output.ImageBuilder != null ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateImageBuilderStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderStreamingURLResult => {
  return {
    Expires:
      output.Expires != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expires))) : undefined,
    StreamingURL: __expectString(output.StreamingURL),
  } as any;
};

const deserializeAws_json1_1CreateStackResult = (output: any, context: __SerdeContext): CreateStackResult => {
  return {
    Stack: output.Stack != null ? deserializeAws_json1_1Stack(output.Stack, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateStreamingURLResult => {
  return {
    Expires:
      output.Expires != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expires))) : undefined,
    StreamingURL: __expectString(output.StreamingURL),
  } as any;
};

const deserializeAws_json1_1CreateUpdatedImageResult = (
  output: any,
  context: __SerdeContext
): CreateUpdatedImageResult => {
  return {
    canUpdateImage: __expectBoolean(output.canUpdateImage),
    image: output.image != null ? deserializeAws_json1_1Image(output.image, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateUsageReportSubscriptionResult => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    Schedule: __expectString(output.Schedule),
  } as any;
};

const deserializeAws_json1_1CreateUserResult = (output: any, context: __SerdeContext): CreateUserResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAppBlockResult = (output: any, context: __SerdeContext): DeleteAppBlockResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationResult = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectoryConfigResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEntitlementResult = (
  output: any,
  context: __SerdeContext
): DeleteEntitlementResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteFleetResult = (output: any, context: __SerdeContext): DeleteFleetResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteImageBuilderResult = (
  output: any,
  context: __SerdeContext
): DeleteImageBuilderResult => {
  return {
    ImageBuilder:
      output.ImageBuilder != null ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DeleteImagePermissionsResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteImageResult = (output: any, context: __SerdeContext): DeleteImageResult => {
  return {
    Image: output.Image != null ? deserializeAws_json1_1Image(output.Image, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteStackResult = (output: any, context: __SerdeContext): DeleteStackResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteUsageReportSubscriptionResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteUserResult = (output: any, context: __SerdeContext): DeleteUserResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAppBlocksResult = (
  output: any,
  context: __SerdeContext
): DescribeAppBlocksResult => {
  return {
    AppBlocks: output.AppBlocks != null ? deserializeAws_json1_1AppBlocks(output.AppBlocks, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeApplicationFleetAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationFleetAssociationsResult => {
  return {
    ApplicationFleetAssociations:
      output.ApplicationFleetAssociations != null
        ? deserializeAws_json1_1ApplicationFleetAssociationList(output.ApplicationFleetAssociations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeApplicationsResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationsResult => {
  return {
    Applications:
      output.Applications != null ? deserializeAws_json1_1Applications(output.Applications, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDirectoryConfigsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectoryConfigsResult => {
  return {
    DirectoryConfigs:
      output.DirectoryConfigs != null
        ? deserializeAws_json1_1DirectoryConfigList(output.DirectoryConfigs, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEntitlementsResult = (
  output: any,
  context: __SerdeContext
): DescribeEntitlementsResult => {
  return {
    Entitlements:
      output.Entitlements != null ? deserializeAws_json1_1EntitlementList(output.Entitlements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFleetsResult = (output: any, context: __SerdeContext): DescribeFleetsResult => {
  return {
    Fleets: output.Fleets != null ? deserializeAws_json1_1FleetList(output.Fleets, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeImageBuildersResult = (
  output: any,
  context: __SerdeContext
): DescribeImageBuildersResult => {
  return {
    ImageBuilders:
      output.ImageBuilders != null ? deserializeAws_json1_1ImageBuilderList(output.ImageBuilders, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeImagePermissionsResult => {
  return {
    Name: __expectString(output.Name),
    NextToken: __expectString(output.NextToken),
    SharedImagePermissionsList:
      output.SharedImagePermissionsList != null
        ? deserializeAws_json1_1SharedImagePermissionsList(output.SharedImagePermissionsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeImagesResult = (output: any, context: __SerdeContext): DescribeImagesResult => {
  return {
    Images: output.Images != null ? deserializeAws_json1_1ImageList(output.Images, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeSessionsResult = (output: any, context: __SerdeContext): DescribeSessionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? deserializeAws_json1_1SessionList(output.Sessions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStacksResult = (output: any, context: __SerdeContext): DescribeStacksResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Stacks: output.Stacks != null ? deserializeAws_json1_1StackList(output.Stacks, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUsageReportSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): DescribeUsageReportSubscriptionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    UsageReportSubscriptions:
      output.UsageReportSubscriptions != null
        ? deserializeAws_json1_1UsageReportSubscriptionList(output.UsageReportSubscriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUsersResult = (output: any, context: __SerdeContext): DescribeUsersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? deserializeAws_json1_1UserList(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUserStackAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeUserStackAssociationsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    UserStackAssociations:
      output.UserStackAssociations != null
        ? deserializeAws_json1_1UserStackAssociationList(output.UserStackAssociations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryConfig = (output: any, context: __SerdeContext): DirectoryConfig => {
  return {
    CertificateBasedAuthProperties:
      output.CertificateBasedAuthProperties != null
        ? deserializeAws_json1_1CertificateBasedAuthProperties(output.CertificateBasedAuthProperties, context)
        : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DirectoryName: __expectString(output.DirectoryName),
    OrganizationalUnitDistinguishedNames:
      output.OrganizationalUnitDistinguishedNames != null
        ? deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
            output.OrganizationalUnitDistinguishedNames,
            context
          )
        : undefined,
    ServiceAccountCredentials:
      output.ServiceAccountCredentials != null
        ? deserializeAws_json1_1ServiceAccountCredentials(output.ServiceAccountCredentials, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryConfigList = (output: any, context: __SerdeContext): DirectoryConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DirectoryConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DisableUserResult = (output: any, context: __SerdeContext): DisableUserResult => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateApplicationFleetResult = (
  output: any,
  context: __SerdeContext
): DisassociateApplicationFleetResult => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateApplicationFromEntitlementResult = (
  output: any,
  context: __SerdeContext
): DisassociateApplicationFromEntitlementResult => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateFleetResult = (
  output: any,
  context: __SerdeContext
): DisassociateFleetResult => {
  return {} as any;
};

const deserializeAws_json1_1DomainJoinInfo = (output: any, context: __SerdeContext): DomainJoinInfo => {
  return {
    DirectoryName: __expectString(output.DirectoryName),
    OrganizationalUnitDistinguishedName: __expectString(output.OrganizationalUnitDistinguishedName),
  } as any;
};

const deserializeAws_json1_1DomainList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1EmbedHostDomains = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1EnableUserResult = (output: any, context: __SerdeContext): EnableUserResult => {
  return {} as any;
};

const deserializeAws_json1_1EntitledApplication = (output: any, context: __SerdeContext): EntitledApplication => {
  return {
    ApplicationIdentifier: __expectString(output.ApplicationIdentifier),
  } as any;
};

const deserializeAws_json1_1EntitledApplicationList = (output: any, context: __SerdeContext): EntitledApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntitledApplication(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Entitlement = (output: any, context: __SerdeContext): Entitlement => {
  return {
    AppVisibility: __expectString(output.AppVisibility),
    Attributes:
      output.Attributes != null
        ? deserializeAws_json1_1EntitlementAttributeList(output.Attributes, context)
        : undefined,
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

const deserializeAws_json1_1EntitlementAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EntitlementAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EntitlementAttribute = (output: any, context: __SerdeContext): EntitlementAttribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1EntitlementAttributeList = (
  output: any,
  context: __SerdeContext
): EntitlementAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntitlementAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntitlementList = (output: any, context: __SerdeContext): Entitlement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Entitlement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntitlementNotFoundException = (
  output: any,
  context: __SerdeContext
): EntitlementNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ExpireSessionResult = (output: any, context: __SerdeContext): ExpireSessionResult => {
  return {} as any;
};

const deserializeAws_json1_1Fleet = (output: any, context: __SerdeContext): Fleet => {
  return {
    Arn: __expectString(output.Arn),
    ComputeCapacityStatus:
      output.ComputeCapacityStatus != null
        ? deserializeAws_json1_1ComputeCapacityStatus(output.ComputeCapacityStatus, context)
        : undefined,
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisconnectTimeoutInSeconds: __expectInt32(output.DisconnectTimeoutInSeconds),
    DisplayName: __expectString(output.DisplayName),
    DomainJoinInfo:
      output.DomainJoinInfo != null ? deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context) : undefined,
    EnableDefaultInternetAccess: __expectBoolean(output.EnableDefaultInternetAccess),
    FleetErrors:
      output.FleetErrors != null ? deserializeAws_json1_1FleetErrors(output.FleetErrors, context) : undefined,
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
      output.SessionScriptS3Location != null
        ? deserializeAws_json1_1S3Location(output.SessionScriptS3Location, context)
        : undefined,
    State: __expectString(output.State),
    StreamView: __expectString(output.StreamView),
    UsbDeviceFilterStrings:
      output.UsbDeviceFilterStrings != null
        ? deserializeAws_json1_1UsbDeviceFilterStrings(output.UsbDeviceFilterStrings, context)
        : undefined,
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FleetError = (output: any, context: __SerdeContext): FleetError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1FleetErrors = (output: any, context: __SerdeContext): FleetError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FleetError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FleetList = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Fleet(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Image = (output: any, context: __SerdeContext): Image => {
  return {
    Applications:
      output.Applications != null ? deserializeAws_json1_1Applications(output.Applications, context) : undefined,
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
    ImageErrors:
      output.ImageErrors != null ? deserializeAws_json1_1ResourceErrors(output.ImageErrors, context) : undefined,
    ImagePermissions:
      output.ImagePermissions != null
        ? deserializeAws_json1_1ImagePermissions(output.ImagePermissions, context)
        : undefined,
    Name: __expectString(output.Name),
    Platform: __expectString(output.Platform),
    PublicBaseImageReleasedDate:
      output.PublicBaseImageReleasedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PublicBaseImageReleasedDate)))
        : undefined,
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1ImageStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Visibility: __expectString(output.Visibility),
  } as any;
};

const deserializeAws_json1_1ImageBuilder = (output: any, context: __SerdeContext): ImageBuilder => {
  return {
    AccessEndpoints:
      output.AccessEndpoints != null
        ? deserializeAws_json1_1AccessEndpointList(output.AccessEndpoints, context)
        : undefined,
    AppstreamAgentVersion: __expectString(output.AppstreamAgentVersion),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    DomainJoinInfo:
      output.DomainJoinInfo != null ? deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context) : undefined,
    EnableDefaultInternetAccess: __expectBoolean(output.EnableDefaultInternetAccess),
    IamRoleArn: __expectString(output.IamRoleArn),
    ImageArn: __expectString(output.ImageArn),
    ImageBuilderErrors:
      output.ImageBuilderErrors != null
        ? deserializeAws_json1_1ResourceErrors(output.ImageBuilderErrors, context)
        : undefined,
    InstanceType: __expectString(output.InstanceType),
    Name: __expectString(output.Name),
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration != null
        ? deserializeAws_json1_1NetworkAccessConfiguration(output.NetworkAccessConfiguration, context)
        : undefined,
    Platform: __expectString(output.Platform),
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1ImageBuilderStateChangeReason(output.StateChangeReason, context)
        : undefined,
    VpcConfig: output.VpcConfig != null ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImageBuilderList = (output: any, context: __SerdeContext): ImageBuilder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImageBuilder(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImageBuilderStateChangeReason = (
  output: any,
  context: __SerdeContext
): ImageBuilderStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ImageList = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Image(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImagePermissions = (output: any, context: __SerdeContext): ImagePermissions => {
  return {
    allowFleet: __expectBoolean(output.allowFleet),
    allowImageBuilder: __expectBoolean(output.allowImageBuilder),
  } as any;
};

const deserializeAws_json1_1ImageStateChangeReason = (output: any, context: __SerdeContext): ImageStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IncompatibleImageException = (
  output: any,
  context: __SerdeContext
): IncompatibleImageException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidAccountStatusException = (
  output: any,
  context: __SerdeContext
): InvalidAccountStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRoleException = (output: any, context: __SerdeContext): InvalidRoleException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LastReportGenerationExecutionError = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1LastReportGenerationExecutionErrors = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LastReportGenerationExecutionError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAssociatedFleetsResult = (
  output: any,
  context: __SerdeContext
): ListAssociatedFleetsResult => {
  return {
    Names: output.Names != null ? deserializeAws_json1_1StringList(output.Names, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAssociatedStacksResult = (
  output: any,
  context: __SerdeContext
): ListAssociatedStacksResult => {
  return {
    Names: output.Names != null ? deserializeAws_json1_1StringList(output.Names, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEntitledApplicationsResult = (
  output: any,
  context: __SerdeContext
): ListEntitledApplicationsResult => {
  return {
    EntitledApplications:
      output.EntitledApplications != null
        ? deserializeAws_json1_1EntitledApplicationList(output.EntitledApplications, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Metadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1NetworkAccessConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkAccessConfiguration => {
  return {
    EniId: __expectString(output.EniId),
    EniPrivateIpAddress: __expectString(output.EniPrivateIpAddress),
  } as any;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1Platforms = (output: any, context: __SerdeContext): (PlatformType | string)[] => {
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

const deserializeAws_json1_1RequestLimitExceededException = (
  output: any,
  context: __SerdeContext
): RequestLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceError = (output: any, context: __SerdeContext): ResourceError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorTimestamp:
      output.ErrorTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ErrorTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceErrors = (output: any, context: __SerdeContext): ResourceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotAvailableException = (
  output: any,
  context: __SerdeContext
): ResourceNotAvailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
  } as any;
};

const deserializeAws_json1_1ScriptDetails = (output: any, context: __SerdeContext): ScriptDetails => {
  return {
    ExecutableParameters: __expectString(output.ExecutableParameters),
    ExecutablePath: __expectString(output.ExecutablePath),
    ScriptS3Location:
      output.ScriptS3Location != null ? deserializeAws_json1_1S3Location(output.ScriptS3Location, context) : undefined,
    TimeoutInSeconds: __expectInt32(output.TimeoutInSeconds),
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ServiceAccountCredentials = (
  output: any,
  context: __SerdeContext
): ServiceAccountCredentials => {
  return {
    AccountName: __expectString(output.AccountName),
    AccountPassword: __expectString(output.AccountPassword),
  } as any;
};

const deserializeAws_json1_1Session = (output: any, context: __SerdeContext): Session => {
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
        ? deserializeAws_json1_1NetworkAccessConfiguration(output.NetworkAccessConfiguration, context)
        : undefined,
    StackName: __expectString(output.StackName),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_json1_1SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Session(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SharedImagePermissions = (output: any, context: __SerdeContext): SharedImagePermissions => {
  return {
    imagePermissions:
      output.imagePermissions != null
        ? deserializeAws_json1_1ImagePermissions(output.imagePermissions, context)
        : undefined,
    sharedAccountId: __expectString(output.sharedAccountId),
  } as any;
};

const deserializeAws_json1_1SharedImagePermissionsList = (
  output: any,
  context: __SerdeContext
): SharedImagePermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SharedImagePermissions(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Stack = (output: any, context: __SerdeContext): Stack => {
  return {
    AccessEndpoints:
      output.AccessEndpoints != null
        ? deserializeAws_json1_1AccessEndpointList(output.AccessEndpoints, context)
        : undefined,
    ApplicationSettings:
      output.ApplicationSettings != null
        ? deserializeAws_json1_1ApplicationSettingsResponse(output.ApplicationSettings, context)
        : undefined,
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    EmbedHostDomains:
      output.EmbedHostDomains != null
        ? deserializeAws_json1_1EmbedHostDomains(output.EmbedHostDomains, context)
        : undefined,
    FeedbackURL: __expectString(output.FeedbackURL),
    Name: __expectString(output.Name),
    RedirectURL: __expectString(output.RedirectURL),
    StackErrors:
      output.StackErrors != null ? deserializeAws_json1_1StackErrors(output.StackErrors, context) : undefined,
    StorageConnectors:
      output.StorageConnectors != null
        ? deserializeAws_json1_1StorageConnectorList(output.StorageConnectors, context)
        : undefined,
    StreamingExperienceSettings:
      output.StreamingExperienceSettings != null
        ? deserializeAws_json1_1StreamingExperienceSettings(output.StreamingExperienceSettings, context)
        : undefined,
    UserSettings:
      output.UserSettings != null ? deserializeAws_json1_1UserSettingList(output.UserSettings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StackError = (output: any, context: __SerdeContext): StackError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1StackErrors = (output: any, context: __SerdeContext): StackError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StackError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StackList = (output: any, context: __SerdeContext): Stack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Stack(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartFleetResult = (output: any, context: __SerdeContext): StartFleetResult => {
  return {} as any;
};

const deserializeAws_json1_1StartImageBuilderResult = (
  output: any,
  context: __SerdeContext
): StartImageBuilderResult => {
  return {
    ImageBuilder:
      output.ImageBuilder != null ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StopFleetResult = (output: any, context: __SerdeContext): StopFleetResult => {
  return {} as any;
};

const deserializeAws_json1_1StopImageBuilderResult = (output: any, context: __SerdeContext): StopImageBuilderResult => {
  return {
    ImageBuilder:
      output.ImageBuilder != null ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StorageConnector = (output: any, context: __SerdeContext): StorageConnector => {
  return {
    ConnectorType: __expectString(output.ConnectorType),
    Domains: output.Domains != null ? deserializeAws_json1_1DomainList(output.Domains, context) : undefined,
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
  } as any;
};

const deserializeAws_json1_1StorageConnectorList = (output: any, context: __SerdeContext): StorageConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StorageConnector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StreamingExperienceSettings = (
  output: any,
  context: __SerdeContext
): StreamingExperienceSettings => {
  return {
    PreferredProtocol: __expectString(output.PreferredProtocol),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateApplicationResult = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResult => {
  return {
    Application:
      output.Application != null ? deserializeAws_json1_1Application(output.Application, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): UpdateDirectoryConfigResult => {
  return {
    DirectoryConfig:
      output.DirectoryConfig != null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateEntitlementResult = (
  output: any,
  context: __SerdeContext
): UpdateEntitlementResult => {
  return {
    Entitlement:
      output.Entitlement != null ? deserializeAws_json1_1Entitlement(output.Entitlement, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateFleetResult = (output: any, context: __SerdeContext): UpdateFleetResult => {
  return {
    Fleet: output.Fleet != null ? deserializeAws_json1_1Fleet(output.Fleet, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): UpdateImagePermissionsResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateStackResult = (output: any, context: __SerdeContext): UpdateStackResult => {
  return {
    Stack: output.Stack != null ? deserializeAws_json1_1Stack(output.Stack, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UsageReportSubscription = (
  output: any,
  context: __SerdeContext
): UsageReportSubscription => {
  return {
    LastGeneratedReportDate:
      output.LastGeneratedReportDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastGeneratedReportDate)))
        : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    Schedule: __expectString(output.Schedule),
    SubscriptionErrors:
      output.SubscriptionErrors != null
        ? deserializeAws_json1_1LastReportGenerationExecutionErrors(output.SubscriptionErrors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UsageReportSubscriptionList = (
  output: any,
  context: __SerdeContext
): UsageReportSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UsageReportSubscription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UsbDeviceFilterStrings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1User = (output: any, context: __SerdeContext): User => {
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

const deserializeAws_json1_1UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1User(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UserSetting = (output: any, context: __SerdeContext): UserSetting => {
  return {
    Action: __expectString(output.Action),
    Permission: __expectString(output.Permission),
  } as any;
};

const deserializeAws_json1_1UserSettingList = (output: any, context: __SerdeContext): UserSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UserStackAssociation = (output: any, context: __SerdeContext): UserStackAssociation => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    SendEmailNotification: __expectBoolean(output.SendEmailNotification),
    StackName: __expectString(output.StackName),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1UserStackAssociationError = (
  output: any,
  context: __SerdeContext
): UserStackAssociationError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    UserStackAssociation:
      output.UserStackAssociation != null
        ? deserializeAws_json1_1UserStackAssociation(output.UserStackAssociation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserStackAssociationErrorList = (
  output: any,
  context: __SerdeContext
): UserStackAssociationError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserStackAssociationError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UserStackAssociationList = (
  output: any,
  context: __SerdeContext
): UserStackAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserStackAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context) : undefined,
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
