import { TransferClient } from "./TransferClient";
import {
  CreateAccessCommand,
  CreateAccessCommandInput,
  CreateAccessCommandOutput,
} from "./commands/CreateAccessCommand";
import {
  CreateServerCommand,
  CreateServerCommandInput,
  CreateServerCommandOutput,
} from "./commands/CreateServerCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteAccessCommand,
  DeleteAccessCommandInput,
  DeleteAccessCommandOutput,
} from "./commands/DeleteAccessCommand";
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
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  DescribeAccessCommand,
  DescribeAccessCommandInput,
  DescribeAccessCommandOutput,
} from "./commands/DescribeAccessCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeSecurityPolicyCommand,
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "./commands/DescribeSecurityPolicyCommand";
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
  DescribeWorkflowCommand,
  DescribeWorkflowCommandInput,
  DescribeWorkflowCommandOutput,
} from "./commands/DescribeWorkflowCommand";
import {
  ImportSshPublicKeyCommand,
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
} from "./commands/ImportSshPublicKeyCommand";
import {
  ListAccessesCommand,
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
} from "./commands/ListAccessesCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import {
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommand,
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "./commands/SendWorkflowStepStateCommand";
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
  UpdateAccessCommand,
  UpdateAccessCommandInput,
  UpdateAccessCommandOutput,
} from "./commands/UpdateAccessCommand";
import {
  UpdateServerCommand,
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
} from "./commands/UpdateServerCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Web Services Transfer Family is a fully managed service that enables the transfer of files over the
 *       File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH)
 *       File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon
 *       S3). Amazon Web Services helps you seamlessly migrate your file transfer workflows to Amazon Web Services Transfer Family by
 *       integrating with existing authentication systems, and providing DNS routing with Amazon Route
 *       53 so nothing changes for your customers and partners, or their applications. With your data
 *       in Amazon S3, you can use it with Amazon Web Services services for processing, analytics, machine learning,
 *       and archiving. Getting started with Amazon Web Services Transfer Family is easy since there is no
 *       infrastructure to buy and set up.</p>
 */
