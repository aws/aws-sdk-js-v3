import {
  AccessDeniedException,
  AccountStatus,
  AccountType,
  AssociatePhoneNumberWithUserCommand,
  AssociateSigninDelegateGroupsWithAccountCommand,
  BadRequestException,
  BatchCreateRoomMembershipCommand,
  BatchDeletePhoneNumberCommand,
  BatchSuspendUserCommand,
  BatchUnsuspendUserCommand,
  BatchUpdatePhoneNumberCommand,
  BatchUpdateUserCommand,
  BotType,
  CallingNameStatus,
  Chime,
  ChimeClient,
  ChimeServiceException,
  ConflictException,
  CreateAccountCommand,
  CreateBotCommand,
  CreateMeetingDialOutCommand,
  CreatePhoneNumberOrderCommand,
  CreateRoomCommand,
  CreateRoomMembershipCommand,
  CreateUserCommand,
  DeleteAccountCommand,
  DeleteEventsConfigurationCommand,
  DeletePhoneNumberCommand,
  DeleteRoomCommand,
  DeleteRoomMembershipCommand,
  DisassociatePhoneNumberFromUserCommand,
  DisassociateSigninDelegateGroupsFromAccountCommand,
  EmailStatus,
  ErrorCode,
  ForbiddenException,
  GetAccountCommand,
  GetAccountSettingsCommand,
  GetBotCommand,
  GetEventsConfigurationCommand,
  GetGlobalSettingsCommand,
  GetPhoneNumberCommand,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberSettingsCommand,
  GetRetentionSettingsCommand,
  GetRoomCommand,
  GetUserCommand,
  GetUserSettingsCommand,
  InviteStatus,
  InviteUsersCommand,
  License,
  ListAccountsCommand,
  ListBotsCommand,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumbersCommand,
  ListRoomMembershipsCommand,
  ListRoomsCommand,
  ListSupportedPhoneNumberCountriesCommand,
  ListUsersCommand,
  LogoutUserCommand,
  MemberType,
  NotFoundException,
  OrderedPhoneNumberStatus,
  PhoneNumberAssociationName,
  PhoneNumberOrderStatus,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  PutEventsConfigurationCommand,
  PutRetentionSettingsCommand,
  RedactConversationMessageCommand,
  RedactRoomMessageCommand,
  RegenerateSecurityTokenCommand,
  RegistrationStatus,
  ResetPersonalPINCommand,
  ResourceLimitExceededException,
  RestorePhoneNumberCommand,
  RoomMembershipRole,
  SearchAvailablePhoneNumbersCommand,
  ServiceFailureException,
  ServiceUnavailableException,
  ThrottledClientException,
  UnauthorizedClientException,
  UnprocessableEntityException,
  UpdateAccountCommand,
  UpdateAccountSettingsCommand,
  UpdateBotCommand,
  UpdateGlobalSettingsCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberSettingsCommand,
  UpdateRoomCommand,
  UpdateRoomMembershipCommand,
  UpdateUserCommand,
  UpdateUserSettingsCommand,
  UserType,
  paginateListAccounts,
  paginateListBots,
  paginateListPhoneNumberOrders,
  paginateListPhoneNumbers,
  paginateListRoomMemberships,
  paginateListRooms,
  paginateListUsers,
  paginateSearchAvailablePhoneNumbers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeClient === "function");
