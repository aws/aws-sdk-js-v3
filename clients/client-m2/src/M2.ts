// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelBatchJobExecutionCommand,
  CancelBatchJobExecutionCommandInput,
  CancelBatchJobExecutionCommandOutput,
} from "./commands/CancelBatchJobExecutionCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDataSetImportTaskCommand,
  CreateDataSetImportTaskCommandInput,
  CreateDataSetImportTaskCommandOutput,
} from "./commands/CreateDataSetImportTaskCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationFromEnvironmentCommand,
  DeleteApplicationFromEnvironmentCommandInput,
  DeleteApplicationFromEnvironmentCommandOutput,
} from "./commands/DeleteApplicationFromEnvironmentCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetApplicationVersionCommand,
  GetApplicationVersionCommandInput,
  GetApplicationVersionCommandOutput,
} from "./commands/GetApplicationVersionCommand";
import {
  GetBatchJobExecutionCommand,
  GetBatchJobExecutionCommandInput,
  GetBatchJobExecutionCommandOutput,
} from "./commands/GetBatchJobExecutionCommand";
import {
  GetDataSetDetailsCommand,
  GetDataSetDetailsCommandInput,
  GetDataSetDetailsCommandOutput,
} from "./commands/GetDataSetDetailsCommand";
import {
  GetDataSetImportTaskCommand,
  GetDataSetImportTaskCommandInput,
  GetDataSetImportTaskCommandOutput,
} from "./commands/GetDataSetImportTaskCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "./commands/ListApplicationVersionsCommand";
import {
  ListBatchJobDefinitionsCommand,
  ListBatchJobDefinitionsCommandInput,
  ListBatchJobDefinitionsCommandOutput,
} from "./commands/ListBatchJobDefinitionsCommand";
import {
  ListBatchJobExecutionsCommand,
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput,
} from "./commands/ListBatchJobExecutionsCommand";
import {
  ListDataSetImportHistoryCommand,
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput,
} from "./commands/ListDataSetImportHistoryCommand";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "./commands/ListDataSetsCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "./commands/ListEngineVersionsCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartApplicationCommand,
  StartApplicationCommandInput,
  StartApplicationCommandOutput,
} from "./commands/StartApplicationCommand";
import {
  StartBatchJobCommand,
  StartBatchJobCommandInput,
  StartBatchJobCommandOutput,
} from "./commands/StartBatchJobCommand";
import {
  StopApplicationCommand,
  StopApplicationCommandInput,
  StopApplicationCommandOutput,
} from "./commands/StopApplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import { M2Client } from "./M2Client";

/**
 * <p>Amazon Web Services Mainframe Modernization provides tools and resources to help you plan and implement migration and
 *          modernization from mainframes to Amazon Web Services managed runtime environments. It provides tools for
 *          analyzing existing mainframe applications, developing or updating mainframe applications
 *          using COBOL or PL/I, and implementing an automated pipeline for continuous integration and
 *          continuous delivery (CI/CD) of the applications.</p>
 */
