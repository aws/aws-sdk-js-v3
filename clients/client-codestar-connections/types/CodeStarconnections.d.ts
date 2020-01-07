import { CodeStarconnectionsClient } from "./CodeStarconnectionsClient";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "./commands/GetConnectionCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
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
export declare class CodeStarconnections extends CodeStarconnectionsClient {
    /**
     * <p>Creates a connection that can then be given to other AWS services like CodePipeline so
     *       that it can access third-party code repositories. The connection is in pending status until
     *       the third-party connection handshake is completed from the console.</p>
     */
    createConnection(args: CreateConnectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateConnectionCommandOutput>;
    createConnection(args: CreateConnectionCommandInput, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    createConnection(args: CreateConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConnectionCommandOutput) => void): void;
    /**
     * <p>The connection to be deleted.</p>
     */
    deleteConnection(args: DeleteConnectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConnectionCommandOutput>;
    deleteConnection(args: DeleteConnectionCommandInput, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    deleteConnection(args: DeleteConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConnectionCommandOutput) => void): void;
    /**
     * <p>Returns the connection ARN and details such as status, owner, and provider type.</p>
     */
    getConnection(args: GetConnectionCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionCommandOutput>;
    getConnection(args: GetConnectionCommandInput, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
    getConnection(args: GetConnectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectionCommandOutput) => void): void;
    /**
     * <p>Lists the connections associated with your account.</p>
     */
    listConnections(args: ListConnectionsCommandInput, options?: __HttpHandlerOptions): Promise<ListConnectionsCommandOutput>;
    listConnections(args: ListConnectionsCommandInput, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
    listConnections(args: ListConnectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
}
