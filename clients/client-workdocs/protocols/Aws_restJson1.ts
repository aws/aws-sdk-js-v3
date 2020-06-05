import {
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput
} from "../commands/AbortDocumentVersionUploadCommand";
import {
  ActivateUserCommandInput,
  ActivateUserCommandOutput
} from "../commands/ActivateUserCommand";
import {
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput
} from "../commands/AddResourcePermissionsCommand";
import {
  CreateCommentCommandInput,
  CreateCommentCommandOutput
} from "../commands/CreateCommentCommand";
import {
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput
} from "../commands/CreateCustomMetadataCommand";
import {
  CreateFolderCommandInput,
  CreateFolderCommandOutput
} from "../commands/CreateFolderCommand";
import {
  CreateLabelsCommandInput,
  CreateLabelsCommandOutput
} from "../commands/CreateLabelsCommand";
import {
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput
} from "../commands/CreateNotificationSubscriptionCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeactivateUserCommandInput,
  DeactivateUserCommandOutput
} from "../commands/DeactivateUserCommand";
import {
  DeleteCommentCommandInput,
  DeleteCommentCommandOutput
} from "../commands/DeleteCommentCommand";
import {
  DeleteCustomMetadataCommandInput,
  DeleteCustomMetadataCommandOutput
} from "../commands/DeleteCustomMetadataCommand";
import {
  DeleteDocumentCommandInput,
  DeleteDocumentCommandOutput
} from "../commands/DeleteDocumentCommand";
import {
  DeleteFolderCommandInput,
  DeleteFolderCommandOutput
} from "../commands/DeleteFolderCommand";
import {
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput
} from "../commands/DeleteFolderContentsCommand";
import {
  DeleteLabelsCommandInput,
  DeleteLabelsCommandOutput
} from "../commands/DeleteLabelsCommand";
import {
  DeleteNotificationSubscriptionCommandInput,
  DeleteNotificationSubscriptionCommandOutput
} from "../commands/DeleteNotificationSubscriptionCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeActivitiesCommandInput,
  DescribeActivitiesCommandOutput
} from "../commands/DescribeActivitiesCommand";
import {
  DescribeCommentsCommandInput,
  DescribeCommentsCommandOutput
} from "../commands/DescribeCommentsCommand";
import {
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput
} from "../commands/DescribeDocumentVersionsCommand";
import {
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput
} from "../commands/DescribeFolderContentsCommand";
import {
  DescribeGroupsCommandInput,
  DescribeGroupsCommandOutput
} from "../commands/DescribeGroupsCommand";
import {
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput
} from "../commands/DescribeNotificationSubscriptionsCommand";
import {
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput
} from "../commands/DescribeResourcePermissionsCommand";
import {
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput
} from "../commands/DescribeRootFoldersCommand";
import {
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput
} from "../commands/DescribeUsersCommand";
import {
  GetCurrentUserCommandInput,
  GetCurrentUserCommandOutput
} from "../commands/GetCurrentUserCommand";
import {
  GetDocumentCommandInput,
  GetDocumentCommandOutput
} from "../commands/GetDocumentCommand";
import {
  GetDocumentPathCommandInput,
  GetDocumentPathCommandOutput
} from "../commands/GetDocumentPathCommand";
import {
  GetDocumentVersionCommandInput,
  GetDocumentVersionCommandOutput
} from "../commands/GetDocumentVersionCommand";
import {
  GetFolderCommandInput,
  GetFolderCommandOutput
} from "../commands/GetFolderCommand";
import {
  GetFolderPathCommandInput,
  GetFolderPathCommandOutput
} from "../commands/GetFolderPathCommand";
import {
  GetResourcesCommandInput,
  GetResourcesCommandOutput
} from "../commands/GetResourcesCommand";
import {
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput
} from "../commands/InitiateDocumentVersionUploadCommand";
import {
  RemoveAllResourcePermissionsCommandInput,
  RemoveAllResourcePermissionsCommandOutput
} from "../commands/RemoveAllResourcePermissionsCommand";
import {
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput
} from "../commands/RemoveResourcePermissionCommand";
import {
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput
} from "../commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput
} from "../commands/UpdateDocumentVersionCommand";
import {
  UpdateFolderCommandInput,
  UpdateFolderCommandOutput
} from "../commands/UpdateFolderCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "../commands/UpdateUserCommand";
import {
  Activity,
  Comment,
  CommentMetadata,
  ConcurrentModificationException,
  ConflictingOperationException,
  CustomMetadataLimitExceededException,
  DeactivatingLastSystemUserException,
  DocumentLockedForCommentsException,
  DocumentMetadata,
  DocumentSourceType,
  DocumentThumbnailType,
  DocumentVersionMetadata,
  DraftUploadOutOfSyncException,
  EntityAlreadyExistsException,
  EntityNotExistsException,
  FailedDependencyException,
  FolderMetadata,
  GroupMetadata,
  IllegalUserStateException,
  InvalidArgumentException,
  InvalidCommentOperationException,
  InvalidOperationException,
  InvalidPasswordException,
  LimitExceededException,
  NotificationOptions,
  Participants,
  PermissionInfo,
  Principal,
  ProhibitedStateException,
  RequestedEntityTooLargeException,
  ResourceAlreadyCheckedOutException,
  ResourceMetadata,
  ResourcePath,
  ResourcePathComponent,
  ServiceUnavailableException,
  SharePrincipal,
  ShareResult,
  StorageLimitExceededException,
  StorageLimitWillExceedException,
  StorageRuleType,
  Subscription,
  TooManyLabelsException,
  TooManySubscriptionsException,
  UnauthorizedOperationException,
  UnauthorizedResourceAccessException,
  UploadMetadata,
  User,
  UserMetadata,
  UserStorageMetadata
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1AbortDocumentVersionUploadCommand = async (
  input: AbortDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: string = input.VersionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{VersionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ActivateUserCommand = async (
  input: ActivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/users/{UserId}/activation";
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1AddResourcePermissionsCommand = async (
  input: AddResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.NotificationOptions !== undefined && {
      NotificationOptions: serializeAws_restJson1NotificationOptions(
        input.NotificationOptions,
        context
      )
    }),
    ...(input.Principals !== undefined && {
      Principals: serializeAws_restJson1SharePrincipalList(
        input.Principals,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateCommentCommand = async (
  input: CreateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath =
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: string = input.VersionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{VersionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.NotifyCollaborators !== undefined && {
      NotifyCollaborators: input.NotifyCollaborators
    }),
    ...(input.ParentId !== undefined && { ParentId: input.ParentId }),
    ...(input.Text !== undefined && { Text: input.Text }),
    ...(input.ThreadId !== undefined && { ThreadId: input.ThreadId }),
    ...(input.Visibility !== undefined && { Visibility: input.Visibility })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateCustomMetadataCommand = async (
  input: CreateCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/customMetadata";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.VersionId !== undefined && { versionid: input.VersionId })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.CustomMetadata !== undefined && {
      CustomMetadata: serializeAws_restJson1CustomMetadataMap(
        input.CustomMetadata,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1CreateFolderCommand = async (
  input: CreateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders";
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ParentFolderId !== undefined && {
      ParentFolderId: input.ParentFolderId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateLabelsCommand = async (
  input: CreateLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/labels";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Labels !== undefined && {
      Labels: serializeAws_restJson1SharedLabels(input.Labels, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateNotificationSubscriptionCommand = async (
  input: CreateNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions";
  if (input.OrganizationId !== undefined) {
    const labelValue: string = input.OrganizationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: OrganizationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{OrganizationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OrganizationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Endpoint !== undefined && { Endpoint: input.Endpoint }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol }),
    ...(input.SubscriptionType !== undefined && {
      SubscriptionType: input.SubscriptionType
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/users";
  let body: any;
  body = JSON.stringify({
    ...(input.EmailAddress !== undefined && {
      EmailAddress: input.EmailAddress
    }),
    ...(input.GivenName !== undefined && { GivenName: input.GivenName }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.StorageRule !== undefined && {
      StorageRule: serializeAws_restJson1StorageRuleType(
        input.StorageRule,
        context
      )
    }),
    ...(input.Surname !== undefined && { Surname: input.Surname }),
    ...(input.TimeZoneId !== undefined && { TimeZoneId: input.TimeZoneId }),
    ...(input.Username !== undefined && { Username: input.Username })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeactivateUserCommand = async (
  input: DeactivateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/users/{UserId}/activation";
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteCommentCommand = async (
  input: DeleteCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath =
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}";
  if (input.CommentId !== undefined) {
    const labelValue: string = input.CommentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CommentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{CommentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: CommentId.");
  }
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: string = input.VersionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{VersionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteCustomMetadataCommand = async (
  input: DeleteCustomMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/customMetadata";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.DeleteAll !== undefined && {
      deleteAll: input.DeleteAll.toString()
    }),
    ...(input.Keys !== undefined && {
      keys: (input.Keys || []).map(_entry => _entry)
    }),
    ...(input.VersionId !== undefined && { versionId: input.VersionId })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DeleteDocumentCommand = async (
  input: DeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteFolderCommand = async (
  input: DeleteFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders/{FolderId}";
  if (input.FolderId !== undefined) {
    const labelValue: string = input.FolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace(
      "{FolderId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteFolderContentsCommand = async (
  input: DeleteFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders/{FolderId}/contents";
  if (input.FolderId !== undefined) {
    const labelValue: string = input.FolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace(
      "{FolderId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteLabelsCommand = async (
  input: DeleteLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/labels";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.DeleteAll !== undefined && {
      deleteAll: input.DeleteAll.toString()
    }),
    ...(input.Labels !== undefined && {
      labels: (input.Labels || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DeleteNotificationSubscriptionCommand = async (
  input: DeleteNotificationSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}";
  if (input.OrganizationId !== undefined) {
    const labelValue: string = input.OrganizationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: OrganizationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{OrganizationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OrganizationId.");
  }
  if (input.SubscriptionId !== undefined) {
    const labelValue: string = input.SubscriptionId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SubscriptionId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SubscriptionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SubscriptionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/users/{UserId}";
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeActivitiesCommand = async (
  input: DescribeActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/activities";
  const query: any = {
    ...(input.ActivityTypes !== undefined && {
      activityTypes: input.ActivityTypes
    }),
    ...(input.EndTime !== undefined && {
      endTime: (input.EndTime.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.IncludeIndirectActivities !== undefined && {
      includeIndirectActivities: input.IncludeIndirectActivities.toString()
    }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.OrganizationId !== undefined && {
      organizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { resourceId: input.ResourceId }),
    ...(input.StartTime !== undefined && {
      startTime: (input.StartTime.toISOString().split(".")[0] + "Z").toString()
    }),
    ...(input.UserId !== undefined && { userId: input.UserId })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeCommentsCommand = async (
  input: DescribeCommentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath =
    "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: string = input.VersionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{VersionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  const query: any = {
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeDocumentVersionsCommand = async (
  input: DescribeDocumentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  const query: any = {
    ...(input.Fields !== undefined && { fields: input.Fields }),
    ...(input.Include !== undefined && { include: input.Include }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeFolderContentsCommand = async (
  input: DescribeFolderContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders/{FolderId}/contents";
  if (input.FolderId !== undefined) {
    const labelValue: string = input.FolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace(
      "{FolderId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  const query: any = {
    ...(input.Include !== undefined && { include: input.Include }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.Order !== undefined && { order: input.Order }),
    ...(input.Sort !== undefined && { sort: input.Sort }),
    ...(input.Type !== undefined && { type: input.Type })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeGroupsCommand = async (
  input: DescribeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/groups";
  const query: any = {
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.OrganizationId !== undefined && {
      organizationId: input.OrganizationId
    }),
    ...(input.SearchQuery !== undefined && { searchQuery: input.SearchQuery })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeNotificationSubscriptionsCommand = async (
  input: DescribeNotificationSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions";
  if (input.OrganizationId !== undefined) {
    const labelValue: string = input.OrganizationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: OrganizationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{OrganizationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OrganizationId.");
  }
  const query: any = {
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeResourcePermissionsCommand = async (
  input: DescribeResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.PrincipalId !== undefined && { principalId: input.PrincipalId })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeRootFoldersCommand = async (
  input: DescribeRootFoldersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/me/root";
  const query: any = {
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1DescribeUsersCommand = async (
  input: DescribeUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/users";
  const query: any = {
    ...(input.Fields !== undefined && { fields: input.Fields }),
    ...(input.Include !== undefined && { include: input.Include }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.Order !== undefined && { order: input.Order }),
    ...(input.OrganizationId !== undefined && {
      organizationId: input.OrganizationId
    }),
    ...(input.Query !== undefined && { query: input.Query }),
    ...(input.Sort !== undefined && { sort: input.Sort }),
    ...(input.UserIds !== undefined && { userIds: input.UserIds })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetCurrentUserCommand = async (
  input: GetCurrentUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/me";
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetDocumentCommand = async (
  input: GetDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  const query: any = {
    ...(input.IncludeCustomMetadata !== undefined && {
      includeCustomMetadata: input.IncludeCustomMetadata.toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetDocumentPathCommand = async (
  input: GetDocumentPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}/path";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  const query: any = {
    ...(input.Fields !== undefined && { fields: input.Fields }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetDocumentVersionCommand = async (
  input: GetDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: string = input.VersionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{VersionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  const query: any = {
    ...(input.Fields !== undefined && { fields: input.Fields }),
    ...(input.IncludeCustomMetadata !== undefined && {
      includeCustomMetadata: input.IncludeCustomMetadata.toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetFolderCommand = async (
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders/{FolderId}";
  if (input.FolderId !== undefined) {
    const labelValue: string = input.FolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace(
      "{FolderId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  const query: any = {
    ...(input.IncludeCustomMetadata !== undefined && {
      includeCustomMetadata: input.IncludeCustomMetadata.toString()
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetFolderPathCommand = async (
  input: GetFolderPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders/{FolderId}/path";
  if (input.FolderId !== undefined) {
    const labelValue: string = input.FolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace(
      "{FolderId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  const query: any = {
    ...(input.Fields !== undefined && { fields: input.Fields }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1GetResourcesCommand = async (
  input: GetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources";
  const query: any = {
    ...(input.CollectionType !== undefined && {
      collectionType: input.CollectionType
    }),
    ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
    ...(input.Marker !== undefined && { marker: input.Marker }),
    ...(input.UserId !== undefined && { userId: input.UserId })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1InitiateDocumentVersionUploadCommand = async (
  input: InitiateDocumentVersionUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents";
  let body: any;
  body = JSON.stringify({
    ...(input.ContentCreatedTimestamp !== undefined && {
      ContentCreatedTimestamp: Math.round(
        input.ContentCreatedTimestamp.getTime() / 1000
      )
    }),
    ...(input.ContentModifiedTimestamp !== undefined && {
      ContentModifiedTimestamp: Math.round(
        input.ContentModifiedTimestamp.getTime() / 1000
      )
    }),
    ...(input.ContentType !== undefined && { ContentType: input.ContentType }),
    ...(input.DocumentSizeInBytes !== undefined && {
      DocumentSizeInBytes: input.DocumentSizeInBytes
    }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ParentFolderId !== undefined && {
      ParentFolderId: input.ParentFolderId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RemoveAllResourcePermissionsCommand = async (
  input: RemoveAllResourcePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RemoveResourcePermissionCommand = async (
  input: RemoveResourcePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}";
  if (input.PrincipalId !== undefined) {
    const labelValue: string = input.PrincipalId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: PrincipalId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{PrincipalId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: PrincipalId.");
  }
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.PrincipalType !== undefined && { type: input.PrincipalType })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1UpdateDocumentCommand = async (
  input: UpdateDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ParentFolderId !== undefined && {
      ParentFolderId: input.ParentFolderId
    }),
    ...(input.ResourceState !== undefined && {
      ResourceState: input.ResourceState
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateDocumentVersionCommand = async (
  input: UpdateDocumentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
  if (input.DocumentId !== undefined) {
    const labelValue: string = input.DocumentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DocumentId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DocumentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DocumentId.");
  }
  if (input.VersionId !== undefined) {
    const labelValue: string = input.VersionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{VersionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.VersionStatus !== undefined && {
      VersionStatus: input.VersionStatus
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateFolderCommand = async (
  input: UpdateFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/folders/{FolderId}";
  if (input.FolderId !== undefined) {
    const labelValue: string = input.FolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FolderId.");
    }
    resolvedPath = resolvedPath.replace(
      "{FolderId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FolderId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ParentFolderId !== undefined && {
      ParentFolderId: input.ParentFolderId
    }),
    ...(input.ResourceState !== undefined && {
      ResourceState: input.ResourceState
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.AuthenticationToken) && {
      Authentication: input.AuthenticationToken!
    })
  };
  let resolvedPath = "/api/v1/users/{UserId}";
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GivenName !== undefined && { GivenName: input.GivenName }),
    ...(input.GrantPoweruserPrivileges !== undefined && {
      GrantPoweruserPrivileges: input.GrantPoweruserPrivileges
    }),
    ...(input.Locale !== undefined && { Locale: input.Locale }),
    ...(input.StorageRule !== undefined && {
      StorageRule: serializeAws_restJson1StorageRuleType(
        input.StorageRule,
        context
      )
    }),
    ...(input.Surname !== undefined && { Surname: input.Surname }),
    ...(input.TimeZoneId !== undefined && { TimeZoneId: input.TimeZoneId }),
    ...(input.Type !== undefined && { Type: input.Type })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1AbortDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1AbortDocumentVersionUploadCommandError(
      output,
      context
    );
  }
  const contents: AbortDocumentVersionUploadCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AbortDocumentVersionUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortDocumentVersionUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1ActivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ActivateUserCommandError(output, context);
  }
  const contents: ActivateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivateUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ActivateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1AddResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1AddResourcePermissionsCommandError(
      output,
      context
    );
  }
  const contents: AddResourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddResourcePermissionsResponse",
    ShareResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ShareResults !== undefined && data.ShareResults !== null) {
    contents.ShareResults = deserializeAws_restJson1ShareResultsList(
      data.ShareResults,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddResourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddResourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1CreateCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateCommentCommandError(output, context);
  }
  const contents: CreateCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCommentResponse",
    Comment: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Comment !== undefined && data.Comment !== null) {
    contents.Comment = deserializeAws_restJson1Comment(data.Comment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentLockedForCommentsException":
    case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
      response = {
        ...(await deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCommentOperationException":
    case "com.amazonaws.workdocs#InvalidCommentOperationException":
      response = {
        ...(await deserializeAws_restJson1InvalidCommentOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1CreateCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateCustomMetadataCommandError(
      output,
      context
    );
  }
  const contents: CreateCustomMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCustomMetadataResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCustomMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomMetadataLimitExceededException":
    case "com.amazonaws.workdocs#CustomMetadataLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1CustomMetadataLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1CreateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateFolderCommandError(output, context);
  }
  const contents: CreateFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFolderResponse",
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Metadata !== undefined && data.Metadata !== null) {
    contents.Metadata = deserializeAws_restJson1FolderMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1CreateLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateLabelsCommandError(output, context);
  }
  const contents: CreateLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLabelsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyLabelsException":
    case "com.amazonaws.workdocs#TooManyLabelsException":
      response = {
        ...(await deserializeAws_restJson1TooManyLabelsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1CreateNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateNotificationSubscriptionCommandError(
      output,
      context
    );
  }
  const contents: CreateNotificationSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNotificationSubscriptionResponse",
    Subscription: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Subscription !== undefined && data.Subscription !== null) {
    contents.Subscription = deserializeAws_restJson1Subscription(
      data.Subscription,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNotificationSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManySubscriptionsException":
    case "com.amazonaws.workdocs#TooManySubscriptionsException":
      response = {
        ...(await deserializeAws_restJson1TooManySubscriptionsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateUserCommandError(output, context);
  }
  const contents: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeactivateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeactivateUserCommandError(output, context);
  }
  const contents: DeactivateUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeactivateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteCommentCommandError(output, context);
  }
  const contents: DeleteCommentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DocumentLockedForCommentsException":
    case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
      response = {
        ...(await deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteCustomMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteCustomMetadataCommandError(
      output,
      context
    );
  }
  const contents: DeleteCustomMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCustomMetadataResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCustomMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteDocumentCommandError(output, context);
  }
  const contents: DeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFolderCommandError(output, context);
  }
  const contents: DeleteFolderCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFolderContentsCommandError(
      output,
      context
    );
  }
  const contents: DeleteFolderContentsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFolderContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFolderContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteLabelsCommandError(output, context);
  }
  const contents: DeleteLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLabelsResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteNotificationSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteNotificationSubscriptionCommandError(
      output,
      context
    );
  }
  const contents: DeleteNotificationSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteNotificationSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteUserCommandError(output, context);
  }
  const contents: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeActivitiesCommandError(
      output,
      context
    );
  }
  const contents: DescribeActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeActivitiesResponse",
    Marker: undefined,
    UserActivities: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.UserActivities !== undefined && data.UserActivities !== null) {
    contents.UserActivities = deserializeAws_restJson1UserActivities(
      data.UserActivities,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeCommentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeCommentsCommandError(
      output,
      context
    );
  }
  const contents: DescribeCommentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCommentsResponse",
    Comments: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Comments !== undefined && data.Comments !== null) {
    contents.Comments = deserializeAws_restJson1CommentList(
      data.Comments,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCommentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeDocumentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeDocumentVersionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeDocumentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDocumentVersionsResponse",
    DocumentVersions: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DocumentVersions !== undefined && data.DocumentVersions !== null) {
    contents.DocumentVersions = deserializeAws_restJson1DocumentVersionMetadataList(
      data.DocumentVersions,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDocumentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDocumentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeFolderContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeFolderContentsCommandError(
      output,
      context
    );
  }
  const contents: DescribeFolderContentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFolderContentsResponse",
    Documents: undefined,
    Folders: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Documents !== undefined && data.Documents !== null) {
    contents.Documents = deserializeAws_restJson1DocumentMetadataList(
      data.Documents,
      context
    );
  }
  if (data.Folders !== undefined && data.Folders !== null) {
    contents.Folders = deserializeAws_restJson1FolderMetadataList(
      data.Folders,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFolderContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFolderContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeGroupsCommandError(output, context);
  }
  const contents: DescribeGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGroupsResponse",
    Groups: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Groups !== undefined && data.Groups !== null) {
    contents.Groups = deserializeAws_restJson1GroupMetadataList(
      data.Groups,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeNotificationSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeNotificationSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNotificationSubscriptionsResponse",
    Marker: undefined,
    Subscriptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.Subscriptions !== undefined && data.Subscriptions !== null) {
    contents.Subscriptions = deserializeAws_restJson1SubscriptionList(
      data.Subscriptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeResourcePermissionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeResourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourcePermissionsResponse",
    Marker: undefined,
    Principals: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.Principals !== undefined && data.Principals !== null) {
    contents.Principals = deserializeAws_restJson1PrincipalList(
      data.Principals,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeResourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeRootFoldersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeRootFoldersCommandError(
      output,
      context
    );
  }
  const contents: DescribeRootFoldersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRootFoldersResponse",
    Folders: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Folders !== undefined && data.Folders !== null) {
    contents.Folders = deserializeAws_restJson1FolderMetadataList(
      data.Folders,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRootFoldersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRootFoldersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1DescribeUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeUsersCommandError(output, context);
  }
  const contents: DescribeUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUsersResponse",
    Marker: undefined,
    TotalNumberOfUsers: undefined,
    Users: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (
    data.TotalNumberOfUsers !== undefined &&
    data.TotalNumberOfUsers !== null
  ) {
    contents.TotalNumberOfUsers = data.TotalNumberOfUsers;
  }
  if (data.Users !== undefined && data.Users !== null) {
    contents.Users = deserializeAws_restJson1OrganizationUserList(
      data.Users,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestedEntityTooLargeException":
    case "com.amazonaws.workdocs#RequestedEntityTooLargeException":
      response = {
        ...(await deserializeAws_restJson1RequestedEntityTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetCurrentUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCurrentUserCommandError(output, context);
  }
  const contents: GetCurrentUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCurrentUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCurrentUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDocumentCommandError(output, context);
  }
  const contents: GetDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentResponse",
    CustomMetadata: undefined,
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CustomMetadata !== undefined && data.CustomMetadata !== null) {
    contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(
      data.CustomMetadata,
      context
    );
  }
  if (data.Metadata !== undefined && data.Metadata !== null) {
    contents.Metadata = deserializeAws_restJson1DocumentMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      response = {
        ...(await deserializeAws_restJson1InvalidPasswordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetDocumentPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDocumentPathCommandError(output, context);
  }
  const contents: GetDocumentPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentPathResponse",
    Path: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Path !== undefined && data.Path !== null) {
    contents.Path = deserializeAws_restJson1ResourcePath(data.Path, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDocumentPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDocumentVersionCommandError(
      output,
      context
    );
  }
  const contents: GetDocumentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentVersionResponse",
    CustomMetadata: undefined,
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CustomMetadata !== undefined && data.CustomMetadata !== null) {
    contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(
      data.CustomMetadata,
      context
    );
  }
  if (data.Metadata !== undefined && data.Metadata !== null) {
    contents.Metadata = deserializeAws_restJson1DocumentVersionMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDocumentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.workdocs#InvalidPasswordException":
      response = {
        ...(await deserializeAws_restJson1InvalidPasswordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFolderCommandError(output, context);
  }
  const contents: GetFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFolderResponse",
    CustomMetadata: undefined,
    Metadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CustomMetadata !== undefined && data.CustomMetadata !== null) {
    contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(
      data.CustomMetadata,
      context
    );
  }
  if (data.Metadata !== undefined && data.Metadata !== null) {
    contents.Metadata = deserializeAws_restJson1FolderMetadata(
      data.Metadata,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetFolderPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFolderPathCommandError(output, context);
  }
  const contents: GetFolderPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFolderPathResponse",
    Path: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Path !== undefined && data.Path !== null) {
    contents.Path = deserializeAws_restJson1ResourcePath(data.Path, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFolderPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1GetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetResourcesCommandError(output, context);
  }
  const contents: GetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcesResponse",
    Documents: undefined,
    Folders: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Documents !== undefined && data.Documents !== null) {
    contents.Documents = deserializeAws_restJson1DocumentMetadataList(
      data.Documents,
      context
    );
  }
  if (data.Folders !== undefined && data.Folders !== null) {
    contents.Folders = deserializeAws_restJson1FolderMetadataList(
      data.Folders,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1InitiateDocumentVersionUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1InitiateDocumentVersionUploadCommandError(
      output,
      context
    );
  }
  const contents: InitiateDocumentVersionUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateDocumentVersionUploadResponse",
    Metadata: undefined,
    UploadMetadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Metadata !== undefined && data.Metadata !== null) {
    contents.Metadata = deserializeAws_restJson1DocumentMetadata(
      data.Metadata,
      context
    );
  }
  if (data.UploadMetadata !== undefined && data.UploadMetadata !== null) {
    contents.UploadMetadata = deserializeAws_restJson1UploadMetadata(
      data.UploadMetadata,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InitiateDocumentVersionUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDocumentVersionUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DraftUploadOutOfSyncException":
    case "com.amazonaws.workdocs#DraftUploadOutOfSyncException":
      response = {
        ...(await deserializeAws_restJson1DraftUploadOutOfSyncExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyCheckedOutException":
    case "com.amazonaws.workdocs#ResourceAlreadyCheckedOutException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageLimitExceededException":
    case "com.amazonaws.workdocs#StorageLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1StorageLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StorageLimitWillExceedException":
    case "com.amazonaws.workdocs#StorageLimitWillExceedException":
      response = {
        ...(await deserializeAws_restJson1StorageLimitWillExceedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1RemoveAllResourcePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemoveAllResourcePermissionsCommandError(
      output,
      context
    );
  }
  const contents: RemoveAllResourcePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveAllResourcePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllResourcePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1RemoveResourcePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemoveResourcePermissionCommandError(
      output,
      context
    );
  }
  const contents: RemoveResourcePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveResourcePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveResourcePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1UpdateDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateDocumentCommandError(output, context);
  }
  const contents: UpdateDocumentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1UpdateDocumentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateDocumentVersionCommandError(
      output,
      context
    );
  }
  const contents: UpdateDocumentVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDocumentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDocumentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.workdocs#InvalidOperationException":
      response = {
        ...(await deserializeAws_restJson1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1UpdateFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFolderCommandError(output, context);
  }
  const contents: UpdateFolderCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.workdocs#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictingOperationException":
    case "com.amazonaws.workdocs#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.workdocs#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.workdocs#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProhibitedStateException":
    case "com.amazonaws.workdocs#ProhibitedStateException":
      response = {
        ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1User(data.User, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeactivatingLastSystemUserException":
    case "com.amazonaws.workdocs#DeactivatingLastSystemUserException":
      response = {
        ...(await deserializeAws_restJson1DeactivatingLastSystemUserExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotExistsException":
    case "com.amazonaws.workdocs#EntityNotExistsException":
      response = {
        ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedDependencyException":
    case "com.amazonaws.workdocs#FailedDependencyException":
      response = {
        ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalUserStateException":
    case "com.amazonaws.workdocs#IllegalUserStateException":
      response = {
        ...(await deserializeAws_restJson1IllegalUserStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.workdocs#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.workdocs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperationException":
    case "com.amazonaws.workdocs#UnauthorizedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedResourceAccessException":
    case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(
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

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictingOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const contents: ConflictingOperationException = {
    name: "ConflictingOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1CustomMetadataLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomMetadataLimitExceededException> => {
  const contents: CustomMetadataLimitExceededException = {
    name: "CustomMetadataLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DeactivatingLastSystemUserExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeactivatingLastSystemUserException> => {
  const contents: DeactivatingLastSystemUserException = {
    name: "DeactivatingLastSystemUserException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentLockedForCommentsException> => {
  const contents: DocumentLockedForCommentsException = {
    name: "DocumentLockedForCommentsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DraftUploadOutOfSyncExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DraftUploadOutOfSyncException> => {
  const contents: DraftUploadOutOfSyncException = {
    name: "DraftUploadOutOfSyncException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1EntityAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const contents: EntityAlreadyExistsException = {
    name: "EntityAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1EntityNotExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotExistsException> => {
  const contents: EntityNotExistsException = {
    name: "EntityNotExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    EntityIds: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.EntityIds !== undefined && data.EntityIds !== null) {
    contents.EntityIds = deserializeAws_restJson1EntityIdList(
      data.EntityIds,
      context
    );
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FailedDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedDependencyException> => {
  const contents: FailedDependencyException = {
    name: "FailedDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1IllegalUserStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalUserStateException> => {
  const contents: IllegalUserStateException = {
    name: "IllegalUserStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidCommentOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommentOperationException> => {
  const contents: InvalidCommentOperationException = {
    name: "InvalidCommentOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidPasswordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const contents: InvalidPasswordException = {
    name: "InvalidPasswordException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ProhibitedStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProhibitedStateException> => {
  const contents: ProhibitedStateException = {
    name: "ProhibitedStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1RequestedEntityTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestedEntityTooLargeException> => {
  const contents: RequestedEntityTooLargeException = {
    name: "RequestedEntityTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyCheckedOutException> => {
  const contents: ResourceAlreadyCheckedOutException = {
    name: "ResourceAlreadyCheckedOutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1StorageLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageLimitExceededException> => {
  const contents: StorageLimitExceededException = {
    name: "StorageLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1StorageLimitWillExceedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageLimitWillExceedException> => {
  const contents: StorageLimitWillExceedException = {
    name: "StorageLimitWillExceedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyLabelsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyLabelsException> => {
  const contents: TooManyLabelsException = {
    name: "TooManyLabelsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1TooManySubscriptionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManySubscriptionsException> => {
  const contents: TooManySubscriptionsException = {
    name: "TooManySubscriptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperationException> => {
  const contents: UnauthorizedOperationException = {
    name: "UnauthorizedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedResourceAccessException> => {
  const contents: UnauthorizedResourceAccessException = {
    name: "UnauthorizedResourceAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1CustomMetadataMap = (
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

const serializeAws_restJson1NotificationOptions = (
  input: NotificationOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmailMessage !== undefined && {
      EmailMessage: input.EmailMessage
    }),
    ...(input.SendEmail !== undefined && { SendEmail: input.SendEmail })
  };
};

const serializeAws_restJson1SharedLabels = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1SharePrincipal = (
  input: SharePrincipal,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Role !== undefined && { Role: input.Role }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_restJson1SharePrincipalList = (
  input: SharePrincipal[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1SharePrincipal(entry, context)
  );
};

const serializeAws_restJson1StorageRuleType = (
  input: StorageRuleType,
  context: __SerdeContext
): any => {
  return {
    ...(input.StorageAllocatedInBytes !== undefined && {
      StorageAllocatedInBytes: input.StorageAllocatedInBytes
    }),
    ...(input.StorageType !== undefined && { StorageType: input.StorageType })
  };
};

const deserializeAws_restJson1Activity = (
  output: any,
  context: __SerdeContext
): Activity => {
  return {
    __type: "Activity",
    CommentMetadata:
      output.CommentMetadata !== undefined && output.CommentMetadata !== null
        ? deserializeAws_restJson1CommentMetadata(
            output.CommentMetadata,
            context
          )
        : undefined,
    Initiator:
      output.Initiator !== undefined && output.Initiator !== null
        ? deserializeAws_restJson1UserMetadata(output.Initiator, context)
        : undefined,
    IsIndirectActivity:
      output.IsIndirectActivity !== undefined &&
      output.IsIndirectActivity !== null
        ? output.IsIndirectActivity
        : undefined,
    OrganizationId:
      output.OrganizationId !== undefined && output.OrganizationId !== null
        ? output.OrganizationId
        : undefined,
    OriginalParent:
      output.OriginalParent !== undefined && output.OriginalParent !== null
        ? deserializeAws_restJson1ResourceMetadata(
            output.OriginalParent,
            context
          )
        : undefined,
    Participants:
      output.Participants !== undefined && output.Participants !== null
        ? deserializeAws_restJson1Participants(output.Participants, context)
        : undefined,
    ResourceMetadata:
      output.ResourceMetadata !== undefined && output.ResourceMetadata !== null
        ? deserializeAws_restJson1ResourceMetadata(
            output.ResourceMetadata,
            context
          )
        : undefined,
    TimeStamp:
      output.TimeStamp !== undefined && output.TimeStamp !== null
        ? new Date(Math.round(output.TimeStamp * 1000))
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1Comment = (
  output: any,
  context: __SerdeContext
): Comment => {
  return {
    __type: "Comment",
    CommentId:
      output.CommentId !== undefined && output.CommentId !== null
        ? output.CommentId
        : undefined,
    Contributor:
      output.Contributor !== undefined && output.Contributor !== null
        ? deserializeAws_restJson1User(output.Contributor, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    ParentId:
      output.ParentId !== undefined && output.ParentId !== null
        ? output.ParentId
        : undefined,
    RecipientId:
      output.RecipientId !== undefined && output.RecipientId !== null
        ? output.RecipientId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    ThreadId:
      output.ThreadId !== undefined && output.ThreadId !== null
        ? output.ThreadId
        : undefined,
    Visibility:
      output.Visibility !== undefined && output.Visibility !== null
        ? output.Visibility
        : undefined
  } as any;
};

const deserializeAws_restJson1CommentList = (
  output: any,
  context: __SerdeContext
): Comment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Comment(entry, context)
  );
};

const deserializeAws_restJson1CommentMetadata = (
  output: any,
  context: __SerdeContext
): CommentMetadata => {
  return {
    __type: "CommentMetadata",
    CommentId:
      output.CommentId !== undefined && output.CommentId !== null
        ? output.CommentId
        : undefined,
    CommentStatus:
      output.CommentStatus !== undefined && output.CommentStatus !== null
        ? output.CommentStatus
        : undefined,
    Contributor:
      output.Contributor !== undefined && output.Contributor !== null
        ? deserializeAws_restJson1User(output.Contributor, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    RecipientId:
      output.RecipientId !== undefined && output.RecipientId !== null
        ? output.RecipientId
        : undefined
  } as any;
};

const deserializeAws_restJson1CustomMetadataMap = (
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

const deserializeAws_restJson1DocumentMetadata = (
  output: any,
  context: __SerdeContext
): DocumentMetadata => {
  return {
    __type: "DocumentMetadata",
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    CreatorId:
      output.CreatorId !== undefined && output.CreatorId !== null
        ? output.CreatorId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_restJson1SharedLabels(output.Labels, context)
        : undefined,
    LatestVersionMetadata:
      output.LatestVersionMetadata !== undefined &&
      output.LatestVersionMetadata !== null
        ? deserializeAws_restJson1DocumentVersionMetadata(
            output.LatestVersionMetadata,
            context
          )
        : undefined,
    ModifiedTimestamp:
      output.ModifiedTimestamp !== undefined &&
      output.ModifiedTimestamp !== null
        ? new Date(Math.round(output.ModifiedTimestamp * 1000))
        : undefined,
    ParentFolderId:
      output.ParentFolderId !== undefined && output.ParentFolderId !== null
        ? output.ParentFolderId
        : undefined,
    ResourceState:
      output.ResourceState !== undefined && output.ResourceState !== null
        ? output.ResourceState
        : undefined
  } as any;
};

const deserializeAws_restJson1DocumentMetadataList = (
  output: any,
  context: __SerdeContext
): DocumentMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DocumentMetadata(entry, context)
  );
};

const deserializeAws_restJson1DocumentSourceUrlMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: string },
      [key, value]: [DocumentSourceType | string, any]
    ) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1DocumentThumbnailUrlMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: string },
      [key, value]: [DocumentThumbnailType | string, any]
    ) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1DocumentVersionMetadata = (
  output: any,
  context: __SerdeContext
): DocumentVersionMetadata => {
  return {
    __type: "DocumentVersionMetadata",
    ContentCreatedTimestamp:
      output.ContentCreatedTimestamp !== undefined &&
      output.ContentCreatedTimestamp !== null
        ? new Date(Math.round(output.ContentCreatedTimestamp * 1000))
        : undefined,
    ContentModifiedTimestamp:
      output.ContentModifiedTimestamp !== undefined &&
      output.ContentModifiedTimestamp !== null
        ? new Date(Math.round(output.ContentModifiedTimestamp * 1000))
        : undefined,
    ContentType:
      output.ContentType !== undefined && output.ContentType !== null
        ? output.ContentType
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    CreatorId:
      output.CreatorId !== undefined && output.CreatorId !== null
        ? output.CreatorId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ModifiedTimestamp:
      output.ModifiedTimestamp !== undefined &&
      output.ModifiedTimestamp !== null
        ? new Date(Math.round(output.ModifiedTimestamp * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Signature:
      output.Signature !== undefined && output.Signature !== null
        ? output.Signature
        : undefined,
    Size:
      output.Size !== undefined && output.Size !== null
        ? output.Size
        : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_restJson1DocumentSourceUrlMap(output.Source, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Thumbnail:
      output.Thumbnail !== undefined && output.Thumbnail !== null
        ? deserializeAws_restJson1DocumentThumbnailUrlMap(
            output.Thumbnail,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DocumentVersionMetadataList = (
  output: any,
  context: __SerdeContext
): DocumentVersionMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DocumentVersionMetadata(entry, context)
  );
};

const deserializeAws_restJson1EntityIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1FolderMetadata = (
  output: any,
  context: __SerdeContext
): FolderMetadata => {
  return {
    __type: "FolderMetadata",
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    CreatorId:
      output.CreatorId !== undefined && output.CreatorId !== null
        ? output.CreatorId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Labels:
      output.Labels !== undefined && output.Labels !== null
        ? deserializeAws_restJson1SharedLabels(output.Labels, context)
        : undefined,
    LatestVersionSize:
      output.LatestVersionSize !== undefined &&
      output.LatestVersionSize !== null
        ? output.LatestVersionSize
        : undefined,
    ModifiedTimestamp:
      output.ModifiedTimestamp !== undefined &&
      output.ModifiedTimestamp !== null
        ? new Date(Math.round(output.ModifiedTimestamp * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ParentFolderId:
      output.ParentFolderId !== undefined && output.ParentFolderId !== null
        ? output.ParentFolderId
        : undefined,
    ResourceState:
      output.ResourceState !== undefined && output.ResourceState !== null
        ? output.ResourceState
        : undefined,
    Signature:
      output.Signature !== undefined && output.Signature !== null
        ? output.Signature
        : undefined,
    Size:
      output.Size !== undefined && output.Size !== null
        ? output.Size
        : undefined
  } as any;
};

const deserializeAws_restJson1FolderMetadataList = (
  output: any,
  context: __SerdeContext
): FolderMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FolderMetadata(entry, context)
  );
};

const deserializeAws_restJson1GroupMetadata = (
  output: any,
  context: __SerdeContext
): GroupMetadata => {
  return {
    __type: "GroupMetadata",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1GroupMetadataList = (
  output: any,
  context: __SerdeContext
): GroupMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1GroupMetadata(entry, context)
  );
};

const deserializeAws_restJson1OrganizationUserList = (
  output: any,
  context: __SerdeContext
): User[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1User(entry, context)
  );
};

const deserializeAws_restJson1Participants = (
  output: any,
  context: __SerdeContext
): Participants => {
  return {
    __type: "Participants",
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_restJson1GroupMetadataList(output.Groups, context)
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_restJson1UserMetadataList(output.Users, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1PermissionInfo = (
  output: any,
  context: __SerdeContext
): PermissionInfo => {
  return {
    __type: "PermissionInfo",
    Role:
      output.Role !== undefined && output.Role !== null
        ? output.Role
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1PermissionInfoList = (
  output: any,
  context: __SerdeContext
): PermissionInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PermissionInfo(entry, context)
  );
};

const deserializeAws_restJson1Principal = (
  output: any,
  context: __SerdeContext
): Principal => {
  return {
    __type: "Principal",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Roles:
      output.Roles !== undefined && output.Roles !== null
        ? deserializeAws_restJson1PermissionInfoList(output.Roles, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1PrincipalList = (
  output: any,
  context: __SerdeContext
): Principal[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Principal(entry, context)
  );
};

const deserializeAws_restJson1ResourceMetadata = (
  output: any,
  context: __SerdeContext
): ResourceMetadata => {
  return {
    __type: "ResourceMetadata",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OriginalName:
      output.OriginalName !== undefined && output.OriginalName !== null
        ? output.OriginalName
        : undefined,
    Owner:
      output.Owner !== undefined && output.Owner !== null
        ? deserializeAws_restJson1UserMetadata(output.Owner, context)
        : undefined,
    ParentId:
      output.ParentId !== undefined && output.ParentId !== null
        ? output.ParentId
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined
  } as any;
};

const deserializeAws_restJson1ResourcePath = (
  output: any,
  context: __SerdeContext
): ResourcePath => {
  return {
    __type: "ResourcePath",
    Components:
      output.Components !== undefined && output.Components !== null
        ? deserializeAws_restJson1ResourcePathComponentList(
            output.Components,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ResourcePathComponent = (
  output: any,
  context: __SerdeContext
): ResourcePathComponent => {
  return {
    __type: "ResourcePathComponent",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1ResourcePathComponentList = (
  output: any,
  context: __SerdeContext
): ResourcePathComponent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResourcePathComponent(entry, context)
  );
};

const deserializeAws_restJson1SharedLabels = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ShareResult = (
  output: any,
  context: __SerdeContext
): ShareResult => {
  return {
    __type: "ShareResult",
    InviteePrincipalId:
      output.InviteePrincipalId !== undefined &&
      output.InviteePrincipalId !== null
        ? output.InviteePrincipalId
        : undefined,
    PrincipalId:
      output.PrincipalId !== undefined && output.PrincipalId !== null
        ? output.PrincipalId
        : undefined,
    Role:
      output.Role !== undefined && output.Role !== null
        ? output.Role
        : undefined,
    ShareId:
      output.ShareId !== undefined && output.ShareId !== null
        ? output.ShareId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined
  } as any;
};

const deserializeAws_restJson1ShareResultsList = (
  output: any,
  context: __SerdeContext
): ShareResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ShareResult(entry, context)
  );
};

const deserializeAws_restJson1SignedHeaderMap = (
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

const deserializeAws_restJson1StorageRuleType = (
  output: any,
  context: __SerdeContext
): StorageRuleType => {
  return {
    __type: "StorageRuleType",
    StorageAllocatedInBytes:
      output.StorageAllocatedInBytes !== undefined &&
      output.StorageAllocatedInBytes !== null
        ? output.StorageAllocatedInBytes
        : undefined,
    StorageType:
      output.StorageType !== undefined && output.StorageType !== null
        ? output.StorageType
        : undefined
  } as any;
};

const deserializeAws_restJson1Subscription = (
  output: any,
  context: __SerdeContext
): Subscription => {
  return {
    __type: "Subscription",
    EndPoint:
      output.EndPoint !== undefined && output.EndPoint !== null
        ? output.EndPoint
        : undefined,
    Protocol:
      output.Protocol !== undefined && output.Protocol !== null
        ? output.Protocol
        : undefined,
    SubscriptionId:
      output.SubscriptionId !== undefined && output.SubscriptionId !== null
        ? output.SubscriptionId
        : undefined
  } as any;
};

const deserializeAws_restJson1SubscriptionList = (
  output: any,
  context: __SerdeContext
): Subscription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Subscription(entry, context)
  );
};

const deserializeAws_restJson1UploadMetadata = (
  output: any,
  context: __SerdeContext
): UploadMetadata => {
  return {
    __type: "UploadMetadata",
    SignedHeaders:
      output.SignedHeaders !== undefined && output.SignedHeaders !== null
        ? deserializeAws_restJson1SignedHeaderMap(output.SignedHeaders, context)
        : undefined,
    UploadUrl:
      output.UploadUrl !== undefined && output.UploadUrl !== null
        ? output.UploadUrl
        : undefined
  } as any;
};

const deserializeAws_restJson1User = (
  output: any,
  context: __SerdeContext
): User => {
  return {
    __type: "User",
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    EmailAddress:
      output.EmailAddress !== undefined && output.EmailAddress !== null
        ? output.EmailAddress
        : undefined,
    GivenName:
      output.GivenName !== undefined && output.GivenName !== null
        ? output.GivenName
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Locale:
      output.Locale !== undefined && output.Locale !== null
        ? output.Locale
        : undefined,
    ModifiedTimestamp:
      output.ModifiedTimestamp !== undefined &&
      output.ModifiedTimestamp !== null
        ? new Date(Math.round(output.ModifiedTimestamp * 1000))
        : undefined,
    OrganizationId:
      output.OrganizationId !== undefined && output.OrganizationId !== null
        ? output.OrganizationId
        : undefined,
    RecycleBinFolderId:
      output.RecycleBinFolderId !== undefined &&
      output.RecycleBinFolderId !== null
        ? output.RecycleBinFolderId
        : undefined,
    RootFolderId:
      output.RootFolderId !== undefined && output.RootFolderId !== null
        ? output.RootFolderId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Storage:
      output.Storage !== undefined && output.Storage !== null
        ? deserializeAws_restJson1UserStorageMetadata(output.Storage, context)
        : undefined,
    Surname:
      output.Surname !== undefined && output.Surname !== null
        ? output.Surname
        : undefined,
    TimeZoneId:
      output.TimeZoneId !== undefined && output.TimeZoneId !== null
        ? output.TimeZoneId
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    Username:
      output.Username !== undefined && output.Username !== null
        ? output.Username
        : undefined
  } as any;
};

const deserializeAws_restJson1UserActivities = (
  output: any,
  context: __SerdeContext
): Activity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Activity(entry, context)
  );
};

const deserializeAws_restJson1UserMetadata = (
  output: any,
  context: __SerdeContext
): UserMetadata => {
  return {
    __type: "UserMetadata",
    EmailAddress:
      output.EmailAddress !== undefined && output.EmailAddress !== null
        ? output.EmailAddress
        : undefined,
    GivenName:
      output.GivenName !== undefined && output.GivenName !== null
        ? output.GivenName
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Surname:
      output.Surname !== undefined && output.Surname !== null
        ? output.Surname
        : undefined,
    Username:
      output.Username !== undefined && output.Username !== null
        ? output.Username
        : undefined
  } as any;
};

const deserializeAws_restJson1UserMetadataList = (
  output: any,
  context: __SerdeContext
): UserMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UserMetadata(entry, context)
  );
};

const deserializeAws_restJson1UserStorageMetadata = (
  output: any,
  context: __SerdeContext
): UserStorageMetadata => {
  return {
    __type: "UserStorageMetadata",
    StorageRule:
      output.StorageRule !== undefined && output.StorageRule !== null
        ? deserializeAws_restJson1StorageRuleType(output.StorageRule, context)
        : undefined,
    StorageUtilizedInBytes:
      output.StorageUtilizedInBytes !== undefined &&
      output.StorageUtilizedInBytes !== null
        ? output.StorageUtilizedInBytes
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