export class M2 extends M2Client {
  /**
   * <p>Cancels the running of a specific batch job execution.</p>
   */
  public cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelBatchJobExecutionCommandOutput>;
  public cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    cb: (err: any, data?: CancelBatchJobExecutionCommandOutput) => void
  ): void;
  public cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelBatchJobExecutionCommandOutput) => void
  ): void;
  public cancelBatchJobExecution(
    args: CancelBatchJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelBatchJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: CancelBatchJobExecutionCommandOutput) => void
  ): Promise<CancelBatchJobExecutionCommandOutput> | void {
    const command = new CancelBatchJobExecutionCommand(args);
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
   * <p>Creates a new application with given parameters. Requires an existing runtime environment and
   *          application definition file.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
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
   * <p>Starts a data set import task for a specific application.</p>
   */
  public createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSetImportTaskCommandOutput>;
  public createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    cb: (err: any, data?: CreateDataSetImportTaskCommandOutput) => void
  ): void;
  public createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSetImportTaskCommandOutput) => void
  ): void;
  public createDataSetImportTask(
    args: CreateDataSetImportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSetImportTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSetImportTaskCommandOutput) => void
  ): Promise<CreateDataSetImportTaskCommandOutput> | void {
    const command = new CreateDataSetImportTaskCommand(args);
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
   * <p>Creates and starts a deployment to deploy an application into a runtime environment.</p>
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
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
   * <p>Creates a runtime environment for a given runtime engine.</p>
   */
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  public createEnvironment(
    args: CreateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): Promise<CreateEnvironmentCommandOutput> | void {
    const command = new CreateEnvironmentCommand(args);
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
   * <p>Deletes a specific application. You cannot delete a running application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
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
   * <p>Deletes a specific application from the specific runtime environment where it was previously
   *          deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has
   *          ever been deployed to it. This API removes the association of the application with the
   *          runtime environment so you can delete the environment smoothly.</p>
   */
  public deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationFromEnvironmentCommandOutput>;
  public deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    cb: (err: any, data?: DeleteApplicationFromEnvironmentCommandOutput) => void
  ): void;
  public deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationFromEnvironmentCommandOutput) => void
  ): void;
  public deleteApplicationFromEnvironment(
    args: DeleteApplicationFromEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationFromEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationFromEnvironmentCommandOutput) => void
  ): Promise<DeleteApplicationFromEnvironmentCommandOutput> | void {
    const command = new DeleteApplicationFromEnvironmentCommand(args);
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
   * <p>Deletes a specific runtime environment. The environment cannot contain deployed applications. If
   *          it does, you must delete those applications before you delete the environment.</p>
   */
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  public deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): Promise<DeleteEnvironmentCommandOutput> | void {
    const command = new DeleteEnvironmentCommand(args);
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
   * <p>Describes the details of a specific application.</p>
   */
  public getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  public getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationCommandOutput) => void
  ): Promise<GetApplicationCommandOutput> | void {
    const command = new GetApplicationCommand(args);
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
   * <p>Returns details about a specific version of a specific application.</p>
   */
  public getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationVersionCommandOutput>;
  public getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    cb: (err: any, data?: GetApplicationVersionCommandOutput) => void
  ): void;
  public getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationVersionCommandOutput) => void
  ): void;
  public getApplicationVersion(
    args: GetApplicationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationVersionCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationVersionCommandOutput) => void
  ): Promise<GetApplicationVersionCommandOutput> | void {
    const command = new GetApplicationVersionCommand(args);
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
   * <p>Gets the details of a specific batch job execution for a specific application.</p>
   */
  public getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchJobExecutionCommandOutput>;
  public getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    cb: (err: any, data?: GetBatchJobExecutionCommandOutput) => void
  ): void;
  public getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchJobExecutionCommandOutput) => void
  ): void;
  public getBatchJobExecution(
    args: GetBatchJobExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBatchJobExecutionCommandOutput) => void),
    cb?: (err: any, data?: GetBatchJobExecutionCommandOutput) => void
  ): Promise<GetBatchJobExecutionCommandOutput> | void {
    const command = new GetBatchJobExecutionCommand(args);
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
   * <p>Gets the details of a specific data set.</p>
   */
  public getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSetDetailsCommandOutput>;
  public getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    cb: (err: any, data?: GetDataSetDetailsCommandOutput) => void
  ): void;
  public getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSetDetailsCommandOutput) => void
  ): void;
  public getDataSetDetails(
    args: GetDataSetDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataSetDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetDataSetDetailsCommandOutput) => void
  ): Promise<GetDataSetDetailsCommandOutput> | void {
    const command = new GetDataSetDetailsCommand(args);
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
   * <p>Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.</p>
   */
  public getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSetImportTaskCommandOutput>;
  public getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    cb: (err: any, data?: GetDataSetImportTaskCommandOutput) => void
  ): void;
  public getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSetImportTaskCommandOutput) => void
  ): void;
  public getDataSetImportTask(
    args: GetDataSetImportTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataSetImportTaskCommandOutput) => void),
    cb?: (err: any, data?: GetDataSetImportTaskCommandOutput) => void
  ): Promise<GetDataSetImportTaskCommandOutput> | void {
    const command = new GetDataSetImportTaskCommand(args);
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
   * <p>Gets details of a specific deployment with a given deployment identifier.</p>
   */
  public getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  public getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentCommandOutput) => void
  ): Promise<GetDeploymentCommandOutput> | void {
    const command = new GetDeploymentCommand(args);
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
   * <p>Describes a specific runtime environment.</p>
   */
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  public getEnvironment(
    args: GetEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): Promise<GetEnvironmentCommandOutput> | void {
    const command = new GetEnvironmentCommand(args);
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
   * <p>Lists the applications associated with a specific Amazon Web Services account. You can provide the
   *          unique identifier of a specific runtime environment in a query parameter to see all applications
   *          associated with that environment.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
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
   * <p>Returns a list of the application versions for a specific application.</p>
   */
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationVersionsCommandOutput>;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): void;
  public listApplicationVersions(
    args: ListApplicationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationVersionsCommandOutput) => void
  ): Promise<ListApplicationVersionsCommandOutput> | void {
    const command = new ListApplicationVersionsCommand(args);
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
   * <p>Lists all the available batch job definitions based on the batch job resources uploaded
   *          during the application creation. You can use the batch job definitions in the list to start
   *          a batch job.</p>
   */
  public listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchJobDefinitionsCommandOutput>;
  public listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    cb: (err: any, data?: ListBatchJobDefinitionsCommandOutput) => void
  ): void;
  public listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchJobDefinitionsCommandOutput) => void
  ): void;
  public listBatchJobDefinitions(
    args: ListBatchJobDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBatchJobDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListBatchJobDefinitionsCommandOutput) => void
  ): Promise<ListBatchJobDefinitionsCommandOutput> | void {
    const command = new ListBatchJobDefinitionsCommand(args);
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
   * <p>Lists historical, current, and scheduled batch job executions for a specific
   *          application.</p>
   */
  public listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBatchJobExecutionsCommandOutput>;
  public listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    cb: (err: any, data?: ListBatchJobExecutionsCommandOutput) => void
  ): void;
  public listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBatchJobExecutionsCommandOutput) => void
  ): void;
  public listBatchJobExecutions(
    args: ListBatchJobExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBatchJobExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListBatchJobExecutionsCommandOutput) => void
  ): Promise<ListBatchJobExecutionsCommandOutput> | void {
    const command = new ListBatchJobExecutionsCommand(args);
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
   * <p>Lists the data set imports for the specified application.</p>
   */
  public listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetImportHistoryCommandOutput>;
  public listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    cb: (err: any, data?: ListDataSetImportHistoryCommandOutput) => void
  ): void;
  public listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetImportHistoryCommandOutput) => void
  ): void;
  public listDataSetImportHistory(
    args: ListDataSetImportHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSetImportHistoryCommandOutput) => void),
    cb?: (err: any, data?: ListDataSetImportHistoryCommandOutput) => void
  ): Promise<ListDataSetImportHistoryCommandOutput> | void {
    const command = new ListDataSetImportHistoryCommand(args);
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
   * <p>Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are
   *          associated with applications deployed on runtime environments. This is known as importing data
   *          sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.</p>
   */
  public listDataSets(
    args: ListDataSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSetsCommandOutput>;
  public listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSetsCommandOutput) => void
  ): void;
  public listDataSets(
    args: ListDataSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSetsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSetsCommandOutput) => void
  ): Promise<ListDataSetsCommandOutput> | void {
    const command = new ListDataSetsCommand(args);
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
   * <p>Returns a list of all deployments of a specific application. A deployment is a
   *          combination of a specific application and a specific version of that application. Each
   *          deployment is mapped to a particular application version.</p>
   */
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): Promise<ListDeploymentsCommandOutput> | void {
    const command = new ListDeploymentsCommand(args);
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
   * <p>Lists the available engine versions.</p>
   */
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngineVersionsCommandOutput>;
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEngineVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): Promise<ListEngineVersionsCommandOutput> | void {
    const command = new ListEngineVersionsCommand(args);
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
   * <p>Lists the runtime environments.</p>
   */
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  public listEnvironments(
    args: ListEnvironmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEnvironmentsCommandOutput) => void),
    cb?: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): Promise<ListEnvironmentsCommandOutput> | void {
    const command = new ListEnvironmentsCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Starts an application that is currently stopped.</p>
   */
  public startApplication(
    args: StartApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartApplicationCommandOutput>;
  public startApplication(
    args: StartApplicationCommandInput,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  public startApplication(
    args: StartApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartApplicationCommandOutput) => void
  ): void;
  public startApplication(
    args: StartApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartApplicationCommandOutput) => void),
    cb?: (err: any, data?: StartApplicationCommandOutput) => void
  ): Promise<StartApplicationCommandOutput> | void {
    const command = new StartApplicationCommand(args);
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
   * <p>Starts a batch job and returns the unique identifier of this execution of the batch job.
   *          The associated application must be running in order to start the batch job.</p>
   */
  public startBatchJob(
    args: StartBatchJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBatchJobCommandOutput>;
  public startBatchJob(
    args: StartBatchJobCommandInput,
    cb: (err: any, data?: StartBatchJobCommandOutput) => void
  ): void;
  public startBatchJob(
    args: StartBatchJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBatchJobCommandOutput) => void
  ): void;
  public startBatchJob(
    args: StartBatchJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBatchJobCommandOutput) => void),
    cb?: (err: any, data?: StartBatchJobCommandOutput) => void
  ): Promise<StartBatchJobCommandOutput> | void {
    const command = new StartBatchJobCommand(args);
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
   * <p>Stops a running application.</p>
   */
  public stopApplication(
    args: StopApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopApplicationCommandOutput>;
  public stopApplication(
    args: StopApplicationCommandInput,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;
  public stopApplication(
    args: StopApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopApplicationCommandOutput) => void
  ): void;
  public stopApplication(
    args: StopApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopApplicationCommandOutput) => void),
    cb?: (err: any, data?: StopApplicationCommandOutput) => void
  ): Promise<StopApplicationCommandOutput> | void {
    const command = new StopApplicationCommand(args);
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
   * <p>Adds one or more tags to the specified resource.</p>
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
   * <p>Removes one or more tags from the specified resource.</p>
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
   * <p>Updates an application and creates a new version.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
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
   * <p>Updates the configuration details for a specific runtime environment.</p>
   */
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  public updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEnvironmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): Promise<UpdateEnvironmentCommandOutput> | void {
    const command = new UpdateEnvironmentCommand(args);
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
