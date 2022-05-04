// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeStarConnectionsClient } from "./CodeStarConnectionsClient";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import { CreateHostCommand, CreateHostCommandInput, CreateHostCommandOutput } from "./commands/CreateHostCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import { DeleteHostCommand, DeleteHostCommandInput, DeleteHostCommandOutput } from "./commands/DeleteHostCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
} from "./commands/GetConnectionCommand";
import { GetHostCommand, GetHostCommandInput, GetHostCommandOutput } from "./commands/GetHostCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import { ListHostsCommand, ListHostsCommandInput, ListHostsCommandOutput } from "./commands/ListHostsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateHostCommand, UpdateHostCommandInput, UpdateHostCommandOutput } from "./commands/UpdateHostCommand";

/**
 * <fullname>AWS CodeStar Connections</fullname>
 *          <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of
 *       the operations and data types for the AWS CodeStar Connections API. You can use the
 *       connections API to work with connections and installations.</p>
 *          <p>
 *             <i>Connections</i> are configurations that you use to connect AWS
 *       resources to external code repositories. Each connection is a resource that can be given to
 *       services such as CodePipeline to connect to a third-party repository such as Bitbucket. For
 *       example, you can add the connection in CodePipeline so that it triggers your pipeline when a
 *       code change is made to your third-party code repository. Each connection is named and
 *       associated with a unique ARN that is used to reference the connection.</p>
 *          <p>When you create a connection, the console initiates a third-party connection handshake.
 *         <i>Installations</i> are the apps that are used to conduct this handshake. For
 *       example, the installation for the Bitbucket provider type is the Bitbucket app. When you
 *       create a connection, you can choose an existing installation or create one.</p>
 *          <p>When you want to create a connection to an installed provider type such as GitHub
 *       Enterprise Server, you create a <i>host</i> for your connections.</p>
 *          <p>You can work with connections by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateConnection</a>, which creates a uniquely named connection that can be
 *           referenced by services such as CodePipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteConnection</a>, which deletes the specified connection.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetConnection</a>, which returns information about the connection, including
 *           the connection status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListConnections</a>, which lists the connections associated with your
 *           account.</p>
 *             </li>
 *          </ul>
 *          <p>You can work with hosts by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteHost</a>, which deletes the specified host.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetHost</a>, which returns information about the host, including
 *           the setup status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListHosts</a>, which lists the hosts associated with your
 *           account.</p>
 *             </li>
 *          </ul>
 *          <p>You can work with tags in AWS CodeStar Connections by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which gets information about AWS tags for a
 *           specified Amazon Resource Name (ARN) in AWS CodeStar Connections.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeStar
 *           Connections.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes tags for a resource in AWS CodeStar
 *           Connections.</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User
 *         Guide</a>.</p>
 */
export class CodeStarConnections extends CodeStarConnectionsClient {
  /**
   * <p>Creates a connection that can then be given to other AWS services like CodePipeline so
   *       that it can access third-party code repositories. The connection is in pending status until
   *       the third-party connection handshake is completed from the console.</p>
   */
  public createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  public createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  public createConnection(
    args: CreateConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
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
   * <p>Creates a resource that represents the infrastructure where a third-party provider is
   *       installed. The host is used when you create connections to an installed third-party provider
   *       type, such as GitHub Enterprise Server. You create one host for all connections to that
   *       provider.</p>
   *          <note>
   *             <p>A host created through the CLI or the SDK is in `PENDING` status by
   *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
   *          </note>
   */
  public createHost(args: CreateHostCommandInput, options?: __HttpHandlerOptions): Promise<CreateHostCommandOutput>;
  public createHost(args: CreateHostCommandInput, cb: (err: any, data?: CreateHostCommandOutput) => void): void;
  public createHost(
    args: CreateHostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHostCommandOutput) => void
  ): void;
  public createHost(
    args: CreateHostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHostCommandOutput) => void),
    cb?: (err: any, data?: CreateHostCommandOutput) => void
  ): Promise<CreateHostCommandOutput> | void {
    const command = new CreateHostCommand(args);
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
   * <p>The connection to be deleted.</p>
   */
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  public deleteConnection(
    args: DeleteConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
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
   * <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p>
   *          <note>
   *             <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p>
   *          </note>
   */
  public deleteHost(args: DeleteHostCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHostCommandOutput>;
  public deleteHost(args: DeleteHostCommandInput, cb: (err: any, data?: DeleteHostCommandOutput) => void): void;
  public deleteHost(
    args: DeleteHostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostCommandOutput) => void
  ): void;
  public deleteHost(
    args: DeleteHostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHostCommandOutput) => void),
    cb?: (err: any, data?: DeleteHostCommandOutput) => void
  ): Promise<DeleteHostCommandOutput> | void {
    const command = new DeleteHostCommand(args);
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
   * <p>Returns the connection ARN and details such as status, owner, and provider type.</p>
   */
  public getConnection(
    args: GetConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionCommandOutput>;
  public getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  public getConnection(
    args: GetConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionCommandOutput) => void
  ): Promise<GetConnectionCommandOutput> | void {
    const command = new GetConnectionCommand(args);
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
   * <p>Returns the host ARN and details such as status, provider type, endpoint, and, if
   *       applicable, the VPC configuration.</p>
   */
  public getHost(args: GetHostCommandInput, options?: __HttpHandlerOptions): Promise<GetHostCommandOutput>;
  public getHost(args: GetHostCommandInput, cb: (err: any, data?: GetHostCommandOutput) => void): void;
  public getHost(
    args: GetHostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostCommandOutput) => void
  ): void;
  public getHost(
    args: GetHostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHostCommandOutput) => void),
    cb?: (err: any, data?: GetHostCommandOutput) => void
  ): Promise<GetHostCommandOutput> | void {
    const command = new GetHostCommand(args);
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
   * <p>Lists the connections associated with your account.</p>
   */
  public listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  public listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  public listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  public listConnections(
    args: ListConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConnectionsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectionsCommandOutput) => void
  ): Promise<ListConnectionsCommandOutput> | void {
    const command = new ListConnectionsCommand(args);
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
   * <p>Lists the hosts associated with your account.</p>
   */
  public listHosts(args: ListHostsCommandInput, options?: __HttpHandlerOptions): Promise<ListHostsCommandOutput>;
  public listHosts(args: ListHostsCommandInput, cb: (err: any, data?: ListHostsCommandOutput) => void): void;
  public listHosts(
    args: ListHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostsCommandOutput) => void
  ): void;
  public listHosts(
    args: ListHostsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHostsCommandOutput) => void),
    cb?: (err: any, data?: ListHostsCommandOutput) => void
  ): Promise<ListHostsCommandOutput> | void {
    const command = new ListHostsCommand(args);
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
   * <p>Gets the set of key-value pairs (metadata) that are used to manage the resource.</p>
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
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used
   *       to manage a resource.</p>
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
   * <p>Removes tags from an AWS resource.</p>
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
   * <p>Updates a specified host with the provided configurations.</p>
   */
  public updateHost(args: UpdateHostCommandInput, options?: __HttpHandlerOptions): Promise<UpdateHostCommandOutput>;
  public updateHost(args: UpdateHostCommandInput, cb: (err: any, data?: UpdateHostCommandOutput) => void): void;
  public updateHost(
    args: UpdateHostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHostCommandOutput) => void
  ): void;
  public updateHost(
    args: UpdateHostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHostCommandOutput) => void),
    cb?: (err: any, data?: UpdateHostCommandOutput) => void
  ): Promise<UpdateHostCommandOutput> | void {
    const command = new UpdateHostCommand(args);
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
