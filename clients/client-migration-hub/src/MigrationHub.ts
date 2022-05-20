// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateCreatedArtifactCommand,
  AssociateCreatedArtifactCommandInput,
  AssociateCreatedArtifactCommandOutput,
} from "./commands/AssociateCreatedArtifactCommand";
import {
  AssociateDiscoveredResourceCommand,
  AssociateDiscoveredResourceCommandInput,
  AssociateDiscoveredResourceCommandOutput,
} from "./commands/AssociateDiscoveredResourceCommand";
import {
  CreateProgressUpdateStreamCommand,
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput,
} from "./commands/CreateProgressUpdateStreamCommand";
import {
  DeleteProgressUpdateStreamCommand,
  DeleteProgressUpdateStreamCommandInput,
  DeleteProgressUpdateStreamCommandOutput,
} from "./commands/DeleteProgressUpdateStreamCommand";
import {
  DescribeApplicationStateCommand,
  DescribeApplicationStateCommandInput,
  DescribeApplicationStateCommandOutput,
} from "./commands/DescribeApplicationStateCommand";
import {
  DescribeMigrationTaskCommand,
  DescribeMigrationTaskCommandInput,
  DescribeMigrationTaskCommandOutput,
} from "./commands/DescribeMigrationTaskCommand";
import {
  DisassociateCreatedArtifactCommand,
  DisassociateCreatedArtifactCommandInput,
  DisassociateCreatedArtifactCommandOutput,
} from "./commands/DisassociateCreatedArtifactCommand";
import {
  DisassociateDiscoveredResourceCommand,
  DisassociateDiscoveredResourceCommandInput,
  DisassociateDiscoveredResourceCommandOutput,
} from "./commands/DisassociateDiscoveredResourceCommand";
import {
  ImportMigrationTaskCommand,
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput,
} from "./commands/ImportMigrationTaskCommand";
import {
  ListApplicationStatesCommand,
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
} from "./commands/ListApplicationStatesCommand";
import {
  ListCreatedArtifactsCommand,
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
} from "./commands/ListCreatedArtifactsCommand";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  ListMigrationTasksCommand,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
} from "./commands/ListMigrationTasksCommand";
import {
  ListProgressUpdateStreamsCommand,
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
} from "./commands/ListProgressUpdateStreamsCommand";
import {
  NotifyApplicationStateCommand,
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput,
} from "./commands/NotifyApplicationStateCommand";
import {
  NotifyMigrationTaskStateCommand,
  NotifyMigrationTaskStateCommandInput,
  NotifyMigrationTaskStateCommandOutput,
} from "./commands/NotifyMigrationTaskStateCommand";
import {
  PutResourceAttributesCommand,
  PutResourceAttributesCommandInput,
  PutResourceAttributesCommandOutput,
} from "./commands/PutResourceAttributesCommand";
import { MigrationHubClient } from "./MigrationHubClient";

/**
 * <p>The AWS Migration Hub API methods help to obtain server and application migration status
 *          and integrate your resource-specific migration tool by providing a programmatic interface
 *          to Migration Hub.</p>
 *          <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *          these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you
 *          must make the API calls while in your home region.</p>
 */