export class Transfer extends TransferClient {
  /**
   * <p>Used by administrators to choose which groups in the directory should have access to
   *       upload and download files over the enabled protocols using Amazon Web Services Transfer Family. For example, a
   *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
   *       the ability to transfer files to the server. An administrator can use
   *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
   *       ability.</p>
   */
  public createAccess(
    args: CreateAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessCommandOutput>;
  public createAccess(args: CreateAccessCommandInput, cb: (err: any, data?: CreateAccessCommandOutput) => void): void;
  public createAccess(
    args: CreateAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessCommandOutput) => void
  ): void;
  public createAccess(
    args: CreateAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessCommandOutput) => void
  ): Promise<CreateAccessCommandOutput> | void {
    const command = new CreateAccessCommand(args);
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
   * <p>Instantiates an auto-scaling virtual server based on the selected file transfer protocol
   *       in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work
   *       with users, use the service-generated <code>ServerId</code> property that is assigned to the
   *       newly created server.</p>
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
   * <p>Creates a user and associates them with an existing file transfer protocol-enabled server.
   *       You can only create and associate users with servers that have the
   *         <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for
   *         <code>CreateUser</code>, you can specify the user name, set the home directory, store the
   *       user's public key, and assign the user's Amazon Web Services Identity and Access Management (IAM)
   *       role. You can also optionally add a session policy, and assign metadata with tags that can
   *       be used to group and search for users.</p>
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
   * <p>
   *       Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes.
   *       After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations.
   *     </p>
   */
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): Promise<CreateWorkflowCommandOutput> | void {
    const command = new CreateWorkflowCommand(args);
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
   * <p>Allows you to delete the access specified in the <code>ServerID</code> and
   *       <code>ExternalID</code> parameters.</p>
   */
  public deleteAccess(
    args: DeleteAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessCommandOutput>;
  public deleteAccess(args: DeleteAccessCommandInput, cb: (err: any, data?: DeleteAccessCommandOutput) => void): void;
  public deleteAccess(
    args: DeleteAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessCommandOutput) => void
  ): void;
  public deleteAccess(
    args: DeleteAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessCommandOutput) => void
  ): Promise<DeleteAccessCommandOutput> | void {
    const command = new DeleteAccessCommand(args);
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
   * <p>Deletes the file transfer protocol-enabled server that you specify.</p>
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
   * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p>
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
   * <p>Deletes the specified workflow.</p>
   */
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): Promise<DeleteWorkflowCommandOutput> | void {
    const command = new DeleteWorkflowCommand(args);
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
   * <p>Describes the access that is assigned to the specific file transfer protocol-enabled
   *       server, as identified by its <code>ServerId</code> property and its
   *       <code>ExternalID</code>.</p>
   *
   *          <p>The response from this call returns the properties of the access that is associated with
   *       the <code>ServerId</code> value that was specified.</p>
   */
  public describeAccess(
    args: DescribeAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessCommandOutput>;
  public describeAccess(
    args: DescribeAccessCommandInput,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;
  public describeAccess(
    args: DescribeAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessCommandOutput) => void
  ): void;
  public describeAccess(
    args: DescribeAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccessCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccessCommandOutput) => void
  ): Promise<DescribeAccessCommandOutput> | void {
    const command = new DescribeAccessCommand(args);
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
   * <p>You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.</p>
   */
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  public describeExecution(
    args: DescribeExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): Promise<DescribeExecutionCommandOutput> | void {
    const command = new DescribeExecutionCommand(args);
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
   * <p>Describes the security policy that is attached to your file transfer protocol-enabled
   *       server. The response contains a description of the security policy's properties. For more
   *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
   *         policies</a>.</p>
   */
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSecurityPolicyCommandOutput>;
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): void;
  public describeSecurityPolicy(
    args: DescribeSecurityPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSecurityPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void
  ): Promise<DescribeSecurityPolicyCommandOutput> | void {
    const command = new DescribeSecurityPolicyCommand(args);
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
   * <p>Describes a file transfer protocol-enabled server that you specify by passing the
   *         <code>ServerId</code> parameter.</p>
   *
   *          <p>The response contains a description of a server's properties. When you set
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
   * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as
   *       identified by its <code>ServerId</code> property.</p>
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
   * <p>Describes the specified workflow.</p>
   */
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowCommandOutput>;
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): void;
  public describeWorkflow(
    args: DescribeWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkflowCommandOutput) => void
  ): Promise<DescribeWorkflowCommandOutput> | void {
    const command = new DescribeWorkflowCommand(args);
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
   *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
   *       identified by <code>ServerId</code>.</p>
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
   * <p>Lists the details for all the accesses you have on your server.</p>
   */
  public listAccesses(
    args: ListAccessesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessesCommandOutput>;
  public listAccesses(args: ListAccessesCommandInput, cb: (err: any, data?: ListAccessesCommandOutput) => void): void;
  public listAccesses(
    args: ListAccessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessesCommandOutput) => void
  ): void;
  public listAccesses(
    args: ListAccessesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessesCommandOutput) => void),
    cb?: (err: any, data?: ListAccessesCommandOutput) => void
  ): Promise<ListAccessesCommandOutput> | void {
    const command = new ListAccessesCommand(args);
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
   * <p>Lists all executions for the specified workflow.</p>
   */
  public listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  public listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  public listExecutions(
    args: ListExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListExecutionsCommandOutput) => void
  ): Promise<ListExecutionsCommandOutput> | void {
    const command = new ListExecutionsCommand(args);
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
   * <p>Lists the security policies that are attached to your file transfer protocol-enabled
   *       servers.</p>
   */
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSecurityPoliciesCommandOutput>;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): void;
  public listSecurityPolicies(
    args: ListSecurityPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSecurityPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListSecurityPoliciesCommandOutput) => void
  ): Promise<ListSecurityPoliciesCommandOutput> | void {
    const command = new ListSecurityPoliciesCommand(args);
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
   * <p>Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services
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
   * <p>Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The
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
   * <p>Lists the users for a file transfer protocol-enabled server that you specify by passing
   *       the <code>ServerId</code> parameter.</p>
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
   * <p>Lists all of your workflows.</p>
   */
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): Promise<ListWorkflowsCommandOutput> | void {
    const command = new ListWorkflowsCommand(args);
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
   * <p>Sends a callback for asynchronous custom steps.</p>
   *          <p>
   *       The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow.
   *       You must include those with their callback as well as providing a status.
   *     </p>
   */
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendWorkflowStepStateCommandOutput>;
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): void;
  public sendWorkflowStepState(
    args: SendWorkflowStepStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendWorkflowStepStateCommandOutput) => void),
    cb?: (err: any, data?: SendWorkflowStepStateCommandOutput) => void
  ): Promise<SendWorkflowStepStateCommandOutput> | void {
    const command = new SendWorkflowStepStateCommand(args);
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
   * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to
   *         <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An
   *         <code>ONLINE</code> server can accept and process file transfer jobs.</p>
   *
   *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
   *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
   *       can indicate an error condition.</p>
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
   * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
   *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
   *       jobs. Information tied to your server, such as server and user properties, are not affected by
   *       stopping your server.</p>
   *
   *          <note>
   *             <p>Stopping the server will not reduce or impact your file transfer protocol endpoint
   *         billing; you must delete the server to stop being billed.</p>
   *          </note>
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
   * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
   *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
   *       provider is set up successfully. We highly recommend that you call this operation to test your
   *       authentication method as soon as you create your server. By doing so, you can troubleshoot
   *       issues with the identity provider integration to ensure that your users can successfully use
   *       the service.</p>
   *          <p>
   *       The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional.
   *     </p>
   *          <note>
   *             <p>
   *         You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>.
   *       </p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *         If you provide any incorrect values for any parameters, the <code>Response</code> field is empty.
   *       </p>
   *             </li>
   *             <li>
   *                <p>
   *         If you provide a server ID for a server that uses service-managed users, you get an error:
   *       </p>
   *                <p>
   *                   <code>
   *         An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth
   *       </code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *           If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error:
   *         </p>
   *                <p>
   *                   <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code>
   *                </p>
   *             </li>
   *          </ul>
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
   *
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
   * <p>Allows you to update parameters for the access specified in the <code>ServerID</code> and
   *       <code>ExternalID</code> parameters.</p>
   */
  public updateAccess(
    args: UpdateAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessCommandOutput>;
  public updateAccess(args: UpdateAccessCommandInput, cb: (err: any, data?: UpdateAccessCommandOutput) => void): void;
  public updateAccess(
    args: UpdateAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessCommandOutput) => void
  ): void;
  public updateAccess(
    args: UpdateAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccessCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccessCommandOutput) => void
  ): Promise<UpdateAccessCommandOutput> | void {
    const command = new UpdateAccessCommand(args);
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
   * <p>Updates the file transfer protocol-enabled server's properties after that server has
   *       been created.</p>
   *
   *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you
   *       updated.</p>
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
