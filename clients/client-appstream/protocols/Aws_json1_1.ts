import {
  AssociateFleetCommandInput,
  AssociateFleetCommandOutput
} from "../commands/AssociateFleetCommand";
import {
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput
} from "../commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput
} from "../commands/BatchDisassociateUserStackCommand";
import {
  CopyImageCommandInput,
  CopyImageCommandOutput
} from "../commands/CopyImageCommand";
import {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput
} from "../commands/CreateDirectoryConfigCommand";
import {
  CreateFleetCommandInput,
  CreateFleetCommandOutput
} from "../commands/CreateFleetCommand";
import {
  CreateImageBuilderCommandInput,
  CreateImageBuilderCommandOutput
} from "../commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput
} from "../commands/CreateImageBuilderStreamingURLCommand";
import {
  CreateStackCommandInput,
  CreateStackCommandOutput
} from "../commands/CreateStackCommand";
import {
  CreateStreamingURLCommandInput,
  CreateStreamingURLCommandOutput
} from "../commands/CreateStreamingURLCommand";
import {
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput
} from "../commands/CreateUsageReportSubscriptionCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput
} from "../commands/DeleteDirectoryConfigCommand";
import {
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput
} from "../commands/DeleteFleetCommand";
import {
  DeleteImageBuilderCommandInput,
  DeleteImageBuilderCommandOutput
} from "../commands/DeleteImageBuilderCommand";
import {
  DeleteImageCommandInput,
  DeleteImageCommandOutput
} from "../commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput
} from "../commands/DeleteImagePermissionsCommand";
import {
  DeleteStackCommandInput,
  DeleteStackCommandOutput
} from "../commands/DeleteStackCommand";
import {
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput
} from "../commands/DeleteUsageReportSubscriptionCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput
} from "../commands/DescribeDirectoryConfigsCommand";
import {
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput
} from "../commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput
} from "../commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput
} from "../commands/DescribeImagePermissionsCommand";
import {
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput
} from "../commands/DescribeImagesCommand";
import {
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput
} from "../commands/DescribeSessionsCommand";
import {
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput
} from "../commands/DescribeStacksCommand";
import {
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput
} from "../commands/DescribeUsageReportSubscriptionsCommand";
import {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput
} from "../commands/DescribeUserStackAssociationsCommand";
import {
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput
} from "../commands/DescribeUsersCommand";
import {
  DisableUserCommandInput,
  DisableUserCommandOutput
} from "../commands/DisableUserCommand";
import {
  DisassociateFleetCommandInput,
  DisassociateFleetCommandOutput
} from "../commands/DisassociateFleetCommand";
import {
  EnableUserCommandInput,
  EnableUserCommandOutput
} from "../commands/EnableUserCommand";
import {
  ExpireSessionCommandInput,
  ExpireSessionCommandOutput
} from "../commands/ExpireSessionCommand";
import {
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput
} from "../commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput
} from "../commands/ListAssociatedStacksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  StartFleetCommandInput,
  StartFleetCommandOutput
} from "../commands/StartFleetCommand";
import {
  StartImageBuilderCommandInput,
  StartImageBuilderCommandOutput
} from "../commands/StartImageBuilderCommand";
import {
  StopFleetCommandInput,
  StopFleetCommandOutput
} from "../commands/StopFleetCommand";
import {
  StopImageBuilderCommandInput,
  StopImageBuilderCommandOutput
} from "../commands/StopImageBuilderCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput
} from "../commands/UpdateDirectoryConfigCommand";
import {
  UpdateFleetCommandInput,
  UpdateFleetCommandOutput
} from "../commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput
} from "../commands/UpdateImagePermissionsCommand";
import {
  UpdateStackCommandInput,
  UpdateStackCommandOutput
} from "../commands/UpdateStackCommand";
import {
  AccessEndpoint,
  Application,
  ApplicationSettings,
  ApplicationSettingsResponse,
  AssociateFleetRequest,
  AssociateFleetResult,
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackResult,
  BatchDisassociateUserStackRequest,
  BatchDisassociateUserStackResult,
  ComputeCapacity,
  ComputeCapacityStatus,
  ConcurrentModificationException,
  CopyImageRequest,
  CopyImageResponse,
  CreateDirectoryConfigRequest,
  CreateDirectoryConfigResult,
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
  CreateUsageReportSubscriptionRequest,
  CreateUsageReportSubscriptionResult,
  CreateUserRequest,
  CreateUserResult,
  DeleteDirectoryConfigRequest,
  DeleteDirectoryConfigResult,
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
  DescribeDirectoryConfigsRequest,
  DescribeDirectoryConfigsResult,
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
  DescribeUserStackAssociationsRequest,
  DescribeUserStackAssociationsResult,
  DescribeUsersRequest,
  DescribeUsersResult,
  DirectoryConfig,
  DisableUserRequest,
  DisableUserResult,
  DisassociateFleetRequest,
  DisassociateFleetResult,
  DomainJoinInfo,
  EnableUserRequest,
  EnableUserResult,
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
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  NetworkAccessConfiguration,
  OperationNotPermittedException,
  ResourceAlreadyExistsException,
  ResourceError,
  ResourceInUseException,
  ResourceNotAvailableException,
  ResourceNotFoundException,
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
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigResult,
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
  VpcConfig
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateFleetCommand = async (
  input: AssociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.AssociateFleet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateFleetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchAssociateUserStackCommand = async (
  input: BatchAssociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.BatchAssociateUserStack"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchAssociateUserStackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDisassociateUserStackCommand = async (
  input: BatchDisassociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.BatchDisassociateUserStack"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDisassociateUserStackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyImageCommand = async (
  input: CopyImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CopyImage"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDirectoryConfigCommand = async (
  input: CreateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateDirectoryConfig"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDirectoryConfigRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateFleet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateImageBuilder"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateImageBuilderStreamingURLCommand = async (
  input: CreateImageBuilderStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateImageBuilderStreamingURL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateImageBuilderStreamingURLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStackCommand = async (
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateStack"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateStreamingURL"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateStreamingURLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUsageReportSubscriptionCommand = async (
  input: CreateUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateUsageReportSubscription"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateUsageReportSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.CreateUser"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDirectoryConfigCommand = async (
  input: DeleteDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteDirectoryConfig"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDirectoryConfigRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteFleet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteImage"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteImageBuilder"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteImagePermissionsCommand = async (
  input: DeleteImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteImagePermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteImagePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStackCommand = async (
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteStack"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteUsageReportSubscription"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteUsageReportSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DeleteUser"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectoryConfigsCommand = async (
  input: DescribeDirectoryConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeDirectoryConfigs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDirectoryConfigsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFleetsCommand = async (
  input: DescribeFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeFleets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeFleetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImageBuildersCommand = async (
  input: DescribeImageBuildersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeImageBuilders"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImageBuildersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImagePermissionsCommand = async (
  input: DescribeImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeImagePermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImagePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImagesCommand = async (
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeImages"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSessionsCommand = async (
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeSessions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSessionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStacksCommand = async (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeStacks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStacksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUsageReportSubscriptionsCommand = async (
  input: DescribeUsageReportSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeUsageReportSubscriptions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUsageReportSubscriptionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeUsers"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUsersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserStackAssociationsCommand = async (
  input: DescribeUserStackAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DescribeUserStackAssociations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUserStackAssociationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableUserCommand = async (
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DisableUser"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateFleetCommand = async (
  input: DisassociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.DisassociateFleet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateFleetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableUserCommand = async (
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.EnableUser"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.ExpireSession"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ExpireSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociatedFleetsCommand = async (
  input: ListAssociatedFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.ListAssociatedFleets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssociatedFleetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAssociatedStacksCommand = async (
  input: ListAssociatedStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.ListAssociatedStacks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssociatedStacksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartFleetCommand = async (
  input: StartFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.StartFleet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.StartImageBuilder"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopFleetCommand = async (
  input: StopFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.StopFleet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.StopImageBuilder"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.TagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDirectoryConfigCommand = async (
  input: UpdateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.UpdateDirectoryConfig"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDirectoryConfigRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFleetCommand = async (
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.UpdateFleet"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.UpdateImagePermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateImagePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStackCommand = async (
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PhotonAdminProxyService.UpdateStack"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateFleetResult(data, context);
  const response: AssociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchAssociateUserStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchAssociateUserStackCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchAssociateUserStackResult(data, context);
  const response: BatchAssociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchAssociateUserStackResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchAssociateUserStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchDisassociateUserStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDisassociateUserStackCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDisassociateUserStackResult(
    data,
    context
  );
  const response: BatchDisassociateUserStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDisassociateUserStackResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDisassociateUserStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CopyImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopyImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyImageResponse(data, context);
  const response: CopyImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyImageResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDirectoryConfigCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectoryConfigResult(data, context);
  const response: CreateDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectoryConfigResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDirectoryConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFleetResult(data, context);
  const response: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateImageBuilderCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateImageBuilderResult(data, context);
  const response: CreateImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateImageBuilderResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateImageBuilderStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateImageBuilderStreamingURLResult(
    data,
    context
  );
  const response: CreateImageBuilderStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateImageBuilderStreamingURLResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStackResult(data, context);
  const response: CreateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStackResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateStreamingURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateStreamingURLCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStreamingURLResult(data, context);
  const response: CreateStreamingURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStreamingURLResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStreamingURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateUsageReportSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUsageReportSubscriptionResult(
    data,
    context
  );
  const response: CreateUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUsageReportSubscriptionResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUsageReportSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResult(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.appstream#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDirectoryConfigCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectoryConfigResult(data, context);
  const response: DeleteDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectoryConfigResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDirectoryConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFleetResult(data, context);
  const response: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImageResult(data, context);
  const response: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteImageResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteImageBuilderCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImageBuilderResult(data, context);
  const response: DeleteImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteImageBuilderResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteImagePermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImagePermissionsResult(data, context);
  const response: DeleteImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteImagePermissionsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStackResult(data, context);
  const response: DeleteStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStackResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteUsageReportSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUsageReportSubscriptionResult(
    data,
    context
  );
  const response: DeleteUsageReportSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUsageReportSubscriptionResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResult(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUserResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDirectoryConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDirectoryConfigsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectoryConfigsResult(
    data,
    context
  );
  const response: DescribeDirectoryConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDirectoryConfigsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectoryConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFleetsResult(data, context);
  const response: DescribeFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFleetsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeImageBuildersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImageBuildersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImageBuildersResult(data, context);
  const response: DescribeImageBuildersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImageBuildersResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImageBuildersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImagePermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagePermissionsResult(
    data,
    context
  );
  const response: DescribeImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImagePermissionsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImagesResult(data, context);
  const response: DescribeImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImagesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSessionsResult(data, context);
  const response: DescribeSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSessionsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStacksResult(data, context);
  const response: DescribeStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStacksResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUsageReportSubscriptionsResult(
    data,
    context
  );
  const response: DescribeUsageReportSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUsageReportSubscriptionsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUsersResult(data, context);
  const response: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUsersResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeUserStackAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUserStackAssociationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserStackAssociationsResult(
    data,
    context
  );
  const response: DescribeUserStackAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserStackAssociationsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserStackAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableUserResult(data, context);
  const response: DisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableUserResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateFleetResult(data, context);
  const response: DisassociateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1EnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableUserResult(data, context);
  const response: EnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableUserResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ExpireSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExpireSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExpireSessionResult(data, context);
  const response: ExpireSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExpireSessionResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExpireSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssociatedFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssociatedFleetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociatedFleetsResult(data, context);
  const response: ListAssociatedFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssociatedFleetsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociatedFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAssociatedStacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAssociatedStacksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAssociatedStacksResult(data, context);
  const response: ListAssociatedStacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssociatedStacksResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAssociatedStacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFleetResult(data, context);
  const response: StartFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImageBuilderResult(data, context);
  const response: StartImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartImageBuilderResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopFleetResult(data, context);
  const response: StopFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopImageBuilderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopImageBuilderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopImageBuilderResult(data, context);
  const response: StopImageBuilderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopImageBuilderResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopImageBuilderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateDirectoryConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDirectoryConfigCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDirectoryConfigResult(data, context);
  const response: UpdateDirectoryConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDirectoryConfigResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDirectoryConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFleetResult(data, context);
  const response: UpdateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFleetResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateImagePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateImagePermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateImagePermissionsResult(data, context);
  const response: UpdateImagePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateImagePermissionsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateImagePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.appstream#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateStackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateStackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateStackResult(data, context);
  const response: UpdateStackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStackResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appstream#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.appstream#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.appstream#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.appstream#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.appstream#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appstream#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.appstream#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.appstream#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appstream#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncompatibleImageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleImageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatibleImageException(
    body,
    context
  );
  const contents: IncompatibleImageException = {
    name: "IncompatibleImageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAccountStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccountStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAccountStatusException(
    body,
    context
  );
  const contents: InvalidAccountStatusException = {
    name: "InvalidAccountStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(
    body,
    context
  );
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRoleException(
    body,
    context
  );
  const contents: InvalidRoleException = {
    name: "InvalidRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(
    body,
    context
  );
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotAvailableException(
    body,
    context
  );
  const contents: ResourceNotAvailableException = {
    name: "ResourceNotAvailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AccessEndpoint = (
  input: AccessEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointType !== undefined && {
      EndpointType: input.EndpointType
    }),
    ...(input.VpceId !== undefined && { VpceId: input.VpceId })
  };
};

const serializeAws_json1_1AccessEndpointList = (
  input: AccessEndpoint[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1AccessEndpoint(entry, context));
};

const serializeAws_json1_1ApplicationSettings = (
  input: ApplicationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.SettingsGroup !== undefined && {
      SettingsGroup: input.SettingsGroup
    })
  };
};

const serializeAws_json1_1ArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AssociateFleetRequest = (
  input: AssociateFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetName !== undefined && { FleetName: input.FleetName }),
    ...(input.StackName !== undefined && { StackName: input.StackName })
  };
};

const serializeAws_json1_1AwsAccountIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1BatchAssociateUserStackRequest = (
  input: BatchAssociateUserStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserStackAssociations !== undefined && {
      UserStackAssociations: serializeAws_json1_1UserStackAssociationList(
        input.UserStackAssociations,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchDisassociateUserStackRequest = (
  input: BatchDisassociateUserStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserStackAssociations !== undefined && {
      UserStackAssociations: serializeAws_json1_1UserStackAssociationList(
        input.UserStackAssociations,
        context
      )
    })
  };
};

const serializeAws_json1_1ComputeCapacity = (
  input: ComputeCapacity,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredInstances !== undefined && {
      DesiredInstances: input.DesiredInstances
    })
  };
};

const serializeAws_json1_1CopyImageRequest = (
  input: CopyImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationImageDescription !== undefined && {
      DestinationImageDescription: input.DestinationImageDescription
    }),
    ...(input.DestinationImageName !== undefined && {
      DestinationImageName: input.DestinationImageName
    }),
    ...(input.DestinationRegion !== undefined && {
      DestinationRegion: input.DestinationRegion
    }),
    ...(input.SourceImageName !== undefined && {
      SourceImageName: input.SourceImageName
    })
  };
};

const serializeAws_json1_1CreateDirectoryConfigRequest = (
  input: CreateDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryName !== undefined && {
      DirectoryName: input.DirectoryName
    }),
    ...(input.OrganizationalUnitDistinguishedNames !== undefined && {
      OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
        input.OrganizationalUnitDistinguishedNames,
        context
      )
    }),
    ...(input.ServiceAccountCredentials !== undefined && {
      ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
        input.ServiceAccountCredentials,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateFleetRequest = (
  input: CreateFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeCapacity !== undefined && {
      ComputeCapacity: serializeAws_json1_1ComputeCapacity(
        input.ComputeCapacity,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds !== undefined && {
      DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds
    }),
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo !== undefined && {
      DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(
        input.DomainJoinInfo,
        context
      )
    }),
    ...(input.EnableDefaultInternetAccess !== undefined && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess
    }),
    ...(input.FleetType !== undefined && { FleetType: input.FleetType }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdleDisconnectTimeoutInSeconds !== undefined && {
      IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds
    }),
    ...(input.ImageArn !== undefined && { ImageArn: input.ImageArn }),
    ...(input.ImageName !== undefined && { ImageName: input.ImageName }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    }),
    ...(input.MaxUserDurationInSeconds !== undefined && {
      MaxUserDurationInSeconds: input.MaxUserDurationInSeconds
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context)
    })
  };
};

const serializeAws_json1_1CreateImageBuilderRequest = (
  input: CreateImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessEndpoints !== undefined && {
      AccessEndpoints: serializeAws_json1_1AccessEndpointList(
        input.AccessEndpoints,
        context
      )
    }),
    ...(input.AppstreamAgentVersion !== undefined && {
      AppstreamAgentVersion: input.AppstreamAgentVersion
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo !== undefined && {
      DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(
        input.DomainJoinInfo,
        context
      )
    }),
    ...(input.EnableDefaultInternetAccess !== undefined && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess
    }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn }),
    ...(input.ImageArn !== undefined && { ImageArn: input.ImageArn }),
    ...(input.ImageName !== undefined && { ImageName: input.ImageName }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context)
    })
  };
};

const serializeAws_json1_1CreateImageBuilderStreamingURLRequest = (
  input: CreateImageBuilderStreamingURLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Validity !== undefined && { Validity: input.Validity })
  };
};

