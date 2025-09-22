// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidMarkerException as __InvalidMarkerException } from "../models/index";
import {
  _AA,
  _AL,
  _Al,
  _ALE,
  _AN,
  _aQE,
  _c,
  _CD,
  _e,
  _EM,
  _hE,
  _IKM,
  _IME,
  _IS,
  _K,
  _KA,
  _KI,
  _KL,
  _KLE,
  _KMD,
  _KMI,
  _KMS,
  _L,
  _LA,
  _LAR,
  _LARi,
  _LK,
  _LKP,
  _LKPR,
  _LKPRi,
  _LKR,
  _LKRi,
  _LKRis,
  _LKRR,
  _LKRRi,
  _LRT,
  _LRTR,
  _LRTRi,
  _LUD,
  _M,
  _m,
  _NM,
  _PNo,
  _RD,
  _RL,
  _RLE,
  _Ro,
  _RTo,
  _T,
  _TKI,
  _Tr,
  _VT,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_1_Resource";

/* eslint no-var: 0 */

export var AliasListEntry = struct(n0, _ALE, 0, [_AN, _AA, _TKI, _CD, _LUD], [0, 0, 0, 4, 4]);
export var InvalidMarkerException = error(
  n0,
  _IME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidMarker`, 400],
  },
  [_m],
  [0],

  __InvalidMarkerException
);
export var KeyListEntry = struct(n0, _KLE, 0, [_KI, _KA], [0, 0]);
export var ListAliasesRequest = struct(n0, _LAR, 0, [_KI, _L, _M], [0, 1, 0]);
export var ListAliasesResponse = struct(n0, _LARi, 0, [_Al, _NM, _Tr], [() => AliasList, 0, 2]);
export var ListKeyPoliciesRequest = struct(n0, _LKPR, 0, [_KI, _L, _M], [0, 1, 0]);
export var ListKeyPoliciesResponse = struct(n0, _LKPRi, 0, [_PNo, _NM, _Tr], [64 | 0, 0, 2]);
export var ListKeyRotationsRequest = struct(n0, _LKRR, 0, [_KI, _IKM, _L, _M], [0, 0, 1, 0]);
export var ListKeyRotationsResponse = struct(n0, _LKRRi, 0, [_Ro, _NM, _Tr], [() => RotationsList, 0, 2]);
export var ListKeysRequest = struct(n0, _LKR, 0, [_L, _M], [1, 0]);
export var ListKeysResponse = struct(n0, _LKRi, 0, [_K, _NM, _Tr], [() => KeyList, 0, 2]);
export var ListResourceTagsRequest = struct(n0, _LRTR, 0, [_KI, _L, _M], [0, 1, 0]);
export var ListResourceTagsResponse = struct(n0, _LRTRi, 0, [_T, _NM, _Tr], [() => TagList, 0, 2]);
export var RotationsListEntry = struct(
  n0,
  _RLE,
  0,
  [_KI, _KMI, _KMD, _IS, _KMS, _EM, _VT, _RD, _RTo],
  [0, 0, 0, 0, 0, 0, 4, 4, 0]
);
export var AliasList = list(n0, _AL, 0, () => AliasListEntry);
export var KeyList = list(n0, _KL, 0, () => KeyListEntry);
export var PolicyNameList = 64 | 0;

export var RotationsList = list(n0, _RL, 0, () => RotationsListEntry);
export var ListAliases = op(
  n0,
  _LA,
  0,
  () => ListAliasesRequest,
  () => ListAliasesResponse
);
export var ListKeyPolicies = op(
  n0,
  _LKP,
  0,
  () => ListKeyPoliciesRequest,
  () => ListKeyPoliciesResponse
);
export var ListKeyRotations = op(
  n0,
  _LKRis,
  0,
  () => ListKeyRotationsRequest,
  () => ListKeyRotationsResponse
);
export var ListKeys = op(
  n0,
  _LK,
  0,
  () => ListKeysRequest,
  () => ListKeysResponse
);
export var ListResourceTags = op(
  n0,
  _LRT,
  0,
  () => ListResourceTagsRequest,
  () => ListResourceTagsResponse
);
