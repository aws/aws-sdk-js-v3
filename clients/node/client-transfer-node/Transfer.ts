import { TransferClient } from "./TransferClient";
import { CreateServerInput } from "./types/CreateServerInput";
import { CreateServerOutput } from "./types/CreateServerOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { DeleteServerInput } from "./types/DeleteServerInput";
import { DeleteServerOutput } from "./types/DeleteServerOutput";
import { DeleteSshPublicKeyInput } from "./types/DeleteSshPublicKeyInput";
import { DeleteSshPublicKeyOutput } from "./types/DeleteSshPublicKeyOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DescribeServerInput } from "./types/DescribeServerInput";
import { DescribeServerOutput } from "./types/DescribeServerOutput";
import { DescribeUserInput } from "./types/DescribeUserInput";
import { DescribeUserOutput } from "./types/DescribeUserOutput";
import { ImportSshPublicKeyInput } from "./types/ImportSshPublicKeyInput";
import { ImportSshPublicKeyOutput } from "./types/ImportSshPublicKeyOutput";
import { InternalServiceError } from "./types/InternalServiceError";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListServersInput } from "./types/ListServersInput";
import { ListServersOutput } from "./types/ListServersOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { ResourceExistsException } from "./types/ResourceExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartServerInput } from "./types/StartServerInput";
import { StartServerOutput } from "./types/StartServerOutput";
import { StopServerInput } from "./types/StopServerInput";
import { StopServerOutput } from "./types/StopServerOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TestIdentityProviderInput } from "./types/TestIdentityProviderInput";
import { TestIdentityProviderOutput } from "./types/TestIdentityProviderOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateServerInput } from "./types/UpdateServerInput";
import { UpdateServerOutput } from "./types/UpdateServerOutput";
import { UpdateUserInput } from "./types/UpdateUserInput";
import { UpdateUserOutput } from "./types/UpdateUserOutput";
import { CreateServerCommand } from "./commands/CreateServerCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteServerCommand } from "./commands/DeleteServerCommand";
import { DeleteSshPublicKeyCommand } from "./commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeServerCommand } from "./commands/DescribeServerCommand";
import { DescribeUserCommand } from "./commands/DescribeUserCommand";
import { ImportSshPublicKeyCommand } from "./commands/ImportSshPublicKeyCommand";
import { ListServersCommand } from "./commands/ListServersCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { StartServerCommand } from "./commands/StartServerCommand";
import { StopServerCommand } from "./commands/StopServerCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestIdentityProviderCommand } from "./commands/TestIdentityProviderCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateServerCommand } from "./commands/UpdateServerCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";

