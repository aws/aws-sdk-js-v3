// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeStarClient, CodeStarClientConfig } from "./CodeStarClient";
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

const commands = {
  AssociateTeamMemberCommand,
  CreateProjectCommand,
  CreateUserProfileCommand,
  DeleteProjectCommand,
  DeleteUserProfileCommand,
  DescribeProjectCommand,
  DescribeUserProfileCommand,
  DisassociateTeamMemberCommand,
  ListProjectsCommand,
  ListResourcesCommand,
  ListTagsForProjectCommand,
  ListTeamMembersCommand,
  ListUserProfilesCommand,
  TagProjectCommand,
  UntagProjectCommand,
  UpdateProjectCommand,
  UpdateTeamMemberCommand,
  UpdateUserProfileCommand,
};

export interface CodeStar {
  /**
   * @see {@link AssociateTeamMemberCommand}
   */
  associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTeamMemberCommandOutput>;
  associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    cb: (err: any, data?: AssociateTeamMemberCommandOutput) => void
  ): void;
  associateTeamMember(
    args: AssociateTeamMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTeamMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserProfileCommand}
   */
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserProfileCommand}
   */
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserProfileCommandOutput>;
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectCommand}
   */
  describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
  describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserProfileCommand}
   */
  describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserProfileCommandOutput>;
  describeUserProfile(
    args: DescribeUserProfileCommandInput,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;
  describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTeamMemberCommand}
   */
  disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTeamMemberCommandOutput>;
  disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    cb: (err: any, data?: DisassociateTeamMemberCommandOutput) => void
  ): void;
  disassociateTeamMember(
    args: DisassociateTeamMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTeamMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForProjectCommand}
   */
  listTagsForProject(
    args: ListTagsForProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForProjectCommandOutput>;
  listTagsForProject(
    args: ListTagsForProjectCommandInput,
    cb: (err: any, data?: ListTagsForProjectCommandOutput) => void
  ): void;
  listTagsForProject(
    args: ListTagsForProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTeamMembersCommand}
   */
  listTeamMembers(
    args: ListTeamMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTeamMembersCommandOutput>;
  listTeamMembers(args: ListTeamMembersCommandInput, cb: (err: any, data?: ListTeamMembersCommandOutput) => void): void;
  listTeamMembers(
    args: ListTeamMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTeamMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserProfilesCommand}
   */
  listUserProfiles(
    args: ListUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserProfilesCommandOutput>;
  listUserProfiles(
    args: ListUserProfilesCommandInput,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;
  listUserProfiles(
    args: ListUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagProjectCommand}
   */
  tagProject(args: TagProjectCommandInput, options?: __HttpHandlerOptions): Promise<TagProjectCommandOutput>;
  tagProject(args: TagProjectCommandInput, cb: (err: any, data?: TagProjectCommandOutput) => void): void;
  tagProject(
    args: TagProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagProjectCommand}
   */
  untagProject(args: UntagProjectCommandInput, options?: __HttpHandlerOptions): Promise<UntagProjectCommandOutput>;
  untagProject(args: UntagProjectCommandInput, cb: (err: any, data?: UntagProjectCommandOutput) => void): void;
  untagProject(
    args: UntagProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTeamMemberCommand}
   */
  updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTeamMemberCommandOutput>;
  updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    cb: (err: any, data?: UpdateTeamMemberCommandOutput) => void
  ): void;
  updateTeamMember(
    args: UpdateTeamMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTeamMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserProfileCommand}
   */
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class CodeStar extends CodeStarClient implements CodeStar {}
createAggregatedClient(commands, CodeStar);
