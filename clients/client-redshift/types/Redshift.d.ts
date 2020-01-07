import { RedshiftClient } from "./RedshiftClient";
import { AcceptReservedNodeExchangeCommandInput, AcceptReservedNodeExchangeCommandOutput } from "./commands/AcceptReservedNodeExchangeCommand";
import { AuthorizeClusterSecurityGroupIngressCommandInput, AuthorizeClusterSecurityGroupIngressCommandOutput } from "./commands/AuthorizeClusterSecurityGroupIngressCommand";
import { AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput } from "./commands/AuthorizeSnapshotAccessCommand";
import { BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput } from "./commands/BatchDeleteClusterSnapshotsCommand";
import { BatchModifyClusterSnapshotsCommandInput, BatchModifyClusterSnapshotsCommandOutput } from "./commands/BatchModifyClusterSnapshotsCommand";
import { CancelResizeCommandInput, CancelResizeCommandOutput } from "./commands/CancelResizeCommand";
import { CopyClusterSnapshotCommandInput, CopyClusterSnapshotCommandOutput } from "./commands/CopyClusterSnapshotCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateClusterParameterGroupCommandInput, CreateClusterParameterGroupCommandOutput } from "./commands/CreateClusterParameterGroupCommand";
import { CreateClusterSecurityGroupCommandInput, CreateClusterSecurityGroupCommandOutput } from "./commands/CreateClusterSecurityGroupCommand";
import { CreateClusterSnapshotCommandInput, CreateClusterSnapshotCommandOutput } from "./commands/CreateClusterSnapshotCommand";
import { CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput } from "./commands/CreateClusterSubnetGroupCommand";
import { CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput } from "./commands/CreateEventSubscriptionCommand";
import { CreateHsmClientCertificateCommandInput, CreateHsmClientCertificateCommandOutput } from "./commands/CreateHsmClientCertificateCommand";
import { CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput } from "./commands/CreateHsmConfigurationCommand";
import { CreateScheduledActionCommandInput, CreateScheduledActionCommandOutput } from "./commands/CreateScheduledActionCommand";
import { CreateSnapshotCopyGrantCommandInput, CreateSnapshotCopyGrantCommandOutput } from "./commands/CreateSnapshotCopyGrantCommand";
import { CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput } from "./commands/CreateSnapshotScheduleCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteClusterParameterGroupCommandInput, DeleteClusterParameterGroupCommandOutput } from "./commands/DeleteClusterParameterGroupCommand";
import { DeleteClusterSecurityGroupCommandInput, DeleteClusterSecurityGroupCommandOutput } from "./commands/DeleteClusterSecurityGroupCommand";
import { DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput } from "./commands/DeleteClusterSnapshotCommand";
import { DeleteClusterSubnetGroupCommandInput, DeleteClusterSubnetGroupCommandOutput } from "./commands/DeleteClusterSubnetGroupCommand";
import { DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput } from "./commands/DeleteEventSubscriptionCommand";
import { DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput } from "./commands/DeleteHsmClientCertificateCommand";
import { DeleteHsmConfigurationCommandInput, DeleteHsmConfigurationCommandOutput } from "./commands/DeleteHsmConfigurationCommand";
import { DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput } from "./commands/DeleteScheduledActionCommand";
import { DeleteSnapshotCopyGrantCommandInput, DeleteSnapshotCopyGrantCommandOutput } from "./commands/DeleteSnapshotCopyGrantCommand";
import { DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput } from "./commands/DeleteSnapshotScheduleCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput } from "./commands/DescribeAccountAttributesCommand";
import { DescribeClusterDbRevisionsCommandInput, DescribeClusterDbRevisionsCommandOutput } from "./commands/DescribeClusterDbRevisionsCommand";
import { DescribeClusterParameterGroupsCommandInput, DescribeClusterParameterGroupsCommandOutput } from "./commands/DescribeClusterParameterGroupsCommand";
import { DescribeClusterParametersCommandInput, DescribeClusterParametersCommandOutput } from "./commands/DescribeClusterParametersCommand";
import { DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput } from "./commands/DescribeClusterSecurityGroupsCommand";
import { DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput } from "./commands/DescribeClusterSnapshotsCommand";
import { DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput } from "./commands/DescribeClusterSubnetGroupsCommand";
import { DescribeClusterTracksCommandInput, DescribeClusterTracksCommandOutput } from "./commands/DescribeClusterTracksCommand";
import { DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput } from "./commands/DescribeClusterVersionsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import { DescribeDefaultClusterParametersCommandInput, DescribeDefaultClusterParametersCommandOutput } from "./commands/DescribeDefaultClusterParametersCommand";
import { DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput } from "./commands/DescribeEventCategoriesCommand";
import { DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput } from "./commands/DescribeEventSubscriptionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import { DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput } from "./commands/DescribeHsmClientCertificatesCommand";
import { DescribeHsmConfigurationsCommandInput, DescribeHsmConfigurationsCommandOutput } from "./commands/DescribeHsmConfigurationsCommand";
import { DescribeLoggingStatusCommandInput, DescribeLoggingStatusCommandOutput } from "./commands/DescribeLoggingStatusCommand";
import { DescribeNodeConfigurationOptionsCommandInput, DescribeNodeConfigurationOptionsCommandOutput } from "./commands/DescribeNodeConfigurationOptionsCommand";
import { DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput } from "./commands/DescribeOrderableClusterOptionsCommand";
import { DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput } from "./commands/DescribeReservedNodeOfferingsCommand";
import { DescribeReservedNodesCommandInput, DescribeReservedNodesCommandOutput } from "./commands/DescribeReservedNodesCommand";
import { DescribeResizeCommandInput, DescribeResizeCommandOutput } from "./commands/DescribeResizeCommand";
import { DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput } from "./commands/DescribeScheduledActionsCommand";
import { DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput } from "./commands/DescribeSnapshotCopyGrantsCommand";
import { DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput } from "./commands/DescribeSnapshotSchedulesCommand";
import { DescribeStorageCommandInput, DescribeStorageCommandOutput } from "./commands/DescribeStorageCommand";
import { DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput } from "./commands/DescribeTableRestoreStatusCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { DisableLoggingCommandInput, DisableLoggingCommandOutput } from "./commands/DisableLoggingCommand";
import { DisableSnapshotCopyCommandInput, DisableSnapshotCopyCommandOutput } from "./commands/DisableSnapshotCopyCommand";
import { EnableLoggingCommandInput, EnableLoggingCommandOutput } from "./commands/EnableLoggingCommand";
import { EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput } from "./commands/EnableSnapshotCopyCommand";
import { GetClusterCredentialsCommandInput, GetClusterCredentialsCommandOutput } from "./commands/GetClusterCredentialsCommand";
import { GetReservedNodeExchangeOfferingsCommandInput, GetReservedNodeExchangeOfferingsCommandOutput } from "./commands/GetReservedNodeExchangeOfferingsCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand";
import { ModifyClusterDbRevisionCommandInput, ModifyClusterDbRevisionCommandOutput } from "./commands/ModifyClusterDbRevisionCommand";
import { ModifyClusterIamRolesCommandInput, ModifyClusterIamRolesCommandOutput } from "./commands/ModifyClusterIamRolesCommand";
import { ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput } from "./commands/ModifyClusterMaintenanceCommand";
import { ModifyClusterParameterGroupCommandInput, ModifyClusterParameterGroupCommandOutput } from "./commands/ModifyClusterParameterGroupCommand";
import { ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput } from "./commands/ModifyClusterSnapshotCommand";
import { ModifyClusterSnapshotScheduleCommandInput, ModifyClusterSnapshotScheduleCommandOutput } from "./commands/ModifyClusterSnapshotScheduleCommand";
import { ModifyClusterSubnetGroupCommandInput, ModifyClusterSubnetGroupCommandOutput } from "./commands/ModifyClusterSubnetGroupCommand";
import { ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput } from "./commands/ModifyEventSubscriptionCommand";
import { ModifyScheduledActionCommandInput, ModifyScheduledActionCommandOutput } from "./commands/ModifyScheduledActionCommand";
import { ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput } from "./commands/ModifySnapshotCopyRetentionPeriodCommand";
import { ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput } from "./commands/ModifySnapshotScheduleCommand";
import { PurchaseReservedNodeOfferingCommandInput, PurchaseReservedNodeOfferingCommandOutput } from "./commands/PurchaseReservedNodeOfferingCommand";
import { RebootClusterCommandInput, RebootClusterCommandOutput } from "./commands/RebootClusterCommand";
import { ResetClusterParameterGroupCommandInput, ResetClusterParameterGroupCommandOutput } from "./commands/ResetClusterParameterGroupCommand";
import { ResizeClusterCommandInput, ResizeClusterCommandOutput } from "./commands/ResizeClusterCommand";
import { RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput } from "./commands/RestoreFromClusterSnapshotCommand";
import { RestoreTableFromClusterSnapshotCommandInput, RestoreTableFromClusterSnapshotCommandOutput } from "./commands/RestoreTableFromClusterSnapshotCommand";
import { RevokeClusterSecurityGroupIngressCommandInput, RevokeClusterSecurityGroupIngressCommandOutput } from "./commands/RevokeClusterSecurityGroupIngressCommand";
import { RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput } from "./commands/RevokeSnapshotAccessCommand";
import { RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput } from "./commands/RotateEncryptionKeyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Redshift</fullname>
 *         <p>
 *             <b>Overview</b>
 *         </p>
 *         <p>This is an interface reference for Amazon Redshift. It contains documentation for one of
 *             the programming or command line interfaces you can use to manage Amazon Redshift clusters.
 *             Note that Amazon Redshift is asynchronous, which means that some interfaces may require
 *             techniques, such as polling or asynchronous callback handlers, to determine when a
 *             command has been applied. In this reference, the parameter descriptions indicate whether
 *             a change is applied immediately, on the next instance reboot, or during the next
 *             maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
 *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
 *                 Amazon Redshift Management Interfaces</a>.</p>
 *         <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
 *             warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
 *             patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
 *             acquire new insights for your business and customers.</p>
 *         <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
 *             the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>
 *
 *         <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
 *             build, query, and maintain the databases that make up your data warehouse. </p>
 */
