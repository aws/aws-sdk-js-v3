import { CodeStarconnectionsClient } from "./CodeStarconnectionsClient";
import {
  CreateConnectionCommand,
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput
} from "./commands/CreateConnectionCommand";
import {
  DeleteConnectionCommand,
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput
} from "./commands/DeleteConnectionCommand";
import {
  GetConnectionCommand,
  GetConnectionCommandInput,
  GetConnectionCommandOutput
} from "./commands/GetConnectionCommand";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
} from "./commands/ListConnectionsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of
 *       the operations and data types for the AWS CodeStar Connections API. You can use the
 *       Connections API to work with connections and installations.</p>
 *          <p>
 *             <i>Connections</i> are configurations that you use to connect AWS
 *       resources to external code repositories. Each connection is a resource that can be given to
 *       services such as CodePipeline to connect to a third-party repository such as Bitbucket. For
 *       example, you can add the connection in CodePipeline so that it triggers your pipeline when a
 *       code change is made to your third-party code repository. Each connection is named and
 *       associated with a unique ARN that is used to reference the connection.</p>
 *          <p>When you create a connection, the console initiates a third-party connection handshake.
 *         <i>Installations</i> are the apps that are used to conduct this handshake. For
 *       example, the installation for the Bitbucket provider type is the Bitbucket Cloud app. When you
 *       create a connection, you can choose an existing installation or create one.</p>
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
 *          <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS CodePipeline User
 *         Guide</a>.</p>
 */
export class CodeStarconnections extends CodeStarconnectionsClient {
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateConnectionCommandOutput) => void
  ): Promise<CreateConnectionCommandOutput> | void {
    const command = new CreateConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): Promise<DeleteConnectionCommandOutput> | void {
    const command = new DeleteConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetConnectionCommandOutput) => void),
    cb?: (err: any, data?: GetConnectionCommandOutput) => void
  ): Promise<GetConnectionCommandOutput> | void {
    const command = new GetConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListConnectionsCommandOutput) => void),
    cb?: (err: any, data?: ListConnectionsCommandOutput) => void
  ): Promise<ListConnectionsCommandOutput> | void {
    const command = new ListConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
