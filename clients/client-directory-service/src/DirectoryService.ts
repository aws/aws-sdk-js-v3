// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AcceptSharedDirectoryCommand,
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "./commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommand, AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand";
import { AddRegionCommand, AddRegionCommandInput, AddRegionCommandOutput } from "./commands/AddRegionCommand";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import {
  CancelSchemaExtensionCommand,
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "./commands/CancelSchemaExtensionCommand";
import {
  ConnectDirectoryCommand,
  ConnectDirectoryCommandInput,
  ConnectDirectoryCommandOutput,
} from "./commands/ConnectDirectoryCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateComputerCommand,
  CreateComputerCommandInput,
  CreateComputerCommandOutput,
} from "./commands/CreateComputerCommand";
import {
  CreateConditionalForwarderCommand,
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "./commands/CreateConditionalForwarderCommand";
import {
  CreateDirectoryCommand,
  CreateDirectoryCommandInput,
  CreateDirectoryCommandOutput,
} from "./commands/CreateDirectoryCommand";
import {
  CreateLogSubscriptionCommand,
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "./commands/CreateLogSubscriptionCommand";
import {
  CreateMicrosoftADCommand,
  CreateMicrosoftADCommandInput,
  CreateMicrosoftADCommandOutput,
} from "./commands/CreateMicrosoftADCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import { CreateTrustCommand, CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand";
import {
  DeleteConditionalForwarderCommand,
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "./commands/DeleteConditionalForwarderCommand";
import {
  DeleteDirectoryCommand,
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput,
} from "./commands/DeleteDirectoryCommand";
import {
  DeleteLogSubscriptionCommand,
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "./commands/DeleteLogSubscriptionCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import { DeleteTrustCommand, DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand";
import {
  DeregisterCertificateCommand,
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "./commands/DeregisterCertificateCommand";
import {
  DeregisterEventTopicCommand,
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "./commands/DeregisterEventTopicCommand";
import {
  DescribeCertificateCommand,
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeClientAuthenticationSettingsCommand,
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "./commands/DescribeClientAuthenticationSettingsCommand";
import {
  DescribeConditionalForwardersCommand,
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "./commands/DescribeConditionalForwardersCommand";
import {
  DescribeDirectoriesCommand,
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "./commands/DescribeDirectoriesCommand";
import {
  DescribeDomainControllersCommand,
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "./commands/DescribeDomainControllersCommand";
import {
  DescribeEventTopicsCommand,
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "./commands/DescribeEventTopicsCommand";
import {
  DescribeLDAPSSettingsCommand,
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "./commands/DescribeLDAPSSettingsCommand";
import {
  DescribeRegionsCommand,
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
} from "./commands/DescribeRegionsCommand";
import {
  DescribeSettingsCommand,
  DescribeSettingsCommandInput,
  DescribeSettingsCommandOutput,
} from "./commands/DescribeSettingsCommand";
import {
  DescribeSharedDirectoriesCommand,
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "./commands/DescribeSharedDirectoriesCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeTrustsCommand,
  DescribeTrustsCommandInput,
  DescribeTrustsCommandOutput,
} from "./commands/DescribeTrustsCommand";
import {
  DescribeUpdateDirectoryCommand,
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "./commands/DescribeUpdateDirectoryCommand";
import {
  DisableClientAuthenticationCommand,
  DisableClientAuthenticationCommandInput,
  DisableClientAuthenticationCommandOutput,
} from "./commands/DisableClientAuthenticationCommand";
import {
  DisableLDAPSCommand,
  DisableLDAPSCommandInput,
  DisableLDAPSCommandOutput,
} from "./commands/DisableLDAPSCommand";
import {
  DisableRadiusCommand,
  DisableRadiusCommandInput,
  DisableRadiusCommandOutput,
} from "./commands/DisableRadiusCommand";
import { DisableSsoCommand, DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand";
import {
  EnableClientAuthenticationCommand,
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
} from "./commands/EnableClientAuthenticationCommand";
import { EnableLDAPSCommand, EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand";
import {
  EnableRadiusCommand,
  EnableRadiusCommandInput,
  EnableRadiusCommandOutput,
} from "./commands/EnableRadiusCommand";
import { EnableSsoCommand, EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand";
import {
  GetDirectoryLimitsCommand,
  GetDirectoryLimitsCommandInput,
  GetDirectoryLimitsCommandOutput,
} from "./commands/GetDirectoryLimitsCommand";
import {
  GetSnapshotLimitsCommand,
  GetSnapshotLimitsCommandInput,
  GetSnapshotLimitsCommandOutput,
} from "./commands/GetSnapshotLimitsCommand";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "./commands/ListCertificatesCommand";
import {
  ListIpRoutesCommand,
  ListIpRoutesCommandInput,
  ListIpRoutesCommandOutput,
} from "./commands/ListIpRoutesCommand";
import {
  ListLogSubscriptionsCommand,
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "./commands/ListLogSubscriptionsCommand";
import {
  ListSchemaExtensionsCommand,
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "./commands/ListSchemaExtensionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterCertificateCommand,
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import {
  RegisterEventTopicCommand,
  RegisterEventTopicCommandInput,
  RegisterEventTopicCommandOutput,
} from "./commands/RegisterEventTopicCommand";
import {
  RejectSharedDirectoryCommand,
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "./commands/RejectSharedDirectoryCommand";
import {
  RemoveIpRoutesCommand,
  RemoveIpRoutesCommandInput,
  RemoveIpRoutesCommandOutput,
} from "./commands/RemoveIpRoutesCommand";
import {
  RemoveRegionCommand,
  RemoveRegionCommandInput,
  RemoveRegionCommandOutput,
} from "./commands/RemoveRegionCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetUserPasswordCommand,
  ResetUserPasswordCommandInput,
  ResetUserPasswordCommandOutput,
} from "./commands/ResetUserPasswordCommand";
import {
  RestoreFromSnapshotCommand,
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import {
  ShareDirectoryCommand,
  ShareDirectoryCommandInput,
  ShareDirectoryCommandOutput,
} from "./commands/ShareDirectoryCommand";
import {
  StartSchemaExtensionCommand,
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "./commands/StartSchemaExtensionCommand";
import {
  UnshareDirectoryCommand,
  UnshareDirectoryCommandInput,
  UnshareDirectoryCommandOutput,
} from "./commands/UnshareDirectoryCommand";
import {
  UpdateConditionalForwarderCommand,
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "./commands/UpdateConditionalForwarderCommand";
import {
  UpdateDirectorySetupCommand,
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
} from "./commands/UpdateDirectorySetupCommand";
import {
  UpdateNumberOfDomainControllersCommand,
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "./commands/UpdateNumberOfDomainControllersCommand";
import {
  UpdateRadiusCommand,
  UpdateRadiusCommandInput,
  UpdateRadiusCommandOutput,
} from "./commands/UpdateRadiusCommand";
import {
  UpdateSettingsCommand,
  UpdateSettingsCommandInput,
  UpdateSettingsCommandOutput,
} from "./commands/UpdateSettingsCommand";
import { UpdateTrustCommand, UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand";
import { VerifyTrustCommand, VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand";
import { DirectoryServiceClient } from "./DirectoryServiceClient";

/**
 * <fullname>Directory Service</fullname>
 *          <p>Directory Service is a web service that makes it easy for you to setup and run directories in the
 *          Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active
 *          Directory. This guide provides detailed information about Directory Service operations, data types,
 *          parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service
 *             Administration Guide</a>.</p>
 *          <note>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various
 *             programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs
 *             provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services
 *             services. For more information about the Amazon Web Services SDKs, including how to download and
 *             install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *                Services</a>.</p>
 *          </note>
 */
export class DirectoryService extends DirectoryServiceClient {
  /**
   * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
   */
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptSharedDirectoryCommandOutput>;
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    cb: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void
  ): void;
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void
  ): void;
  public acceptSharedDirectory(
    args: AcceptSharedDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptSharedDirectoryCommandOutput) => void),
    cb?: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void
  ): Promise<AcceptSharedDirectoryCommandOutput> | void {
    const command = new AcceptSharedDirectoryCommand(args);
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
   * <p>If the DNS server for your self-managed domain uses a publicly addressable IP address,
   *          you must add a CIDR address block to correctly route traffic to and from your Microsoft AD
   *          on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can
   *          also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP
   *          ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p>
   *          <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required
   *          permissions have been explicitly granted through a policy. For details about what
   *          permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   */
  public addIpRoutes(args: AddIpRoutesCommandInput, options?: __HttpHandlerOptions): Promise<AddIpRoutesCommandOutput>;
  public addIpRoutes(args: AddIpRoutesCommandInput, cb: (err: any, data?: AddIpRoutesCommandOutput) => void): void;
  public addIpRoutes(
    args: AddIpRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddIpRoutesCommandOutput) => void
  ): void;
  public addIpRoutes(
    args: AddIpRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddIpRoutesCommandOutput) => void),
    cb?: (err: any, data?: AddIpRoutesCommandOutput) => void
  ): Promise<AddIpRoutesCommandOutput> | void {
    const command = new AddIpRoutesCommand(args);
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
   * <p>Adds two domain controllers in the specified Region for the specified directory.</p>
   */
  public addRegion(args: AddRegionCommandInput, options?: __HttpHandlerOptions): Promise<AddRegionCommandOutput>;
  public addRegion(args: AddRegionCommandInput, cb: (err: any, data?: AddRegionCommandOutput) => void): void;
  public addRegion(
    args: AddRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRegionCommandOutput) => void
  ): void;
  public addRegion(
    args: AddRegionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddRegionCommandOutput) => void),
    cb?: (err: any, data?: AddRegionCommandOutput) => void
  ): Promise<AddRegionCommandOutput> | void {
    const command = new AddRegionCommand(args);
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
   * <p>Adds or overwrites one or more tags for the specified directory. Each directory can
   *       have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be
   *       unique to each resource.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
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
   * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema
   *       extension has started replicating to all domain controllers, the task can no longer be
   *       canceled. A schema extension can be canceled during any of the following states;
   *         <code>Initializing</code>, <code>CreatingSnapshot</code>, and
   *       <code>UpdatingSchema</code>.</p>
   */
  public cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSchemaExtensionCommandOutput>;
  public cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    cb: (err: any, data?: CancelSchemaExtensionCommandOutput) => void
  ): void;
  public cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSchemaExtensionCommandOutput) => void
  ): void;
  public cancelSchemaExtension(
    args: CancelSchemaExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSchemaExtensionCommandOutput) => void),
    cb?: (err: any, data?: CancelSchemaExtensionCommandOutput) => void
  ): Promise<CancelSchemaExtensionCommandOutput> | void {
    const command = new CancelSchemaExtensionCommand(args);
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
   * <p>Creates an AD Connector to connect to a self-managed directory.</p>
   *          <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions
   *       have been explicitly granted through a policy. For details about what permissions are required
   *       to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions
   *       Reference</a>.</p>
   */
  public connectDirectory(
    args: ConnectDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConnectDirectoryCommandOutput>;
  public connectDirectory(
    args: ConnectDirectoryCommandInput,
    cb: (err: any, data?: ConnectDirectoryCommandOutput) => void
  ): void;
  public connectDirectory(
    args: ConnectDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConnectDirectoryCommandOutput) => void
  ): void;
  public connectDirectory(
    args: ConnectDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConnectDirectoryCommandOutput) => void),
    cb?: (err: any, data?: ConnectDirectoryCommandOutput) => void
  ): Promise<ConnectDirectoryCommandOutput> | void {
    const command = new ConnectDirectoryCommand(args);
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
   * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used
   *          to construct the access URL for the directory, such as
   *             <code>http://<alias>.awsapps.com</code>.</p>
   *          <important>
   *             <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p>
   *          </important>
   */
  public createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  public createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  public createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;
  public createAlias(
    args: CreateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateAliasCommandOutput) => void
  ): Promise<CreateAliasCommandOutput> | void {
    const command = new CreateAliasCommand(args);
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
   * <p>Creates an Active Directory computer object in the specified directory.</p>
   */
  public createComputer(
    args: CreateComputerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputerCommandOutput>;
  public createComputer(
    args: CreateComputerCommandInput,
    cb: (err: any, data?: CreateComputerCommandOutput) => void
  ): void;
  public createComputer(
    args: CreateComputerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputerCommandOutput) => void
  ): void;
  public createComputer(
    args: CreateComputerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComputerCommandOutput) => void),
    cb?: (err: any, data?: CreateComputerCommandOutput) => void
  ): Promise<CreateComputerCommandOutput> | void {
    const command = new CreateComputerCommand(args);
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
   * <p>Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional
   *       forwarders are required in order to set up a trust relationship with another domain. The
   *       conditional forwarder points to the trusted domain.</p>
   */
  public createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConditionalForwarderCommandOutput>;
  public createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    cb: (err: any, data?: CreateConditionalForwarderCommandOutput) => void
  ): void;
  public createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConditionalForwarderCommandOutput) => void
  ): void;
  public createConditionalForwarder(
    args: CreateConditionalForwarderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConditionalForwarderCommandOutput) => void),
    cb?: (err: any, data?: CreateConditionalForwarderCommandOutput) => void
  ): Promise<CreateConditionalForwarderCommandOutput> | void {
    const command = new CreateConditionalForwarderCommand(args);
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
   * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin
   *         Guide</i>.</p>
   *          <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions
   *       have been explicitly granted through a policy. For details about what permissions are required
   *       to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions
   *       Reference</a>.</p>
   */
  public createDirectory(
    args: CreateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryCommandOutput>;
  public createDirectory(
    args: CreateDirectoryCommandInput,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;
  public createDirectory(
    args: CreateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;
  public createDirectory(
    args: CreateDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDirectoryCommandOutput) => void),
    cb?: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): Promise<CreateDirectoryCommandOutput> | void {
    const command = new CreateDirectoryCommand(args);
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
   * <p>Creates a subscription to forward real-time Directory Service domain controller security
   *       logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.</p>
   */
  public createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogSubscriptionCommandOutput>;
  public createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    cb: (err: any, data?: CreateLogSubscriptionCommandOutput) => void
  ): void;
  public createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogSubscriptionCommandOutput) => void
  ): void;
  public createLogSubscription(
    args: CreateLogSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLogSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateLogSubscriptionCommandOutput) => void
  ): Promise<CreateLogSubscriptionCommandOutput> | void {
    const command = new CreateLogSubscriptionCommand(args);
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
   * <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p>
   *          <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required
   *       permissions have been explicitly granted through a policy. For details about what permissions
   *       are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
   */
  public createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMicrosoftADCommandOutput>;
  public createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    cb: (err: any, data?: CreateMicrosoftADCommandOutput) => void
  ): void;
  public createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMicrosoftADCommandOutput) => void
  ): void;
  public createMicrosoftAD(
    args: CreateMicrosoftADCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMicrosoftADCommandOutput) => void),
    cb?: (err: any, data?: CreateMicrosoftADCommandOutput) => void
  ): Promise<CreateMicrosoftADCommandOutput> | void {
    const command = new CreateMicrosoftADCommand(args);
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
   * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p>
   *          <note>
   *             <p>You cannot take snapshots of AD Connector directories.</p>
   *          </note>
   */
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): Promise<CreateSnapshotCommandOutput> | void {
    const command = new CreateSnapshotCommand(args);
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
   * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
   *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
   *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
   *       access to resources in either domain, with a single set of credentials.</p>
   *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
   *       Managed Microsoft AD directory and an external domain. You can create either a forest trust or an
   *       external trust.</p>
   */
  public createTrust(args: CreateTrustCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrustCommandOutput>;
  public createTrust(args: CreateTrustCommandInput, cb: (err: any, data?: CreateTrustCommandOutput) => void): void;
  public createTrust(
    args: CreateTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustCommandOutput) => void
  ): void;
  public createTrust(
    args: CreateTrustCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrustCommandOutput) => void),
    cb?: (err: any, data?: CreateTrustCommandOutput) => void
  ): Promise<CreateTrustCommandOutput> | void {
    const command = new CreateTrustCommand(args);
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
   * <p>Deletes a conditional forwarder that has been set up for your Amazon Web Services
   *       directory.</p>
   */
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConditionalForwarderCommandOutput>;
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    cb: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void
  ): void;
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void
  ): void;
  public deleteConditionalForwarder(
    args: DeleteConditionalForwarderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConditionalForwarderCommandOutput) => void),
    cb?: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void
  ): Promise<DeleteConditionalForwarderCommandOutput> | void {
    const command = new DeleteConditionalForwarderCommand(args);
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
   * <p>Deletes an Directory Service directory.</p>
   *          <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions
   *       have been explicitly granted through a policy. For details about what permissions are required
   *       to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions
   *       Reference</a>.</p>
   */
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryCommandOutput>;
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDirectoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): Promise<DeleteDirectoryCommandOutput> | void {
    const command = new DeleteDirectoryCommand(args);
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
   * <p>Deletes the specified log subscription.</p>
   */
  public deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLogSubscriptionCommandOutput>;
  public deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    cb: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void
  ): void;
  public deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void
  ): void;
  public deleteLogSubscription(
    args: DeleteLogSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLogSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void
  ): Promise<DeleteLogSubscriptionCommandOutput> | void {
    const command = new DeleteLogSubscriptionCommand(args);
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
   * <p>Deletes a directory snapshot.</p>
   */
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): Promise<DeleteSnapshotCommandOutput> | void {
    const command = new DeleteSnapshotCommand(args);
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
   * <p>Deletes an existing trust relationship between your Managed Microsoft AD directory and an external
   *       domain.</p>
   */
  public deleteTrust(args: DeleteTrustCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrustCommandOutput>;
  public deleteTrust(args: DeleteTrustCommandInput, cb: (err: any, data?: DeleteTrustCommandOutput) => void): void;
  public deleteTrust(
    args: DeleteTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustCommandOutput) => void
  ): void;
  public deleteTrust(
    args: DeleteTrustCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrustCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrustCommandOutput) => void
  ): Promise<DeleteTrustCommandOutput> | void {
    const command = new DeleteTrustCommand(args);
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
   * <p>Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.</p>
   */
  public deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterCertificateCommandOutput>;
  public deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    cb: (err: any, data?: DeregisterCertificateCommandOutput) => void
  ): void;
  public deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterCertificateCommandOutput) => void
  ): void;
  public deregisterCertificate(
    args: DeregisterCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeregisterCertificateCommandOutput) => void
  ): Promise<DeregisterCertificateCommandOutput> | void {
    const command = new DeregisterCertificateCommand(args);
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
   * <p>Removes the specified directory as a publisher to the specified Amazon SNS topic.</p>
   */
  public deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterEventTopicCommandOutput>;
  public deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    cb: (err: any, data?: DeregisterEventTopicCommandOutput) => void
  ): void;
  public deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterEventTopicCommandOutput) => void
  ): void;
  public deregisterEventTopic(
    args: DeregisterEventTopicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterEventTopicCommandOutput) => void),
    cb?: (err: any, data?: DeregisterEventTopicCommandOutput) => void
  ): Promise<DeregisterEventTopicCommandOutput> | void {
    const command = new DeregisterEventTopicCommand(args);
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
   * <p>Displays information about the certificate registered for secure LDAP or client certificate authentication.</p>
   */
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCertificateCommandOutput>;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): void;
  public describeCertificate(
    args: DescribeCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCertificateCommandOutput) => void),
    cb?: (err: any, data?: DescribeCertificateCommandOutput) => void
  ): Promise<DescribeCertificateCommandOutput> | void {
    const command = new DescribeCertificateCommand(args);
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
   * <p>Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported.
   *     </p>
   */
  public describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientAuthenticationSettingsCommandOutput>;
  public describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    cb: (err: any, data?: DescribeClientAuthenticationSettingsCommandOutput) => void
  ): void;
  public describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientAuthenticationSettingsCommandOutput) => void
  ): void;
  public describeClientAuthenticationSettings(
    args: DescribeClientAuthenticationSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClientAuthenticationSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientAuthenticationSettingsCommandOutput) => void
  ): Promise<DescribeClientAuthenticationSettingsCommandOutput> | void {
    const command = new DescribeClientAuthenticationSettingsCommand(args);
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
   * <p>Obtains information about the conditional forwarders for this account.</p>
   *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all
   *       conditional forwarders for the specified directory ID.</p>
   */
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConditionalForwardersCommandOutput>;
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    cb: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void
  ): void;
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void
  ): void;
  public describeConditionalForwarders(
    args: DescribeConditionalForwardersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeConditionalForwardersCommandOutput) => void),
    cb?: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void
  ): Promise<DescribeConditionalForwardersCommandOutput> | void {
    const command = new DescribeConditionalForwardersCommand(args);
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
   * <p>Obtains information about the directories that belong to this account.</p>
   *          <p>You can retrieve information about specific directories by passing the directory
   *       identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong
   *       to the current account are returned.</p>
   *          <p>This operation supports pagination with the use of the <code>NextToken</code> request and
   *       response parameters. If more results are available, the
   *         <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in
   *       the next call to <a>DescribeDirectories</a> to retrieve the next set of
   *       items.</p>
   *          <p>You can also specify a maximum number of return results with the <code>Limit</code>
   *       parameter.</p>
   */
  public describeDirectories(
    args: DescribeDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectoriesCommandOutput>;
  public describeDirectories(
    args: DescribeDirectoriesCommandInput,
    cb: (err: any, data?: DescribeDirectoriesCommandOutput) => void
  ): void;
  public describeDirectories(
    args: DescribeDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectoriesCommandOutput) => void
  ): void;
  public describeDirectories(
    args: DescribeDirectoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDirectoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDirectoriesCommandOutput) => void
  ): Promise<DescribeDirectoriesCommandOutput> | void {
    const command = new DescribeDirectoriesCommand(args);
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
   * <p>Provides information about any domain controllers in your directory.</p>
   */
  public describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainControllersCommandOutput>;
  public describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    cb: (err: any, data?: DescribeDomainControllersCommandOutput) => void
  ): void;
  public describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainControllersCommandOutput) => void
  ): void;
  public describeDomainControllers(
    args: DescribeDomainControllersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainControllersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainControllersCommandOutput) => void
  ): Promise<DescribeDomainControllersCommandOutput> | void {
    const command = new DescribeDomainControllersCommand(args);
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
   * <p>Obtains information about which Amazon SNS topics receive status messages from the specified
   *       directory.</p>
   *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request
   *       describes all of the associations in the account.</p>
   */
  public describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventTopicsCommandOutput>;
  public describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    cb: (err: any, data?: DescribeEventTopicsCommandOutput) => void
  ): void;
  public describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventTopicsCommandOutput) => void
  ): void;
  public describeEventTopics(
    args: DescribeEventTopicsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventTopicsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventTopicsCommandOutput) => void
  ): Promise<DescribeEventTopicsCommandOutput> | void {
    const command = new DescribeEventTopicsCommand(args);
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
   * <p>Describes the status of LDAP security for the specified directory.</p>
   */
  public describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLDAPSSettingsCommandOutput>;
  public describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    cb: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void
  ): void;
  public describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void
  ): void;
  public describeLDAPSSettings(
    args: DescribeLDAPSSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLDAPSSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void
  ): Promise<DescribeLDAPSSettingsCommandOutput> | void {
    const command = new DescribeLDAPSSettingsCommand(args);
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
   * <p>Provides information about the Regions that are configured for multi-Region
   *       replication.</p>
   */
  public describeRegions(
    args: DescribeRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionsCommandOutput>;
  public describeRegions(
    args: DescribeRegionsCommandInput,
    cb: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): void;
  public describeRegions(
    args: DescribeRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): void;
  public describeRegions(
    args: DescribeRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRegionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRegionsCommandOutput) => void
  ): Promise<DescribeRegionsCommandOutput> | void {
    const command = new DescribeRegionsCommand(args);
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
   * <p>Retrieves information about the configurable settings for the specified directory.</p>
   */
  public describeSettings(
    args: DescribeSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSettingsCommandOutput>;
  public describeSettings(
    args: DescribeSettingsCommandInput,
    cb: (err: any, data?: DescribeSettingsCommandOutput) => void
  ): void;
  public describeSettings(
    args: DescribeSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSettingsCommandOutput) => void
  ): void;
  public describeSettings(
    args: DescribeSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSettingsCommandOutput) => void
  ): Promise<DescribeSettingsCommandOutput> | void {
    const command = new DescribeSettingsCommand(args);
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
   * <p>Returns the shared directories in your account. </p>
   */
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSharedDirectoriesCommandOutput>;
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    cb: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void
  ): void;
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void
  ): void;
  public describeSharedDirectories(
    args: DescribeSharedDirectoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSharedDirectoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void
  ): Promise<DescribeSharedDirectoriesCommandOutput> | void {
    const command = new DescribeSharedDirectoriesCommand(args);
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
   * <p>Obtains information about the directory snapshots that belong to this account.</p>
   *          <p>This operation supports pagination with the use of the <i>NextToken</i> request and
   *          response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i>
   *          member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to
   *          retrieve the next set of items.</p>
   *          <p>You can also specify a maximum number of return results with the <i>Limit</i>
   *          parameter.</p>
   */
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): Promise<DescribeSnapshotsCommandOutput> | void {
    const command = new DescribeSnapshotsCommand(args);
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
   * <p>Obtains information about the trust relationships for this account.</p>
   *          <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request
   *       describes all the trust relationships belonging to the account.</p>
   */
  public describeTrusts(
    args: DescribeTrustsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustsCommandOutput>;
  public describeTrusts(
    args: DescribeTrustsCommandInput,
    cb: (err: any, data?: DescribeTrustsCommandOutput) => void
  ): void;
  public describeTrusts(
    args: DescribeTrustsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustsCommandOutput) => void
  ): void;
  public describeTrusts(
    args: DescribeTrustsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrustsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrustsCommandOutput) => void
  ): Promise<DescribeTrustsCommandOutput> | void {
    const command = new DescribeTrustsCommand(args);
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
   * <p>
   *       Describes the updates of a directory for a particular update type.
   *     </p>
   */
  public describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUpdateDirectoryCommandOutput>;
  public describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    cb: (err: any, data?: DescribeUpdateDirectoryCommandOutput) => void
  ): void;
  public describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUpdateDirectoryCommandOutput) => void
  ): void;
  public describeUpdateDirectory(
    args: DescribeUpdateDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUpdateDirectoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeUpdateDirectoryCommandOutput) => void
  ): Promise<DescribeUpdateDirectoryCommandOutput> | void {
    const command = new DescribeUpdateDirectoryCommand(args);
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
   * <p>Disables alternative client authentication methods for the specified directory. </p>
   */
  public disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableClientAuthenticationCommandOutput>;
  public disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    cb: (err: any, data?: DisableClientAuthenticationCommandOutput) => void
  ): void;
  public disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableClientAuthenticationCommandOutput) => void
  ): void;
  public disableClientAuthentication(
    args: DisableClientAuthenticationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableClientAuthenticationCommandOutput) => void),
    cb?: (err: any, data?: DisableClientAuthenticationCommandOutput) => void
  ): Promise<DisableClientAuthenticationCommandOutput> | void {
    const command = new DisableClientAuthenticationCommand(args);
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
   * <p>Deactivates LDAP secure calls for the specified directory.</p>
   */
  public disableLDAPS(
    args: DisableLDAPSCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableLDAPSCommandOutput>;
  public disableLDAPS(args: DisableLDAPSCommandInput, cb: (err: any, data?: DisableLDAPSCommandOutput) => void): void;
  public disableLDAPS(
    args: DisableLDAPSCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableLDAPSCommandOutput) => void
  ): void;
  public disableLDAPS(
    args: DisableLDAPSCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableLDAPSCommandOutput) => void),
    cb?: (err: any, data?: DisableLDAPSCommandOutput) => void
  ): Promise<DisableLDAPSCommandOutput> | void {
    const command = new DisableLDAPSCommand(args);
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
   * <p>Disables multi-factor authentication (MFA) with the Remote Authentication Dial In
   *          User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
   */
  public disableRadius(
    args: DisableRadiusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableRadiusCommandOutput>;
  public disableRadius(
    args: DisableRadiusCommandInput,
    cb: (err: any, data?: DisableRadiusCommandOutput) => void
  ): void;
  public disableRadius(
    args: DisableRadiusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRadiusCommandOutput) => void
  ): void;
  public disableRadius(
    args: DisableRadiusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableRadiusCommandOutput) => void),
    cb?: (err: any, data?: DisableRadiusCommandOutput) => void
  ): Promise<DisableRadiusCommandOutput> | void {
    const command = new DisableRadiusCommand(args);
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
   * <p>Disables single-sign on for a directory.</p>
   */
  public disableSso(args: DisableSsoCommandInput, options?: __HttpHandlerOptions): Promise<DisableSsoCommandOutput>;
  public disableSso(args: DisableSsoCommandInput, cb: (err: any, data?: DisableSsoCommandOutput) => void): void;
  public disableSso(
    args: DisableSsoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSsoCommandOutput) => void
  ): void;
  public disableSso(
    args: DisableSsoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableSsoCommandOutput) => void),
    cb?: (err: any, data?: DisableSsoCommandOutput) => void
  ): Promise<DisableSsoCommandOutput> | void {
    const command = new DisableSsoCommand(args);
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
   * <p>Enables alternative client authentication methods for the specified directory.</p>
   */
  public enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableClientAuthenticationCommandOutput>;
  public enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    cb: (err: any, data?: EnableClientAuthenticationCommandOutput) => void
  ): void;
  public enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableClientAuthenticationCommandOutput) => void
  ): void;
  public enableClientAuthentication(
    args: EnableClientAuthenticationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableClientAuthenticationCommandOutput) => void),
    cb?: (err: any, data?: EnableClientAuthenticationCommandOutput) => void
  ): Promise<EnableClientAuthenticationCommandOutput> | void {
    const command = new EnableClientAuthenticationCommand(args);
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
   * <p>Activates the switch for the specific directory to always use LDAP secure calls.</p>
   */
  public enableLDAPS(args: EnableLDAPSCommandInput, options?: __HttpHandlerOptions): Promise<EnableLDAPSCommandOutput>;
  public enableLDAPS(args: EnableLDAPSCommandInput, cb: (err: any, data?: EnableLDAPSCommandOutput) => void): void;
  public enableLDAPS(
    args: EnableLDAPSCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableLDAPSCommandOutput) => void
  ): void;
  public enableLDAPS(
    args: EnableLDAPSCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableLDAPSCommandOutput) => void),
    cb?: (err: any, data?: EnableLDAPSCommandOutput) => void
  ): Promise<EnableLDAPSCommandOutput> | void {
    const command = new EnableLDAPSCommand(args);
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
   * <p>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User
   *          Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
   */
  public enableRadius(
    args: EnableRadiusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableRadiusCommandOutput>;
  public enableRadius(args: EnableRadiusCommandInput, cb: (err: any, data?: EnableRadiusCommandOutput) => void): void;
  public enableRadius(
    args: EnableRadiusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRadiusCommandOutput) => void
  ): void;
  public enableRadius(
    args: EnableRadiusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableRadiusCommandOutput) => void),
    cb?: (err: any, data?: EnableRadiusCommandOutput) => void
  ): Promise<EnableRadiusCommandOutput> | void {
    const command = new EnableRadiusCommand(args);
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
   * <p>Enables single sign-on for a directory. Single sign-on allows users in your directory to
   *       access certain Amazon Web Services services from a computer joined to the directory without having to enter
   *       their credentials separately.</p>
   */
  public enableSso(args: EnableSsoCommandInput, options?: __HttpHandlerOptions): Promise<EnableSsoCommandOutput>;
  public enableSso(args: EnableSsoCommandInput, cb: (err: any, data?: EnableSsoCommandOutput) => void): void;
  public enableSso(
    args: EnableSsoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSsoCommandOutput) => void
  ): void;
  public enableSso(
    args: EnableSsoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableSsoCommandOutput) => void),
    cb?: (err: any, data?: EnableSsoCommandOutput) => void
  ): Promise<EnableSsoCommandOutput> | void {
    const command = new EnableSsoCommand(args);
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
   * <p>Obtains directory limit information for the current Region.</p>
   */
  public getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDirectoryLimitsCommandOutput>;
  public getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    cb: (err: any, data?: GetDirectoryLimitsCommandOutput) => void
  ): void;
  public getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectoryLimitsCommandOutput) => void
  ): void;
  public getDirectoryLimits(
    args: GetDirectoryLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDirectoryLimitsCommandOutput) => void),
    cb?: (err: any, data?: GetDirectoryLimitsCommandOutput) => void
  ): Promise<GetDirectoryLimitsCommandOutput> | void {
    const command = new GetDirectoryLimitsCommand(args);
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
   * <p>Obtains the manual snapshot limits for a directory.</p>
   */
  public getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnapshotLimitsCommandOutput>;
  public getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    cb: (err: any, data?: GetSnapshotLimitsCommandOutput) => void
  ): void;
  public getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotLimitsCommandOutput) => void
  ): void;
  public getSnapshotLimits(
    args: GetSnapshotLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSnapshotLimitsCommandOutput) => void),
    cb?: (err: any, data?: GetSnapshotLimitsCommandOutput) => void
  ): Promise<GetSnapshotLimitsCommandOutput> | void {
    const command = new GetSnapshotLimitsCommand(args);
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
   * <p>For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.</p>
   */
  public listCertificates(
    args: ListCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCertificatesCommandOutput>;
  public listCertificates(
    args: ListCertificatesCommandInput,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCertificatesCommandOutput) => void
  ): void;
  public listCertificates(
    args: ListCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCertificatesCommandOutput) => void),
    cb?: (err: any, data?: ListCertificatesCommandOutput) => void
  ): Promise<ListCertificatesCommandOutput> | void {
    const command = new ListCertificatesCommand(args);
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
   * <p>Lists the address blocks that you have added to a directory.</p>
   */
  public listIpRoutes(
    args: ListIpRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIpRoutesCommandOutput>;
  public listIpRoutes(args: ListIpRoutesCommandInput, cb: (err: any, data?: ListIpRoutesCommandOutput) => void): void;
  public listIpRoutes(
    args: ListIpRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIpRoutesCommandOutput) => void
  ): void;
  public listIpRoutes(
    args: ListIpRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIpRoutesCommandOutput) => void),
    cb?: (err: any, data?: ListIpRoutesCommandOutput) => void
  ): Promise<ListIpRoutesCommandOutput> | void {
    const command = new ListIpRoutesCommand(args);
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
   * <p>Lists the active log subscriptions for the Amazon Web Services account.</p>
   */
  public listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLogSubscriptionsCommandOutput>;
  public listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    cb: (err: any, data?: ListLogSubscriptionsCommandOutput) => void
  ): void;
  public listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLogSubscriptionsCommandOutput) => void
  ): void;
  public listLogSubscriptions(
    args: ListLogSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLogSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: ListLogSubscriptionsCommandOutput) => void
  ): Promise<ListLogSubscriptionsCommandOutput> | void {
    const command = new ListLogSubscriptionsCommand(args);
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
   * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
   */
  public listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaExtensionsCommandOutput>;
  public listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    cb: (err: any, data?: ListSchemaExtensionsCommandOutput) => void
  ): void;
  public listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaExtensionsCommandOutput) => void
  ): void;
  public listSchemaExtensions(
    args: ListSchemaExtensionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemaExtensionsCommandOutput) => void),
    cb?: (err: any, data?: ListSchemaExtensionsCommandOutput) => void
  ): Promise<ListSchemaExtensionsCommandOutput> | void {
    const command = new ListSchemaExtensionsCommand(args);
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
   * <p>Lists all tags on a directory.</p>
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
   * <p>Registers a certificate for a secure LDAP or client certificate authentication.</p>
   */
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCertificateCommandOutput>;
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): void;
  public registerCertificate(
    args: RegisterCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterCertificateCommandOutput) => void),
    cb?: (err: any, data?: RegisterCertificateCommandOutput) => void
  ): Promise<RegisterCertificateCommandOutput> | void {
    const command = new RegisterCertificateCommand(args);
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
   * <p>Associates a directory with an Amazon SNS topic. This establishes the directory as a
   *       publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when
   *       the status of your directory changes. You get notified if your directory goes from an Active
   *       status to an Impaired or Inoperable status. You also receive a notification when the directory
   *       returns to an Active status.</p>
   */
  public registerEventTopic(
    args: RegisterEventTopicCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterEventTopicCommandOutput>;
  public registerEventTopic(
    args: RegisterEventTopicCommandInput,
    cb: (err: any, data?: RegisterEventTopicCommandOutput) => void
  ): void;
  public registerEventTopic(
    args: RegisterEventTopicCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterEventTopicCommandOutput) => void
  ): void;
  public registerEventTopic(
    args: RegisterEventTopicCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterEventTopicCommandOutput) => void),
    cb?: (err: any, data?: RegisterEventTopicCommandOutput) => void
  ): Promise<RegisterEventTopicCommandOutput> | void {
    const command = new RegisterEventTopicCommand(args);
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
   * <p>Rejects a directory sharing request that was sent from the directory owner account.</p>
   */
  public rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectSharedDirectoryCommandOutput>;
  public rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    cb: (err: any, data?: RejectSharedDirectoryCommandOutput) => void
  ): void;
  public rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectSharedDirectoryCommandOutput) => void
  ): void;
  public rejectSharedDirectory(
    args: RejectSharedDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectSharedDirectoryCommandOutput) => void),
    cb?: (err: any, data?: RejectSharedDirectoryCommandOutput) => void
  ): Promise<RejectSharedDirectoryCommandOutput> | void {
    const command = new RejectSharedDirectoryCommand(args);
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
   * <p>Removes IP address blocks from a directory.</p>
   */
  public removeIpRoutes(
    args: RemoveIpRoutesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveIpRoutesCommandOutput>;
  public removeIpRoutes(
    args: RemoveIpRoutesCommandInput,
    cb: (err: any, data?: RemoveIpRoutesCommandOutput) => void
  ): void;
  public removeIpRoutes(
    args: RemoveIpRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveIpRoutesCommandOutput) => void
  ): void;
  public removeIpRoutes(
    args: RemoveIpRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveIpRoutesCommandOutput) => void),
    cb?: (err: any, data?: RemoveIpRoutesCommandOutput) => void
  ): Promise<RemoveIpRoutesCommandOutput> | void {
    const command = new RemoveIpRoutesCommand(args);
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
   * <p>Stops all replication and removes the domain controllers from the specified Region. You
   *       cannot remove the primary Region with this operation. Instead, use the
   *         <code>DeleteDirectory</code> API.</p>
   */
  public removeRegion(
    args: RemoveRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRegionCommandOutput>;
  public removeRegion(args: RemoveRegionCommandInput, cb: (err: any, data?: RemoveRegionCommandOutput) => void): void;
  public removeRegion(
    args: RemoveRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRegionCommandOutput) => void
  ): void;
  public removeRegion(
    args: RemoveRegionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveRegionCommandOutput) => void),
    cb?: (err: any, data?: RemoveRegionCommandOutput) => void
  ): Promise<RemoveRegionCommandOutput> | void {
    const command = new RemoveRegionCommand(args);
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
   * <p>Removes tags from a directory.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
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
   * <p>Resets the password for any user in your Managed Microsoft AD or Simple AD
   *       directory.</p>
   *          <p>You can reset the password for any user in your directory with the following
   *       exceptions:</p>
   *          <ul>
   *             <li>
   *                <p>For Simple AD, you cannot reset the password for any user that is a member of either
   *           the <b>Domain Admins</b> or <b>Enterprise
   *             Admins</b> group except for the administrator user.</p>
   *             </li>
   *             <li>
   *                <p>For Managed Microsoft AD, you can only reset the password for a user that is in an
   *           OU based off of the NetBIOS name that you typed when you created your directory. For
   *           example, you cannot reset the password for a user in the <b>Amazon Web Services
   *             Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration
   *             Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetUserPasswordCommandOutput>;
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): void;
  public resetUserPassword(
    args: ResetUserPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetUserPasswordCommandOutput) => void),
    cb?: (err: any, data?: ResetUserPasswordCommandOutput) => void
  ): Promise<ResetUserPasswordCommandOutput> | void {
    const command = new ResetUserPasswordCommand(args);
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
   * <p>Restores a directory using an existing directory snapshot.</p>
   *          <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p>
   *          <p>This action returns as soon as the restore operation is initiated. You can monitor the
   *          progress of the restore operation by calling the <a>DescribeDirectories</a> operation with
   *          the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to
   *             <code>Active</code>, the restore operation is complete.</p>
   */
  public restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromSnapshotCommandOutput>;
  public restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): void;
  public restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): void;
  public restoreFromSnapshot(
    args: RestoreFromSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreFromSnapshotCommandOutput) => void
  ): Promise<RestoreFromSnapshotCommandOutput> | void {
    const command = new RestoreFromSnapshotCommand(args);
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
   * <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory
   *       owner) with another Amazon Web Services account (directory consumer). With this operation you can use your
   *       directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p>
   *          <p>When you share your Managed Microsoft AD directory, Directory Service creates a
   *       shared directory in the directory consumer account. This shared directory contains the
   *       metadata to provide access to the directory within the directory owner account. The shared
   *       directory is visible in all VPCs in the directory consumer account.</p>
   *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
   *       shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It
   *       also determines whether you can share the directory with any other Amazon Web Services account either inside
   *       or outside of the organization (<code>HANDSHAKE</code>).</p>
   *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
   *       which sends a directory sharing request to the directory consumer. </p>
   */
  public shareDirectory(
    args: ShareDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ShareDirectoryCommandOutput>;
  public shareDirectory(
    args: ShareDirectoryCommandInput,
    cb: (err: any, data?: ShareDirectoryCommandOutput) => void
  ): void;
  public shareDirectory(
    args: ShareDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ShareDirectoryCommandOutput) => void
  ): void;
  public shareDirectory(
    args: ShareDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ShareDirectoryCommandOutput) => void),
    cb?: (err: any, data?: ShareDirectoryCommandOutput) => void
  ): Promise<ShareDirectoryCommandOutput> | void {
    const command = new ShareDirectoryCommand(args);
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
   * <p>Applies a schema extension to a Microsoft AD directory.</p>
   */
  public startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSchemaExtensionCommandOutput>;
  public startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    cb: (err: any, data?: StartSchemaExtensionCommandOutput) => void
  ): void;
  public startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSchemaExtensionCommandOutput) => void
  ): void;
  public startSchemaExtension(
    args: StartSchemaExtensionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSchemaExtensionCommandOutput) => void),
    cb?: (err: any, data?: StartSchemaExtensionCommandOutput) => void
  ): Promise<StartSchemaExtensionCommandOutput> | void {
    const command = new StartSchemaExtensionCommand(args);
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
   * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
   */
  public unshareDirectory(
    args: UnshareDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnshareDirectoryCommandOutput>;
  public unshareDirectory(
    args: UnshareDirectoryCommandInput,
    cb: (err: any, data?: UnshareDirectoryCommandOutput) => void
  ): void;
  public unshareDirectory(
    args: UnshareDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnshareDirectoryCommandOutput) => void
  ): void;
  public unshareDirectory(
    args: UnshareDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnshareDirectoryCommandOutput) => void),
    cb?: (err: any, data?: UnshareDirectoryCommandOutput) => void
  ): Promise<UnshareDirectoryCommandOutput> | void {
    const command = new UnshareDirectoryCommand(args);
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
   * <p>Updates a conditional forwarder that has been set up for your Amazon Web Services
   *       directory.</p>
   */
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConditionalForwarderCommandOutput>;
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    cb: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void
  ): void;
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void
  ): void;
  public updateConditionalForwarder(
    args: UpdateConditionalForwarderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConditionalForwarderCommandOutput) => void),
    cb?: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void
  ): Promise<UpdateConditionalForwarderCommandOutput> | void {
    const command = new UpdateConditionalForwarderCommand(args);
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
   * <p>
   *       Updates the directory for a particular update type.
   *     </p>
   */
  public updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectorySetupCommandOutput>;
  public updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    cb: (err: any, data?: UpdateDirectorySetupCommandOutput) => void
  ): void;
  public updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectorySetupCommandOutput) => void
  ): void;
  public updateDirectorySetup(
    args: UpdateDirectorySetupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDirectorySetupCommandOutput) => void),
    cb?: (err: any, data?: UpdateDirectorySetupCommandOutput) => void
  ): Promise<UpdateDirectorySetupCommandOutput> | void {
    const command = new UpdateDirectorySetupCommand(args);
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
   * <p>Adds or removes domain controllers to or from the directory. Based on the difference
   *       between current value and new value (provided through this API call), domain controllers will
   *       be added or removed. It may take up to 45 minutes for any new domain controllers to become
   *       fully active once the requested number of domain controllers is updated. During this time, you
   *       cannot make another update request.</p>
   */
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNumberOfDomainControllersCommandOutput>;
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    cb: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void
  ): void;
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void
  ): void;
  public updateNumberOfDomainControllers(
    args: UpdateNumberOfDomainControllersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void),
    cb?: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void
  ): Promise<UpdateNumberOfDomainControllersCommandOutput> | void {
    const command = new UpdateNumberOfDomainControllersCommand(args);
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
   * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information
   *          for an AD Connector or Microsoft AD directory.</p>
   */
  public updateRadius(
    args: UpdateRadiusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRadiusCommandOutput>;
  public updateRadius(args: UpdateRadiusCommandInput, cb: (err: any, data?: UpdateRadiusCommandOutput) => void): void;
  public updateRadius(
    args: UpdateRadiusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRadiusCommandOutput) => void
  ): void;
  public updateRadius(
    args: UpdateRadiusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRadiusCommandOutput) => void),
    cb?: (err: any, data?: UpdateRadiusCommandOutput) => void
  ): Promise<UpdateRadiusCommandOutput> | void {
    const command = new UpdateRadiusCommand(args);
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
   * <p>Updates the configurable settings for the specified directory.</p>
   */
  public updateSettings(
    args: UpdateSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSettingsCommandOutput>;
  public updateSettings(
    args: UpdateSettingsCommandInput,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;
  public updateSettings(
    args: UpdateSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;
  public updateSettings(
    args: UpdateSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): Promise<UpdateSettingsCommandOutput> | void {
    const command = new UpdateSettingsCommand(args);
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
   * <p>Updates the trust that has been set up between your Managed Microsoft AD directory and an
   *       self-managed Active Directory.</p>
   */
  public updateTrust(args: UpdateTrustCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrustCommandOutput>;
  public updateTrust(args: UpdateTrustCommandInput, cb: (err: any, data?: UpdateTrustCommandOutput) => void): void;
  public updateTrust(
    args: UpdateTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustCommandOutput) => void
  ): void;
  public updateTrust(
    args: UpdateTrustCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrustCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrustCommandOutput) => void
  ): Promise<UpdateTrustCommandOutput> | void {
    const command = new UpdateTrustCommand(args);
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
   * <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust
   *       relationships.</p>
   *          <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an
   *       external domain.</p>
   */
  public verifyTrust(args: VerifyTrustCommandInput, options?: __HttpHandlerOptions): Promise<VerifyTrustCommandOutput>;
  public verifyTrust(args: VerifyTrustCommandInput, cb: (err: any, data?: VerifyTrustCommandOutput) => void): void;
  public verifyTrust(
    args: VerifyTrustCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyTrustCommandOutput) => void
  ): void;
  public verifyTrust(
    args: VerifyTrustCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: VerifyTrustCommandOutput) => void),
    cb?: (err: any, data?: VerifyTrustCommandOutput) => void
  ): Promise<VerifyTrustCommandOutput> | void {
    const command = new VerifyTrustCommand(args);
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
