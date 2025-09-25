// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _CK,
  _CKI,
  _CKO,
  _CT,
  _D,
  _DK,
  _DKU,
  _DPT,
  _DT,
  _E,
  _En,
  _Enc,
  _G,
  _K,
  _KA,
  _KAe,
  _KAey,
  _KCe,
  _KCV,
  _KCVA,
  _Ke,
  _KMOU,
  _KO,
  _KS,
  _KSe,
  _KSL,
  _KU,
  _LK,
  _LKI,
  _LKO,
  _MR,
  _MRKT,
  _NR,
  _NT,
  _PR,
  _RR,
  _RS,
  _RST,
  _S,
  _SM,
  _St,
  _T,
  _U,
  _UDRR,
  _UST,
  _USTs,
  _V,
  _W,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var CreateKeyInput = struct(
  n0,
  _CKI,
  0,
  [_KAe, _KCVA, _E, _En, _T, _DKU, _RR],
  [() => KeyAttributes, 0, 2, 2, () => Tags, 0, 64 | 0]
);
export var CreateKeyOutput = struct(n0, _CKO, 0, [_K], [() => Key]);
export var Key = struct(
  n0,
  _K,
  0,
  [_KA, _KAe, _KCV, _KCVA, _En, _E, _KS, _KO, _CT, _UST, _USTs, _DPT, _DT, _DKU, _MRKT, _PR, _RS, _UDRR],
  [0, () => KeyAttributes, 0, 0, 2, 2, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, () => ReplicationStatus, 2]
);
export var KeyAttributes = struct(n0, _KAe, 0, [_KU, _KCe, _KAey, _KMOU], [0, 0, 0, () => KeyModesOfUse]);
export var KeyModesOfUse = struct(n0, _KMOU, 0, [_Enc, _D, _W, _U, _G, _S, _V, _DK, _NR], [2, 2, 2, 2, 2, 2, 2, 2, 2]);
export var KeySummary = struct(
  n0,
  _KSe,
  0,
  [_KA, _KS, _KAe, _KCV, _E, _En, _MRKT, _PR],
  [0, 0, () => KeyAttributes, 0, 2, 2, 0, 0]
);
export var ListKeysInput = struct(n0, _LKI, 0, [_KS, _NT, _MR], [0, 0, 1]);
export var ListKeysOutput = struct(n0, _LKO, 0, [_Ke, _NT], [() => KeySummaryList, 0]);
export var ReplicationStatusType = struct(n0, _RST, 0, [_St, _SM], [0, 0]);
export var KeySummaryList = list(n0, _KSL, 0, () => KeySummary);
export var ReplicationStatus = map(n0, _RS, 0, 0, () => ReplicationStatusType);
export var CreateKey = op(
  n0,
  _CK,
  0,
  () => CreateKeyInput,
  () => CreateKeyOutput
);
export var ListKeys = op(
  n0,
  _LK,
  0,
  () => ListKeysInput,
  () => ListKeysOutput
);
