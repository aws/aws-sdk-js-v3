// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateDefaultViewCommand,
  AssociateDefaultViewCommandInput,
  AssociateDefaultViewCommandOutput,
} from "./commands/AssociateDefaultViewCommand";
import {
  BatchGetViewCommand,
  BatchGetViewCommandInput,
  BatchGetViewCommandOutput,
} from "./commands/BatchGetViewCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreateViewCommand, CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import { DeleteIndexCommand, DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import { DeleteViewCommand, DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import {
  DisassociateDefaultViewCommand,
  DisassociateDefaultViewCommandInput,
  DisassociateDefaultViewCommandOutput,
} from "./commands/DisassociateDefaultViewCommand";
import {
  GetDefaultViewCommand,
  GetDefaultViewCommandInput,
  GetDefaultViewCommandOutput,
} from "./commands/GetDefaultViewCommand";
import { GetIndexCommand, GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import { GetViewCommand, GetViewCommandInput, GetViewCommandOutput } from "./commands/GetViewCommand";
import { ListIndexesCommand, ListIndexesCommandInput, ListIndexesCommandOutput } from "./commands/ListIndexesCommand";
import {
  ListSupportedResourceTypesCommand,
  ListSupportedResourceTypesCommandInput,
  ListSupportedResourceTypesCommandOutput,
} from "./commands/ListSupportedResourceTypesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListViewsCommand, ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIndexTypeCommand,
  UpdateIndexTypeCommandInput,
  UpdateIndexTypeCommandOutput,
} from "./commands/UpdateIndexTypeCommand";
import { UpdateViewCommand, UpdateViewCommandInput, UpdateViewCommandOutput } from "./commands/UpdateViewCommand";
import { ResourceExplorer2Client } from "./ResourceExplorer2Client";

/**
 * <p>Amazon Web Services Resource Explorer is a resource search and discovery service. By using Resource Explorer, you can
 *             explore your resources using an internet search engine-like experience. Examples of
 *             resources include Amazon Relational Database Service (Amazon RDS) instances, Amazon Simple Storage Service (Amazon S3) buckets, or Amazon DynamoDB
 *             tables. You can search for your resources using resource metadata like names, tags, and
 *             IDs. Resource Explorer can search across all of the Amazon Web Services Regions in your account in which you turn
 *             the service on, to simplify your cross-Region workloads.</p>
 *          <p>Resource Explorer scans the resources in each of the Amazon Web Services Regions in your Amazon Web Services account in which
 *             you turn on Resource Explorer. Resource Explorer <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-index">creates
 *                 and maintains an index</a> in each Region, with the details of that Region's
 *             resources.</p>
 *          <p>You can <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">search across all of the
 *                 indexed Regions in your account</a> by designating one of your Amazon Web Services Regions to
 *             contain the aggregator index for the account. When you <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region-turn-on.html">promote a local index
 *                 in a Region to become the aggregator index for the account</a>, Resource Explorer automatically
 *             replicates the index information from all local indexes in the other Regions to the
 *             aggregator index. Therefore, the Region with the aggregator index has a copy of all resource
 *             information for all Regions in the account where you turned on Resource Explorer. As a result,
 *             views in the aggregator index Region include resources from all of the indexed Regions in your
 *             account.</p>
 *          <p>For more information about Amazon Web Services Resource Explorer, including how to enable and configure the
 *             service, see the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/">Amazon Web Services Resource Explorer User Guide</a>.</p>
 */
