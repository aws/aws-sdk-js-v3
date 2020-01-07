"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CodeBuildClient_1 = require("./CodeBuildClient");
const BatchDeleteBuildsCommand_1 = require("./commands/BatchDeleteBuildsCommand");
const BatchGetBuildsCommand_1 = require("./commands/BatchGetBuildsCommand");
const BatchGetProjectsCommand_1 = require("./commands/BatchGetProjectsCommand");
const BatchGetReportGroupsCommand_1 = require("./commands/BatchGetReportGroupsCommand");
const BatchGetReportsCommand_1 = require("./commands/BatchGetReportsCommand");
const CreateProjectCommand_1 = require("./commands/CreateProjectCommand");
const CreateReportGroupCommand_1 = require("./commands/CreateReportGroupCommand");
const CreateWebhookCommand_1 = require("./commands/CreateWebhookCommand");
const DeleteProjectCommand_1 = require("./commands/DeleteProjectCommand");
const DeleteReportCommand_1 = require("./commands/DeleteReportCommand");
const DeleteReportGroupCommand_1 = require("./commands/DeleteReportGroupCommand");
const DeleteResourcePolicyCommand_1 = require("./commands/DeleteResourcePolicyCommand");
const DeleteSourceCredentialsCommand_1 = require("./commands/DeleteSourceCredentialsCommand");
const DeleteWebhookCommand_1 = require("./commands/DeleteWebhookCommand");
const DescribeTestCasesCommand_1 = require("./commands/DescribeTestCasesCommand");
const GetResourcePolicyCommand_1 = require("./commands/GetResourcePolicyCommand");
const ImportSourceCredentialsCommand_1 = require("./commands/ImportSourceCredentialsCommand");
const InvalidateProjectCacheCommand_1 = require("./commands/InvalidateProjectCacheCommand");
const ListBuildsCommand_1 = require("./commands/ListBuildsCommand");
const ListBuildsForProjectCommand_1 = require("./commands/ListBuildsForProjectCommand");
const ListCuratedEnvironmentImagesCommand_1 = require("./commands/ListCuratedEnvironmentImagesCommand");
const ListProjectsCommand_1 = require("./commands/ListProjectsCommand");
const ListReportGroupsCommand_1 = require("./commands/ListReportGroupsCommand");
const ListReportsCommand_1 = require("./commands/ListReportsCommand");
const ListReportsForReportGroupCommand_1 = require("./commands/ListReportsForReportGroupCommand");
const ListSharedProjectsCommand_1 = require("./commands/ListSharedProjectsCommand");
const ListSharedReportGroupsCommand_1 = require("./commands/ListSharedReportGroupsCommand");
const ListSourceCredentialsCommand_1 = require("./commands/ListSourceCredentialsCommand");
const PutResourcePolicyCommand_1 = require("./commands/PutResourcePolicyCommand");
const StartBuildCommand_1 = require("./commands/StartBuildCommand");
const StopBuildCommand_1 = require("./commands/StopBuildCommand");
const UpdateProjectCommand_1 = require("./commands/UpdateProjectCommand");
const UpdateReportGroupCommand_1 = require("./commands/UpdateReportGroupCommand");
const UpdateWebhookCommand_1 = require("./commands/UpdateWebhookCommand");
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
class CodeBuild extends CodeBuildClient_1.CodeBuildClient {
    batchDeleteBuilds(args, optionsOrCb, cb) {
        const command = new BatchDeleteBuildsCommand_1.BatchDeleteBuildsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetBuilds(args, optionsOrCb, cb) {
        const command = new BatchGetBuildsCommand_1.BatchGetBuildsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetProjects(args, optionsOrCb, cb) {
        const command = new BatchGetProjectsCommand_1.BatchGetProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetReportGroups(args, optionsOrCb, cb) {
        const command = new BatchGetReportGroupsCommand_1.BatchGetReportGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    batchGetReports(args, optionsOrCb, cb) {
        const command = new BatchGetReportsCommand_1.BatchGetReportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProject(args, optionsOrCb, cb) {
        const command = new CreateProjectCommand_1.CreateProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createReportGroup(args, optionsOrCb, cb) {
        const command = new CreateReportGroupCommand_1.CreateReportGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWebhook(args, optionsOrCb, cb) {
        const command = new CreateWebhookCommand_1.CreateWebhookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProject(args, optionsOrCb, cb) {
        const command = new DeleteProjectCommand_1.DeleteProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReport(args, optionsOrCb, cb) {
        const command = new DeleteReportCommand_1.DeleteReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReportGroup(args, optionsOrCb, cb) {
        const command = new DeleteReportGroupCommand_1.DeleteReportGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResourcePolicy(args, optionsOrCb, cb) {
        const command = new DeleteResourcePolicyCommand_1.DeleteResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSourceCredentials(args, optionsOrCb, cb) {
        const command = new DeleteSourceCredentialsCommand_1.DeleteSourceCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWebhook(args, optionsOrCb, cb) {
        const command = new DeleteWebhookCommand_1.DeleteWebhookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTestCases(args, optionsOrCb, cb) {
        const command = new DescribeTestCasesCommand_1.DescribeTestCasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResourcePolicy(args, optionsOrCb, cb) {
        const command = new GetResourcePolicyCommand_1.GetResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importSourceCredentials(args, optionsOrCb, cb) {
        const command = new ImportSourceCredentialsCommand_1.ImportSourceCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    invalidateProjectCache(args, optionsOrCb, cb) {
        const command = new InvalidateProjectCacheCommand_1.InvalidateProjectCacheCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBuilds(args, optionsOrCb, cb) {
        const command = new ListBuildsCommand_1.ListBuildsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBuildsForProject(args, optionsOrCb, cb) {
        const command = new ListBuildsForProjectCommand_1.ListBuildsForProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCuratedEnvironmentImages(args, optionsOrCb, cb) {
        const command = new ListCuratedEnvironmentImagesCommand_1.ListCuratedEnvironmentImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProjects(args, optionsOrCb, cb) {
        const command = new ListProjectsCommand_1.ListProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listReportGroups(args, optionsOrCb, cb) {
        const command = new ListReportGroupsCommand_1.ListReportGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listReports(args, optionsOrCb, cb) {
        const command = new ListReportsCommand_1.ListReportsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listReportsForReportGroup(args, optionsOrCb, cb) {
        const command = new ListReportsForReportGroupCommand_1.ListReportsForReportGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSharedProjects(args, optionsOrCb, cb) {
        const command = new ListSharedProjectsCommand_1.ListSharedProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSharedReportGroups(args, optionsOrCb, cb) {
        const command = new ListSharedReportGroupsCommand_1.ListSharedReportGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSourceCredentials(args, optionsOrCb, cb) {
        const command = new ListSourceCredentialsCommand_1.ListSourceCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResourcePolicy(args, optionsOrCb, cb) {
        const command = new PutResourcePolicyCommand_1.PutResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startBuild(args, optionsOrCb, cb) {
        const command = new StartBuildCommand_1.StartBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopBuild(args, optionsOrCb, cb) {
        const command = new StopBuildCommand_1.StopBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateProject(args, optionsOrCb, cb) {
        const command = new UpdateProjectCommand_1.UpdateProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateReportGroup(args, optionsOrCb, cb) {
        const command = new UpdateReportGroupCommand_1.UpdateReportGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWebhook(args, optionsOrCb, cb) {
        const command = new UpdateWebhookCommand_1.UpdateWebhookCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.CodeBuild = CodeBuild;
//# sourceMappingURL=CodeBuild.js.map