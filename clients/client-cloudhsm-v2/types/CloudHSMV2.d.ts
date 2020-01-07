import { CloudHSMV2Client } from "./CloudHSMV2Client";
import { CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput } from "./commands/CopyBackupToRegionCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "./commands/CreateHsmCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "./commands/DeleteBackupCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "./commands/DeleteHsmCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "./commands/DescribeBackupsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import { InitializeClusterCommandInput, InitializeClusterCommandOutput } from "./commands/InitializeClusterCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { RestoreBackupCommandInput, RestoreBackupCommandOutput } from "./commands/RestoreBackupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS
 *       CloudHSM User Guide</a>.</p>
 */
export declare class CloudHSMV2 extends CloudHSMV2Client {
    /**
     * <p>Copy an AWS CloudHSM cluster backup to a different region.</p>
     */
    copyBackupToRegion(args: CopyBackupToRegionCommandInput, options?: __HttpHandlerOptions): Promise<CopyBackupToRegionCommandOutput>;
    copyBackupToRegion(args: CopyBackupToRegionCommandInput, cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void): void;
    copyBackupToRegion(args: CopyBackupToRegionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void): void;
    /**
     * <p>Creates a new AWS CloudHSM cluster.</p>
     */
    createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
    createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    createCluster(args: CreateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM
     *       cluster.</p>
     */
    createHsm(args: CreateHsmCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmCommandOutput>;
    createHsm(args: CreateHsmCommandInput, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
    createHsm(args: CreateHsmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
    /**
     * <p>Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days
     *             after the DeleteBackup request is made. For more information on restoring a backup, see
     *                 <a>RestoreBackup</a>.</p>
     */
    deleteBackup(args: DeleteBackupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBackupCommandOutput>;
    deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
    deleteBackup(args: DeleteBackupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must
     *       delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.</p>
     */
    deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
    deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    deleteCluster(args: DeleteClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    /**
     * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
     *       address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
     *       specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
     */
    deleteHsm(args: DeleteHsmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmCommandOutput>;
    deleteHsm(args: DeleteHsmCommandInput, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
    deleteHsm(args: DeleteHsmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
    /**
     * <p>Gets information about backups of AWS CloudHSM clusters.</p>
     *          <p>This is a paginated operation, which means that each response might contain only a
     *       subset of all the backups. When the response contains only a subset of backups, it includes a
     *         <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code>
     *       request to get more backups. When you receive a response with no <code>NextToken</code> (or an
     *       empty or null value), that means there are no more backups to get.</p>
     */
    describeBackups(args: DescribeBackupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBackupsCommandOutput>;
    describeBackups(args: DescribeBackupsCommandInput, cb: (err: any, data?: DescribeBackupsCommandOutput) => void): void;
    describeBackups(args: DescribeBackupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBackupsCommandOutput) => void): void;
    /**
     * <p>Gets information about AWS CloudHSM clusters.</p>
     *          <p>This is a paginated operation, which means that each response might contain only a
     *       subset of all the clusters. When the response contains only a subset of clusters, it includes
     *       a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code>
     *       request to get more clusters. When you receive a response with no <code>NextToken</code> (or
     *       an empty or null value), that means there are no more clusters to get.</p>
     */
    describeClusters(args: DescribeClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClustersCommandOutput>;
    describeClusters(args: DescribeClustersCommandInput, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    describeClusters(args: DescribeClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    /**
     * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
     *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
     *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
     *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
     */
    initializeCluster(args: InitializeClusterCommandInput, options?: __HttpHandlerOptions): Promise<InitializeClusterCommandOutput>;
    initializeCluster(args: InitializeClusterCommandInput, cb: (err: any, data?: InitializeClusterCommandOutput) => void): void;
    initializeCluster(args: InitializeClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitializeClusterCommandOutput) => void): void;
    /**
     * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p>
     *          <p>This is a paginated operation, which means that each response might contain only a
     *       subset of all the tags. When the response contains only a subset of tags, it includes a
     *       <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to
     *       get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null
     *       value), that means there are no more tags to get.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Restores a specified AWS CloudHSM backup that is in the
     *                 <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see
     *                 <a>DeleteBackup</a>.</p>
     */
    restoreBackup(args: RestoreBackupCommandInput, options?: __HttpHandlerOptions): Promise<RestoreBackupCommandOutput>;
    restoreBackup(args: RestoreBackupCommandInput, cb: (err: any, data?: RestoreBackupCommandOutput) => void): void;
    restoreBackup(args: RestoreBackupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreBackupCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tag or tags from the specified AWS CloudHSM cluster.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
