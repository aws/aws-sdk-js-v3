import { SnowballClient } from "./SnowballClient";
import { CancelClusterInput } from "./types/CancelClusterInput";
import { CancelClusterOutput } from "./types/CancelClusterOutput";
import { CancelJobInput } from "./types/CancelJobInput";
import { CancelJobOutput } from "./types/CancelJobOutput";
import { ClusterLimitExceededException } from "./types/ClusterLimitExceededException";
import { CreateAddressInput } from "./types/CreateAddressInput";
import { CreateAddressOutput } from "./types/CreateAddressOutput";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { CreateJobInput } from "./types/CreateJobInput";
import { CreateJobOutput } from "./types/CreateJobOutput";
import { DescribeAddressInput } from "./types/DescribeAddressInput";
import { DescribeAddressOutput } from "./types/DescribeAddressOutput";
import { DescribeAddressesInput } from "./types/DescribeAddressesInput";
import { DescribeAddressesOutput } from "./types/DescribeAddressesOutput";
import { DescribeClusterInput } from "./types/DescribeClusterInput";
import { DescribeClusterOutput } from "./types/DescribeClusterOutput";
import { DescribeJobInput } from "./types/DescribeJobInput";
import { DescribeJobOutput } from "./types/DescribeJobOutput";
import { Ec2RequestFailedException } from "./types/Ec2RequestFailedException";
import { GetJobManifestInput } from "./types/GetJobManifestInput";
import { GetJobManifestOutput } from "./types/GetJobManifestOutput";
import { GetJobUnlockCodeInput } from "./types/GetJobUnlockCodeInput";
import { GetJobUnlockCodeOutput } from "./types/GetJobUnlockCodeOutput";
import { GetSnowballUsageInput } from "./types/GetSnowballUsageInput";
import { GetSnowballUsageOutput } from "./types/GetSnowballUsageOutput";
import { InvalidAddressException } from "./types/InvalidAddressException";
import { InvalidInputCombinationException } from "./types/InvalidInputCombinationException";
import { InvalidJobStateException } from "./types/InvalidJobStateException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidResourceException } from "./types/InvalidResourceException";
import { KMSRequestFailedException } from "./types/KMSRequestFailedException";
import { ListClusterJobsInput } from "./types/ListClusterJobsInput";
import { ListClusterJobsOutput } from "./types/ListClusterJobsOutput";
import { ListClustersInput } from "./types/ListClustersInput";
import { ListClustersOutput } from "./types/ListClustersOutput";
import { ListCompatibleImagesInput } from "./types/ListCompatibleImagesInput";
import { ListCompatibleImagesOutput } from "./types/ListCompatibleImagesOutput";
import { ListJobsInput } from "./types/ListJobsInput";
import { ListJobsOutput } from "./types/ListJobsOutput";
import { UnsupportedAddressException } from "./types/UnsupportedAddressException";
import { UpdateClusterInput } from "./types/UpdateClusterInput";
import { UpdateClusterOutput } from "./types/UpdateClusterOutput";
import { UpdateJobInput } from "./types/UpdateJobInput";
import { UpdateJobOutput } from "./types/UpdateJobOutput";
import { CancelClusterCommand } from "./commands/CancelClusterCommand";
import { CancelJobCommand } from "./commands/CancelJobCommand";
import { CreateAddressCommand } from "./commands/CreateAddressCommand";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateJobCommand } from "./commands/CreateJobCommand";
import { DescribeAddressCommand } from "./commands/DescribeAddressCommand";
import { DescribeAddressesCommand } from "./commands/DescribeAddressesCommand";
import { DescribeClusterCommand } from "./commands/DescribeClusterCommand";
import { DescribeJobCommand } from "./commands/DescribeJobCommand";
import { GetJobManifestCommand } from "./commands/GetJobManifestCommand";
import { GetJobUnlockCodeCommand } from "./commands/GetJobUnlockCodeCommand";
import { GetSnowballUsageCommand } from "./commands/GetSnowballUsageCommand";
import { ListClusterJobsCommand } from "./commands/ListClusterJobsCommand";
import { ListClustersCommand } from "./commands/ListClustersCommand";
import { ListCompatibleImagesCommand } from "./commands/ListCompatibleImagesCommand";
import { ListJobsCommand } from "./commands/ListJobsCommand";
import { UpdateClusterCommand } from "./commands/UpdateClusterCommand";
import { UpdateJobCommand } from "./commands/UpdateJobCommand";

