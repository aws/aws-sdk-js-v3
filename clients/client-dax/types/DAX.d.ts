import { DAXClient } from "./DAXClient";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateParameterGroupCommandInput, CreateParameterGroupCommandOutput } from "./commands/CreateParameterGroupCommand";
import { CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput } from "./commands/CreateSubnetGroupCommand";
import { DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput } from "./commands/DecreaseReplicationFactorCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteParameterGroupCommandInput, DeleteParameterGroupCommandOutput } from "./commands/DeleteParameterGroupCommand";
import { DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput } from "./commands/DeleteSubnetGroupCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import { DescribeDefaultParametersCommandInput, DescribeDefaultParametersCommandOutput } from "./commands/DescribeDefaultParametersCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeParameterGroupsCommandInput, DescribeParameterGroupsCommandOutput } from "./commands/DescribeParameterGroupsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand";
import { DescribeSubnetGroupsCommandInput, DescribeSubnetGroupsCommandOutput } from "./commands/DescribeSubnetGroupsCommand";
import { IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput } from "./commands/IncreaseReplicationFactorCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { RebootNodeCommandInput, RebootNodeCommandOutput } from "./commands/RebootNodeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import { UpdateParameterGroupCommandInput, UpdateParameterGroupCommandOutput } from "./commands/UpdateParameterGroupCommand";
import { UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput } from "./commands/UpdateSubnetGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>DAX is a managed caching service engineered for Amazon DynamoDB. DAX
 *             dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so
 *             applications can access that data with sub-millisecond latency. You can create a DAX
 *             cluster easily, using the AWS Management Console. With a few simple modifications to
 *             your code, your application can begin taking advantage of the DAX cluster and realize
 *             significant improvements in read performance.</p>
 */
