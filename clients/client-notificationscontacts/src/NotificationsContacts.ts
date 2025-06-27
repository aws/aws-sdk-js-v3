// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ActivateEmailContactCommand,
  ActivateEmailContactCommandInput,
  ActivateEmailContactCommandOutput,
} from "./commands/ActivateEmailContactCommand";
import {
  CreateEmailContactCommand,
  CreateEmailContactCommandInput,
  CreateEmailContactCommandOutput,
} from "./commands/CreateEmailContactCommand";
import {
  DeleteEmailContactCommand,
  DeleteEmailContactCommandInput,
  DeleteEmailContactCommandOutput,
} from "./commands/DeleteEmailContactCommand";
import {
  GetEmailContactCommand,
  GetEmailContactCommandInput,
  GetEmailContactCommandOutput,
} from "./commands/GetEmailContactCommand";
import {
  ListEmailContactsCommand,
  ListEmailContactsCommandInput,
  ListEmailContactsCommandOutput,
} from "./commands/ListEmailContactsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SendActivationCodeCommand,
  SendActivationCodeCommandInput,
  SendActivationCodeCommandOutput,
} from "./commands/SendActivationCodeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { NotificationsContactsClient, NotificationsContactsClientConfig } from "./NotificationsContactsClient";

const commands = {
  ActivateEmailContactCommand,
  CreateEmailContactCommand,
  DeleteEmailContactCommand,
  GetEmailContactCommand,
  ListEmailContactsCommand,
  ListTagsForResourceCommand,
  SendActivationCodeCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface NotificationsContacts {
  /**
   * @see {@link ActivateEmailContactCommand}
   */
  activateEmailContact(
    args: ActivateEmailContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateEmailContactCommandOutput>;
  activateEmailContact(
    args: ActivateEmailContactCommandInput,
    cb: (err: any, data?: ActivateEmailContactCommandOutput) => void
  ): void;
  activateEmailContact(
    args: ActivateEmailContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateEmailContactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailContactCommand}
   */
  createEmailContact(
    args: CreateEmailContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailContactCommandOutput>;
  createEmailContact(
    args: CreateEmailContactCommandInput,
    cb: (err: any, data?: CreateEmailContactCommandOutput) => void
  ): void;
  createEmailContact(
    args: CreateEmailContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailContactCommand}
   */
  deleteEmailContact(
    args: DeleteEmailContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailContactCommandOutput>;
  deleteEmailContact(
    args: DeleteEmailContactCommandInput,
    cb: (err: any, data?: DeleteEmailContactCommandOutput) => void
  ): void;
  deleteEmailContact(
    args: DeleteEmailContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailContactCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailContactCommand}
   */
  getEmailContact(
    args: GetEmailContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailContactCommandOutput>;
  getEmailContact(args: GetEmailContactCommandInput, cb: (err: any, data?: GetEmailContactCommandOutput) => void): void;
  getEmailContact(
    args: GetEmailContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailContactCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEmailContactsCommand}
   */
  listEmailContacts(): Promise<ListEmailContactsCommandOutput>;
  listEmailContacts(
    args: ListEmailContactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEmailContactsCommandOutput>;
  listEmailContacts(
    args: ListEmailContactsCommandInput,
    cb: (err: any, data?: ListEmailContactsCommandOutput) => void
  ): void;
  listEmailContacts(
    args: ListEmailContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEmailContactsCommandOutput) => void
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
   * @see {@link SendActivationCodeCommand}
   */
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendActivationCodeCommandOutput>;
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
  ): void;
  sendActivationCode(
    args: SendActivationCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendActivationCodeCommandOutput) => void
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
}

/**
 * <p>AWS User Notifications Contacts is a service that allows you to create and manage email contacts for AWS User Notifications. The AWS User Notifications Contacts API Reference provides descriptions, API request parameters, and the JSON response for all email contact related API actions.</p>
 * @public
 */
export class NotificationsContacts extends NotificationsContactsClient implements NotificationsContacts {}
createAggregatedClient(commands, NotificationsContacts);
