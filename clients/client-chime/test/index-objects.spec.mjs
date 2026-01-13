import {
  AccessDeniedException,
  AccessDeniedException$,
  Account$,
  AccountSettings$,
  AccountStatus,
  AccountType,
  AlexaForBusinessMetadata$,
  AssociatePhoneNumberWithUser$,
  AssociatePhoneNumberWithUserCommand,
  AssociatePhoneNumberWithUserRequest$,
  AssociatePhoneNumberWithUserResponse$,
  AssociateSigninDelegateGroupsWithAccount$,
  AssociateSigninDelegateGroupsWithAccountCommand,
  AssociateSigninDelegateGroupsWithAccountRequest$,
  AssociateSigninDelegateGroupsWithAccountResponse$,
  BadRequestException,
  BadRequestException$,
  BatchCreateRoomMembership$,
  BatchCreateRoomMembershipCommand,
  BatchCreateRoomMembershipRequest$,
  BatchCreateRoomMembershipResponse$,
  BatchDeletePhoneNumber$,
  BatchDeletePhoneNumberCommand,
  BatchDeletePhoneNumberRequest$,
  BatchDeletePhoneNumberResponse$,
  BatchSuspendUser$,
  BatchSuspendUserCommand,
  BatchSuspendUserRequest$,
  BatchSuspendUserResponse$,
  BatchUnsuspendUser$,
  BatchUnsuspendUserCommand,
  BatchUnsuspendUserRequest$,
  BatchUnsuspendUserResponse$,
  BatchUpdatePhoneNumber$,
  BatchUpdatePhoneNumberCommand,
  BatchUpdatePhoneNumberRequest$,
  BatchUpdatePhoneNumberResponse$,
  BatchUpdateUser$,
  BatchUpdateUserCommand,
  BatchUpdateUserRequest$,
  BatchUpdateUserResponse$,
  Bot$,
  BotType,
  BusinessCallingSettings$,
  CallingNameStatus,
  Chime,
  ChimeClient,
  ChimeServiceException,
  ConflictException,
  ConflictException$,
  ConversationRetentionSettings$,
  CreateAccount$,
  CreateAccountCommand,
  CreateAccountRequest$,
  CreateAccountResponse$,
  CreateBot$,
  CreateBotCommand,
  CreateBotRequest$,
  CreateBotResponse$,
  CreateMeetingDialOut$,
  CreateMeetingDialOutCommand,
  CreateMeetingDialOutRequest$,
  CreateMeetingDialOutResponse$,
  CreatePhoneNumberOrder$,
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderRequest$,
  CreatePhoneNumberOrderResponse$,
  CreateRoom$,
  CreateRoomCommand,
  CreateRoomMembership$,
  CreateRoomMembershipCommand,
  CreateRoomMembershipRequest$,
  CreateRoomMembershipResponse$,
  CreateRoomRequest$,
  CreateRoomResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  DeleteAccount$,
  DeleteAccountCommand,
  DeleteAccountRequest$,
  DeleteAccountResponse$,
  DeleteEventsConfiguration$,
  DeleteEventsConfigurationCommand,
  DeleteEventsConfigurationRequest$,
  DeletePhoneNumber$,
  DeletePhoneNumberCommand,
  DeletePhoneNumberRequest$,
  DeleteRoom$,
  DeleteRoomCommand,
  DeleteRoomMembership$,
  DeleteRoomMembershipCommand,
  DeleteRoomMembershipRequest$,
  DeleteRoomRequest$,
  DisassociatePhoneNumberFromUser$,
  DisassociatePhoneNumberFromUserCommand,
  DisassociatePhoneNumberFromUserRequest$,
  DisassociatePhoneNumberFromUserResponse$,
  DisassociateSigninDelegateGroupsFromAccount$,
  DisassociateSigninDelegateGroupsFromAccountCommand,
  DisassociateSigninDelegateGroupsFromAccountRequest$,
  DisassociateSigninDelegateGroupsFromAccountResponse$,
  EmailStatus,
  ErrorCode,
  EventsConfiguration$,
  ForbiddenException,
  ForbiddenException$,
  GetAccount$,
  GetAccountCommand,
  GetAccountRequest$,
  GetAccountResponse$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsRequest$,
  GetAccountSettingsResponse$,
  GetBot$,
  GetBotCommand,
  GetBotRequest$,
  GetBotResponse$,
  GetEventsConfiguration$,
  GetEventsConfigurationCommand,
  GetEventsConfigurationRequest$,
  GetEventsConfigurationResponse$,
  GetGlobalSettings$,
  GetGlobalSettingsCommand,
  GetGlobalSettingsResponse$,
  GetPhoneNumber$,
  GetPhoneNumberCommand,
  GetPhoneNumberOrder$,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberOrderRequest$,
  GetPhoneNumberOrderResponse$,
  GetPhoneNumberRequest$,
  GetPhoneNumberResponse$,
  GetPhoneNumberSettings$,
  GetPhoneNumberSettingsCommand,
  GetPhoneNumberSettingsResponse$,
  GetRetentionSettings$,
  GetRetentionSettingsCommand,
  GetRetentionSettingsRequest$,
  GetRetentionSettingsResponse$,
  GetRoom$,
  GetRoomCommand,
  GetRoomRequest$,
  GetRoomResponse$,
  GetUser$,
  GetUserCommand,
  GetUserRequest$,
  GetUserResponse$,
  GetUserSettings$,
  GetUserSettingsCommand,
  GetUserSettingsRequest$,
  GetUserSettingsResponse$,
  Invite$,
  InviteStatus,
  InviteUsers$,
  InviteUsersCommand,
  InviteUsersRequest$,
  InviteUsersResponse$,
  License,
  ListAccounts$,
  ListAccountsCommand,
  ListAccountsRequest$,
  ListAccountsResponse$,
  ListBots$,
  ListBotsCommand,
  ListBotsRequest$,
  ListBotsResponse$,
  ListPhoneNumberOrders$,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersRequest$,
  ListPhoneNumberOrdersResponse$,
  ListPhoneNumbers$,
  ListPhoneNumbersCommand,
  ListPhoneNumbersRequest$,
  ListPhoneNumbersResponse$,
  ListRoomMemberships$,
  ListRoomMembershipsCommand,
  ListRoomMembershipsRequest$,
  ListRoomMembershipsResponse$,
  ListRooms$,
  ListRoomsCommand,
  ListRoomsRequest$,
  ListRoomsResponse$,
  ListSupportedPhoneNumberCountries$,
  ListSupportedPhoneNumberCountriesCommand,
  ListSupportedPhoneNumberCountriesRequest$,
  ListSupportedPhoneNumberCountriesResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  LogoutUser$,
  LogoutUserCommand,
  LogoutUserRequest$,
  LogoutUserResponse$,
  Member$,
  MemberError$,
  MembershipItem$,
  MemberType,
  NotFoundException,
  NotFoundException$,
  OrderedPhoneNumber$,
  OrderedPhoneNumberStatus,
  paginateListAccounts,
  paginateListBots,
  paginateListPhoneNumberOrders,
  paginateListPhoneNumbers,
  paginateListRoomMemberships,
  paginateListRooms,
  paginateListUsers,
  paginateSearchAvailablePhoneNumbers,
  PhoneNumber$,
  PhoneNumberAssociation$,
  PhoneNumberAssociationName,
  PhoneNumberCapabilities$,
  PhoneNumberCountry$,
  PhoneNumberError$,
  PhoneNumberOrder$,
  PhoneNumberOrderStatus,
  PhoneNumberProductType,
  PhoneNumberStatus,
  PhoneNumberType,
  PutEventsConfiguration$,
  PutEventsConfigurationCommand,
  PutEventsConfigurationRequest$,
  PutEventsConfigurationResponse$,
  PutRetentionSettings$,
  PutRetentionSettingsCommand,
  PutRetentionSettingsRequest$,
  PutRetentionSettingsResponse$,
  RedactConversationMessage$,
  RedactConversationMessageCommand,
  RedactConversationMessageRequest$,
  RedactConversationMessageResponse$,
  RedactRoomMessage$,
  RedactRoomMessageCommand,
  RedactRoomMessageRequest$,
  RedactRoomMessageResponse$,
  RegenerateSecurityToken$,
  RegenerateSecurityTokenCommand,
  RegenerateSecurityTokenRequest$,
  RegenerateSecurityTokenResponse$,
  RegistrationStatus,
  ResetPersonalPIN$,
  ResetPersonalPINCommand,
  ResetPersonalPINRequest$,
  ResetPersonalPINResponse$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  RestorePhoneNumber$,
  RestorePhoneNumberCommand,
  RestorePhoneNumberRequest$,
  RestorePhoneNumberResponse$,
  RetentionSettings$,
  Room$,
  RoomMembership$,
  RoomMembershipRole,
  RoomRetentionSettings$,
  SearchAvailablePhoneNumbers$,
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersRequest$,
  SearchAvailablePhoneNumbersResponse$,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SigninDelegateGroup$,
  TelephonySettings$,
  ThrottledClientException,
  ThrottledClientException$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UpdateAccount$,
  UpdateAccountCommand,
  UpdateAccountRequest$,
  UpdateAccountResponse$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsRequest$,
  UpdateAccountSettingsResponse$,
  UpdateBot$,
  UpdateBotCommand,
  UpdateBotRequest$,
  UpdateBotResponse$,
  UpdateGlobalSettings$,
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsRequest$,
  UpdatePhoneNumber$,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberRequest$,
  UpdatePhoneNumberRequestItem$,
  UpdatePhoneNumberResponse$,
  UpdatePhoneNumberSettings$,
  UpdatePhoneNumberSettingsCommand,
  UpdatePhoneNumberSettingsRequest$,
  UpdateRoom$,
  UpdateRoomCommand,
  UpdateRoomMembership$,
  UpdateRoomMembershipCommand,
  UpdateRoomMembershipRequest$,
  UpdateRoomMembershipResponse$,
  UpdateRoomRequest$,
  UpdateRoomResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserRequestItem$,
  UpdateUserResponse$,
  UpdateUserSettings$,
  UpdateUserSettingsCommand,
  UpdateUserSettingsRequest$,
  User$,
  UserError$,
  UserSettings$,
  UserType,
  VoiceConnectorSettings$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeClient === "function");
