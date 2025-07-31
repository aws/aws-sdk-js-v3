// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateBrowserSettingsCommandInput,
  AssociateBrowserSettingsCommandOutput,
} from "../commands/AssociateBrowserSettingsCommand";
import {
  AssociateDataProtectionSettingsCommandInput,
  AssociateDataProtectionSettingsCommandOutput,
} from "../commands/AssociateDataProtectionSettingsCommand";
import {
  AssociateIpAccessSettingsCommandInput,
  AssociateIpAccessSettingsCommandOutput,
} from "../commands/AssociateIpAccessSettingsCommand";
import {
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
} from "../commands/AssociateNetworkSettingsCommand";
import {
  AssociateSessionLoggerCommandInput,
  AssociateSessionLoggerCommandOutput,
} from "../commands/AssociateSessionLoggerCommand";
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
  CreateDataProtectionSettingsCommandInput,
  CreateDataProtectionSettingsCommandOutput,
} from "../commands/CreateDataProtectionSettingsCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "../commands/CreateIdentityProviderCommand";
import {
  CreateIpAccessSettingsCommandInput,
  CreateIpAccessSettingsCommandOutput,
} from "../commands/CreateIpAccessSettingsCommand";
import {
  CreateNetworkSettingsCommandInput,
  CreateNetworkSettingsCommandOutput,
} from "../commands/CreateNetworkSettingsCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "../commands/CreatePortalCommand";
import {
  CreateSessionLoggerCommandInput,
  CreateSessionLoggerCommandOutput,
} from "../commands/CreateSessionLoggerCommand";
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
  DeleteDataProtectionSettingsCommandInput,
  DeleteDataProtectionSettingsCommandOutput,
} from "../commands/DeleteDataProtectionSettingsCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "../commands/DeleteIdentityProviderCommand";
import {
  DeleteIpAccessSettingsCommandInput,
  DeleteIpAccessSettingsCommandOutput,
} from "../commands/DeleteIpAccessSettingsCommand";
import {
  DeleteNetworkSettingsCommandInput,
  DeleteNetworkSettingsCommandOutput,
} from "../commands/DeleteNetworkSettingsCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "../commands/DeletePortalCommand";
import {
  DeleteSessionLoggerCommandInput,
  DeleteSessionLoggerCommandOutput,
} from "../commands/DeleteSessionLoggerCommand";
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
  DisassociateDataProtectionSettingsCommandInput,
  DisassociateDataProtectionSettingsCommandOutput,
} from "../commands/DisassociateDataProtectionSettingsCommand";
import {
  DisassociateIpAccessSettingsCommandInput,
  DisassociateIpAccessSettingsCommandOutput,
} from "../commands/DisassociateIpAccessSettingsCommand";
import {
  DisassociateNetworkSettingsCommandInput,
  DisassociateNetworkSettingsCommandOutput,
} from "../commands/DisassociateNetworkSettingsCommand";
import {
  DisassociateSessionLoggerCommandInput,
  DisassociateSessionLoggerCommandOutput,
} from "../commands/DisassociateSessionLoggerCommand";
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
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "../commands/ExpireSessionCommand";
import { GetBrowserSettingsCommandInput, GetBrowserSettingsCommandOutput } from "../commands/GetBrowserSettingsCommand";
import {
  GetDataProtectionSettingsCommandInput,
  GetDataProtectionSettingsCommandOutput,
} from "../commands/GetDataProtectionSettingsCommand";
import {
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
} from "../commands/GetIdentityProviderCommand";
import {
  GetIpAccessSettingsCommandInput,
  GetIpAccessSettingsCommandOutput,
} from "../commands/GetIpAccessSettingsCommand";
import { GetNetworkSettingsCommandInput, GetNetworkSettingsCommandOutput } from "../commands/GetNetworkSettingsCommand";
import { GetPortalCommandInput, GetPortalCommandOutput } from "../commands/GetPortalCommand";
import {
  GetPortalServiceProviderMetadataCommandInput,
  GetPortalServiceProviderMetadataCommandOutput,
} from "../commands/GetPortalServiceProviderMetadataCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { GetSessionLoggerCommandInput, GetSessionLoggerCommandOutput } from "../commands/GetSessionLoggerCommand";
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
  ListDataProtectionSettingsCommandInput,
  ListDataProtectionSettingsCommandOutput,
} from "../commands/ListDataProtectionSettingsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import {
  ListIpAccessSettingsCommandInput,
  ListIpAccessSettingsCommandOutput,
} from "../commands/ListIpAccessSettingsCommand";
import {
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "../commands/ListNetworkSettingsCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import { ListSessionLoggersCommandInput, ListSessionLoggersCommandOutput } from "../commands/ListSessionLoggersCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
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
  UpdateDataProtectionSettingsCommandInput,
  UpdateDataProtectionSettingsCommandOutput,
} from "../commands/UpdateDataProtectionSettingsCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "../commands/UpdateIdentityProviderCommand";
import {
  UpdateIpAccessSettingsCommandInput,
  UpdateIpAccessSettingsCommandOutput,
} from "../commands/UpdateIpAccessSettingsCommand";
import {
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "../commands/UpdateNetworkSettingsCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "../commands/UpdatePortalCommand";
import {
  UpdateSessionLoggerCommandInput,
  UpdateSessionLoggerCommandOutput,
} from "../commands/UpdateSessionLoggerCommand";
import { UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput } from "../commands/UpdateTrustStoreCommand";
import {
  UpdateUserAccessLoggingSettingsCommandInput,
  UpdateUserAccessLoggingSettingsCommandOutput,
} from "../commands/UpdateUserAccessLoggingSettingsCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "../commands/UpdateUserSettingsCommand";
import {
  AccessDeniedException,
  Certificate,
  CertificateSummary,
  ConflictException,
  CookieSpecification,
  CookieSynchronizationConfiguration,
  CustomPattern,
  DataProtectionSettings,
  DataProtectionSettingsSummary,
  Event,
  EventFilter,
  InlineRedactionConfiguration,
  InlineRedactionPattern,
  InternalServerException,
  IpAccessSettings,
  IpAccessSettingsSummary,
  IpRule,
  LogConfiguration,
  Portal,
  PortalSummary,
  RedactionPlaceHolder,
  ResourceNotFoundException,
  S3LogConfiguration,
  ServiceQuotaExceededException,
  Session,
  SessionLogger,
  SessionLoggerSummary,
  SessionSummary,
  Tag,
  ThrottlingException,
  ToolbarConfiguration,
  ToolbarItem,
  TooManyTagsException,
  Unit,
  ValidationException,
} from "../models/models_0";
import { WorkSpacesWebServiceException as __BaseException } from "../models/WorkSpacesWebServiceException";

/**
 * serializeAws_restJson1AssociateBrowserSettingsCommand
 */
export const se_AssociateBrowserSettingsCommand = async (
  input: AssociateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/browserSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_bSA]: [, __expectNonNull(input[_bSA]!, `browserSettingsArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateDataProtectionSettingsCommand
 */
export const se_AssociateDataProtectionSettingsCommand = async (
  input: AssociateDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/dataProtectionSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_dPSA]: [, __expectNonNull(input[_dPSA]!, `dataProtectionSettingsArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateIpAccessSettingsCommand
 */
export const se_AssociateIpAccessSettingsCommand = async (
  input: AssociateIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/ipAccessSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_iASA]: [, __expectNonNull(input[_iASA]!, `ipAccessSettingsArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateNetworkSettingsCommand
 */
export const se_AssociateNetworkSettingsCommand = async (
  input: AssociateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/networkSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_nSA]: [, __expectNonNull(input[_nSA]!, `networkSettingsArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSessionLoggerCommand
 */
export const se_AssociateSessionLoggerCommand = async (
  input: AssociateSessionLoggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/sessionLogger");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_sLA]: [, __expectNonNull(input[_sLA]!, `sessionLoggerArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateTrustStoreCommand
 */
export const se_AssociateTrustStoreCommand = async (
  input: AssociateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/trustStores");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_tSA]: [, __expectNonNull(input[_tSA]!, `trustStoreArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateUserAccessLoggingSettingsCommand
 */
export const se_AssociateUserAccessLoggingSettingsCommand = async (
  input: AssociateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/userAccessLoggingSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_uALSA]: [, __expectNonNull(input[_uALSA]!, `userAccessLoggingSettingsArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateUserSettingsCommand
 */
export const se_AssociateUserSettingsCommand = async (
  input: AssociateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/userSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_uSA]: [, __expectNonNull(input[_uSA]!, `userSettingsArn`)],
  });
  let body: any;
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBrowserSettingsCommand
 */
export const se_CreateBrowserSettingsCommand = async (
  input: CreateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browserSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalEncryptionContext: (_) => _json(_),
      browserPolicy: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKey: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataProtectionSettingsCommand
 */
export const se_CreateDataProtectionSettingsCommand = async (
  input: CreateDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dataProtectionSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalEncryptionContext: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKey: [],
      description: [],
      displayName: [],
      inlineRedactionConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIdentityProviderCommand
 */
export const se_CreateIdentityProviderCommand = async (
  input: CreateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identityProviders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      identityProviderDetails: (_) => _json(_),
      identityProviderName: [],
      identityProviderType: [],
      portalArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIpAccessSettingsCommand
 */
export const se_CreateIpAccessSettingsCommand = async (
  input: CreateIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ipAccessSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalEncryptionContext: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKey: [],
      description: [],
      displayName: [],
      ipRules: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNetworkSettingsCommand
 */
export const se_CreateNetworkSettingsCommand = async (
  input: CreateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networkSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      securityGroupIds: (_) => _json(_),
      subnetIds: (_) => _json(_),
      tags: (_) => _json(_),
      vpcId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePortalCommand
 */
export const se_CreatePortalCommand = async (
  input: CreatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/portals");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalEncryptionContext: (_) => _json(_),
      authenticationType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKey: [],
      displayName: [],
      instanceType: [],
      maxConcurrentSessions: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSessionLoggerCommand
 */
export const se_CreateSessionLoggerCommand = async (
  input: CreateSessionLoggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessionLoggers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalEncryptionContext: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKey: [],
      displayName: [],
      eventFilter: (_) => _json(_),
      logConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrustStoreCommand
 */
export const se_CreateTrustStoreCommand = async (
  input: CreateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/trustStores");
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificateList: (_) => se_CertificateList(_, context),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserAccessLoggingSettingsCommand
 */
export const se_CreateUserAccessLoggingSettingsCommand = async (
  input: CreateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/userAccessLoggingSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      kinesisStreamArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserSettingsCommand
 */
export const se_CreateUserSettingsCommand = async (
  input: CreateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/userSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalEncryptionContext: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      cookieSynchronizationConfiguration: (_) => _json(_),
      copyAllowed: [],
      customerManagedKey: [],
      deepLinkAllowed: [],
      disconnectTimeoutInMinutes: [],
      downloadAllowed: [],
      idleDisconnectTimeoutInMinutes: [],
      pasteAllowed: [],
      printAllowed: [],
      tags: (_) => _json(_),
      toolbarConfiguration: (_) => _json(_),
      uploadAllowed: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBrowserSettingsCommand
 */
export const se_DeleteBrowserSettingsCommand = async (
  input: DeleteBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browserSettings/{browserSettingsArn+}");
  b.p("browserSettingsArn", () => input.browserSettingsArn!, "{browserSettingsArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataProtectionSettingsCommand
 */
export const se_DeleteDataProtectionSettingsCommand = async (
  input: DeleteDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataProtectionSettings/{dataProtectionSettingsArn+}");
  b.p("dataProtectionSettingsArn", () => input.dataProtectionSettingsArn!, "{dataProtectionSettingsArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIdentityProviderCommand
 */
export const se_DeleteIdentityProviderCommand = async (
  input: DeleteIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/identityProviders/{identityProviderArn+}");
  b.p("identityProviderArn", () => input.identityProviderArn!, "{identityProviderArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIpAccessSettingsCommand
 */
export const se_DeleteIpAccessSettingsCommand = async (
  input: DeleteIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ipAccessSettings/{ipAccessSettingsArn+}");
  b.p("ipAccessSettingsArn", () => input.ipAccessSettingsArn!, "{ipAccessSettingsArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNetworkSettingsCommand
 */
export const se_DeleteNetworkSettingsCommand = async (
  input: DeleteNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networkSettings/{networkSettingsArn+}");
  b.p("networkSettingsArn", () => input.networkSettingsArn!, "{networkSettingsArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePortalCommand
 */
export const se_DeletePortalCommand = async (
  input: DeletePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSessionLoggerCommand
 */
export const se_DeleteSessionLoggerCommand = async (
  input: DeleteSessionLoggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessionLoggers/{sessionLoggerArn+}");
  b.p("sessionLoggerArn", () => input.sessionLoggerArn!, "{sessionLoggerArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrustStoreCommand
 */
export const se_DeleteTrustStoreCommand = async (
  input: DeleteTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustStores/{trustStoreArn+}");
  b.p("trustStoreArn", () => input.trustStoreArn!, "{trustStoreArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserAccessLoggingSettingsCommand
 */
export const se_DeleteUserAccessLoggingSettingsCommand = async (
  input: DeleteUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}");
  b.p(
    "userAccessLoggingSettingsArn",
    () => input.userAccessLoggingSettingsArn!,
    "{userAccessLoggingSettingsArn+}",
    true
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserSettingsCommand
 */
export const se_DeleteUserSettingsCommand = async (
  input: DeleteUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userSettings/{userSettingsArn+}");
  b.p("userSettingsArn", () => input.userSettingsArn!, "{userSettingsArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateBrowserSettingsCommand
 */
export const se_DisassociateBrowserSettingsCommand = async (
  input: DisassociateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/browserSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateDataProtectionSettingsCommand
 */
export const se_DisassociateDataProtectionSettingsCommand = async (
  input: DisassociateDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/dataProtectionSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateIpAccessSettingsCommand
 */
export const se_DisassociateIpAccessSettingsCommand = async (
  input: DisassociateIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/ipAccessSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateNetworkSettingsCommand
 */
export const se_DisassociateNetworkSettingsCommand = async (
  input: DisassociateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/networkSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSessionLoggerCommand
 */
export const se_DisassociateSessionLoggerCommand = async (
  input: DisassociateSessionLoggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/sessionLogger");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateTrustStoreCommand
 */
export const se_DisassociateTrustStoreCommand = async (
  input: DisassociateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/trustStores");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateUserAccessLoggingSettingsCommand
 */
export const se_DisassociateUserAccessLoggingSettingsCommand = async (
  input: DisassociateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/userAccessLoggingSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateUserSettingsCommand
 */
export const se_DisassociateUserSettingsCommand = async (
  input: DisassociateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/userSettings");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExpireSessionCommand
 */
export const se_ExpireSessionCommand = async (
  input: ExpireSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalId}/sessions/{sessionId}");
  b.p("portalId", () => input.portalId!, "{portalId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBrowserSettingsCommand
 */
export const se_GetBrowserSettingsCommand = async (
  input: GetBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browserSettings/{browserSettingsArn+}");
  b.p("browserSettingsArn", () => input.browserSettingsArn!, "{browserSettingsArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataProtectionSettingsCommand
 */
export const se_GetDataProtectionSettingsCommand = async (
  input: GetDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataProtectionSettings/{dataProtectionSettingsArn+}");
  b.p("dataProtectionSettingsArn", () => input.dataProtectionSettingsArn!, "{dataProtectionSettingsArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIdentityProviderCommand
 */
export const se_GetIdentityProviderCommand = async (
  input: GetIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/identityProviders/{identityProviderArn+}");
  b.p("identityProviderArn", () => input.identityProviderArn!, "{identityProviderArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIpAccessSettingsCommand
 */
export const se_GetIpAccessSettingsCommand = async (
  input: GetIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ipAccessSettings/{ipAccessSettingsArn+}");
  b.p("ipAccessSettingsArn", () => input.ipAccessSettingsArn!, "{ipAccessSettingsArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkSettingsCommand
 */
export const se_GetNetworkSettingsCommand = async (
  input: GetNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networkSettings/{networkSettingsArn+}");
  b.p("networkSettingsArn", () => input.networkSettingsArn!, "{networkSettingsArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPortalCommand
 */
export const se_GetPortalCommand = async (
  input: GetPortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPortalServiceProviderMetadataCommand
 */
export const se_GetPortalServiceProviderMetadataCommand = async (
  input: GetPortalServiceProviderMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portalIdp/{portalArn+}");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalId}/sessions/{sessionId}");
  b.p("portalId", () => input.portalId!, "{portalId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionLoggerCommand
 */
export const se_GetSessionLoggerCommand = async (
  input: GetSessionLoggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessionLoggers/{sessionLoggerArn+}");
  b.p("sessionLoggerArn", () => input.sessionLoggerArn!, "{sessionLoggerArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrustStoreCommand
 */
export const se_GetTrustStoreCommand = async (
  input: GetTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustStores/{trustStoreArn+}");
  b.p("trustStoreArn", () => input.trustStoreArn!, "{trustStoreArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrustStoreCertificateCommand
 */
export const se_GetTrustStoreCertificateCommand = async (
  input: GetTrustStoreCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustStores/{trustStoreArn+}/certificate");
  b.p("trustStoreArn", () => input.trustStoreArn!, "{trustStoreArn+}", true);
  const query: any = map({
    [_t]: [, __expectNonNull(input[_t]!, `thumbprint`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserAccessLoggingSettingsCommand
 */
export const se_GetUserAccessLoggingSettingsCommand = async (
  input: GetUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}");
  b.p(
    "userAccessLoggingSettingsArn",
    () => input.userAccessLoggingSettingsArn!,
    "{userAccessLoggingSettingsArn+}",
    true
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserSettingsCommand
 */
export const se_GetUserSettingsCommand = async (
  input: GetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userSettings/{userSettingsArn+}");
  b.p("userSettingsArn", () => input.userSettingsArn!, "{userSettingsArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBrowserSettingsCommand
 */
export const se_ListBrowserSettingsCommand = async (
  input: ListBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browserSettings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataProtectionSettingsCommand
 */
export const se_ListDataProtectionSettingsCommand = async (
  input: ListDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataProtectionSettings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdentityProvidersCommand
 */
export const se_ListIdentityProvidersCommand = async (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalArn+}/identityProviders");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIpAccessSettingsCommand
 */
export const se_ListIpAccessSettingsCommand = async (
  input: ListIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ipAccessSettings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNetworkSettingsCommand
 */
export const se_ListNetworkSettingsCommand = async (
  input: ListNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networkSettings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPortalsCommand
 */
export const se_ListPortalsCommand = async (
  input: ListPortalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionLoggersCommand
 */
export const se_ListSessionLoggersCommand = async (
  input: ListSessionLoggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessionLoggers");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalId}/sessions");
  b.p("portalId", () => input.portalId!, "{portalId}", false);
  const query: any = map({
    [_u]: [, input[_u]!],
    [_sI]: [, input[_sI]!],
    [_sB]: [, input[_sB]!],
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn+}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn+}", true);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrustStoreCertificatesCommand
 */
export const se_ListTrustStoreCertificatesCommand = async (
  input: ListTrustStoreCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustStores/{trustStoreArn+}/certificates");
  b.p("trustStoreArn", () => input.trustStoreArn!, "{trustStoreArn+}", true);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrustStoresCommand
 */
export const se_ListTrustStoresCommand = async (
  input: ListTrustStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustStores");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUserAccessLoggingSettingsCommand
 */
export const se_ListUserAccessLoggingSettingsCommand = async (
  input: ListUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userAccessLoggingSettings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUserSettingsCommand
 */
export const se_ListUserSettingsCommand = async (
  input: ListUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/userSettings");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn+}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn+}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn+}", true);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBrowserSettingsCommand
 */
export const se_UpdateBrowserSettingsCommand = async (
  input: UpdateBrowserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browserSettings/{browserSettingsArn+}");
  b.p("browserSettingsArn", () => input.browserSettingsArn!, "{browserSettingsArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      browserPolicy: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataProtectionSettingsCommand
 */
export const se_UpdateDataProtectionSettingsCommand = async (
  input: UpdateDataProtectionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dataProtectionSettings/{dataProtectionSettingsArn+}");
  b.p("dataProtectionSettingsArn", () => input.dataProtectionSettingsArn!, "{dataProtectionSettingsArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      displayName: [],
      inlineRedactionConfiguration: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIdentityProviderCommand
 */
export const se_UpdateIdentityProviderCommand = async (
  input: UpdateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identityProviders/{identityProviderArn+}");
  b.p("identityProviderArn", () => input.identityProviderArn!, "{identityProviderArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      identityProviderDetails: (_) => _json(_),
      identityProviderName: [],
      identityProviderType: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIpAccessSettingsCommand
 */
export const se_UpdateIpAccessSettingsCommand = async (
  input: UpdateIpAccessSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ipAccessSettings/{ipAccessSettingsArn+}");
  b.p("ipAccessSettingsArn", () => input.ipAccessSettingsArn!, "{ipAccessSettingsArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      displayName: [],
      ipRules: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNetworkSettingsCommand
 */
export const se_UpdateNetworkSettingsCommand = async (
  input: UpdateNetworkSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networkSettings/{networkSettingsArn+}");
  b.p("networkSettingsArn", () => input.networkSettingsArn!, "{networkSettingsArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      securityGroupIds: (_) => _json(_),
      subnetIds: (_) => _json(_),
      vpcId: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePortalCommand
 */
export const se_UpdatePortalCommand = async (
  input: UpdatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/portals/{portalArn+}");
  b.p("portalArn", () => input.portalArn!, "{portalArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authenticationType: [],
      displayName: [],
      instanceType: [],
      maxConcurrentSessions: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSessionLoggerCommand
 */
export const se_UpdateSessionLoggerCommand = async (
  input: UpdateSessionLoggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sessionLoggers/{sessionLoggerArn+}");
  b.p("sessionLoggerArn", () => input.sessionLoggerArn!, "{sessionLoggerArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      displayName: [],
      eventFilter: (_) => _json(_),
      logConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTrustStoreCommand
 */
export const se_UpdateTrustStoreCommand = async (
  input: UpdateTrustStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/trustStores/{trustStoreArn+}");
  b.p("trustStoreArn", () => input.trustStoreArn!, "{trustStoreArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificatesToAdd: (_) => se_CertificateList(_, context),
      certificatesToDelete: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserAccessLoggingSettingsCommand
 */
export const se_UpdateUserAccessLoggingSettingsCommand = async (
  input: UpdateUserAccessLoggingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}");
  b.p(
    "userAccessLoggingSettingsArn",
    () => input.userAccessLoggingSettingsArn!,
    "{userAccessLoggingSettingsArn+}",
    true
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      kinesisStreamArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserSettingsCommand
 */
export const se_UpdateUserSettingsCommand = async (
  input: UpdateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/userSettings/{userSettingsArn+}");
  b.p("userSettingsArn", () => input.userSettingsArn!, "{userSettingsArn+}", true);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      cookieSynchronizationConfiguration: (_) => _json(_),
      copyAllowed: [],
      deepLinkAllowed: [],
      disconnectTimeoutInMinutes: [],
      downloadAllowed: [],
      idleDisconnectTimeoutInMinutes: [],
      pasteAllowed: [],
      printAllowed: [],
      toolbarConfiguration: (_) => _json(_),
      uploadAllowed: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateBrowserSettingsCommand
 */
export const de_AssociateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserSettingsArn: __expectString,
    portalArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateDataProtectionSettingsCommand
 */
export const de_AssociateDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataProtectionSettingsArn: __expectString,
    portalArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateIpAccessSettingsCommand
 */
export const de_AssociateIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ipAccessSettingsArn: __expectString,
    portalArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateNetworkSettingsCommand
 */
export const de_AssociateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSettingsArn: __expectString,
    portalArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSessionLoggerCommand
 */
export const de_AssociateSessionLoggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSessionLoggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    sessionLoggerArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTrustStoreCommand
 */
export const de_AssociateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    trustStoreArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserAccessLoggingSettingsCommand
 */
export const de_AssociateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    userAccessLoggingSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateUserSettingsCommand
 */
export const de_AssociateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    userSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBrowserSettingsCommand
 */
export const de_CreateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataProtectionSettingsCommand
 */
export const de_CreateDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataProtectionSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIdentityProviderCommand
 */
export const de_CreateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityProviderArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIpAccessSettingsCommand
 */
export const de_CreateIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ipAccessSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkSettingsCommand
 */
export const de_CreateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePortalCommand
 */
export const de_CreatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    portalEndpoint: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSessionLoggerCommand
 */
export const de_CreateSessionLoggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionLoggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionLoggerArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrustStoreCommand
 */
export const de_CreateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustStoreArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserAccessLoggingSettingsCommand
 */
export const de_CreateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessLoggingSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserSettingsCommand
 */
export const de_CreateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userSettingsArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBrowserSettingsCommand
 */
export const de_DeleteBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataProtectionSettingsCommand
 */
export const de_DeleteDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdentityProviderCommand
 */
export const de_DeleteIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIpAccessSettingsCommand
 */
export const de_DeleteIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNetworkSettingsCommand
 */
export const de_DeleteNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePortalCommand
 */
export const de_DeletePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSessionLoggerCommand
 */
export const de_DeleteSessionLoggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionLoggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrustStoreCommand
 */
export const de_DeleteTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommand
 */
export const de_DeleteUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserSettingsCommand
 */
export const de_DeleteUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateBrowserSettingsCommand
 */
export const de_DisassociateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateDataProtectionSettingsCommand
 */
export const de_DisassociateDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateIpAccessSettingsCommand
 */
export const de_DisassociateIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateNetworkSettingsCommand
 */
export const de_DisassociateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSessionLoggerCommand
 */
export const de_DisassociateSessionLoggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSessionLoggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTrustStoreCommand
 */
export const de_DisassociateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserAccessLoggingSettingsCommand
 */
export const de_DisassociateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateUserSettingsCommand
 */
export const de_DisassociateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ExpireSessionCommand
 */
export const de_ExpireSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExpireSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetBrowserSettingsCommand
 */
export const de_GetBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataProtectionSettingsCommand
 */
export const de_GetDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataProtectionSettings: (_) => de_DataProtectionSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdentityProviderCommand
 */
export const de_GetIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityProvider: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIpAccessSettingsCommand
 */
export const de_GetIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ipAccessSettings: (_) => de_IpAccessSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkSettingsCommand
 */
export const de_GetNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPortalCommand
 */
export const de_GetPortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portal: (_) => de_Portal(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPortalServiceProviderMetadataCommand
 */
export const de_GetPortalServiceProviderMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPortalServiceProviderMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    serviceProviderSamlMetadata: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: (_) => de_Session(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionLoggerCommand
 */
export const de_GetSessionLoggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionLoggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionLogger: (_) => de_SessionLogger(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrustStoreCommand
 */
export const de_GetTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustStore: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrustStoreCertificateCommand
 */
export const de_GetTrustStoreCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustStoreCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificate: (_) => de_Certificate(_, context),
    trustStoreArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserAccessLoggingSettingsCommand
 */
export const de_GetUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessLoggingSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserSettingsCommand
 */
export const de_GetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBrowserSettingsCommand
 */
export const de_ListBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserSettings: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataProtectionSettingsCommand
 */
export const de_ListDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataProtectionSettings: (_) => de_DataProtectionSettingsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityProvidersCommand
 */
export const de_ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityProviders: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIpAccessSettingsCommand
 */
export const de_ListIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ipAccessSettings: (_) => de_IpAccessSettingsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworkSettingsCommand
 */
export const de_ListNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSettings: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPortalsCommand
 */
export const de_ListPortalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    portals: (_) => de_PortalList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionLoggersCommand
 */
export const de_ListSessionLoggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionLoggersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessionLoggers: (_) => de_SessionLoggerList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessions: (_) => de_SessionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrustStoreCertificatesCommand
 */
export const de_ListTrustStoreCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoreCertificatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    certificateList: (_) => de_CertificateSummaryList(_, context),
    nextToken: __expectString,
    trustStoreArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrustStoresCommand
 */
export const de_ListTrustStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustStoresCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trustStores: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUserAccessLoggingSettingsCommand
 */
export const de_ListUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    userAccessLoggingSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUserSettingsCommand
 */
export const de_ListUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    userSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrowserSettingsCommand
 */
export const de_UpdateBrowserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrowserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataProtectionSettingsCommand
 */
export const de_UpdateDataProtectionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataProtectionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataProtectionSettings: (_) => de_DataProtectionSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdentityProviderCommand
 */
export const de_UpdateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    identityProvider: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIpAccessSettingsCommand
 */
export const de_UpdateIpAccessSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIpAccessSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ipAccessSettings: (_) => de_IpAccessSettings(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkSettingsCommand
 */
export const de_UpdateNetworkSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePortalCommand
 */
export const de_UpdatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portal: (_) => de_Portal(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSessionLoggerCommand
 */
export const de_UpdateSessionLoggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSessionLoggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sessionLogger: (_) => de_SessionLogger(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrustStoreCommand
 */
export const de_UpdateTrustStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustStoreCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustStoreArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserAccessLoggingSettingsCommand
 */
export const de_UpdateUserAccessLoggingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAccessLoggingSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessLoggingSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserSettingsCommand
 */
export const de_UpdateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesweb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.workspacesweb#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
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

// se_CertificateThumbprintList omitted.

// se_CookieSpecification omitted.

// se_CookieSpecifications omitted.

// se_CookieSynchronizationConfiguration omitted.

// se_CustomPattern omitted.

// se_EncryptionContextMap omitted.

// se_EventFilter omitted.

// se_Events omitted.

// se_GlobalInlineRedactionUrls omitted.

// se_HiddenToolbarItemList omitted.

// se_IdentityProviderDetails omitted.

// se_InlineRedactionConfiguration omitted.

// se_InlineRedactionPattern omitted.

// se_InlineRedactionPatterns omitted.

// se_InlineRedactionUrls omitted.

// se_IpRule omitted.

// se_IpRuleList omitted.

// se_LogConfiguration omitted.

// se_RedactionPlaceHolder omitted.

// se_S3LogConfiguration omitted.

// se_SecurityGroupIdList omitted.

// se_SubnetIdList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_ToolbarConfiguration omitted.

// se_Unit omitted.

// de_ArnList omitted.

// de_BrowserSettings omitted.

// de_BrowserSettingsList omitted.

// de_BrowserSettingsSummary omitted.

/**
 * deserializeAws_restJson1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return take(output, {
    body: context.base64Decoder,
    issuer: __expectString,
    notValidAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notValidBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    subject: __expectString,
    thumbprint: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CertificateSummary
 */
const de_CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return take(output, {
    issuer: __expectString,
    notValidAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notValidBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    subject: __expectString,
    thumbprint: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CertificateSummaryList
 */
const de_CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CertificateSummary(entry, context);
    });
  return retVal;
};

// de_CookieSpecification omitted.

// de_CookieSpecifications omitted.

// de_CookieSynchronizationConfiguration omitted.

// de_CustomPattern omitted.

/**
 * deserializeAws_restJson1DataProtectionSettings
 */
const de_DataProtectionSettings = (output: any, context: __SerdeContext): DataProtectionSettings => {
  return take(output, {
    additionalEncryptionContext: _json,
    associatedPortalArns: _json,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerManagedKey: __expectString,
    dataProtectionSettingsArn: __expectString,
    description: __expectString,
    displayName: __expectString,
    inlineRedactionConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DataProtectionSettingsList
 */
const de_DataProtectionSettingsList = (output: any, context: __SerdeContext): DataProtectionSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataProtectionSettingsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataProtectionSettingsSummary
 */
const de_DataProtectionSettingsSummary = (output: any, context: __SerdeContext): DataProtectionSettingsSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataProtectionSettingsArn: __expectString,
    description: __expectString,
    displayName: __expectString,
  }) as any;
};

// de_EncryptionContextMap omitted.

// de_EventFilter omitted.

// de_Events omitted.

// de_GlobalInlineRedactionUrls omitted.

// de_HiddenToolbarItemList omitted.

// de_IdentityProvider omitted.

// de_IdentityProviderDetails omitted.

// de_IdentityProviderList omitted.

// de_IdentityProviderSummary omitted.

// de_InlineRedactionConfiguration omitted.

// de_InlineRedactionPattern omitted.

// de_InlineRedactionPatterns omitted.

// de_InlineRedactionUrls omitted.

/**
 * deserializeAws_restJson1IpAccessSettings
 */
const de_IpAccessSettings = (output: any, context: __SerdeContext): IpAccessSettings => {
  return take(output, {
    additionalEncryptionContext: _json,
    associatedPortalArns: _json,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerManagedKey: __expectString,
    description: __expectString,
    displayName: __expectString,
    ipAccessSettingsArn: __expectString,
    ipRules: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1IpAccessSettingsList
 */
const de_IpAccessSettingsList = (output: any, context: __SerdeContext): IpAccessSettingsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IpAccessSettingsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IpAccessSettingsSummary
 */
const de_IpAccessSettingsSummary = (output: any, context: __SerdeContext): IpAccessSettingsSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    ipAccessSettingsArn: __expectString,
  }) as any;
};

// de_IpAddressList omitted.

// de_IpRule omitted.

// de_IpRuleList omitted.

// de_LogConfiguration omitted.

// de_NetworkSettings omitted.

// de_NetworkSettingsList omitted.

// de_NetworkSettingsSummary omitted.

/**
 * deserializeAws_restJson1Portal
 */
const de_Portal = (output: any, context: __SerdeContext): Portal => {
  return take(output, {
    additionalEncryptionContext: _json,
    authenticationType: __expectString,
    browserSettingsArn: __expectString,
    browserType: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerManagedKey: __expectString,
    dataProtectionSettingsArn: __expectString,
    displayName: __expectString,
    instanceType: __expectString,
    ipAccessSettingsArn: __expectString,
    maxConcurrentSessions: __expectInt32,
    networkSettingsArn: __expectString,
    portalArn: __expectString,
    portalEndpoint: __expectString,
    portalStatus: __expectString,
    rendererType: __expectString,
    sessionLoggerArn: __expectString,
    statusReason: __expectString,
    trustStoreArn: __expectString,
    userAccessLoggingSettingsArn: __expectString,
    userSettingsArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PortalList
 */
const de_PortalList = (output: any, context: __SerdeContext): PortalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PortalSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PortalSummary
 */
const de_PortalSummary = (output: any, context: __SerdeContext): PortalSummary => {
  return take(output, {
    authenticationType: __expectString,
    browserSettingsArn: __expectString,
    browserType: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataProtectionSettingsArn: __expectString,
    displayName: __expectString,
    instanceType: __expectString,
    ipAccessSettingsArn: __expectString,
    maxConcurrentSessions: __expectInt32,
    networkSettingsArn: __expectString,
    portalArn: __expectString,
    portalEndpoint: __expectString,
    portalStatus: __expectString,
    rendererType: __expectString,
    sessionLoggerArn: __expectString,
    trustStoreArn: __expectString,
    userAccessLoggingSettingsArn: __expectString,
    userSettingsArn: __expectString,
  }) as any;
};

// de_RedactionPlaceHolder omitted.

// de_S3LogConfiguration omitted.

// de_SecurityGroupIdList omitted.

/**
 * deserializeAws_restJson1Session
 */
const de_Session = (output: any, context: __SerdeContext): Session => {
  return take(output, {
    clientIpAddresses: _json,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    portalArn: __expectString,
    sessionId: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    username: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionLogger
 */
const de_SessionLogger = (output: any, context: __SerdeContext): SessionLogger => {
  return take(output, {
    additionalEncryptionContext: _json,
    associatedPortalArns: _json,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerManagedKey: __expectString,
    displayName: __expectString,
    eventFilter: (_: any) => _json(__expectUnion(_)),
    logConfiguration: _json,
    sessionLoggerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionLoggerList
 */
const de_SessionLoggerList = (output: any, context: __SerdeContext): SessionLoggerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionLoggerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SessionLoggerSummary
 */
const de_SessionLoggerSummary = (output: any, context: __SerdeContext): SessionLoggerSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    logConfiguration: _json,
    sessionLoggerArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    portalArn: __expectString,
    sessionId: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    username: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionSummaryList
 */
const de_SessionSummaryList = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

// de_SubnetIdList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_ToolbarConfiguration omitted.

// de_TrustStore omitted.

// de_TrustStoreSummary omitted.

// de_TrustStoreSummaryList omitted.

// de_UserAccessLoggingSettings omitted.

// de_UserAccessLoggingSettingsList omitted.

// de_UserAccessLoggingSettingsSummary omitted.

// de_UserSettings omitted.

// de_UserSettingsList omitted.

// de_UserSettingsSummary omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_Unit omitted.

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

const _bSA = "browserSettingsArn";
const _dPSA = "dataProtectionSettingsArn";
const _iASA = "ipAccessSettingsArn";
const _mR = "maxResults";
const _nSA = "networkSettingsArn";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _s = "status";
const _sB = "sortBy";
const _sI = "sessionId";
const _sLA = "sessionLoggerArn";
const _t = "thumbprint";
const _tK = "tagKeys";
const _tSA = "trustStoreArn";
const _u = "username";
const _uALSA = "userAccessLoggingSettingsArn";
const _uSA = "userSettingsArn";
