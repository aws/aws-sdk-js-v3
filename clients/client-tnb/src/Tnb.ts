// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CancelSolNetworkOperationCommand,
  CancelSolNetworkOperationCommandInput,
  CancelSolNetworkOperationCommandOutput,
} from "./commands/CancelSolNetworkOperationCommand";
import {
  CreateSolFunctionPackageCommand,
  CreateSolFunctionPackageCommandInput,
  CreateSolFunctionPackageCommandOutput,
} from "./commands/CreateSolFunctionPackageCommand";
import {
  CreateSolNetworkInstanceCommand,
  CreateSolNetworkInstanceCommandInput,
  CreateSolNetworkInstanceCommandOutput,
} from "./commands/CreateSolNetworkInstanceCommand";
import {
  CreateSolNetworkPackageCommand,
  CreateSolNetworkPackageCommandInput,
  CreateSolNetworkPackageCommandOutput,
} from "./commands/CreateSolNetworkPackageCommand";
import {
  DeleteSolFunctionPackageCommand,
  DeleteSolFunctionPackageCommandInput,
  DeleteSolFunctionPackageCommandOutput,
} from "./commands/DeleteSolFunctionPackageCommand";
import {
  DeleteSolNetworkInstanceCommand,
  DeleteSolNetworkInstanceCommandInput,
  DeleteSolNetworkInstanceCommandOutput,
} from "./commands/DeleteSolNetworkInstanceCommand";
import {
  DeleteSolNetworkPackageCommand,
  DeleteSolNetworkPackageCommandInput,
  DeleteSolNetworkPackageCommandOutput,
} from "./commands/DeleteSolNetworkPackageCommand";
import {
  GetSolFunctionInstanceCommand,
  GetSolFunctionInstanceCommandInput,
  GetSolFunctionInstanceCommandOutput,
} from "./commands/GetSolFunctionInstanceCommand";
import {
  GetSolFunctionPackageCommand,
  GetSolFunctionPackageCommandInput,
  GetSolFunctionPackageCommandOutput,
} from "./commands/GetSolFunctionPackageCommand";
import {
  GetSolFunctionPackageContentCommand,
  GetSolFunctionPackageContentCommandInput,
  GetSolFunctionPackageContentCommandOutput,
} from "./commands/GetSolFunctionPackageContentCommand";
import {
  GetSolFunctionPackageDescriptorCommand,
  GetSolFunctionPackageDescriptorCommandInput,
  GetSolFunctionPackageDescriptorCommandOutput,
} from "./commands/GetSolFunctionPackageDescriptorCommand";
import {
  GetSolNetworkInstanceCommand,
  GetSolNetworkInstanceCommandInput,
  GetSolNetworkInstanceCommandOutput,
} from "./commands/GetSolNetworkInstanceCommand";
import {
  GetSolNetworkOperationCommand,
  GetSolNetworkOperationCommandInput,
  GetSolNetworkOperationCommandOutput,
} from "./commands/GetSolNetworkOperationCommand";
import {
  GetSolNetworkPackageCommand,
  GetSolNetworkPackageCommandInput,
  GetSolNetworkPackageCommandOutput,
} from "./commands/GetSolNetworkPackageCommand";
import {
  GetSolNetworkPackageContentCommand,
  GetSolNetworkPackageContentCommandInput,
  GetSolNetworkPackageContentCommandOutput,
} from "./commands/GetSolNetworkPackageContentCommand";
import {
  GetSolNetworkPackageDescriptorCommand,
  GetSolNetworkPackageDescriptorCommandInput,
  GetSolNetworkPackageDescriptorCommandOutput,
} from "./commands/GetSolNetworkPackageDescriptorCommand";
import {
  InstantiateSolNetworkInstanceCommand,
  InstantiateSolNetworkInstanceCommandInput,
  InstantiateSolNetworkInstanceCommandOutput,
} from "./commands/InstantiateSolNetworkInstanceCommand";
import {
  ListSolFunctionInstancesCommand,
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
} from "./commands/ListSolFunctionInstancesCommand";
import {
  ListSolFunctionPackagesCommand,
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput,
} from "./commands/ListSolFunctionPackagesCommand";
import {
  ListSolNetworkInstancesCommand,
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
} from "./commands/ListSolNetworkInstancesCommand";
import {
  ListSolNetworkOperationsCommand,
  ListSolNetworkOperationsCommandInput,
  ListSolNetworkOperationsCommandOutput,
} from "./commands/ListSolNetworkOperationsCommand";
import {
  ListSolNetworkPackagesCommand,
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
} from "./commands/ListSolNetworkPackagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutSolFunctionPackageContentCommand,
  PutSolFunctionPackageContentCommandInput,
  PutSolFunctionPackageContentCommandOutput,
} from "./commands/PutSolFunctionPackageContentCommand";
import {
  PutSolNetworkPackageContentCommand,
  PutSolNetworkPackageContentCommandInput,
  PutSolNetworkPackageContentCommandOutput,
} from "./commands/PutSolNetworkPackageContentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateSolNetworkInstanceCommand,
  TerminateSolNetworkInstanceCommandInput,
  TerminateSolNetworkInstanceCommandOutput,
} from "./commands/TerminateSolNetworkInstanceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateSolFunctionPackageCommand,
  UpdateSolFunctionPackageCommandInput,
  UpdateSolFunctionPackageCommandOutput,
} from "./commands/UpdateSolFunctionPackageCommand";
import {
  UpdateSolNetworkInstanceCommand,
  UpdateSolNetworkInstanceCommandInput,
  UpdateSolNetworkInstanceCommandOutput,
} from "./commands/UpdateSolNetworkInstanceCommand";
import {
  UpdateSolNetworkPackageCommand,
  UpdateSolNetworkPackageCommandInput,
  UpdateSolNetworkPackageCommandOutput,
} from "./commands/UpdateSolNetworkPackageCommand";
import {
  ValidateSolFunctionPackageContentCommand,
  ValidateSolFunctionPackageContentCommandInput,
  ValidateSolFunctionPackageContentCommandOutput,
} from "./commands/ValidateSolFunctionPackageContentCommand";
import {
  ValidateSolNetworkPackageContentCommand,
  ValidateSolNetworkPackageContentCommandInput,
  ValidateSolNetworkPackageContentCommandOutput,
} from "./commands/ValidateSolNetworkPackageContentCommand";
import { TnbClient } from "./TnbClient";

