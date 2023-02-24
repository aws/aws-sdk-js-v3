// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateServiceRoleToAccountCommand,
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  BatchAssociateClientDeviceWithCoreDeviceCommand,
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
} from "./commands/BatchAssociateClientDeviceWithCoreDeviceCommand";
import {
  BatchDisassociateClientDeviceFromCoreDeviceCommand,
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
} from "./commands/BatchDisassociateClientDeviceFromCoreDeviceCommand";
import {
  CancelDeploymentCommand,
  CancelDeploymentCommandInput,
  CancelDeploymentCommandOutput,
} from "./commands/CancelDeploymentCommand";
import {
  CreateComponentVersionCommand,
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "./commands/CreateComponentVersionCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteCoreDeviceCommand,
  DeleteCoreDeviceCommandInput,
  DeleteCoreDeviceCommandOutput,
} from "./commands/DeleteCoreDeviceCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DescribeComponentCommand,
  DescribeComponentCommandInput,
  DescribeComponentCommandOutput,
} from "./commands/DescribeComponentCommand";
import {
  DisassociateServiceRoleFromAccountCommand,
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import {
  GetComponentVersionArtifactCommand,
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "./commands/GetComponentVersionArtifactCommand";
import {
  GetConnectivityInfoCommand,
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "./commands/GetConnectivityInfoCommand";
import {
  GetCoreDeviceCommand,
  GetCoreDeviceCommandInput,
  GetCoreDeviceCommandOutput,
} from "./commands/GetCoreDeviceCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetServiceRoleForAccountCommand,
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "./commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListComponentVersionsCommand,
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "./commands/ListComponentVersionsCommand";
import {
  ListCoreDevicesCommand,
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput,
} from "./commands/ListCoreDevicesCommand";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "./commands/ListDeploymentsCommand";
import {
  ListEffectiveDeploymentsCommand,
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "./commands/ListEffectiveDeploymentsCommand";
import {
  ListInstalledComponentsCommand,
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "./commands/ListInstalledComponentsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ResolveComponentCandidatesCommand,
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "./commands/ResolveComponentCandidatesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommand,
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "./commands/UpdateConnectivityInfoCommand";
import { GreengrassV2Client } from "./GreengrassV2Client";

/**
 * <p>IoT Greengrass brings local compute, messaging, data management, sync, and ML inference capabilities
 *       to edge devices. This enables devices to collect and analyze data closer to the source of
 *       information, react autonomously to local events, and communicate securely with each other on
 *       local networks. Local devices can also communicate securely with Amazon Web Services IoT Core and export IoT data
 *       to the Amazon Web Services Cloud. IoT Greengrass developers can use Lambda functions and components to create and
 *       deploy applications to fleets of edge devices for local operation.</p>
 *          <p>IoT Greengrass Version 2 provides a new major version of the IoT Greengrass Core software, new APIs, and a new console.
 *       Use this API reference to learn how to use the IoT Greengrass V2 API operations to manage components,
 *       manage deployments, and core devices.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html">What is IoT Greengrass?</a> in
 *       the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 */
export class GreengrassV2 extends GreengrassV2Client {
  /**
   * <p>Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass
   *       uses this role to verify the identity of client devices and manage core device connectivity
   *       information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that
   *       defines equivalent permissions for the IoT Greengrass features that you use. For more information, see
   *         <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
   */
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceRoleToAccountCommandOutput>;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): void;
  public associateServiceRoleToAccount(
    args: AssociateServiceRoleToAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateServiceRoleToAccountCommandOutput) => void
  ): Promise<AssociateServiceRoleToAccountCommandOutput> | void {
    const command = new AssociateServiceRoleToAccountCommand(args);
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
   * <p>Associates a list of client devices with a core device. Use this API operation to specify
   *       which client devices can discover a core device through cloud discovery. With cloud discovery,
   *       client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information
   *       and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud
   *         discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   *          <note>
   *             <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core
   *         device over MQTT. You can connect client devices to a core device to sync MQTT messages and
   *         data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information,
   *         see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with
   *           local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   *          </note>
   */
  public batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput>;
  public batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    cb: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): void;
  public batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): void;
  public batchAssociateClientDeviceWithCoreDevice(
    args: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateClientDeviceWithCoreDeviceCommandOutput) => void
  ): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> | void {
    const command = new BatchAssociateClientDeviceWithCoreDeviceCommand(args);
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
   * <p>Disassociates a list of client devices from a core device. After you disassociate a client
   *       device from a core device, the client device won't be able to use cloud discovery to retrieve
   *       the core device's connectivity information and certificates.</p>
   */
  public batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput>;
  public batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    cb: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): void;
  public batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): void;
  public batchDisassociateClientDeviceFromCoreDevice(
    args: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateClientDeviceFromCoreDeviceCommandOutput) => void
  ): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> | void {
    const command = new BatchDisassociateClientDeviceFromCoreDeviceCommand(args);
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
   * <p>Cancels a deployment. This operation cancels the deployment for devices that haven't yet
   *       received it. If a device already received the deployment, this operation doesn't change
   *       anything for that device.</p>
   */
  public cancelDeployment(
    args: CancelDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDeploymentCommandOutput>;
  public cancelDeployment(
    args: CancelDeploymentCommandInput,
    cb: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): void;
  public cancelDeployment(
    args: CancelDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): void;
  public cancelDeployment(
    args: CancelDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CancelDeploymentCommandOutput) => void
  ): Promise<CancelDeploymentCommandOutput> | void {
    const command = new CancelDeploymentCommand(args);
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
   * <p>Creates a component. Components are software that run on Greengrass core devices. After you
   *       develop and test a component on your core device, you can use this operation to upload your
   *       component to IoT Greengrass. Then, you can deploy the component to other core devices.</p>
   *          <p>You can use this operation to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Create components from recipes</b>
   *                </p>
   *                <p>Create a component from a recipe, which is a file that defines the component's
   *           metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For
   *           more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe
   *             reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
   *                <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call
   *           this operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Create components from Lambda functions</b>
   *                </p>
   *                <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe
   *           and artifacts from the Lambda function's deployment package. You can use this operation to
   *           migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p>
   *                <p>This function only accepts Lambda functions that use the following runtimes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Python 2.7 – <code>python2.7</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Python 3.7 – <code>python3.7</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Python 3.8 – <code>python3.8</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Python 3.9 – <code>python3.9</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Java 8 – <code>java8</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Java 11 – <code>java11</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Node.js 10 – <code>nodejs10.x</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Node.js 12 – <code>nodejs12.x</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>Node.js 14 – <code>nodejs14.x</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>To create a component from a Lambda function, specify <code>lambdaFunction</code>
   *           when you call this operation.</p>
   *                <note>
   *                   <p>IoT Greengrass currently supports Lambda functions on only Linux core devices.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  public createComponentVersion(
    args: CreateComponentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentVersionCommandOutput>;
  public createComponentVersion(
    args: CreateComponentVersionCommandInput,
    cb: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): void;
  public createComponentVersion(
    args: CreateComponentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): void;
  public createComponentVersion(
    args: CreateComponentVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComponentVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateComponentVersionCommandOutput) => void
  ): Promise<CreateComponentVersionCommandOutput> | void {
    const command = new CreateComponentVersionCommand(args);
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
   * <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core
   *       devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass
   *       deploys that group's deployment to the new device.</p>
   *          <p>You can define one deployment for each target. When you create a new deployment for a
   *       target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the
   *       new deployment to the target devices.</p>
   *          <p>Every deployment has a revision number that indicates how many deployment revisions you
   *       define for a target. Use this operation to create a new revision of an existing
   *       deployment.</p>
   *          <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the
   *         <i>IoT Greengrass V2 Developer Guide</i>.</p>
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
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
   * <p>Deletes a version of a component from IoT Greengrass.</p>
   *          <note>
   *             <p>This operation deletes the component's recipe and artifacts. As a result, deployments
   *         that refer to this component version will fail. If you have deployments that use this
   *         component version, you can remove the component from the deployment or update the deployment
   *         to use a valid version.</p>
   *          </note>
   */
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;
  public deleteComponent(
    args: DeleteComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComponentCommandOutput) => void),
    cb?: (err: any, data?: DeleteComponentCommandOutput) => void
  ): Promise<DeleteComponentCommandOutput> | void {
    const command = new DeleteComponentCommand(args);
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
   * <p>Deletes a Greengrass core device, which is an IoT thing. This operation removes the core
   *       device from the list of core devices. This operation doesn't delete the IoT thing. For more
   *       information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the
   *         <i>IoT API Reference</i>.</p>
   */
  public deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCoreDeviceCommandOutput>;
  public deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): void;
  public deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): void;
  public deleteCoreDevice(
    args: DeleteCoreDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCoreDeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteCoreDeviceCommandOutput) => void
  ): Promise<DeleteCoreDeviceCommandOutput> | void {
    const command = new DeleteCoreDeviceCommand(args);
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
   * <p>Deletes a deployment. To delete an active deployment, you must first cancel it. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDeployment.html">CancelDeployment</a>.</p>
   *          <p>Deleting a deployment doesn't affect core devices that run that deployment, because core
   *       devices store the deployment's configuration on the device. Additionally, core devices can
   *       roll back to a previous deployment that has been deleted.</p>
   */
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeploymentCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): Promise<DeleteDeploymentCommandOutput> | void {
    const command = new DeleteDeploymentCommand(args);
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
   * <p>Retrieves metadata for a version of a component.</p>
   */
  public describeComponent(
    args: DescribeComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComponentCommandOutput>;
  public describeComponent(
    args: DescribeComponentCommandInput,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  public describeComponent(
    args: DescribeComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComponentCommandOutput) => void
  ): void;
  public describeComponent(
    args: DescribeComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeComponentCommandOutput) => void),
    cb?: (err: any, data?: DescribeComponentCommandOutput) => void
  ): Promise<DescribeComponentCommandOutput> | void {
    const command = new DescribeComponentCommand(args);
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
   * <p>Disassociates the Greengrass service role from IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *       Without a service role, IoT Greengrass can't verify the identity of client devices or manage core device
   *       connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in
   *       the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
   */
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput>;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): void;
  public disassociateServiceRoleFromAccount(
    args: DisassociateServiceRoleFromAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateServiceRoleFromAccountCommandOutput) => void
  ): Promise<DisassociateServiceRoleFromAccountCommandOutput> | void {
    const command = new DisassociateServiceRoleFromAccountCommand(args);
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
   * <p>Gets the recipe for a version of a component.</p>
   */
  public getComponent(
    args: GetComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentCommandOutput>;
  public getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  public getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;
  public getComponent(
    args: GetComponentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentCommandOutput) => void),
    cb?: (err: any, data?: GetComponentCommandOutput) => void
  ): Promise<GetComponentCommandOutput> | void {
    const command = new GetComponentCommand(args);
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
   * <p>Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this
   *       operation to identify the URL that they can use to download an artifact to install.</p>
   */
  public getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentVersionArtifactCommandOutput>;
  public getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): void;
  public getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): void;
  public getComponentVersionArtifact(
    args: GetComponentVersionArtifactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentVersionArtifactCommandOutput) => void),
    cb?: (err: any, data?: GetComponentVersionArtifactCommandOutput) => void
  ): Promise<GetComponentVersionArtifactCommandOutput> | void {
    const command = new GetComponentVersionArtifactCommand(args);
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
   * <p>Retrieves connectivity information for a Greengrass core device.</p>
   *          <p>Connectivity information includes endpoints and ports where client devices
   *       can connect to an MQTT broker on the core device. When a client device
   *       calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>,
   *       IoT Greengrass returns connectivity information for all of the core devices where the client device can
   *       connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to
   *         core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
   */
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectivityInfoCommandOutput>;
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): void;
  public getConnectivityInfo(
    args: GetConnectivityInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConnectivityInfoCommandOutput) => void),
    cb?: (err: any, data?: GetConnectivityInfoCommandOutput) => void
  ): Promise<GetConnectivityInfoCommandOutput> | void {
    const command = new GetConnectivityInfoCommand(args);
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
   * <p>Retrieves metadata for a Greengrass core device.</p>
   *          <note>
   *             <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core
   *         software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then
   *         the reported status of that device might not reflect its current status. The status timestamp
   *         indicates when the device status was last updated.</p>
   *             <p>Core devices send status updates at the following times:</p>
   *             <ul>
   *                <li>
   *                   <p>When the IoT Greengrass Core software starts</p>
   *                </li>
   *                <li>
   *                   <p>When the core device receives a deployment from the Amazon Web Services Cloud</p>
   *                </li>
   *                <li>
   *                   <p>When the status of any component on the core device becomes <code>BROKEN</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval
   *             that you can configure</a>, which defaults to 24 hours</p>
   *                </li>
   *                <li>
   *                   <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
   *             cloud deployment</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public getCoreDevice(
    args: GetCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoreDeviceCommandOutput>;
  public getCoreDevice(
    args: GetCoreDeviceCommandInput,
    cb: (err: any, data?: GetCoreDeviceCommandOutput) => void
  ): void;
  public getCoreDevice(
    args: GetCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoreDeviceCommandOutput) => void
  ): void;
  public getCoreDevice(
    args: GetCoreDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCoreDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetCoreDeviceCommandOutput) => void
  ): Promise<GetCoreDeviceCommandOutput> | void {
    const command = new GetCoreDeviceCommand(args);
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
   * <p>Gets a deployment. Deployments define the components that run on Greengrass core devices.</p>
   */
  public getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  public getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentCommandOutput) => void
  ): Promise<GetDeploymentCommandOutput> | void {
    const command = new GetDeploymentCommand(args);
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
   * <p>Gets the service role associated with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region.
   *       IoT Greengrass uses this role to verify the identity of client devices and manage core device
   *       connectivity information. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in
   *       the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
   */
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceRoleForAccountCommandOutput>;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): void;
  public getServiceRoleForAccount(
    args: GetServiceRoleForAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceRoleForAccountCommandOutput) => void),
    cb?: (err: any, data?: GetServiceRoleForAccountCommandOutput) => void
  ): Promise<GetServiceRoleForAccountCommandOutput> | void {
    const command = new GetServiceRoleForAccountCommand(args);
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
   * <p>Retrieves a paginated list of client devices that are associated with a core
   *       device.</p>
   */
  public listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput>;
  public listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    cb: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): void;
  public listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): void;
  public listClientDevicesAssociatedWithCoreDevice(
    args: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void),
    cb?: (err: any, data?: ListClientDevicesAssociatedWithCoreDeviceCommandOutput) => void
  ): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> | void {
    const command = new ListClientDevicesAssociatedWithCoreDeviceCommand(args);
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
   * <p>Retrieves a paginated list of component summaries. This list includes components that you
   *       have permission to view.</p>
   */
  public listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  public listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  public listComponents(
    args: ListComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentsCommandOutput) => void
  ): Promise<ListComponentsCommandOutput> | void {
    const command = new ListComponentsCommand(args);
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
   * <p>Retrieves a paginated list of all versions for a component. Greater versions are listed first.</p>
   */
  public listComponentVersions(
    args: ListComponentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentVersionsCommandOutput>;
  public listComponentVersions(
    args: ListComponentVersionsCommandInput,
    cb: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): void;
  public listComponentVersions(
    args: ListComponentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): void;
  public listComponentVersions(
    args: ListComponentVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListComponentVersionsCommandOutput) => void
  ): Promise<ListComponentVersionsCommandOutput> | void {
    const command = new ListComponentVersionsCommand(args);
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
   * <p>Retrieves a paginated list of Greengrass core devices.</p>
   *          <note>
   *             <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core
   *         software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then
   *         the reported status of that device might not reflect its current status. The status timestamp
   *         indicates when the device status was last updated.</p>
   *             <p>Core devices send status updates at the following times:</p>
   *             <ul>
   *                <li>
   *                   <p>When the IoT Greengrass Core software starts</p>
   *                </li>
   *                <li>
   *                   <p>When the core device receives a deployment from the Amazon Web Services Cloud</p>
   *                </li>
   *                <li>
   *                   <p>When the status of any component on the core device becomes <code>BROKEN</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval
   *             that you can configure</a>, which defaults to 24 hours</p>
   *                </li>
   *                <li>
   *                   <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
   *             cloud deployment</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public listCoreDevices(
    args: ListCoreDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoreDevicesCommandOutput>;
  public listCoreDevices(
    args: ListCoreDevicesCommandInput,
    cb: (err: any, data?: ListCoreDevicesCommandOutput) => void
  ): void;
  public listCoreDevices(
    args: ListCoreDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoreDevicesCommandOutput) => void
  ): void;
  public listCoreDevices(
    args: ListCoreDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCoreDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListCoreDevicesCommandOutput) => void
  ): Promise<ListCoreDevicesCommandOutput> | void {
    const command = new ListCoreDevicesCommand(args);
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
   * <p>Retrieves a paginated list of deployments.</p>
   */
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  public listDeployments(
    args: ListDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): Promise<ListDeploymentsCommandOutput> | void {
    const command = new ListDeploymentsCommand(args);
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
   * <p>Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core
   *       devices.</p>
   */
  public listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEffectiveDeploymentsCommandOutput>;
  public listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): void;
  public listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): void;
  public listEffectiveDeployments(
    args: ListEffectiveDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEffectiveDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: ListEffectiveDeploymentsCommandOutput) => void
  ): Promise<ListEffectiveDeploymentsCommandOutput> | void {
    const command = new ListEffectiveDeploymentsCommand(args);
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
   * <p>Retrieves a paginated list of the components that a Greengrass core device runs. By default,
   *       this list doesn't include components that are deployed as dependencies of other components. To
   *       include dependencies in the response, set the <code>topologyFilter</code> parameter to
   *         <code>ALL</code>.</p>
   *          <note>
   *             <p>IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core
   *         software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then
   *         the reported status of that device might not reflect its current status. The status timestamp
   *         indicates when the device status was last updated.</p>
   *             <p>Core devices send status updates at the following times:</p>
   *             <ul>
   *                <li>
   *                   <p>When the IoT Greengrass Core software starts</p>
   *                </li>
   *                <li>
   *                   <p>When the core device receives a deployment from the Amazon Web Services Cloud</p>
   *                </li>
   *                <li>
   *                   <p>When the status of any component on the core device becomes <code>BROKEN</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>At a <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss">regular interval that you can configure</a>, which defaults to 24 hours</p>
   *                </li>
   *                <li>
   *                   <p>For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and
   *             cloud deployment</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  public listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstalledComponentsCommandOutput>;
  public listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void
  ): void;
  public listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstalledComponentsCommandOutput) => void
  ): void;
  public listInstalledComponents(
    args: ListInstalledComponentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstalledComponentsCommandOutput) => void),
    cb?: (err: any, data?: ListInstalledComponentsCommandOutput) => void
  ): Promise<ListInstalledComponentsCommandOutput> | void {
    const command = new ListInstalledComponentsCommand(args);
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
   * <p>Retrieves the list of tags for an IoT Greengrass resource.</p>
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
   * <p>Retrieves a list of components that meet the component, version, and platform requirements
   *       of a deployment. Greengrass core devices call this operation when they receive a deployment to
   *       identify the components to install.</p>
   *          <p>This operation identifies components that meet all dependency requirements for a
   *       deployment. If the requirements conflict, then this operation returns an error and the
   *       deployment fails. For example, this occurs if component <code>A</code> requires version
   *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
   *       of a component dependency.</p>
   *          <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's
   *       digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't
   *       match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p>
   *          <important>
   *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
   *         IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p>
   *          </important>
   */
  public resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveComponentCandidatesCommandOutput>;
  public resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
  ): void;
  public resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
  ): void;
  public resolveComponentCandidates(
    args: ResolveComponentCandidatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResolveComponentCandidatesCommandOutput) => void),
    cb?: (err: any, data?: ResolveComponentCandidatesCommandOutput) => void
  ): Promise<ResolveComponentCandidatesCommandOutput> | void {
    const command = new ResolveComponentCandidatesCommand(args);
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
   * <p>Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation
   *       updates the tag's value.</p>
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
   * <p>Removes a tag from an IoT Greengrass resource.</p>
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
   * <p>Updates connectivity information for a Greengrass core device.</p>
   *          <p>Connectivity information includes endpoints and ports where client devices
   *       can connect to an MQTT broker on the core device. When a client device
   *       calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>,
   *       IoT Greengrass returns connectivity information for all of the core devices where the client device can
   *       connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to
   *         core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
   */
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectivityInfoCommandOutput>;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): void;
  public updateConnectivityInfo(
    args: UpdateConnectivityInfoCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateConnectivityInfoCommandOutput) => void),
    cb?: (err: any, data?: UpdateConnectivityInfoCommandOutput) => void
  ): Promise<UpdateConnectivityInfoCommandOutput> | void {
    const command = new UpdateConnectivityInfoCommand(args);
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
