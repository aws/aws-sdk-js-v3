import { CloudTrailClient } from "./CloudTrailClient";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "./commands/DescribeTrailsCommand";
import { GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput } from "./commands/GetEventSelectorsCommand";
import { GetInsightSelectorsCommandInput, GetInsightSelectorsCommandOutput } from "./commands/GetInsightSelectorsCommand";
import { GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "./commands/GetTrailStatusCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import { LookupEventsCommandInput, LookupEventsCommandOutput } from "./commands/LookupEventsCommand";
import { PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput } from "./commands/PutEventSelectorsCommand";
import { PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput } from "./commands/PutInsightSelectorsCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "./commands/StartLoggingCommand";
import { StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.</p>
 *
 *          <note>
 *             <p>As an alternative to the API,
 *          you can use one of the AWS SDKs, which consist of libraries and sample code for various
 *          programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs
 *          provide a convenient way to create programmatic access to AWSCloudTrail. For example, the SDKs
 *          take care of cryptographically signing requests, managing errors, and retrying requests
 *          automatically. For information about the AWS SDKs, including how to download and install
 *          them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services
 *             page</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">AWS CloudTrail User Guide</a> for information about the data that is included with each AWS API call listed in the log files.</p>
 */
export declare class CloudTrail extends CloudTrailClient {
    /**
     * <p>Adds one or more tags to a trail, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key.
     *          Tag key names must be unique for a trail; you cannot have two keys with the same name but different values.
     *           If you specify a key without a value, the tag will be created with the specified key and a value of null.
     *           You can tag a trail that applies to all AWS Regions only from the Region in which the trail was created (also known as its home region).</p>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. </p>
     */
    createTrail(args: CreateTrailCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrailCommandOutput>;
    createTrail(args: CreateTrailCommandInput, cb: (err: any, data?: CreateTrailCommandOutput) => void): void;
    createTrail(args: CreateTrailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrailCommandOutput) => void): void;
    /**
     * <p>Deletes a trail. This operation must be called from the region in which the trail was
     *          created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails
     *          in other regions) of a trail that is enabled in all regions.</p>
     */
    deleteTrail(args: DeleteTrailCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrailCommandOutput>;
    deleteTrail(args: DeleteTrailCommandInput, cb: (err: any, data?: DeleteTrailCommandOutput) => void): void;
    deleteTrail(args: DeleteTrailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrailCommandOutput) => void): void;
    /**
     * <p>Retrieves settings for one or more trails associated with the current region for your account.</p>
     */
    describeTrails(args: DescribeTrailsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrailsCommandOutput>;
    describeTrails(args: DescribeTrailsCommandInput, cb: (err: any, data?: DescribeTrailsCommandOutput) => void): void;
    describeTrails(args: DescribeTrailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrailsCommandOutput) => void): void;
    /**
     * <p>Describes the settings for the event selectors that you configured for your trail.
     *          The information returned for your event selectors includes the following:</p>
     *          <ul>
     *             <li>
     *                <p>If your event selector includes read-only events, write-only events, or
     *             all events. This applies to both management events and data events.</p>
     *             </li>
     *             <li>
     *                <p>If your event selector includes management events.</p>
     *             </li>
     *             <li>
     *                <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions
     *             that you are logging for data events.</p>
     *             </li>
     *          </ul>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
     *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
     */
    getEventSelectors(args: GetEventSelectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetEventSelectorsCommandOutput>;
    getEventSelectors(args: GetEventSelectorsCommandInput, cb: (err: any, data?: GetEventSelectorsCommandOutput) => void): void;
    getEventSelectors(args: GetEventSelectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEventSelectorsCommandOutput) => void): void;
    /**
     * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows
     *          if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled.
     *          If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception
     *          <code>InsightNotEnabledException</code>
     *          </p>
     *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails
     *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
     */
    getInsightSelectors(args: GetInsightSelectorsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightSelectorsCommandOutput>;
    getInsightSelectors(args: GetInsightSelectorsCommandInput, cb: (err: any, data?: GetInsightSelectorsCommandOutput) => void): void;
    getInsightSelectors(args: GetInsightSelectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInsightSelectorsCommandOutput) => void): void;
    /**
     * <p>Returns settings information for a specified trail.</p>
     */
    getTrail(args: GetTrailCommandInput, options?: __HttpHandlerOptions): Promise<GetTrailCommandOutput>;
    getTrail(args: GetTrailCommandInput, cb: (err: any, data?: GetTrailCommandOutput) => void): void;
    getTrail(args: GetTrailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTrailCommandOutput) => void): void;
    /**
     * <p>Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.</p>
     */
    getTrailStatus(args: GetTrailStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetTrailStatusCommandOutput>;
    getTrailStatus(args: GetTrailStatusCommandInput, cb: (err: any, data?: GetTrailStatusCommandOutput) => void): void;
    getTrailStatus(args: GetTrailStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTrailStatusCommandOutput) => void): void;
    /**
     * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p>
     *          <note>
     *             <p>CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key.</p>
     *          </note>
     */
    listPublicKeys(args: ListPublicKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListPublicKeysCommandOutput>;
    listPublicKeys(args: ListPublicKeysCommandInput, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
    listPublicKeys(args: ListPublicKeysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the trail in the current region.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Lists trails that are in the current account.</p>
     */
    listTrails(args: ListTrailsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrailsCommandOutput>;
    listTrails(args: ListTrailsCommandInput, cb: (err: any, data?: ListTrailsCommandOutput) => void): void;
    listTrails(args: ListTrailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrailsCommandOutput) => void): void;
    /**
     * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or
     *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail.
     *          You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p>
     *          <ul>
     *             <li>
     *                <p>AWS access key</p>
     *             </li>
     *             <li>
     *                <p>Event ID</p>
     *             </li>
     *             <li>
     *                <p>Event name</p>
     *             </li>
     *             <li>
     *                <p>Event source</p>
     *             </li>
     *             <li>
     *                <p>Read only</p>
     *             </li>
     *             <li>
     *                <p>Resource name</p>
     *             </li>
     *             <li>
     *                <p>Resource type</p>
     *             </li>
     *             <li>
     *                <p>User name</p>
     *             </li>
     *          </ul>
     *          <p>Lookup supports the following attributes for Insights events:</p>
     *          <ul>
     *             <li>
     *                <p>Event ID</p>
     *             </li>
     *             <li>
     *                <p>Event name</p>
     *             </li>
     *             <li>
     *                <p>Event source</p>
     *             </li>
     *          </ul>
     *          <p>All attributes are optional. The default number of results returned is 50, with a
     *          maximum of 50 possible. The response includes a token that you can use to get the next page
     *          of results.</p>
     *          <important>
     *             <p>The rate of lookup requests is limited to two per second per account. If this
     *             limit is exceeded, a throttling error occurs.</p>
     *          </important>
     */
    lookupEvents(args: LookupEventsCommandInput, options?: __HttpHandlerOptions): Promise<LookupEventsCommandOutput>;
    lookupEvents(args: LookupEventsCommandInput, cb: (err: any, data?: LookupEventsCommandOutput) => void): void;
    lookupEvents(args: LookupEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LookupEventsCommandOutput) => void): void;
    /**
     * <p>Configures an event selector for your trail.
     *          Use event selectors to further specify the management and data event settings for your trail. By
     *          default, trails created without specific event selectors will be configured to log all read and
     *          write management events, and no data events. </p>
     *          <p>When an event occurs in your account, CloudTrail
     *          evaluates the event selectors in all trails. For each trail, if the event matches any event
     *          selector, the trail processes and logs the event. If the event doesn't match any event
     *          selector, the trail doesn't log the event. </p>
     *          <p>Example</p>
     *          <ol>
     *             <li>
     *                <p>You create an event selector for a trail and specify that you want
     *                write-only events.</p>
     *             </li>
     *             <li>
     *                <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API
     *                operations occur in your account.</p>
     *             </li>
     *             <li>
     *                <p>CloudTrail evaluates whether the events match your event
     *                selectors.</p>
     *             </li>
     *             <li>
     *                <p>The <code>RunInstances</code> is a write-only event and it matches your
     *                event selector. The trail logs the event.</p>
     *             </li>
     *             <li>
     *                <p>The <code>GetConsoleOutput</code> is a read-only event but it doesn't
     *                match your event selector. The trail doesn't log the event.
     *          </p>
     *             </li>
     *          </ol>
     *          <p>The <code>PutEventSelectors</code> operation must be called from the region in which
     *          the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is
     *          thrown.</p>
     *          <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
     *       </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in AWS CloudTrail</a>
     *          in the <i>AWS CloudTrail User Guide</i>.</p>
     */
    putEventSelectors(args: PutEventSelectorsCommandInput, options?: __HttpHandlerOptions): Promise<PutEventSelectorsCommandOutput>;
    putEventSelectors(args: PutEventSelectorsCommandInput, cb: (err: any, data?: PutEventSelectorsCommandOutput) => void): void;
    putEventSelectors(args: PutEventSelectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutEventSelectorsCommandOutput) => void): void;
    /**
     * <p>Lets you enable Insights event logging by specifying the Insights
     *          selectors that you want to enable on an existing trail. You also use
     *          <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types.
     *          In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.</p>
     */
    putInsightSelectors(args: PutInsightSelectorsCommandInput, options?: __HttpHandlerOptions): Promise<PutInsightSelectorsCommandOutput>;
    putInsightSelectors(args: PutInsightSelectorsCommandInput, cb: (err: any, data?: PutInsightSelectorsCommandOutput) => void): void;
    putInsightSelectors(args: PutInsightSelectorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutInsightSelectorsCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from a trail.</p>
     */
    removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
    removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    removeTags(args: RemoveTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    /**
     * <p>Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
     */
    startLogging(args: StartLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StartLoggingCommandOutput>;
    startLogging(args: StartLoggingCommandInput, cb: (err: any, data?: StartLoggingCommandOutput) => void): void;
    startLogging(args: StartLoggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartLoggingCommandOutput) => void): void;
    /**
     * <p>Suspends the recording of AWS API calls and log file delivery for the specified trail.
     *          Under most circumstances, there is no need to use this action. You can update a trail
     *          without stopping it first. This action is the only way to stop recording. For a trail
     *          enabled in all regions, this operation must be called from the region in which the trail
     *          was created, or an <code>InvalidHomeRegionException</code> will occur. This operation
     *          cannot be called on the shadow trails (replicated trails in other regions) of a trail
     *          enabled in all regions.</p>
     */
    stopLogging(args: StopLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StopLoggingCommandOutput>;
    stopLogging(args: StopLoggingCommandInput, cb: (err: any, data?: StopLoggingCommandOutput) => void): void;
    stopLogging(args: StopLoggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopLoggingCommandOutput) => void): void;
    /**
     * <p>Updates the settings that specify delivery of log files. Changes to a trail do not require
     *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
     *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
     *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
     *          region in which the trail was created; otherwise, an
     *             <code>InvalidHomeRegionException</code> is thrown.</p>
     */
    updateTrail(args: UpdateTrailCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrailCommandOutput>;
    updateTrail(args: UpdateTrailCommandInput, cb: (err: any, data?: UpdateTrailCommandOutput) => void): void;
    updateTrail(args: UpdateTrailCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrailCommandOutput) => void): void;
}
