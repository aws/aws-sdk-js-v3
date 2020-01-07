import { IoTThingsGraphClient } from "./IoTThingsGraphClient";
import { AssociateEntityToThingCommandInput, AssociateEntityToThingCommandOutput } from "./commands/AssociateEntityToThingCommand";
import { CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput } from "./commands/CreateFlowTemplateCommand";
import { CreateSystemInstanceCommandInput, CreateSystemInstanceCommandOutput } from "./commands/CreateSystemInstanceCommand";
import { CreateSystemTemplateCommandInput, CreateSystemTemplateCommandOutput } from "./commands/CreateSystemTemplateCommand";
import { DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput } from "./commands/DeleteFlowTemplateCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "./commands/DeleteNamespaceCommand";
import { DeleteSystemInstanceCommandInput, DeleteSystemInstanceCommandOutput } from "./commands/DeleteSystemInstanceCommand";
import { DeleteSystemTemplateCommandInput, DeleteSystemTemplateCommandOutput } from "./commands/DeleteSystemTemplateCommand";
import { DeploySystemInstanceCommandInput, DeploySystemInstanceCommandOutput } from "./commands/DeploySystemInstanceCommand";
import { DeprecateFlowTemplateCommandInput, DeprecateFlowTemplateCommandOutput } from "./commands/DeprecateFlowTemplateCommand";
import { DeprecateSystemTemplateCommandInput, DeprecateSystemTemplateCommandOutput } from "./commands/DeprecateSystemTemplateCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "./commands/DescribeNamespaceCommand";
import { DissociateEntityFromThingCommandInput, DissociateEntityFromThingCommandOutput } from "./commands/DissociateEntityFromThingCommand";
import { GetEntitiesCommandInput, GetEntitiesCommandOutput } from "./commands/GetEntitiesCommand";
import { GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput } from "./commands/GetFlowTemplateCommand";
import { GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput } from "./commands/GetFlowTemplateRevisionsCommand";
import { GetNamespaceDeletionStatusCommandInput, GetNamespaceDeletionStatusCommandOutput } from "./commands/GetNamespaceDeletionStatusCommand";
import { GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput } from "./commands/GetSystemInstanceCommand";
import { GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput } from "./commands/GetSystemTemplateCommand";
import { GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput } from "./commands/GetSystemTemplateRevisionsCommand";
import { GetUploadStatusCommandInput, GetUploadStatusCommandOutput } from "./commands/GetUploadStatusCommand";
import { ListFlowExecutionMessagesCommandInput, ListFlowExecutionMessagesCommandOutput } from "./commands/ListFlowExecutionMessagesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { SearchEntitiesCommandInput, SearchEntitiesCommandOutput } from "./commands/SearchEntitiesCommand";
import { SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput } from "./commands/SearchFlowExecutionsCommand";
import { SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput } from "./commands/SearchFlowTemplatesCommand";
import { SearchSystemInstancesCommandInput, SearchSystemInstancesCommandOutput } from "./commands/SearchSystemInstancesCommand";
import { SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput } from "./commands/SearchSystemTemplatesCommand";
import { SearchThingsCommandInput, SearchThingsCommandOutput } from "./commands/SearchThingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UndeploySystemInstanceCommandInput, UndeploySystemInstanceCommandOutput } from "./commands/UndeploySystemInstanceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput } from "./commands/UpdateFlowTemplateCommand";
import { UpdateSystemTemplateCommandInput, UpdateSystemTemplateCommandOutput } from "./commands/UpdateSystemTemplateCommand";
import { UploadEntityDefinitionsCommandInput, UploadEntityDefinitionsCommandOutput } from "./commands/UploadEntityDefinitionsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS IoT Things Graph</fullname>
 *          <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards,
 *        such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services
 *        and defining how they interact at an abstract level.</p>
 *          <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>
 */