assert(typeof Chime === "function");
// commands
assert(typeof AssociatePhoneNumberWithUserCommand === "function");
assert(typeof AssociatePhoneNumberWithUser$ === "object");
assert(typeof AssociateSigninDelegateGroupsWithAccountCommand === "function");
assert(typeof AssociateSigninDelegateGroupsWithAccount$ === "object");
assert(typeof BatchCreateRoomMembershipCommand === "function");
assert(typeof BatchCreateRoomMembership$ === "object");
assert(typeof BatchDeletePhoneNumberCommand === "function");
assert(typeof BatchDeletePhoneNumber$ === "object");
assert(typeof BatchSuspendUserCommand === "function");
assert(typeof BatchSuspendUser$ === "object");
assert(typeof BatchUnsuspendUserCommand === "function");
assert(typeof BatchUnsuspendUser$ === "object");
assert(typeof BatchUpdatePhoneNumberCommand === "function");
assert(typeof BatchUpdatePhoneNumber$ === "object");
assert(typeof BatchUpdateUserCommand === "function");
assert(typeof BatchUpdateUser$ === "object");
assert(typeof CreateAccountCommand === "function");
assert(typeof CreateAccount$ === "object");
assert(typeof CreateBotCommand === "function");
assert(typeof CreateBot$ === "object");
assert(typeof CreateMeetingDialOutCommand === "function");
assert(typeof CreateMeetingDialOut$ === "object");
assert(typeof CreatePhoneNumberOrderCommand === "function");
assert(typeof CreatePhoneNumberOrder$ === "object");
assert(typeof CreateRoomCommand === "function");
assert(typeof CreateRoom$ === "object");
assert(typeof CreateRoomMembershipCommand === "function");
assert(typeof CreateRoomMembership$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteAccountCommand === "function");
assert(typeof DeleteAccount$ === "object");
assert(typeof DeleteEventsConfigurationCommand === "function");
assert(typeof DeleteEventsConfiguration$ === "object");
assert(typeof DeletePhoneNumberCommand === "function");
assert(typeof DeletePhoneNumber$ === "object");
assert(typeof DeleteRoomCommand === "function");
assert(typeof DeleteRoom$ === "object");
assert(typeof DeleteRoomMembershipCommand === "function");
assert(typeof DeleteRoomMembership$ === "object");
assert(typeof DisassociatePhoneNumberFromUserCommand === "function");
assert(typeof DisassociatePhoneNumberFromUser$ === "object");
assert(typeof DisassociateSigninDelegateGroupsFromAccountCommand === "function");
assert(typeof DisassociateSigninDelegateGroupsFromAccount$ === "object");
assert(typeof GetAccountCommand === "function");
assert(typeof GetAccount$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetBotCommand === "function");
assert(typeof GetBot$ === "object");
assert(typeof GetEventsConfigurationCommand === "function");
assert(typeof GetEventsConfiguration$ === "object");
assert(typeof GetGlobalSettingsCommand === "function");
assert(typeof GetGlobalSettings$ === "object");
assert(typeof GetPhoneNumberCommand === "function");
assert(typeof GetPhoneNumber$ === "object");
assert(typeof GetPhoneNumberOrderCommand === "function");
assert(typeof GetPhoneNumberOrder$ === "object");
assert(typeof GetPhoneNumberSettingsCommand === "function");
assert(typeof GetPhoneNumberSettings$ === "object");
assert(typeof GetRetentionSettingsCommand === "function");
assert(typeof GetRetentionSettings$ === "object");
assert(typeof GetRoomCommand === "function");
assert(typeof GetRoom$ === "object");
assert(typeof GetUserCommand === "function");
assert(typeof GetUser$ === "object");
assert(typeof GetUserSettingsCommand === "function");
assert(typeof GetUserSettings$ === "object");
assert(typeof InviteUsersCommand === "function");
assert(typeof InviteUsers$ === "object");
assert(typeof ListAccountsCommand === "function");
assert(typeof ListAccounts$ === "object");
assert(typeof ListBotsCommand === "function");
assert(typeof ListBots$ === "object");
assert(typeof ListPhoneNumberOrdersCommand === "function");
assert(typeof ListPhoneNumberOrders$ === "object");
assert(typeof ListPhoneNumbersCommand === "function");
assert(typeof ListPhoneNumbers$ === "object");
assert(typeof ListRoomMembershipsCommand === "function");
assert(typeof ListRoomMemberships$ === "object");
assert(typeof ListRoomsCommand === "function");
assert(typeof ListRooms$ === "object");
assert(typeof ListSupportedPhoneNumberCountriesCommand === "function");
assert(typeof ListSupportedPhoneNumberCountries$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof LogoutUserCommand === "function");
assert(typeof LogoutUser$ === "object");
assert(typeof PutEventsConfigurationCommand === "function");
assert(typeof PutEventsConfiguration$ === "object");
assert(typeof PutRetentionSettingsCommand === "function");
assert(typeof PutRetentionSettings$ === "object");
assert(typeof RedactConversationMessageCommand === "function");
assert(typeof RedactConversationMessage$ === "object");
assert(typeof RedactRoomMessageCommand === "function");
assert(typeof RedactRoomMessage$ === "object");
assert(typeof RegenerateSecurityTokenCommand === "function");
assert(typeof RegenerateSecurityToken$ === "object");
assert(typeof ResetPersonalPINCommand === "function");
assert(typeof ResetPersonalPIN$ === "object");
assert(typeof RestorePhoneNumberCommand === "function");
assert(typeof RestorePhoneNumber$ === "object");
assert(typeof SearchAvailablePhoneNumbersCommand === "function");
assert(typeof SearchAvailablePhoneNumbers$ === "object");
assert(typeof UpdateAccountCommand === "function");
assert(typeof UpdateAccount$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateBotCommand === "function");
assert(typeof UpdateBot$ === "object");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdateGlobalSettings$ === "object");
assert(typeof UpdatePhoneNumberCommand === "function");
assert(typeof UpdatePhoneNumber$ === "object");
assert(typeof UpdatePhoneNumberSettingsCommand === "function");
assert(typeof UpdatePhoneNumberSettings$ === "object");
assert(typeof UpdateRoomCommand === "function");
assert(typeof UpdateRoom$ === "object");
assert(typeof UpdateRoomMembershipCommand === "function");
assert(typeof UpdateRoomMembership$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
assert(typeof UpdateUserSettingsCommand === "function");
assert(typeof UpdateUserSettings$ === "object");
// structural schemas
assert(typeof Account$ === "object");
assert(typeof AccountSettings$ === "object");
assert(typeof AlexaForBusinessMetadata$ === "object");
assert(typeof AssociatePhoneNumberWithUserRequest$ === "object");
assert(typeof AssociatePhoneNumberWithUserResponse$ === "object");
assert(typeof AssociateSigninDelegateGroupsWithAccountRequest$ === "object");
assert(typeof AssociateSigninDelegateGroupsWithAccountResponse$ === "object");
assert(typeof BatchCreateRoomMembershipRequest$ === "object");
assert(typeof BatchCreateRoomMembershipResponse$ === "object");
assert(typeof BatchDeletePhoneNumberRequest$ === "object");
assert(typeof BatchDeletePhoneNumberResponse$ === "object");
assert(typeof BatchSuspendUserRequest$ === "object");
assert(typeof BatchSuspendUserResponse$ === "object");
assert(typeof BatchUnsuspendUserRequest$ === "object");
assert(typeof BatchUnsuspendUserResponse$ === "object");
assert(typeof BatchUpdatePhoneNumberRequest$ === "object");
assert(typeof BatchUpdatePhoneNumberResponse$ === "object");
assert(typeof BatchUpdateUserRequest$ === "object");
assert(typeof BatchUpdateUserResponse$ === "object");
assert(typeof Bot$ === "object");
assert(typeof BusinessCallingSettings$ === "object");
assert(typeof ConversationRetentionSettings$ === "object");
assert(typeof CreateAccountRequest$ === "object");
assert(typeof CreateAccountResponse$ === "object");
assert(typeof CreateBotRequest$ === "object");
assert(typeof CreateBotResponse$ === "object");
assert(typeof CreateMeetingDialOutRequest$ === "object");
assert(typeof CreateMeetingDialOutResponse$ === "object");
assert(typeof CreatePhoneNumberOrderRequest$ === "object");
assert(typeof CreatePhoneNumberOrderResponse$ === "object");
assert(typeof CreateRoomMembershipRequest$ === "object");
assert(typeof CreateRoomMembershipResponse$ === "object");
assert(typeof CreateRoomRequest$ === "object");
assert(typeof CreateRoomResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof DeleteAccountRequest$ === "object");
assert(typeof DeleteAccountResponse$ === "object");
assert(typeof DeleteEventsConfigurationRequest$ === "object");
assert(typeof DeletePhoneNumberRequest$ === "object");
assert(typeof DeleteRoomMembershipRequest$ === "object");
assert(typeof DeleteRoomRequest$ === "object");
assert(typeof DisassociatePhoneNumberFromUserRequest$ === "object");
assert(typeof DisassociatePhoneNumberFromUserResponse$ === "object");
assert(typeof DisassociateSigninDelegateGroupsFromAccountRequest$ === "object");
assert(typeof DisassociateSigninDelegateGroupsFromAccountResponse$ === "object");
assert(typeof EventsConfiguration$ === "object");
assert(typeof GetAccountRequest$ === "object");
assert(typeof GetAccountResponse$ === "object");
assert(typeof GetAccountSettingsRequest$ === "object");
assert(typeof GetAccountSettingsResponse$ === "object");
assert(typeof GetBotRequest$ === "object");
assert(typeof GetBotResponse$ === "object");
assert(typeof GetEventsConfigurationRequest$ === "object");
assert(typeof GetEventsConfigurationResponse$ === "object");
assert(typeof GetGlobalSettingsResponse$ === "object");
assert(typeof GetPhoneNumberOrderRequest$ === "object");
assert(typeof GetPhoneNumberOrderResponse$ === "object");
assert(typeof GetPhoneNumberRequest$ === "object");
assert(typeof GetPhoneNumberResponse$ === "object");
assert(typeof GetPhoneNumberSettingsResponse$ === "object");
assert(typeof GetRetentionSettingsRequest$ === "object");
assert(typeof GetRetentionSettingsResponse$ === "object");
assert(typeof GetRoomRequest$ === "object");
assert(typeof GetRoomResponse$ === "object");
assert(typeof GetUserRequest$ === "object");
assert(typeof GetUserResponse$ === "object");
assert(typeof GetUserSettingsRequest$ === "object");
assert(typeof GetUserSettingsResponse$ === "object");
assert(typeof Invite$ === "object");
assert(typeof InviteUsersRequest$ === "object");
assert(typeof InviteUsersResponse$ === "object");
assert(typeof ListAccountsRequest$ === "object");
assert(typeof ListAccountsResponse$ === "object");
assert(typeof ListBotsRequest$ === "object");
assert(typeof ListBotsResponse$ === "object");
assert(typeof ListPhoneNumberOrdersRequest$ === "object");
assert(typeof ListPhoneNumberOrdersResponse$ === "object");
assert(typeof ListPhoneNumbersRequest$ === "object");
assert(typeof ListPhoneNumbersResponse$ === "object");
assert(typeof ListRoomMembershipsRequest$ === "object");
assert(typeof ListRoomMembershipsResponse$ === "object");
assert(typeof ListRoomsRequest$ === "object");
assert(typeof ListRoomsResponse$ === "object");
assert(typeof ListSupportedPhoneNumberCountriesRequest$ === "object");
assert(typeof ListSupportedPhoneNumberCountriesResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof LogoutUserRequest$ === "object");
assert(typeof LogoutUserResponse$ === "object");
assert(typeof Member$ === "object");
assert(typeof MemberError$ === "object");
assert(typeof MembershipItem$ === "object");
assert(typeof OrderedPhoneNumber$ === "object");
assert(typeof PhoneNumber$ === "object");
assert(typeof PhoneNumberAssociation$ === "object");
assert(typeof PhoneNumberCapabilities$ === "object");
assert(typeof PhoneNumberCountry$ === "object");
assert(typeof PhoneNumberError$ === "object");
assert(typeof PhoneNumberOrder$ === "object");
assert(typeof PutEventsConfigurationRequest$ === "object");
assert(typeof PutEventsConfigurationResponse$ === "object");
assert(typeof PutRetentionSettingsRequest$ === "object");
assert(typeof PutRetentionSettingsResponse$ === "object");
assert(typeof RedactConversationMessageRequest$ === "object");
assert(typeof RedactConversationMessageResponse$ === "object");
assert(typeof RedactRoomMessageRequest$ === "object");
assert(typeof RedactRoomMessageResponse$ === "object");
assert(typeof RegenerateSecurityTokenRequest$ === "object");
assert(typeof RegenerateSecurityTokenResponse$ === "object");
assert(typeof ResetPersonalPINRequest$ === "object");
assert(typeof ResetPersonalPINResponse$ === "object");
assert(typeof RestorePhoneNumberRequest$ === "object");
assert(typeof RestorePhoneNumberResponse$ === "object");
assert(typeof RetentionSettings$ === "object");
assert(typeof Room$ === "object");
assert(typeof RoomMembership$ === "object");
assert(typeof RoomRetentionSettings$ === "object");
assert(typeof SearchAvailablePhoneNumbersRequest$ === "object");
assert(typeof SearchAvailablePhoneNumbersResponse$ === "object");
assert(typeof SigninDelegateGroup$ === "object");
assert(typeof TelephonySettings$ === "object");
assert(typeof UpdateAccountRequest$ === "object");
assert(typeof UpdateAccountResponse$ === "object");
assert(typeof UpdateAccountSettingsRequest$ === "object");
assert(typeof UpdateAccountSettingsResponse$ === "object");
assert(typeof UpdateBotRequest$ === "object");
assert(typeof UpdateBotResponse$ === "object");
assert(typeof UpdateGlobalSettingsRequest$ === "object");
assert(typeof UpdatePhoneNumberRequest$ === "object");
assert(typeof UpdatePhoneNumberRequestItem$ === "object");
assert(typeof UpdatePhoneNumberResponse$ === "object");
assert(typeof UpdatePhoneNumberSettingsRequest$ === "object");
assert(typeof UpdateRoomMembershipRequest$ === "object");
assert(typeof UpdateRoomMembershipResponse$ === "object");
assert(typeof UpdateRoomRequest$ === "object");
assert(typeof UpdateRoomResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserRequestItem$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof UpdateUserSettingsRequest$ === "object");
assert(typeof User$ === "object");
assert(typeof UserError$ === "object");
assert(typeof UserSettings$ === "object");
assert(typeof VoiceConnectorSettings$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof ChimeServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ChimeServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ChimeServiceException);
assert(typeof ForbiddenException$ === "object");
assert(NotFoundException.prototype instanceof ChimeServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ChimeServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ServiceFailureException.prototype instanceof ChimeServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChimeServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottledClientException.prototype instanceof ChimeServiceException);
assert(typeof ThrottledClientException$ === "object");
assert(UnauthorizedClientException.prototype instanceof ChimeServiceException);
assert(typeof UnauthorizedClientException$ === "object");
assert(UnprocessableEntityException.prototype instanceof ChimeServiceException);
assert(typeof UnprocessableEntityException$ === "object");
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
