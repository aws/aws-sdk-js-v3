import { S3ControlClient } from "./S3ControlClient";
import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import { DeleteAccessPointPolicyCommandInput, DeleteAccessPointPolicyCommandOutput } from "./commands/DeleteAccessPointPolicyCommand";
import { DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput } from "./commands/DeletePublicAccessBlockCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand";
import { GetAccessPointPolicyCommandInput, GetAccessPointPolicyCommandOutput } from "./commands/GetAccessPointPolicyCommand";
import { GetAccessPointPolicyStatusCommandInput, GetAccessPointPolicyStatusCommandOutput } from "./commands/GetAccessPointPolicyStatusCommand";
import { GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput } from "./commands/GetPublicAccessBlockCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput } from "./commands/PutAccessPointPolicyCommand";
import { PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput } from "./commands/PutPublicAccessBlockCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *       </p>
 */
export declare class S3Control extends S3ControlClient {
    /**
     * <p>Creates an access point and associates it with the specified bucket.</p>
     */
    createAccessPoint(args: CreateAccessPointCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessPointCommandOutput>;
    createAccessPoint(args: CreateAccessPointCommandInput, cb: (err: any, data?: CreateAccessPointCommandOutput) => void): void;
    createAccessPoint(args: CreateAccessPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccessPointCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon S3 batch operations job.</p>
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * <p>Deletes the specified access point.</p>
     */
    deleteAccessPoint(args: DeleteAccessPointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPointCommandOutput>;
    deleteAccessPoint(args: DeleteAccessPointCommandInput, cb: (err: any, data?: DeleteAccessPointCommandOutput) => void): void;
    deleteAccessPoint(args: DeleteAccessPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPointCommandOutput) => void): void;
    /**
     * <p>Deletes the access point policy for the specified access point.</p>
     */
    deleteAccessPointPolicy(args: DeleteAccessPointPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPointPolicyCommandOutput>;
    deleteAccessPointPolicy(args: DeleteAccessPointPolicyCommandInput, cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void): void;
    deleteAccessPointPolicy(args: DeleteAccessPointPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPointPolicyCommandOutput) => void): void;
    /**
     * <p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon Web Services
     *       account.</p>
     */
    deletePublicAccessBlock(args: DeletePublicAccessBlockCommandInput, options?: __HttpHandlerOptions): Promise<DeletePublicAccessBlockCommandOutput>;
    deletePublicAccessBlock(args: DeletePublicAccessBlockCommandInput, cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void): void;
    deletePublicAccessBlock(args: DeletePublicAccessBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void): void;
    /**
     * <p>Retrieves the configuration parameters and status for a batch operations job.</p>
     */
    describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
    describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    describeJob(args: DescribeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    /**
     * <p>Returns configuration information about the specified access point.</p>
     */
    getAccessPoint(args: GetAccessPointCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointCommandOutput>;
    getAccessPoint(args: GetAccessPointCommandInput, cb: (err: any, data?: GetAccessPointCommandOutput) => void): void;
    getAccessPoint(args: GetAccessPointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointCommandOutput) => void): void;
    /**
     * <p>Returns the access point policy associated with the specified access point.</p>
     */
    getAccessPointPolicy(args: GetAccessPointPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointPolicyCommandOutput>;
    getAccessPointPolicy(args: GetAccessPointPolicyCommandInput, cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void): void;
    getAccessPointPolicy(args: GetAccessPointPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointPolicyCommandOutput) => void): void;
    /**
     * <p>Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
     */
    getAccessPointPolicyStatus(args: GetAccessPointPolicyStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetAccessPointPolicyStatusCommandOutput>;
    getAccessPointPolicyStatus(args: GetAccessPointPolicyStatusCommandInput, cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void): void;
    getAccessPointPolicyStatus(args: GetAccessPointPolicyStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAccessPointPolicyStatusCommandOutput) => void): void;
    /**
     * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account.</p>
     */
    getPublicAccessBlock(args: GetPublicAccessBlockCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicAccessBlockCommandOutput>;
    getPublicAccessBlock(args: GetPublicAccessBlockCommandInput, cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void): void;
    getPublicAccessBlock(args: GetPublicAccessBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void): void;
    /**
     * <p>Returns a list of the access points currently associated with the specified bucket. You can
     * 		   retrieve up to 1000 access points per call. If the specified bucket has more than 1000 access points (or the number specified in <code>maxResults</code>, whichever is less), then the response will include a continuation token that you can use to list the additional access points.</p>
     */
    listAccessPoints(args: ListAccessPointsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessPointsCommandOutput>;
    listAccessPoints(args: ListAccessPointsCommandInput, cb: (err: any, data?: ListAccessPointsCommandOutput) => void): void;
    listAccessPoints(args: ListAccessPointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessPointsCommandOutput) => void): void;
    /**
     * <p>Lists current jobs and jobs that have ended within the last 30 days for the AWS account making the request.</p>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.</p>
     */
    putAccessPointPolicy(args: PutAccessPointPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutAccessPointPolicyCommandOutput>;
    putAccessPointPolicy(args: PutAccessPointPolicyCommandInput, cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void): void;
    putAccessPointPolicy(args: PutAccessPointPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAccessPointPolicyCommandOutput) => void): void;
    /**
     * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon Web Services
     *       account.</p>
     */
    putPublicAccessBlock(args: PutPublicAccessBlockCommandInput, options?: __HttpHandlerOptions): Promise<PutPublicAccessBlockCommandOutput>;
    putPublicAccessBlock(args: PutPublicAccessBlockCommandInput, cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void): void;
    putPublicAccessBlock(args: PutPublicAccessBlockCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void): void;
    /**
     * <p>Updates an existing job's priority.</p>
     */
    updateJobPriority(args: UpdateJobPriorityCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobPriorityCommandOutput>;
    updateJobPriority(args: UpdateJobPriorityCommandInput, cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void): void;
    updateJobPriority(args: UpdateJobPriorityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobPriorityCommandOutput) => void): void;
    /**
     * <p>Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job.</p>
     */
    updateJobStatus(args: UpdateJobStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobStatusCommandOutput>;
    updateJobStatus(args: UpdateJobStatusCommandInput, cb: (err: any, data?: UpdateJobStatusCommandOutput) => void): void;
    updateJobStatus(args: UpdateJobStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateJobStatusCommandOutput) => void): void;
}
