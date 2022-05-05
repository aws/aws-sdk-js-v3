// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppIntegrationsClient } from "./AppIntegrationsClient";
import {
  CreateDataIntegrationCommand,
  CreateDataIntegrationCommandInput,
  CreateDataIntegrationCommandOutput,
} from "./commands/CreateDataIntegrationCommand";
import {
  CreateEventIntegrationCommand,
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
} from "./commands/CreateEventIntegrationCommand";
import {
  DeleteDataIntegrationCommand,
  DeleteDataIntegrationCommandInput,
  DeleteDataIntegrationCommandOutput,
} from "./commands/DeleteDataIntegrationCommand";
import {
  DeleteEventIntegrationCommand,
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
} from "./commands/DeleteEventIntegrationCommand";
import {
  GetDataIntegrationCommand,
  GetDataIntegrationCommandInput,
  GetDataIntegrationCommandOutput,
} from "./commands/GetDataIntegrationCommand";
import {
  GetEventIntegrationCommand,
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
} from "./commands/GetEventIntegrationCommand";
import {
  ListDataIntegrationAssociationsCommand,
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
} from "./commands/ListDataIntegrationAssociationsCommand";
import {
  ListDataIntegrationsCommand,
  ListDataIntegrationsCommandInput,
  ListDataIntegrationsCommandOutput,
} from "./commands/ListDataIntegrationsCommand";
import {
  ListEventIntegrationAssociationsCommand,
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "./commands/ListEventIntegrationAssociationsCommand";
import {
  ListEventIntegrationsCommand,
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "./commands/ListEventIntegrationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDataIntegrationCommand,
  UpdateDataIntegrationCommandInput,
  UpdateDataIntegrationCommandOutput,
} from "./commands/UpdateDataIntegrationCommand";
import {
  UpdateEventIntegrationCommand,
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
} from "./commands/UpdateEventIntegrationCommand";

/**
 * <p>The Amazon AppIntegrations service enables you to configure and reuse connections to external
 *       applications.</p>
 *          <p>For information about how you can use external applications with Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built
 *       integrations</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-wisdom.html">Deliver information to agents using Amazon Connect Wisdom</a>
 *        in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class AppIntegrations extends AppIntegrationsClient {
  /**
   * <p>Creates and persists a DataIntegration resource.</p>
   *          <note>
   *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
   *       Use a different DataIntegration, or recreate the DataIntegration using the
   *       <code>CreateDataIntegration</code> API.</p>
   *          </note>
   */
  public createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataIntegrationCommandOutput>;
  public createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    cb: (err: any, data?: CreateDataIntegrationCommandOutput) => void
  ): void;
  public createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataIntegrationCommandOutput) => void
  ): void;
  public createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataIntegrationCommandOutput) => void),
    cb?: (err: any, data?: CreateDataIntegrationCommandOutput) => void
  ): Promise<CreateDataIntegrationCommandOutput> | void {
    const command = new CreateDataIntegrationCommand(args);
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
   * <p>Creates an EventIntegration, given a specified name, description, and a reference to an
   *       Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No
   *       objects are created in the your account, only metadata that is persisted on the
   *       EventIntegration control plane.</p>
   */
  public createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventIntegrationCommandOutput>;
  public createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    cb: (err: any, data?: CreateEventIntegrationCommandOutput) => void
  ): void;
  public createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventIntegrationCommandOutput) => void
  ): void;
  public createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEventIntegrationCommandOutput) => void),
    cb?: (err: any, data?: CreateEventIntegrationCommandOutput) => void
  ): Promise<CreateEventIntegrationCommandOutput> | void {
    const command = new CreateEventIntegrationCommand(args);
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
   * <p>Deletes the DataIntegration. Only DataIntegrations that don't have any
   *       DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the
   *       underlying Amazon AppFlow flow and service linked role. </p>
   *          <note>
   *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
   * Use a different DataIntegration, or recreate the DataIntegration using the
   * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
   *          </note>
   */
  public deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataIntegrationCommandOutput>;
  public deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    cb: (err: any, data?: DeleteDataIntegrationCommandOutput) => void
  ): void;
  public deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataIntegrationCommandOutput) => void
  ): void;
  public deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataIntegrationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataIntegrationCommandOutput) => void
  ): Promise<DeleteDataIntegrationCommandOutput> | void {
    const command = new DeleteDataIntegrationCommand(args);
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
   * <p>Deletes the specified existing event integration. If the event integration is associated
   *       with clients, the request is rejected.</p>
   */
  public deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventIntegrationCommandOutput>;
  public deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    cb: (err: any, data?: DeleteEventIntegrationCommandOutput) => void
  ): void;
  public deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventIntegrationCommandOutput) => void
  ): void;
  public deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEventIntegrationCommandOutput) => void),
    cb?: (err: any, data?: DeleteEventIntegrationCommandOutput) => void
  ): Promise<DeleteEventIntegrationCommandOutput> | void {
    const command = new DeleteEventIntegrationCommand(args);
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
   * <p>Returns information about the DataIntegration.</p>
   *          <note>
   *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
   * Use a different DataIntegration, or recreate the DataIntegration using the
   * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
   *          </note>
   */
  public getDataIntegration(
    args: GetDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataIntegrationCommandOutput>;
  public getDataIntegration(
    args: GetDataIntegrationCommandInput,
    cb: (err: any, data?: GetDataIntegrationCommandOutput) => void
  ): void;
  public getDataIntegration(
    args: GetDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataIntegrationCommandOutput) => void
  ): void;
  public getDataIntegration(
    args: GetDataIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataIntegrationCommandOutput) => void),
    cb?: (err: any, data?: GetDataIntegrationCommandOutput) => void
  ): Promise<GetDataIntegrationCommandOutput> | void {
    const command = new GetDataIntegrationCommand(args);
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
   * <p>Returns information about the event integration.</p>
   */
  public getEventIntegration(
    args: GetEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventIntegrationCommandOutput>;
  public getEventIntegration(
    args: GetEventIntegrationCommandInput,
    cb: (err: any, data?: GetEventIntegrationCommandOutput) => void
  ): void;
  public getEventIntegration(
    args: GetEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventIntegrationCommandOutput) => void
  ): void;
  public getEventIntegration(
    args: GetEventIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEventIntegrationCommandOutput) => void),
    cb?: (err: any, data?: GetEventIntegrationCommandOutput) => void
  ): Promise<GetEventIntegrationCommandOutput> | void {
    const command = new GetEventIntegrationCommand(args);
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
   * <p>Returns a paginated list of DataIntegration associations in the account.</p>
   *          <note>
   *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
   * Use a different DataIntegration, or recreate the DataIntegration using the
   * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
   *          </note>
   */
  public listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIntegrationAssociationsCommandOutput>;
  public listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    cb: (err: any, data?: ListDataIntegrationAssociationsCommandOutput) => void
  ): void;
  public listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIntegrationAssociationsCommandOutput) => void
  ): void;
  public listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataIntegrationAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListDataIntegrationAssociationsCommandOutput) => void
  ): Promise<ListDataIntegrationAssociationsCommandOutput> | void {
    const command = new ListDataIntegrationAssociationsCommand(args);
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
   * <p>Returns a paginated list of DataIntegrations in the account.</p>
   *          <note>
   *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
   * Use a different DataIntegration, or recreate the DataIntegration using the
   * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
   *          </note>
   */
  public listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIntegrationsCommandOutput>;
  public listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    cb: (err: any, data?: ListDataIntegrationsCommandOutput) => void
  ): void;
  public listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIntegrationsCommandOutput) => void
  ): void;
  public listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataIntegrationsCommandOutput) => void),
    cb?: (err: any, data?: ListDataIntegrationsCommandOutput) => void
  ): Promise<ListDataIntegrationsCommandOutput> | void {
    const command = new ListDataIntegrationsCommand(args);
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
   * <p>Returns a paginated list of event integration associations in the account. </p>
   */
  public listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventIntegrationAssociationsCommandOutput>;
  public listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    cb: (err: any, data?: ListEventIntegrationAssociationsCommandOutput) => void
  ): void;
  public listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventIntegrationAssociationsCommandOutput) => void
  ): void;
  public listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventIntegrationAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListEventIntegrationAssociationsCommandOutput) => void
  ): Promise<ListEventIntegrationAssociationsCommandOutput> | void {
    const command = new ListEventIntegrationAssociationsCommand(args);
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
   * <p>Returns a paginated list of event integrations in the account.</p>
   */
  public listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventIntegrationsCommandOutput>;
  public listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    cb: (err: any, data?: ListEventIntegrationsCommandOutput) => void
  ): void;
  public listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventIntegrationsCommandOutput) => void
  ): void;
  public listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventIntegrationsCommandOutput) => void),
    cb?: (err: any, data?: ListEventIntegrationsCommandOutput) => void
  ): Promise<ListEventIntegrationsCommandOutput> | void {
    const command = new ListEventIntegrationsCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Adds the specified tags to the specified resource.</p>
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
   * <p>Removes the specified tags from the specified resource.</p>
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
   * <p>Updates the description of a DataIntegration.</p>
   *          <note>
   *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
   * Use a different DataIntegration, or recreate the DataIntegration using the
   * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
   *          </note>
   */
  public updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataIntegrationCommandOutput>;
  public updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    cb: (err: any, data?: UpdateDataIntegrationCommandOutput) => void
  ): void;
  public updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataIntegrationCommandOutput) => void
  ): void;
  public updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataIntegrationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataIntegrationCommandOutput) => void
  ): Promise<UpdateDataIntegrationCommandOutput> | void {
    const command = new UpdateDataIntegrationCommand(args);
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
   * <p>Updates the description of an event integration.</p>
   */
  public updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventIntegrationCommandOutput>;
  public updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    cb: (err: any, data?: UpdateEventIntegrationCommandOutput) => void
  ): void;
  public updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventIntegrationCommandOutput) => void
  ): void;
  public updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEventIntegrationCommandOutput) => void),
    cb?: (err: any, data?: UpdateEventIntegrationCommandOutput) => void
  ): Promise<UpdateEventIntegrationCommandOutput> | void {
    const command = new UpdateEventIntegrationCommand(args);
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
