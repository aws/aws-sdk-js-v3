import { CodeStarClient } from "./CodeStarClient";
import { AssociateTeamMemberInput } from "./types/AssociateTeamMemberInput";
import { AssociateTeamMemberOutput } from "./types/AssociateTeamMemberOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateProjectInput } from "./types/CreateProjectInput";
import { CreateProjectOutput } from "./types/CreateProjectOutput";
import { CreateUserProfileInput } from "./types/CreateUserProfileInput";
import { CreateUserProfileOutput } from "./types/CreateUserProfileOutput";
import { DeleteProjectInput } from "./types/DeleteProjectInput";
import { DeleteProjectOutput } from "./types/DeleteProjectOutput";
import { DeleteUserProfileInput } from "./types/DeleteUserProfileInput";
import { DeleteUserProfileOutput } from "./types/DeleteUserProfileOutput";
import { DescribeProjectInput } from "./types/DescribeProjectInput";
import { DescribeProjectOutput } from "./types/DescribeProjectOutput";
import { DescribeUserProfileInput } from "./types/DescribeUserProfileInput";
import { DescribeUserProfileOutput } from "./types/DescribeUserProfileOutput";
import { DisassociateTeamMemberInput } from "./types/DisassociateTeamMemberInput";
import { DisassociateTeamMemberOutput } from "./types/DisassociateTeamMemberOutput";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidServiceRoleException } from "./types/InvalidServiceRoleException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListProjectsInput } from "./types/ListProjectsInput";
import { ListProjectsOutput } from "./types/ListProjectsOutput";
import { ListResourcesInput } from "./types/ListResourcesInput";
import { ListResourcesOutput } from "./types/ListResourcesOutput";
import { ListTagsForProjectInput } from "./types/ListTagsForProjectInput";
import { ListTagsForProjectOutput } from "./types/ListTagsForProjectOutput";
import { ListTeamMembersInput } from "./types/ListTeamMembersInput";
import { ListTeamMembersOutput } from "./types/ListTeamMembersOutput";
import { ListUserProfilesInput } from "./types/ListUserProfilesInput";
import { ListUserProfilesOutput } from "./types/ListUserProfilesOutput";
import { ProjectAlreadyExistsException } from "./types/ProjectAlreadyExistsException";
import { ProjectConfigurationException } from "./types/ProjectConfigurationException";
import { ProjectCreationFailedException } from "./types/ProjectCreationFailedException";
import { ProjectNotFoundException } from "./types/ProjectNotFoundException";
import { TagProjectInput } from "./types/TagProjectInput";
import { TagProjectOutput } from "./types/TagProjectOutput";
import { TeamMemberAlreadyAssociatedException } from "./types/TeamMemberAlreadyAssociatedException";
import { TeamMemberNotFoundException } from "./types/TeamMemberNotFoundException";
import { UntagProjectInput } from "./types/UntagProjectInput";
import { UntagProjectOutput } from "./types/UntagProjectOutput";
import { UpdateProjectInput } from "./types/UpdateProjectInput";
import { UpdateProjectOutput } from "./types/UpdateProjectOutput";
import { UpdateTeamMemberInput } from "./types/UpdateTeamMemberInput";
import { UpdateTeamMemberOutput } from "./types/UpdateTeamMemberOutput";
import { UpdateUserProfileInput } from "./types/UpdateUserProfileInput";
import { UpdateUserProfileOutput } from "./types/UpdateUserProfileOutput";
import { UserProfileAlreadyExistsException } from "./types/UserProfileAlreadyExistsException";
import { UserProfileNotFoundException } from "./types/UserProfileNotFoundException";
import { ValidationException } from "./types/ValidationException";
import { AssociateTeamMemberCommand } from "./commands/AssociateTeamMemberCommand";
import { CreateProjectCommand } from "./commands/CreateProjectCommand";
import { CreateUserProfileCommand } from "./commands/CreateUserProfileCommand";
import { DeleteProjectCommand } from "./commands/DeleteProjectCommand";
import { DeleteUserProfileCommand } from "./commands/DeleteUserProfileCommand";
import { DescribeProjectCommand } from "./commands/DescribeProjectCommand";
import { DescribeUserProfileCommand } from "./commands/DescribeUserProfileCommand";
import { DisassociateTeamMemberCommand } from "./commands/DisassociateTeamMemberCommand";
import { ListProjectsCommand } from "./commands/ListProjectsCommand";
import { ListResourcesCommand } from "./commands/ListResourcesCommand";
import { ListTagsForProjectCommand } from "./commands/ListTagsForProjectCommand";
import { ListTeamMembersCommand } from "./commands/ListTeamMembersCommand";
import { ListUserProfilesCommand } from "./commands/ListUserProfilesCommand";
import { TagProjectCommand } from "./commands/TagProjectCommand";
import { UntagProjectCommand } from "./commands/UntagProjectCommand";
import { UpdateProjectCommand } from "./commands/UpdateProjectCommand";
import { UpdateTeamMemberCommand } from "./commands/UpdateTeamMemberCommand";
import { UpdateUserProfileCommand } from "./commands/UpdateUserProfileCommand";

