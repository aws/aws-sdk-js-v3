import { CodeBuildClient } from "./CodeBuildClient";
import { AccountLimitExceededException } from "./types/AccountLimitExceededException";
import { BatchDeleteBuildsInput } from "./types/BatchDeleteBuildsInput";
import { BatchDeleteBuildsOutput } from "./types/BatchDeleteBuildsOutput";
import { BatchGetBuildsInput } from "./types/BatchGetBuildsInput";
import { BatchGetBuildsOutput } from "./types/BatchGetBuildsOutput";
import { BatchGetProjectsInput } from "./types/BatchGetProjectsInput";
import { BatchGetProjectsOutput } from "./types/BatchGetProjectsOutput";
import { CreateProjectInput } from "./types/CreateProjectInput";
import { CreateProjectOutput } from "./types/CreateProjectOutput";
import { CreateWebhookInput } from "./types/CreateWebhookInput";
import { CreateWebhookOutput } from "./types/CreateWebhookOutput";
import { DeleteProjectInput } from "./types/DeleteProjectInput";
import { DeleteProjectOutput } from "./types/DeleteProjectOutput";
import { DeleteSourceCredentialsInput } from "./types/DeleteSourceCredentialsInput";
import { DeleteSourceCredentialsOutput } from "./types/DeleteSourceCredentialsOutput";
import { DeleteWebhookInput } from "./types/DeleteWebhookInput";
import { DeleteWebhookOutput } from "./types/DeleteWebhookOutput";
import { ImportSourceCredentialsInput } from "./types/ImportSourceCredentialsInput";
import { ImportSourceCredentialsOutput } from "./types/ImportSourceCredentialsOutput";
import { InvalidInputException } from "./types/InvalidInputException";
import { InvalidateProjectCacheInput } from "./types/InvalidateProjectCacheInput";
import { InvalidateProjectCacheOutput } from "./types/InvalidateProjectCacheOutput";
import { ListBuildsForProjectInput } from "./types/ListBuildsForProjectInput";
import { ListBuildsForProjectOutput } from "./types/ListBuildsForProjectOutput";
import { ListBuildsInput } from "./types/ListBuildsInput";
import { ListBuildsOutput } from "./types/ListBuildsOutput";
import { ListCuratedEnvironmentImagesInput } from "./types/ListCuratedEnvironmentImagesInput";
import { ListCuratedEnvironmentImagesOutput } from "./types/ListCuratedEnvironmentImagesOutput";
import { ListProjectsInput } from "./types/ListProjectsInput";
import { ListProjectsOutput } from "./types/ListProjectsOutput";
import { ListSourceCredentialsInput } from "./types/ListSourceCredentialsInput";
import { ListSourceCredentialsOutput } from "./types/ListSourceCredentialsOutput";
import { OAuthProviderException } from "./types/OAuthProviderException";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartBuildInput } from "./types/StartBuildInput";
import { StartBuildOutput } from "./types/StartBuildOutput";
import { StopBuildInput } from "./types/StopBuildInput";
import { StopBuildOutput } from "./types/StopBuildOutput";
import { UpdateProjectInput } from "./types/UpdateProjectInput";
import { UpdateProjectOutput } from "./types/UpdateProjectOutput";
import { UpdateWebhookInput } from "./types/UpdateWebhookInput";
import { UpdateWebhookOutput } from "./types/UpdateWebhookOutput";
import { BatchDeleteBuildsCommand } from "./commands/BatchDeleteBuildsCommand";
import { BatchGetBuildsCommand } from "./commands/BatchGetBuildsCommand";
import { BatchGetProjectsCommand } from "./commands/BatchGetProjectsCommand";
import { CreateProjectCommand } from "./commands/CreateProjectCommand";
import { CreateWebhookCommand } from "./commands/CreateWebhookCommand";
import { DeleteProjectCommand } from "./commands/DeleteProjectCommand";
import { DeleteSourceCredentialsCommand } from "./commands/DeleteSourceCredentialsCommand";
import { DeleteWebhookCommand } from "./commands/DeleteWebhookCommand";
import { ImportSourceCredentialsCommand } from "./commands/ImportSourceCredentialsCommand";
import { InvalidateProjectCacheCommand } from "./commands/InvalidateProjectCacheCommand";
import { ListBuildsCommand } from "./commands/ListBuildsCommand";
import { ListBuildsForProjectCommand } from "./commands/ListBuildsForProjectCommand";
import { ListCuratedEnvironmentImagesCommand } from "./commands/ListCuratedEnvironmentImagesCommand";
import { ListProjectsCommand } from "./commands/ListProjectsCommand";
import { ListSourceCredentialsCommand } from "./commands/ListSourceCredentialsCommand";
import { StartBuildCommand } from "./commands/StartBuildCommand";
import { StopBuildCommand } from "./commands/StopBuildCommand";
import { UpdateProjectCommand } from "./commands/UpdateProjectCommand";
import { UpdateWebhookCommand } from "./commands/UpdateWebhookCommand";

