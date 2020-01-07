import { ApplicationInsightsClient } from "./ApplicationInsightsClient";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "./commands/CreateComponentCommand";
import { CreateLogPatternCommandInput, CreateLogPatternCommandOutput } from "./commands/CreateLogPatternCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import { DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput } from "./commands/DeleteLogPatternCommand";
import { DescribeApplicationCommandInput, DescribeApplicationCommandOutput } from "./commands/DescribeApplicationCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "./commands/DescribeComponentCommand";
import { DescribeComponentConfigurationCommandInput, DescribeComponentConfigurationCommandOutput } from "./commands/DescribeComponentConfigurationCommand";
import { DescribeComponentConfigurationRecommendationCommandInput, DescribeComponentConfigurationRecommendationCommandOutput } from "./commands/DescribeComponentConfigurationRecommendationCommand";
import { DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput } from "./commands/DescribeLogPatternCommand";
import { DescribeObservationCommandInput, DescribeObservationCommandOutput } from "./commands/DescribeObservationCommand";
import { DescribeProblemCommandInput, DescribeProblemCommandOutput } from "./commands/DescribeProblemCommand";
import { DescribeProblemObservationsCommandInput, DescribeProblemObservationsCommandOutput } from "./commands/DescribeProblemObservationsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import { ListConfigurationHistoryCommandInput, ListConfigurationHistoryCommandOutput } from "./commands/ListConfigurationHistoryCommand";
import { ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput } from "./commands/ListLogPatternSetsCommand";
import { ListLogPatternsCommandInput, ListLogPatternsCommandOutput } from "./commands/ListLogPatternsCommand";
import { ListProblemsCommandInput, ListProblemsCommandOutput } from "./commands/ListProblemsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "./commands/UpdateComponentCommand";
import { UpdateComponentConfigurationCommandInput, UpdateComponentConfigurationCommandOutput } from "./commands/UpdateComponentConfigurationCommand";
import { UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput } from "./commands/UpdateLogPatternCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon CloudWatch Application Insights for .NET and SQL Server</fullname>
 *          <p> Amazon CloudWatch Application Insights for .NET and SQL Server is a service that
 *          helps you detect common problems with your .NET and SQL Server-based applications. It
 *          enables you to pinpoint the source of issues in your applications (built with technologies
 *          such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into
 *          detected problems.</p>
 *          <p>After you onboard your application, CloudWatch Application Insights for .NET and SQL
 *          Server identifies, recommends, and sets up metrics and logs. It continuously analyzes and
 *          correlates your metrics and logs for unusual behavior to surface actionable problems with
 *          your application. For example, if your application is slow and unresponsive and leading to
 *          HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you
 *          that a memory pressure problem with your SQL Server database is occurring. It bases this
 *          analysis on impactful metrics and log errors. </p>
 */
export declare class ApplicationInsights extends ApplicationInsightsClient {
    /**
     * <p>Adds an application that is created from a resource group.</p>
     */
    createApplication(args: CreateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateApplicationCommandOutput>;
    createApplication(args: CreateApplicationCommandInput, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    createApplication(args: CreateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateApplicationCommandOutput) => void): void;
    /**
     * <p>Creates a custom component by grouping similar standalone instances to monitor.</p>
     */
    createComponent(args: CreateComponentCommandInput, options?: __HttpHandlerOptions): Promise<CreateComponentCommandOutput>;
    createComponent(args: CreateComponentCommandInput, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
    createComponent(args: CreateComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
    /**
     * <p>Adds an log pattern to a <code>LogPatternSet</code>.</p>
     */
    createLogPattern(args: CreateLogPatternCommandInput, options?: __HttpHandlerOptions): Promise<CreateLogPatternCommandOutput>;
    createLogPattern(args: CreateLogPatternCommandInput, cb: (err: any, data?: CreateLogPatternCommandOutput) => void): void;
    createLogPattern(args: CreateLogPatternCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLogPatternCommandOutput) => void): void;
    /**
     * <p>Removes the specified application from monitoring. Does not delete the application.</p>
     */
    deleteApplication(args: DeleteApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApplicationCommandOutput>;
    deleteApplication(args: DeleteApplicationCommandInput, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    deleteApplication(args: DeleteApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteApplicationCommandOutput) => void): void;
    /**
     * <p>Ungroups a custom component. When you ungroup custom components, all applicable
     *          monitors that are set up for the component are removed and the instances revert to their standalone status.</p>
     */
    deleteComponent(args: DeleteComponentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteComponentCommandOutput>;
    deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
    deleteComponent(args: DeleteComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
    /**
     * <p>Removes the specified log pattern from a <code>LogPatternSet</code>.</p>
     */
    deleteLogPattern(args: DeleteLogPatternCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLogPatternCommandOutput>;
    deleteLogPattern(args: DeleteLogPatternCommandInput, cb: (err: any, data?: DeleteLogPatternCommandOutput) => void): void;
    deleteLogPattern(args: DeleteLogPatternCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLogPatternCommandOutput) => void): void;
    /**
     * <p>Describes the application.</p>
     */
    describeApplication(args: DescribeApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeApplicationCommandOutput>;
    describeApplication(args: DescribeApplicationCommandInput, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    describeApplication(args: DescribeApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeApplicationCommandOutput) => void): void;
    /**
     * <p>Describes a component and lists the resources that are grouped together in a component.</p>
     */
    describeComponent(args: DescribeComponentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeComponentCommandOutput>;
    describeComponent(args: DescribeComponentCommandInput, cb: (err: any, data?: DescribeComponentCommandOutput) => void): void;
    describeComponent(args: DescribeComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeComponentCommandOutput) => void): void;
    /**
     * <p>Describes the monitoring configuration of the component.</p>
     */
    describeComponentConfiguration(args: DescribeComponentConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeComponentConfigurationCommandOutput>;
    describeComponentConfiguration(args: DescribeComponentConfigurationCommandInput, cb: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void): void;
    describeComponentConfiguration(args: DescribeComponentConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeComponentConfigurationCommandOutput) => void): void;
    /**
     * <p>Describes the recommended monitoring configuration of the component.</p>
     */
    describeComponentConfigurationRecommendation(args: DescribeComponentConfigurationRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeComponentConfigurationRecommendationCommandOutput>;
    describeComponentConfigurationRecommendation(args: DescribeComponentConfigurationRecommendationCommandInput, cb: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void): void;
    describeComponentConfigurationRecommendation(args: DescribeComponentConfigurationRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeComponentConfigurationRecommendationCommandOutput) => void): void;
    /**
     * <p>Describe a specific log pattern from a <code>LogPatternSet</code>.</p>
     */
    describeLogPattern(args: DescribeLogPatternCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLogPatternCommandOutput>;
    describeLogPattern(args: DescribeLogPatternCommandInput, cb: (err: any, data?: DescribeLogPatternCommandOutput) => void): void;
    describeLogPattern(args: DescribeLogPatternCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLogPatternCommandOutput) => void): void;
    /**
     * <p>Describes an anomaly or error with the application.</p>
     */
    describeObservation(args: DescribeObservationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeObservationCommandOutput>;
    describeObservation(args: DescribeObservationCommandInput, cb: (err: any, data?: DescribeObservationCommandOutput) => void): void;
    describeObservation(args: DescribeObservationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeObservationCommandOutput) => void): void;
    /**
     * <p>Describes an application problem.</p>
     */
    describeProblem(args: DescribeProblemCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProblemCommandOutput>;
    describeProblem(args: DescribeProblemCommandInput, cb: (err: any, data?: DescribeProblemCommandOutput) => void): void;
    describeProblem(args: DescribeProblemCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProblemCommandOutput) => void): void;
    /**
     * <p>Describes the anomalies or errors associated with the problem.</p>
     */
    describeProblemObservations(args: DescribeProblemObservationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProblemObservationsCommandOutput>;
    describeProblemObservations(args: DescribeProblemObservationsCommandInput, cb: (err: any, data?: DescribeProblemObservationsCommandOutput) => void): void;
    describeProblemObservations(args: DescribeProblemObservationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProblemObservationsCommandOutput) => void): void;
    /**
     * <p>Lists the IDs of the applications that you are monitoring. </p>
     */
    listApplications(args: ListApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListApplicationsCommandOutput>;
    listApplications(args: ListApplicationsCommandInput, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    listApplications(args: ListApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListApplicationsCommandOutput) => void): void;
    /**
     * <p>Lists the auto-grouped, standalone, and custom components of the application.</p>
     */
    listComponents(args: ListComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListComponentsCommandOutput>;
    listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
    listComponents(args: ListComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
    /**
     * <p>
     *          Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are:
     *       </p>
     *          <ul>
     *             <li>
     *                <p>INFO: creating a new alarm or updating an alarm threshold.</p>
     *             </li>
     *             <li>
     *                <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p>
     *             </li>
     *             <li>
     *                <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p>
     *             </li>
     *          </ul>
     */
    listConfigurationHistory(args: ListConfigurationHistoryCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationHistoryCommandOutput>;
    listConfigurationHistory(args: ListConfigurationHistoryCommandInput, cb: (err: any, data?: ListConfigurationHistoryCommandOutput) => void): void;
    listConfigurationHistory(args: ListConfigurationHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationHistoryCommandOutput) => void): void;
    /**
     * <p>Lists the log pattern sets in the specific application.</p>
     */
    listLogPatternSets(args: ListLogPatternSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListLogPatternSetsCommandOutput>;
    listLogPatternSets(args: ListLogPatternSetsCommandInput, cb: (err: any, data?: ListLogPatternSetsCommandOutput) => void): void;
    listLogPatternSets(args: ListLogPatternSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLogPatternSetsCommandOutput) => void): void;
    /**
     * <p>Lists the log patterns in the specific log <code>LogPatternSet</code>.</p>
     */
    listLogPatterns(args: ListLogPatternsCommandInput, options?: __HttpHandlerOptions): Promise<ListLogPatternsCommandOutput>;
    listLogPatterns(args: ListLogPatternsCommandInput, cb: (err: any, data?: ListLogPatternsCommandOutput) => void): void;
    listLogPatterns(args: ListLogPatternsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLogPatternsCommandOutput) => void): void;
    /**
     * <p>Lists the problems with your application.</p>
     */
    listProblems(args: ListProblemsCommandInput, options?: __HttpHandlerOptions): Promise<ListProblemsCommandOutput>;
    listProblems(args: ListProblemsCommandInput, cb: (err: any, data?: ListProblemsCommandOutput) => void): void;
    listProblems(args: ListProblemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProblemsCommandOutput) => void): void;
    /**
     * <p>Retrieve a list of the tags (keys and values) that are associated with a specified
     *          application. A <i>tag</i> is a label that you optionally define and associate
     *          with an application. Each tag consists of a required <i>tag key</i> and an
     *          optional associated <i>tag value</i>. A tag key is a general label that
     *          acts as a category for more specific tag values. A tag value acts as a descriptor within
     *          a tag key.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Add one or more tags (keys and values) to a specified application. A
     *          <i>tag</i> is a label that you optionally define and associate with an
     *          application. Tags can help you categorize and manage application in different ways, such as
     *          by purpose, owner, environment, or other criteria. </p>
     *          <p>Each tag consists of a required <i>tag key</i> and an
     *          associated <i>tag value</i>, both of which you define. A tag key is a
     *          general label that acts as a category for more specific tag values. A tag value acts as
     *          a descriptor within a tag key.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Remove one or more tags (keys and values) from a specified application.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the application.</p>
     */
    updateApplication(args: UpdateApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApplicationCommandOutput>;
    updateApplication(args: UpdateApplicationCommandInput, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    updateApplication(args: UpdateApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateApplicationCommandOutput) => void): void;
    /**
     * <p>Updates the custom component name and/or the list of resources that make up the
     *          component.</p>
     */
    updateComponent(args: UpdateComponentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateComponentCommandOutput>;
    updateComponent(args: UpdateComponentCommandInput, cb: (err: any, data?: UpdateComponentCommandOutput) => void): void;
    updateComponent(args: UpdateComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateComponentCommandOutput) => void): void;
    /**
     * <p>Updates the monitoring configurations for the component. The configuration input parameter
     *          is an escaped JSON of the configuration and should match the schema of what is returned
     *          by <code>DescribeComponentConfigurationRecommendation</code>. </p>
     */
    updateComponentConfiguration(args: UpdateComponentConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateComponentConfigurationCommandOutput>;
    updateComponentConfiguration(args: UpdateComponentConfigurationCommandInput, cb: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void): void;
    updateComponentConfiguration(args: UpdateComponentConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateComponentConfigurationCommandOutput) => void): void;
    /**
     * <p>Adds a log pattern to a <code>LogPatternSet</code>.</p>
     */
    updateLogPattern(args: UpdateLogPatternCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLogPatternCommandOutput>;
    updateLogPattern(args: UpdateLogPatternCommandInput, cb: (err: any, data?: UpdateLogPatternCommandOutput) => void): void;
    updateLogPattern(args: UpdateLogPatternCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLogPatternCommandOutput) => void): void;
}
