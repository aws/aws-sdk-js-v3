import { MigrationHubClient } from "./MigrationHubClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AssociateCreatedArtifactInput } from "./types/AssociateCreatedArtifactInput";
import { AssociateCreatedArtifactOutput } from "./types/AssociateCreatedArtifactOutput";
import { AssociateDiscoveredResourceInput } from "./types/AssociateDiscoveredResourceInput";
import { AssociateDiscoveredResourceOutput } from "./types/AssociateDiscoveredResourceOutput";
import { CreateProgressUpdateStreamInput } from "./types/CreateProgressUpdateStreamInput";
import { CreateProgressUpdateStreamOutput } from "./types/CreateProgressUpdateStreamOutput";
import { DeleteProgressUpdateStreamInput } from "./types/DeleteProgressUpdateStreamInput";
import { DeleteProgressUpdateStreamOutput } from "./types/DeleteProgressUpdateStreamOutput";
import { DescribeApplicationStateInput } from "./types/DescribeApplicationStateInput";
import { DescribeApplicationStateOutput } from "./types/DescribeApplicationStateOutput";
import { DescribeMigrationTaskInput } from "./types/DescribeMigrationTaskInput";
import { DescribeMigrationTaskOutput } from "./types/DescribeMigrationTaskOutput";
import { DisassociateCreatedArtifactInput } from "./types/DisassociateCreatedArtifactInput";
import { DisassociateCreatedArtifactOutput } from "./types/DisassociateCreatedArtifactOutput";
import { DisassociateDiscoveredResourceInput } from "./types/DisassociateDiscoveredResourceInput";
import { DisassociateDiscoveredResourceOutput } from "./types/DisassociateDiscoveredResourceOutput";
import { DryRunOperation } from "./types/DryRunOperation";
import { ImportMigrationTaskInput } from "./types/ImportMigrationTaskInput";
import { ImportMigrationTaskOutput } from "./types/ImportMigrationTaskOutput";
import { InternalServerError } from "./types/InternalServerError";
import { InvalidInputException } from "./types/InvalidInputException";
import { ListCreatedArtifactsInput } from "./types/ListCreatedArtifactsInput";
import { ListCreatedArtifactsOutput } from "./types/ListCreatedArtifactsOutput";
import { ListDiscoveredResourcesInput } from "./types/ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "./types/ListDiscoveredResourcesOutput";
import { ListMigrationTasksInput } from "./types/ListMigrationTasksInput";
import { ListMigrationTasksOutput } from "./types/ListMigrationTasksOutput";
import { ListProgressUpdateStreamsInput } from "./types/ListProgressUpdateStreamsInput";
import { ListProgressUpdateStreamsOutput } from "./types/ListProgressUpdateStreamsOutput";
import { NotifyApplicationStateInput } from "./types/NotifyApplicationStateInput";
import { NotifyApplicationStateOutput } from "./types/NotifyApplicationStateOutput";
import { NotifyMigrationTaskStateInput } from "./types/NotifyMigrationTaskStateInput";
import { NotifyMigrationTaskStateOutput } from "./types/NotifyMigrationTaskStateOutput";
import { PolicyErrorException } from "./types/PolicyErrorException";
import { PutResourceAttributesInput } from "./types/PutResourceAttributesInput";
import { PutResourceAttributesOutput } from "./types/PutResourceAttributesOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { UnauthorizedOperation } from "./types/UnauthorizedOperation";
import { AssociateCreatedArtifactCommand } from "./commands/AssociateCreatedArtifactCommand";
import { AssociateDiscoveredResourceCommand } from "./commands/AssociateDiscoveredResourceCommand";
import { CreateProgressUpdateStreamCommand } from "./commands/CreateProgressUpdateStreamCommand";
import { DeleteProgressUpdateStreamCommand } from "./commands/DeleteProgressUpdateStreamCommand";
import { DescribeApplicationStateCommand } from "./commands/DescribeApplicationStateCommand";
import { DescribeMigrationTaskCommand } from "./commands/DescribeMigrationTaskCommand";
import { DisassociateCreatedArtifactCommand } from "./commands/DisassociateCreatedArtifactCommand";
import { DisassociateDiscoveredResourceCommand } from "./commands/DisassociateDiscoveredResourceCommand";
import { ImportMigrationTaskCommand } from "./commands/ImportMigrationTaskCommand";
import { ListCreatedArtifactsCommand } from "./commands/ListCreatedArtifactsCommand";
import { ListDiscoveredResourcesCommand } from "./commands/ListDiscoveredResourcesCommand";
import { ListMigrationTasksCommand } from "./commands/ListMigrationTasksCommand";
import { ListProgressUpdateStreamsCommand } from "./commands/ListProgressUpdateStreamsCommand";
import { NotifyApplicationStateCommand } from "./commands/NotifyApplicationStateCommand";
import { NotifyMigrationTaskStateCommand } from "./commands/NotifyMigrationTaskStateCommand";
import { PutResourceAttributesCommand } from "./commands/PutResourceAttributesCommand";

