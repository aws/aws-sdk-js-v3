// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateLinkCommand, CreateLinkCommandInput, CreateLinkCommandOutput } from "./commands/CreateLinkCommand";
import { CreateSinkCommand, CreateSinkCommandInput, CreateSinkCommandOutput } from "./commands/CreateSinkCommand";
import { DeleteLinkCommand, DeleteLinkCommandInput, DeleteLinkCommandOutput } from "./commands/DeleteLinkCommand";
import { DeleteSinkCommand, DeleteSinkCommandInput, DeleteSinkCommandOutput } from "./commands/DeleteSinkCommand";
import { GetLinkCommand, GetLinkCommandInput, GetLinkCommandOutput } from "./commands/GetLinkCommand";
import { GetSinkCommand, GetSinkCommandInput, GetSinkCommandOutput } from "./commands/GetSinkCommand";
import {
  GetSinkPolicyCommand,
  GetSinkPolicyCommandInput,
  GetSinkPolicyCommandOutput,
} from "./commands/GetSinkPolicyCommand";
import {
  ListAttachedLinksCommand,
  ListAttachedLinksCommandInput,
  ListAttachedLinksCommandOutput,
} from "./commands/ListAttachedLinksCommand";
import { ListLinksCommand, ListLinksCommandInput, ListLinksCommandOutput } from "./commands/ListLinksCommand";
import { ListSinksCommand, ListSinksCommandInput, ListSinksCommandOutput } from "./commands/ListSinksCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutSinkPolicyCommand,
  PutSinkPolicyCommandInput,
  PutSinkPolicyCommandOutput,
} from "./commands/PutSinkPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateLinkCommand, UpdateLinkCommandInput, UpdateLinkCommandOutput } from "./commands/UpdateLinkCommand";
import { OAMClient, OAMClientConfig } from "./OAMClient";

const commands = {
  CreateLinkCommand,
  CreateSinkCommand,
  DeleteLinkCommand,
  DeleteSinkCommand,
  GetLinkCommand,
  GetSinkCommand,
  GetSinkPolicyCommand,
  ListAttachedLinksCommand,
  ListLinksCommand,
  ListSinksCommand,
  ListTagsForResourceCommand,
  PutSinkPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLinkCommand,
};

export interface OAM {
  /**
   * @see {@link CreateLinkCommand}
   */
  createLink(args: CreateLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateLinkCommandOutput>;
  createLink(args: CreateLinkCommandInput, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
  createLink(
    args: CreateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSinkCommand}
   */
  createSink(args: CreateSinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateSinkCommandOutput>;
  createSink(args: CreateSinkCommandInput, cb: (err: any, data?: CreateSinkCommandOutput) => void): void;
  createSink(
    args: CreateSinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLinkCommand}
   */
  deleteLink(args: DeleteLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLinkCommandOutput>;
  deleteLink(args: DeleteLinkCommandInput, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
  deleteLink(
    args: DeleteLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSinkCommand}
   */
  deleteSink(args: DeleteSinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSinkCommandOutput>;
  deleteSink(args: DeleteSinkCommandInput, cb: (err: any, data?: DeleteSinkCommandOutput) => void): void;
  deleteSink(
    args: DeleteSinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLinkCommand}
   */
  getLink(args: GetLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetLinkCommandOutput>;
  getLink(args: GetLinkCommandInput, cb: (err: any, data?: GetLinkCommandOutput) => void): void;
  getLink(
    args: GetLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSinkCommand}
   */
  getSink(args: GetSinkCommandInput, options?: __HttpHandlerOptions): Promise<GetSinkCommandOutput>;
  getSink(args: GetSinkCommandInput, cb: (err: any, data?: GetSinkCommandOutput) => void): void;
  getSink(
    args: GetSinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSinkPolicyCommand}
   */
  getSinkPolicy(args: GetSinkPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetSinkPolicyCommandOutput>;
  getSinkPolicy(args: GetSinkPolicyCommandInput, cb: (err: any, data?: GetSinkPolicyCommandOutput) => void): void;
  getSinkPolicy(
    args: GetSinkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSinkPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachedLinksCommand}
   */
  listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedLinksCommandOutput>;
  listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    cb: (err: any, data?: ListAttachedLinksCommandOutput) => void
  ): void;
  listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLinksCommand}
   */
  listLinks(args: ListLinksCommandInput, options?: __HttpHandlerOptions): Promise<ListLinksCommandOutput>;
  listLinks(args: ListLinksCommandInput, cb: (err: any, data?: ListLinksCommandOutput) => void): void;
  listLinks(
    args: ListLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSinksCommand}
   */
  listSinks(args: ListSinksCommandInput, options?: __HttpHandlerOptions): Promise<ListSinksCommandOutput>;
  listSinks(args: ListSinksCommandInput, cb: (err: any, data?: ListSinksCommandOutput) => void): void;
  listSinks(
    args: ListSinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSinksCommandOutput) => void
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
   * @see {@link PutSinkPolicyCommand}
   */
  putSinkPolicy(args: PutSinkPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutSinkPolicyCommandOutput>;
  putSinkPolicy(args: PutSinkPolicyCommandInput, cb: (err: any, data?: PutSinkPolicyCommandOutput) => void): void;
  putSinkPolicy(
    args: PutSinkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSinkPolicyCommandOutput) => void
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
   * @see {@link UpdateLinkCommand}
   */
  updateLink(args: UpdateLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLinkCommandOutput>;
  updateLink(args: UpdateLinkCommandInput, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
  updateLink(
    args: UpdateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Use Amazon CloudWatch Observability Access Manager to create and manage links between source accounts and
 *             monitoring accounts by using <i>CloudWatch cross-account observability</i>. With
 *             CloudWatch cross-account observability, you can monitor and troubleshoot applications that span
 *             multiple accounts within a Region. Seamlessly search, visualize, and analyze your metrics,
 *             logs, traces, and Application Insights applications in any of the linked accounts without account boundaries.</p>
 *          <p>Set up one or more Amazon Web Services accounts as <i>monitoring
 *             accounts</i> and link them with multiple <i>source accounts</i>. A
 *             monitoring account is a central Amazon Web Services account that can view and interact with
 *             observability data generated from source accounts. A source account is an individual Amazon Web Services account that generates observability data for the resources that reside in it.
 *             Source accounts share their observability data with the monitoring account. The shared
 *             observability data can include metrics in Amazon CloudWatch, logs in Amazon CloudWatch Logs, traces in X-Ray, and applications in Amazon CloudWatch Application Insights.</p>
 */
export class OAM extends OAMClient implements OAM {}
createAggregatedClient(commands, OAM);
