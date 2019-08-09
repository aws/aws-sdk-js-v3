import { ConnectClient } from "./ConnectClient";
import { ContactNotFoundException } from "./types/ContactNotFoundException";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DescribeUserHierarchyGroupInput } from "./types/DescribeUserHierarchyGroupInput";
import { DescribeUserHierarchyGroupOutput } from "./types/DescribeUserHierarchyGroupOutput";
import { DescribeUserHierarchyStructureInput } from "./types/DescribeUserHierarchyStructureInput";
import { DescribeUserHierarchyStructureOutput } from "./types/DescribeUserHierarchyStructureOutput";
import { DescribeUserInput } from "./types/DescribeUserInput";
import { DescribeUserOutput } from "./types/DescribeUserOutput";
import { DestinationNotAllowedException } from "./types/DestinationNotAllowedException";
import { DuplicateResourceException } from "./types/DuplicateResourceException";
import { GetContactAttributesInput } from "./types/GetContactAttributesInput";
import { GetContactAttributesOutput } from "./types/GetContactAttributesOutput";
import { GetCurrentMetricDataInput } from "./types/GetCurrentMetricDataInput";
import { GetCurrentMetricDataOutput } from "./types/GetCurrentMetricDataOutput";
import { GetFederationTokenInput } from "./types/GetFederationTokenInput";
import { GetFederationTokenOutput } from "./types/GetFederationTokenOutput";
import { GetMetricDataInput } from "./types/GetMetricDataInput";
import { GetMetricDataOutput } from "./types/GetMetricDataOutput";
import { InternalServiceException } from "./types/InternalServiceException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListRoutingProfilesInput } from "./types/ListRoutingProfilesInput";
import { ListRoutingProfilesOutput } from "./types/ListRoutingProfilesOutput";
import { ListSecurityProfilesInput } from "./types/ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "./types/ListSecurityProfilesOutput";
import { ListUserHierarchyGroupsInput } from "./types/ListUserHierarchyGroupsInput";
import { ListUserHierarchyGroupsOutput } from "./types/ListUserHierarchyGroupsOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { OutboundContactNotPermittedException } from "./types/OutboundContactNotPermittedException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartOutboundVoiceContactInput } from "./types/StartOutboundVoiceContactInput";
import { StartOutboundVoiceContactOutput } from "./types/StartOutboundVoiceContactOutput";
import { StopContactInput } from "./types/StopContactInput";
import { StopContactOutput } from "./types/StopContactOutput";
import { ThrottlingException } from "./types/ThrottlingException";
import { UpdateContactAttributesInput } from "./types/UpdateContactAttributesInput";
import { UpdateContactAttributesOutput } from "./types/UpdateContactAttributesOutput";
import { UpdateUserHierarchyInput } from "./types/UpdateUserHierarchyInput";
import { UpdateUserHierarchyOutput } from "./types/UpdateUserHierarchyOutput";
import { UpdateUserIdentityInfoInput } from "./types/UpdateUserIdentityInfoInput";
import { UpdateUserIdentityInfoOutput } from "./types/UpdateUserIdentityInfoOutput";
import { UpdateUserPhoneConfigInput } from "./types/UpdateUserPhoneConfigInput";
import { UpdateUserPhoneConfigOutput } from "./types/UpdateUserPhoneConfigOutput";
import { UpdateUserRoutingProfileInput } from "./types/UpdateUserRoutingProfileInput";
import { UpdateUserRoutingProfileOutput } from "./types/UpdateUserRoutingProfileOutput";
import { UpdateUserSecurityProfilesInput } from "./types/UpdateUserSecurityProfilesInput";
import { UpdateUserSecurityProfilesOutput } from "./types/UpdateUserSecurityProfilesOutput";
import { UserNotFoundException } from "./types/UserNotFoundException";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeUserCommand } from "./commands/DescribeUserCommand";
import { DescribeUserHierarchyGroupCommand } from "./commands/DescribeUserHierarchyGroupCommand";
import { DescribeUserHierarchyStructureCommand } from "./commands/DescribeUserHierarchyStructureCommand";
import { GetContactAttributesCommand } from "./commands/GetContactAttributesCommand";
import { GetCurrentMetricDataCommand } from "./commands/GetCurrentMetricDataCommand";
import { GetFederationTokenCommand } from "./commands/GetFederationTokenCommand";
import { GetMetricDataCommand } from "./commands/GetMetricDataCommand";
import { ListRoutingProfilesCommand } from "./commands/ListRoutingProfilesCommand";
import { ListSecurityProfilesCommand } from "./commands/ListSecurityProfilesCommand";
import { ListUserHierarchyGroupsCommand } from "./commands/ListUserHierarchyGroupsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { StartOutboundVoiceContactCommand } from "./commands/StartOutboundVoiceContactCommand";
import { StopContactCommand } from "./commands/StopContactCommand";
import { UpdateContactAttributesCommand } from "./commands/UpdateContactAttributesCommand";
import { UpdateUserHierarchyCommand } from "./commands/UpdateUserHierarchyCommand";
import { UpdateUserIdentityInfoCommand } from "./commands/UpdateUserIdentityInfoCommand";
import { UpdateUserPhoneConfigCommand } from "./commands/UpdateUserPhoneConfigCommand";
import { UpdateUserRoutingProfileCommand } from "./commands/UpdateUserRoutingProfileCommand";
import { UpdateUserSecurityProfilesCommand } from "./commands/UpdateUserSecurityProfilesCommand";

