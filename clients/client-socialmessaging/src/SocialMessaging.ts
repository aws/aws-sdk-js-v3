// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateWhatsAppBusinessAccountCommand,
  AssociateWhatsAppBusinessAccountCommandInput,
  AssociateWhatsAppBusinessAccountCommandOutput,
} from "./commands/AssociateWhatsAppBusinessAccountCommand";
import {
  CreateWhatsAppMessageTemplateCommand,
  CreateWhatsAppMessageTemplateCommandInput,
  CreateWhatsAppMessageTemplateCommandOutput,
} from "./commands/CreateWhatsAppMessageTemplateCommand";
import {
  CreateWhatsAppMessageTemplateFromLibraryCommand,
  CreateWhatsAppMessageTemplateFromLibraryCommandInput,
  CreateWhatsAppMessageTemplateFromLibraryCommandOutput,
} from "./commands/CreateWhatsAppMessageTemplateFromLibraryCommand";
import {
  CreateWhatsAppMessageTemplateMediaCommand,
  CreateWhatsAppMessageTemplateMediaCommandInput,
  CreateWhatsAppMessageTemplateMediaCommandOutput,
} from "./commands/CreateWhatsAppMessageTemplateMediaCommand";
import {
  DeleteWhatsAppMessageMediaCommand,
  DeleteWhatsAppMessageMediaCommandInput,
  DeleteWhatsAppMessageMediaCommandOutput,
} from "./commands/DeleteWhatsAppMessageMediaCommand";
import {
  DeleteWhatsAppMessageTemplateCommand,
  DeleteWhatsAppMessageTemplateCommandInput,
  DeleteWhatsAppMessageTemplateCommandOutput,
} from "./commands/DeleteWhatsAppMessageTemplateCommand";
import {
  DisassociateWhatsAppBusinessAccountCommand,
  DisassociateWhatsAppBusinessAccountCommandInput,
  DisassociateWhatsAppBusinessAccountCommandOutput,
} from "./commands/DisassociateWhatsAppBusinessAccountCommand";
import {
  GetLinkedWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountCommandInput,
  GetLinkedWhatsAppBusinessAccountCommandOutput,
} from "./commands/GetLinkedWhatsAppBusinessAccountCommand";
import {
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput,
} from "./commands/GetLinkedWhatsAppBusinessAccountPhoneNumberCommand";
import {
  GetWhatsAppMessageMediaCommand,
  GetWhatsAppMessageMediaCommandInput,
  GetWhatsAppMessageMediaCommandOutput,
} from "./commands/GetWhatsAppMessageMediaCommand";
import {
  GetWhatsAppMessageTemplateCommand,
  GetWhatsAppMessageTemplateCommandInput,
  GetWhatsAppMessageTemplateCommandOutput,
} from "./commands/GetWhatsAppMessageTemplateCommand";
import {
  ListLinkedWhatsAppBusinessAccountsCommand,
  ListLinkedWhatsAppBusinessAccountsCommandInput,
  ListLinkedWhatsAppBusinessAccountsCommandOutput,
} from "./commands/ListLinkedWhatsAppBusinessAccountsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWhatsAppMessageTemplatesCommand,
  ListWhatsAppMessageTemplatesCommandInput,
  ListWhatsAppMessageTemplatesCommandOutput,
} from "./commands/ListWhatsAppMessageTemplatesCommand";
import {
  ListWhatsAppTemplateLibraryCommand,
  ListWhatsAppTemplateLibraryCommandInput,
  ListWhatsAppTemplateLibraryCommandOutput,
} from "./commands/ListWhatsAppTemplateLibraryCommand";
import {
  PostWhatsAppMessageMediaCommand,
  PostWhatsAppMessageMediaCommandInput,
  PostWhatsAppMessageMediaCommandOutput,
} from "./commands/PostWhatsAppMessageMediaCommand";
import {
  PutWhatsAppBusinessAccountEventDestinationsCommand,
  PutWhatsAppBusinessAccountEventDestinationsCommandInput,
  PutWhatsAppBusinessAccountEventDestinationsCommandOutput,
} from "./commands/PutWhatsAppBusinessAccountEventDestinationsCommand";
import {
  SendWhatsAppMessageCommand,
  SendWhatsAppMessageCommandInput,
  SendWhatsAppMessageCommandOutput,
} from "./commands/SendWhatsAppMessageCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateWhatsAppMessageTemplateCommand,
  UpdateWhatsAppMessageTemplateCommandInput,
  UpdateWhatsAppMessageTemplateCommandOutput,
} from "./commands/UpdateWhatsAppMessageTemplateCommand";
import { SocialMessagingClient } from "./SocialMessagingClient";

