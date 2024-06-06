// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the Amazon CodeCatalyst API reference. This reference provides descriptions of operations and data types for Amazon CodeCatalyst. You can use the Amazon CodeCatalyst
 *       API to work with the following objects. </p>
 *          <p>Spaces, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteSpace</a>, which deletes a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSpace</a>, which returns information about a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSubscription</a>, which returns information about the Amazon Web Services account used for billing purposes
 *         and the billing plan for the space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSpaces</a>, which retrieves a list of spaces.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateSpace</a>, which changes one or more values for a space.</p>
 *             </li>
 *          </ul>
 *          <p>Projects, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateProject</a> which creates a project in a specified space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetProject</a>, which returns information about a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListProjects</a>, which retrieves a list of projects in a space.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetUserDetails</a>, which returns information about a user in Amazon CodeCatalyst.</p>
 *             </li>
 *          </ul>
 *          <p>Source repositories, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepository</a>, which creates an empty Git-based source repository in a specified project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSourceRepositoryBranch</a>, which creates a branch in a specified repository where you can work on code.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSourceRepository</a>, which deletes a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepository</a>, which returns information about a source repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetSourceRepositoryCloneUrls</a>, which returns information about the URLs that can be used with a Git client to clone a source
 *         repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositories</a>, which retrieves a list of source repositories in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListSourceRepositoryBranches</a>, which retrieves a list of branches in a source repository.</p>
 *             </li>
 *          </ul>
 *          <p>Dev Environments and the Amazon Web Services Toolkits, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDevEnvironment</a>, which creates a Dev Environment,
 *        where you can quickly work on the code stored in the source repositories of your project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDevEnvironment</a>, which deletes a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetDevEnvironment</a>, which returns information about a Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironments</a>, which retrieves a list of Dev Environments in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListDevEnvironmentSessions</a>, which retrieves a list of active Dev Environment sessions in a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartDevEnvironment</a>, which starts a specified Dev Environment and puts it into an active state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartDevEnvironmentSession</a>, which starts a session to a specified Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopDevEnvironment</a>, which stops a specified Dev Environment and puts it into an stopped state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopDevEnvironmentSession</a>, which stops a session for a specified Dev Environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateDevEnvironment</a>, which changes one or more values for a Dev Environment.</p>
 *             </li>
 *          </ul>
 *          <p>Workflows, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetWorkflow</a>, which returns information about a workflow.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetWorkflowRun</a>, which returns information about a specified run of a workflow.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListWorkflowRuns</a>, which retrieves a list of runs of a specified workflow.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListWorkflows</a>, which retrieves a list of workflows in a specified project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartWorkflowRun</a>, which starts a run of a specified workflow.</p>
 *             </li>
 *          </ul>
 *          <p>Security, activity, and resource management in Amazon CodeCatalyst, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAccessToken</a>, which creates a personal access token (PAT) for the current user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAccessToken</a>, which deletes a specified personal access token (PAT).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAccessTokens</a>, which lists all personal access tokens (PATs) associated with a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListEventLogs</a>, which retrieves a list of events that occurred during a specified time period in a space.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifySession</a>, which verifies whether the calling user has a valid Amazon CodeCatalyst login and session.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you are using the Amazon CodeCatalyst APIs with an SDK or the CLI, you must configure your computer to work with Amazon CodeCatalyst and single sign-on (SSO).
 *         For more information, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/set-up-cli.html">Setting up to use the CLI with Amazon CodeCatalyst</a>
 *       and the SSO documentation for your SDK.</p>
 *          </note>
 *
 * @packageDocumentation
 */
export * from "./CodeCatalystClient";
export * from "./CodeCatalyst";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CodeCatalystExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CodeCatalystServiceException } from "./models/CodeCatalystServiceException";
