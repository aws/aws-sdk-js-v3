// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateEntityToThingCommand,
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
} from "./commands/AssociateEntityToThingCommand";
import {
  CreateFlowTemplateCommand,
  CreateFlowTemplateCommandInput,
  CreateFlowTemplateCommandOutput,
} from "./commands/CreateFlowTemplateCommand";
import {
  CreateSystemInstanceCommand,
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
} from "./commands/CreateSystemInstanceCommand";
import {
  CreateSystemTemplateCommand,
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput,
} from "./commands/CreateSystemTemplateCommand";
import {
  DeleteFlowTemplateCommand,
  DeleteFlowTemplateCommandInput,
  DeleteFlowTemplateCommandOutput,
} from "./commands/DeleteFlowTemplateCommand";
import {
  DeleteNamespaceCommand,
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
} from "./commands/DeleteNamespaceCommand";
import {
  DeleteSystemInstanceCommand,
  DeleteSystemInstanceCommandInput,
  DeleteSystemInstanceCommandOutput,
} from "./commands/DeleteSystemInstanceCommand";
import {
  DeleteSystemTemplateCommand,
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput,
} from "./commands/DeleteSystemTemplateCommand";
import {
  DeploySystemInstanceCommand,
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput,
} from "./commands/DeploySystemInstanceCommand";
import {
  DeprecateFlowTemplateCommand,
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput,
} from "./commands/DeprecateFlowTemplateCommand";
import {
  DeprecateSystemTemplateCommand,
  DeprecateSystemTemplateCommandInput,
  DeprecateSystemTemplateCommandOutput,
} from "./commands/DeprecateSystemTemplateCommand";
import {
  DescribeNamespaceCommand,
  DescribeNamespaceCommandInput,
  DescribeNamespaceCommandOutput,
} from "./commands/DescribeNamespaceCommand";
import {
  DissociateEntityFromThingCommand,
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
} from "./commands/DissociateEntityFromThingCommand";
import { GetEntitiesCommand, GetEntitiesCommandInput, GetEntitiesCommandOutput } from "./commands/GetEntitiesCommand";
import {
  GetFlowTemplateCommand,
  GetFlowTemplateCommandInput,
  GetFlowTemplateCommandOutput,
} from "./commands/GetFlowTemplateCommand";
import {
  GetFlowTemplateRevisionsCommand,
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "./commands/GetFlowTemplateRevisionsCommand";
import {
  GetNamespaceDeletionStatusCommand,
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
} from "./commands/GetNamespaceDeletionStatusCommand";
import {
  GetSystemInstanceCommand,
  GetSystemInstanceCommandInput,
  GetSystemInstanceCommandOutput,
} from "./commands/GetSystemInstanceCommand";
import {
  GetSystemTemplateCommand,
  GetSystemTemplateCommandInput,
  GetSystemTemplateCommandOutput,
} from "./commands/GetSystemTemplateCommand";
import {
  GetSystemTemplateRevisionsCommand,
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "./commands/GetSystemTemplateRevisionsCommand";
import {
  GetUploadStatusCommand,
  GetUploadStatusCommandInput,
  GetUploadStatusCommandOutput,
} from "./commands/GetUploadStatusCommand";
import {
  ListFlowExecutionMessagesCommand,
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "./commands/ListFlowExecutionMessagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SearchEntitiesCommand,
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput,
} from "./commands/SearchEntitiesCommand";
import {
  SearchFlowExecutionsCommand,
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "./commands/SearchFlowExecutionsCommand";
import {
  SearchFlowTemplatesCommand,
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "./commands/SearchFlowTemplatesCommand";
import {
  SearchSystemInstancesCommand,
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "./commands/SearchSystemInstancesCommand";
import {
  SearchSystemTemplatesCommand,
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "./commands/SearchSystemTemplatesCommand";
import {
  SearchThingsCommand,
  SearchThingsCommandInput,
  SearchThingsCommandOutput,
} from "./commands/SearchThingsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UndeploySystemInstanceCommand,
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput,
} from "./commands/UndeploySystemInstanceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFlowTemplateCommand,
  UpdateFlowTemplateCommandInput,
  UpdateFlowTemplateCommandOutput,
} from "./commands/UpdateFlowTemplateCommand";
import {
  UpdateSystemTemplateCommand,
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput,
} from "./commands/UpdateSystemTemplateCommand";
import {
  UploadEntityDefinitionsCommand,
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput,
} from "./commands/UploadEntityDefinitionsCommand";
import { IoTThingsGraphClient } from "./IoTThingsGraphClient";

/**
 * <fullname>AWS IoT Things Graph</fullname>
 *          <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards,
 *        such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services
 *        and defining how they interact at an abstract level.</p>
 *          <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>
 *
 *          <p>The AWS IoT Things Graph service is discontinued.</p>
 */
export class IoTThingsGraph extends IoTThingsGraphClient {
  /**
   * @deprecated
   *
   * <p>Associates a device with a concrete thing that is in the user's registry.</p>
   *          <p>A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</p>
   */
  public associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEntityToThingCommandOutput>;
  public associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    cb: (err: any, data?: AssociateEntityToThingCommandOutput) => void
  ): void;
  public associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEntityToThingCommandOutput) => void
  ): void;
  public associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateEntityToThingCommandOutput) => void),
    cb?: (err: any, data?: AssociateEntityToThingCommandOutput) => void
  ): Promise<AssociateEntityToThingCommandOutput> | void {
    const command = new AssociateEntityToThingCommand(args);
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
   * @deprecated
   *
   * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
   *          entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
   *       latest version of the user's namespace unless another namespace version is specified in the request.</p>
   */
  public createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowTemplateCommandOutput>;
  public createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    cb: (err: any, data?: CreateFlowTemplateCommandOutput) => void
  ): void;
  public createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowTemplateCommandOutput) => void
  ): void;
  public createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFlowTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateFlowTemplateCommandOutput) => void
  ): Promise<CreateFlowTemplateCommandOutput> | void {
    const command = new CreateFlowTemplateCommand(args);
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
   * @deprecated
   *
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
  public createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSystemInstanceCommandOutput>;
  public createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    cb: (err: any, data?: CreateSystemInstanceCommandOutput) => void
  ): void;
  public createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSystemInstanceCommandOutput) => void
  ): void;
  public createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSystemInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateSystemInstanceCommandOutput) => void
  ): Promise<CreateSystemInstanceCommandOutput> | void {
    const command = new CreateSystemInstanceCommand(args);
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
   * @deprecated
   *
   * <p>Creates a system. The system is validated against the entities in the
   *          latest version of the user's namespace unless another namespace version is specified in the request.</p>
   */
  public createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSystemTemplateCommandOutput>;
  public createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    cb: (err: any, data?: CreateSystemTemplateCommandOutput) => void
  ): void;
  public createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSystemTemplateCommandOutput) => void
  ): void;
  public createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSystemTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateSystemTemplateCommandOutput) => void
  ): Promise<CreateSystemTemplateCommandOutput> | void {
    const command = new CreateSystemTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy.
   *          Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</p>
   */
  public deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowTemplateCommandOutput>;
  public deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    cb: (err: any, data?: DeleteFlowTemplateCommandOutput) => void
  ): void;
  public deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowTemplateCommandOutput) => void
  ): void;
  public deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFlowTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteFlowTemplateCommandOutput) => void
  ): Promise<DeleteFlowTemplateCommandOutput> | void {
    const command = new DeleteFlowTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows that use entities in the namespace before performing this action. This action takes no
   *       request parameters.</p>
   */
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  public deleteNamespace(
    args: DeleteNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): Promise<DeleteNamespaceCommandOutput> | void {
    const command = new DeleteNamespaceCommand(args);
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
   * @deprecated
   *
   * <p>Deletes a system instance.
   *          Only system instances that have never been deployed, or that have been undeployed can be deleted.</p>
   *          <p>Users can create a new system instance that has the same ID as a deleted system instance.</p>
   */
  public deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSystemInstanceCommandOutput>;
  public deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    cb: (err: any, data?: DeleteSystemInstanceCommandOutput) => void
  ): void;
  public deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSystemInstanceCommandOutput) => void
  ): void;
  public deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSystemInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteSystemInstanceCommandOutput) => void
  ): Promise<DeleteSystemInstanceCommandOutput> | void {
    const command = new DeleteSystemInstanceCommand(args);
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
   * @deprecated
   *
   * <p>Deletes a system. New deployments can't contain the system after its deletion.
   *       Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
   */
  public deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSystemTemplateCommandOutput>;
  public deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    cb: (err: any, data?: DeleteSystemTemplateCommandOutput) => void
  ): void;
  public deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSystemTemplateCommandOutput) => void
  ): void;
  public deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSystemTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteSystemTemplateCommandOutput) => void
  ): Promise<DeleteSystemTemplateCommandOutput> | void {
    const command = new DeleteSystemTemplateCommand(args);
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
   * @deprecated
   *
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
  public deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeploySystemInstanceCommandOutput>;
  public deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    cb: (err: any, data?: DeploySystemInstanceCommandOutput) => void
  ): void;
  public deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeploySystemInstanceCommandOutput) => void
  ): void;
  public deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeploySystemInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeploySystemInstanceCommandOutput) => void
  ): Promise<DeploySystemInstanceCommandOutput> | void {
    const command = new DeploySystemInstanceCommand(args);
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
   * @deprecated
   *
   * <p>Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.</p>
   */
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateFlowTemplateCommandOutput>;
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    cb: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void
  ): void;
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void
  ): void;
  public deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprecateFlowTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void
  ): Promise<DeprecateFlowTemplateCommandOutput> | void {
    const command = new DeprecateFlowTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Deprecates the specified system.</p>
   */
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateSystemTemplateCommandOutput>;
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    cb: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void
  ): void;
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void
  ): void;
  public deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprecateSystemTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void
  ): Promise<DeprecateSystemTemplateCommandOutput> | void {
    const command = new DeprecateSystemTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
   */
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNamespaceCommandOutput>;
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  public describeNamespace(
    args: DescribeNamespaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNamespaceCommandOutput) => void),
    cb?: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): Promise<DescribeNamespaceCommandOutput> | void {
    const command = new DescribeNamespaceCommand(args);
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
   * @deprecated
   *
   * <p>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only
   *          one entity of a particular type can be associated with a thing.</p>
   */
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DissociateEntityFromThingCommandOutput>;
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    cb: (err: any, data?: DissociateEntityFromThingCommandOutput) => void
  ): void;
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DissociateEntityFromThingCommandOutput) => void
  ): void;
  public dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DissociateEntityFromThingCommandOutput) => void),
    cb?: (err: any, data?: DissociateEntityFromThingCommandOutput) => void
  ): Promise<DissociateEntityFromThingCommandOutput> | void {
    const command = new DissociateEntityFromThingCommand(args);
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
   * @deprecated
   *
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
  public getEntities(args: GetEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<GetEntitiesCommandOutput>;
  public getEntities(args: GetEntitiesCommandInput, cb: (err: any, data?: GetEntitiesCommandOutput) => void): void;
  public getEntities(
    args: GetEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntitiesCommandOutput) => void
  ): void;
  public getEntities(
    args: GetEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEntitiesCommandOutput) => void),
    cb?: (err: any, data?: GetEntitiesCommandOutput) => void
  ): Promise<GetEntitiesCommandOutput> | void {
    const command = new GetEntitiesCommand(args);
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
   * @deprecated
   *
   * <p>Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.</p>
   */
  public getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowTemplateCommandOutput>;
  public getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    cb: (err: any, data?: GetFlowTemplateCommandOutput) => void
  ): void;
  public getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowTemplateCommandOutput) => void
  ): void;
  public getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFlowTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetFlowTemplateCommandOutput) => void
  ): Promise<GetFlowTemplateCommandOutput> | void {
    const command = new GetFlowTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
   *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
   */
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowTemplateRevisionsCommandOutput>;
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    cb: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void
  ): void;
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void
  ): void;
  public getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void),
    cb?: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void
  ): Promise<GetFlowTemplateRevisionsCommandOutput> | void {
    const command = new GetFlowTemplateRevisionsCommand(args);
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
   * @deprecated
   *
   * <p>Gets the status of a namespace deletion task.</p>
   */
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNamespaceDeletionStatusCommandOutput>;
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    cb: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void
  ): void;
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void
  ): void;
  public getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void),
    cb?: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void
  ): Promise<GetNamespaceDeletionStatusCommandOutput> | void {
    const command = new GetNamespaceDeletionStatusCommand(args);
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
   * @deprecated
   *
   * <p>Gets a system instance.</p>
   */
  public getSystemInstance(
    args: GetSystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemInstanceCommandOutput>;
  public getSystemInstance(
    args: GetSystemInstanceCommandInput,
    cb: (err: any, data?: GetSystemInstanceCommandOutput) => void
  ): void;
  public getSystemInstance(
    args: GetSystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemInstanceCommandOutput) => void
  ): void;
  public getSystemInstance(
    args: GetSystemInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSystemInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetSystemInstanceCommandOutput) => void
  ): Promise<GetSystemInstanceCommandOutput> | void {
    const command = new GetSystemInstanceCommand(args);
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
   * @deprecated
   *
   * <p>Gets a system.</p>
   */
  public getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemTemplateCommandOutput>;
  public getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    cb: (err: any, data?: GetSystemTemplateCommandOutput) => void
  ): void;
  public getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemTemplateCommandOutput) => void
  ): void;
  public getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSystemTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetSystemTemplateCommandOutput) => void
  ): Promise<GetSystemTemplateCommandOutput> | void {
    const command = new GetSystemTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
   *       the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
   */
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemTemplateRevisionsCommandOutput>;
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    cb: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void
  ): void;
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void
  ): void;
  public getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void),
    cb?: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void
  ): Promise<GetSystemTemplateRevisionsCommandOutput> | void {
    const command = new GetSystemTemplateRevisionsCommand(args);
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
   * @deprecated
   *
   * <p>Gets the status of the specified upload.</p>
   */
  public getUploadStatus(
    args: GetUploadStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUploadStatusCommandOutput>;
  public getUploadStatus(
    args: GetUploadStatusCommandInput,
    cb: (err: any, data?: GetUploadStatusCommandOutput) => void
  ): void;
  public getUploadStatus(
    args: GetUploadStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUploadStatusCommandOutput) => void
  ): void;
  public getUploadStatus(
    args: GetUploadStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUploadStatusCommandOutput) => void),
    cb?: (err: any, data?: GetUploadStatusCommandOutput) => void
  ): Promise<GetUploadStatusCommandOutput> | void {
    const command = new GetUploadStatusCommand(args);
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
   * @deprecated
   *
   * <p>Returns a list of objects that contain information about events in a flow execution.</p>
   */
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowExecutionMessagesCommandOutput>;
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    cb: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void
  ): void;
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void
  ): void;
  public listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFlowExecutionMessagesCommandOutput) => void),
    cb?: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void
  ): Promise<ListFlowExecutionMessagesCommandOutput> | void {
    const command = new ListFlowExecutionMessagesCommand(args);
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
   * @deprecated
   *
   * <p>Lists all tags on an AWS IoT Things Graph resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * @deprecated
   *
   * <p>Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.</p>
   */
  public searchEntities(
    args: SearchEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchEntitiesCommandOutput>;
  public searchEntities(
    args: SearchEntitiesCommandInput,
    cb: (err: any, data?: SearchEntitiesCommandOutput) => void
  ): void;
  public searchEntities(
    args: SearchEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchEntitiesCommandOutput) => void
  ): void;
  public searchEntities(
    args: SearchEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchEntitiesCommandOutput) => void),
    cb?: (err: any, data?: SearchEntitiesCommandOutput) => void
  ): Promise<SearchEntitiesCommandOutput> | void {
    const command = new SearchEntitiesCommand(args);
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
   * @deprecated
   *
   * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
   */
  public searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFlowExecutionsCommandOutput>;
  public searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    cb: (err: any, data?: SearchFlowExecutionsCommandOutput) => void
  ): void;
  public searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFlowExecutionsCommandOutput) => void
  ): void;
  public searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchFlowExecutionsCommandOutput) => void),
    cb?: (err: any, data?: SearchFlowExecutionsCommandOutput) => void
  ): Promise<SearchFlowExecutionsCommandOutput> | void {
    const command = new SearchFlowExecutionsCommand(args);
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
   * @deprecated
   *
   * <p>Searches for summary information about workflows.</p>
   */
  public searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFlowTemplatesCommandOutput>;
  public searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    cb: (err: any, data?: SearchFlowTemplatesCommandOutput) => void
  ): void;
  public searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFlowTemplatesCommandOutput) => void
  ): void;
  public searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchFlowTemplatesCommandOutput) => void),
    cb?: (err: any, data?: SearchFlowTemplatesCommandOutput) => void
  ): Promise<SearchFlowTemplatesCommandOutput> | void {
    const command = new SearchFlowTemplatesCommand(args);
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
   * @deprecated
   *
   * <p>Searches for system instances in the user's account.</p>
   */
  public searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSystemInstancesCommandOutput>;
  public searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    cb: (err: any, data?: SearchSystemInstancesCommandOutput) => void
  ): void;
  public searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSystemInstancesCommandOutput) => void
  ): void;
  public searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchSystemInstancesCommandOutput) => void),
    cb?: (err: any, data?: SearchSystemInstancesCommandOutput) => void
  ): Promise<SearchSystemInstancesCommandOutput> | void {
    const command = new SearchSystemInstancesCommand(args);
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
   * @deprecated
   *
   * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
   */
  public searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSystemTemplatesCommandOutput>;
  public searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    cb: (err: any, data?: SearchSystemTemplatesCommandOutput) => void
  ): void;
  public searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSystemTemplatesCommandOutput) => void
  ): void;
  public searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchSystemTemplatesCommandOutput) => void),
    cb?: (err: any, data?: SearchSystemTemplatesCommandOutput) => void
  ): Promise<SearchSystemTemplatesCommandOutput> | void {
    const command = new SearchSystemTemplatesCommand(args);
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
   * @deprecated
   *
   * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p>
   *          <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2.
   *          <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p>
   *          <p>This action searches for exact matches and doesn't perform partial text matching.</p>
   */
  public searchThings(
    args: SearchThingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchThingsCommandOutput>;
  public searchThings(args: SearchThingsCommandInput, cb: (err: any, data?: SearchThingsCommandOutput) => void): void;
  public searchThings(
    args: SearchThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchThingsCommandOutput) => void
  ): void;
  public searchThings(
    args: SearchThingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchThingsCommandOutput) => void),
    cb?: (err: any, data?: SearchThingsCommandOutput) => void
  ): Promise<SearchThingsCommandOutput> | void {
    const command = new SearchThingsCommand(args);
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
   * @deprecated
   *
   * <p>Creates a tag for the specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * @deprecated
   *
   * <p>Removes a system instance from its target (Cloud or Greengrass).</p>
   */
  public undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeploySystemInstanceCommandOutput>;
  public undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    cb: (err: any, data?: UndeploySystemInstanceCommandOutput) => void
  ): void;
  public undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeploySystemInstanceCommandOutput) => void
  ): void;
  public undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UndeploySystemInstanceCommandOutput) => void),
    cb?: (err: any, data?: UndeploySystemInstanceCommandOutput) => void
  ): Promise<UndeploySystemInstanceCommandOutput> | void {
    const command = new UndeploySystemInstanceCommand(args);
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
   * @deprecated
   *
   * <p>Removes a tag from the specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * @deprecated
   *
   * <p>Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this
   *          behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace. </p>
   */
  public updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowTemplateCommandOutput>;
  public updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    cb: (err: any, data?: UpdateFlowTemplateCommandOutput) => void
  ): void;
  public updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowTemplateCommandOutput) => void
  ): void;
  public updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowTemplateCommandOutput) => void
  ): Promise<UpdateFlowTemplateCommandOutput> | void {
    const command = new UpdateFlowTemplateCommand(args);
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
   * @deprecated
   *
   * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
   */
  public updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSystemTemplateCommandOutput>;
  public updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    cb: (err: any, data?: UpdateSystemTemplateCommandOutput) => void
  ): void;
  public updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSystemTemplateCommandOutput) => void
  ): void;
  public updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSystemTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateSystemTemplateCommandOutput) => void
  ): Promise<UpdateSystemTemplateCommandOutput> | void {
    const command = new UpdateSystemTemplateCommand(args);
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
   * @deprecated
   *
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
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadEntityDefinitionsCommandOutput>;
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    cb: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void
  ): void;
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void
  ): void;
  public uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadEntityDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void
  ): Promise<UploadEntityDefinitionsCommandOutput> | void {
    const command = new UploadEntityDefinitionsCommand(args);
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