export class CodeStar extends CodeStarClient {
  /**
   * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>A resource limit has been exceeded.</p>
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {TeamMemberAlreadyAssociatedException} <p>The team member is already associated with a role in this project.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {InvalidServiceRoleException} <p>The service role is not valid.</p>
   *   - {ProjectConfigurationException} <p>Project configuration information is required but not specified.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateTeamMember(
    args: AssociateTeamMemberInput
  ): Promise<AssociateTeamMemberOutput>;
  public associateTeamMember(
    args: AssociateTeamMemberInput,
    cb: (err: any, data?: AssociateTeamMemberOutput) => void
  ): void;
  public associateTeamMember(
    args: AssociateTeamMemberInput,
    cb?: (err: any, data?: AssociateTeamMemberOutput) => void
  ): Promise<AssociateTeamMemberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateTeamMemberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectAlreadyExistsException} <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account. AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
   *   - {LimitExceededException} <p>A resource limit has been exceeded.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {ProjectCreationFailedException} <p>The project creation request was valid, but a nonspecific exception or error occurred during project creation. The project could not be created in AWS CodeStar.</p>
   *   - {InvalidServiceRoleException} <p>The service role is not valid.</p>
   *   - {ProjectConfigurationException} <p>Project configuration information is required but not specified.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProject(args: CreateProjectInput): Promise<CreateProjectOutput>;
  public createProject(
    args: CreateProjectInput,
    cb: (err: any, data?: CreateProjectOutput) => void
  ): void;
  public createProject(
    args: CreateProjectInput,
    cb?: (err: any, data?: CreateProjectOutput) => void
  ): Promise<CreateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UserProfileAlreadyExistsException} <p>A user profile with that name already exists in this region for the AWS account. AWS CodeStar user profile names must be unique within a region for the AWS account. </p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUserProfile(
    args: CreateUserProfileInput
  ): Promise<CreateUserProfileOutput>;
  public createUserProfile(
    args: CreateUserProfileInput,
    cb: (err: any, data?: CreateUserProfileOutput) => void
  ): void;
  public createUserProfile(
    args: CreateUserProfileInput,
    cb?: (err: any, data?: CreateUserProfileOutput) => void
  ): Promise<CreateUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {InvalidServiceRoleException} <p>The service role is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProject(args: DeleteProjectInput): Promise<DeleteProjectOutput>;
  public deleteProject(
    args: DeleteProjectInput,
    cb: (err: any, data?: DeleteProjectOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectInput,
    cb?: (err: any, data?: DeleteProjectOutput) => void
  ): Promise<DeleteProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserProfile(
    args: DeleteUserProfileInput
  ): Promise<DeleteUserProfileOutput>;
  public deleteUserProfile(
    args: DeleteUserProfileInput,
    cb: (err: any, data?: DeleteUserProfileOutput) => void
  ): void;
  public deleteUserProfile(
    args: DeleteUserProfileInput,
    cb?: (err: any, data?: DeleteUserProfileOutput) => void
  ): Promise<DeleteUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a project and its resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {InvalidServiceRoleException} <p>The service role is not valid.</p>
   *   - {ProjectConfigurationException} <p>Project configuration information is required but not specified.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProject(
    args: DescribeProjectInput
  ): Promise<DescribeProjectOutput>;
  public describeProject(
    args: DescribeProjectInput,
    cb: (err: any, data?: DescribeProjectOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectInput,
    cb?: (err: any, data?: DescribeProjectOutput) => void
  ): Promise<DescribeProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UserProfileNotFoundException} <p>The user profile was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserProfile(
    args: DescribeUserProfileInput
  ): Promise<DescribeUserProfileOutput>;
  public describeUserProfile(
    args: DescribeUserProfileInput,
    cb: (err: any, data?: DescribeUserProfileOutput) => void
  ): void;
  public describeUserProfile(
    args: DescribeUserProfileInput,
    cb?: (err: any, data?: DescribeUserProfileOutput) => void
  ): Promise<DescribeUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {InvalidServiceRoleException} <p>The service role is not valid.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateTeamMember(
    args: DisassociateTeamMemberInput
  ): Promise<DisassociateTeamMemberOutput>;
  public disassociateTeamMember(
    args: DisassociateTeamMemberInput,
    cb: (err: any, data?: DisassociateTeamMemberOutput) => void
  ): void;
  public disassociateTeamMember(
    args: DisassociateTeamMemberInput,
    cb?: (err: any, data?: DisassociateTeamMemberOutput) => void
  ): Promise<DisassociateTeamMemberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateTeamMemberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all projects in AWS CodeStar associated with your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The next token is not valid.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProjects(args: ListProjectsInput): Promise<ListProjectsOutput>;
  public listProjects(
    args: ListProjectsInput,
    cb: (err: any, data?: ListProjectsOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsInput,
    cb?: (err: any, data?: ListProjectsOutput) => void
  ): Promise<ListProjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists resources associated with a project in AWS CodeStar.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {InvalidNextTokenException} <p>The next token is not valid.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResources(args: ListResourcesInput): Promise<ListResourcesOutput>;
  public listResources(
    args: ListResourcesInput,
    cb: (err: any, data?: ListResourcesOutput) => void
  ): void;
  public listResources(
    args: ListResourcesInput,
    cb?: (err: any, data?: ListResourcesOutput) => void
  ): Promise<ListResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the tags for a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {InvalidNextTokenException} <p>The next token is not valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForProject(
    args: ListTagsForProjectInput
  ): Promise<ListTagsForProjectOutput>;
  public listTagsForProject(
    args: ListTagsForProjectInput,
    cb: (err: any, data?: ListTagsForProjectOutput) => void
  ): void;
  public listTagsForProject(
    args: ListTagsForProjectInput,
    cb?: (err: any, data?: ListTagsForProjectOutput) => void
  ): Promise<ListTagsForProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all team members associated with a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {InvalidNextTokenException} <p>The next token is not valid.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTeamMembers(
    args: ListTeamMembersInput
  ): Promise<ListTeamMembersOutput>;
  public listTeamMembers(
    args: ListTeamMembersInput,
    cb: (err: any, data?: ListTeamMembersOutput) => void
  ): void;
  public listTeamMembers(
    args: ListTeamMembersInput,
    cb?: (err: any, data?: ListTeamMembersOutput) => void
  ): Promise<ListTeamMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTeamMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the user profiles configured for your AWS account in AWS CodeStar.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The next token is not valid.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserProfiles(
    args: ListUserProfilesInput
  ): Promise<ListUserProfilesOutput>;
  public listUserProfiles(
    args: ListUserProfilesInput,
    cb: (err: any, data?: ListUserProfilesOutput) => void
  ): void;
  public listUserProfiles(
    args: ListUserProfilesInput,
    cb?: (err: any, data?: ListUserProfilesOutput) => void
  ): Promise<ListUserProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds tags to a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {LimitExceededException} <p>A resource limit has been exceeded.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagProject(args: TagProjectInput): Promise<TagProjectOutput>;
  public tagProject(
    args: TagProjectInput,
    cb: (err: any, data?: TagProjectOutput) => void
  ): void;
  public tagProject(
    args: TagProjectInput,
    cb?: (err: any, data?: TagProjectOutput) => void
  ): Promise<TagProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes tags from a project.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {LimitExceededException} <p>A resource limit has been exceeded.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagProject(args: UntagProjectInput): Promise<UntagProjectOutput>;
  public untagProject(
    args: UntagProjectInput,
    cb: (err: any, data?: UntagProjectOutput) => void
  ): void;
  public untagProject(
    args: UntagProjectInput,
    cb?: (err: any, data?: UntagProjectOutput) => void
  ): Promise<UntagProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a project in AWS CodeStar.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateProject(args: UpdateProjectInput): Promise<UpdateProjectOutput>;
  public updateProject(
    args: UpdateProjectInput,
    cb: (err: any, data?: UpdateProjectOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectInput,
    cb?: (err: any, data?: UpdateProjectOutput) => void
  ): Promise<UpdateProjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateProjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>A resource limit has been exceeded.</p>
   *   - {ProjectNotFoundException} <p>The specified AWS CodeStar project was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {InvalidServiceRoleException} <p>The service role is not valid.</p>
   *   - {ProjectConfigurationException} <p>Project configuration information is required but not specified.</p>
   *   - {ConcurrentModificationException} <p>Another modification is being made. That modification must complete before you can make your change.</p>
   *   - {TeamMemberNotFoundException} <p>The specified team member was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTeamMember(
    args: UpdateTeamMemberInput
  ): Promise<UpdateTeamMemberOutput>;
  public updateTeamMember(
    args: UpdateTeamMemberInput,
    cb: (err: any, data?: UpdateTeamMemberOutput) => void
  ): void;
  public updateTeamMember(
    args: UpdateTeamMemberInput,
    cb?: (err: any, data?: UpdateTeamMemberOutput) => void
  ): Promise<UpdateTeamMemberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTeamMemberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {UserProfileNotFoundException} <p>The user profile was not found.</p>
   *   - {ValidationException} <p>The specified input is either not valid, or it could not be validated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserProfile(
    args: UpdateUserProfileInput
  ): Promise<UpdateUserProfileOutput>;
  public updateUserProfile(
    args: UpdateUserProfileInput,
    cb: (err: any, data?: UpdateUserProfileOutput) => void
  ): void;
  public updateUserProfile(
    args: UpdateUserProfileInput,
    cb?: (err: any, data?: UpdateUserProfileOutput) => void
  ): Promise<UpdateUserProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
