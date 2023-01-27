// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppStreamClient } from "./AppStreamClient";
import {
  AssociateApplicationFleetCommand,
  AssociateApplicationFleetCommandInput,
  AssociateApplicationFleetCommandOutput,
} from "./commands/AssociateApplicationFleetCommand";
import {
  AssociateApplicationToEntitlementCommand,
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
} from "./commands/AssociateApplicationToEntitlementCommand";
import {
  AssociateFleetCommand,
  AssociateFleetCommandInput,
  AssociateFleetCommandOutput,
} from "./commands/AssociateFleetCommand";
import {
  BatchAssociateUserStackCommand,
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "./commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommand,
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommand, CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import {
  CreateAppBlockCommand,
  CreateAppBlockCommandInput,
  CreateAppBlockCommandOutput,
} from "./commands/CreateAppBlockCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDirectoryConfigCommand,
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "./commands/CreateDirectoryConfigCommand";
import {
  CreateEntitlementCommand,
  CreateEntitlementCommandInput,
  CreateEntitlementCommandOutput,
} from "./commands/CreateEntitlementCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateImageBuilderCommand,
  CreateImageBuilderCommandInput,
  CreateImageBuilderCommandOutput,
} from "./commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommand,
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "./commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommand, CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStreamingURLCommand,
  CreateStreamingURLCommandInput,
  CreateStreamingURLCommandOutput,
} from "./commands/CreateStreamingURLCommand";
import {
  CreateUpdatedImageCommand,
  CreateUpdatedImageCommandInput,
  CreateUpdatedImageCommandOutput,
} from "./commands/CreateUpdatedImageCommand";
import {
  CreateUsageReportSubscriptionCommand,
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAppBlockCommand,
  DeleteAppBlockCommandInput,
  DeleteAppBlockCommandOutput,
} from "./commands/DeleteAppBlockCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteDirectoryConfigCommand,
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "./commands/DeleteDirectoryConfigCommand";
import {
  DeleteEntitlementCommand,
  DeleteEntitlementCommandInput,
  DeleteEntitlementCommandOutput,
} from "./commands/DeleteEntitlementCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteImageBuilderCommand,
  DeleteImageBuilderCommandInput,
  DeleteImageBuilderCommandOutput,
} from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommand, DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommand,
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommand, DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteUsageReportSubscriptionCommand,
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeAppBlocksCommand,
  DescribeAppBlocksCommandInput,
  DescribeAppBlocksCommandOutput,
} from "./commands/DescribeAppBlocksCommand";
import {
  DescribeApplicationFleetAssociationsCommand,
  DescribeApplicationFleetAssociationsCommandInput,
  DescribeApplicationFleetAssociationsCommandOutput,
} from "./commands/DescribeApplicationFleetAssociationsCommand";
import {
  DescribeApplicationsCommand,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeDirectoryConfigsCommand,
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "./commands/DescribeDirectoryConfigsCommand";
import {
  DescribeEntitlementsCommand,
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
} from "./commands/DescribeEntitlementsCommand";
import {
  DescribeFleetsCommand,
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput,
} from "./commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommand,
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "./commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommand,
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "./commands/DescribeImagePermissionsCommand";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "./commands/DescribeImagesCommand";
import {
  DescribeSessionsCommand,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
} from "./commands/DescribeSessionsCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "./commands/DescribeStacksCommand";
import {
  DescribeUsageReportSubscriptionsCommand,
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "./commands/DescribeUsageReportSubscriptionsCommand";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "./commands/DescribeUsersCommand";
import {
  DescribeUserStackAssociationsCommand,
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "./commands/DescribeUserStackAssociationsCommand";
import { DisableUserCommand, DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  DisassociateApplicationFleetCommand,
  DisassociateApplicationFleetCommandInput,
  DisassociateApplicationFleetCommandOutput,
} from "./commands/DisassociateApplicationFleetCommand";
import {
  DisassociateApplicationFromEntitlementCommand,
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
} from "./commands/DisassociateApplicationFromEntitlementCommand";
import {
  DisassociateFleetCommand,
  DisassociateFleetCommandInput,
  DisassociateFleetCommandOutput,
} from "./commands/DisassociateFleetCommand";
import { EnableUserCommand, EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import {
  ExpireSessionCommand,
  ExpireSessionCommandInput,
  ExpireSessionCommandOutput,
} from "./commands/ExpireSessionCommand";
import {
  ListAssociatedFleetsCommand,
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "./commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommand,
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "./commands/ListAssociatedStacksCommand";
import {
  ListEntitledApplicationsCommand,
  ListEntitledApplicationsCommandInput,
  ListEntitledApplicationsCommandOutput,
} from "./commands/ListEntitledApplicationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartFleetCommand, StartFleetCommandInput, StartFleetCommandOutput } from "./commands/StartFleetCommand";
import {
  StartImageBuilderCommand,
  StartImageBuilderCommandInput,
  StartImageBuilderCommandOutput,
} from "./commands/StartImageBuilderCommand";
import { StopFleetCommand, StopFleetCommandInput, StopFleetCommandOutput } from "./commands/StopFleetCommand";
import {
  StopImageBuilderCommand,
  StopImageBuilderCommandInput,
  StopImageBuilderCommandOutput,
} from "./commands/StopImageBuilderCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateDirectoryConfigCommand,
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "./commands/UpdateDirectoryConfigCommand";
import {
  UpdateEntitlementCommand,
  UpdateEntitlementCommandInput,
  UpdateEntitlementCommandOutput,
} from "./commands/UpdateEntitlementCommand";
import { UpdateFleetCommand, UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommand,
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommand, UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";

/**
 * <fullname>Amazon AppStream 2.0</fullname>
 *          <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *          <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *          <p>To learn more about AppStream 2.0, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class AppStream extends AppStreamClient {
  /**
   * <p>Associates the specified application with the specified fleet. This is only supported for Elastic fleets.</p>
   */
  public associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationFleetCommandOutput>;
  public associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    cb: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): void;
  public associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): void;
  public associateApplicationFleet(
    args: AssociateApplicationFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateApplicationFleetCommandOutput) => void),
    cb?: (err: any, data?: AssociateApplicationFleetCommandOutput) => void
  ): Promise<AssociateApplicationFleetCommandOutput> | void {
    const command = new AssociateApplicationFleetCommand(args);
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
   * <p>Associates an application to entitle.</p>
   */
  public associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApplicationToEntitlementCommandOutput>;
  public associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    cb: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): void;
  public associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): void;
  public associateApplicationToEntitlement(
    args: AssociateApplicationToEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void),
    cb?: (err: any, data?: AssociateApplicationToEntitlementCommandOutput) => void
  ): Promise<AssociateApplicationToEntitlementCommandOutput> | void {
    const command = new AssociateApplicationToEntitlementCommand(args);
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
   * <p>Associates the specified fleet with the specified stack.</p>
   */
  public associateFleet(
    args: AssociateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFleetCommandOutput>;
  public associateFleet(
    args: AssociateFleetCommandInput,
    cb: (err: any, data?: AssociateFleetCommandOutput) => void
  ): void;
  public associateFleet(
    args: AssociateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFleetCommandOutput) => void
  ): void;
  public associateFleet(
    args: AssociateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateFleetCommandOutput) => void),
    cb?: (err: any, data?: AssociateFleetCommandOutput) => void
  ): Promise<AssociateFleetCommandOutput> | void {
    const command = new AssociateFleetCommand(args);
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
   * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
   */
  public batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateUserStackCommandOutput>;
  public batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): void;
  public batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): void;
  public batchAssociateUserStack(
    args: BatchAssociateUserStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchAssociateUserStackCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateUserStackCommandOutput) => void
  ): Promise<BatchAssociateUserStackCommandOutput> | void {
    const command = new BatchAssociateUserStackCommand(args);
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
   * <p>Disassociates the specified users from the specified stacks.</p>
   */
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateUserStackCommandOutput>;
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): void;
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): void;
  public batchDisassociateUserStack(
    args: BatchDisassociateUserStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDisassociateUserStackCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateUserStackCommandOutput) => void
  ): Promise<BatchDisassociateUserStackCommandOutput> | void {
    const command = new BatchDisassociateUserStackCommand(args);
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
   * <p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>
   */
  public copyImage(args: CopyImageCommandInput, options?: __HttpHandlerOptions): Promise<CopyImageCommandOutput>;
  public copyImage(args: CopyImageCommandInput, cb: (err: any, data?: CopyImageCommandOutput) => void): void;
  public copyImage(
    args: CopyImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyImageCommandOutput) => void
  ): void;
  public copyImage(
    args: CopyImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyImageCommandOutput) => void),
    cb?: (err: any, data?: CopyImageCommandOutput) => void
  ): Promise<CopyImageCommandOutput> | void {
    const command = new CopyImageCommand(args);
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
   * <p>Creates an app block.</p>
   *          <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the
   *             virtual hard disk in an S3 bucket. It also stores the setup script with details about
   *             how to mount the virtual hard disk. The virtual hard disk includes the application
   *             binaries and other files necessary to launch your applications. Multiple applications
   *             can be assigned to a single app block.</p>
   *          <p>This is only supported for Elastic fleets.</p>
   */
  public createAppBlock(
    args: CreateAppBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppBlockCommandOutput>;
  public createAppBlock(
    args: CreateAppBlockCommandInput,
    cb: (err: any, data?: CreateAppBlockCommandOutput) => void
  ): void;
  public createAppBlock(
    args: CreateAppBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppBlockCommandOutput) => void
  ): void;
  public createAppBlock(
    args: CreateAppBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAppBlockCommandOutput) => void),
    cb?: (err: any, data?: CreateAppBlockCommandOutput) => void
  ): Promise<CreateAppBlockCommandOutput> | void {
    const command = new CreateAppBlockCommand(args);
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
   * <p>Creates an application.</p>
   *          <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to
   *             launch applications on Elastic fleet streaming instances. An application consists of the
   *             launch details, icon, and display name. Applications are associated with an app block
   *             that contains the application binaries and other files. The applications assigned to an
   *             Elastic fleet are the applications users can launch. </p>
   *          <p>This is only supported for Elastic fleets.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
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
   * <p>Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
   */
  public createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryConfigCommandOutput>;
  public createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): void;
  public createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): void;
  public createDirectoryConfig(
    args: CreateDirectoryConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDirectoryConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateDirectoryConfigCommandOutput) => void
  ): Promise<CreateDirectoryConfigCommandOutput> | void {
    const command = new CreateDirectoryConfigCommand(args);
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
   * <p>Creates a new entitlement. Entitlements control access to specific applications within
   *             a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user
   *             identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all
   *             applications in a stack. Entitlements don't apply to the desktop stream view
   *             application, or to applications managed by a dynamic app provider using the Dynamic
   *             Application Framework.</p>
   */
  public createEntitlement(
    args: CreateEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntitlementCommandOutput>;
  public createEntitlement(
    args: CreateEntitlementCommandInput,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;
  public createEntitlement(
    args: CreateEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;
  public createEntitlement(
    args: CreateEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEntitlementCommandOutput) => void),
    cb?: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): Promise<CreateEntitlementCommandOutput> | void {
    const command = new CreateEntitlementCommand(args);
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
   * <p>Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.</p>
   */
  public createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  public createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
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
   * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p>
   *          <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
   */
  public createImageBuilder(
    args: CreateImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageBuilderCommandOutput>;
  public createImageBuilder(
    args: CreateImageBuilderCommandInput,
    cb: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): void;
  public createImageBuilder(
    args: CreateImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): void;
  public createImageBuilder(
    args: CreateImageBuilderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImageBuilderCommandOutput) => void),
    cb?: (err: any, data?: CreateImageBuilderCommandOutput) => void
  ): Promise<CreateImageBuilderCommandOutput> | void {
    const command = new CreateImageBuilderCommand(args);
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
   * <p>Creates a URL to start an image builder streaming session.</p>
   */
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageBuilderStreamingURLCommandOutput>;
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): void;
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): void;
  public createImageBuilderStreamingURL(
    args: CreateImageBuilderStreamingURLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void),
    cb?: (err: any, data?: CreateImageBuilderStreamingURLCommandOutput) => void
  ): Promise<CreateImageBuilderStreamingURLCommandOutput> | void {
    const command = new CreateImageBuilderStreamingURLCommand(args);
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
   * <p>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. </p>
   */
  public createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
  public createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
  public createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;
  public createStack(
    args: CreateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStackCommandOutput) => void),
    cb?: (err: any, data?: CreateStackCommandOutput) => void
  ): Promise<CreateStackCommandOutput> | void {
    const command = new CreateStackCommand(args);
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
   * <p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>
   */
  public createStreamingURL(
    args: CreateStreamingURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingURLCommandOutput>;
  public createStreamingURL(
    args: CreateStreamingURLCommandInput,
    cb: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): void;
  public createStreamingURL(
    args: CreateStreamingURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): void;
  public createStreamingURL(
    args: CreateStreamingURLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamingURLCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingURLCommandOutput) => void
  ): Promise<CreateStreamingURLCommandOutput> | void {
    const command = new CreateStreamingURLCommand(args);
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
   * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p>
   *          <p>For more information, see the "Update an Image by Using
   *             Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
   */
  public createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUpdatedImageCommandOutput>;
  public createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    cb: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): void;
  public createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): void;
  public createUpdatedImage(
    args: CreateUpdatedImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUpdatedImageCommandOutput) => void),
    cb?: (err: any, data?: CreateUpdatedImageCommandOutput) => void
  ): Promise<CreateUpdatedImageCommandOutput> | void {
    const command = new CreateUpdatedImageCommand(args);
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
   * <p>Creates a usage report subscription. Usage reports are generated daily.</p>
   */
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageReportSubscriptionCommandOutput>;
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): void;
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): void;
  public createUsageReportSubscription(
    args: CreateUsageReportSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateUsageReportSubscriptionCommandOutput) => void
  ): Promise<CreateUsageReportSubscriptionCommandOutput> | void {
    const command = new CreateUsageReportSubscriptionCommand(args);
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
   * <p>Creates a new user in the user pool.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
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
   * <p>Deletes an app block.</p>
   */
  public deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppBlockCommandOutput>;
  public deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    cb: (err: any, data?: DeleteAppBlockCommandOutput) => void
  ): void;
  public deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppBlockCommandOutput) => void
  ): void;
  public deleteAppBlock(
    args: DeleteAppBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppBlockCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppBlockCommandOutput) => void
  ): Promise<DeleteAppBlockCommandOutput> | void {
    const command = new DeleteAppBlockCommand(args);
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
   * <p>Deletes an application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
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
   * <p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>
   */
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryConfigCommandOutput>;
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): void;
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): void;
  public deleteDirectoryConfig(
    args: DeleteDirectoryConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDirectoryConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteDirectoryConfigCommandOutput) => void
  ): Promise<DeleteDirectoryConfigCommandOutput> | void {
    const command = new DeleteDirectoryConfigCommand(args);
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
   * <p>Deletes the specified entitlement.</p>
   */
  public deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntitlementCommandOutput>;
  public deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;
  public deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;
  public deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEntitlementCommandOutput) => void),
    cb?: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): Promise<DeleteEntitlementCommandOutput> | void {
    const command = new DeleteEntitlementCommand(args);
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
   * <p>Deletes the specified fleet.</p>
   */
  public deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  public deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetCommandOutput) => void
  ): Promise<DeleteFleetCommandOutput> | void {
    const command = new DeleteFleetCommand(args);
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
   * <p>Deletes the specified image. You cannot delete an image when it is in use.
   *             After you delete an image, you cannot provision new capacity using the image.</p>
   */
  public deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
  public deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
  public deleteImage(
    args: DeleteImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageCommandOutput) => void
  ): void;
  public deleteImage(
    args: DeleteImageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImageCommandOutput) => void),
    cb?: (err: any, data?: DeleteImageCommandOutput) => void
  ): Promise<DeleteImageCommandOutput> | void {
    const command = new DeleteImageCommand(args);
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
   * <p>Deletes the specified image builder and releases the capacity.</p>
   */
  public deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImageBuilderCommandOutput>;
  public deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): void;
  public deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): void;
  public deleteImageBuilder(
    args: DeleteImageBuilderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImageBuilderCommandOutput) => void),
    cb?: (err: any, data?: DeleteImageBuilderCommandOutput) => void
  ): Promise<DeleteImageBuilderCommandOutput> | void {
    const command = new DeleteImageBuilderCommand(args);
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
   * <p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>
   */
  public deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImagePermissionsCommandOutput>;
  public deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): void;
  public deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): void;
  public deleteImagePermissions(
    args: DeleteImagePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImagePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteImagePermissionsCommandOutput) => void
  ): Promise<DeleteImagePermissionsCommandOutput> | void {
    const command = new DeleteImagePermissionsCommand(args);
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
   * <p>Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.</p>
   */
  public deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
  public deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStackCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackCommandOutput) => void
  ): Promise<DeleteStackCommandOutput> | void {
    const command = new DeleteStackCommand(args);
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
   * <p>Disables usage report generation.</p>
   */
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageReportSubscriptionCommandOutput>;
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): void;
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): void;
  public deleteUsageReportSubscription(
    args: DeleteUsageReportSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteUsageReportSubscriptionCommandOutput) => void
  ): Promise<DeleteUsageReportSubscriptionCommandOutput> | void {
    const command = new DeleteUsageReportSubscriptionCommand(args);
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
   * <p>Deletes a user from the user pool.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
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
   * <p>Retrieves a list that describes one or more app blocks.</p>
   */
  public describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppBlocksCommandOutput>;
  public describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    cb: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): void;
  public describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): void;
  public describeAppBlocks(
    args: DescribeAppBlocksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAppBlocksCommandOutput) => void),
    cb?: (err: any, data?: DescribeAppBlocksCommandOutput) => void
  ): Promise<DescribeAppBlocksCommandOutput> | void {
    const command = new DescribeAppBlocksCommand(args);
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
   * <p>Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.</p>
   */
  public describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationFleetAssociationsCommandOutput>;
  public describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    cb: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): void;
  public describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): void;
  public describeApplicationFleetAssociations(
    args: DescribeApplicationFleetAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationFleetAssociationsCommandOutput) => void
  ): Promise<DescribeApplicationFleetAssociationsCommandOutput> | void {
    const command = new DescribeApplicationFleetAssociationsCommand(args);
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
   * <p>Retrieves a list that describes one or more applications.</p>
   */
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  public describeApplications(
    args: DescribeApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): Promise<DescribeApplicationsCommandOutput> | void {
    const command = new DescribeApplicationsCommand(args);
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
   * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
   *         </p>
   *          <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
   */
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDirectoryConfigsCommandOutput>;
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): void;
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): void;
  public describeDirectoryConfigs(
    args: DescribeDirectoryConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDirectoryConfigsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDirectoryConfigsCommandOutput) => void
  ): Promise<DescribeDirectoryConfigsCommandOutput> | void {
    const command = new DescribeDirectoryConfigsCommand(args);
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
   * <p>Retrieves a list that describes one of more entitlements.</p>
   */
  public describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntitlementsCommandOutput>;
  public describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    cb: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): void;
  public describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): void;
  public describeEntitlements(
    args: DescribeEntitlementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEntitlementsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEntitlementsCommandOutput) => void
  ): Promise<DescribeEntitlementsCommandOutput> | void {
    const command = new DescribeEntitlementsCommand(args);
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
   * <p>Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.</p>
   */
  public describeFleets(
    args: DescribeFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetsCommandOutput>;
  public describeFleets(
    args: DescribeFleetsCommandInput,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;
  public describeFleets(
    args: DescribeFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): void;
  public describeFleets(
    args: DescribeFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetsCommandOutput) => void
  ): Promise<DescribeFleetsCommandOutput> | void {
    const command = new DescribeFleetsCommand(args);
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
   * <p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>
   */
  public describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageBuildersCommandOutput>;
  public describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): void;
  public describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): void;
  public describeImageBuilders(
    args: DescribeImageBuildersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImageBuildersCommandOutput) => void),
    cb?: (err: any, data?: DescribeImageBuildersCommandOutput) => void
  ): Promise<DescribeImageBuildersCommandOutput> | void {
    const command = new DescribeImageBuildersCommand(args);
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
   * <p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>
   */
  public describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagePermissionsCommandOutput>;
  public describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): void;
  public describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): void;
  public describeImagePermissions(
    args: DescribeImagePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImagePermissionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeImagePermissionsCommandOutput) => void
  ): Promise<DescribeImagePermissionsCommandOutput> | void {
    const command = new DescribeImagePermissionsCommand(args);
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
   * <p>Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.</p>
   */
  public describeImages(
    args: DescribeImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImagesCommandOutput>;
  public describeImages(
    args: DescribeImagesCommandInput,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImagesCommandOutput) => void
  ): void;
  public describeImages(
    args: DescribeImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeImagesCommandOutput) => void
  ): Promise<DescribeImagesCommandOutput> | void {
    const command = new DescribeImagesCommand(args);
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
   * <p>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet,
   *             only streaming sessions for that user are described. If an authentication type is not provided,
   *             the default is to authenticate users using a streaming URL.</p>
   */
  public describeSessions(
    args: DescribeSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSessionsCommandOutput>;
  public describeSessions(
    args: DescribeSessionsCommandInput,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  public describeSessions(
    args: DescribeSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): void;
  public describeSessions(
    args: DescribeSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSessionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSessionsCommandOutput) => void
  ): Promise<DescribeSessionsCommandOutput> | void {
    const command = new DescribeSessionsCommand(args);
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
   * <p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>
   */
  public describeStacks(
    args: DescribeStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStacksCommandOutput>;
  public describeStacks(
    args: DescribeStacksCommandInput,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeStacksCommandOutput) => void
  ): Promise<DescribeStacksCommandOutput> | void {
    const command = new DescribeStacksCommand(args);
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
   * <p>Retrieves a list that describes one or more usage report subscriptions.</p>
   */
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsageReportSubscriptionsCommandOutput>;
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): void;
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): void;
  public describeUsageReportSubscriptions(
    args: DescribeUsageReportSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeUsageReportSubscriptionsCommandOutput) => void
  ): Promise<DescribeUsageReportSubscriptionsCommandOutput> | void {
    const command = new DescribeUsageReportSubscriptionsCommand(args);
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
   * <p>Retrieves a list that describes one or more specified users in the user pool.</p>
   */
  public describeUsers(
    args: DescribeUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsersCommandOutput>;
  public describeUsers(
    args: DescribeUsersCommandInput,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUsersCommandOutput) => void),
    cb?: (err: any, data?: DescribeUsersCommandOutput) => void
  ): Promise<DescribeUsersCommandOutput> | void {
    const command = new DescribeUsersCommand(args);
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
   * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p>
   *          <ul>
   *             <li>
   *                <p>The stack name</p>
   *             </li>
   *             <li>
   *                <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p>
   *             </li>
   *          </ul>
   */
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserStackAssociationsCommandOutput>;
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): void;
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): void;
  public describeUserStackAssociations(
    args: DescribeUserStackAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserStackAssociationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserStackAssociationsCommandOutput) => void
  ): Promise<DescribeUserStackAssociationsCommandOutput> | void {
    const command = new DescribeUserStackAssociationsCommand(args);
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
   * <p>Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user. </p>
   */
  public disableUser(args: DisableUserCommandInput, options?: __HttpHandlerOptions): Promise<DisableUserCommandOutput>;
  public disableUser(args: DisableUserCommandInput, cb: (err: any, data?: DisableUserCommandOutput) => void): void;
  public disableUser(
    args: DisableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableUserCommandOutput) => void
  ): void;
  public disableUser(
    args: DisableUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableUserCommandOutput) => void),
    cb?: (err: any, data?: DisableUserCommandOutput) => void
  ): Promise<DisableUserCommandOutput> | void {
    const command = new DisableUserCommand(args);
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
   * <p>Disassociates the specified application from the fleet.</p>
   */
  public disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationFleetCommandOutput>;
  public disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    cb: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): void;
  public disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): void;
  public disassociateApplicationFleet(
    args: DisassociateApplicationFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateApplicationFleetCommandOutput) => void),
    cb?: (err: any, data?: DisassociateApplicationFleetCommandOutput) => void
  ): Promise<DisassociateApplicationFleetCommandOutput> | void {
    const command = new DisassociateApplicationFleetCommand(args);
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
   * <p>Deletes the specified application from the specified entitlement.</p>
   */
  public disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApplicationFromEntitlementCommandOutput>;
  public disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    cb: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): void;
  public disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): void;
  public disassociateApplicationFromEntitlement(
    args: DisassociateApplicationFromEntitlementCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void),
    cb?: (err: any, data?: DisassociateApplicationFromEntitlementCommandOutput) => void
  ): Promise<DisassociateApplicationFromEntitlementCommandOutput> | void {
    const command = new DisassociateApplicationFromEntitlementCommand(args);
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
   * <p>Disassociates the specified fleet from the specified stack.</p>
   */
  public disassociateFleet(
    args: DisassociateFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFleetCommandOutput>;
  public disassociateFleet(
    args: DisassociateFleetCommandInput,
    cb: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): void;
  public disassociateFleet(
    args: DisassociateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): void;
  public disassociateFleet(
    args: DisassociateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFleetCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFleetCommandOutput) => void
  ): Promise<DisassociateFleetCommandOutput> | void {
    const command = new DisassociateFleetCommand(args);
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
   * <p>Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.</p>
   */
  public enableUser(args: EnableUserCommandInput, options?: __HttpHandlerOptions): Promise<EnableUserCommandOutput>;
  public enableUser(args: EnableUserCommandInput, cb: (err: any, data?: EnableUserCommandOutput) => void): void;
  public enableUser(
    args: EnableUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableUserCommandOutput) => void
  ): void;
  public enableUser(
    args: EnableUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableUserCommandOutput) => void),
    cb?: (err: any, data?: EnableUserCommandOutput) => void
  ): Promise<EnableUserCommandOutput> | void {
    const command = new EnableUserCommand(args);
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
   * <p>Immediately stops the specified streaming session.</p>
   */
  public expireSession(
    args: ExpireSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExpireSessionCommandOutput>;
  public expireSession(
    args: ExpireSessionCommandInput,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;
  public expireSession(
    args: ExpireSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExpireSessionCommandOutput) => void
  ): void;
  public expireSession(
    args: ExpireSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExpireSessionCommandOutput) => void),
    cb?: (err: any, data?: ExpireSessionCommandOutput) => void
  ): Promise<ExpireSessionCommandOutput> | void {
    const command = new ExpireSessionCommand(args);
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
   * <p>Retrieves the name of the fleet that is associated with the specified stack.</p>
   */
  public listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedFleetsCommandOutput>;
  public listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): void;
  public listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): void;
  public listAssociatedFleets(
    args: ListAssociatedFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociatedFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedFleetsCommandOutput) => void
  ): Promise<ListAssociatedFleetsCommandOutput> | void {
    const command = new ListAssociatedFleetsCommand(args);
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
   * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
   */
  public listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedStacksCommandOutput>;
  public listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): void;
  public listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): void;
  public listAssociatedStacks(
    args: ListAssociatedStacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociatedStacksCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedStacksCommandOutput) => void
  ): Promise<ListAssociatedStacksCommandOutput> | void {
    const command = new ListAssociatedStacksCommand(args);
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
   * <p>Retrieves a list of entitled applications.</p>
   */
  public listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitledApplicationsCommandOutput>;
  public listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    cb: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): void;
  public listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): void;
  public listEntitledApplications(
    args: ListEntitledApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitledApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListEntitledApplicationsCommandOutput) => void
  ): Promise<ListEntitledApplicationsCommandOutput> | void {
    const command = new ListEntitledApplicationsCommand(args);
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
   * <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
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
   * <p>Starts the specified fleet.</p>
   */
  public startFleet(args: StartFleetCommandInput, options?: __HttpHandlerOptions): Promise<StartFleetCommandOutput>;
  public startFleet(args: StartFleetCommandInput, cb: (err: any, data?: StartFleetCommandOutput) => void): void;
  public startFleet(
    args: StartFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFleetCommandOutput) => void
  ): void;
  public startFleet(
    args: StartFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFleetCommandOutput) => void),
    cb?: (err: any, data?: StartFleetCommandOutput) => void
  ): Promise<StartFleetCommandOutput> | void {
    const command = new StartFleetCommand(args);
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
   * <p>Starts the specified image builder.</p>
   */
  public startImageBuilder(
    args: StartImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImageBuilderCommandOutput>;
  public startImageBuilder(
    args: StartImageBuilderCommandInput,
    cb: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): void;
  public startImageBuilder(
    args: StartImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): void;
  public startImageBuilder(
    args: StartImageBuilderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImageBuilderCommandOutput) => void),
    cb?: (err: any, data?: StartImageBuilderCommandOutput) => void
  ): Promise<StartImageBuilderCommandOutput> | void {
    const command = new StartImageBuilderCommand(args);
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
   * <p>Stops the specified fleet.</p>
   */
  public stopFleet(args: StopFleetCommandInput, options?: __HttpHandlerOptions): Promise<StopFleetCommandOutput>;
  public stopFleet(args: StopFleetCommandInput, cb: (err: any, data?: StopFleetCommandOutput) => void): void;
  public stopFleet(
    args: StopFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFleetCommandOutput) => void
  ): void;
  public stopFleet(
    args: StopFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopFleetCommandOutput) => void),
    cb?: (err: any, data?: StopFleetCommandOutput) => void
  ): Promise<StopFleetCommandOutput> | void {
    const command = new StopFleetCommand(args);
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
   * <p>Stops the specified image builder.</p>
   */
  public stopImageBuilder(
    args: StopImageBuilderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopImageBuilderCommandOutput>;
  public stopImageBuilder(
    args: StopImageBuilderCommandInput,
    cb: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): void;
  public stopImageBuilder(
    args: StopImageBuilderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): void;
  public stopImageBuilder(
    args: StopImageBuilderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopImageBuilderCommandOutput) => void),
    cb?: (err: any, data?: StopImageBuilderCommandOutput) => void
  ): Promise<StopImageBuilderCommandOutput> | void {
    const command = new StopImageBuilderCommand(args);
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
   * <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p>
   *          <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key,
   *                 this operation updates its value.</p>
   *          <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.
   *                 To disassociate tags from your resources, use <a>UntagResource</a>.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
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
   * <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p>
   *          <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p>
   *          <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
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
   * <p>Updates the specified application.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
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
   * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
   */
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDirectoryConfigCommandOutput>;
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): void;
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): void;
  public updateDirectoryConfig(
    args: UpdateDirectoryConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDirectoryConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateDirectoryConfigCommandOutput) => void
  ): Promise<UpdateDirectoryConfigCommandOutput> | void {
    const command = new UpdateDirectoryConfigCommand(args);
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
   * <p>Updates the specified entitlement.</p>
   */
  public updateEntitlement(
    args: UpdateEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEntitlementCommandOutput>;
  public updateEntitlement(
    args: UpdateEntitlementCommandInput,
    cb: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): void;
  public updateEntitlement(
    args: UpdateEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): void;
  public updateEntitlement(
    args: UpdateEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEntitlementCommandOutput) => void),
    cb?: (err: any, data?: UpdateEntitlementCommandOutput) => void
  ): Promise<UpdateEntitlementCommandOutput> | void {
    const command = new UpdateEntitlementCommand(args);
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
   * <p>Updates the specified fleet.</p>
   *          <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except
   *             the fleet name.</p>
   *          <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based
   *             on the fleet type:</p>
   *          <ul>
   *             <li>
   *                <p>Always-On and On-Demand fleet types</p>
   *                <p>You can update the  <code>DisplayName</code>, <code>ComputeCapacity</code>,
   *                         <code>ImageARN</code>, <code>ImageName</code>,
   *                         <code>IdleDisconnectTimeoutInSeconds</code>, and
   *                         <code>DisconnectTimeoutInSeconds</code> attributes.</p>
   *             </li>
   *             <li>
   *                <p>Elastic fleet type</p>
   *                <p>You can update the  <code>DisplayName</code>,
   *                         <code>IdleDisconnectTimeoutInSeconds</code>,
   *                     <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code>
   *                     and <code>UsbDeviceFilterStrings</code> attributes.</p>
   *             </li>
   *          </ul>
   *          <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
   */
  public updateFleet(args: UpdateFleetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFleetCommandOutput>;
  public updateFleet(args: UpdateFleetCommandInput, cb: (err: any, data?: UpdateFleetCommandOutput) => void): void;
  public updateFleet(
    args: UpdateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCommandOutput) => void
  ): void;
  public updateFleet(
    args: UpdateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetCommandOutput) => void
  ): Promise<UpdateFleetCommandOutput> | void {
    const command = new UpdateFleetCommand(args);
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
   * <p>Adds or updates permissions for the specified private image. </p>
   */
  public updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImagePermissionsCommandOutput>;
  public updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): void;
  public updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): void;
  public updateImagePermissions(
    args: UpdateImagePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateImagePermissionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateImagePermissionsCommandOutput) => void
  ): Promise<UpdateImagePermissionsCommandOutput> | void {
    const command = new UpdateImagePermissionsCommand(args);
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
   * <p>Updates the specified fields for the specified stack.</p>
   */
  public updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
  public updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
  public updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStackCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackCommandOutput) => void
  ): Promise<UpdateStackCommandOutput> | void {
    const command = new UpdateStackCommand(args);
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
