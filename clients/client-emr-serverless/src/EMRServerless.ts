// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelJobRunCommand,
  CancelJobRunCommandInput,
  CancelJobRunCommandOutput,
} from "./commands/CancelJobRunCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetDashboardForJobRunCommand,
  GetDashboardForJobRunCommandInput,
  GetDashboardForJobRunCommandOutput,
} from "./commands/GetDashboardForJobRunCommand";
import { GetJobRunCommand, GetJobRunCommandInput, GetJobRunCommandOutput } from "./commands/GetJobRunCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
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
import { StartJobRunCommand, StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
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
import { EMRServerlessClient } from "./EMRServerlessClient";

/**
 * <p>Amazon EMR Serverless is a new deployment option for Amazon EMR. EMR Serverless provides
 *          a serverless runtime environment that simplifies running analytics applications using the
 *          latest open source frameworks such as Apache Spark and Apache Hive. With EMR Serverless,
 *          you don’t have to configure, optimize, secure, or operate clusters to run applications with
 *          these frameworks.</p>
 *          <p>The API reference to Amazon EMR Serverless is <code>emr-serverless</code>. The
 *             <code>emr-serverless</code> prefix is used in the following scenarios: </p>
 *          <ul>
 *             <li>
 *                <p>It is the prefix in the CLI commands for Amazon EMR Serverless. For example,
 *                   <code>aws emr-serverless start-job-run</code>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix before IAM policy actions for Amazon EMR Serverless. For example,
 *                   <code>"Action": ["emr-serverless:StartJobRun"]</code>. For more information, see
 *                   <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR Serverless</a>.</p>
 *             </li>
 *             <li>
 *                <p>It is the prefix used in Amazon EMR Serverless service endpoints. For example,
 *                   <code>emr-serverless.us-east-2.amazonaws.com</code>.</p>
 *             </li>
 *          </ul>
 */
export class EMRServerless extends EMRServerlessClient {
  /**
   * <p>Cancels a job run.</p>
   */
  public cancelJobRun(
    args: CancelJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelJobRunCommandOutput>;
  public cancelJobRun(args: CancelJobRunCommandInput, cb: (err: any, data?: CancelJobRunCommandOutput) => void): void;
  public cancelJobRun(
    args: CancelJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobRunCommandOutput) => void
  ): void;
  public cancelJobRun(
    args: CancelJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobRunCommandOutput) => void),
    cb?: (err: any, data?: CancelJobRunCommandOutput) => void
  ): Promise<CancelJobRunCommandOutput> | void {
    const command = new CancelJobRunCommand(args);
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
   * <p>Creates an application.</p>
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
   * <p>Deletes an application. An application has to be in a stopped or created state in order
   *          to be deleted.</p>
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
   * <p>Displays detailed information about a specified application.</p>
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
   * <p>Returns a URL to access the job run dashboard.</p>
   */
  public getDashboardForJobRun(
    args: GetDashboardForJobRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDashboardForJobRunCommandOutput>;
  public getDashboardForJobRun(
    args: GetDashboardForJobRunCommandInput,
    cb: (err: any, data?: GetDashboardForJobRunCommandOutput) => void
  ): void;
  public getDashboardForJobRun(
    args: GetDashboardForJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDashboardForJobRunCommandOutput) => void
  ): void;
  public getDashboardForJobRun(
    args: GetDashboardForJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDashboardForJobRunCommandOutput) => void),
    cb?: (err: any, data?: GetDashboardForJobRunCommandOutput) => void
  ): Promise<GetDashboardForJobRunCommandOutput> | void {
    const command = new GetDashboardForJobRunCommand(args);
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
   * <p>Displays detailed information about a job run.</p>
   */
  public getJobRun(args: GetJobRunCommandInput, options?: __HttpHandlerOptions): Promise<GetJobRunCommandOutput>;
  public getJobRun(args: GetJobRunCommandInput, cb: (err: any, data?: GetJobRunCommandOutput) => void): void;
  public getJobRun(
    args: GetJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobRunCommandOutput) => void
  ): void;
  public getJobRun(
    args: GetJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobRunCommandOutput) => void),
    cb?: (err: any, data?: GetJobRunCommandOutput) => void
  ): Promise<GetJobRunCommandOutput> | void {
    const command = new GetJobRunCommand(args);
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
   * <p>Lists applications based on a set of parameters.</p>
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
   * <p>Lists job runs based on a set of parameters.</p>
   */
  public listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
  public listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
  public listJobRuns(
    args: ListJobRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobRunsCommandOutput) => void
  ): void;
  public listJobRuns(
    args: ListJobRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobRunsCommandOutput) => void),
    cb?: (err: any, data?: ListJobRunsCommandOutput) => void
  ): Promise<ListJobRunsCommandOutput> | void {
    const command = new ListJobRunsCommand(args);
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
   * <p>Lists the tags assigned to the resources.</p>
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
   * <p>Starts a specified application and initializes initial capacity if configured.</p>
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
   * <p>Starts a job run.</p>
   */
  public startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
  public startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobRunCommandOutput) => void
  ): void;
  public startJobRun(
    args: StartJobRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartJobRunCommandOutput) => void),
    cb?: (err: any, data?: StartJobRunCommandOutput) => void
  ): Promise<StartJobRunCommandOutput> | void {
    const command = new StartJobRunCommand(args);
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
   * <p>Stops a specified application and releases initial capacity if configured. All scheduled
   *          and running jobs must be completed or cancelled before stopping an application.</p>
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
   * <p>Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag
   *          consists of a key and an optional value, both of which you define. Tags enable you to
   *          categorize your AWS resources by attributes such as purpose, owner, or environment. When
   *          you have many resources of the same type, you can quickly identify a specific resource
   *          based on the tags you've assigned to it. </p>
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
   * <p>Removes tags from resources.</p>
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
   * <p>Updates a specified application. An application has to be in a stopped or created state
   *          in order to be updated.</p>
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
}
