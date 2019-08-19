import { ResourceGroupsClient } from "./ResourceGroupsClient";
import { BadRequestException } from "./types/BadRequestException";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetGroupInput } from "./types/GetGroupInput";
import { GetGroupOutput } from "./types/GetGroupOutput";
import { GetGroupQueryInput } from "./types/GetGroupQueryInput";
import { GetGroupQueryOutput } from "./types/GetGroupQueryOutput";
import { GetTagsInput } from "./types/GetTagsInput";
import { GetTagsOutput } from "./types/GetTagsOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListGroupResourcesInput } from "./types/ListGroupResourcesInput";
import { ListGroupResourcesOutput } from "./types/ListGroupResourcesOutput";
import { ListGroupsInput } from "./types/ListGroupsInput";
import { ListGroupsOutput } from "./types/ListGroupsOutput";
import { MethodNotAllowedException } from "./types/MethodNotAllowedException";
import { NotFoundException } from "./types/NotFoundException";
import { SearchResourcesInput } from "./types/SearchResourcesInput";
import { SearchResourcesOutput } from "./types/SearchResourcesOutput";
import { TagInput } from "./types/TagInput";
import { TagOutput } from "./types/TagOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagInput } from "./types/UntagInput";
import { UntagOutput } from "./types/UntagOutput";
import { UpdateGroupInput } from "./types/UpdateGroupInput";
import { UpdateGroupOutput } from "./types/UpdateGroupOutput";
import { UpdateGroupQueryInput } from "./types/UpdateGroupQueryInput";
import { UpdateGroupQueryOutput } from "./types/UpdateGroupQueryOutput";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetGroupQueryCommand } from "./commands/GetGroupQueryCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { ListGroupResourcesCommand } from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { SearchResourcesCommand } from "./commands/SearchResourcesCommand";
import { TagCommand } from "./commands/TagCommand";
import { UntagCommand } from "./commands/UntagCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateGroupQueryCommand } from "./commands/UpdateGroupQueryCommand";

export class ResourceGroups extends ResourceGroupsClient {
  /**
   * <p>Creates a group with a specified name, description, and resource query.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroup(args: CreateGroupInput): Promise<CreateGroupOutput>;
  public createGroup(
    args: CreateGroupInput,
    cb: (err: any, data?: CreateGroupOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupInput,
    cb?: (err: any, data?: CreateGroupOutput) => void
  ): Promise<CreateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified resource group. Deleting a resource group does not delete resources that are members of the group; it only deletes the group structure.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroup(args: DeleteGroupInput): Promise<DeleteGroupOutput>;
  public deleteGroup(
    args: DeleteGroupInput,
    cb: (err: any, data?: DeleteGroupOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupInput,
    cb?: (err: any, data?: DeleteGroupOutput) => void
  ): Promise<DeleteGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specified resource group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroup(args: GetGroupInput): Promise<GetGroupOutput>;
  public getGroup(
    args: GetGroupInput,
    cb: (err: any, data?: GetGroupOutput) => void
  ): void;
  public getGroup(
    args: GetGroupInput,
    cb?: (err: any, data?: GetGroupOutput) => void
  ): Promise<GetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the resource query associated with the specified resource group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroupQuery(args: GetGroupQueryInput): Promise<GetGroupQueryOutput>;
  public getGroupQuery(
    args: GetGroupQueryInput,
    cb: (err: any, data?: GetGroupQueryOutput) => void
  ): void;
  public getGroupQuery(
    args: GetGroupQueryInput,
    cb?: (err: any, data?: GetGroupQueryOutput) => void
  ): Promise<GetGroupQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of tags that are associated with a resource group, specified by an ARN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTags(args: GetTagsInput): Promise<GetTagsOutput>;
  public getTags(
    args: GetTagsInput,
    cb: (err: any, data?: GetTagsOutput) => void
  ): void;
  public getTags(
    args: GetTagsInput,
    cb?: (err: any, data?: GetTagsOutput) => void
  ): Promise<GetTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of ARNs of resources that are members of a specified resource group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request has not been applied because it lacks valid authentication credentials for the target resource.</p>
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupResources(
    args: ListGroupResourcesInput
  ): Promise<ListGroupResourcesOutput>;
  public listGroupResources(
    args: ListGroupResourcesInput,
    cb: (err: any, data?: ListGroupResourcesOutput) => void
  ): void;
  public listGroupResources(
    args: ListGroupResourcesInput,
    cb?: (err: any, data?: ListGroupResourcesOutput) => void
  ): Promise<ListGroupResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of existing resource groups in your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroups(args: ListGroupsInput): Promise<ListGroupsOutput>;
  public listGroups(
    args: ListGroupsInput,
    cb: (err: any, data?: ListGroupsOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsInput,
    cb?: (err: any, data?: ListGroupsOutput) => void
  ): Promise<ListGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of AWS resource identifiers that matches a specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request has not been applied because it lacks valid authentication credentials for the target resource.</p>
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchResources(
    args: SearchResourcesInput
  ): Promise<SearchResourcesOutput>;
  public searchResources(
    args: SearchResourcesInput,
    cb: (err: any, data?: SearchResourcesOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesInput,
    cb?: (err: any, data?: SearchResourcesOutput) => void
  ): Promise<SearchResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tag(args: TagInput): Promise<TagOutput>;
  public tag(args: TagInput, cb: (err: any, data?: TagOutput) => void): void;
  public tag(
    args: TagInput,
    cb?: (err: any, data?: TagOutput) => void
  ): Promise<TagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes specified tags from a specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untag(args: UntagInput): Promise<UntagOutput>;
  public untag(
    args: UntagInput,
    cb: (err: any, data?: UntagOutput) => void
  ): void;
  public untag(
    args: UntagInput,
    cb?: (err: any, data?: UntagOutput) => void
  ): Promise<UntagOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing group with a new or changed description. You cannot update the name of a resource group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroup(args: UpdateGroupInput): Promise<UpdateGroupOutput>;
  public updateGroup(
    args: UpdateGroupInput,
    cb: (err: any, data?: UpdateGroupOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupInput,
    cb?: (err: any, data?: UpdateGroupOutput) => void
  ): Promise<UpdateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the resource query of a group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request does not comply with validation rules that are defined for the request parameters.</p>
   *   - {ForbiddenException} <p>The caller is not authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more resources specified in the request do not exist.</p>
   *   - {MethodNotAllowedException} <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
   *   - {TooManyRequestsException} <p>The caller has exceeded throttling limits.</p>
   *   - {InternalServerErrorException} <p>An internal error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroupQuery(
    args: UpdateGroupQueryInput
  ): Promise<UpdateGroupQueryOutput>;
  public updateGroupQuery(
    args: UpdateGroupQueryInput,
    cb: (err: any, data?: UpdateGroupQueryOutput) => void
  ): void;
  public updateGroupQuery(
    args: UpdateGroupQueryInput,
    cb?: (err: any, data?: UpdateGroupQueryOutput) => void
  ): Promise<UpdateGroupQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
