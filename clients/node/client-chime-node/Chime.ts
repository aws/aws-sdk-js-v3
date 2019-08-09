import { ChimeClient } from "./ChimeClient";
import { AssociatePhoneNumberWithUserInput } from "./types/AssociatePhoneNumberWithUserInput";
import { AssociatePhoneNumberWithUserOutput } from "./types/AssociatePhoneNumberWithUserOutput";
import { AssociatePhoneNumbersWithVoiceConnectorInput } from "./types/AssociatePhoneNumbersWithVoiceConnectorInput";
import { AssociatePhoneNumbersWithVoiceConnectorOutput } from "./types/AssociatePhoneNumbersWithVoiceConnectorOutput";
import { BadRequestException } from "./types/BadRequestException";
import { BatchDeletePhoneNumberInput } from "./types/BatchDeletePhoneNumberInput";
import { BatchDeletePhoneNumberOutput } from "./types/BatchDeletePhoneNumberOutput";
import { BatchSuspendUserInput } from "./types/BatchSuspendUserInput";
import { BatchSuspendUserOutput } from "./types/BatchSuspendUserOutput";
import { BatchUnsuspendUserInput } from "./types/BatchUnsuspendUserInput";
import { BatchUnsuspendUserOutput } from "./types/BatchUnsuspendUserOutput";
import { BatchUpdatePhoneNumberInput } from "./types/BatchUpdatePhoneNumberInput";
import { BatchUpdatePhoneNumberOutput } from "./types/BatchUpdatePhoneNumberOutput";
import { BatchUpdateUserInput } from "./types/BatchUpdateUserInput";
import { BatchUpdateUserOutput } from "./types/BatchUpdateUserOutput";
import { ConflictException } from "./types/ConflictException";
import { CreateAccountInput } from "./types/CreateAccountInput";
import { CreateAccountOutput } from "./types/CreateAccountOutput";
import { CreateBotInput } from "./types/CreateBotInput";
import { CreateBotOutput } from "./types/CreateBotOutput";
import { CreatePhoneNumberOrderInput } from "./types/CreatePhoneNumberOrderInput";
import { CreatePhoneNumberOrderOutput } from "./types/CreatePhoneNumberOrderOutput";
import { CreateVoiceConnectorInput } from "./types/CreateVoiceConnectorInput";
import { CreateVoiceConnectorOutput } from "./types/CreateVoiceConnectorOutput";
import { DeleteAccountInput } from "./types/DeleteAccountInput";
import { DeleteAccountOutput } from "./types/DeleteAccountOutput";
import { DeleteEventsConfigurationInput } from "./types/DeleteEventsConfigurationInput";
import { DeleteEventsConfigurationOutput } from "./types/DeleteEventsConfigurationOutput";
import { DeletePhoneNumberInput } from "./types/DeletePhoneNumberInput";
import { DeletePhoneNumberOutput } from "./types/DeletePhoneNumberOutput";
import { DeleteVoiceConnectorInput } from "./types/DeleteVoiceConnectorInput";
import { DeleteVoiceConnectorOriginationInput } from "./types/DeleteVoiceConnectorOriginationInput";
import { DeleteVoiceConnectorOriginationOutput } from "./types/DeleteVoiceConnectorOriginationOutput";
import { DeleteVoiceConnectorOutput } from "./types/DeleteVoiceConnectorOutput";
import { DeleteVoiceConnectorTerminationCredentialsInput } from "./types/DeleteVoiceConnectorTerminationCredentialsInput";
import { DeleteVoiceConnectorTerminationCredentialsOutput } from "./types/DeleteVoiceConnectorTerminationCredentialsOutput";
import { DeleteVoiceConnectorTerminationInput } from "./types/DeleteVoiceConnectorTerminationInput";
import { DeleteVoiceConnectorTerminationOutput } from "./types/DeleteVoiceConnectorTerminationOutput";
import { DisassociatePhoneNumberFromUserInput } from "./types/DisassociatePhoneNumberFromUserInput";
import { DisassociatePhoneNumberFromUserOutput } from "./types/DisassociatePhoneNumberFromUserOutput";
import { DisassociatePhoneNumbersFromVoiceConnectorInput } from "./types/DisassociatePhoneNumbersFromVoiceConnectorInput";
import { DisassociatePhoneNumbersFromVoiceConnectorOutput } from "./types/DisassociatePhoneNumbersFromVoiceConnectorOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetAccountInput } from "./types/GetAccountInput";
import { GetAccountOutput } from "./types/GetAccountOutput";
import { GetAccountSettingsInput } from "./types/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "./types/GetAccountSettingsOutput";
import { GetBotInput } from "./types/GetBotInput";
import { GetBotOutput } from "./types/GetBotOutput";
import { GetEventsConfigurationInput } from "./types/GetEventsConfigurationInput";
import { GetEventsConfigurationOutput } from "./types/GetEventsConfigurationOutput";
import { GetGlobalSettingsInput } from "./types/GetGlobalSettingsInput";
import { GetGlobalSettingsOutput } from "./types/GetGlobalSettingsOutput";
import { GetPhoneNumberInput } from "./types/GetPhoneNumberInput";
import { GetPhoneNumberOrderInput } from "./types/GetPhoneNumberOrderInput";
import { GetPhoneNumberOrderOutput } from "./types/GetPhoneNumberOrderOutput";
import { GetPhoneNumberOutput } from "./types/GetPhoneNumberOutput";
import { GetUserInput } from "./types/GetUserInput";
import { GetUserOutput } from "./types/GetUserOutput";
import { GetUserSettingsInput } from "./types/GetUserSettingsInput";
import { GetUserSettingsOutput } from "./types/GetUserSettingsOutput";
import { GetVoiceConnectorInput } from "./types/GetVoiceConnectorInput";
import { GetVoiceConnectorOriginationInput } from "./types/GetVoiceConnectorOriginationInput";
import { GetVoiceConnectorOriginationOutput } from "./types/GetVoiceConnectorOriginationOutput";
import { GetVoiceConnectorOutput } from "./types/GetVoiceConnectorOutput";
import { GetVoiceConnectorTerminationHealthInput } from "./types/GetVoiceConnectorTerminationHealthInput";
import { GetVoiceConnectorTerminationHealthOutput } from "./types/GetVoiceConnectorTerminationHealthOutput";
import { GetVoiceConnectorTerminationInput } from "./types/GetVoiceConnectorTerminationInput";
import { GetVoiceConnectorTerminationOutput } from "./types/GetVoiceConnectorTerminationOutput";
import { InviteUsersInput } from "./types/InviteUsersInput";
import { InviteUsersOutput } from "./types/InviteUsersOutput";
import { ListAccountsInput } from "./types/ListAccountsInput";
import { ListAccountsOutput } from "./types/ListAccountsOutput";
import { ListBotsInput } from "./types/ListBotsInput";
import { ListBotsOutput } from "./types/ListBotsOutput";
import { ListPhoneNumberOrdersInput } from "./types/ListPhoneNumberOrdersInput";
import { ListPhoneNumberOrdersOutput } from "./types/ListPhoneNumberOrdersOutput";
import { ListPhoneNumbersInput } from "./types/ListPhoneNumbersInput";
import { ListPhoneNumbersOutput } from "./types/ListPhoneNumbersOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { ListVoiceConnectorTerminationCredentialsInput } from "./types/ListVoiceConnectorTerminationCredentialsInput";
import { ListVoiceConnectorTerminationCredentialsOutput } from "./types/ListVoiceConnectorTerminationCredentialsOutput";
import { ListVoiceConnectorsInput } from "./types/ListVoiceConnectorsInput";
import { ListVoiceConnectorsOutput } from "./types/ListVoiceConnectorsOutput";
import { LogoutUserInput } from "./types/LogoutUserInput";
import { LogoutUserOutput } from "./types/LogoutUserOutput";
import { NotFoundException } from "./types/NotFoundException";
import { PutEventsConfigurationInput } from "./types/PutEventsConfigurationInput";
import { PutEventsConfigurationOutput } from "./types/PutEventsConfigurationOutput";
import { PutVoiceConnectorOriginationInput } from "./types/PutVoiceConnectorOriginationInput";
import { PutVoiceConnectorOriginationOutput } from "./types/PutVoiceConnectorOriginationOutput";
import { PutVoiceConnectorTerminationCredentialsInput } from "./types/PutVoiceConnectorTerminationCredentialsInput";
import { PutVoiceConnectorTerminationCredentialsOutput } from "./types/PutVoiceConnectorTerminationCredentialsOutput";
import { PutVoiceConnectorTerminationInput } from "./types/PutVoiceConnectorTerminationInput";
import { PutVoiceConnectorTerminationOutput } from "./types/PutVoiceConnectorTerminationOutput";
import { RegenerateSecurityTokenInput } from "./types/RegenerateSecurityTokenInput";
import { RegenerateSecurityTokenOutput } from "./types/RegenerateSecurityTokenOutput";
import { ResetPersonalPINInput } from "./types/ResetPersonalPINInput";
import { ResetPersonalPINOutput } from "./types/ResetPersonalPINOutput";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { RestorePhoneNumberInput } from "./types/RestorePhoneNumberInput";
import { RestorePhoneNumberOutput } from "./types/RestorePhoneNumberOutput";
import { SearchAvailablePhoneNumbersInput } from "./types/SearchAvailablePhoneNumbersInput";
import { SearchAvailablePhoneNumbersOutput } from "./types/SearchAvailablePhoneNumbersOutput";
import { ServiceFailureException } from "./types/ServiceFailureException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { ThrottledClientException } from "./types/ThrottledClientException";
import { UnauthorizedClientException } from "./types/UnauthorizedClientException";
import { UnprocessableEntityException } from "./types/UnprocessableEntityException";
import { UpdateAccountInput } from "./types/UpdateAccountInput";
import { UpdateAccountOutput } from "./types/UpdateAccountOutput";
import { UpdateAccountSettingsInput } from "./types/UpdateAccountSettingsInput";
import { UpdateAccountSettingsOutput } from "./types/UpdateAccountSettingsOutput";
import { UpdateBotInput } from "./types/UpdateBotInput";
import { UpdateBotOutput } from "./types/UpdateBotOutput";
import { UpdateGlobalSettingsInput } from "./types/UpdateGlobalSettingsInput";
import { UpdateGlobalSettingsOutput } from "./types/UpdateGlobalSettingsOutput";
import { UpdatePhoneNumberInput } from "./types/UpdatePhoneNumberInput";
import { UpdatePhoneNumberOutput } from "./types/UpdatePhoneNumberOutput";
import { UpdateUserInput } from "./types/UpdateUserInput";
import { UpdateUserOutput } from "./types/UpdateUserOutput";
import { UpdateUserSettingsInput } from "./types/UpdateUserSettingsInput";
import { UpdateUserSettingsOutput } from "./types/UpdateUserSettingsOutput";
import { UpdateVoiceConnectorInput } from "./types/UpdateVoiceConnectorInput";
import { UpdateVoiceConnectorOutput } from "./types/UpdateVoiceConnectorOutput";
import { AssociatePhoneNumberWithUserCommand } from "./commands/AssociatePhoneNumberWithUserCommand";
import { AssociatePhoneNumbersWithVoiceConnectorCommand } from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import { BatchDeletePhoneNumberCommand } from "./commands/BatchDeletePhoneNumberCommand";
import { BatchSuspendUserCommand } from "./commands/BatchSuspendUserCommand";
import { BatchUnsuspendUserCommand } from "./commands/BatchUnsuspendUserCommand";
import { BatchUpdatePhoneNumberCommand } from "./commands/BatchUpdatePhoneNumberCommand";
import { BatchUpdateUserCommand } from "./commands/BatchUpdateUserCommand";
import { CreateAccountCommand } from "./commands/CreateAccountCommand";
import { CreateBotCommand } from "./commands/CreateBotCommand";
import { CreatePhoneNumberOrderCommand } from "./commands/CreatePhoneNumberOrderCommand";
import { CreateVoiceConnectorCommand } from "./commands/CreateVoiceConnectorCommand";
import { DeleteAccountCommand } from "./commands/DeleteAccountCommand";
import { DeleteEventsConfigurationCommand } from "./commands/DeleteEventsConfigurationCommand";
import { DeletePhoneNumberCommand } from "./commands/DeletePhoneNumberCommand";
import { DeleteVoiceConnectorCommand } from "./commands/DeleteVoiceConnectorCommand";
import { DeleteVoiceConnectorOriginationCommand } from "./commands/DeleteVoiceConnectorOriginationCommand";
import { DeleteVoiceConnectorTerminationCommand } from "./commands/DeleteVoiceConnectorTerminationCommand";
import { DeleteVoiceConnectorTerminationCredentialsCommand } from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import { DisassociatePhoneNumberFromUserCommand } from "./commands/DisassociatePhoneNumberFromUserCommand";
import { DisassociatePhoneNumbersFromVoiceConnectorCommand } from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetAccountSettingsCommand } from "./commands/GetAccountSettingsCommand";
import { GetBotCommand } from "./commands/GetBotCommand";
import { GetEventsConfigurationCommand } from "./commands/GetEventsConfigurationCommand";
import { GetGlobalSettingsCommand } from "./commands/GetGlobalSettingsCommand";
import { GetPhoneNumberCommand } from "./commands/GetPhoneNumberCommand";
import { GetPhoneNumberOrderCommand } from "./commands/GetPhoneNumberOrderCommand";
import { GetUserCommand } from "./commands/GetUserCommand";
import { GetUserSettingsCommand } from "./commands/GetUserSettingsCommand";
import { GetVoiceConnectorCommand } from "./commands/GetVoiceConnectorCommand";
import { GetVoiceConnectorOriginationCommand } from "./commands/GetVoiceConnectorOriginationCommand";
import { GetVoiceConnectorTerminationCommand } from "./commands/GetVoiceConnectorTerminationCommand";
import { GetVoiceConnectorTerminationHealthCommand } from "./commands/GetVoiceConnectorTerminationHealthCommand";
import { InviteUsersCommand } from "./commands/InviteUsersCommand";
import { ListAccountsCommand } from "./commands/ListAccountsCommand";
import { ListBotsCommand } from "./commands/ListBotsCommand";
import { ListPhoneNumberOrdersCommand } from "./commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommand } from "./commands/ListPhoneNumbersCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { ListVoiceConnectorTerminationCredentialsCommand } from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import { ListVoiceConnectorsCommand } from "./commands/ListVoiceConnectorsCommand";
import { LogoutUserCommand } from "./commands/LogoutUserCommand";
import { PutEventsConfigurationCommand } from "./commands/PutEventsConfigurationCommand";
import { PutVoiceConnectorOriginationCommand } from "./commands/PutVoiceConnectorOriginationCommand";
import { PutVoiceConnectorTerminationCommand } from "./commands/PutVoiceConnectorTerminationCommand";
import { PutVoiceConnectorTerminationCredentialsCommand } from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import { RegenerateSecurityTokenCommand } from "./commands/RegenerateSecurityTokenCommand";
import { ResetPersonalPINCommand } from "./commands/ResetPersonalPINCommand";
import { RestorePhoneNumberCommand } from "./commands/RestorePhoneNumberCommand";
import { SearchAvailablePhoneNumbersCommand } from "./commands/SearchAvailablePhoneNumbersCommand";
import { UpdateAccountCommand } from "./commands/UpdateAccountCommand";
import { UpdateAccountSettingsCommand } from "./commands/UpdateAccountSettingsCommand";
import { UpdateBotCommand } from "./commands/UpdateBotCommand";
import { UpdateGlobalSettingsCommand } from "./commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommand } from "./commands/UpdatePhoneNumberCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";
import { UpdateUserSettingsCommand } from "./commands/UpdateUserSettingsCommand";
import { UpdateVoiceConnectorCommand } from "./commands/UpdateVoiceConnectorCommand";

