import { SMSClient } from "./SMSClient";
import { CreateAppInput } from "./types/CreateAppInput";
import { CreateAppOutput } from "./types/CreateAppOutput";
import { CreateReplicationJobInput } from "./types/CreateReplicationJobInput";
import { CreateReplicationJobOutput } from "./types/CreateReplicationJobOutput";
import { DeleteAppInput } from "./types/DeleteAppInput";
import { DeleteAppLaunchConfigurationInput } from "./types/DeleteAppLaunchConfigurationInput";
import { DeleteAppLaunchConfigurationOutput } from "./types/DeleteAppLaunchConfigurationOutput";
import { DeleteAppOutput } from "./types/DeleteAppOutput";
import { DeleteAppReplicationConfigurationInput } from "./types/DeleteAppReplicationConfigurationInput";
import { DeleteAppReplicationConfigurationOutput } from "./types/DeleteAppReplicationConfigurationOutput";
import { DeleteReplicationJobInput } from "./types/DeleteReplicationJobInput";
import { DeleteReplicationJobOutput } from "./types/DeleteReplicationJobOutput";
import { DeleteServerCatalogInput } from "./types/DeleteServerCatalogInput";
import { DeleteServerCatalogOutput } from "./types/DeleteServerCatalogOutput";
import { DisassociateConnectorInput } from "./types/DisassociateConnectorInput";
import { DisassociateConnectorOutput } from "./types/DisassociateConnectorOutput";
import { GenerateChangeSetInput } from "./types/GenerateChangeSetInput";
import { GenerateChangeSetOutput } from "./types/GenerateChangeSetOutput";
import { GenerateTemplateInput } from "./types/GenerateTemplateInput";
import { GenerateTemplateOutput } from "./types/GenerateTemplateOutput";
import { GetAppInput } from "./types/GetAppInput";
import { GetAppLaunchConfigurationInput } from "./types/GetAppLaunchConfigurationInput";
import { GetAppLaunchConfigurationOutput } from "./types/GetAppLaunchConfigurationOutput";
import { GetAppOutput } from "./types/GetAppOutput";
import { GetAppReplicationConfigurationInput } from "./types/GetAppReplicationConfigurationInput";
import { GetAppReplicationConfigurationOutput } from "./types/GetAppReplicationConfigurationOutput";
import { GetConnectorsInput } from "./types/GetConnectorsInput";
import { GetConnectorsOutput } from "./types/GetConnectorsOutput";
import { GetReplicationJobsInput } from "./types/GetReplicationJobsInput";
import { GetReplicationJobsOutput } from "./types/GetReplicationJobsOutput";
import { GetReplicationRunsInput } from "./types/GetReplicationRunsInput";
import { GetReplicationRunsOutput } from "./types/GetReplicationRunsOutput";
import { GetServersInput } from "./types/GetServersInput";
import { GetServersOutput } from "./types/GetServersOutput";
import { ImportServerCatalogInput } from "./types/ImportServerCatalogInput";
import { ImportServerCatalogOutput } from "./types/ImportServerCatalogOutput";
import { InternalError } from "./types/InternalError";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { LaunchAppInput } from "./types/LaunchAppInput";
import { LaunchAppOutput } from "./types/LaunchAppOutput";
import { ListAppsInput } from "./types/ListAppsInput";
import { ListAppsOutput } from "./types/ListAppsOutput";
import { MissingRequiredParameterException } from "./types/MissingRequiredParameterException";
import { NoConnectorsAvailableException } from "./types/NoConnectorsAvailableException";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { PutAppLaunchConfigurationInput } from "./types/PutAppLaunchConfigurationInput";
import { PutAppLaunchConfigurationOutput } from "./types/PutAppLaunchConfigurationOutput";
import { PutAppReplicationConfigurationInput } from "./types/PutAppReplicationConfigurationInput";
import { PutAppReplicationConfigurationOutput } from "./types/PutAppReplicationConfigurationOutput";
import { ReplicationJobAlreadyExistsException } from "./types/ReplicationJobAlreadyExistsException";
import { ReplicationJobNotFoundException } from "./types/ReplicationJobNotFoundException";
import { ReplicationRunLimitExceededException } from "./types/ReplicationRunLimitExceededException";
import { ServerCannotBeReplicatedException } from "./types/ServerCannotBeReplicatedException";
import { StartAppReplicationInput } from "./types/StartAppReplicationInput";
import { StartAppReplicationOutput } from "./types/StartAppReplicationOutput";
import { StartOnDemandReplicationRunInput } from "./types/StartOnDemandReplicationRunInput";
import { StartOnDemandReplicationRunOutput } from "./types/StartOnDemandReplicationRunOutput";
import { StopAppReplicationInput } from "./types/StopAppReplicationInput";
import { StopAppReplicationOutput } from "./types/StopAppReplicationOutput";
import { TemporarilyUnavailableException } from "./types/TemporarilyUnavailableException";
import { TerminateAppInput } from "./types/TerminateAppInput";
import { TerminateAppOutput } from "./types/TerminateAppOutput";
import { UnauthorizedOperationException } from "./types/UnauthorizedOperationException";
import { UpdateAppInput } from "./types/UpdateAppInput";
import { UpdateAppOutput } from "./types/UpdateAppOutput";
import { UpdateReplicationJobInput } from "./types/UpdateReplicationJobInput";
import { UpdateReplicationJobOutput } from "./types/UpdateReplicationJobOutput";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateReplicationJobCommand } from "./commands/CreateReplicationJobCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteAppLaunchConfigurationCommand } from "./commands/DeleteAppLaunchConfigurationCommand";
import { DeleteAppReplicationConfigurationCommand } from "./commands/DeleteAppReplicationConfigurationCommand";
import { DeleteReplicationJobCommand } from "./commands/DeleteReplicationJobCommand";
import { DeleteServerCatalogCommand } from "./commands/DeleteServerCatalogCommand";
import { DisassociateConnectorCommand } from "./commands/DisassociateConnectorCommand";
import { GenerateChangeSetCommand } from "./commands/GenerateChangeSetCommand";
import { GenerateTemplateCommand } from "./commands/GenerateTemplateCommand";
import { GetAppCommand } from "./commands/GetAppCommand";
import { GetAppLaunchConfigurationCommand } from "./commands/GetAppLaunchConfigurationCommand";
import { GetAppReplicationConfigurationCommand } from "./commands/GetAppReplicationConfigurationCommand";
import { GetConnectorsCommand } from "./commands/GetConnectorsCommand";
import { GetReplicationJobsCommand } from "./commands/GetReplicationJobsCommand";
import { GetReplicationRunsCommand } from "./commands/GetReplicationRunsCommand";
import { GetServersCommand } from "./commands/GetServersCommand";
import { ImportServerCatalogCommand } from "./commands/ImportServerCatalogCommand";
import { LaunchAppCommand } from "./commands/LaunchAppCommand";
import { ListAppsCommand } from "./commands/ListAppsCommand";
import { PutAppLaunchConfigurationCommand } from "./commands/PutAppLaunchConfigurationCommand";
import { PutAppReplicationConfigurationCommand } from "./commands/PutAppReplicationConfigurationCommand";
import { StartAppReplicationCommand } from "./commands/StartAppReplicationCommand";
import { StartOnDemandReplicationRunCommand } from "./commands/StartOnDemandReplicationRunCommand";
import { StopAppReplicationCommand } from "./commands/StopAppReplicationCommand";
import { TerminateAppCommand } from "./commands/TerminateAppCommand";
import { UpdateAppCommand } from "./commands/UpdateAppCommand";
import { UpdateReplicationJobCommand } from "./commands/UpdateReplicationJobCommand";

