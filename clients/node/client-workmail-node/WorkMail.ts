import { WorkMailClient } from "./WorkMailClient";
import { AssociateDelegateToResourceInput } from "./types/AssociateDelegateToResourceInput";
import { AssociateDelegateToResourceOutput } from "./types/AssociateDelegateToResourceOutput";
import { AssociateMemberToGroupInput } from "./types/AssociateMemberToGroupInput";
import { AssociateMemberToGroupOutput } from "./types/AssociateMemberToGroupOutput";
import { CreateAliasInput } from "./types/CreateAliasInput";
import { CreateAliasOutput } from "./types/CreateAliasOutput";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { CreateResourceInput } from "./types/CreateResourceInput";
import { CreateResourceOutput } from "./types/CreateResourceOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { DeleteAliasInput } from "./types/DeleteAliasInput";
import { DeleteAliasOutput } from "./types/DeleteAliasOutput";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { DeleteMailboxPermissionsInput } from "./types/DeleteMailboxPermissionsInput";
import { DeleteMailboxPermissionsOutput } from "./types/DeleteMailboxPermissionsOutput";
import { DeleteResourceInput } from "./types/DeleteResourceInput";
import { DeleteResourceOutput } from "./types/DeleteResourceOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DeregisterFromWorkMailInput } from "./types/DeregisterFromWorkMailInput";
import { DeregisterFromWorkMailOutput } from "./types/DeregisterFromWorkMailOutput";
import { DescribeGroupInput } from "./types/DescribeGroupInput";
import { DescribeGroupOutput } from "./types/DescribeGroupOutput";
import { DescribeOrganizationInput } from "./types/DescribeOrganizationInput";
import { DescribeOrganizationOutput } from "./types/DescribeOrganizationOutput";
import { DescribeResourceInput } from "./types/DescribeResourceInput";
import { DescribeResourceOutput } from "./types/DescribeResourceOutput";
import { DescribeUserInput } from "./types/DescribeUserInput";
import { DescribeUserOutput } from "./types/DescribeUserOutput";
import { DirectoryServiceAuthenticationFailedException } from "./types/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./types/DirectoryUnavailableException";
import { DisassociateDelegateFromResourceInput } from "./types/DisassociateDelegateFromResourceInput";
import { DisassociateDelegateFromResourceOutput } from "./types/DisassociateDelegateFromResourceOutput";
import { DisassociateMemberFromGroupInput } from "./types/DisassociateMemberFromGroupInput";
import { DisassociateMemberFromGroupOutput } from "./types/DisassociateMemberFromGroupOutput";
import { EmailAddressInUseException } from "./types/EmailAddressInUseException";
import { EntityAlreadyRegisteredException } from "./types/EntityAlreadyRegisteredException";
import { EntityNotFoundException } from "./types/EntityNotFoundException";
import { EntityStateException } from "./types/EntityStateException";
import { GetMailboxDetailsInput } from "./types/GetMailboxDetailsInput";
import { GetMailboxDetailsOutput } from "./types/GetMailboxDetailsOutput";
import { InvalidConfigurationException } from "./types/InvalidConfigurationException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidPasswordException } from "./types/InvalidPasswordException";
import { ListAliasesInput } from "./types/ListAliasesInput";
import { ListAliasesOutput } from "./types/ListAliasesOutput";
import { ListGroupMembersInput } from "./types/ListGroupMembersInput";
import { ListGroupMembersOutput } from "./types/ListGroupMembersOutput";
import { ListGroupsInput } from "./types/ListGroupsInput";
import { ListGroupsOutput } from "./types/ListGroupsOutput";
import { ListMailboxPermissionsInput } from "./types/ListMailboxPermissionsInput";
import { ListMailboxPermissionsOutput } from "./types/ListMailboxPermissionsOutput";
import { ListOrganizationsInput } from "./types/ListOrganizationsInput";
import { ListOrganizationsOutput } from "./types/ListOrganizationsOutput";
import { ListResourceDelegatesInput } from "./types/ListResourceDelegatesInput";
import { ListResourceDelegatesOutput } from "./types/ListResourceDelegatesOutput";
import { ListResourcesInput } from "./types/ListResourcesInput";
import { ListResourcesOutput } from "./types/ListResourcesOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { MailDomainNotFoundException } from "./types/MailDomainNotFoundException";
import { MailDomainStateException } from "./types/MailDomainStateException";
import { NameAvailabilityException } from "./types/NameAvailabilityException";
import { OrganizationNotFoundException } from "./types/OrganizationNotFoundException";
import { OrganizationStateException } from "./types/OrganizationStateException";
import { PutMailboxPermissionsInput } from "./types/PutMailboxPermissionsInput";
import { PutMailboxPermissionsOutput } from "./types/PutMailboxPermissionsOutput";
import { RegisterToWorkMailInput } from "./types/RegisterToWorkMailInput";
import { RegisterToWorkMailOutput } from "./types/RegisterToWorkMailOutput";
import { ReservedNameException } from "./types/ReservedNameException";
import { ResetPasswordInput } from "./types/ResetPasswordInput";
import { ResetPasswordOutput } from "./types/ResetPasswordOutput";
import { UnsupportedOperationException } from "./types/UnsupportedOperationException";
import { UpdateMailboxQuotaInput } from "./types/UpdateMailboxQuotaInput";
import { UpdateMailboxQuotaOutput } from "./types/UpdateMailboxQuotaOutput";
import { UpdatePrimaryEmailAddressInput } from "./types/UpdatePrimaryEmailAddressInput";
import { UpdatePrimaryEmailAddressOutput } from "./types/UpdatePrimaryEmailAddressOutput";
import { UpdateResourceInput } from "./types/UpdateResourceInput";
import { UpdateResourceOutput } from "./types/UpdateResourceOutput";
import { AssociateDelegateToResourceCommand } from "./commands/AssociateDelegateToResourceCommand";
import { AssociateMemberToGroupCommand } from "./commands/AssociateMemberToGroupCommand";
import { CreateAliasCommand } from "./commands/CreateAliasCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateResourceCommand } from "./commands/CreateResourceCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteAliasCommand } from "./commands/DeleteAliasCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteMailboxPermissionsCommand } from "./commands/DeleteMailboxPermissionsCommand";
import { DeleteResourceCommand } from "./commands/DeleteResourceCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DeregisterFromWorkMailCommand } from "./commands/DeregisterFromWorkMailCommand";
import { DescribeGroupCommand } from "./commands/DescribeGroupCommand";
import { DescribeOrganizationCommand } from "./commands/DescribeOrganizationCommand";
import { DescribeResourceCommand } from "./commands/DescribeResourceCommand";
import { DescribeUserCommand } from "./commands/DescribeUserCommand";
import { DisassociateDelegateFromResourceCommand } from "./commands/DisassociateDelegateFromResourceCommand";
import { DisassociateMemberFromGroupCommand } from "./commands/DisassociateMemberFromGroupCommand";
import { GetMailboxDetailsCommand } from "./commands/GetMailboxDetailsCommand";
import { ListAliasesCommand } from "./commands/ListAliasesCommand";
import { ListGroupMembersCommand } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListMailboxPermissionsCommand } from "./commands/ListMailboxPermissionsCommand";
import { ListOrganizationsCommand } from "./commands/ListOrganizationsCommand";
import { ListResourceDelegatesCommand } from "./commands/ListResourceDelegatesCommand";
import { ListResourcesCommand } from "./commands/ListResourcesCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { PutMailboxPermissionsCommand } from "./commands/PutMailboxPermissionsCommand";
import { RegisterToWorkMailCommand } from "./commands/RegisterToWorkMailCommand";
import { ResetPasswordCommand } from "./commands/ResetPasswordCommand";
import { UpdateMailboxQuotaCommand } from "./commands/UpdateMailboxQuotaCommand";
import { UpdatePrimaryEmailAddressCommand } from "./commands/UpdatePrimaryEmailAddressCommand";
import { UpdateResourceCommand } from "./commands/UpdateResourceCommand";

