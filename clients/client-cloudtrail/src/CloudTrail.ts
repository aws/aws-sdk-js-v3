import { CloudTrailClient } from "./CloudTrailClient";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreateTrailCommand, CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import { DeleteTrailCommand, DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import {
  DescribeTrailsCommand,
  DescribeTrailsCommandInput,
  DescribeTrailsCommandOutput,
} from "./commands/DescribeTrailsCommand";
import {
  GetEventSelectorsCommand,
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput,
} from "./commands/GetEventSelectorsCommand";
import {
  GetInsightSelectorsCommand,
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "./commands/GetInsightSelectorsCommand";
import { GetTrailCommand, GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import {
  GetTrailStatusCommand,
  GetTrailStatusCommandInput,
  GetTrailStatusCommandOutput,
} from "./commands/GetTrailStatusCommand";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "./commands/ListPublicKeysCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrailsCommand, ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import {
  LookupEventsCommand,
  LookupEventsCommandInput,
  LookupEventsCommandOutput,
} from "./commands/LookupEventsCommand";
import {
  PutEventSelectorsCommand,
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput,
} from "./commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommand,
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "./commands/PutInsightSelectorsCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  StartLoggingCommand,
  StartLoggingCommandInput,
  StartLoggingCommandOutput,
} from "./commands/StartLoggingCommand";
import { StopLoggingCommand, StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import { UpdateTrailCommand, UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records Amazon Web Services API calls for your Amazon Web Services account and delivers log files to an Amazon S3 bucket.
 *          The recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response elements returned by the service.</p>
 *
 *          <note>
 *             <p>As an alternative to the API,
 *             you can use one of the Amazon Web Services SDKs, which consist of libraries and sample code for various
 *          programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs
 *          provide programmatic access to CloudTrail. For example, the SDKs
 *          handle cryptographically signing requests, managing errors, and retrying requests
 *          automatically. For more information about the Amazon Web Services SDKs, including how to download and install
 *             them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail User
 *          Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>
 */
export class CloudTrail extends CloudTrailClient {
  /**
   * <p>Adds one or more tags to a trail, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key.
   *          Tag key names must be unique for a trail; you cannot have two keys with the same name but different values.
   *           If you specify a key without a value, the tag will be created with the specified key and a value of null.
   *           You can tag a trail that applies to all Amazon Web Services Regions only from the Region in which the trail was created (also known as its home region).</p>
   */
  public addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  public addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
   *          </p>
   */
  public createTrail(args: CreateTrailCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrailCommandOutput>;
  public createTrail(args: CreateTrailCommandInput, cb: (err: any, data?: CreateTrailCommandOutput) => void): void;
  public createTrail(
    args: CreateTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrailCommandOutput) => void
  ): void;
  public createTrail(
    args: CreateTrailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTrailCommandOutput) => void),
    cb?: (err: any, data?: CreateTrailCommandOutput) => void
  ): Promise<CreateTrailCommandOutput> | void {
    const command = new CreateTrailCommand(args);
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
   * <p>Deletes a trail. This operation must be called from the region in which the trail was
   *          created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails
   *          in other regions) of a trail that is enabled in all regions.</p>
   */
  public deleteTrail(args: DeleteTrailCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrailCommandOutput>;
  public deleteTrail(args: DeleteTrailCommandInput, cb: (err: any, data?: DeleteTrailCommandOutput) => void): void;
  public deleteTrail(
    args: DeleteTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrailCommandOutput) => void
  ): void;
  public deleteTrail(
    args: DeleteTrailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTrailCommandOutput) => void),
    cb?: (err: any, data?: DeleteTrailCommandOutput) => void
  ): Promise<DeleteTrailCommandOutput> | void {
    const command = new DeleteTrailCommand(args);
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
   * <p>Retrieves settings for one or more trails associated with the current region for your account.</p>
   */
  public describeTrails(
    args: DescribeTrailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrailsCommandOutput>;
  public describeTrails(
    args: DescribeTrailsCommandInput,
    cb: (err: any, data?: DescribeTrailsCommandOutput) => void
  ): void;
  public describeTrails(
    args: DescribeTrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrailsCommandOutput) => void
  ): void;
  public describeTrails(
    args: DescribeTrailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTrailsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTrailsCommandOutput) => void
  ): Promise<DescribeTrailsCommandOutput> | void {
    const command = new DescribeTrailsCommand(args);
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
   *                <p>If your event selector includes data events, the resources on which you are logging data
   *                events.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
   *       </a> in the <i>CloudTrail User Guide</i>.</p>
   */
  public getEventSelectors(
    args: GetEventSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventSelectorsCommandOutput>;
  public getEventSelectors(
    args: GetEventSelectorsCommandInput,
    cb: (err: any, data?: GetEventSelectorsCommandOutput) => void
  ): void;
  public getEventSelectors(
    args: GetEventSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventSelectorsCommandOutput) => void
  ): void;
  public getEventSelectors(
    args: GetEventSelectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventSelectorsCommandOutput) => void),
    cb?: (err: any, data?: GetEventSelectorsCommandOutput) => void
  ): Promise<GetEventSelectorsCommandOutput> | void {
    const command = new GetEventSelectorsCommand(args);
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
   * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows
   *          if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled.
   *          If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception
   *          <code>InsightNotEnabledException</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails
   *       </a> in the <i>CloudTrail User Guide</i>.</p>
   */
  public getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightSelectorsCommandOutput>;
  public getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    cb: (err: any, data?: GetInsightSelectorsCommandOutput) => void
  ): void;
  public getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightSelectorsCommandOutput) => void
  ): void;
  public getInsightSelectors(
    args: GetInsightSelectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInsightSelectorsCommandOutput) => void),
    cb?: (err: any, data?: GetInsightSelectorsCommandOutput) => void
  ): Promise<GetInsightSelectorsCommandOutput> | void {
    const command = new GetInsightSelectorsCommand(args);
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
   * <p>Returns settings information for a specified trail.</p>
   */
  public getTrail(args: GetTrailCommandInput, options?: __HttpHandlerOptions): Promise<GetTrailCommandOutput>;
  public getTrail(args: GetTrailCommandInput, cb: (err: any, data?: GetTrailCommandOutput) => void): void;
  public getTrail(
    args: GetTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrailCommandOutput) => void
  ): void;
  public getTrail(
    args: GetTrailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrailCommandOutput) => void),
    cb?: (err: any, data?: GetTrailCommandOutput) => void
  ): Promise<GetTrailCommandOutput> | void {
    const command = new GetTrailCommand(args);
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
   * <p>Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.</p>
   */
  public getTrailStatus(
    args: GetTrailStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrailStatusCommandOutput>;
  public getTrailStatus(
    args: GetTrailStatusCommandInput,
    cb: (err: any, data?: GetTrailStatusCommandOutput) => void
  ): void;
  public getTrailStatus(
    args: GetTrailStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrailStatusCommandOutput) => void
  ): void;
  public getTrailStatus(
    args: GetTrailStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTrailStatusCommandOutput) => void),
    cb?: (err: any, data?: GetTrailStatusCommandOutput) => void
  ): Promise<GetTrailStatusCommandOutput> | void {
    const command = new GetTrailStatusCommand(args);
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
   * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p>
   *          <note>
   *             <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key
   *             unique to its region. When you validate a digest file from a specific region, you must look in the same region for its
   *             corresponding public key.</p>
   *          </note>
   */
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPublicKeysCommandOutput) => void),
    cb?: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): Promise<ListPublicKeysCommandOutput> | void {
    const command = new ListPublicKeysCommand(args);
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
   * <p>Lists the tags for the trail in the current region.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
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
   * <p>Lists trails that are in the current account.</p>
   */
  public listTrails(args: ListTrailsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrailsCommandOutput>;
  public listTrails(args: ListTrailsCommandInput, cb: (err: any, data?: ListTrailsCommandOutput) => void): void;
  public listTrails(
    args: ListTrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrailsCommandOutput) => void
  ): void;
  public listTrails(
    args: ListTrailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTrailsCommandOutput) => void),
    cb?: (err: any, data?: ListTrailsCommandOutput) => void
  ): Promise<ListTrailsCommandOutput> | void {
    const command = new ListTrailsCommand(args);
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
   * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail.
   *          You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services access key</p>
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
   *             <p>The rate of lookup requests is limited to two per second, per account, per region. If this
   *             limit is exceeded, a throttling error occurs.</p>
   *          </important>
   */
  public lookupEvents(
    args: LookupEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LookupEventsCommandOutput>;
  public lookupEvents(args: LookupEventsCommandInput, cb: (err: any, data?: LookupEventsCommandOutput) => void): void;
  public lookupEvents(
    args: LookupEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LookupEventsCommandOutput) => void
  ): void;
  public lookupEvents(
    args: LookupEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LookupEventsCommandOutput) => void),
    cb?: (err: any, data?: LookupEventsCommandOutput) => void
  ): Promise<LookupEventsCommandOutput> | void {
    const command = new LookupEventsCommand(args);
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
   * <p>Configures an event selector or advanced event selectors for your trail.
   *          Use event selectors or advanced event selectors to specify management and data event settings for your trail. By
   *          default, trails created without specific event selectors are configured to log all read and
   *          write management events, and no data events.</p>
   *          <p>When an event occurs in your account, CloudTrail
   *          evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches
   *          any event selector, the trail processes and logs the event. If the event doesn't match any event
   *          selector, the trail doesn't log the event.</p>
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
   *                <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't
   *                match your event selector. The trail doesn't log the event.
   *          </p>
   *             </li>
   *          </ol>
   *          <p>The <code>PutEventSelectors</code> operation must be called from the region in which
   *          the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is
   *          thrown.</p>
   *          <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging data and management events for trails
   *       </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a>
   *          in the <i>CloudTrail User Guide</i>.</p>
   *          <p>You can add advanced event selectors, and conditions for your advanced
   *          event selectors, up to a maximum of 500 values for all conditions and selectors on a trail.
   *          You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code>
   *          to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about
   *          advanced event selectors, see
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging
   *             data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>
   */
  public putEventSelectors(
    args: PutEventSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventSelectorsCommandOutput>;
  public putEventSelectors(
    args: PutEventSelectorsCommandInput,
    cb: (err: any, data?: PutEventSelectorsCommandOutput) => void
  ): void;
  public putEventSelectors(
    args: PutEventSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventSelectorsCommandOutput) => void
  ): void;
  public putEventSelectors(
    args: PutEventSelectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutEventSelectorsCommandOutput) => void),
    cb?: (err: any, data?: PutEventSelectorsCommandOutput) => void
  ): Promise<PutEventSelectorsCommandOutput> | void {
    const command = new PutEventSelectorsCommand(args);
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
   * <p>Lets you enable Insights event logging by specifying the Insights
   *          selectors that you want to enable on an existing trail. You also use
   *          <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types.
   *          The valid Insights event type in this release is <code>ApiCallRateInsight</code>.</p>
   */
  public putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInsightSelectorsCommandOutput>;
  public putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    cb: (err: any, data?: PutInsightSelectorsCommandOutput) => void
  ): void;
  public putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInsightSelectorsCommandOutput) => void
  ): void;
  public putInsightSelectors(
    args: PutInsightSelectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutInsightSelectorsCommandOutput) => void),
    cb?: (err: any, data?: PutInsightSelectorsCommandOutput) => void
  ): Promise<PutInsightSelectorsCommandOutput> | void {
    const command = new PutInsightSelectorsCommand(args);
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
   * <p>Removes the specified tags from a trail.</p>
   */
  public removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  public removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsCommandOutput) => void
  ): Promise<RemoveTagsCommandOutput> | void {
    const command = new RemoveTagsCommand(args);
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
   * <p>Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
   */
  public startLogging(
    args: StartLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLoggingCommandOutput>;
  public startLogging(args: StartLoggingCommandInput, cb: (err: any, data?: StartLoggingCommandOutput) => void): void;
  public startLogging(
    args: StartLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLoggingCommandOutput) => void
  ): void;
  public startLogging(
    args: StartLoggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartLoggingCommandOutput) => void),
    cb?: (err: any, data?: StartLoggingCommandOutput) => void
  ): Promise<StartLoggingCommandOutput> | void {
    const command = new StartLoggingCommand(args);
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
   * <p>Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail.
   *          Under most circumstances, there is no need to use this action. You can update a trail
   *          without stopping it first. This action is the only way to stop recording. For a trail
   *          enabled in all regions, this operation must be called from the region in which the trail
   *          was created, or an <code>InvalidHomeRegionException</code> will occur. This operation
   *          cannot be called on the shadow trails (replicated trails in other regions) of a trail
   *          enabled in all regions.</p>
   */
  public stopLogging(args: StopLoggingCommandInput, options?: __HttpHandlerOptions): Promise<StopLoggingCommandOutput>;
  public stopLogging(args: StopLoggingCommandInput, cb: (err: any, data?: StopLoggingCommandOutput) => void): void;
  public stopLogging(
    args: StopLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLoggingCommandOutput) => void
  ): void;
  public stopLogging(
    args: StopLoggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopLoggingCommandOutput) => void),
    cb?: (err: any, data?: StopLoggingCommandOutput) => void
  ): Promise<StopLoggingCommandOutput> | void {
    const command = new StopLoggingCommand(args);
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
   * <p>Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require
   *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
   *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
   *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
   *          region in which the trail was created; otherwise, an
   *             <code>InvalidHomeRegionException</code> is thrown.</p>
   */
  public updateTrail(args: UpdateTrailCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrailCommandOutput>;
  public updateTrail(args: UpdateTrailCommandInput, cb: (err: any, data?: UpdateTrailCommandOutput) => void): void;
  public updateTrail(
    args: UpdateTrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrailCommandOutput) => void
  ): void;
  public updateTrail(
    args: UpdateTrailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTrailCommandOutput) => void),
    cb?: (err: any, data?: UpdateTrailCommandOutput) => void
  ): Promise<UpdateTrailCommandOutput> | void {
    const command = new UpdateTrailCommand(args);
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
