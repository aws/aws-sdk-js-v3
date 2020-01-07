import { DirectoryServiceClient } from "./DirectoryServiceClient";
import { AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput } from "./commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput } from "./commands/CancelSchemaExtensionCommand";
import { ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput } from "./commands/ConnectDirectoryCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateComputerCommandInput, CreateComputerCommandOutput } from "./commands/CreateComputerCommand";
import { CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput } from "./commands/CreateConditionalForwarderCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import { CreateLogSubscriptionCommandInput, CreateLogSubscriptionCommandOutput } from "./commands/CreateLogSubscriptionCommand";
import { CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput } from "./commands/CreateMicrosoftADCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand";
import { DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput } from "./commands/DeleteConditionalForwarderCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import { DeleteLogSubscriptionCommandInput, DeleteLogSubscriptionCommandOutput } from "./commands/DeleteLogSubscriptionCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand";
import { DeregisterCertificateCommandInput, DeregisterCertificateCommandOutput } from "./commands/DeregisterCertificateCommand";
import { DeregisterEventTopicCommandInput, DeregisterEventTopicCommandOutput } from "./commands/DeregisterEventTopicCommand";
import { DescribeCertificateCommandInput, DescribeCertificateCommandOutput } from "./commands/DescribeCertificateCommand";
import { DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput } from "./commands/DescribeConditionalForwardersCommand";
import { DescribeDirectoriesCommandInput, DescribeDirectoriesCommandOutput } from "./commands/DescribeDirectoriesCommand";
import { DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput } from "./commands/DescribeDomainControllersCommand";
import { DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput } from "./commands/DescribeEventTopicsCommand";
import { DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput } from "./commands/DescribeLDAPSSettingsCommand";
import { DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput } from "./commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "./commands/DescribeTrustsCommand";
import { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "./commands/DisableLDAPSCommand";
import { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "./commands/DisableRadiusCommand";
import { DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand";
import { EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand";
import { EnableRadiusCommandInput, EnableRadiusCommandOutput } from "./commands/EnableRadiusCommand";
import { EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand";
import { GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput } from "./commands/GetDirectoryLimitsCommand";
import { GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput } from "./commands/GetSnapshotLimitsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListIpRoutesCommandInput, ListIpRoutesCommandOutput } from "./commands/ListIpRoutesCommand";
import { ListLogSubscriptionsCommandInput, ListLogSubscriptionsCommandOutput } from "./commands/ListLogSubscriptionsCommand";
import { ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput } from "./commands/ListSchemaExtensionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RegisterCertificateCommandInput, RegisterCertificateCommandOutput } from "./commands/RegisterCertificateCommand";
import { RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput } from "./commands/RegisterEventTopicCommand";
import { RejectSharedDirectoryCommandInput, RejectSharedDirectoryCommandOutput } from "./commands/RejectSharedDirectoryCommand";
import { RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput } from "./commands/RemoveIpRoutesCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "./commands/ResetUserPasswordCommand";
import { RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput } from "./commands/RestoreFromSnapshotCommand";
import { ShareDirectoryCommandInput, ShareDirectoryCommandOutput } from "./commands/ShareDirectoryCommand";
import { StartSchemaExtensionCommandInput, StartSchemaExtensionCommandOutput } from "./commands/StartSchemaExtensionCommand";
import { UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput } from "./commands/UnshareDirectoryCommand";
import { UpdateConditionalForwarderCommandInput, UpdateConditionalForwarderCommandOutput } from "./commands/UpdateConditionalForwarderCommand";
import { UpdateNumberOfDomainControllersCommandInput, UpdateNumberOfDomainControllersCommandOutput } from "./commands/UpdateNumberOfDomainControllersCommand";
import { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "./commands/UpdateRadiusCommand";
import { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand";
import { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Directory Service</fullname>
 *          <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *          Services</a>.</p>
 *          </note>
 */
export declare class DirectoryService extends DirectoryServiceClient {
    /**
     * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
     */
    acceptSharedDirectory(args: AcceptSharedDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<AcceptSharedDirectoryCommandOutput>;
    acceptSharedDirectory(args: AcceptSharedDirectoryCommandInput, cb: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void): void;
    acceptSharedDirectory(args: AcceptSharedDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcceptSharedDirectoryCommandOutput) => void): void;
    /**
     * <p>If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC. </p>
     *          <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    addIpRoutes(args: AddIpRoutesCommandInput, options?: __HttpHandlerOptions): Promise<AddIpRoutesCommandOutput>;
    addIpRoutes(args: AddIpRoutesCommandInput, cb: (err: any, data?: AddIpRoutesCommandOutput) => void): void;
    addIpRoutes(args: AddIpRoutesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddIpRoutesCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.</p>
     */
    cancelSchemaExtension(args: CancelSchemaExtensionCommandInput, options?: __HttpHandlerOptions): Promise<CancelSchemaExtensionCommandOutput>;
    cancelSchemaExtension(args: CancelSchemaExtensionCommandInput, cb: (err: any, data?: CancelSchemaExtensionCommandOutput) => void): void;
    cancelSchemaExtension(args: CancelSchemaExtensionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelSchemaExtensionCommandOutput) => void): void;
    /**
     * <p>Creates an AD Connector to connect to an on-premises directory.</p>
     *          <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    connectDirectory(args: ConnectDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<ConnectDirectoryCommandOutput>;
    connectDirectory(args: ConnectDirectoryCommandInput, cb: (err: any, data?: ConnectDirectoryCommandOutput) => void): void;
    connectDirectory(args: ConnectDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConnectDirectoryCommandOutput) => void): void;
    /**
     * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used
     *          to construct the access URL for the directory, such as
     *             <code>http://<alias>.awsapps.com</code>.</p>
     *          <important>
     *             <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p>
     *          </important>
     */
    createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
    createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    createAlias(args: CreateAliasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
    /**
     * <p>Creates a computer account in the specified directory, and joins the computer to the directory.</p>
     */
    createComputer(args: CreateComputerCommandInput, options?: __HttpHandlerOptions): Promise<CreateComputerCommandOutput>;
    createComputer(args: CreateComputerCommandInput, cb: (err: any, data?: CreateComputerCommandOutput) => void): void;
    createComputer(args: CreateComputerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateComputerCommandOutput) => void): void;
    /**
     * <p>Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.</p>
     */
    createConditionalForwarder(args: CreateConditionalForwarderCommandInput, options?: __HttpHandlerOptions): Promise<CreateConditionalForwarderCommandOutput>;
    createConditionalForwarder(args: CreateConditionalForwarderCommandInput, cb: (err: any, data?: CreateConditionalForwarderCommandOutput) => void): void;
    createConditionalForwarder(args: CreateConditionalForwarderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConditionalForwarderCommandOutput) => void): void;
    /**
     * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>AWS Directory Service Admin Guide</i>.</p>
     *          <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    createDirectory(args: CreateDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateDirectoryCommandOutput>;
    createDirectory(args: CreateDirectoryCommandInput, cb: (err: any, data?: CreateDirectoryCommandOutput) => void): void;
    createDirectory(args: CreateDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDirectoryCommandOutput) => void): void;
    /**
     * <p>Creates a subscription to forward real-time Directory Service domain controller
     *       security logs to the specified Amazon CloudWatch log group in your AWS account.</p>
     */
    createLogSubscription(args: CreateLogSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateLogSubscriptionCommandOutput>;
    createLogSubscription(args: CreateLogSubscriptionCommandInput, cb: (err: any, data?: CreateLogSubscriptionCommandOutput) => void): void;
    createLogSubscription(args: CreateLogSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLogSubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates a Microsoft AD directory in the AWS Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">AWS Managed Microsoft AD</a> in the <i>AWS Directory Service Admin Guide</i>.</p>
     *          <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    createMicrosoftAD(args: CreateMicrosoftADCommandInput, options?: __HttpHandlerOptions): Promise<CreateMicrosoftADCommandOutput>;
    createMicrosoftAD(args: CreateMicrosoftADCommandInput, cb: (err: any, data?: CreateMicrosoftADCommandOutput) => void): void;
    createMicrosoftAD(args: CreateMicrosoftADCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMicrosoftADCommandOutput) => void): void;
    /**
     * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p>
     *          <note>
     *             <p>You cannot take snapshots of AD Connector directories.</p>
     *          </note>
     */
    createSnapshot(args: CreateSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<CreateSnapshotCommandOutput>;
    createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
    createSnapshot(args: CreateSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
    /**
     * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p>
     *          <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
     */
    createTrust(args: CreateTrustCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrustCommandOutput>;
    createTrust(args: CreateTrustCommandInput, cb: (err: any, data?: CreateTrustCommandOutput) => void): void;
    createTrust(args: CreateTrustCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrustCommandOutput) => void): void;
    /**
     * <p>Deletes a conditional forwarder that has been set up for your AWS directory.</p>
     */
    deleteConditionalForwarder(args: DeleteConditionalForwarderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConditionalForwarderCommandOutput>;
    deleteConditionalForwarder(args: DeleteConditionalForwarderCommandInput, cb: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void): void;
    deleteConditionalForwarder(args: DeleteConditionalForwarderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConditionalForwarderCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Directory Service directory.</p>
     *          <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    deleteDirectory(args: DeleteDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDirectoryCommandOutput>;
    deleteDirectory(args: DeleteDirectoryCommandInput, cb: (err: any, data?: DeleteDirectoryCommandOutput) => void): void;
    deleteDirectory(args: DeleteDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDirectoryCommandOutput) => void): void;
    /**
     * <p>Deletes the specified log subscription.</p>
     */
    deleteLogSubscription(args: DeleteLogSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLogSubscriptionCommandOutput>;
    deleteLogSubscription(args: DeleteLogSubscriptionCommandInput, cb: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void): void;
    deleteLogSubscription(args: DeleteLogSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLogSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes a directory snapshot.</p>
     */
    deleteSnapshot(args: DeleteSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSnapshotCommandOutput>;
    deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
    deleteSnapshot(args: DeleteSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
    /**
     * <p>Deletes an existing trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
     */
    deleteTrust(args: DeleteTrustCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrustCommandOutput>;
    deleteTrust(args: DeleteTrustCommandInput, cb: (err: any, data?: DeleteTrustCommandOutput) => void): void;
    deleteTrust(args: DeleteTrustCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrustCommandOutput) => void): void;
    /**
     * <p>Deletes from the system the certificate that was registered for a secured LDAP
     *       connection.</p>
     */
    deregisterCertificate(args: DeregisterCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterCertificateCommandOutput>;
    deregisterCertificate(args: DeregisterCertificateCommandInput, cb: (err: any, data?: DeregisterCertificateCommandOutput) => void): void;
    deregisterCertificate(args: DeregisterCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterCertificateCommandOutput) => void): void;
    /**
     * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
     */
    deregisterEventTopic(args: DeregisterEventTopicCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterEventTopicCommandOutput>;
    deregisterEventTopic(args: DeregisterEventTopicCommandInput, cb: (err: any, data?: DeregisterEventTopicCommandOutput) => void): void;
    deregisterEventTopic(args: DeregisterEventTopicCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterEventTopicCommandOutput) => void): void;
    /**
     * <p>Displays information about the certificate registered for a secured LDAP connection.</p>
     */
    describeCertificate(args: DescribeCertificateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCertificateCommandOutput>;
    describeCertificate(args: DescribeCertificateCommandInput, cb: (err: any, data?: DescribeCertificateCommandOutput) => void): void;
    describeCertificate(args: DescribeCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCertificateCommandOutput) => void): void;
    /**
     * <p>Obtains information about the conditional forwarders for this account.</p>
     *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
     */
    describeConditionalForwarders(args: DescribeConditionalForwardersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConditionalForwardersCommandOutput>;
    describeConditionalForwarders(args: DescribeConditionalForwardersCommandInput, cb: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void): void;
    describeConditionalForwarders(args: DescribeConditionalForwardersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConditionalForwardersCommandOutput) => void): void;
    /**
     * <p>Obtains information about the directories that belong to this account.</p>
     *          <p>You can retrieve information about specific directories by passing the directory
     *          identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to
     *          the current account are returned.</p>
     *          <p>This operation supports pagination with the use of the <code>NextToken</code> request and
     *          response parameters. If more results are available, the
     *             <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the
     *          next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p>
     *          <p>You can also specify a maximum number of return results with the <code>Limit</code>
     *          parameter.</p>
     */
    describeDirectories(args: DescribeDirectoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDirectoriesCommandOutput>;
    describeDirectories(args: DescribeDirectoriesCommandInput, cb: (err: any, data?: DescribeDirectoriesCommandOutput) => void): void;
    describeDirectories(args: DescribeDirectoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDirectoriesCommandOutput) => void): void;
    /**
     * <p>Provides information about any domain controllers in your directory.</p>
     */
    describeDomainControllers(args: DescribeDomainControllersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainControllersCommandOutput>;
    describeDomainControllers(args: DescribeDomainControllersCommandInput, cb: (err: any, data?: DescribeDomainControllersCommandOutput) => void): void;
    describeDomainControllers(args: DescribeDomainControllersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainControllersCommandOutput) => void): void;
    /**
     * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p>
     *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
     */
    describeEventTopics(args: DescribeEventTopicsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEventTopicsCommandOutput>;
    describeEventTopics(args: DescribeEventTopicsCommandInput, cb: (err: any, data?: DescribeEventTopicsCommandOutput) => void): void;
    describeEventTopics(args: DescribeEventTopicsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEventTopicsCommandOutput) => void): void;
    /**
     * <p>Describes the status of LDAP security for the specified directory.</p>
     */
    describeLDAPSSettings(args: DescribeLDAPSSettingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLDAPSSettingsCommandOutput>;
    describeLDAPSSettings(args: DescribeLDAPSSettingsCommandInput, cb: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void): void;
    describeLDAPSSettings(args: DescribeLDAPSSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLDAPSSettingsCommandOutput) => void): void;
    /**
     * <p>Returns the shared directories in your account. </p>
     */
    describeSharedDirectories(args: DescribeSharedDirectoriesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSharedDirectoriesCommandOutput>;
    describeSharedDirectories(args: DescribeSharedDirectoriesCommandInput, cb: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void): void;
    describeSharedDirectories(args: DescribeSharedDirectoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSharedDirectoriesCommandOutput) => void): void;
    /**
     * <p>Obtains information about the directory snapshots that belong to this account.</p>
     *          <p>This operation supports pagination with the use of the <i>NextToken</i> request and
     *          response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i>
     *          member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to
     *          retrieve the next set of items.</p>
     *          <p>You can also specify a maximum number of return results with the <i>Limit</i>
     *          parameter.</p>
     */
    describeSnapshots(args: DescribeSnapshotsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSnapshotsCommandOutput>;
    describeSnapshots(args: DescribeSnapshotsCommandInput, cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void): void;
    describeSnapshots(args: DescribeSnapshotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void): void;
    /**
     * <p>Obtains information about the trust relationships for this account.</p>
     *          <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
     */
    describeTrusts(args: DescribeTrustsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrustsCommandOutput>;
    describeTrusts(args: DescribeTrustsCommandInput, cb: (err: any, data?: DescribeTrustsCommandOutput) => void): void;
    describeTrusts(args: DescribeTrustsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrustsCommandOutput) => void): void;
    /**
     * <p>Deactivates LDAP secure calls for the specified directory.</p>
     */
    disableLDAPS(args: DisableLDAPSCommandInput, options?: __HttpHandlerOptions): Promise<DisableLDAPSCommandOutput>;
    disableLDAPS(args: DisableLDAPSCommandInput, cb: (err: any, data?: DisableLDAPSCommandOutput) => void): void;
    disableLDAPS(args: DisableLDAPSCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableLDAPSCommandOutput) => void): void;
    /**
     * <p>Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
     */
    disableRadius(args: DisableRadiusCommandInput, options?: __HttpHandlerOptions): Promise<DisableRadiusCommandOutput>;
    disableRadius(args: DisableRadiusCommandInput, cb: (err: any, data?: DisableRadiusCommandOutput) => void): void;
    disableRadius(args: DisableRadiusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableRadiusCommandOutput) => void): void;
    /**
     * <p>Disables single-sign on for a directory.</p>
     */
    disableSso(args: DisableSsoCommandInput, options?: __HttpHandlerOptions): Promise<DisableSsoCommandOutput>;
    disableSso(args: DisableSsoCommandInput, cb: (err: any, data?: DisableSsoCommandOutput) => void): void;
    disableSso(args: DisableSsoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableSsoCommandOutput) => void): void;
    /**
     * <p>Activates the switch for the specific directory to always use LDAP secure calls.</p>
     */
    enableLDAPS(args: EnableLDAPSCommandInput, options?: __HttpHandlerOptions): Promise<EnableLDAPSCommandOutput>;
    enableLDAPS(args: EnableLDAPSCommandInput, cb: (err: any, data?: EnableLDAPSCommandOutput) => void): void;
    enableLDAPS(args: EnableLDAPSCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableLDAPSCommandOutput) => void): void;
    /**
     * <p>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
     */
    enableRadius(args: EnableRadiusCommandInput, options?: __HttpHandlerOptions): Promise<EnableRadiusCommandOutput>;
    enableRadius(args: EnableRadiusCommandInput, cb: (err: any, data?: EnableRadiusCommandOutput) => void): void;
    enableRadius(args: EnableRadiusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableRadiusCommandOutput) => void): void;
    /**
     * <p>Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately.</p>
     */
    enableSso(args: EnableSsoCommandInput, options?: __HttpHandlerOptions): Promise<EnableSsoCommandOutput>;
    enableSso(args: EnableSsoCommandInput, cb: (err: any, data?: EnableSsoCommandOutput) => void): void;
    enableSso(args: EnableSsoCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableSsoCommandOutput) => void): void;
    /**
     * <p>Obtains directory limit information for the current Region.</p>
     */
    getDirectoryLimits(args: GetDirectoryLimitsCommandInput, options?: __HttpHandlerOptions): Promise<GetDirectoryLimitsCommandOutput>;
    getDirectoryLimits(args: GetDirectoryLimitsCommandInput, cb: (err: any, data?: GetDirectoryLimitsCommandOutput) => void): void;
    getDirectoryLimits(args: GetDirectoryLimitsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDirectoryLimitsCommandOutput) => void): void;
    /**
     * <p>Obtains the manual snapshot limits for a directory.</p>
     */
    getSnapshotLimits(args: GetSnapshotLimitsCommandInput, options?: __HttpHandlerOptions): Promise<GetSnapshotLimitsCommandOutput>;
    getSnapshotLimits(args: GetSnapshotLimitsCommandInput, cb: (err: any, data?: GetSnapshotLimitsCommandOutput) => void): void;
    getSnapshotLimits(args: GetSnapshotLimitsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSnapshotLimitsCommandOutput) => void): void;
    /**
     * <p>For the specified directory, lists all the certificates registered for a secured LDAP connection.</p>
     */
    listCertificates(args: ListCertificatesCommandInput, options?: __HttpHandlerOptions): Promise<ListCertificatesCommandOutput>;
    listCertificates(args: ListCertificatesCommandInput, cb: (err: any, data?: ListCertificatesCommandOutput) => void): void;
    listCertificates(args: ListCertificatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCertificatesCommandOutput) => void): void;
    /**
     * <p>Lists the address blocks that you have added to a directory.</p>
     */
    listIpRoutes(args: ListIpRoutesCommandInput, options?: __HttpHandlerOptions): Promise<ListIpRoutesCommandOutput>;
    listIpRoutes(args: ListIpRoutesCommandInput, cb: (err: any, data?: ListIpRoutesCommandOutput) => void): void;
    listIpRoutes(args: ListIpRoutesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIpRoutesCommandOutput) => void): void;
    /**
     * <p>Lists the active log subscriptions for the AWS account.</p>
     */
    listLogSubscriptions(args: ListLogSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<ListLogSubscriptionsCommandOutput>;
    listLogSubscriptions(args: ListLogSubscriptionsCommandInput, cb: (err: any, data?: ListLogSubscriptionsCommandOutput) => void): void;
    listLogSubscriptions(args: ListLogSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLogSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
     */
    listSchemaExtensions(args: ListSchemaExtensionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemaExtensionsCommandOutput>;
    listSchemaExtensions(args: ListSchemaExtensionsCommandInput, cb: (err: any, data?: ListSchemaExtensionsCommandOutput) => void): void;
    listSchemaExtensions(args: ListSchemaExtensionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSchemaExtensionsCommandOutput) => void): void;
    /**
     * <p>Lists all tags on a directory.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Registers a certificate for secured LDAP connection.</p>
     */
    registerCertificate(args: RegisterCertificateCommandInput, options?: __HttpHandlerOptions): Promise<RegisterCertificateCommandOutput>;
    registerCertificate(args: RegisterCertificateCommandInput, cb: (err: any, data?: RegisterCertificateCommandOutput) => void): void;
    registerCertificate(args: RegisterCertificateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterCertificateCommandOutput) => void): void;
    /**
     * <p>Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.</p>
     */
    registerEventTopic(args: RegisterEventTopicCommandInput, options?: __HttpHandlerOptions): Promise<RegisterEventTopicCommandOutput>;
    registerEventTopic(args: RegisterEventTopicCommandInput, cb: (err: any, data?: RegisterEventTopicCommandOutput) => void): void;
    registerEventTopic(args: RegisterEventTopicCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterEventTopicCommandOutput) => void): void;
    /**
     * <p>Rejects a directory sharing request that was sent from the directory owner account.</p>
     */
    rejectSharedDirectory(args: RejectSharedDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<RejectSharedDirectoryCommandOutput>;
    rejectSharedDirectory(args: RejectSharedDirectoryCommandInput, cb: (err: any, data?: RejectSharedDirectoryCommandOutput) => void): void;
    rejectSharedDirectory(args: RejectSharedDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RejectSharedDirectoryCommandOutput) => void): void;
    /**
     * <p>Removes IP address blocks from a directory.</p>
     */
    removeIpRoutes(args: RemoveIpRoutesCommandInput, options?: __HttpHandlerOptions): Promise<RemoveIpRoutesCommandOutput>;
    removeIpRoutes(args: RemoveIpRoutesCommandInput, cb: (err: any, data?: RemoveIpRoutesCommandOutput) => void): void;
    removeIpRoutes(args: RemoveIpRoutesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveIpRoutesCommandOutput) => void): void;
    /**
     * <p>Removes tags from a directory.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.</p>
     *          <p>You can reset the password for any user in your directory with the following exceptions:</p>
     *          <ul>
     *             <li>
     *                <p>For Simple AD, you cannot reset the password for any user that is a member of either the
     *             <b>Domain Admins</b> or <b>Enterprise
     *             Admins</b> group except for the administrator user.</p>
     *             </li>
     *             <li>
     *                <p>For AWS Managed Microsoft AD, you can only reset the password for a user that is in an OU
     *           based off of the NetBIOS name that you typed when you created your directory. For example,
     *           you cannot reset the password for a user in the <b>AWS
     *             Reserved</b> OU. For more information about the OU structure for an AWS Managed
     *           Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>AWS Directory Service Administration
     *             Guide</i>.</p>
     *             </li>
     *          </ul>
     */
    resetUserPassword(args: ResetUserPasswordCommandInput, options?: __HttpHandlerOptions): Promise<ResetUserPasswordCommandOutput>;
    resetUserPassword(args: ResetUserPasswordCommandInput, cb: (err: any, data?: ResetUserPasswordCommandOutput) => void): void;
    resetUserPassword(args: ResetUserPasswordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetUserPasswordCommandOutput) => void): void;
    /**
     * <p>Restores a directory using an existing directory snapshot.</p>
     *          <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p>
     *          <p>This action returns as soon as the restore operation is initiated. You can monitor the
     *          progress of the restore operation by calling the <a>DescribeDirectories</a> operation with
     *          the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to
     *             <code>Active</code>, the restore operation is complete.</p>
     */
    restoreFromSnapshot(args: RestoreFromSnapshotCommandInput, options?: __HttpHandlerOptions): Promise<RestoreFromSnapshotCommandOutput>;
    restoreFromSnapshot(args: RestoreFromSnapshotCommandInput, cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void): void;
    restoreFromSnapshot(args: RestoreFromSnapshotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestoreFromSnapshotCommandOutput) => void): void;
    /**
     * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory
     *       owner) with another AWS account (directory consumer). With this operation you can use your
     *       directory from any AWS account and from any Amazon VPC within an AWS Region.</p>
     *          <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a
     *       shared directory in the directory consumer account. This shared directory contains the
     *       metadata to provide access to the directory within the directory owner account. The shared
     *       directory is visible in all VPCs in the directory consumer account.</p>
     *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
     *       shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It
     *       also determines whether you can share the directory with any other AWS account either inside
     *       or outside of the organization (<code>HANDSHAKE</code>).</p>
     *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
     *       which sends a directory sharing request to the directory consumer. </p>
     */
    shareDirectory(args: ShareDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<ShareDirectoryCommandOutput>;
    shareDirectory(args: ShareDirectoryCommandInput, cb: (err: any, data?: ShareDirectoryCommandOutput) => void): void;
    shareDirectory(args: ShareDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ShareDirectoryCommandOutput) => void): void;
    /**
     * <p>Applies a schema extension to a Microsoft AD directory.</p>
     */
    startSchemaExtension(args: StartSchemaExtensionCommandInput, options?: __HttpHandlerOptions): Promise<StartSchemaExtensionCommandOutput>;
    startSchemaExtension(args: StartSchemaExtensionCommandInput, cb: (err: any, data?: StartSchemaExtensionCommandOutput) => void): void;
    startSchemaExtension(args: StartSchemaExtensionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSchemaExtensionCommandOutput) => void): void;
    /**
     * <p>Stops the directory sharing between the directory owner and consumer accounts. </p>
     */
    unshareDirectory(args: UnshareDirectoryCommandInput, options?: __HttpHandlerOptions): Promise<UnshareDirectoryCommandOutput>;
    unshareDirectory(args: UnshareDirectoryCommandInput, cb: (err: any, data?: UnshareDirectoryCommandOutput) => void): void;
    unshareDirectory(args: UnshareDirectoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnshareDirectoryCommandOutput) => void): void;
    /**
     * <p>Updates a conditional forwarder that has been set up for your AWS directory.</p>
     */
    updateConditionalForwarder(args: UpdateConditionalForwarderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConditionalForwarderCommandOutput>;
    updateConditionalForwarder(args: UpdateConditionalForwarderCommandInput, cb: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void): void;
    updateConditionalForwarder(args: UpdateConditionalForwarderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConditionalForwarderCommandOutput) => void): void;
    /**
     * <p>Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.</p>
     */
    updateNumberOfDomainControllers(args: UpdateNumberOfDomainControllersCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNumberOfDomainControllersCommandOutput>;
    updateNumberOfDomainControllers(args: UpdateNumberOfDomainControllersCommandInput, cb: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void): void;
    updateNumberOfDomainControllers(args: UpdateNumberOfDomainControllersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNumberOfDomainControllersCommandOutput) => void): void;
    /**
     * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.</p>
     */
    updateRadius(args: UpdateRadiusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRadiusCommandOutput>;
    updateRadius(args: UpdateRadiusCommandInput, cb: (err: any, data?: UpdateRadiusCommandOutput) => void): void;
    updateRadius(args: UpdateRadiusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRadiusCommandOutput) => void): void;
    /**
     * <p>Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.</p>
     */
    updateTrust(args: UpdateTrustCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrustCommandOutput>;
    updateTrust(args: UpdateTrustCommandInput, cb: (err: any, data?: UpdateTrustCommandOutput) => void): void;
    updateTrust(args: UpdateTrustCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrustCommandOutput) => void): void;
    /**
     * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p>
     *          <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
     */
    verifyTrust(args: VerifyTrustCommandInput, options?: __HttpHandlerOptions): Promise<VerifyTrustCommandOutput>;
    verifyTrust(args: VerifyTrustCommandInput, cb: (err: any, data?: VerifyTrustCommandOutput) => void): void;
    verifyTrust(args: VerifyTrustCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: VerifyTrustCommandOutput) => void): void;
}