export class SMS extends SMSClient {
  /**
   * <p>Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApp(args: CreateAppInput): Promise<CreateAppOutput>;
  public createApp(
    args: CreateAppInput,
    cb: (err: any, data?: CreateAppOutput) => void
  ): void;
  public createApp(
    args: CreateAppInput,
    cb?: (err: any, data?: CreateAppOutput) => void
  ): Promise<CreateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {ServerCannotBeReplicatedException} <p>The specified server cannot be replicated.</p>
   *   - {ReplicationJobAlreadyExistsException} <p>The specified replication job already exists.</p>
   *   - {NoConnectorsAvailableException} <p>There are no connectors available.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {TemporarilyUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createReplicationJob(
    args: CreateReplicationJobInput
  ): Promise<CreateReplicationJobOutput>;
  public createReplicationJob(
    args: CreateReplicationJobInput,
    cb: (err: any, data?: CreateReplicationJobOutput) => void
  ): void;
  public createReplicationJob(
    args: CreateReplicationJobInput,
    cb?: (err: any, data?: CreateReplicationJobOutput) => void
  ): Promise<CreateReplicationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateReplicationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApp(args: DeleteAppInput): Promise<DeleteAppOutput>;
  public deleteApp(
    args: DeleteAppInput,
    cb: (err: any, data?: DeleteAppOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppInput,
    cb?: (err: any, data?: DeleteAppOutput) => void
  ): Promise<DeleteAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes existing launch configuration for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationInput
  ): Promise<DeleteAppLaunchConfigurationOutput>;
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationInput,
    cb: (err: any, data?: DeleteAppLaunchConfigurationOutput) => void
  ): void;
  public deleteAppLaunchConfiguration(
    args: DeleteAppLaunchConfigurationInput,
    cb?: (err: any, data?: DeleteAppLaunchConfigurationOutput) => void
  ): Promise<DeleteAppLaunchConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAppLaunchConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes existing replication configuration for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationInput
  ): Promise<DeleteAppReplicationConfigurationOutput>;
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationInput,
    cb: (err: any, data?: DeleteAppReplicationConfigurationOutput) => void
  ): void;
  public deleteAppReplicationConfiguration(
    args: DeleteAppReplicationConfigurationInput,
    cb?: (err: any, data?: DeleteAppReplicationConfigurationOutput) => void
  ): Promise<DeleteAppReplicationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAppReplicationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {ReplicationJobNotFoundException} <p>The specified replication job does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReplicationJob(
    args: DeleteReplicationJobInput
  ): Promise<DeleteReplicationJobOutput>;
  public deleteReplicationJob(
    args: DeleteReplicationJobInput,
    cb: (err: any, data?: DeleteReplicationJobOutput) => void
  ): void;
  public deleteReplicationJob(
    args: DeleteReplicationJobInput,
    cb?: (err: any, data?: DeleteReplicationJobOutput) => void
  ): Promise<DeleteReplicationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReplicationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all servers from your server catalog.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServerCatalog(
    args: DeleteServerCatalogInput
  ): Promise<DeleteServerCatalogOutput>;
  public deleteServerCatalog(
    args: DeleteServerCatalogInput,
    cb: (err: any, data?: DeleteServerCatalogOutput) => void
  ): void;
  public deleteServerCatalog(
    args: DeleteServerCatalogInput,
    cb?: (err: any, data?: DeleteServerCatalogOutput) => void
  ): Promise<DeleteServerCatalogOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServerCatalogCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateConnector(
    args: DisassociateConnectorInput
  ): Promise<DisassociateConnectorOutput>;
  public disassociateConnector(
    args: DisassociateConnectorInput,
    cb: (err: any, data?: DisassociateConnectorOutput) => void
  ): void;
  public disassociateConnector(
    args: DisassociateConnectorInput,
    cb?: (err: any, data?: DisassociateConnectorOutput) => void
  ): Promise<DisassociateConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateChangeSet(
    args: GenerateChangeSetInput
  ): Promise<GenerateChangeSetOutput>;
  public generateChangeSet(
    args: GenerateChangeSetInput,
    cb: (err: any, data?: GenerateChangeSetOutput) => void
  ): void;
  public generateChangeSet(
    args: GenerateChangeSetInput,
    cb?: (err: any, data?: GenerateChangeSetOutput) => void
  ): Promise<GenerateChangeSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateChangeSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates an Amazon CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateTemplate(
    args: GenerateTemplateInput
  ): Promise<GenerateTemplateOutput>;
  public generateTemplate(
    args: GenerateTemplateInput,
    cb: (err: any, data?: GenerateTemplateOutput) => void
  ): void;
  public generateTemplate(
    args: GenerateTemplateInput,
    cb?: (err: any, data?: GenerateTemplateOutput) => void
  ): Promise<GenerateTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieve information about an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApp(args: GetAppInput): Promise<GetAppOutput>;
  public getApp(
    args: GetAppInput,
    cb: (err: any, data?: GetAppOutput) => void
  ): void;
  public getApp(
    args: GetAppInput,
    cb?: (err: any, data?: GetAppOutput) => void
  ): Promise<GetAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the application launch configuration associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationInput
  ): Promise<GetAppLaunchConfigurationOutput>;
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationInput,
    cb: (err: any, data?: GetAppLaunchConfigurationOutput) => void
  ): void;
  public getAppLaunchConfiguration(
    args: GetAppLaunchConfigurationInput,
    cb?: (err: any, data?: GetAppLaunchConfigurationOutput) => void
  ): Promise<GetAppLaunchConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppLaunchConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves an application replication configuration associatd with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationInput
  ): Promise<GetAppReplicationConfigurationOutput>;
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationInput,
    cb: (err: any, data?: GetAppReplicationConfigurationOutput) => void
  ): void;
  public getAppReplicationConfiguration(
    args: GetAppReplicationConfigurationInput,
    cb?: (err: any, data?: GetAppReplicationConfigurationOutput) => void
  ): Promise<GetAppReplicationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppReplicationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the connectors registered with the AWS SMS.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getConnectors(args: GetConnectorsInput): Promise<GetConnectorsOutput>;
  public getConnectors(
    args: GetConnectorsInput,
    cb: (err: any, data?: GetConnectorsOutput) => void
  ): void;
  public getConnectors(
    args: GetConnectorsInput,
    cb?: (err: any, data?: GetConnectorsOutput) => void
  ): Promise<GetConnectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetConnectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the specified replication job or all of your replication jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReplicationJobs(
    args: GetReplicationJobsInput
  ): Promise<GetReplicationJobsOutput>;
  public getReplicationJobs(
    args: GetReplicationJobsInput,
    cb: (err: any, data?: GetReplicationJobsOutput) => void
  ): void;
  public getReplicationJobs(
    args: GetReplicationJobsInput,
    cb?: (err: any, data?: GetReplicationJobsOutput) => void
  ): Promise<GetReplicationJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReplicationJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the replication runs for the specified replication job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReplicationRuns(
    args: GetReplicationRunsInput
  ): Promise<GetReplicationRunsOutput>;
  public getReplicationRuns(
    args: GetReplicationRunsInput,
    cb: (err: any, data?: GetReplicationRunsOutput) => void
  ): void;
  public getReplicationRuns(
    args: GetReplicationRunsInput,
    cb?: (err: any, data?: GetReplicationRunsOutput) => void
  ): Promise<GetReplicationRunsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReplicationRunsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServers(args: GetServersInput): Promise<GetServersOutput>;
  public getServers(
    args: GetServersInput,
    cb: (err: any, data?: GetServersOutput) => void
  ): void;
  public getServers(
    args: GetServersInput,
    cb?: (err: any, data?: GetServersOutput) => void
  ): Promise<GetServersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers that you want to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {NoConnectorsAvailableException} <p>There are no connectors available.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importServerCatalog(
    args: ImportServerCatalogInput
  ): Promise<ImportServerCatalogOutput>;
  public importServerCatalog(
    args: ImportServerCatalogInput,
    cb: (err: any, data?: ImportServerCatalogOutput) => void
  ): void;
  public importServerCatalog(
    args: ImportServerCatalogInput,
    cb?: (err: any, data?: ImportServerCatalogOutput) => void
  ): Promise<ImportServerCatalogOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportServerCatalogCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Launches an application stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public launchApp(args: LaunchAppInput): Promise<LaunchAppOutput>;
  public launchApp(
    args: LaunchAppInput,
    cb: (err: any, data?: LaunchAppOutput) => void
  ): void;
  public launchApp(
    args: LaunchAppInput,
    cb?: (err: any, data?: LaunchAppOutput) => void
  ): Promise<LaunchAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new LaunchAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of summaries for all applications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApps(args: ListAppsInput): Promise<ListAppsOutput>;
  public listApps(
    args: ListAppsInput,
    cb: (err: any, data?: ListAppsOutput) => void
  ): void;
  public listApps(
    args: ListAppsInput,
    cb?: (err: any, data?: ListAppsOutput) => void
  ): Promise<ListAppsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAppsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a launch configuration for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationInput
  ): Promise<PutAppLaunchConfigurationOutput>;
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationInput,
    cb: (err: any, data?: PutAppLaunchConfigurationOutput) => void
  ): void;
  public putAppLaunchConfiguration(
    args: PutAppLaunchConfigurationInput,
    cb?: (err: any, data?: PutAppLaunchConfigurationOutput) => void
  ): Promise<PutAppLaunchConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAppLaunchConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a replication configuration for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationInput
  ): Promise<PutAppReplicationConfigurationOutput>;
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationInput,
    cb: (err: any, data?: PutAppReplicationConfigurationOutput) => void
  ): void;
  public putAppReplicationConfiguration(
    args: PutAppReplicationConfigurationInput,
    cb?: (err: any, data?: PutAppReplicationConfigurationOutput) => void
  ): Promise<PutAppReplicationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutAppReplicationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts replicating an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startAppReplication(
    args: StartAppReplicationInput
  ): Promise<StartAppReplicationOutput>;
  public startAppReplication(
    args: StartAppReplicationInput,
    cb: (err: any, data?: StartAppReplicationOutput) => void
  ): void;
  public startAppReplication(
    args: StartAppReplicationInput,
    cb?: (err: any, data?: StartAppReplicationOutput) => void
  ): Promise<StartAppReplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartAppReplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs you can request in a 24-hour period.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {ReplicationRunLimitExceededException} <p>You have exceeded the number of on-demand replication runs you can request in a 24-hour period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunInput
  ): Promise<StartOnDemandReplicationRunOutput>;
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunInput,
    cb: (err: any, data?: StartOnDemandReplicationRunOutput) => void
  ): void;
  public startOnDemandReplicationRun(
    args: StartOnDemandReplicationRunInput,
    cb?: (err: any, data?: StartOnDemandReplicationRunOutput) => void
  ): Promise<StartOnDemandReplicationRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartOnDemandReplicationRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops replicating an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopAppReplication(
    args: StopAppReplicationInput
  ): Promise<StopAppReplicationOutput>;
  public stopAppReplication(
    args: StopAppReplicationInput,
    cb: (err: any, data?: StopAppReplicationOutput) => void
  ): void;
  public stopAppReplication(
    args: StopAppReplicationInput,
    cb?: (err: any, data?: StopAppReplicationOutput) => void
  ): Promise<StopAppReplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopAppReplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Terminates the stack for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateApp(args: TerminateAppInput): Promise<TerminateAppOutput>;
  public terminateApp(
    args: TerminateAppInput,
    cb: (err: any, data?: TerminateAppOutput) => void
  ): void;
  public terminateApp(
    args: TerminateAppInput,
    cb?: (err: any, data?: TerminateAppOutput) => void
  ): Promise<TerminateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApp(args: UpdateAppInput): Promise<UpdateAppOutput>;
  public updateApp(
    args: UpdateAppInput,
    cb: (err: any, data?: UpdateAppOutput) => void
  ): void;
  public updateApp(
    args: UpdateAppInput,
    cb?: (err: any, data?: UpdateAppOutput) => void
  ): Promise<UpdateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified settings for the specified replication job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>A specified parameter is not valid.</p>
   *   - {MissingRequiredParameterException} <p>A required parameter is missing.</p>
   *   - {OperationNotPermittedException} <p>This operation is not allowed.</p>
   *   - {UnauthorizedOperationException} <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
   *   - {ServerCannotBeReplicatedException} <p>The specified server cannot be replicated.</p>
   *   - {ReplicationJobNotFoundException} <p>The specified replication job does not exist.</p>
   *   - {InternalError} <p>An internal error occurred.</p>
   *   - {TemporarilyUnavailableException} <p>The service is temporarily unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateReplicationJob(
    args: UpdateReplicationJobInput
  ): Promise<UpdateReplicationJobOutput>;
  public updateReplicationJob(
    args: UpdateReplicationJobInput,
    cb: (err: any, data?: UpdateReplicationJobOutput) => void
  ): void;
  public updateReplicationJob(
    args: UpdateReplicationJobInput,
    cb?: (err: any, data?: UpdateReplicationJobOutput) => void
  ): Promise<UpdateReplicationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateReplicationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
