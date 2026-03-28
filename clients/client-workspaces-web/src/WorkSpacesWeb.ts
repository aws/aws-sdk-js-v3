// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateBrowserSettingsCommandInput,
  type AssociateBrowserSettingsCommandOutput,
  AssociateBrowserSettingsCommand,
} from "./commands/AssociateBrowserSettingsCommand";
import {
  type AssociateDataProtectionSettingsCommandInput,
  type AssociateDataProtectionSettingsCommandOutput,
  AssociateDataProtectionSettingsCommand,
} from "./commands/AssociateDataProtectionSettingsCommand";
import {
  type AssociateIpAccessSettingsCommandInput,
  type AssociateIpAccessSettingsCommandOutput,
  AssociateIpAccessSettingsCommand,
} from "./commands/AssociateIpAccessSettingsCommand";
import {
  type AssociateNetworkSettingsCommandInput,
  type AssociateNetworkSettingsCommandOutput,
  AssociateNetworkSettingsCommand,
} from "./commands/AssociateNetworkSettingsCommand";
import {
  type AssociateSessionLoggerCommandInput,
  type AssociateSessionLoggerCommandOutput,
  AssociateSessionLoggerCommand,
} from "./commands/AssociateSessionLoggerCommand";
import {
  type AssociateTrustStoreCommandInput,
  type AssociateTrustStoreCommandOutput,
  AssociateTrustStoreCommand,
} from "./commands/AssociateTrustStoreCommand";
import {
  type AssociateUserAccessLoggingSettingsCommandInput,
  type AssociateUserAccessLoggingSettingsCommandOutput,
  AssociateUserAccessLoggingSettingsCommand,
} from "./commands/AssociateUserAccessLoggingSettingsCommand";
import {
  type AssociateUserSettingsCommandInput,
  type AssociateUserSettingsCommandOutput,
  AssociateUserSettingsCommand,
} from "./commands/AssociateUserSettingsCommand";
import {
  type CreateBrowserSettingsCommandInput,
  type CreateBrowserSettingsCommandOutput,
  CreateBrowserSettingsCommand,
} from "./commands/CreateBrowserSettingsCommand";
import {
  type CreateDataProtectionSettingsCommandInput,
  type CreateDataProtectionSettingsCommandOutput,
  CreateDataProtectionSettingsCommand,
} from "./commands/CreateDataProtectionSettingsCommand";
import {
  type CreateIdentityProviderCommandInput,
  type CreateIdentityProviderCommandOutput,
  CreateIdentityProviderCommand,
} from "./commands/CreateIdentityProviderCommand";
import {
  type CreateIpAccessSettingsCommandInput,
  type CreateIpAccessSettingsCommandOutput,
  CreateIpAccessSettingsCommand,
} from "./commands/CreateIpAccessSettingsCommand";
import {
  type CreateNetworkSettingsCommandInput,
  type CreateNetworkSettingsCommandOutput,
  CreateNetworkSettingsCommand,
} from "./commands/CreateNetworkSettingsCommand";
import {
  type CreatePortalCommandInput,
  type CreatePortalCommandOutput,
  CreatePortalCommand,
} from "./commands/CreatePortalCommand";
import {
  type CreateSessionLoggerCommandInput,
  type CreateSessionLoggerCommandOutput,
  CreateSessionLoggerCommand,
} from "./commands/CreateSessionLoggerCommand";
import {
  type CreateTrustStoreCommandInput,
  type CreateTrustStoreCommandOutput,
  CreateTrustStoreCommand,
} from "./commands/CreateTrustStoreCommand";
import {
  type CreateUserAccessLoggingSettingsCommandInput,
  type CreateUserAccessLoggingSettingsCommandOutput,
  CreateUserAccessLoggingSettingsCommand,
} from "./commands/CreateUserAccessLoggingSettingsCommand";
import {
  type CreateUserSettingsCommandInput,
  type CreateUserSettingsCommandOutput,
  CreateUserSettingsCommand,
} from "./commands/CreateUserSettingsCommand";
import {
  type DeleteBrowserSettingsCommandInput,
  type DeleteBrowserSettingsCommandOutput,
  DeleteBrowserSettingsCommand,
} from "./commands/DeleteBrowserSettingsCommand";
import {
  type DeleteDataProtectionSettingsCommandInput,
  type DeleteDataProtectionSettingsCommandOutput,
  DeleteDataProtectionSettingsCommand,
} from "./commands/DeleteDataProtectionSettingsCommand";
import {
  type DeleteIdentityProviderCommandInput,
  type DeleteIdentityProviderCommandOutput,
  DeleteIdentityProviderCommand,
} from "./commands/DeleteIdentityProviderCommand";
import {
  type DeleteIpAccessSettingsCommandInput,
  type DeleteIpAccessSettingsCommandOutput,
  DeleteIpAccessSettingsCommand,
} from "./commands/DeleteIpAccessSettingsCommand";
import {
  type DeleteNetworkSettingsCommandInput,
  type DeleteNetworkSettingsCommandOutput,
  DeleteNetworkSettingsCommand,
} from "./commands/DeleteNetworkSettingsCommand";
import {
  type DeletePortalCommandInput,
  type DeletePortalCommandOutput,
  DeletePortalCommand,
} from "./commands/DeletePortalCommand";
import {
  type DeleteSessionLoggerCommandInput,
  type DeleteSessionLoggerCommandOutput,
  DeleteSessionLoggerCommand,
} from "./commands/DeleteSessionLoggerCommand";
import {
  type DeleteTrustStoreCommandInput,
  type DeleteTrustStoreCommandOutput,
  DeleteTrustStoreCommand,
} from "./commands/DeleteTrustStoreCommand";
import {
  type DeleteUserAccessLoggingSettingsCommandInput,
  type DeleteUserAccessLoggingSettingsCommandOutput,
  DeleteUserAccessLoggingSettingsCommand,
} from "./commands/DeleteUserAccessLoggingSettingsCommand";
import {
  type DeleteUserSettingsCommandInput,
  type DeleteUserSettingsCommandOutput,
  DeleteUserSettingsCommand,
} from "./commands/DeleteUserSettingsCommand";
import {
  type DisassociateBrowserSettingsCommandInput,
  type DisassociateBrowserSettingsCommandOutput,
  DisassociateBrowserSettingsCommand,
} from "./commands/DisassociateBrowserSettingsCommand";
import {
  type DisassociateDataProtectionSettingsCommandInput,
  type DisassociateDataProtectionSettingsCommandOutput,
  DisassociateDataProtectionSettingsCommand,
} from "./commands/DisassociateDataProtectionSettingsCommand";
import {
  type DisassociateIpAccessSettingsCommandInput,
  type DisassociateIpAccessSettingsCommandOutput,
  DisassociateIpAccessSettingsCommand,
} from "./commands/DisassociateIpAccessSettingsCommand";
import {
  type DisassociateNetworkSettingsCommandInput,
  type DisassociateNetworkSettingsCommandOutput,
  DisassociateNetworkSettingsCommand,
} from "./commands/DisassociateNetworkSettingsCommand";
import {
  type DisassociateSessionLoggerCommandInput,
  type DisassociateSessionLoggerCommandOutput,
  DisassociateSessionLoggerCommand,
} from "./commands/DisassociateSessionLoggerCommand";
import {
  type DisassociateTrustStoreCommandInput,
  type DisassociateTrustStoreCommandOutput,
  DisassociateTrustStoreCommand,
} from "./commands/DisassociateTrustStoreCommand";
import {
  type DisassociateUserAccessLoggingSettingsCommandInput,
  type DisassociateUserAccessLoggingSettingsCommandOutput,
  DisassociateUserAccessLoggingSettingsCommand,
} from "./commands/DisassociateUserAccessLoggingSettingsCommand";
import {
  type DisassociateUserSettingsCommandInput,
  type DisassociateUserSettingsCommandOutput,
  DisassociateUserSettingsCommand,
} from "./commands/DisassociateUserSettingsCommand";
import {
  type ExpireSessionCommandInput,
  type ExpireSessionCommandOutput,
  ExpireSessionCommand,
} from "./commands/ExpireSessionCommand";
import {
  type GetBrowserSettingsCommandInput,
  type GetBrowserSettingsCommandOutput,
  GetBrowserSettingsCommand,
} from "./commands/GetBrowserSettingsCommand";
import {
  type GetDataProtectionSettingsCommandInput,
  type GetDataProtectionSettingsCommandOutput,
  GetDataProtectionSettingsCommand,
} from "./commands/GetDataProtectionSettingsCommand";
import {
  type GetIdentityProviderCommandInput,
  type GetIdentityProviderCommandOutput,
  GetIdentityProviderCommand,
} from "./commands/GetIdentityProviderCommand";
import {
  type GetIpAccessSettingsCommandInput,
  type GetIpAccessSettingsCommandOutput,
  GetIpAccessSettingsCommand,
} from "./commands/GetIpAccessSettingsCommand";
import {
  type GetNetworkSettingsCommandInput,
  type GetNetworkSettingsCommandOutput,
  GetNetworkSettingsCommand,
} from "./commands/GetNetworkSettingsCommand";
import { type GetPortalCommandInput, type GetPortalCommandOutput, GetPortalCommand } from "./commands/GetPortalCommand";
import {
  type GetPortalServiceProviderMetadataCommandInput,
  type GetPortalServiceProviderMetadataCommandOutput,
  GetPortalServiceProviderMetadataCommand,
} from "./commands/GetPortalServiceProviderMetadataCommand";
import {
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type GetSessionLoggerCommandInput,
  type GetSessionLoggerCommandOutput,
  GetSessionLoggerCommand,
} from "./commands/GetSessionLoggerCommand";
import {
  type GetTrustStoreCertificateCommandInput,
  type GetTrustStoreCertificateCommandOutput,
  GetTrustStoreCertificateCommand,
} from "./commands/GetTrustStoreCertificateCommand";
import {
  type GetTrustStoreCommandInput,
  type GetTrustStoreCommandOutput,
  GetTrustStoreCommand,
} from "./commands/GetTrustStoreCommand";
import {
  type GetUserAccessLoggingSettingsCommandInput,
  type GetUserAccessLoggingSettingsCommandOutput,
  GetUserAccessLoggingSettingsCommand,
} from "./commands/GetUserAccessLoggingSettingsCommand";
import {
  type GetUserSettingsCommandInput,
  type GetUserSettingsCommandOutput,
  GetUserSettingsCommand,
} from "./commands/GetUserSettingsCommand";
import {
  type ListBrowserSettingsCommandInput,
  type ListBrowserSettingsCommandOutput,
  ListBrowserSettingsCommand,
} from "./commands/ListBrowserSettingsCommand";
import {
  type ListDataProtectionSettingsCommandInput,
  type ListDataProtectionSettingsCommandOutput,
  ListDataProtectionSettingsCommand,
} from "./commands/ListDataProtectionSettingsCommand";
import {
  type ListIdentityProvidersCommandInput,
  type ListIdentityProvidersCommandOutput,
  ListIdentityProvidersCommand,
} from "./commands/ListIdentityProvidersCommand";
import {
  type ListIpAccessSettingsCommandInput,
  type ListIpAccessSettingsCommandOutput,
  ListIpAccessSettingsCommand,
} from "./commands/ListIpAccessSettingsCommand";
import {
  type ListNetworkSettingsCommandInput,
  type ListNetworkSettingsCommandOutput,
  ListNetworkSettingsCommand,
} from "./commands/ListNetworkSettingsCommand";
import {
  type ListPortalsCommandInput,
  type ListPortalsCommandOutput,
  ListPortalsCommand,
} from "./commands/ListPortalsCommand";
import {
  type ListSessionLoggersCommandInput,
  type ListSessionLoggersCommandOutput,
  ListSessionLoggersCommand,
} from "./commands/ListSessionLoggersCommand";
import {
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListSessionsCommand,
} from "./commands/ListSessionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTrustStoreCertificatesCommandInput,
  type ListTrustStoreCertificatesCommandOutput,
  ListTrustStoreCertificatesCommand,
} from "./commands/ListTrustStoreCertificatesCommand";
import {
  type ListTrustStoresCommandInput,
  type ListTrustStoresCommandOutput,
  ListTrustStoresCommand,
} from "./commands/ListTrustStoresCommand";
import {
  type ListUserAccessLoggingSettingsCommandInput,
  type ListUserAccessLoggingSettingsCommandOutput,
  ListUserAccessLoggingSettingsCommand,
} from "./commands/ListUserAccessLoggingSettingsCommand";
import {
  type ListUserSettingsCommandInput,
  type ListUserSettingsCommandOutput,
  ListUserSettingsCommand,
} from "./commands/ListUserSettingsCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBrowserSettingsCommandInput,
  type UpdateBrowserSettingsCommandOutput,
  UpdateBrowserSettingsCommand,
} from "./commands/UpdateBrowserSettingsCommand";
import {
  type UpdateDataProtectionSettingsCommandInput,
  type UpdateDataProtectionSettingsCommandOutput,
  UpdateDataProtectionSettingsCommand,
} from "./commands/UpdateDataProtectionSettingsCommand";
import {
  type UpdateIdentityProviderCommandInput,
  type UpdateIdentityProviderCommandOutput,
  UpdateIdentityProviderCommand,
} from "./commands/UpdateIdentityProviderCommand";
import {
  type UpdateIpAccessSettingsCommandInput,
  type UpdateIpAccessSettingsCommandOutput,
  UpdateIpAccessSettingsCommand,
} from "./commands/UpdateIpAccessSettingsCommand";
import {
  type UpdateNetworkSettingsCommandInput,
  type UpdateNetworkSettingsCommandOutput,
  UpdateNetworkSettingsCommand,
} from "./commands/UpdateNetworkSettingsCommand";
import {
  type UpdatePortalCommandInput,
  type UpdatePortalCommandOutput,
  UpdatePortalCommand,
} from "./commands/UpdatePortalCommand";
import {
  type UpdateSessionLoggerCommandInput,
  type UpdateSessionLoggerCommandOutput,
  UpdateSessionLoggerCommand,
} from "./commands/UpdateSessionLoggerCommand";
import {
  type UpdateTrustStoreCommandInput,
  type UpdateTrustStoreCommandOutput,
  UpdateTrustStoreCommand,
} from "./commands/UpdateTrustStoreCommand";
import {
  type UpdateUserAccessLoggingSettingsCommandInput,
  type UpdateUserAccessLoggingSettingsCommandOutput,
  UpdateUserAccessLoggingSettingsCommand,
} from "./commands/UpdateUserAccessLoggingSettingsCommand";
import {
  type UpdateUserSettingsCommandInput,
  type UpdateUserSettingsCommandOutput,
  UpdateUserSettingsCommand,
} from "./commands/UpdateUserSettingsCommand";
import { paginateListBrowserSettings } from "./pagination/ListBrowserSettingsPaginator";
import { paginateListDataProtectionSettings } from "./pagination/ListDataProtectionSettingsPaginator";
import { paginateListIdentityProviders } from "./pagination/ListIdentityProvidersPaginator";
import { paginateListIpAccessSettings } from "./pagination/ListIpAccessSettingsPaginator";
import { paginateListNetworkSettings } from "./pagination/ListNetworkSettingsPaginator";
import { paginateListPortals } from "./pagination/ListPortalsPaginator";
import { paginateListSessionLoggers } from "./pagination/ListSessionLoggersPaginator";
import { paginateListSessions } from "./pagination/ListSessionsPaginator";
import { paginateListTrustStoreCertificates } from "./pagination/ListTrustStoreCertificatesPaginator";
import { paginateListTrustStores } from "./pagination/ListTrustStoresPaginator";
import { paginateListUserAccessLoggingSettings } from "./pagination/ListUserAccessLoggingSettingsPaginator";
import { paginateListUserSettings } from "./pagination/ListUserSettingsPaginator";
import { WorkSpacesWebClient } from "./WorkSpacesWebClient";