export class Chime extends ChimeClient {
  /**
   * <p>Associates a phone number with the specified Amazon Chime user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserInput
  ): Promise<AssociatePhoneNumberWithUserOutput>;
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserInput,
    cb: (err: any, data?: AssociatePhoneNumberWithUserOutput) => void
  ): void;
  public associatePhoneNumberWithUser(
    args: AssociatePhoneNumberWithUserInput,
    cb?: (err: any, data?: AssociatePhoneNumberWithUserOutput) => void
  ): Promise<AssociatePhoneNumberWithUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociatePhoneNumberWithUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a phone number with the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorInput
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorOutput>;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorInput,
    cb?: (
      err: any,
      data?: AssociatePhoneNumbersWithVoiceConnectorOutput
    ) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.</p> <p>Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberInput
  ): Promise<BatchDeletePhoneNumberOutput>;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberInput,
    cb: (err: any, data?: BatchDeletePhoneNumberOutput) => void
  ): void;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberInput,
    cb?: (err: any, data?: BatchDeletePhoneNumberOutput) => void
  ): Promise<BatchDeletePhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDeletePhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Suspends up to 50 users from a <code>Team</code> or <code>EnterpriseLWA</code> Amazon Chime account. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Users suspended from a <code>Team</code> account are dissasociated from the account, but they can continue to use Amazon Chime as free users. To remove the suspension from suspended <code>Team</code> account users, invite them to the <code>Team</code> account again. You can use the <a>InviteUsers</a> action to do so.</p> <p>Users suspended from an <code>EnterpriseLWA</code> account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended <code>EnterpriseLWA</code> account users, use the <a>BatchUnsuspendUser</a> action. </p> <p>To sign out users without suspending them, use the <a>LogoutUser</a> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchSuspendUser(
    args: BatchSuspendUserInput
  ): Promise<BatchSuspendUserOutput>;
  public batchSuspendUser(
    args: BatchSuspendUserInput,
    cb: (err: any, data?: BatchSuspendUserOutput) => void
  ): void;
  public batchSuspendUser(
    args: BatchSuspendUserInput,
    cb?: (err: any, data?: BatchSuspendUserOutput) => void
  ): Promise<BatchSuspendUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchSuspendUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime <code>EnterpriseLWA</code> account. Only users on <code>EnterpriseLWA</code> accounts can be unsuspended using this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p> <p>Previously suspended users who are unsuspended using this action are returned to <code>Registered</code> status. Users who are not previously suspended are ignored.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchUnsuspendUser(
    args: BatchUnsuspendUserInput
  ): Promise<BatchUnsuspendUserOutput>;
  public batchUnsuspendUser(
    args: BatchUnsuspendUserInput,
    cb: (err: any, data?: BatchUnsuspendUserOutput) => void
  ): void;
  public batchUnsuspendUser(
    args: BatchUnsuspendUserInput,
    cb?: (err: any, data?: BatchUnsuspendUserOutput) => void
  ): Promise<BatchUnsuspendUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchUnsuspendUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates phone number product types. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you can use only the Amazon Chime Voice Connector product type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberInput
  ): Promise<BatchUpdatePhoneNumberOutput>;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberOutput) => void
  ): void;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberInput,
    cb?: (err: any, data?: BatchUpdatePhoneNumberOutput) => void
  ): Promise<BatchUpdatePhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchUpdatePhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates user details within the <a>UpdateUserRequestItem</a> object for up to 20 users for the specified Amazon Chime account. Currently, only <code>LicenseType</code> updates are supported for this action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchUpdateUser(
    args: BatchUpdateUserInput
  ): Promise<BatchUpdateUserOutput>;
  public batchUpdateUser(
    args: BatchUpdateUserInput,
    cb: (err: any, data?: BatchUpdateUserOutput) => void
  ): void;
  public batchUpdateUser(
    args: BatchUpdateUserInput,
    cb?: (err: any, data?: BatchUpdateUserOutput) => void
  ): Promise<BatchUpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchUpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code> account types are currently supported for this action. For more information about different account types, see <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAccount(args: CreateAccountInput): Promise<CreateAccountOutput>;
  public createAccount(
    args: CreateAccountInput,
    cb: (err: any, data?: CreateAccountOutput) => void
  ): void;
  public createAccount(
    args: CreateAccountInput,
    cb?: (err: any, data?: CreateAccountOutput) => void
  ): Promise<CreateAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a bot for an Amazon Chime Enterprise account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ResourceLimitExceededException} <p>The request exceeds the resource limit.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBot(args: CreateBotInput): Promise<CreateBotOutput>;
  public createBot(
    args: CreateBotInput,
    cb: (err: any, data?: CreateBotOutput) => void
  ): void;
  public createBot(
    args: CreateBotInput,
    cb?: (err: any, data?: CreateBotOutput) => void
  ): Promise<CreateBotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an order for phone numbers to be provisioned. Choose from Amazon Chime Business Calling and Amazon Chime Voice Connector product types. For toll-free numbers, you can use only the Amazon Chime Voice Connector product type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderInput
  ): Promise<CreatePhoneNumberOrderOutput>;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderInput,
    cb: (err: any, data?: CreatePhoneNumberOrderOutput) => void
  ): void;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderInput,
    cb?: (err: any, data?: CreatePhoneNumberOrderOutput) => void
  ): Promise<CreatePhoneNumberOrderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePhoneNumberOrderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Chime Voice Connector under the administrator's AWS account. Enabling <a>CreateVoiceConnectorRequest$RequireEncryption</a> configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVoiceConnector(
    args: CreateVoiceConnectorInput
  ): Promise<CreateVoiceConnectorOutput>;
  public createVoiceConnector(
    args: CreateVoiceConnectorInput,
    cb: (err: any, data?: CreateVoiceConnectorOutput) => void
  ): void;
  public createVoiceConnector(
    args: CreateVoiceConnectorInput,
    cb?: (err: any, data?: CreateVoiceConnectorOutput) => void
  ): Promise<CreateVoiceConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVoiceConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Amazon Chime account. You must suspend all users before deleting a <code>Team</code> account. You can use the <a>BatchSuspendUser</a> action to do so.</p> <p>For <code>EnterpriseLWA</code> and <code>EnterpriseAD</code> accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.</p> <p>Deleted accounts appear in your <code>Disabled</code> accounts list for 90 days. To restore a deleted account from your <code>Disabled</code> accounts list, you must contact AWS Support.</p> <p>After 90 days, deleted accounts are permanently removed from your <code>Disabled</code> accounts list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {UnprocessableEntityException} <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccount(args: DeleteAccountInput): Promise<DeleteAccountOutput>;
  public deleteAccount(
    args: DeleteAccountInput,
    cb: (err: any, data?: DeleteAccountOutput) => void
  ): void;
  public deleteAccount(
    args: DeleteAccountInput,
    cb?: (err: any, data?: DeleteAccountOutput) => void
  ): Promise<DeleteAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the events configuration that allows a bot to receive outgoing events.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ResourceLimitExceededException} <p>The request exceeds the resource limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationInput
  ): Promise<DeleteEventsConfigurationOutput>;
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationInput,
    cb: (err: any, data?: DeleteEventsConfigurationOutput) => void
  ): void;
  public deleteEventsConfiguration(
    args: DeleteEventsConfigurationInput,
    cb?: (err: any, data?: DeleteEventsConfigurationOutput) => void
  ): Promise<DeleteEventsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePhoneNumber(
    args: DeletePhoneNumberInput
  ): Promise<DeletePhoneNumberOutput>;
  public deletePhoneNumber(
    args: DeletePhoneNumberInput,
    cb: (err: any, data?: DeletePhoneNumberOutput) => void
  ): void;
  public deletePhoneNumber(
    args: DeletePhoneNumberInput,
    cb?: (err: any, data?: DeletePhoneNumberOutput) => void
  ): Promise<DeletePhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified Amazon Chime Voice Connector. Any phone numbers assigned to the Amazon Chime Voice Connector must be unassigned from it before it can be deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorInput
  ): Promise<DeleteVoiceConnectorOutput>;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorInput,
    cb: (err: any, data?: DeleteVoiceConnectorOutput) => void
  ): void;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorInput,
    cb?: (err: any, data?: DeleteVoiceConnectorOutput) => void
  ): Promise<DeleteVoiceConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVoiceConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the origination settings for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationInput
  ): Promise<DeleteVoiceConnectorOriginationOutput>;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationInput,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationOutput) => void
  ): void;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationInput,
    cb?: (err: any, data?: DeleteVoiceConnectorOriginationOutput) => void
  ): Promise<DeleteVoiceConnectorOriginationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVoiceConnectorOriginationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the termination settings for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationInput
  ): Promise<DeleteVoiceConnectorTerminationOutput>;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationOutput) => void
  ): void;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationInput,
    cb?: (err: any, data?: DeleteVoiceConnectorTerminationOutput) => void
  ): Promise<DeleteVoiceConnectorTerminationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVoiceConnectorTerminationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified SIP credentials used by your equipment to authenticate during call termination.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsInput
  ): Promise<DeleteVoiceConnectorTerminationCredentialsOutput>;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsInput,
    cb: (
      err: any,
      data?: DeleteVoiceConnectorTerminationCredentialsOutput
    ) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsInput,
    cb?: (
      err: any,
      data?: DeleteVoiceConnectorTerminationCredentialsOutput
    ) => void
  ): Promise<DeleteVoiceConnectorTerminationCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the primary provisioned phone number from the specified Amazon Chime user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserInput
  ): Promise<DisassociatePhoneNumberFromUserOutput>;
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserInput,
    cb: (err: any, data?: DisassociatePhoneNumberFromUserOutput) => void
  ): void;
  public disassociatePhoneNumberFromUser(
    args: DisassociatePhoneNumberFromUserInput,
    cb?: (err: any, data?: DisassociatePhoneNumberFromUserOutput) => void
  ): Promise<DisassociatePhoneNumberFromUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociatePhoneNumberFromUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the specified phone number from the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorInput
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorOutput>;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorInput,
    cb: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorOutput
    ) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorInput,
    cb?: (
      err: any,
      data?: DisassociatePhoneNumbersFromVoiceConnectorOutput
    ) => void
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccount(args: GetAccountInput): Promise<GetAccountOutput>;
  public getAccount(
    args: GetAccountInput,
    cb: (err: any, data?: GetAccountOutput) => void
  ): void;
  public getAccount(
    args: GetAccountInput,
    cb?: (err: any, data?: GetAccountOutput) => void
  ): Promise<GetAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dial out settings. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountSettings(
    args: GetAccountSettingsInput
  ): Promise<GetAccountSettingsOutput>;
  public getAccountSettings(
    args: GetAccountSettingsInput,
    cb: (err: any, data?: GetAccountSettingsOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsInput,
    cb?: (err: any, data?: GetAccountSettingsOutput) => void
  ): Promise<GetAccountSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBot(args: GetBotInput): Promise<GetBotOutput>;
  public getBot(
    args: GetBotInput,
    cb: (err: any, data?: GetBotOutput) => void
  ): void;
  public getBot(
    args: GetBotInput,
    cb?: (err: any, data?: GetBotOutput) => void
  ): Promise<GetBotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ResourceLimitExceededException} <p>The request exceeds the resource limit.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEventsConfiguration(
    args: GetEventsConfigurationInput
  ): Promise<GetEventsConfigurationOutput>;
  public getEventsConfiguration(
    args: GetEventsConfigurationInput,
    cb: (err: any, data?: GetEventsConfigurationOutput) => void
  ): void;
  public getEventsConfiguration(
    args: GetEventsConfigurationInput,
    cb?: (err: any, data?: GetEventsConfigurationOutput) => void
  ): Promise<GetEventsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEventsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGlobalSettings(
    args: GetGlobalSettingsInput
  ): Promise<GetGlobalSettingsOutput>;
  public getGlobalSettings(
    args: GetGlobalSettingsInput,
    cb: (err: any, data?: GetGlobalSettingsOutput) => void
  ): void;
  public getGlobalSettings(
    args: GetGlobalSettingsInput,
    cb?: (err: any, data?: GetGlobalSettingsOutput) => void
  ): Promise<GetGlobalSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGlobalSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPhoneNumber(
    args: GetPhoneNumberInput
  ): Promise<GetPhoneNumberOutput>;
  public getPhoneNumber(
    args: GetPhoneNumberInput,
    cb: (err: any, data?: GetPhoneNumberOutput) => void
  ): void;
  public getPhoneNumber(
    args: GetPhoneNumberInput,
    cb?: (err: any, data?: GetPhoneNumberOutput) => void
  ): Promise<GetPhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details for the specified phone number order, such as order creation timestamp, phone numbers in E.164 format, product type, and order status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderInput
  ): Promise<GetPhoneNumberOrderOutput>;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderInput,
    cb: (err: any, data?: GetPhoneNumberOrderOutput) => void
  ): void;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderInput,
    cb?: (err: any, data?: GetPhoneNumberOrderOutput) => void
  ): Promise<GetPhoneNumberOrderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPhoneNumberOrderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details for the specified user ID, such as primary email address, license type, and personal meeting PIN.</p> <p>To retrieve user details with an email address instead of a user ID, use the <a>ListUsers</a> action, and then filter by email address.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUser(args: GetUserInput): Promise<GetUserOutput>;
  public getUser(
    args: GetUserInput,
    cb: (err: any, data?: GetUserOutput) => void
  ): void;
  public getUser(
    args: GetUserInput,
    cb?: (err: any, data?: GetUserOutput) => void
  ): Promise<GetUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves settings for the specified user ID, such as any associated phone number settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserSettings(
    args: GetUserSettingsInput
  ): Promise<GetUserSettingsOutput>;
  public getUserSettings(
    args: GetUserSettingsInput,
    cb: (err: any, data?: GetUserSettingsOutput) => void
  ): void;
  public getUserSettings(
    args: GetUserSettingsInput,
    cb?: (err: any, data?: GetUserSettingsOutput) => void
  ): Promise<GetUserSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps, name, outbound host, and encryption requirements.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVoiceConnector(
    args: GetVoiceConnectorInput
  ): Promise<GetVoiceConnectorOutput>;
  public getVoiceConnector(
    args: GetVoiceConnectorInput,
    cb: (err: any, data?: GetVoiceConnectorOutput) => void
  ): void;
  public getVoiceConnector(
    args: GetVoiceConnectorInput,
    cb?: (err: any, data?: GetVoiceConnectorOutput) => void
  ): Promise<GetVoiceConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVoiceConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves origination setting details for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationInput
  ): Promise<GetVoiceConnectorOriginationOutput>;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationInput,
    cb: (err: any, data?: GetVoiceConnectorOriginationOutput) => void
  ): void;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationInput,
    cb?: (err: any, data?: GetVoiceConnectorOriginationOutput) => void
  ): Promise<GetVoiceConnectorOriginationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVoiceConnectorOriginationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves termination setting details for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationInput
  ): Promise<GetVoiceConnectorTerminationOutput>;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationOutput) => void
  ): void;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationInput,
    cb?: (err: any, data?: GetVoiceConnectorTerminationOutput) => void
  ): Promise<GetVoiceConnectorTerminationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVoiceConnectorTerminationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the last time a SIP <code>OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthInput
  ): Promise<GetVoiceConnectorTerminationHealthOutput>;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthOutput) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthInput,
    cb?: (err: any, data?: GetVoiceConnectorTerminationHealthOutput) => void
  ): Promise<GetVoiceConnectorTerminationHealthOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVoiceConnectorTerminationHealthCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends email invites to as many as 50 users, inviting them to the specified Amazon Chime <code>Team</code> account. Only <code>Team</code> account types are currently supported for this action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public inviteUsers(args: InviteUsersInput): Promise<InviteUsersOutput>;
  public inviteUsers(
    args: InviteUsersInput,
    cb: (err: any, data?: InviteUsersOutput) => void
  ): void;
  public inviteUsers(
    args: InviteUsersInput,
    cb?: (err: any, data?: InviteUsersOutput) => void
  ): Promise<InviteUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InviteUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAccounts(args: ListAccountsInput): Promise<ListAccountsOutput>;
  public listAccounts(
    args: ListAccountsInput,
    cb: (err: any, data?: ListAccountsOutput) => void
  ): void;
  public listAccounts(
    args: ListAccountsInput,
    cb?: (err: any, data?: ListAccountsOutput) => void
  ): Promise<ListAccountsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAccountsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBots(args: ListBotsInput): Promise<ListBotsOutput>;
  public listBots(
    args: ListBotsInput,
    cb: (err: any, data?: ListBotsOutput) => void
  ): void;
  public listBots(
    args: ListBotsInput,
    cb?: (err: any, data?: ListBotsOutput) => void
  ): Promise<ListBotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the phone number orders for the administrator's Amazon Chime account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersInput
  ): Promise<ListPhoneNumberOrdersOutput>;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersInput,
    cb: (err: any, data?: ListPhoneNumberOrdersOutput) => void
  ): void;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersInput,
    cb?: (err: any, data?: ListPhoneNumberOrdersOutput) => void
  ): Promise<ListPhoneNumberOrdersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPhoneNumberOrdersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, or Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPhoneNumbers(
    args: ListPhoneNumbersInput
  ): Promise<ListPhoneNumbersOutput>;
  public listPhoneNumbers(
    args: ListPhoneNumbersInput,
    cb: (err: any, data?: ListPhoneNumbersOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersInput,
    cb?: (err: any, data?: ListPhoneNumbersOutput) => void
  ): Promise<ListPhoneNumbersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPhoneNumbersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
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
   * <p>Lists the SIP credentials for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsInput
  ): Promise<ListVoiceConnectorTerminationCredentialsOutput>;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsInput,
    cb: (
      err: any,
      data?: ListVoiceConnectorTerminationCredentialsOutput
    ) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsInput,
    cb?: (
      err: any,
      data?: ListVoiceConnectorTerminationCredentialsOutput
    ) => void
  ): Promise<ListVoiceConnectorTerminationCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the Amazon Chime Voice Connectors for the administrator's AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVoiceConnectors(
    args: ListVoiceConnectorsInput
  ): Promise<ListVoiceConnectorsOutput>;
  public listVoiceConnectors(
    args: ListVoiceConnectorsInput,
    cb: (err: any, data?: ListVoiceConnectorsOutput) => void
  ): void;
  public listVoiceConnectors(
    args: ListVoiceConnectorsInput,
    cb?: (err: any, data?: ListVoiceConnectorsOutput) => void
  ): Promise<ListVoiceConnectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVoiceConnectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public logoutUser(args: LogoutUserInput): Promise<LogoutUserOutput>;
  public logoutUser(
    args: LogoutUserInput,
    cb: (err: any, data?: LogoutUserOutput) => void
  ): void;
  public logoutUser(
    args: LogoutUserInput,
    cb?: (err: any, data?: LogoutUserOutput) => void
  ): Promise<LogoutUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new LogoutUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see <a>Bot</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ResourceLimitExceededException} <p>The request exceeds the resource limit.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEventsConfiguration(
    args: PutEventsConfigurationInput
  ): Promise<PutEventsConfigurationOutput>;
  public putEventsConfiguration(
    args: PutEventsConfigurationInput,
    cb: (err: any, data?: PutEventsConfigurationOutput) => void
  ): void;
  public putEventsConfiguration(
    args: PutEventsConfigurationInput,
    cb?: (err: any, data?: PutEventsConfigurationOutput) => void
  ): Promise<PutEventsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEventsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds origination settings for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationInput
  ): Promise<PutVoiceConnectorOriginationOutput>;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationInput,
    cb: (err: any, data?: PutVoiceConnectorOriginationOutput) => void
  ): void;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationInput,
    cb?: (err: any, data?: PutVoiceConnectorOriginationOutput) => void
  ): Promise<PutVoiceConnectorOriginationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutVoiceConnectorOriginationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds termination settings for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationInput
  ): Promise<PutVoiceConnectorTerminationOutput>;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationOutput) => void
  ): void;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationInput,
    cb?: (err: any, data?: PutVoiceConnectorTerminationOutput) => void
  ): Promise<PutVoiceConnectorTerminationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutVoiceConnectorTerminationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds termination SIP credentials for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsInput
  ): Promise<PutVoiceConnectorTerminationCredentialsOutput>;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsOutput) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsInput,
    cb?: (
      err: any,
      data?: PutVoiceConnectorTerminationCredentialsOutput
    ) => void
  ): Promise<PutVoiceConnectorTerminationCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Regenerates the security token for a bot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenInput
  ): Promise<RegenerateSecurityTokenOutput>;
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenInput,
    cb: (err: any, data?: RegenerateSecurityTokenOutput) => void
  ): void;
  public regenerateSecurityToken(
    args: RegenerateSecurityTokenInput,
    cb?: (err: any, data?: RegenerateSecurityTokenOutput) => void
  ): Promise<RegenerateSecurityTokenOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegenerateSecurityTokenCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the <a>User</a> object with the updated personal meeting PIN.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetPersonalPIN(
    args: ResetPersonalPINInput
  ): Promise<ResetPersonalPINOutput>;
  public resetPersonalPIN(
    args: ResetPersonalPINInput,
    cb: (err: any, data?: ResetPersonalPINOutput) => void
  ): void;
  public resetPersonalPIN(
    args: ResetPersonalPINInput,
    cb?: (err: any, data?: ResetPersonalPINOutput) => void
  ): Promise<ResetPersonalPINOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetPersonalPINCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves a phone number from the <b>Deletion queue</b> back into the phone number <b>Inventory</b>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restorePhoneNumber(
    args: RestorePhoneNumberInput
  ): Promise<RestorePhoneNumberOutput>;
  public restorePhoneNumber(
    args: RestorePhoneNumberInput,
    cb: (err: any, data?: RestorePhoneNumberOutput) => void
  ): void;
  public restorePhoneNumber(
    args: RestorePhoneNumberInput,
    cb?: (err: any, data?: RestorePhoneNumberOutput) => void
  ): Promise<RestorePhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestorePhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Searches phone numbers that can be ordered.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersInput
  ): Promise<SearchAvailablePhoneNumbersOutput>;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersOutput) => void
  ): void;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersInput,
    cb?: (err: any, data?: SearchAvailablePhoneNumbersOutput) => void
  ): Promise<SearchAvailablePhoneNumbersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SearchAvailablePhoneNumbersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates account details for the specified Amazon Chime account. Currently, only account name updates are supported for this action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccount(args: UpdateAccountInput): Promise<UpdateAccountOutput>;
  public updateAccount(
    args: UpdateAccountInput,
    cb: (err: any, data?: UpdateAccountOutput) => void
  ): void;
  public updateAccount(
    args: UpdateAccountInput,
    cb?: (err: any, data?: UpdateAccountOutput) => void
  ): Promise<UpdateAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {ConflictException} <p>The request could not be processed because of conflict in the current state of the resource.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccountSettings(
    args: UpdateAccountSettingsInput
  ): Promise<UpdateAccountSettingsOutput>;
  public updateAccountSettings(
    args: UpdateAccountSettingsInput,
    cb: (err: any, data?: UpdateAccountSettingsOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsInput,
    cb?: (err: any, data?: UpdateAccountSettingsOutput) => void
  ): Promise<UpdateAccountSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccountSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBot(args: UpdateBotInput): Promise<UpdateBotOutput>;
  public updateBot(
    args: UpdateBotInput,
    cb: (err: any, data?: UpdateBotOutput) => void
  ): void;
  public updateBot(
    args: UpdateBotInput,
    cb?: (err: any, data?: UpdateBotOutput) => void
  ): Promise<UpdateBotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGlobalSettings(
    args: UpdateGlobalSettingsInput
  ): Promise<UpdateGlobalSettingsOutput>;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsInput,
    cb: (err: any, data?: UpdateGlobalSettingsOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsInput,
    cb?: (err: any, data?: UpdateGlobalSettingsOutput) => void
  ): Promise<UpdateGlobalSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGlobalSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates phone number details, such as product type, for the specified phone number ID. For toll-free numbers, you can use only the Amazon Chime Voice Connector product type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePhoneNumber(
    args: UpdatePhoneNumberInput
  ): Promise<UpdatePhoneNumberOutput>;
  public updatePhoneNumber(
    args: UpdatePhoneNumberInput,
    cb: (err: any, data?: UpdatePhoneNumberOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberInput,
    cb?: (err: any, data?: UpdatePhoneNumberOutput) => void
  ): Promise<UpdatePhoneNumberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePhoneNumberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates user details for a specified user ID. Currently, only <code>LicenseType</code> updates are supported for this action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUser(args: UpdateUserInput): Promise<UpdateUserOutput>;
  public updateUser(
    args: UpdateUserInput,
    cb: (err: any, data?: UpdateUserOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserInput,
    cb?: (err: any, data?: UpdateUserOutput) => void
  ): Promise<UpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings for the specified user, such as phone number settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUserSettings(
    args: UpdateUserSettingsInput
  ): Promise<UpdateUserSettingsOutput>;
  public updateUserSettings(
    args: UpdateUserSettingsInput,
    cb: (err: any, data?: UpdateUserSettingsOutput) => void
  ): void;
  public updateUserSettings(
    args: UpdateUserSettingsInput,
    cb?: (err: any, data?: UpdateUserSettingsOutput) => void
  ): Promise<UpdateUserSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates details for the specified Amazon Chime Voice Connector.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedClientException} <p>The client is not currently authorized to make the request.</p>
   *   - {NotFoundException} <p>One or more of the resources in the request does not exist in the system.</p>
   *   - {ForbiddenException} <p>The client is permanently forbidden from making the request. For example, when a user tries to create an account from an unsupported Region.</p>
   *   - {BadRequestException} <p>The input parameters don't match the service's restrictions.</p>
   *   - {ThrottledClientException} <p>The client exceeded its request rate limit.</p>
   *   - {ServiceUnavailableException} <p>The service is currently unavailable.</p>
   *   - {ServiceFailureException} <p>The service encountered an unexpected error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVoiceConnector(
    args: UpdateVoiceConnectorInput
  ): Promise<UpdateVoiceConnectorOutput>;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorInput,
    cb: (err: any, data?: UpdateVoiceConnectorOutput) => void
  ): void;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorInput,
    cb?: (err: any, data?: UpdateVoiceConnectorOutput) => void
  ): Promise<UpdateVoiceConnectorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVoiceConnectorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
