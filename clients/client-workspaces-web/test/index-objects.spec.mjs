import {
  AccessDeniedException,
  AssociateBrowserSettingsCommand,
  AssociateDataProtectionSettingsCommand,
  AssociateIpAccessSettingsCommand,
  AssociateNetworkSettingsCommand,
  AssociateSessionLoggerCommand,
  AssociateTrustStoreCommand,
  AssociateUserAccessLoggingSettingsCommand,
  AssociateUserSettingsCommand,
  AuthenticationType,
  BrowserType,
  Category,
  ColorTheme,
  ConflictException,
  CreateBrowserSettingsCommand,
  CreateDataProtectionSettingsCommand,
  CreateIdentityProviderCommand,
  CreateIpAccessSettingsCommand,
  CreateNetworkSettingsCommand,
  CreatePortalCommand,
  CreateSessionLoggerCommand,
  CreateTrustStoreCommand,
  CreateUserAccessLoggingSettingsCommand,
  CreateUserSettingsCommand,
  DeleteBrowserSettingsCommand,
  DeleteDataProtectionSettingsCommand,
  DeleteIdentityProviderCommand,
  DeleteIpAccessSettingsCommand,
  DeleteNetworkSettingsCommand,
  DeletePortalCommand,
  DeleteSessionLoggerCommand,
  DeleteTrustStoreCommand,
  DeleteUserAccessLoggingSettingsCommand,
  DeleteUserSettingsCommand,
  DisassociateBrowserSettingsCommand,
  DisassociateDataProtectionSettingsCommand,
  DisassociateIpAccessSettingsCommand,
  DisassociateNetworkSettingsCommand,
  DisassociateSessionLoggerCommand,
  DisassociateTrustStoreCommand,
  DisassociateUserAccessLoggingSettingsCommand,
  DisassociateUserSettingsCommand,
  EnabledType,
  Event,
  ExpireSessionCommand,
  FolderStructure,
  GetBrowserSettingsCommand,
  GetDataProtectionSettingsCommand,
  GetIdentityProviderCommand,
  GetIpAccessSettingsCommand,
  GetNetworkSettingsCommand,
  GetPortalCommand,
  GetPortalServiceProviderMetadataCommand,
  GetSessionCommand,
  GetSessionLoggerCommand,
  GetTrustStoreCertificateCommand,
  GetTrustStoreCommand,
  GetUserAccessLoggingSettingsCommand,
  GetUserSettingsCommand,
  IdentityProviderType,
  InternalServerException,
  ListBrowserSettingsCommand,
  ListDataProtectionSettingsCommand,
  ListIdentityProvidersCommand,
  ListIpAccessSettingsCommand,
  ListNetworkSettingsCommand,
  ListPortalsCommand,
  ListSessionLoggersCommand,
  ListSessionsCommand,
  ListTagsForResourceCommand,
  ListTrustStoreCertificatesCommand,
  ListTrustStoresCommand,
  ListUserAccessLoggingSettingsCommand,
  ListUserSettingsCommand,
  Locale,
  LogFileFormat,
  MaxDisplayResolution,
  MimeType,
  PortalStatus,
  RedactionPlaceHolderType,
  RendererType,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SessionSortBy,
  SessionStatus,
  TagResourceCommand,
  ThrottlingException,
  TooManyTagsException,
  ToolbarItem,
  ToolbarType,
  UntagResourceCommand,
  UpdateBrowserSettingsCommand,
  UpdateDataProtectionSettingsCommand,
  UpdateIdentityProviderCommand,
  UpdateIpAccessSettingsCommand,
  UpdateNetworkSettingsCommand,
  UpdatePortalCommand,
  UpdateSessionLoggerCommand,
  UpdateTrustStoreCommand,
  UpdateUserAccessLoggingSettingsCommand,
  UpdateUserSettingsCommand,
  ValidationException,
  ValidationExceptionReason,
  VisualMode,
  WorkSpacesWeb,
  WorkSpacesWebClient,
  WorkSpacesWebServiceException,
  _InstanceType,
  paginateListBrowserSettings,
  paginateListDataProtectionSettings,
  paginateListIdentityProviders,
  paginateListIpAccessSettings,
  paginateListNetworkSettings,
  paginateListPortals,
  paginateListSessionLoggers,
  paginateListSessions,
  paginateListTrustStoreCertificates,
  paginateListTrustStores,
  paginateListUserAccessLoggingSettings,
  paginateListUserSettings,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkSpacesWebClient === "function");
