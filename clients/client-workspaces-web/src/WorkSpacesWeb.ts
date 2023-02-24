// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateBrowserSettingsCommand,
  AssociateBrowserSettingsCommandInput,
  AssociateBrowserSettingsCommandOutput,
} from "./commands/AssociateBrowserSettingsCommand";
import {
  AssociateNetworkSettingsCommand,
  AssociateNetworkSettingsCommandInput,
  AssociateNetworkSettingsCommandOutput,
} from "./commands/AssociateNetworkSettingsCommand";
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
  CreateIdentityProviderCommand,
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "./commands/CreateIdentityProviderCommand";
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
  DeleteIdentityProviderCommand,
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "./commands/DeleteIdentityProviderCommand";
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
  DisassociateNetworkSettingsCommand,
  DisassociateNetworkSettingsCommandInput,
  DisassociateNetworkSettingsCommandOutput,
} from "./commands/DisassociateNetworkSettingsCommand";
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
  GetBrowserSettingsCommand,
  GetBrowserSettingsCommandInput,
  GetBrowserSettingsCommandOutput,
} from "./commands/GetBrowserSettingsCommand";
import {
  GetIdentityProviderCommand,
  GetIdentityProviderCommandInput,
  GetIdentityProviderCommandOutput,
} from "./commands/GetIdentityProviderCommand";
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
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "./commands/ListIdentityProvidersCommand";
import {
  ListNetworkSettingsCommand,
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "./commands/ListNetworkSettingsCommand";
import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
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
  UpdateIdentityProviderCommand,
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "./commands/UpdateIdentityProviderCommand";
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

/**
 * <p>WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate
 *          secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide
 *          their employees with access to internal websites and SaaS web applications without the
 *          administrative burden of appliances or specialized client software. WorkSpaces Web provides
 *          simple policy tools tailored for user interactions, while offloading common tasks like
 *          capacity management, scaling, and maintaining browser images.</p>
 */
export class WorkSpacesWeb extends WorkSpacesWebClient {
  /**
   * <p>Associates a browser settings resource with a web portal.</p>
   */
  public associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBrowserSettingsCommandOutput>;
  public associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    cb: (err: any, data?: AssociateBrowserSettingsCommandOutput) => void
  ): void;
  public associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBrowserSettingsCommandOutput) => void
  ): void;
  public associateBrowserSettings(
    args: AssociateBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: AssociateBrowserSettingsCommandOutput) => void
  ): Promise<AssociateBrowserSettingsCommandOutput> | void {
    const command = new AssociateBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a network settings resource with a web portal.</p>
   */
  public associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateNetworkSettingsCommandOutput>;
  public associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    cb: (err: any, data?: AssociateNetworkSettingsCommandOutput) => void
  ): void;
  public associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateNetworkSettingsCommandOutput) => void
  ): void;
  public associateNetworkSettings(
    args: AssociateNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: AssociateNetworkSettingsCommandOutput) => void
  ): Promise<AssociateNetworkSettingsCommandOutput> | void {
    const command = new AssociateNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a trust store with a web portal.</p>
   */
  public associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrustStoreCommandOutput>;
  public associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    cb: (err: any, data?: AssociateTrustStoreCommandOutput) => void
  ): void;
  public associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrustStoreCommandOutput) => void
  ): void;
  public associateTrustStore(
    args: AssociateTrustStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTrustStoreCommandOutput) => void),
    cb?: (err: any, data?: AssociateTrustStoreCommandOutput) => void
  ): Promise<AssociateTrustStoreCommandOutput> | void {
    const command = new AssociateTrustStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a user access logging settings resource with a web portal.</p>
   */
  public associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserAccessLoggingSettingsCommandOutput>;
  public associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: AssociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public associateUserAccessLoggingSettings(
    args: AssociateUserAccessLoggingSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: AssociateUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<AssociateUserAccessLoggingSettingsCommandOutput> | void {
    const command = new AssociateUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a user settings resource with a web portal.</p>
   */
  public associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateUserSettingsCommandOutput>;
  public associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    cb: (err: any, data?: AssociateUserSettingsCommandOutput) => void
  ): void;
  public associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateUserSettingsCommandOutput) => void
  ): void;
  public associateUserSettings(
    args: AssociateUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: AssociateUserSettingsCommandOutput) => void
  ): Promise<AssociateUserSettingsCommandOutput> | void {
    const command = new AssociateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a browser settings resource that can be associated with a web portal. Once
   *          associated with a web portal, browser settings control how the browser will behave once a
   *          user starts a streaming session for the web portal. </p>
   */
  public createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrowserSettingsCommandOutput>;
  public createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    cb: (err: any, data?: CreateBrowserSettingsCommandOutput) => void
  ): void;
  public createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrowserSettingsCommandOutput) => void
  ): void;
  public createBrowserSettings(
    args: CreateBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: CreateBrowserSettingsCommandOutput) => void
  ): Promise<CreateBrowserSettingsCommandOutput> | void {
    const command = new CreateBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an identity provider resource that is then associated with a web portal.</p>
   */
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdentityProviderCommandOutput>;
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): void;
  public createIdentityProvider(
    args: CreateIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: CreateIdentityProviderCommandOutput) => void
  ): Promise<CreateIdentityProviderCommandOutput> | void {
    const command = new CreateIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a network settings resource that can be associated with a web portal. Once
   *          associated with a web portal, network settings define how streaming instances will connect
   *          with your specified VPC. </p>
   */
  public createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNetworkSettingsCommandOutput>;
  public createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    cb: (err: any, data?: CreateNetworkSettingsCommandOutput) => void
  ): void;
  public createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNetworkSettingsCommandOutput) => void
  ): void;
  public createNetworkSettings(
    args: CreateNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: CreateNetworkSettingsCommandOutput) => void
  ): Promise<CreateNetworkSettingsCommandOutput> | void {
    const command = new CreateNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a web portal.</p>
   */
  public createPortal(
    args: CreatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortalCommandOutput>;
  public createPortal(args: CreatePortalCommandInput, cb: (err: any, data?: CreatePortalCommandOutput) => void): void;
  public createPortal(
    args: CreatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;
  public createPortal(
    args: CreatePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePortalCommandOutput) => void),
    cb?: (err: any, data?: CreatePortalCommandOutput) => void
  ): Promise<CreatePortalCommandOutput> | void {
    const command = new CreatePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a trust store that can be associated with a web portal. A trust store contains
   *          certificate authority (CA) certificates. Once associated with a web portal, the browser in
   *          a streaming session will recognize certificates that have been issued using any of the CAs
   *          in the trust store. If your organization has internal websites that use certificates issued
   *          by private CAs, you should add the private CA certificate to the trust store. </p>
   */
  public createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustStoreCommandOutput>;
  public createTrustStore(
    args: CreateTrustStoreCommandInput,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  public createTrustStore(
    args: CreateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  public createTrustStore(
    args: CreateTrustStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrustStoreCommandOutput) => void),
    cb?: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): Promise<CreateTrustStoreCommandOutput> | void {
    const command = new CreateTrustStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a user access logging settings resource that can be associated with a web portal.</p>
   */
  public createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserAccessLoggingSettingsCommandOutput>;
  public createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: CreateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public createUserAccessLoggingSettings(
    args: CreateUserAccessLoggingSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: CreateUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<CreateUserAccessLoggingSettingsCommandOutput> | void {
    const command = new CreateUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a user settings resource that can be associated with a web portal. Once
   *          associated with a web portal, user settings control how users can transfer data between a
   *          streaming session and the their local devices. </p>
   */
  public createUserSettings(
    args: CreateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserSettingsCommandOutput>;
  public createUserSettings(
    args: CreateUserSettingsCommandInput,
    cb: (err: any, data?: CreateUserSettingsCommandOutput) => void
  ): void;
  public createUserSettings(
    args: CreateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserSettingsCommandOutput) => void
  ): void;
  public createUserSettings(
    args: CreateUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: CreateUserSettingsCommandOutput) => void
  ): Promise<CreateUserSettingsCommandOutput> | void {
    const command = new CreateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes browser settings.</p>
   */
  public deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrowserSettingsCommandOutput>;
  public deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    cb: (err: any, data?: DeleteBrowserSettingsCommandOutput) => void
  ): void;
  public deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrowserSettingsCommandOutput) => void
  ): void;
  public deleteBrowserSettings(
    args: DeleteBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: DeleteBrowserSettingsCommandOutput) => void
  ): Promise<DeleteBrowserSettingsCommandOutput> | void {
    const command = new DeleteBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the identity provider.</p>
   */
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentityProviderCommandOutput>;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): void;
  public deleteIdentityProvider(
    args: DeleteIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: DeleteIdentityProviderCommandOutput) => void
  ): Promise<DeleteIdentityProviderCommandOutput> | void {
    const command = new DeleteIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes network settings.</p>
   */
  public deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNetworkSettingsCommandOutput>;
  public deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    cb: (err: any, data?: DeleteNetworkSettingsCommandOutput) => void
  ): void;
  public deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNetworkSettingsCommandOutput) => void
  ): void;
  public deleteNetworkSettings(
    args: DeleteNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: DeleteNetworkSettingsCommandOutput) => void
  ): Promise<DeleteNetworkSettingsCommandOutput> | void {
    const command = new DeleteNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a web portal.</p>
   */
  public deletePortal(
    args: DeletePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalCommandOutput>;
  public deletePortal(args: DeletePortalCommandInput, cb: (err: any, data?: DeletePortalCommandOutput) => void): void;
  public deletePortal(
    args: DeletePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;
  public deletePortal(
    args: DeletePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePortalCommandOutput) => void),
    cb?: (err: any, data?: DeletePortalCommandOutput) => void
  ): Promise<DeletePortalCommandOutput> | void {
    const command = new DeletePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the trust store.</p>
   */
  public deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustStoreCommandOutput>;
  public deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  public deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  public deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrustStoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): Promise<DeleteTrustStoreCommandOutput> | void {
    const command = new DeleteTrustStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes user access logging settings.</p>
   */
  public deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserAccessLoggingSettingsCommandOutput>;
  public deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: DeleteUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public deleteUserAccessLoggingSettings(
    args: DeleteUserAccessLoggingSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<DeleteUserAccessLoggingSettingsCommandOutput> | void {
    const command = new DeleteUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes user settings.</p>
   */
  public deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserSettingsCommandOutput>;
  public deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    cb: (err: any, data?: DeleteUserSettingsCommandOutput) => void
  ): void;
  public deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserSettingsCommandOutput) => void
  ): void;
  public deleteUserSettings(
    args: DeleteUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserSettingsCommandOutput) => void
  ): Promise<DeleteUserSettingsCommandOutput> | void {
    const command = new DeleteUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates browser settings from a web portal.</p>
   */
  public disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBrowserSettingsCommandOutput>;
  public disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    cb: (err: any, data?: DisassociateBrowserSettingsCommandOutput) => void
  ): void;
  public disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBrowserSettingsCommandOutput) => void
  ): void;
  public disassociateBrowserSettings(
    args: DisassociateBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateBrowserSettingsCommandOutput) => void
  ): Promise<DisassociateBrowserSettingsCommandOutput> | void {
    const command = new DisassociateBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates network settings from a web portal.</p>
   */
  public disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateNetworkSettingsCommandOutput>;
  public disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    cb: (err: any, data?: DisassociateNetworkSettingsCommandOutput) => void
  ): void;
  public disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateNetworkSettingsCommandOutput) => void
  ): void;
  public disassociateNetworkSettings(
    args: DisassociateNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateNetworkSettingsCommandOutput) => void
  ): Promise<DisassociateNetworkSettingsCommandOutput> | void {
    const command = new DisassociateNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a trust store from a web portal.</p>
   */
  public disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrustStoreCommandOutput>;
  public disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    cb: (err: any, data?: DisassociateTrustStoreCommandOutput) => void
  ): void;
  public disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrustStoreCommandOutput) => void
  ): void;
  public disassociateTrustStore(
    args: DisassociateTrustStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateTrustStoreCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTrustStoreCommandOutput) => void
  ): Promise<DisassociateTrustStoreCommandOutput> | void {
    const command = new DisassociateTrustStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates user access logging settings from a web portal.</p>
   */
  public disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserAccessLoggingSettingsCommandOutput>;
  public disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: DisassociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public disassociateUserAccessLoggingSettings(
    args: DisassociateUserAccessLoggingSettingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<DisassociateUserAccessLoggingSettingsCommandOutput> | void {
    const command = new DisassociateUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates user settings from a web portal.</p>
   */
  public disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateUserSettingsCommandOutput>;
  public disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    cb: (err: any, data?: DisassociateUserSettingsCommandOutput) => void
  ): void;
  public disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateUserSettingsCommandOutput) => void
  ): void;
  public disassociateUserSettings(
    args: DisassociateUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateUserSettingsCommandOutput) => void
  ): Promise<DisassociateUserSettingsCommandOutput> | void {
    const command = new DisassociateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets browser settings.</p>
   */
  public getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBrowserSettingsCommandOutput>;
  public getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    cb: (err: any, data?: GetBrowserSettingsCommandOutput) => void
  ): void;
  public getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBrowserSettingsCommandOutput) => void
  ): void;
  public getBrowserSettings(
    args: GetBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetBrowserSettingsCommandOutput) => void
  ): Promise<GetBrowserSettingsCommandOutput> | void {
    const command = new GetBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the identity provider.</p>
   */
  public getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityProviderCommandOutput>;
  public getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    cb: (err: any, data?: GetIdentityProviderCommandOutput) => void
  ): void;
  public getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityProviderCommandOutput) => void
  ): void;
  public getIdentityProvider(
    args: GetIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: GetIdentityProviderCommandOutput) => void
  ): Promise<GetIdentityProviderCommandOutput> | void {
    const command = new GetIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the network settings.</p>
   */
  public getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNetworkSettingsCommandOutput>;
  public getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    cb: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): void;
  public getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): void;
  public getNetworkSettings(
    args: GetNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetNetworkSettingsCommandOutput) => void
  ): Promise<GetNetworkSettingsCommandOutput> | void {
    const command = new GetNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the web portal.</p>
   */
  public getPortal(args: GetPortalCommandInput, options?: __HttpHandlerOptions): Promise<GetPortalCommandOutput>;
  public getPortal(args: GetPortalCommandInput, cb: (err: any, data?: GetPortalCommandOutput) => void): void;
  public getPortal(
    args: GetPortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalCommandOutput) => void
  ): void;
  public getPortal(
    args: GetPortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPortalCommandOutput) => void),
    cb?: (err: any, data?: GetPortalCommandOutput) => void
  ): Promise<GetPortalCommandOutput> | void {
    const command = new GetPortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the service provider metadata.</p>
   */
  public getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPortalServiceProviderMetadataCommandOutput>;
  public getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    cb: (err: any, data?: GetPortalServiceProviderMetadataCommandOutput) => void
  ): void;
  public getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPortalServiceProviderMetadataCommandOutput) => void
  ): void;
  public getPortalServiceProviderMetadata(
    args: GetPortalServiceProviderMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPortalServiceProviderMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetPortalServiceProviderMetadataCommandOutput) => void
  ): Promise<GetPortalServiceProviderMetadataCommandOutput> | void {
    const command = new GetPortalServiceProviderMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the trust store.</p>
   */
  public getTrustStore(
    args: GetTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustStoreCommandOutput>;
  public getTrustStore(
    args: GetTrustStoreCommandInput,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;
  public getTrustStore(
    args: GetTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;
  public getTrustStore(
    args: GetTrustStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrustStoreCommandOutput) => void),
    cb?: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): Promise<GetTrustStoreCommandOutput> | void {
    const command = new GetTrustStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the trust store certificate.</p>
   */
  public getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustStoreCertificateCommandOutput>;
  public getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    cb: (err: any, data?: GetTrustStoreCertificateCommandOutput) => void
  ): void;
  public getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreCertificateCommandOutput) => void
  ): void;
  public getTrustStoreCertificate(
    args: GetTrustStoreCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrustStoreCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetTrustStoreCertificateCommandOutput) => void
  ): Promise<GetTrustStoreCertificateCommandOutput> | void {
    const command = new GetTrustStoreCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets user access logging settings.</p>
   */
  public getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserAccessLoggingSettingsCommandOutput>;
  public getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: GetUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public getUserAccessLoggingSettings(
    args: GetUserAccessLoggingSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<GetUserAccessLoggingSettingsCommandOutput> | void {
    const command = new GetUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets user settings.</p>
   */
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserSettingsCommandOutput>;
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): void;
  public getUserSettings(
    args: GetUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetUserSettingsCommandOutput) => void
  ): Promise<GetUserSettingsCommandOutput> | void {
    const command = new GetUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of browser settings.</p>
   */
  public listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrowserSettingsCommandOutput>;
  public listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    cb: (err: any, data?: ListBrowserSettingsCommandOutput) => void
  ): void;
  public listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrowserSettingsCommandOutput) => void
  ): void;
  public listBrowserSettings(
    args: ListBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: ListBrowserSettingsCommandOutput) => void
  ): Promise<ListBrowserSettingsCommandOutput> | void {
    const command = new ListBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of identity providers for a specific web portal.</p>
   */
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityProvidersCommandOutput>;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): void;
  public listIdentityProviders(
    args: ListIdentityProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIdentityProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListIdentityProvidersCommandOutput) => void
  ): Promise<ListIdentityProvidersCommandOutput> | void {
    const command = new ListIdentityProvidersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of network settings.</p>
   */
  public listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNetworkSettingsCommandOutput>;
  public listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    cb: (err: any, data?: ListNetworkSettingsCommandOutput) => void
  ): void;
  public listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNetworkSettingsCommandOutput) => void
  ): void;
  public listNetworkSettings(
    args: ListNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: ListNetworkSettingsCommandOutput) => void
  ): Promise<ListNetworkSettingsCommandOutput> | void {
    const command = new ListNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list or web portals.</p>
   */
  public listPortals(args: ListPortalsCommandInput, options?: __HttpHandlerOptions): Promise<ListPortalsCommandOutput>;
  public listPortals(args: ListPortalsCommandInput, cb: (err: any, data?: ListPortalsCommandOutput) => void): void;
  public listPortals(
    args: ListPortalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;
  public listPortals(
    args: ListPortalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPortalsCommandOutput) => void),
    cb?: (err: any, data?: ListPortalsCommandOutput) => void
  ): Promise<ListPortalsCommandOutput> | void {
    const command = new ListPortalsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of tags for a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of trust store certificates.</p>
   */
  public listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustStoreCertificatesCommandOutput>;
  public listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    cb: (err: any, data?: ListTrustStoreCertificatesCommandOutput) => void
  ): void;
  public listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustStoreCertificatesCommandOutput) => void
  ): void;
  public listTrustStoreCertificates(
    args: ListTrustStoreCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrustStoreCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListTrustStoreCertificatesCommandOutput) => void
  ): Promise<ListTrustStoreCertificatesCommandOutput> | void {
    const command = new ListTrustStoreCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of trust stores.</p>
   */
  public listTrustStores(
    args: ListTrustStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustStoresCommandOutput>;
  public listTrustStores(
    args: ListTrustStoresCommandInput,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;
  public listTrustStores(
    args: ListTrustStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;
  public listTrustStores(
    args: ListTrustStoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrustStoresCommandOutput) => void),
    cb?: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): Promise<ListTrustStoresCommandOutput> | void {
    const command = new ListTrustStoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of user access logging settings.</p>
   */
  public listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserAccessLoggingSettingsCommandOutput>;
  public listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: ListUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public listUserAccessLoggingSettings(
    args: ListUserAccessLoggingSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: ListUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<ListUserAccessLoggingSettingsCommandOutput> | void {
    const command = new ListUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of user settings.</p>
   */
  public listUserSettings(
    args: ListUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserSettingsCommandOutput>;
  public listUserSettings(
    args: ListUserSettingsCommandInput,
    cb: (err: any, data?: ListUserSettingsCommandOutput) => void
  ): void;
  public listUserSettings(
    args: ListUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserSettingsCommandOutput) => void
  ): void;
  public listUserSettings(
    args: ListUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: ListUserSettingsCommandOutput) => void
  ): Promise<ListUserSettingsCommandOutput> | void {
    const command = new ListUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds or overwrites one or more tags for the specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more tags from the specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates browser settings.</p>
   */
  public updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBrowserSettingsCommandOutput>;
  public updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    cb: (err: any, data?: UpdateBrowserSettingsCommandOutput) => void
  ): void;
  public updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBrowserSettingsCommandOutput) => void
  ): void;
  public updateBrowserSettings(
    args: UpdateBrowserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBrowserSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateBrowserSettingsCommandOutput) => void
  ): Promise<UpdateBrowserSettingsCommandOutput> | void {
    const command = new UpdateBrowserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the identity provider. </p>
   */
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderCommandOutput>;
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): void;
  public updateIdentityProvider(
    args: UpdateIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: UpdateIdentityProviderCommandOutput) => void
  ): Promise<UpdateIdentityProviderCommandOutput> | void {
    const command = new UpdateIdentityProviderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates network settings.</p>
   */
  public updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNetworkSettingsCommandOutput>;
  public updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    cb: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): void;
  public updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): void;
  public updateNetworkSettings(
    args: UpdateNetworkSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNetworkSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateNetworkSettingsCommandOutput) => void
  ): Promise<UpdateNetworkSettingsCommandOutput> | void {
    const command = new UpdateNetworkSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a web portal.</p>
   */
  public updatePortal(
    args: UpdatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortalCommandOutput>;
  public updatePortal(args: UpdatePortalCommandInput, cb: (err: any, data?: UpdatePortalCommandOutput) => void): void;
  public updatePortal(
    args: UpdatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;
  public updatePortal(
    args: UpdatePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePortalCommandOutput) => void),
    cb?: (err: any, data?: UpdatePortalCommandOutput) => void
  ): Promise<UpdatePortalCommandOutput> | void {
    const command = new UpdatePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the trust store.</p>
   */
  public updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustStoreCommandOutput>;
  public updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;
  public updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;
  public updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrustStoreCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): Promise<UpdateTrustStoreCommandOutput> | void {
    const command = new UpdateTrustStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the user access logging settings.</p>
   */
  public updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserAccessLoggingSettingsCommandOutput>;
  public updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    cb: (err: any, data?: UpdateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserAccessLoggingSettingsCommandOutput) => void
  ): void;
  public updateUserAccessLoggingSettings(
    args: UpdateUserAccessLoggingSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserAccessLoggingSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserAccessLoggingSettingsCommandOutput) => void
  ): Promise<UpdateUserAccessLoggingSettingsCommandOutput> | void {
    const command = new UpdateUserAccessLoggingSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the user settings.</p>
   */
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserSettingsCommandOutput>;
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): void;
  public updateUserSettings(
    args: UpdateUserSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserSettingsCommandOutput) => void
  ): Promise<UpdateUserSettingsCommandOutput> | void {
    const command = new UpdateUserSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
