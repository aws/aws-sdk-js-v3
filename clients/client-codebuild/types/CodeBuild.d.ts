import { CodeBuildClient } from "./CodeBuildClient";
import { BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput } from "./commands/BatchDeleteBuildsCommand";
import { BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput } from "./commands/BatchGetBuildsCommand";
import { BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput } from "./commands/BatchGetProjectsCommand";
import { BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput } from "./commands/BatchGetReportGroupsCommand";
import { BatchGetReportsCommandInput, BatchGetReportsCommandOutput } from "./commands/BatchGetReportsCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateReportGroupCommandInput, CreateReportGroupCommandOutput } from "./commands/CreateReportGroupCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "./commands/CreateWebhookCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteReportCommandInput, DeleteReportCommandOutput } from "./commands/DeleteReportCommand";
import { DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput } from "./commands/DeleteReportGroupCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "./commands/DeleteResourcePolicyCommand";
import { DeleteSourceCredentialsCommandInput, DeleteSourceCredentialsCommandOutput } from "./commands/DeleteSourceCredentialsCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "./commands/DeleteWebhookCommand";
import { DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput } from "./commands/DescribeTestCasesCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput } from "./commands/ImportSourceCredentialsCommand";
import { InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput } from "./commands/InvalidateProjectCacheCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import { ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput } from "./commands/ListBuildsForProjectCommand";
import { ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput } from "./commands/ListCuratedEnvironmentImagesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListReportGroupsCommandInput, ListReportGroupsCommandOutput } from "./commands/ListReportGroupsCommand";
import { ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import { ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput } from "./commands/ListReportsForReportGroupCommand";
import { ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput } from "./commands/ListSharedProjectsCommand";
import { ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput } from "./commands/ListSharedReportGroupsCommand";
import { ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput } from "./commands/ListSourceCredentialsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { StartBuildCommandInput, StartBuildCommandOutput } from "./commands/StartBuildCommand";
import { StopBuildCommandInput, StopBuildCommandOutput } from "./commands/StopBuildCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput } from "./commands/UpdateReportGroupCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "./commands/UpdateWebhookCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS CodeBuild</fullname>
 *          <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code,
 *          runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need
 *          to provision, manage, and scale your own build servers. It provides prepackaged build
 *          environments for the most popular programming languages and build tools, such as Apache
 *          Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use
 *          your own build tools. AWS CodeBuild scales automatically to meet peak build requests. You pay only
 *          for the build time you consume. For more information about AWS CodeBuild, see the <i>
 *                <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">AWS CodeBuild User Guide</a>.</i>
 *          </p>
 *          <p>AWS CodeBuild supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchDeleteBuilds</code>: Deletes one or more builds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetBuilds</code>: Gets information about one or more builds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetProjects</code>: Gets information about one or more build projects.
 *                A <i>build project</i> defines how AWS CodeBuild runs a build. This includes
 *                information such as where to get the source code to build, the build environment to
 *                use, the build commands to run, and where to store the build output. A
 *                <i>build environment</i> is a representation of operating system,
 *                programming language runtime, and tools that AWS CodeBuild uses to run a build. You can add
 *                tags to build projects to help manage your resources and costs.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetReportGroups</code>: Returns an array of report groups.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetReports</code>: Returns an array of reports.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateProject</code>: Creates a build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateReportGroup</code>: Creates a report group. A report group contains a collection of reports.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its
 *                source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start
 *                rebuilding the source code every time a code change is pushed to the
 *                repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>: Deletes a build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteReport</code>: Deletes a report.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteReportGroup</code>: Deletes a report group.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteResourcePolicy</code>:  Deletes a resource policy that is identified by its resource ARN.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteSourceCredentials</code>: Deletes a set of GitHub, GitHub Enterprise,
 *                or Bitbucket source credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its
 *                source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding
 *                the source code every time a code change is pushed to the repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeTestCases</code>: Returns a list of details about test cases for a report.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetResourcePolicy</code>:  Gets a resource policy that is identified by its resource ARN.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ImportSourceCredentials</code>: Imports the source repository credentials for an AWS CodeBuild project that has its source code stored
 *                in a GitHub, GitHub Enterprise, or Bitbucket repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InvalidateProjectCache</code>: Resets the cache for a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing
 *                a single build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified
 *                build project, with each build ID representing a single build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images
 *                that are managed by AWS CodeBuild.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>: Gets a list of build project names, with each build
 *                project name representing a single build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReportGroups</code>: Gets a list ARNs for the report groups in the current AWS account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReports</code>: Gets a list ARNs for the reports in the current AWS account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReportsForReportGroup</code>: Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSharedProjects</code>: Gets a list of ARNs associated with projects shared with the current AWS account or user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSharedReportGroups</code>: Gets a list of ARNs associated with report groups shared with the current AWS account or user</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSourceCredentials</code>: Returns a list of <code>SourceCredentialsInfo</code> objects. Each <code>SourceCredentialsInfo</code> object includes
 *                the authentication type, token ARN, and type of source provider for one set of credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutResourcePolicy</code>:  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartBuild</code>: Starts running a build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StopBuild</code>: Attempts to stop running a build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>: Changes the settings of an existing build
 *                project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateReportGroup</code>: Changes a report group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateWebhook</code>: Changes the settings of an existing webhook.</p>
 *             </li>
 *          </ul>
 */
export declare class CodeBuild extends CodeBuildClient {
    /**
     * <p>Deletes one or more builds.</p>
     */
    batchDeleteBuilds(args: BatchDeleteBuildsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteBuildsCommandOutput>;
    batchDeleteBuilds(args: BatchDeleteBuildsCommandInput, cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void): void;
    batchDeleteBuilds(args: BatchDeleteBuildsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteBuildsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more builds.</p>
     */
    batchGetBuilds(args: BatchGetBuildsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetBuildsCommandOutput>;
    batchGetBuilds(args: BatchGetBuildsCommandInput, cb: (err: any, data?: BatchGetBuildsCommandOutput) => void): void;
    batchGetBuilds(args: BatchGetBuildsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetBuildsCommandOutput) => void): void;
    /**
     * <p>Gets information about one or more build projects.</p>
     */
    batchGetProjects(args: BatchGetProjectsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetProjectsCommandOutput>;
    batchGetProjects(args: BatchGetProjectsCommandInput, cb: (err: any, data?: BatchGetProjectsCommandOutput) => void): void;
    batchGetProjects(args: BatchGetProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetProjectsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns an array of report groups.
     *       </p>
     */
    batchGetReportGroups(args: BatchGetReportGroupsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetReportGroupsCommandOutput>;
    batchGetReportGroups(args: BatchGetReportGroupsCommandInput, cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void): void;
    batchGetReportGroups(args: BatchGetReportGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetReportGroupsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns an array of reports.
     *       </p>
     */
    batchGetReports(args: BatchGetReportsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetReportsCommandOutput>;
    batchGetReports(args: BatchGetReportsCommandInput, cb: (err: any, data?: BatchGetReportsCommandOutput) => void): void;
    batchGetReports(args: BatchGetReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetReportsCommandOutput) => void): void;
    /**
     * <p>Creates a build project.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>
     *          Creates a report group. A report group contains a collection of reports.
     *       </p>
     */
    createReportGroup(args: CreateReportGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateReportGroupCommandOutput>;
    createReportGroup(args: CreateReportGroupCommandInput, cb: (err: any, data?: CreateReportGroupCommandOutput) => void): void;
    createReportGroup(args: CreateReportGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReportGroupCommandOutput) => void): void;
    /**
     * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
     *          Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code
     *          change is pushed to the repository.</p>
     *          <important>
     *             <p>If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step
     *             in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered
     *             through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you
     *             are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you
     *             disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more
     *             information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a
     *                Build Project's Settings</a>.</p>
     *          </important>
     */
    createWebhook(args: CreateWebhookCommandInput, options?: __HttpHandlerOptions): Promise<CreateWebhookCommandOutput>;
    createWebhook(args: CreateWebhookCommandInput, cb: (err: any, data?: CreateWebhookCommandOutput) => void): void;
    createWebhook(args: CreateWebhookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWebhookCommandOutput) => void): void;
    /**
     * <p>
     *          Deletes a build project. When you delete a project, its builds are not deleted.
     *       </p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>
     *          Deletes a report.
     *       </p>
     */
    deleteReport(args: DeleteReportCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReportCommandOutput>;
    deleteReport(args: DeleteReportCommandInput, cb: (err: any, data?: DeleteReportCommandOutput) => void): void;
    deleteReport(args: DeleteReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReportCommandOutput) => void): void;
    /**
     * <p>
     *             <code>DeleteReportGroup</code>: Deletes a report group. Before you delete a report group, you must
     *          delete its reports. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to
     *          get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call
     *          <code>DeleteReportGroup</code> for a report group that contains one or more reports, an exception is thrown.
     *       </p>
     */
    deleteReportGroup(args: DeleteReportGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReportGroupCommandOutput>;
    deleteReportGroup(args: DeleteReportGroupCommandInput, cb: (err: any, data?: DeleteReportGroupCommandOutput) => void): void;
    deleteReportGroup(args: DeleteReportGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReportGroupCommandOutput) => void): void;
    /**
     * <p>
     *          Deletes a resource policy that is identified by its resource ARN.
     *       </p>
     */
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyCommandOutput>;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    /**
     * <p>
     *          Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
     *       </p>
     */
    deleteSourceCredentials(args: DeleteSourceCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSourceCredentialsCommandOutput>;
    deleteSourceCredentials(args: DeleteSourceCredentialsCommandInput, cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void): void;
    deleteSourceCredentials(args: DeleteSourceCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSourceCredentialsCommandOutput) => void): void;
    /**
     * <p>For an existing AWS CodeBuild build project that has its source code stored in a GitHub or
     *          Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change
     *          is pushed to the repository.</p>
     */
    deleteWebhook(args: DeleteWebhookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebhookCommandOutput>;
    deleteWebhook(args: DeleteWebhookCommandInput, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
    deleteWebhook(args: DeleteWebhookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of details about test cases for a report.
     *       </p>
     */
    describeTestCases(args: DescribeTestCasesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTestCasesCommandOutput>;
    describeTestCases(args: DescribeTestCasesCommandInput, cb: (err: any, data?: DescribeTestCasesCommandOutput) => void): void;
    describeTestCases(args: DescribeTestCasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTestCasesCommandOutput) => void): void;
    /**
     * <p>
     *          Gets a resource policy that is identified by its resource ARN.
     *       </p>
     */
    getResourcePolicy(args: GetResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcePolicyCommandOutput>;
    getResourcePolicy(args: GetResourcePolicyCommandInput, cb: (err: any, data?: GetResourcePolicyCommandOutput) => void): void;
    getResourcePolicy(args: GetResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcePolicyCommandOutput) => void): void;
    /**
     * <p>
     *          Imports the source repository credentials for an AWS CodeBuild project that has its source code stored
     *          in a GitHub, GitHub Enterprise, or Bitbucket repository.
     *       </p>
     */
    importSourceCredentials(args: ImportSourceCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<ImportSourceCredentialsCommandOutput>;
    importSourceCredentials(args: ImportSourceCredentialsCommandInput, cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void): void;
    importSourceCredentials(args: ImportSourceCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportSourceCredentialsCommandOutput) => void): void;
    /**
     * <p>Resets the cache for a project.</p>
     */
    invalidateProjectCache(args: InvalidateProjectCacheCommandInput, options?: __HttpHandlerOptions): Promise<InvalidateProjectCacheCommandOutput>;
    invalidateProjectCache(args: InvalidateProjectCacheCommandInput, cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void): void;
    invalidateProjectCache(args: InvalidateProjectCacheCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InvalidateProjectCacheCommandOutput) => void): void;
    /**
     * <p>Gets a list of build IDs, with each build ID representing a single build.</p>
     */
    listBuilds(args: ListBuildsCommandInput, options?: __HttpHandlerOptions): Promise<ListBuildsCommandOutput>;
    listBuilds(args: ListBuildsCommandInput, cb: (err: any, data?: ListBuildsCommandOutput) => void): void;
    listBuilds(args: ListBuildsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBuildsCommandOutput) => void): void;
    /**
     * <p>Gets a list of build IDs for the specified build project, with each build ID
     *          representing a single build.</p>
     */
    listBuildsForProject(args: ListBuildsForProjectCommandInput, options?: __HttpHandlerOptions): Promise<ListBuildsForProjectCommandOutput>;
    listBuildsForProject(args: ListBuildsForProjectCommandInput, cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void): void;
    listBuildsForProject(args: ListBuildsForProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBuildsForProjectCommandOutput) => void): void;
    /**
     * <p>Gets information about Docker images that are managed by AWS CodeBuild.</p>
     */
    listCuratedEnvironmentImages(args: ListCuratedEnvironmentImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListCuratedEnvironmentImagesCommandOutput>;
    listCuratedEnvironmentImages(args: ListCuratedEnvironmentImagesCommandInput, cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void): void;
    listCuratedEnvironmentImages(args: ListCuratedEnvironmentImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCuratedEnvironmentImagesCommandOutput) => void): void;
    /**
     * <p>Gets a list of build project names, with each build project name representing a single
     *          build project.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>
     *          Gets a list ARNs for the report groups in the current AWS account.
     *       </p>
     */
    listReportGroups(args: ListReportGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListReportGroupsCommandOutput>;
    listReportGroups(args: ListReportGroupsCommandInput, cb: (err: any, data?: ListReportGroupsCommandOutput) => void): void;
    listReportGroups(args: ListReportGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReportGroupsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of ARNs for the reports in the current AWS account.
     *       </p>
     */
    listReports(args: ListReportsCommandInput, options?: __HttpHandlerOptions): Promise<ListReportsCommandOutput>;
    listReports(args: ListReportsCommandInput, cb: (err: any, data?: ListReportsCommandOutput) => void): void;
    listReports(args: ListReportsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReportsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
     *       </p>
     */
    listReportsForReportGroup(args: ListReportsForReportGroupCommandInput, options?: __HttpHandlerOptions): Promise<ListReportsForReportGroupCommandOutput>;
    listReportsForReportGroup(args: ListReportsForReportGroupCommandInput, cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void): void;
    listReportsForReportGroup(args: ListReportsForReportGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReportsForReportGroupCommandOutput) => void): void;
    /**
     * <p>
     *          Gets a list of projects that are shared with other AWS accounts or users.
     *       </p>
     */
    listSharedProjects(args: ListSharedProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListSharedProjectsCommandOutput>;
    listSharedProjects(args: ListSharedProjectsCommandInput, cb: (err: any, data?: ListSharedProjectsCommandOutput) => void): void;
    listSharedProjects(args: ListSharedProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSharedProjectsCommandOutput) => void): void;
    /**
     * <p>
     *          Gets a list of report groups that are shared with other AWS accounts or users.
     *       </p>
     */
    listSharedReportGroups(args: ListSharedReportGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListSharedReportGroupsCommandOutput>;
    listSharedReportGroups(args: ListSharedReportGroupsCommandInput, cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void): void;
    listSharedReportGroups(args: ListSharedReportGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSharedReportGroupsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of <code>SourceCredentialsInfo</code> objects.
     *       </p>
     */
    listSourceCredentials(args: ListSourceCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<ListSourceCredentialsCommandOutput>;
    listSourceCredentials(args: ListSourceCredentialsCommandInput, cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void): void;
    listSourceCredentials(args: ListSourceCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSourceCredentialsCommandOutput) => void): void;
    /**
     * <p>
     *          Stores a resource policy for the ARN of a <code>Project</code> or
     *          <code>ReportGroup</code> object.
     *       </p>
     */
    putResourcePolicy(args: PutResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResourcePolicyCommandOutput>;
    putResourcePolicy(args: PutResourcePolicyCommandInput, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    putResourcePolicy(args: PutResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Starts running a build.</p>
     */
    startBuild(args: StartBuildCommandInput, options?: __HttpHandlerOptions): Promise<StartBuildCommandOutput>;
    startBuild(args: StartBuildCommandInput, cb: (err: any, data?: StartBuildCommandOutput) => void): void;
    startBuild(args: StartBuildCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartBuildCommandOutput) => void): void;
    /**
     * <p>Attempts to stop running a build.</p>
     */
    stopBuild(args: StopBuildCommandInput, options?: __HttpHandlerOptions): Promise<StopBuildCommandOutput>;
    stopBuild(args: StopBuildCommandInput, cb: (err: any, data?: StopBuildCommandOutput) => void): void;
    stopBuild(args: StopBuildCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopBuildCommandOutput) => void): void;
    /**
     * <p>Changes the settings of a build project.</p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    /**
     * <p>
     *          Updates a report group.
     *       </p>
     */
    updateReportGroup(args: UpdateReportGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReportGroupCommandOutput>;
    updateReportGroup(args: UpdateReportGroupCommandInput, cb: (err: any, data?: UpdateReportGroupCommandOutput) => void): void;
    updateReportGroup(args: UpdateReportGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReportGroupCommandOutput) => void): void;
    /**
     * <p> Updates the webhook associated with an AWS CodeBuild build project. </p>
     *          <note>
     *             <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored.
     *          </p>
     *          </note>
     */
    updateWebhook(args: UpdateWebhookCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWebhookCommandOutput>;
    updateWebhook(args: UpdateWebhookCommandInput, cb: (err: any, data?: UpdateWebhookCommandOutput) => void): void;
    updateWebhook(args: UpdateWebhookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWebhookCommandOutput) => void): void;
}
