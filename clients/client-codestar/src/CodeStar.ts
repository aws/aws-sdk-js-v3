// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodeStarClient } from "./CodeStarClient";
import {
  AssociateTeamMemberCommand,
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
} from "./commands/AssociateTeamMemberCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateUserProfileCommand,
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteUserProfileCommand,
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
} from "./commands/DeleteUserProfileCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DescribeUserProfileCommand,
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand";
import {
  DisassociateTeamMemberCommand,
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
} from "./commands/DisassociateTeamMemberCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  ListTagsForProjectCommand,
  ListTagsForProjectCommandInput,
  ListTagsForProjectCommandOutput,
} from "./commands/ListTagsForProjectCommand";
import {
  ListTeamMembersCommand,
  ListTeamMembersCommandInput,
  ListTeamMembersCommandOutput,
} from "./commands/ListTeamMembersCommand";
import {
  ListUserProfilesCommand,
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput,
} from "./commands/ListUserProfilesCommand";
import { TagProjectCommand, TagProjectCommandInput, TagProjectCommandOutput } from "./commands/TagProjectCommand";
import {
  UntagProjectCommand,
  UntagProjectCommandInput,
  UntagProjectCommandOutput,
} from "./commands/UntagProjectCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import {
  UpdateTeamMemberCommand,
  UpdateTeamMemberCommandInput,
  UpdateTeamMemberCommandOutput,
} from "./commands/UpdateTeamMemberCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";

/**
 * <fullname>AWS CodeStar</fullname>
 *          <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the
 *       operations and data types for the AWS CodeStar API along with usage examples.</p>
 *          <p>You can use the AWS CodeStar API to work with:</p>
 *          <p>Projects and their resources, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>, which deletes a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeProject</code>, which lists the attributes of a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>, which lists all projects associated with your AWS
 *           account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListResources</code>, which lists the resources associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForProject</code>, which lists the tags associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TagProject</code>, which adds tags to a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UntagProject</code>, which removes tags from a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>, which updates the attributes of a project.</p>
 *             </li>
 *          </ul>
 *          <p>Teams and team members, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateTeamMember</code>, which adds an IAM user to the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTeamMembers</code>, which lists all the IAM users in the team for a
 *           project, including their roles and attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateTeamMember</code>, which updates a team member's attributes in a
 *           project.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateUserProfile</code>, which creates a user profile that contains data
 *           associated with the user across all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteUserProfile</code>, which deletes all user profile information across
 *           all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeUserProfile</code>, which describes the profile of a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListUserProfiles</code>, which lists all user profiles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateUserProfile</code>, which updates the profile for a user.</p>
 *             </li>
 *          </ul>
 */
