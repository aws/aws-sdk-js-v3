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

export async function serializeAws_json1_1AssociateFleetCommand(
  input: AssociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.AssociateFleet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateFleetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchAssociateUserStackCommand(
  input: BatchAssociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.BatchAssociateUserStack";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchAssociateUserStackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchDisassociateUserStackCommand(
  input: BatchDisassociateUserStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PhotonAdminProxyService.BatchDisassociateUserStack";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDisassociateUserStackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CopyImageCommand(
  input: CopyImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CopyImage";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDirectoryConfigCommand(
  input: CreateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateDirectoryConfig";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDirectoryConfigRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateFleetCommand(
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateFleet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateImageBuilderCommand(
  input: CreateImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateImageBuilder";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateImageBuilderStreamingURLCommand(
  input: CreateImageBuilderStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PhotonAdminProxyService.CreateImageBuilderStreamingURL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateImageBuilderStreamingURLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateStackCommand(
  input: CreateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateStack";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateStreamingURLCommand(
  input: CreateStreamingURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateStreamingURL";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateStreamingURLRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateUsageReportSubscriptionCommand(
  input: CreateUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PhotonAdminProxyService.CreateUsageReportSubscription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateUsageReportSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateUserCommand(
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.CreateUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDirectoryConfigCommand(
  input: DeleteDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteDirectoryConfig";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDirectoryConfigRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteFleetCommand(
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteFleet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteImageCommand(
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteImage";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteImageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteImageBuilderCommand(
  input: DeleteImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteImageBuilder";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteImagePermissionsCommand(
  input: DeleteImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteImagePermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteImagePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteStackCommand(
  input: DeleteStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteStack";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteUsageReportSubscriptionCommand(
  input: DeleteUsageReportSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PhotonAdminProxyService.DeleteUsageReportSubscription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteUsageReportSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteUserCommand(
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DeleteUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDirectoryConfigsCommand(
  input: DescribeDirectoryConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeDirectoryConfigs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDirectoryConfigsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeFleetsCommand(
  input: DescribeFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeFleets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeFleetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeImageBuildersCommand(
  input: DescribeImageBuildersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeImageBuilders";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImageBuildersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeImagePermissionsCommand(
  input: DescribeImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeImagePermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImagePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeImagesCommand(
  input: DescribeImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeImages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSessionsCommand(
  input: DescribeSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeSessions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSessionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStacksCommand(
  input: DescribeStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeStacks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStacksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUsageReportSubscriptionsCommand(
  input: DescribeUsageReportSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PhotonAdminProxyService.DescribeUsageReportSubscriptions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUsageReportSubscriptionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUserStackAssociationsCommand(
  input: DescribeUserStackAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "PhotonAdminProxyService.DescribeUserStackAssociations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUserStackAssociationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUsersCommand(
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DescribeUsers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUsersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableUserCommand(
  input: DisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DisableUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateFleetCommand(
  input: DisassociateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.DisassociateFleet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateFleetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableUserCommand(
  input: EnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.EnableUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ExpireSessionCommand(
  input: ExpireSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.ExpireSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ExpireSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssociatedFleetsCommand(
  input: ListAssociatedFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.ListAssociatedFleets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssociatedFleetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAssociatedStacksCommand(
  input: ListAssociatedStacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.ListAssociatedStacks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAssociatedStacksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartFleetCommand(
  input: StartFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.StartFleet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartImageBuilderCommand(
  input: StartImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.StartImageBuilder";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopFleetCommand(
  input: StopFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.StopFleet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopImageBuilderCommand(
  input: StopImageBuilderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.StopImageBuilder";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopImageBuilderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDirectoryConfigCommand(
  input: UpdateDirectoryConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateDirectoryConfig";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDirectoryConfigRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateFleetCommand(
  input: UpdateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateFleet";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFleetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateImagePermissionsCommand(
  input: UpdateImagePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateImagePermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateImagePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateStackCommand(
  input: UpdateStackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "PhotonAdminProxyService.UpdateStack";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1BatchAssociateUserStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> {
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
}

async function deserializeAws_json1_1BatchAssociateUserStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateUserStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1BatchDisassociateUserStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> {
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
}

async function deserializeAws_json1_1BatchDisassociateUserStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateUserStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CopyImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> {
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
}

async function deserializeAws_json1_1CopyImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.photon#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateDirectoryConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDirectoryConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.photon#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> {
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
}

async function deserializeAws_json1_1CreateFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.photon#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateImageBuilderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> {
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
}

async function deserializeAws_json1_1CreateImageBuilderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.photon#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateImageBuilderStreamingURLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> {
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
}

async function deserializeAws_json1_1CreateImageBuilderStreamingURLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageBuilderStreamingURLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> {
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
}

async function deserializeAws_json1_1CreateStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.photon#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateStreamingURLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> {
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
}

async function deserializeAws_json1_1CreateStreamingURLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingURLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateUsageReportSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> {
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
}

async function deserializeAws_json1_1CreateUsageReportSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageReportSubscriptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
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
}

async function deserializeAws_json1_1CreateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.photon#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteDirectoryConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteDirectoryConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteImageBuilderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteImageBuilderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageBuilderCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteImagePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteImagePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePermissionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteUsageReportSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteUsageReportSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageReportSubscriptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeDirectoryConfigsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeDirectoryConfigsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoryConfigsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeFleetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeFleetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeImageBuildersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeImageBuildersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageBuildersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeImagePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeImagePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagePermissionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImagesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSessionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSessionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSessionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeStacksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeStacksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStacksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeUsageReportSubscriptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeUsageReportSubscriptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsageReportSubscriptionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeUserStackAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeUserStackAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserStackAssociationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisableUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> {
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
}

async function deserializeAws_json1_1DisableUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisassociateFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1EnableUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> {
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
}

async function deserializeAws_json1_1EnableUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ExpireSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> {
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
}

async function deserializeAws_json1_1ExpireSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListAssociatedFleetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> {
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
}

async function deserializeAws_json1_1ListAssociatedFleetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedFleetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListAssociatedStacksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> {
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
}

async function deserializeAws_json1_1ListAssociatedStacksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedStacksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> {
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
}

async function deserializeAws_json1_1StartFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartImageBuilderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> {
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
}

async function deserializeAws_json1_1StartImageBuilderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImageBuilderCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> {
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
}

async function deserializeAws_json1_1StopFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopImageBuilderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> {
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
}

async function deserializeAws_json1_1StopImageBuilderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImageBuilderCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateDirectoryConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateDirectoryConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectoryConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateImagePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateImagePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePermissionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotAvailableException":
    case "com.amazonaws.photon#ResourceNotAvailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotAvailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateStackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateStackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.photon#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncompatibleImageException":
    case "com.amazonaws.photon#IncompatibleImageException":
      response = {
        ...(await deserializeAws_json1_1IncompatibleImageExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAccountStatusException":
    case "com.amazonaws.photon#InvalidAccountStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidAccountStatusExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.photon#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.photon#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.photon#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.photon#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.photon#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.photon#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.EndpointType !== undefined) {
    bodyParams["EndpointType"] = input.EndpointType;
  }
  if (input.VpceId !== undefined) {
    bodyParams["VpceId"] = input.VpceId;
  }
  return bodyParams;
};

const serializeAws_json1_1AccessEndpointList = (
  input: Array<AccessEndpoint>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1AccessEndpoint(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ApplicationSettings = (
  input: ApplicationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.SettingsGroup !== undefined) {
    bodyParams["SettingsGroup"] = input.SettingsGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1ArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AssociateFleetRequest = (
  input: AssociateFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FleetName !== undefined) {
    bodyParams["FleetName"] = input.FleetName;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  return bodyParams;
};

const serializeAws_json1_1AwsAccountIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1BatchAssociateUserStackRequest = (
  input: BatchAssociateUserStackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.UserStackAssociations !== undefined) {
    bodyParams[
      "UserStackAssociations"
    ] = serializeAws_json1_1UserStackAssociationList(
      input.UserStackAssociations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchDisassociateUserStackRequest = (
  input: BatchDisassociateUserStackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.UserStackAssociations !== undefined) {
    bodyParams[
      "UserStackAssociations"
    ] = serializeAws_json1_1UserStackAssociationList(
      input.UserStackAssociations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ComputeCapacity = (
  input: ComputeCapacity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DesiredInstances !== undefined) {
    bodyParams["DesiredInstances"] = input.DesiredInstances;
  }
  return bodyParams;
};

const serializeAws_json1_1CopyImageRequest = (
  input: CopyImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationImageDescription !== undefined) {
    bodyParams["DestinationImageDescription"] =
      input.DestinationImageDescription;
  }
  if (input.DestinationImageName !== undefined) {
    bodyParams["DestinationImageName"] = input.DestinationImageName;
  }
  if (input.DestinationRegion !== undefined) {
    bodyParams["DestinationRegion"] = input.DestinationRegion;
  }
  if (input.SourceImageName !== undefined) {
    bodyParams["SourceImageName"] = input.SourceImageName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDirectoryConfigRequest = (
  input: CreateDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryName !== undefined) {
    bodyParams["DirectoryName"] = input.DirectoryName;
  }
  if (input.OrganizationalUnitDistinguishedNames !== undefined) {
    bodyParams[
      "OrganizationalUnitDistinguishedNames"
    ] = serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
      input.OrganizationalUnitDistinguishedNames,
      context
    );
  }
  if (input.ServiceAccountCredentials !== undefined) {
    bodyParams[
      "ServiceAccountCredentials"
    ] = serializeAws_json1_1ServiceAccountCredentials(
      input.ServiceAccountCredentials,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFleetRequest = (
  input: CreateFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComputeCapacity !== undefined) {
    bodyParams["ComputeCapacity"] = serializeAws_json1_1ComputeCapacity(
      input.ComputeCapacity,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DisconnectTimeoutInSeconds !== undefined) {
    bodyParams["DisconnectTimeoutInSeconds"] = input.DisconnectTimeoutInSeconds;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.DomainJoinInfo !== undefined) {
    bodyParams["DomainJoinInfo"] = serializeAws_json1_1DomainJoinInfo(
      input.DomainJoinInfo,
      context
    );
  }
  if (input.EnableDefaultInternetAccess !== undefined) {
    bodyParams["EnableDefaultInternetAccess"] =
      input.EnableDefaultInternetAccess;
  }
  if (input.FleetType !== undefined) {
    bodyParams["FleetType"] = input.FleetType;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.IdleDisconnectTimeoutInSeconds !== undefined) {
    bodyParams["IdleDisconnectTimeoutInSeconds"] =
      input.IdleDisconnectTimeoutInSeconds;
  }
  if (input.ImageArn !== undefined) {
    bodyParams["ImageArn"] = input.ImageArn;
  }
  if (input.ImageName !== undefined) {
    bodyParams["ImageName"] = input.ImageName;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.MaxUserDurationInSeconds !== undefined) {
    bodyParams["MaxUserDurationInSeconds"] = input.MaxUserDurationInSeconds;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.VpcConfig !== undefined) {
    bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(
      input.VpcConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateImageBuilderRequest = (
  input: CreateImageBuilderRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessEndpoints !== undefined) {
    bodyParams["AccessEndpoints"] = serializeAws_json1_1AccessEndpointList(
      input.AccessEndpoints,
      context
    );
  }
  if (input.AppstreamAgentVersion !== undefined) {
    bodyParams["AppstreamAgentVersion"] = input.AppstreamAgentVersion;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.DomainJoinInfo !== undefined) {
    bodyParams["DomainJoinInfo"] = serializeAws_json1_1DomainJoinInfo(
      input.DomainJoinInfo,
      context
    );
  }
  if (input.EnableDefaultInternetAccess !== undefined) {
    bodyParams["EnableDefaultInternetAccess"] =
      input.EnableDefaultInternetAccess;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.ImageArn !== undefined) {
    bodyParams["ImageArn"] = input.ImageArn;
  }
  if (input.ImageName !== undefined) {
    bodyParams["ImageName"] = input.ImageName;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.VpcConfig !== undefined) {
    bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(
      input.VpcConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateImageBuilderStreamingURLRequest = (
  input: CreateImageBuilderStreamingURLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Validity !== undefined) {
    bodyParams["Validity"] = input.Validity;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateStackRequest = (
  input: CreateStackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessEndpoints !== undefined) {
    bodyParams["AccessEndpoints"] = serializeAws_json1_1AccessEndpointList(
      input.AccessEndpoints,
      context
    );
  }
  if (input.ApplicationSettings !== undefined) {
    bodyParams["ApplicationSettings"] = serializeAws_json1_1ApplicationSettings(
      input.ApplicationSettings,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.EmbedHostDomains !== undefined) {
    bodyParams["EmbedHostDomains"] = serializeAws_json1_1EmbedHostDomains(
      input.EmbedHostDomains,
      context
    );
  }
  if (input.FeedbackURL !== undefined) {
    bodyParams["FeedbackURL"] = input.FeedbackURL;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RedirectURL !== undefined) {
    bodyParams["RedirectURL"] = input.RedirectURL;
  }
  if (input.StorageConnectors !== undefined) {
    bodyParams["StorageConnectors"] = serializeAws_json1_1StorageConnectorList(
      input.StorageConnectors,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.UserSettings !== undefined) {
    bodyParams["UserSettings"] = serializeAws_json1_1UserSettingList(
      input.UserSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateStreamingURLRequest = (
  input: CreateStreamingURLRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationId !== undefined) {
    bodyParams["ApplicationId"] = input.ApplicationId;
  }
  if (input.FleetName !== undefined) {
    bodyParams["FleetName"] = input.FleetName;
  }
  if (input.SessionContext !== undefined) {
    bodyParams["SessionContext"] = input.SessionContext;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  if (input.Validity !== undefined) {
    bodyParams["Validity"] = input.Validity;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateUsageReportSubscriptionRequest = (
  input: CreateUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1CreateUserRequest = (
  input: CreateUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.FirstName !== undefined) {
    bodyParams["FirstName"] = input.FirstName;
  }
  if (input.LastName !== undefined) {
    bodyParams["LastName"] = input.LastName;
  }
  if (input.MessageAction !== undefined) {
    bodyParams["MessageAction"] = input.MessageAction;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDirectoryConfigRequest = (
  input: DeleteDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryName !== undefined) {
    bodyParams["DirectoryName"] = input.DirectoryName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFleetRequest = (
  input: DeleteFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteImageBuilderRequest = (
  input: DeleteImageBuilderRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteImagePermissionsRequest = (
  input: DeleteImagePermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SharedAccountId !== undefined) {
    bodyParams["SharedAccountId"] = input.SharedAccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteImageRequest = (
  input: DeleteImageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteStackRequest = (
  input: DeleteStackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteUsageReportSubscriptionRequest = (
  input: DeleteUsageReportSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DeleteUserRequest = (
  input: DeleteUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDirectoryConfigsRequest = (
  input: DescribeDirectoryConfigsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryNames !== undefined) {
    bodyParams["DirectoryNames"] = serializeAws_json1_1DirectoryNameList(
      input.DirectoryNames,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeFleetsRequest = (
  input: DescribeFleetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Names !== undefined) {
    bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImageBuildersRequest = (
  input: DescribeImageBuildersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Names !== undefined) {
    bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImagePermissionsRequest = (
  input: DescribeImagePermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SharedAwsAccountIds !== undefined) {
    bodyParams["SharedAwsAccountIds"] = serializeAws_json1_1AwsAccountIdList(
      input.SharedAwsAccountIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeImagesRequest = (
  input: DescribeImagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arns !== undefined) {
    bodyParams["Arns"] = serializeAws_json1_1ArnList(input.Arns, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.Names !== undefined) {
    bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSessionsRequest = (
  input: DescribeSessionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.FleetName !== undefined) {
    bodyParams["FleetName"] = input.FleetName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeStacksRequest = (
  input: DescribeStacksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Names !== undefined) {
    bodyParams["Names"] = serializeAws_json1_1StringList(input.Names, context);
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUsageReportSubscriptionsRequest = (
  input: DescribeUsageReportSubscriptionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUserStackAssociationsRequest = (
  input: DescribeUserStackAssociationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUsersRequest = (
  input: DescribeUsersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DirectoryNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DisableUserRequest = (
  input: DisableUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateFleetRequest = (
  input: DisassociateFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FleetName !== undefined) {
    bodyParams["FleetName"] = input.FleetName;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  return bodyParams;
};

const serializeAws_json1_1DomainJoinInfo = (
  input: DomainJoinInfo,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryName !== undefined) {
    bodyParams["DirectoryName"] = input.DirectoryName;
  }
  if (input.OrganizationalUnitDistinguishedName !== undefined) {
    bodyParams["OrganizationalUnitDistinguishedName"] =
      input.OrganizationalUnitDistinguishedName;
  }
  return bodyParams;
};

const serializeAws_json1_1DomainList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1EmbedHostDomains = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1EnableUserRequest = (
  input: EnableUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1ExpireSessionRequest = (
  input: ExpireSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SessionId !== undefined) {
    bodyParams["SessionId"] = input.SessionId;
  }
  return bodyParams;
};

const serializeAws_json1_1FleetAttributes = (
  input: Array<FleetAttribute | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ImagePermissions = (
  input: ImagePermissions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.allowFleet !== undefined) {
    bodyParams["allowFleet"] = input.allowFleet;
  }
  if (input.allowImageBuilder !== undefined) {
    bodyParams["allowImageBuilder"] = input.allowImageBuilder;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAssociatedFleetsRequest = (
  input: ListAssociatedFleetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAssociatedStacksRequest = (
  input: ListAssociatedStacksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FleetName !== undefined) {
    bodyParams["FleetName"] = input.FleetName;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SecurityGroupIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ServiceAccountCredentials = (
  input: ServiceAccountCredentials,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccountName !== undefined) {
    bodyParams["AccountName"] = input.AccountName;
  }
  if (input.AccountPassword !== undefined) {
    bodyParams["AccountPassword"] = input.AccountPassword;
  }
  return bodyParams;
};

const serializeAws_json1_1StackAttributes = (
  input: Array<StackAttribute | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StartFleetRequest = (
  input: StartFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StartImageBuilderRequest = (
  input: StartImageBuilderRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AppstreamAgentVersion !== undefined) {
    bodyParams["AppstreamAgentVersion"] = input.AppstreamAgentVersion;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopFleetRequest = (
  input: StopFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopImageBuilderRequest = (
  input: StopImageBuilderRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StorageConnector = (
  input: StorageConnector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConnectorType !== undefined) {
    bodyParams["ConnectorType"] = input.ConnectorType;
  }
  if (input.Domains !== undefined) {
    bodyParams["Domains"] = serializeAws_json1_1DomainList(
      input.Domains,
      context
    );
  }
  if (input.ResourceIdentifier !== undefined) {
    bodyParams["ResourceIdentifier"] = input.ResourceIdentifier;
  }
  return bodyParams;
};

const serializeAws_json1_1StorageConnectorList = (
  input: Array<StorageConnector>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1StorageConnector(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SubnetIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDirectoryConfigRequest = (
  input: UpdateDirectoryConfigRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DirectoryName !== undefined) {
    bodyParams["DirectoryName"] = input.DirectoryName;
  }
  if (input.OrganizationalUnitDistinguishedNames !== undefined) {
    bodyParams[
      "OrganizationalUnitDistinguishedNames"
    ] = serializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
      input.OrganizationalUnitDistinguishedNames,
      context
    );
  }
  if (input.ServiceAccountCredentials !== undefined) {
    bodyParams[
      "ServiceAccountCredentials"
    ] = serializeAws_json1_1ServiceAccountCredentials(
      input.ServiceAccountCredentials,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateFleetRequest = (
  input: UpdateFleetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AttributesToDelete !== undefined) {
    bodyParams["AttributesToDelete"] = serializeAws_json1_1FleetAttributes(
      input.AttributesToDelete,
      context
    );
  }
  if (input.ComputeCapacity !== undefined) {
    bodyParams["ComputeCapacity"] = serializeAws_json1_1ComputeCapacity(
      input.ComputeCapacity,
      context
    );
  }
  if (input.DeleteVpcConfig !== undefined) {
    bodyParams["DeleteVpcConfig"] = input.DeleteVpcConfig;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DisconnectTimeoutInSeconds !== undefined) {
    bodyParams["DisconnectTimeoutInSeconds"] = input.DisconnectTimeoutInSeconds;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.DomainJoinInfo !== undefined) {
    bodyParams["DomainJoinInfo"] = serializeAws_json1_1DomainJoinInfo(
      input.DomainJoinInfo,
      context
    );
  }
  if (input.EnableDefaultInternetAccess !== undefined) {
    bodyParams["EnableDefaultInternetAccess"] =
      input.EnableDefaultInternetAccess;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.IdleDisconnectTimeoutInSeconds !== undefined) {
    bodyParams["IdleDisconnectTimeoutInSeconds"] =
      input.IdleDisconnectTimeoutInSeconds;
  }
  if (input.ImageArn !== undefined) {
    bodyParams["ImageArn"] = input.ImageArn;
  }
  if (input.ImageName !== undefined) {
    bodyParams["ImageName"] = input.ImageName;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.MaxUserDurationInSeconds !== undefined) {
    bodyParams["MaxUserDurationInSeconds"] = input.MaxUserDurationInSeconds;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.VpcConfig !== undefined) {
    bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(
      input.VpcConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateImagePermissionsRequest = (
  input: UpdateImagePermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ImagePermissions !== undefined) {
    bodyParams["ImagePermissions"] = serializeAws_json1_1ImagePermissions(
      input.ImagePermissions,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SharedAccountId !== undefined) {
    bodyParams["SharedAccountId"] = input.SharedAccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateStackRequest = (
  input: UpdateStackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessEndpoints !== undefined) {
    bodyParams["AccessEndpoints"] = serializeAws_json1_1AccessEndpointList(
      input.AccessEndpoints,
      context
    );
  }
  if (input.ApplicationSettings !== undefined) {
    bodyParams["ApplicationSettings"] = serializeAws_json1_1ApplicationSettings(
      input.ApplicationSettings,
      context
    );
  }
  if (input.AttributesToDelete !== undefined) {
    bodyParams["AttributesToDelete"] = serializeAws_json1_1StackAttributes(
      input.AttributesToDelete,
      context
    );
  }
  if (input.DeleteStorageConnectors !== undefined) {
    bodyParams["DeleteStorageConnectors"] = input.DeleteStorageConnectors;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.EmbedHostDomains !== undefined) {
    bodyParams["EmbedHostDomains"] = serializeAws_json1_1EmbedHostDomains(
      input.EmbedHostDomains,
      context
    );
  }
  if (input.FeedbackURL !== undefined) {
    bodyParams["FeedbackURL"] = input.FeedbackURL;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RedirectURL !== undefined) {
    bodyParams["RedirectURL"] = input.RedirectURL;
  }
  if (input.StorageConnectors !== undefined) {
    bodyParams["StorageConnectors"] = serializeAws_json1_1StorageConnectorList(
      input.StorageConnectors,
      context
    );
  }
  if (input.UserSettings !== undefined) {
    bodyParams["UserSettings"] = serializeAws_json1_1UserSettingList(
      input.UserSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UserSetting = (
  input: UserSetting,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.Permission !== undefined) {
    bodyParams["Permission"] = input.Permission;
  }
  return bodyParams;
};

const serializeAws_json1_1UserSettingList = (
  input: Array<UserSetting>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1UserSetting(entry, context));
  }
  return contents;
};

const serializeAws_json1_1UserStackAssociation = (
  input: UserStackAssociation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationType !== undefined) {
    bodyParams["AuthenticationType"] = input.AuthenticationType;
  }
  if (input.SendEmailNotification !== undefined) {
    bodyParams["SendEmailNotification"] = input.SendEmailNotification;
  }
  if (input.StackName !== undefined) {
    bodyParams["StackName"] = input.StackName;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1UserStackAssociationList = (
  input: Array<UserStackAssociation>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1UserStackAssociation(entry, context));
  }
  return contents;
};

const serializeAws_json1_1VpcConfig = (
  input: VpcConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIdList(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdList(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessEndpoint = (
  output: any,
  context: __SerdeContext
): AccessEndpoint => {
  let contents: any = {
    __type: "AccessEndpoint",
    EndpointType: undefined,
    VpceId: undefined
  };
  if (output.EndpointType !== undefined && output.EndpointType !== null) {
    contents.EndpointType = output.EndpointType;
  }
  if (output.VpceId !== undefined && output.VpceId !== null) {
    contents.VpceId = output.VpceId;
  }
  return contents;
};

const deserializeAws_json1_1AccessEndpointList = (
  output: any,
  context: __SerdeContext
): Array<AccessEndpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AccessEndpoint(entry, context)
  );
};

const deserializeAws_json1_1Application = (
  output: any,
  context: __SerdeContext
): Application => {
  let contents: any = {
    __type: "Application",
    DisplayName: undefined,
    Enabled: undefined,
    IconURL: undefined,
    LaunchParameters: undefined,
    LaunchPath: undefined,
    Metadata: undefined,
    Name: undefined
  };
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.IconURL !== undefined && output.IconURL !== null) {
    contents.IconURL = output.IconURL;
  }
  if (
    output.LaunchParameters !== undefined &&
    output.LaunchParameters !== null
  ) {
    contents.LaunchParameters = output.LaunchParameters;
  }
  if (output.LaunchPath !== undefined && output.LaunchPath !== null) {
    contents.LaunchPath = output.LaunchPath;
  }
  if (output.Metadata !== undefined && output.Metadata !== null) {
    contents.Metadata = deserializeAws_json1_1Metadata(
      output.Metadata,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationSettingsResponse = (
  output: any,
  context: __SerdeContext
): ApplicationSettingsResponse => {
  let contents: any = {
    __type: "ApplicationSettingsResponse",
    Enabled: undefined,
    S3BucketName: undefined,
    SettingsGroup: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.SettingsGroup !== undefined && output.SettingsGroup !== null) {
    contents.SettingsGroup = output.SettingsGroup;
  }
  return contents;
};

const deserializeAws_json1_1Applications = (
  output: any,
  context: __SerdeContext
): Array<Application> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Application(entry, context)
  );
};

const deserializeAws_json1_1AssociateFleetResult = (
  output: any,
  context: __SerdeContext
): AssociateFleetResult => {
  let contents: any = {
    __type: "AssociateFleetResult"
  };
  return contents;
};

const deserializeAws_json1_1BatchAssociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchAssociateUserStackResult => {
  let contents: any = {
    __type: "BatchAssociateUserStackResult",
    errors: undefined
  };
  if (output.errors !== undefined && output.errors !== null) {
    contents.errors = deserializeAws_json1_1UserStackAssociationErrorList(
      output.errors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchDisassociateUserStackResult = (
  output: any,
  context: __SerdeContext
): BatchDisassociateUserStackResult => {
  let contents: any = {
    __type: "BatchDisassociateUserStackResult",
    errors: undefined
  };
  if (output.errors !== undefined && output.errors !== null) {
    contents.errors = deserializeAws_json1_1UserStackAssociationErrorList(
      output.errors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ComputeCapacityStatus = (
  output: any,
  context: __SerdeContext
): ComputeCapacityStatus => {
  let contents: any = {
    __type: "ComputeCapacityStatus",
    Available: undefined,
    Desired: undefined,
    InUse: undefined,
    Running: undefined
  };
  if (output.Available !== undefined && output.Available !== null) {
    contents.Available = output.Available;
  }
  if (output.Desired !== undefined && output.Desired !== null) {
    contents.Desired = output.Desired;
  }
  if (output.InUse !== undefined && output.InUse !== null) {
    contents.InUse = output.InUse;
  }
  if (output.Running !== undefined && output.Running !== null) {
    contents.Running = output.Running;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CopyImageResponse = (
  output: any,
  context: __SerdeContext
): CopyImageResponse => {
  let contents: any = {
    __type: "CopyImageResponse",
    DestinationImageName: undefined
  };
  if (
    output.DestinationImageName !== undefined &&
    output.DestinationImageName !== null
  ) {
    contents.DestinationImageName = output.DestinationImageName;
  }
  return contents;
};

const deserializeAws_json1_1CreateDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): CreateDirectoryConfigResult => {
  let contents: any = {
    __type: "CreateDirectoryConfigResult",
    DirectoryConfig: undefined
  };
  if (output.DirectoryConfig !== undefined && output.DirectoryConfig !== null) {
    contents.DirectoryConfig = deserializeAws_json1_1DirectoryConfig(
      output.DirectoryConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateFleetResult = (
  output: any,
  context: __SerdeContext
): CreateFleetResult => {
  let contents: any = {
    __type: "CreateFleetResult",
    Fleet: undefined
  };
  if (output.Fleet !== undefined && output.Fleet !== null) {
    contents.Fleet = deserializeAws_json1_1Fleet(output.Fleet, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateImageBuilderResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderResult => {
  let contents: any = {
    __type: "CreateImageBuilderResult",
    ImageBuilder: undefined
  };
  if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
    contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(
      output.ImageBuilder,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateImageBuilderStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateImageBuilderStreamingURLResult => {
  let contents: any = {
    __type: "CreateImageBuilderStreamingURLResult",
    Expires: undefined,
    StreamingURL: undefined
  };
  if (output.Expires !== undefined && output.Expires !== null) {
    contents.Expires = new Date(Math.round(output.Expires * 1000));
  }
  if (output.StreamingURL !== undefined && output.StreamingURL !== null) {
    contents.StreamingURL = output.StreamingURL;
  }
  return contents;
};

const deserializeAws_json1_1CreateStackResult = (
  output: any,
  context: __SerdeContext
): CreateStackResult => {
  let contents: any = {
    __type: "CreateStackResult",
    Stack: undefined
  };
  if (output.Stack !== undefined && output.Stack !== null) {
    contents.Stack = deserializeAws_json1_1Stack(output.Stack, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateStreamingURLResult = (
  output: any,
  context: __SerdeContext
): CreateStreamingURLResult => {
  let contents: any = {
    __type: "CreateStreamingURLResult",
    Expires: undefined,
    StreamingURL: undefined
  };
  if (output.Expires !== undefined && output.Expires !== null) {
    contents.Expires = new Date(Math.round(output.Expires * 1000));
  }
  if (output.StreamingURL !== undefined && output.StreamingURL !== null) {
    contents.StreamingURL = output.StreamingURL;
  }
  return contents;
};

const deserializeAws_json1_1CreateUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateUsageReportSubscriptionResult => {
  let contents: any = {
    __type: "CreateUsageReportSubscriptionResult",
    S3BucketName: undefined,
    Schedule: undefined
  };
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.Schedule !== undefined && output.Schedule !== null) {
    contents.Schedule = output.Schedule;
  }
  return contents;
};

const deserializeAws_json1_1CreateUserResult = (
  output: any,
  context: __SerdeContext
): CreateUserResult => {
  let contents: any = {
    __type: "CreateUserResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): DeleteDirectoryConfigResult => {
  let contents: any = {
    __type: "DeleteDirectoryConfigResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteFleetResult = (
  output: any,
  context: __SerdeContext
): DeleteFleetResult => {
  let contents: any = {
    __type: "DeleteFleetResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteImageBuilderResult = (
  output: any,
  context: __SerdeContext
): DeleteImageBuilderResult => {
  let contents: any = {
    __type: "DeleteImageBuilderResult",
    ImageBuilder: undefined
  };
  if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
    contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(
      output.ImageBuilder,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DeleteImagePermissionsResult => {
  let contents: any = {
    __type: "DeleteImagePermissionsResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteImageResult = (
  output: any,
  context: __SerdeContext
): DeleteImageResult => {
  let contents: any = {
    __type: "DeleteImageResult",
    Image: undefined
  };
  if (output.Image !== undefined && output.Image !== null) {
    contents.Image = deserializeAws_json1_1Image(output.Image, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteStackResult = (
  output: any,
  context: __SerdeContext
): DeleteStackResult => {
  let contents: any = {
    __type: "DeleteStackResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteUsageReportSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteUsageReportSubscriptionResult => {
  let contents: any = {
    __type: "DeleteUsageReportSubscriptionResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteUserResult = (
  output: any,
  context: __SerdeContext
): DeleteUserResult => {
  let contents: any = {
    __type: "DeleteUserResult"
  };
  return contents;
};

const deserializeAws_json1_1DescribeDirectoryConfigsResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectoryConfigsResult => {
  let contents: any = {
    __type: "DescribeDirectoryConfigsResult",
    DirectoryConfigs: undefined,
    NextToken: undefined
  };
  if (
    output.DirectoryConfigs !== undefined &&
    output.DirectoryConfigs !== null
  ) {
    contents.DirectoryConfigs = deserializeAws_json1_1DirectoryConfigList(
      output.DirectoryConfigs,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeFleetsResult = (
  output: any,
  context: __SerdeContext
): DescribeFleetsResult => {
  let contents: any = {
    __type: "DescribeFleetsResult",
    Fleets: undefined,
    NextToken: undefined
  };
  if (output.Fleets !== undefined && output.Fleets !== null) {
    contents.Fleets = deserializeAws_json1_1FleetList(output.Fleets, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeImageBuildersResult = (
  output: any,
  context: __SerdeContext
): DescribeImageBuildersResult => {
  let contents: any = {
    __type: "DescribeImageBuildersResult",
    ImageBuilders: undefined,
    NextToken: undefined
  };
  if (output.ImageBuilders !== undefined && output.ImageBuilders !== null) {
    contents.ImageBuilders = deserializeAws_json1_1ImageBuilderList(
      output.ImageBuilders,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): DescribeImagePermissionsResult => {
  let contents: any = {
    __type: "DescribeImagePermissionsResult",
    Name: undefined,
    NextToken: undefined,
    SharedImagePermissionsList: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.SharedImagePermissionsList !== undefined &&
    output.SharedImagePermissionsList !== null
  ) {
    contents.SharedImagePermissionsList = deserializeAws_json1_1SharedImagePermissionsList(
      output.SharedImagePermissionsList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeImagesResult = (
  output: any,
  context: __SerdeContext
): DescribeImagesResult => {
  let contents: any = {
    __type: "DescribeImagesResult",
    Images: undefined,
    NextToken: undefined
  };
  if (output.Images !== undefined && output.Images !== null) {
    contents.Images = deserializeAws_json1_1ImageList(output.Images, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeSessionsResult = (
  output: any,
  context: __SerdeContext
): DescribeSessionsResult => {
  let contents: any = {
    __type: "DescribeSessionsResult",
    NextToken: undefined,
    Sessions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Sessions !== undefined && output.Sessions !== null) {
    contents.Sessions = deserializeAws_json1_1SessionList(
      output.Sessions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeStacksResult = (
  output: any,
  context: __SerdeContext
): DescribeStacksResult => {
  let contents: any = {
    __type: "DescribeStacksResult",
    NextToken: undefined,
    Stacks: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Stacks !== undefined && output.Stacks !== null) {
    contents.Stacks = deserializeAws_json1_1StackList(output.Stacks, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeUsageReportSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): DescribeUsageReportSubscriptionsResult => {
  let contents: any = {
    __type: "DescribeUsageReportSubscriptionsResult",
    NextToken: undefined,
    UsageReportSubscriptions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.UsageReportSubscriptions !== undefined &&
    output.UsageReportSubscriptions !== null
  ) {
    contents.UsageReportSubscriptions = deserializeAws_json1_1UsageReportSubscriptionList(
      output.UsageReportSubscriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeUserStackAssociationsResult = (
  output: any,
  context: __SerdeContext
): DescribeUserStackAssociationsResult => {
  let contents: any = {
    __type: "DescribeUserStackAssociationsResult",
    NextToken: undefined,
    UserStackAssociations: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.UserStackAssociations !== undefined &&
    output.UserStackAssociations !== null
  ) {
    contents.UserStackAssociations = deserializeAws_json1_1UserStackAssociationList(
      output.UserStackAssociations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeUsersResult = (
  output: any,
  context: __SerdeContext
): DescribeUsersResult => {
  let contents: any = {
    __type: "DescribeUsersResult",
    NextToken: undefined,
    Users: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Users !== undefined && output.Users !== null) {
    contents.Users = deserializeAws_json1_1UserList(output.Users, context);
  }
  return contents;
};

const deserializeAws_json1_1DirectoryConfig = (
  output: any,
  context: __SerdeContext
): DirectoryConfig => {
  let contents: any = {
    __type: "DirectoryConfig",
    CreatedTime: undefined,
    DirectoryName: undefined,
    OrganizationalUnitDistinguishedNames: undefined,
    ServiceAccountCredentials: undefined
  };
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.DirectoryName !== undefined && output.DirectoryName !== null) {
    contents.DirectoryName = output.DirectoryName;
  }
  if (
    output.OrganizationalUnitDistinguishedNames !== undefined &&
    output.OrganizationalUnitDistinguishedNames !== null
  ) {
    contents.OrganizationalUnitDistinguishedNames = deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList(
      output.OrganizationalUnitDistinguishedNames,
      context
    );
  }
  if (
    output.ServiceAccountCredentials !== undefined &&
    output.ServiceAccountCredentials !== null
  ) {
    contents.ServiceAccountCredentials = deserializeAws_json1_1ServiceAccountCredentials(
      output.ServiceAccountCredentials,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DirectoryConfigList = (
  output: any,
  context: __SerdeContext
): Array<DirectoryConfig> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DirectoryConfig(entry, context)
  );
};

const deserializeAws_json1_1DisableUserResult = (
  output: any,
  context: __SerdeContext
): DisableUserResult => {
  let contents: any = {
    __type: "DisableUserResult"
  };
  return contents;
};

const deserializeAws_json1_1DisassociateFleetResult = (
  output: any,
  context: __SerdeContext
): DisassociateFleetResult => {
  let contents: any = {
    __type: "DisassociateFleetResult"
  };
  return contents;
};

const deserializeAws_json1_1DomainJoinInfo = (
  output: any,
  context: __SerdeContext
): DomainJoinInfo => {
  let contents: any = {
    __type: "DomainJoinInfo",
    DirectoryName: undefined,
    OrganizationalUnitDistinguishedName: undefined
  };
  if (output.DirectoryName !== undefined && output.DirectoryName !== null) {
    contents.DirectoryName = output.DirectoryName;
  }
  if (
    output.OrganizationalUnitDistinguishedName !== undefined &&
    output.OrganizationalUnitDistinguishedName !== null
  ) {
    contents.OrganizationalUnitDistinguishedName =
      output.OrganizationalUnitDistinguishedName;
  }
  return contents;
};

const deserializeAws_json1_1DomainList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EmbedHostDomains = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EnableUserResult = (
  output: any,
  context: __SerdeContext
): EnableUserResult => {
  let contents: any = {
    __type: "EnableUserResult"
  };
  return contents;
};

const deserializeAws_json1_1ExpireSessionResult = (
  output: any,
  context: __SerdeContext
): ExpireSessionResult => {
  let contents: any = {
    __type: "ExpireSessionResult"
  };
  return contents;
};

const deserializeAws_json1_1Fleet = (
  output: any,
  context: __SerdeContext
): Fleet => {
  let contents: any = {
    __type: "Fleet",
    Arn: undefined,
    ComputeCapacityStatus: undefined,
    CreatedTime: undefined,
    Description: undefined,
    DisconnectTimeoutInSeconds: undefined,
    DisplayName: undefined,
    DomainJoinInfo: undefined,
    EnableDefaultInternetAccess: undefined,
    FleetErrors: undefined,
    FleetType: undefined,
    IamRoleArn: undefined,
    IdleDisconnectTimeoutInSeconds: undefined,
    ImageArn: undefined,
    ImageName: undefined,
    InstanceType: undefined,
    MaxUserDurationInSeconds: undefined,
    Name: undefined,
    State: undefined,
    VpcConfig: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (
    output.ComputeCapacityStatus !== undefined &&
    output.ComputeCapacityStatus !== null
  ) {
    contents.ComputeCapacityStatus = deserializeAws_json1_1ComputeCapacityStatus(
      output.ComputeCapacityStatus,
      context
    );
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.DisconnectTimeoutInSeconds !== undefined &&
    output.DisconnectTimeoutInSeconds !== null
  ) {
    contents.DisconnectTimeoutInSeconds = output.DisconnectTimeoutInSeconds;
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null) {
    contents.DomainJoinInfo = deserializeAws_json1_1DomainJoinInfo(
      output.DomainJoinInfo,
      context
    );
  }
  if (
    output.EnableDefaultInternetAccess !== undefined &&
    output.EnableDefaultInternetAccess !== null
  ) {
    contents.EnableDefaultInternetAccess = output.EnableDefaultInternetAccess;
  }
  if (output.FleetErrors !== undefined && output.FleetErrors !== null) {
    contents.FleetErrors = deserializeAws_json1_1FleetErrors(
      output.FleetErrors,
      context
    );
  }
  if (output.FleetType !== undefined && output.FleetType !== null) {
    contents.FleetType = output.FleetType;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (
    output.IdleDisconnectTimeoutInSeconds !== undefined &&
    output.IdleDisconnectTimeoutInSeconds !== null
  ) {
    contents.IdleDisconnectTimeoutInSeconds =
      output.IdleDisconnectTimeoutInSeconds;
  }
  if (output.ImageArn !== undefined && output.ImageArn !== null) {
    contents.ImageArn = output.ImageArn;
  }
  if (output.ImageName !== undefined && output.ImageName !== null) {
    contents.ImageName = output.ImageName;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (
    output.MaxUserDurationInSeconds !== undefined &&
    output.MaxUserDurationInSeconds !== null
  ) {
    contents.MaxUserDurationInSeconds = output.MaxUserDurationInSeconds;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_json1_1VpcConfig(
      output.VpcConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FleetError = (
  output: any,
  context: __SerdeContext
): FleetError => {
  let contents: any = {
    __type: "FleetError",
    ErrorCode: undefined,
    ErrorMessage: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  return contents;
};

const deserializeAws_json1_1FleetErrors = (
  output: any,
  context: __SerdeContext
): Array<FleetError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FleetError(entry, context)
  );
};

const deserializeAws_json1_1FleetList = (
  output: any,
  context: __SerdeContext
): Array<Fleet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Fleet(entry, context)
  );
};

const deserializeAws_json1_1Image = (
  output: any,
  context: __SerdeContext
): Image => {
  let contents: any = {
    __type: "Image",
    Applications: undefined,
    AppstreamAgentVersion: undefined,
    Arn: undefined,
    BaseImageArn: undefined,
    CreatedTime: undefined,
    Description: undefined,
    DisplayName: undefined,
    ImageBuilderName: undefined,
    ImageBuilderSupported: undefined,
    ImagePermissions: undefined,
    Name: undefined,
    Platform: undefined,
    PublicBaseImageReleasedDate: undefined,
    State: undefined,
    StateChangeReason: undefined,
    Visibility: undefined
  };
  if (output.Applications !== undefined && output.Applications !== null) {
    contents.Applications = deserializeAws_json1_1Applications(
      output.Applications,
      context
    );
  }
  if (
    output.AppstreamAgentVersion !== undefined &&
    output.AppstreamAgentVersion !== null
  ) {
    contents.AppstreamAgentVersion = output.AppstreamAgentVersion;
  }
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.BaseImageArn !== undefined && output.BaseImageArn !== null) {
    contents.BaseImageArn = output.BaseImageArn;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (
    output.ImageBuilderName !== undefined &&
    output.ImageBuilderName !== null
  ) {
    contents.ImageBuilderName = output.ImageBuilderName;
  }
  if (
    output.ImageBuilderSupported !== undefined &&
    output.ImageBuilderSupported !== null
  ) {
    contents.ImageBuilderSupported = output.ImageBuilderSupported;
  }
  if (
    output.ImagePermissions !== undefined &&
    output.ImagePermissions !== null
  ) {
    contents.ImagePermissions = deserializeAws_json1_1ImagePermissions(
      output.ImagePermissions,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Platform !== undefined && output.Platform !== null) {
    contents.Platform = output.Platform;
  }
  if (
    output.PublicBaseImageReleasedDate !== undefined &&
    output.PublicBaseImageReleasedDate !== null
  ) {
    contents.PublicBaseImageReleasedDate = new Date(
      Math.round(output.PublicBaseImageReleasedDate * 1000)
    );
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1ImageStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.Visibility !== undefined && output.Visibility !== null) {
    contents.Visibility = output.Visibility;
  }
  return contents;
};

const deserializeAws_json1_1ImageBuilder = (
  output: any,
  context: __SerdeContext
): ImageBuilder => {
  let contents: any = {
    __type: "ImageBuilder",
    AccessEndpoints: undefined,
    AppstreamAgentVersion: undefined,
    Arn: undefined,
    CreatedTime: undefined,
    Description: undefined,
    DisplayName: undefined,
    DomainJoinInfo: undefined,
    EnableDefaultInternetAccess: undefined,
    IamRoleArn: undefined,
    ImageArn: undefined,
    ImageBuilderErrors: undefined,
    InstanceType: undefined,
    Name: undefined,
    NetworkAccessConfiguration: undefined,
    Platform: undefined,
    State: undefined,
    StateChangeReason: undefined,
    VpcConfig: undefined
  };
  if (output.AccessEndpoints !== undefined && output.AccessEndpoints !== null) {
    contents.AccessEndpoints = deserializeAws_json1_1AccessEndpointList(
      output.AccessEndpoints,
      context
    );
  }
  if (
    output.AppstreamAgentVersion !== undefined &&
    output.AppstreamAgentVersion !== null
  ) {
    contents.AppstreamAgentVersion = output.AppstreamAgentVersion;
  }
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.DomainJoinInfo !== undefined && output.DomainJoinInfo !== null) {
    contents.DomainJoinInfo = deserializeAws_json1_1DomainJoinInfo(
      output.DomainJoinInfo,
      context
    );
  }
  if (
    output.EnableDefaultInternetAccess !== undefined &&
    output.EnableDefaultInternetAccess !== null
  ) {
    contents.EnableDefaultInternetAccess = output.EnableDefaultInternetAccess;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.ImageArn !== undefined && output.ImageArn !== null) {
    contents.ImageArn = output.ImageArn;
  }
  if (
    output.ImageBuilderErrors !== undefined &&
    output.ImageBuilderErrors !== null
  ) {
    contents.ImageBuilderErrors = deserializeAws_json1_1ResourceErrors(
      output.ImageBuilderErrors,
      context
    );
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.NetworkAccessConfiguration !== undefined &&
    output.NetworkAccessConfiguration !== null
  ) {
    contents.NetworkAccessConfiguration = deserializeAws_json1_1NetworkAccessConfiguration(
      output.NetworkAccessConfiguration,
      context
    );
  }
  if (output.Platform !== undefined && output.Platform !== null) {
    contents.Platform = output.Platform;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1ImageBuilderStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_json1_1VpcConfig(
      output.VpcConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ImageBuilderList = (
  output: any,
  context: __SerdeContext
): Array<ImageBuilder> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImageBuilder(entry, context)
  );
};

const deserializeAws_json1_1ImageBuilderStateChangeReason = (
  output: any,
  context: __SerdeContext
): ImageBuilderStateChangeReason => {
  let contents: any = {
    __type: "ImageBuilderStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ImageList = (
  output: any,
  context: __SerdeContext
): Array<Image> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Image(entry, context)
  );
};

const deserializeAws_json1_1ImagePermissions = (
  output: any,
  context: __SerdeContext
): ImagePermissions => {
  let contents: any = {
    __type: "ImagePermissions",
    allowFleet: undefined,
    allowImageBuilder: undefined
  };
  if (output.allowFleet !== undefined && output.allowFleet !== null) {
    contents.allowFleet = output.allowFleet;
  }
  if (
    output.allowImageBuilder !== undefined &&
    output.allowImageBuilder !== null
  ) {
    contents.allowImageBuilder = output.allowImageBuilder;
  }
  return contents;
};

const deserializeAws_json1_1ImageStateChangeReason = (
  output: any,
  context: __SerdeContext
): ImageStateChangeReason => {
  let contents: any = {
    __type: "ImageStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1IncompatibleImageException = (
  output: any,
  context: __SerdeContext
): IncompatibleImageException => {
  let contents: any = {
    __type: "IncompatibleImageException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidAccountStatusException = (
  output: any,
  context: __SerdeContext
): InvalidAccountStatusException => {
  let contents: any = {
    __type: "InvalidAccountStatusException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  let contents: any = {
    __type: "InvalidParameterCombinationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRoleException = (
  output: any,
  context: __SerdeContext
): InvalidRoleException => {
  let contents: any = {
    __type: "InvalidRoleException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LastReportGenerationExecutionError = (
  output: any,
  context: __SerdeContext
): LastReportGenerationExecutionError => {
  let contents: any = {
    __type: "LastReportGenerationExecutionError",
    ErrorCode: undefined,
    ErrorMessage: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  return contents;
};

const deserializeAws_json1_1LastReportGenerationExecutionErrors = (
  output: any,
  context: __SerdeContext
): Array<LastReportGenerationExecutionError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LastReportGenerationExecutionError(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListAssociatedFleetsResult = (
  output: any,
  context: __SerdeContext
): ListAssociatedFleetsResult => {
  let contents: any = {
    __type: "ListAssociatedFleetsResult",
    Names: undefined,
    NextToken: undefined
  };
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_json1_1StringList(output.Names, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListAssociatedStacksResult = (
  output: any,
  context: __SerdeContext
): ListAssociatedStacksResult => {
  let contents: any = {
    __type: "ListAssociatedStacksResult",
    Names: undefined,
    NextToken: undefined
  };
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_json1_1StringList(output.Names, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1Metadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1NetworkAccessConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkAccessConfiguration => {
  let contents: any = {
    __type: "NetworkAccessConfiguration",
    EniId: undefined,
    EniPrivateIpAddress: undefined
  };
  if (output.EniId !== undefined && output.EniId !== null) {
    contents.EniId = output.EniId;
  }
  if (
    output.EniPrivateIpAddress !== undefined &&
    output.EniPrivateIpAddress !== null
  ) {
    contents.EniPrivateIpAddress = output.EniPrivateIpAddress;
  }
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  let contents: any = {
    __type: "OperationNotPermittedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationalUnitDistinguishedNamesList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceError = (
  output: any,
  context: __SerdeContext
): ResourceError => {
  let contents: any = {
    __type: "ResourceError",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    ErrorTimestamp: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.ErrorTimestamp !== undefined && output.ErrorTimestamp !== null) {
    contents.ErrorTimestamp = new Date(
      Math.round(output.ErrorTimestamp * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceErrors = (
  output: any,
  context: __SerdeContext
): Array<ResourceError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceError(entry, context)
  );
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotAvailableException = (
  output: any,
  context: __SerdeContext
): ResourceNotAvailableException => {
  let contents: any = {
    __type: "ResourceNotAvailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroupIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServiceAccountCredentials = (
  output: any,
  context: __SerdeContext
): ServiceAccountCredentials => {
  let contents: any = {
    __type: "ServiceAccountCredentials",
    AccountName: undefined,
    AccountPassword: undefined
  };
  if (output.AccountName !== undefined && output.AccountName !== null) {
    contents.AccountName = output.AccountName;
  }
  if (output.AccountPassword !== undefined && output.AccountPassword !== null) {
    contents.AccountPassword = output.AccountPassword;
  }
  return contents;
};

const deserializeAws_json1_1Session = (
  output: any,
  context: __SerdeContext
): Session => {
  let contents: any = {
    __type: "Session",
    AuthenticationType: undefined,
    ConnectionState: undefined,
    FleetName: undefined,
    Id: undefined,
    MaxExpirationTime: undefined,
    NetworkAccessConfiguration: undefined,
    StackName: undefined,
    StartTime: undefined,
    State: undefined,
    UserId: undefined
  };
  if (
    output.AuthenticationType !== undefined &&
    output.AuthenticationType !== null
  ) {
    contents.AuthenticationType = output.AuthenticationType;
  }
  if (output.ConnectionState !== undefined && output.ConnectionState !== null) {
    contents.ConnectionState = output.ConnectionState;
  }
  if (output.FleetName !== undefined && output.FleetName !== null) {
    contents.FleetName = output.FleetName;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.MaxExpirationTime !== undefined &&
    output.MaxExpirationTime !== null
  ) {
    contents.MaxExpirationTime = new Date(
      Math.round(output.MaxExpirationTime * 1000)
    );
  }
  if (
    output.NetworkAccessConfiguration !== undefined &&
    output.NetworkAccessConfiguration !== null
  ) {
    contents.NetworkAccessConfiguration = deserializeAws_json1_1NetworkAccessConfiguration(
      output.NetworkAccessConfiguration,
      context
    );
  }
  if (output.StackName !== undefined && output.StackName !== null) {
    contents.StackName = output.StackName;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.UserId !== undefined && output.UserId !== null) {
    contents.UserId = output.UserId;
  }
  return contents;
};

const deserializeAws_json1_1SessionList = (
  output: any,
  context: __SerdeContext
): Array<Session> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Session(entry, context)
  );
};

const deserializeAws_json1_1SharedImagePermissions = (
  output: any,
  context: __SerdeContext
): SharedImagePermissions => {
  let contents: any = {
    __type: "SharedImagePermissions",
    imagePermissions: undefined,
    sharedAccountId: undefined
  };
  if (
    output.imagePermissions !== undefined &&
    output.imagePermissions !== null
  ) {
    contents.imagePermissions = deserializeAws_json1_1ImagePermissions(
      output.imagePermissions,
      context
    );
  }
  if (output.sharedAccountId !== undefined && output.sharedAccountId !== null) {
    contents.sharedAccountId = output.sharedAccountId;
  }
  return contents;
};

const deserializeAws_json1_1SharedImagePermissionsList = (
  output: any,
  context: __SerdeContext
): Array<SharedImagePermissions> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SharedImagePermissions(entry, context)
  );
};

const deserializeAws_json1_1Stack = (
  output: any,
  context: __SerdeContext
): Stack => {
  let contents: any = {
    __type: "Stack",
    AccessEndpoints: undefined,
    ApplicationSettings: undefined,
    Arn: undefined,
    CreatedTime: undefined,
    Description: undefined,
    DisplayName: undefined,
    EmbedHostDomains: undefined,
    FeedbackURL: undefined,
    Name: undefined,
    RedirectURL: undefined,
    StackErrors: undefined,
    StorageConnectors: undefined,
    UserSettings: undefined
  };
  if (output.AccessEndpoints !== undefined && output.AccessEndpoints !== null) {
    contents.AccessEndpoints = deserializeAws_json1_1AccessEndpointList(
      output.AccessEndpoints,
      context
    );
  }
  if (
    output.ApplicationSettings !== undefined &&
    output.ApplicationSettings !== null
  ) {
    contents.ApplicationSettings = deserializeAws_json1_1ApplicationSettingsResponse(
      output.ApplicationSettings,
      context
    );
  }
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (
    output.EmbedHostDomains !== undefined &&
    output.EmbedHostDomains !== null
  ) {
    contents.EmbedHostDomains = deserializeAws_json1_1EmbedHostDomains(
      output.EmbedHostDomains,
      context
    );
  }
  if (output.FeedbackURL !== undefined && output.FeedbackURL !== null) {
    contents.FeedbackURL = output.FeedbackURL;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RedirectURL !== undefined && output.RedirectURL !== null) {
    contents.RedirectURL = output.RedirectURL;
  }
  if (output.StackErrors !== undefined && output.StackErrors !== null) {
    contents.StackErrors = deserializeAws_json1_1StackErrors(
      output.StackErrors,
      context
    );
  }
  if (
    output.StorageConnectors !== undefined &&
    output.StorageConnectors !== null
  ) {
    contents.StorageConnectors = deserializeAws_json1_1StorageConnectorList(
      output.StorageConnectors,
      context
    );
  }
  if (output.UserSettings !== undefined && output.UserSettings !== null) {
    contents.UserSettings = deserializeAws_json1_1UserSettingList(
      output.UserSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StackError = (
  output: any,
  context: __SerdeContext
): StackError => {
  let contents: any = {
    __type: "StackError",
    ErrorCode: undefined,
    ErrorMessage: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  return contents;
};

const deserializeAws_json1_1StackErrors = (
  output: any,
  context: __SerdeContext
): Array<StackError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StackError(entry, context)
  );
};

const deserializeAws_json1_1StackList = (
  output: any,
  context: __SerdeContext
): Array<Stack> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Stack(entry, context)
  );
};

const deserializeAws_json1_1StartFleetResult = (
  output: any,
  context: __SerdeContext
): StartFleetResult => {
  let contents: any = {
    __type: "StartFleetResult"
  };
  return contents;
};

const deserializeAws_json1_1StartImageBuilderResult = (
  output: any,
  context: __SerdeContext
): StartImageBuilderResult => {
  let contents: any = {
    __type: "StartImageBuilderResult",
    ImageBuilder: undefined
  };
  if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
    contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(
      output.ImageBuilder,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StopFleetResult = (
  output: any,
  context: __SerdeContext
): StopFleetResult => {
  let contents: any = {
    __type: "StopFleetResult"
  };
  return contents;
};

const deserializeAws_json1_1StopImageBuilderResult = (
  output: any,
  context: __SerdeContext
): StopImageBuilderResult => {
  let contents: any = {
    __type: "StopImageBuilderResult",
    ImageBuilder: undefined
  };
  if (output.ImageBuilder !== undefined && output.ImageBuilder !== null) {
    contents.ImageBuilder = deserializeAws_json1_1ImageBuilder(
      output.ImageBuilder,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StorageConnector = (
  output: any,
  context: __SerdeContext
): StorageConnector => {
  let contents: any = {
    __type: "StorageConnector",
    ConnectorType: undefined,
    Domains: undefined,
    ResourceIdentifier: undefined
  };
  if (output.ConnectorType !== undefined && output.ConnectorType !== null) {
    contents.ConnectorType = output.ConnectorType;
  }
  if (output.Domains !== undefined && output.Domains !== null) {
    contents.Domains = deserializeAws_json1_1DomainList(
      output.Domains,
      context
    );
  }
  if (
    output.ResourceIdentifier !== undefined &&
    output.ResourceIdentifier !== null
  ) {
    contents.ResourceIdentifier = output.ResourceIdentifier;
  }
  return contents;
};

const deserializeAws_json1_1StorageConnectorList = (
  output: any,
  context: __SerdeContext
): Array<StorageConnector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StorageConnector(entry, context)
  );
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SubnetIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDirectoryConfigResult = (
  output: any,
  context: __SerdeContext
): UpdateDirectoryConfigResult => {
  let contents: any = {
    __type: "UpdateDirectoryConfigResult",
    DirectoryConfig: undefined
  };
  if (output.DirectoryConfig !== undefined && output.DirectoryConfig !== null) {
    contents.DirectoryConfig = deserializeAws_json1_1DirectoryConfig(
      output.DirectoryConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateFleetResult = (
  output: any,
  context: __SerdeContext
): UpdateFleetResult => {
  let contents: any = {
    __type: "UpdateFleetResult",
    Fleet: undefined
  };
  if (output.Fleet !== undefined && output.Fleet !== null) {
    contents.Fleet = deserializeAws_json1_1Fleet(output.Fleet, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateImagePermissionsResult = (
  output: any,
  context: __SerdeContext
): UpdateImagePermissionsResult => {
  let contents: any = {
    __type: "UpdateImagePermissionsResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateStackResult = (
  output: any,
  context: __SerdeContext
): UpdateStackResult => {
  let contents: any = {
    __type: "UpdateStackResult",
    Stack: undefined
  };
  if (output.Stack !== undefined && output.Stack !== null) {
    contents.Stack = deserializeAws_json1_1Stack(output.Stack, context);
  }
  return contents;
};

const deserializeAws_json1_1UsageReportSubscription = (
  output: any,
  context: __SerdeContext
): UsageReportSubscription => {
  let contents: any = {
    __type: "UsageReportSubscription",
    LastGeneratedReportDate: undefined,
    S3BucketName: undefined,
    Schedule: undefined,
    SubscriptionErrors: undefined
  };
  if (
    output.LastGeneratedReportDate !== undefined &&
    output.LastGeneratedReportDate !== null
  ) {
    contents.LastGeneratedReportDate = new Date(
      Math.round(output.LastGeneratedReportDate * 1000)
    );
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.Schedule !== undefined && output.Schedule !== null) {
    contents.Schedule = output.Schedule;
  }
  if (
    output.SubscriptionErrors !== undefined &&
    output.SubscriptionErrors !== null
  ) {
    contents.SubscriptionErrors = deserializeAws_json1_1LastReportGenerationExecutionErrors(
      output.SubscriptionErrors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UsageReportSubscriptionList = (
  output: any,
  context: __SerdeContext
): Array<UsageReportSubscription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UsageReportSubscription(entry, context)
  );
};

const deserializeAws_json1_1User = (
  output: any,
  context: __SerdeContext
): User => {
  let contents: any = {
    __type: "User",
    Arn: undefined,
    AuthenticationType: undefined,
    CreatedTime: undefined,
    Enabled: undefined,
    FirstName: undefined,
    LastName: undefined,
    Status: undefined,
    UserName: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (
    output.AuthenticationType !== undefined &&
    output.AuthenticationType !== null
  ) {
    contents.AuthenticationType = output.AuthenticationType;
  }
  if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
    contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.FirstName !== undefined && output.FirstName !== null) {
    contents.FirstName = output.FirstName;
  }
  if (output.LastName !== undefined && output.LastName !== null) {
    contents.LastName = output.LastName;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1UserList = (
  output: any,
  context: __SerdeContext
): Array<User> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1User(entry, context)
  );
};

const deserializeAws_json1_1UserSetting = (
  output: any,
  context: __SerdeContext
): UserSetting => {
  let contents: any = {
    __type: "UserSetting",
    Action: undefined,
    Permission: undefined
  };
  if (output.Action !== undefined && output.Action !== null) {
    contents.Action = output.Action;
  }
  if (output.Permission !== undefined && output.Permission !== null) {
    contents.Permission = output.Permission;
  }
  return contents;
};

const deserializeAws_json1_1UserSettingList = (
  output: any,
  context: __SerdeContext
): Array<UserSetting> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserSetting(entry, context)
  );
};

const deserializeAws_json1_1UserStackAssociation = (
  output: any,
  context: __SerdeContext
): UserStackAssociation => {
  let contents: any = {
    __type: "UserStackAssociation",
    AuthenticationType: undefined,
    SendEmailNotification: undefined,
    StackName: undefined,
    UserName: undefined
  };
  if (
    output.AuthenticationType !== undefined &&
    output.AuthenticationType !== null
  ) {
    contents.AuthenticationType = output.AuthenticationType;
  }
  if (
    output.SendEmailNotification !== undefined &&
    output.SendEmailNotification !== null
  ) {
    contents.SendEmailNotification = output.SendEmailNotification;
  }
  if (output.StackName !== undefined && output.StackName !== null) {
    contents.StackName = output.StackName;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1UserStackAssociationError = (
  output: any,
  context: __SerdeContext
): UserStackAssociationError => {
  let contents: any = {
    __type: "UserStackAssociationError",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    UserStackAssociation: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (
    output.UserStackAssociation !== undefined &&
    output.UserStackAssociation !== null
  ) {
    contents.UserStackAssociation = deserializeAws_json1_1UserStackAssociation(
      output.UserStackAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UserStackAssociationErrorList = (
  output: any,
  context: __SerdeContext
): Array<UserStackAssociationError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserStackAssociationError(entry, context)
  );
};

const deserializeAws_json1_1UserStackAssociationList = (
  output: any,
  context: __SerdeContext
): Array<UserStackAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserStackAssociation(entry, context)
  );
};

const deserializeAws_json1_1VpcConfig = (
  output: any,
  context: __SerdeContext
): VpcConfig => {
  let contents: any = {
    __type: "VpcConfig",
    SecurityGroupIds: undefined,
    SubnetIds: undefined
  };
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIdList(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIdList(
      output.SubnetIds,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
