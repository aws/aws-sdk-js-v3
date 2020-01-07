import { EMRClient } from "./EMRClient";
import { AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput } from "./commands/AddInstanceFleetCommand";
import { AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput } from "./commands/AddInstanceGroupsCommand";
import { AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput } from "./commands/AddJobFlowStepsCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelStepsCommandInput, CancelStepsCommandOutput } from "./commands/CancelStepsCommand";
import { CreateSecurityConfigurationCommandInput, CreateSecurityConfigurationCommandOutput } from "./commands/CreateSecurityConfigurationCommand";
import { DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput } from "./commands/DeleteSecurityConfigurationCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import { DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput } from "./commands/DescribeJobFlowsCommand";
import { DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput } from "./commands/DescribeSecurityConfigurationCommand";
import { DescribeStepCommandInput, DescribeStepCommandOutput } from "./commands/DescribeStepCommand";
import { GetBlockPublicAccessConfigurationCommandInput, GetBlockPublicAccessConfigurationCommandOutput } from "./commands/GetBlockPublicAccessConfigurationCommand";
import { ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput } from "./commands/ListBootstrapActionsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput } from "./commands/ListInstanceFleetsCommand";
import { ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput } from "./commands/ListInstanceGroupsCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import { ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput } from "./commands/ListSecurityConfigurationsCommand";
import { ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand";
import { ModifyInstanceFleetCommandInput, ModifyInstanceFleetCommandOutput } from "./commands/ModifyInstanceFleetCommand";
import { ModifyInstanceGroupsCommandInput, ModifyInstanceGroupsCommandOutput } from "./commands/ModifyInstanceGroupsCommand";
import { PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput } from "./commands/PutAutoScalingPolicyCommand";
import { PutBlockPublicAccessConfigurationCommandInput, PutBlockPublicAccessConfigurationCommandOutput } from "./commands/PutBlockPublicAccessConfigurationCommand";
import { RemoveAutoScalingPolicyCommandInput, RemoveAutoScalingPolicyCommandOutput } from "./commands/RemoveAutoScalingPolicyCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { RunJobFlowCommandInput, RunJobFlowCommandOutput } from "./commands/RunJobFlowCommand";
import { SetTerminationProtectionCommandInput, SetTerminationProtectionCommandOutput } from "./commands/SetTerminationProtectionCommand";
import { SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput } from "./commands/SetVisibleToAllUsersCommand";
import { TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput } from "./commands/TerminateJobFlowsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon EMR is a web service that makes it easy to process large amounts of data efficiently. Amazon EMR uses Hadoop processing combined with several AWS products to do tasks such as web indexing, data mining, log file analysis, machine learning, scientific simulation, and data warehousing.</p>
 */
export declare class EMR extends EMRClient {
    /**
     * <p>Adds an instance fleet to a running cluster.</p>
     *          <note>
     *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p>
     *          </note>
     */
    addInstanceFleet(args: AddInstanceFleetCommandInput, options?: __HttpHandlerOptions): Promise<AddInstanceFleetCommandOutput>;
    addInstanceFleet(args: AddInstanceFleetCommandInput, cb: (err: any, data?: AddInstanceFleetCommandOutput) => void): void;
    addInstanceFleet(args: AddInstanceFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddInstanceFleetCommandOutput) => void): void;
    /**
     * <p>Adds one or more instance groups to a running cluster.</p>
     */
    addInstanceGroups(args: AddInstanceGroupsCommandInput, options?: __HttpHandlerOptions): Promise<AddInstanceGroupsCommandOutput>;
    addInstanceGroups(args: AddInstanceGroupsCommandInput, cb: (err: any, data?: AddInstanceGroupsCommandOutput) => void): void;
    addInstanceGroups(args: AddInstanceGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddInstanceGroupsCommandOutput) => void): void;
    /**
     * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p>
     *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
     *          <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p>
     *          <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p>
     *          <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p>
     */
    addJobFlowSteps(args: AddJobFlowStepsCommandInput, options?: __HttpHandlerOptions): Promise<AddJobFlowStepsCommandOutput>;
    addJobFlowSteps(args: AddJobFlowStepsCommandInput, cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void): void;
    addJobFlowSteps(args: AddJobFlowStepsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddJobFlowStepsCommandOutput) => void): void;
    /**
     * <p>Adds tags to an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
     *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.
     *       </p>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee a step will be canceled, even if the request is successfully submitted. You can only cancel steps that are in a <code>PENDING</code> state.</p>
     */
    cancelSteps(args: CancelStepsCommandInput, options?: __HttpHandlerOptions): Promise<CancelStepsCommandOutput>;
    cancelSteps(args: CancelStepsCommandInput, cb: (err: any, data?: CancelStepsCommandOutput) => void): void;
    cancelSteps(args: CancelStepsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelStepsCommandOutput) => void): void;
    /**
     * <p>Creates a security configuration, which is stored in the service and can be specified when a cluster is created.</p>
     */
    createSecurityConfiguration(args: CreateSecurityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateSecurityConfigurationCommandOutput>;
    createSecurityConfiguration(args: CreateSecurityConfigurationCommandInput, cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void): void;
    createSecurityConfiguration(args: CreateSecurityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSecurityConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes a security configuration.</p>
     */
    deleteSecurityConfiguration(args: DeleteSecurityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSecurityConfigurationCommandOutput>;
    deleteSecurityConfiguration(args: DeleteSecurityConfigurationCommandInput, cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void): void;
    deleteSecurityConfiguration(args: DeleteSecurityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSecurityConfigurationCommandOutput) => void): void;
    /**
     * <p>Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on. </p>
     */
    describeCluster(args: DescribeClusterCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterCommandOutput>;
    describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
    describeCluster(args: DescribeClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
    /**
     * <p>This API is deprecated and will eventually be removed. We recommend you use <a>ListClusters</a>,
     *          <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a>
     *          instead.</p>
     *          <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p>
     *          <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p>
     *          <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p>
     *          <ul>
     *             <li>
     *                <p>Job flows created and completed in the last two weeks</p>
     *             </li>
     *             <li>
     *                <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>,
     *                <code>STARTING</code>
     *                </p>
     *             </li>
     *          </ul>
     *          <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
     */
    describeJobFlows(args: DescribeJobFlowsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobFlowsCommandOutput>;
    describeJobFlows(args: DescribeJobFlowsCommandInput, cb: (err: any, data?: DescribeJobFlowsCommandOutput) => void): void;
    describeJobFlows(args: DescribeJobFlowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobFlowsCommandOutput) => void): void;
    /**
     * <p>Provides the details of a security configuration by returning the configuration JSON.</p>
     */
    describeSecurityConfiguration(args: DescribeSecurityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSecurityConfigurationCommandOutput>;
    describeSecurityConfiguration(args: DescribeSecurityConfigurationCommandInput, cb: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void): void;
    describeSecurityConfiguration(args: DescribeSecurityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSecurityConfigurationCommandOutput) => void): void;
    /**
     * <p>Provides more detail about the cluster step.</p>
     */
    describeStep(args: DescribeStepCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStepCommandOutput>;
    describeStep(args: DescribeStepCommandInput, cb: (err: any, data?: DescribeStepCommandOutput) => void): void;
    describeStep(args: DescribeStepCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStepCommandOutput) => void): void;
    /**
     * <p>Returns the Amazon EMR block public access configuration for your AWS account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.</p>
     */
    getBlockPublicAccessConfiguration(args: GetBlockPublicAccessConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetBlockPublicAccessConfigurationCommandOutput>;
    getBlockPublicAccessConfiguration(args: GetBlockPublicAccessConfigurationCommandInput, cb: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void): void;
    getBlockPublicAccessConfiguration(args: GetBlockPublicAccessConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBlockPublicAccessConfigurationCommandOutput) => void): void;
    /**
     * <p>Provides information about the bootstrap actions associated with a cluster.</p>
     */
    listBootstrapActions(args: ListBootstrapActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListBootstrapActionsCommandOutput>;
    listBootstrapActions(args: ListBootstrapActionsCommandInput, cb: (err: any, data?: ListBootstrapActionsCommandOutput) => void): void;
    listBootstrapActions(args: ListBootstrapActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBootstrapActionsCommandOutput) => void): void;
    /**
     * <p>Provides the status of all clusters visible to this AWS account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.</p>
     */
    listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
    listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    listClusters(args: ListClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    /**
     * <p>Lists all available details about the instance fleets in a cluster.</p>
     *          <note>
     *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
     *          </note>
     */
    listInstanceFleets(args: ListInstanceFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceFleetsCommandOutput>;
    listInstanceFleets(args: ListInstanceFleetsCommandInput, cb: (err: any, data?: ListInstanceFleetsCommandOutput) => void): void;
    listInstanceFleets(args: ListInstanceFleetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceFleetsCommandOutput) => void): void;
    /**
     * <p>Provides all available details about the instance groups in a cluster.</p>
     */
    listInstanceGroups(args: ListInstanceGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListInstanceGroupsCommandOutput>;
    listInstanceGroups(args: ListInstanceGroupsCommandInput, cb: (err: any, data?: ListInstanceGroupsCommandOutput) => void): void;
    listInstanceGroups(args: ListInstanceGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstanceGroupsCommandOutput) => void): void;
    /**
     * <p>Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.</p>
     */
    listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
    listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    listInstances(args: ListInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
    /**
     * <p>Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.</p>
     */
    listSecurityConfigurations(args: ListSecurityConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListSecurityConfigurationsCommandOutput>;
    listSecurityConfigurations(args: ListSecurityConfigurationsCommandInput, cb: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void): void;
    listSecurityConfigurations(args: ListSecurityConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSecurityConfigurationsCommandOutput) => void): void;
    /**
     * <p>Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request of filter by <code>StepStates</code>. You can specify a maximum of ten <code>stepIDs</code>.</p>
     */
    listSteps(args: ListStepsCommandInput, options?: __HttpHandlerOptions): Promise<ListStepsCommandOutput>;
    listSteps(args: ListStepsCommandInput, cb: (err: any, data?: ListStepsCommandOutput) => void): void;
    listSteps(args: ListStepsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListStepsCommandOutput) => void): void;
    /**
     * <p>Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.</p>
     */
    modifyCluster(args: ModifyClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterCommandOutput>;
    modifyCluster(args: ModifyClusterCommandInput, cb: (err: any, data?: ModifyClusterCommandOutput) => void): void;
    modifyCluster(args: ModifyClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterCommandOutput) => void): void;
    /**
     * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p>
     *          <note>
     *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p>
     *          </note>
     */
    modifyInstanceFleet(args: ModifyInstanceFleetCommandInput, options?: __HttpHandlerOptions): Promise<ModifyInstanceFleetCommandOutput>;
    modifyInstanceFleet(args: ModifyInstanceFleetCommandInput, cb: (err: any, data?: ModifyInstanceFleetCommandOutput) => void): void;
    modifyInstanceFleet(args: ModifyInstanceFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyInstanceFleetCommandOutput) => void): void;
    /**
     * <p>ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.</p>
     */
    modifyInstanceGroups(args: ModifyInstanceGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ModifyInstanceGroupsCommandOutput>;
    modifyInstanceGroups(args: ModifyInstanceGroupsCommandInput, cb: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void): void;
    modifyInstanceGroups(args: ModifyInstanceGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyInstanceGroupsCommandOutput) => void): void;
    /**
     * <p>Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.</p>
     */
    putAutoScalingPolicy(args: PutAutoScalingPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutAutoScalingPolicyCommandOutput>;
    putAutoScalingPolicy(args: PutAutoScalingPolicyCommandInput, cb: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void): void;
    putAutoScalingPolicy(args: PutAutoScalingPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutAutoScalingPolicyCommandOutput) => void): void;
    /**
     * <p>Creates or updates an Amazon EMR block public access configuration for your AWS account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.</p>
     */
    putBlockPublicAccessConfiguration(args: PutBlockPublicAccessConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutBlockPublicAccessConfigurationCommandOutput>;
    putBlockPublicAccessConfiguration(args: PutBlockPublicAccessConfigurationCommandInput, cb: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void): void;
    putBlockPublicAccessConfiguration(args: PutBlockPublicAccessConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutBlockPublicAccessConfigurationCommandOutput) => void): void;
    /**
     * <p>Removes an automatic scaling policy from a specified instance group within an EMR cluster.</p>
     */
    removeAutoScalingPolicy(args: RemoveAutoScalingPolicyCommandInput, options?: __HttpHandlerOptions): Promise<RemoveAutoScalingPolicyCommandOutput>;
    removeAutoScalingPolicy(args: RemoveAutoScalingPolicyCommandInput, cb: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void): void;
    removeAutoScalingPolicy(args: RemoveAutoScalingPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveAutoScalingPolicyCommandOutput) => void): void;
    /**
     * <p>Removes tags from an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
     *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>.
     *       </p>
     *          <p>The following example removes the stack tag with value Prod from a cluster:</p>
     */
    removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
    removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    removeTags(args: RemoveTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
    /**
     * <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps
     *          specified. After the steps complete, the cluster stops and the HDFS partition is
     *          lost. To prevent loss of data, configure the last step of the job flow to store results in
     *          Amazon S3. If the <a>JobFlowInstancesConfig</a>
     *             <code>KeepJobFlowAliveWhenNoSteps</code> parameter is
     *          set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p>
     *
     *          <p>For additional protection, you can set the
     *          <a>JobFlowInstancesConfig</a>
     *             <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the
     *          cluster and prevent it from being
     *          terminated by API call, user intervention, or in the event of a job flow error.</p>
     *
     *          <p>A maximum of 256 steps are allowed in each job flow.</p>
     *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
     *          <p>For long running clusters, we recommend that you periodically store your results.</p>
     *          <note>
     *             <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p>
     *          </note>
     */
    runJobFlow(args: RunJobFlowCommandInput, options?: __HttpHandlerOptions): Promise<RunJobFlowCommandOutput>;
    runJobFlow(args: RunJobFlowCommandInput, cb: (err: any, data?: RunJobFlowCommandOutput) => void): void;
    runJobFlow(args: RunJobFlowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RunJobFlowCommandOutput) => void): void;
    /**
     * <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p>
     *          <p>
     *             <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p>
     *
     *          <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>,
     *          you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code>
     *          in which you set the value to <code>false</code>. </p>
     *          <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the
     *          <i>Amazon EMR Management Guide</i>.
     *       </p>
     */
    setTerminationProtection(args: SetTerminationProtectionCommandInput, options?: __HttpHandlerOptions): Promise<SetTerminationProtectionCommandOutput>;
    setTerminationProtection(args: SetTerminationProtectionCommandInput, cb: (err: any, data?: SetTerminationProtectionCommandOutput) => void): void;
    setTerminationProtection(args: SetTerminationProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetTerminationProtectionCommandOutput) => void): void;
    /**
     * <p>Sets the <a>Cluster$VisibleToAllUsers</a> value, which determines whether the cluster is visible to all IAM users of the AWS account associated with the cluster. Only the IAM user who created the cluster or the AWS account root user can call this action. The default value, <code>true</code>, indicates that all IAM users in the AWS account can perform cluster actions if they have the proper IAM policy permissions. If set to <code>false</code>, only the IAM user that created the cluster can perform actions. This action works on running clusters. You can override the default <code>true</code> setting when you create a cluster by using the <code>VisibleToAllUsers</code> parameter with <code>RunJobFlow</code>.</p>
     */
    setVisibleToAllUsers(args: SetVisibleToAllUsersCommandInput, options?: __HttpHandlerOptions): Promise<SetVisibleToAllUsersCommandOutput>;
    setVisibleToAllUsers(args: SetVisibleToAllUsersCommandInput, cb: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void): void;
    setVisibleToAllUsers(args: SetVisibleToAllUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetVisibleToAllUsersCommandOutput) => void): void;
    /**
     * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p>
     *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
     */
    terminateJobFlows(args: TerminateJobFlowsCommandInput, options?: __HttpHandlerOptions): Promise<TerminateJobFlowsCommandOutput>;
    terminateJobFlows(args: TerminateJobFlowsCommandInput, cb: (err: any, data?: TerminateJobFlowsCommandOutput) => void): void;
    terminateJobFlows(args: TerminateJobFlowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateJobFlowsCommandOutput) => void): void;
}
