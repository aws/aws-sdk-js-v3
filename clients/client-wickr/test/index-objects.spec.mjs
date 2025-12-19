import {
  AccessLevel,
  BadRequestError,
  BadRequestError$,
  BasicDeviceObject$,
  BatchCreateUser$,
  BatchCreateUserCommand,
  BatchCreateUserRequest$,
  BatchCreateUserRequestItem$,
  BatchCreateUserResponse$,
  BatchDeleteUser$,
  BatchDeleteUserCommand,
  BatchDeleteUserRequest$,
  BatchDeleteUserResponse$,
  BatchDeviceErrorResponseItem$,
  BatchDeviceSuccessResponseItem$,
  BatchLookupUserUname$,
  BatchLookupUserUnameCommand,
  BatchLookupUserUnameRequest$,
  BatchLookupUserUnameResponse$,
  BatchReinviteUser$,
  BatchReinviteUserCommand,
  BatchReinviteUserRequest$,
  BatchReinviteUserResponse$,
  BatchResetDevicesForUser$,
  BatchResetDevicesForUserCommand,
  BatchResetDevicesForUserRequest$,
  BatchResetDevicesForUserResponse$,
  BatchToggleUserSuspendStatus$,
  BatchToggleUserSuspendStatusCommand,
  BatchToggleUserSuspendStatusRequest$,
  BatchToggleUserSuspendStatusResponse$,
  BatchUnameErrorResponseItem$,
  BatchUnameSuccessResponseItem$,
  BatchUserErrorResponseItem$,
  BatchUserSuccessResponseItem$,
  BlockedGuestUser$,
  Bot$,
  BotStatus,
  CallingSettings$,
  CreateBot$,
  CreateBotCommand,
  CreateBotRequest$,
  CreateBotResponse$,
  CreateDataRetentionBot$,
  CreateDataRetentionBotChallenge$,
  CreateDataRetentionBotChallengeCommand,
  CreateDataRetentionBotChallengeRequest$,
  CreateDataRetentionBotChallengeResponse$,
  CreateDataRetentionBotCommand,
  CreateDataRetentionBotRequest$,
  CreateDataRetentionBotResponse$,
  CreateNetwork$,
  CreateNetworkCommand,
  CreateNetworkRequest$,
  CreateNetworkResponse$,
  CreateSecurityGroup$,
  CreateSecurityGroupCommand,
  CreateSecurityGroupRequest$,
  CreateSecurityGroupResponse$,
  DataRetentionActionType,
  DeleteBot$,
  DeleteBotCommand,
  DeleteBotRequest$,
  DeleteBotResponse$,
  DeleteDataRetentionBot$,
  DeleteDataRetentionBotCommand,
  DeleteDataRetentionBotRequest$,
  DeleteDataRetentionBotResponse$,
  DeleteNetwork$,
  DeleteNetworkCommand,
  DeleteNetworkRequest$,
  DeleteNetworkResponse$,
  DeleteSecurityGroup$,
  DeleteSecurityGroupCommand,
  DeleteSecurityGroupRequest$,
  DeleteSecurityGroupResponse$,
  ErrorDetail$,
  ForbiddenError,
  ForbiddenError$,
  GetBot$,
  GetBotCommand,
  GetBotRequest$,
  GetBotResponse$,
  GetBotsCount$,
  GetBotsCountCommand,
  GetBotsCountRequest$,
  GetBotsCountResponse$,
  GetDataRetentionBot$,
  GetDataRetentionBotCommand,
  GetDataRetentionBotRequest$,
  GetDataRetentionBotResponse$,
  GetGuestUserHistoryCount$,
  GetGuestUserHistoryCountCommand,
  GetGuestUserHistoryCountRequest$,
  GetGuestUserHistoryCountResponse$,
  GetNetwork$,
  GetNetworkCommand,
  GetNetworkRequest$,
  GetNetworkResponse$,
  GetNetworkSettings$,
  GetNetworkSettingsCommand,
  GetNetworkSettingsRequest$,
  GetNetworkSettingsResponse$,
  GetOidcInfo$,
  GetOidcInfoCommand,
  GetOidcInfoRequest$,
  GetOidcInfoResponse$,
  GetSecurityGroup$,
  GetSecurityGroupCommand,
  GetSecurityGroupRequest$,
  GetSecurityGroupResponse$,
  GetUser$,
  GetUserCommand,
  GetUserRequest$,
  GetUserResponse$,
  GetUsersCount$,
  GetUsersCountCommand,
  GetUsersCountRequest$,
  GetUsersCountResponse$,
  GuestUser$,
  GuestUserHistoryCount$,
  InternalServerError,
  InternalServerError$,
  ListBlockedGuestUsers$,
  ListBlockedGuestUsersCommand,
  ListBlockedGuestUsersRequest$,
  ListBlockedGuestUsersResponse$,
  ListBots$,
  ListBotsCommand,
  ListBotsRequest$,
  ListBotsResponse$,
  ListDevicesForUser$,
  ListDevicesForUserCommand,
  ListDevicesForUserRequest$,
  ListDevicesForUserResponse$,
  ListGuestUsers$,
  ListGuestUsersCommand,
  ListGuestUsersRequest$,
  ListGuestUsersResponse$,
  ListNetworks$,
  ListNetworksCommand,
  ListNetworksRequest$,
  ListNetworksResponse$,
  ListSecurityGroupUsers$,
  ListSecurityGroupUsersCommand,
  ListSecurityGroupUsersRequest$,
  ListSecurityGroupUsersResponse$,
  ListSecurityGroups$,
  ListSecurityGroupsCommand,
  ListSecurityGroupsRequest$,
  ListSecurityGroupsResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  Network$,
  NetworkSettings$,
  OidcConfigInfo$,
  OidcTokenInfo$,
  PasswordRequirements$,
  PermittedWickrEnterpriseNetwork$,
  RateLimitError,
  RateLimitError$,
  ReadReceiptConfig$,
  RegisterOidcConfig$,
  RegisterOidcConfigCommand,
  RegisterOidcConfigRequest$,
  RegisterOidcConfigResponse$,
  RegisterOidcConfigTest$,
  RegisterOidcConfigTestCommand,
  RegisterOidcConfigTestRequest$,
  RegisterOidcConfigTestResponse$,
  ResourceNotFoundError,
  ResourceNotFoundError$,
  SecurityGroup$,
  SecurityGroupSettings$,
  SecurityGroupSettingsRequest$,
  Setting$,
  ShredderSettings$,
  SortDirection,
  Status,
  UnauthorizedError,
  UnauthorizedError$,
  UpdateBot$,
  UpdateBotCommand,
  UpdateBotRequest$,
  UpdateBotResponse$,
  UpdateDataRetention$,
  UpdateDataRetentionCommand,
  UpdateDataRetentionRequest$,
  UpdateDataRetentionResponse$,
  UpdateGuestUser$,
  UpdateGuestUserCommand,
  UpdateGuestUserRequest$,
  UpdateGuestUserResponse$,
  UpdateNetwork$,
  UpdateNetworkCommand,
  UpdateNetworkRequest$,
  UpdateNetworkResponse$,
  UpdateNetworkSettings$,
  UpdateNetworkSettingsCommand,
  UpdateNetworkSettingsRequest$,
  UpdateNetworkSettingsResponse$,
  UpdateSecurityGroup$,
  UpdateSecurityGroupCommand,
  UpdateSecurityGroupRequest$,
  UpdateSecurityGroupResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserDetails$,
  UpdateUserRequest$,
  UpdateUserResponse$,
  User$,
  UserStatus,
  ValidationError,
  ValidationError$,
  Wickr,
  WickrAwsNetworks$,
  WickrClient,
  WickrServiceException,
  paginateListBlockedGuestUsers,
  paginateListBots,
  paginateListDevicesForUser,
  paginateListGuestUsers,
  paginateListNetworks,
  paginateListSecurityGroupUsers,
  paginateListSecurityGroups,
  paginateListUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WickrClient === "function");
