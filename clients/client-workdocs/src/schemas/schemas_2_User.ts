// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  DeactivatingLastSystemUserException as __DeactivatingLastSystemUserException,
  IllegalUserStateException as __IllegalUserStateException,
  InvalidCommentOperationException as __InvalidCommentOperationException,
} from "../models/index";
import {
  _A,
  _AT,
  _AU,
  _AUR,
  _AURc,
  _C,
  _c,
  _CCR,
  _CCr,
  _CCRr,
  _CI,
  _CIo,
  _CM,
  _Co,
  _Cod,
  _CS,
  _CT,
  _CTT,
  _CU,
  _CUR,
  _CURr,
  _DI,
  _DLSUE,
  _e,
  _EA,
  _EAT,
  _GCU,
  _GCUR,
  _GCURe,
  _GN,
  _GPP,
  _h,
  _hE,
  _hH,
  _ICOE,
  _Id,
  _IUSE,
  _Lo,
  _M,
  _MTo,
  _NC,
  _OI,
  _Pa,
  _PI,
  _PT,
  _RBFI,
  _RFI,
  _RIe,
  _S,
  _SAIB,
  _SRT,
  _SRt,
  _St,
  _STto,
  _SUIB,
  _Sur,
  _T,
  _Te,
  _TI,
  _TZI,
  _U,
  _UAVT,
  _UI,
  _Us,
  _USM,
  _UTs,
  _UUp,
  _UUR,
  _UURp,
  _V,
  _VI,
  AuthenticationHeaderType,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CommentTextType = sim(n0, _CTT, 0, 8);
export var EmailAddressType = sim(n0, _EAT, 0, 8);
export var PasswordType = sim(n0, _PT, 0, 8);
export var UserAttributeValueType = sim(n0, _UAVT, 0, 8);
export var UsernameType = sim(n0, _UTs, 0, 8);
export var ActivateUserRequest = struct(
  n0,
  _AUR,
  0,
  [_UI, _AT],
  [
    [0, 1],
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var ActivateUserResponse = struct(n0, _AURc, 0, [_U], [[() => User, 0]]);
export var Comment = struct(
  n0,
  _C,
  0,
  [_CI, _PI, _TI, _Te, _Co, _CT, _S, _V, _RIe],
  [0, 0, 0, [() => CommentTextType, 0], [() => User, 0], 4, 0, 0, 0]
);
export var CommentMetadata = struct(n0, _CM, 0, [_CI, _Co, _CT, _CS, _RIe, _CIo], [0, [() => User, 0], 4, 0, 0, 0]);
export var CreateCommentRequest = struct(
  n0,
  _CCR,
  0,
  [_AT, _DI, _VI, _PI, _TI, _Te, _V, _NC],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
    0,
    0,
    [() => CommentTextType, 0],
    0,
    2,
  ]
);
export var CreateCommentResponse = struct(n0, _CCRr, 0, [_C], [[() => Comment, 0]]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_OI, _Us, _EA, _GN, _Sur, _Pa, _TZI, _SRt, _AT],
  [
    0,
    [() => UsernameType, 0],
    [() => EmailAddressType, 0],
    [() => UserAttributeValueType, 0],
    [() => UserAttributeValueType, 0],
    [() => PasswordType, 0],
    0,
    () => StorageRuleType,
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_U], [[() => User, 0]]);
export var DeactivatingLastSystemUserException = error(
  n0,
  _DLSUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _Cod],
  [0, 0],

  __DeactivatingLastSystemUserException
);
export var GetCurrentUserRequest = struct(
  n0,
  _GCUR,
  0,
  [_AT],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var GetCurrentUserResponse = struct(n0, _GCURe, 0, [_U], [[() => User, 0]]);
export var IllegalUserStateException = error(
  n0,
  _IUSE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __IllegalUserStateException
);
export var InvalidCommentOperationException = error(
  n0,
  _ICOE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __InvalidCommentOperationException
);
export var StorageRuleType = struct(n0, _SRT, 0, [_SAIB, _STto], [1, 0]);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_AT, _UI, _GN, _Sur, _T, _SRt, _TZI, _Lo, _GPP],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [() => UserAttributeValueType, 0],
    [() => UserAttributeValueType, 0],
    0,
    () => StorageRuleType,
    0,
    0,
    0,
  ]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [_U], [[() => User, 0]]);
export var User = struct(
  n0,
  _U,
  0,
  [_Id, _Us, _EA, _GN, _Sur, _OI, _RFI, _RBFI, _S, _T, _CT, _MTo, _TZI, _Lo, _St],
  [
    0,
    [() => UsernameType, 0],
    [() => EmailAddressType, 0],
    [() => UserAttributeValueType, 0],
    [() => UserAttributeValueType, 0],
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    () => UserStorageMetadata,
  ]
);
export var UserStorageMetadata = struct(n0, _USM, 0, [_SUIB, _SRt], [1, () => StorageRuleType]);
export var ActivateUser = op(
  n0,
  _AU,
  {
    [_h]: ["POST", "/api/v1/users/{UserId}/activation", 200],
  },
  () => ActivateUserRequest,
  () => ActivateUserResponse
);
export var CreateComment = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment", 201],
  },
  () => CreateCommentRequest,
  () => CreateCommentResponse
);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_h]: ["POST", "/api/v1/users", 201],
  },
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var GetCurrentUser = op(
  n0,
  _GCU,
  {
    [_h]: ["GET", "/api/v1/me", 200],
  },
  () => GetCurrentUserRequest,
  () => GetCurrentUserResponse
);
export var UpdateUser = op(
  n0,
  _UUp,
  {
    [_h]: ["PATCH", "/api/v1/users/{UserId}", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResponse
);