assert(typeof Chime === "function");
// commands
assert(typeof AssociatePhoneNumberWithUserCommand === "function");
assert(typeof AssociateSigninDelegateGroupsWithAccountCommand === "function");
assert(typeof BatchCreateRoomMembershipCommand === "function");
assert(typeof BatchDeletePhoneNumberCommand === "function");
assert(typeof BatchSuspendUserCommand === "function");
assert(typeof BatchUnsuspendUserCommand === "function");
assert(typeof BatchUpdatePhoneNumberCommand === "function");
assert(typeof BatchUpdateUserCommand === "function");
assert(typeof CreateAccountCommand === "function");
assert(typeof CreateBotCommand === "function");
assert(typeof CreateMeetingDialOutCommand === "function");
assert(typeof CreatePhoneNumberOrderCommand === "function");
assert(typeof CreateRoomCommand === "function");
assert(typeof CreateRoomMembershipCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteAccountCommand === "function");
assert(typeof DeleteEventsConfigurationCommand === "function");
assert(typeof DeletePhoneNumberCommand === "function");
assert(typeof DeleteRoomCommand === "function");
assert(typeof DeleteRoomMembershipCommand === "function");
assert(typeof DisassociatePhoneNumberFromUserCommand === "function");
assert(typeof DisassociateSigninDelegateGroupsFromAccountCommand === "function");
assert(typeof GetAccountCommand === "function");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetBotCommand === "function");
assert(typeof GetEventsConfigurationCommand === "function");
assert(typeof GetGlobalSettingsCommand === "function");
assert(typeof GetPhoneNumberCommand === "function");
assert(typeof GetPhoneNumberOrderCommand === "function");
assert(typeof GetPhoneNumberSettingsCommand === "function");
assert(typeof GetRetentionSettingsCommand === "function");
assert(typeof GetRoomCommand === "function");
assert(typeof GetUserCommand === "function");
assert(typeof GetUserSettingsCommand === "function");
assert(typeof InviteUsersCommand === "function");
assert(typeof ListAccountsCommand === "function");
assert(typeof ListBotsCommand === "function");
assert(typeof ListPhoneNumberOrdersCommand === "function");
assert(typeof ListPhoneNumbersCommand === "function");
assert(typeof ListRoomMembershipsCommand === "function");
assert(typeof ListRoomsCommand === "function");
assert(typeof ListSupportedPhoneNumberCountriesCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof LogoutUserCommand === "function");
assert(typeof PutEventsConfigurationCommand === "function");
assert(typeof PutRetentionSettingsCommand === "function");
assert(typeof RedactConversationMessageCommand === "function");
assert(typeof RedactRoomMessageCommand === "function");
assert(typeof RegenerateSecurityTokenCommand === "function");
assert(typeof ResetPersonalPINCommand === "function");
assert(typeof RestorePhoneNumberCommand === "function");
assert(typeof SearchAvailablePhoneNumbersCommand === "function");
assert(typeof UpdateAccountCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateBotCommand === "function");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePhoneNumberSettingsCommand === "function");
assert(typeof UpdateRoomCommand === "function");
assert(typeof UpdateRoomMembershipCommand === "function");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUserSettingsCommand === "function");
// enums
assert(typeof AccountStatus === "object");
assert(typeof AccountType === "object");
assert(typeof BotType === "object");
assert(typeof CallingNameStatus === "object");
assert(typeof EmailStatus === "object");
assert(typeof ErrorCode === "object");
assert(typeof InviteStatus === "object");
assert(typeof License === "object");
assert(typeof MemberType === "object");
assert(typeof OrderedPhoneNumberStatus === "object");
assert(typeof PhoneNumberAssociationName === "object");
assert(typeof PhoneNumberOrderStatus === "object");
assert(typeof PhoneNumberProductType === "object");
assert(typeof PhoneNumberStatus === "object");
assert(typeof PhoneNumberType === "object");
assert(typeof RegistrationStatus === "object");
assert(typeof RoomMembershipRole === "object");
assert(typeof UserType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ChimeServiceException);
assert(BadRequestException.prototype instanceof ChimeServiceException);
assert(ConflictException.prototype instanceof ChimeServiceException);
assert(ForbiddenException.prototype instanceof ChimeServiceException);
assert(NotFoundException.prototype instanceof ChimeServiceException);
assert(ResourceLimitExceededException.prototype instanceof ChimeServiceException);
assert(ServiceFailureException.prototype instanceof ChimeServiceException);
assert(ServiceUnavailableException.prototype instanceof ChimeServiceException);
assert(ThrottledClientException.prototype instanceof ChimeServiceException);
assert(UnauthorizedClientException.prototype instanceof ChimeServiceException);
assert(UnprocessableEntityException.prototype instanceof ChimeServiceException);
assert(ChimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccounts === "function");
assert(typeof paginateListBots === "function");
assert(typeof paginateListPhoneNumberOrders === "function");
assert(typeof paginateListPhoneNumbers === "function");
assert(typeof paginateListRoomMemberships === "function");
assert(typeof paginateListRooms === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateSearchAvailablePhoneNumbers === "function");
console.log(`Chime index test passed.`);
