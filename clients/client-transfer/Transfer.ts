import { TransferClient } from "./TransferClient";
import {
  CreateServerCommand,
  CreateServerCommandInput,
  CreateServerCommandOutput,
} from "./commands/CreateServerCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteServerCommand,
  DeleteServerCommandInput,
  DeleteServerCommandOutput,
} from "./commands/DeleteServerCommand";
import {
  DeleteSshPublicKeyCommand,
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput,
} from "./commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeServerCommand,
  DescribeServerCommandInput,
  DescribeServerCommandOutput,
} from "./commands/DescribeServerCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  ImportSshPublicKeyCommand,
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
} from "./commands/ImportSshPublicKeyCommand";
import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { StartServerCommand, StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand";
import { StopServerCommand, StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestIdentityProviderCommand,
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "./commands/TestIdentityProviderCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateServerCommand,
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
} from "./commands/UpdateServerCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Transfer for SFTP is a fully managed service that enables the transfer of files
 *       directly into and out of Amazon S3 using the Secure File Transfer Protocol (SFTP)—also known
 *       as Secure Shell (SSH) File Transfer Protocol. AWS helps you seamlessly migrate your file
 *       transfer workflows to AWS Transfer for SFTP—by integrating with existing authentication
 *       systems, and providing DNS routing with Amazon Route 53—so nothing changes for your customers
 *       and partners, or their applications. With your data in S3, you can use it with AWS services
 *       for processing, analytics, machine learning, and archiving. Getting started with AWS Transfer
 *       for SFTP (AWS SFTP) is easy; there is no infrastructure to buy and set
 *       up. </p>
 */
export class Transfer extends TransferClient {
  /**
   * <p>Instantiates an autoscaling virtual server based on Secure File Transfer Protocol (SFTP)
   *       in AWS. When you make updates to your server or when you work with users, use the
   *       service-generated <code>ServerId</code> property that is assigned to the newly created
   *       server.</p>
   */
  public createServer(
    args: CreateServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServerCommandOutput>;
  public createServer(args: CreateServerCommandInput, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
  public createServer(
    args: CreateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServerCommandOutput) => void
  ): void;
  public createServer(
    args: CreateServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServerCommandOutput) => void),
    cb?: (err: any, data?: CreateServerCommandOutput) => void
  ): Promise<CreateServerCommandOutput> | void {
    const command = new CreateServerCommand(args);
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
   * <p>Creates a user and associates them with an existing Secure File Transfer Protocol (SFTP)
   *       server. You can only create and associate users with SFTP servers that have the <code>IdentityProviderType</code>
   *       set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the
   *       home directory, store the user's public key, and assign the user's AWS Identity and Access
   *       Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata
   *       with tags that can be used to group and search for users.</p>
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
   * <p>Deletes the Secure File Transfer Protocol (SFTP) server that you specify.</p>
   *
   *
   *          <p>No response returns from this operation.</p>
   */
  public deleteServer(
    args: DeleteServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCommandOutput>;
  public deleteServer(args: DeleteServerCommandInput, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
  public deleteServer(
    args: DeleteServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCommandOutput) => void
  ): void;
  public deleteServer(
    args: DeleteServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServerCommandOutput) => void),
    cb?: (err: any, data?: DeleteServerCommandOutput) => void
  ): Promise<DeleteServerCommandOutput> | void {
    const command = new DeleteServerCommand(args);
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
   * <p>Deletes a user's Secure Shell (SSH) public key.</p>
   *
   *          <p>No response is returned from this operation.</p>
   */
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSshPublicKeyCommandOutput>;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): void;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSshPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void
  ): Promise<DeleteSshPublicKeyCommandOutput> | void {
    const command = new DeleteSshPublicKeyCommand(args);
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
   * <p>Deletes the user belonging to the server you specify.</p>
   *
   *          <p>No response returns from this operation.</p>
   *
   *          <note>
   *             <p>When you delete a user from a server, the user's information is lost.</p>
   *          </note>
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
   * <p>Describes the server that you specify by passing the <code>ServerId</code>
   *       parameter.</p>
   *
   *          <p>The response contains a description of the server's properties. When you set
   *         <code>EndpointType</code> to VPC, the response will contain the
   *       <code>EndpointDetails</code>.</p>
   */
  public describeServer(
    args: DescribeServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServerCommandOutput>;
  public describeServer(
    args: DescribeServerCommandInput,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;
  public describeServer(
    args: DescribeServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServerCommandOutput) => void
  ): void;
  public describeServer(
    args: DescribeServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServerCommandOutput) => void),
    cb?: (err: any, data?: DescribeServerCommandOutput) => void
  ): Promise<DescribeServerCommandOutput> | void {
    const command = new DescribeServerCommand(args);
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
   * <p>Describes the user assigned to a specific server, as identified by its
   *         <code>ServerId</code> property.</p>
   *
   *          <p>The response from this call returns the properties of the user associated with the
   *         <code>ServerId</code> value that was specified.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
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
   * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
   *         <code>UserName</code> value assigned to a specific server, identified by
   *         <code>ServerId</code>.</p>
   *
   *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
   *       the name of the <code>SshPublicKeyId</code>.</p>
   */
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSshPublicKeyCommandOutput>;
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): void;
  public importSshPublicKey(
    args: ImportSshPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportSshPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: ImportSshPublicKeyCommandOutput) => void
  ): Promise<ImportSshPublicKeyCommandOutput> | void {
    const command = new ImportSshPublicKeyCommand(args);
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
   * <p>Lists the Secure File Transfer Protocol (SFTP) servers that are associated with your AWS
   *       account.</p>
   */
  public listServers(args: ListServersCommandInput, options?: __HttpHandlerOptions): Promise<ListServersCommandOutput>;
  public listServers(args: ListServersCommandInput, cb: (err: any, data?: ListServersCommandOutput) => void): void;
  public listServers(
    args: ListServersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServersCommandOutput) => void
  ): void;
  public listServers(
    args: ListServersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServersCommandOutput) => void),
    cb?: (err: any, data?: ListServersCommandOutput) => void
  ): Promise<ListServersCommandOutput> | void {
    const command = new ListServersCommand(args);
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
   * <p>Lists all of the tags associated with the Amazon Resource Number (ARN) you specify. The
   *       resource can be a user, server, or role.</p>
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
   * <p>Lists the users for the server that you specify by passing the <code>ServerId</code>
   *       parameter.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
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
   * <p>Changes the state of a Secure File Transfer Protocol (SFTP) server from
   *         <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on an SFTP server that is
   *       already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file
   *       transfer jobs.</p>
   *
   *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
   *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
   *       can indicate an error condition. </p>
   *
   *          <p>No response is returned from this call.</p>
   */
  public startServer(args: StartServerCommandInput, options?: __HttpHandlerOptions): Promise<StartServerCommandOutput>;
  public startServer(args: StartServerCommandInput, cb: (err: any, data?: StartServerCommandOutput) => void): void;
  public startServer(
    args: StartServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartServerCommandOutput) => void
  ): void;
  public startServer(
    args: StartServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartServerCommandOutput) => void),
    cb?: (err: any, data?: StartServerCommandOutput) => void
  ): Promise<StartServerCommandOutput> | void {
    const command = new StartServerCommand(args);
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
   * <p>Changes the state of an SFTP server from <code>ONLINE</code> to <code>OFFLINE</code>. An
   *         <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied
   *       to your server such as server and user properties are not affected by stopping your server.
   *       Stopping a server will not reduce or impact your Secure File Transfer Protocol (SFTP) endpoint
   *       billing.</p>
   *
   *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
   *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
   *       can indicate an error condition.</p>
   *
   *          <p>No response is returned from this call.</p>
   */
  public stopServer(args: StopServerCommandInput, options?: __HttpHandlerOptions): Promise<StopServerCommandOutput>;
  public stopServer(args: StopServerCommandInput, cb: (err: any, data?: StopServerCommandOutput) => void): void;
  public stopServer(
    args: StopServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopServerCommandOutput) => void
  ): void;
  public stopServer(
    args: StopServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopServerCommandOutput) => void),
    cb?: (err: any, data?: StopServerCommandOutput) => void
  ): Promise<StopServerCommandOutput> | void {
    const command = new StopServerCommand(args);
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
   * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN).
   *       Resources are users, servers, roles, and other entities.</p>
   *
   *          <p>There is no response returned from this call.</p>
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
   * <p>If the <code>IdentityProviderType</code> of the server is <code>API_Gateway</code>, tests
   *       whether your API Gateway is set up successfully. We highly recommend that you call this
   *       operation to test your authentication method as soon as you create your server. By doing so,
   *       you can troubleshoot issues with the API Gateway integration to ensure that your users can
   *       successfully use the service.</p>
   */
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestIdentityProviderCommandOutput>;
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): void;
  public testIdentityProvider(
    args: TestIdentityProviderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestIdentityProviderCommandOutput) => void),
    cb?: (err: any, data?: TestIdentityProviderCommandOutput) => void
  ): Promise<TestIdentityProviderCommandOutput> | void {
    const command = new TestIdentityProviderCommand(args);
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
   * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name
   *       (ARN). Resources are users, servers, roles, and other entities.</p>
   *          <p>No response is returned from this call.</p>
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
   * <p>Updates the server properties after that server has been created.</p>
   *
   *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the Secure File
   *       Transfer Protocol (SFTP) server you updated.</p>
   */
  public updateServer(
    args: UpdateServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerCommandOutput>;
  public updateServer(args: UpdateServerCommandInput, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
  public updateServer(
    args: UpdateServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCommandOutput) => void
  ): void;
  public updateServer(
    args: UpdateServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServerCommandOutput) => void),
    cb?: (err: any, data?: UpdateServerCommandOutput) => void
  ): Promise<UpdateServerCommandOutput> | void {
    const command = new UpdateServerCommand(args);
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
   * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following:
   *       the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code>
   *       you specify.</p>
   *
   *          <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the
   *       updated user.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
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