/**
 * <p> Amazon Web Services Telco Network Builder (TNB) is a network automation service that helps you deploy and manage telecom networks. AWS TNB helps you with the lifecycle management of your telecommunication network functions throughout planning, deployment, and post-deployment activities.</p>
 */
export class Tnb extends TnbClient {
  /**
   * <p>Cancels a network operation.</p>
   *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
   */
  public cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSolNetworkOperationCommandOutput>;
  public cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    cb: (err: any, data?: CancelSolNetworkOperationCommandOutput) => void
  ): void;
  public cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSolNetworkOperationCommandOutput) => void
  ): void;
  public cancelSolNetworkOperation(
    args: CancelSolNetworkOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelSolNetworkOperationCommandOutput) => void),
    cb?: (err: any, data?: CancelSolNetworkOperationCommandOutput) => void
  ): Promise<CancelSolNetworkOperationCommandOutput> | void {
    const command = new CancelSolNetworkOperationCommand(args);
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
   * <p>Creates a function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/function-packages.html">Function packages</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.
   *       </p>
   *          <p>Creating a function package is the first step for creating a network in AWS TNB. This request creates an empty container with an ID. The next step is to upload the actual CSAR zip file into that empty container. To upload function package content, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_PutSolFunctionPackageContent.html">PutSolFunctionPackageContent</a>.</p>
   */
  public createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolFunctionPackageCommandOutput>;
  public createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    cb: (err: any, data?: CreateSolFunctionPackageCommandOutput) => void
  ): void;
  public createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolFunctionPackageCommandOutput) => void
  ): void;
  public createSolFunctionPackage(
    args: CreateSolFunctionPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSolFunctionPackageCommandOutput) => void),
    cb?: (err: any, data?: CreateSolFunctionPackageCommandOutput) => void
  ): Promise<CreateSolFunctionPackageCommandOutput> | void {
    const command = new CreateSolFunctionPackageCommand(args);
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
   * <p>Creates a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed. Creating a network instance is the third step after creating a network package. For more information about network instances, <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.</p>
   *          <p>Once you create a network instance, you can instantiate it. To instantiate a network, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_InstantiateSolNetworkInstance.html">InstantiateSolNetworkInstance</a>.</p>
   */
  public createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolNetworkInstanceCommandOutput>;
  public createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: CreateSolNetworkInstanceCommandOutput) => void
  ): void;
  public createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolNetworkInstanceCommandOutput) => void
  ): void;
  public createSolNetworkInstance(
    args: CreateSolNetworkInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSolNetworkInstanceCommandOutput) => void),
    cb?: (err: any, data?: CreateSolNetworkInstanceCommandOutput) => void
  ): Promise<CreateSolNetworkInstanceCommandOutput> | void {
    const command = new CreateSolNetworkInstanceCommand(args);
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
   * <p>Creates a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.
   *       </p>
   *          <p>A network package consists of a network service descriptor (NSD) file (required) and any additional files (optional), such as scripts specific to your needs. For example, if you have multiple function packages in your network package, you can use the NSD to define which network functions should run in certain VPCs, subnets, or EKS clusters.</p>
   *          <p>This request creates an empty network package container with an ID. Once you create a network package, you can upload the network package content using <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
   */
  public createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSolNetworkPackageCommandOutput>;
  public createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    cb: (err: any, data?: CreateSolNetworkPackageCommandOutput) => void
  ): void;
  public createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSolNetworkPackageCommandOutput) => void
  ): void;
  public createSolNetworkPackage(
    args: CreateSolNetworkPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSolNetworkPackageCommandOutput) => void),
    cb?: (err: any, data?: CreateSolNetworkPackageCommandOutput) => void
  ): Promise<CreateSolNetworkPackageCommandOutput> | void {
    const command = new CreateSolNetworkPackageCommand(args);
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
   * <p>Deletes a function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   *          <p>To delete a function package, the package must be in a disabled state. To disable a function package, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_UpdateSolFunctionPackage.html">UpdateSolFunctionPackage</a>.
   *       </p>
   */
  public deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolFunctionPackageCommandOutput>;
  public deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    cb: (err: any, data?: DeleteSolFunctionPackageCommandOutput) => void
  ): void;
  public deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolFunctionPackageCommandOutput) => void
  ): void;
  public deleteSolFunctionPackage(
    args: DeleteSolFunctionPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSolFunctionPackageCommandOutput) => void),
    cb?: (err: any, data?: DeleteSolFunctionPackageCommandOutput) => void
  ): Promise<DeleteSolFunctionPackageCommandOutput> | void {
    const command = new DeleteSolFunctionPackageCommand(args);
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
   * <p>Deletes a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   *          <p>To delete a network instance, the instance must be in a stopped or terminated state. To terminate a network instance, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_TerminateSolNetworkInstance.html">TerminateSolNetworkInstance</a>.</p>
   */
  public deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolNetworkInstanceCommandOutput>;
  public deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    cb: (err: any, data?: DeleteSolNetworkInstanceCommandOutput) => void
  ): void;
  public deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolNetworkInstanceCommandOutput) => void
  ): void;
  public deleteSolNetworkInstance(
    args: DeleteSolNetworkInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSolNetworkInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteSolNetworkInstanceCommandOutput) => void
  ): Promise<DeleteSolNetworkInstanceCommandOutput> | void {
    const command = new DeleteSolNetworkInstanceCommand(args);
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
   * <p>Deletes network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   *          <p>To delete a network package, the package must be in a disable state. To disable a network package, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_UpdateSolNetworkPackage.html">UpdateSolNetworkPackage</a>.</p>
   */
  public deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSolNetworkPackageCommandOutput>;
  public deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    cb: (err: any, data?: DeleteSolNetworkPackageCommandOutput) => void
  ): void;
  public deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSolNetworkPackageCommandOutput) => void
  ): void;
  public deleteSolNetworkPackage(
    args: DeleteSolNetworkPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSolNetworkPackageCommandOutput) => void),
    cb?: (err: any, data?: DeleteSolNetworkPackageCommandOutput) => void
  ): Promise<DeleteSolNetworkPackageCommandOutput> | void {
    const command = new DeleteSolNetworkPackageCommand(args);
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
   * <p>Gets the details of a network function instance, including the instantation state and metadata from the function package descriptor in the network function package.</p>
   *          <p>A network function instance is a function in a function package .</p>
   */
  public getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionInstanceCommandOutput>;
  public getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    cb: (err: any, data?: GetSolFunctionInstanceCommandOutput) => void
  ): void;
  public getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionInstanceCommandOutput) => void
  ): void;
  public getSolFunctionInstance(
    args: GetSolFunctionInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolFunctionInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetSolFunctionInstanceCommandOutput) => void
  ): Promise<GetSolFunctionInstanceCommandOutput> | void {
    const command = new GetSolFunctionInstanceCommand(args);
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
   * <p>Gets the details of an individual function package, such as the operational state and whether the package is in use.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network..</p>
   */
  public getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionPackageCommandOutput>;
  public getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    cb: (err: any, data?: GetSolFunctionPackageCommandOutput) => void
  ): void;
  public getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionPackageCommandOutput) => void
  ): void;
  public getSolFunctionPackage(
    args: GetSolFunctionPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolFunctionPackageCommandOutput) => void),
    cb?: (err: any, data?: GetSolFunctionPackageCommandOutput) => void
  ): Promise<GetSolFunctionPackageCommandOutput> | void {
    const command = new GetSolFunctionPackageCommand(args);
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
   * <p>Gets the contents of a function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  public getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionPackageContentCommandOutput>;
  public getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    cb: (err: any, data?: GetSolFunctionPackageContentCommandOutput) => void
  ): void;
  public getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionPackageContentCommandOutput) => void
  ): void;
  public getSolFunctionPackageContent(
    args: GetSolFunctionPackageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolFunctionPackageContentCommandOutput) => void),
    cb?: (err: any, data?: GetSolFunctionPackageContentCommandOutput) => void
  ): Promise<GetSolFunctionPackageContentCommandOutput> | void {
    const command = new GetSolFunctionPackageContentCommand(args);
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
   * <p>Gets a function package descriptor in a function package.</p>
   *          <p>A function package descriptor is a .yaml file in a function package that uses the TOSCA standard to describe how the network function in the function package should run on your network.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  public getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolFunctionPackageDescriptorCommandOutput>;
  public getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    cb: (err: any, data?: GetSolFunctionPackageDescriptorCommandOutput) => void
  ): void;
  public getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolFunctionPackageDescriptorCommandOutput) => void
  ): void;
  public getSolFunctionPackageDescriptor(
    args: GetSolFunctionPackageDescriptorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolFunctionPackageDescriptorCommandOutput) => void),
    cb?: (err: any, data?: GetSolFunctionPackageDescriptorCommandOutput) => void
  ): Promise<GetSolFunctionPackageDescriptorCommandOutput> | void {
    const command = new GetSolFunctionPackageDescriptorCommand(args);
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
   * <p>Gets the details of the network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   */
  public getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkInstanceCommandOutput>;
  public getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    cb: (err: any, data?: GetSolNetworkInstanceCommandOutput) => void
  ): void;
  public getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkInstanceCommandOutput) => void
  ): void;
  public getSolNetworkInstance(
    args: GetSolNetworkInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolNetworkInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetSolNetworkInstanceCommandOutput) => void
  ): Promise<GetSolNetworkInstanceCommandOutput> | void {
    const command = new GetSolNetworkInstanceCommand(args);
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
   * <p>Gets the details of a network operation, including the tasks involved in the network operation and the status of the tasks.</p>
   *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
   */
  public getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkOperationCommandOutput>;
  public getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    cb: (err: any, data?: GetSolNetworkOperationCommandOutput) => void
  ): void;
  public getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkOperationCommandOutput) => void
  ): void;
  public getSolNetworkOperation(
    args: GetSolNetworkOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolNetworkOperationCommandOutput) => void),
    cb?: (err: any, data?: GetSolNetworkOperationCommandOutput) => void
  ): Promise<GetSolNetworkOperationCommandOutput> | void {
    const command = new GetSolNetworkOperationCommand(args);
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
   * <p>Gets the details of a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  public getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkPackageCommandOutput>;
  public getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    cb: (err: any, data?: GetSolNetworkPackageCommandOutput) => void
  ): void;
  public getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkPackageCommandOutput) => void
  ): void;
  public getSolNetworkPackage(
    args: GetSolNetworkPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolNetworkPackageCommandOutput) => void),
    cb?: (err: any, data?: GetSolNetworkPackageCommandOutput) => void
  ): Promise<GetSolNetworkPackageCommandOutput> | void {
    const command = new GetSolNetworkPackageCommand(args);
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
   * <p>Gets the contents of a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  public getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkPackageContentCommandOutput>;
  public getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    cb: (err: any, data?: GetSolNetworkPackageContentCommandOutput) => void
  ): void;
  public getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkPackageContentCommandOutput) => void
  ): void;
  public getSolNetworkPackageContent(
    args: GetSolNetworkPackageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolNetworkPackageContentCommandOutput) => void),
    cb?: (err: any, data?: GetSolNetworkPackageContentCommandOutput) => void
  ): Promise<GetSolNetworkPackageContentCommandOutput> | void {
    const command = new GetSolNetworkPackageContentCommand(args);
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
   * <p>Gets the content of the network service descriptor.</p>
   *          <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
   */
  public getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSolNetworkPackageDescriptorCommandOutput>;
  public getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    cb: (err: any, data?: GetSolNetworkPackageDescriptorCommandOutput) => void
  ): void;
  public getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSolNetworkPackageDescriptorCommandOutput) => void
  ): void;
  public getSolNetworkPackageDescriptor(
    args: GetSolNetworkPackageDescriptorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSolNetworkPackageDescriptorCommandOutput) => void),
    cb?: (err: any, data?: GetSolNetworkPackageDescriptorCommandOutput) => void
  ): Promise<GetSolNetworkPackageDescriptorCommandOutput> | void {
    const command = new GetSolNetworkPackageDescriptorCommand(args);
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
   * <p>Instantiates a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   *          <p>Before you can instantiate a network instance, you have to create a network instance. For more information, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_CreateSolNetworkInstance.html">CreateSolNetworkInstance</a>.</p>
   */
  public instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InstantiateSolNetworkInstanceCommandOutput>;
  public instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: InstantiateSolNetworkInstanceCommandOutput) => void
  ): void;
  public instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InstantiateSolNetworkInstanceCommandOutput) => void
  ): void;
  public instantiateSolNetworkInstance(
    args: InstantiateSolNetworkInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InstantiateSolNetworkInstanceCommandOutput) => void),
    cb?: (err: any, data?: InstantiateSolNetworkInstanceCommandOutput) => void
  ): Promise<InstantiateSolNetworkInstanceCommandOutput> | void {
    const command = new InstantiateSolNetworkInstanceCommand(args);
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
   * <p>Lists network function instances.</p>
   *          <p>A network function instance is a function in a function package .</p>
   */
  public listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolFunctionInstancesCommandOutput>;
  public listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    cb: (err: any, data?: ListSolFunctionInstancesCommandOutput) => void
  ): void;
  public listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolFunctionInstancesCommandOutput) => void
  ): void;
  public listSolFunctionInstances(
    args: ListSolFunctionInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolFunctionInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListSolFunctionInstancesCommandOutput) => void
  ): Promise<ListSolFunctionInstancesCommandOutput> | void {
    const command = new ListSolFunctionInstancesCommand(args);
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
   * <p>Lists information about function packages.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  public listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolFunctionPackagesCommandOutput>;
  public listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    cb: (err: any, data?: ListSolFunctionPackagesCommandOutput) => void
  ): void;
  public listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolFunctionPackagesCommandOutput) => void
  ): void;
  public listSolFunctionPackages(
    args: ListSolFunctionPackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolFunctionPackagesCommandOutput) => void),
    cb?: (err: any, data?: ListSolFunctionPackagesCommandOutput) => void
  ): Promise<ListSolFunctionPackagesCommandOutput> | void {
    const command = new ListSolFunctionPackagesCommand(args);
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
   * <p>Lists your network instances.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   */
  public listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolNetworkInstancesCommandOutput>;
  public listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    cb: (err: any, data?: ListSolNetworkInstancesCommandOutput) => void
  ): void;
  public listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolNetworkInstancesCommandOutput) => void
  ): void;
  public listSolNetworkInstances(
    args: ListSolNetworkInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolNetworkInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListSolNetworkInstancesCommandOutput) => void
  ): Promise<ListSolNetworkInstancesCommandOutput> | void {
    const command = new ListSolNetworkInstancesCommand(args);
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
   * <p>Lists details for a network operation, including when the operation started and the status of the operation.</p>
   *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
   */
  public listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolNetworkOperationsCommandOutput>;
  public listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    cb: (err: any, data?: ListSolNetworkOperationsCommandOutput) => void
  ): void;
  public listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolNetworkOperationsCommandOutput) => void
  ): void;
  public listSolNetworkOperations(
    args: ListSolNetworkOperationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolNetworkOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListSolNetworkOperationsCommandOutput) => void
  ): Promise<ListSolNetworkOperationsCommandOutput> | void {
    const command = new ListSolNetworkOperationsCommand(args);
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
   * <p>Lists network packages.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  public listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSolNetworkPackagesCommandOutput>;
  public listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    cb: (err: any, data?: ListSolNetworkPackagesCommandOutput) => void
  ): void;
  public listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolNetworkPackagesCommandOutput) => void
  ): void;
  public listSolNetworkPackages(
    args: ListSolNetworkPackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSolNetworkPackagesCommandOutput) => void),
    cb?: (err: any, data?: ListSolNetworkPackagesCommandOutput) => void
  ): Promise<ListSolNetworkPackagesCommandOutput> | void {
    const command = new ListSolNetworkPackagesCommand(args);
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
   * <p>Lists tags for AWS TNB resources.</p>
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
   * <p>Uploads the contents of a function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  public putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSolFunctionPackageContentCommandOutput>;
  public putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    cb: (err: any, data?: PutSolFunctionPackageContentCommandOutput) => void
  ): void;
  public putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSolFunctionPackageContentCommandOutput) => void
  ): void;
  public putSolFunctionPackageContent(
    args: PutSolFunctionPackageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSolFunctionPackageContentCommandOutput) => void),
    cb?: (err: any, data?: PutSolFunctionPackageContentCommandOutput) => void
  ): Promise<PutSolFunctionPackageContentCommandOutput> | void {
    const command = new PutSolFunctionPackageContentCommand(args);
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
   * <p>Uploads the contents of a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  public putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSolNetworkPackageContentCommandOutput>;
  public putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    cb: (err: any, data?: PutSolNetworkPackageContentCommandOutput) => void
  ): void;
  public putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSolNetworkPackageContentCommandOutput) => void
  ): void;
  public putSolNetworkPackageContent(
    args: PutSolNetworkPackageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSolNetworkPackageContentCommandOutput) => void),
    cb?: (err: any, data?: PutSolNetworkPackageContentCommandOutput) => void
  ): Promise<PutSolNetworkPackageContentCommandOutput> | void {
    const command = new PutSolNetworkPackageContentCommand(args);
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
   * <p>Tags an AWS TNB resource.</p>
   *          <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
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
   * <p>Terminates a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   *          <p>You must terminate a network instance before you can delete it.</p>
   */
  public terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateSolNetworkInstanceCommandOutput>;
  public terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: TerminateSolNetworkInstanceCommandOutput) => void
  ): void;
  public terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateSolNetworkInstanceCommandOutput) => void
  ): void;
  public terminateSolNetworkInstance(
    args: TerminateSolNetworkInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateSolNetworkInstanceCommandOutput) => void),
    cb?: (err: any, data?: TerminateSolNetworkInstanceCommandOutput) => void
  ): Promise<TerminateSolNetworkInstanceCommandOutput> | void {
    const command = new TerminateSolNetworkInstanceCommand(args);
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
   * <p>Untags an AWS TNB resource.</p>
   *          <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your Amazon Web Services costs.</p>
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
   * <p>Updates the operational state of function package.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  public updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolFunctionPackageCommandOutput>;
  public updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    cb: (err: any, data?: UpdateSolFunctionPackageCommandOutput) => void
  ): void;
  public updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolFunctionPackageCommandOutput) => void
  ): void;
  public updateSolFunctionPackage(
    args: UpdateSolFunctionPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSolFunctionPackageCommandOutput) => void),
    cb?: (err: any, data?: UpdateSolFunctionPackageCommandOutput) => void
  ): Promise<UpdateSolFunctionPackageCommandOutput> | void {
    const command = new UpdateSolFunctionPackageCommand(args);
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
   * <p>Update a network instance.</p>
   *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
   */
  public updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolNetworkInstanceCommandOutput>;
  public updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    cb: (err: any, data?: UpdateSolNetworkInstanceCommandOutput) => void
  ): void;
  public updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolNetworkInstanceCommandOutput) => void
  ): void;
  public updateSolNetworkInstance(
    args: UpdateSolNetworkInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSolNetworkInstanceCommandOutput) => void),
    cb?: (err: any, data?: UpdateSolNetworkInstanceCommandOutput) => void
  ): Promise<UpdateSolNetworkInstanceCommandOutput> | void {
    const command = new UpdateSolNetworkInstanceCommand(args);
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
   * <p>Updates the operational state of a network package.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   *          <p>A network service descriptor is a .yaml file in a network package that uses the TOSCA standard to describe the network functions you want to deploy and the Amazon Web Services infrastructure you want to deploy the network functions on.</p>
   */
  public updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSolNetworkPackageCommandOutput>;
  public updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    cb: (err: any, data?: UpdateSolNetworkPackageCommandOutput) => void
  ): void;
  public updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSolNetworkPackageCommandOutput) => void
  ): void;
  public updateSolNetworkPackage(
    args: UpdateSolNetworkPackageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSolNetworkPackageCommandOutput) => void),
    cb?: (err: any, data?: UpdateSolNetworkPackageCommandOutput) => void
  ): Promise<UpdateSolNetworkPackageCommandOutput> | void {
    const command = new UpdateSolNetworkPackageCommand(args);
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
   * <p>Validates function package content. This can be used as a dry run before uploading function package content with <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_PutSolFunctionPackageContent.html">PutSolFunctionPackageContent</a>.</p>
   *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
   */
  public validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateSolFunctionPackageContentCommandOutput>;
  public validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    cb: (err: any, data?: ValidateSolFunctionPackageContentCommandOutput) => void
  ): void;
  public validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateSolFunctionPackageContentCommandOutput) => void
  ): void;
  public validateSolFunctionPackageContent(
    args: ValidateSolFunctionPackageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateSolFunctionPackageContentCommandOutput) => void),
    cb?: (err: any, data?: ValidateSolFunctionPackageContentCommandOutput) => void
  ): Promise<ValidateSolFunctionPackageContentCommandOutput> | void {
    const command = new ValidateSolFunctionPackageContentCommand(args);
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
   * <p>Validates network package content. This can be used as a dry run before uploading network package content with <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
   *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
   */
  public validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateSolNetworkPackageContentCommandOutput>;
  public validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    cb: (err: any, data?: ValidateSolNetworkPackageContentCommandOutput) => void
  ): void;
  public validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateSolNetworkPackageContentCommandOutput) => void
  ): void;
  public validateSolNetworkPackageContent(
    args: ValidateSolNetworkPackageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateSolNetworkPackageContentCommandOutput) => void),
    cb?: (err: any, data?: ValidateSolNetworkPackageContentCommandOutput) => void
  ): Promise<ValidateSolNetworkPackageContentCommandOutput> | void {
    const command = new ValidateSolNetworkPackageContentCommand(args);
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