export class Snowball extends SnowballClient {
  /**
   * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {KMSRequestFailedException} <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
   *   - {InvalidJobStateException} <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelCluster(args: CancelClusterInput): Promise<CancelClusterOutput>;
  public cancelCluster(
    args: CancelClusterInput,
    cb: (err: any, data?: CancelClusterOutput) => void
  ): void;
  public cancelCluster(
    args: CancelClusterInput,
    cb?: (err: any, data?: CancelClusterOutput) => void
  ): Promise<CancelClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidJobStateException} <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
   *   - {KMSRequestFailedException} <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelJob(args: CancelJobInput): Promise<CancelJobOutput>;
  public cancelJob(
    args: CancelJobInput,
    cb: (err: any, data?: CancelJobOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobInput,
    cb?: (err: any, data?: CancelJobOutput) => void
  ): Promise<CancelJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an address for a Snowball to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidAddressException} <p>The address provided was invalid. Check the address with your region's carrier, and try again.</p>
   *   - {UnsupportedAddressException} <p>The address is either outside the serviceable area for your region, or an error occurred. Check the address with your region's carrier and try again. If the issue persists, contact AWS Support.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAddress(args: CreateAddressInput): Promise<CreateAddressOutput>;
  public createAddress(
    args: CreateAddressInput,
    cb: (err: any, data?: CreateAddressOutput) => void
  ): void;
  public createAddress(
    args: CreateAddressInput,
    cb?: (err: any, data?: CreateAddressOutput) => void
  ): Promise<CreateAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {KMSRequestFailedException} <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
   *   - {InvalidInputCombinationException} <p>Job or cluster creation failed. One ore more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
   *   - {Ec2RequestFailedException} <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCluster(args: CreateClusterInput): Promise<CreateClusterOutput>;
  public createCluster(
    args: CreateClusterInput,
    cb: (err: any, data?: CreateClusterOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterInput,
    cb?: (err: any, data?: CreateClusterOutput) => void
  ): Promise<CreateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {KMSRequestFailedException} <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
   *   - {InvalidInputCombinationException} <p>Job or cluster creation failed. One ore more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
   *   - {ClusterLimitExceededException} <p>Job creation failed. Currently, clusters support five nodes. If you have less than five nodes for your cluster and you have more nodes to create for this cluster, try again and create jobs until your cluster has exactly five notes.</p>
   *   - {Ec2RequestFailedException} <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createJob(args: CreateJobInput): Promise<CreateJobOutput>;
  public createJob(
    args: CreateJobInput,
    cb: (err: any, data?: CreateJobOutput) => void
  ): void;
  public createJob(
    args: CreateJobInput,
    cb?: (err: any, data?: CreateJobOutput) => void
  ): Promise<CreateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAddress(
    args: DescribeAddressInput
  ): Promise<DescribeAddressOutput>;
  public describeAddress(
    args: DescribeAddressInput,
    cb: (err: any, data?: DescribeAddressOutput) => void
  ): void;
  public describeAddress(
    args: DescribeAddressInput,
    cb?: (err: any, data?: DescribeAddressOutput) => void
  ): Promise<DescribeAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has stopped. Run the operation without changing the <code>NextToken</code> string, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAddresses(
    args: DescribeAddressesInput
  ): Promise<DescribeAddressesOutput>;
  public describeAddresses(
    args: DescribeAddressesInput,
    cb: (err: any, data?: DescribeAddressesOutput) => void
  ): void;
  public describeAddresses(
    args: DescribeAddressesInput,
    cb?: (err: any, data?: DescribeAddressesOutput) => void
  ): Promise<DescribeAddressesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAddressesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific cluster including shipping information, cluster status, and other important metadata.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCluster(
    args: DescribeClusterInput
  ): Promise<DescribeClusterOutput>;
  public describeCluster(
    args: DescribeClusterInput,
    cb: (err: any, data?: DescribeClusterOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterInput,
    cb?: (err: any, data?: DescribeClusterOutput) => void
  ): Promise<DescribeClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific job including shipping information, job status, and other important metadata. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeJob(args: DescribeJobInput): Promise<DescribeJobOutput>;
  public describeJob(
    args: DescribeJobInput,
    cb: (err: any, data?: DescribeJobOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobInput,
    cb?: (err: any, data?: DescribeJobOutput) => void
  ): Promise<DescribeJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time.</p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidJobStateException} <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobManifest(
    args: GetJobManifestInput
  ): Promise<GetJobManifestOutput>;
  public getJobManifest(
    args: GetJobManifestInput,
    cb: (err: any, data?: GetJobManifestOutput) => void
  ): void;
  public getJobManifest(
    args: GetJobManifestInput,
    cb?: (err: any, data?: GetJobManifestOutput) => void
  ): Promise<GetJobManifestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobManifestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 90 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snowball through the Snowball client when the client is started for the first time.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidJobStateException} <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobUnlockCode(
    args: GetJobUnlockCodeInput
  ): Promise<GetJobUnlockCodeOutput>;
  public getJobUnlockCode(
    args: GetJobUnlockCodeInput,
    cb: (err: any, data?: GetJobUnlockCodeOutput) => void
  ): void;
  public getJobUnlockCode(
    args: GetJobUnlockCodeInput,
    cb?: (err: any, data?: GetJobUnlockCodeOutput) => void
  ): Promise<GetJobUnlockCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobUnlockCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.</p> <p>The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSnowballUsage(
    args: GetSnowballUsageInput
  ): Promise<GetSnowballUsageOutput>;
  public getSnowballUsage(
    args: GetSnowballUsageInput,
    cb: (err: any, data?: GetSnowballUsageOutput) => void
  ): void;
  public getSnowballUsage(
    args: GetSnowballUsageInput,
    cb?: (err: any, data?: GetSnowballUsageOutput) => void
  ): Promise<GetSnowballUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSnowballUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has stopped. Run the operation without changing the <code>NextToken</code> string, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listClusterJobs(
    args: ListClusterJobsInput
  ): Promise<ListClusterJobsOutput>;
  public listClusterJobs(
    args: ListClusterJobsInput,
    cb: (err: any, data?: ListClusterJobsOutput) => void
  ): void;
  public listClusterJobs(
    args: ListClusterJobsInput,
    cb?: (err: any, data?: ListClusterJobsOutput) => void
  ): Promise<ListClusterJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListClusterJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has stopped. Run the operation without changing the <code>NextToken</code> string, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listClusters(args: ListClustersInput): Promise<ListClustersOutput>;
  public listClusters(
    args: ListClustersInput,
    cb: (err: any, data?: ListClustersOutput) => void
  ): void;
  public listClusters(
    args: ListClustersInput,
    cb?: (err: any, data?: ListClustersOutput) => void
  ): Promise<ListClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your AWS account that would be supported for use on <code>EDGE</code>, <code>EDGE_C</code>, and <code>EDGE_CG</code> devices. For more information on compatible AMIs, see <a href="http://docs.aws.amazon.com/snowball/latest/developer-guide/using-ec2.html">Using Amazon EC2 Compute Instances</a> in the <i>AWS Snowball Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has stopped. Run the operation without changing the <code>NextToken</code> string, and try again.</p>
   *   - {Ec2RequestFailedException} <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listCompatibleImages(
    args: ListCompatibleImagesInput
  ): Promise<ListCompatibleImagesOutput>;
  public listCompatibleImages(
    args: ListCompatibleImagesInput,
    cb: (err: any, data?: ListCompatibleImagesOutput) => void
  ): void;
  public listCompatibleImages(
    args: ListCompatibleImagesInput,
    cb?: (err: any, data?: ListCompatibleImagesOutput) => void
  ): Promise<ListCompatibleImagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListCompatibleImagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has stopped. Run the operation without changing the <code>NextToken</code> string, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listJobs(args: ListJobsInput): Promise<ListJobsOutput>;
  public listJobs(
    args: ListJobsInput,
    cb: (err: any, data?: ListJobsOutput) => void
  ): void;
  public listJobs(
    args: ListJobsInput,
    cb?: (err: any, data?: ListJobsOutput) => void
  ): Promise<ListJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidJobStateException} <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
   *   - {KMSRequestFailedException} <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
   *   - {InvalidInputCombinationException} <p>Job or cluster creation failed. One ore more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
   *   - {Ec2RequestFailedException} <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCluster(args: UpdateClusterInput): Promise<UpdateClusterOutput>;
  public updateCluster(
    args: UpdateClusterInput,
    cb: (err: any, data?: UpdateClusterOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterInput,
    cb?: (err: any, data?: UpdateClusterOutput) => void
  ): Promise<UpdateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidResourceException} <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
   *   - {InvalidJobStateException} <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
   *   - {KMSRequestFailedException} <p>The provided AWS Key Management Service key lacks the permissions to perform the specified <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
   *   - {InvalidInputCombinationException} <p>Job or cluster creation failed. One ore more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
   *   - {ClusterLimitExceededException} <p>Job creation failed. Currently, clusters support five nodes. If you have less than five nodes for your cluster and you have more nodes to create for this cluster, try again and create jobs until your cluster has exactly five notes.</p>
   *   - {Ec2RequestFailedException} <p>Your IAM user lacks the necessary Amazon EC2 permissions to perform the attempted action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateJob(args: UpdateJobInput): Promise<UpdateJobOutput>;
  public updateJob(
    args: UpdateJobInput,
    cb: (err: any, data?: UpdateJobOutput) => void
  ): void;
  public updateJob(
    args: UpdateJobInput,
    cb?: (err: any, data?: UpdateJobOutput) => void
  ): Promise<UpdateJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