assert(typeof WorkSpacesWeb === "function");
// commands
assert(typeof AssociateBrowserSettingsCommand === "function");
assert(typeof AssociateDataProtectionSettingsCommand === "function");
assert(typeof AssociateIpAccessSettingsCommand === "function");
assert(typeof AssociateNetworkSettingsCommand === "function");
assert(typeof AssociateSessionLoggerCommand === "function");
assert(typeof AssociateTrustStoreCommand === "function");
assert(typeof AssociateUserAccessLoggingSettingsCommand === "function");
assert(typeof AssociateUserSettingsCommand === "function");
assert(typeof CreateBrowserSettingsCommand === "function");
assert(typeof CreateDataProtectionSettingsCommand === "function");
assert(typeof CreateIdentityProviderCommand === "function");
assert(typeof CreateIpAccessSettingsCommand === "function");
assert(typeof CreateNetworkSettingsCommand === "function");
assert(typeof CreatePortalCommand === "function");
assert(typeof CreateSessionLoggerCommand === "function");
assert(typeof CreateTrustStoreCommand === "function");
assert(typeof CreateUserAccessLoggingSettingsCommand === "function");
assert(typeof CreateUserSettingsCommand === "function");
assert(typeof DeleteBrowserSettingsCommand === "function");
assert(typeof DeleteDataProtectionSettingsCommand === "function");
assert(typeof DeleteIdentityProviderCommand === "function");
assert(typeof DeleteIpAccessSettingsCommand === "function");
assert(typeof DeleteNetworkSettingsCommand === "function");
assert(typeof DeletePortalCommand === "function");
assert(typeof DeleteSessionLoggerCommand === "function");
assert(typeof DeleteTrustStoreCommand === "function");
assert(typeof DeleteUserAccessLoggingSettingsCommand === "function");
assert(typeof DeleteUserSettingsCommand === "function");
assert(typeof DisassociateBrowserSettingsCommand === "function");
assert(typeof DisassociateDataProtectionSettingsCommand === "function");
assert(typeof DisassociateIpAccessSettingsCommand === "function");
assert(typeof DisassociateNetworkSettingsCommand === "function");
assert(typeof DisassociateSessionLoggerCommand === "function");
assert(typeof DisassociateTrustStoreCommand === "function");
assert(typeof DisassociateUserAccessLoggingSettingsCommand === "function");
assert(typeof DisassociateUserSettingsCommand === "function");
assert(typeof ExpireSessionCommand === "function");
assert(typeof GetBrowserSettingsCommand === "function");
assert(typeof GetDataProtectionSettingsCommand === "function");
assert(typeof GetIdentityProviderCommand === "function");
assert(typeof GetIpAccessSettingsCommand === "function");
assert(typeof GetNetworkSettingsCommand === "function");
assert(typeof GetPortalCommand === "function");
assert(typeof GetPortalServiceProviderMetadataCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSessionLoggerCommand === "function");
assert(typeof GetTrustStoreCommand === "function");
assert(typeof GetTrustStoreCertificateCommand === "function");
assert(typeof GetUserAccessLoggingSettingsCommand === "function");
assert(typeof GetUserSettingsCommand === "function");
assert(typeof ListBrowserSettingsCommand === "function");
assert(typeof ListDataProtectionSettingsCommand === "function");
assert(typeof ListIdentityProvidersCommand === "function");
assert(typeof ListIpAccessSettingsCommand === "function");
assert(typeof ListNetworkSettingsCommand === "function");
assert(typeof ListPortalsCommand === "function");
assert(typeof ListSessionLoggersCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTrustStoreCertificatesCommand === "function");
assert(typeof ListTrustStoresCommand === "function");
assert(typeof ListUserAccessLoggingSettingsCommand === "function");
assert(typeof ListUserSettingsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBrowserSettingsCommand === "function");
assert(typeof UpdateDataProtectionSettingsCommand === "function");
assert(typeof UpdateIdentityProviderCommand === "function");
assert(typeof UpdateIpAccessSettingsCommand === "function");
assert(typeof UpdateNetworkSettingsCommand === "function");
assert(typeof UpdatePortalCommand === "function");
assert(typeof UpdateSessionLoggerCommand === "function");
assert(typeof UpdateTrustStoreCommand === "function");
assert(typeof UpdateUserAccessLoggingSettingsCommand === "function");
assert(typeof UpdateUserSettingsCommand === "function");
// enums
assert(typeof AuthenticationType === "object");
assert(typeof BrowserType === "object");
assert(typeof Category === "object");
assert(typeof ColorTheme === "object");
assert(typeof EnabledType === "object");
assert(typeof Event === "object");
assert(typeof FolderStructure === "object");
assert(typeof IdentityProviderType === "object");
assert(typeof _InstanceType === "object");
assert(typeof Locale === "object");
assert(typeof LogFileFormat === "object");
assert(typeof MaxDisplayResolution === "object");
assert(typeof MimeType === "object");
assert(typeof PortalStatus === "object");
assert(typeof RedactionPlaceHolderType === "object");
assert(typeof RendererType === "object");
assert(typeof SessionSortBy === "object");
assert(typeof SessionStatus === "object");
assert(typeof ToolbarItem === "object");
assert(typeof ToolbarType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VisualMode === "object");
// errors
assert(AccessDeniedException.prototype instanceof WorkSpacesWebServiceException);
assert(ConflictException.prototype instanceof WorkSpacesWebServiceException);
assert(InternalServerException.prototype instanceof WorkSpacesWebServiceException);
assert(ResourceNotFoundException.prototype instanceof WorkSpacesWebServiceException);
assert(ServiceQuotaExceededException.prototype instanceof WorkSpacesWebServiceException);
assert(ThrottlingException.prototype instanceof WorkSpacesWebServiceException);
assert(TooManyTagsException.prototype instanceof WorkSpacesWebServiceException);
assert(ValidationException.prototype instanceof WorkSpacesWebServiceException);
assert(WorkSpacesWebServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBrowserSettings === "function");
assert(typeof paginateListDataProtectionSettings === "function");
assert(typeof paginateListIdentityProviders === "function");
assert(typeof paginateListIpAccessSettings === "function");
assert(typeof paginateListNetworkSettings === "function");
assert(typeof paginateListPortals === "function");
assert(typeof paginateListSessionLoggers === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListTrustStoreCertificates === "function");
assert(typeof paginateListTrustStores === "function");
assert(typeof paginateListUserAccessLoggingSettings === "function");
assert(typeof paginateListUserSettings === "function");
console.log(`WorkSpacesWeb index test passed.`);
