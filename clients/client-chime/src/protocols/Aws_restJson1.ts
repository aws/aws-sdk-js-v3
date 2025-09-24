// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  AssociatePhoneNumberWithUserCommandInput,
  AssociatePhoneNumberWithUserCommandOutput,
} from "../commands/AssociatePhoneNumberWithUserCommand";
import {
  AssociateSigninDelegateGroupsWithAccountCommandInput,
  AssociateSigninDelegateGroupsWithAccountCommandOutput,
} from "../commands/AssociateSigninDelegateGroupsWithAccountCommand";
import {
  BatchCreateRoomMembershipCommandInput,
  BatchCreateRoomMembershipCommandOutput,
} from "../commands/BatchCreateRoomMembershipCommand";
import {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "../commands/BatchDeletePhoneNumberCommand";
import { BatchSuspendUserCommandInput, BatchSuspendUserCommandOutput } from "../commands/BatchSuspendUserCommand";
import { BatchUnsuspendUserCommandInput, BatchUnsuspendUserCommandOutput } from "../commands/BatchUnsuspendUserCommand";
import {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "../commands/BatchUpdatePhoneNumberCommand";
import { BatchUpdateUserCommandInput, BatchUpdateUserCommandOutput } from "../commands/BatchUpdateUserCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "../commands/CreateAccountCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "../commands/CreateBotCommand";
import {
  CreateMeetingDialOutCommandInput,
  CreateMeetingDialOutCommandOutput,
} from "../commands/CreateMeetingDialOutCommand";
import {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "../commands/CreatePhoneNumberOrderCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "../commands/CreateRoomCommand";
import {
  CreateRoomMembershipCommandInput,
  CreateRoomMembershipCommandOutput,
} from "../commands/CreateRoomMembershipCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteAccountCommandInput, DeleteAccountCommandOutput } from "../commands/DeleteAccountCommand";
import {
  DeleteEventsConfigurationCommandInput,
  DeleteEventsConfigurationCommandOutput,
} from "../commands/DeleteEventsConfigurationCommand";
import { DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput } from "../commands/DeletePhoneNumberCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "../commands/DeleteRoomCommand";
import {
  DeleteRoomMembershipCommandInput,
  DeleteRoomMembershipCommandOutput,
} from "../commands/DeleteRoomMembershipCommand";
import {
  DisassociatePhoneNumberFromUserCommandInput,
  DisassociatePhoneNumberFromUserCommandOutput,
} from "../commands/DisassociatePhoneNumberFromUserCommand";
import {
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
} from "../commands/DisassociateSigninDelegateGroupsFromAccountCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "../commands/GetAccountCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "../commands/GetBotCommand";
import {
  GetEventsConfigurationCommandInput,
  GetEventsConfigurationCommandOutput,
} from "../commands/GetEventsConfigurationCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "../commands/GetGlobalSettingsCommand";
import { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "../commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "../commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "../commands/GetPhoneNumberSettingsCommand";
import {
  GetRetentionSettingsCommandInput,
  GetRetentionSettingsCommandOutput,
} from "../commands/GetRetentionSettingsCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "../commands/GetRoomCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import { GetUserSettingsCommandInput, GetUserSettingsCommandOutput } from "../commands/GetUserSettingsCommand";
import { InviteUsersCommandInput, InviteUsersCommandOutput } from "../commands/InviteUsersCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "../commands/ListAccountsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "../commands/ListPhoneNumbersCommand";
import {
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "../commands/ListRoomMembershipsCommand";
import { ListRoomsCommandInput, ListRoomsCommandOutput } from "../commands/ListRoomsCommand";
import {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "../commands/ListSupportedPhoneNumberCountriesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { LogoutUserCommandInput, LogoutUserCommandOutput } from "../commands/LogoutUserCommand";
import {
  PutEventsConfigurationCommandInput,
  PutEventsConfigurationCommandOutput,
} from "../commands/PutEventsConfigurationCommand";
import {
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
} from "../commands/PutRetentionSettingsCommand";
import {
  RedactConversationMessageCommandInput,
  RedactConversationMessageCommandOutput,
} from "../commands/RedactConversationMessageCommand";
import { RedactRoomMessageCommandInput, RedactRoomMessageCommandOutput } from "../commands/RedactRoomMessageCommand";
import {
  RegenerateSecurityTokenCommandInput,
  RegenerateSecurityTokenCommandOutput,
} from "../commands/RegenerateSecurityTokenCommand";
import { ResetPersonalPINCommandInput, ResetPersonalPINCommandOutput } from "../commands/ResetPersonalPINCommand";
import { RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput } from "../commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "../commands/UpdateAccountCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "../commands/UpdateBotCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "../commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "../commands/UpdatePhoneNumberSettingsCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "../commands/UpdateRoomCommand";
import {
  UpdateRoomMembershipCommandInput,
  UpdateRoomMembershipCommandOutput,
} from "../commands/UpdateRoomMembershipCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import { UpdateUserSettingsCommandInput, UpdateUserSettingsCommandOutput } from "../commands/UpdateUserSettingsCommand";
import { ChimeServiceException as __BaseException } from "../models/ChimeServiceException";
import {
  AccessDeniedException,
  Account,
  AccountSettings,
  AlexaForBusinessMetadata,
  BadRequestException,
  Bot,
  BusinessCallingSettings,
  ConflictException,
  ConversationRetentionSettings,
  ForbiddenException,
  MembershipItem,
  NotFoundException,
  PhoneNumber,
  PhoneNumberAssociation,
  PhoneNumberOrder,
  ResourceLimitExceededException,
  RetentionSettings,
  Room,
  RoomMembership,
  RoomRetentionSettings,
  ServiceFailureException,
  ServiceUnavailableException,
  SigninDelegateGroup,
  TelephonySettings,
  ThrottledClientException,
  UnauthorizedClientException,
  UnprocessableEntityException,
  UpdatePhoneNumberRequestItem,
  UpdateUserRequestItem,
  User,
  UserSettings,
  VoiceConnectorSettings,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociatePhoneNumberWithUserCommand
 */
export const se_AssociatePhoneNumberWithUserCommand = async (
  input: AssociatePhoneNumberWithUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "associate-phone-number"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumber: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand
 */
export const se_AssociateSigninDelegateGroupsWithAccountCommand = async (
  input: AssociateSigninDelegateGroupsWithAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "associate-signin-delegate-groups"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      SigninDelegateGroups: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateRoomMembershipCommand
 */
export const se_BatchCreateRoomMembershipCommand = async (
  input: BatchCreateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  const query: any = map({
    [_o]: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      MembershipItemList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeletePhoneNumberCommand
 */
export const se_BatchDeletePhoneNumberCommand = async (
  input: BatchDeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers");
  const query: any = map({
    [_o]: [, "batch-delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      PhoneNumberIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchSuspendUserCommand
 */
export const se_BatchSuspendUserCommand = async (
  input: BatchSuspendUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "suspend"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserIdList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUnsuspendUserCommand
 */
export const se_BatchUnsuspendUserCommand = async (
  input: BatchUnsuspendUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "unsuspend"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserIdList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdatePhoneNumberCommand
 */
export const se_BatchUpdatePhoneNumberCommand = async (
  input: BatchUpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers");
  const query: any = map({
    [_o]: [, "batch-update"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdatePhoneNumberRequestItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateUserCommand
 */
export const se_BatchUpdateUserCommand = async (
  input: BatchUpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdateUserRequestItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccountCommand
 */
export const se_CreateAccountCommand = async (
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBotCommand
 */
export const se_CreateBotCommand = async (
  input: CreateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/bots");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DisplayName: [],
      Domain: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMeetingDialOutCommand
 */
export const se_CreateMeetingDialOutCommand = async (
  input: CreateMeetingDialOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/dial-outs");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FromPhoneNumber: [],
      JoinToken: [],
      ToPhoneNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePhoneNumberOrderCommand
 */
export const se_CreatePhoneNumberOrderCommand = async (
  input: CreatePhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number-orders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      ProductType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoomCommand
 */
export const se_CreateRoomCommand = async (
  input: CreateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRoomMembershipCommand
 */
export const se_CreateRoomMembershipCommand = async (
  input: CreateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MemberId: [],
      Role: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Email: [],
      UserType: [],
      Username: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccountCommand
 */
export const se_DeleteAccountCommand = async (
  input: DeleteAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventsConfigurationCommand
 */
export const se_DeleteEventsConfigurationCommand = async (
  input: DeleteEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}/events-configuration");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePhoneNumberCommand
 */
export const se_DeletePhoneNumberCommand = async (
  input: DeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoomCommand
 */
export const se_DeleteRoomCommand = async (
  input: DeleteRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRoomMembershipCommand
 */
export const se_DeleteRoomMembershipCommand = async (
  input: DeleteRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumberFromUserCommand
 */
export const se_DisassociatePhoneNumberFromUserCommand = async (
  input: DisassociatePhoneNumberFromUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "disassociate-phone-number"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand
 */
export const se_DisassociateSigninDelegateGroupsFromAccountCommand = async (
  input: DisassociateSigninDelegateGroupsFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "disassociate-signin-delegate-groups"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      GroupNames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountCommand
 */
export const se_GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBotCommand
 */
export const se_GetBotCommand = async (input: GetBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventsConfigurationCommand
 */
export const se_GetEventsConfigurationCommand = async (
  input: GetEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}/events-configuration");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlobalSettingsCommand
 */
export const se_GetGlobalSettingsCommand = async (
  input: GetGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberCommand
 */
export const se_GetPhoneNumberCommand = async (
  input: GetPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberOrderCommand
 */
export const se_GetPhoneNumberOrderCommand = async (
  input: GetPhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-orders/{PhoneNumberOrderId}");
  b.p("PhoneNumberOrderId", () => input.PhoneNumberOrderId!, "{PhoneNumberOrderId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberSettingsCommand
 */
export const se_GetPhoneNumberSettingsCommand = async (
  input: GetPhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings/phone-number");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRetentionSettingsCommand
 */
export const se_GetRetentionSettingsCommand = async (
  input: GetRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/retention-settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRoomCommand
 */
export const se_GetRoomCommand = async (
  input: GetRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserSettingsCommand
 */
export const se_GetUserSettingsCommand = async (
  input: GetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InviteUsersCommand
 */
export const se_InviteUsersCommand = async (
  input: InviteUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_o]: [, "add"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserEmailList: (_) => _json(_),
      UserType: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccountsCommand
 */
export const se_ListAccountsCommand = async (
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts");
  const query: any = map({
    [_n]: [, input[_N]!],
    [_ue]: [, input[_UE]!],
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBotsCommand
 */
export const se_ListBotsCommand = async (
  input: ListBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumberOrdersCommand
 */
export const se_ListPhoneNumberOrdersCommand = async (
  input: ListPhoneNumberOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-orders");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumbersCommand
 */
export const se_ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers");
  const query: any = map({
    [_s]: [, input[_S]!],
    [_pt]: [, input[_PT]!],
    [_fn]: [, input[_FN]!],
    [_fv]: [, input[_FV]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoomMembershipsCommand
 */
export const se_ListRoomMembershipsCommand = async (
  input: ListRoomMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRoomsCommand
 */
export const se_ListRoomsCommand = async (
  input: ListRoomsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_mi]: [, input[_MI]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand
 */
export const se_ListSupportedPhoneNumberCountriesCommand = async (
  input: ListSupportedPhoneNumberCountriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-countries");
  const query: any = map({
    [_pt]: [, __expectNonNull(input[_PT]!, `ProductType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  const query: any = map({
    [_ue]: [, input[_UE]!],
    [_ut]: [, input[_UT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1LogoutUserCommand
 */
export const se_LogoutUserCommand = async (
  input: LogoutUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "logout"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEventsConfigurationCommand
 */
export const se_PutEventsConfigurationCommand = async (
  input: PutEventsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/bots/{BotId}/events-configuration");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LambdaFunctionArn: [],
      OutboundEventsHTTPSEndpoint: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRetentionSettingsCommand
 */
export const se_PutRetentionSettingsCommand = async (
  input: PutRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/retention-settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RetentionSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RedactConversationMessageCommand
 */
export const se_RedactConversationMessageCommand = async (
  input: RedactConversationMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/conversations/{ConversationId}/messages/{MessageId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("ConversationId", () => input.ConversationId!, "{ConversationId}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_o]: [, "redact"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RedactRoomMessageCommand
 */
export const se_RedactRoomMessageCommand = async (
  input: RedactRoomMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/messages/{MessageId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  b.p("MessageId", () => input.MessageId!, "{MessageId}", false);
  const query: any = map({
    [_o]: [, "redact"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegenerateSecurityTokenCommand
 */
export const se_RegenerateSecurityTokenCommand = async (
  input: RegenerateSecurityTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/bots/{BotId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  const query: any = map({
    [_o]: [, "regenerate-security-token"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetPersonalPINCommand
 */
export const se_ResetPersonalPINCommand = async (
  input: ResetPersonalPINCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  const query: any = map({
    [_o]: [, "reset-personal-pin"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestorePhoneNumberCommand
 */
export const se_RestorePhoneNumberCommand = async (
  input: RestorePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  const query: any = map({
    [_o]: [, "restore"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const se_SearchAvailablePhoneNumbersCommand = async (
  input: SearchAvailablePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search");
  const query: any = map({
    [_t]: [, "phone-numbers"],
    [_ac]: [, input[_AC]!],
    [_c]: [, input[_C]!],
    [_co]: [, input[_Co]!],
    [_st]: [, input[_St]!],
    [_tfp]: [, input[_TFP]!],
    [_pnt]: [, input[_PNT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountCommand
 */
export const se_UpdateAccountCommand = async (
  input: UpdateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultLicense: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBotCommand
 */
export const se_UpdateBotCommand = async (
  input: UpdateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/bots/{BotId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("BotId", () => input.BotId!, "{BotId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Disabled: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BusinessCalling: (_) => _json(_),
      VoiceConnector: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberCommand
 */
export const se_UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallingName: [],
      ProductType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberSettingsCommand
 */
export const se_UpdatePhoneNumberSettingsCommand = async (
  input: UpdatePhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings/phone-number");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoomCommand
 */
export const se_UpdateRoomCommand = async (
  input: UpdateRoomCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRoomMembershipCommand
 */
export const se_UpdateRoomMembershipCommand = async (
  input: UpdateRoomMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("RoomId", () => input.RoomId!, "{RoomId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Role: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users/{UserId}");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AlexaForBusinessMetadata: (_) => _json(_),
      LicenseType: [],
      UserType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserSettingsCommand
 */
export const se_UpdateUserSettingsCommand = async (
  input: UpdateUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accounts/{AccountId}/users/{UserId}/settings");
  b.p("AccountId", () => input.AccountId!, "{AccountId}", false);
  b.p("UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      UserSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociatePhoneNumberWithUserCommand
 */
export const de_AssociatePhoneNumberWithUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumberWithUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSigninDelegateGroupsWithAccountCommand
 */
export const de_AssociateSigninDelegateGroupsWithAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSigninDelegateGroupsWithAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateRoomMembershipCommand
 */
export const de_BatchCreateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeletePhoneNumberCommand
 */
export const de_BatchDeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchSuspendUserCommand
 */
export const de_BatchSuspendUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSuspendUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUnsuspendUserCommand
 */
export const de_BatchUnsuspendUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUnsuspendUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdatePhoneNumberCommand
 */
export const de_BatchUpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateUserCommand
 */
export const de_BatchUpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccountCommand
 */
export const de_CreateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Account: (_) => de_Account(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBotCommand
 */
export const de_CreateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeetingDialOutCommand
 */
export const de_CreateMeetingDialOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingDialOutCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransactionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePhoneNumberOrderCommand
 */
export const de_CreatePhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberOrder: (_) => de_PhoneNumberOrder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoomCommand
 */
export const de_CreateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Room: (_) => de_Room(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRoomMembershipCommand
 */
export const de_CreateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RoomMembership: (_) => de_RoomMembership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccountCommand
 */
export const de_DeleteAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventsConfigurationCommand
 */
export const de_DeleteEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePhoneNumberCommand
 */
export const de_DeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoomCommand
 */
export const de_DeleteRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRoomMembershipCommand
 */
export const de_DeleteRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoomMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumberFromUserCommand
 */
export const de_DisassociatePhoneNumberFromUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumberFromUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand
 */
export const de_DisassociateSigninDelegateGroupsFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountCommand
 */
export const de_GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Account: (_) => de_Account(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBotCommand
 */
export const de_GetBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventsConfigurationCommand
 */
export const de_GetEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventsConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlobalSettingsCommand
 */
export const de_GetGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BusinessCalling: _json,
    VoiceConnector: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberCommand
 */
export const de_GetPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberOrderCommand
 */
export const de_GetPhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberOrder: (_) => de_PhoneNumberOrder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberSettingsCommand
 */
export const de_GetPhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CallingName: __expectString,
    CallingNameUpdatedTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRetentionSettingsCommand
 */
export const de_GetRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitiateDeletionTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    RetentionSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRoomCommand
 */
export const de_GetRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Room: (_) => de_Room(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserSettingsCommand
 */
export const de_GetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    UserSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InviteUsersCommand
 */
export const de_InviteUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteUsersCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Invites: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountsCommand
 */
export const de_ListAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Accounts: (_) => de_AccountList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBotsCommand
 */
export const de_ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bots: (_) => de_BotList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumberOrdersCommand
 */
export const de_ListPhoneNumberOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumberOrders: (_) => de_PhoneNumberOrderList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersCommand
 */
export const de_ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumbers: (_) => de_PhoneNumberList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoomMembershipsCommand
 */
export const de_ListRoomMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RoomMemberships: (_) => de_RoomMembershipList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRoomsCommand
 */
export const de_ListRoomsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoomsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Rooms: (_) => de_RoomList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand
 */
export const de_ListSupportedPhoneNumberCountriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedPhoneNumberCountriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberCountries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Users: (_) => de_UserList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1LogoutUserCommand
 */
export const de_LogoutUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutEventsConfigurationCommand
 */
export const de_PutEventsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventsConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRetentionSettingsCommand
 */
export const de_PutRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitiateDeletionTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    RetentionSettings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RedactConversationMessageCommand
 */
export const de_RedactConversationMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactConversationMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RedactRoomMessageCommand
 */
export const de_RedactRoomMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RedactRoomMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegenerateSecurityTokenCommand
 */
export const de_RegenerateSecurityTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegenerateSecurityTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetPersonalPINCommand
 */
export const de_ResetPersonalPINCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPersonalPINCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RestorePhoneNumberCommand
 */
export const de_RestorePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestorePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const de_SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    E164PhoneNumbers: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountCommand
 */
export const de_UpdateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Account: (_) => de_Account(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBotCommand
 */
export const de_UpdateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Bot: (_) => de_Bot(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberSettingsCommand
 */
export const de_UpdatePhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoomCommand
 */
export const de_UpdateRoomCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Room: (_) => de_Room(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRoomMembershipCommand
 */
export const de_UpdateRoomMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoomMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RoomMembership: (_) => de_RoomMembership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    User: (_) => de_User(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserSettingsCommand
 */
export const de_UpdateUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSettingsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.chime#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chime#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chime#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chime#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chime#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chime#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chime#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chime#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chime#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chime#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledClientExceptionRes
 */
const de_ThrottledClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedClientExceptionRes
 */
const de_UnauthorizedClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountSettings omitted.

// se_AlexaForBusinessMetadata omitted.

// se_BusinessCallingSettings omitted.

// se_ConversationRetentionSettings omitted.

// se_E164PhoneNumberList omitted.

// se_MembershipItem omitted.

// se_MembershipItemList omitted.

// se_NonEmptyStringList omitted.

// se_RetentionSettings omitted.

// se_RoomRetentionSettings omitted.

// se_SigninDelegateGroup omitted.

// se_SigninDelegateGroupList omitted.

// se_TelephonySettings omitted.

// se_UpdatePhoneNumberRequestItem omitted.

// se_UpdatePhoneNumberRequestItemList omitted.

// se_UpdateUserRequestItem omitted.

// se_UpdateUserRequestItemList omitted.

// se_UserEmailList omitted.

// se_UserIdList omitted.

// se_UserSettings omitted.

// se_VoiceConnectorSettings omitted.

/**
 * deserializeAws_restJson1Account
 */
const de_Account = (output: any, context: __SerdeContext): Account => {
  return take(output, {
    AccountId: __expectString,
    AccountStatus: __expectString,
    AccountType: __expectString,
    AwsAccountId: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DefaultLicense: __expectString,
    Name: __expectString,
    SigninDelegateGroups: _json,
    SupportedLicenses: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AccountList
 */
const de_AccountList = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Account(entry, context);
    });
  return retVal;
};

// de_AccountSettings omitted.

// de_AlexaForBusinessMetadata omitted.

/**
 * deserializeAws_restJson1Bot
 */
const de_Bot = (output: any, context: __SerdeContext): Bot => {
  return take(output, {
    BotEmail: __expectString,
    BotId: __expectString,
    BotType: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Disabled: __expectBoolean,
    DisplayName: __expectString,
    SecurityToken: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BotList
 */
const de_BotList = (output: any, context: __SerdeContext): Bot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Bot(entry, context);
    });
  return retVal;
};

// de_BusinessCallingSettings omitted.

// de_ConversationRetentionSettings omitted.

// de_E164PhoneNumberList omitted.

// de_EventsConfiguration omitted.

// de_Invite omitted.

// de_InviteList omitted.

// de_LicenseList omitted.

// de_Member omitted.

// de_MemberError omitted.

// de_MemberErrorList omitted.

// de_OrderedPhoneNumber omitted.

// de_OrderedPhoneNumberList omitted.

/**
 * deserializeAws_restJson1PhoneNumber
 */
const de_PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return take(output, {
    Associations: (_: any) => de_PhoneNumberAssociationList(_, context),
    CallingName: __expectString,
    CallingNameStatus: __expectString,
    Capabilities: _json,
    Country: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DeletionTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    E164PhoneNumber: __expectString,
    PhoneNumberId: __expectString,
    ProductType: __expectString,
    Status: __expectString,
    Type: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberAssociation
 */
const de_PhoneNumberAssociation = (output: any, context: __SerdeContext): PhoneNumberAssociation => {
  return take(output, {
    AssociatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberAssociationList
 */
const de_PhoneNumberAssociationList = (output: any, context: __SerdeContext): PhoneNumberAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberAssociation(entry, context);
    });
  return retVal;
};

// de_PhoneNumberCapabilities omitted.

// de_PhoneNumberCountriesList omitted.

// de_PhoneNumberCountry omitted.

// de_PhoneNumberError omitted.

// de_PhoneNumberErrorList omitted.

/**
 * deserializeAws_restJson1PhoneNumberList
 */
const de_PhoneNumberList = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumber(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PhoneNumberOrder
 */
const de_PhoneNumberOrder = (output: any, context: __SerdeContext): PhoneNumberOrder => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    OrderedPhoneNumbers: _json,
    PhoneNumberOrderId: __expectString,
    ProductType: __expectString,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberOrderList
 */
const de_PhoneNumberOrderList = (output: any, context: __SerdeContext): PhoneNumberOrder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberOrder(entry, context);
    });
  return retVal;
};

// de_PhoneNumberTypeList omitted.

// de_RetentionSettings omitted.

/**
 * deserializeAws_restJson1Room
 */
const de_Room = (output: any, context: __SerdeContext): Room => {
  return take(output, {
    AccountId: __expectString,
    CreatedBy: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    RoomId: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1RoomList
 */
const de_RoomList = (output: any, context: __SerdeContext): Room[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Room(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoomMembership
 */
const de_RoomMembership = (output: any, context: __SerdeContext): RoomMembership => {
  return take(output, {
    InvitedBy: __expectString,
    Member: _json,
    Role: __expectString,
    RoomId: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1RoomMembershipList
 */
const de_RoomMembershipList = (output: any, context: __SerdeContext): RoomMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoomMembership(entry, context);
    });
  return retVal;
};

// de_RoomRetentionSettings omitted.

// de_SigninDelegateGroup omitted.

// de_SigninDelegateGroupList omitted.

// de_TelephonySettings omitted.

/**
 * deserializeAws_restJson1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return take(output, {
    AccountId: __expectString,
    AlexaForBusinessMetadata: _json,
    DisplayName: __expectString,
    InvitedOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LicenseType: __expectString,
    PersonalPIN: __expectString,
    PrimaryEmail: __expectString,
    PrimaryProvisionedNumber: __expectString,
    RegisteredOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UserId: __expectString,
    UserInvitationStatus: __expectString,
    UserRegistrationStatus: __expectString,
    UserType: __expectString,
  }) as any;
};

// de_UserError omitted.

// de_UserErrorList omitted.

/**
 * deserializeAws_restJson1UserList
 */
const de_UserList = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_User(entry, context);
    });
  return retVal;
};

// de_UserSettings omitted.

// de_VoiceConnectorSettings omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _AC = "AreaCode";
const _C = "City";
const _Co = "Country";
const _FN = "FilterName";
const _FV = "FilterValue";
const _MI = "MemberId";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _PNT = "PhoneNumberType";
const _PT = "ProductType";
const _S = "Status";
const _St = "State";
const _TFP = "TollFreePrefix";
const _UE = "UserEmail";
const _UT = "UserType";
const _ac = "area-code";
const _c = "city";
const _co = "country";
const _fn = "filter-name";
const _fv = "filter-value";
const _mi = "member-id";
const _mr = "max-results";
const _n = "name";
const _nt = "next-token";
const _o = "operation";
const _pnt = "phone-number-type";
const _pt = "product-type";
const _s = "status";
const _st = "state";
const _t = "type";
const _tfp = "toll-free-prefix";
const _ue = "user-email";
const _ut = "user-type";
