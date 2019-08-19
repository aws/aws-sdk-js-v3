import { signerClient } from "./signerClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { CancelSigningProfileInput } from "./types/CancelSigningProfileInput";
import { CancelSigningProfileOutput } from "./types/CancelSigningProfileOutput";
import { DescribeSigningJobInput } from "./types/DescribeSigningJobInput";
import { DescribeSigningJobOutput } from "./types/DescribeSigningJobOutput";
import { GetSigningPlatformInput } from "./types/GetSigningPlatformInput";
import { GetSigningPlatformOutput } from "./types/GetSigningPlatformOutput";
import { GetSigningProfileInput } from "./types/GetSigningProfileInput";
import { GetSigningProfileOutput } from "./types/GetSigningProfileOutput";
import { InternalServiceErrorException } from "./types/InternalServiceErrorException";
import { ListSigningJobsInput } from "./types/ListSigningJobsInput";
import { ListSigningJobsOutput } from "./types/ListSigningJobsOutput";
import { ListSigningPlatformsInput } from "./types/ListSigningPlatformsInput";
import { ListSigningPlatformsOutput } from "./types/ListSigningPlatformsOutput";
import { ListSigningProfilesInput } from "./types/ListSigningProfilesInput";
import { ListSigningProfilesOutput } from "./types/ListSigningProfilesOutput";
import { PutSigningProfileInput } from "./types/PutSigningProfileInput";
import { PutSigningProfileOutput } from "./types/PutSigningProfileOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartSigningJobInput } from "./types/StartSigningJobInput";
import { StartSigningJobOutput } from "./types/StartSigningJobOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { ValidationException } from "./types/ValidationException";
import { CancelSigningProfileCommand } from "./commands/CancelSigningProfileCommand";
import { DescribeSigningJobCommand } from "./commands/DescribeSigningJobCommand";
import { GetSigningPlatformCommand } from "./commands/GetSigningPlatformCommand";
import { GetSigningProfileCommand } from "./commands/GetSigningProfileCommand";
import { ListSigningJobsCommand } from "./commands/ListSigningJobsCommand";
import { ListSigningPlatformsCommand } from "./commands/ListSigningPlatformsCommand";
import { ListSigningProfilesCommand } from "./commands/ListSigningProfilesCommand";
import { PutSigningProfileCommand } from "./commands/PutSigningProfileCommand";
import { StartSigningJobCommand } from "./commands/StartSigningJobCommand";

