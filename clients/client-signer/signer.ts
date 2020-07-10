import {
  CancelSigningProfileCommand,
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput,
} from "./commands/CancelSigningProfileCommand";
import {
  DescribeSigningJobCommand,
  DescribeSigningJobCommandInput,
  DescribeSigningJobCommandOutput,
} from "./commands/DescribeSigningJobCommand";
import {
  GetSigningPlatformCommand,
  GetSigningPlatformCommandInput,
  GetSigningPlatformCommandOutput,
} from "./commands/GetSigningPlatformCommand";
import {
  GetSigningProfileCommand,
  GetSigningProfileCommandInput,
  GetSigningProfileCommandOutput,
} from "./commands/GetSigningProfileCommand";
import {
  ListSigningJobsCommand,
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
} from "./commands/ListSigningJobsCommand";
import {
  ListSigningPlatformsCommand,
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
} from "./commands/ListSigningPlatformsCommand";
import {
  ListSigningProfilesCommand,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "./commands/ListSigningProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutSigningProfileCommand,
  PutSigningProfileCommandInput,
  PutSigningProfileCommandOutput,
} from "./commands/PutSigningProfileCommand";
import {
  StartSigningJobCommand,
  StartSigningJobCommandInput,
  StartSigningJobCommandOutput,
} from "./commands/StartSigningJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { signerClient } from "./signerClient";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>With code signing for IoT, you can sign code that you create for any IoT device that is
 * 			supported by Amazon Web Services (AWS). Code signing is available through <a href="http://docs.aws.amazon.com/freertos/latest/userguide/">Amazon FreeRTOS</a> and <a href="http://docs.aws.amazon.com/iot/latest/developerguide/">AWS IoT Device Management</a>, and integrated with <a href="http://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager
 * 				(ACM)</a>. In order to sign code, you import a third-party code signing
 * 			certificate with ACM that is used to sign updates in Amazon FreeRTOS and AWS IoT Device Management. For
 * 			general information about using code signing, see the <a href="http://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html">Code Signing for IoT Developer Guide</a>.</p>
 */