export class Connect extends ConnectClient {
  /**
   * <p>Creates a new user account in your Amazon Connect instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {LimitExceededException} <p>The allowed limit for the resource has been reached.</p>
   *   - {DuplicateResourceException} <p>A resource with that name already exists.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
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
   * <p>Deletes a user account from Amazon Connect.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
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
   * <p>Returns a <code>User</code> object that contains information about the user account specified by the <code>UserId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
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
   * <p>Returns a <code>HierarchyGroup</code> object that includes information about a hierarchy group in your instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupInput
  ): Promise<DescribeUserHierarchyGroupOutput>;
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupInput,
    cb: (err: any, data?: DescribeUserHierarchyGroupOutput) => void
  ): void;
  public describeUserHierarchyGroup(
    args: DescribeUserHierarchyGroupInput,
    cb?: (err: any, data?: DescribeUserHierarchyGroupOutput) => void
  ): Promise<DescribeUserHierarchyGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserHierarchyGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a <code>HiearchyGroupStructure</code> object, which contains data about the levels in the agent hierarchy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureInput
  ): Promise<DescribeUserHierarchyStructureOutput>;
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureInput,
    cb: (err: any, data?: DescribeUserHierarchyStructureOutput) => void
  ): void;
  public describeUserHierarchyStructure(
    args: DescribeUserHierarchyStructureInput,
    cb?: (err: any, data?: DescribeUserHierarchyStructureOutput) => void
  ): Promise<DescribeUserHierarchyStructureOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeUserHierarchyStructureCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the contact attributes associated with a contact.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getContactAttributes(
    args: GetContactAttributesInput
  ): Promise<GetContactAttributesOutput>;
  public getContactAttributes(
    args: GetContactAttributesInput,
    cb: (err: any, data?: GetContactAttributesOutput) => void
  ): void;
  public getContactAttributes(
    args: GetContactAttributesInput,
    cb?: (err: any, data?: GetContactAttributesOutput) => void
  ): Promise<GetContactAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetContactAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>GetCurrentMetricData</code> operation retrieves current metric data from your Amazon Connect instance.</p> <p>If you are using an IAM account, it must have permission to the <code>connect:GetCurrentMetricData</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCurrentMetricData(
    args: GetCurrentMetricDataInput
  ): Promise<GetCurrentMetricDataOutput>;
  public getCurrentMetricData(
    args: GetCurrentMetricDataInput,
    cb: (err: any, data?: GetCurrentMetricDataOutput) => void
  ): void;
  public getCurrentMetricData(
    args: GetCurrentMetricDataInput,
    cb?: (err: any, data?: GetCurrentMetricDataOutput) => void
  ): Promise<GetCurrentMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCurrentMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a token for federation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {UserNotFoundException} <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {DuplicateResourceException} <p>A resource with that name already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFederationToken(
    args: GetFederationTokenInput
  ): Promise<GetFederationTokenOutput>;
  public getFederationToken(
    args: GetFederationTokenInput,
    cb: (err: any, data?: GetFederationTokenOutput) => void
  ): void;
  public getFederationToken(
    args: GetFederationTokenInput,
    cb?: (err: any, data?: GetFederationTokenOutput) => void
  ): Promise<GetFederationTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFederationTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>GetMetricData</code> operation retrieves historical metrics data from your Amazon Connect instance.</p> <p>If you are using an IAM account, it must have permission to the <code>connect:GetMetricData</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMetricData(args: GetMetricDataInput): Promise<GetMetricDataOutput>;
  public getMetricData(
    args: GetMetricDataInput,
    cb: (err: any, data?: GetMetricDataOutput) => void
  ): void;
  public getMetricData(
    args: GetMetricDataInput,
    cb?: (err: any, data?: GetMetricDataOutput) => void
  ): Promise<GetMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>RoutingProfileSummary</code> objects that includes information about the routing profiles in your instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRoutingProfiles(
    args: ListRoutingProfilesInput
  ): Promise<ListRoutingProfilesOutput>;
  public listRoutingProfiles(
    args: ListRoutingProfilesInput,
    cb: (err: any, data?: ListRoutingProfilesOutput) => void
  ): void;
  public listRoutingProfiles(
    args: ListRoutingProfilesInput,
    cb?: (err: any, data?: ListRoutingProfilesOutput) => void
  ): Promise<ListRoutingProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRoutingProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of SecurityProfileSummary objects that contain information about the security profiles in your instance, including the ARN, Id, and Name of the security profile.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSecurityProfiles(
    args: ListSecurityProfilesInput
  ): Promise<ListSecurityProfilesOutput>;
  public listSecurityProfiles(
    args: ListSecurityProfilesInput,
    cb: (err: any, data?: ListSecurityProfilesOutput) => void
  ): void;
  public listSecurityProfiles(
    args: ListSecurityProfilesInput,
    cb?: (err: any, data?: ListSecurityProfilesOutput) => void
  ): Promise<ListSecurityProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSecurityProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a <code>UserHierarchyGroupSummaryList</code>, which is an array of <code>HierarchyGroupSummary</code> objects that contain information about the hierarchy groups in your instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsInput
  ): Promise<ListUserHierarchyGroupsOutput>;
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsInput,
    cb: (err: any, data?: ListUserHierarchyGroupsOutput) => void
  ): void;
  public listUserHierarchyGroups(
    args: ListUserHierarchyGroupsInput,
    cb?: (err: any, data?: ListUserHierarchyGroupsOutput) => void
  ): Promise<ListUserHierarchyGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserHierarchyGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a <code>UserSummaryList</code>, which is an array of <code>UserSummary</code> objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
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
   * <p>The <code>StartOutboundVoiceContact</code> operation initiates a contact flow to place an outbound call to a customer.</p> <p>If you are using an IAM account, it must have permission to the <code>connect:StartOutboundVoiceContact</code> action.</p> <p>There is a 60 second dialing timeout for this operation. If the call is not connected after 60 seconds, the call fails.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {LimitExceededException} <p>The allowed limit for the resource has been reached.</p>
   *   - {DestinationNotAllowedException} <p>Outbound calls to the destination number are not allowed.</p>
   *   - {OutboundContactNotPermittedException} <p>The contact is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactInput
  ): Promise<StartOutboundVoiceContactOutput>;
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactInput,
    cb: (err: any, data?: StartOutboundVoiceContactOutput) => void
  ): void;
  public startOutboundVoiceContact(
    args: StartOutboundVoiceContactInput,
    cb?: (err: any, data?: StartOutboundVoiceContactOutput) => void
  ): Promise<StartOutboundVoiceContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartOutboundVoiceContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Ends the contact initiated by the <code>StartOutboundVoiceContact</code> operation.</p> <p>If you are using an IAM account, it must have permission to the <code>connect:StopContact</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ContactNotFoundException} <p>The contact with the specified ID is not active or does not exist.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopContact(args: StopContactInput): Promise<StopContactOutput>;
  public stopContact(
    args: StopContactInput,
    cb: (err: any, data?: StopContactOutput) => void
  ): void;
  public stopContact(
    args: StopContactInput,
    cb?: (err: any, data?: StopContactOutput) => void
  ): Promise<StopContactOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopContactCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>UpdateContactAttributes</code> operation lets you programmatically create new, or update existing, contact attributes associated with a contact. You can use the operation to add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also use the <code>UpdateContactAttributes</code> operation to update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or identifying abusive callers.</p> <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted.</p> <p> <i>Important:</i> </p> <p>You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateContactAttributes(
    args: UpdateContactAttributesInput
  ): Promise<UpdateContactAttributesOutput>;
  public updateContactAttributes(
    args: UpdateContactAttributesInput,
    cb: (err: any, data?: UpdateContactAttributesOutput) => void
  ): void;
  public updateContactAttributes(
    args: UpdateContactAttributesInput,
    cb?: (err: any, data?: UpdateContactAttributesOutput) => void
  ): Promise<UpdateContactAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateContactAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns the specified hierarchy group to the user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserHierarchy(
    args: UpdateUserHierarchyInput
  ): Promise<UpdateUserHierarchyOutput>;
  public updateUserHierarchy(
    args: UpdateUserHierarchyInput,
    cb: (err: any, data?: UpdateUserHierarchyOutput) => void
  ): void;
  public updateUserHierarchy(
    args: UpdateUserHierarchyInput,
    cb?: (err: any, data?: UpdateUserHierarchyOutput) => void
  ): Promise<UpdateUserHierarchyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserHierarchyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the identity information for the specified user in a <code>UserIdentityInfo</code> object, including email, first name, and last name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoInput
  ): Promise<UpdateUserIdentityInfoOutput>;
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoInput,
    cb: (err: any, data?: UpdateUserIdentityInfoOutput) => void
  ): void;
  public updateUserIdentityInfo(
    args: UpdateUserIdentityInfoInput,
    cb?: (err: any, data?: UpdateUserIdentityInfoOutput) => void
  ): Promise<UpdateUserIdentityInfoOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserIdentityInfoCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the phone configuration settings in the <code>UserPhoneConfig</code> object for the specified user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigInput
  ): Promise<UpdateUserPhoneConfigOutput>;
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigInput,
    cb: (err: any, data?: UpdateUserPhoneConfigOutput) => void
  ): void;
  public updateUserPhoneConfig(
    args: UpdateUserPhoneConfigInput,
    cb?: (err: any, data?: UpdateUserPhoneConfigOutput) => void
  ): Promise<UpdateUserPhoneConfigOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserPhoneConfigCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns the specified routing profile to a user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileInput
  ): Promise<UpdateUserRoutingProfileOutput>;
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileInput,
    cb: (err: any, data?: UpdateUserRoutingProfileOutput) => void
  ): void;
  public updateUserRoutingProfile(
    args: UpdateUserRoutingProfileInput,
    cb?: (err: any, data?: UpdateUserRoutingProfileOutput) => void
  ): Promise<UpdateUserRoutingProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserRoutingProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the security profiles assigned to the user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {InvalidParameterException} <p>One or more of the parameters provided to the operation are not valid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {ThrottlingException} <p>The throttling limit has been exceeded.</p>
   *   - {InternalServiceException} <p>Request processing failed due to an error or failure with the service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesInput
  ): Promise<UpdateUserSecurityProfilesOutput>;
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesInput,
    cb: (err: any, data?: UpdateUserSecurityProfilesOutput) => void
  ): void;
  public updateUserSecurityProfiles(
    args: UpdateUserSecurityProfilesInput,
    cb?: (err: any, data?: UpdateUserSecurityProfilesOutput) => void
  ): Promise<UpdateUserSecurityProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserSecurityProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