const commands = {
  AssociateBrowserSettingsCommand,
  AssociateDataProtectionSettingsCommand,
  AssociateIpAccessSettingsCommand,
  AssociateNetworkSettingsCommand,
  AssociateSessionLoggerCommand,
  AssociateTrustStoreCommand,
  AssociateUserAccessLoggingSettingsCommand,
  AssociateUserSettingsCommand,
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
  ExpireSessionCommand,
  GetBrowserSettingsCommand,
  GetDataProtectionSettingsCommand,
  GetIdentityProviderCommand,
  GetIpAccessSettingsCommand,
  GetNetworkSettingsCommand,
  GetPortalCommand,
  GetPortalServiceProviderMetadataCommand,
  GetSessionCommand,
  GetSessionLoggerCommand,
  GetTrustStoreCommand,
  GetTrustStoreCertificateCommand,
  GetUserAccessLoggingSettingsCommand,
  GetUserSettingsCommand,
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
  TagResourceCommand,
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
};
const paginators = {
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
};

export interface WorkSpacesWeb {
  /**
   * @see {@link AssociateBrowserSettingsCommand}
   */
  associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBrowserSettingsCommandOutput>;
  associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    cb: (err: any, data?: AssociateBrowserSettingsCommandOutput) => void
  ): void;
  associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDataProtectionSettingsCommand}
   */
  associateDataProtectionSettings(
    args: AssociateDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDataProtectionSettingsCommandOutput>;
  associateDataProtectionSettings(
    args: AssociateDataProtectionSettingsCommandInput,
    cb: (err: any, data?: AssociateDataProtectionSettingsCommandOutput) => void
  ): void;
  associateDataProtectionSettings(
    args: AssociateDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateIpAccessSettingsCommand}
   */
  associateIpAccessSettings(
    args: AssociateIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIpAccessSettingsCommandOutput>;
  associateIpAccessSettings(
    args: AssociateIpAccessSettingsCommandInput,
    cb: (err: any, data?: AssociateIpAccessSettingsCommandOutput) => void
  ): void;
  associateIpAccessSettings(
    args: AssociateIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateNetworkSettingsCommand}
   */
  associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateNetworkSettingsCommandOutput>;
  associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    cb: (err: any, data?: AssociateNetworkSettingsCommandOutput) => void
  ): void;
  associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateSessionLoggerCommand}
   */
  associateSessionLogger(
    args: AssociateSessionLoggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSessionLoggerCommandOutput>;
  associateSessionLogger(
    args: AssociateSessionLoggerCommandInput,
    cb: (err: any, data?: AssociateSessionLoggerCommandOutput) => void
  ): void;
  associateSessionLogger(
    args: AssociateSessionLoggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSessionLoggerCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTrustStoreCommand}
   */
  associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrustStoreCommandOutput>;
  associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    cb: (err: any, data?: AssociateTrustStoreCommandOutput) => void
  ): void;
  associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateUserAccessLoggingSettingsCommand}
   */
  associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserAccessLoggingSettingsCommandOutput>;
  associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: AssociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateUserSettingsCommand}
   */
  associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserSettingsCommandOutput>;
  associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    cb: (err: any, data?: AssociateUserSettingsCommandOutput) => void
  ): void;
  associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrowserSettingsCommand}
   */
  createBrowserSettings(): Promise<CreateBrowserSettingsCommandOutput>;
  createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrowserSettingsCommandOutput>;
  createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    cb: (err: any, data?: CreateBrowserSettingsCommandOutput) => void
  ): void;
  createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataProtectionSettingsCommand}
   */
  createDataProtectionSettings(): Promise<CreateDataProtectionSettingsCommandOutput>;
  createDataProtectionSettings(
    args: CreateDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataProtectionSettingsCommandOutput>;
  createDataProtectionSettings(
    args: CreateDataProtectionSettingsCommandInput,
    cb: (err: any, data?: CreateDataProtectionSettingsCommandOutput) => void
  ): void;
  createDataProtectionSettings(
    args: CreateDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdentityProviderCommand}
   */
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdentityProviderCommandOutput>;
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpAccessSettingsCommand}
   */
  createIpAccessSettings(
    args: CreateIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpAccessSettingsCommandOutput>;
  createIpAccessSettings(
    args: CreateIpAccessSettingsCommandInput,
    cb: (err: any, data?: CreateIpAccessSettingsCommandOutput) => void
  ): void;
  createIpAccessSettings(
    args: CreateIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNetworkSettingsCommand}
   */
  createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkSettingsCommandOutput>;
  createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    cb: (err: any, data?: CreateNetworkSettingsCommandOutput) => void
  ): void;
  createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalCommand}
   */
  createPortal(): Promise<CreatePortalCommandOutput>;
  createPortal(
    args: CreatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortalCommandOutput>;
  createPortal(
    args: CreatePortalCommandInput,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;
  createPortal(
    args: CreatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionLoggerCommand}
   */
  createSessionLogger(
    args: CreateSessionLoggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSessionLoggerCommandOutput>;
  createSessionLogger(
    args: CreateSessionLoggerCommandInput,
    cb: (err: any, data?: CreateSessionLoggerCommandOutput) => void
  ): void;
  createSessionLogger(
    args: CreateSessionLoggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionLoggerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustStoreCommand}
   */
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustStoreCommandOutput>;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserAccessLoggingSettingsCommand}
   */
  createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserAccessLoggingSettingsCommandOutput>;
  createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: CreateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserSettingsCommand}
   */
  createUserSettings(
    args: CreateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserSettingsCommandOutput>;
  createUserSettings(
    args: CreateUserSettingsCommandInput,
    cb: (err: any, data?: CreateUserSettingsCommandOutput) => void
  ): void;
  createUserSettings(
    args: CreateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrowserSettingsCommand}
   */
  deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrowserSettingsCommandOutput>;
  deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    cb: (err: any, data?: DeleteBrowserSettingsCommandOutput) => void
  ): void;
  deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataProtectionSettingsCommand}
   */
  deleteDataProtectionSettings(
    args: DeleteDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataProtectionSettingsCommandOutput>;
  deleteDataProtectionSettings(
    args: DeleteDataProtectionSettingsCommandInput,
    cb: (err: any, data?: DeleteDataProtectionSettingsCommandOutput) => void
  ): void;
  deleteDataProtectionSettings(
    args: DeleteDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentityProviderCommand}
   */
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityProviderCommandOutput>;
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpAccessSettingsCommand}
   */
  deleteIpAccessSettings(
    args: DeleteIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpAccessSettingsCommandOutput>;
  deleteIpAccessSettings(
    args: DeleteIpAccessSettingsCommandInput,
    cb: (err: any, data?: DeleteIpAccessSettingsCommandOutput) => void
  ): void;
  deleteIpAccessSettings(
    args: DeleteIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNetworkSettingsCommand}
   */
  deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkSettingsCommandOutput>;
  deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    cb: (err: any, data?: DeleteNetworkSettingsCommandOutput) => void
  ): void;
  deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalCommand}
   */
  deletePortal(
    args: DeletePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalCommandOutput>;
  deletePortal(
    args: DeletePortalCommandInput,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;
  deletePortal(
    args: DeletePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSessionLoggerCommand}
   */
  deleteSessionLogger(
    args: DeleteSessionLoggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSessionLoggerCommandOutput>;
  deleteSessionLogger(
    args: DeleteSessionLoggerCommandInput,
    cb: (err: any, data?: DeleteSessionLoggerCommandOutput) => void
  ): void;
  deleteSessionLogger(
    args: DeleteSessionLoggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionLoggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustStoreCommandOutput>;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserAccessLoggingSettingsCommand}
   */
  deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserAccessLoggingSettingsCommandOutput>;
  deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: DeleteUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserSettingsCommand}
   */
  deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserSettingsCommandOutput>;
  deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    cb: (err: any, data?: DeleteUserSettingsCommandOutput) => void
  ): void;
  deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateBrowserSettingsCommand}
   */
  disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBrowserSettingsCommandOutput>;
  disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    cb: (err: any, data?: DisassociateBrowserSettingsCommandOutput) => void
  ): void;
  disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDataProtectionSettingsCommand}
   */
  disassociateDataProtectionSettings(
    args: DisassociateDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDataProtectionSettingsCommandOutput>;
  disassociateDataProtectionSettings(
    args: DisassociateDataProtectionSettingsCommandInput,
    cb: (err: any, data?: DisassociateDataProtectionSettingsCommandOutput) => void
  ): void;
  disassociateDataProtectionSettings(
    args: DisassociateDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateIpAccessSettingsCommand}
   */
  disassociateIpAccessSettings(
    args: DisassociateIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIpAccessSettingsCommandOutput>;
  disassociateIpAccessSettings(
    args: DisassociateIpAccessSettingsCommandInput,
    cb: (err: any, data?: DisassociateIpAccessSettingsCommandOutput) => void
  ): void;
  disassociateIpAccessSettings(
    args: DisassociateIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateNetworkSettingsCommand}
   */
  disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateNetworkSettingsCommandOutput>;
  disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    cb: (err: any, data?: DisassociateNetworkSettingsCommandOutput) => void
  ): void;
  disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateSessionLoggerCommand}
   */
  disassociateSessionLogger(
    args: DisassociateSessionLoggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSessionLoggerCommandOutput>;
  disassociateSessionLogger(
    args: DisassociateSessionLoggerCommandInput,
    cb: (err: any, data?: DisassociateSessionLoggerCommandOutput) => void
  ): void;
  disassociateSessionLogger(
    args: DisassociateSessionLoggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSessionLoggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTrustStoreCommand}
   */
  disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrustStoreCommandOutput>;
  disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    cb: (err: any, data?: DisassociateTrustStoreCommandOutput) => void
  ): void;
  disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateUserAccessLoggingSettingsCommand}
   */
  disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserAccessLoggingSettingsCommandOutput>;
  disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: DisassociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateUserSettingsCommand}
   */
  disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserSettingsCommandOutput>;
  disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    cb: (err: any, data?: DisassociateUserSettingsCommandOutput) => void
  ): void;
  disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExpireSessionCommand}
   */
  expireSession(
    args: ExpireSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExpireSessionCommandOutput>;
  expireSession(
    args: ExpireSessionCommandInput,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;
  expireSession(
    args: ExpireSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBrowserSettingsCommand}
   */
  getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBrowserSettingsCommandOutput>;
  getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    cb: (err: any, data?: GetBrowserSettingsCommandOutput) => void
  ): void;
  getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataProtectionSettingsCommand}
   */
  getDataProtectionSettings(
    args: GetDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataProtectionSettingsCommandOutput>;
  getDataProtectionSettings(
    args: GetDataProtectionSettingsCommandInput,
    cb: (err: any, data?: GetDataProtectionSettingsCommandOutput) => void
  ): void;
  getDataProtectionSettings(
    args: GetDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityProviderCommand}
   */
  getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityProviderCommandOutput>;
  getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    cb: (err: any, data?: GetIdentityProviderCommandOutput) => void
  ): void;
  getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIpAccessSettingsCommand}
   */
  getIpAccessSettings(
    args: GetIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIpAccessSettingsCommandOutput>;
  getIpAccessSettings(
    args: GetIpAccessSettingsCommandInput,
    cb: (err: any, data?: GetIpAccessSettingsCommandOutput) => void
  ): void;
  getIpAccessSettings(
    args: GetIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNetworkSettingsCommand}
   */
  getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkSettingsCommandOutput>;
  getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    cb: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): void;
  getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortalCommand}
   */
  getPortal(
    args: GetPortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortalCommandOutput>;
  getPortal(
    args: GetPortalCommandInput,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;
  getPortal(
    args: GetPortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPortalServiceProviderMetadataCommand}
   */
  getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortalServiceProviderMetadataCommandOutput>;
  getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    cb: (err: any, data?: GetPortalServiceProviderMetadataCommandOutput) => void
  ): void;
  getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalServiceProviderMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionLoggerCommand}
   */
  getSessionLogger(
    args: GetSessionLoggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionLoggerCommandOutput>;
  getSessionLogger(
    args: GetSessionLoggerCommandInput,
    cb: (err: any, data?: GetSessionLoggerCommandOutput) => void
  ): void;
  getSessionLogger(
    args: GetSessionLoggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionLoggerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreCommand}
   */
  getTrustStore(
    args: GetTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustStoreCommandOutput>;
  getTrustStore(
    args: GetTrustStoreCommandInput,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;
  getTrustStore(
    args: GetTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreCertificateCommand}
   */
  getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustStoreCertificateCommandOutput>;
  getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    cb: (err: any, data?: GetTrustStoreCertificateCommandOutput) => void
  ): void;
  getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserAccessLoggingSettingsCommand}
   */
  getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserAccessLoggingSettingsCommandOutput>;
  getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: GetUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserSettingsCommand}
   */
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserSettingsCommandOutput>;
  getUserSettings(
    args: GetUserSettingsCommandInput,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  getUserSettings(
    args: GetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrowserSettingsCommand}
   */
  listBrowserSettings(): Promise<ListBrowserSettingsCommandOutput>;
  listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrowserSettingsCommandOutput>;
  listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    cb: (err: any, data?: ListBrowserSettingsCommandOutput) => void
  ): void;
  listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataProtectionSettingsCommand}
   */
  listDataProtectionSettings(): Promise<ListDataProtectionSettingsCommandOutput>;
  listDataProtectionSettings(
    args: ListDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataProtectionSettingsCommandOutput>;
  listDataProtectionSettings(
    args: ListDataProtectionSettingsCommandInput,
    cb: (err: any, data?: ListDataProtectionSettingsCommandOutput) => void
  ): void;
  listDataProtectionSettings(
    args: ListDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityProvidersCommand}
   */
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIpAccessSettingsCommand}
   */
  listIpAccessSettings(): Promise<ListIpAccessSettingsCommandOutput>;
  listIpAccessSettings(
    args: ListIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIpAccessSettingsCommandOutput>;
  listIpAccessSettings(
    args: ListIpAccessSettingsCommandInput,
    cb: (err: any, data?: ListIpAccessSettingsCommandOutput) => void
  ): void;
  listIpAccessSettings(
    args: ListIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNetworkSettingsCommand}
   */
  listNetworkSettings(): Promise<ListNetworkSettingsCommandOutput>;
  listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkSettingsCommandOutput>;
  listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    cb: (err: any, data?: ListNetworkSettingsCommandOutput) => void
  ): void;
  listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortalsCommand}
   */
  listPortals(): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;
  listPortals(
    args: ListPortalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionLoggersCommand}
   */
  listSessionLoggers(): Promise<ListSessionLoggersCommandOutput>;
  listSessionLoggers(
    args: ListSessionLoggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionLoggersCommandOutput>;
  listSessionLoggers(
    args: ListSessionLoggersCommandInput,
    cb: (err: any, data?: ListSessionLoggersCommandOutput) => void
  ): void;
  listSessionLoggers(
    args: ListSessionLoggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionLoggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSessionsCommandOutput>;
  listSessions(
    args: ListSessionsCommandInput,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrustStoreCertificatesCommand}
   */
  listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustStoreCertificatesCommandOutput>;
  listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    cb: (err: any, data?: ListTrustStoreCertificatesCommandOutput) => void
  ): void;
  listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustStoreCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrustStoresCommand}
   */
  listTrustStores(): Promise<ListTrustStoresCommandOutput>;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustStoresCommandOutput>;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserAccessLoggingSettingsCommand}
   */
  listUserAccessLoggingSettings(): Promise<ListUserAccessLoggingSettingsCommandOutput>;
  listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserAccessLoggingSettingsCommandOutput>;
  listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: ListUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserSettingsCommand}
   */
  listUserSettings(): Promise<ListUserSettingsCommandOutput>;
  listUserSettings(
    args: ListUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserSettingsCommandOutput>;
  listUserSettings(
    args: ListUserSettingsCommandInput,
    cb: (err: any, data?: ListUserSettingsCommandOutput) => void
  ): void;
  listUserSettings(
    args: ListUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBrowserSettingsCommand}
   */
  updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrowserSettingsCommandOutput>;
  updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    cb: (err: any, data?: UpdateBrowserSettingsCommandOutput) => void
  ): void;
  updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrowserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataProtectionSettingsCommand}
   */
  updateDataProtectionSettings(
    args: UpdateDataProtectionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataProtectionSettingsCommandOutput>;
  updateDataProtectionSettings(
    args: UpdateDataProtectionSettingsCommandInput,
    cb: (err: any, data?: UpdateDataProtectionSettingsCommandOutput) => void
  ): void;
  updateDataProtectionSettings(
    args: UpdateDataProtectionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataProtectionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityProviderCommand}
   */
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderCommandOutput>;
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIpAccessSettingsCommand}
   */
  updateIpAccessSettings(
    args: UpdateIpAccessSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIpAccessSettingsCommandOutput>;
  updateIpAccessSettings(
    args: UpdateIpAccessSettingsCommandInput,
    cb: (err: any, data?: UpdateIpAccessSettingsCommandOutput) => void
  ): void;
  updateIpAccessSettings(
    args: UpdateIpAccessSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIpAccessSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNetworkSettingsCommand}
   */
  updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSettingsCommandOutput>;
  updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    cb: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): void;
  updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortalCommand}
   */
  updatePortal(
    args: UpdatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortalCommandOutput>;
  updatePortal(
    args: UpdatePortalCommandInput,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;
  updatePortal(
    args: UpdatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSessionLoggerCommand}
   */
  updateSessionLogger(
    args: UpdateSessionLoggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSessionLoggerCommandOutput>;
  updateSessionLogger(
    args: UpdateSessionLoggerCommandInput,
    cb: (err: any, data?: UpdateSessionLoggerCommandOutput) => void
  ): void;
  updateSessionLogger(
    args: UpdateSessionLoggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSessionLoggerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustStoreCommand}
   */
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustStoreCommandOutput>;
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserAccessLoggingSettingsCommand}
   */
  updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserAccessLoggingSettingsCommandOutput>;
  updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: UpdateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserAccessLoggingSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserSettingsCommand}
   */
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSettingsCommandOutput>;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrowserSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrowserSettingsCommandOutput}.
   */
  paginateListBrowserSettings(
    args?: ListBrowserSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrowserSettingsCommandOutput>;

  /**
   * @see {@link ListDataProtectionSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataProtectionSettingsCommandOutput}.
   */
  paginateListDataProtectionSettings(
    args?: ListDataProtectionSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataProtectionSettingsCommandOutput>;

  /**
   * @see {@link ListIdentityProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdentityProvidersCommandOutput}.
   */
  paginateListIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdentityProvidersCommandOutput>;

  /**
   * @see {@link ListIpAccessSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIpAccessSettingsCommandOutput}.
   */
  paginateListIpAccessSettings(
    args?: ListIpAccessSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIpAccessSettingsCommandOutput>;

  /**
   * @see {@link ListNetworkSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNetworkSettingsCommandOutput}.
   */
  paginateListNetworkSettings(
    args?: ListNetworkSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNetworkSettingsCommandOutput>;

  /**
   * @see {@link ListPortalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPortalsCommandOutput}.
   */
  paginateListPortals(
    args?: ListPortalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPortalsCommandOutput>;

  /**
   * @see {@link ListSessionLoggersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionLoggersCommandOutput}.
   */
  paginateListSessionLoggers(
    args?: ListSessionLoggersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionLoggersCommandOutput>;

  /**
   * @see {@link ListSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSessionsCommandOutput}.
   */
  paginateListSessions(
    args: ListSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSessionsCommandOutput>;

  /**
   * @see {@link ListTrustStoreCertificatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrustStoreCertificatesCommandOutput}.
   */
  paginateListTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrustStoreCertificatesCommandOutput>;

  /**
   * @see {@link ListTrustStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrustStoresCommandOutput}.
   */
  paginateListTrustStores(
    args?: ListTrustStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrustStoresCommandOutput>;

  /**
   * @see {@link ListUserAccessLoggingSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserAccessLoggingSettingsCommandOutput}.
   */
  paginateListUserAccessLoggingSettings(
    args?: ListUserAccessLoggingSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserAccessLoggingSettingsCommandOutput>;

  /**
   * @see {@link ListUserSettingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUserSettingsCommandOutput}.
   */
  paginateListUserSettings(
    args?: ListUserSettingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUserSettingsCommandOutput>;
}

/**
 * <p>Amazon WorkSpaces Secure Browser is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Secure Browser makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Secure Browser provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.</p>
 * @public
 */
export class WorkSpacesWeb extends WorkSpacesWebClient implements WorkSpacesWeb {}
createAggregatedClient(commands, WorkSpacesWeb, { paginators });