export declare class Redshift extends RedshiftClient {
    /**
     * <p>Exchanges a DC1 Reserved Node for a DC2 Reserved Node with no changes to the
     *             configuration (term, payment type, or number of nodes) and no additional costs.
     *         </p>
     */
    acceptReservedNodeExchange(args: AcceptReservedNodeExchangeCommandInput, options?: __HttpHandlerOptions): Promise<AcceptReservedNodeExchangeCommandOutput>;
    acceptReservedNodeExchange(args: AcceptReservedNodeExchangeCommandInput, cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void): void;
    acceptReservedNodeExchange(args: AcceptReservedNodeExchangeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptReservedNodeExchangeCommandOutput) => void): void;
    /**
     * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
     *             the application accessing your cluster is running on the Internet or an Amazon EC2
     *             instance, you can authorize inbound access to either a Classless Interdomain Routing
     *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
     *             many as 20 ingress rules to an Amazon Redshift security group.</p>
     *         <p>If you authorize access to an Amazon EC2 security group, specify
     *                 <i>EC2SecurityGroupName</i> and
     *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
     *             Amazon Redshift cluster must be in the same AWS Region. </p>
     *         <p>If you authorize access to a CIDR/IP address range, specify
     *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
     *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
     *         <p>You must also associate the security group with a cluster so that clients running
     *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
     *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
     *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    authorizeClusterSecurityGroupIngress(args: AuthorizeClusterSecurityGroupIngressCommandInput, options?: __HttpHandlerOptions): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput>;
    authorizeClusterSecurityGroupIngress(args: AuthorizeClusterSecurityGroupIngressCommandInput, cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void): void;
    authorizeClusterSecurityGroupIngress(args: AuthorizeClusterSecurityGroupIngressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AuthorizeClusterSecurityGroupIngressCommandOutput) => void): void;
    /**
     * <p>Authorizes the specified AWS customer account to restore the specified
     *             snapshot.</p>
     *         <p>
     * For more information about working with snapshots, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    authorizeSnapshotAccess(args: AuthorizeSnapshotAccessCommandInput, options?: __HttpHandlerOptions): Promise<AuthorizeSnapshotAccessCommandOutput>;
    authorizeSnapshotAccess(args: AuthorizeSnapshotAccessCommandInput, cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void): void;
    authorizeSnapshotAccess(args: AuthorizeSnapshotAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AuthorizeSnapshotAccessCommandOutput) => void): void;
    /**
     * <p>Deletes a set of cluster snapshots.</p>
     */
    batchDeleteClusterSnapshots(args: BatchDeleteClusterSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteClusterSnapshotsCommandOutput>;
    batchDeleteClusterSnapshots(args: BatchDeleteClusterSnapshotsCommandInput, cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void): void;
    batchDeleteClusterSnapshots(args: BatchDeleteClusterSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteClusterSnapshotsCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a set of cluster snapshots.</p>
     */
    batchModifyClusterSnapshots(args: BatchModifyClusterSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<BatchModifyClusterSnapshotsCommandOutput>;
    batchModifyClusterSnapshots(args: BatchModifyClusterSnapshotsCommandInput, cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void): void;
    batchModifyClusterSnapshots(args: BatchModifyClusterSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchModifyClusterSnapshotsCommandOutput) => void): void;
    /**
     * <p>Cancels a resize operation for a cluster.</p>
     */
    cancelResize(args: CancelResizeCommandInput, options?: __HttpHandlerOptions): Promise<CancelResizeCommandOutput>;
    cancelResize(args: CancelResizeCommandInput, cb: (err: any, data?: CancelResizeCommandOutput) => void): void;
    cancelResize(args: CancelResizeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelResizeCommandOutput) => void): void;
    /**
     * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot.
     *             The source must be an automated snapshot and it must be in the available
     *             state.</p>
     *         <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
     *             cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
     *             automatically deletes it. If you want to keep an automated snapshot for a longer period,
     *             you can make a manual copy of the snapshot. Manual snapshots are retained until you
     *             delete them.</p>
     *         <p>
     * For more information about working with snapshots, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    copyClusterSnapshot(args: CopyClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CopyClusterSnapshotCommandOutput>;
    copyClusterSnapshot(args: CopyClusterSnapshotCommandInput, cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void): void;
    copyClusterSnapshot(args: CopyClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new cluster with the specified parameters.</p>
     *         <p>To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster
     *             subnet group name. The cluster subnet group identifies the subnets of your VPC that
     *             Amazon Redshift uses when creating the cluster.
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
    createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    createCluster(args: CreateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Redshift parameter group.</p>
     *         <p>Creating parameter groups is independent of creating clusters. You can associate a
     *             cluster with a parameter group when you create the cluster. You can also associate an
     *             existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p>
     *         <p>Parameters in the parameter group define specific behavior that applies to the
     *             databases you create on the cluster.
     * For more information about parameters and parameter groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    createClusterParameterGroup(args: CreateClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterParameterGroupCommandOutput>;
    createClusterParameterGroup(args: CreateClusterParameterGroupCommandInput, cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void): void;
    createClusterParameterGroup(args: CreateClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Redshift security group. You use security groups to control access
     *             to non-VPC clusters.</p>
     *         <p>
     * For information about managing security groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
     * <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    createClusterSecurityGroup(args: CreateClusterSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterSecurityGroupCommandOutput>;
    createClusterSecurityGroup(args: CreateClusterSecurityGroupCommandInput, cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void): void;
    createClusterSecurityGroup(args: CreateClusterSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterSecurityGroupCommandOutput) => void): void;
    /**
     * <p>Creates a manual snapshot of the specified cluster. The cluster must be in the
     *                 <code>available</code> state. </p>
     *         <p>
     * For more information about working with snapshots, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    createClusterSnapshot(args: CreateClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterSnapshotCommandOutput>;
    createClusterSnapshot(args: CreateClusterSnapshotCommandInput, cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void): void;
    createClusterSnapshot(args: CreateClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more
     *             subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
     *             Amazon Redshift subnet group.</p>
     *         <p>
     * For information about subnet groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the
     * <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    createClusterSubnetGroup(args: CreateClusterSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterSubnetGroupCommandOutput>;
    createClusterSubnetGroup(args: CreateClusterSubnetGroupCommandInput, cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void): void;
    createClusterSubnetGroup(args: CreateClusterSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN
     *             (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
     *             the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
     *             must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
     *             the SNS console.</p>
     *         <p>You can specify the source type, and lists of Amazon Redshift source IDs, event
     *             categories, and event severities. Notifications will be sent for all events you want
     *             that match those criteria. For example, you can specify source type = cluster, source ID
     *             = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
     *             ERROR. The subscription will only send notifications for those ERROR events in the
     *             Availability and Backup categories for the specified clusters.</p>
     *         <p>If you specify both the source type and source IDs, such as source type = cluster
     *             and source identifier = my-cluster-1, notifications will be sent for all the cluster
     *             events for my-cluster-1. If you specify a source type but do not specify a source
     *             identifier, you will receive notice of the events for the objects of that type in your
     *             AWS account. If you do not specify either the SourceType nor the SourceIdentifier, you
     *             will be notified of events generated from all Amazon Redshift sources belonging to your AWS
     *             account. You must specify a source type if you specify a source ID.</p>
     */
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateEventSubscriptionCommandOutput>;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    createEventSubscription(args: CreateEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
     *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
     *             databases.</p>
     *         <p>The command returns a public key, which you must store in the HSM. In addition to
     *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
     *             provides a cluster the information needed to store and use encryption keys in the HSM.
     *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
     *             in the Amazon Redshift Cluster Management Guide.</p>
     */
    createHsmClientCertificate(args: CreateHsmClientCertificateCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmClientCertificateCommandOutput>;
    createHsmClientCertificate(args: CreateHsmClientCertificateCommandInput, cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void): void;
    createHsmClientCertificate(args: CreateHsmClientCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHsmClientCertificateCommandOutput) => void): void;
    /**
     * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
     *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
     *             After creating the HSM configuration, you can specify it as a parameter when creating a
     *             cluster. The cluster will then store its encryption keys in the HSM.</p>
     *         <p>In addition to creating an HSM configuration, you must also create an HSM client
     *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
     *             in the Amazon Redshift Cluster Management Guide.</p>
     */
    createHsmConfiguration(args: CreateHsmConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmConfigurationCommandOutput>;
    createHsmConfiguration(args: CreateHsmConfigurationCommandInput, cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void): void;
    createHsmConfiguration(args: CreateHsmConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHsmConfigurationCommandOutput) => void): void;
    /**
     * <p>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action.
     *             For example, you can create a schedule of when to run the <code>ResizeCluster</code> API operation.
     *         </p>
     */
    createScheduledAction(args: CreateScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<CreateScheduledActionCommandOutput>;
    createScheduledAction(args: CreateScheduledActionCommandInput, cb: (err: any, data?: CreateScheduledActionCommandOutput) => void): void;
    createScheduledAction(args: CreateScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateScheduledActionCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot copy grant that permits Amazon Redshift to use a customer master key
     *             (CMK) from AWS Key Management Service (AWS KMS) to encrypt copied snapshots in a
     *             destination region.</p>
     *         <p>
     * For more information about managing snapshot copy grants, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.
     * </p>
     */
    createSnapshotCopyGrant(args: CreateSnapshotCopyGrantCommandInput, options?: __HttpHandlerOptions): Promise<CreateSnapshotCopyGrantCommandOutput>;
    createSnapshotCopyGrant(args: CreateSnapshotCopyGrantCommandInput, cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void): void;
    createSnapshotCopyGrant(args: CreateSnapshotCopyGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSnapshotCopyGrantCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot schedule with the rate of every 12 hours.</p>
     */
    createSnapshotSchedule(args: CreateSnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<CreateSnapshotScheduleCommandOutput>;
    createSnapshotSchedule(args: CreateSnapshotScheduleCommandInput, cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void): void;
    createSnapshotSchedule(args: CreateSnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Adds tags to a cluster.</p>
     *         <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a
     *             resource, you will receive an error and the attempt will fail.</p>
     *         <p>If you specify a key that already exists for the resource, the value for that key
     *             will be updated with the new value.</p>
     */
    createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
    createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    createTags(args: CreateTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    /**
     * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
     *             service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete
     *             operation cannot be canceled or reverted once submitted.
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     *         <p>If you want to shut down the cluster and retain it for future use, set
     *                 <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a
     *             name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this
     *             snapshot to resume using the cluster. If a final cluster snapshot is requested, the
     *             status of the cluster will be "final-snapshot" while the snapshot is being taken, then
     *             it's "deleting" once Amazon Redshift begins deleting the cluster. </p>
     *         <p>
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
    deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    deleteCluster(args: DeleteClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    /**
     * <p>Deletes a specified Amazon Redshift parameter group.</p>
     *         <note>
     *             <p>You cannot delete a parameter group if it is associated with a
     *                 cluster.</p>
     *         </note>
     */
    deleteClusterParameterGroup(args: DeleteClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterParameterGroupCommandOutput>;
    deleteClusterParameterGroup(args: DeleteClusterParameterGroupCommandInput, cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void): void;
    deleteClusterParameterGroup(args: DeleteClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Redshift security group.</p>
     *         <note>
     *             <p>You cannot delete a security group that is associated with any clusters. You
     *                 cannot delete the default security group.</p>
     *         </note>
     *         <p>
     * For information about managing security groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
     * <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    deleteClusterSecurityGroup(args: DeleteClusterSecurityGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterSecurityGroupCommandOutput>;
    deleteClusterSecurityGroup(args: DeleteClusterSecurityGroupCommandInput, cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void): void;
    deleteClusterSecurityGroup(args: DeleteClusterSecurityGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterSecurityGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified manual snapshot. The snapshot must be in the
     *                 <code>available</code> state, with no other users authorized to access the snapshot. </p>
     *         <p>Unlike automated snapshots, manual snapshots are retained even after you delete
     *             your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
     *             snapshot explicitly to avoid getting charged. If other accounts are authorized to access
     *             the snapshot, you must revoke all of the authorizations before you can delete the
     *             snapshot.</p>
     */
    deleteClusterSnapshot(args: DeleteClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterSnapshotCommandOutput>;
    deleteClusterSnapshot(args: DeleteClusterSnapshotCommandInput, cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void): void;
    deleteClusterSnapshot(args: DeleteClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes the specified cluster subnet group.</p>
     */
    deleteClusterSubnetGroup(args: DeleteClusterSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterSubnetGroupCommandOutput>;
    deleteClusterSubnetGroup(args: DeleteClusterSubnetGroupCommandInput, cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void): void;
    deleteClusterSubnetGroup(args: DeleteClusterSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Redshift event notification subscription.</p>
     */
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEventSubscriptionCommandOutput>;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    deleteEventSubscription(args: DeleteEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified HSM client certificate.</p>
     */
    deleteHsmClientCertificate(args: DeleteHsmClientCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmClientCertificateCommandOutput>;
    deleteHsmClientCertificate(args: DeleteHsmClientCertificateCommandInput, cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void): void;
    deleteHsmClientCertificate(args: DeleteHsmClientCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteHsmClientCertificateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
     */
    deleteHsmConfiguration(args: DeleteHsmConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmConfigurationCommandOutput>;
    deleteHsmConfiguration(args: DeleteHsmConfigurationCommandInput, cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void): void;
    deleteHsmConfiguration(args: DeleteHsmConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteHsmConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes a scheduled action.
     *              </p>
     */
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScheduledActionCommandOutput>;
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void): void;
    deleteScheduledAction(args: DeleteScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified snapshot copy grant.</p>
     */
    deleteSnapshotCopyGrant(args: DeleteSnapshotCopyGrantCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSnapshotCopyGrantCommandOutput>;
    deleteSnapshotCopyGrant(args: DeleteSnapshotCopyGrantCommandInput, cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void): void;
    deleteSnapshotCopyGrant(args: DeleteSnapshotCopyGrantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSnapshotCopyGrantCommandOutput) => void): void;
    /**
     * <p>Deletes a snapshot schedule.</p>
     */
    deleteSnapshotSchedule(args: DeleteSnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSnapshotScheduleCommandOutput>;
    deleteSnapshotSchedule(args: DeleteSnapshotScheduleCommandInput, cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void): void;
    deleteSnapshotSchedule(args: DeleteSnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Deletes tags from a resource. You must provide the ARN of the resource
     *             from which you want to delete the tag or tags.</p>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Returns a list of attributes attached to an account</p>
     */
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountAttributesCommandOutput>;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    describeAccountAttributes(args: DescribeAccountAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountAttributesCommandOutput) => void): void;
    /**
     * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
     */
    describeClusterDbRevisions(args: DescribeClusterDbRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterDbRevisionsCommandOutput>;
    describeClusterDbRevisions(args: DescribeClusterDbRevisionsCommandInput, cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void): void;
    describeClusterDbRevisions(args: DescribeClusterDbRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterDbRevisionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you
     *             created and the default parameter group. For each parameter group, the response includes
     *             the parameter group name, description, and parameter group family name. You can
     *             optionally specify a name to retrieve the description of a specific parameter
     *             group.</p>
     *         <p>
     * For more information about parameters and parameter groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all parameter groups that match any combination of the specified keys and values. For
     *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all parameter groups that
     *             have any combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, parameter groups are
     *             returned regardless of whether they have tag keys or values associated with
     *             them.</p>
     */
    describeClusterParameterGroups(args: DescribeClusterParameterGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterParameterGroupsCommandOutput>;
    describeClusterParameterGroups(args: DescribeClusterParameterGroupsCommandInput, cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void): void;
    describeClusterParameterGroups(args: DescribeClusterParameterGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterParameterGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
     *             parameter group. For each parameter the response includes information such as parameter
     *             name, description, data type, value, whether the parameter value is modifiable, and so
     *             on.</p>
     *         <p>You can specify <i>source</i> filter to retrieve parameters of only
     *             specific type. For example, to retrieve parameters that were modified by a user action
     *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
     *                 <i>source</i> equal to <i>user</i>.</p>
     *         <p>
     * For more information about parameters and parameter groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    describeClusterParameters(args: DescribeClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterParametersCommandOutput>;
    describeClusterParameters(args: DescribeClusterParametersCommandInput, cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void): void;
    describeClusterParameters(args: DescribeClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterParametersCommandOutput) => void): void;
    /**
     * <p>Returns information about Amazon Redshift security groups. If the name of a security
     *             group is specified, the response will contain only information about only that security
     *             group.</p>
     *         <p>
     * For information about managing security groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
     * <i>Amazon Redshift Cluster Management Guide</i>.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all security groups that match any combination of the specified keys and values. For
     *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all security groups that
     *             have any combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, security groups are
     *             returned regardless of whether they have tag keys or values associated with
     *             them.</p>
     */
    describeClusterSecurityGroups(args: DescribeClusterSecurityGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterSecurityGroupsCommandOutput>;
    describeClusterSecurityGroups(args: DescribeClusterSecurityGroupsCommandInput, cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void): void;
    describeClusterSecurityGroups(args: DescribeClusterSecurityGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterSecurityGroupsCommandOutput) => void): void;
    /**
     * <p>Returns one or more snapshot objects, which contain metadata about your cluster
     *             snapshots. By default, this operation returns information about all snapshots of all
     *             clusters that are owned by you AWS customer account. No information is returned for
     *             snapshots owned by inactive AWS customer accounts.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all snapshots that match any combination of the specified keys and values. For example,
     *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all snapshots that have any
     *             combination of those values are returned. Only snapshots that you own are returned in
     *             the response; shared snapshots are not returned with the tag key and tag value request
     *             parameters.</p>
     *         <p>If both tag keys and values are omitted from the request, snapshots are returned
     *             regardless of whether they have tag keys or values associated with them.</p>
     */
    describeClusterSnapshots(args: DescribeClusterSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterSnapshotsCommandOutput>;
    describeClusterSnapshots(args: DescribeClusterSnapshotsCommandInput, cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void): void;
    describeClusterSnapshots(args: DescribeClusterSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterSnapshotsCommandOutput) => void): void;
    /**
     * <p>Returns one or more cluster subnet group objects, which contain metadata about your
     *             cluster subnet groups. By default, this operation returns information about all cluster
     *             subnet groups that are defined in you AWS account.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all subnet groups that match any combination of the specified keys and values. For
     *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all subnet groups that have
     *             any combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, subnet groups are
     *             returned regardless of whether they have tag keys or values associated with
     *             them.</p>
     */
    describeClusterSubnetGroups(args: DescribeClusterSubnetGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterSubnetGroupsCommandOutput>;
    describeClusterSubnetGroups(args: DescribeClusterSubnetGroupsCommandInput, cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void): void;
    describeClusterSubnetGroups(args: DescribeClusterSubnetGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterSubnetGroupsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the available maintenance tracks.</p>
     */
    describeClusterTracks(args: DescribeClusterTracksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterTracksCommandOutput>;
    describeClusterTracks(args: DescribeClusterTracksCommandInput, cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void): void;
    describeClusterTracks(args: DescribeClusterTracksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterTracksCommandOutput) => void): void;
    /**
     * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
     *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
     *
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    describeClusterVersions(args: DescribeClusterVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterVersionsCommandOutput>;
    describeClusterVersions(args: DescribeClusterVersionsCommandInput, cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void): void;
    describeClusterVersions(args: DescribeClusterVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterVersionsCommandOutput) => void): void;
    /**
     * <p>Returns properties of provisioned clusters including general cluster properties,
     *             cluster database properties, maintenance and backup properties, and security and access
     *             properties. This operation supports pagination.
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all clusters that match any combination of the specified keys and values. For example,
     *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all clusters that have any
     *             combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, clusters are returned
     *             regardless of whether they have tag keys or values associated with them.</p>
     */
    describeClusters(args: DescribeClustersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClustersCommandOutput>;
    describeClusters(args: DescribeClustersCommandInput, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    describeClusters(args: DescribeClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of parameter settings for the specified parameter group
     *             family.</p>
     *         <p>
     * For more information about parameters and parameter groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    describeDefaultClusterParameters(args: DescribeDefaultClusterParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDefaultClusterParametersCommandOutput>;
    describeDefaultClusterParameters(args: DescribeDefaultClusterParametersCommandInput, cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void): void;
    describeDefaultClusterParameters(args: DescribeDefaultClusterParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDefaultClusterParametersCommandOutput) => void): void;
    /**
     * <p>Displays a list of event categories for all event source types, or for a specified
     *             source type. For a list of the event categories and source types, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-event-notifications.html">Amazon Redshift Event
     *                 Notifications</a>.</p>
     */
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventCategoriesCommandOutput>;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    describeEventCategories(args: DescribeEventCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventCategoriesCommandOutput) => void): void;
    /**
     * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a
     *             customer account. If you specify a subscription name, lists the description for that
     *             subscription.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all event notification subscriptions that match any combination of the specified keys
     *             and values. For example, if you have <code>owner</code> and <code>environment</code> for
     *             tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions
     *             that have any combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, subscriptions are
     *             returned regardless of whether they have tag keys or values associated with
     *             them.</p>
     */
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventSubscriptionsCommandOutput>;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    describeEventSubscriptions(args: DescribeEventSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Returns events related to clusters, security groups, snapshots, and parameter
     *             groups for the past 14 days. Events specific to a particular cluster, security group,
     *             snapshot or parameter group can be obtained by providing the name as a parameter. By
     *             default, the past hour of events are returned.</p>
     */
    describeEvents(args: DescribeEventsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventsCommandOutput>;
    describeEvents(args: DescribeEventsCommandInput, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    describeEvents(args: DescribeEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventsCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified HSM client certificate. If no certificate
     *             ID is specified, returns information about all the HSM certificates owned by your AWS
     *             customer account.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all HSM client certificates that match any combination of the specified keys and values.
     *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
     *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
     *             that have any combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, HSM client certificates
     *             are returned regardless of whether they have tag keys or values associated with
     *             them.</p>
     */
    describeHsmClientCertificates(args: DescribeHsmClientCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHsmClientCertificatesCommandOutput>;
    describeHsmClientCertificates(args: DescribeHsmClientCertificatesCommandInput, cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void): void;
    describeHsmClientCertificates(args: DescribeHsmClientCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHsmClientCertificatesCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified Amazon Redshift HSM configuration. If no
     *             configuration ID is specified, returns information about all the HSM configurations
     *             owned by your AWS customer account.</p>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all HSM connections that match any combination of the specified keys and values. For
     *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all HSM connections that
     *             have any combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, HSM connections are
     *             returned regardless of whether they have tag keys or values associated with
     *             them.</p>
     */
    describeHsmConfigurations(args: DescribeHsmConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHsmConfigurationsCommandOutput>;
    describeHsmConfigurations(args: DescribeHsmConfigurationsCommandInput, cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void): void;
    describeHsmConfigurations(args: DescribeHsmConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHsmConfigurationsCommandOutput) => void): void;
    /**
     * <p>Describes whether information, such as queries and connection attempts, is being
     *             logged for the specified Amazon Redshift cluster.</p>
     */
    describeLoggingStatus(args: DescribeLoggingStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoggingStatusCommandOutput>;
    describeLoggingStatus(args: DescribeLoggingStatusCommandInput, cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void): void;
    describeLoggingStatus(args: DescribeLoggingStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoggingStatusCommandOutput) => void): void;
    /**
     * <p>Returns properties of possible node configurations such as node type, number of nodes, and
     *             disk usage for the specified action type.</p>
     */
    describeNodeConfigurationOptions(args: DescribeNodeConfigurationOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNodeConfigurationOptionsCommandOutput>;
    describeNodeConfigurationOptions(args: DescribeNodeConfigurationOptionsCommandInput, cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void): void;
    describeNodeConfigurationOptions(args: DescribeNodeConfigurationOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNodeConfigurationOptionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of orderable cluster options. Before you create a new cluster you
     *             can use this operation to find what options are available, such as the EC2 Availability
     *             Zones (AZ) in the specific AWS Region that you can specify, and the node types you can
     *             request. The node types differ by available storage, memory, CPU and price. With the
     *             cost involved you might want to obtain a list of cluster options in the specific region
     *             and specify values when creating a cluster.
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    describeOrderableClusterOptions(args: DescribeOrderableClusterOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOrderableClusterOptionsCommandOutput>;
    describeOrderableClusterOptions(args: DescribeOrderableClusterOptionsCommandInput, cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void): void;
    describeOrderableClusterOptions(args: DescribeOrderableClusterOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOrderableClusterOptionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their
     *             descriptions including the node type, the fixed and recurring costs of reserving the
     *             node and duration the node will be reserved for you. These descriptions help you
     *             determine which reserve node offering you want to purchase. You then use the unique
     *             offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one
     *             or more nodes for your Amazon Redshift cluster. </p>
     *         <p>
     * For more information about reserved node offerings, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    describeReservedNodeOfferings(args: DescribeReservedNodeOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedNodeOfferingsCommandOutput>;
    describeReservedNodeOfferings(args: DescribeReservedNodeOfferingsCommandInput, cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void): void;
    describeReservedNodeOfferings(args: DescribeReservedNodeOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedNodeOfferingsCommandOutput) => void): void;
    /**
     * <p>Returns the descriptions of the reserved nodes.</p>
     */
    describeReservedNodes(args: DescribeReservedNodesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReservedNodesCommandOutput>;
    describeReservedNodes(args: DescribeReservedNodesCommandInput, cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void): void;
    describeReservedNodes(args: DescribeReservedNodesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void): void;
    /**
     * <p>Returns information about the last resize operation for the specified cluster. If
     *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
     *                 404</code> error is returned. If a resize operation was initiated and completed, the
     *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
     *         <p>A resize operation can be requested using <a>ModifyCluster</a> and
     *             specifying a different number or type of nodes for the cluster. </p>
     */
    describeResize(args: DescribeResizeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResizeCommandOutput>;
    describeResize(args: DescribeResizeCommandInput, cb: (err: any, data?: DescribeResizeCommandOutput) => void): void;
    describeResize(args: DescribeResizeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResizeCommandOutput) => void): void;
    /**
     * <p>Describes properties of scheduled actions.
     *              </p>
     */
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScheduledActionsCommandOutput>;
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void): void;
    describeScheduledActions(args: DescribeScheduledActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of snapshot copy grants owned by the AWS account in the destination
     *             region.</p>
     *         <p>
     * For more information about managing snapshot copy grants, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.
     * </p>
     */
    describeSnapshotCopyGrants(args: DescribeSnapshotCopyGrantsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSnapshotCopyGrantsCommandOutput>;
    describeSnapshotCopyGrants(args: DescribeSnapshotCopyGrantsCommandInput, cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void): void;
    describeSnapshotCopyGrants(args: DescribeSnapshotCopyGrantsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSnapshotCopyGrantsCommandOutput) => void): void;
    /**
     * <p>Returns a list of snapshot schedules. </p>
     */
    describeSnapshotSchedules(args: DescribeSnapshotSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSnapshotSchedulesCommandOutput>;
    describeSnapshotSchedules(args: DescribeSnapshotSchedulesCommandInput, cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void): void;
    describeSnapshotSchedules(args: DescribeSnapshotSchedulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSnapshotSchedulesCommandOutput) => void): void;
    /**
     * <p>Returns account level backups storage size and provisional storage.</p>
     */
    describeStorage(args: DescribeStorageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeStorageCommandOutput>;
    describeStorage(args: DescribeStorageCommandInput, cb: (err: any, data?: DescribeStorageCommandOutput) => void): void;
    describeStorage(args: DescribeStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeStorageCommandOutput) => void): void;
    /**
     * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
     *             for the <code>TableRestoreRequestId</code> parameter, then
     *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
     *             requests ordered by the date and time of the request in ascending order. Otherwise
     *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
     *                 <code>TableRestoreRequestId</code>.</p>
     */
    describeTableRestoreStatus(args: DescribeTableRestoreStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTableRestoreStatusCommandOutput>;
    describeTableRestoreStatus(args: DescribeTableRestoreStatusCommandInput, cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void): void;
    describeTableRestoreStatus(args: DescribeTableRestoreStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTableRestoreStatusCommandOutput) => void): void;
    /**
     * <p>Returns a list of tags. You can return tags from a specific resource by specifying
     *             an ARN, or you can return all tags for a given type of resource, such as clusters,
     *             snapshots, and so on.</p>
     *         <p>The following are limitations for <code>DescribeTags</code>: </p>
     *         <ul>
     *             <li>
     *                 <p>You cannot specify an ARN and a resource-type value together in the same
     *                     request.</p>
     *             </li>
     *             <li>
     *                 <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code>
     *                     parameters together with the ARN parameter.</p>
     *             </li>
     *             <li>
     *                 <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results
     *                     to return in a request.</p>
     *             </li>
     *          </ul>
     *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
     *             all resources that match any combination of the specified keys and values. For example,
     *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
     *                 <code>admin</code> and <code>test</code> for tag values, all resources that have any
     *             combination of those values are returned.</p>
     *         <p>If both tag keys and values are omitted from the request, resources are returned
     *             regardless of whether they have tag keys or values associated with them.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Stops logging information, such as queries and connection attempts, for the
     *             specified Amazon Redshift cluster.</p>
     */
    disableLogging(args: DisableLoggingCommandInput, options?: __HttpHandlerOptions): Promise<DisableLoggingCommandOutput>;
    disableLogging(args: DisableLoggingCommandInput, cb: (err: any, data?: DisableLoggingCommandOutput) => void): void;
    disableLogging(args: DisableLoggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableLoggingCommandOutput) => void): void;
    /**
     * <p>Disables the automatic copying of snapshots from one region to another region for a
     *             specified cluster.</p>
     *         <p>If your cluster and its snapshots are encrypted using a customer master key (CMK)
     *             from AWS KMS, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that
     *             grants Amazon Redshift permission to the CMK in the destination region. </p>
     */
    disableSnapshotCopy(args: DisableSnapshotCopyCommandInput, options?: __HttpHandlerOptions): Promise<DisableSnapshotCopyCommandOutput>;
    disableSnapshotCopy(args: DisableSnapshotCopyCommandInput, cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void): void;
    disableSnapshotCopy(args: DisableSnapshotCopyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableSnapshotCopyCommandOutput) => void): void;
    /**
     * <p>Starts logging information, such as queries and connection attempts, for the
     *             specified Amazon Redshift cluster.</p>
     */
    enableLogging(args: EnableLoggingCommandInput, options?: __HttpHandlerOptions): Promise<EnableLoggingCommandOutput>;
    enableLogging(args: EnableLoggingCommandInput, cb: (err: any, data?: EnableLoggingCommandOutput) => void): void;
    enableLogging(args: EnableLoggingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableLoggingCommandOutput) => void): void;
    /**
     * <p>Enables the automatic copy of snapshots from one region to another region for a
     *             specified cluster.</p>
     */
    enableSnapshotCopy(args: EnableSnapshotCopyCommandInput, options?: __HttpHandlerOptions): Promise<EnableSnapshotCopyCommandOutput>;
    enableSnapshotCopy(args: EnableSnapshotCopyCommandInput, cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void): void;
    enableSnapshotCopy(args: EnableSnapshotCopyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableSnapshotCopyCommandOutput) => void): void;
    /**
     * <p>Returns a database user name and temporary password with temporary authorization to
     *             log on to an Amazon Redshift database. The action returns the database user name
     *             prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or
     *                 <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can
     *             optionally specify one or more database user groups that the user will join at log on.
     *             By default, the temporary credentials expire in 900 seconds. You can optionally specify
     *             a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
     *             information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication
     *                 to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p>
     *         <p>The AWS Identity and Access Management (IAM)user or role that executes
     *             GetClusterCredentials must have an IAM policy attached that allows access to all
     *             necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the
     *             Amazon Redshift Cluster Management Guide.</p>
     *         <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the
     *                 <code>redshift:JoinGroup</code> action with access to the listed
     *                 <code>dbgroups</code>. </p>
     *         <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>,
     *             then the policy must include the <code>redshift:CreateClusterUser</code>
     *             privilege.</p>
     *         <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access
     *             to the resource <code>dbname</code> for the specified database name. </p>
     */
    getClusterCredentials(args: GetClusterCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<GetClusterCredentialsCommandOutput>;
    getClusterCredentials(args: GetClusterCredentialsCommandInput, cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void): void;
    getClusterCredentials(args: GetClusterCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetClusterCredentialsCommandOutput) => void): void;
    /**
     * <p>Returns an array of DC2 ReservedNodeOfferings that matches the payment type, term,
     *             and usage price of the given DC1 reserved node.</p>
     */
    getReservedNodeExchangeOfferings(args: GetReservedNodeExchangeOfferingsCommandInput, options?: __HttpHandlerOptions): Promise<GetReservedNodeExchangeOfferingsCommandOutput>;
    getReservedNodeExchangeOfferings(args: GetReservedNodeExchangeOfferingsCommandInput, cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void): void;
    getReservedNodeExchangeOfferings(args: GetReservedNodeExchangeOfferingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservedNodeExchangeOfferingsCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a cluster.</p>
     *         <p>You can also change node type and the number of nodes to scale up or down the
     *             cluster. When resizing a cluster, you must specify both the number of nodes and the node
     *             type even if one of the parameters does not change.</p>
     * 		       <p>You can add another security or
     *             parameter group, or change the master user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect.
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    modifyCluster(args: ModifyClusterCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterCommandOutput>;
    modifyCluster(args: ModifyClusterCommandInput, cb: (err: any, data?: ModifyClusterCommandOutput) => void): void;
    modifyCluster(args: ModifyClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterCommandOutput) => void): void;
    /**
     * <p>Modifies the database revision of a cluster. The database revision is a unique
     *             revision of the database running in a cluster.</p>
     */
    modifyClusterDbRevision(args: ModifyClusterDbRevisionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterDbRevisionCommandOutput>;
    modifyClusterDbRevision(args: ModifyClusterDbRevisionCommandInput, cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void): void;
    modifyClusterDbRevision(args: ModifyClusterDbRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterDbRevisionCommandOutput) => void): void;
    /**
     * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be
     *             used by the cluster to access other AWS services.</p>
     *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
     */
    modifyClusterIamRoles(args: ModifyClusterIamRolesCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterIamRolesCommandOutput>;
    modifyClusterIamRoles(args: ModifyClusterIamRolesCommandInput, cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void): void;
    modifyClusterIamRoles(args: ModifyClusterIamRolesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterIamRolesCommandOutput) => void): void;
    /**
     * <p>Modifies the maintenance settings of a cluster.</p>
     */
    modifyClusterMaintenance(args: ModifyClusterMaintenanceCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterMaintenanceCommandOutput>;
    modifyClusterMaintenance(args: ModifyClusterMaintenanceCommandInput, cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void): void;
    modifyClusterMaintenance(args: ModifyClusterMaintenanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterMaintenanceCommandOutput) => void): void;
    /**
     * <p>Modifies the parameters of a parameter group.</p>
     *         <p>
     * For more information about parameters and parameter groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    modifyClusterParameterGroup(args: ModifyClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterParameterGroupCommandOutput>;
    modifyClusterParameterGroup(args: ModifyClusterParameterGroupCommandInput, cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void): void;
    modifyClusterParameterGroup(args: ModifyClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Modifies the settings for a snapshot.</p>
     * 		       <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
     */
    modifyClusterSnapshot(args: ModifyClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterSnapshotCommandOutput>;
    modifyClusterSnapshot(args: ModifyClusterSnapshotCommandInput, cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void): void;
    modifyClusterSnapshot(args: ModifyClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Modifies a snapshot schedule for a cluster.</p>
     */
    modifyClusterSnapshotSchedule(args: ModifyClusterSnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterSnapshotScheduleCommandOutput>;
    modifyClusterSnapshotSchedule(args: ModifyClusterSnapshotScheduleCommandInput, cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void): void;
    modifyClusterSnapshotSchedule(args: ModifyClusterSnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterSnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Modifies a cluster subnet group to include the specified list of VPC subnets. The
     *             operation replaces the existing list of subnets with the new list of subnets.</p>
     */
    modifyClusterSubnetGroup(args: ModifyClusterSubnetGroupCommandInput, options?: __HttpHandlerOptions): Promise<ModifyClusterSubnetGroupCommandOutput>;
    modifyClusterSubnetGroup(args: ModifyClusterSubnetGroupCommandInput, cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void): void;
    modifyClusterSubnetGroup(args: ModifyClusterSubnetGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyClusterSubnetGroupCommandOutput) => void): void;
    /**
     * <p>Modifies an existing Amazon Redshift event notification subscription.</p>
     */
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyEventSubscriptionCommandOutput>;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    modifyEventSubscription(args: ModifyEventSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyEventSubscriptionCommandOutput) => void): void;
    /**
     * <p>Modifies a scheduled action.
     *             </p>
     */
    modifyScheduledAction(args: ModifyScheduledActionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyScheduledActionCommandOutput>;
    modifyScheduledAction(args: ModifyScheduledActionCommandInput, cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void): void;
    modifyScheduledAction(args: ModifyScheduledActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyScheduledActionCommandOutput) => void): void;
    /**
     * <p>Modifies the number of days to retain snapshots in the destination AWS Region after
     *             they are copied from the source AWS Region. By default, this operation only changes the
     *             retention period of copied automated snapshots. The retention periods for both new and
     *             existing copied automated snapshots are updated with the new retention period. You can
     *             set the manual option to change only the retention periods of copied manual snapshots.
     *             If you set this option, only newly copied manual snapshots have the new retention
     *             period. </p>
     */
    modifySnapshotCopyRetentionPeriod(args: ModifySnapshotCopyRetentionPeriodCommandInput, options?: __HttpHandlerOptions): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput>;
    modifySnapshotCopyRetentionPeriod(args: ModifySnapshotCopyRetentionPeriodCommandInput, cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void): void;
    modifySnapshotCopyRetentionPeriod(args: ModifySnapshotCopyRetentionPeriodCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifySnapshotCopyRetentionPeriodCommandOutput) => void): void;
    /**
     * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
     *             asynchronously.</p>
     */
    modifySnapshotSchedule(args: ModifySnapshotScheduleCommandInput, options?: __HttpHandlerOptions): Promise<ModifySnapshotScheduleCommandOutput>;
    modifySnapshotSchedule(args: ModifySnapshotScheduleCommandInput, cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void): void;
    modifySnapshotSchedule(args: ModifySnapshotScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifySnapshotScheduleCommandOutput) => void): void;
    /**
     * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
     *             reserved node offerings. You can purchase one or more of the offerings. You can call the
     *                 <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved
     *             node offerings. You can call this API by providing a specific reserved node offering and
     *             the number of nodes you want to reserve. </p>
     *         <p>
     * For more information about reserved node offerings, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    purchaseReservedNodeOffering(args: PurchaseReservedNodeOfferingCommandInput, options?: __HttpHandlerOptions): Promise<PurchaseReservedNodeOfferingCommandOutput>;
    purchaseReservedNodeOffering(args: PurchaseReservedNodeOfferingCommandInput, cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void): void;
    purchaseReservedNodeOffering(args: PurchaseReservedNodeOfferingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PurchaseReservedNodeOfferingCommandOutput) => void): void;
    /**
     * <p>Reboots a cluster. This action is taken as soon as possible. It results in a
     *             momentary outage to the cluster, during which the cluster status is set to
     *                 <code>rebooting</code>. A cluster event is created when the reboot is completed. Any
     *             pending cluster modifications (see <a>ModifyCluster</a>) are applied at this
     *             reboot.
     * For more information about managing clusters, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
     */
    rebootCluster(args: RebootClusterCommandInput, options?: __HttpHandlerOptions): Promise<RebootClusterCommandOutput>;
    rebootCluster(args: RebootClusterCommandInput, cb: (err: any, data?: RebootClusterCommandOutput) => void): void;
    rebootCluster(args: RebootClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootClusterCommandOutput) => void): void;
    /**
     * <p>Sets one or more parameters of the specified parameter group to their default
     *             values and sets the source values of the parameters to "engine-default". To reset the
     *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
     *             For parameter changes to take effect you must reboot any associated clusters. </p>
     */
    resetClusterParameterGroup(args: ResetClusterParameterGroupCommandInput, options?: __HttpHandlerOptions): Promise<ResetClusterParameterGroupCommandOutput>;
    resetClusterParameterGroup(args: ResetClusterParameterGroupCommandInput, cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void): void;
    resetClusterParameterGroup(args: ResetClusterParameterGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetClusterParameterGroupCommandOutput) => void): void;
    /**
     * <p>Changes the size of the cluster. You can change the cluster's type, or change the
     *             number or type of nodes. The default behavior is to use the elastic resize method. With
     *             an elastic resize, your cluster is available for read and write operations more quickly
     *             than with the classic resize method. </p>
     *         <p>Elastic resize operations have the following restrictions:</p>
     *         <ul>
     *             <li>
     *                 <p>You can only resize clusters of the following types:</p>
     *                 <ul>
     *                   <li>
     *                         <p>dc2.large</p>
     *                     </li>
     *                   <li>
     *                         <p>dc2.8xlarge</p>
     *                     </li>
     *                   <li>
     *                         <p>ds2.xlarge</p>
     *                     </li>
     *                   <li>
     *                         <p>ds2.8xlarge</p>
     *                     </li>
     *                   <li>
     *                         <p>ra3.16xlarge</p>
     *                     </li>
     *                </ul>
     *             </li>
     *             <li>
     *                 <p>The type of nodes that you add must match the node type for the
     *                     cluster.</p>
     *             </li>
     *          </ul>
     */
    resizeCluster(args: ResizeClusterCommandInput, options?: __HttpHandlerOptions): Promise<ResizeClusterCommandOutput>;
    resizeCluster(args: ResizeClusterCommandInput, cb: (err: any, data?: ResizeClusterCommandOutput) => void): void;
    resizeCluster(args: ResizeClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResizeClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
     *             cluster with the same configuration as the original cluster from which the snapshot was
     *             created, except that the new cluster is created with the default cluster security and
     *             parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different
     *             parameter group with the restored cluster. If you are using a DS node type, you can also
     *             choose to change to another DS node type of the same size during restore.</p>
     *         <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where
     *             you want the cluster restored.</p>
     *         <p>
     * For more information about working with snapshots, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    restoreFromClusterSnapshot(args: RestoreFromClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreFromClusterSnapshotCommandOutput>;
    restoreFromClusterSnapshot(args: RestoreFromClusterSnapshotCommandInput, cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void): void;
    restoreFromClusterSnapshot(args: RestoreFromClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreFromClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
     *             create the new table within the Amazon Redshift cluster that the snapshot was taken
     *             from.</p>
     *         <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with
     *             the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
     *             overwrite an existing table in a cluster with a restored table. If you want to replace
     *             your original table with a new, restored table, then rename or drop your original table
     *             before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your
     *             original table, then you can pass the original name of the table as the
     *                 <code>NewTableName</code> parameter value in the call to
     *                 <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original
     *             table with the table created from the snapshot.</p>
     */
    restoreTableFromClusterSnapshot(args: RestoreTableFromClusterSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreTableFromClusterSnapshotCommandOutput>;
    restoreTableFromClusterSnapshot(args: RestoreTableFromClusterSnapshotCommandInput, cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void): void;
    restoreTableFromClusterSnapshot(args: RestoreTableFromClusterSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreTableFromClusterSnapshotCommandOutput) => void): void;
    /**
     * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
     *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
     * For information about managing security groups, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
     * <i>Amazon Redshift Cluster Management Guide</i>. </p>
     */
    revokeClusterSecurityGroupIngress(args: RevokeClusterSecurityGroupIngressCommandInput, options?: __HttpHandlerOptions): Promise<RevokeClusterSecurityGroupIngressCommandOutput>;
    revokeClusterSecurityGroupIngress(args: RevokeClusterSecurityGroupIngressCommandInput, cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void): void;
    revokeClusterSecurityGroupIngress(args: RevokeClusterSecurityGroupIngressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeClusterSecurityGroupIngressCommandOutput) => void): void;
    /**
     * <p>Removes the ability of the specified AWS customer account to restore the specified
     *             snapshot. If the account is currently restoring the snapshot, the restore will run to
     *             completion.</p>
     *         <p>
     * For more information about working with snapshots, go to
     * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
     * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
     */
    revokeSnapshotAccess(args: RevokeSnapshotAccessCommandInput, options?: __HttpHandlerOptions): Promise<RevokeSnapshotAccessCommandOutput>;
    revokeSnapshotAccess(args: RevokeSnapshotAccessCommandInput, cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void): void;
    revokeSnapshotAccess(args: RevokeSnapshotAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokeSnapshotAccessCommandOutput) => void): void;
    /**
     * <p>Rotates the encryption keys for a cluster.</p>
     */
    rotateEncryptionKey(args: RotateEncryptionKeyCommandInput, options?: __HttpHandlerOptions): Promise<RotateEncryptionKeyCommandOutput>;
    rotateEncryptionKey(args: RotateEncryptionKeyCommandInput, cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void): void;
    rotateEncryptionKey(args: RotateEncryptionKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RotateEncryptionKeyCommandOutput) => void): void;
}