const serializeAws_json1_1CreateStackRequest = (
  input: CreateStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessEndpoints !== undefined && {
      AccessEndpoints: serializeAws_json1_1AccessEndpointList(
        input.AccessEndpoints,
        context
      )
    }),
    ...(input.ApplicationSettings !== undefined && {
      ApplicationSettings: serializeAws_json1_1ApplicationSettings(
        input.ApplicationSettings,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains !== undefined && {
      EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(
        input.EmbedHostDomains,
        context
      )
    }),
    ...(input.FeedbackURL !== undefined && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RedirectURL !== undefined && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors !== undefined && {
      StorageConnectors: serializeAws_json1_1StorageConnectorList(
        input.StorageConnectors,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    }),
    ...(input.UserSettings !== undefined && {
      UserSettings: serializeAws_json1_1UserSettingList(
        input.UserSettings,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateStreamingURLRequest = (
  input: CreateStreamingURLRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationId !== undefined && {
      ApplicationId: input.ApplicationId
    }),
    ...(input.FleetName !== undefined && { FleetName: input.FleetName }),
    ...(input.SessionContext !== undefined && {
      SessionContext: input.SessionContext
    }),
    ...(input.StackName !== undefined && { StackName: input.StackName }),
    ...(input.UserId !== undefined && { UserId: input.UserId }),
    ...(input.Validity !== undefined && { Validity: input.Validity })
  };
};

const serializeAws_json1_1CreateUsageReportSubscriptionRequest = (
  input: CreateUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1CreateUserRequest = (
  input: CreateUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.FirstName !== undefined && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && { LastName: input.LastName }),
    ...(input.MessageAction !== undefined && {
      MessageAction: input.MessageAction
    }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1DeleteDirectoryConfigRequest = (
  input: DeleteDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryName !== undefined && {
      DirectoryName: input.DirectoryName
    })
  };
};

const serializeAws_json1_1DeleteFleetRequest = (
  input: DeleteFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeleteImageBuilderRequest = (
  input: DeleteImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeleteImagePermissionsRequest = (
  input: DeleteImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SharedAccountId !== undefined && {
      SharedAccountId: input.SharedAccountId
    })
  };
};

const serializeAws_json1_1DeleteImageRequest = (
  input: DeleteImageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeleteStackRequest = (
  input: DeleteStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeleteUsageReportSubscriptionRequest = (
  input: DeleteUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeleteUserRequest = (
  input: DeleteUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1DescribeDirectoryConfigsRequest = (
  input: DescribeDirectoryConfigsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryNames !== undefined && {
      DirectoryNames: serializeAws_json1_1DirectoryNameList(
        input.DirectoryNames,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeFleetsRequest = (
  input: DescribeFleetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Names !== undefined && {
      Names: serializeAws_json1_1StringList(input.Names, context)
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeImageBuildersRequest = (
  input: DescribeImageBuildersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Names !== undefined && {
      Names: serializeAws_json1_1StringList(input.Names, context)
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeImagePermissionsRequest = (
  input: DescribeImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SharedAwsAccountIds !== undefined && {
      SharedAwsAccountIds: serializeAws_json1_1AwsAccountIdList(
        input.SharedAwsAccountIds,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeImagesRequest = (
  input: DescribeImagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arns !== undefined && {
      Arns: serializeAws_json1_1ArnList(input.Arns, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Names !== undefined && {
      Names: serializeAws_json1_1StringList(input.Names, context)
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_json1_1DescribeSessionsRequest = (
  input: DescribeSessionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.FleetName !== undefined && { FleetName: input.FleetName }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StackName !== undefined && { StackName: input.StackName }),
    ...(input.UserId !== undefined && { UserId: input.UserId })
  };
};

const serializeAws_json1_1DescribeStacksRequest = (
  input: DescribeStacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Names !== undefined && {
      Names: serializeAws_json1_1StringList(input.Names, context)
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeUsageReportSubscriptionsRequest = (
  input: DescribeUsageReportSubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeUsersRequest = (
  input: DescribeUsersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeUserStackAssociationsRequest = (
  input: DescribeUserStackAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StackName !== undefined && { StackName: input.StackName }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1DirectoryNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DisableUserRequest = (
  input: DisableUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1DisassociateFleetRequest = (
  input: DisassociateFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetName !== undefined && { FleetName: input.FleetName }),
    ...(input.StackName !== undefined && { StackName: input.StackName })
  };
};

const serializeAws_json1_1DomainJoinInfo = (
  input: DomainJoinInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryName !== undefined && {
      DirectoryName: input.DirectoryName
    }),
    ...(input.OrganizationalUnitDistinguishedName !== undefined && {
      OrganizationalUnitDistinguishedName:
        input.OrganizationalUnitDistinguishedName
    })
  };
};

const serializeAws_json1_1DomainList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EmbedHostDomains = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EnableUserRequest = (
  input: EnableUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1ExpireSessionRequest = (
  input: ExpireSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SessionId !== undefined && { SessionId: input.SessionId })
  };
};

const serializeAws_json1_1FleetAttributes = (
  input: (FleetAttribute | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ImagePermissions = (
  input: ImagePermissions,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowFleet !== undefined && { allowFleet: input.allowFleet }),
    ...(input.allowImageBuilder !== undefined && {
      allowImageBuilder: input.allowImageBuilder
    })
  };
};

const serializeAws_json1_1ListAssociatedFleetsRequest = (
  input: ListAssociatedFleetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StackName !== undefined && { StackName: input.StackName })
  };
};

const serializeAws_json1_1ListAssociatedStacksRequest = (
  input: ListAssociatedStacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FleetName !== undefined && { FleetName: input.FleetName }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SecurityGroupIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ServiceAccountCredentials = (
  input: ServiceAccountCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountName !== undefined && { AccountName: input.AccountName }),
    ...(input.AccountPassword !== undefined && {
      AccountPassword: input.AccountPassword
    })
  };
};

const serializeAws_json1_1StackAttributes = (
  input: (StackAttribute | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1StartFleetRequest = (
  input: StartFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1StartImageBuilderRequest = (
  input: StartImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppstreamAgentVersion !== undefined && {
      AppstreamAgentVersion: input.AppstreamAgentVersion
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1StopFleetRequest = (
  input: StopFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1StopImageBuilderRequest = (
  input: StopImageBuilderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1StorageConnector = (
  input: StorageConnector,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectorType !== undefined && {
      ConnectorType: input.ConnectorType
    }),
    ...(input.Domains !== undefined && {
      Domains: serializeAws_json1_1DomainList(input.Domains, context)
    }),
    ...(input.ResourceIdentifier !== undefined && {
      ResourceIdentifier: input.ResourceIdentifier
    })
  };
};

const serializeAws_json1_1StorageConnectorList = (
  input: StorageConnector[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1StorageConnector(entry, context)
  );
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SubnetIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    })
  };
};

const serializeAws_json1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateDirectoryConfigRequest = (
  input: UpdateDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryName !== undefined && {
      DirectoryName: input.DirectoryName
    }),
    ...(input.OrganizationalUnitDistinguishedNames !== undefined && {
      OrganizationalUnitDistinguishedNames: serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
        input.OrganizationalUnitDistinguishedNames,
        context
      )
    }),
    ...(input.ServiceAccountCredentials !== undefined && {
      ServiceAccountCredentials: serializeAws_json1_1ServiceAccountCredentials(
        input.ServiceAccountCredentials,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateFleetRequest = (
  input: UpdateFleetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributesToDelete !== undefined && {
      AttributesToDelete: serializeAws_json1_1FleetAttributes(
        input.AttributesToDelete,
        context
      )
    }),
    ...(input.ComputeCapacity !== undefined && {
      ComputeCapacity: serializeAws_json1_1ComputeCapacity(
        input.ComputeCapacity,
        context
      )
    }),
    ...(input.DeleteVpcConfig !== undefined && {
      DeleteVpcConfig: input.DeleteVpcConfig
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisconnectTimeoutInSeconds !== undefined && {
      DisconnectTimeoutInSeconds: input.DisconnectTimeoutInSeconds
    }),
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.DomainJoinInfo !== undefined && {
      DomainJoinInfo: serializeAws_json1_1DomainJoinInfo(
        input.DomainJoinInfo,
        context
      )
    }),
    ...(input.EnableDefaultInternetAccess !== undefined && {
      EnableDefaultInternetAccess: input.EnableDefaultInternetAccess
    }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdleDisconnectTimeoutInSeconds !== undefined && {
      IdleDisconnectTimeoutInSeconds: input.IdleDisconnectTimeoutInSeconds
    }),
    ...(input.ImageArn !== undefined && { ImageArn: input.ImageArn }),
    ...(input.ImageName !== undefined && { ImageName: input.ImageName }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    }),
    ...(input.MaxUserDurationInSeconds !== undefined && {
      MaxUserDurationInSeconds: input.MaxUserDurationInSeconds
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_json1_1VpcConfig(input.VpcConfig, context)
    })
  };
};

const serializeAws_json1_1UpdateImagePermissionsRequest = (
  input: UpdateImagePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImagePermissions !== undefined && {
      ImagePermissions: serializeAws_json1_1ImagePermissions(
        input.ImagePermissions,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SharedAccountId !== undefined && {
      SharedAccountId: input.SharedAccountId
    })
  };
};

const serializeAws_json1_1UpdateStackRequest = (
  input: UpdateStackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessEndpoints !== undefined && {
      AccessEndpoints: serializeAws_json1_1AccessEndpointList(
        input.AccessEndpoints,
        context
      )
    }),
    ...(input.ApplicationSettings !== undefined && {
      ApplicationSettings: serializeAws_json1_1ApplicationSettings(
        input.ApplicationSettings,
        context
      )
    }),
    ...(input.AttributesToDelete !== undefined && {
      AttributesToDelete: serializeAws_json1_1StackAttributes(
        input.AttributesToDelete,
        context
      )
    }),
    ...(input.DeleteStorageConnectors !== undefined && {
      DeleteStorageConnectors: input.DeleteStorageConnectors
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.EmbedHostDomains !== undefined && {
      EmbedHostDomains: serializeAws_json1_1EmbedHostDomains(
        input.EmbedHostDomains,
        context
      )
    }),
    ...(input.FeedbackURL !== undefined && { FeedbackURL: input.FeedbackURL }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RedirectURL !== undefined && { RedirectURL: input.RedirectURL }),
    ...(input.StorageConnectors !== undefined && {
      StorageConnectors: serializeAws_json1_1StorageConnectorList(
        input.StorageConnectors,
        context
      )
    }),
    ...(input.UserSettings !== undefined && {
      UserSettings: serializeAws_json1_1UserSettingList(
        input.UserSettings,
        context
      )
    })
  };
};

const serializeAws_json1_1UserSetting = (
  input: UserSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Permission !== undefined && { Permission: input.Permission })
  };
};

const serializeAws_json1_1UserSettingList = (
  input: UserSetting[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1UserSetting(entry, context));
};

const serializeAws_json1_1UserStackAssociation = (
  input: UserStackAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationType !== undefined && {
      AuthenticationType: input.AuthenticationType
    }),
    ...(input.SendEmailNotification !== undefined && {
      SendEmailNotification: input.SendEmailNotification
    }),
    ...(input.StackName !== undefined && { StackName: input.StackName }),
    ...(input.UserName !== undefined && { UserName: input.UserName })
  };
};

const serializeAws_json1_1UserStackAssociationList = (
  input: UserStackAssociation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1UserStackAssociation(entry, context)
  );
};

const serializeAws_json1_1VpcConfig = (
  input: VpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context)
    })
  };
};

const deserializeAws_json1_1AccessEndpoint = (
  output: any,
  context: __SerdeContext
): AccessEndpoint => {
  return {
    __type: "AccessEndpoint",
    EndpointType:
      output.EndpointType !== undefined && output.EndpointType !== null
        ? output.EndpointType
        : undefined,
    VpceId:
      output.VpceId !== undefined && output.VpceId !== null
        ? output.VpceId
        : undefined
  } as any;
};

const deserializeAws_json1_1AccessEndpointList = (
  output: any,
  context: __SerdeContext
): AccessEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AccessEndpoint(entry, context)
  );
};

const deserializeAws_json1_1Application = (
  output: any,
  context: __SerdeContext
): Application => {
  return {
    __type: "Application",
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    IconURL:
      output.IconURL !== undefined && output.IconURL !== null
        ? output.IconURL
        : undefined,
    LaunchParameters:
      output.LaunchParameters !== undefined && output.LaunchParameters !== null
        ? output.LaunchParameters
        : undefined,
    LaunchPath:
      output.LaunchPath !== undefined && output.LaunchPath !== null
        ? output.LaunchPath
        : undefined,
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1Metadata(output.Metadata, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1Applications = (
  output: any,
  context: __SerdeContext
): Application[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Application(entry, context)
  );
};

const deserializeAws_json1_1ApplicationSettingsResponse = (
  output: any,
  context: __SerdeContext
): ApplicationSettingsResponse => {
  return {
    __type: "ApplicationSettingsResponse",
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    S3BucketName:
      output.S3BucketName !== undefined && output.S3BucketName !== null
        ? output.S3BucketName
        : undefined,
    SettingsGroup:
      output.SettingsGroup !== undefined && output.SettingsGroup !== null
        ? output.SettingsGroup
        : undefined
  } as any;
};

const deserializeAws_json1_1AssociateFleetResult = (
  output: any,
  context: __SerdeContext
): AssociateFleetResult => {
  return {
    __type: "AssociateFleetResult"
  } as any;
};

const deserializeAws_json1_1BatchAssociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchAssociateUserStackResult => {
  return {
    __type: "BatchAssociateUserStackResult",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1UserStackAssociationErrorList(
            output.errors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchDisassociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchDisassociateUserStackResult => {
  return {
    __type: "BatchDisassociateUserStackResult",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1UserStackAssociationErrorList(
            output.errors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ComputeCapacityStatus = (
  output: any,
  context: __SerdeContext
): ComputeCapacityStatus => {
  return {
    __type: "ComputeCapacityStatus",
    Available:
      output.Available !== undefined && output.Available !== null
        ? output.Available
        : undefined,
    Desired:
      output.Desired !== undefined && output.Desired !== null
        ? output.Desired
        : undefined,
    InUse:
      output.InUse !== undefined && output.InUse !== null
        ? output.InUse
        : undefined,
    Running:
      output.Running !== undefined && output.Running !== null
        ? output.Running
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CopyImageResponse = (
  output: any,
  context: __SerdeContext
): CopyImageResponse => {
  return {
    __type: "CopyImageResponse",
    DestinationImageName:
      output.DestinationImageName !== undefined &&
      output.DestinationImageName !== null
        ? output.DestinationImageName
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): CreateDirectoryConfigResult => {
  return {
    __type: "CreateDirectoryConfigResult",
    DirectoryConfig:
      output.DirectoryConfig !== undefined && output.DirectoryConfig !== null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateFleetResult = (
  output: any,
  context: __SerdeContext
): CreateFleetResult => {
  return {
    __type: "CreateFleetResult",
    Fleet:
      output.Fleet !== undefined && output.Fleet !== null
        ? deserializeAws_json1_1Fleet(output.Fleet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateImageBuilderResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderResult => {
  return {
    __type: "CreateImageBuilderResult",
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateImageBuilderStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderStreamingURLResult => {
  return {
    __type: "CreateImageBuilderStreamingURLResult",
    Expires:
      output.Expires !== undefined && output.Expires !== null
        ? new Date(Math.round(output.Expires * 1000))
        : undefined,
    StreamingURL:
      output.StreamingURL !== undefined && output.StreamingURL !== null
        ? output.StreamingURL
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateStackResult = (
  output: any,
  context: __SerdeContext
): CreateStackResult => {
  return {
    __type: "CreateStackResult",
    Stack:
      output.Stack !== undefined && output.Stack !== null
        ? deserializeAws_json1_1Stack(output.Stack, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateStreamingURLResult => {
  return {
    __type: "CreateStreamingURLResult",
    Expires:
      output.Expires !== undefined && output.Expires !== null
        ? new Date(Math.round(output.Expires * 1000))
        : undefined,
    StreamingURL:
      output.StreamingURL !== undefined && output.StreamingURL !== null
        ? output.StreamingURL
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateUsageReportSubscriptionResult => {
  return {
    __type: "CreateUsageReportSubscriptionResult",
    S3BucketName:
      output.S3BucketName !== undefined && output.S3BucketName !== null
        ? output.S3BucketName
        : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? output.Schedule
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateUserResult = (
  output: any,
  context: __SerdeContext
): CreateUserResult => {
  return {
    __type: "CreateUserResult"
  } as any;
};

const deserializeAws_json1_1DeleteDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectoryConfigResult => {
  return {
    __type: "DeleteDirectoryConfigResult"
  } as any;
};

const deserializeAws_json1_1DeleteFleetResult = (
  output: any,
  context: __SerdeContext
): DeleteFleetResult => {
  return {
    __type: "DeleteFleetResult"
  } as any;
};

const deserializeAws_json1_1DeleteImageBuilderResult = (
  output: any,
  context: __SerdeContext
): DeleteImageBuilderResult => {
  return {
    __type: "DeleteImageBuilderResult",
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DeleteImagePermissionsResult => {
  return {
    __type: "DeleteImagePermissionsResult"
  } as any;
};

const deserializeAws_json1_1DeleteImageResult = (
  output: any,
  context: __SerdeContext
): DeleteImageResult => {
  return {
    __type: "DeleteImageResult",
    Image:
      output.Image !== undefined && output.Image !== null
        ? deserializeAws_json1_1Image(output.Image, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteStackResult = (
  output: any,
  context: __SerdeContext
): DeleteStackResult => {
  return {
    __type: "DeleteStackResult"
  } as any;
};

const deserializeAws_json1_1DeleteUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteUsageReportSubscriptionResult => {
  return {
    __type: "DeleteUsageReportSubscriptionResult"
  } as any;
};

const deserializeAws_json1_1DeleteUserResult = (
  output: any,
  context: __SerdeContext
): DeleteUserResult => {
  return {
    __type: "DeleteUserResult"
  } as any;
};

const deserializeAws_json1_1DescribeDirectoryConfigsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectoryConfigsResult => {
  return {
    __type: "DescribeDirectoryConfigsResult",
    DirectoryConfigs:
      output.DirectoryConfigs !== undefined && output.DirectoryConfigs !== null
        ? deserializeAws_json1_1DirectoryConfigList(
            output.DirectoryConfigs,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeFleetsResult = (
  output: any,
  context: __SerdeContext
): DescribeFleetsResult => {
  return {
    __type: "DescribeFleetsResult",
    Fleets:
      output.Fleets !== undefined && output.Fleets !== null
        ? deserializeAws_json1_1FleetList(output.Fleets, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeImageBuildersResult = (
  output: any,
  context: __SerdeContext
): DescribeImageBuildersResult => {
  return {
    __type: "DescribeImageBuildersResult",
    ImageBuilders:
      output.ImageBuilders !== undefined && output.ImageBuilders !== null
        ? deserializeAws_json1_1ImageBuilderList(output.ImageBuilders, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeImagePermissionsResult => {
  return {
    __type: "DescribeImagePermissionsResult",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    SharedImagePermissionsList:
      output.SharedImagePermissionsList !== undefined &&
      output.SharedImagePermissionsList !== null
        ? deserializeAws_json1_1SharedImagePermissionsList(
            output.SharedImagePermissionsList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeImagesResult = (
  output: any,
  context: __SerdeContext
): DescribeImagesResult => {
  return {
    __type: "DescribeImagesResult",
    Images:
      output.Images !== undefined && output.Images !== null
        ? deserializeAws_json1_1ImageList(output.Images, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSessionsResult = (
  output: any,
  context: __SerdeContext
): DescribeSessionsResult => {
  return {
    __type: "DescribeSessionsResult",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Sessions:
      output.Sessions !== undefined && output.Sessions !== null
        ? deserializeAws_json1_1SessionList(output.Sessions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeStacksResult = (
  output: any,
  context: __SerdeContext
): DescribeStacksResult => {
  return {
    __type: "DescribeStacksResult",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Stacks:
      output.Stacks !== undefined && output.Stacks !== null
        ? deserializeAws_json1_1StackList(output.Stacks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeUsageReportSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): DescribeUsageReportSubscriptionsResult => {
  return {
    __type: "DescribeUsageReportSubscriptionsResult",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    UsageReportSubscriptions:
      output.UsageReportSubscriptions !== undefined &&
      output.UsageReportSubscriptions !== null
        ? deserializeAws_json1_1UsageReportSubscriptionList(
            output.UsageReportSubscriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeUsersResult = (
  output: any,
  context: __SerdeContext
): DescribeUsersResult => {
  return {
    __type: "DescribeUsersResult",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1UserList(output.Users, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeUserStackAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeUserStackAssociationsResult => {
  return {
    __type: "DescribeUserStackAssociationsResult",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    UserStackAssociations:
      output.UserStackAssociations !== undefined &&
      output.UserStackAssociations !== null
        ? deserializeAws_json1_1UserStackAssociationList(
            output.UserStackAssociations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DirectoryConfig = (
  output: any,
  context: __SerdeContext
): DirectoryConfig => {
  return {
    __type: "DirectoryConfig",
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null
        ? output.DirectoryName
        : undefined,
    OrganizationalUnitDistinguishedNames:
      output.OrganizationalUnitDistinguishedNames !== undefined &&
      output.OrganizationalUnitDistinguishedNames !== null
        ? deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
            output.OrganizationalUnitDistinguishedNames,
            context
          )
        : undefined,
    ServiceAccountCredentials:
      output.ServiceAccountCredentials !== undefined &&
      output.ServiceAccountCredentials !== null
        ? deserializeAws_json1_1ServiceAccountCredentials(
            output.ServiceAccountCredentials,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DirectoryConfigList = (
  output: any,
  context: __SerdeContext
): DirectoryConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DirectoryConfig(entry, context)
  );
};

const deserializeAws_json1_1DisableUserResult = (
  output: any,
  context: __SerdeContext
): DisableUserResult => {
  return {
    __type: "DisableUserResult"
  } as any;
};

const deserializeAws_json1_1DisassociateFleetResult = (
  output: any,
  context: __SerdeContext
): DisassociateFleetResult => {
  return {
    __type: "DisassociateFleetResult"
  } as any;
};

const deserializeAws_json1_1DomainJoinInfo = (
  output: any,
  context: __SerdeContext
): DomainJoinInfo => {
  return {
    __type: "DomainJoinInfo",
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null
        ? output.DirectoryName
        : undefined,
    OrganizationalUnitDistinguishedName:
      output.OrganizationalUnitDistinguishedName !== undefined &&
      output.OrganizationalUnitDistinguishedName !== null
        ? output.OrganizationalUnitDistinguishedName
        : undefined
  } as any;
};

const deserializeAws_json1_1DomainList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EmbedHostDomains = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EnableUserResult = (
  output: any,
  context: __SerdeContext
): EnableUserResult => {
  return {
    __type: "EnableUserResult"
  } as any;
};

const deserializeAws_json1_1ExpireSessionResult = (
  output: any,
  context: __SerdeContext
): ExpireSessionResult => {
  return {
    __type: "ExpireSessionResult"
  } as any;
};

const deserializeAws_json1_1Fleet = (
  output: any,
  context: __SerdeContext
): Fleet => {
  return {
    __type: "Fleet",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    ComputeCapacityStatus:
      output.ComputeCapacityStatus !== undefined &&
      output.ComputeCapacityStatus !== null
        ? deserializeAws_json1_1ComputeCapacityStatus(
            output.ComputeCapacityStatus,
            context
          )
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    DisconnectTimeoutInSeconds:
      output.DisconnectTimeoutInSeconds !== undefined &&
      output.DisconnectTimeoutInSeconds !== null
        ? output.DisconnectTimeoutInSeconds
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    DomainJoinInfo:
      output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null
        ? deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context)
        : undefined,
    EnableDefaultInternetAccess:
      output.EnableDefaultInternetAccess !== undefined &&
      output.EnableDefaultInternetAccess !== null
        ? output.EnableDefaultInternetAccess
        : undefined,
    FleetErrors:
      output.FleetErrors !== undefined && output.FleetErrors !== null
        ? deserializeAws_json1_1FleetErrors(output.FleetErrors, context)
        : undefined,
    FleetType:
      output.FleetType !== undefined && output.FleetType !== null
        ? output.FleetType
        : undefined,
    IamRoleArn:
      output.IamRoleArn !== undefined && output.IamRoleArn !== null
        ? output.IamRoleArn
        : undefined,
    IdleDisconnectTimeoutInSeconds:
      output.IdleDisconnectTimeoutInSeconds !== undefined &&
      output.IdleDisconnectTimeoutInSeconds !== null
        ? output.IdleDisconnectTimeoutInSeconds
        : undefined,
    ImageArn:
      output.ImageArn !== undefined && output.ImageArn !== null
        ? output.ImageArn
        : undefined,
    ImageName:
      output.ImageName !== undefined && output.ImageName !== null
        ? output.ImageName
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    MaxUserDurationInSeconds:
      output.MaxUserDurationInSeconds !== undefined &&
      output.MaxUserDurationInSeconds !== null
        ? output.MaxUserDurationInSeconds
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1FleetError = (
  output: any,
  context: __SerdeContext
): FleetError => {
  return {
    __type: "FleetError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1FleetErrors = (
  output: any,
  context: __SerdeContext
): FleetError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FleetError(entry, context)
  );
};

const deserializeAws_json1_1FleetList = (
  output: any,
  context: __SerdeContext
): Fleet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Fleet(entry, context)
  );
};

const deserializeAws_json1_1Image = (
  output: any,
  context: __SerdeContext
): Image => {
  return {
    __type: "Image",
    Applications:
      output.Applications !== undefined && output.Applications !== null
        ? deserializeAws_json1_1Applications(output.Applications, context)
        : undefined,
    AppstreamAgentVersion:
      output.AppstreamAgentVersion !== undefined &&
      output.AppstreamAgentVersion !== null
        ? output.AppstreamAgentVersion
        : undefined,
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    BaseImageArn:
      output.BaseImageArn !== undefined && output.BaseImageArn !== null
        ? output.BaseImageArn
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    ImageBuilderName:
      output.ImageBuilderName !== undefined && output.ImageBuilderName !== null
        ? output.ImageBuilderName
        : undefined,
    ImageBuilderSupported:
      output.ImageBuilderSupported !== undefined &&
      output.ImageBuilderSupported !== null
        ? output.ImageBuilderSupported
        : undefined,
    ImagePermissions:
      output.ImagePermissions !== undefined && output.ImagePermissions !== null
        ? deserializeAws_json1_1ImagePermissions(
            output.ImagePermissions,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? output.Platform
        : undefined,
    PublicBaseImageReleasedDate:
      output.PublicBaseImageReleasedDate !== undefined &&
      output.PublicBaseImageReleasedDate !== null
        ? new Date(Math.round(output.PublicBaseImageReleasedDate * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1ImageStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    Visibility:
      output.Visibility !== undefined && output.Visibility !== null
        ? output.Visibility
        : undefined
  } as any;
};

const deserializeAws_json1_1ImageBuilder = (
  output: any,
  context: __SerdeContext
): ImageBuilder => {
  return {
    __type: "ImageBuilder",
    AccessEndpoints:
      output.AccessEndpoints !== undefined && output.AccessEndpoints !== null
        ? deserializeAws_json1_1AccessEndpointList(
            output.AccessEndpoints,
            context
          )
        : undefined,
    AppstreamAgentVersion:
      output.AppstreamAgentVersion !== undefined &&
      output.AppstreamAgentVersion !== null
        ? output.AppstreamAgentVersion
        : undefined,
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    DomainJoinInfo:
      output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null
        ? deserializeAws_json1_1DomainJoinInfo(output.DomainJoinInfo, context)
        : undefined,
    EnableDefaultInternetAccess:
      output.EnableDefaultInternetAccess !== undefined &&
      output.EnableDefaultInternetAccess !== null
        ? output.EnableDefaultInternetAccess
        : undefined,
    IamRoleArn:
      output.IamRoleArn !== undefined && output.IamRoleArn !== null
        ? output.IamRoleArn
        : undefined,
    ImageArn:
      output.ImageArn !== undefined && output.ImageArn !== null
        ? output.ImageArn
        : undefined,
    ImageBuilderErrors:
      output.ImageBuilderErrors !== undefined &&
      output.ImageBuilderErrors !== null
        ? deserializeAws_json1_1ResourceErrors(
            output.ImageBuilderErrors,
            context
          )
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration !== undefined &&
      output.NetworkAccessConfiguration !== null
        ? deserializeAws_json1_1NetworkAccessConfiguration(
            output.NetworkAccessConfiguration,
            context
          )
        : undefined,
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? output.Platform
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1ImageBuilderStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_json1_1VpcConfig(output.VpcConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ImageBuilderList = (
  output: any,
  context: __SerdeContext
): ImageBuilder[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageBuilder(entry, context)
  );
};

const deserializeAws_json1_1ImageBuilderStateChangeReason = (
  output: any,
  context: __SerdeContext
): ImageBuilderStateChangeReason => {
  return {
    __type: "ImageBuilderStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ImageList = (
  output: any,
  context: __SerdeContext
): Image[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Image(entry, context)
  );
};

const deserializeAws_json1_1ImagePermissions = (
  output: any,
  context: __SerdeContext
): ImagePermissions => {
  return {
    __type: "ImagePermissions",
    allowFleet:
      output.allowFleet !== undefined && output.allowFleet !== null
        ? output.allowFleet
        : undefined,
    allowImageBuilder:
      output.allowImageBuilder !== undefined &&
      output.allowImageBuilder !== null
        ? output.allowImageBuilder
        : undefined
  } as any;
};

const deserializeAws_json1_1ImageStateChangeReason = (
  output: any,
  context: __SerdeContext
): ImageStateChangeReason => {
  return {
    __type: "ImageStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1IncompatibleImageException = (
  output: any,
  context: __SerdeContext
): IncompatibleImageException => {
  return {
    __type: "IncompatibleImageException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidAccountStatusException = (
  output: any,
  context: __SerdeContext
): InvalidAccountStatusException => {
  return {
    __type: "InvalidAccountStatusException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    __type: "InvalidParameterCombinationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRoleException = (
  output: any,
  context: __SerdeContext
): InvalidRoleException => {
  return {
    __type: "InvalidRoleException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1LastReportGenerationExecutionError = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError => {
  return {
    __type: "LastReportGenerationExecutionError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1LastReportGenerationExecutionErrors = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LastReportGenerationExecutionError(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAssociatedFleetsResult = (
  output: any,
  context: __SerdeContext
): ListAssociatedFleetsResult => {
  return {
    __type: "ListAssociatedFleetsResult",
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_json1_1StringList(output.Names, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAssociatedStacksResult = (
  output: any,
  context: __SerdeContext
): ListAssociatedStacksResult => {
  return {
    __type: "ListAssociatedStacksResult",
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_json1_1StringList(output.Names, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Metadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1NetworkAccessConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkAccessConfiguration => {
  return {
    __type: "NetworkAccessConfiguration",
    EniId:
      output.EniId !== undefined && output.EniId !== null
        ? output.EniId
        : undefined,
    EniPrivateIpAddress:
      output.EniPrivateIpAddress !== undefined &&
      output.EniPrivateIpAddress !== null
        ? output.EniPrivateIpAddress
        : undefined
  } as any;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  return {
    __type: "OperationNotPermittedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceError = (
  output: any,
  context: __SerdeContext
): ResourceError => {
  return {
    __type: "ResourceError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    ErrorTimestamp:
      output.ErrorTimestamp !== undefined && output.ErrorTimestamp !== null
        ? new Date(Math.round(output.ErrorTimestamp * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceErrors = (
  output: any,
  context: __SerdeContext
): ResourceError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceError(entry, context)
  );
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotAvailableException = (
  output: any,
  context: __SerdeContext
): ResourceNotAvailableException => {
  return {
    __type: "ResourceNotAvailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServiceAccountCredentials = (
  output: any,
  context: __SerdeContext
): ServiceAccountCredentials => {
  return {
    __type: "ServiceAccountCredentials",
    AccountName:
      output.AccountName !== undefined && output.AccountName !== null
        ? output.AccountName
        : undefined,
    AccountPassword:
      output.AccountPassword !== undefined && output.AccountPassword !== null
        ? output.AccountPassword
        : undefined
  } as any;
};

const deserializeAws_json1_1Session = (
  output: any,
  context: __SerdeContext
): Session => {
  return {
    __type: "Session",
    AuthenticationType:
      output.AuthenticationType !== undefined &&
      output.AuthenticationType !== null
        ? output.AuthenticationType
        : undefined,
    ConnectionState:
      output.ConnectionState !== undefined && output.ConnectionState !== null
        ? output.ConnectionState
        : undefined,
    FleetName:
      output.FleetName !== undefined && output.FleetName !== null
        ? output.FleetName
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    MaxExpirationTime:
      output.MaxExpirationTime !== undefined &&
      output.MaxExpirationTime !== null
        ? new Date(Math.round(output.MaxExpirationTime * 1000))
        : undefined,
    NetworkAccessConfiguration:
      output.NetworkAccessConfiguration !== undefined &&
      output.NetworkAccessConfiguration !== null
        ? deserializeAws_json1_1NetworkAccessConfiguration(
            output.NetworkAccessConfiguration,
            context
          )
        : undefined,
    StackName:
      output.StackName !== undefined && output.StackName !== null
        ? output.StackName
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    UserId:
      output.UserId !== undefined && output.UserId !== null
        ? output.UserId
        : undefined
  } as any;
};

const deserializeAws_json1_1SessionList = (
  output: any,
  context: __SerdeContext
): Session[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Session(entry, context)
  );
};

const deserializeAws_json1_1SharedImagePermissions = (
  output: any,
  context: __SerdeContext
): SharedImagePermissions => {
  return {
    __type: "SharedImagePermissions",
    imagePermissions:
      output.imagePermissions !== undefined && output.imagePermissions !== null
        ? deserializeAws_json1_1ImagePermissions(
            output.imagePermissions,
            context
          )
        : undefined,
    sharedAccountId:
      output.sharedAccountId !== undefined && output.sharedAccountId !== null
        ? output.sharedAccountId
        : undefined
  } as any;
};

const deserializeAws_json1_1SharedImagePermissionsList = (
  output: any,
  context: __SerdeContext
): SharedImagePermissions[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SharedImagePermissions(entry, context)
  );
};

const deserializeAws_json1_1Stack = (
  output: any,
  context: __SerdeContext
): Stack => {
  return {
    __type: "Stack",
    AccessEndpoints:
      output.AccessEndpoints !== undefined && output.AccessEndpoints !== null
        ? deserializeAws_json1_1AccessEndpointList(
            output.AccessEndpoints,
            context
          )
        : undefined,
    ApplicationSettings:
      output.ApplicationSettings !== undefined &&
      output.ApplicationSettings !== null
        ? deserializeAws_json1_1ApplicationSettingsResponse(
            output.ApplicationSettings,
            context
          )
        : undefined,
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    EmbedHostDomains:
      output.EmbedHostDomains !== undefined && output.EmbedHostDomains !== null
        ? deserializeAws_json1_1EmbedHostDomains(
            output.EmbedHostDomains,
            context
          )
        : undefined,
    FeedbackURL:
      output.FeedbackURL !== undefined && output.FeedbackURL !== null
        ? output.FeedbackURL
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RedirectURL:
      output.RedirectURL !== undefined && output.RedirectURL !== null
        ? output.RedirectURL
        : undefined,
    StackErrors:
      output.StackErrors !== undefined && output.StackErrors !== null
        ? deserializeAws_json1_1StackErrors(output.StackErrors, context)
        : undefined,
    StorageConnectors:
      output.StorageConnectors !== undefined &&
      output.StorageConnectors !== null
        ? deserializeAws_json1_1StorageConnectorList(
            output.StorageConnectors,
            context
          )
        : undefined,
    UserSettings:
      output.UserSettings !== undefined && output.UserSettings !== null
        ? deserializeAws_json1_1UserSettingList(output.UserSettings, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StackError = (
  output: any,
  context: __SerdeContext
): StackError => {
  return {
    __type: "StackError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1StackErrors = (
  output: any,
  context: __SerdeContext
): StackError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StackError(entry, context)
  );
};

const deserializeAws_json1_1StackList = (
  output: any,
  context: __SerdeContext
): Stack[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Stack(entry, context)
  );
};

const deserializeAws_json1_1StartFleetResult = (
  output: any,
  context: __SerdeContext
): StartFleetResult => {
  return {
    __type: "StartFleetResult"
  } as any;
};

const deserializeAws_json1_1StartImageBuilderResult = (
  output: any,
  context: __SerdeContext
): StartImageBuilderResult => {
  return {
    __type: "StartImageBuilderResult",
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StopFleetResult = (
  output: any,
  context: __SerdeContext
): StopFleetResult => {
  return {
    __type: "StopFleetResult"
  } as any;
};

const deserializeAws_json1_1StopImageBuilderResult = (
  output: any,
  context: __SerdeContext
): StopImageBuilderResult => {
  return {
    __type: "StopImageBuilderResult",
    ImageBuilder:
      output.ImageBuilder !== undefined && output.ImageBuilder !== null
        ? deserializeAws_json1_1ImageBuilder(output.ImageBuilder, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StorageConnector = (
  output: any,
  context: __SerdeContext
): StorageConnector => {
  return {
    __type: "StorageConnector",
    ConnectorType:
      output.ConnectorType !== undefined && output.ConnectorType !== null
        ? output.ConnectorType
        : undefined,
    Domains:
      output.Domains !== undefined && output.Domains !== null
        ? deserializeAws_json1_1DomainList(output.Domains, context)
        : undefined,
    ResourceIdentifier:
      output.ResourceIdentifier !== undefined &&
      output.ResourceIdentifier !== null
        ? output.ResourceIdentifier
        : undefined
  } as any;
};

const deserializeAws_json1_1StorageConnectorList = (
  output: any,
  context: __SerdeContext
): StorageConnector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StorageConnector(entry, context)
  );
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SubnetIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): UpdateDirectoryConfigResult => {
  return {
    __type: "UpdateDirectoryConfigResult",
    DirectoryConfig:
      output.DirectoryConfig !== undefined && output.DirectoryConfig !== null
        ? deserializeAws_json1_1DirectoryConfig(output.DirectoryConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateFleetResult = (
  output: any,
  context: __SerdeContext
): UpdateFleetResult => {
  return {
    __type: "UpdateFleetResult",
    Fleet:
      output.Fleet !== undefined && output.Fleet !== null
        ? deserializeAws_json1_1Fleet(output.Fleet, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): UpdateImagePermissionsResult => {
  return {
    __type: "UpdateImagePermissionsResult"
  } as any;
};

const deserializeAws_json1_1UpdateStackResult = (
  output: any,
  context: __SerdeContext
): UpdateStackResult => {
  return {
    __type: "UpdateStackResult",
    Stack:
      output.Stack !== undefined && output.Stack !== null
        ? deserializeAws_json1_1Stack(output.Stack, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UsageReportSubscription = (
  output: any,
  context: __SerdeContext
): UsageReportSubscription => {
  return {
    __type: "UsageReportSubscription",
    LastGeneratedReportDate:
      output.LastGeneratedReportDate !== undefined &&
      output.LastGeneratedReportDate !== null
        ? new Date(Math.round(output.LastGeneratedReportDate * 1000))
        : undefined,
    S3BucketName:
      output.S3BucketName !== undefined && output.S3BucketName !== null
        ? output.S3BucketName
        : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? output.Schedule
        : undefined,
    SubscriptionErrors:
      output.SubscriptionErrors !== undefined &&
      output.SubscriptionErrors !== null
        ? deserializeAws_json1_1LastReportGenerationExecutionErrors(
            output.SubscriptionErrors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1UsageReportSubscriptionList = (
  output: any,
  context: __SerdeContext
): UsageReportSubscription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UsageReportSubscription(entry, context)
  );
};

const deserializeAws_json1_1User = (
  output: any,
  context: __SerdeContext
): User => {
  return {
    __type: "User",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    AuthenticationType:
      output.AuthenticationType !== undefined &&
      output.AuthenticationType !== null
        ? output.AuthenticationType
        : undefined,
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? new Date(Math.round(output.CreatedTime * 1000))
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    FirstName:
      output.FirstName !== undefined && output.FirstName !== null
        ? output.FirstName
        : undefined,
    LastName:
      output.LastName !== undefined && output.LastName !== null
        ? output.LastName
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    UserName:
      output.UserName !== undefined && output.UserName !== null
        ? output.UserName
        : undefined
  } as any;
};

const deserializeAws_json1_1UserList = (
  output: any,
  context: __SerdeContext
): User[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1User(entry, context)
  );
};

const deserializeAws_json1_1UserSetting = (
  output: any,
  context: __SerdeContext
): UserSetting => {
  return {
    __type: "UserSetting",
    Action:
      output.Action !== undefined && output.Action !== null
        ? output.Action
        : undefined,
    Permission:
      output.Permission !== undefined && output.Permission !== null
        ? output.Permission
        : undefined
  } as any;
};

const deserializeAws_json1_1UserSettingList = (
  output: any,
  context: __SerdeContext
): UserSetting[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserSetting(entry, context)
  );
};

const deserializeAws_json1_1UserStackAssociation = (
  output: any,
  context: __SerdeContext
): UserStackAssociation => {
  return {
    __type: "UserStackAssociation",
    AuthenticationType:
      output.AuthenticationType !== undefined &&
      output.AuthenticationType !== null
        ? output.AuthenticationType
        : undefined,
    SendEmailNotification:
      output.SendEmailNotification !== undefined &&
      output.SendEmailNotification !== null
        ? output.SendEmailNotification
        : undefined,
    StackName:
      output.StackName !== undefined && output.StackName !== null
        ? output.StackName
        : undefined,
    UserName:
      output.UserName !== undefined && output.UserName !== null
        ? output.UserName
        : undefined
  } as any;
};

const deserializeAws_json1_1UserStackAssociationError = (
  output: any,
  context: __SerdeContext
): UserStackAssociationError => {
  return {
    __type: "UserStackAssociationError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    UserStackAssociation:
      output.UserStackAssociation !== undefined &&
      output.UserStackAssociation !== null
        ? deserializeAws_json1_1UserStackAssociation(
            output.UserStackAssociation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1UserStackAssociationErrorList = (
  output: any,
  context: __SerdeContext
): UserStackAssociationError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserStackAssociationError(entry, context)
  );
};

const deserializeAws_json1_1UserStackAssociationList = (
  output: any,
  context: __SerdeContext
): UserStackAssociation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserStackAssociation(entry, context)
  );
};

const deserializeAws_json1_1VpcConfig = (
  output: any,
  context: __SerdeContext
): VpcConfig => {
  return {
    __type: "VpcConfig",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIdList(
            output.SecurityGroupIds,
            context
          )
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