export class signer extends signerClient {
  /**
   * <p>Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>. A canceled profile is still viewable with the <code>ListSigningProfiles</code> operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A specified resource could not be found.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelSigningProfile(
    args: CancelSigningProfileInput
  ): Promise<CancelSigningProfileOutput>;
  public cancelSigningProfile(
    args: CancelSigningProfileInput,
    cb: (err: any, data?: CancelSigningProfileOutput) => void
  ): void;
  public cancelSigningProfile(
    args: CancelSigningProfileInput,
    cb?: (err: any, data?: CancelSigningProfileOutput) => void
  ): Promise<CancelSigningProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelSigningProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific code signing job. You specify the job by using the <code>jobId</code> value that is returned by the <a>StartSigningJob</a> operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A specified resource could not be found.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSigningJob(
    args: DescribeSigningJobInput
  ): Promise<DescribeSigningJobOutput>;
  public describeSigningJob(
    args: DescribeSigningJobInput,
    cb: (err: any, data?: DescribeSigningJobOutput) => void
  ): void;
  public describeSigningJob(
    args: DescribeSigningJobInput,
    cb?: (err: any, data?: DescribeSigningJobOutput) => void
  ): Promise<DescribeSigningJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSigningJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information on a specific signing platform.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A specified resource could not be found.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSigningPlatform(
    args: GetSigningPlatformInput
  ): Promise<GetSigningPlatformOutput>;
  public getSigningPlatform(
    args: GetSigningPlatformInput,
    cb: (err: any, data?: GetSigningPlatformOutput) => void
  ): void;
  public getSigningPlatform(
    args: GetSigningPlatformInput,
    cb?: (err: any, data?: GetSigningPlatformOutput) => void
  ): Promise<GetSigningPlatformOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSigningPlatformCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information on a specific signing profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A specified resource could not be found.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSigningProfile(
    args: GetSigningProfileInput
  ): Promise<GetSigningProfileOutput>;
  public getSigningProfile(
    args: GetSigningProfileInput,
    cb: (err: any, data?: GetSigningProfileOutput) => void
  ): void;
  public getSigningProfile(
    args: GetSigningProfileInput,
    cb?: (err: any, data?: GetSigningProfileOutput) => void
  ): Promise<GetSigningProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSigningProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, AWS Signer returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that AWS Signer returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>You signing certificate could not be validated.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSigningJobs(
    args: ListSigningJobsInput
  ): Promise<ListSigningJobsOutput>;
  public listSigningJobs(
    args: ListSigningJobsInput,
    cb: (err: any, data?: ListSigningJobsOutput) => void
  ): void;
  public listSigningJobs(
    args: ListSigningJobsInput,
    cb?: (err: any, data?: ListSigningJobsOutput) => void
  ): Promise<ListSigningJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSigningJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all signing platforms available in AWS Signer that match the request parameters. If additional jobs remain to be listed, AWS Signer returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that AWS Signer returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>You signing certificate could not be validated.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSigningPlatforms(
    args: ListSigningPlatformsInput
  ): Promise<ListSigningPlatformsOutput>;
  public listSigningPlatforms(
    args: ListSigningPlatformsInput,
    cb: (err: any, data?: ListSigningPlatformsOutput) => void
  ): void;
  public listSigningPlatforms(
    args: ListSigningPlatformsInput,
    cb?: (err: any, data?: ListSigningPlatformsOutput) => void
  ): Promise<ListSigningPlatformsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSigningPlatformsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all available signing profiles in your AWS account. Returns only profiles with an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is set to <code>true</code>. If additional jobs remain to be listed, AWS Signer returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that AWS Signer returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSigningProfiles(
    args: ListSigningProfilesInput
  ): Promise<ListSigningProfilesOutput>;
  public listSigningProfiles(
    args: ListSigningProfilesInput,
    cb: (err: any, data?: ListSigningProfilesOutput) => void
  ): void;
  public listSigningProfiles(
    args: ListSigningProfilesInput,
    cb?: (err: any, data?: ListSigningProfilesOutput) => void
  ): Promise<ListSigningProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSigningProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a signing profile. A signing profile is an AWS Signer template that can be used to carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A specified resource could not be found.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ValidationException} <p>You signing certificate could not be validated.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putSigningProfile(
    args: PutSigningProfileInput
  ): Promise<PutSigningProfileOutput>;
  public putSigningProfile(
    args: PutSigningProfileInput,
    cb: (err: any, data?: PutSigningProfileOutput) => void
  ): void;
  public putSigningProfile(
    args: PutSigningProfileInput,
    cb?: (err: any, data?: PutSigningProfileOutput) => void
  ): Promise<PutSigningProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutSigningProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the <code>ListSigningJobs</code> operation for two years after they are performed. Note the following requirements: </p> <ul> <li> <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the <i>Amazon S3 Getting Started Guide</i>. </p> </li> <li> <p>Your S3 source bucket must be version enabled.</p> </li> <li> <p>You must create an S3 destination bucket. AWS Signer uses your S3 destination bucket to write your signed code.</p> </li> <li> <p>You specify the name of the source and destination buckets when calling the <code>StartSigningJob</code> operation.</p> </li> <li> <p>You must also specify a request token that identifies your request to AWS Signer. </p> </li> </ul> <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call <code>StartSigningJob</code>.</p> <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>You signing certificate could not be validated.</p>
   *   - {ResourceNotFoundException} <p>A specified resource could not be found.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ThrottlingException} <p>The signing job has been throttled.</p>
   *   - {InternalServiceErrorException} <p>An internal error occurred.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSigningJob(
    args: StartSigningJobInput
  ): Promise<StartSigningJobOutput>;
  public startSigningJob(
    args: StartSigningJobInput,
    cb: (err: any, data?: StartSigningJobOutput) => void
  ): void;
  public startSigningJob(
    args: StartSigningJobInput,
    cb?: (err: any, data?: StartSigningJobOutput) => void
  ): Promise<StartSigningJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSigningJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