const commands = {
  AssociateWhatsAppBusinessAccountCommand,
  CreateWhatsAppMessageTemplateCommand,
  CreateWhatsAppMessageTemplateFromLibraryCommand,
  CreateWhatsAppMessageTemplateMediaCommand,
  DeleteWhatsAppMessageMediaCommand,
  DeleteWhatsAppMessageTemplateCommand,
  DisassociateWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountCommand,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  GetWhatsAppMessageMediaCommand,
  GetWhatsAppMessageTemplateCommand,
  ListLinkedWhatsAppBusinessAccountsCommand,
  ListTagsForResourceCommand,
  ListWhatsAppMessageTemplatesCommand,
  ListWhatsAppTemplateLibraryCommand,
  PostWhatsAppMessageMediaCommand,
  PutWhatsAppBusinessAccountEventDestinationsCommand,
  SendWhatsAppMessageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateWhatsAppMessageTemplateCommand,
};

export interface SocialMessaging {
  /**
   * @see {@link AssociateWhatsAppBusinessAccountCommand}
   */
  associateWhatsAppBusinessAccount(): Promise<AssociateWhatsAppBusinessAccountCommandOutput>;
  associateWhatsAppBusinessAccount(
    args: AssociateWhatsAppBusinessAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWhatsAppBusinessAccountCommandOutput>;
  associateWhatsAppBusinessAccount(
    args: AssociateWhatsAppBusinessAccountCommandInput,
    cb: (err: any, data?: AssociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;
  associateWhatsAppBusinessAccount(
    args: AssociateWhatsAppBusinessAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppMessageTemplateCommand}
   */
  createWhatsAppMessageTemplate(
    args: CreateWhatsAppMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatsAppMessageTemplateCommandOutput>;
  createWhatsAppMessageTemplate(
    args: CreateWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  createWhatsAppMessageTemplate(
    args: CreateWhatsAppMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppMessageTemplateFromLibraryCommand}
   */
  createWhatsAppMessageTemplateFromLibrary(
    args: CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatsAppMessageTemplateFromLibraryCommandOutput>;
  createWhatsAppMessageTemplateFromLibrary(
    args: CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateFromLibraryCommandOutput) => void
  ): void;
  createWhatsAppMessageTemplateFromLibrary(
    args: CreateWhatsAppMessageTemplateFromLibraryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateFromLibraryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatsAppMessageTemplateMediaCommand}
   */
  createWhatsAppMessageTemplateMedia(
    args: CreateWhatsAppMessageTemplateMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatsAppMessageTemplateMediaCommandOutput>;
  createWhatsAppMessageTemplateMedia(
    args: CreateWhatsAppMessageTemplateMediaCommandInput,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateMediaCommandOutput) => void
  ): void;
  createWhatsAppMessageTemplateMedia(
    args: CreateWhatsAppMessageTemplateMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatsAppMessageTemplateMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatsAppMessageMediaCommand}
   */
  deleteWhatsAppMessageMedia(
    args: DeleteWhatsAppMessageMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatsAppMessageMediaCommandOutput>;
  deleteWhatsAppMessageMedia(
    args: DeleteWhatsAppMessageMediaCommandInput,
    cb: (err: any, data?: DeleteWhatsAppMessageMediaCommandOutput) => void
  ): void;
  deleteWhatsAppMessageMedia(
    args: DeleteWhatsAppMessageMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatsAppMessageMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatsAppMessageTemplateCommand}
   */
  deleteWhatsAppMessageTemplate(
    args: DeleteWhatsAppMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatsAppMessageTemplateCommandOutput>;
  deleteWhatsAppMessageTemplate(
    args: DeleteWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: DeleteWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  deleteWhatsAppMessageTemplate(
    args: DeleteWhatsAppMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWhatsAppBusinessAccountCommand}
   */
  disassociateWhatsAppBusinessAccount(
    args: DisassociateWhatsAppBusinessAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWhatsAppBusinessAccountCommandOutput>;
  disassociateWhatsAppBusinessAccount(
    args: DisassociateWhatsAppBusinessAccountCommandInput,
    cb: (err: any, data?: DisassociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;
  disassociateWhatsAppBusinessAccount(
    args: DisassociateWhatsAppBusinessAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWhatsAppBusinessAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkedWhatsAppBusinessAccountCommand}
   */
  getLinkedWhatsAppBusinessAccount(
    args: GetLinkedWhatsAppBusinessAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkedWhatsAppBusinessAccountCommandOutput>;
  getLinkedWhatsAppBusinessAccount(
    args: GetLinkedWhatsAppBusinessAccountCommandInput,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountCommandOutput) => void
  ): void;
  getLinkedWhatsAppBusinessAccount(
    args: GetLinkedWhatsAppBusinessAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommand}
   */
  getLinkedWhatsAppBusinessAccountPhoneNumber(
    args: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput>;
  getLinkedWhatsAppBusinessAccountPhoneNumber(
    args: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput) => void
  ): void;
  getLinkedWhatsAppBusinessAccountPhoneNumber(
    args: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppMessageMediaCommand}
   */
  getWhatsAppMessageMedia(
    args: GetWhatsAppMessageMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWhatsAppMessageMediaCommandOutput>;
  getWhatsAppMessageMedia(
    args: GetWhatsAppMessageMediaCommandInput,
    cb: (err: any, data?: GetWhatsAppMessageMediaCommandOutput) => void
  ): void;
  getWhatsAppMessageMedia(
    args: GetWhatsAppMessageMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWhatsAppMessageMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWhatsAppMessageTemplateCommand}
   */
  getWhatsAppMessageTemplate(
    args: GetWhatsAppMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWhatsAppMessageTemplateCommandOutput>;
  getWhatsAppMessageTemplate(
    args: GetWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: GetWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  getWhatsAppMessageTemplate(
    args: GetWhatsAppMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWhatsAppMessageTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinkedWhatsAppBusinessAccountsCommand}
   */
  listLinkedWhatsAppBusinessAccounts(): Promise<ListLinkedWhatsAppBusinessAccountsCommandOutput>;
  listLinkedWhatsAppBusinessAccounts(
    args: ListLinkedWhatsAppBusinessAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLinkedWhatsAppBusinessAccountsCommandOutput>;
  listLinkedWhatsAppBusinessAccounts(
    args: ListLinkedWhatsAppBusinessAccountsCommandInput,
    cb: (err: any, data?: ListLinkedWhatsAppBusinessAccountsCommandOutput) => void
  ): void;
  listLinkedWhatsAppBusinessAccounts(
    args: ListLinkedWhatsAppBusinessAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinkedWhatsAppBusinessAccountsCommandOutput) => void
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
   * @see {@link ListWhatsAppMessageTemplatesCommand}
   */
  listWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatsAppMessageTemplatesCommandOutput>;
  listWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    cb: (err: any, data?: ListWhatsAppMessageTemplatesCommandOutput) => void
  ): void;
  listWhatsAppMessageTemplates(
    args: ListWhatsAppMessageTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatsAppMessageTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatsAppTemplateLibraryCommand}
   */
  listWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatsAppTemplateLibraryCommandOutput>;
  listWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    cb: (err: any, data?: ListWhatsAppTemplateLibraryCommandOutput) => void
  ): void;
  listWhatsAppTemplateLibrary(
    args: ListWhatsAppTemplateLibraryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatsAppTemplateLibraryCommandOutput) => void
  ): void;

  /**
   * @see {@link PostWhatsAppMessageMediaCommand}
   */
  postWhatsAppMessageMedia(
    args: PostWhatsAppMessageMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostWhatsAppMessageMediaCommandOutput>;
  postWhatsAppMessageMedia(
    args: PostWhatsAppMessageMediaCommandInput,
    cb: (err: any, data?: PostWhatsAppMessageMediaCommandOutput) => void
  ): void;
  postWhatsAppMessageMedia(
    args: PostWhatsAppMessageMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostWhatsAppMessageMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWhatsAppBusinessAccountEventDestinationsCommand}
   */
  putWhatsAppBusinessAccountEventDestinations(
    args: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutWhatsAppBusinessAccountEventDestinationsCommandOutput>;
  putWhatsAppBusinessAccountEventDestinations(
    args: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    cb: (err: any, data?: PutWhatsAppBusinessAccountEventDestinationsCommandOutput) => void
  ): void;
  putWhatsAppBusinessAccountEventDestinations(
    args: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWhatsAppBusinessAccountEventDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWhatsAppMessageCommand}
   */
  sendWhatsAppMessage(
    args: SendWhatsAppMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendWhatsAppMessageCommandOutput>;
  sendWhatsAppMessage(
    args: SendWhatsAppMessageCommandInput,
    cb: (err: any, data?: SendWhatsAppMessageCommandOutput) => void
  ): void;
  sendWhatsAppMessage(
    args: SendWhatsAppMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendWhatsAppMessageCommandOutput) => void
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
   * @see {@link UpdateWhatsAppMessageTemplateCommand}
   */
  updateWhatsAppMessageTemplate(
    args: UpdateWhatsAppMessageTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWhatsAppMessageTemplateCommandOutput>;
  updateWhatsAppMessageTemplate(
    args: UpdateWhatsAppMessageTemplateCommandInput,
    cb: (err: any, data?: UpdateWhatsAppMessageTemplateCommandOutput) => void
  ): void;
  updateWhatsAppMessageTemplate(
    args: UpdateWhatsAppMessageTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWhatsAppMessageTemplateCommandOutput) => void
  ): void;
}

/**
 * <p>
 *             <i>Amazon Web Services End User Messaging Social</i>, also referred to as Social messaging, is a messaging service that enables
 *          application developers to incorporate WhatsApp into their existing workflows. The <i>Amazon Web Services End User Messaging Social API</i> provides information about the
 *          <i>Amazon Web Services End User Messaging Social API</i> resources, including supported HTTP methods, parameters, and schemas.</p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> provides programmatic access to options that are unique to the WhatsApp Business Platform.</p>
 *          <p>If you're new to the <i>Amazon Web Services End User Messaging Social API</i>, it's also helpful to review <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html">What is
 *                Amazon Web Services End User Messaging Social</a> in the <i>Amazon Web Services End User Messaging Social User Guide</i>. The
 *          <i>Amazon Web Services End User Messaging Social User Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use
 *          <i>Amazon Web Services End User Messaging Social API</i> features programmatically and how to integrate functionality into applications.
 *          The guide also provides key information, such as integration with other Amazon Web Services
 *          services, and the quotas that apply to use of the service.</p>
 *          <p>
 *             <b>Regional availability</b>
 *          </p>
 *          <p>The <i>Amazon Web Services End User Messaging Social API</i> is available across several Amazon Web Services Regions and it provides a dedicated endpoint for each of these Regions. For a list of
 *          all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/end-user-messaging.html">Amazon Web Services End User Messaging endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing
 *                Amazon Web Services Regions</a> in the Amazon Web Services General
 *          Reference.</p>
 *          <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These
 *          Availability Zones are physically isolated from each other, but are united by private,
 *          low-latency, high-throughput, and highly redundant network connections. These Availability
 *          Zones enable us to provide very high levels of availability and redundancy, while also
 *          minimizing latency. To learn more about the number of Availability Zones that are available
 *          in each Region, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a>
 *          </p>
 * @public
 */
export class SocialMessaging extends SocialMessagingClient implements SocialMessaging {}
createAggregatedClient(commands, SocialMessaging);