export class signer extends signerClient {
  /**
   * <p>Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>.
   * 			A canceled profile is still viewable with the <code>ListSigningProfiles</code>
   * 			operation, but it cannot perform new signing jobs, and is deleted two years after
   * 			cancelation.</p>
   */
  public cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSigningProfileCommandOutput>;
  public cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    cb: (err: any, data?: CancelSigningProfileCommandOutput) => void
  ): void;
  public cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSigningProfileCommandOutput) => void
  ): void;
  public cancelSigningProfile(
    args: CancelSigningProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSigningProfileCommandOutput) => void),
    cb?: (err: any, data?: CancelSigningProfileCommandOutput) => void
  ): Promise<CancelSigningProfileCommandOutput> | void {
    const command = new CancelSigningProfileCommand(args);
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
   * <p>Returns information about a specific code signing job. You specify the job by using
   * 			the <code>jobId</code> value that is returned by the <a>StartSigningJob</a>
   * 			operation. </p>
   */
  public describeSigningJob(
    args: DescribeSigningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSigningJobCommandOutput>;
  public describeSigningJob(
    args: DescribeSigningJobCommandInput,
    cb: (err: any, data?: DescribeSigningJobCommandOutput) => void
  ): void;
  public describeSigningJob(
    args: DescribeSigningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSigningJobCommandOutput) => void
  ): void;
  public describeSigningJob(
    args: DescribeSigningJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSigningJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeSigningJobCommandOutput) => void
  ): Promise<DescribeSigningJobCommandOutput> | void {
    const command = new DescribeSigningJobCommand(args);
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
   * <p>Returns information on a specific signing platform.</p>
   */
  public getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningPlatformCommandOutput>;
  public getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    cb: (err: any, data?: GetSigningPlatformCommandOutput) => void
  ): void;
  public getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningPlatformCommandOutput) => void
  ): void;
  public getSigningPlatform(
    args: GetSigningPlatformCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSigningPlatformCommandOutput) => void),
    cb?: (err: any, data?: GetSigningPlatformCommandOutput) => void
  ): Promise<GetSigningPlatformCommandOutput> | void {
    const command = new GetSigningPlatformCommand(args);
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
   * <p>Returns information on a specific signing profile.</p>
   */
  public getSigningProfile(
    args: GetSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSigningProfileCommandOutput>;
  public getSigningProfile(
    args: GetSigningProfileCommandInput,
    cb: (err: any, data?: GetSigningProfileCommandOutput) => void
  ): void;
  public getSigningProfile(
    args: GetSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSigningProfileCommandOutput) => void
  ): void;
  public getSigningProfile(
    args: GetSigningProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSigningProfileCommandOutput) => void),
    cb?: (err: any, data?: GetSigningProfileCommandOutput) => void
  ): Promise<GetSigningProfileCommandOutput> | void {
    const command = new GetSigningProfileCommand(args);
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
   * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to
   * 			limit the number of signing jobs that are returned in the response. If additional jobs
   * 			remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in
   * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
   * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
   * 			parameter and with new values that code signing returns in the <code>nextToken</code>
   * 			parameter until all of your signing jobs have been returned. </p>
   */
  public listSigningJobs(
    args: ListSigningJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningJobsCommandOutput>;
  public listSigningJobs(
    args: ListSigningJobsCommandInput,
    cb: (err: any, data?: ListSigningJobsCommandOutput) => void
  ): void;
  public listSigningJobs(
    args: ListSigningJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningJobsCommandOutput) => void
  ): void;
  public listSigningJobs(
    args: ListSigningJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSigningJobsCommandOutput) => void),
    cb?: (err: any, data?: ListSigningJobsCommandOutput) => void
  ): Promise<ListSigningJobsCommandOutput> | void {
    const command = new ListSigningJobsCommand(args);
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
   * <p>Lists all signing platforms available in code signing that match the request parameters. If
   * 			additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use
   * 			this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining
   * 			values. You can continue calling <code>ListSigningJobs</code> with your
   * 				<code>maxResults</code> parameter and with new values that code signing returns in the
   * 				<code>nextToken</code> parameter until all of your signing jobs have been
   * 			returned.</p>
   */
  public listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningPlatformsCommandOutput>;
  public listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    cb: (err: any, data?: ListSigningPlatformsCommandOutput) => void
  ): void;
  public listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningPlatformsCommandOutput) => void
  ): void;
  public listSigningPlatforms(
    args: ListSigningPlatformsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSigningPlatformsCommandOutput) => void),
    cb?: (err: any, data?: ListSigningPlatformsCommandOutput) => void
  ): Promise<ListSigningPlatformsCommandOutput> | void {
    const command = new ListSigningPlatformsCommand(args);
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
   * <p>Lists all available signing profiles in your AWS account. Returns only profiles with
   * 			an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is
   * 			set to <code>true</code>. If additional jobs remain to be listed, code signing returns a
   * 				<code>nextToken</code> value. Use this value in subsequent calls to
   * 				<code>ListSigningJobs</code> to fetch the remaining values. You can continue calling
   * 				<code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with
   * 			new values that code signing returns in the <code>nextToken</code> parameter until all of your
   * 			signing jobs have been returned.</p>
   */
  public listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningProfilesCommandOutput>;
  public listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    cb: (err: any, data?: ListSigningProfilesCommandOutput) => void
  ): void;
  public listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningProfilesCommandOutput) => void
  ): void;
  public listSigningProfiles(
    args: ListSigningProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSigningProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListSigningProfilesCommandOutput) => void
  ): Promise<ListSigningProfilesCommandOutput> | void {
    const command = new ListSigningProfilesCommand(args);
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
   * <p>Returns a list of
   * 			the tags associated with a signing profile
   * 			resource.</p>
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
   * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
   * 			carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
   *          </p>
   */
  public putSigningProfile(
    args: PutSigningProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSigningProfileCommandOutput>;
  public putSigningProfile(
    args: PutSigningProfileCommandInput,
    cb: (err: any, data?: PutSigningProfileCommandOutput) => void
  ): void;
  public putSigningProfile(
    args: PutSigningProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSigningProfileCommandOutput) => void
  ): void;
  public putSigningProfile(
    args: PutSigningProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSigningProfileCommandOutput) => void),
    cb?: (err: any, data?: PutSigningProfileCommandOutput) => void
  ): Promise<PutSigningProfileCommandOutput> | void {
    const command = new PutSigningProfileCommand(args);
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
   * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
   * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
   * 			performed. Note the following requirements: </p>
   * 		       <ul>
   *             <li>
   * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the
   * 						<i>Amazon S3 Getting Started Guide</i>. </p>
   * 			         </li>
   *             <li>
   * 				           <p>Your S3 source bucket must be version enabled.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You must create an S3 destination bucket. Code signing uses your S3 destination
   * 					bucket to write your signed code.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You specify the name of the source and destination buckets when calling the
   * 						<code>StartSigningJob</code> operation.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You must also specify a request token that identifies your request to
   * 					code signing.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call
   * 			<code>StartSigningJob</code>.</p>
   * 		       <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a>
   *          </p>
   */
  public startSigningJob(
    args: StartSigningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSigningJobCommandOutput>;
  public startSigningJob(
    args: StartSigningJobCommandInput,
    cb: (err: any, data?: StartSigningJobCommandOutput) => void
  ): void;
  public startSigningJob(
    args: StartSigningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSigningJobCommandOutput) => void
  ): void;
  public startSigningJob(
    args: StartSigningJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSigningJobCommandOutput) => void),
    cb?: (err: any, data?: StartSigningJobCommandOutput) => void
  ): Promise<StartSigningJobCommandOutput> | void {
    const command = new StartSigningJobCommand(args);
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
   * <p>Adds one or more
   * 			tags to a signing profile. Tags are labels that you can use to identify and organize
   * 			your AWS resources. Each tag consists of a key and an optional value. You specify the
   * 			signing profile using its Amazon Resource Name (ARN). You specify the tag by using a
   * 			key-value
   * 			pair.</p>
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
   * <p>Remove one or more
   * 			tags from a signing profile. Specify a list of tag keys to remove the
   * 			tags.</p>
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
}