export class CodeStar extends CodeStarClient {
  /**
   * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
   */
  public associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTeamMemberCommandOutput>;
  public associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    cb: (err: any, data?: AssociateTeamMemberCommandOutput) => void
  ): void;
  public associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTeamMemberCommandOutput) => void
  ): void;
  public associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateTeamMemberCommandOutput) => void),
    cb?: (err: any, data?: AssociateTeamMemberCommandOutput) => void
  ): Promise<AssociateTeamMemberCommandOutput> | void {
    const command = new AssociateTeamMemberCommand(args);
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
   * <p>Creates a project, including project resources. This action creates a project based on
   *       a submitted project request. A set of source code files and a toolchain template file
   *       can be included with the project request. If these are not provided, an empty project is created.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
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
   * <p>Creates a profile for a user that includes user preferences, such as the display name
   *       and email address assocciated with the user, in AWS CodeStar. The user profile is not
   *       project-specific. Information in the user profile is displayed wherever the user's information
   *       appears to other users in AWS CodeStar.</p>
   */
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): Promise<CreateUserProfileCommandOutput> | void {
    const command = new CreateUserProfileCommand(args);
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
   * <p>Deletes a project, including project resources. Does not delete users associated with
   *       the project, but does delete the IAM roles that allowed access to the project.</p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
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
   * <p>Deletes a user profile in AWS CodeStar, including all personal preference data associated with
   *       that profile, such as display name and email address. It does not delete the history of that
   *       user, for example the history of commits made by that user.</p>
   */
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserProfileCommandOutput>;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): Promise<DeleteUserProfileCommandOutput> | void {
    const command = new DeleteUserProfileCommand(args);
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
   * <p>Describes a project and its resources.</p>
   */
  public describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  public describeProject(
    args: DescribeProjectCommandInput,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProjectCommandOutput) => void),
    cb?: (err: any, data?: DescribeProjectCommandOutput) => void
  ): Promise<DescribeProjectCommandOutput> | void {
    const command = new DescribeProjectCommand(args);
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
   * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
   */
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserProfileCommandOutput>;
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;
  public describeUserProfile(
    args: DescribeUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserProfileCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): Promise<DescribeUserProfileCommandOutput> | void {
    const command = new DescribeUserProfileCommand(args);
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
   * <p>Removes a user from a project. Removing a user from a project also removes the IAM
   *       policies from that user that allowed access to the project and its resources. Disassociating a
   *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
   *       IAM.</p>
   */
  public disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTeamMemberCommandOutput>;
  public disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    cb: (err: any, data?: DisassociateTeamMemberCommandOutput) => void
  ): void;
  public disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTeamMemberCommandOutput) => void
  ): void;
  public disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateTeamMemberCommandOutput) => void),
    cb?: (err: any, data?: DisassociateTeamMemberCommandOutput) => void
  ): Promise<DisassociateTeamMemberCommandOutput> | void {
    const command = new DisassociateTeamMemberCommand(args);
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
   * <p>Lists all projects in AWS CodeStar associated with your AWS account.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
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
   * <p>Lists resources associated with a project in AWS CodeStar.</p>
   */
  public listResources(
    args: ListResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesCommandOutput>;
  public listResources(
    args: ListResourcesCommandInput,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesCommandOutput) => void
  ): Promise<ListResourcesCommandOutput> | void {
    const command = new ListResourcesCommand(args);
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
   * <p>Gets the tags for a project.</p>
   */
  public listTagsForProject(
    args: ListTagsForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForProjectCommandOutput>;
  public listTagsForProject(
    args: ListTagsForProjectCommandInput,
    cb: (err: any, data?: ListTagsForProjectCommandOutput) => void
  ): void;
  public listTagsForProject(
    args: ListTagsForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForProjectCommandOutput) => void
  ): void;
  public listTagsForProject(
    args: ListTagsForProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForProjectCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForProjectCommandOutput) => void
  ): Promise<ListTagsForProjectCommandOutput> | void {
    const command = new ListTagsForProjectCommand(args);
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
   * <p>Lists all team members associated with a project.</p>
   */
  public listTeamMembers(
    args: ListTeamMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTeamMembersCommandOutput>;
  public listTeamMembers(
    args: ListTeamMembersCommandInput,
    cb: (err: any, data?: ListTeamMembersCommandOutput) => void
  ): void;
  public listTeamMembers(
    args: ListTeamMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTeamMembersCommandOutput) => void
  ): void;
  public listTeamMembers(
    args: ListTeamMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTeamMembersCommandOutput) => void),
    cb?: (err: any, data?: ListTeamMembersCommandOutput) => void
  ): Promise<ListTeamMembersCommandOutput> | void {
    const command = new ListTeamMembersCommand(args);
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
   * <p>Lists all the user profiles configured for your AWS account in AWS CodeStar.</p>
   */
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserProfilesCommandOutput>;
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;
  public listUserProfiles(
    args: ListUserProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUserProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): Promise<ListUserProfilesCommandOutput> | void {
    const command = new ListUserProfilesCommand(args);
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
   * <p>Adds tags to a project.</p>
   */
  public tagProject(args: TagProjectCommandInput, options?: __HttpHandlerOptions): Promise<TagProjectCommandOutput>;
  public tagProject(args: TagProjectCommandInput, cb: (err: any, data?: TagProjectCommandOutput) => void): void;
  public tagProject(
    args: TagProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagProjectCommandOutput) => void
  ): void;
  public tagProject(
    args: TagProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagProjectCommandOutput) => void),
    cb?: (err: any, data?: TagProjectCommandOutput) => void
  ): Promise<TagProjectCommandOutput> | void {
    const command = new TagProjectCommand(args);
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
   * <p>Removes tags from a project.</p>
   */
  public untagProject(
    args: UntagProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagProjectCommandOutput>;
  public untagProject(args: UntagProjectCommandInput, cb: (err: any, data?: UntagProjectCommandOutput) => void): void;
  public untagProject(
    args: UntagProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagProjectCommandOutput) => void
  ): void;
  public untagProject(
    args: UntagProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagProjectCommandOutput) => void),
    cb?: (err: any, data?: UntagProjectCommandOutput) => void
  ): Promise<UntagProjectCommandOutput> | void {
    const command = new UntagProjectCommand(args);
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
   * <p>Updates a project in AWS CodeStar.</p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
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
   * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
   *       team member's role in the project, or change whether they have remote access to project
   *       resources.</p>
   */
  public updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTeamMemberCommandOutput>;
  public updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    cb: (err: any, data?: UpdateTeamMemberCommandOutput) => void
  ): void;
  public updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTeamMemberCommandOutput) => void
  ): void;
  public updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTeamMemberCommandOutput) => void),
    cb?: (err: any, data?: UpdateTeamMemberCommandOutput) => void
  ): Promise<UpdateTeamMemberCommandOutput> | void {
    const command = new UpdateTeamMemberCommand(args);
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
   * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
   *       Information in the user profile is displayed wherever the user's information appears to other
   *       users in AWS CodeStar. </p>
   */
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): Promise<UpdateUserProfileCommandOutput> | void {
    const command = new UpdateUserProfileCommand(args);
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