assert(typeof Wickr === "function");
// commands
assert(typeof BatchCreateUserCommand === "function");
assert(typeof BatchCreateUser$ === "object");
assert(typeof BatchDeleteUserCommand === "function");
assert(typeof BatchDeleteUser$ === "object");
assert(typeof BatchLookupUserUnameCommand === "function");
assert(typeof BatchLookupUserUname$ === "object");
assert(typeof BatchReinviteUserCommand === "function");
assert(typeof BatchReinviteUser$ === "object");
assert(typeof BatchResetDevicesForUserCommand === "function");
assert(typeof BatchResetDevicesForUser$ === "object");
assert(typeof BatchToggleUserSuspendStatusCommand === "function");
assert(typeof BatchToggleUserSuspendStatus$ === "object");
assert(typeof CreateBotCommand === "function");
assert(typeof CreateBot$ === "object");
assert(typeof CreateDataRetentionBotCommand === "function");
assert(typeof CreateDataRetentionBot$ === "object");
assert(typeof CreateDataRetentionBotChallengeCommand === "function");
assert(typeof CreateDataRetentionBotChallenge$ === "object");
assert(typeof CreateNetworkCommand === "function");
assert(typeof CreateNetwork$ === "object");
assert(typeof CreateSecurityGroupCommand === "function");
assert(typeof CreateSecurityGroup$ === "object");
assert(typeof DeleteBotCommand === "function");
assert(typeof DeleteBot$ === "object");
assert(typeof DeleteDataRetentionBotCommand === "function");
assert(typeof DeleteDataRetentionBot$ === "object");
assert(typeof DeleteNetworkCommand === "function");
assert(typeof DeleteNetwork$ === "object");
assert(typeof DeleteSecurityGroupCommand === "function");
assert(typeof DeleteSecurityGroup$ === "object");
assert(typeof GetBotCommand === "function");
assert(typeof GetBot$ === "object");
assert(typeof GetBotsCountCommand === "function");
assert(typeof GetBotsCount$ === "object");
assert(typeof GetDataRetentionBotCommand === "function");
assert(typeof GetDataRetentionBot$ === "object");
assert(typeof GetGuestUserHistoryCountCommand === "function");
assert(typeof GetGuestUserHistoryCount$ === "object");
assert(typeof GetNetworkCommand === "function");
assert(typeof GetNetwork$ === "object");
assert(typeof GetNetworkSettingsCommand === "function");
assert(typeof GetNetworkSettings$ === "object");
assert(typeof GetOidcInfoCommand === "function");
assert(typeof GetOidcInfo$ === "object");
assert(typeof GetSecurityGroupCommand === "function");
assert(typeof GetSecurityGroup$ === "object");
assert(typeof GetUserCommand === "function");
assert(typeof GetUser$ === "object");
assert(typeof GetUsersCountCommand === "function");
assert(typeof GetUsersCount$ === "object");
assert(typeof ListBlockedGuestUsersCommand === "function");
assert(typeof ListBlockedGuestUsers$ === "object");
assert(typeof ListBotsCommand === "function");
assert(typeof ListBots$ === "object");
assert(typeof ListDevicesForUserCommand === "function");
assert(typeof ListDevicesForUser$ === "object");
assert(typeof ListGuestUsersCommand === "function");
assert(typeof ListGuestUsers$ === "object");
assert(typeof ListNetworksCommand === "function");
assert(typeof ListNetworks$ === "object");
assert(typeof ListSecurityGroupsCommand === "function");
assert(typeof ListSecurityGroups$ === "object");
assert(typeof ListSecurityGroupUsersCommand === "function");
assert(typeof ListSecurityGroupUsers$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof RegisterOidcConfigCommand === "function");
assert(typeof RegisterOidcConfig$ === "object");
assert(typeof RegisterOidcConfigTestCommand === "function");
assert(typeof RegisterOidcConfigTest$ === "object");
assert(typeof UpdateBotCommand === "function");
assert(typeof UpdateBot$ === "object");
assert(typeof UpdateDataRetentionCommand === "function");
assert(typeof UpdateDataRetention$ === "object");
assert(typeof UpdateGuestUserCommand === "function");
assert(typeof UpdateGuestUser$ === "object");
assert(typeof UpdateNetworkCommand === "function");
assert(typeof UpdateNetwork$ === "object");
assert(typeof UpdateNetworkSettingsCommand === "function");
assert(typeof UpdateNetworkSettings$ === "object");
assert(typeof UpdateSecurityGroupCommand === "function");
assert(typeof UpdateSecurityGroup$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof BasicDeviceObject$ === "object");
assert(typeof BatchCreateUserRequest$ === "object");
assert(typeof BatchCreateUserRequestItem$ === "object");
assert(typeof BatchCreateUserResponse$ === "object");
assert(typeof BatchDeleteUserRequest$ === "object");
assert(typeof BatchDeleteUserResponse$ === "object");
assert(typeof BatchDeviceErrorResponseItem$ === "object");
assert(typeof BatchDeviceSuccessResponseItem$ === "object");
assert(typeof BatchLookupUserUnameRequest$ === "object");
assert(typeof BatchLookupUserUnameResponse$ === "object");
assert(typeof BatchReinviteUserRequest$ === "object");
assert(typeof BatchReinviteUserResponse$ === "object");
assert(typeof BatchResetDevicesForUserRequest$ === "object");
assert(typeof BatchResetDevicesForUserResponse$ === "object");
assert(typeof BatchToggleUserSuspendStatusRequest$ === "object");
assert(typeof BatchToggleUserSuspendStatusResponse$ === "object");
assert(typeof BatchUnameErrorResponseItem$ === "object");
assert(typeof BatchUnameSuccessResponseItem$ === "object");
assert(typeof BatchUserErrorResponseItem$ === "object");
assert(typeof BatchUserSuccessResponseItem$ === "object");
assert(typeof BlockedGuestUser$ === "object");
assert(typeof Bot$ === "object");
assert(typeof CallingSettings$ === "object");
assert(typeof CreateBotRequest$ === "object");
assert(typeof CreateBotResponse$ === "object");
assert(typeof CreateDataRetentionBotChallengeRequest$ === "object");
assert(typeof CreateDataRetentionBotChallengeResponse$ === "object");
assert(typeof CreateDataRetentionBotRequest$ === "object");
assert(typeof CreateDataRetentionBotResponse$ === "object");
assert(typeof CreateNetworkRequest$ === "object");
assert(typeof CreateNetworkResponse$ === "object");
assert(typeof CreateSecurityGroupRequest$ === "object");
assert(typeof CreateSecurityGroupResponse$ === "object");
assert(typeof DeleteBotRequest$ === "object");
assert(typeof DeleteBotResponse$ === "object");
assert(typeof DeleteDataRetentionBotRequest$ === "object");
assert(typeof DeleteDataRetentionBotResponse$ === "object");
assert(typeof DeleteNetworkRequest$ === "object");
assert(typeof DeleteNetworkResponse$ === "object");
assert(typeof DeleteSecurityGroupRequest$ === "object");
assert(typeof DeleteSecurityGroupResponse$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof GetBotRequest$ === "object");
assert(typeof GetBotResponse$ === "object");
assert(typeof GetBotsCountRequest$ === "object");
assert(typeof GetBotsCountResponse$ === "object");
assert(typeof GetDataRetentionBotRequest$ === "object");
assert(typeof GetDataRetentionBotResponse$ === "object");
assert(typeof GetGuestUserHistoryCountRequest$ === "object");
assert(typeof GetGuestUserHistoryCountResponse$ === "object");
assert(typeof GetNetworkRequest$ === "object");
assert(typeof GetNetworkResponse$ === "object");
assert(typeof GetNetworkSettingsRequest$ === "object");
assert(typeof GetNetworkSettingsResponse$ === "object");
assert(typeof GetOidcInfoRequest$ === "object");
assert(typeof GetOidcInfoResponse$ === "object");
assert(typeof GetSecurityGroupRequest$ === "object");
assert(typeof GetSecurityGroupResponse$ === "object");
assert(typeof GetUserRequest$ === "object");
assert(typeof GetUserResponse$ === "object");
assert(typeof GetUsersCountRequest$ === "object");
assert(typeof GetUsersCountResponse$ === "object");
assert(typeof GuestUser$ === "object");
assert(typeof GuestUserHistoryCount$ === "object");
assert(typeof ListBlockedGuestUsersRequest$ === "object");
assert(typeof ListBlockedGuestUsersResponse$ === "object");
assert(typeof ListBotsRequest$ === "object");
assert(typeof ListBotsResponse$ === "object");
assert(typeof ListDevicesForUserRequest$ === "object");
assert(typeof ListDevicesForUserResponse$ === "object");
assert(typeof ListGuestUsersRequest$ === "object");
assert(typeof ListGuestUsersResponse$ === "object");
assert(typeof ListNetworksRequest$ === "object");
assert(typeof ListNetworksResponse$ === "object");
assert(typeof ListSecurityGroupsRequest$ === "object");
assert(typeof ListSecurityGroupsResponse$ === "object");
assert(typeof ListSecurityGroupUsersRequest$ === "object");
assert(typeof ListSecurityGroupUsersResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof Network$ === "object");
assert(typeof NetworkSettings$ === "object");
assert(typeof OidcConfigInfo$ === "object");
assert(typeof OidcTokenInfo$ === "object");
assert(typeof PasswordRequirements$ === "object");
assert(typeof PermittedWickrEnterpriseNetwork$ === "object");
assert(typeof ReadReceiptConfig$ === "object");
assert(typeof RegisterOidcConfigRequest$ === "object");
assert(typeof RegisterOidcConfigResponse$ === "object");
assert(typeof RegisterOidcConfigTestRequest$ === "object");
assert(typeof RegisterOidcConfigTestResponse$ === "object");
assert(typeof SecurityGroup$ === "object");
assert(typeof SecurityGroupSettings$ === "object");
assert(typeof SecurityGroupSettingsRequest$ === "object");
assert(typeof Setting$ === "object");
assert(typeof ShredderSettings$ === "object");
assert(typeof UpdateBotRequest$ === "object");
assert(typeof UpdateBotResponse$ === "object");
assert(typeof UpdateDataRetentionRequest$ === "object");
assert(typeof UpdateDataRetentionResponse$ === "object");
assert(typeof UpdateGuestUserRequest$ === "object");
assert(typeof UpdateGuestUserResponse$ === "object");
assert(typeof UpdateNetworkRequest$ === "object");
assert(typeof UpdateNetworkResponse$ === "object");
assert(typeof UpdateNetworkSettingsRequest$ === "object");
assert(typeof UpdateNetworkSettingsResponse$ === "object");
assert(typeof UpdateSecurityGroupRequest$ === "object");
assert(typeof UpdateSecurityGroupResponse$ === "object");
assert(typeof UpdateUserDetails$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof User$ === "object");
assert(typeof WickrAwsNetworks$ === "object");
// enums
assert(typeof AccessLevel === "object");
assert(typeof BotStatus === "object");
assert(typeof DataRetentionActionType === "object");
assert(typeof SortDirection === "object");
assert(typeof Status === "object");
assert(typeof UserStatus === "object");
// errors
assert(BadRequestError.prototype instanceof WickrServiceException);
assert(typeof BadRequestError$ === "object");
assert(ForbiddenError.prototype instanceof WickrServiceException);
assert(typeof ForbiddenError$ === "object");
assert(InternalServerError.prototype instanceof WickrServiceException);
assert(typeof InternalServerError$ === "object");
assert(RateLimitError.prototype instanceof WickrServiceException);
assert(typeof RateLimitError$ === "object");
assert(ResourceNotFoundError.prototype instanceof WickrServiceException);
assert(typeof ResourceNotFoundError$ === "object");
assert(UnauthorizedError.prototype instanceof WickrServiceException);
assert(typeof UnauthorizedError$ === "object");
assert(ValidationError.prototype instanceof WickrServiceException);
assert(typeof ValidationError$ === "object");
assert(WickrServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBlockedGuestUsers === "function");
assert(typeof paginateListBots === "function");
assert(typeof paginateListDevicesForUser === "function");
assert(typeof paginateListGuestUsers === "function");
assert(typeof paginateListNetworks === "function");
assert(typeof paginateListSecurityGroupUsers === "function");
assert(typeof paginateListSecurityGroups === "function");
assert(typeof paginateListUsers === "function");
console.log(`Wickr index test passed.`);