export class Transfer extends TransferClient {
  /**
   * <p>Instantiates an autoscaling virtual server based on Secure File Transfer Protocol (SFTP) in AWS. The call returns the <code>ServerId</code> property assigned by the service to the newly created server. Reference this <code>ServerId</code> property when you make updates to your server, or work with users.</p> <p>The response returns the <code>ServerId</code> value for the newly created server.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceExistsException} <p>The requested resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createServer(args: CreateServerInput): Promise<CreateServerOutput>;
  public createServer(
    args: CreateServerInput,
    cb: (err: any, data?: CreateServerOutput) => void
  ): void;
  public createServer(
    args: CreateServerInput,
    cb?: (err: any, data?: CreateServerOutput) => void
  ): Promise<CreateServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a user and associate them with an existing Secure File Transfer Protocol (SFTP) server. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.</p> <p>The response returns the <code>UserName</code> and <code>ServerId</code> values of the new user for that server.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceExistsException} <p>The requested resource does not exist.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUser(args: CreateUserInput): Promise<CreateUserOutput>;
  public createUser(
    args: CreateUserInput,
    cb: (err: any, data?: CreateUserOutput) => void
  ): void;
  public createUser(
    args: CreateUserInput,
    cb?: (err: any, data?: CreateUserOutput) => void
  ): Promise<CreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the Secure File Transfer Protocol (SFTP) server that you specify. If you used <code>SERVICE_MANAGED</code> as your <code>IdentityProviderType</code>, you need to delete all users associated with this server before deleting the server itself</p> <p>No response returns from this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServer(args: DeleteServerInput): Promise<DeleteServerOutput>;
  public deleteServer(
    args: DeleteServerInput,
    cb: (err: any, data?: DeleteServerOutput) => void
  ): void;
  public deleteServer(
    args: DeleteServerInput,
    cb?: (err: any, data?: DeleteServerOutput) => void
  ): Promise<DeleteServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user's Secure Shell (SSH) public key.</p> <p>No response is returned from this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyInput
  ): Promise<DeleteSshPublicKeyOutput>;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyInput,
    cb: (err: any, data?: DeleteSshPublicKeyOutput) => void
  ): void;
  public deleteSshPublicKey(
    args: DeleteSshPublicKeyInput,
    cb?: (err: any, data?: DeleteSshPublicKeyOutput) => void
  ): Promise<DeleteSshPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSshPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the user belonging to the server you specify.</p> <p>No response returns from this call.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of the server's properties.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServer(
    args: DescribeServerInput
  ): Promise<DescribeServerOutput>;
  public describeServer(
    args: DescribeServerInput,
    cb: (err: any, data?: DescribeServerOutput) => void
  ): void;
  public describeServer(
    args: DescribeServerInput,
    cb?: (err: any, data?: DescribeServerOutput) => void
  ): Promise<DescribeServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the user assigned to a specific server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUser(args: DescribeUserInput): Promise<DescribeUserOutput>;
  public describeUser(
    args: DescribeUserInput,
    cb: (err: any, data?: DescribeUserOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserInput,
    cb?: (err: any, data?: DescribeUserOutput) => void
  ): Promise<DescribeUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to a specific server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceExistsException} <p>The requested resource does not exist.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importSshPublicKey(
    args: ImportSshPublicKeyInput
  ): Promise<ImportSshPublicKeyOutput>;
  public importSshPublicKey(
    args: ImportSshPublicKeyInput,
    cb: (err: any, data?: ImportSshPublicKeyOutput) => void
  ): void;
  public importSshPublicKey(
    args: ImportSshPublicKeyInput,
    cb?: (err: any, data?: ImportSshPublicKeyOutput) => void
  ): Promise<ImportSshPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportSshPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Secure File Transfer Protocol (SFTP) servers that are associated with your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServers(args: ListServersInput): Promise<ListServersOutput>;
  public listServers(
    args: ListServersInput,
    cb: (err: any, data?: ListServersOutput) => void
  ): void;
  public listServers(
    args: ListServersInput,
    cb?: (err: any, data?: ListServersOutput) => void
  ): Promise<ListServersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all of the tags associated with the Amazon Resource Number (ARN) you specify. The resource can be a user, server, or role.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the users for the server that you specify by passing the <code>ServerId</code> parameter.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsers(args: ListUsersInput): Promise<ListUsersOutput>;
  public listUsers(
    args: ListUsersInput,
    cb: (err: any, data?: ListUsersOutput) => void
  ): void;
  public listUsers(
    args: ListUsersInput,
    cb?: (err: any, data?: ListUsersOutput) => void
  ): Promise<ListUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the state of a Secure File Transfer Protocol (SFTP) server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on an SFTP server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition. </p> <p>No response is returned from this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startServer(args: StartServerInput): Promise<StartServerOutput>;
  public startServer(
    args: StartServerInput,
    cb: (err: any, data?: StartServerOutput) => void
  ): void;
  public startServer(
    args: StartServerInput,
    cb?: (err: any, data?: StartServerOutput) => void
  ): Promise<StartServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the state of an SFTP server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server such as server and user properties are not affected by stopping your server. Stopping a server will not reduce or impact your Secure File Transfer Protocol (SFTP) endpoint billing.</p> <p>The states of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopServer(args: StopServerInput): Promise<StopServerOutput>;
  public stopServer(
    args: StopServerInput,
    cb: (err: any, data?: StopServerOutput) => void
  ): void;
  public stopServer(
    args: StopServerInput,
    cb?: (err: any, data?: StopServerOutput) => void
  ): Promise<StopServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>If the <code>IdentityProviderType</code> of the server is <code>API_Gateway</code>, tests whether your API Gateway is set up successfully. We highly recommend that you call this method to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testIdentityProvider(
    args: TestIdentityProviderInput
  ): Promise<TestIdentityProviderOutput>;
  public testIdentityProvider(
    args: TestIdentityProviderInput,
    cb: (err: any, data?: TestIdentityProviderOutput) => void
  ): void;
  public testIdentityProvider(
    args: TestIdentityProviderInput,
    cb?: (err: any, data?: TestIdentityProviderOutput) => void
  ): Promise<TestIdentityProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestIdentityProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the server properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the Secure File Transfer Protocol (SFTP) server you updated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServer(args: UpdateServerInput): Promise<UpdateServerOutput>;
  public updateServer(
    args: UpdateServerInput,
    cb: (err: any, data?: UpdateServerOutput) => void
  ): void;
  public updateServer(
    args: UpdateServerInput,
    cb?: (err: any, data?: UpdateServerOutput) => void
  ): Promise<UpdateServerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request has failed because the AWS Transfer for SFTP service is not available.</p>
   *   - {InternalServiceError} <p>This exception is thrown when an error occurs in the AWS Transfer for SFTP service.</p>
   *   - {InvalidRequestException} <p>This exception is thrown when the client submits a malformed request.</p>
   *   - {ResourceNotFoundException} <p>This exception is thrown when a resource is not found by the AWS Transfer for SFTP service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUser(args: UpdateUserInput): Promise<UpdateUserOutput>;
  public updateUser(
    args: UpdateUserInput,
    cb: (err: any, data?: UpdateUserOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserInput,
    cb?: (err: any, data?: UpdateUserOutput) => void
  ): Promise<UpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
