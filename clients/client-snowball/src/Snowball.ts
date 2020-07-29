import { SnowballClient } from "./SnowballClient";
import {
  CancelClusterCommand,
  CancelClusterCommandInput,
  CancelClusterCommandOutput,
} from "./commands/CancelClusterCommand";
import { CancelJobCommand, CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import {
  CreateAddressCommand,
  CreateAddressCommandInput,
  CreateAddressCommandOutput,
} from "./commands/CreateAddressCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import { CreateJobCommand, CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  DescribeAddressCommand,
  DescribeAddressCommandInput,
  DescribeAddressCommandOutput,
} from "./commands/DescribeAddressCommand";
import {
  DescribeAddressesCommand,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "./commands/DescribeAddressesCommand";
import {
  DescribeClusterCommand,
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
} from "./commands/DescribeClusterCommand";
import { DescribeJobCommand, DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  GetJobManifestCommand,
  GetJobManifestCommandInput,
  GetJobManifestCommandOutput,
} from "./commands/GetJobManifestCommand";
import {
  GetJobUnlockCodeCommand,
  GetJobUnlockCodeCommandInput,
  GetJobUnlockCodeCommandOutput,
} from "./commands/GetJobUnlockCodeCommand";
import {
  GetSnowballUsageCommand,
  GetSnowballUsageCommandInput,
  GetSnowballUsageCommandOutput,
} from "./commands/GetSnowballUsageCommand";
import {
  GetSoftwareUpdatesCommand,
  GetSoftwareUpdatesCommandInput,
  GetSoftwareUpdatesCommandOutput,
} from "./commands/GetSoftwareUpdatesCommand";
import {
  ListClusterJobsCommand,
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
} from "./commands/ListClusterJobsCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListCompatibleImagesCommand,
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "./commands/ListCompatibleImagesCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import { UpdateJobCommand, UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Snowball is a petabyte-scale data transport solution that uses secure devices to
 *       transfer large amounts of data between your on-premises data centers and Amazon Simple Storage
 *       Service (Amazon S3). The Snowball commands described here provide access to the same
 *       functionality that is available in the AWS Snowball Management Console, which enables you to
 *       create and manage jobs for Snowball. To transfer data locally with a Snowball device, you'll
 *       need to use the Snowball client or the Amazon S3 API adapter for Snowball. For more
 *       information, see the <a href="https://docs.aws.amazon.com/AWSImportExport/latest/ug/api-reference.html">User Guide</a>.</p>
 */
export class Snowball extends SnowballClient {
  /**
   * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the
   *         <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster
   *       job to cancel it.</p>
   */
  public cancelCluster(
    args: CancelClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelClusterCommandOutput>;
  public cancelCluster(
    args: CancelClusterCommandInput,
    cb: (err: any, data?: CancelClusterCommandOutput) => void
  ): void;
  public cancelCluster(
    args: CancelClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelClusterCommandOutput) => void
  ): void;
  public cancelCluster(
    args: CancelClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelClusterCommandOutput) => void),
    cb?: (err: any, data?: CancelClusterCommandOutput) => void
  ): Promise<CancelClusterCommandOutput> | void {
    const command = new CancelClusterCommand(args);
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
   * <p>Cancels the specified job. You can only cancel a job before its <code>JobState</code>
   *       value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or
   *         <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the
   *       response element data returned.</p>
   */
  public cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
  public cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
  public cancelJob(
    args: CancelJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelJobCommandOutput) => void
  ): void;
  public cancelJob(
    args: CancelJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelJobCommandOutput) => void),
    cb?: (err: any, data?: CancelJobCommandOutput) => void
  ): Promise<CancelJobCommandOutput> | void {
    const command = new CancelJobCommand(args);
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
   * <p>Creates an address for a Snowball to be shipped to. In most regions,
   *       addresses are validated at the time of creation. The address you provide must be located
   *       within the serviceable area of your region. If the address is invalid or unsupported, then an
   *       exception is thrown.</p>
   */
  public createAddress(
    args: CreateAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAddressCommandOutput>;
  public createAddress(
    args: CreateAddressCommandInput,
    cb: (err: any, data?: CreateAddressCommandOutput) => void
  ): void;
  public createAddress(
    args: CreateAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAddressCommandOutput) => void
  ): void;
  public createAddress(
    args: CreateAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAddressCommandOutput) => void),
    cb?: (err: any, data?: CreateAddressCommandOutput) => void
  ): Promise<CreateAddressCommandOutput> | void {
    const command = new CreateAddressCommand(args);
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
   * <p>Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The
   *       cluster does not ship until these five node jobs have been created.</p>
   */
  public createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  public createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
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
   * <p>Creates a job to import or export data between Amazon S3 and your on-premises data
   *       center. Your AWS account must have the right trust policies and permissions in place to create
   *       a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide
   *       the <code>clusterId</code> value; the other job attributes are inherited from the cluster.
   *     </p>
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
   * <p>Takes an <code>AddressId</code> and returns specific details about that address in the
   *       form of an <code>Address</code> object.</p>
   */
  public describeAddress(
    args: DescribeAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressCommandOutput>;
  public describeAddress(
    args: DescribeAddressCommandInput,
    cb: (err: any, data?: DescribeAddressCommandOutput) => void
  ): void;
  public describeAddress(
    args: DescribeAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressCommandOutput) => void
  ): void;
  public describeAddress(
    args: DescribeAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddressCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddressCommandOutput) => void
  ): Promise<DescribeAddressCommandOutput> | void {
    const command = new DescribeAddressCommand(args);
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
   * <p>Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of
   *       the US regions will return addresses from the list of all addresses associated with this
   *       account in all US regions.</p>
   */
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAddressesCommandOutput>;
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): void;
  public describeAddresses(
    args: DescribeAddressesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAddressesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAddressesCommandOutput) => void
  ): Promise<DescribeAddressesCommandOutput> | void {
    const command = new DescribeAddressesCommand(args);
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
   * <p>Returns information about a specific cluster including shipping information, cluster
   *       status, and other important metadata.</p>
   */
  public describeCluster(
    args: DescribeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClusterCommandOutput>;
  public describeCluster(
    args: DescribeClusterCommandInput,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClusterCommandOutput) => void
  ): void;
  public describeCluster(
    args: DescribeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClusterCommandOutput) => void),
    cb?: (err: any, data?: DescribeClusterCommandOutput) => void
  ): Promise<DescribeClusterCommandOutput> | void {
    const command = new DescribeClusterCommand(args);
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
   * <p>Returns information about a specific job including shipping information, job status,
   *       and other important metadata. </p>
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
   * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the
   *       specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes
   *       after this request has been made. To access the manifest file after 60 minutes have passed,
   *       you'll have to make another call to the <code>GetJobManifest</code> action.</p>
   *
   *          <p>The manifest is an encrypted file that you can download after your job enters the
   *         <code>WithCustomer</code> status. The manifest is decrypted by using the
   *         <code>UnlockCode</code> code value, when you pass both values to the Snowball through the
   *       Snowball client when the client is started for the first time.</p>
   *
   *
   *          <p>As a best practice, we recommend that you don't save a copy of an
   *         <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving
   *       these separately helps prevent unauthorized parties from gaining access to the Snowball
   *       associated with that job.</p>
   *
   *
   *          <p>The credentials of a given job, including its manifest file and unlock code, expire 90
   *       days after the job is created.</p>
   */
  public getJobManifest(
    args: GetJobManifestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobManifestCommandOutput>;
  public getJobManifest(
    args: GetJobManifestCommandInput,
    cb: (err: any, data?: GetJobManifestCommandOutput) => void
  ): void;
  public getJobManifest(
    args: GetJobManifestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobManifestCommandOutput) => void
  ): void;
  public getJobManifest(
    args: GetJobManifestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobManifestCommandOutput) => void),
    cb?: (err: any, data?: GetJobManifestCommandOutput) => void
  ): Promise<GetJobManifestCommandOutput> | void {
    const command = new GetJobManifestCommand(args);
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
   * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular
   *         <code>UnlockCode</code> value can be accessed for up to 90 days after the associated job has
   *       been created.</p>
   *
   *          <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric
   *       characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed
   *       along with the manifest to the Snowball through the Snowball client when the client is started
   *       for the first time.</p>
   *
   *          <p>As a best practice, we recommend that you don't save a copy of the
   *         <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these
   *       separately helps prevent unauthorized parties from gaining access to the Snowball associated
   *       with that job.</p>
   */
  public getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobUnlockCodeCommandOutput>;
  public getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    cb: (err: any, data?: GetJobUnlockCodeCommandOutput) => void
  ): void;
  public getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobUnlockCodeCommandOutput) => void
  ): void;
  public getJobUnlockCode(
    args: GetJobUnlockCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobUnlockCodeCommandOutput) => void),
    cb?: (err: any, data?: GetJobUnlockCodeCommandOutput) => void
  ): Promise<GetJobUnlockCodeCommandOutput> | void {
    const command = new GetJobUnlockCodeCommand(args);
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
   * <p>Returns information about the Snowball service limit for your account, and also the
   *       number of Snowballs your account has in use.</p>
   *
   *          <p>The default service limit for the number of Snowballs that you can have at one time is
   *       1. If you want to increase your service limit, contact AWS Support.</p>
   */
  public getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSnowballUsageCommandOutput>;
  public getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    cb: (err: any, data?: GetSnowballUsageCommandOutput) => void
  ): void;
  public getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSnowballUsageCommandOutput) => void
  ): void;
  public getSnowballUsage(
    args: GetSnowballUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSnowballUsageCommandOutput) => void),
    cb?: (err: any, data?: GetSnowballUsageCommandOutput) => void
  ): Promise<GetSnowballUsageCommandOutput> | void {
    const command = new GetSnowballUsageCommand(args);
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
   * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
   *       <code>JobId</code>.</p>
   */
  public getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSoftwareUpdatesCommandOutput>;
  public getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    cb: (err: any, data?: GetSoftwareUpdatesCommandOutput) => void
  ): void;
  public getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSoftwareUpdatesCommandOutput) => void
  ): void;
  public getSoftwareUpdates(
    args: GetSoftwareUpdatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSoftwareUpdatesCommandOutput) => void),
    cb?: (err: any, data?: GetSoftwareUpdatesCommandOutput) => void
  ): Promise<GetSoftwareUpdatesCommandOutput> | void {
    const command = new GetSoftwareUpdatesCommand(args);
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
   * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
   *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
   *       state, a job's ID, and other information.</p>
   */
  public listClusterJobs(
    args: ListClusterJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterJobsCommandOutput>;
  public listClusterJobs(
    args: ListClusterJobsCommandInput,
    cb: (err: any, data?: ListClusterJobsCommandOutput) => void
  ): void;
  public listClusterJobs(
    args: ListClusterJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterJobsCommandOutput) => void
  ): void;
  public listClusterJobs(
    args: ListClusterJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClusterJobsCommandOutput) => void),
    cb?: (err: any, data?: ListClusterJobsCommandOutput) => void
  ): Promise<ListClusterJobsCommandOutput> | void {
    const command = new ListClusterJobsCommand(args);
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
   * <p>Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each
   *         <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other
   *       important status information.</p>
   */
  public listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  public listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  public listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClustersCommandOutput) => void),
    cb?: (err: any, data?: ListClustersCommandOutput) => void
  ): Promise<ListClustersCommandOutput> | void {
    const command = new ListClustersCommand(args);
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
   * <p>This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs)
   *       that are owned by your AWS account that would be supported for use on a Snowball Edge device.
   *       Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server
   *       14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS
   *       Marketplace.</p>
   */
  public listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompatibleImagesCommandOutput>;
  public listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    cb: (err: any, data?: ListCompatibleImagesCommandOutput) => void
  ): void;
  public listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompatibleImagesCommandOutput) => void
  ): void;
  public listCompatibleImages(
    args: ListCompatibleImagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCompatibleImagesCommandOutput) => void),
    cb?: (err: any, data?: ListCompatibleImagesCommandOutput) => void
  ): Promise<ListCompatibleImagesCommandOutput> | void {
    const command = new ListCompatibleImagesCommand(args);
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
   * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
   *         <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that
   *       indicates whether the job is a job part, in the case of export jobs. Calling this API action
   *       in one of the US regions will return jobs from the list of all jobs associated with this
   *       account in all US regions.</p>
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
   * <p>While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code>
   *       state, you can update some of the information associated with a cluster. Once the cluster
   *       changes to a different job state, usually 60 minutes after the cluster being created, this
   *       action is no longer available.</p>
   */
  public updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  public updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterCommandOutput) => void
  ): Promise<UpdateClusterCommandOutput> | void {
    const command = new UpdateClusterCommand(args);
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
   * <p>While a job's <code>JobState</code> value is <code>New</code>, you can update some of
   *       the information associated with a job. Once the job changes to a different job state, usually
   *       within 60 minutes of the job being created, this action is no longer available.</p>
   */
  public updateJob(args: UpdateJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJobCommandOutput>;
  public updateJob(args: UpdateJobCommandInput, cb: (err: any, data?: UpdateJobCommandOutput) => void): void;
  public updateJob(
    args: UpdateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJobCommandOutput) => void
  ): void;
  public updateJob(
    args: UpdateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateJobCommandOutput) => void),
    cb?: (err: any, data?: UpdateJobCommandOutput) => void
  ): Promise<UpdateJobCommandOutput> | void {
    const command = new UpdateJobCommand(args);
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
