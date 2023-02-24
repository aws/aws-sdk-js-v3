// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ConvertRecoveryPointToSnapshotCommand,
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "./commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateEndpointAccessCommand,
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "./commands/CreateEndpointAccessCommand";
import {
  CreateNamespaceCommand,
  CreateNamespaceCommandInput,
  CreateNamespaceCommandOutput,
} from "./commands/CreateNamespaceCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateUsageLimitCommand,
  CreateUsageLimitCommandInput,
  CreateUsageLimitCommandOutput,
} from "./commands/CreateUsageLimitCommand";
import {
  CreateWorkgroupCommand,
  CreateWorkgroupCommandInput,
  CreateWorkgroupCommandOutput,
} from "./commands/CreateWorkgroupCommand";
import {
  DeleteEndpointAccessCommand,
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "./commands/DeleteEndpointAccessCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DeleteUsageLimitCommand,
  DeleteUsageLimitCommandInput,
  DeleteUsageLimitCommandOutput,
} from "./commands/DeleteUsageLimitCommand";
import {
  DeleteWorkgroupCommand,
  DeleteWorkgroupCommandInput,
  DeleteWorkgroupCommandOutput,
} from "./commands/DeleteWorkgroupCommand";
import {
  GetCredentialsCommand,
  GetCredentialsCommandInput,
  GetCredentialsCommandOutput,
} from "./commands/GetCredentialsCommand";
import {
  GetEndpointAccessCommand,
  GetEndpointAccessCommandInput,
  GetEndpointAccessCommandOutput,
} from "./commands/GetEndpointAccessCommand";
import {
  GetNamespaceCommand,
  GetNamespaceCommandInput,
  GetNamespaceCommandOutput,
} from "./commands/GetNamespaceCommand";
import {
  GetRecoveryPointCommand,
  GetRecoveryPointCommandInput,
  GetRecoveryPointCommandOutput,
} from "./commands/GetRecoveryPointCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import { GetSnapshotCommand, GetSnapshotCommandInput, GetSnapshotCommandOutput } from "./commands/GetSnapshotCommand";
import {
  GetTableRestoreStatusCommand,
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
} from "./commands/GetTableRestoreStatusCommand";
import {
  GetUsageLimitCommand,
  GetUsageLimitCommandInput,
  GetUsageLimitCommandOutput,
} from "./commands/GetUsageLimitCommand";
import {
  GetWorkgroupCommand,
  GetWorkgroupCommandInput,
  GetWorkgroupCommandOutput,
} from "./commands/GetWorkgroupCommand";
import {
  ListEndpointAccessCommand,
  ListEndpointAccessCommandInput,
  ListEndpointAccessCommandOutput,
} from "./commands/ListEndpointAccessCommand";
import {
  ListNamespacesCommand,
  ListNamespacesCommandInput,
  ListNamespacesCommandOutput,
} from "./commands/ListNamespacesCommand";
import {
  ListRecoveryPointsCommand,
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput,
} from "./commands/ListRecoveryPointsCommand";
import {
  ListSnapshotsCommand,
  ListSnapshotsCommandInput,
  ListSnapshotsCommandOutput,
} from "./commands/ListSnapshotsCommand";
import {
  ListTableRestoreStatusCommand,
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "./commands/ListTableRestoreStatusCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListUsageLimitsCommand,
  ListUsageLimitsCommandInput,
  ListUsageLimitsCommandOutput,
} from "./commands/ListUsageLimitsCommand";
import {
  ListWorkgroupsCommand,
  ListWorkgroupsCommandInput,
  ListWorkgroupsCommandOutput,
} from "./commands/ListWorkgroupsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommand,
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "./commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommand,
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import {
  RestoreTableFromSnapshotCommand,
  RestoreTableFromSnapshotCommandInput,
  RestoreTableFromSnapshotCommandOutput,
} from "./commands/RestoreTableFromSnapshotCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEndpointAccessCommand,
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "./commands/UpdateEndpointAccessCommand";
import {
  UpdateNamespaceCommand,
  UpdateNamespaceCommandInput,
  UpdateNamespaceCommandOutput,
} from "./commands/UpdateNamespaceCommand";
import {
  UpdateSnapshotCommand,
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
} from "./commands/UpdateSnapshotCommand";
import {
  UpdateUsageLimitCommand,
  UpdateUsageLimitCommandInput,
  UpdateUsageLimitCommandOutput,
} from "./commands/UpdateUsageLimitCommand";
import {
  UpdateWorkgroupCommand,
  UpdateWorkgroupCommandInput,
  UpdateWorkgroupCommandOutput,
} from "./commands/UpdateWorkgroupCommand";
import { RedshiftServerlessClient } from "./RedshiftServerlessClient";

