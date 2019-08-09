import { IoTThingsGraphClient } from "./IoTThingsGraphClient";
import { AssociateEntityToThingInput } from "./types/AssociateEntityToThingInput";
import { AssociateEntityToThingOutput } from "./types/AssociateEntityToThingOutput";
import { CreateFlowTemplateInput } from "./types/CreateFlowTemplateInput";
import { CreateFlowTemplateOutput } from "./types/CreateFlowTemplateOutput";
import { CreateSystemInstanceInput } from "./types/CreateSystemInstanceInput";
import { CreateSystemInstanceOutput } from "./types/CreateSystemInstanceOutput";
import { CreateSystemTemplateInput } from "./types/CreateSystemTemplateInput";
import { CreateSystemTemplateOutput } from "./types/CreateSystemTemplateOutput";
import { DeleteFlowTemplateInput } from "./types/DeleteFlowTemplateInput";
import { DeleteFlowTemplateOutput } from "./types/DeleteFlowTemplateOutput";
import { DeleteNamespaceInput } from "./types/DeleteNamespaceInput";
import { DeleteNamespaceOutput } from "./types/DeleteNamespaceOutput";
import { DeleteSystemInstanceInput } from "./types/DeleteSystemInstanceInput";
import { DeleteSystemInstanceOutput } from "./types/DeleteSystemInstanceOutput";
import { DeleteSystemTemplateInput } from "./types/DeleteSystemTemplateInput";
import { DeleteSystemTemplateOutput } from "./types/DeleteSystemTemplateOutput";
import { DeploySystemInstanceInput } from "./types/DeploySystemInstanceInput";
import { DeploySystemInstanceOutput } from "./types/DeploySystemInstanceOutput";
import { DeprecateFlowTemplateInput } from "./types/DeprecateFlowTemplateInput";
import { DeprecateFlowTemplateOutput } from "./types/DeprecateFlowTemplateOutput";
import { DeprecateSystemTemplateInput } from "./types/DeprecateSystemTemplateInput";
import { DeprecateSystemTemplateOutput } from "./types/DeprecateSystemTemplateOutput";
import { DescribeNamespaceInput } from "./types/DescribeNamespaceInput";
import { DescribeNamespaceOutput } from "./types/DescribeNamespaceOutput";
import { DissociateEntityFromThingInput } from "./types/DissociateEntityFromThingInput";
import { DissociateEntityFromThingOutput } from "./types/DissociateEntityFromThingOutput";
import { GetEntitiesInput } from "./types/GetEntitiesInput";
import { GetEntitiesOutput } from "./types/GetEntitiesOutput";
import { GetFlowTemplateInput } from "./types/GetFlowTemplateInput";
import { GetFlowTemplateOutput } from "./types/GetFlowTemplateOutput";
import { GetFlowTemplateRevisionsInput } from "./types/GetFlowTemplateRevisionsInput";
import { GetFlowTemplateRevisionsOutput } from "./types/GetFlowTemplateRevisionsOutput";
import { GetNamespaceDeletionStatusInput } from "./types/GetNamespaceDeletionStatusInput";
import { GetNamespaceDeletionStatusOutput } from "./types/GetNamespaceDeletionStatusOutput";
import { GetSystemInstanceInput } from "./types/GetSystemInstanceInput";
import { GetSystemInstanceOutput } from "./types/GetSystemInstanceOutput";
import { GetSystemTemplateInput } from "./types/GetSystemTemplateInput";
import { GetSystemTemplateOutput } from "./types/GetSystemTemplateOutput";
import { GetSystemTemplateRevisionsInput } from "./types/GetSystemTemplateRevisionsInput";
import { GetSystemTemplateRevisionsOutput } from "./types/GetSystemTemplateRevisionsOutput";
import { GetUploadStatusInput } from "./types/GetUploadStatusInput";
import { GetUploadStatusOutput } from "./types/GetUploadStatusOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListFlowExecutionMessagesInput } from "./types/ListFlowExecutionMessagesInput";
import { ListFlowExecutionMessagesOutput } from "./types/ListFlowExecutionMessagesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { SearchEntitiesInput } from "./types/SearchEntitiesInput";
import { SearchEntitiesOutput } from "./types/SearchEntitiesOutput";
import { SearchFlowExecutionsInput } from "./types/SearchFlowExecutionsInput";
import { SearchFlowExecutionsOutput } from "./types/SearchFlowExecutionsOutput";
import { SearchFlowTemplatesInput } from "./types/SearchFlowTemplatesInput";
import { SearchFlowTemplatesOutput } from "./types/SearchFlowTemplatesOutput";
import { SearchSystemInstancesInput } from "./types/SearchSystemInstancesInput";
import { SearchSystemInstancesOutput } from "./types/SearchSystemInstancesOutput";
import { SearchSystemTemplatesInput } from "./types/SearchSystemTemplatesInput";
import { SearchSystemTemplatesOutput } from "./types/SearchSystemTemplatesOutput";
import { SearchThingsInput } from "./types/SearchThingsInput";
import { SearchThingsOutput } from "./types/SearchThingsOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UndeploySystemInstanceInput } from "./types/UndeploySystemInstanceInput";
import { UndeploySystemInstanceOutput } from "./types/UndeploySystemInstanceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateFlowTemplateInput } from "./types/UpdateFlowTemplateInput";
import { UpdateFlowTemplateOutput } from "./types/UpdateFlowTemplateOutput";
import { UpdateSystemTemplateInput } from "./types/UpdateSystemTemplateInput";
import { UpdateSystemTemplateOutput } from "./types/UpdateSystemTemplateOutput";
import { UploadEntityDefinitionsInput } from "./types/UploadEntityDefinitionsInput";
import { UploadEntityDefinitionsOutput } from "./types/UploadEntityDefinitionsOutput";
import { AssociateEntityToThingCommand } from "./commands/AssociateEntityToThingCommand";
import { CreateFlowTemplateCommand } from "./commands/CreateFlowTemplateCommand";
import { CreateSystemInstanceCommand } from "./commands/CreateSystemInstanceCommand";
import { CreateSystemTemplateCommand } from "./commands/CreateSystemTemplateCommand";
import { DeleteFlowTemplateCommand } from "./commands/DeleteFlowTemplateCommand";
import { DeleteNamespaceCommand } from "./commands/DeleteNamespaceCommand";
import { DeleteSystemInstanceCommand } from "./commands/DeleteSystemInstanceCommand";
import { DeleteSystemTemplateCommand } from "./commands/DeleteSystemTemplateCommand";
import { DeploySystemInstanceCommand } from "./commands/DeploySystemInstanceCommand";
import { DeprecateFlowTemplateCommand } from "./commands/DeprecateFlowTemplateCommand";
import { DeprecateSystemTemplateCommand } from "./commands/DeprecateSystemTemplateCommand";
import { DescribeNamespaceCommand } from "./commands/DescribeNamespaceCommand";
import { DissociateEntityFromThingCommand } from "./commands/DissociateEntityFromThingCommand";
import { GetEntitiesCommand } from "./commands/GetEntitiesCommand";
import { GetFlowTemplateCommand } from "./commands/GetFlowTemplateCommand";
import { GetFlowTemplateRevisionsCommand } from "./commands/GetFlowTemplateRevisionsCommand";
import { GetNamespaceDeletionStatusCommand } from "./commands/GetNamespaceDeletionStatusCommand";
import { GetSystemInstanceCommand } from "./commands/GetSystemInstanceCommand";
import { GetSystemTemplateCommand } from "./commands/GetSystemTemplateCommand";
import { GetSystemTemplateRevisionsCommand } from "./commands/GetSystemTemplateRevisionsCommand";
import { GetUploadStatusCommand } from "./commands/GetUploadStatusCommand";
import { ListFlowExecutionMessagesCommand } from "./commands/ListFlowExecutionMessagesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { SearchEntitiesCommand } from "./commands/SearchEntitiesCommand";
import { SearchFlowExecutionsCommand } from "./commands/SearchFlowExecutionsCommand";
import { SearchFlowTemplatesCommand } from "./commands/SearchFlowTemplatesCommand";
import { SearchSystemInstancesCommand } from "./commands/SearchSystemInstancesCommand";
import { SearchSystemTemplatesCommand } from "./commands/SearchSystemTemplatesCommand";
import { SearchThingsCommand } from "./commands/SearchThingsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UndeploySystemInstanceCommand } from "./commands/UndeploySystemInstanceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateFlowTemplateCommand } from "./commands/UpdateFlowTemplateCommand";
import { UpdateSystemTemplateCommand } from "./commands/UpdateSystemTemplateCommand";
import { UploadEntityDefinitionsCommand } from "./commands/UploadEntityDefinitionsCommand";

