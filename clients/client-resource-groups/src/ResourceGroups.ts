import { ResourceGroupsClient } from "./ResourceGroupsClient";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetGroupConfigurationCommand,
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
} from "./commands/GetGroupConfigurationCommand";
import {
  GetGroupQueryCommand,
  GetGroupQueryCommandInput,
  GetGroupQueryCommandOutput,
} from "./commands/GetGroupQueryCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import {
  GroupResourcesCommand,
  GroupResourcesCommandInput,
  GroupResourcesCommandOutput,
} from "./commands/GroupResourcesCommand";
import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "./commands/SearchResourcesCommand";
import { TagCommand, TagCommandInput, TagCommandOutput } from "./commands/TagCommand";
import {
  UngroupResourcesCommand,
  UngroupResourcesCommandInput,
  UngroupResourcesCommandOutput,
} from "./commands/UngroupResourcesCommand";
import { UntagCommand, UntagCommandInput, UntagCommandOutput } from "./commands/UntagCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateGroupQueryCommand,
  UpdateGroupQueryCommandInput,
  UpdateGroupQueryCommandOutput,
} from "./commands/UpdateGroupQueryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Resource Groups</fullname>
 *
 *         <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service
 *             databases, and Amazon S3 buckets into groups using criteria that you define as tags. A
 *             resource group is a collection of resources that match the resource types specified in a
 *             query, and share one or more tags or portions of tags. You can create a group of
 *             resources based on their roles in your cloud infrastructure, lifecycle stages, regions,
 *             application layers, or virtually any criteria. Resource Groups enable you to automate management
 *             tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in
 *             AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in
 *             AWS Systems Manager that shows AWS Config compliance and other monitoring data about member
 *             resources.</p>
 *         <p>To create a resource group, build a resource query, and specify tags that identify the
 *             criteria that members of the group have in common. Tags are key-value pairs.</p>
 *         <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">AWS Resource Groups User Guide</a>.</p>
 *         <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of
 *             operations.</p>
 *         <ul>
 *             <li>
 *                 <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and
 *                     resource query entities</p>
 *             </li>
 *             <li>
 *                 <p>Applying, editing, and removing tags from resource groups</p>
 *             </li>
 *             <li>
 *                 <p>Resolving resource group member ARNs so they can be returned as search
 *                     results</p>
 *             </li>
 *             <li>
 *                 <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                 <p>Searching AWS resources based on a resource query</p>
 *             </li>
 *          </ul>
 */
export class ResourceGroups extends ResourceGroupsClient {
  /**
   * <p>Creates a resource group with the specified name and description. You can optionally
   *             include a resource query, or a service configuration.</p>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
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
   * <p>Deletes the specified resource group. Deleting a resource group does not delete any
   *             resources that are members of the group; it only deletes the group structure.</p>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
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
   * <p>Returns information about a specified resource group.</p>
   */
  public getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  public getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  public getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  public getGroup(
    args: GetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCommandOutput) => void
  ): Promise<GetGroupCommandOutput> | void {
    const command = new GetGroupCommand(args);
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
   * <p>Returns the service configuration associated with the specified resource group. AWS
   *             Resource Groups supports configurations for the following resource group types:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AWS::EC2::CapacityReservationPool</code> - Amazon EC2 capacity
   *                     reservation pools. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-reservations-using.html#create-cr-group">Working with capacity reservation groups</a> in the <i>EC2 Users
   *                         Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupConfigurationCommandOutput>;
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): Promise<GetGroupConfigurationCommandOutput> | void {
    const command = new GetGroupConfigurationCommand(args);
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
   * <p>Retrieves the resource query associated with the specified resource group.</p>
   */
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupQueryCommandOutput>;
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupQueryCommandOutput) => void),
    cb?: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): Promise<GetGroupQueryCommandOutput> | void {
    const command = new GetGroupQueryCommand(args);
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
   * <p>Returns a list of tags that are associated with a resource group, specified by an
   *             ARN.</p>
   */
  public getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  public getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
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
   * <p>Adds the specified resources to the specified group.</p>
   */
  public groupResources(
    args: GroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GroupResourcesCommandOutput>;
  public groupResources(
    args: GroupResourcesCommandInput,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
  ): void;
  public groupResources(
    args: GroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
  ): void;
  public groupResources(
    args: GroupResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GroupResourcesCommandOutput) => void),
    cb?: (err: any, data?: GroupResourcesCommandOutput) => void
  ): Promise<GroupResourcesCommandOutput> | void {
    const command = new GroupResourcesCommand(args);
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
   * <p>Returns a list of ARNs of the resources that are members of a specified resource
   *             group.</p>
   */
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupResourcesCommandOutput>;
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): Promise<ListGroupResourcesCommandOutput> | void {
    const command = new ListGroupResourcesCommand(args);
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
   * <p>Returns a list of existing resource groups in your account.</p>
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
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
   * <p>Returns a list of AWS resource identifiers that matches the specified query. The
   *             query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery
   *             operation.</p>
   */
  public searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  public searchResources(
    args: SearchResourcesCommandInput,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchResourcesCommandOutput) => void),
    cb?: (err: any, data?: SearchResourcesCommandOutput) => void
  ): Promise<SearchResourcesCommandOutput> | void {
    const command = new SearchResourcesCommand(args);
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
   * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource
   *             group are not changed if they are not specified in the request parameters.</p>
   *         <important>
   *             <p>Do not store personally identifiable information (PII) or other confidential or
   *                 sensitive information in tags. We use tags to provide you with billing and
   *                 administration services. Tags are not intended to be used for private or sensitive
   *                 data.</p>
   *         </important>
   */
  public tag(args: TagCommandInput, options?: __HttpHandlerOptions): Promise<TagCommandOutput>;
  public tag(args: TagCommandInput, cb: (err: any, data?: TagCommandOutput) => void): void;
  public tag(
    args: TagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagCommandOutput) => void
  ): void;
  public tag(
    args: TagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagCommandOutput) => void),
    cb?: (err: any, data?: TagCommandOutput) => void
  ): Promise<TagCommandOutput> | void {
    const command = new TagCommand(args);
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
   * <p>Removes the specified resources from the specified group.</p>
   */
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UngroupResourcesCommandOutput>;
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UngroupResourcesCommandOutput) => void),
    cb?: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): Promise<UngroupResourcesCommandOutput> | void {
    const command = new UngroupResourcesCommand(args);
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
   * <p>Deletes tags from a specified resource group.</p>
   */
  public untag(args: UntagCommandInput, options?: __HttpHandlerOptions): Promise<UntagCommandOutput>;
  public untag(args: UntagCommandInput, cb: (err: any, data?: UntagCommandOutput) => void): void;
  public untag(
    args: UntagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagCommandOutput) => void
  ): void;
  public untag(
    args: UntagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagCommandOutput) => void),
    cb?: (err: any, data?: UntagCommandOutput) => void
  ): Promise<UntagCommandOutput> | void {
    const command = new UntagCommand(args);
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
   * <p>Updates the description for an existing group. You cannot update the name of a
   *             resource group.</p>
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
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
   * <p>Updates the resource query of a group.</p>
   */
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupQueryCommandOutput>;
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupQueryCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): Promise<UpdateGroupQueryCommandOutput> | void {
    const command = new UpdateGroupQueryCommand(args);
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
