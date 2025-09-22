// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  KeyGroupAlreadyExists as __KeyGroupAlreadyExists,
  TooManyKeyGroups as __TooManyKeyGroups,
  TooManyPublicKeysInKeyGroup as __TooManyPublicKeysInKeyGroup,
} from "../models/index";
import {
  _c,
  _CKG,
  _CKGR,
  _CKGRr,
  _Co,
  _e,
  _ET,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _I,
  _Id,
  _KG,
  _KGAE,
  _KGC,
  _KGL,
  _KGS,
  _KGSL,
  _L,
  _LKG,
  _LKGR,
  _LKGRi,
  _LMT,
  _M,
  _Ma,
  _MI,
  _N,
  _NM,
  _PK,
  _PKIL,
  _Q,
  _TMKG,
  _TMPKIKG,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateKeyGroupRequest = struct(
  n0,
  _CKGR,
  0,
  [_KGC],
  [
    [
      () => KeyGroupConfig,
      {
        [_xN]: _KGC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateKeyGroupResult = struct(
  n0,
  _CKGRr,
  0,
  [_KG, _L, _ET],
  [
    [() => KeyGroup, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var KeyGroup = struct(n0, _KG, 0, [_Id, _LMT, _KGC], [0, 4, [() => KeyGroupConfig, 0]]);
export var KeyGroupAlreadyExists = error(
  n0,
  _KGAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __KeyGroupAlreadyExists
);
export var KeyGroupConfig = struct(n0, _KGC, 0, [_N, _I, _Co], [0, [() => PublicKeyIdList, 0], 0]);
export var KeyGroupList = struct(n0, _KGL, 0, [_NM, _MI, _Q, _I], [0, 1, 1, [() => KeyGroupSummaryList, 0]]);
export var KeyGroupSummary = struct(n0, _KGS, 0, [_KG], [[() => KeyGroup, 0]]);
export var ListKeyGroupsRequest = struct(
  n0,
  _LKGR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListKeyGroupsResult = struct(n0, _LKGRi, 0, [_KGL], [[() => KeyGroupList, 16]]);
export var TooManyKeyGroups = error(
  n0,
  _TMKG,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyKeyGroups
);
export var TooManyPublicKeysInKeyGroup = error(
  n0,
  _TMPKIKG,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyPublicKeysInKeyGroup
);
export var KeyGroupSummaryList = list(n0, _KGSL, 0, [
  () => KeyGroupSummary,
  {
    [_xN]: _KGS,
  },
]);
export var PublicKeyIdList = list(n0, _PKIL, 0, [
  0,
  {
    [_xN]: _PK,
  },
]);
export var CreateKeyGroup = op(
  n0,
  _CKG,
  {
    [_h]: ["POST", "/2020-05-31/key-group", 201],
  },
  () => CreateKeyGroupRequest,
  () => CreateKeyGroupResult
);
export var ListKeyGroups = op(
  n0,
  _LKG,
  {
    [_h]: ["GET", "/2020-05-31/key-group", 200],
  },
  () => ListKeyGroupsRequest,
  () => ListKeyGroupsResult
);
