// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { OAMClient } from "./OAMClient";

/**
 * <p>Use Amazon CloudWatch Observability Access Manager to create and manage links between source accounts and
 *             monitoring accounts by using <i>CloudWatch cross-account observability</i>. With
 *             CloudWatch cross-account observability, you can monitor and troubleshoot applications that span
 *             multiple accounts within a Region. Seamlessly search, visualize, and analyze your metrics,
 *             logs, and traces in any of the linked accounts without account boundaries.</p>
 *
 *         <p>Set up one or more Amazon Web Services accounts as <i>monitoring
 *             accounts</i> and link them with multiple <i>source accounts</i>. A
 *             monitoring account is a central Amazon Web Services account that can view and interact with
 *             observability data generated from source accounts. A source account is an individual Amazon Web Services account that generates observability data for the resources that reside in it.
 *             Source accounts share their observability data with the monitoring account. The shared
 *             observability data can include metrics in Amazon CloudWatch, logs in Amazon CloudWatch Logs, and traces in X-Ray.</p>
 */
export class OAM extends OAMClient {
  /**
   * <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p>
   *         <p>Before you create a link, you must create a sink in the monitoring account and create a
   *             sink policy in that account. The sink policy must permit the source account to link to it. You
   *             can grant permission to source accounts by granting permission to an entire organization or to
   *             individual accounts.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and
   *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p>
   *         <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p>
   *         <p>Each source account can be linked to as many as five monitoring accounts.</p>
   */
  public createLink(args: CreateLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateLinkCommandOutput>;
  public createLink(args: CreateLinkCommandInput, cb: (err: any, data?: CreateLinkCommandOutput) => void): void;
  public createLink(
    args: CreateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLinkCommandOutput) => void
  ): void;
  public createLink(
    args: CreateLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLinkCommandOutput) => void),
    cb?: (err: any, data?: CreateLinkCommandOutput) => void
  ): Promise<CreateLinkCommandOutput> | void {
    const command = new CreateLinkCommand(args);
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
   * <p>Use this to create a <i>sink</i> in the current account, so that it can be
   *             used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that
   *             represents an attachment point in a monitoring account. Source accounts can link to the sink
   *             to send observability data.</p>
   *         <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it.
   *             For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p>
   *         <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>
   */
  public createSink(args: CreateSinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateSinkCommandOutput>;
  public createSink(args: CreateSinkCommandInput, cb: (err: any, data?: CreateSinkCommandOutput) => void): void;
  public createSink(
    args: CreateSinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSinkCommandOutput) => void
  ): void;
  public createSink(
    args: CreateSinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSinkCommandOutput) => void),
    cb?: (err: any, data?: CreateSinkCommandOutput) => void
  ): Promise<CreateSinkCommandOutput> | void {
    const command = new CreateSinkCommand(args);
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
   * <p>Deletes a link between a monitoring account sink and a source account. You must run this operation
   *             in the source account.</p>
   */
  public deleteLink(args: DeleteLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLinkCommandOutput>;
  public deleteLink(args: DeleteLinkCommandInput, cb: (err: any, data?: DeleteLinkCommandOutput) => void): void;
  public deleteLink(
    args: DeleteLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLinkCommandOutput) => void
  ): void;
  public deleteLink(
    args: DeleteLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLinkCommandOutput) => void),
    cb?: (err: any, data?: DeleteLinkCommandOutput) => void
  ): Promise<DeleteLinkCommandOutput> | void {
    const command = new DeleteLinkCommand(args);
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
   * <p>Deletes a sink. You must delete all links to a sink before you can delete that sink.</p>
   */
  public deleteSink(args: DeleteSinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSinkCommandOutput>;
  public deleteSink(args: DeleteSinkCommandInput, cb: (err: any, data?: DeleteSinkCommandOutput) => void): void;
  public deleteSink(
    args: DeleteSinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSinkCommandOutput) => void
  ): void;
  public deleteSink(
    args: DeleteSinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSinkCommandOutput) => void),
    cb?: (err: any, data?: DeleteSinkCommandOutput) => void
  ): Promise<DeleteSinkCommandOutput> | void {
    const command = new DeleteSinkCommand(args);
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
   * <p>Returns complete information about one link.</p>
   *         <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
   */
  public getLink(args: GetLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetLinkCommandOutput>;
  public getLink(args: GetLinkCommandInput, cb: (err: any, data?: GetLinkCommandOutput) => void): void;
  public getLink(
    args: GetLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkCommandOutput) => void
  ): void;
  public getLink(
    args: GetLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLinkCommandOutput) => void),
    cb?: (err: any, data?: GetLinkCommandOutput) => void
  ): Promise<GetLinkCommandOutput> | void {
    const command = new GetLinkCommand(args);
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
   * <p>Returns complete information about one monitoring account sink.</p>
   *         <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
   */
  public getSink(args: GetSinkCommandInput, options?: __HttpHandlerOptions): Promise<GetSinkCommandOutput>;
  public getSink(args: GetSinkCommandInput, cb: (err: any, data?: GetSinkCommandOutput) => void): void;
  public getSink(
    args: GetSinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSinkCommandOutput) => void
  ): void;
  public getSink(
    args: GetSinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSinkCommandOutput) => void),
    cb?: (err: any, data?: GetSinkCommandOutput) => void
  ): Promise<GetSinkCommandOutput> | void {
    const command = new GetSinkCommand(args);
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
   * <p>Returns the current sink policy attached to this sink. The sink policy specifies what
   *             accounts can attach to this sink as source accounts, and what types of data they can share.</p>
   */
  public getSinkPolicy(
    args: GetSinkPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSinkPolicyCommandOutput>;
  public getSinkPolicy(
    args: GetSinkPolicyCommandInput,
    cb: (err: any, data?: GetSinkPolicyCommandOutput) => void
  ): void;
  public getSinkPolicy(
    args: GetSinkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSinkPolicyCommandOutput) => void
  ): void;
  public getSinkPolicy(
    args: GetSinkPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSinkPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetSinkPolicyCommandOutput) => void
  ): Promise<GetSinkPolicyCommandOutput> | void {
    const command = new GetSinkPolicyCommand(args);
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
   * <p>Returns a list of source account links that are linked to this monitoring account sink.</p>
   *         <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
   *         <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
   */
  public listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedLinksCommandOutput>;
  public listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    cb: (err: any, data?: ListAttachedLinksCommandOutput) => void
  ): void;
  public listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedLinksCommandOutput) => void
  ): void;
  public listAttachedLinks(
    args: ListAttachedLinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachedLinksCommandOutput) => void),
    cb?: (err: any, data?: ListAttachedLinksCommandOutput) => void
  ): Promise<ListAttachedLinksCommandOutput> | void {
    const command = new ListAttachedLinksCommand(args);
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
   * <p>Use this operation in a source account to return a list of links to monitoring account sinks that
   *             this source account has.</p>
   *         <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>
   */
  public listLinks(args: ListLinksCommandInput, options?: __HttpHandlerOptions): Promise<ListLinksCommandOutput>;
  public listLinks(args: ListLinksCommandInput, cb: (err: any, data?: ListLinksCommandOutput) => void): void;
  public listLinks(
    args: ListLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLinksCommandOutput) => void
  ): void;
  public listLinks(
    args: ListLinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLinksCommandOutput) => void),
    cb?: (err: any, data?: ListLinksCommandOutput) => void
  ): Promise<ListLinksCommandOutput> | void {
    const command = new ListLinksCommand(args);
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
   * <p>Use this operation in a monitoring account to return the list of sinks created in that account.</p>
   */
  public listSinks(args: ListSinksCommandInput, options?: __HttpHandlerOptions): Promise<ListSinksCommandOutput>;
  public listSinks(args: ListSinksCommandInput, cb: (err: any, data?: ListSinksCommandOutput) => void): void;
  public listSinks(
    args: ListSinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSinksCommandOutput) => void
  ): void;
  public listSinks(
    args: ListSinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSinksCommandOutput) => void),
    cb?: (err: any, data?: ListSinksCommandOutput) => void
  ): Promise<ListSinksCommandOutput> | void {
    const command = new ListSinksCommand(args);
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
   * <p>Displays the tags associated with a resource. Both sinks and links support tagging.</p>
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
   * <p>Creates or updates the resource policy that grants permissions to source
   *             accounts to link to the monitoring account sink. When you create a sink policy, you can grant
   *             permissions to all accounts in an organization or to individual accounts.</p>
   *         <p>You can also use a sink policy to limit the types of data that is shared. The three types that
   *             you can allow or deny are:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>Metrics</b> - Specify with
   *                 <code>AWS::CloudWatch::Metric</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
   */
  public putSinkPolicy(
    args: PutSinkPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSinkPolicyCommandOutput>;
  public putSinkPolicy(
    args: PutSinkPolicyCommandInput,
    cb: (err: any, data?: PutSinkPolicyCommandOutput) => void
  ): void;
  public putSinkPolicy(
    args: PutSinkPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSinkPolicyCommandOutput) => void
  ): void;
  public putSinkPolicy(
    args: PutSinkPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSinkPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutSinkPolicyCommandOutput) => void
  ): Promise<PutSinkPolicyCommandOutput> | void {
    const command = new PutSinkPolicyCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified resource.
   *             Both sinks and links can be tagged. </p>
   *         <p>Tags can help you organize and categorize your resources. You can also use them to scope user
   *             permissions by granting a user
   *             permission to access or change only resources with certain tag values.</p>
   *         <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p>
   *         <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm,
   *             this tag is appended to the list of tags associated
   *             with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces
   *             the previous value for that tag.</p>
   *         <p>You can associate as many as 50 tags with a resource.</p>
   *         <important>
   *             <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and
   *             sinks you must have the <code>oam:ResourceTag</code> permission. The
   *             <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and
   *             sinks.</p>
   *          </important>
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
   * <p>Removes one or more tags from the specified resource.</p>
   *         <important>
   *             <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and
   *             sinks you must have the <code>oam:ResourceTag</code> permission. The
   *             <code>iam:TagResource</code> permission does not allow you to tag and untag links and
   *             sinks.</p>
   *          </important>
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
   * <p>Use this operation to change what types of data are shared from a source account to its linked
   *             monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p>
   *         <p>To update the list of tags associated with the sink, use
   *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
   */
  public updateLink(args: UpdateLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLinkCommandOutput>;
  public updateLink(args: UpdateLinkCommandInput, cb: (err: any, data?: UpdateLinkCommandOutput) => void): void;
  public updateLink(
    args: UpdateLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkCommandOutput) => void
  ): void;
  public updateLink(
    args: UpdateLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLinkCommandOutput) => void),
    cb?: (err: any, data?: UpdateLinkCommandOutput) => void
  ): Promise<UpdateLinkCommandOutput> | void {
    const command = new UpdateLinkCommand(args);
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
