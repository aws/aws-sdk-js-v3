// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudControlClient } from "./CloudControlClient";
import {
  CancelResourceRequestCommand,
  CancelResourceRequestCommandInput,
  CancelResourceRequestCommandOutput,
} from "./commands/CancelResourceRequestCommand";
import {
  CreateResourceCommand,
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import {
  DeleteResourceCommand,
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import { GetResourceCommand, GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import {
  GetResourceRequestStatusCommand,
  GetResourceRequestStatusCommandInput,
  GetResourceRequestStatusCommandOutput,
} from "./commands/GetResourceRequestStatusCommand";
import {
  ListResourceRequestsCommand,
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
} from "./commands/ListResourceRequestsCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";

/**
 * <p>For more information about Amazon Web Services Cloud Control API, see the <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html">Amazon Web Services Cloud Control API User
 *         Guide</a>.</p>
 */
export class CloudControl extends CloudControlClient {
  /**
   * <p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the
   *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   *          <p>Only resource operations requests with a status of <code>PENDING</code> or
   *         <code>IN_PROGRESS</code> can be canceled.</p>
   */
  public cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelResourceRequestCommandOutput>;
  public cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    cb: (err: any, data?: CancelResourceRequestCommandOutput) => void
  ): void;
  public cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelResourceRequestCommandOutput) => void
  ): void;
  public cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelResourceRequestCommandOutput) => void),
    cb?: (err: any, data?: CancelResourceRequestCommandOutput) => void
  ): Promise<CancelResourceRequestCommandOutput> | void {
    const command = new CancelResourceRequestCommand(args);
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
   * <p>Creates the specified resource. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-create.html">Creating a
   *         resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   *          <p>After you have initiated a resource creation request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> type returned by <code>CreateResource</code>.</p>
   */
  public createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  public createResource(
    args: CreateResourceCommandInput,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  public createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  public createResource(
    args: CreateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceCommandOutput) => void
  ): Promise<CreateResourceCommandOutput> | void {
    const command = new CreateResourceCommand(args);
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
   * <p>Deletes the specified resource. For details, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-delete.html">Deleting a
   *         resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   *          <p>After you have initiated a resource deletion request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> returned by <code>DeleteResource</code>.</p>
   */
  public deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  public deleteResource(
    args: DeleteResourceCommandInput,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceCommandOutput) => void
  ): Promise<DeleteResourceCommandOutput> | void {
    const command = new DeleteResourceCommand(args);
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
   * <p>Returns information about the current state of the specified resource. For details, see
   *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-read.html">Reading a resource's current state</a>.</p>
   *          <p>You can use this action to return information about an existing resource in your account
   *       and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
   */
  public getResource(args: GetResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceCommandOutput>;
  public getResource(args: GetResourceCommandInput, cb: (err: any, data?: GetResourceCommandOutput) => void): void;
  public getResource(
    args: GetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;
  public getResource(
    args: GetResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceCommandOutput) => void),
    cb?: (err: any, data?: GetResourceCommandOutput) => void
  ): Promise<GetResourceCommandOutput> | void {
    const command = new GetResourceCommand(args);
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
   * <p>Returns the current status of a resource operation request. For more information, see
   *         <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-track">Tracking the progress of resource operation requests</a> in the
   *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   */
  public getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceRequestStatusCommandOutput>;
  public getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    cb: (err: any, data?: GetResourceRequestStatusCommandOutput) => void
  ): void;
  public getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceRequestStatusCommandOutput) => void
  ): void;
  public getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceRequestStatusCommandOutput) => void),
    cb?: (err: any, data?: GetResourceRequestStatusCommandOutput) => void
  ): Promise<GetResourceRequestStatusCommandOutput> | void {
    const command = new GetResourceRequestStatusCommand(args);
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
   * <p>Returns existing resource operation requests. This includes requests of all status types.
   *       For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-list">Listing active resource operation requests</a> in the
   *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   *          <note>
   *             <p>Resource operation requests expire after 7 days.</p>
   *          </note>
   */
  public listResourceRequests(
    args: ListResourceRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceRequestsCommandOutput>;
  public listResourceRequests(
    args: ListResourceRequestsCommandInput,
    cb: (err: any, data?: ListResourceRequestsCommandOutput) => void
  ): void;
  public listResourceRequests(
    args: ListResourceRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceRequestsCommandOutput) => void
  ): void;
  public listResourceRequests(
    args: ListResourceRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceRequestsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceRequestsCommandOutput) => void
  ): Promise<ListResourceRequestsCommandOutput> | void {
    const command = new ListResourceRequestsCommand(args);
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
   * <p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   *          <p>You can use this action to return information about existing resources in your account and
   *       Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
   */
  public listResources(
    args: ListResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesCommandOutput>;
  public listResources(
    args: ListResourcesCommandInput,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesCommandOutput) => void
  ): Promise<ListResourcesCommandOutput> | void {
    const command = new ListResourcesCommand(args);
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
   * <p>Updates the specified property values in the resource.</p>
   *          <p>You specify your resource property updates as a list of patch operations contained in a
   *       JSON patch document that adheres to the <a href="https://datatracker.ietf.org/doc/html/rfc6902">
   *                <i>RFC 6902 - JavaScript Object
   *           Notation (JSON) Patch</i>
   *             </a> standard.</p>
   *          <p>For details on how Cloud Control API performs resource update operations, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-update.html">Updating a resource</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
   *          <p>After you have initiated a resource update request, you can monitor the progress of your
   *       request by calling <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html">GetResourceRequestStatus</a> using the <code>RequestToken</code> of the
   *         <code>ProgressEvent</code> returned by <code>UpdateResource</code>.</p>
   *          <p>For more information about the properties of a specific resource, refer to the related
   *       topic for the resource in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Resource and property types reference</a> in the <i>CloudFormation Users Guide</i>.</p>
   */
  public updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  public updateResource(
    args: UpdateResourceCommandInput,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceCommandOutput) => void
  ): Promise<UpdateResourceCommandOutput> | void {
    const command = new UpdateResourceCommand(args);
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