export class MigrationHub extends MigrationHubClient {
  /**
   * <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactInput
  ): Promise<AssociateCreatedArtifactOutput>;
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactInput,
    cb: (err: any, data?: AssociateCreatedArtifactOutput) => void
  ): void;
  public associateCreatedArtifact(
    args: AssociateCreatedArtifactInput,
    cb?: (err: any, data?: AssociateCreatedArtifactOutput) => void
  ): Promise<AssociateCreatedArtifactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateCreatedArtifactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a discovered resource ID from Application Discovery Service (ADS) with a migration task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {PolicyErrorException} <p>Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceInput
  ): Promise<AssociateDiscoveredResourceOutput>;
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceInput,
    cb: (err: any, data?: AssociateDiscoveredResourceOutput) => void
  ): void;
  public associateDiscoveredResource(
    args: AssociateDiscoveredResourceInput,
    cb?: (err: any, data?: AssociateDiscoveredResourceOutput) => void
  ): Promise<AssociateDiscoveredResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDiscoveredResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamInput
  ): Promise<CreateProgressUpdateStreamOutput>;
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamInput,
    cb: (err: any, data?: CreateProgressUpdateStreamOutput) => void
  ): void;
  public createProgressUpdateStream(
    args: CreateProgressUpdateStreamInput,
    cb?: (err: any, data?: CreateProgressUpdateStreamOutput) => void
  ): Promise<CreateProgressUpdateStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProgressUpdateStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs realted to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamInput
  ): Promise<DeleteProgressUpdateStreamOutput>;
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamInput,
    cb: (err: any, data?: DeleteProgressUpdateStreamOutput) => void
  ): void;
  public deleteProgressUpdateStream(
    args: DeleteProgressUpdateStreamInput,
    cb?: (err: any, data?: DeleteProgressUpdateStreamOutput) => void
  ): Promise<DeleteProgressUpdateStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProgressUpdateStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the migration status of an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {PolicyErrorException} <p>Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeApplicationState(
    args: DescribeApplicationStateInput
  ): Promise<DescribeApplicationStateOutput>;
  public describeApplicationState(
    args: DescribeApplicationStateInput,
    cb: (err: any, data?: DescribeApplicationStateOutput) => void
  ): void;
  public describeApplicationState(
    args: DescribeApplicationStateInput,
    cb?: (err: any, data?: DescribeApplicationStateOutput) => void
  ): Promise<DescribeApplicationStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeApplicationStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of all attributes associated with a specific migration task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeMigrationTask(
    args: DescribeMigrationTaskInput
  ): Promise<DescribeMigrationTaskOutput>;
  public describeMigrationTask(
    args: DescribeMigrationTaskInput,
    cb: (err: any, data?: DescribeMigrationTaskOutput) => void
  ): void;
  public describeMigrationTask(
    args: DescribeMigrationTaskInput,
    cb?: (err: any, data?: DescribeMigrationTaskOutput) => void
  ): Promise<DescribeMigrationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeMigrationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactInput
  ): Promise<DisassociateCreatedArtifactOutput>;
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactInput,
    cb: (err: any, data?: DisassociateCreatedArtifactOutput) => void
  ): void;
  public disassociateCreatedArtifact(
    args: DisassociateCreatedArtifactInput,
    cb?: (err: any, data?: DisassociateCreatedArtifactOutput) => void
  ): Promise<DisassociateCreatedArtifactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateCreatedArtifactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociate an Application Discovery Service (ADS) discovered resource from a migration task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceInput
  ): Promise<DisassociateDiscoveredResourceOutput>;
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceInput,
    cb: (err: any, data?: DisassociateDiscoveredResourceOutput) => void
  ): void;
  public disassociateDiscoveredResource(
    args: DisassociateDiscoveredResourceInput,
    cb?: (err: any, data?: DisassociateDiscoveredResourceOutput) => void
  ): Promise<DisassociateDiscoveredResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDiscoveredResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importMigrationTask(
    args: ImportMigrationTaskInput
  ): Promise<ImportMigrationTaskOutput>;
  public importMigrationTask(
    args: ImportMigrationTaskInput,
    cb: (err: any, data?: ImportMigrationTaskOutput) => void
  ): void;
  public importMigrationTask(
    args: ImportMigrationTaskInput,
    cb?: (err: any, data?: ImportMigrationTaskOutput) => void
  ): Promise<ImportMigrationTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportMigrationTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCreatedArtifacts(
    args: ListCreatedArtifactsInput
  ): Promise<ListCreatedArtifactsOutput>;
  public listCreatedArtifacts(
    args: ListCreatedArtifactsInput,
    cb: (err: any, data?: ListCreatedArtifactsOutput) => void
  ): void;
  public listCreatedArtifacts(
    args: ListCreatedArtifactsInput,
    cb?: (err: any, data?: ListCreatedArtifactsOutput) => void
  ): Promise<ListCreatedArtifactsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCreatedArtifactsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists discovered resources associated with the given <code>MigrationTask</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDiscoveredResources(
    args: ListDiscoveredResourcesInput
  ): Promise<ListDiscoveredResourcesOutput>;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesInput,
    cb: (err: any, data?: ListDiscoveredResourcesOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesInput,
    cb?: (err: any, data?: ListDiscoveredResourcesOutput) => void
  ): Promise<ListDiscoveredResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDiscoveredResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {PolicyErrorException} <p>Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMigrationTasks(
    args: ListMigrationTasksInput
  ): Promise<ListMigrationTasksOutput>;
  public listMigrationTasks(
    args: ListMigrationTasksInput,
    cb: (err: any, data?: ListMigrationTasksOutput) => void
  ): void;
  public listMigrationTasks(
    args: ListMigrationTasksInput,
    cb?: (err: any, data?: ListMigrationTasksOutput) => void
  ): Promise<ListMigrationTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMigrationTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists progress update streams associated with the user account making this call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsInput
  ): Promise<ListProgressUpdateStreamsOutput>;
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsInput,
    cb: (err: any, data?: ListProgressUpdateStreamsOutput) => void
  ): void;
  public listProgressUpdateStreams(
    args: ListProgressUpdateStreamsInput,
    cb?: (err: any, data?: ListProgressUpdateStreamsOutput) => void
  ): Promise<ListProgressUpdateStreamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProgressUpdateStreamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {PolicyErrorException} <p>Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public notifyApplicationState(
    args: NotifyApplicationStateInput
  ): Promise<NotifyApplicationStateOutput>;
  public notifyApplicationState(
    args: NotifyApplicationStateInput,
    cb: (err: any, data?: NotifyApplicationStateOutput) => void
  ): void;
  public notifyApplicationState(
    args: NotifyApplicationStateInput,
    cb?: (err: any, data?: NotifyApplicationStateOutput) => void
  ): Promise<NotifyApplicationStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new NotifyApplicationStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateInput
  ): Promise<NotifyMigrationTaskStateOutput>;
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateInput,
    cb: (err: any, data?: NotifyMigrationTaskStateOutput) => void
  ): void;
  public notifyMigrationTaskState(
    args: NotifyMigrationTaskStateInput,
    cb?: (err: any, data?: NotifyMigrationTaskStateOutput) => void
  ): Promise<NotifyMigrationTaskStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new NotifyMigrationTaskStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service (ADS)'s repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overiding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value. </p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServerError} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {ServiceUnavailableException} <p>Exception raised when there is an internal, configuration, or dependency error encountered.</p>
   *   - {DryRunOperation} <p>Exception raised to indicate a successfully authorized action when the <code>DryRun</code> flag is set to "true".</p>
   *   - {UnauthorizedOperation} <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code> flag is set to "true".</p>
   *   - {InvalidInputException} <p>Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.</p>
   *   - {ResourceNotFoundException} <p>Exception raised when the request references a resource (ADS configuration, update stream, migration task, etc.) that does not exist in ADS (Application Discovery Service) or in Migration Hub's repository.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putResourceAttributes(
    args: PutResourceAttributesInput
  ): Promise<PutResourceAttributesOutput>;
  public putResourceAttributes(
    args: PutResourceAttributesInput,
    cb: (err: any, data?: PutResourceAttributesOutput) => void
  ): void;
  public putResourceAttributes(
    args: PutResourceAttributesInput,
    cb?: (err: any, data?: PutResourceAttributesOutput) => void
  ): Promise<PutResourceAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutResourceAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
