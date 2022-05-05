// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeBuildClient } from "./CodeBuildClient";
import {
  BatchDeleteBuildsCommand,
  BatchDeleteBuildsCommandInput,
  BatchDeleteBuildsCommandOutput,
} from "./commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildBatchesCommand,
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
} from "./commands/BatchGetBuildBatchesCommand";
import {
  BatchGetBuildsCommand,
  BatchGetBuildsCommandInput,
  BatchGetBuildsCommandOutput,
} from "./commands/BatchGetBuildsCommand";
import {
  BatchGetProjectsCommand,
  BatchGetProjectsCommandInput,
  BatchGetProjectsCommandOutput,
} from "./commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommand,
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
} from "./commands/BatchGetReportGroupsCommand";
import {
  BatchGetReportsCommand,
  BatchGetReportsCommandInput,
  BatchGetReportsCommandOutput,
} from "./commands/BatchGetReportsCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateReportGroupCommand,
  CreateReportGroupCommandInput,
  CreateReportGroupCommandOutput,
} from "./commands/CreateReportGroupCommand";
import {
  CreateWebhookCommand,
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput,
} from "./commands/CreateWebhookCommand";
import {
  DeleteBuildBatchCommand,
  DeleteBuildBatchCommandInput,
  DeleteBuildBatchCommandOutput,
} from "./commands/DeleteBuildBatchCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteReportCommand,
  DeleteReportCommandInput,
  DeleteReportCommandOutput,
} from "./commands/DeleteReportCommand";
import {
  DeleteReportGroupCommand,
  DeleteReportGroupCommandInput,
  DeleteReportGroupCommandOutput,
} from "./commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommand,
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput,
} from "./commands/DeleteSourceCredentialsCommand";
import {
  DeleteWebhookCommand,
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
} from "./commands/DeleteWebhookCommand";
import {
  DescribeCodeCoveragesCommand,
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "./commands/DescribeCodeCoveragesCommand";
import {
  DescribeTestCasesCommand,
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput,
} from "./commands/DescribeTestCasesCommand";
import {
  GetReportGroupTrendCommand,
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
} from "./commands/GetReportGroupTrendCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommand,
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
} from "./commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommand,
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
} from "./commands/InvalidateProjectCacheCommand";
import {
  ListBuildBatchesCommand,
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput,
} from "./commands/ListBuildBatchesCommand";
import {
  ListBuildBatchesForProjectCommand,
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "./commands/ListBuildBatchesForProjectCommand";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "./commands/ListBuildsForProjectCommand";
import {
  ListCuratedEnvironmentImagesCommand,
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
} from "./commands/ListCuratedEnvironmentImagesCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListReportGroupsCommand,
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput,
} from "./commands/ListReportGroupsCommand";
import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "./commands/ListReportsForReportGroupCommand";
import {
  ListSharedProjectsCommand,
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
} from "./commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommand,
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "./commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommand,
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput,
} from "./commands/ListSourceCredentialsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RetryBuildBatchCommand,
  RetryBuildBatchCommandInput,
  RetryBuildBatchCommandOutput,
} from "./commands/RetryBuildBatchCommand";
import { RetryBuildCommand, RetryBuildCommandInput, RetryBuildCommandOutput } from "./commands/RetryBuildCommand";
import {
  StartBuildBatchCommand,
  StartBuildBatchCommandInput,
  StartBuildBatchCommandOutput,
} from "./commands/StartBuildBatchCommand";
import { StartBuildCommand, StartBuildCommandInput, StartBuildCommandOutput } from "./commands/StartBuildCommand";
import {
  StopBuildBatchCommand,
  StopBuildBatchCommandInput,
  StopBuildBatchCommandOutput,
} from "./commands/StopBuildBatchCommand";
import { StopBuildCommand, StopBuildCommandInput, StopBuildCommandOutput } from "./commands/StopBuildCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateProjectVisibilityCommand,
  UpdateProjectVisibilityCommandInput,
  UpdateProjectVisibilityCommandOutput,
} from "./commands/UpdateProjectVisibilityCommand";
import {
  UpdateReportGroupCommand,
  UpdateReportGroupCommandInput,
  UpdateReportGroupCommandOutput,
} from "./commands/UpdateReportGroupCommand";
import {
  UpdateWebhookCommand,
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput,
} from "./commands/UpdateWebhookCommand";

