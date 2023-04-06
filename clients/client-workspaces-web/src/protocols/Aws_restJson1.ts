// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateBrowserSettingsCommandInput,
  AssociateBrowserSettingsCommandOutput,
} from "../commands/AssociateBrowserSettingsCommand";
import {
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
} from "../commands/AssociateNetworkSettingsCommand";
import {
  AssociateTrustStoreCommandInput,
  AssociateTrustStoreCommandOutput,
} from "../commands/AssociateTrustStoreCommand";
import {
  AssociateUserAccessLoggingSettingsCommandInput,
  AssociateUserAccessLoggingSettingsCommandOutput,
} from "../commands/AssociateUserAccessLoggingSettingsCommand";
import {
  AssociateUserSettingsCommandInput,
  AssociateUserSettingsCommandOutput,
} from "../commands/AssociateUserSettingsCommand";
import {
  CreateBrowserSettingsCommandInput,
  CreateBrowserSettingsCommandOutput,
} from "../commands/CreateBrowserSettingsCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "../commands/CreateIdentityProviderCommand";
import {
  CreateNetworkSettingsCommandInput,
  CreateNetworkSettingsCommandOutput,
} from "../commands/CreateNetworkSettingsCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "../commands/CreatePortalCommand";
import { CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput } from "../commands/CreateTrustStoreCommand";
import {
  CreateUserAccessLoggingSettingsCommandInput,
  CreateUserAccessLoggingSettingsCommandOutput,
} from "../commands/CreateUserAccessLoggingSettingsCommand";
import { CreateUserSettingsCommandInput, CreateUserSettingsCommandOutput } from "../commands/CreateUserSettingsCommand";
import {
  DeleteBrowserSettingsCommandInput,
  DeleteBrowserSettingsCommandOutput,
} from "../commands/DeleteBrowserSettingsCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "../commands/DeleteIdentityProviderCommand";
import {
  DeleteNetworkSettingsCommandInput,
  DeleteNetworkSettingsCommandOutput,
} from "../commands/DeleteNetworkSettingsCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "../commands/DeletePortalCommand";
import { DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput } from "../commands/DeleteTrustStoreCommand";
import {
  DeleteUserAccessLoggingSettingsCommandInput,
  DeleteUserAccessLoggingSettingsCommandOutput,
} from "../commands/DeleteUserAccessLoggingSettingsCommand";
import { DeleteUserSettingsCommandInput, DeleteUserSettingsCommandOutput } from "../commands/DeleteUserSettingsCommand";
import {
  DisassociateBrowserSettingsCommandInput,
  DisassociateBrowserSettingsCommandOutput,
} from "../commands/DisassociateBrowserSettingsCommand";
import {
  DisassociateNetworkSettingsCommandInput,
  DisassociateNetworkSettingsCommandOutput,
} from "../commands/DisassociateNetworkSettingsCommand";
import {
  DisassociateTrustStoreCommandInput,
  DisassociateTrustStoreCommandOutput,
} from "../commands/DisassociateTrustStoreCommand";
import {
  DisassociateUserAccessLoggingSettingsCommandInput,
  DisassociateUserAccessLoggingSettingsCommandOutput,
} from "../commands/DisassociateUserAccessLoggingSettingsCommand";
import {
  DisassociateUserSettingsCommandInput,
  DisassociateUserSettingsCommandOutput,
} from "../commands/DisassociateUserSettingsCommand";
import { GetBrowserSettingsCommandInput, GetBrowserSettingsCommandOutput } from "../commands/GetBrowserSettingsCommand";
import {
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
} from "../commands/GetIdentityProviderCommand";
import { GetNetworkSettingsCommandInput, GetNetworkSettingsCommandOutput } from "../commands/GetNetworkSettingsCommand";
import { GetPortalCommandInput, GetPortalCommandOutput } from "../commands/GetPortalCommand";
import {
  GetPortalServiceProviderMetadataCommandInput,
  GetPortalServiceProviderMetadataCommandOutput,
} from "../commands/GetPortalServiceProviderMetadataCommand";
import {
  GetTrustStoreCertificateCommandInput,
  GetTrustStoreCertificateCommandOutput,
} from "../commands/GetTrustStoreCertificateCommand";
import { GetTrustStoreCommandInput, GetTrustStoreCommandOutput } from "../commands/GetTrustStoreCommand";
import {
  GetUserAccessLoggingSettingsCommandInput,
  GetUserAccessLoggingSettingsCommandOutput,
} from "../commands/GetUserAccessLoggingSettingsCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "../commands/GetUserSettingsCommand";
import {
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput,
} from "../commands/ListBrowserSettingsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import {
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "../commands/ListNetworkSettingsCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
} from "../commands/ListTrustStoreCertificatesCommand";
import { ListTrustStoresCommandInput, ListTrustStoresCommandOutput } from "../commands/ListTrustStoresCommand";
import {
  ListUserAccessLoggingSettingsCommandInput,
  ListUserAccessLoggingSettingsCommandOutput,
} from "../commands/ListUserAccessLoggingSettingsCommand";
import { ListUserSettingsCommandInput, ListUserSettingsCommandOutput } from "../commands/ListUserSettingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateBrowserSettingsCommandInput,
  UpdateBrowserSettingsCommandOutput,
} from "../commands/UpdateBrowserSettingsCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "../commands/UpdateIdentityProviderCommand";
import {
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "../commands/UpdateNetworkSettingsCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "../commands/UpdatePortalCommand";
import { UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput } from "../commands/UpdateTrustStoreCommand";
import {
  UpdateUserAccessLoggingSettingsCommandInput,
  UpdateUserAccessLoggingSettingsCommandOutput,
} from "../commands/UpdateUserAccessLoggingSettingsCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "../commands/UpdateUserSettingsCommand";
import {
  AccessDeniedException,
  BrowserSettings,
  BrowserSettingsSummary,
  Certificate,
  CertificateSummary,
  ConflictException,
  IdentityProvider,
  IdentityProviderSummary,
  InternalServerException,
  NetworkSettings,
  NetworkSettingsSummary,
  Portal,
  PortalSummary,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  ThrottlingException,
  TooManyTagsException,
  TrustStore,
  TrustStoreSummary,
  UserAccessLoggingSettings,
  UserAccessLoggingSettingsSummary,
  UserSettings,
  UserSettingsSummary,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { WorkSpacesWebServiceException as __BaseException } from "../models/WorkSpacesWebServiceException";

/**
 * serializeAws_restJson1AssociateBrowserSettingsCommand
 */
export const se_AssociateBrowserSettingsCommand = async (
  input: AssociateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/browserSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    browserSettingsArn: [, __expectNonNull(input.browserSettingsArn!, `browserSettingsArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateNetworkSettingsCommand
 */
export const se_AssociateNetworkSettingsCommand = async (
  input: AssociateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/networkSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    networkSettingsArn: [, __expectNonNull(input.networkSettingsArn!, `networkSettingsArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateTrustStoreCommand
 */
export const se_AssociateTrustStoreCommand = async (
  input: AssociateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/trustStores";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    trustStoreArn: [, __expectNonNull(input.trustStoreArn!, `trustStoreArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateUserAccessLoggingSettingsCommand
 */
export const se_AssociateUserAccessLoggingSettingsCommand = async (
  input: AssociateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/portals/{portalArn+}/userAccessLoggingSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    userAccessLoggingSettingsArn: [
      ,
      __expectNonNull(input.userAccessLoggingSettingsArn!, `userAccessLoggingSettingsArn`),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateUserSettingsCommand
 */
export const se_AssociateUserSettingsCommand = async (
  input: AssociateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/userSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    userSettingsArn: [, __expectNonNull(input.userSettingsArn!, `userSettingsArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBrowserSettingsCommand
 */
export const se_CreateBrowserSettingsCommand = async (
  input: CreateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/browserSettings";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalEncryptionContext != null && {
      additionalEncryptionContext: se_EncryptionContextMap(input.additionalEncryptionContext, context),
    }),
    ...(input.browserPolicy != null && { browserPolicy: input.browserPolicy }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customerManagedKey != null && { customerManagedKey: input.customerManagedKey }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateIdentityProviderCommand
 */
export const se_CreateIdentityProviderCommand = async (
  input: CreateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identityProviders";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.identityProviderDetails != null && {
      identityProviderDetails: se_IdentityProviderDetails(input.identityProviderDetails, context),
    }),
    ...(input.identityProviderName != null && { identityProviderName: input.identityProviderName }),
    ...(input.identityProviderType != null && { identityProviderType: input.identityProviderType }),
    ...(input.portalArn != null && { portalArn: input.portalArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateNetworkSettingsCommand
 */
export const se_CreateNetworkSettingsCommand = async (
  input: CreateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networkSettings";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.securityGroupIds != null && {
      securityGroupIds: se_SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIdList(input.subnetIds, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreatePortalCommand
 */
export const se_CreatePortalCommand = async (
  input: CreatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalEncryptionContext != null && {
      additionalEncryptionContext: se_EncryptionContextMap(input.additionalEncryptionContext, context),
    }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customerManagedKey != null && { customerManagedKey: input.customerManagedKey }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateTrustStoreCommand
 */
export const se_CreateTrustStoreCommand = async (
  input: CreateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustStores";
  let body: any;
  body = JSON.stringify({
    ...(input.certificateList != null && { certificateList: se_CertificateList(input.certificateList, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateUserAccessLoggingSettingsCommand
 */
export const se_CreateUserAccessLoggingSettingsCommand = async (
  input: CreateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userAccessLoggingSettings";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.kinesisStreamArn != null && { kinesisStreamArn: input.kinesisStreamArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateUserSettingsCommand
 */
export const se_CreateUserSettingsCommand = async (
  input: CreateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userSettings";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.copyAllowed != null && { copyAllowed: input.copyAllowed }),
    ...(input.disconnectTimeoutInMinutes != null && { disconnectTimeoutInMinutes: input.disconnectTimeoutInMinutes }),
    ...(input.downloadAllowed != null && { downloadAllowed: input.downloadAllowed }),
    ...(input.idleDisconnectTimeoutInMinutes != null && {
      idleDisconnectTimeoutInMinutes: input.idleDisconnectTimeoutInMinutes,
    }),
    ...(input.pasteAllowed != null && { pasteAllowed: input.pasteAllowed }),
    ...(input.printAllowed != null && { printAllowed: input.printAllowed }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.uploadAllowed != null && { uploadAllowed: input.uploadAllowed }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBrowserSettingsCommand
 */
export const se_DeleteBrowserSettingsCommand = async (
  input: DeleteBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/browserSettings/{browserSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "browserSettingsArn",
    () => input.browserSettingsArn!,
    "{browserSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteIdentityProviderCommand
 */
export const se_DeleteIdentityProviderCommand = async (
  input: DeleteIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identityProviders/{identityProviderArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "identityProviderArn",
    () => input.identityProviderArn!,
    "{identityProviderArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteNetworkSettingsCommand
 */
export const se_DeleteNetworkSettingsCommand = async (
  input: DeleteNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networkSettings/{networkSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "networkSettingsArn",
    () => input.networkSettingsArn!,
    "{networkSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePortalCommand
 */
export const se_DeletePortalCommand = async (
  input: DeletePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteTrustStoreCommand
 */
export const se_DeleteTrustStoreCommand = async (
  input: DeleteTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustStores/{trustStoreArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustStoreArn",
    () => input.trustStoreArn!,
    "{trustStoreArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteUserAccessLoggingSettingsCommand
 */
export const se_DeleteUserAccessLoggingSettingsCommand = async (
  input: DeleteUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "userAccessLoggingSettingsArn",
    () => input.userAccessLoggingSettingsArn!,
    "{userAccessLoggingSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteUserSettingsCommand
 */
export const se_DeleteUserSettingsCommand = async (
  input: DeleteUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userSettings/{userSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "userSettingsArn",
    () => input.userSettingsArn!,
    "{userSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateBrowserSettingsCommand
 */
export const se_DisassociateBrowserSettingsCommand = async (
  input: DisassociateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/browserSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateNetworkSettingsCommand
 */
export const se_DisassociateNetworkSettingsCommand = async (
  input: DisassociateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/networkSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateTrustStoreCommand
 */
export const se_DisassociateTrustStoreCommand = async (
  input: DisassociateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/trustStores";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateUserAccessLoggingSettingsCommand
 */
export const se_DisassociateUserAccessLoggingSettingsCommand = async (
  input: DisassociateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/portals/{portalArn+}/userAccessLoggingSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateUserSettingsCommand
 */
export const se_DisassociateUserSettingsCommand = async (
  input: DisassociateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/userSettings";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetBrowserSettingsCommand
 */
export const se_GetBrowserSettingsCommand = async (
  input: GetBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/browserSettings/{browserSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "browserSettingsArn",
    () => input.browserSettingsArn!,
    "{browserSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetIdentityProviderCommand
 */
export const se_GetIdentityProviderCommand = async (
  input: GetIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identityProviders/{identityProviderArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "identityProviderArn",
    () => input.identityProviderArn!,
    "{identityProviderArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetNetworkSettingsCommand
 */
export const se_GetNetworkSettingsCommand = async (
  input: GetNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networkSettings/{networkSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "networkSettingsArn",
    () => input.networkSettingsArn!,
    "{networkSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPortalCommand
 */
export const se_GetPortalCommand = async (
  input: GetPortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPortalServiceProviderMetadataCommand
 */
export const se_GetPortalServiceProviderMetadataCommand = async (
  input: GetPortalServiceProviderMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portalIdp/{portalArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTrustStoreCommand
 */
export const se_GetTrustStoreCommand = async (
  input: GetTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustStores/{trustStoreArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustStoreArn",
    () => input.trustStoreArn!,
    "{trustStoreArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTrustStoreCertificateCommand
 */
export const se_GetTrustStoreCertificateCommand = async (
  input: GetTrustStoreCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustStores/{trustStoreArn+}/certificate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustStoreArn",
    () => input.trustStoreArn!,
    "{trustStoreArn+}",
    true
  );
  const query: any = map({
    thumbprint: [, __expectNonNull(input.thumbprint!, `thumbprint`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetUserAccessLoggingSettingsCommand
 */
export const se_GetUserAccessLoggingSettingsCommand = async (
  input: GetUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "userAccessLoggingSettingsArn",
    () => input.userAccessLoggingSettingsArn!,
    "{userAccessLoggingSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetUserSettingsCommand
 */
export const se_GetUserSettingsCommand = async (
  input: GetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userSettings/{userSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "userSettingsArn",
    () => input.userSettingsArn!,
    "{userSettingsArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBrowserSettingsCommand
 */
export const se_ListBrowserSettingsCommand = async (
  input: ListBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/browserSettings";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListIdentityProvidersCommand
 */
export const se_ListIdentityProvidersCommand = async (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}/identityProviders";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListNetworkSettingsCommand
 */
export const se_ListNetworkSettingsCommand = async (
  input: ListNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networkSettings";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPortalsCommand
 */
export const se_ListPortalsCommand = async (
  input: ListPortalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTrustStoreCertificatesCommand
 */
export const se_ListTrustStoreCertificatesCommand = async (
  input: ListTrustStoreCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/trustStores/{trustStoreArn+}/certificates";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustStoreArn",
    () => input.trustStoreArn!,
    "{trustStoreArn+}",
    true
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTrustStoresCommand
 */
export const se_ListTrustStoresCommand = async (
  input: ListTrustStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustStores";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListUserAccessLoggingSettingsCommand
 */
export const se_ListUserAccessLoggingSettingsCommand = async (
  input: ListUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userAccessLoggingSettings";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListUserSettingsCommand
 */
export const se_ListUserSettingsCommand = async (
  input: ListUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userSettings";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn+}", true);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn+}", true);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBrowserSettingsCommand
 */
export const se_UpdateBrowserSettingsCommand = async (
  input: UpdateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/browserSettings/{browserSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "browserSettingsArn",
    () => input.browserSettingsArn!,
    "{browserSettingsArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    ...(input.browserPolicy != null && { browserPolicy: input.browserPolicy }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateIdentityProviderCommand
 */
export const se_UpdateIdentityProviderCommand = async (
  input: UpdateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identityProviders/{identityProviderArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "identityProviderArn",
    () => input.identityProviderArn!,
    "{identityProviderArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.identityProviderDetails != null && {
      identityProviderDetails: se_IdentityProviderDetails(input.identityProviderDetails, context),
    }),
    ...(input.identityProviderName != null && { identityProviderName: input.identityProviderName }),
    ...(input.identityProviderType != null && { identityProviderType: input.identityProviderType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateNetworkSettingsCommand
 */
export const se_UpdateNetworkSettingsCommand = async (
  input: UpdateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networkSettings/{networkSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "networkSettingsArn",
    () => input.networkSettingsArn!,
    "{networkSettingsArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.securityGroupIds != null && {
      securityGroupIds: se_SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIdList(input.subnetIds, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePortalCommand
 */
export const se_UpdatePortalCommand = async (
  input: UpdatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  body = JSON.stringify({
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.displayName != null && { displayName: input.displayName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTrustStoreCommand
 */
export const se_UpdateTrustStoreCommand = async (
  input: UpdateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustStores/{trustStoreArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustStoreArn",
    () => input.trustStoreArn!,
    "{trustStoreArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    ...(input.certificatesToAdd != null && { certificatesToAdd: se_CertificateList(input.certificatesToAdd, context) }),
    ...(input.certificatesToDelete != null && {
      certificatesToDelete: se_CertificateThumbprintList(input.certificatesToDelete, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateUserAccessLoggingSettingsCommand
 */
export const se_UpdateUserAccessLoggingSettingsCommand = async (
  input: UpdateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "userAccessLoggingSettingsArn",
    () => input.userAccessLoggingSettingsArn!,
    "{userAccessLoggingSettingsArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.kinesisStreamArn != null && { kinesisStreamArn: input.kinesisStreamArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateUserSettingsCommand
 */
export const se_UpdateUserSettingsCommand = async (
  input: UpdateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/userSettings/{userSettingsArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "userSettingsArn",
    () => input.userSettingsArn!,
    "{userSettingsArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.copyAllowed != null && { copyAllowed: input.copyAllowed }),
    ...(input.disconnectTimeoutInMinutes != null && { disconnectTimeoutInMinutes: input.disconnectTimeoutInMinutes }),
    ...(input.downloadAllowed != null && { downloadAllowed: input.downloadAllowed }),
    ...(input.idleDisconnectTimeoutInMinutes != null && {
      idleDisconnectTimeoutInMinutes: input.idleDisconnectTimeoutInMinutes,
    }),
    ...(input.pasteAllowed != null && { pasteAllowed: input.pasteAllowed }),
    ...(input.printAllowed != null && { printAllowed: input.printAllowed }),
    ...(input.uploadAllowed != null && { uploadAllowed: input.uploadAllowed }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateBrowserSettingsCommand
 */
export const de_AssociateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettingsArn != null) {
    contents.browserSettingsArn = __expectString(data.browserSettingsArn);
  }
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateBrowserSettingsCommandError
 */
const de_AssociateBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateNetworkSettingsCommand
 */
export const de_AssociateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettingsArn != null) {
    contents.networkSettingsArn = __expectString(data.networkSettingsArn);
  }
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateNetworkSettingsCommandError
 */
const de_AssociateNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateTrustStoreCommand
 */
export const de_AssociateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTrustStoreCommandError
 */
const de_AssociateTrustStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrustStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateUserAccessLoggingSettingsCommand
 */
export const de_AssociateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.userAccessLoggingSettingsArn != null) {
    contents.userAccessLoggingSettingsArn = __expectString(data.userAccessLoggingSettingsArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserAccessLoggingSettingsCommandError
 */
const de_AssociateUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateUserSettingsCommand
 */
export const de_AssociateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.userSettingsArn != null) {
    contents.userSettingsArn = __expectString(data.userSettingsArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserSettingsCommandError
 */
const de_AssociateUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBrowserSettingsCommand
 */
export const de_CreateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettingsArn != null) {
    contents.browserSettingsArn = __expectString(data.browserSettingsArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBrowserSettingsCommandError
 */
const de_CreateBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateIdentityProviderCommand
 */
export const de_CreateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderArn != null) {
    contents.identityProviderArn = __expectString(data.identityProviderArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateIdentityProviderCommandError
 */
const de_CreateIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateNetworkSettingsCommand
 */
export const de_CreateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettingsArn != null) {
    contents.networkSettingsArn = __expectString(data.networkSettingsArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkSettingsCommandError
 */
const de_CreateNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreatePortalCommand
 */
export const de_CreatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.portalEndpoint != null) {
    contents.portalEndpoint = __expectString(data.portalEndpoint);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePortalCommandError
 */
const de_CreatePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateTrustStoreCommand
 */
export const de_CreateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrustStoreCommandError
 */
const de_CreateTrustStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateUserAccessLoggingSettingsCommand
 */
export const de_CreateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userAccessLoggingSettingsArn != null) {
    contents.userAccessLoggingSettingsArn = __expectString(data.userAccessLoggingSettingsArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserAccessLoggingSettingsCommandError
 */
const de_CreateUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateUserSettingsCommand
 */
export const de_CreateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userSettingsArn != null) {
    contents.userSettingsArn = __expectString(data.userSettingsArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserSettingsCommandError
 */
const de_CreateUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBrowserSettingsCommand
 */
export const de_DeleteBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBrowserSettingsCommandError
 */
const de_DeleteBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteIdentityProviderCommand
 */
export const de_DeleteIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdentityProviderCommandError
 */
const de_DeleteIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteNetworkSettingsCommand
 */
export const de_DeleteNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNetworkSettingsCommandError
 */
const de_DeleteNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeletePortalCommand
 */
export const de_DeletePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePortalCommandError
 */
const de_DeletePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteTrustStoreCommand
 */
export const de_DeleteTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrustStoreCommandError
 */
const de_DeleteTrustStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommand
 */
export const de_DeleteUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommandError
 */
const de_DeleteUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteUserSettingsCommand
 */
export const de_DeleteUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserSettingsCommandError
 */
const de_DeleteUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateBrowserSettingsCommand
 */
export const de_DisassociateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateBrowserSettingsCommandError
 */
const de_DisassociateBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateNetworkSettingsCommand
 */
export const de_DisassociateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateNetworkSettingsCommandError
 */
const de_DisassociateNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateTrustStoreCommand
 */
export const de_DisassociateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTrustStoreCommandError
 */
const de_DisassociateTrustStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrustStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateUserAccessLoggingSettingsCommand
 */
export const de_DisassociateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserAccessLoggingSettingsCommandError
 */
const de_DisassociateUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateUserSettingsCommand
 */
export const de_DisassociateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserSettingsCommandError
 */
const de_DisassociateUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBrowserSettingsCommand
 */
export const de_GetBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettings != null) {
    contents.browserSettings = de_BrowserSettings(data.browserSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBrowserSettingsCommandError
 */
const de_GetBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetIdentityProviderCommand
 */
export const de_GetIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProvider != null) {
    contents.identityProvider = de_IdentityProvider(data.identityProvider, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetIdentityProviderCommandError
 */
const de_GetIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetNetworkSettingsCommand
 */
export const de_GetNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettings != null) {
    contents.networkSettings = de_NetworkSettings(data.networkSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkSettingsCommandError
 */
const de_GetNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetPortalCommand
 */
export const de_GetPortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portal != null) {
    contents.portal = de_Portal(data.portal, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPortalCommandError
 */
const de_GetPortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetPortalServiceProviderMetadataCommand
 */
export const de_GetPortalServiceProviderMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalServiceProviderMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPortalServiceProviderMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.serviceProviderSamlMetadata != null) {
    contents.serviceProviderSamlMetadata = __expectString(data.serviceProviderSamlMetadata);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPortalServiceProviderMetadataCommandError
 */
const de_GetPortalServiceProviderMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalServiceProviderMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTrustStoreCommand
 */
export const de_GetTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustStore != null) {
    contents.trustStore = de_TrustStore(data.trustStore, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTrustStoreCommandError
 */
const de_GetTrustStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTrustStoreCertificateCommand
 */
export const de_GetTrustStoreCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrustStoreCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificate != null) {
    contents.certificate = de_Certificate(data.certificate, context);
  }
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTrustStoreCertificateCommandError
 */
const de_GetTrustStoreCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetUserAccessLoggingSettingsCommand
 */
export const de_GetUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userAccessLoggingSettings != null) {
    contents.userAccessLoggingSettings = de_UserAccessLoggingSettings(data.userAccessLoggingSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUserAccessLoggingSettingsCommandError
 */
const de_GetUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetUserSettingsCommand
 */
export const de_GetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userSettings != null) {
    contents.userSettings = de_UserSettings(data.userSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUserSettingsCommandError
 */
const de_GetUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListBrowserSettingsCommand
 */
export const de_ListBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettings != null) {
    contents.browserSettings = de_BrowserSettingsList(data.browserSettings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBrowserSettingsCommandError
 */
const de_ListBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListIdentityProvidersCommand
 */
export const de_ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdentityProvidersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviders != null) {
    contents.identityProviders = de_IdentityProviderList(data.identityProviders, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityProvidersCommandError
 */
const de_ListIdentityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListNetworkSettingsCommand
 */
export const de_ListNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettings != null) {
    contents.networkSettings = de_NetworkSettingsList(data.networkSettings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworkSettingsCommandError
 */
const de_ListNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPortalsCommand
 */
export const de_ListPortalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPortalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.portals != null) {
    contents.portals = de_PortalList(data.portals, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPortalsCommandError
 */
const de_ListPortalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagList(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTrustStoreCertificatesCommand
 */
export const de_ListTrustStoreCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoreCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrustStoreCertificatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificateList != null) {
    contents.certificateList = de_CertificateSummaryList(data.certificateList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTrustStoreCertificatesCommandError
 */
const de_ListTrustStoreCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoreCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTrustStoresCommand
 */
export const de_ListTrustStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrustStoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.trustStores != null) {
    contents.trustStores = de_TrustStoreSummaryList(data.trustStores, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTrustStoresCommandError
 */
const de_ListTrustStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListUserAccessLoggingSettingsCommand
 */
export const de_ListUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.userAccessLoggingSettings != null) {
    contents.userAccessLoggingSettings = de_UserAccessLoggingSettingsList(data.userAccessLoggingSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUserAccessLoggingSettingsCommandError
 */
const de_ListUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListUserSettingsCommand
 */
export const de_ListUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.userSettings != null) {
    contents.userSettings = de_UserSettingsList(data.userSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUserSettingsCommandError
 */
const de_ListUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.workspacesweb#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBrowserSettingsCommand
 */
export const de_UpdateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettings != null) {
    contents.browserSettings = de_BrowserSettings(data.browserSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrowserSettingsCommandError
 */
const de_UpdateBrowserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrowserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateIdentityProviderCommand
 */
export const de_UpdateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProvider != null) {
    contents.identityProvider = de_IdentityProvider(data.identityProvider, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdentityProviderCommandError
 */
const de_UpdateIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateNetworkSettingsCommand
 */
export const de_UpdateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettings != null) {
    contents.networkSettings = de_NetworkSettings(data.networkSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkSettingsCommandError
 */
const de_UpdateNetworkSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdatePortalCommand
 */
export const de_UpdatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portal != null) {
    contents.portal = de_Portal(data.portal, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePortalCommandError
 */
const de_UpdatePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateTrustStoreCommand
 */
export const de_UpdateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrustStoreCommandError
 */
const de_UpdateTrustStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateUserAccessLoggingSettingsCommand
 */
export const de_UpdateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userAccessLoggingSettings != null) {
    contents.userAccessLoggingSettings = de_UserAccessLoggingSettings(data.userAccessLoggingSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserAccessLoggingSettingsCommandError
 */
const de_UpdateUserAccessLoggingSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAccessLoggingSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateUserSettingsCommand
 */
export const de_UpdateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userSettings != null) {
    contents.userSettings = de_UserSettings(data.userSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserSettingsCommandError
 */
const de_UpdateUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesweb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName != null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = de_ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1CertificateList
 */
const se_CertificateList = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

/**
 * serializeAws_restJson1CertificateThumbprintList
 */
const se_CertificateThumbprintList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EncryptionContextMap
 */
const se_EncryptionContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1IdentityProviderDetails
 */
const se_IdentityProviderDetails = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * deserializeAws_restJson1ArnList
 */
const de_ArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1BrowserSettings
 */
const de_BrowserSettings = (output: any, context: __SerdeContext): BrowserSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null ? de_ArnList(output.associatedPortalArns, context) : undefined,
    browserPolicy: __expectString(output.browserPolicy),
    browserSettingsArn: __expectString(output.browserSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1BrowserSettingsList
 */
const de_BrowserSettingsList = (output: any, context: __SerdeContext): BrowserSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BrowserSettingsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BrowserSettingsSummary
 */
const de_BrowserSettingsSummary = (output: any, context: __SerdeContext): BrowserSettingsSummary => {
  return {
    browserSettingsArn: __expectString(output.browserSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    body: output.body != null ? context.base64Decoder(output.body) : undefined,
    issuer: __expectString(output.issuer),
    notValidAfter:
      output.notValidAfter != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notValidAfter)))
        : undefined,
    notValidBefore:
      output.notValidBefore != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notValidBefore)))
        : undefined,
    subject: __expectString(output.subject),
    thumbprint: __expectString(output.thumbprint),
  } as any;
};

/**
 * deserializeAws_restJson1CertificateSummary
 */
const de_CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return {
    issuer: __expectString(output.issuer),
    notValidAfter:
      output.notValidAfter != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notValidAfter)))
        : undefined,
    notValidBefore:
      output.notValidBefore != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.notValidBefore)))
        : undefined,
    subject: __expectString(output.subject),
    thumbprint: __expectString(output.thumbprint),
  } as any;
};

/**
 * deserializeAws_restJson1CertificateSummaryList
 */
const de_CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdentityProvider
 */
const de_IdentityProvider = (output: any, context: __SerdeContext): IdentityProvider => {
  return {
    identityProviderArn: __expectString(output.identityProviderArn),
    identityProviderDetails:
      output.identityProviderDetails != null
        ? de_IdentityProviderDetails(output.identityProviderDetails, context)
        : undefined,
    identityProviderName: __expectString(output.identityProviderName),
    identityProviderType: __expectString(output.identityProviderType),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityProviderDetails
 */
const de_IdentityProviderDetails = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1IdentityProviderList
 */
const de_IdentityProviderList = (output: any, context: __SerdeContext): IdentityProviderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityProviderSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdentityProviderSummary
 */
const de_IdentityProviderSummary = (output: any, context: __SerdeContext): IdentityProviderSummary => {
  return {
    identityProviderArn: __expectString(output.identityProviderArn),
    identityProviderName: __expectString(output.identityProviderName),
    identityProviderType: __expectString(output.identityProviderType),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkSettings
 */
const de_NetworkSettings = (output: any, context: __SerdeContext): NetworkSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null ? de_ArnList(output.associatedPortalArns, context) : undefined,
    networkSettingsArn: __expectString(output.networkSettingsArn),
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIdList(output.securityGroupIds, context) : undefined,
    subnetIds: output.subnetIds != null ? de_SubnetIdList(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkSettingsList
 */
const de_NetworkSettingsList = (output: any, context: __SerdeContext): NetworkSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkSettingsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkSettingsSummary
 */
const de_NetworkSettingsSummary = (output: any, context: __SerdeContext): NetworkSettingsSummary => {
  return {
    networkSettingsArn: __expectString(output.networkSettingsArn),
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1Portal
 */
const de_Portal = (output: any, context: __SerdeContext): Portal => {
  return {
    authenticationType: __expectString(output.authenticationType),
    browserSettingsArn: __expectString(output.browserSettingsArn),
    browserType: __expectString(output.browserType),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    displayName: __expectString(output.displayName),
    networkSettingsArn: __expectString(output.networkSettingsArn),
    portalArn: __expectString(output.portalArn),
    portalEndpoint: __expectString(output.portalEndpoint),
    portalStatus: __expectString(output.portalStatus),
    rendererType: __expectString(output.rendererType),
    statusReason: __expectString(output.statusReason),
    trustStoreArn: __expectString(output.trustStoreArn),
    userAccessLoggingSettingsArn: __expectString(output.userAccessLoggingSettingsArn),
    userSettingsArn: __expectString(output.userSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1PortalList
 */
const de_PortalList = (output: any, context: __SerdeContext): PortalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortalSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PortalSummary
 */
const de_PortalSummary = (output: any, context: __SerdeContext): PortalSummary => {
  return {
    authenticationType: __expectString(output.authenticationType),
    browserSettingsArn: __expectString(output.browserSettingsArn),
    browserType: __expectString(output.browserType),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    displayName: __expectString(output.displayName),
    networkSettingsArn: __expectString(output.networkSettingsArn),
    portalArn: __expectString(output.portalArn),
    portalEndpoint: __expectString(output.portalEndpoint),
    portalStatus: __expectString(output.portalStatus),
    rendererType: __expectString(output.rendererType),
    trustStoreArn: __expectString(output.trustStoreArn),
    userAccessLoggingSettingsArn: __expectString(output.userAccessLoggingSettingsArn),
    userSettingsArn: __expectString(output.userSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroupIdList
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
 * deserializeAws_restJson1SubnetIdList
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
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrustStore
 */
const de_TrustStore = (output: any, context: __SerdeContext): TrustStore => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null ? de_ArnList(output.associatedPortalArns, context) : undefined,
    trustStoreArn: __expectString(output.trustStoreArn),
  } as any;
};

/**
 * deserializeAws_restJson1TrustStoreSummary
 */
const de_TrustStoreSummary = (output: any, context: __SerdeContext): TrustStoreSummary => {
  return {
    trustStoreArn: __expectString(output.trustStoreArn),
  } as any;
};

/**
 * deserializeAws_restJson1TrustStoreSummaryList
 */
const de_TrustStoreSummaryList = (output: any, context: __SerdeContext): TrustStoreSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrustStoreSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserAccessLoggingSettings
 */
const de_UserAccessLoggingSettings = (output: any, context: __SerdeContext): UserAccessLoggingSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null ? de_ArnList(output.associatedPortalArns, context) : undefined,
    kinesisStreamArn: __expectString(output.kinesisStreamArn),
    userAccessLoggingSettingsArn: __expectString(output.userAccessLoggingSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1UserAccessLoggingSettingsList
 */
const de_UserAccessLoggingSettingsList = (output: any, context: __SerdeContext): UserAccessLoggingSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserAccessLoggingSettingsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserAccessLoggingSettingsSummary
 */
const de_UserAccessLoggingSettingsSummary = (
  output: any,
  context: __SerdeContext
): UserAccessLoggingSettingsSummary => {
  return {
    kinesisStreamArn: __expectString(output.kinesisStreamArn),
    userAccessLoggingSettingsArn: __expectString(output.userAccessLoggingSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1UserSettings
 */
const de_UserSettings = (output: any, context: __SerdeContext): UserSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null ? de_ArnList(output.associatedPortalArns, context) : undefined,
    copyAllowed: __expectString(output.copyAllowed),
    disconnectTimeoutInMinutes: __expectInt32(output.disconnectTimeoutInMinutes),
    downloadAllowed: __expectString(output.downloadAllowed),
    idleDisconnectTimeoutInMinutes: __expectInt32(output.idleDisconnectTimeoutInMinutes),
    pasteAllowed: __expectString(output.pasteAllowed),
    printAllowed: __expectString(output.printAllowed),
    uploadAllowed: __expectString(output.uploadAllowed),
    userSettingsArn: __expectString(output.userSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1UserSettingsList
 */
const de_UserSettingsList = (output: any, context: __SerdeContext): UserSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserSettingsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserSettingsSummary
 */
const de_UserSettingsSummary = (output: any, context: __SerdeContext): UserSettingsSummary => {
  return {
    copyAllowed: __expectString(output.copyAllowed),
    disconnectTimeoutInMinutes: __expectInt32(output.disconnectTimeoutInMinutes),
    downloadAllowed: __expectString(output.downloadAllowed),
    idleDisconnectTimeoutInMinutes: __expectInt32(output.idleDisconnectTimeoutInMinutes),
    pasteAllowed: __expectString(output.pasteAllowed),
    printAllowed: __expectString(output.printAllowed),
    uploadAllowed: __expectString(output.uploadAllowed),
    userSettingsArn: __expectString(output.userSettingsArn),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