export class IoTThingsGraph extends IoTThingsGraphClient {
  /**
   * <p>Associates a device with a concrete thing that is in the user's registry.</p> <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateEntityToThing(
    args: AssociateEntityToThingInput
  ): Promise<AssociateEntityToThingOutput>;
  public associateEntityToThing(
    args: AssociateEntityToThingInput,
    cb: (err: any, data?: AssociateEntityToThingOutput) => void
  ): void;
  public associateEntityToThing(
    args: AssociateEntityToThingInput,
    cb?: (err: any, data?: AssociateEntityToThingOutput) => void
  ): Promise<AssociateEntityToThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateEntityToThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceAlreadyExistsException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {LimitExceededException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFlowTemplate(
    args: CreateFlowTemplateInput
  ): Promise<CreateFlowTemplateOutput>;
  public createFlowTemplate(
    args: CreateFlowTemplateInput,
    cb: (err: any, data?: CreateFlowTemplateOutput) => void
  ): void;
  public createFlowTemplate(
    args: CreateFlowTemplateInput,
    cb?: (err: any, data?: CreateFlowTemplateOutput) => void
  ): Promise<CreateFlowTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFlowTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a system instance. </p> <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to call <code>DeploySystemInstance</code> after running this action.</p> <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p> <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p> <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceAlreadyExistsException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {LimitExceededException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSystemInstance(
    args: CreateSystemInstanceInput
  ): Promise<CreateSystemInstanceOutput>;
  public createSystemInstance(
    args: CreateSystemInstanceInput,
    cb: (err: any, data?: CreateSystemInstanceOutput) => void
  ): void;
  public createSystemInstance(
    args: CreateSystemInstanceInput,
    cb?: (err: any, data?: CreateSystemInstanceOutput) => void
  ): Promise<CreateSystemInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSystemInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceAlreadyExistsException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSystemTemplate(
    args: CreateSystemTemplateInput
  ): Promise<CreateSystemTemplateOutput>;
  public createSystemTemplate(
    args: CreateSystemTemplateInput,
    cb: (err: any, data?: CreateSystemTemplateOutput) => void
  ): void;
  public createSystemTemplate(
    args: CreateSystemTemplateInput,
    cb?: (err: any, data?: CreateSystemTemplateOutput) => void
  ): Promise<CreateSystemTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSystemTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceInUseException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFlowTemplate(
    args: DeleteFlowTemplateInput
  ): Promise<DeleteFlowTemplateOutput>;
  public deleteFlowTemplate(
    args: DeleteFlowTemplateInput,
    cb: (err: any, data?: DeleteFlowTemplateOutput) => void
  ): void;
  public deleteFlowTemplate(
    args: DeleteFlowTemplateInput,
    cb?: (err: any, data?: DeleteFlowTemplateOutput) => void
  ): Promise<DeleteFlowTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFlowTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNamespace(
    args: DeleteNamespaceInput
  ): Promise<DeleteNamespaceOutput>;
  public deleteNamespace(
    args: DeleteNamespaceInput,
    cb: (err: any, data?: DeleteNamespaceOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceInput,
    cb?: (err: any, data?: DeleteNamespaceOutput) => void
  ): Promise<DeleteNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted.</p> <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceInUseException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSystemInstance(
    args: DeleteSystemInstanceInput
  ): Promise<DeleteSystemInstanceOutput>;
  public deleteSystemInstance(
    args: DeleteSystemInstanceInput,
    cb: (err: any, data?: DeleteSystemInstanceOutput) => void
  ): void;
  public deleteSystemInstance(
    args: DeleteSystemInstanceInput,
    cb?: (err: any, data?: DeleteSystemInstanceOutput) => void
  ): Promise<DeleteSystemInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSystemInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceInUseException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSystemTemplate(
    args: DeleteSystemTemplateInput
  ): Promise<DeleteSystemTemplateOutput>;
  public deleteSystemTemplate(
    args: DeleteSystemTemplateInput,
    cb: (err: any, data?: DeleteSystemTemplateOutput) => void
  ): void;
  public deleteSystemTemplate(
    args: DeleteSystemTemplateInput,
    cb?: (err: any, data?: DeleteSystemTemplateOutput) => void
  ): Promise<DeleteSystemTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSystemTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> <b>Greengrass and Cloud Deployments</b> </p> <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p> <p> <b>Greengrass Deployments</b> </p> <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service resource file and then deploy it.</p> <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p> <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceInUseException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deploySystemInstance(
    args: DeploySystemInstanceInput
  ): Promise<DeploySystemInstanceOutput>;
  public deploySystemInstance(
    args: DeploySystemInstanceInput,
    cb: (err: any, data?: DeploySystemInstanceOutput) => void
  ): void;
  public deploySystemInstance(
    args: DeploySystemInstanceInput,
    cb?: (err: any, data?: DeploySystemInstanceOutput) => void
  ): Promise<DeploySystemInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeploySystemInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateInput
  ): Promise<DeprecateFlowTemplateOutput>;
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateInput,
    cb: (err: any, data?: DeprecateFlowTemplateOutput) => void
  ): void;
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateInput,
    cb?: (err: any, data?: DeprecateFlowTemplateOutput) => void
  ): Promise<DeprecateFlowTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprecateFlowTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecates the specified system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateInput
  ): Promise<DeprecateSystemTemplateOutput>;
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateInput,
    cb: (err: any, data?: DeprecateSystemTemplateOutput) => void
  ): void;
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateInput,
    cb?: (err: any, data?: DeprecateSystemTemplateOutput) => void
  ): Promise<DeprecateSystemTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprecateSystemTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p/>
   *   - {InvalidRequestException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNamespace(
    args: DescribeNamespaceInput
  ): Promise<DescribeNamespaceOutput>;
  public describeNamespace(
    args: DescribeNamespaceInput,
    cb: (err: any, data?: DescribeNamespaceOutput) => void
  ): void;
  public describeNamespace(
    args: DescribeNamespaceInput,
    cb?: (err: any, data?: DescribeNamespaceOutput) => void
  ): Promise<DescribeNamespaceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNamespaceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingInput
  ): Promise<DissociateEntityFromThingOutput>;
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingInput,
    cb: (err: any, data?: DissociateEntityFromThingOutput) => void
  ): void;
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingInput,
    cb?: (err: any, data?: DissociateEntityFromThingOutput) => void
  ): Promise<DissociateEntityFromThingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DissociateEntityFromThingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.</p> <ul> <li> <p>Properties</p> </li> <li> <p>States</p> </li> <li> <p>Events</p> </li> <li> <p>Actions</p> </li> <li> <p>Capabilities</p> </li> <li> <p>Mappings</p> </li> <li> <p>Devices</p> </li> <li> <p>Device Models</p> </li> <li> <p>Services</p> </li> </ul> <p>This action doesn't return definitions for systems, flows, and deployments.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEntities(args: GetEntitiesInput): Promise<GetEntitiesOutput>;
  public getEntities(
    args: GetEntitiesInput,
    cb: (err: any, data?: GetEntitiesOutput) => void
  ): void;
  public getEntities(
    args: GetEntitiesInput,
    cb?: (err: any, data?: GetEntitiesOutput) => void
  ): Promise<GetEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFlowTemplate(
    args: GetFlowTemplateInput
  ): Promise<GetFlowTemplateOutput>;
  public getFlowTemplate(
    args: GetFlowTemplateInput,
    cb: (err: any, data?: GetFlowTemplateOutput) => void
  ): void;
  public getFlowTemplate(
    args: GetFlowTemplateInput,
    cb?: (err: any, data?: GetFlowTemplateOutput) => void
  ): Promise<GetFlowTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFlowTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsInput
  ): Promise<GetFlowTemplateRevisionsOutput>;
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsInput,
    cb: (err: any, data?: GetFlowTemplateRevisionsOutput) => void
  ): void;
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsInput,
    cb?: (err: any, data?: GetFlowTemplateRevisionsOutput) => void
  ): Promise<GetFlowTemplateRevisionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFlowTemplateRevisionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the status of a namespace deletion task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusInput
  ): Promise<GetNamespaceDeletionStatusOutput>;
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusInput,
    cb: (err: any, data?: GetNamespaceDeletionStatusOutput) => void
  ): void;
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusInput,
    cb?: (err: any, data?: GetNamespaceDeletionStatusOutput) => void
  ): Promise<GetNamespaceDeletionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNamespaceDeletionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a system instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSystemInstance(
    args: GetSystemInstanceInput
  ): Promise<GetSystemInstanceOutput>;
  public getSystemInstance(
    args: GetSystemInstanceInput,
    cb: (err: any, data?: GetSystemInstanceOutput) => void
  ): void;
  public getSystemInstance(
    args: GetSystemInstanceInput,
    cb?: (err: any, data?: GetSystemInstanceOutput) => void
  ): Promise<GetSystemInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSystemInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a system.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSystemTemplate(
    args: GetSystemTemplateInput
  ): Promise<GetSystemTemplateOutput>;
  public getSystemTemplate(
    args: GetSystemTemplateInput,
    cb: (err: any, data?: GetSystemTemplateOutput) => void
  ): void;
  public getSystemTemplate(
    args: GetSystemTemplateInput,
    cb?: (err: any, data?: GetSystemTemplateOutput) => void
  ): Promise<GetSystemTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSystemTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsInput
  ): Promise<GetSystemTemplateRevisionsOutput>;
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsInput,
    cb: (err: any, data?: GetSystemTemplateRevisionsOutput) => void
  ): void;
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsInput,
    cb?: (err: any, data?: GetSystemTemplateRevisionsOutput) => void
  ): Promise<GetSystemTemplateRevisionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSystemTemplateRevisionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the status of the specified upload.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUploadStatus(
    args: GetUploadStatusInput
  ): Promise<GetUploadStatusOutput>;
  public getUploadStatus(
    args: GetUploadStatusInput,
    cb: (err: any, data?: GetUploadStatusOutput) => void
  ): void;
  public getUploadStatus(
    args: GetUploadStatusInput,
    cb?: (err: any, data?: GetUploadStatusOutput) => void
  ): Promise<GetUploadStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUploadStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of objects that contain information about events in a flow execution.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesInput
  ): Promise<ListFlowExecutionMessagesOutput>;
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesInput,
    cb: (err: any, data?: ListFlowExecutionMessagesOutput) => void
  ): void;
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesInput,
    cb?: (err: any, data?: ListFlowExecutionMessagesOutput) => void
  ): Promise<ListFlowExecutionMessagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFlowExecutionMessagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags on an AWS IoT Things Graph resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceAlreadyExistsException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchEntities(
    args: SearchEntitiesInput
  ): Promise<SearchEntitiesOutput>;
  public searchEntities(
    args: SearchEntitiesInput,
    cb: (err: any, data?: SearchEntitiesOutput) => void
  ): void;
  public searchEntities(
    args: SearchEntitiesInput,
    cb?: (err: any, data?: SearchEntitiesOutput) => void
  ): Promise<SearchEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchFlowExecutions(
    args: SearchFlowExecutionsInput
  ): Promise<SearchFlowExecutionsOutput>;
  public searchFlowExecutions(
    args: SearchFlowExecutionsInput,
    cb: (err: any, data?: SearchFlowExecutionsOutput) => void
  ): void;
  public searchFlowExecutions(
    args: SearchFlowExecutionsInput,
    cb?: (err: any, data?: SearchFlowExecutionsOutput) => void
  ): Promise<SearchFlowExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchFlowExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for summary information about workflows.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchFlowTemplates(
    args: SearchFlowTemplatesInput
  ): Promise<SearchFlowTemplatesOutput>;
  public searchFlowTemplates(
    args: SearchFlowTemplatesInput,
    cb: (err: any, data?: SearchFlowTemplatesOutput) => void
  ): void;
  public searchFlowTemplates(
    args: SearchFlowTemplatesInput,
    cb?: (err: any, data?: SearchFlowTemplatesOutput) => void
  ): Promise<SearchFlowTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchFlowTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for system instances in the user's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchSystemInstances(
    args: SearchSystemInstancesInput
  ): Promise<SearchSystemInstancesOutput>;
  public searchSystemInstances(
    args: SearchSystemInstancesInput,
    cb: (err: any, data?: SearchSystemInstancesOutput) => void
  ): void;
  public searchSystemInstances(
    args: SearchSystemInstancesInput,
    cb?: (err: any, data?: SearchSystemInstancesOutput) => void
  ): Promise<SearchSystemInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchSystemInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchSystemTemplates(
    args: SearchSystemTemplatesInput
  ): Promise<SearchSystemTemplatesOutput>;
  public searchSystemTemplates(
    args: SearchSystemTemplatesInput,
    cb: (err: any, data?: SearchSystemTemplatesOutput) => void
  ): void;
  public searchSystemTemplates(
    args: SearchSystemTemplatesInput,
    cb?: (err: any, data?: SearchSystemTemplatesOutput) => void
  ): Promise<SearchSystemTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchSystemTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p> <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p> <p>This action searches for exact matches and doesn't perform partial text matching.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchThings(args: SearchThingsInput): Promise<SearchThingsOutput>;
  public searchThings(
    args: SearchThingsInput,
    cb: (err: any, data?: SearchThingsOutput) => void
  ): void;
  public searchThings(
    args: SearchThingsInput,
    cb?: (err: any, data?: SearchThingsOutput) => void
  ): Promise<SearchThingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchThingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a tag for the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceAlreadyExistsException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {ResourceInUseException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public undeploySystemInstance(
    args: UndeploySystemInstanceInput
  ): Promise<UndeploySystemInstanceOutput>;
  public undeploySystemInstance(
    args: UndeploySystemInstanceInput,
    cb: (err: any, data?: UndeploySystemInstanceOutput) => void
  ): void;
  public undeploySystemInstance(
    args: UndeploySystemInstanceInput,
    cb?: (err: any, data?: UndeploySystemInstanceOutput) => void
  ): Promise<UndeploySystemInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UndeploySystemInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a tag from the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceAlreadyExistsException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFlowTemplate(
    args: UpdateFlowTemplateInput
  ): Promise<UpdateFlowTemplateOutput>;
  public updateFlowTemplate(
    args: UpdateFlowTemplateInput,
    cb: (err: any, data?: UpdateFlowTemplateOutput) => void
  ): void;
  public updateFlowTemplate(
    args: UpdateFlowTemplateInput,
    cb?: (err: any, data?: UpdateFlowTemplateOutput) => void
  ): Promise<UpdateFlowTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFlowTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {ResourceNotFoundException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSystemTemplate(
    args: UpdateSystemTemplateInput
  ): Promise<UpdateSystemTemplateOutput>;
  public updateSystemTemplate(
    args: UpdateSystemTemplateInput,
    cb: (err: any, data?: UpdateSystemTemplateOutput) => void
  ): void;
  public updateSystemTemplate(
    args: UpdateSystemTemplateInput,
    cb?: (err: any, data?: UpdateSystemTemplateOutput) => void
  ): Promise<UpdateSystemTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSystemTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Asynchronously uploads one or more entity definitions to the user's namespace. The <code>document</code> parameter is required if <code>syncWithPublicNamespace</code> and <code>deleteExistingEntites</code> are false. If the <code>syncWithPublicNamespace</code> parameter is set to <code>true</code>, the user's namespace will synchronize with the latest version of the public namespace. If <code>deprecateExistingEntities</code> is set to true, all entities in the latest version will be deleted before the new <code>DefinitionDocument</code> is uploaded.</p> <p>When a user uploads entity definitions for the first time, the service creates a new namespace for the user. The new namespace tracks the public namespace. Currently users can have only one namespace. The namespace version increments whenever a user uploads entity definitions that are backwards-incompatible and whenever a user sets the <code>syncWithPublicNamespace</code> parameter or the <code>deprecateExistingEntities</code> parameter to <code>true</code>.</p> <p>The IDs for all of the entities should be in URN format. Each entity must be in the user's namespace. Users can't create entities in the public namespace, but entity definitions can refer to entities in the public namespace.</p> <p>Valid entities are <code>Device</code>, <code>DeviceModel</code>, <code>Service</code>, <code>Capability</code>, <code>State</code>, <code>Action</code>, <code>Event</code>, <code>Property</code>, <code>Mapping</code>, <code>Enum</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p/>
   *   - {InternalFailureException} <p/>
   *   - {ThrottlingException} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsInput
  ): Promise<UploadEntityDefinitionsOutput>;
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsInput,
    cb: (err: any, data?: UploadEntityDefinitionsOutput) => void
  ): void;
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsInput,
    cb?: (err: any, data?: UploadEntityDefinitionsOutput) => void
  ): Promise<UploadEntityDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadEntityDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
