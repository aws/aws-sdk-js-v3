import { SSMClient } from "./SSMClient";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { CancelCommandCommandInput, CancelCommandCommandOutput } from "./commands/CancelCommandCommand";
import { CancelMaintenanceWindowExecutionCommandInput, CancelMaintenanceWindowExecutionCommandOutput } from "./commands/CancelMaintenanceWindowExecutionCommand";
import { CreateActivationCommandInput, CreateActivationCommandOutput } from "./commands/CreateActivationCommand";
import { CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput } from "./commands/CreateAssociationBatchCommand";
import { CreateAssociationCommandInput, CreateAssociationCommandOutput } from "./commands/CreateAssociationCommand";
import { CreateDocumentCommandInput, CreateDocumentCommandOutput } from "./commands/CreateDocumentCommand";
import { CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput } from "./commands/CreateMaintenanceWindowCommand";
import { CreateOpsItemCommandInput, CreateOpsItemCommandOutput } from "./commands/CreateOpsItemCommand";
import { CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput } from "./commands/CreatePatchBaselineCommand";
import { CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput } from "./commands/CreateResourceDataSyncCommand";
import { DeleteActivationCommandInput, DeleteActivationCommandOutput } from "./commands/DeleteActivationCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "./commands/DeleteAssociationCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand";
import { DeleteInventoryCommandInput, DeleteInventoryCommandOutput } from "./commands/DeleteInventoryCommand";
import { DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput } from "./commands/DeleteMaintenanceWindowCommand";
import { DeleteParameterCommandInput, DeleteParameterCommandOutput } from "./commands/DeleteParameterCommand";
import { DeleteParametersCommandInput, DeleteParametersCommandOutput } from "./commands/DeleteParametersCommand";
import { DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput } from "./commands/DeletePatchBaselineCommand";
import { DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput } from "./commands/DeleteResourceDataSyncCommand";
import { DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput } from "./commands/DeregisterManagedInstanceCommand";
import { DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput } from "./commands/DeregisterPatchBaselineForPatchGroupCommand";
import { DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput } from "./commands/DeregisterTargetFromMaintenanceWindowCommand";
import { DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput } from "./commands/DeregisterTaskFromMaintenanceWindowCommand";
import { DescribeActivationsCommandInput, DescribeActivationsCommandOutput } from "./commands/DescribeActivationsCommand";
import { DescribeAssociationCommandInput, DescribeAssociationCommandOutput } from "./commands/DescribeAssociationCommand";
import { DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput } from "./commands/DescribeAssociationExecutionTargetsCommand";
import { DescribeAssociationExecutionsCommandInput, DescribeAssociationExecutionsCommandOutput } from "./commands/DescribeAssociationExecutionsCommand";
import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput } from "./commands/DescribeAutomationExecutionsCommand";
import { DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput } from "./commands/DescribeAutomationStepExecutionsCommand";
import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput } from "./commands/DescribeAvailablePatchesCommand";
import { DescribeDocumentCommandInput, DescribeDocumentCommandOutput } from "./commands/DescribeDocumentCommand";
import { DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput } from "./commands/DescribeDocumentPermissionCommand";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput } from "./commands/DescribeEffectiveInstanceAssociationsCommand";
import { DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput } from "./commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput } from "./commands/DescribeInstanceAssociationsStatusCommand";
import { DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput } from "./commands/DescribeInstanceInformationCommand";
import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput } from "./commands/DescribeInstancePatchStatesCommand";
import { DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput } from "./commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput } from "./commands/DescribeInstancePatchesCommand";
import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput } from "./commands/DescribeInventoryDeletionsCommand";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput } from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput } from "./commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput } from "./commands/DescribeMaintenanceWindowExecutionsCommand";
import { DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput } from "./commands/DescribeMaintenanceWindowScheduleCommand";
import { DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput } from "./commands/DescribeMaintenanceWindowTargetsCommand";
import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput } from "./commands/DescribeMaintenanceWindowTasksCommand";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput } from "./commands/DescribeMaintenanceWindowsCommand";
import { DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput } from "./commands/DescribeMaintenanceWindowsForTargetCommand";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "./commands/DescribeOpsItemsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand";
import { DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput } from "./commands/DescribePatchBaselinesCommand";
import { DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput } from "./commands/DescribePatchGroupStateCommand";
import { DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput } from "./commands/DescribePatchGroupsCommand";
import { DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput } from "./commands/DescribePatchPropertiesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import { GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput } from "./commands/GetAutomationExecutionCommand";
import { GetCalendarStateCommandInput, GetCalendarStateCommandOutput } from "./commands/GetCalendarStateCommand";
import { GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput } from "./commands/GetCommandInvocationCommand";
import { GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput } from "./commands/GetConnectionStatusCommand";
import { GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput } from "./commands/GetDefaultPatchBaselineCommand";
import { GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput } from "./commands/GetDeployablePatchSnapshotForInstanceCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import { GetInventoryCommandInput, GetInventoryCommandOutput } from "./commands/GetInventoryCommand";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "./commands/GetInventorySchemaCommand";
import { GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput } from "./commands/GetMaintenanceWindowCommand";
import { GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput } from "./commands/GetMaintenanceWindowExecutionCommand";
import { GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput } from "./commands/GetMaintenanceWindowExecutionTaskCommand";
import { GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput } from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand";
import { GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput } from "./commands/GetMaintenanceWindowTaskCommand";
import { GetOpsItemCommandInput, GetOpsItemCommandOutput } from "./commands/GetOpsItemCommand";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "./commands/GetOpsSummaryCommand";
import { GetParameterCommandInput, GetParameterCommandOutput } from "./commands/GetParameterCommand";
import { GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput } from "./commands/GetParameterHistoryCommand";
import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput } from "./commands/GetParametersByPathCommand";
import { GetParametersCommandInput, GetParametersCommandOutput } from "./commands/GetParametersCommand";
import { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput } from "./commands/GetPatchBaselineCommand";
import { GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput } from "./commands/GetPatchBaselineForPatchGroupCommand";
import { GetServiceSettingCommandInput, GetServiceSettingCommandOutput } from "./commands/GetServiceSettingCommand";
import { LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput } from "./commands/LabelParameterVersionCommand";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput } from "./commands/ListAssociationVersionsCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput } from "./commands/ListCommandInvocationsCommand";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "./commands/ListCommandsCommand";
import { ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput } from "./commands/ListComplianceItemsCommand";
import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput } from "./commands/ListComplianceSummariesCommand";
import { ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput } from "./commands/ListDocumentVersionsCommand";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "./commands/ListDocumentsCommand";
import { ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput } from "./commands/ListInventoryEntriesCommand";
import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput } from "./commands/ListResourceComplianceSummariesCommand";
import { ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput } from "./commands/ListResourceDataSyncCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput } from "./commands/ModifyDocumentPermissionCommand";
import { PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput } from "./commands/PutComplianceItemsCommand";
import { PutInventoryCommandInput, PutInventoryCommandOutput } from "./commands/PutInventoryCommand";
import { PutParameterCommandInput, PutParameterCommandOutput } from "./commands/PutParameterCommand";
import { RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput } from "./commands/RegisterDefaultPatchBaselineCommand";
import { RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput } from "./commands/RegisterPatchBaselineForPatchGroupCommand";
import { RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput } from "./commands/RegisterTargetWithMaintenanceWindowCommand";
import { RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput } from "./commands/RegisterTaskWithMaintenanceWindowCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput } from "./commands/ResetServiceSettingCommand";
import { ResumeSessionCommandInput, ResumeSessionCommandOutput } from "./commands/ResumeSessionCommand";
import { SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput } from "./commands/SendAutomationSignalCommand";
import { SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand";
import { StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput } from "./commands/StartAssociationsOnceCommand";
import { StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput } from "./commands/StartAutomationExecutionCommand";
import { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand";
import { StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput } from "./commands/StopAutomationExecutionCommand";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "./commands/TerminateSessionCommand";
import { UpdateAssociationCommandInput, UpdateAssociationCommandOutput } from "./commands/UpdateAssociationCommand";
import { UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput } from "./commands/UpdateAssociationStatusCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand";
import { UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput } from "./commands/UpdateDocumentDefaultVersionCommand";
import { UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput } from "./commands/UpdateMaintenanceWindowCommand";
import { UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput } from "./commands/UpdateMaintenanceWindowTargetCommand";
import { UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput } from "./commands/UpdateMaintenanceWindowTaskCommand";
import { UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput } from "./commands/UpdateManagedInstanceRoleCommand";
import { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput } from "./commands/UpdateOpsItemCommand";
import { UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput } from "./commands/UpdatePatchBaselineCommand";
import { UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput } from "./commands/UpdateResourceDataSyncCommand";
import { UpdateServiceSettingCommandInput, UpdateServiceSettingCommandOutput } from "./commands/UpdateServiceSettingCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Systems Manager</fullname>
 *          <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as
 *    collecting system inventory, applying operating system (OS) patches, automating the creation of
 *    Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale.
 *    Systems Manager lets you remotely and securely manage the configuration of your managed instances. A
 *     <i>managed instance</i> is any Amazon EC2 instance or on-premises machine in your
 *    hybrid environment that has been configured for Systems Manager.</p>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p>
 *          <p>To get started, verify prerequisites and configure managed instances. For more information,
 *    see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting Up AWS Systems Manager</a> in
 *    the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>For information about other API actions you can perform on Amazon EC2 instances, see the <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information about how to use a Query API, see
 *     <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API Requests</a>. </p>
 */
export declare class SSM extends SSMClient {
    /**
     * <p>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you
     *    can assign to your documents, managed instances, maintenance windows, Parameter Store parameters,
     *    and patch baselines. Tags enable you to categorize your resources in different ways, for example,
     *    by purpose, owner, or environment. Each tag consists of a key and an optional value, both of
     *    which you define. For example, you could define a set of tags for your account's managed
     *    instances that helps you track each instance's owner and stack level. For example: Key=Owner and
     *    Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or
     *    Test.</p>
     *
     *          <p>Each resource can have a maximum of 50 tags. </p>
     *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
     *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
     *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
     *    to Amazon EC2 and are interpreted strictly as a string of characters. </p>
     *          <p>For more information about tags, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your
     *     Amazon EC2 Resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>Attempts to cancel the command specified by the Command ID. There is no guarantee that the
     *    command will be terminated and the underlying process stopped.</p>
     */
    cancelCommand(args: CancelCommandCommandInput, options?: __HttpHandlerOptions): Promise<CancelCommandCommandOutput>;
    cancelCommand(args: CancelCommandCommandInput, cb: (err: any, data?: CancelCommandCommandOutput) => void): void;
    cancelCommand(args: CancelCommandCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelCommandCommandOutput) => void): void;
    /**
     * <p>Stops a maintenance window execution that is already in progress and cancels any tasks in
     *    the window that have not already starting running. (Tasks already in progress will continue to
     *    completion.)</p>
     */
    cancelMaintenanceWindowExecution(args: CancelMaintenanceWindowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<CancelMaintenanceWindowExecutionCommandOutput>;
    cancelMaintenanceWindowExecution(args: CancelMaintenanceWindowExecutionCommandInput, cb: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void): void;
    cancelMaintenanceWindowExecution(args: CancelMaintenanceWindowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelMaintenanceWindowExecutionCommandOutput) => void): void;
    /**
     * <p>Generates an activation code and activation ID you can use to register your on-premises
     *    server or virtual machine (VM) with Systems Manager. Registering these machines with Systems Manager makes it
     *    possible to manage them using Systems Manager capabilities. You use the activation code and ID when
     *    installing SSM Agent on machines in your hybrid environment. For more information about
     *    requirements for managing on-premises instances and VMs using Systems Manager, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting Up AWS Systems Manager for Hybrid
     *     Environments</a> in the <i>AWS Systems Manager User Guide</i>. </p>
     *          <note>
     *             <p>On-premises servers or VMs that are registered with Systems Manager and Amazon EC2 instances that you
     *     manage with Systems Manager are all called <i>managed instances</i>.</p>
     *          </note>
     */
    createActivation(args: CreateActivationCommandInput, options?: __HttpHandlerOptions): Promise<CreateActivationCommandOutput>;
    createActivation(args: CreateActivationCommandInput, cb: (err: any, data?: CreateActivationCommandOutput) => void): void;
    createActivation(args: CreateActivationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateActivationCommandOutput) => void): void;
    /**
     * <p>Associates the specified Systems Manager document with the specified instances or targets.</p>
     *          <p>When you associate a document with one or more instances using instance IDs or tags,
     *    SSM Agent running on the instance processes the document and configures the instance as
     *    specified.</p>
     *          <p>If you associate a document with an instance that already has an associated document, the
     *    system returns the AssociationAlreadyExists exception.</p>
     */
    createAssociation(args: CreateAssociationCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssociationCommandOutput>;
    createAssociation(args: CreateAssociationCommandInput, cb: (err: any, data?: CreateAssociationCommandOutput) => void): void;
    createAssociation(args: CreateAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssociationCommandOutput) => void): void;
    /**
     * <p>Associates the specified Systems Manager document with the specified instances or targets.</p>
     *          <p>When you associate a document with one or more instances using instance IDs or tags,
     *    SSM Agent running on the instance processes the document and configures the instance as
     *    specified.</p>
     *          <p>If you associate a document with an instance that already has an associated document, the
     *    system returns the AssociationAlreadyExists exception.</p>
     */
    createAssociationBatch(args: CreateAssociationBatchCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssociationBatchCommandOutput>;
    createAssociationBatch(args: CreateAssociationBatchCommandInput, cb: (err: any, data?: CreateAssociationBatchCommandOutput) => void): void;
    createAssociationBatch(args: CreateAssociationBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssociationBatchCommandOutput) => void): void;
    /**
     * <p>Creates a Systems Manager document.</p>
     *          <p>After you create a document, you can use CreateAssociation to associate it with one or more
     *    running instances.</p>
     */
    createDocument(args: CreateDocumentCommandInput, options?: __HttpHandlerOptions): Promise<CreateDocumentCommandOutput>;
    createDocument(args: CreateDocumentCommandInput, cb: (err: any, data?: CreateDocumentCommandOutput) => void): void;
    createDocument(args: CreateDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDocumentCommandOutput) => void): void;
    /**
     * <p>Creates a new maintenance window.</p>
     *          <note>
     *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
     *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
     *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
     *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
     *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
     *     after 5 PM.</p>
     *          </note>
     */
    createMaintenanceWindow(args: CreateMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<CreateMaintenanceWindowCommandOutput>;
    createMaintenanceWindow(args: CreateMaintenanceWindowCommandInput, cb: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void): void;
    createMaintenanceWindow(args: CreateMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM)
     *    to create a new OpsItem. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>.</p>
     *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
     *    operational issues impacting the performance and health of their AWS resources. For more
     *    information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>. </p>
     */
    createOpsItem(args: CreateOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<CreateOpsItemCommandOutput>;
    createOpsItem(args: CreateOpsItemCommandInput, cb: (err: any, data?: CreateOpsItemCommandOutput) => void): void;
    createOpsItem(args: CreateOpsItemCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOpsItemCommandOutput) => void): void;
    /**
     * <p>Creates a patch baseline.</p>
     *          <note>
     *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
     *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
     *          </note>
     */
    createPatchBaseline(args: CreatePatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<CreatePatchBaselineCommandOutput>;
    createPatchBaseline(args: CreatePatchBaselineCommandInput, cb: (err: any, data?: CreatePatchBaselineCommandOutput) => void): void;
    createPatchBaseline(args: CreatePatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePatchBaselineCommandOutput) => void): void;
    /**
     * <p>A resource data sync helps you view data from multiple sources in a single location. Systems
     *    Manager offers two types of resource data sync: <code>SyncToDestination</code> and
     *     <code>SyncFromSource</code>.</p>
     *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
     *    synchronize Inventory data from multiple AWS Regions to a single Amazon S3 bucket. For more
     *    information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource
     *     Data Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p>
     *
     *          <p>You can configure Systems Manager Explorer to use the <code>SyncToDestination</code> type to
     *    synchronize operational work items (OpsItems) and operational data (OpsData) from multiple AWS
     *    Regions to a single Amazon S3 bucket. You can also configure Explorer to use the
     *     <code>SyncFromSource</code> type. This type synchronizes OpsItems and OpsData from multiple AWS
     *    accounts and Regions by using AWS Organizations. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting Up Explorer to Display Data from
     *     Multiple Accounts and Regions</a> in the <i>AWS Systems Manager User Guide</i>.</p>
     *
     *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
     *    successful initial sync is completed, the system continuously syncs data. To check the status of
     *    a sync, use the <a>ListResourceDataSync</a>.</p>
     *
     *          <note>
     *             <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption
     *     in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3
     *     bucket by creating a restrictive bucket policy. </p>
     *          </note>
     */
    createResourceDataSync(args: CreateResourceDataSyncCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceDataSyncCommandOutput>;
    createResourceDataSync(args: CreateResourceDataSyncCommandInput, cb: (err: any, data?: CreateResourceDataSyncCommandOutput) => void): void;
    createResourceDataSync(args: CreateResourceDataSyncCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceDataSyncCommandOutput) => void): void;
    /**
     * <p>Deletes an activation. You are not required to delete an activation. If you delete an
     *    activation, you can no longer use it to register additional managed instances. Deleting an
     *    activation does not de-register managed instances. You must manually de-register managed
     *    instances.</p>
     */
    deleteActivation(args: DeleteActivationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteActivationCommandOutput>;
    deleteActivation(args: DeleteActivationCommandInput, cb: (err: any, data?: DeleteActivationCommandOutput) => void): void;
    deleteActivation(args: DeleteActivationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteActivationCommandOutput) => void): void;
    /**
     * <p>Disassociates the specified Systems Manager document from the specified instance.</p>
     *          <p>When you disassociate a document from an instance, it does not change the configuration of
     *    the instance. To change the configuration state of an instance after you disassociate a document,
     *    you must create a new document with the desired configuration and associate it with the
     *    instance.</p>
     */
    deleteAssociation(args: DeleteAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssociationCommandOutput>;
    deleteAssociation(args: DeleteAssociationCommandInput, cb: (err: any, data?: DeleteAssociationCommandOutput) => void): void;
    deleteAssociation(args: DeleteAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssociationCommandOutput) => void): void;
    /**
     * <p>Deletes the Systems Manager document and all instance associations to the document.</p>
     *          <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
     */
    deleteDocument(args: DeleteDocumentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDocumentCommandOutput>;
    deleteDocument(args: DeleteDocumentCommandInput, cb: (err: any, data?: DeleteDocumentCommandOutput) => void): void;
    deleteDocument(args: DeleteDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDocumentCommandOutput) => void): void;
    /**
     * <p>Delete a custom inventory type, or the data associated with a custom Inventory type.
     *    Deleting a custom inventory type is also referred to as deleting a custom inventory
     *    schema.</p>
     */
    deleteInventory(args: DeleteInventoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInventoryCommandOutput>;
    deleteInventory(args: DeleteInventoryCommandInput, cb: (err: any, data?: DeleteInventoryCommandOutput) => void): void;
    deleteInventory(args: DeleteInventoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInventoryCommandOutput) => void): void;
    /**
     * <p>Deletes a maintenance window.</p>
     */
    deleteMaintenanceWindow(args: DeleteMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMaintenanceWindowCommandOutput>;
    deleteMaintenanceWindow(args: DeleteMaintenanceWindowCommandInput, cb: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void): void;
    deleteMaintenanceWindow(args: DeleteMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Delete a parameter from the system.</p>
     */
    deleteParameter(args: DeleteParameterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteParameterCommandOutput>;
    deleteParameter(args: DeleteParameterCommandInput, cb: (err: any, data?: DeleteParameterCommandOutput) => void): void;
    deleteParameter(args: DeleteParameterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteParameterCommandOutput) => void): void;
    /**
     * <p>Delete a list of parameters.</p>
     */
    deleteParameters(args: DeleteParametersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteParametersCommandOutput>;
    deleteParameters(args: DeleteParametersCommandInput, cb: (err: any, data?: DeleteParametersCommandOutput) => void): void;
    deleteParameters(args: DeleteParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteParametersCommandOutput) => void): void;
    /**
     * <p>Deletes a patch baseline.</p>
     */
    deletePatchBaseline(args: DeletePatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<DeletePatchBaselineCommandOutput>;
    deletePatchBaseline(args: DeletePatchBaselineCommandInput, cb: (err: any, data?: DeletePatchBaselineCommandOutput) => void): void;
    deletePatchBaseline(args: DeletePatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePatchBaselineCommandOutput) => void): void;
    /**
     * <p>Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to
     *    data on managed instances are no longer synced to or from the target. Deleting a sync
     *    configuration does not delete data.</p>
     */
    deleteResourceDataSync(args: DeleteResourceDataSyncCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourceDataSyncCommandOutput>;
    deleteResourceDataSync(args: DeleteResourceDataSyncCommandInput, cb: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void): void;
    deleteResourceDataSync(args: DeleteResourceDataSyncCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourceDataSyncCommandOutput) => void): void;
    /**
     * <p>Removes the server or virtual machine from the list of registered servers. You can
     *    reregister the instance again at any time. If you don't plan to use Run Command on the server, we
     *    suggest uninstalling SSM Agent first.</p>
     */
    deregisterManagedInstance(args: DeregisterManagedInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterManagedInstanceCommandOutput>;
    deregisterManagedInstance(args: DeregisterManagedInstanceCommandInput, cb: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void): void;
    deregisterManagedInstance(args: DeregisterManagedInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterManagedInstanceCommandOutput) => void): void;
    /**
     * <p>Removes a patch group from a patch baseline.</p>
     */
    deregisterPatchBaselineForPatchGroup(args: DeregisterPatchBaselineForPatchGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput>;
    deregisterPatchBaselineForPatchGroup(args: DeregisterPatchBaselineForPatchGroupCommandInput, cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void): void;
    deregisterPatchBaselineForPatchGroup(args: DeregisterPatchBaselineForPatchGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterPatchBaselineForPatchGroupCommandOutput) => void): void;
    /**
     * <p>Removes a target from a maintenance window.</p>
     */
    deregisterTargetFromMaintenanceWindow(args: DeregisterTargetFromMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput>;
    deregisterTargetFromMaintenanceWindow(args: DeregisterTargetFromMaintenanceWindowCommandInput, cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void): void;
    deregisterTargetFromMaintenanceWindow(args: DeregisterTargetFromMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterTargetFromMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Removes a task from a maintenance window.</p>
     */
    deregisterTaskFromMaintenanceWindow(args: DeregisterTaskFromMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput>;
    deregisterTaskFromMaintenanceWindow(args: DeregisterTaskFromMaintenanceWindowCommandInput, cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void): void;
    deregisterTaskFromMaintenanceWindow(args: DeregisterTaskFromMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterTaskFromMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Describes details about the activation, such as the date and time the activation was
     *    created, its expiration date, the IAM role assigned to the instances in the activation, and the
     *    number of instances registered by using this activation.</p>
     */
    describeActivations(args: DescribeActivationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActivationsCommandOutput>;
    describeActivations(args: DescribeActivationsCommandInput, cb: (err: any, data?: DescribeActivationsCommandOutput) => void): void;
    describeActivations(args: DescribeActivationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActivationsCommandOutput) => void): void;
    /**
     * <p>Describes the association for the specified target or instance. If you created the
     *    association by using the <code>Targets</code> parameter, then you must retrieve the association
     *    by using the association ID. If you created the association by specifying an instance ID and a
     *    Systems Manager document, then you retrieve the association by specifying the document name and the
     *    instance ID. </p>
     */
    describeAssociation(args: DescribeAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssociationCommandOutput>;
    describeAssociation(args: DescribeAssociationCommandInput, cb: (err: any, data?: DescribeAssociationCommandOutput) => void): void;
    describeAssociation(args: DescribeAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssociationCommandOutput) => void): void;
    /**
     * <p>Use this API action to view information about a specific execution of a specific
     *    association.</p>
     */
    describeAssociationExecutionTargets(args: DescribeAssociationExecutionTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssociationExecutionTargetsCommandOutput>;
    describeAssociationExecutionTargets(args: DescribeAssociationExecutionTargetsCommandInput, cb: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void): void;
    describeAssociationExecutionTargets(args: DescribeAssociationExecutionTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssociationExecutionTargetsCommandOutput) => void): void;
    /**
     * <p>Use this API action to view all executions for a specific association ID. </p>
     */
    describeAssociationExecutions(args: DescribeAssociationExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssociationExecutionsCommandOutput>;
    describeAssociationExecutions(args: DescribeAssociationExecutionsCommandInput, cb: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void): void;
    describeAssociationExecutions(args: DescribeAssociationExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssociationExecutionsCommandOutput) => void): void;
    /**
     * <p>Provides details about all active and terminated Automation executions.</p>
     */
    describeAutomationExecutions(args: DescribeAutomationExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutomationExecutionsCommandOutput>;
    describeAutomationExecutions(args: DescribeAutomationExecutionsCommandInput, cb: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void): void;
    describeAutomationExecutions(args: DescribeAutomationExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutomationExecutionsCommandOutput) => void): void;
    /**
     * <p>Information about all active and terminated step executions in an Automation
     *    workflow.</p>
     */
    describeAutomationStepExecutions(args: DescribeAutomationStepExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutomationStepExecutionsCommandOutput>;
    describeAutomationStepExecutions(args: DescribeAutomationStepExecutionsCommandInput, cb: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void): void;
    describeAutomationStepExecutions(args: DescribeAutomationStepExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutomationStepExecutionsCommandOutput) => void): void;
    /**
     * <p>Lists all patches eligible to be included in a patch baseline.</p>
     */
    describeAvailablePatches(args: DescribeAvailablePatchesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAvailablePatchesCommandOutput>;
    describeAvailablePatches(args: DescribeAvailablePatchesCommandInput, cb: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void): void;
    describeAvailablePatches(args: DescribeAvailablePatchesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAvailablePatchesCommandOutput) => void): void;
    /**
     * <p>Describes the specified Systems Manager document.</p>
     */
    describeDocument(args: DescribeDocumentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDocumentCommandOutput>;
    describeDocument(args: DescribeDocumentCommandInput, cb: (err: any, data?: DescribeDocumentCommandOutput) => void): void;
    describeDocument(args: DescribeDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDocumentCommandOutput) => void): void;
    /**
     * <p>Describes the permissions for a Systems Manager document. If you created the document, you are the
     *    owner. If a document is shared, it can either be shared privately (by specifying a user's AWS
     *    account ID) or publicly (<i>All</i>). </p>
     */
    describeDocumentPermission(args: DescribeDocumentPermissionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDocumentPermissionCommandOutput>;
    describeDocumentPermission(args: DescribeDocumentPermissionCommandInput, cb: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void): void;
    describeDocumentPermission(args: DescribeDocumentPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDocumentPermissionCommandOutput) => void): void;
    /**
     * <p>All associations for the instance(s).</p>
     */
    describeEffectiveInstanceAssociations(args: DescribeEffectiveInstanceAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEffectiveInstanceAssociationsCommandOutput>;
    describeEffectiveInstanceAssociations(args: DescribeEffectiveInstanceAssociationsCommandInput, cb: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void): void;
    describeEffectiveInstanceAssociations(args: DescribeEffectiveInstanceAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEffectiveInstanceAssociationsCommandOutput) => void): void;
    /**
     * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
     *    patch baseline. Note that this API applies only to Windows patch baselines.</p>
     */
    describeEffectivePatchesForPatchBaseline(args: DescribeEffectivePatchesForPatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput>;
    describeEffectivePatchesForPatchBaseline(args: DescribeEffectivePatchesForPatchBaselineCommandInput, cb: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void): void;
    describeEffectivePatchesForPatchBaseline(args: DescribeEffectivePatchesForPatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEffectivePatchesForPatchBaselineCommandOutput) => void): void;
    /**
     * <p>The status of the associations for the instance(s).</p>
     */
    describeInstanceAssociationsStatus(args: DescribeInstanceAssociationsStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstanceAssociationsStatusCommandOutput>;
    describeInstanceAssociationsStatus(args: DescribeInstanceAssociationsStatusCommandInput, cb: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void): void;
    describeInstanceAssociationsStatus(args: DescribeInstanceAssociationsStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstanceAssociationsStatusCommandOutput) => void): void;
    /**
     * <p>Describes one or more of your instances. You can use this to get information about instances
     *    like the operating system platform, the SSM Agent version (Linux), status etc. If you specify one
     *    or more instance IDs, it returns information for those instances. If you do not specify instance
     *    IDs, it returns information for all your instances. If you specify an instance ID that is not
     *    valid or an instance that you do not own, you receive an error. </p>
     *          <note>
     *             <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM)
     *     role assigned to on-premises instances. This call does not return the IAM role for Amazon EC2
     *     instances.</p>
     *          </note>
     */
    describeInstanceInformation(args: DescribeInstanceInformationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstanceInformationCommandOutput>;
    describeInstanceInformation(args: DescribeInstanceInformationCommandInput, cb: (err: any, data?: DescribeInstanceInformationCommandOutput) => void): void;
    describeInstanceInformation(args: DescribeInstanceInformationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstanceInformationCommandOutput) => void): void;
    /**
     * <p>Retrieves the high-level patch state of one or more instances.</p>
     */
    describeInstancePatchStates(args: DescribeInstancePatchStatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstancePatchStatesCommandOutput>;
    describeInstancePatchStates(args: DescribeInstancePatchStatesCommandInput, cb: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void): void;
    describeInstancePatchStates(args: DescribeInstancePatchStatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstancePatchStatesCommandOutput) => void): void;
    /**
     * <p>Retrieves the high-level patch state for the instances in the specified patch group.</p>
     */
    describeInstancePatchStatesForPatchGroup(args: DescribeInstancePatchStatesForPatchGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput>;
    describeInstancePatchStatesForPatchGroup(args: DescribeInstancePatchStatesForPatchGroupCommandInput, cb: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void): void;
    describeInstancePatchStatesForPatchGroup(args: DescribeInstancePatchStatesForPatchGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstancePatchStatesForPatchGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the patches on the specified instance and their state relative
     *    to the patch baseline being used for the instance.</p>
     */
    describeInstancePatches(args: DescribeInstancePatchesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInstancePatchesCommandOutput>;
    describeInstancePatches(args: DescribeInstancePatchesCommandInput, cb: (err: any, data?: DescribeInstancePatchesCommandOutput) => void): void;
    describeInstancePatches(args: DescribeInstancePatchesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInstancePatchesCommandOutput) => void): void;
    /**
     * <p>Describes a specific delete inventory operation.</p>
     */
    describeInventoryDeletions(args: DescribeInventoryDeletionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInventoryDeletionsCommandOutput>;
    describeInventoryDeletions(args: DescribeInventoryDeletionsCommandInput, cb: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void): void;
    describeInventoryDeletions(args: DescribeInventoryDeletionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInventoryDeletionsCommandOutput) => void): void;
    /**
     * <p>Retrieves the individual task executions (one per target) for a particular task run as part
     *    of a maintenance window execution.</p>
     */
    describeMaintenanceWindowExecutionTaskInvocations(args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
    describeMaintenanceWindowExecutionTaskInvocations(args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void): void;
    describeMaintenanceWindowExecutionTaskInvocations(args: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput) => void): void;
    /**
     * <p>For a given maintenance window execution, lists the tasks that were run.</p>
     */
    describeMaintenanceWindowExecutionTasks(args: DescribeMaintenanceWindowExecutionTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput>;
    describeMaintenanceWindowExecutionTasks(args: DescribeMaintenanceWindowExecutionTasksCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void): void;
    describeMaintenanceWindowExecutionTasks(args: DescribeMaintenanceWindowExecutionTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowExecutionTasksCommandOutput) => void): void;
    /**
     * <p>Lists the executions of a maintenance window. This includes information about when the
     *    maintenance window was scheduled to be active, and information about tasks registered and run
     *    with the maintenance window.</p>
     */
    describeMaintenanceWindowExecutions(args: DescribeMaintenanceWindowExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowExecutionsCommandOutput>;
    describeMaintenanceWindowExecutions(args: DescribeMaintenanceWindowExecutionsCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void): void;
    describeMaintenanceWindowExecutions(args: DescribeMaintenanceWindowExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowExecutionsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about upcoming executions of a maintenance window.</p>
     */
    describeMaintenanceWindowSchedule(args: DescribeMaintenanceWindowScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowScheduleCommandOutput>;
    describeMaintenanceWindowSchedule(args: DescribeMaintenanceWindowScheduleCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void): void;
    describeMaintenanceWindowSchedule(args: DescribeMaintenanceWindowScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowScheduleCommandOutput) => void): void;
    /**
     * <p>Lists the targets registered with the maintenance window.</p>
     */
    describeMaintenanceWindowTargets(args: DescribeMaintenanceWindowTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowTargetsCommandOutput>;
    describeMaintenanceWindowTargets(args: DescribeMaintenanceWindowTargetsCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void): void;
    describeMaintenanceWindowTargets(args: DescribeMaintenanceWindowTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowTargetsCommandOutput) => void): void;
    /**
     * <p>Lists the tasks in a maintenance window.</p>
     */
    describeMaintenanceWindowTasks(args: DescribeMaintenanceWindowTasksCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowTasksCommandOutput>;
    describeMaintenanceWindowTasks(args: DescribeMaintenanceWindowTasksCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void): void;
    describeMaintenanceWindowTasks(args: DescribeMaintenanceWindowTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowTasksCommandOutput) => void): void;
    /**
     * <p>Retrieves the maintenance windows in an AWS account.</p>
     */
    describeMaintenanceWindows(args: DescribeMaintenanceWindowsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowsCommandOutput>;
    describeMaintenanceWindows(args: DescribeMaintenanceWindowsCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void): void;
    describeMaintenanceWindows(args: DescribeMaintenanceWindowsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the maintenance window targets or tasks that an instance is
     *    associated with.</p>
     */
    describeMaintenanceWindowsForTarget(args: DescribeMaintenanceWindowsForTargetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMaintenanceWindowsForTargetCommandOutput>;
    describeMaintenanceWindowsForTarget(args: DescribeMaintenanceWindowsForTargetCommandInput, cb: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void): void;
    describeMaintenanceWindowsForTarget(args: DescribeMaintenanceWindowsForTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMaintenanceWindowsForTargetCommandOutput) => void): void;
    /**
     * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management
     *    (IAM) to query a list of OpsItems. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>.</p>
     *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
     *    operational issues impacting the performance and health of their AWS resources. For more
     *    information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>. </p>
     */
    describeOpsItems(args: DescribeOpsItemsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOpsItemsCommandOutput>;
    describeOpsItems(args: DescribeOpsItemsCommandInput, cb: (err: any, data?: DescribeOpsItemsCommandOutput) => void): void;
    describeOpsItems(args: DescribeOpsItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOpsItemsCommandOutput) => void): void;
    /**
     * <p>Get information about a parameter.</p>
     *          <note>
     *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
     *     in the request, the response includes information up to the limit specified. The number of items
     *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
     *     reaches an internal limit while processing the results, it stops the operation and returns the
     *     matching values up to that point and a <code>NextToken</code>. You can specify the
     *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
     *          </note>
     */
    describeParameters(args: DescribeParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeParametersCommandOutput>;
    describeParameters(args: DescribeParametersCommandInput, cb: (err: any, data?: DescribeParametersCommandOutput) => void): void;
    describeParameters(args: DescribeParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeParametersCommandOutput) => void): void;
    /**
     * <p>Lists the patch baselines in your AWS account.</p>
     */
    describePatchBaselines(args: DescribePatchBaselinesCommandInput, options?: __HttpHandlerOptions): Promise<DescribePatchBaselinesCommandOutput>;
    describePatchBaselines(args: DescribePatchBaselinesCommandInput, cb: (err: any, data?: DescribePatchBaselinesCommandOutput) => void): void;
    describePatchBaselines(args: DescribePatchBaselinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePatchBaselinesCommandOutput) => void): void;
    /**
     * <p>Returns high-level aggregated patch compliance state for a patch group.</p>
     */
    describePatchGroupState(args: DescribePatchGroupStateCommandInput, options?: __HttpHandlerOptions): Promise<DescribePatchGroupStateCommandOutput>;
    describePatchGroupState(args: DescribePatchGroupStateCommandInput, cb: (err: any, data?: DescribePatchGroupStateCommandOutput) => void): void;
    describePatchGroupState(args: DescribePatchGroupStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePatchGroupStateCommandOutput) => void): void;
    /**
     * <p>Lists all patch groups that have been registered with patch baselines.</p>
     */
    describePatchGroups(args: DescribePatchGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribePatchGroupsCommandOutput>;
    describePatchGroups(args: DescribePatchGroupsCommandInput, cb: (err: any, data?: DescribePatchGroupsCommandOutput) => void): void;
    describePatchGroups(args: DescribePatchGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePatchGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the properties of available patches organized by product, product family,
     *    classification, severity, and other properties of available patches. You can use the reported
     *    properties in the filters you specify in requests for actions such as <a>CreatePatchBaseline</a>, <a>UpdatePatchBaseline</a>, <a>DescribeAvailablePatches</a>, and <a>DescribePatchBaselines</a>.</p>
     *          <p>The following section lists the properties that can be used in filters for each major
     *    operating system type:</p>
     *          <dl>
     *             <dt>WINDOWS</dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, PRODUCT_FAMILY, CLASSIFICATION, MSRC_SEVERITY</p>
     *             </dd>
     *             <dt>AMAZON_LINUX</dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
     *             </dd>
     *             <dt>AMAZON_LINUX_2</dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
     *             </dd>
     *             <dt>UBUNTU </dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, PRIORITY</p>
     *             </dd>
     *             <dt>REDHAT_ENTERPRISE_LINUX</dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
     *             </dd>
     *             <dt>SUSE</dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
     *             </dd>
     *             <dt>CENTOS</dt>
     *             <dd>
     *                <p>Valid properties: PRODUCT, CLASSIFICATION, SEVERITY</p>
     *             </dd>
     *          </dl>
     */
    describePatchProperties(args: DescribePatchPropertiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribePatchPropertiesCommandOutput>;
    describePatchProperties(args: DescribePatchPropertiesCommandInput, cb: (err: any, data?: DescribePatchPropertiesCommandOutput) => void): void;
    describePatchProperties(args: DescribePatchPropertiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePatchPropertiesCommandOutput) => void): void;
    /**
     * <p>Retrieves a list of all active sessions (both connected and disconnected) or terminated
     *    sessions from the past 30 days.</p>
     */
    describeSessions(args: DescribeSessionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSessionsCommandOutput>;
    describeSessions(args: DescribeSessionsCommandInput, cb: (err: any, data?: DescribeSessionsCommandOutput) => void): void;
    describeSessions(args: DescribeSessionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSessionsCommandOutput) => void): void;
    /**
     * <p>Get detailed information about a particular Automation execution.</p>
     */
    getAutomationExecution(args: GetAutomationExecutionCommandInput, options?: __HttpHandlerOptions): Promise<GetAutomationExecutionCommandOutput>;
    getAutomationExecution(args: GetAutomationExecutionCommandInput, cb: (err: any, data?: GetAutomationExecutionCommandOutput) => void): void;
    getAutomationExecution(args: GetAutomationExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAutomationExecutionCommandOutput) => void): void;
    /**
     * <p>Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you
     *    specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific
     *    time, and returns the next time that the Change Calendar state will transition. If you do not
     *    specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries
     *    have two possible states: <code>OPEN</code> or <code>CLOSED</code>. For more information about
     *    Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change Calendar</a> in the <i>AWS Systems Manager User Guide</i>.</p>
     */
    getCalendarState(args: GetCalendarStateCommandInput, options?: __HttpHandlerOptions): Promise<GetCalendarStateCommandOutput>;
    getCalendarState(args: GetCalendarStateCommandInput, cb: (err: any, data?: GetCalendarStateCommandOutput) => void): void;
    getCalendarState(args: GetCalendarStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCalendarStateCommandOutput) => void): void;
    /**
     * <p>Returns detailed information about command execution for an invocation or plugin. </p>
     */
    getCommandInvocation(args: GetCommandInvocationCommandInput, options?: __HttpHandlerOptions): Promise<GetCommandInvocationCommandOutput>;
    getCommandInvocation(args: GetCommandInvocationCommandInput, cb: (err: any, data?: GetCommandInvocationCommandOutput) => void): void;
    getCommandInvocation(args: GetCommandInvocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCommandInvocationCommandOutput) => void): void;
    /**
     * <p>Retrieves the Session Manager connection status for an instance to determine whether it is connected
     *    and ready to receive Session Manager connections.</p>
     */
    getConnectionStatus(args: GetConnectionStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectionStatusCommandOutput>;
    getConnectionStatus(args: GetConnectionStatusCommandInput, cb: (err: any, data?: GetConnectionStatusCommandOutput) => void): void;
    getConnectionStatus(args: GetConnectionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConnectionStatusCommandOutput) => void): void;
    /**
     * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default
     *    patch baselines. For example, you can create a default patch baseline for each operating
     *    system.</p>
     *          <p>If you do not specify an operating system value, the default patch baseline for Windows is
     *    returned.</p>
     */
    getDefaultPatchBaseline(args: GetDefaultPatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<GetDefaultPatchBaselineCommandOutput>;
    getDefaultPatchBaseline(args: GetDefaultPatchBaselineCommandInput, cb: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void): void;
    getDefaultPatchBaseline(args: GetDefaultPatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDefaultPatchBaselineCommandOutput) => void): void;
    /**
     * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
     *    primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
     */
    getDeployablePatchSnapshotForInstance(args: GetDeployablePatchSnapshotForInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput>;
    getDeployablePatchSnapshotForInstance(args: GetDeployablePatchSnapshotForInstanceCommandInput, cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void): void;
    getDeployablePatchSnapshotForInstance(args: GetDeployablePatchSnapshotForInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeployablePatchSnapshotForInstanceCommandOutput) => void): void;
    /**
     * <p>Gets the contents of the specified Systems Manager document.</p>
     */
    getDocument(args: GetDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentCommandOutput>;
    getDocument(args: GetDocumentCommandInput, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
    getDocument(args: GetDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
    /**
     * <p>Query inventory information.</p>
     */
    getInventory(args: GetInventoryCommandInput, options?: __HttpHandlerOptions): Promise<GetInventoryCommandOutput>;
    getInventory(args: GetInventoryCommandInput, cb: (err: any, data?: GetInventoryCommandOutput) => void): void;
    getInventory(args: GetInventoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInventoryCommandOutput) => void): void;
    /**
     * <p>Return a list of inventory type names for the account, or return a list of attribute names
     *    for a specific Inventory item type. </p>
     */
    getInventorySchema(args: GetInventorySchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetInventorySchemaCommandOutput>;
    getInventorySchema(args: GetInventorySchemaCommandInput, cb: (err: any, data?: GetInventorySchemaCommandOutput) => void): void;
    getInventorySchema(args: GetInventorySchemaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInventorySchemaCommandOutput) => void): void;
    /**
     * <p>Retrieves a maintenance window.</p>
     */
    getMaintenanceWindow(args: GetMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<GetMaintenanceWindowCommandOutput>;
    getMaintenanceWindow(args: GetMaintenanceWindowCommandInput, cb: (err: any, data?: GetMaintenanceWindowCommandOutput) => void): void;
    getMaintenanceWindow(args: GetMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Retrieves details about a specific a maintenance window execution.</p>
     */
    getMaintenanceWindowExecution(args: GetMaintenanceWindowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<GetMaintenanceWindowExecutionCommandOutput>;
    getMaintenanceWindowExecution(args: GetMaintenanceWindowExecutionCommandInput, cb: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void): void;
    getMaintenanceWindowExecution(args: GetMaintenanceWindowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMaintenanceWindowExecutionCommandOutput) => void): void;
    /**
     * <p>Retrieves the details about a specific task run as part of a maintenance window
     *    execution.</p>
     */
    getMaintenanceWindowExecutionTask(args: GetMaintenanceWindowExecutionTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetMaintenanceWindowExecutionTaskCommandOutput>;
    getMaintenanceWindowExecutionTask(args: GetMaintenanceWindowExecutionTaskCommandInput, cb: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void): void;
    getMaintenanceWindowExecutionTask(args: GetMaintenanceWindowExecutionTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMaintenanceWindowExecutionTaskCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a specific task running on a specific target.</p>
     */
    getMaintenanceWindowExecutionTaskInvocation(args: GetMaintenanceWindowExecutionTaskInvocationCommandInput, options?: __HttpHandlerOptions): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput>;
    getMaintenanceWindowExecutionTaskInvocation(args: GetMaintenanceWindowExecutionTaskInvocationCommandInput, cb: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void): void;
    getMaintenanceWindowExecutionTaskInvocation(args: GetMaintenanceWindowExecutionTaskInvocationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMaintenanceWindowExecutionTaskInvocationCommandOutput) => void): void;
    /**
     * <p>Lists the tasks in a maintenance window.</p>
     */
    getMaintenanceWindowTask(args: GetMaintenanceWindowTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetMaintenanceWindowTaskCommandOutput>;
    getMaintenanceWindowTask(args: GetMaintenanceWindowTaskCommandInput, cb: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void): void;
    getMaintenanceWindowTask(args: GetMaintenanceWindowTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMaintenanceWindowTaskCommandOutput) => void): void;
    /**
     * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity
     *    and Access Management (IAM) to view information about an OpsItem. For more information, see
     *     <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a>
     *    in the <i>AWS Systems Manager User Guide</i>.</p>
     *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
     *    operational issues impacting the performance and health of their AWS resources. For more
     *    information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>. </p>
     */
    getOpsItem(args: GetOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<GetOpsItemCommandOutput>;
    getOpsItem(args: GetOpsItemCommandInput, cb: (err: any, data?: GetOpsItemCommandOutput) => void): void;
    getOpsItem(args: GetOpsItemCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOpsItemCommandOutput) => void): void;
    /**
     * <p>View a summary of OpsItems based on specified filters and aggregators.</p>
     */
    getOpsSummary(args: GetOpsSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetOpsSummaryCommandOutput>;
    getOpsSummary(args: GetOpsSummaryCommandInput, cb: (err: any, data?: GetOpsSummaryCommandOutput) => void): void;
    getOpsSummary(args: GetOpsSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetOpsSummaryCommandOutput) => void): void;
    /**
     * <p>Get information about a parameter by using the parameter name. Don't confuse this API action
     *    with the <a>GetParameters</a> API action.</p>
     */
    getParameter(args: GetParameterCommandInput, options?: __HttpHandlerOptions): Promise<GetParameterCommandOutput>;
    getParameter(args: GetParameterCommandInput, cb: (err: any, data?: GetParameterCommandOutput) => void): void;
    getParameter(args: GetParameterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetParameterCommandOutput) => void): void;
    /**
     * <p>Query a list of all parameters used by the AWS account.</p>
     */
    getParameterHistory(args: GetParameterHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetParameterHistoryCommandOutput>;
    getParameterHistory(args: GetParameterHistoryCommandInput, cb: (err: any, data?: GetParameterHistoryCommandOutput) => void): void;
    getParameterHistory(args: GetParameterHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetParameterHistoryCommandOutput) => void): void;
    /**
     * <p>Get details of a parameter. Don't confuse this API action with the <a>GetParameter</a> API action.</p>
     */
    getParameters(args: GetParametersCommandInput, options?: __HttpHandlerOptions): Promise<GetParametersCommandOutput>;
    getParameters(args: GetParametersCommandInput, cb: (err: any, data?: GetParametersCommandOutput) => void): void;
    getParameters(args: GetParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetParametersCommandOutput) => void): void;
    /**
     * <p>Retrieve information about one or more parameters in a specific hierarchy. </p>
     *          <note>
     *             <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
     *     in the request, the response includes information up to the limit specified. The number of items
     *     returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
     *     reaches an internal limit while processing the results, it stops the operation and returns the
     *     matching values up to that point and a <code>NextToken</code>. You can specify the
     *      <code>NextToken</code> in a subsequent call to get the next set of results.</p>
     *          </note>
     */
    getParametersByPath(args: GetParametersByPathCommandInput, options?: __HttpHandlerOptions): Promise<GetParametersByPathCommandOutput>;
    getParametersByPath(args: GetParametersByPathCommandInput, cb: (err: any, data?: GetParametersByPathCommandOutput) => void): void;
    getParametersByPath(args: GetParametersByPathCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetParametersByPathCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a patch baseline.</p>
     */
    getPatchBaseline(args: GetPatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<GetPatchBaselineCommandOutput>;
    getPatchBaseline(args: GetPatchBaselineCommandInput, cb: (err: any, data?: GetPatchBaselineCommandOutput) => void): void;
    getPatchBaseline(args: GetPatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPatchBaselineCommandOutput) => void): void;
    /**
     * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
     */
    getPatchBaselineForPatchGroup(args: GetPatchBaselineForPatchGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetPatchBaselineForPatchGroupCommandOutput>;
    getPatchBaselineForPatchGroup(args: GetPatchBaselineForPatchGroupCommandInput, cb: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void): void;
    getPatchBaselineForPatchGroup(args: GetPatchBaselineForPatchGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPatchBaselineForPatchGroupCommandOutput) => void): void;
    /**
     * <p>
     *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
     *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
     *    AWS service charges money to the account based on feature or service usage, then the AWS service
     *    team might create a default setting of "false". This means the user can't use this feature unless
     *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
     *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
     *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
     *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
     *    permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change
     *    the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to
     *    the original value defined by the AWS service team.</p>
     *
     *          <p>Query the current service setting for the account. </p>
     */
    getServiceSetting(args: GetServiceSettingCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceSettingCommandOutput>;
    getServiceSetting(args: GetServiceSettingCommandInput, cb: (err: any, data?: GetServiceSettingCommandOutput) => void): void;
    getServiceSetting(args: GetServiceSettingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceSettingCommandOutput) => void): void;
    /**
     * <p>A parameter label is a user-defined alias to help you manage different versions of a
     *    parameter. When you modify a parameter, Systems Manager automatically saves a new version and
     *    increments the version number by one. A label can help you remember the purpose of a parameter
     *    when there are multiple versions. </p>
     *          <p>Parameter labels have the following requirements and restrictions.</p>
     *          <ul>
     *             <li>
     *                <p>A version of a parameter can have a maximum of 10 labels.</p>
     *             </li>
     *             <li>
     *                <p>You can't attach the same label to different versions of the same parameter. For example,
     *      if version 1 has the label Production, then you can't attach Production to version 2.</p>
     *             </li>
     *             <li>
     *                <p>You can move a label from one version of a parameter to another.</p>
     *             </li>
     *             <li>
     *                <p>You can't create a label when you create a new parameter. You must attach a label to a
     *      specific version of a parameter.</p>
     *             </li>
     *             <li>
     *                <p>You can't delete a parameter label. If you no longer want to use a parameter label, then
     *      you must move it to a different version of a parameter.</p>
     *             </li>
     *             <li>
     *                <p>A label can have a maximum of 100 characters.</p>
     *             </li>
     *             <li>
     *                <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
     *      underscores (_).</p>
     *             </li>
     *             <li>
     *                <p>Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails
     *      to meet these requirements, then the label is not associated with a parameter and the system
     *      displays it in the list of InvalidLabels.</p>
     *             </li>
     *          </ul>
     */
    labelParameterVersion(args: LabelParameterVersionCommandInput, options?: __HttpHandlerOptions): Promise<LabelParameterVersionCommandOutput>;
    labelParameterVersion(args: LabelParameterVersionCommandInput, cb: (err: any, data?: LabelParameterVersionCommandOutput) => void): void;
    labelParameterVersion(args: LabelParameterVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: LabelParameterVersionCommandOutput) => void): void;
    /**
     * <p>Retrieves all versions of an association for a specific association ID.</p>
     */
    listAssociationVersions(args: ListAssociationVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociationVersionsCommandOutput>;
    listAssociationVersions(args: ListAssociationVersionsCommandInput, cb: (err: any, data?: ListAssociationVersionsCommandOutput) => void): void;
    listAssociationVersions(args: ListAssociationVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociationVersionsCommandOutput) => void): void;
    /**
     * <p>Returns all State Manager associations in the current AWS account and Region. You can limit
     *    the results to a specific State Manager association document or instance by specifying a
     *    filter.</p>
     */
    listAssociations(args: ListAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociationsCommandOutput>;
    listAssociations(args: ListAssociationsCommandInput, cb: (err: any, data?: ListAssociationsCommandOutput) => void): void;
    listAssociations(args: ListAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociationsCommandOutput) => void): void;
    /**
     * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
     *    or more instances. A command invocation applies to one instance. For example, if a user runs
     *    SendCommand against three instances, then a command invocation is created for each requested
     *    instance ID. ListCommandInvocations provide status about command execution.</p>
     */
    listCommandInvocations(args: ListCommandInvocationsCommandInput, options?: __HttpHandlerOptions): Promise<ListCommandInvocationsCommandOutput>;
    listCommandInvocations(args: ListCommandInvocationsCommandInput, cb: (err: any, data?: ListCommandInvocationsCommandOutput) => void): void;
    listCommandInvocations(args: ListCommandInvocationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCommandInvocationsCommandOutput) => void): void;
    /**
     * <p>Lists the commands requested by users of the AWS account.</p>
     */
    listCommands(args: ListCommandsCommandInput, options?: __HttpHandlerOptions): Promise<ListCommandsCommandOutput>;
    listCommands(args: ListCommandsCommandInput, cb: (err: any, data?: ListCommandsCommandOutput) => void): void;
    listCommands(args: ListCommandsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCommandsCommandOutput) => void): void;
    /**
     * <p>For a specified resource ID, this API action returns a list of compliance statuses for
     *    different resource types. Currently, you can only specify one resource ID per call. List results
     *    depend on the criteria specified in the filter. </p>
     */
    listComplianceItems(args: ListComplianceItemsCommandInput, options?: __HttpHandlerOptions): Promise<ListComplianceItemsCommandOutput>;
    listComplianceItems(args: ListComplianceItemsCommandInput, cb: (err: any, data?: ListComplianceItemsCommandOutput) => void): void;
    listComplianceItems(args: ListComplianceItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComplianceItemsCommandOutput) => void): void;
    /**
     * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
     *    example, this call can return State Manager associations, patches, or custom compliance types
     *    according to the filter criteria that you specify. </p>
     */
    listComplianceSummaries(args: ListComplianceSummariesCommandInput, options?: __HttpHandlerOptions): Promise<ListComplianceSummariesCommandOutput>;
    listComplianceSummaries(args: ListComplianceSummariesCommandInput, cb: (err: any, data?: ListComplianceSummariesCommandOutput) => void): void;
    listComplianceSummaries(args: ListComplianceSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListComplianceSummariesCommandOutput) => void): void;
    /**
     * <p>List all versions for a document.</p>
     */
    listDocumentVersions(args: ListDocumentVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDocumentVersionsCommandOutput>;
    listDocumentVersions(args: ListDocumentVersionsCommandInput, cb: (err: any, data?: ListDocumentVersionsCommandOutput) => void): void;
    listDocumentVersions(args: ListDocumentVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDocumentVersionsCommandOutput) => void): void;
    /**
     * <p>Returns all Systems Manager (SSM) documents in the current AWS account and Region. You can
     *    limit the results of this request by using a filter.</p>
     */
    listDocuments(args: ListDocumentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDocumentsCommandOutput>;
    listDocuments(args: ListDocumentsCommandInput, cb: (err: any, data?: ListDocumentsCommandOutput) => void): void;
    listDocuments(args: ListDocumentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDocumentsCommandOutput) => void): void;
    /**
     * <p>A list of inventory items returned by the request.</p>
     */
    listInventoryEntries(args: ListInventoryEntriesCommandInput, options?: __HttpHandlerOptions): Promise<ListInventoryEntriesCommandOutput>;
    listInventoryEntries(args: ListInventoryEntriesCommandInput, cb: (err: any, data?: ListInventoryEntriesCommandOutput) => void): void;
    listInventoryEntries(args: ListInventoryEntriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInventoryEntriesCommandOutput) => void): void;
    /**
     * <p>Returns a resource-level summary count. The summary includes information about compliant and
     *    non-compliant statuses and detailed compliance-item severity counts, according to the filter
     *    criteria you specify.</p>
     */
    listResourceComplianceSummaries(args: ListResourceComplianceSummariesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceComplianceSummariesCommandOutput>;
    listResourceComplianceSummaries(args: ListResourceComplianceSummariesCommandInput, cb: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void): void;
    listResourceComplianceSummaries(args: ListResourceComplianceSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceComplianceSummariesCommandOutput) => void): void;
    /**
     * <p>Lists your resource data sync configurations. Includes information about the last time a
     *    sync attempted to start, the last sync status, and the last time a sync successfully
     *    completed.</p>
     *          <p>The number of sync configurations might be too large to return using a single call to
     *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
     *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
     *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
     *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
     *    returned in the call to the parameter of a subsequent call. </p>
     */
    listResourceDataSync(args: ListResourceDataSyncCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceDataSyncCommandOutput>;
    listResourceDataSync(args: ListResourceDataSyncCommandInput, cb: (err: any, data?: ListResourceDataSyncCommandOutput) => void): void;
    listResourceDataSync(args: ListResourceDataSyncCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceDataSyncCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags assigned to the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Shares a Systems Manager document publicly or privately. If you share a document privately, you must
     *    specify the AWS user account IDs for those people who can use the document. If you share a
     *    document publicly, you must specify <i>All</i> as the account ID.</p>
     */
    modifyDocumentPermission(args: ModifyDocumentPermissionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyDocumentPermissionCommandOutput>;
    modifyDocumentPermission(args: ModifyDocumentPermissionCommandInput, cb: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void): void;
    modifyDocumentPermission(args: ModifyDocumentPermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyDocumentPermissionCommandOutput) => void): void;
    /**
     * <p>Registers a compliance type and other compliance details on a designated resource. This
     *    action lets you register custom compliance details with a resource. This call overwrites existing
     *    compliance information on the resource, so you must provide a full list of compliance items each
     *    time that you send the request.</p>
     *          <p>ComplianceType can be one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was
     *      applied.</p>
     *             </li>
     *             <li>
     *                <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p>
     *             </li>
     *             <li>
     *                <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to
     *      the instance.</p>
     *             </li>
     *             <li>
     *                <p>Id: The patch, association, or custom compliance ID.</p>
     *             </li>
     *             <li>
     *                <p>Title: A title.</p>
     *             </li>
     *             <li>
     *                <p>Status: The status of the compliance item. For example, <code>approved</code> for patches,
     *      or <code>Failed</code> for associations.</p>
     *             </li>
     *             <li>
     *                <p>Severity: A patch severity. For example, <code>critical</code>.</p>
     *             </li>
     *             <li>
     *                <p>DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.</p>
     *             </li>
     *             <li>
     *                <p>DocumentVersion: An SSM document version number. For example, 4.</p>
     *             </li>
     *             <li>
     *                <p>Classification: A patch classification. For example, <code>security updates</code>.</p>
     *             </li>
     *             <li>
     *                <p>PatchBaselineId: A patch baseline ID.</p>
     *             </li>
     *             <li>
     *                <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p>
     *             </li>
     *             <li>
     *                <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p>
     *             </li>
     *             <li>
     *                <p>PatchGroup: The name of a patch group.</p>
     *             </li>
     *             <li>
     *                <p>InstalledTime: The time the association, patch, or custom compliance item was applied to
     *      the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'</p>
     *             </li>
     *          </ul>
     */
    putComplianceItems(args: PutComplianceItemsCommandInput, options?: __HttpHandlerOptions): Promise<PutComplianceItemsCommandOutput>;
    putComplianceItems(args: PutComplianceItemsCommandInput, cb: (err: any, data?: PutComplianceItemsCommandOutput) => void): void;
    putComplianceItems(args: PutComplianceItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutComplianceItemsCommandOutput) => void): void;
    /**
     * <p>Bulk update custom inventory items on one more instance. The request adds an inventory item,
     *    if it doesn't already exist, or updates an inventory item, if it does exist.</p>
     */
    putInventory(args: PutInventoryCommandInput, options?: __HttpHandlerOptions): Promise<PutInventoryCommandOutput>;
    putInventory(args: PutInventoryCommandInput, cb: (err: any, data?: PutInventoryCommandOutput) => void): void;
    putInventory(args: PutInventoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutInventoryCommandOutput) => void): void;
    /**
     * <p>Add a parameter to the system.</p>
     */
    putParameter(args: PutParameterCommandInput, options?: __HttpHandlerOptions): Promise<PutParameterCommandOutput>;
    putParameter(args: PutParameterCommandInput, cb: (err: any, data?: PutParameterCommandOutput) => void): void;
    putParameter(args: PutParameterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutParameterCommandOutput) => void): void;
    /**
     * <p>Defines the default patch baseline for the relevant operating system.</p>
     *          <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline
     *    ARN as the baseline ID value. For example, for CentOS, specify
     *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
     *     <code>pb-0574b43a65ea646ed</code>.</p>
     */
    registerDefaultPatchBaseline(args: RegisterDefaultPatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<RegisterDefaultPatchBaselineCommandOutput>;
    registerDefaultPatchBaseline(args: RegisterDefaultPatchBaselineCommandInput, cb: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void): void;
    registerDefaultPatchBaseline(args: RegisterDefaultPatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterDefaultPatchBaselineCommandOutput) => void): void;
    /**
     * <p>Registers a patch baseline for a patch group.</p>
     */
    registerPatchBaselineForPatchGroup(args: RegisterPatchBaselineForPatchGroupCommandInput, options?: __HttpHandlerOptions): Promise<RegisterPatchBaselineForPatchGroupCommandOutput>;
    registerPatchBaselineForPatchGroup(args: RegisterPatchBaselineForPatchGroupCommandInput, cb: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void): void;
    registerPatchBaselineForPatchGroup(args: RegisterPatchBaselineForPatchGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterPatchBaselineForPatchGroupCommandOutput) => void): void;
    /**
     * <p>Registers a target with a maintenance window.</p>
     */
    registerTargetWithMaintenanceWindow(args: RegisterTargetWithMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<RegisterTargetWithMaintenanceWindowCommandOutput>;
    registerTargetWithMaintenanceWindow(args: RegisterTargetWithMaintenanceWindowCommandInput, cb: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void): void;
    registerTargetWithMaintenanceWindow(args: RegisterTargetWithMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterTargetWithMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Adds a new task to a maintenance window.</p>
     */
    registerTaskWithMaintenanceWindow(args: RegisterTaskWithMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<RegisterTaskWithMaintenanceWindowCommandOutput>;
    registerTaskWithMaintenanceWindow(args: RegisterTaskWithMaintenanceWindowCommandInput, cb: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void): void;
    registerTaskWithMaintenanceWindow(args: RegisterTaskWithMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterTaskWithMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Removes tag keys from the specified resource.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    /**
     * <p>
     *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
     *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
     *    AWS service charges money to the account based on feature or service usage, then the AWS service
     *    team might create a default setting of "false". This means the user can't use this feature unless
     *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
     *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
     *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
     *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
     *    permission for the setting. Use the <a>GetServiceSetting</a> API action to view the
     *    current value. Use the <a>UpdateServiceSetting</a> API action to change the default
     *    setting. </p>
     *
     *          <p>Reset the service setting for the account to the default value as provisioned by the AWS
     *    service team. </p>
     */
    resetServiceSetting(args: ResetServiceSettingCommandInput, options?: __HttpHandlerOptions): Promise<ResetServiceSettingCommandOutput>;
    resetServiceSetting(args: ResetServiceSettingCommandInput, cb: (err: any, data?: ResetServiceSettingCommandOutput) => void): void;
    resetServiceSetting(args: ResetServiceSettingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResetServiceSettingCommandOutput) => void): void;
    /**
     * <p>Reconnects a session to an instance after it has been disconnected. Connections can be
     *    resumed for disconnected sessions, but not terminated sessions.</p>
     *          <note>
     *             <p>This command is primarily for use by client machines to automatically reconnect during
     *     intermittent network issues. It is not intended for any other use.</p>
     *          </note>
     */
    resumeSession(args: ResumeSessionCommandInput, options?: __HttpHandlerOptions): Promise<ResumeSessionCommandOutput>;
    resumeSession(args: ResumeSessionCommandInput, cb: (err: any, data?: ResumeSessionCommandOutput) => void): void;
    resumeSession(args: ResumeSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ResumeSessionCommandOutput) => void): void;
    /**
     * <p>Sends a signal to an Automation execution to change the current behavior or status of the
     *    execution. </p>
     */
    sendAutomationSignal(args: SendAutomationSignalCommandInput, options?: __HttpHandlerOptions): Promise<SendAutomationSignalCommandOutput>;
    sendAutomationSignal(args: SendAutomationSignalCommandInput, cb: (err: any, data?: SendAutomationSignalCommandOutput) => void): void;
    sendAutomationSignal(args: SendAutomationSignalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendAutomationSignalCommandOutput) => void): void;
    /**
     * <p>Runs commands on one or more managed instances.</p>
     */
    sendCommand(args: SendCommandCommandInput, options?: __HttpHandlerOptions): Promise<SendCommandCommandOutput>;
    sendCommand(args: SendCommandCommandInput, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
    sendCommand(args: SendCommandCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendCommandCommandOutput) => void): void;
    /**
     * <p>Use this API action to run an association immediately and only one time. This action can be
     *    helpful when troubleshooting associations.</p>
     */
    startAssociationsOnce(args: StartAssociationsOnceCommandInput, options?: __HttpHandlerOptions): Promise<StartAssociationsOnceCommandOutput>;
    startAssociationsOnce(args: StartAssociationsOnceCommandInput, cb: (err: any, data?: StartAssociationsOnceCommandOutput) => void): void;
    startAssociationsOnce(args: StartAssociationsOnceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAssociationsOnceCommandOutput) => void): void;
    /**
     * <p>Initiates execution of an Automation document.</p>
     */
    startAutomationExecution(args: StartAutomationExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartAutomationExecutionCommandOutput>;
    startAutomationExecution(args: StartAutomationExecutionCommandInput, cb: (err: any, data?: StartAutomationExecutionCommandOutput) => void): void;
    startAutomationExecution(args: StartAutomationExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAutomationExecutionCommandOutput) => void): void;
    /**
     * <p>Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a
     *    URL and token that can be used to open a WebSocket connection for sending input and receiving
     *    outputs.</p>
     *          <note>
     *             <p>AWS CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
     *     plugin to be installed on the client machine making the call. For information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"> Install the Session Manager Plugin
     *      for the AWS CLI</a> in the <i>AWS Systems Manager User Guide</i>.</p>
     *             <p>AWS Tools for PowerShell usage: Start-SSMSession is not currently supported by AWS Tools
     *     for PowerShell on Windows local machines.</p>
     *          </note>
     */
    startSession(args: StartSessionCommandInput, options?: __HttpHandlerOptions): Promise<StartSessionCommandOutput>;
    startSession(args: StartSessionCommandInput, cb: (err: any, data?: StartSessionCommandOutput) => void): void;
    startSession(args: StartSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSessionCommandOutput) => void): void;
    /**
     * <p>Stop an Automation that is currently running.</p>
     */
    stopAutomationExecution(args: StopAutomationExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StopAutomationExecutionCommandOutput>;
    stopAutomationExecution(args: StopAutomationExecutionCommandInput, cb: (err: any, data?: StopAutomationExecutionCommandOutput) => void): void;
    stopAutomationExecution(args: StopAutomationExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopAutomationExecutionCommandOutput) => void): void;
    /**
     * <p>Permanently ends a session and closes the data connection between the Session Manager client and
     *    SSM Agent on the instance. A terminated session cannot be resumed.</p>
     */
    terminateSession(args: TerminateSessionCommandInput, options?: __HttpHandlerOptions): Promise<TerminateSessionCommandOutput>;
    terminateSession(args: TerminateSessionCommandInput, cb: (err: any, data?: TerminateSessionCommandOutput) => void): void;
    terminateSession(args: TerminateSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateSessionCommandOutput) => void): void;
    /**
     * <p>Updates an association. You can update the association name and version, the document
     *    version, schedule, parameters, and Amazon S3 output. </p>
     *          <p>In order to call this API action, your IAM user account, group, or role must be configured
     *    with permission to call the <a>DescribeAssociation</a> API action. If you don't have
     *    permission to call DescribeAssociation, then you receive the following error: <code>An error
     *     occurred (AccessDeniedException) when calling the UpdateAssociation operation: User:
     *     <user_arn> is not authorized to perform: ssm:DescribeAssociation on resource:
     *     <resource_arn></code>
     *          </p>
     *          <important>
     *             <p>When you update an association, the association immediately runs against the specified
     *     targets.</p>
     *          </important>
     */
    updateAssociation(args: UpdateAssociationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssociationCommandOutput>;
    updateAssociation(args: UpdateAssociationCommandInput, cb: (err: any, data?: UpdateAssociationCommandOutput) => void): void;
    updateAssociation(args: UpdateAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssociationCommandOutput) => void): void;
    /**
     * <p>Updates the status of the Systems Manager document associated with the specified instance.</p>
     */
    updateAssociationStatus(args: UpdateAssociationStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssociationStatusCommandOutput>;
    updateAssociationStatus(args: UpdateAssociationStatusCommandInput, cb: (err: any, data?: UpdateAssociationStatusCommandOutput) => void): void;
    updateAssociationStatus(args: UpdateAssociationStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssociationStatusCommandOutput) => void): void;
    /**
     * <p>Updates one or more values for an SSM document.</p>
     */
    updateDocument(args: UpdateDocumentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDocumentCommandOutput>;
    updateDocument(args: UpdateDocumentCommandInput, cb: (err: any, data?: UpdateDocumentCommandOutput) => void): void;
    updateDocument(args: UpdateDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDocumentCommandOutput) => void): void;
    /**
     * <p>Set the default version of a document. </p>
     */
    updateDocumentDefaultVersion(args: UpdateDocumentDefaultVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDocumentDefaultVersionCommandOutput>;
    updateDocumentDefaultVersion(args: UpdateDocumentDefaultVersionCommandInput, cb: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void): void;
    updateDocumentDefaultVersion(args: UpdateDocumentDefaultVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDocumentDefaultVersionCommandOutput) => void): void;
    /**
     * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
     *          <note>
     *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
     *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
     *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
     *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
     *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
     *     after 5 PM.</p>
     *          </note>
     */
    updateMaintenanceWindow(args: UpdateMaintenanceWindowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMaintenanceWindowCommandOutput>;
    updateMaintenanceWindow(args: UpdateMaintenanceWindowCommandInput, cb: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void): void;
    updateMaintenanceWindow(args: UpdateMaintenanceWindowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMaintenanceWindowCommandOutput) => void): void;
    /**
     * <p>Modifies the target of an existing maintenance window. You
     *    can change the following:</p>
     *
     *          <ul>
     *             <li>
     *                <p>Name</p>
     *             </li>
     *             <li>
     *                <p>Description</p>
     *             </li>
     *             <li>
     *                <p>Owner</p>
     *             </li>
     *             <li>
     *                <p>IDs for an ID target</p>
     *             </li>
     *             <li>
     *                <p>Tags for a Tag target</p>
     *             </li>
     *             <li>
     *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
     *      target, and resource group. For more information, see <a>Target</a>.</p>
     *             </li>
     *          </ul>
     *          <note>
     *             <p>If a parameter is null, then the corresponding field is not modified.</p>
     *          </note>
     */
    updateMaintenanceWindowTarget(args: UpdateMaintenanceWindowTargetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMaintenanceWindowTargetCommandOutput>;
    updateMaintenanceWindowTarget(args: UpdateMaintenanceWindowTargetCommandInput, cb: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void): void;
    updateMaintenanceWindowTarget(args: UpdateMaintenanceWindowTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMaintenanceWindowTargetCommandOutput) => void): void;
    /**
     * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you
     *    can change the following values:</p>
     *          <ul>
     *             <li>
     *                <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to
     *      AWS-RunShellScript.</p>
     *             </li>
     *             <li>
     *                <p>ServiceRoleArn</p>
     *             </li>
     *             <li>
     *                <p>TaskInvocationParameters</p>
     *             </li>
     *             <li>
     *                <p>Priority</p>
     *             </li>
     *             <li>
     *                <p>MaxConcurrency</p>
     *             </li>
     *             <li>
     *                <p>MaxErrors</p>
     *             </li>
     *          </ul>
     *          <p>If a parameter is null, then the corresponding field is not modified. Also, if you set
     *    Replace to true, then all fields required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this request. Optional
     *    fields that aren't specified are set to null.</p>
     */
    updateMaintenanceWindowTask(args: UpdateMaintenanceWindowTaskCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMaintenanceWindowTaskCommandOutput>;
    updateMaintenanceWindowTask(args: UpdateMaintenanceWindowTaskCommandInput, cb: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void): void;
    updateMaintenanceWindowTask(args: UpdateMaintenanceWindowTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMaintenanceWindowTaskCommandOutput) => void): void;
    /**
     * <p>Assigns or changes an Amazon Identity and Access Management (IAM) role for the managed
     *    instance.</p>
     */
    updateManagedInstanceRole(args: UpdateManagedInstanceRoleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateManagedInstanceRoleCommandOutput>;
    updateManagedInstanceRole(args: UpdateManagedInstanceRoleCommandInput, cb: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void): void;
    updateManagedInstanceRole(args: UpdateManagedInstanceRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateManagedInstanceRoleCommandOutput) => void): void;
    /**
     * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management
     *    (IAM) to update an OpsItem. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting Started with OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>.</p>
     *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
     *    operational issues impacting the performance and health of their AWS resources. For more
     *    information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
     *     <i>AWS Systems Manager User Guide</i>. </p>
     */
    updateOpsItem(args: UpdateOpsItemCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOpsItemCommandOutput>;
    updateOpsItem(args: UpdateOpsItemCommandInput, cb: (err: any, data?: UpdateOpsItemCommandOutput) => void): void;
    updateOpsItem(args: UpdateOpsItemCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOpsItemCommandOutput) => void): void;
    /**
     * <p>Modifies an existing patch baseline. Fields not specified in the request are left
     *    unchanged.</p>
     *          <note>
     *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
     *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
     *          </note>
     */
    updatePatchBaseline(args: UpdatePatchBaselineCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePatchBaselineCommandOutput>;
    updatePatchBaseline(args: UpdatePatchBaselineCommandInput, cb: (err: any, data?: UpdatePatchBaselineCommandOutput) => void): void;
    updatePatchBaseline(args: UpdatePatchBaselineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePatchBaselineCommandOutput) => void): void;
    /**
     * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
     *    change the account options for that sync. For example, if you create a sync in the us-east-2
     *    (Ohio) Region and you choose the Include only the current account option, you can't edit that
     *    sync later and choose the Include all accounts from my AWS Organizations configuration option.
     *    Instead, you must delete the first resource data sync, and create a new one.</p>
     */
    updateResourceDataSync(args: UpdateResourceDataSyncCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceDataSyncCommandOutput>;
    updateResourceDataSync(args: UpdateResourceDataSyncCommandInput, cb: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void): void;
    updateResourceDataSync(args: UpdateResourceDataSyncCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceDataSyncCommandOutput) => void): void;
    /**
     * <p>
     *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
     *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
     *    AWS service charges money to the account based on feature or service usage, then the AWS service
     *    team might create a default setting of "false". This means the user can't use this feature unless
     *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
     *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
     *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
     *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
     *    permission for the setting. Use the <a>GetServiceSetting</a> API action to view the
     *    current value. Or, use the <a>ResetServiceSetting</a> to change the value back to the
     *    original value defined by the AWS service team.</p>
     *
     *          <p>Update the service setting for the account. </p>
     */
    updateServiceSetting(args: UpdateServiceSettingCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceSettingCommandOutput>;
    updateServiceSetting(args: UpdateServiceSettingCommandInput, cb: (err: any, data?: UpdateServiceSettingCommandOutput) => void): void;
    updateServiceSetting(args: UpdateServiceSettingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceSettingCommandOutput) => void): void;
}
