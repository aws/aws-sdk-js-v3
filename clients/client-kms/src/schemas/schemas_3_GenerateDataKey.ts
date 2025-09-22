// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { IncorrectKeyException as __IncorrectKeyException } from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _CB,
  _CD,
  _CG,
  _CGR,
  _CGRr,
  _DEA,
  _DEC,
  _DKI,
  _DKMI,
  _DR,
  _e,
  _EC,
  _ECE,
  _ECS,
  _G,
  _GC,
  _GDKPWP,
  _GDKPWPR,
  _GDKPWPRe,
  _GDKWP,
  _GDKWPR,
  _GDKWPRe,
  _GI,
  _GL,
  _GLE,
  _GP,
  _GT,
  _GTr,
  _hE,
  _IA,
  _IKE,
  _KI,
  _KMI,
  _KPS,
  _KS,
  _L,
  _LG,
  _LGR,
  _LGRi,
  _LRG,
  _LRGR,
  _M,
  _m,
  _N,
  _NM,
  _NOB,
  _O,
  _PK,
  _PKCB,
  _RE,
  _RER,
  _RERe,
  _RP,
  _SEA,
  _SEC,
  _SKI,
  _SKMI,
  _Tr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGrantRequest = struct(
  n0,
  _CGR,
  0,
  [_KI, _GP, _RP, _O, _C, _GT, _N, _DR],
  [0, 0, 0, 64 | 0, () => GrantConstraints, 64 | 0, 0, 2]
);
export var CreateGrantResponse = struct(n0, _CGRr, 0, [_GTr, _GI], [0, 0]);
export var GenerateDataKeyPairWithoutPlaintextRequest = struct(
  n0,
  _GDKPWPR,
  0,
  [_EC, _KI, _KPS, _GT, _DR],
  [128 | 0, 0, 0, 64 | 0, 2]
);
export var GenerateDataKeyPairWithoutPlaintextResponse = struct(
  n0,
  _GDKPWPRe,
  0,
  [_PKCB, _PK, _KI, _KPS, _KMI],
  [21, 21, 0, 0, 0]
);
export var GenerateDataKeyWithoutPlaintextRequest = struct(
  n0,
  _GDKWPR,
  0,
  [_KI, _EC, _KS, _NOB, _GT, _DR],
  [0, 128 | 0, 0, 1, 64 | 0, 2]
);
export var GenerateDataKeyWithoutPlaintextResponse = struct(n0, _GDKWPRe, 0, [_CB, _KI, _KMI], [21, 0, 0]);
export var GrantConstraints = struct(n0, _GC, 0, [_ECS, _ECE], [128 | 0, 128 | 0]);
export var GrantListEntry = struct(
  n0,
  _GLE,
  0,
  [_KI, _GI, _N, _CD, _GP, _RP, _IA, _O, _C],
  [0, 0, 0, 4, 0, 0, 0, 64 | 0, () => GrantConstraints]
);
export var IncorrectKeyException = error(
  n0,
  _IKE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IncorrectKeyException`, 400],
  },
  [_m],
  [0],

  __IncorrectKeyException
);
export var ListGrantsRequest = struct(n0, _LGR, 0, [_L, _M, _KI, _GI, _GP], [1, 0, 0, 0, 0]);
export var ListGrantsResponse = struct(n0, _LGRi, 0, [_G, _NM, _Tr], [() => GrantList, 0, 2]);
export var ListRetirableGrantsRequest = struct(n0, _LRGR, 0, [_L, _M, _RP], [1, 0, 0]);
export var ReEncryptRequest = struct(
  n0,
  _RER,
  0,
  [_CB, _SEC, _SKI, _DKI, _DEC, _SEA, _DEA, _GT, _DR],
  [21, 128 | 0, 0, 0, 128 | 0, 0, 0, 64 | 0, 2]
);
export var ReEncryptResponse = struct(n0, _RERe, 0, [_CB, _SKI, _KI, _SEA, _DEA, _SKMI, _DKMI], [21, 0, 0, 0, 0, 0, 0]);
export var GrantList = list(n0, _GL, 0, () => GrantListEntry);
export var GrantOperationList = 64 | 0;

export var EncryptionContextType = 128 | 0;

export var CreateGrant = op(
  n0,
  _CG,
  0,
  () => CreateGrantRequest,
  () => CreateGrantResponse
);
export var GenerateDataKeyPairWithoutPlaintext = op(
  n0,
  _GDKPWP,
  0,
  () => GenerateDataKeyPairWithoutPlaintextRequest,
  () => GenerateDataKeyPairWithoutPlaintextResponse
);
export var GenerateDataKeyWithoutPlaintext = op(
  n0,
  _GDKWP,
  0,
  () => GenerateDataKeyWithoutPlaintextRequest,
  () => GenerateDataKeyWithoutPlaintextResponse
);
export var ListGrants = op(
  n0,
  _LG,
  0,
  () => ListGrantsRequest,
  () => ListGrantsResponse
);
export var ListRetirableGrants = op(
  n0,
  _LRG,
  0,
  () => ListRetirableGrantsRequest,
  () => ListGrantsResponse
);
export var ReEncrypt = op(
  n0,
  _RE,
  0,
  () => ReEncryptRequest,
  () => ReEncryptResponse
);