export declare class IoTThingsGraph extends IoTThingsGraphClient {
    /**
     * <p>Associates a device with a concrete thing that is in the user's registry.</p>
     *          <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
     */
    associateEntityToThing(args: AssociateEntityToThingCommandInput, options?: __HttpHandlerOptions): Promise<AssociateEntityToThingCommandOutput>;
    associateEntityToThing(args: AssociateEntityToThingCommandInput, cb: (err: any, data?: AssociateEntityToThingCommandOutput) => void): void;
    associateEntityToThing(args: AssociateEntityToThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateEntityToThingCommandOutput) => void): void;
    /**
     * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
     *          entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
     *       latest version of the user's namespace unless another namespace version is specified in the request.</p>
     */
    createFlowTemplate(args: CreateFlowTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowTemplateCommandOutput>;
    createFlowTemplate(args: CreateFlowTemplateCommandInput, cb: (err: any, data?: CreateFlowTemplateCommandOutput) => void): void;
    createFlowTemplate(args: CreateFlowTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFlowTemplateCommandOutput) => void): void;
    /**
     * <p>Creates a system instance. </p>
     *          <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is
     *             specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to
     *             call <code>DeploySystemInstance</code> after running this action.</p>
     *          <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions
     *          to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p>
     *          <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role
     *       that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p>
     *          <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
     */
    createSystemInstance(args: CreateSystemInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateSystemInstanceCommandOutput>;
    createSystemInstance(args: CreateSystemInstanceCommandInput, cb: (err: any, data?: CreateSystemInstanceCommandOutput) => void): void;
    createSystemInstance(args: CreateSystemInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSystemInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a system. The system is validated against the entities in the
     *          latest version of the user's namespace unless another namespace version is specified in the request.</p>
     */
    createSystemTemplate(args: CreateSystemTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateSystemTemplateCommandOutput>;
    createSystemTemplate(args: CreateSystemTemplateCommandInput, cb: (err: any, data?: CreateSystemTemplateCommandOutput) => void): void;
    createSystemTemplate(args: CreateSystemTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSystemTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy.
     *          Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</p>
     */
    deleteFlowTemplate(args: DeleteFlowTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowTemplateCommandOutput>;
    deleteFlowTemplate(args: DeleteFlowTemplateCommandInput, cb: (err: any, data?: DeleteFlowTemplateCommandOutput) => void): void;
    deleteFlowTemplate(args: DeleteFlowTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFlowTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action.</p>
     */
    deleteNamespace(args: DeleteNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNamespaceCommandOutput>;
    deleteNamespace(args: DeleteNamespaceCommandInput, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
    deleteNamespace(args: DeleteNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNamespaceCommandOutput) => void): void;
    /**
     * <p>Deletes a system instance.
     *          Only system instances that have never been deployed, or that have been undeployed can be deleted.</p>
     *          <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
     */
    deleteSystemInstance(args: DeleteSystemInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSystemInstanceCommandOutput>;
    deleteSystemInstance(args: DeleteSystemInstanceCommandInput, cb: (err: any, data?: DeleteSystemInstanceCommandOutput) => void): void;
    deleteSystemInstance(args: DeleteSystemInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSystemInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a system. New deployments can't contain the system after its deletion.
     *       Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
     */
    deleteSystemTemplate(args: DeleteSystemTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSystemTemplateCommandOutput>;
    deleteSystemTemplate(args: DeleteSystemTemplateCommandInput, cb: (err: any, data?: DeleteSystemTemplateCommandOutput) => void): void;
    deleteSystemTemplate(args: DeleteSystemTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSystemTemplateCommandOutput) => void): void;
    /**
     * <p>
     *             <b>Greengrass and Cloud Deployments</b>
     *          </p>
     *          <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p>
     *          <p>
     *             <b>Greengrass Deployments</b>
     *          </p>
     *          <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service
     *          resource file and then deploy it.</p>
     *          <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions
     *          to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p>
     *          <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
     */
    deploySystemInstance(args: DeploySystemInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeploySystemInstanceCommandOutput>;
    deploySystemInstance(args: DeploySystemInstanceCommandInput, cb: (err: any, data?: DeploySystemInstanceCommandOutput) => void): void;
    deploySystemInstance(args: DeploySystemInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeploySystemInstanceCommandOutput) => void): void;
    /**
     * <p>Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.</p>
     */
    deprecateFlowTemplate(args: DeprecateFlowTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeprecateFlowTemplateCommandOutput>;
    deprecateFlowTemplate(args: DeprecateFlowTemplateCommandInput, cb: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void): void;
    deprecateFlowTemplate(args: DeprecateFlowTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void): void;
    /**
     * <p>Deprecates the specified system.</p>
     */
    deprecateSystemTemplate(args: DeprecateSystemTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeprecateSystemTemplateCommandOutput>;
    deprecateSystemTemplate(args: DeprecateSystemTemplateCommandInput, cb: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void): void;
    deprecateSystemTemplate(args: DeprecateSystemTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void): void;
    /**
     * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
     */
    describeNamespace(args: DescribeNamespaceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNamespaceCommandOutput>;
    describeNamespace(args: DescribeNamespaceCommandInput, cb: (err: any, data?: DescribeNamespaceCommandOutput) => void): void;
    describeNamespace(args: DescribeNamespaceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNamespaceCommandOutput) => void): void;
    /**
     * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
     *          one entity of a particular type can be associated with a thing.</p>
     */
    dissociateEntityFromThing(args: DissociateEntityFromThingCommandInput, options?: __HttpHandlerOptions): Promise<DissociateEntityFromThingCommandOutput>;
    dissociateEntityFromThing(args: DissociateEntityFromThingCommandInput, cb: (err: any, data?: DissociateEntityFromThingCommandOutput) => void): void;
    dissociateEntityFromThing(args: DissociateEntityFromThingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DissociateEntityFromThingCommandOutput) => void): void;
    /**
     * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the
     *       following TDM entities.</p>
     *          <ul>
     *             <li>
     *                <p>Properties</p>
     *             </li>
     *             <li>
     *                <p>States</p>
     *             </li>
     *             <li>
     *                <p>Events</p>
     *             </li>
     *             <li>
     *                <p>Actions</p>
     *             </li>
     *             <li>
     *                <p>Capabilities</p>
     *             </li>
     *             <li>
     *                <p>Mappings</p>
     *             </li>
     *             <li>
     *                <p>Devices</p>
     *             </li>
     *             <li>
     *                <p>Device Models</p>
     *             </li>
     *             <li>
     *                <p>Services</p>
     *             </li>
     *          </ul>
     *          <p>This action doesn't return definitions for systems, flows, and deployments.</p>
     */
    getEntities(args: GetEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<GetEntitiesCommandOutput>;
    getEntities(args: GetEntitiesCommandInput, cb: (err: any, data?: GetEntitiesCommandOutput) => void): void;
    getEntities(args: GetEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEntitiesCommandOutput) => void): void;
    /**
     * <p>Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.</p>
     */
    getFlowTemplate(args: GetFlowTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetFlowTemplateCommandOutput>;
    getFlowTemplate(args: GetFlowTemplateCommandInput, cb: (err: any, data?: GetFlowTemplateCommandOutput) => void): void;
    getFlowTemplate(args: GetFlowTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFlowTemplateCommandOutput) => void): void;
    /**
     * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
     *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
     */
    getFlowTemplateRevisions(args: GetFlowTemplateRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<GetFlowTemplateRevisionsCommandOutput>;
    getFlowTemplateRevisions(args: GetFlowTemplateRevisionsCommandInput, cb: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void): void;
    getFlowTemplateRevisions(args: GetFlowTemplateRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void): void;
    /**
     * <p>Gets the status of a namespace deletion task.</p>
     */
    getNamespaceDeletionStatus(args: GetNamespaceDeletionStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetNamespaceDeletionStatusCommandOutput>;
    getNamespaceDeletionStatus(args: GetNamespaceDeletionStatusCommandInput, cb: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void): void;
    getNamespaceDeletionStatus(args: GetNamespaceDeletionStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void): void;
    /**
     * <p>Gets a system instance.</p>
     */
    getSystemInstance(args: GetSystemInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetSystemInstanceCommandOutput>;
    getSystemInstance(args: GetSystemInstanceCommandInput, cb: (err: any, data?: GetSystemInstanceCommandOutput) => void): void;
    getSystemInstance(args: GetSystemInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSystemInstanceCommandOutput) => void): void;
    /**
     * <p>Gets a system.</p>
     */
    getSystemTemplate(args: GetSystemTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetSystemTemplateCommandOutput>;
    getSystemTemplate(args: GetSystemTemplateCommandInput, cb: (err: any, data?: GetSystemTemplateCommandOutput) => void): void;
    getSystemTemplate(args: GetSystemTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSystemTemplateCommandOutput) => void): void;
    /**
     * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
     *       the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
     */
    getSystemTemplateRevisions(args: GetSystemTemplateRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<GetSystemTemplateRevisionsCommandOutput>;
    getSystemTemplateRevisions(args: GetSystemTemplateRevisionsCommandInput, cb: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void): void;
    getSystemTemplateRevisions(args: GetSystemTemplateRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void): void;
    /**
     * <p>Gets the status of the specified upload.</p>
     */
    getUploadStatus(args: GetUploadStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetUploadStatusCommandOutput>;
    getUploadStatus(args: GetUploadStatusCommandInput, cb: (err: any, data?: GetUploadStatusCommandOutput) => void): void;
    getUploadStatus(args: GetUploadStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUploadStatusCommandOutput) => void): void;
    /**
     * <p>Returns a list of objects that contain information about events in a flow execution.</p>
     */
    listFlowExecutionMessages(args: ListFlowExecutionMessagesCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowExecutionMessagesCommandOutput>;
    listFlowExecutionMessages(args: ListFlowExecutionMessagesCommandInput, cb: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void): void;
    listFlowExecutionMessages(args: ListFlowExecutionMessagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void): void;
    /**
     * <p>Lists all tags on an AWS IoT Things Graph resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.</p>
     */
    searchEntities(args: SearchEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<SearchEntitiesCommandOutput>;
    searchEntities(args: SearchEntitiesCommandInput, cb: (err: any, data?: SearchEntitiesCommandOutput) => void): void;
    searchEntities(args: SearchEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchEntitiesCommandOutput) => void): void;
    /**
     * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
     */
    searchFlowExecutions(args: SearchFlowExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<SearchFlowExecutionsCommandOutput>;
    searchFlowExecutions(args: SearchFlowExecutionsCommandInput, cb: (err: any, data?: SearchFlowExecutionsCommandOutput) => void): void;
    searchFlowExecutions(args: SearchFlowExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchFlowExecutionsCommandOutput) => void): void;
    /**
     * <p>Searches for summary information about workflows.</p>
     */
    searchFlowTemplates(args: SearchFlowTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<SearchFlowTemplatesCommandOutput>;
    searchFlowTemplates(args: SearchFlowTemplatesCommandInput, cb: (err: any, data?: SearchFlowTemplatesCommandOutput) => void): void;
    searchFlowTemplates(args: SearchFlowTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchFlowTemplatesCommandOutput) => void): void;
    /**
     * <p>Searches for system instances in the user's account.</p>
     */
    searchSystemInstances(args: SearchSystemInstancesCommandInput, options?: __HttpHandlerOptions): Promise<SearchSystemInstancesCommandOutput>;
    searchSystemInstances(args: SearchSystemInstancesCommandInput, cb: (err: any, data?: SearchSystemInstancesCommandOutput) => void): void;
    searchSystemInstances(args: SearchSystemInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchSystemInstancesCommandOutput) => void): void;
    /**
     * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
     */
    searchSystemTemplates(args: SearchSystemTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<SearchSystemTemplatesCommandOutput>;
    searchSystemTemplates(args: SearchSystemTemplatesCommandInput, cb: (err: any, data?: SearchSystemTemplatesCommandOutput) => void): void;
    searchSystemTemplates(args: SearchSystemTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchSystemTemplatesCommandOutput) => void): void;
    /**
     * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p>
     *          <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2.
     *          <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p>
     *          <p>This action searches for exact matches and doesn't perform partial text matching.</p>
     */
    searchThings(args: SearchThingsCommandInput, options?: __HttpHandlerOptions): Promise<SearchThingsCommandOutput>;
    searchThings(args: SearchThingsCommandInput, cb: (err: any, data?: SearchThingsCommandOutput) => void): void;
    searchThings(args: SearchThingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchThingsCommandOutput) => void): void;
    /**
     * <p>Creates a tag for the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
     */
    undeploySystemInstance(args: UndeploySystemInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UndeploySystemInstanceCommandOutput>;
    undeploySystemInstance(args: UndeploySystemInstanceCommandInput, cb: (err: any, data?: UndeploySystemInstanceCommandOutput) => void): void;
    undeploySystemInstance(args: UndeploySystemInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UndeploySystemInstanceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this
     *          behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. </p>
     */
    updateFlowTemplate(args: UpdateFlowTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowTemplateCommandOutput>;
    updateFlowTemplate(args: UpdateFlowTemplateCommandInput, cb: (err: any, data?: UpdateFlowTemplateCommandOutput) => void): void;
    updateFlowTemplate(args: UpdateFlowTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFlowTemplateCommandOutput) => void): void;
    /**
     * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
     */
    updateSystemTemplate(args: UpdateSystemTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSystemTemplateCommandOutput>;
    updateSystemTemplate(args: UpdateSystemTemplateCommandInput, cb: (err: any, data?: UpdateSystemTemplateCommandOutput) => void): void;
    updateSystemTemplate(args: UpdateSystemTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSystemTemplateCommandOutput) => void): void;
    /**
     * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if
     *       <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter  is set to
     *          <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true,
     *       all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p>
     *          <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users
     *       can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the
     *          <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p>
     *          <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p>
     *          <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>,
     *          <code>Mapping</code>, <code>Enum</code>.
     *          </p>
     */
    uploadEntityDefinitions(args: UploadEntityDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<UploadEntityDefinitionsCommandOutput>;
    uploadEntityDefinitions(args: UploadEntityDefinitionsCommandInput, cb: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void): void;
    uploadEntityDefinitions(args: UploadEntityDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void): void;
}
