import { SyntheticsClient } from "./SyntheticsClient";
import {
  CreateCanaryCommand,
  CreateCanaryCommandInput,
  CreateCanaryCommandOutput,
} from "./commands/CreateCanaryCommand";
import {
  DeleteCanaryCommand,
  DeleteCanaryCommandInput,
  DeleteCanaryCommandOutput,
} from "./commands/DeleteCanaryCommand";
import {
  DescribeCanariesCommand,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
} from "./commands/DescribeCanariesCommand";
import {
  DescribeCanariesLastRunCommand,
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "./commands/DescribeCanariesLastRunCommand";
import {
  DescribeRuntimeVersionsCommand,
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "./commands/DescribeRuntimeVersionsCommand";
import { GetCanaryCommand, GetCanaryCommandInput, GetCanaryCommandOutput } from "./commands/GetCanaryCommand";
import {
  GetCanaryRunsCommand,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
} from "./commands/GetCanaryRunsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartCanaryCommand, StartCanaryCommandInput, StartCanaryCommandOutput } from "./commands/StartCanaryCommand";
import { StopCanaryCommand, StopCanaryCommandInput, StopCanaryCommandOutput } from "./commands/StopCanaryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCanaryCommand,
  UpdateCanaryCommandInput,
  UpdateCanaryCommandOutput,
} from "./commands/UpdateCanaryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon CloudWatch Synthetics</fullname>
 *          <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can
 *          create and manage <i>canaries</i>, which are modular, lightweight scripts
 *          that monitor your endpoints and APIs
 *             from the outside-in. You can set up your canaries to run
 *          24 hours a day, once per minute. The canaries help you check the availability and latency
 *          of your web services and troubleshoot anomalies by investigating load time data,
 *          screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch
 *          ServiceLens to help you trace the causes of impacted nodes in your applications. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor
 *             the Health of Your Applications</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *
 *          <p>Before you create and manage canaries, be aware of the security considerations. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 */
export class Synthetics extends SyntheticsClient {
  /**
   * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the
   *          outside-in. Canaries help you check the availability and latency of your web services and
   *          troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and
   *          metrics. You can set up a canary to run continuously or just once. </p>
   *          <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p>
   *          <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy.
   *          If you are creating a new IAM role for the canary, you also need the
   *          the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and
   *             <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary
   *             Roles and Permissions</a>.</p>
   *          <p>Do not include secrets or proprietary information in your canary names. The canary name
   *          makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in
   *          outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
   *             Considerations for Synthetics Canaries</a>.</p>
   */
  public createCanary(
    args: CreateCanaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCanaryCommandOutput>;
  public createCanary(args: CreateCanaryCommandInput, cb: (err: any, data?: CreateCanaryCommandOutput) => void): void;
  public createCanary(
    args: CreateCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCanaryCommandOutput) => void
  ): void;
  public createCanary(
    args: CreateCanaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCanaryCommandOutput) => void),
    cb?: (err: any, data?: CreateCanaryCommandOutput) => void
  ): Promise<CreateCanaryCommandOutput> | void {
    const command = new CreateCanaryCommand(args);
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
   * <p>Permanently deletes the specified canary.</p>
   *          <p>When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to
   *          use again, you
   *       should also delete the following:</p>
   *          <ul>
   *             <li>
   *                <p>The Lambda functions and layers used by this canary. These have the prefix
   *                      <code>cwsyn-<i>MyCanaryName</i>
   *                   </code>.</p>
   *             </li>
   *             <li>
   *                <p>The CloudWatch alarms created for this canary. These alarms have a name of
   *                      <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i>
   *                   </code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p>
   *             </li>
   *             <li>
   *                <p>IAM roles created for the canary. If they were created in the console, these roles
   *                have the name <code>
   *                      role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i>
   *                   </code>.</p>
   *             </li>
   *             <li>
   *                <p>CloudWatch Logs log groups created for the canary. These logs groups have the name
   *                      <code>/aws/lambda/cwsyn-<i>MyCanaryName</i>
   *                   </code>. </p>
   *             </li>
   *          </ul>
   *
   *          <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display
   *          the information about this canary. Make
   *          note of the information returned by this operation so that you can delete these resources
   *          after you delete the canary.</p>
   */
  public deleteCanary(
    args: DeleteCanaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCanaryCommandOutput>;
  public deleteCanary(args: DeleteCanaryCommandInput, cb: (err: any, data?: DeleteCanaryCommandOutput) => void): void;
  public deleteCanary(
    args: DeleteCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCanaryCommandOutput) => void
  ): void;
  public deleteCanary(
    args: DeleteCanaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCanaryCommandOutput) => void),
    cb?: (err: any, data?: DeleteCanaryCommandOutput) => void
  ): Promise<DeleteCanaryCommandOutput> | void {
    const command = new DeleteCanaryCommand(args);
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
   * <p>This operation returns a list of the canaries in your account, along with full details
   *       about each canary.</p>
   *         <p>This operation does not have resource-level authorization, so if a user is able to use
   *             <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A
   *          deny policy can only be used to restrict access to all canaries. It cannot be used on
   *          specific resources. </p>
   */
  public describeCanaries(
    args: DescribeCanariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCanariesCommandOutput>;
  public describeCanaries(
    args: DescribeCanariesCommandInput,
    cb: (err: any, data?: DescribeCanariesCommandOutput) => void
  ): void;
  public describeCanaries(
    args: DescribeCanariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCanariesCommandOutput) => void
  ): void;
  public describeCanaries(
    args: DescribeCanariesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCanariesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCanariesCommandOutput) => void
  ): Promise<DescribeCanariesCommandOutput> | void {
    const command = new DescribeCanariesCommand(args);
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
   * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
   */
  public describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCanariesLastRunCommandOutput>;
  public describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    cb: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void
  ): void;
  public describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void
  ): void;
  public describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCanariesLastRunCommandOutput) => void),
    cb?: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void
  ): Promise<DescribeCanariesLastRunCommandOutput> | void {
    const command = new DescribeCanariesLastRunCommand(args);
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
   * <p>Returns a list of Synthetics canary runtime versions. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
   *             Canary Runtime Versions</a>.</p>
   */
  public describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuntimeVersionsCommandOutput>;
  public describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    cb: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void
  ): void;
  public describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void
  ): void;
  public describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRuntimeVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void
  ): Promise<DescribeRuntimeVersionsCommandOutput> | void {
    const command = new DescribeRuntimeVersionsCommand(args);
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
   * <p>Retrieves complete information about one canary. You must specify
   *       the name of the canary that you want. To get a list of canaries
   *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
   */
  public getCanary(args: GetCanaryCommandInput, options?: __HttpHandlerOptions): Promise<GetCanaryCommandOutput>;
  public getCanary(args: GetCanaryCommandInput, cb: (err: any, data?: GetCanaryCommandOutput) => void): void;
  public getCanary(
    args: GetCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCanaryCommandOutput) => void
  ): void;
  public getCanary(
    args: GetCanaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCanaryCommandOutput) => void),
    cb?: (err: any, data?: GetCanaryCommandOutput) => void
  ): Promise<GetCanaryCommandOutput> | void {
    const command = new GetCanaryCommand(args);
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
   * <p>Retrieves a list of runs for a specified canary.</p>
   */
  public getCanaryRuns(
    args: GetCanaryRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCanaryRunsCommandOutput>;
  public getCanaryRuns(
    args: GetCanaryRunsCommandInput,
    cb: (err: any, data?: GetCanaryRunsCommandOutput) => void
  ): void;
  public getCanaryRuns(
    args: GetCanaryRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCanaryRunsCommandOutput) => void
  ): void;
  public getCanaryRuns(
    args: GetCanaryRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCanaryRunsCommandOutput) => void),
    cb?: (err: any, data?: GetCanaryRunsCommandOutput) => void
  ): Promise<GetCanaryRunsCommandOutput> | void {
    const command = new GetCanaryRunsCommand(args);
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
   * <p>Displays the tags associated with a canary.</p>
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
   * <p>Use this operation to run a canary that has already been created.
   *          The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule,
   *          use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.</p>
   */
  public startCanary(args: StartCanaryCommandInput, options?: __HttpHandlerOptions): Promise<StartCanaryCommandOutput>;
  public startCanary(args: StartCanaryCommandInput, cb: (err: any, data?: StartCanaryCommandOutput) => void): void;
  public startCanary(
    args: StartCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCanaryCommandOutput) => void
  ): void;
  public startCanary(
    args: StartCanaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCanaryCommandOutput) => void),
    cb?: (err: any, data?: StartCanaryCommandOutput) => void
  ): Promise<StartCanaryCommandOutput> | void {
    const command = new StartCanaryCommand(args);
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
   * <p>Stops the canary to prevent all future runs. If the canary is currently running,
   *          Synthetics stops waiting for the current run of the specified canary to complete. The
   *         run that is in progress completes on its own, publishes metrics, and uploads artifacts, but
   *          it is not recorded in Synthetics as a completed run.</p>
   *          <p>You can use <code>StartCanary</code> to start it running again
   *          with the canary’s current schedule at any point in the future.  </p>
   */
  public stopCanary(args: StopCanaryCommandInput, options?: __HttpHandlerOptions): Promise<StopCanaryCommandOutput>;
  public stopCanary(args: StopCanaryCommandInput, cb: (err: any, data?: StopCanaryCommandOutput) => void): void;
  public stopCanary(
    args: StopCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCanaryCommandOutput) => void
  ): void;
  public stopCanary(
    args: StopCanaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopCanaryCommandOutput) => void),
    cb?: (err: any, data?: StopCanaryCommandOutput) => void
  ): Promise<StopCanaryCommandOutput> | void {
    const command = new StopCanaryCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified canary. </p>
   *          <p>Tags can help you organize and categorize your
   *          resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with
   *          certain tag values.</p>
   *          <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p>
   *          <p>You can use the <code>TagResource</code> action with a canary that already has tags. If you specify a new tag key for the alarm,
   *          this tag is appended to the list of tags associated
   *          with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
   *          the previous value for that tag.</p>
   *          <p>You can associate as many as 50 tags with a canary.</p>
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
   * <p>Removes one or more tags from the specified canary.</p>
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
   * <p>Use this operation to change the settings of a canary that has
   *          already been created.</p>
   *          <p>You can't use this operation to update the tags of an existing canary. To
   *          change the tags of an existing canary, use
   *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
   */
  public updateCanary(
    args: UpdateCanaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCanaryCommandOutput>;
  public updateCanary(args: UpdateCanaryCommandInput, cb: (err: any, data?: UpdateCanaryCommandOutput) => void): void;
  public updateCanary(
    args: UpdateCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCanaryCommandOutput) => void
  ): void;
  public updateCanary(
    args: UpdateCanaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCanaryCommandOutput) => void),
    cb?: (err: any, data?: UpdateCanaryCommandOutput) => void
  ): Promise<UpdateCanaryCommandOutput> | void {
    const command = new UpdateCanaryCommand(args);
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
