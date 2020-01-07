import { CodeStarClient } from "./CodeStarClient";
import { AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput } from "./commands/AssociateTeamMemberCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput } from "./commands/DescribeUserProfileCommand";
import { DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput } from "./commands/DisassociateTeamMemberCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput } from "./commands/ListTagsForProjectCommand";
import { ListTeamMembersCommandInput, ListTeamMembersCommandOutput } from "./commands/ListTeamMembersCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import { TagProjectCommandInput, TagProjectCommandOutput } from "./commands/TagProjectCommand";
import { UntagProjectCommandInput, UntagProjectCommandOutput } from "./commands/UntagProjectCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput } from "./commands/UpdateTeamMemberCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class CodeStar extends CodeStarClient {
    /**
     * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
     */
    associateTeamMember(args: AssociateTeamMemberCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTeamMemberCommandOutput>;
    associateTeamMember(args: AssociateTeamMemberCommandInput, cb: (err: any, data?: AssociateTeamMemberCommandOutput) => void): void;
    associateTeamMember(args: AssociateTeamMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTeamMemberCommandOutput) => void): void;
    /**
     * <p>Creates a project, including project resources. This action creates a project based on
     *       a submitted project request. A set of source code files and a toolchain template file
     *       can be included with the project request. If these are not provided, an empty project is created.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Creates a profile for a user that includes user preferences, such as the display name
     *       and email address assocciated with the user, in AWS CodeStar. The user profile is not
     *       project-specific. Information in the user profile is displayed wherever the user's information
     *       appears to other users in AWS CodeStar.</p>
     */
    createUserProfile(args: CreateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserProfileCommandOutput>;
    createUserProfile(args: CreateUserProfileCommandInput, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    createUserProfile(args: CreateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    /**
     * <p>Deletes a project, including project resources. Does not delete users associated with
     *       the project, but does delete the IAM roles that allowed access to the project.</p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Deletes a user profile in AWS CodeStar, including all personal preference data associated with
     *       that profile, such as display name and email address. It does not delete the history of that
     *       user, for example the history of commits made by that user.</p>
     */
    deleteUserProfile(args: DeleteUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserProfileCommandOutput>;
    deleteUserProfile(args: DeleteUserProfileCommandInput, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    deleteUserProfile(args: DeleteUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    /**
     * <p>Describes a project and its resources.</p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
     */
    describeUserProfile(args: DescribeUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserProfileCommandOutput>;
    describeUserProfile(args: DescribeUserProfileCommandInput, cb: (err: any, data?: DescribeUserProfileCommandOutput) => void): void;
    describeUserProfile(args: DescribeUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserProfileCommandOutput) => void): void;
    /**
     * <p>Removes a user from a project. Removing a user from a project also removes the IAM
     *       policies from that user that allowed access to the project and its resources. Disassociating a
     *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
     *       IAM.</p>
     */
    disassociateTeamMember(args: DisassociateTeamMemberCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateTeamMemberCommandOutput>;
    disassociateTeamMember(args: DisassociateTeamMemberCommandInput, cb: (err: any, data?: DisassociateTeamMemberCommandOutput) => void): void;
    disassociateTeamMember(args: DisassociateTeamMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateTeamMemberCommandOutput) => void): void;
    /**
     * <p>Lists all projects in AWS CodeStar associated with your AWS account.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Lists resources associated with a project in AWS CodeStar.</p>
     */
    listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
    listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    listResources(args: ListResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    /**
     * <p>Gets the tags for a project.</p>
     */
    listTagsForProject(args: ListTagsForProjectCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForProjectCommandOutput>;
    listTagsForProject(args: ListTagsForProjectCommandInput, cb: (err: any, data?: ListTagsForProjectCommandOutput) => void): void;
    listTagsForProject(args: ListTagsForProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForProjectCommandOutput) => void): void;
    /**
     * <p>Lists all team members associated with a project.</p>
     */
    listTeamMembers(args: ListTeamMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListTeamMembersCommandOutput>;
    listTeamMembers(args: ListTeamMembersCommandInput, cb: (err: any, data?: ListTeamMembersCommandOutput) => void): void;
    listTeamMembers(args: ListTeamMembersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTeamMembersCommandOutput) => void): void;
    /**
     * <p>Lists all the user profiles configured for your AWS account in AWS CodeStar.</p>
     */
    listUserProfiles(args: ListUserProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListUserProfilesCommandOutput>;
    listUserProfiles(args: ListUserProfilesCommandInput, cb: (err: any, data?: ListUserProfilesCommandOutput) => void): void;
    listUserProfiles(args: ListUserProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserProfilesCommandOutput) => void): void;
    /**
     * <p>Adds tags to a project.</p>
     */
    tagProject(args: TagProjectCommandInput, options?: __HttpHandlerOptions): Promise<TagProjectCommandOutput>;
    tagProject(args: TagProjectCommandInput, cb: (err: any, data?: TagProjectCommandOutput) => void): void;
    tagProject(args: TagProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagProjectCommandOutput) => void): void;
    /**
     * <p>Removes tags from a project.</p>
     */
    untagProject(args: UntagProjectCommandInput, options?: __HttpHandlerOptions): Promise<UntagProjectCommandOutput>;
    untagProject(args: UntagProjectCommandInput, cb: (err: any, data?: UntagProjectCommandOutput) => void): void;
    untagProject(args: UntagProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagProjectCommandOutput) => void): void;
    /**
     * <p>Updates a project in AWS CodeStar.</p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    /**
     * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
     *       team member's role in the project, or change whether they have remote access to project
     *       resources.</p>
     */
    updateTeamMember(args: UpdateTeamMemberCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTeamMemberCommandOutput>;
    updateTeamMember(args: UpdateTeamMemberCommandInput, cb: (err: any, data?: UpdateTeamMemberCommandOutput) => void): void;
    updateTeamMember(args: UpdateTeamMemberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTeamMemberCommandOutput) => void): void;
    /**
     * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
     *       Information in the user profile is displayed wherever the user's information appears to other
     *       users in AWS CodeStar. </p>
     */
    updateUserProfile(args: UpdateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserProfileCommandOutput>;
    updateUserProfile(args: UpdateUserProfileCommandInput, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    updateUserProfile(args: UpdateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
}
