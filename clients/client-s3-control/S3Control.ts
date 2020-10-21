import { S3ControlClient } from "./S3ControlClient";
import {
  CreateAccessPointCommand,
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
} from "./commands/CreateAccessPointCommand";
import {
  CreateBucketCommand,
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
} from "./commands/CreateBucketCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  DeleteAccessPointCommand,
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput,
} from "./commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointPolicyCommand,
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "./commands/DeleteAccessPointPolicyCommand";
import {
  DeleteBucketCommand,
  DeleteBucketCommandInput,
  DeleteBucketCommandOutput,
} from "./commands/DeleteBucketCommand";
import {
  DeleteBucketLifecycleConfigurationCommand,
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "./commands/DeleteBucketLifecycleConfigurationCommand";
import {
  DeleteBucketPolicyCommand,
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
} from "./commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketTaggingCommand,
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import {
  DeleteJobTaggingCommand,
  DeleteJobTaggingCommandInput,
  DeleteJobTaggingCommandOutput,
} from "./commands/DeleteJobTaggingCommand";
import {
  DeletePublicAccessBlockCommand,
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import { DescribeJobCommand, DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  GetAccessPointCommand,
  GetAccessPointCommandInput,
  GetAccessPointCommandOutput,
} from "./commands/GetAccessPointCommand";
import {
  GetAccessPointPolicyCommand,
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "./commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyStatusCommand,
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "./commands/GetAccessPointPolicyStatusCommand";
import { GetBucketCommand, GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand";
import {
  GetBucketLifecycleConfigurationCommand,
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import {
  GetBucketPolicyCommand,
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
} from "./commands/GetBucketPolicyCommand";
import {
  GetBucketTaggingCommand,
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
} from "./commands/GetBucketTaggingCommand";
import {
  GetJobTaggingCommand,
  GetJobTaggingCommandInput,
  GetJobTaggingCommandOutput,
} from "./commands/GetJobTaggingCommand";
import {
  GetPublicAccessBlockCommand,
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import {
  ListAccessPointsCommand,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput,
} from "./commands/ListAccessPointsCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListRegionalBucketsCommand,
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "./commands/ListRegionalBucketsCommand";
import {
  PutAccessPointPolicyCommand,
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "./commands/PutAccessPointPolicyCommand";
import {
  PutBucketLifecycleConfigurationCommand,
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import {
  PutBucketPolicyCommand,
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
} from "./commands/PutBucketPolicyCommand";
import {
  PutBucketTaggingCommand,
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
} from "./commands/PutBucketTaggingCommand";
import {
  PutJobTaggingCommand,
  PutJobTaggingCommandInput,
  PutJobTaggingCommandOutput,
} from "./commands/PutJobTaggingCommand";
import {
  PutPublicAccessBlockCommand,
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import {
  UpdateJobPriorityCommand,
  UpdateJobPriorityCommandInput,
  UpdateJobPriorityCommandOutput,
} from "./commands/UpdateJobPriorityCommand";
import {
  UpdateJobStatusCommand,
  UpdateJobStatusCommandInput,
  UpdateJobStatusCommandOutput,
} from "./commands/UpdateJobStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *
 *       </p>
 */
export class S3Control extends S3ControlClient {
  /**
   * <p>Creates an access point and associates it with the specified bucket. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access
   *             Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p></p>
   *          <p>
   *             <b>Using this action with Amazon S3 on Outposts</b>
   *          </p>
   *          <p>This action: </p>
   *          <ul>
   *             <li>
   *                <p>Requires a virtual private cloud (VPC) configuration as S3 on Outposts only supports VPC style access points.</p>
   *             </li>
   *             <li>
   *                <p>Does not support ACL on S3 on Outposts buckets.</p>
   *             </li>
   *             <li>
   *                <p>Does not support Public Access on S3 on Outposts buckets.</p>
   *             </li>
   *             <li>
   *                <p>Does not support object lock for S3 on Outposts buckets.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see
   *       <a href="AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide </i>.</p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">
   *             Example</a> section below.</p>
   *          <p></p>
   *          <p>The following actions are related to <code>CreateAccessPoint</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteAccessPoint.html">DeleteAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_ListAccessPoints.html">ListAccessPoints</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointCommandOutput>;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  public createAccessPoint(
    args: CreateAccessPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessPointCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): Promise<CreateAccessPointCommandOutput> | void {
    const command = new CreateAccessPointCommand(args);
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
   * <note>
   *             <p>This API operation creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">Create Bucket</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>Not every string is an acceptable bucket name. For information on bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules">Working with Amazon S3 Buckets</a>.</p>
   *
   *          <p>S3 on Outposts buckets do not support </p>
   *          <ul>
   *             <li>
   *                <p>ACLs. Instead, configure access point policies to manage
   *             access to buckets.</p>
   *             </li>
   *             <li>
   *                <p>Public access. </p>
   *             </li>
   *             <li>
   *                <p>Object Lock</p>
   *             </li>
   *             <li>
   *                <p>Bucket Location constraint</p>
   *             </li>
   *          </ul>
   *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and outpost-id in your API request, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_CreateBucket.html#API_control_CreateBucket_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>CreateBucket</code> for Amazon S3 on Outposts:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetBucket.html">GetBucket</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteBucket.html">DeleteBucket</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_CreateAccessPoint.html">CreateAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createBucket(
    args: CreateBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBucketCommandOutput>;
  public createBucket(args: CreateBucketCommandInput, cb: (err: any, data?: CreateBucketCommandOutput) => void): void;
  public createBucket(
    args: CreateBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketCommandOutput) => void
  ): void;
  public createBucket(
    args: CreateBucketCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBucketCommandOutput) => void),
    cb?: (err: any, data?: CreateBucketCommandOutput) => void
  ): Promise<CreateBucketCommandOutput> | void {
    const command = new CreateBucketCommand(args);
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
   * <p>S3 Batch Operations performs large-scale Batch Operations on Amazon S3 objects. Batch Operations can run a
   *          single operation or action on lists of Amazon S3 objects that you specify. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>This operation creates a S3 Batch Operations job.</p>
   *          <p></p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
  public createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
  public createJob(
    args: CreateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJobCommandOutput) => void
  ): void;
  public createJob(
    args: CreateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateJobCommandOutput) => void),
    cb?: (err: any, data?: CreateJobCommandOutput) => void
  ): Promise<CreateJobCommandOutput> | void {
    const command = new CreateJobCommand(args);
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
   * <p>Deletes the specified access point.</p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the  ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteAccessPoint.html#API_control_DeleteAccessPoint_Examples">
   *             Example</a> section below.</p>
   *          <p>The following actions are related to <code>DeleteAccessPoint</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointCommandOutput>;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  public deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessPointCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): Promise<DeleteAccessPointCommandOutput> | void {
    const command = new DeleteAccessPointCommand(args);
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
   * <p>Deletes the access point policy for the specified access point.</p>
   *          <p></p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteAccessPointPolicy.html#API_control_DeleteAccessPointPolicy_Examples">
   *             Example</a> section below.</p>
   *          <p>The following actions are related to <code>DeleteAccessPointPolicy</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointPolicyCommandOutput>;
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): void;
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): void;
  public deleteAccessPointPolicy(
    args: DeleteAccessPointPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessPointPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void
  ): Promise<DeleteAccessPointPolicyCommandOutput> | void {
    const command = new DeleteAccessPointPolicyCommand(args);
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
   * <note>
   *             <p>This API operation deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the
   *          bucket must be deleted before the bucket itself can be deleted.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteBucket.html#API_control_DeleteBucket_Examples">
   *             Example</a> section below.</p>
   *          <p class="title">
   *             <b>Related Resources</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetBucket.html">GetBucket</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteBucket(
    args: DeleteBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketCommandOutput>;
  public deleteBucket(args: DeleteBucketCommandInput, cb: (err: any, data?: DeleteBucketCommandOutput) => void): void;
  public deleteBucket(
    args: DeleteBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketCommandOutput) => void
  ): void;
  public deleteBucket(
    args: DeleteBucketCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBucketCommandOutput) => void),
    cb?: (err: any, data?: DeleteBucketCommandOutput) => void
  ): Promise<DeleteBucketCommandOutput> | void {
    const command = new DeleteBucketCommand(args);
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
   * <note>
   *             <p>This API action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an
   *          S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration
   *          rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically
   *          deletes any objects on the basis of rules contained in the deleted lifecycle configuration.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>To use this operation, you must have permission to perform the
   *             <code>s3outposts:DeleteLifecycleConfiguration</code> action. By default, the bucket
   *          owner has this permission and the Outposts bucket owner can grant this permission to
   *          others.</p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">
   *          Elements to Describe Lifecycle Actions</a>.</p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketLifecycleConfigurationCommandOutput>;
  public deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  public deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  public deleteBucketLifecycleConfiguration(
    args: DeleteBucketLifecycleConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteBucketLifecycleConfigurationCommandOutput) => void
  ): Promise<DeleteBucketLifecycleConfigurationCommandOutput> | void {
    const command = new DeleteBucketLifecycleConfigurationCommand(args);
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
   * <note>
   *             <p>This API operation deletes an Amazon S3 on Outposts bucket policy. To delete an
   *          S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>This implementation of the DELETE operation uses the policy subresource to delete the
   *          policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the
   *          root user of the AWS account that owns the bucket, the calling identity must have the
   *             <code>s3outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket
   *          and belong to the bucket owner's account to use this operation. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *
   *          <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a
   *          <code>403 Access Denied</code> error. If you have the correct permissions, but you're
   *          not using an identity that belongs to the bucket owner's account, Amazon S3 returns a
   *          <code>405 Method Not Allowed</code> error. </p>
   *
   *
   *          <important>
   *             <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this operation,
   *          even if the policy explicitly denies the root user the ability to perform this action.</p>
   *          </important>
   *
   *          <p>For more information about bucket policies, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
   *             Policies</a>. </p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_PutBucketPolicy.html">PutBucketPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketPolicyCommandOutput>;
  public deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): void;
  public deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): void;
  public deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBucketPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): Promise<DeleteBucketPolicyCommandOutput> | void {
    const command = new DeleteBucketPolicyCommand(args);
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
   * <note>
   *             <p>This API operation deletes an Amazon S3 on Outposts bucket's tags. To delete an
   *          S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Deletes the tags from the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *
   *          <p>To use this operation, you must have permission to perform the <code>PutBucketTagging</code> action.
   *          By default, the bucket owner has this permission and can grant this permission to others.
   *       </p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteBucketTagging.html#API_control_DeleteBucketTagging_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>DeleteBucketTagging</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketTaggingCommandOutput>;
  public deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): void;
  public deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): void;
  public deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBucketTaggingCommandOutput) => void),
    cb?: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): Promise<DeleteBucketTaggingCommandOutput> | void {
    const command = new DeleteBucketTaggingCommand(args);
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
   * <p>Removes the entire tag set from the specified S3 Batch Operations job. To use this operation,
   *          you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p></p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteJobTaggingCommandOutput>;
  public deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    cb: (err: any, data?: DeleteJobTaggingCommandOutput) => void
  ): void;
  public deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobTaggingCommandOutput) => void
  ): void;
  public deleteJobTagging(
    args: DeleteJobTaggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteJobTaggingCommandOutput) => void),
    cb?: (err: any, data?: DeleteJobTaggingCommandOutput) => void
  ): Promise<DeleteJobTaggingCommandOutput> | void {
    const command = new DeleteJobTaggingCommand(args);
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
   * <p>Removes the <code>PublicAccessBlock</code> configuration for an AWS account. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
   *             public access</a>.</p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicAccessBlockCommandOutput>;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePublicAccessBlockCommandOutput) => void),
    cb?: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): Promise<DeletePublicAccessBlockCommandOutput> | void {
    const command = new DeletePublicAccessBlockCommand(args);
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
   * <p>Retrieves the configuration parameters and status for a Batch Operations job. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in
   *          the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p></p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  public describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  public describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobCommandOutput) => void
  ): Promise<DescribeJobCommandOutput> | void {
    const command = new DescribeJobCommand(args);
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
   * <p>Returns configuration information about the specified access point.</p>
   *          <p></p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">
   *             Example</a> section below.</p>
   *          <p>The following actions are related to <code>GetAccessPoint</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointCommandOutput>;
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointCommandOutput) => void
  ): void;
  public getAccessPoint(
    args: GetAccessPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessPointCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPointCommandOutput) => void
  ): Promise<GetAccessPointCommandOutput> | void {
    const command = new GetAccessPointCommand(args);
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
   * <p>Returns the access point policy associated with the specified access point.</p>
   *          <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyCommandOutput>;
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): void;
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): void;
  public getAccessPointPolicy(
    args: GetAccessPointPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessPointPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPointPolicyCommandOutput) => void
  ): Promise<GetAccessPointPolicyCommandOutput> | void {
    const command = new GetAccessPointPolicyCommand(args);
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
   * <p>Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPointPolicyStatusCommandOutput>;
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): void;
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): void;
  public getAccessPointPolicyStatus(
    args: GetAccessPointPolicyStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void),
    cb?: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void
  ): Promise<GetAccessPointPolicyStatusCommandOutput> | void {
    const command = new GetAccessPointPolicyStatusCommand(args);
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
   * <p>Gets an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">
   *          Using Amazon S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>The following actions are related to <code>GetBucket</code> for Amazon S3 on Outposts:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_CreateBucket.html">CreateBucket</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_DeleteBucket.html">DeleteBucket</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getBucket(args: GetBucketCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketCommandOutput>;
  public getBucket(args: GetBucketCommandInput, cb: (err: any, data?: GetBucketCommandOutput) => void): void;
  public getBucket(
    args: GetBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketCommandOutput) => void
  ): void;
  public getBucket(
    args: GetBucketCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBucketCommandOutput) => void),
    cb?: (err: any, data?: GetBucketCommandOutput) => void
  ): Promise<GetBucketCommandOutput> | void {
    const command = new GetBucketCommand(args);
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
   * <note>
   *             <p>This API operation gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an
   *          S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Returns the lifecycle configuration information set on the Outposts bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> and for
   *          information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"> Object Lifecycle Management</a> in
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *
   *          <p>To use this operation, you must have permission to perform the <code>s3outposts:GetLifecycleConfiguration</code> action.
   *          The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more
   *          information about permissions, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions
   *             Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access
   *                Permissions to Your Amazon S3 Resources</a>.</p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>
   *             <code>GetBucketLifecycleConfiguration</code> has the following special error:</p>
   *          <ul>
   *             <li>
   *                <p>Error code: <code>NoSuchLifecycleConfiguration</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Description: The lifecycle configuration does not exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>HTTP Status Code: 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>SOAP Fault Code Prefix: Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>The following actions are related to <code>GetBucketLifecycleConfiguration</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketLifecycleConfigurationCommandOutput>;
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): Promise<GetBucketLifecycleConfigurationCommandOutput> | void {
    const command = new GetBucketLifecycleConfigurationCommand(args);
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
   * <note>
   *             <p>This API action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3
   *             bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html">GetBucketPolicy</a> in the
   *                <i>Amazon Simple Storage Service API</i>. </p>
   *          </note>
   *          <p>Returns the policy of a specified Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity
   *       must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.</p>
   *
   *          <p>If you don't have <code>s3outposts:GetBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions,
   *          but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p>
   *
   *          <important>
   *             <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy
   *          explicitly denies the root user the ability to perform this action.</p>
   *          </important>
   *
   *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetBucketPolicy.html#API_control_GetBucketPolicy_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>GetBucketPolicy</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketPolicyCommandOutput>;
  public getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    cb: (err: any, data?: GetBucketPolicyCommandOutput) => void
  ): void;
  public getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketPolicyCommandOutput) => void
  ): void;
  public getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBucketPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetBucketPolicyCommandOutput) => void
  ): Promise<GetBucketPolicyCommandOutput> | void {
    const command = new GetBucketPolicyCommand(args);
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
   * <note>
   *             <p>This API operation gets an Amazon S3 on Outposts bucket's tags. To get an
   *          S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Returns the tag set associated with the Outposts bucket. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>To use this operation, you must have permission to perform the <code>GetBucketTagging</code> action.
   *          By default, the bucket owner has this permission and can grant this permission to others.</p>
   *
   *          <p>
   *             <code>GetBucketTagging</code> has the following special error:</p>
   *          <ul>
   *             <li>
   *                <p>Error code: <code>NoSuchTagSetError</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Description: There is no tag set associated with the bucket.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetBucketTagging.html#API_control_GetBucketTagging_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>GetBucketTagging</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketTaggingCommandOutput>;
  public getBucketTagging(
    args: GetBucketTaggingCommandInput,
    cb: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): void;
  public getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): void;
  public getBucketTagging(
    args: GetBucketTaggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBucketTaggingCommandOutput) => void),
    cb?: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): Promise<GetBucketTaggingCommandOutput> | void {
    const command = new GetBucketTaggingCommand(args);
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
   * <p>Returns the tags on an S3 Batch Operations job. To use this operation, you must have
   *          permission to perform the <code>s3:GetJobTagging</code> action. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
   *             access and labeling jobs using tags</a> in the
   *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p></p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getJobTagging(
    args: GetJobTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobTaggingCommandOutput>;
  public getJobTagging(
    args: GetJobTaggingCommandInput,
    cb: (err: any, data?: GetJobTaggingCommandOutput) => void
  ): void;
  public getJobTagging(
    args: GetJobTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobTaggingCommandOutput) => void
  ): void;
  public getJobTagging(
    args: GetJobTaggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobTaggingCommandOutput) => void),
    cb?: (err: any, data?: GetJobTaggingCommandOutput) => void
  ): Promise<GetJobTaggingCommandOutput> | void {
    const command = new GetJobTaggingCommand(args);
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
   * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an AWS account. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
   *             public access</a>.</p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicAccessBlockCommandOutput>;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPublicAccessBlockCommandOutput) => void),
    cb?: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): Promise<GetPublicAccessBlockCommandOutput> | void {
    const command = new GetPublicAccessBlockCommand(args);
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
   * <p>Returns a list of the access points currently associated with the specified bucket. You
   *          can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000
   *          access points (or the number specified in <code>maxResults</code>, whichever is less), the
   *          response will include a continuation token that you can use to list the additional access
   *          points.</p>
   *          <p></p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">
   *             Example</a> section below.</p>
   *          <p>The following actions are related to <code>ListAccessPoints</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPointsCommandOutput>;
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): void;
  public listAccessPoints(
    args: ListAccessPointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessPointsCommandOutput) => void),
    cb?: (err: any, data?: ListAccessPointsCommandOutput) => void
  ): Promise<ListAccessPointsCommandOutput> | void {
    const command = new ListAccessPointsCommand(args);
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
   * <p>Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for
   *          the AWS account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>Related actions include:</p>
   *          <p></p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p>Returns a list of all Outposts buckets in an Outposts that are owned by the
   *          authenticated sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and outpost-id in your API request, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">
   *             Example</a> section below.</p>
   */
  public listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegionalBucketsCommandOutput>;
  public listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    cb: (err: any, data?: ListRegionalBucketsCommandOutput) => void
  ): void;
  public listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionalBucketsCommandOutput) => void
  ): void;
  public listRegionalBuckets(
    args: ListRegionalBucketsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRegionalBucketsCommandOutput) => void),
    cb?: (err: any, data?: ListRegionalBucketsCommandOutput) => void
  ): Promise<ListRegionalBucketsCommandOutput> | void {
    const command = new ListRegionalBucketsCommand(args);
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
   * <p>Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API
   *          replaces any existing policy associated with the specified access point.</p>
   *          <p></p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_PutAccessPointPolicy.html#API_control_PutAccessPointPolicy_Examples">
   *             Example</a> section below.</p>
   *          <p>The following actions are related to <code>PutAccessPointPolicy</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessPointPolicyCommandOutput>;
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): void;
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): void;
  public putAccessPointPolicy(
    args: PutAccessPointPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccessPointPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutAccessPointPolicyCommandOutput) => void
  ): Promise<PutAccessPointPolicyCommandOutput> | void {
    const command = new PutAccessPointPolicyCommand(args);
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
   * <note>
   *             <p>This API action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Creates a new lifecycle configuration for the Outposts bucket or replaces an existing
   *          lifecycle configuration. Outposts buckets can only support a lifecycle that deletes objects
   *          after a certain period of time. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Managing Lifecycle Permissions for Amazon S3 on Outposts</a>.</p>
   *          <p></p>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_PutBucketLifecycleConfiguration.html#API_control_PutBucketLifecycleConfiguration_Examples">
   *             Example</a> section below.</p>
   *          <p>The following actions are related to <code>PutBucketLifecycleConfiguration</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketLifecycleConfigurationCommandOutput>;
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): Promise<PutBucketLifecycleConfigurationCommandOutput> | void {
    const command = new PutBucketLifecycleConfigurationCommand(args);
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
   * <note>
   *             <p>This API action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html">PutBucketPolicy</a> in the <i>Amazon Simple Storage Service API</i>.
   *       </p>
   *          </note>
   *          <p>Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>If you are using an identity other than the root user of the AWS account that owns the
   *          Outposts bucket, the calling identity must have the <code>PutBucketPolicy</code>
   *          permissions on the specified Outposts bucket and belong to the bucket owner's account in
   *          order to use this operation.</p>
   *
   *          <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions,
   *          but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p>
   *
   *          <important>
   *             <p> As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy
   *          explicitly denies the root user the ability to perform this action.
   *       </p>
   *          </important>
   *
   *
   *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p>
   *
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_PutBucketPolicy.html#API_control_PutBucketPolicy_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>PutBucketPolicy</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketPolicyCommandOutput>;
  public putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    cb: (err: any, data?: PutBucketPolicyCommandOutput) => void
  ): void;
  public putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketPolicyCommandOutput) => void
  ): void;
  public putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBucketPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutBucketPolicyCommandOutput) => void
  ): Promise<PutBucketPolicyCommandOutput> | void {
    const command = new PutBucketPolicyCommand(args);
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
   * <note>
   *             <p>This API action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see
   *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> in the <i>Amazon Simple Storage Service API</i>. </p>
   *          </note>
   *          <p>Sets the tags for an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your
   *          AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your
   *          billing information according to resources with the same tag key values. For example, you can tag several
   *          resources with a specific application name, and then organize your billing information to see the total cost
   *          of that application across several services. For more information, see
   *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost Allocation and Tagging</a>.</p>
   *
   *          <note>
   *             <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites
   *          the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/CostAllocTagging.html">Using Cost Allocation in Amazon S3
   *             Bucket Tags</a>.</p>
   *          </note>
   *          <p>To use this operation, you must have permissions to perform the
   *             <code>s3outposts:PutBucketTagging</code> action. The Outposts bucket owner has this
   *          permission by default and can grant this permission to others. For more information about
   *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html">Managing Access Permissions to Your Amazon S3
   *             Resources</a>.</p>
   *
   *          <p>
   *             <code>PutBucketTagging</code> has the following special errors:</p>
   *          <ul>
   *             <li>
   *                <p>Error code: <code>InvalidTagError</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation.
   *                   For information about tag restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">
   *                      User-Defined Tag Restrictions</a>  and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html">
   *                         AWS-Generated Cost Allocation Tag Restrictions</a>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Error code: <code>MalformedXMLError</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Description: The XML provided does not match the schema.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Error code: <code>OperationAbortedError </code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Description: A conflicting conditional operation is currently in progress against this
   *                      resource. Try again.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Error code: <code>InternalError</code>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>Description: The service was unable to apply the provided tag to the bucket.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of outpost-id to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the outpost-id derived using the access point ARN, see the
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API__control_PutBucketTagging.html#API_control_PutBucketTagging_Examples">
   *             Example</a> section below.</p>
   *
   *          <p>The following actions are related to <code>PutBucketTagging</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketTaggingCommandOutput>;
  public putBucketTagging(
    args: PutBucketTaggingCommandInput,
    cb: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): void;
  public putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): void;
  public putBucketTagging(
    args: PutBucketTaggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBucketTaggingCommandOutput) => void),
    cb?: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): Promise<PutBucketTaggingCommandOutput> | void {
    const command = new PutBucketTaggingCommand(args);
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
   * <p>Sets the supplied tag-set on an S3 Batch Operations job.</p>
   *          <p>A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending
   *          a PUT request against the tagging subresource that is associated with the job. To modify
   *          the existing tag set, you can either replace the existing tag set entirely, or make changes
   *          within the existing tag set by retrieving the existing tag set using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>, modify that tag set, and use this API action to replace the
   *          tag set with the one you modified. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and
   *             labeling jobs using tags</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p>
   *          <p></p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the
   *                   Batch Operations job. If you use this method, you are charged for a Tier 1 Request
   *                   (PUT). For more information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3
   *                      pricing</a>.</p>
   *                </li>
   *                <li>
   *                   <p>For deleting existing tags for your Batch Operations job, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
   *                   request is preferred because it achieves the same result without incurring
   *                   charges.</p>
   *                </li>
   *                <li>
   *                   <p>A few things to consider about using tags:</p>
   *                   <ul>
   *                      <li>
   *                         <p>Amazon S3 limits the maximum number of tags to 50 tags per job.</p>
   *                      </li>
   *                      <li>
   *                         <p>You can associate up to 50 tags with a job as long as they have unique tag keys.</p>
   *                      </li>
   *                      <li>
   *                         <p>A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.</p>
   *                      </li>
   *                      <li>
   *                         <p>The key and values are case sensitive.</p>
   *                      </li>
   *                      <li>
   *                         <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and
   *                            Cost Management User Guide</i>.</p>
   *                      </li>
   *                   </ul>
   *                </li>
   *             </ul>
   *          </note>
   *          <p></p>
   *          <p>To use this operation, you must have permission to perform the <code>s3:PutJobTagging</code> action.</p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreatJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putJobTagging(
    args: PutJobTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutJobTaggingCommandOutput>;
  public putJobTagging(
    args: PutJobTaggingCommandInput,
    cb: (err: any, data?: PutJobTaggingCommandOutput) => void
  ): void;
  public putJobTagging(
    args: PutJobTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutJobTaggingCommandOutput) => void
  ): void;
  public putJobTagging(
    args: PutJobTaggingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutJobTaggingCommandOutput) => void),
    cb?: (err: any, data?: PutJobTaggingCommandOutput) => void
  ): Promise<PutJobTaggingCommandOutput> | void {
    const command = new PutJobTaggingCommand(args);
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
   * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an AWS account. For
   *          more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
   *             public access</a>.</p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPublicAccessBlockCommandOutput>;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPublicAccessBlockCommandOutput) => void),
    cb?: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): Promise<PutPublicAccessBlockCommandOutput> | void {
    const command = new PutPublicAccessBlockCommand(args);
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
   * <p>Updates an existing S3 Batch Operations job's priority. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p></p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobPriorityCommandOutput>;
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): void;
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): void;
  public updateJobPriority(
    args: UpdateJobPriorityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobPriorityCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobPriorityCommandOutput) => void
  ): Promise<UpdateJobPriorityCommandOutput> | void {
    const command = new UpdateJobPriorityCommand(args);
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
   * <p>Updates the status for the specified job. Use this operation to confirm that you want to
   *          run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-basics.html">S3 Batch Operations</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p></p>
   *          <p>Related actions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJobStatusCommandOutput>;
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    cb: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): void;
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): void;
  public updateJobStatus(
    args: UpdateJobStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobStatusCommandOutput) => void
  ): Promise<UpdateJobStatusCommandOutput> | void {
    const command = new UpdateJobStatusCommand(args);
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