export class CodeBuild extends CodeBuildClient {
  /**
   * <p>Deletes one or more builds.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeleteBuilds(
    args: BatchDeleteBuildsInput
  ): Promise<BatchDeleteBuildsOutput>;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsInput,
    cb: (err: any, data?: BatchDeleteBuildsOutput) => void
  ): void;
  public batchDeleteBuilds(
    args: BatchDeleteBuildsInput,
    cb?: (err: any, data?: BatchDeleteBuildsOutput) => void
  ): Promise<BatchDeleteBuildsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeleteBuildsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about builds.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetBuilds(
    args: BatchGetBuildsInput
  ): Promise<BatchGetBuildsOutput>;
  public batchGetBuilds(
    args: BatchGetBuildsInput,
    cb: (err: any, data?: BatchGetBuildsOutput) => void
  ): void;
  public batchGetBuilds(
    args: BatchGetBuildsInput,
    cb?: (err: any, data?: BatchGetBuildsOutput) => void
  ): Promise<BatchGetBuildsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetBuildsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about build projects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetProjects(
    args: BatchGetProjectsInput
  ): Promise<BatchGetProjectsOutput>;
  public batchGetProjects(
    args: BatchGetProjectsInput,
    cb: (err: any, data?: BatchGetProjectsOutput) => void
  ): void;
  public batchGetProjects(
    args: BatchGetProjectsInput,
    cb?: (err: any, data?: BatchGetProjectsOutput) => void
  ): Promise<BatchGetProjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetProjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a build project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified AWS resource cannot be created, because an AWS resource with the same settings already exists.</p>
   *   - {AccountLimitExceededException} <p>An AWS service limit was exceeded for the calling AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProject(args: CreateProjectInput): Promise<CreateProjectOutput>;
  public createProject(
    args: CreateProjectInput,
    cb: (err: any, data?: CreateProjectOutput) => void
  ): void;
  public createProject(
    args: CreateProjectInput,
    cb?: (err: any, data?: CreateProjectOutput) => void
  ): Promise<CreateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {OAuthProviderException} <p>There was a problem with the underlying OAuth provider.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified AWS resource cannot be created, because an AWS resource with the same settings already exists.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWebhook(args: CreateWebhookInput): Promise<CreateWebhookOutput>;
  public createWebhook(
    args: CreateWebhookInput,
    cb: (err: any, data?: CreateWebhookOutput) => void
  ): void;
  public createWebhook(
    args: CreateWebhookInput,
    cb?: (err: any, data?: CreateWebhookOutput) => void
  ): Promise<CreateWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a build project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProject(args: DeleteProjectInput): Promise<DeleteProjectOutput>;
  public deleteProject(
    args: DeleteProjectInput,
    cb: (err: any, data?: DeleteProjectOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectInput,
    cb?: (err: any, data?: DeleteProjectOutput) => void
  ): Promise<DeleteProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsInput
  ): Promise<DeleteSourceCredentialsOutput>;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsInput,
    cb: (err: any, data?: DeleteSourceCredentialsOutput) => void
  ): void;
  public deleteSourceCredentials(
    args: DeleteSourceCredentialsInput,
    cb?: (err: any, data?: DeleteSourceCredentialsOutput) => void
  ): Promise<DeleteSourceCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSourceCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {OAuthProviderException} <p>There was a problem with the underlying OAuth provider.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWebhook(args: DeleteWebhookInput): Promise<DeleteWebhookOutput>;
  public deleteWebhook(
    args: DeleteWebhookInput,
    cb: (err: any, data?: DeleteWebhookOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookInput,
    cb?: (err: any, data?: DeleteWebhookOutput) => void
  ): Promise<DeleteWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {AccountLimitExceededException} <p>An AWS service limit was exceeded for the calling AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importSourceCredentials(
    args: ImportSourceCredentialsInput
  ): Promise<ImportSourceCredentialsOutput>;
  public importSourceCredentials(
    args: ImportSourceCredentialsInput,
    cb: (err: any, data?: ImportSourceCredentialsOutput) => void
  ): void;
  public importSourceCredentials(
    args: ImportSourceCredentialsInput,
    cb?: (err: any, data?: ImportSourceCredentialsOutput) => void
  ): Promise<ImportSourceCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportSourceCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the cache for a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public invalidateProjectCache(
    args: InvalidateProjectCacheInput
  ): Promise<InvalidateProjectCacheOutput>;
  public invalidateProjectCache(
    args: InvalidateProjectCacheInput,
    cb: (err: any, data?: InvalidateProjectCacheOutput) => void
  ): void;
  public invalidateProjectCache(
    args: InvalidateProjectCacheInput,
    cb?: (err: any, data?: InvalidateProjectCacheOutput) => void
  ): Promise<InvalidateProjectCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InvalidateProjectCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of build IDs, with each build ID representing a single build.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBuilds(args: ListBuildsInput): Promise<ListBuildsOutput>;
  public listBuilds(
    args: ListBuildsInput,
    cb: (err: any, data?: ListBuildsOutput) => void
  ): void;
  public listBuilds(
    args: ListBuildsInput,
    cb?: (err: any, data?: ListBuildsOutput) => void
  ): Promise<ListBuildsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBuildsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of build IDs for the specified build project, with each build ID representing a single build.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBuildsForProject(
    args: ListBuildsForProjectInput
  ): Promise<ListBuildsForProjectOutput>;
  public listBuildsForProject(
    args: ListBuildsForProjectInput,
    cb: (err: any, data?: ListBuildsForProjectOutput) => void
  ): void;
  public listBuildsForProject(
    args: ListBuildsForProjectInput,
    cb?: (err: any, data?: ListBuildsForProjectOutput) => void
  ): Promise<ListBuildsForProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBuildsForProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about Docker images that are managed by AWS CodeBuild.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesInput
  ): Promise<ListCuratedEnvironmentImagesOutput>;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesInput,
    cb: (err: any, data?: ListCuratedEnvironmentImagesOutput) => void
  ): void;
  public listCuratedEnvironmentImages(
    args: ListCuratedEnvironmentImagesInput,
    cb?: (err: any, data?: ListCuratedEnvironmentImagesOutput) => void
  ): Promise<ListCuratedEnvironmentImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCuratedEnvironmentImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of build project names, with each build project name representing a single build project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProjects(args: ListProjectsInput): Promise<ListProjectsOutput>;
  public listProjects(
    args: ListProjectsInput,
    cb: (err: any, data?: ListProjectsOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsInput,
    cb?: (err: any, data?: ListProjectsOutput) => void
  ): Promise<ListProjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of <code>SourceCredentialsInfo</code> objects. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSourceCredentials(
    args: ListSourceCredentialsInput
  ): Promise<ListSourceCredentialsOutput>;
  public listSourceCredentials(
    args: ListSourceCredentialsInput,
    cb: (err: any, data?: ListSourceCredentialsOutput) => void
  ): void;
  public listSourceCredentials(
    args: ListSourceCredentialsInput,
    cb?: (err: any, data?: ListSourceCredentialsOutput) => void
  ): Promise<ListSourceCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSourceCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts running a build.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {AccountLimitExceededException} <p>An AWS service limit was exceeded for the calling AWS account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startBuild(args: StartBuildInput): Promise<StartBuildOutput>;
  public startBuild(
    args: StartBuildInput,
    cb: (err: any, data?: StartBuildOutput) => void
  ): void;
  public startBuild(
    args: StartBuildInput,
    cb?: (err: any, data?: StartBuildOutput) => void
  ): Promise<StartBuildOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartBuildCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to stop running a build.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopBuild(args: StopBuildInput): Promise<StopBuildOutput>;
  public stopBuild(
    args: StopBuildInput,
    cb: (err: any, data?: StopBuildOutput) => void
  ): void;
  public stopBuild(
    args: StopBuildInput,
    cb?: (err: any, data?: StopBuildOutput) => void
  ): Promise<StopBuildOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopBuildCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the settings of a build project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateProject(args: UpdateProjectInput): Promise<UpdateProjectOutput>;
  public updateProject(
    args: UpdateProjectInput,
    cb: (err: any, data?: UpdateProjectOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectInput,
    cb?: (err: any, data?: UpdateProjectOutput) => void
  ): Promise<UpdateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Updates the webhook associated with an AWS CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The input value that was provided is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified AWS resource cannot be found.</p>
   *   - {OAuthProviderException} <p>There was a problem with the underlying OAuth provider.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateWebhook(args: UpdateWebhookInput): Promise<UpdateWebhookOutput>;
  public updateWebhook(
    args: UpdateWebhookInput,
    cb: (err: any, data?: UpdateWebhookOutput) => void
  ): void;
  public updateWebhook(
    args: UpdateWebhookInput,
    cb?: (err: any, data?: UpdateWebhookOutput) => void
  ): Promise<UpdateWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