export class MigrationHub extends MigrationHubClient {
  /**
   * <p>Associates a created artifact of an AWS cloud resource, the target receiving the
   *          migration, with the migration task performed by a migration tool. This API has the
   *          following traits:</p>
   *          <ul>
   *             <li>
   *                <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to
   *                indicate which AWS artifact is associated with a migration task.</p>
   *             </li>
   *             <li>
   *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
   *                which will contain information about type and region; for example:
   *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
   *             </li>
   *             <li>
   *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
   *                or DMS endpoint, etc.</p>
   *             </li>
   *          </ul>
   */
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCreatedArtifactCommandOutput>;
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    cb: (err: any, data?: AssociateCreatedArtifactCommandOutput) => void
  ): void;
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCreatedArtifactCommandOutput) => void
  ): void;
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateCreatedArtifactCommandOutput) => void),
    cb?: (err: any, data?: AssociateCreatedArtifactCommandOutput) => void
  ): Promise<AssociateCreatedArtifactCommandOutput> | void {
    const command = new AssociateCreatedArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a discovered resource ID from Application Discovery Service with a migration
   *          task.</p>
   */
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDiscoveredResourceCommandOutput>;
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    cb: (err: any, data?: AssociateDiscoveredResourceCommandOutput) => void
  ): void;
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDiscoveredResourceCommandOutput) => void
  ): void;
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDiscoveredResourceCommandOutput) => void),
    cb?: (err: any, data?: AssociateDiscoveredResourceCommandOutput) => void
  ): Promise<AssociateDiscoveredResourceCommandOutput> | void {
    const command = new AssociateDiscoveredResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a progress update stream which is an AWS resource used for access control as
   *          well as a namespace for migration task names that is implicitly linked to your AWS account.
   *          It must uniquely identify the migration tool as it is used for all updates made by the
   *          tool; however, it does not need to be unique for each AWS account because it is scoped to
   *          the AWS account.</p>
   */
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProgressUpdateStreamCommandOutput>;
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    cb: (err: any, data?: CreateProgressUpdateStreamCommandOutput) => void
  ): void;
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProgressUpdateStreamCommandOutput) => void
  ): void;
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProgressUpdateStreamCommandOutput) => void),
    cb?: (err: any, data?: CreateProgressUpdateStreamCommandOutput) => void
  ): Promise<CreateProgressUpdateStreamCommandOutput> | void {
    const command = new CreateProgressUpdateStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a progress update stream, including all of its tasks, which was previously
   *          created as an AWS resource used for access control. This API has the following
   *          traits:</p>
   *          <ul>
   *             <li>
   *                <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the
   *                stream name (same as a <code>CreateProgressUpdateStream</code> call).</p>
   *             </li>
   *             <li>
   *                <p>The call will return, and a background process will asynchronously delete the
   *                stream and all of its resources (tasks, associated resources, resource attributes,
   *                created artifacts).</p>
   *             </li>
   *             <li>
   *                <p>If the stream takes time to be deleted, it might still show up on a
   *                   <code>ListProgressUpdateStreams</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>,
   *                   <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the
   *                tasks belonging to the stream will throw "InvalidInputException" if the stream of the
   *                same name is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>Once the stream and all of its resources are deleted,
   *                   <code>CreateProgressUpdateStream</code> for a stream of the same name will
   *                succeed, and that stream will be an entirely new logical resource (without any
   *                resources associated with the old stream).</p>
   *             </li>
   *          </ul>
   */
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProgressUpdateStreamCommandOutput>;
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    cb: (err: any, data?: DeleteProgressUpdateStreamCommandOutput) => void
  ): void;
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProgressUpdateStreamCommandOutput) => void
  ): void;
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProgressUpdateStreamCommandOutput) => void),
    cb?: (err: any, data?: DeleteProgressUpdateStreamCommandOutput) => void
  ): Promise<DeleteProgressUpdateStreamCommandOutput> | void {
    const command = new DeleteProgressUpdateStreamCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the migration status of an application.</p>
   */
  public describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationStateCommandOutput>;
  public describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    cb: (err: any, data?: DescribeApplicationStateCommandOutput) => void
  ): void;
  public describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationStateCommandOutput) => void
  ): void;
  public describeApplicationState(
    args: DescribeApplicationStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeApplicationStateCommandOutput) => void),
    cb?: (err: any, data?: DescribeApplicationStateCommandOutput) => void
  ): Promise<DescribeApplicationStateCommandOutput> | void {
    const command = new DescribeApplicationStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of all attributes associated with a specific migration task.</p>
   */
  public describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMigrationTaskCommandOutput>;
  public describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    cb: (err: any, data?: DescribeMigrationTaskCommandOutput) => void
  ): void;
  public describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMigrationTaskCommandOutput) => void
  ): void;
  public describeMigrationTask(
    args: DescribeMigrationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMigrationTaskCommandOutput) => void),
    cb?: (err: any, data?: DescribeMigrationTaskCommandOutput) => void
  ): Promise<DescribeMigrationTaskCommandOutput> | void {
    const command = new DescribeMigrationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a
   *          migration tool that was previously associated. This API has the following traits:</p>
   *          <ul>
   *             <li>
   *                <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation
   *                to disassociate a created AWS Artifact from a migration task.</p>
   *             </li>
   *             <li>
   *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
   *                which will contain information about type and region; for example:
   *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
   *             </li>
   *             <li>
   *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
   *                or RDS instance, etc.</p>
   *             </li>
   *          </ul>
   */
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCreatedArtifactCommandOutput>;
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    cb: (err: any, data?: DisassociateCreatedArtifactCommandOutput) => void
  ): void;
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCreatedArtifactCommandOutput) => void
  ): void;
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateCreatedArtifactCommandOutput) => void),
    cb?: (err: any, data?: DisassociateCreatedArtifactCommandOutput) => void
  ): Promise<DisassociateCreatedArtifactCommandOutput> | void {
    const command = new DisassociateCreatedArtifactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociate an Application Discovery Service discovered resource from a migration
   *          task.</p>
   */
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDiscoveredResourceCommandOutput>;
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    cb: (err: any, data?: DisassociateDiscoveredResourceCommandOutput) => void
  ): void;
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDiscoveredResourceCommandOutput) => void
  ): void;
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDiscoveredResourceCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDiscoveredResourceCommandOutput) => void
  ): Promise<DisassociateDiscoveredResourceCommandOutput> | void {
    const command = new DisassociateDiscoveredResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers a new migration task which represents a server, database, etc., being migrated
   *          to AWS by a migration tool.</p>
   *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
   *          the migration tool must first register the migration task with Migration Hub.</p>
   */
  public importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportMigrationTaskCommandOutput>;
  public importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    cb: (err: any, data?: ImportMigrationTaskCommandOutput) => void
  ): void;
  public importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportMigrationTaskCommandOutput) => void
  ): void;
  public importMigrationTask(
    args: ImportMigrationTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportMigrationTaskCommandOutput) => void),
    cb?: (err: any, data?: ImportMigrationTaskCommandOutput) => void
  ): Promise<ImportMigrationTaskCommandOutput> | void {
    const command = new ImportMigrationTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the migration statuses for your applications. If you use the optional
   *             <code>ApplicationIds</code> parameter, only the migration statuses for those
   *          applications will be returned.</p>
   */
  public listApplicationStates(
    args: ListApplicationStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationStatesCommandOutput>;
  public listApplicationStates(
    args: ListApplicationStatesCommandInput,
    cb: (err: any, data?: ListApplicationStatesCommandOutput) => void
  ): void;
  public listApplicationStates(
    args: ListApplicationStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationStatesCommandOutput) => void
  ): void;
  public listApplicationStates(
    args: ListApplicationStatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationStatesCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationStatesCommandOutput) => void
  ): Promise<ListApplicationStatesCommandOutput> | void {
    const command = new ListApplicationStatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the created artifacts attached to a given migration task in an update stream. This
   *          API has the following traits:</p>
   *          <ul>
   *             <li>
   *                <p>Gets the list of the created artifacts while
   *                migration is taking place.</p>
   *             </li>
   *             <li>
   *                <p>Shows the artifacts created by the migration tool that was associated by the
   *                   <code>AssociateCreatedArtifact</code> API. </p>
   *             </li>
   *             <li>
   *                <p>Lists created artifacts in a paginated interface. </p>
   *             </li>
   *          </ul>
   */
  public listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCreatedArtifactsCommandOutput>;
  public listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    cb: (err: any, data?: ListCreatedArtifactsCommandOutput) => void
  ): void;
  public listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCreatedArtifactsCommandOutput) => void
  ): void;
  public listCreatedArtifacts(
    args: ListCreatedArtifactsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCreatedArtifactsCommandOutput) => void),
    cb?: (err: any, data?: ListCreatedArtifactsCommandOutput) => void
  ): Promise<ListCreatedArtifactsCommandOutput> | void {
    const command = new ListCreatedArtifactsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists discovered resources associated with the given <code>MigrationTask</code>.</p>
   */
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredResourcesCommandOutput>;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDiscoveredResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): Promise<ListDiscoveredResourcesCommandOutput> | void {
    const command = new ListDiscoveredResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all, or filtered by resource name, migration tasks associated with the user
   *          account making this call. This API has the following traits:</p>
   *          <ul>
   *             <li>
   *                <p>Can show a summary list of the most recent migration tasks.</p>
   *             </li>
   *             <li>
   *                <p>Can show a summary list of migration tasks associated with a given discovered
   *                resource.</p>
   *             </li>
   *             <li>
   *                <p>Lists migration tasks in a paginated interface.</p>
   *             </li>
   *          </ul>
   */
  public listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMigrationTasksCommandOutput>;
  public listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    cb: (err: any, data?: ListMigrationTasksCommandOutput) => void
  ): void;
  public listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMigrationTasksCommandOutput) => void
  ): void;
  public listMigrationTasks(
    args: ListMigrationTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMigrationTasksCommandOutput) => void),
    cb?: (err: any, data?: ListMigrationTasksCommandOutput) => void
  ): Promise<ListMigrationTasksCommandOutput> | void {
    const command = new ListMigrationTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists progress update streams associated with the user account making this call.</p>
   */
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProgressUpdateStreamsCommandOutput>;
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    cb: (err: any, data?: ListProgressUpdateStreamsCommandOutput) => void
  ): void;
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProgressUpdateStreamsCommandOutput) => void
  ): void;
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProgressUpdateStreamsCommandOutput) => void),
    cb?: (err: any, data?: ListProgressUpdateStreamsCommandOutput) => void
  ): Promise<ListProgressUpdateStreamsCommandOutput> | void {
    const command = new ListProgressUpdateStreamsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the migration state of an application. For a given application identified by the
   *          value passed to <code>ApplicationId</code>, its status is set or updated by passing one of
   *          three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS |
   *          COMPLETED</code>.</p>
   */
  public notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyApplicationStateCommandOutput>;
  public notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    cb: (err: any, data?: NotifyApplicationStateCommandOutput) => void
  ): void;
  public notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyApplicationStateCommandOutput) => void
  ): void;
  public notifyApplicationState(
    args: NotifyApplicationStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyApplicationStateCommandOutput) => void),
    cb?: (err: any, data?: NotifyApplicationStateCommandOutput) => void
  ): Promise<NotifyApplicationStateCommandOutput> | void {
    const command = new NotifyApplicationStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a
   *          migration task. This API has the following traits:</p>
   *          <ul>
   *             <li>
   *                <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share
   *                the latest progress and status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MigrationTaskName</code> is used for addressing updates to the correct
   *                target.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProgressUpdateStream</code> is used for access control and to provide a
   *                namespace for each migration tool.</p>
   *             </li>
   *          </ul>
   */
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyMigrationTaskStateCommandOutput>;
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    cb: (err: any, data?: NotifyMigrationTaskStateCommandOutput) => void
  ): void;
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyMigrationTaskStateCommandOutput) => void
  ): void;
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: NotifyMigrationTaskStateCommandOutput) => void),
    cb?: (err: any, data?: NotifyMigrationTaskStateCommandOutput) => void
  ): Promise<NotifyMigrationTaskStateCommandOutput> | void {
    const command = new NotifyMigrationTaskStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides identifying details of the resource being migrated so that it can be associated
   *          in the Application Discovery Service repository. This association occurs asynchronously
   *          after <code>PutResourceAttributes</code> returns.</p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>Keep in mind that subsequent calls to PutResourceAttributes will override
   *                   previously stored attributes. For example, if it is first called with a MAC
   *                   address, but later, it is desired to <i>add</i> an IP address, it
   *                   will then be required to call it with <i>both</i> the IP and MAC
   *                   addresses to prevent overriding the MAC address.</p>
   *                </li>
   *                <li>
   *                   <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList">
   *                         <code>ResourceAttributeList</code>
   *                      </a> parameter when specifying any
   *                   "VM" related value.</p>
   *                </li>
   *             </ul>
   *          </important>
   *
   *          <note>
   *             <p>Because this is an asynchronous call, it will always return 200, whether an
   *             association occurs or not. To confirm if an association was found based on the provided
   *             details, call <code>ListDiscoveredResources</code>.</p>
   *          </note>
   */
  public putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceAttributesCommandOutput>;
  public putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    cb: (err: any, data?: PutResourceAttributesCommandOutput) => void
  ): void;
  public putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceAttributesCommandOutput) => void
  ): void;
  public putResourceAttributes(
    args: PutResourceAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourceAttributesCommandOutput) => void),
    cb?: (err: any, data?: PutResourceAttributesCommandOutput) => void
  ): Promise<PutResourceAttributesCommandOutput> | void {
    const command = new PutResourceAttributesCommand(args);
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
