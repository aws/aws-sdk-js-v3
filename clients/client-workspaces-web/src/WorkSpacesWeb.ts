// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateBrowserSettingsCommand,
  AssociateBrowserSettingsCommandInput,
  AssociateBrowserSettingsCommandOutput,
} from "./commands/AssociateBrowserSettingsCommand";
import {
  AssociateDataProtectionSettingsCommand,
  AssociateDataProtectionSettingsCommandInput,
  AssociateDataProtectionSettingsCommandOutput,
} from "./commands/AssociateDataProtectionSettingsCommand";
import {
  AssociateIpAccessSettingsCommand,
  AssociateIpAccessSettingsCommandInput,
  AssociateIpAccessSettingsCommandOutput,
} from "./commands/AssociateIpAccessSettingsCommand";
import {
  AssociateNetworkSettingsCommand,
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
} from "./commands/AssociateNetworkSettingsCommand";
import {
  AssociateSessionLoggerCommand,
  AssociateSessionLoggerCommandInput,
  AssociateSessionLoggerCommandOutput,
} from "./commands/AssociateSessionLoggerCommand";
import {
  AssociateTrustStoreCommand,
  AssociateTrustStoreCommandInput,
  AssociateTrustStoreCommandOutput,
} from "./commands/AssociateTrustStoreCommand";
import {
  AssociateUserAccessLoggingSettingsCommand,
  AssociateUserAccessLoggingSettingsCommandInput,
  AssociateUserAccessLoggingSettingsCommandOutput,
} from "./commands/AssociateUserAccessLoggingSettingsCommand";
import {
  AssociateUserSettingsCommand,
  AssociateUserSettingsCommandInput,
  AssociateUserSettingsCommandOutput,
} from "./commands/AssociateUserSettingsCommand";
import {
  CreateBrowserSettingsCommand,
  CreateBrowserSettingsCommandInput,
  CreateBrowserSettingsCommandOutput,
} from "./commands/CreateBrowserSettingsCommand";
import {
  CreateDataProtectionSettingsCommand,
  CreateDataProtectionSettingsCommandInput,
  CreateDataProtectionSettingsCommandOutput,
} from "./commands/CreateDataProtectionSettingsCommand";
import {
  CreateIdentityProviderCommand,
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
import {
  CreateIpAccessSettingsCommand,
  CreateIpAccessSettingsCommandInput,
  CreateIpAccessSettingsCommandOutput,
} from "./commands/CreateIpAccessSettingsCommand";
import {
  CreateNetworkSettingsCommand,
  CreateNetworkSettingsCommandInput,
  CreateNetworkSettingsCommandOutput,
} from "./commands/CreateNetworkSettingsCommand";
import {
  CreatePortalCommand,
  CreatePortalCommandInput,
  CreatePortalCommandOutput,
} from "./commands/CreatePortalCommand";
import {
  CreateSessionLoggerCommand,
  CreateSessionLoggerCommandInput,
  CreateSessionLoggerCommandOutput,
} from "./commands/CreateSessionLoggerCommand";
import {
  CreateTrustStoreCommand,
  CreateTrustStoreCommandInput,
  CreateTrustStoreCommandOutput,
} from "./commands/CreateTrustStoreCommand";
import {
  CreateUserAccessLoggingSettingsCommand,
  CreateUserAccessLoggingSettingsCommandInput,
  CreateUserAccessLoggingSettingsCommandOutput,
} from "./commands/CreateUserAccessLoggingSettingsCommand";
import {
  CreateUserSettingsCommand,
  CreateUserSettingsCommandInput,
  CreateUserSettingsCommandOutput,
} from "./commands/CreateUserSettingsCommand";
import {
  DeleteBrowserSettingsCommand,
  DeleteBrowserSettingsCommandInput,
  DeleteBrowserSettingsCommandOutput,
} from "./commands/DeleteBrowserSettingsCommand";
import {
  DeleteDataProtectionSettingsCommand,
  DeleteDataProtectionSettingsCommandInput,
  DeleteDataProtectionSettingsCommandOutput,
} from "./commands/DeleteDataProtectionSettingsCommand";
import {
  DeleteIdentityProviderCommand,
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
import {
  DeleteIpAccessSettingsCommand,
  DeleteIpAccessSettingsCommandInput,
  DeleteIpAccessSettingsCommandOutput,
} from "./commands/DeleteIpAccessSettingsCommand";
import {
  DeleteNetworkSettingsCommand,
  DeleteNetworkSettingsCommandInput,
  DeleteNetworkSettingsCommandOutput,
} from "./commands/DeleteNetworkSettingsCommand";
import {
  DeletePortalCommand,
  DeletePortalCommandInput,
  DeletePortalCommandOutput,
} from "./commands/DeletePortalCommand";
import {
  DeleteSessionLoggerCommand,
  DeleteSessionLoggerCommandInput,
  DeleteSessionLoggerCommandOutput,
} from "./commands/DeleteSessionLoggerCommand";
import {
  DeleteTrustStoreCommand,
  DeleteTrustStoreCommandInput,
  DeleteTrustStoreCommandOutput,
} from "./commands/DeleteTrustStoreCommand";
import {
  DeleteUserAccessLoggingSettingsCommand,
  DeleteUserAccessLoggingSettingsCommandInput,
  DeleteUserAccessLoggingSettingsCommandOutput,
} from "./commands/DeleteUserAccessLoggingSettingsCommand";
import {
  DeleteUserSettingsCommand,
  DeleteUserSettingsCommandInput,
  DeleteUserSettingsCommandOutput,
} from "./commands/DeleteUserSettingsCommand";
import {
  DisassociateBrowserSettingsCommand,
  DisassociateBrowserSettingsCommandInput,
  DisassociateBrowserSettingsCommandOutput,
} from "./commands/DisassociateBrowserSettingsCommand";
import {
  DisassociateDataProtectionSettingsCommand,
  DisassociateDataProtectionSettingsCommandInput,
  DisassociateDataProtectionSettingsCommandOutput,
} from "./commands/DisassociateDataProtectionSettingsCommand";
import {
  DisassociateIpAccessSettingsCommand,
  DisassociateIpAccessSettingsCommandInput,
  DisassociateIpAccessSettingsCommandOutput,
} from "./commands/DisassociateIpAccessSettingsCommand";
import {
  DisassociateNetworkSettingsCommand,
  DisassociateNetworkSettingsCommandInput,
  DisassociateNetworkSettingsCommandOutput,
} from "./commands/DisassociateNetworkSettingsCommand";
import {
  DisassociateSessionLoggerCommand,
  DisassociateSessionLoggerCommandInput,
  DisassociateSessionLoggerCommandOutput,
} from "./commands/DisassociateSessionLoggerCommand";
import {
  DisassociateTrustStoreCommand,
  DisassociateTrustStoreCommandInput,
  DisassociateTrustStoreCommandOutput,
} from "./commands/DisassociateTrustStoreCommand";
import {
  DisassociateUserAccessLoggingSettingsCommand,
  DisassociateUserAccessLoggingSettingsCommandInput,
  DisassociateUserAccessLoggingSettingsCommandOutput,
} from "./commands/DisassociateUserAccessLoggingSettingsCommand";
import {
  DisassociateUserSettingsCommand,
  DisassociateUserSettingsCommandInput,
  DisassociateUserSettingsCommandOutput,
} from "./commands/DisassociateUserSettingsCommand";
import {
  ExpireSessionCommand,
  ExpireSessionCommandInput,
  ExpireSessionCommandOutput,
} from "./commands/ExpireSessionCommand";
import {
  GetBrowserSettingsCommand,
  GetBrowserSettingsCommandInput,
  GetBrowserSettingsCommandOutput,
} from "./commands/GetBrowserSettingsCommand";
import {
  GetDataProtectionSettingsCommand,
  GetDataProtectionSettingsCommandInput,
  GetDataProtectionSettingsCommandOutput,
} from "./commands/GetDataProtectionSettingsCommand";
import {
  GetIdentityProviderCommand,
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
} from "./commands/GetIdentityProviderCommand";
import {
  GetIpAccessSettingsCommand,
  GetIpAccessSettingsCommandInput,
  GetIpAccessSettingsCommandOutput,
} from "./commands/GetIpAccessSettingsCommand";
import {
  GetNetworkSettingsCommand,
  GetNetworkSettingsCommandInput,
  GetNetworkSettingsCommandOutput,
} from "./commands/GetNetworkSettingsCommand";
import { GetPortalCommand, GetPortalCommandInput, GetPortalCommandOutput } from "./commands/GetPortalCommand";
import {
  GetPortalServiceProviderMetadataCommand,
  GetPortalServiceProviderMetadataCommandInput,
  GetPortalServiceProviderMetadataCommandOutput,
} from "./commands/GetPortalServiceProviderMetadataCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  GetSessionLoggerCommand,
  GetSessionLoggerCommandInput,
  GetSessionLoggerCommandOutput,
} from "./commands/GetSessionLoggerCommand";
import {
  GetTrustStoreCertificateCommand,
  GetTrustStoreCertificateCommandInput,
  GetTrustStoreCertificateCommandOutput,
} from "./commands/GetTrustStoreCertificateCommand";
import {
  GetTrustStoreCommand,
  GetTrustStoreCommandInput,
  GetTrustStoreCommandOutput,
} from "./commands/GetTrustStoreCommand";
import {
  GetUserAccessLoggingSettingsCommand,
  GetUserAccessLoggingSettingsCommandInput,
  GetUserAccessLoggingSettingsCommandOutput,
} from "./commands/GetUserAccessLoggingSettingsCommand";
import {
  GetUserSettingsCommand,
  GetUserSettingsCommandInput,
  GetUserSettingsCommandOutput,
} from "./commands/GetUserSettingsCommand";
import {
  ListBrowserSettingsCommand,
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput,
} from "./commands/ListBrowserSettingsCommand";
import {
  ListDataProtectionSettingsCommand,
  ListDataProtectionSettingsCommandInput,
  ListDataProtectionSettingsCommandOutput,
} from "./commands/ListDataProtectionSettingsCommand";
import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListIpAccessSettingsCommand,
  ListIpAccessSettingsCommandInput,
  ListIpAccessSettingsCommandOutput,
} from "./commands/ListIpAccessSettingsCommand";
import {
  ListNetworkSettingsCommand,
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "./commands/ListNetworkSettingsCommand";
import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import {
  ListSessionLoggersCommand,
  ListSessionLoggersCommandInput,
  ListSessionLoggersCommandOutput,
} from "./commands/ListSessionLoggersCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustStoreCertificatesCommand,
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
} from "./commands/ListTrustStoreCertificatesCommand";
import {
  ListTrustStoresCommand,
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput,
} from "./commands/ListTrustStoresCommand";
import {
  ListUserAccessLoggingSettingsCommand,
  ListUserAccessLoggingSettingsCommandInput,
  ListUserAccessLoggingSettingsCommandOutput,
} from "./commands/ListUserAccessLoggingSettingsCommand";
import {
  ListUserSettingsCommand,
  ListUserSettingsCommandInput,
  ListUserSettingsCommandOutput,
} from "./commands/ListUserSettingsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBrowserSettingsCommand,
  UpdateBrowserSettingsCommandInput,
  UpdateBrowserSettingsCommandOutput,
} from "./commands/UpdateBrowserSettingsCommand";
import {
  UpdateDataProtectionSettingsCommand,
  UpdateDataProtectionSettingsCommandInput,
  UpdateDataProtectionSettingsCommandOutput,
} from "./commands/UpdateDataProtectionSettingsCommand";
import {
  UpdateIdentityProviderCommand,
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
import {
  UpdateIpAccessSettingsCommand,
  UpdateIpAccessSettingsCommandInput,
  UpdateIpAccessSettingsCommandOutput,
} from "./commands/UpdateIpAccessSettingsCommand";
import {
  UpdateNetworkSettingsCommand,
  UpdateNetworkSettingsCommandInput,
  UpdateNetworkSettingsCommandOutput,
} from "./commands/UpdateNetworkSettingsCommand";
import {
  UpdatePortalCommand,
  UpdatePortalCommandInput,
  UpdatePortalCommandOutput,
} from "./commands/UpdatePortalCommand";
import {
  UpdateSessionLoggerCommand,
  UpdateSessionLoggerCommandInput,
  UpdateSessionLoggerCommandOutput,
} from "./commands/UpdateSessionLoggerCommand";
import {
  UpdateTrustStoreCommand,
  UpdateTrustStoreCommandInput,
  UpdateTrustStoreCommandOutput,
} from "./commands/UpdateTrustStoreCommand";
import {
  UpdateUserAccessLoggingSettingsCommand,
  UpdateUserAccessLoggingSettingsCommandInput,
  UpdateUserAccessLoggingSettingsCommandOutput,
} from "./commands/UpdateUserAccessLoggingSettingsCommand";
import {
  UpdateUserSettingsCommand,
  UpdateUserSettingsCommandInput,
  UpdateUserSettingsCommandOutput,
} from "./commands/UpdateUserSettingsCommand";
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
}

/**
 * <p>Amazon WorkSpaces Secure Browser is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Secure Browser makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Secure Browser provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.</p>
 * @public
 */
export class WorkSpacesWeb extends WorkSpacesWebClient implements WorkSpacesWeb {}
createAggregatedClient(commands, WorkSpacesWeb);