/**
 * <fullname>CodeBuild</fullname>
 *         <p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code,
 *             runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the
 *             need to provision, manage, and scale your own build servers. It provides prepackaged
 *             build environments for the most popular programming languages and build tools, such as
 *             Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild
 *             to use your own build tools. CodeBuild scales automatically to meet peak build requests. You
 *             pay only for the build time you consume. For more information about CodeBuild, see the <i>
 *                 <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User
 *                     Guide</a>.</i>
 *          </p>
 */
export class CodeBuild extends CodeBuildClient {
  /**
   * <p>Deletes one or more builds.</p>
   */
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteBuildsCommandOutput>;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): void;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteBuildsCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteBuildsCommandOutput) => void
  ): Promise<BatchDeleteBuildsCommandOutput> | void {
    const command = new BatchDeleteBuildsCommand(args);
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
   * <p>Retrieves information about one or more batch builds.</p>
   */
  public batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBuildBatchesCommandOutput>;
  public batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    cb: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): void;
  public batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): void;
  public batchGetBuildBatches(
    args: BatchGetBuildBatchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetBuildBatchesCommandOutput) => void),
    cb?: (err: any, data?: BatchGetBuildBatchesCommandOutput) => void
  ): Promise<BatchGetBuildBatchesCommandOutput> | void {
    const command = new BatchGetBuildBatchesCommand(args);
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
   * <p>Gets information about one or more builds.</p>
   */
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetBuildsCommandOutput>;
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): void;
  public batchGetBuilds(
    args: BatchGetBuildsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetBuildsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetBuildsCommandOutput) => void
  ): Promise<BatchGetBuildsCommandOutput> | void {
    const command = new BatchGetBuildsCommand(args);
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
   * <p>Gets information about one or more build projects.</p>
   */
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetProjectsCommandOutput>;
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): void;
  public batchGetProjects(
    args: BatchGetProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetProjectsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetProjectsCommandOutput) => void
  ): Promise<BatchGetProjectsCommandOutput> | void {
    const command = new BatchGetProjectsCommand(args);
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
   * <p>
   *       Returns an array of report groups.
   *     </p>
   */
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetReportGroupsCommandOutput>;
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): void;
  public batchGetReportGroups(
    args: BatchGetReportGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetReportGroupsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetReportGroupsCommandOutput) => void
  ): Promise<BatchGetReportGroupsCommandOutput> | void {
    const command = new BatchGetReportGroupsCommand(args);
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
   * <p>
   *       Returns an array of reports.
   *     </p>
   */
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetReportsCommandOutput>;
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): void;
  public batchGetReports(
    args: BatchGetReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetReportsCommandOutput) => void),
    cb?: (err: any, data?: BatchGetReportsCommandOutput) => void
  ): Promise<BatchGetReportsCommandOutput> | void {
    const command = new BatchGetReportsCommand(args);
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
   * <p>Creates a build project.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>
   *       Creates a report group. A report group contains a collection of reports.
   *     </p>
   */
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReportGroupCommandOutput>;
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): void;
  public createReportGroup(
    args: CreateReportGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReportGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateReportGroupCommandOutput) => void
  ): Promise<CreateReportGroupCommandOutput> | void {
    const command = new CreateReportGroupCommand(args);
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
   * <p>For an existing CodeBuild build project that has its source code stored in a GitHub or
   *       Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a
   *       code change is pushed to the repository.</p>
   *          <important>
   *             <p>If you enable webhooks for an CodeBuild project, and the project is used as a build
   *         step in CodePipeline, then two identical builds are created for each commit. One build is
   *         triggered through webhooks, and one through CodePipeline. Because billing is on a per-build
   *         basis, you are billed for both builds. Therefore, if you are using CodePipeline, we
   *         recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the
   *         Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p>
   *          </important>
   */
  public createWebhook(
    args: CreateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebhookCommandOutput>;
  public createWebhook(
    args: CreateWebhookCommandInput,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWebhookCommandOutput) => void),
    cb?: (err: any, data?: CreateWebhookCommandOutput) => void
  ): Promise<CreateWebhookCommandOutput> | void {
    const command = new CreateWebhookCommand(args);
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
   * <p>Deletes a batch build.</p>
   */
  public deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBuildBatchCommandOutput>;
  public deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    cb: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): void;
  public deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): void;
  public deleteBuildBatch(
    args: DeleteBuildBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBuildBatchCommandOutput) => void),
    cb?: (err: any, data?: DeleteBuildBatchCommandOutput) => void
  ): Promise<DeleteBuildBatchCommandOutput> | void {
    const command = new DeleteBuildBatchCommand(args);
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
   * <p> Deletes a build project. When you delete a project, its builds are not deleted.
   *         </p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
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
   * <p>
   *       Deletes a report.
   *     </p>
   */
  public deleteReport(
    args: DeleteReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportCommandOutput>;
  public deleteReport(args: DeleteReportCommandInput, cb: (err: any, data?: DeleteReportCommandOutput) => void): void;
  public deleteReport(
    args: DeleteReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportCommandOutput) => void
  ): void;
  public deleteReport(
    args: DeleteReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReportCommandOutput) => void),
    cb?: (err: any, data?: DeleteReportCommandOutput) => void
  ): Promise<DeleteReportCommandOutput> | void {
    const command = new DeleteReportCommand(args);
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
   * <p>Deletes a report group. Before you delete a report group, you must delete its reports. </p>
   */
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportGroupCommandOutput>;
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): void;
  public deleteReportGroup(
    args: DeleteReportGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReportGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteReportGroupCommandOutput) => void
  ): Promise<DeleteReportGroupCommandOutput> | void {
    const command = new DeleteReportGroupCommand(args);
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
   * <p> Deletes a resource policy that is identified by its resource ARN. </p>
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
   * <p> Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. </p>
   */
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceCredentialsCommandOutput>;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): void;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSourceCredentialsCommandOutput) => void),
    cb?: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void
  ): Promise<DeleteSourceCredentialsCommandOutput> | void {
    const command = new DeleteSourceCredentialsCommand(args);
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
   * <p>For an existing CodeBuild build project that has its source code stored in a GitHub or
   *             Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code
   *             change is pushed to the repository.</p>
   */
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebhookCommandOutput>;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWebhookCommandOutput) => void),
    cb?: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): Promise<DeleteWebhookCommandOutput> | void {
    const command = new DeleteWebhookCommand(args);
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
   * <p>Retrieves one or more code coverage reports.</p>
   */
  public describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeCoveragesCommandOutput>;
  public describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    cb: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): void;
  public describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): void;
  public describeCodeCoverages(
    args: DescribeCodeCoveragesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCodeCoveragesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCodeCoveragesCommandOutput) => void
  ): Promise<DescribeCodeCoveragesCommandOutput> | void {
    const command = new DescribeCodeCoveragesCommand(args);
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
   * <p>
   *       Returns a list of details about test cases for a report.
   *     </p>
   */
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTestCasesCommandOutput>;
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): void;
  public describeTestCases(
    args: DescribeTestCasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTestCasesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTestCasesCommandOutput) => void
  ): Promise<DescribeTestCasesCommandOutput> | void {
    const command = new DescribeTestCasesCommand(args);
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
   * <p>Analyzes and accumulates test report values for the specified test reports.</p>
   */
  public getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReportGroupTrendCommandOutput>;
  public getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    cb: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): void;
  public getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): void;
  public getReportGroupTrend(
    args: GetReportGroupTrendCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReportGroupTrendCommandOutput) => void),
    cb?: (err: any, data?: GetReportGroupTrendCommandOutput) => void
  ): Promise<GetReportGroupTrendCommandOutput> | void {
    const command = new GetReportGroupTrendCommand(args);
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
   * <p> Gets a resource policy that is identified by its resource ARN. </p>
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
   * <p> Imports the source repository credentials for an CodeBuild project that has its
   *             source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
   */
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportSourceCredentialsCommandOutput>;
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): void;
  public importSourceCredentials(
    args: ImportSourceCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportSourceCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ImportSourceCredentialsCommandOutput) => void
  ): Promise<ImportSourceCredentialsCommandOutput> | void {
    const command = new ImportSourceCredentialsCommand(args);
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
   * <p>Resets the cache for a project.</p>
   */
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvalidateProjectCacheCommandOutput>;
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): void;
  public invalidateProjectCache(
    args: InvalidateProjectCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvalidateProjectCacheCommandOutput) => void),
    cb?: (err: any, data?: InvalidateProjectCacheCommandOutput) => void
  ): Promise<InvalidateProjectCacheCommandOutput> | void {
    const command = new InvalidateProjectCacheCommand(args);
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
   * <p>Retrieves the identifiers of your build batches in the current region.</p>
   */
  public listBuildBatches(
    args: ListBuildBatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildBatchesCommandOutput>;
  public listBuildBatches(
    args: ListBuildBatchesCommandInput,
    cb: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): void;
  public listBuildBatches(
    args: ListBuildBatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): void;
  public listBuildBatches(
    args: ListBuildBatchesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuildBatchesCommandOutput) => void),
    cb?: (err: any, data?: ListBuildBatchesCommandOutput) => void
  ): Promise<ListBuildBatchesCommandOutput> | void {
    const command = new ListBuildBatchesCommand(args);
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
   * <p>Retrieves the identifiers of the build batches for a specific project.</p>
   */
  public listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildBatchesForProjectCommandOutput>;
  public listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    cb: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): void;
  public listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): void;
  public listBuildBatchesForProject(
    args: ListBuildBatchesForProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuildBatchesForProjectCommandOutput) => void),
    cb?: (err: any, data?: ListBuildBatchesForProjectCommandOutput) => void
  ): Promise<ListBuildBatchesForProjectCommandOutput> | void {
    const command = new ListBuildBatchesForProjectCommand(args);
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
   * <p>Gets a list of build IDs, with each build ID representing a single build.</p>
   */
  public listBuilds(args: ListBuildsCommandInput, options?: __HttpHandlerOptions): Promise<ListBuildsCommandOutput>;
  public listBuilds(args: ListBuildsCommandInput, cb: (err: any, data?: ListBuildsCommandOutput) => void): void;
  public listBuilds(
    args: ListBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;
  public listBuilds(
    args: ListBuildsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuildsCommandOutput) => void),
    cb?: (err: any, data?: ListBuildsCommandOutput) => void
  ): Promise<ListBuildsCommandOutput> | void {
    const command = new ListBuildsCommand(args);
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
   * <p>Gets a list of build identifiers for the specified build project, with each build
   *             identifier representing a single build.</p>
   */
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuildsForProjectCommandOutput>;
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): void;
  public listBuildsForProject(
    args: ListBuildsForProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuildsForProjectCommandOutput) => void),
    cb?: (err: any, data?: ListBuildsForProjectCommandOutput) => void
  ): Promise<ListBuildsForProjectCommandOutput> | void {
    const command = new ListBuildsForProjectCommand(args);
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
   * <p>Gets information about Docker images that are managed by CodeBuild.</p>
   */
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCuratedEnvironmentImagesCommandOutput>;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): void;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void),
    cb?: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void
  ): Promise<ListCuratedEnvironmentImagesCommandOutput> | void {
    const command = new ListCuratedEnvironmentImagesCommand(args);
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
   * <p>Gets a list of build project names, with each build project name representing a single
   *             build project.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>
   *       Gets a list ARNs for the report groups in the current Amazon Web Services account.
   *     </p>
   */
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportGroupsCommandOutput>;
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): void;
  public listReportGroups(
    args: ListReportGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReportGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListReportGroupsCommandOutput) => void
  ): Promise<ListReportGroupsCommandOutput> | void {
    const command = new ListReportGroupsCommand(args);
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
   * <p>
   *       Returns a list of ARNs for the reports in the current Amazon Web Services account.
   *     </p>
   */
  public listReports(args: ListReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListReportsCommandOutput>;
  public listReports(args: ListReportsCommandInput, cb: (err: any, data?: ListReportsCommandOutput) => void): void;
  public listReports(
    args: ListReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsCommandOutput) => void
  ): void;
  public listReports(
    args: ListReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReportsCommandOutput) => void),
    cb?: (err: any, data?: ListReportsCommandOutput) => void
  ): Promise<ListReportsCommandOutput> | void {
    const command = new ListReportsCommand(args);
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
   * <p>
   *       Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
   *     </p>
   */
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportsForReportGroupCommandOutput>;
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): void;
  public listReportsForReportGroup(
    args: ListReportsForReportGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReportsForReportGroupCommandOutput) => void),
    cb?: (err: any, data?: ListReportsForReportGroupCommandOutput) => void
  ): Promise<ListReportsForReportGroupCommandOutput> | void {
    const command = new ListReportsForReportGroupCommand(args);
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
   * <p> Gets a list of projects that are shared with other Amazon Web Services accounts or users. </p>
   */
  public listSharedProjects(
    args: ListSharedProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSharedProjectsCommandOutput>;
  public listSharedProjects(
    args: ListSharedProjectsCommandInput,
    cb: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): void;
  public listSharedProjects(
    args: ListSharedProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): void;
  public listSharedProjects(
    args: ListSharedProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSharedProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListSharedProjectsCommandOutput) => void
  ): Promise<ListSharedProjectsCommandOutput> | void {
    const command = new ListSharedProjectsCommand(args);
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
   * <p> Gets a list of report groups that are shared with other Amazon Web Services accounts or users.
   *         </p>
   */
  public listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSharedReportGroupsCommandOutput>;
  public listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): void;
  public listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): void;
  public listSharedReportGroups(
    args: ListSharedReportGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSharedReportGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListSharedReportGroupsCommandOutput) => void
  ): Promise<ListSharedReportGroupsCommandOutput> | void {
    const command = new ListSharedReportGroupsCommand(args);
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
   * <p> Returns a list of <code>SourceCredentialsInfo</code> objects. </p>
   */
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceCredentialsCommandOutput>;
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): void;
  public listSourceCredentials(
    args: ListSourceCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSourceCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ListSourceCredentialsCommandOutput) => void
  ): Promise<ListSourceCredentialsCommandOutput> | void {
    const command = new ListSourceCredentialsCommand(args);
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
   * <p> Stores a resource policy for the ARN of a <code>Project</code> or
   *                 <code>ReportGroup</code> object. </p>
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
   * <p>Restarts a build.</p>
   */
  public retryBuild(args: RetryBuildCommandInput, options?: __HttpHandlerOptions): Promise<RetryBuildCommandOutput>;
  public retryBuild(args: RetryBuildCommandInput, cb: (err: any, data?: RetryBuildCommandOutput) => void): void;
  public retryBuild(
    args: RetryBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryBuildCommandOutput) => void
  ): void;
  public retryBuild(
    args: RetryBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetryBuildCommandOutput) => void),
    cb?: (err: any, data?: RetryBuildCommandOutput) => void
  ): Promise<RetryBuildCommandOutput> | void {
    const command = new RetryBuildCommand(args);
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
   * <p>Restarts a failed batch build. Only batch builds that have failed can be retried.</p>
   */
  public retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryBuildBatchCommandOutput>;
  public retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    cb: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): void;
  public retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): void;
  public retryBuildBatch(
    args: RetryBuildBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetryBuildBatchCommandOutput) => void),
    cb?: (err: any, data?: RetryBuildBatchCommandOutput) => void
  ): Promise<RetryBuildBatchCommandOutput> | void {
    const command = new RetryBuildBatchCommand(args);
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
   * <p>Starts running a build.</p>
   */
  public startBuild(args: StartBuildCommandInput, options?: __HttpHandlerOptions): Promise<StartBuildCommandOutput>;
  public startBuild(args: StartBuildCommandInput, cb: (err: any, data?: StartBuildCommandOutput) => void): void;
  public startBuild(
    args: StartBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBuildCommandOutput) => void
  ): void;
  public startBuild(
    args: StartBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBuildCommandOutput) => void),
    cb?: (err: any, data?: StartBuildCommandOutput) => void
  ): Promise<StartBuildCommandOutput> | void {
    const command = new StartBuildCommand(args);
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
   * <p>Starts a batch build for a project.</p>
   */
  public startBuildBatch(
    args: StartBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBuildBatchCommandOutput>;
  public startBuildBatch(
    args: StartBuildBatchCommandInput,
    cb: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): void;
  public startBuildBatch(
    args: StartBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): void;
  public startBuildBatch(
    args: StartBuildBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBuildBatchCommandOutput) => void),
    cb?: (err: any, data?: StartBuildBatchCommandOutput) => void
  ): Promise<StartBuildBatchCommandOutput> | void {
    const command = new StartBuildBatchCommand(args);
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
   * <p>Attempts to stop running a build.</p>
   */
  public stopBuild(args: StopBuildCommandInput, options?: __HttpHandlerOptions): Promise<StopBuildCommandOutput>;
  public stopBuild(args: StopBuildCommandInput, cb: (err: any, data?: StopBuildCommandOutput) => void): void;
  public stopBuild(
    args: StopBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBuildCommandOutput) => void
  ): void;
  public stopBuild(
    args: StopBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopBuildCommandOutput) => void),
    cb?: (err: any, data?: StopBuildCommandOutput) => void
  ): Promise<StopBuildCommandOutput> | void {
    const command = new StopBuildCommand(args);
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
   * <p>Stops a running batch build.</p>
   */
  public stopBuildBatch(
    args: StopBuildBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBuildBatchCommandOutput>;
  public stopBuildBatch(
    args: StopBuildBatchCommandInput,
    cb: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): void;
  public stopBuildBatch(
    args: StopBuildBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): void;
  public stopBuildBatch(
    args: StopBuildBatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopBuildBatchCommandOutput) => void),
    cb?: (err: any, data?: StopBuildBatchCommandOutput) => void
  ): Promise<StopBuildBatchCommandOutput> | void {
    const command = new StopBuildBatchCommand(args);
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
   * <p>Changes the settings of a build project.</p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
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
   * <p>Changes the public visibility for a project. The project's build results, logs, and
   *       artifacts are available to the general public.  For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build
   *         projects</a> in the <i>CodeBuild User Guide</i>.</p>
   *          <important>
   *             <p>The following should be kept in mind when making your projects public:</p>
   *             <ul>
   *                <li>
   *                   <p>All of a project's build results, logs, and artifacts, including builds that were run
   *             when the project was private, are available to the general public.</p>
   *                </li>
   *                <li>
   *                   <p>All build logs and artifacts are available to the public. Environment variables, source
   *             code, and other sensitive information may have been output to the build logs and artifacts.
   *             You must be careful about what information is output to the build logs. Some best practice
   *             are:</p>
   *                   <ul>
   *                      <li>
   *                         <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access
   *                 keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store
   *                 or Secrets Manager to store sensitive values.</p>
   *                      </li>
   *                      <li>
   *                         <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best
   *                   practices for using webhooks</a> in the <i>CodeBuild User
   *                   Guide</i> to limit which entities can trigger a build, and do
   *                   not store the buildspec in the project itself, to ensure that your webhooks are as
   *                   secure as possible.</p>
   *                      </li>
   *                   </ul>
   *                </li>
   *                <li>
   *                   <p>A malicious user can use public builds to distribute malicious artifacts. We recommend
   *             that you review all pull requests to verify that the pull request is a legitimate change. We
   *             also recommend that you validate any artifacts with their checksums to make sure that the
   *             correct artifacts are being downloaded.</p>
   *                </li>
   *             </ul>
   *          </important>
   */
  public updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectVisibilityCommandOutput>;
  public updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    cb: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): void;
  public updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): void;
  public updateProjectVisibility(
    args: UpdateProjectVisibilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectVisibilityCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectVisibilityCommandOutput) => void
  ): Promise<UpdateProjectVisibilityCommandOutput> | void {
    const command = new UpdateProjectVisibilityCommand(args);
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
   * <p>
   *       Updates a report group.
   *     </p>
   */
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportGroupCommandOutput>;
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): void;
  public updateReportGroup(
    args: UpdateReportGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReportGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateReportGroupCommandOutput) => void
  ): Promise<UpdateReportGroupCommandOutput> | void {
    const command = new UpdateReportGroupCommand(args);
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
   * <p> Updates the webhook associated with an CodeBuild build project. </p>
   *          <note>
   *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
   *       </p>
   *          </note>
   */
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebhookCommandOutput>;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWebhookCommandOutput) => void),
    cb?: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): Promise<UpdateWebhookCommandOutput> | void {
    const command = new UpdateWebhookCommand(args);
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