/**
 * <p>This is an interface reference for Amazon Redshift Serverless.
 *            It contains documentation for one of the programming or command line interfaces you can use to manage Amazon Redshift Serverless.
 *         </p>
 *         <p>Amazon Redshift Serverless automatically provisions data warehouse capacity and intelligently scales the
 *            underlying resources based on workload demands. Amazon Redshift Serverless adjusts capacity in seconds to deliver consistently high
 *            performance and simplified operations for even the most demanding and volatile workloads. Amazon Redshift Serverless lets you
 *            focus on using your data to acquire new insights for your business and customers.
 *         </p>
 *         <p>
 *            To learn more about Amazon Redshift Serverless,
 *            see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-whatis.html">What is Amazon Redshift Serverless</a>.
 *         </p>
 */
export class RedshiftServerless extends RedshiftServerlessClient {
  /**
   * <p>Converts a recovery point to a snapshot. For more information about recovery points and snapshots,
   *          see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">Working with snapshots and recovery points</a>.</p>
   */
  public convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConvertRecoveryPointToSnapshotCommandOutput>;
  public convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    cb: (err: any, data?: ConvertRecoveryPointToSnapshotCommandOutput) => void
  ): void;
  public convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConvertRecoveryPointToSnapshotCommandOutput) => void
  ): void;
  public convertRecoveryPointToSnapshot(
    args: ConvertRecoveryPointToSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ConvertRecoveryPointToSnapshotCommandOutput) => void),
    cb?: (err: any, data?: ConvertRecoveryPointToSnapshotCommandOutput) => void
  ): Promise<ConvertRecoveryPointToSnapshotCommandOutput> | void {
    const command = new ConvertRecoveryPointToSnapshotCommand(args);
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
   * <p>Creates an Amazon Redshift Serverless managed VPC endpoint.</p>
   */
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointAccessCommandOutput>;
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): void;
  public createEndpointAccess(
    args: CreateEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointAccessCommandOutput) => void
  ): Promise<CreateEndpointAccessCommandOutput> | void {
    const command = new CreateEndpointAccessCommand(args);
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
   * <p>Creates a namespace in Amazon Redshift Serverless.</p>
   */
  public createNamespace(
    args: CreateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamespaceCommandOutput>;
  public createNamespace(
    args: CreateNamespaceCommandInput,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  public createNamespace(
    args: CreateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): void;
  public createNamespace(
    args: CreateNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNamespaceCommandOutput) => void),
    cb?: (err: any, data?: CreateNamespaceCommandOutput) => void
  ): Promise<CreateNamespaceCommandOutput> | void {
    const command = new CreateNamespaceCommand(args);
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
   * <p>Creates a snapshot of all databases in a namespace.
   *          For more information about snapshots, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery.html">
   *          Working with snapshots and recovery points</a>.</p>
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
   * <p>Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.
   *       </p>
   */
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsageLimitCommandOutput>;
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): void;
  public createUsageLimit(
    args: CreateUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: CreateUsageLimitCommandOutput) => void
  ): Promise<CreateUsageLimitCommandOutput> | void {
    const command = new CreateUsageLimitCommand(args);
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
   * <p>Creates an workgroup in Amazon Redshift Serverless.</p>
   */
  public createWorkgroup(
    args: CreateWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkgroupCommandOutput>;
  public createWorkgroup(
    args: CreateWorkgroupCommandInput,
    cb: (err: any, data?: CreateWorkgroupCommandOutput) => void
  ): void;
  public createWorkgroup(
    args: CreateWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkgroupCommandOutput) => void
  ): void;
  public createWorkgroup(
    args: CreateWorkgroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkgroupCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkgroupCommandOutput) => void
  ): Promise<CreateWorkgroupCommandOutput> | void {
    const command = new CreateWorkgroupCommand(args);
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
   * <p>Deletes an Amazon Redshift Serverless managed VPC endpoint.</p>
   */
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointAccessCommandOutput>;
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): void;
  public deleteEndpointAccess(
    args: DeleteEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointAccessCommandOutput) => void
  ): Promise<DeleteEndpointAccessCommandOutput> | void {
    const command = new DeleteEndpointAccessCommand(args);
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
   * <p>Deletes a namespace from Amazon Redshift Serverless.
   *          Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.</p>
   */
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): Promise<DeleteNamespaceCommandOutput> | void {
    const command = new DeleteNamespaceCommand(args);
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
   * <p>Deletes the specified resource policy.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
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
   * <p>Deletes a snapshot from Amazon Redshift Serverless.</p>
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
   * <p>Deletes a usage limit from Amazon Redshift Serverless.</p>
   */
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsageLimitCommandOutput>;
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): void;
  public deleteUsageLimit(
    args: DeleteUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: DeleteUsageLimitCommandOutput) => void
  ): Promise<DeleteUsageLimitCommandOutput> | void {
    const command = new DeleteUsageLimitCommand(args);
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
   * <p>Deletes a workgroup.</p>
   */
  public deleteWorkgroup(
    args: DeleteWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkgroupCommandOutput>;
  public deleteWorkgroup(
    args: DeleteWorkgroupCommandInput,
    cb: (err: any, data?: DeleteWorkgroupCommandOutput) => void
  ): void;
  public deleteWorkgroup(
    args: DeleteWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkgroupCommandOutput) => void
  ): void;
  public deleteWorkgroup(
    args: DeleteWorkgroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkgroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkgroupCommandOutput) => void
  ): Promise<DeleteWorkgroupCommandOutput> | void {
    const command = new DeleteWorkgroupCommand(args);
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
   * <p>Returns a database user name and temporary password with
   *          temporary authorization to log in to Amazon Redshift Serverless.</p>
   *          <p>By default, the temporary credentials expire in 900 seconds.
   *          You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p>
   *
   *          <p>The Identity and Access Management (IAM) user or role that runs
   *       GetCredentials must have an IAM policy attached that allows access to all
   *       necessary actions and resources.</p>
   *
   *          <p>If the <code>DbName</code> parameter is specified, the IAM policy must
   *       allow access to the resource dbname for the specified database name.</p>
   */
  public getCredentials(
    args: GetCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCredentialsCommandOutput>;
  public getCredentials(
    args: GetCredentialsCommandInput,
    cb: (err: any, data?: GetCredentialsCommandOutput) => void
  ): void;
  public getCredentials(
    args: GetCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCredentialsCommandOutput) => void
  ): void;
  public getCredentials(
    args: GetCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCredentialsCommandOutput) => void),
    cb?: (err: any, data?: GetCredentialsCommandOutput) => void
  ): Promise<GetCredentialsCommandOutput> | void {
    const command = new GetCredentialsCommand(args);
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
   * <p>Returns information, such as the name, about a VPC endpoint.</p>
   */
  public getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEndpointAccessCommandOutput>;
  public getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    cb: (err: any, data?: GetEndpointAccessCommandOutput) => void
  ): void;
  public getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEndpointAccessCommandOutput) => void
  ): void;
  public getEndpointAccess(
    args: GetEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: GetEndpointAccessCommandOutput) => void
  ): Promise<GetEndpointAccessCommandOutput> | void {
    const command = new GetEndpointAccessCommand(args);
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
   * <p>Returns information about a namespace in Amazon Redshift Serverless.</p>
   */
  public getNamespace(
    args: GetNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNamespaceCommandOutput>;
  public getNamespace(args: GetNamespaceCommandInput, cb: (err: any, data?: GetNamespaceCommandOutput) => void): void;
  public getNamespace(
    args: GetNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceCommandOutput) => void
  ): void;
  public getNamespace(
    args: GetNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNamespaceCommandOutput) => void),
    cb?: (err: any, data?: GetNamespaceCommandOutput) => void
  ): Promise<GetNamespaceCommandOutput> | void {
    const command = new GetNamespaceCommand(args);
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
   * <p>Returns information about a recovery point.</p>
   */
  public getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryPointCommandOutput>;
  public getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    cb: (err: any, data?: GetRecoveryPointCommandOutput) => void
  ): void;
  public getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryPointCommandOutput) => void
  ): void;
  public getRecoveryPoint(
    args: GetRecoveryPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: GetRecoveryPointCommandOutput) => void
  ): Promise<GetRecoveryPointCommandOutput> | void {
    const command = new GetRecoveryPointCommand(args);
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
   * <p>Returns a resource policy.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
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
   * <p>Returns information about a specific snapshot.</p>
   */
  public getSnapshot(args: GetSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotCommandOutput>;
  public getSnapshot(args: GetSnapshotCommandInput, cb: (err: any, data?: GetSnapshotCommandOutput) => void): void;
  public getSnapshot(
    args: GetSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnapshotCommandOutput) => void
  ): void;
  public getSnapshot(
    args: GetSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSnapshotCommandOutput) => void),
    cb?: (err: any, data?: GetSnapshotCommandOutput) => void
  ): Promise<GetSnapshotCommandOutput> | void {
    const command = new GetSnapshotCommand(args);
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
   * <p>Returns information about a <code>TableRestoreStatus</code> object.</p>
   */
  public getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableRestoreStatusCommandOutput>;
  public getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    cb: (err: any, data?: GetTableRestoreStatusCommandOutput) => void
  ): void;
  public getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableRestoreStatusCommandOutput) => void
  ): void;
  public getTableRestoreStatus(
    args: GetTableRestoreStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableRestoreStatusCommandOutput) => void),
    cb?: (err: any, data?: GetTableRestoreStatusCommandOutput) => void
  ): Promise<GetTableRestoreStatusCommandOutput> | void {
    const command = new GetTableRestoreStatusCommand(args);
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
   * <p>Returns information about a usage limit.</p>
   */
  public getUsageLimit(
    args: GetUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageLimitCommandOutput>;
  public getUsageLimit(
    args: GetUsageLimitCommandInput,
    cb: (err: any, data?: GetUsageLimitCommandOutput) => void
  ): void;
  public getUsageLimit(
    args: GetUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageLimitCommandOutput) => void
  ): void;
  public getUsageLimit(
    args: GetUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: GetUsageLimitCommandOutput) => void
  ): Promise<GetUsageLimitCommandOutput> | void {
    const command = new GetUsageLimitCommand(args);
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
   * <p>Returns information about a specific workgroup.</p>
   */
  public getWorkgroup(
    args: GetWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkgroupCommandOutput>;
  public getWorkgroup(args: GetWorkgroupCommandInput, cb: (err: any, data?: GetWorkgroupCommandOutput) => void): void;
  public getWorkgroup(
    args: GetWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkgroupCommandOutput) => void
  ): void;
  public getWorkgroup(
    args: GetWorkgroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkgroupCommandOutput) => void),
    cb?: (err: any, data?: GetWorkgroupCommandOutput) => void
  ): Promise<GetWorkgroupCommandOutput> | void {
    const command = new GetWorkgroupCommand(args);
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
   * <p>Returns an array of <code>EndpointAccess</code> objects and relevant information.</p>
   */
  public listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointAccessCommandOutput>;
  public listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    cb: (err: any, data?: ListEndpointAccessCommandOutput) => void
  ): void;
  public listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointAccessCommandOutput) => void
  ): void;
  public listEndpointAccess(
    args: ListEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointAccessCommandOutput) => void
  ): Promise<ListEndpointAccessCommandOutput> | void {
    const command = new ListEndpointAccessCommand(args);
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
   * <p>Returns information about a list of specified namespaces.</p>
   */
  public listNamespaces(
    args: ListNamespacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamespacesCommandOutput>;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamespacesCommandOutput) => void
  ): void;
  public listNamespaces(
    args: ListNamespacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNamespacesCommandOutput) => void),
    cb?: (err: any, data?: ListNamespacesCommandOutput) => void
  ): Promise<ListNamespacesCommandOutput> | void {
    const command = new ListNamespacesCommand(args);
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
   * <p>Returns an array of recovery points.</p>
   */
  public listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsCommandOutput>;
  public listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    cb: (err: any, data?: ListRecoveryPointsCommandOutput) => void
  ): void;
  public listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsCommandOutput) => void
  ): void;
  public listRecoveryPoints(
    args: ListRecoveryPointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecoveryPointsCommandOutput) => void),
    cb?: (err: any, data?: ListRecoveryPointsCommandOutput) => void
  ): Promise<ListRecoveryPointsCommandOutput> | void {
    const command = new ListRecoveryPointsCommand(args);
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
   * <p>Returns a list of snapshots.</p>
   */
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSnapshotsCommandOutput>;
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    cb: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): void;
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): void;
  public listSnapshots(
    args: ListSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: ListSnapshotsCommandOutput) => void
  ): Promise<ListSnapshotsCommandOutput> | void {
    const command = new ListSnapshotsCommand(args);
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
   * <p>Returns information about an array of <code>TableRestoreStatus</code> objects.</p>
   */
  public listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableRestoreStatusCommandOutput>;
  public listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    cb: (err: any, data?: ListTableRestoreStatusCommandOutput) => void
  ): void;
  public listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableRestoreStatusCommandOutput) => void
  ): void;
  public listTableRestoreStatus(
    args: ListTableRestoreStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTableRestoreStatusCommandOutput) => void),
    cb?: (err: any, data?: ListTableRestoreStatusCommandOutput) => void
  ): Promise<ListTableRestoreStatusCommandOutput> | void {
    const command = new ListTableRestoreStatusCommand(args);
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
   * <p>Lists the tags assigned to a resource.</p>
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
   * <p>Lists all usage limits within Amazon Redshift Serverless.</p>
   */
  public listUsageLimits(
    args: ListUsageLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageLimitsCommandOutput>;
  public listUsageLimits(
    args: ListUsageLimitsCommandInput,
    cb: (err: any, data?: ListUsageLimitsCommandOutput) => void
  ): void;
  public listUsageLimits(
    args: ListUsageLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageLimitsCommandOutput) => void
  ): void;
  public listUsageLimits(
    args: ListUsageLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsageLimitsCommandOutput) => void),
    cb?: (err: any, data?: ListUsageLimitsCommandOutput) => void
  ): Promise<ListUsageLimitsCommandOutput> | void {
    const command = new ListUsageLimitsCommand(args);
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
   * <p>Returns information about a list of specified workgroups.</p>
   */
  public listWorkgroups(
    args: ListWorkgroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkgroupsCommandOutput>;
  public listWorkgroups(
    args: ListWorkgroupsCommandInput,
    cb: (err: any, data?: ListWorkgroupsCommandOutput) => void
  ): void;
  public listWorkgroups(
    args: ListWorkgroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkgroupsCommandOutput) => void
  ): void;
  public listWorkgroups(
    args: ListWorkgroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkgroupsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkgroupsCommandOutput) => void
  ): Promise<ListWorkgroupsCommandOutput> | void {
    const command = new ListWorkgroupsCommand(args);
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
   * <p>Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
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
   * <p>Restore the data from a recovery point.</p>
   */
  public restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreFromRecoveryPointCommandOutput>;
  public restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    cb: (err: any, data?: RestoreFromRecoveryPointCommandOutput) => void
  ): void;
  public restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreFromRecoveryPointCommandOutput) => void
  ): void;
  public restoreFromRecoveryPoint(
    args: RestoreFromRecoveryPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreFromRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: RestoreFromRecoveryPointCommandOutput) => void
  ): Promise<RestoreFromRecoveryPointCommandOutput> | void {
    const command = new RestoreFromRecoveryPointCommand(args);
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
   * <p>Restores a namespace from a snapshot.</p>
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
   * <p>Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to
   *          restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
   */
  public restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreTableFromSnapshotCommandOutput>;
  public restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreTableFromSnapshotCommandOutput) => void
  ): void;
  public restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreTableFromSnapshotCommandOutput) => void
  ): void;
  public restoreTableFromSnapshot(
    args: RestoreTableFromSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreTableFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreTableFromSnapshotCommandOutput) => void
  ): Promise<RestoreTableFromSnapshotCommandOutput> | void {
    const command = new RestoreTableFromSnapshotCommand(args);
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
   * <p>Assigns one or more tags to a resource.</p>
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
   * <p>Removes a tag or set of tags from a resource.</p>
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
   * <p>Updates an Amazon Redshift Serverless managed endpoint.</p>
   */
  public updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointAccessCommandOutput>;
  public updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    cb: (err: any, data?: UpdateEndpointAccessCommandOutput) => void
  ): void;
  public updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointAccessCommandOutput) => void
  ): void;
  public updateEndpointAccess(
    args: UpdateEndpointAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEndpointAccessCommandOutput) => void),
    cb?: (err: any, data?: UpdateEndpointAccessCommandOutput) => void
  ): Promise<UpdateEndpointAccessCommandOutput> | void {
    const command = new UpdateEndpointAccessCommand(args);
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
   * <p>Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example,
   *       you must specify both <code>adminUsername</code> and <code>adminUserPassword</code> to update either field, but you can't update both <code>kmsKeyId</code>
   *       and <code>logExports</code> in a single request.</p>
   */
  public updateNamespace(
    args: UpdateNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNamespaceCommandOutput>;
  public updateNamespace(
    args: UpdateNamespaceCommandInput,
    cb: (err: any, data?: UpdateNamespaceCommandOutput) => void
  ): void;
  public updateNamespace(
    args: UpdateNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNamespaceCommandOutput) => void
  ): void;
  public updateNamespace(
    args: UpdateNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNamespaceCommandOutput) => void),
    cb?: (err: any, data?: UpdateNamespaceCommandOutput) => void
  ): Promise<UpdateNamespaceCommandOutput> | void {
    const command = new UpdateNamespaceCommand(args);
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
   * <p>Updates a snapshot.</p>
   */
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCommandOutput>;
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;
  public updateSnapshot(
    args: UpdateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): Promise<UpdateSnapshotCommandOutput> | void {
    const command = new UpdateSnapshotCommand(args);
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
   * <p>Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.</p>
   */
  public updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsageLimitCommandOutput>;
  public updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    cb: (err: any, data?: UpdateUsageLimitCommandOutput) => void
  ): void;
  public updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageLimitCommandOutput) => void
  ): void;
  public updateUsageLimit(
    args: UpdateUsageLimitCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUsageLimitCommandOutput) => void),
    cb?: (err: any, data?: UpdateUsageLimitCommandOutput) => void
  ): Promise<UpdateUsageLimitCommandOutput> | void {
    const command = new UpdateUsageLimitCommand(args);
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
   * <p>Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example,
   *       you can update <code>baseCapacity</code> or <code>port</code> in a single request, but you can't update both in the same request.</p>
   */
  public updateWorkgroup(
    args: UpdateWorkgroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkgroupCommandOutput>;
  public updateWorkgroup(
    args: UpdateWorkgroupCommandInput,
    cb: (err: any, data?: UpdateWorkgroupCommandOutput) => void
  ): void;
  public updateWorkgroup(
    args: UpdateWorkgroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkgroupCommandOutput) => void
  ): void;
  public updateWorkgroup(
    args: UpdateWorkgroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkgroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkgroupCommandOutput) => void
  ): Promise<UpdateWorkgroupCommandOutput> | void {
    const command = new UpdateWorkgroupCommand(args);
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