export class ResourceExplorer2 extends ResourceExplorer2Client {
  /**
   * <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this
   *             operation. When a user performs a <a>Search</a> that doesn't explicitly
   *             specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for
   *             searches performed in this Amazon Web Services Region.</p>
   *          <p>If an Amazon Web Services Region doesn't have a default view
   *     configured, then users must explicitly specify a view with every <code>Search</code>
   *     operation performed in that Region.</p>
   */
  public associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDefaultViewCommandOutput>;
  public associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    cb: (err: any, data?: AssociateDefaultViewCommandOutput) => void
  ): void;
  public associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDefaultViewCommandOutput) => void
  ): void;
  public associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDefaultViewCommandOutput) => void),
    cb?: (err: any, data?: AssociateDefaultViewCommandOutput) => void
  ): Promise<AssociateDefaultViewCommandOutput> | void {
    const command = new AssociateDefaultViewCommand(args);
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
   * <p>Retrieves details about a list of views.</p>
   */
  public batchGetView(
    args: BatchGetViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetViewCommandOutput>;
  public batchGetView(args: BatchGetViewCommandInput, cb: (err: any, data?: BatchGetViewCommandOutput) => void): void;
  public batchGetView(
    args: BatchGetViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetViewCommandOutput) => void
  ): void;
  public batchGetView(
    args: BatchGetViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetViewCommandOutput) => void),
    cb?: (err: any, data?: BatchGetViewCommandOutput) => void
  ): Promise<BatchGetViewCommandOutput> | void {
    const command = new BatchGetViewCommand(args);
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
   * <p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating
   *             an index. Resource Explorer begins discovering the resources in this Region and stores the details
   *             about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p>
   *          <note>
   *             <p>This operation creates only a <i>local</i> index. To promote the
   *                 local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the
   *                     <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the
   *                     <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
   *          </note>
   *          <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see
   *                 <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn
   *                 on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the
   *                 <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
   *          <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then
   *             this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a
   *                 service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate
   *             your resources to populate the index.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Action</b>:
   *                         <code>resource-explorer-2:CreateIndex</code>
   *                </p>
   *                <p>
   *                   <b>Resource</b>: The ARN of the index (as it will
   *                     exist after the operation completes) in the Amazon Web Services Region and account in which
   *                     you're trying to create the index. Use the wildcard character (<code>*</code>)
   *                     at the end of the string to match the eventual UUID. For example, the following
   *                         <code>Resource</code> element restricts the role or user to creating an
   *                     index in only the <code>us-east-2</code> Region of the specified account.</p>
   *                <p>
   *                   <code>"Resource":
   *                             "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code>
   *                </p>
   *                <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or
   *                     user to create an index in any Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Action</b>:
   *                         <code>iam:CreateServiceLinkedRole</code>
   *                </p>
   *                <p>
   *                   <b>Resource</b>: No specific resource (*). </p>
   *                <p>This permission is required only the first time you create an index to turn on
   *                     Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked
   *                         role needed to index the resources in your account</a>. Resource Explorer uses the
   *                     same service-linked role for all additional indexes you create
   *                     afterwards.</p>
   *             </li>
   *          </ul>
   */
  public createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  public createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  public createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  public createIndex(
    args: CreateIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIndexCommandOutput) => void),
    cb?: (err: any, data?: CreateIndexCommandOutput) => void
  ): Promise<CreateIndexCommandOutput> | void {
    const command = new CreateIndexCommand(args);
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
   * <p>Creates a view that users can query by using the <a>Search</a> operation.
   *             Results from queries that you make using this view include only resources that match the
   *             view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a>
   *             in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
   *          <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code>
   *             to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of
   *             this view can <a>Search</a> using views you create with this
   *             operation.</p>
   */
  public createView(args: CreateViewCommandInput, options?: __HttpHandlerOptions): Promise<CreateViewCommandOutput>;
  public createView(args: CreateViewCommandInput, cb: (err: any, data?: CreateViewCommandOutput) => void): void;
  public createView(
    args: CreateViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateViewCommandOutput) => void
  ): void;
  public createView(
    args: CreateViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateViewCommandOutput) => void),
    cb?: (err: any, data?: CreateViewCommandOutput) => void
  ): Promise<CreateViewCommandOutput> | void {
    const command = new CreateViewCommand(args);
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
   * <p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region.
   *             When you delete an index, Resource Explorer stops discovering and indexing resources in that
   *             Region. Resource Explorer also deletes all views in that Region. These actions occur as
   *             asynchronous background tasks. You can check to see when the actions are complete by
   *             using the <a>GetIndex</a> operation and checking the <code>Status</code>
   *             response value.</p>
   *          <note>
   *             <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must
   *                 wait 24 hours before you can promote another local index to be the
   *                 aggregator index for the account. Users can't perform account-wide searches using
   *                 Resource Explorer until another aggregator index is configured.</p>
   *          </note>
   */
  public deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
  public deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIndexCommandOutput) => void),
    cb?: (err: any, data?: DeleteIndexCommandOutput) => void
  ): Promise<DeleteIndexCommandOutput> | void {
    const command = new DeleteIndexCommand(args);
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
   * <p>Deletes the specified view.</p>
   *          <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use
   *             until you configure a new default by calling the <a>AssociateDefaultView</a>
   *             operation.</p>
   */
  public deleteView(args: DeleteViewCommandInput, options?: __HttpHandlerOptions): Promise<DeleteViewCommandOutput>;
  public deleteView(args: DeleteViewCommandInput, cb: (err: any, data?: DeleteViewCommandOutput) => void): void;
  public deleteView(
    args: DeleteViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteViewCommandOutput) => void
  ): void;
  public deleteView(
    args: DeleteViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteViewCommandOutput) => void),
    cb?: (err: any, data?: DeleteViewCommandOutput) => void
  ): Promise<DeleteViewCommandOutput> | void {
    const command = new DeleteViewCommand(args);
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
   * <p>After you call this operation, the affected Amazon Web Services Region no longer has a default view.
   *             All <a>Search</a> operations in that Region must explicitly specify a view or
   *             the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>
   *          <p>If an Amazon Web Services Region doesn't have a default view
   *     configured, then users must explicitly specify a view with every <code>Search</code>
   *     operation performed in that Region.</p>
   */
  public disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDefaultViewCommandOutput>;
  public disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    cb: (err: any, data?: DisassociateDefaultViewCommandOutput) => void
  ): void;
  public disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDefaultViewCommandOutput) => void
  ): void;
  public disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDefaultViewCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDefaultViewCommandOutput) => void
  ): Promise<DisassociateDefaultViewCommandOutput> | void {
    const command = new DisassociateDefaultViewCommand(args);
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
   * <p>Retrieves the Amazon Resource Name (ARN) of the view that is the default for the
   *             Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.</p>
   */
  public getDefaultView(
    args: GetDefaultViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultViewCommandOutput>;
  public getDefaultView(
    args: GetDefaultViewCommandInput,
    cb: (err: any, data?: GetDefaultViewCommandOutput) => void
  ): void;
  public getDefaultView(
    args: GetDefaultViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultViewCommandOutput) => void
  ): void;
  public getDefaultView(
    args: GetDefaultViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDefaultViewCommandOutput) => void),
    cb?: (err: any, data?: GetDefaultViewCommandOutput) => void
  ): Promise<GetDefaultViewCommandOutput> | void {
    const command = new GetDefaultViewCommand(args);
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
   * <p>Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked
   *             the operation.</p>
   */
  public getIndex(args: GetIndexCommandInput, options?: __HttpHandlerOptions): Promise<GetIndexCommandOutput>;
  public getIndex(args: GetIndexCommandInput, cb: (err: any, data?: GetIndexCommandOutput) => void): void;
  public getIndex(
    args: GetIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;
  public getIndex(
    args: GetIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIndexCommandOutput) => void),
    cb?: (err: any, data?: GetIndexCommandOutput) => void
  ): Promise<GetIndexCommandOutput> | void {
    const command = new GetIndexCommand(args);
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
   * <p>Retrieves details of the specified view.</p>
   */
  public getView(args: GetViewCommandInput, options?: __HttpHandlerOptions): Promise<GetViewCommandOutput>;
  public getView(args: GetViewCommandInput, cb: (err: any, data?: GetViewCommandOutput) => void): void;
  public getView(
    args: GetViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetViewCommandOutput) => void
  ): void;
  public getView(
    args: GetViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetViewCommandOutput) => void),
    cb?: (err: any, data?: GetViewCommandOutput) => void
  ): Promise<GetViewCommandOutput> | void {
    const command = new GetViewCommand(args);
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
   * <p>Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting
   *             resource information for Amazon Web Services Resource Explorer.</p>
   */
  public listIndexes(args: ListIndexesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndexesCommandOutput>;
  public listIndexes(args: ListIndexesCommandInput, cb: (err: any, data?: ListIndexesCommandOutput) => void): void;
  public listIndexes(
    args: ListIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexesCommandOutput) => void
  ): void;
  public listIndexes(
    args: ListIndexesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIndexesCommandOutput) => void),
    cb?: (err: any, data?: ListIndexesCommandOutput) => void
  ): Promise<ListIndexesCommandOutput> | void {
    const command = new ListIndexesCommand(args);
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
   * <p>Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.</p>
   */
  public listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedResourceTypesCommandOutput>;
  public listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    cb: (err: any, data?: ListSupportedResourceTypesCommandOutput) => void
  ): void;
  public listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedResourceTypesCommandOutput) => void
  ): void;
  public listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSupportedResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: ListSupportedResourceTypesCommandOutput) => void
  ): Promise<ListSupportedResourceTypesCommandOutput> | void {
    const command = new ListSupportedResourceTypesCommand(args);
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
   * <p>Lists the tags that are attached to the specified resource.</p>
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
   * <p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you
   *             call this operation.</p>
   *          <note>
   *             <p>Always check the <code>NextToken</code> response parameter
   * for a <code>null</code> value when calling a paginated operation. These operations can
   * occasionally return an empty set of results even when there are more results available. The
   * <code>NextToken</code> response parameter value is <code>null</code>
   *                <i>only</i>
   * when there are no more results to display.</p>
   *          </note>
   */
  public listViews(args: ListViewsCommandInput, options?: __HttpHandlerOptions): Promise<ListViewsCommandOutput>;
  public listViews(args: ListViewsCommandInput, cb: (err: any, data?: ListViewsCommandOutput) => void): void;
  public listViews(
    args: ListViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListViewsCommandOutput) => void
  ): void;
  public listViews(
    args: ListViewsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListViewsCommandOutput) => void),
    cb?: (err: any, data?: ListViewsCommandOutput) => void
  ): Promise<ListViewsCommandOutput> | void {
    const command = new ListViewsCommand(args);
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
   * <p>Searches for resources and displays details about all resources that match the
   *             specified criteria. You must specify a query string.</p>
   *          <p>All search queries must use a view. If you don't explicitly specify a view, then
   *             Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.
   *             The results are the logical intersection of the results that match both the
   *                 <code>QueryString</code> parameter supplied to this operation and the
   *                 <code>SearchFilter</code> parameter attached to the view.</p>
   *          <p>For the complete syntax supported by the <code>QueryString</code> parameter, see
   *                 <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search
   *                 query syntax reference for Resource Explorer</a>.</p>
   *          <p>If your search results are empty, or are missing results that you think should be
   *             there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer
   *                 search</a>.</p>
   */
  public search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
  public search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
  public search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;
  public search(
    args: SearchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchCommandOutput) => void),
    cb?: (err: any, data?: SearchCommandOutput) => void
  ): Promise<SearchCommandOutput> | void {
    const command = new SearchCommand(args);
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
   * <p>Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.</p>
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
   * <p>Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.</p>
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
   * <p>Changes the type of the index from one of the following types to the other. For more
   *             information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on
   *                 cross-Region search by creating an aggregator index</a> in the
   *                 <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>AGGREGATOR</code> index type</b>
   *                </p>
   *                <p>The index contains information about resources from all Amazon Web Services Regions in the
   *                     Amazon Web Services account in which you've created a Resource Explorer index. Resource information from
   *                     all other Regions is replicated to this Region's index.</p>
   *                <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on
   *                     replication of all discovered resource information from the other Amazon Web Services Regions
   *                     in your account to this index. You can then, from this Region only, perform
   *                     resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account.
   *                     Turning on replication from all other Regions is performed by asynchronous
   *                     background tasks. You can check the status of the asynchronous tasks by using
   *                     the <a>GetIndex</a> operation. When the asynchronous tasks complete,
   *                     the <code>Status</code> response of that operation changes from
   *                         <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to
   *                     see results from other Amazon Web Services Regions in query results. However, it can take
   *                     several hours for replication from all other Regions to complete.</p>
   *                <important>
   *                   <p>You can have only one aggregator index per Amazon Web Services account. Before you can
   *                         promote a different index to be the aggregator index for the account, you must
   *                         first demote the existing aggregator index to type <code>LOCAL</code>.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>LOCAL</code> index type</b>
   *                </p>
   *                <p>The index contains information about resources in only the Amazon Web Services Region in
   *                     which the index exists. If an aggregator index in another Region exists, then
   *                     information in this local index is replicated to the aggregator index.</p>
   *                <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the
   *                     replication of resource information from all other Amazon Web Services Regions in the
   *                     Amazon Web Services account to this Region. The aggregator index remains in the
   *                         <code>UPDATING</code> state until all replication with other Regions
   *                     successfully stops. You can check the status of the asynchronous task by using
   *                     the <a>GetIndex</a> operation. When Resource Explorer successfully stops all
   *                     replication with other Regions, the <code>Status</code> response of that
   *                     operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately,
   *                     the resource information from other Regions that was previously stored in the
   *                     index is deleted within 30 days by another background task. Until that
   *                     asynchronous task completes, some results from other Regions can continue to
   *                     appear in search results.</p>
   *                <important>
   *                   <p>After you demote an aggregator index to a local index, you must wait
   *                         24 hours before you can promote another index to be the new
   *                         aggregator index for the account.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  public updateIndexType(
    args: UpdateIndexTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexTypeCommandOutput>;
  public updateIndexType(
    args: UpdateIndexTypeCommandInput,
    cb: (err: any, data?: UpdateIndexTypeCommandOutput) => void
  ): void;
  public updateIndexType(
    args: UpdateIndexTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexTypeCommandOutput) => void
  ): void;
  public updateIndexType(
    args: UpdateIndexTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIndexTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateIndexTypeCommandOutput) => void
  ): Promise<UpdateIndexTypeCommandOutput> | void {
    const command = new UpdateIndexTypeCommand(args);
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
   * <p>Modifies some of the details of a view. You can change the filter string and the list
   *             of included properties. You can't change the name of the view.</p>
   */
  public updateView(args: UpdateViewCommandInput, options?: __HttpHandlerOptions): Promise<UpdateViewCommandOutput>;
  public updateView(args: UpdateViewCommandInput, cb: (err: any, data?: UpdateViewCommandOutput) => void): void;
  public updateView(
    args: UpdateViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateViewCommandOutput) => void
  ): void;
  public updateView(
    args: UpdateViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateViewCommandOutput) => void),
    cb?: (err: any, data?: UpdateViewCommandOutput) => void
  ): Promise<UpdateViewCommandOutput> | void {
    const command = new UpdateViewCommand(args);
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