export declare class DAX extends DAXClient {
    /**
     * <p>Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.</p>
     */
    createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
    createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    createCluster(args: CreateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new parameter group. A parameter group is a collection of parameters that
     *             you apply to all of the nodes in a DAX cluster.</p>
     */
    createParameterGroup(args: CreateParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateParameterGroupCommandOutput>;
    createParameterGroup(args: CreateParameterGroupCommandInput, cb: (err: any, data?: CreateParameterGroupCommandOutput) => void): void;
    createParameterGroup(args: CreateParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new subnet group.</p>
     */
    createSubnetGroup(args: CreateSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateSubnetGroupCommandOutput>;
    createSubnetGroup(args: CreateSubnetGroupCommandInput, cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void): void;
    createSubnetGroup(args: CreateSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Removes one or more nodes from a DAX cluster.</p>
     *         <note>
     *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
     *          </note>
     */
    decreaseReplicationFactor(args: DecreaseReplicationFactorCommandInput, options?: __HttpHandlerOptions): Promise<DecreaseReplicationFactorCommandOutput>;
    decreaseReplicationFactor(args: DecreaseReplicationFactorCommandInput, cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void): void;
    decreaseReplicationFactor(args: DecreaseReplicationFactorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void): void;
    /**
     * <p>Deletes a previously provisioned DAX cluster.
     *                 <i>DeleteCluster</i> deletes all associated nodes, node endpoints
     *             and the DAX cluster itself. When you receive a successful response from this action,
     *             DAX immediately begins deleting the cluster; you cannot cancel or revert this
     *             action.</p>
     */
    deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
    deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    deleteCluster(args: DeleteClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    /**
     * <p>Deletes the specified parameter group. You cannot delete a parameter group if it is
     *             associated with any DAX clusters.</p>
     */
    deleteParameterGroup(args: DeleteParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteParameterGroupCommandOutput>;
    deleteParameterGroup(args: DeleteParameterGroupCommandInput, cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void): void;
    deleteParameterGroup(args: DeleteParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a subnet group.</p>
     *         <note>
     *             <p>You cannot delete a subnet group if it is associated with any DAX
     *                 clusters.</p>
     *         </note>
     */
    deleteSubnetGroup(args: DeleteSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSubnetGroupCommandOutput>;
    deleteSubnetGroup(args: DeleteSubnetGroupCommandInput, cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void): void;
    deleteSubnetGroup(args: DeleteSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Returns information about all provisioned DAX clusters if no cluster identifier
     *             is specified, or about a specific DAX cluster if a cluster identifier is
     *             supplied.</p>
     *         <p>If the cluster is in the CREATING state, only cluster level information will be
     *             displayed until all of the nodes are successfully provisioned.</p>
     *         <p>If the cluster is in the DELETING state, only cluster level information will be
     *             displayed.</p>
     *         <p>If nodes are currently being added to the DAX cluster, node endpoint information
     *             and creation time for the additional nodes will not be displayed until they are
     *             completely provisioned. When the DAX cluster state is <i>available</i>,
     *             the cluster is ready for use.</p>
     *         <p>If nodes are currently being removed from the DAX cluster, no endpoint
     *             information for the removed nodes is displayed.</p>
     */
    describeClusters(args: DescribeClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClustersCommandOutput>;
    describeClusters(args: DescribeClustersCommandInput, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    describeClusters(args: DescribeClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    /**
     * <p>Returns the default system parameter information for the DAX caching
     *             software.</p>
     */
    describeDefaultParameters(args: DescribeDefaultParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDefaultParametersCommandOutput>;
    describeDefaultParameters(args: DescribeDefaultParametersCommandInput, cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void): void;
    describeDefaultParameters(args: DescribeDefaultParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void): void;
    /**
     * <p>Returns events related to DAX clusters and parameter groups. You can obtain
     *             events specific to a particular DAX cluster or parameter group by providing the name
     *             as a parameter.</p>
     *         <p>By default, only the events occurring within the last 24 hours are returned; however,
     *             you can retrieve up to 14 days' worth of events if necessary.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns a list of parameter group descriptions. If a parameter group name is
     *             specified, the list will contain only the descriptions for that group.</p>
     */
    describeParameterGroups(args: DescribeParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeParameterGroupsCommandOutput>;
    describeParameterGroups(args: DescribeParameterGroupsCommandInput, cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void): void;
    describeParameterGroups(args: DescribeParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns the detailed parameter list for a particular parameter group.</p>
     */
    describeParameters(args: DescribeParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeParametersCommandOutput>;
    describeParameters(args: DescribeParametersCommandInput, cb: (err: any, data?: DescribeParametersCommandOutput) => void): void;
    describeParameters(args: DescribeParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeParametersCommandOutput) => void): void;
    /**
     * <p>Returns a list of subnet group descriptions. If a subnet group name is specified,
     *             the list will contain only the description of that group.</p>
     */
    describeSubnetGroups(args: DescribeSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSubnetGroupsCommandOutput>;
    describeSubnetGroups(args: DescribeSubnetGroupsCommandInput, cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void): void;
    describeSubnetGroups(args: DescribeSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Adds one or more nodes to a DAX cluster.</p>
     */
    increaseReplicationFactor(args: IncreaseReplicationFactorCommandInput, options?: __HttpHandlerOptions): Promise<IncreaseReplicationFactorCommandOutput>;
    increaseReplicationFactor(args: IncreaseReplicationFactorCommandInput, cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void): void;
    increaseReplicationFactor(args: IncreaseReplicationFactorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void): void;
    /**
     * <p>List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to
     *             10 times per second, per account.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Reboots a single node of a DAX cluster. The reboot action takes place
     *             as soon as possible. During the
     *             reboot, the node status is set to REBOOTING.</p>
     *         <note>
     *             <p>
     *                <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache.  </p>
     *         </note>
     */
    rebootNode(args: RebootNodeCommandInput, options?: __HttpHandlerOptions): Promise<RebootNodeCommandOutput>;
    rebootNode(args: RebootNodeCommandInput, cb: (err: any, data?: RebootNodeCommandOutput) => void): void;
    rebootNode(args: RebootNodeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootNodeCommandOutput) => void): void;
    /**
     * <p>Associates a set of tags with a DAX resource.  You can call <code>TagResource</code> up to 5 times per second, per
     *             account. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the association of tags from a DAX resource. You can call
     *             <code>UntagResource</code> up to 5 times per second, per account. </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a DAX cluster. You can use this action to change one or
     *             more cluster configuration parameters by specifying the parameters and the new
     *             values.</p>
     */
    updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
    updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
    updateCluster(args: UpdateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a parameter group. You can modify up to 20
     *             parameters in a single request by submitting a list parameter name and value
     *             pairs.</p>
     */
    updateParameterGroup(args: UpdateParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateParameterGroupCommandOutput>;
    updateParameterGroup(args: UpdateParameterGroupCommandInput, cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void): void;
    updateParameterGroup(args: UpdateParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void): void;
    /**
     * <p>Modifies an existing subnet group.</p>
     */
    updateSubnetGroup(args: UpdateSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSubnetGroupCommandOutput>;
    updateSubnetGroup(args: UpdateSubnetGroupCommandInput, cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void): void;
    updateSubnetGroup(args: UpdateSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void): void;
}
