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

export const serializeAws_restJson1AssociateBrowserSettingsCommand = async (
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

export const serializeAws_restJson1AssociateNetworkSettingsCommand = async (
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

export const serializeAws_restJson1AssociateTrustStoreCommand = async (
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

export const serializeAws_restJson1AssociateUserAccessLoggingSettingsCommand = async (
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

export const serializeAws_restJson1AssociateUserSettingsCommand = async (
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

export const serializeAws_restJson1CreateBrowserSettingsCommand = async (
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
      additionalEncryptionContext: serializeAws_restJson1EncryptionContextMap(
        input.additionalEncryptionContext,
        context
      ),
    }),
    ...(input.browserPolicy != null && { browserPolicy: input.browserPolicy }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customerManagedKey != null && { customerManagedKey: input.customerManagedKey }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateIdentityProviderCommand = async (
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
      identityProviderDetails: serializeAws_restJson1IdentityProviderDetails(input.identityProviderDetails, context),
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

export const serializeAws_restJson1CreateNetworkSettingsCommand = async (
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
      securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1SubnetIdList(input.subnetIds, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreatePortalCommand = async (
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
      additionalEncryptionContext: serializeAws_restJson1EncryptionContextMap(
        input.additionalEncryptionContext,
        context
      ),
    }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.customerManagedKey != null && { customerManagedKey: input.customerManagedKey }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateTrustStoreCommand = async (
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
    ...(input.certificateList != null && {
      certificateList: serializeAws_restJson1CertificateList(input.certificateList, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateUserAccessLoggingSettingsCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1CreateUserSettingsCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1DeleteBrowserSettingsCommand = async (
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

export const serializeAws_restJson1DeleteIdentityProviderCommand = async (
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

export const serializeAws_restJson1DeleteNetworkSettingsCommand = async (
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

export const serializeAws_restJson1DeletePortalCommand = async (
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

export const serializeAws_restJson1DeleteTrustStoreCommand = async (
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

export const serializeAws_restJson1DeleteUserAccessLoggingSettingsCommand = async (
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

export const serializeAws_restJson1DeleteUserSettingsCommand = async (
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

export const serializeAws_restJson1DisassociateBrowserSettingsCommand = async (
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

export const serializeAws_restJson1DisassociateNetworkSettingsCommand = async (
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

export const serializeAws_restJson1DisassociateTrustStoreCommand = async (
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

export const serializeAws_restJson1DisassociateUserAccessLoggingSettingsCommand = async (
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

export const serializeAws_restJson1DisassociateUserSettingsCommand = async (
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

export const serializeAws_restJson1GetBrowserSettingsCommand = async (
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

export const serializeAws_restJson1GetIdentityProviderCommand = async (
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

export const serializeAws_restJson1GetNetworkSettingsCommand = async (
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

export const serializeAws_restJson1GetPortalCommand = async (
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

export const serializeAws_restJson1GetPortalServiceProviderMetadataCommand = async (
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

export const serializeAws_restJson1GetTrustStoreCommand = async (
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

export const serializeAws_restJson1GetTrustStoreCertificateCommand = async (
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

export const serializeAws_restJson1GetUserAccessLoggingSettingsCommand = async (
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

export const serializeAws_restJson1GetUserSettingsCommand = async (
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

export const serializeAws_restJson1ListBrowserSettingsCommand = async (
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

export const serializeAws_restJson1ListIdentityProvidersCommand = async (
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

export const serializeAws_restJson1ListNetworkSettingsCommand = async (
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

export const serializeAws_restJson1ListPortalsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTrustStoreCertificatesCommand = async (
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

export const serializeAws_restJson1ListTrustStoresCommand = async (
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

export const serializeAws_restJson1ListUserAccessLoggingSettingsCommand = async (
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

export const serializeAws_restJson1ListUserSettingsCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateBrowserSettingsCommand = async (
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

export const serializeAws_restJson1UpdateIdentityProviderCommand = async (
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
      identityProviderDetails: serializeAws_restJson1IdentityProviderDetails(input.identityProviderDetails, context),
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

export const serializeAws_restJson1UpdateNetworkSettingsCommand = async (
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
      securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1SubnetIdList(input.subnetIds, context) }),
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

export const serializeAws_restJson1UpdatePortalCommand = async (
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

export const serializeAws_restJson1UpdateTrustStoreCommand = async (
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
    ...(input.certificatesToAdd != null && {
      certificatesToAdd: serializeAws_restJson1CertificateList(input.certificatesToAdd, context),
    }),
    ...(input.certificatesToDelete != null && {
      certificatesToDelete: serializeAws_restJson1CertificateThumbprintList(input.certificatesToDelete, context),
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

export const serializeAws_restJson1UpdateUserAccessLoggingSettingsCommand = async (
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

export const serializeAws_restJson1UpdateUserSettingsCommand = async (
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

export const deserializeAws_restJson1AssociateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateBrowserSettingsCommandError(output, context);
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

const deserializeAws_restJson1AssociateBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateNetworkSettingsCommandError(output, context);
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

const deserializeAws_restJson1AssociateNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateTrustStoreCommandError(output, context);
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

const deserializeAws_restJson1AssociateTrustStoreCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateUserAccessLoggingSettingsCommandError(output, context);
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

const deserializeAws_restJson1AssociateUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateUserSettingsCommandError(output, context);
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

const deserializeAws_restJson1AssociateUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBrowserSettingsCommandError(output, context);
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

const deserializeAws_restJson1CreateBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIdentityProviderCommandError(output, context);
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

const deserializeAws_restJson1CreateIdentityProviderCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNetworkSettingsCommandError(output, context);
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

const deserializeAws_restJson1CreateNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePortalCommandError(output, context);
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

const deserializeAws_restJson1CreatePortalCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTrustStoreCommandError(output, context);
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

const deserializeAws_restJson1CreateTrustStoreCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserAccessLoggingSettingsCommandError(output, context);
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

const deserializeAws_restJson1CreateUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserSettingsCommandError(output, context);
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

const deserializeAws_restJson1CreateUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIdentityProviderCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePortalCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTrustStoreCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesweb#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateTrustStoreCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettings != null) {
    contents.browserSettings = deserializeAws_restJson1BrowserSettings(data.browserSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProvider != null) {
    contents.identityProvider = deserializeAws_restJson1IdentityProvider(data.identityProvider, context);
  }
  return contents;
};

const deserializeAws_restJson1GetIdentityProviderCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettings != null) {
    contents.networkSettings = deserializeAws_restJson1NetworkSettings(data.networkSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portal != null) {
    contents.portal = deserializeAws_restJson1Portal(data.portal, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPortalCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPortalServiceProviderMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalServiceProviderMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPortalServiceProviderMetadataCommandError(output, context);
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

const deserializeAws_restJson1GetPortalServiceProviderMetadataCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTrustStoreCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustStore != null) {
    contents.trustStore = deserializeAws_restJson1TrustStore(data.trustStore, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTrustStoreCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTrustStoreCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTrustStoreCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificate != null) {
    contents.certificate = deserializeAws_restJson1Certificate(data.certificate, context);
  }
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

const deserializeAws_restJson1GetTrustStoreCertificateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userAccessLoggingSettings != null) {
    contents.userAccessLoggingSettings = deserializeAws_restJson1UserAccessLoggingSettings(
      data.userAccessLoggingSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userSettings != null) {
    contents.userSettings = deserializeAws_restJson1UserSettings(data.userSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettings != null) {
    contents.browserSettings = deserializeAws_restJson1BrowserSettingsList(data.browserSettings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIdentityProvidersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviders != null) {
    contents.identityProviders = deserializeAws_restJson1IdentityProviderList(data.identityProviders, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIdentityProvidersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettings != null) {
    contents.networkSettings = deserializeAws_restJson1NetworkSettingsList(data.networkSettings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPortalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPortalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.portals != null) {
    contents.portals = deserializeAws_restJson1PortalList(data.portals, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPortalsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTrustStoreCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoreCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrustStoreCertificatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.certificateList != null) {
    contents.certificateList = deserializeAws_restJson1CertificateSummaryList(data.certificateList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.trustStoreArn != null) {
    contents.trustStoreArn = __expectString(data.trustStoreArn);
  }
  return contents;
};

const deserializeAws_restJson1ListTrustStoreCertificatesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTrustStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrustStoresCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.trustStores != null) {
    contents.trustStores = deserializeAws_restJson1TrustStoreSummaryList(data.trustStores, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTrustStoresCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.userAccessLoggingSettings != null) {
    contents.userAccessLoggingSettings = deserializeAws_restJson1UserAccessLoggingSettingsList(
      data.userAccessLoggingSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.userSettings != null) {
    contents.userSettings = deserializeAws_restJson1UserSettingsList(data.userSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.workspacesweb#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBrowserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.browserSettings != null) {
    contents.browserSettings = deserializeAws_restJson1BrowserSettings(data.browserSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateBrowserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIdentityProviderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProvider != null) {
    contents.identityProvider = deserializeAws_restJson1IdentityProvider(data.identityProvider, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateIdentityProviderCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNetworkSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSettings != null) {
    contents.networkSettings = deserializeAws_restJson1NetworkSettings(data.networkSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateNetworkSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portal != null) {
    contents.portal = deserializeAws_restJson1Portal(data.portal, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePortalCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTrustStoreCommandError(output, context);
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

const deserializeAws_restJson1UpdateTrustStoreCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserAccessLoggingSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userAccessLoggingSettings != null) {
    contents.userAccessLoggingSettings = deserializeAws_restJson1UserAccessLoggingSettings(
      data.userAccessLoggingSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateUserAccessLoggingSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.userSettings != null) {
    contents.userSettings = deserializeAws_restJson1UserSettings(data.userSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateUserSettingsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesweb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesweb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesweb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesweb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
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

const serializeAws_restJson1CertificateList = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

const serializeAws_restJson1CertificateThumbprintList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EncryptionContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1IdentityProviderDetails = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BrowserSettings = (output: any, context: __SerdeContext): BrowserSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null
        ? deserializeAws_restJson1ArnList(output.associatedPortalArns, context)
        : undefined,
    browserPolicy: __expectString(output.browserPolicy),
    browserSettingsArn: __expectString(output.browserSettingsArn),
  } as any;
};

const deserializeAws_restJson1BrowserSettingsList = (
  output: any,
  context: __SerdeContext
): BrowserSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BrowserSettingsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BrowserSettingsSummary = (
  output: any,
  context: __SerdeContext
): BrowserSettingsSummary => {
  return {
    browserSettingsArn: __expectString(output.browserSettingsArn),
  } as any;
};

const deserializeAws_restJson1Certificate = (output: any, context: __SerdeContext): Certificate => {
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

const deserializeAws_restJson1CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
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

const deserializeAws_restJson1CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CertificateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IdentityProvider = (output: any, context: __SerdeContext): IdentityProvider => {
  return {
    identityProviderArn: __expectString(output.identityProviderArn),
    identityProviderDetails:
      output.identityProviderDetails != null
        ? deserializeAws_restJson1IdentityProviderDetails(output.identityProviderDetails, context)
        : undefined,
    identityProviderName: __expectString(output.identityProviderName),
    identityProviderType: __expectString(output.identityProviderType),
  } as any;
};

const deserializeAws_restJson1IdentityProviderDetails = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1IdentityProviderList = (
  output: any,
  context: __SerdeContext
): IdentityProviderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityProviderSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IdentityProviderSummary = (
  output: any,
  context: __SerdeContext
): IdentityProviderSummary => {
  return {
    identityProviderArn: __expectString(output.identityProviderArn),
    identityProviderName: __expectString(output.identityProviderName),
    identityProviderType: __expectString(output.identityProviderType),
  } as any;
};

const deserializeAws_restJson1NetworkSettings = (output: any, context: __SerdeContext): NetworkSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null
        ? deserializeAws_restJson1ArnList(output.associatedPortalArns, context)
        : undefined,
    networkSettingsArn: __expectString(output.networkSettingsArn),
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetIdList(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1NetworkSettingsList = (
  output: any,
  context: __SerdeContext
): NetworkSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkSettingsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkSettingsSummary = (
  output: any,
  context: __SerdeContext
): NetworkSettingsSummary => {
  return {
    networkSettingsArn: __expectString(output.networkSettingsArn),
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1Portal = (output: any, context: __SerdeContext): Portal => {
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

const deserializeAws_restJson1PortalList = (output: any, context: __SerdeContext): PortalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortalSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PortalSummary = (output: any, context: __SerdeContext): PortalSummary => {
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

const deserializeAws_restJson1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TrustStore = (output: any, context: __SerdeContext): TrustStore => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null
        ? deserializeAws_restJson1ArnList(output.associatedPortalArns, context)
        : undefined,
    trustStoreArn: __expectString(output.trustStoreArn),
  } as any;
};

const deserializeAws_restJson1TrustStoreSummary = (output: any, context: __SerdeContext): TrustStoreSummary => {
  return {
    trustStoreArn: __expectString(output.trustStoreArn),
  } as any;
};

const deserializeAws_restJson1TrustStoreSummaryList = (output: any, context: __SerdeContext): TrustStoreSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TrustStoreSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserAccessLoggingSettings = (
  output: any,
  context: __SerdeContext
): UserAccessLoggingSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null
        ? deserializeAws_restJson1ArnList(output.associatedPortalArns, context)
        : undefined,
    kinesisStreamArn: __expectString(output.kinesisStreamArn),
    userAccessLoggingSettingsArn: __expectString(output.userAccessLoggingSettingsArn),
  } as any;
};

const deserializeAws_restJson1UserAccessLoggingSettingsList = (
  output: any,
  context: __SerdeContext
): UserAccessLoggingSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserAccessLoggingSettingsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserAccessLoggingSettingsSummary = (
  output: any,
  context: __SerdeContext
): UserAccessLoggingSettingsSummary => {
  return {
    kinesisStreamArn: __expectString(output.kinesisStreamArn),
    userAccessLoggingSettingsArn: __expectString(output.userAccessLoggingSettingsArn),
  } as any;
};

const deserializeAws_restJson1UserSettings = (output: any, context: __SerdeContext): UserSettings => {
  return {
    associatedPortalArns:
      output.associatedPortalArns != null
        ? deserializeAws_restJson1ArnList(output.associatedPortalArns, context)
        : undefined,
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

const deserializeAws_restJson1UserSettingsList = (output: any, context: __SerdeContext): UserSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserSettingsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserSettingsSummary = (output: any, context: __SerdeContext): UserSettingsSummary => {
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

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
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