export class WorkMail extends WorkMailClient {
  /**
   * <p>Adds a member (user or group) to the resource's set of delegates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDelegateToResource(
    args: AssociateDelegateToResourceInput
  ): Promise<AssociateDelegateToResourceOutput>;
  public associateDelegateToResource(
    args: AssociateDelegateToResourceInput,
    cb: (err: any, data?: AssociateDelegateToResourceOutput) => void
  ): void;
  public associateDelegateToResource(
    args: AssociateDelegateToResourceInput,
    cb?: (err: any, data?: AssociateDelegateToResourceOutput) => void
  ): Promise<AssociateDelegateToResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDelegateToResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a member (user or group) to the group's set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateMemberToGroup(
    args: AssociateMemberToGroupInput
  ): Promise<AssociateMemberToGroupOutput>;
  public associateMemberToGroup(
    args: AssociateMemberToGroupInput,
    cb: (err: any, data?: AssociateMemberToGroupOutput) => void
  ): void;
  public associateMemberToGroup(
    args: AssociateMemberToGroupInput,
    cb?: (err: any, data?: AssociateMemberToGroupOutput) => void
  ): Promise<AssociateMemberToGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateMemberToGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an alias to the set of a given member (user or group) of Amazon WorkMail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EmailAddressInUseException} <p>The email address that you're trying to assign is already created for a different user, group, or resource.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {MailDomainNotFoundException} <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.</p>
   *   - {MailDomainStateException} <p>After a domain has been added to the organization, it must be verified. The domain is not yet verified.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAlias(args: CreateAliasInput): Promise<CreateAliasOutput>;
  public createAlias(
    args: CreateAliasInput,
    cb: (err: any, data?: CreateAliasOutput) => void
  ): void;
  public createAlias(
    args: CreateAliasInput,
    cb?: (err: any, data?: CreateAliasOutput) => void
  ): Promise<CreateAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {NameAvailabilityException} <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {ReservedNameException} <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
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
   * <p>Creates a new Amazon WorkMail resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {NameAvailabilityException} <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {ReservedNameException} <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResource(
    args: CreateResourceInput
  ): Promise<CreateResourceOutput>;
  public createResource(
    args: CreateResourceInput,
    cb: (err: any, data?: CreateResourceOutput) => void
  ): void;
  public createResource(
    args: CreateResourceInput,
    cb?: (err: any, data?: CreateResourceOutput) => void
  ): Promise<CreateResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {InvalidPasswordException} <p>The supplied password doesn't match the minimum security constraints, such as length or use of special characters.</p>
   *   - {NameAvailabilityException} <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {ReservedNameException} <p>This user, group, or resource name is not allowed in Amazon WorkMail.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUser(args: CreateUserInput): Promise<CreateUserOutput>;
  public createUser(
    args: CreateUserInput,
    cb: (err: any, data?: CreateUserOutput) => void
  ): void;
  public createUser(
    args: CreateUserInput,
    cb?: (err: any, data?: CreateUserOutput) => void
  ): Promise<CreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove one or more specified aliases from a set of aliases for a given user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAlias(args: DeleteAliasInput): Promise<DeleteAliasOutput>;
  public deleteAlias(
    args: DeleteAliasInput,
    cb: (err: any, data?: DeleteAliasOutput) => void
  ): void;
  public deleteAlias(
    args: DeleteAliasInput,
    cb?: (err: any, data?: DeleteAliasOutput) => void
  ): Promise<DeleteAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a group from Amazon WorkMail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
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
   * <p>Deletes permissions granted to a member (user or group).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsInput
  ): Promise<DeleteMailboxPermissionsOutput>;
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsInput,
    cb: (err: any, data?: DeleteMailboxPermissionsOutput) => void
  ): void;
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsInput,
    cb?: (err: any, data?: DeleteMailboxPermissionsOutput) => void
  ): Promise<DeleteMailboxPermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMailboxPermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResource(
    args: DeleteResourceInput
  ): Promise<DeleteResourceOutput>;
  public deleteResource(
    args: DeleteResourceInput,
    cb: (err: any, data?: DeleteResourceOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceInput,
    cb?: (err: any, data?: DeleteResourceOutput) => void
  ): Promise<DeleteResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailInput
  ): Promise<DeregisterFromWorkMailOutput>;
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailInput,
    cb: (err: any, data?: DeregisterFromWorkMailOutput) => void
  ): void;
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailInput,
    cb?: (err: any, data?: DeregisterFromWorkMailOutput) => void
  ): Promise<DeregisterFromWorkMailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterFromWorkMailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the data available for the group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeGroup(args: DescribeGroupInput): Promise<DescribeGroupOutput>;
  public describeGroup(
    args: DescribeGroupInput,
    cb: (err: any, data?: DescribeGroupOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupInput,
    cb?: (err: any, data?: DescribeGroupOutput) => void
  ): Promise<DescribeGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides more information regarding a given organization based on its identifier.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeOrganization(
    args: DescribeOrganizationInput
  ): Promise<DescribeOrganizationOutput>;
  public describeOrganization(
    args: DescribeOrganizationInput,
    cb: (err: any, data?: DescribeOrganizationOutput) => void
  ): void;
  public describeOrganization(
    args: DescribeOrganizationInput,
    cb?: (err: any, data?: DescribeOrganizationOutput) => void
  ): Promise<DescribeOrganizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeOrganizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the data available for the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeResource(
    args: DescribeResourceInput
  ): Promise<DescribeResourceOutput>;
  public describeResource(
    args: DescribeResourceInput,
    cb: (err: any, data?: DescribeResourceOutput) => void
  ): void;
  public describeResource(
    args: DescribeResourceInput,
    cb?: (err: any, data?: DescribeResourceOutput) => void
  ): Promise<DescribeResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information regarding the user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUser(args: DescribeUserInput): Promise<DescribeUserOutput>;
  public describeUser(
    args: DescribeUserInput,
    cb: (err: any, data?: DescribeUserOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserInput,
    cb?: (err: any, data?: DescribeUserOutput) => void
  ): Promise<DescribeUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a member from the resource's set of delegates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceInput
  ): Promise<DisassociateDelegateFromResourceOutput>;
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceInput,
    cb: (err: any, data?: DisassociateDelegateFromResourceOutput) => void
  ): void;
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceInput,
    cb?: (err: any, data?: DisassociateDelegateFromResourceOutput) => void
  ): Promise<DisassociateDelegateFromResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDelegateFromResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a member from a group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupInput
  ): Promise<DisassociateMemberFromGroupOutput>;
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupInput,
    cb: (err: any, data?: DisassociateMemberFromGroupOutput) => void
  ): void;
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupInput,
    cb?: (err: any, data?: DisassociateMemberFromGroupOutput) => void
  ): Promise<DisassociateMemberFromGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateMemberFromGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a user's mailbox details for a specified organization and user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMailboxDetails(
    args: GetMailboxDetailsInput
  ): Promise<GetMailboxDetailsOutput>;
  public getMailboxDetails(
    args: GetMailboxDetailsInput,
    cb: (err: any, data?: GetMailboxDetailsOutput) => void
  ): void;
  public getMailboxDetails(
    args: GetMailboxDetailsInput,
    cb?: (err: any, data?: GetMailboxDetailsOutput) => void
  ): Promise<GetMailboxDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMailboxDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a paginated call to list the aliases associated with a given entity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAliases(args: ListAliasesInput): Promise<ListAliasesOutput>;
  public listAliases(
    args: ListAliasesInput,
    cb: (err: any, data?: ListAliasesOutput) => void
  ): void;
  public listAliases(
    args: ListAliasesInput,
    cb?: (err: any, data?: ListAliasesOutput) => void
  ): Promise<ListAliasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAliasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an overview of the members of a group. Users and groups can be members of a group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupMembers(
    args: ListGroupMembersInput
  ): Promise<ListGroupMembersOutput>;
  public listGroupMembers(
    args: ListGroupMembersInput,
    cb: (err: any, data?: ListGroupMembersOutput) => void
  ): void;
  public listGroupMembers(
    args: ListGroupMembersInput,
    cb?: (err: any, data?: ListGroupMembersOutput) => void
  ): Promise<ListGroupMembersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupMembersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summaries of the organization's groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
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
   * <p>Lists the mailbox permissions associated with a user, group, or resource mailbox.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMailboxPermissions(
    args: ListMailboxPermissionsInput
  ): Promise<ListMailboxPermissionsOutput>;
  public listMailboxPermissions(
    args: ListMailboxPermissionsInput,
    cb: (err: any, data?: ListMailboxPermissionsOutput) => void
  ): void;
  public listMailboxPermissions(
    args: ListMailboxPermissionsInput,
    cb?: (err: any, data?: ListMailboxPermissionsOutput) => void
  ): Promise<ListMailboxPermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMailboxPermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summaries of the customer's non-deleted organizations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOrganizations(
    args: ListOrganizationsInput
  ): Promise<ListOrganizationsOutput>;
  public listOrganizations(
    args: ListOrganizationsInput,
    cb: (err: any, data?: ListOrganizationsOutput) => void
  ): void;
  public listOrganizations(
    args: ListOrganizationsInput,
    cb?: (err: any, data?: ListOrganizationsOutput) => void
  ): Promise<ListOrganizationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOrganizationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResourceDelegates(
    args: ListResourceDelegatesInput
  ): Promise<ListResourceDelegatesOutput>;
  public listResourceDelegates(
    args: ListResourceDelegatesInput,
    cb: (err: any, data?: ListResourceDelegatesOutput) => void
  ): void;
  public listResourceDelegates(
    args: ListResourceDelegatesInput,
    cb?: (err: any, data?: ListResourceDelegatesOutput) => void
  ): Promise<ListResourceDelegatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResourceDelegatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summaries of the organization's resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
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
   * <p>Returns summaries of the organization's users.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsers(args: ListUsersInput): Promise<ListUsersOutput>;
  public listUsers(
    args: ListUsersInput,
    cb: (err: any, data?: ListUsersOutput) => void
  ): void;
  public listUsers(
    args: ListUsersInput,
    cb?: (err: any, data?: ListUsersOutput) => void
  ): Promise<ListUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putMailboxPermissions(
    args: PutMailboxPermissionsInput
  ): Promise<PutMailboxPermissionsOutput>;
  public putMailboxPermissions(
    args: PutMailboxPermissionsInput,
    cb: (err: any, data?: PutMailboxPermissionsOutput) => void
  ): void;
  public putMailboxPermissions(
    args: PutMailboxPermissionsInput,
    cb?: (err: any, data?: PutMailboxPermissionsOutput) => void
  ): Promise<PutMailboxPermissionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutMailboxPermissionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com//workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EmailAddressInUseException} <p>The email address that you're trying to assign is already created for a different user, group, or resource.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {EntityAlreadyRegisteredException} <p>The user, group, or resource that you're trying to register is already registered.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {MailDomainNotFoundException} <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.</p>
   *   - {MailDomainStateException} <p>After a domain has been added to the organization, it must be verified. The domain is not yet verified.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerToWorkMail(
    args: RegisterToWorkMailInput
  ): Promise<RegisterToWorkMailOutput>;
  public registerToWorkMail(
    args: RegisterToWorkMailInput,
    cb: (err: any, data?: RegisterToWorkMailOutput) => void
  ): void;
  public registerToWorkMail(
    args: RegisterToWorkMailInput,
    cb?: (err: any, data?: RegisterToWorkMailOutput) => void
  ): Promise<RegisterToWorkMailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterToWorkMailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows the administrator to reset the password for a user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {InvalidPasswordException} <p>The supplied password doesn't match the minimum security constraints, such as length or use of special characters.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetPassword(args: ResetPasswordInput): Promise<ResetPasswordOutput>;
  public resetPassword(
    args: ResetPasswordInput,
    cb: (err: any, data?: ResetPasswordOutput) => void
  ): void;
  public resetPassword(
    args: ResetPasswordInput,
    cb?: (err: any, data?: ResetPasswordOutput) => void
  ): Promise<ResetPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a user's current mailbox quota for a specified organization and user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMailboxQuota(
    args: UpdateMailboxQuotaInput
  ): Promise<UpdateMailboxQuotaOutput>;
  public updateMailboxQuota(
    args: UpdateMailboxQuotaInput,
    cb: (err: any, data?: UpdateMailboxQuotaOutput) => void
  ): void;
  public updateMailboxQuota(
    args: UpdateMailboxQuotaInput,
    cb?: (err: any, data?: UpdateMailboxQuotaOutput) => void
  ): Promise<UpdateMailboxQuotaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMailboxQuotaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryServiceAuthenticationFailedException} <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EmailAddressInUseException} <p>The email address that you're trying to assign is already created for a different user, group, or resource.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {MailDomainNotFoundException} <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.</p>
   *   - {MailDomainStateException} <p>After a domain has been added to the organization, it must be verified. The domain is not yet verified.</p>
   *   - {InvalidParameterException} <p>One or more of the input parameters don't match the service's restrictions.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {UnsupportedOperationException} <p>You can't perform a write operation against a read-only directory.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressInput
  ): Promise<UpdatePrimaryEmailAddressOutput>;
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressInput,
    cb: (err: any, data?: UpdatePrimaryEmailAddressOutput) => void
  ): void;
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressInput,
    cb?: (err: any, data?: UpdatePrimaryEmailAddressOutput) => void
  ): Promise<UpdatePrimaryEmailAddressOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePrimaryEmailAddressCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DirectoryUnavailableException} <p>The directory on which you are trying to perform operations isn't available.</p>
   *   - {EntityNotFoundException} <p>The identifier supplied for the user, group, or resource does not exist in your organization.</p>
   *   - {EntityStateException} <p>You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.</p>
   *   - {InvalidConfigurationException} <p>The configuration for a resource isn't valid. A resource must either be able to auto-respond to requests or have at least one delegate associated that can do so on its behalf.</p>
   *   - {EmailAddressInUseException} <p>The email address that you're trying to assign is already created for a different user, group, or resource.</p>
   *   - {MailDomainNotFoundException} <p>For an email or alias to be created in Amazon WorkMail, the included domain must be defined in the organization.</p>
   *   - {MailDomainStateException} <p>After a domain has been added to the organization, it must be verified. The domain is not yet verified.</p>
   *   - {NameAvailabilityException} <p>The user, group, or resource name isn't unique in Amazon WorkMail.</p>
   *   - {OrganizationNotFoundException} <p>An operation received a valid organization identifier that either doesn't belong or exist in the system.</p>
   *   - {OrganizationStateException} <p>The organization must have a valid state (Active or Synchronizing) to perform certain operations on the organization or its members.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResource(
    args: UpdateResourceInput
  ): Promise<UpdateResourceOutput>;
  public updateResource(
    args: UpdateResourceInput,
    cb: (err: any, data?: UpdateResourceOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceInput,
    cb?: (err: any, data?: UpdateResourceOutput) => void
  ): Promise<UpdateResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
