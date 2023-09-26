// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppIntegrationsClient, AppIntegrationsClientConfig } from "./AppIntegrationsClient";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
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
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
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
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
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
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
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

const commands = {
  CreateApplicationCommand,
  CreateDataIntegrationCommand,
  CreateEventIntegrationCommand,
  DeleteDataIntegrationCommand,
  DeleteEventIntegrationCommand,
  GetApplicationCommand,
  GetDataIntegrationCommand,
  GetEventIntegrationCommand,
  ListApplicationsCommand,
  ListDataIntegrationAssociationsCommand,
  ListDataIntegrationsCommand,
  ListEventIntegrationAssociationsCommand,
  ListEventIntegrationsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateDataIntegrationCommand,
  UpdateEventIntegrationCommand,
};

export interface AppIntegrations {
  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataIntegrationCommand}
   */
  createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataIntegrationCommandOutput>;
  createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    cb: (err: any, data?: CreateDataIntegrationCommandOutput) => void
  ): void;
  createDataIntegration(
    args: CreateDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventIntegrationCommand}
   */
  createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventIntegrationCommandOutput>;
  createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    cb: (err: any, data?: CreateEventIntegrationCommandOutput) => void
  ): void;
  createEventIntegration(
    args: CreateEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataIntegrationCommand}
   */
  deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataIntegrationCommandOutput>;
  deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    cb: (err: any, data?: DeleteDataIntegrationCommandOutput) => void
  ): void;
  deleteDataIntegration(
    args: DeleteDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventIntegrationCommand}
   */
  deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventIntegrationCommandOutput>;
  deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    cb: (err: any, data?: DeleteEventIntegrationCommandOutput) => void
  ): void;
  deleteEventIntegration(
    args: DeleteEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataIntegrationCommand}
   */
  getDataIntegration(
    args: GetDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataIntegrationCommandOutput>;
  getDataIntegration(
    args: GetDataIntegrationCommandInput,
    cb: (err: any, data?: GetDataIntegrationCommandOutput) => void
  ): void;
  getDataIntegration(
    args: GetDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventIntegrationCommand}
   */
  getEventIntegration(
    args: GetEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventIntegrationCommandOutput>;
  getEventIntegration(
    args: GetEventIntegrationCommandInput,
    cb: (err: any, data?: GetEventIntegrationCommandOutput) => void
  ): void;
  getEventIntegration(
    args: GetEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataIntegrationAssociationsCommand}
   */
  listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIntegrationAssociationsCommandOutput>;
  listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    cb: (err: any, data?: ListDataIntegrationAssociationsCommandOutput) => void
  ): void;
  listDataIntegrationAssociations(
    args: ListDataIntegrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIntegrationAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataIntegrationsCommand}
   */
  listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIntegrationsCommandOutput>;
  listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    cb: (err: any, data?: ListDataIntegrationsCommandOutput) => void
  ): void;
  listDataIntegrations(
    args: ListDataIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventIntegrationAssociationsCommand}
   */
  listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventIntegrationAssociationsCommandOutput>;
  listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    cb: (err: any, data?: ListEventIntegrationAssociationsCommandOutput) => void
  ): void;
  listEventIntegrationAssociations(
    args: ListEventIntegrationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventIntegrationAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventIntegrationsCommand}
   */
  listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventIntegrationsCommandOutput>;
  listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    cb: (err: any, data?: ListEventIntegrationsCommandOutput) => void
  ): void;
  listEventIntegrations(
    args: ListEventIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataIntegrationCommand}
   */
  updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataIntegrationCommandOutput>;
  updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    cb: (err: any, data?: UpdateDataIntegrationCommandOutput) => void
  ): void;
  updateDataIntegration(
    args: UpdateDataIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventIntegrationCommand}
   */
  updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventIntegrationCommandOutput>;
  updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    cb: (err: any, data?: UpdateEventIntegrationCommandOutput) => void
  ): void;
  updateEventIntegration(
    args: UpdateEventIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventIntegrationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon AppIntegrations service enables you to configure and reuse connections to external
 *       applications.</p>
 *          <p>For information about how you can use external applications with Amazon Connect, see
 *         <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built
 *         integrations</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-wisdom.html">Deliver information to agents
 *         using Amazon Connect Wisdom</a> in the <i>Amazon Connect Administrator
 *         Guide</i>.</p>
 */
export class AppIntegrations extends AppIntegrationsClient implements AppIntegrations {}
createAggregatedClient(commands, AppIntegrations);
