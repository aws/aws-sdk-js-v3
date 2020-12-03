import { AppIntegrationsClient } from "./AppIntegrationsClient";
import {
  CreateEventIntegrationCommand,
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
} from "./commands/CreateEventIntegrationCommand";
import {
  DeleteEventIntegrationCommand,
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
} from "./commands/DeleteEventIntegrationCommand";
import {
  GetEventIntegrationCommand,
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
} from "./commands/GetEventIntegrationCommand";
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
  UpdateEventIntegrationCommand,
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
} from "./commands/UpdateEventIntegrationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *
 *          <p>The Amazon AppIntegrations service enables you to configure and reuse connections to external applications.</p>
 *          <p>For information about how you can use external applications with Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built integrations</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class AppIntegrations extends AppIntegrationsClient {
  /**
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Creates an EventIntegration, given a specified name, description, and a reference to an
   *       Amazon Eventbridge bus in your account and a partner event source that will push events to that bus. No
   *       objects are created in the your account, only metadata that is persisted on the EventIntegration
   *       control plane.</p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Deletes the specified existing event integration. If the event integration is associated
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Return information about the event integration.</p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Returns a paginated list of event integration associations in the account. </p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Returns a paginated list of event integrations in the account.</p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Lists the tags for the specified resource.</p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Adds the specified tags to the specified resource.</p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Removes the specified tags from the specified resource.</p>
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
   * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
   *          <p>Updates the description of an event integration.</p>
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
