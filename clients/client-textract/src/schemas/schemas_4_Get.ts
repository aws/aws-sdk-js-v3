// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _AIDD,
  _BB,
  _BL,
  _Bl,
  _Blo,
  _BT,
  _C,
  _CI,
  _Co,
  _CS,
  _Cu,
  _DI,
  _DM,
  _EC,
  _EDL,
  _EDx,
  _EDxp,
  _EF,
  _EFL,
  _EGP,
  _EGPL,
  _EI,
  _ET,
  _ETx,
  _G,
  _GP,
  _H,
  _I,
  _Id,
  _IDd,
  _IDF,
  _IDFd,
  _IDFL,
  _L,
  _LD,
  _LI,
  _LIEF,
  _LIF,
  _LIG,
  _LIGI,
  _LIGi,
  _LIGL,
  _LIL,
  _NV,
  _P,
  _Pa,
  _PN,
  _Po,
  _Poi,
  _Q,
  _R,
  _RA,
  _Rel,
  _RI,
  _RL,
  _RS,
  _SF,
  _SS,
  _T,
  _To,
  _TT,
  _Ty,
  _Typ,
  _Va,
  _VD,
  _VT,
  _W,
  _X,
  _Y,
  n0,
} from "./schemas_0";
import { Query } from "./schemas_7_Document";

/* eslint no-var: 0 */

export var AnalyzeIDDetections = struct(n0, _AIDD, 0, [_T, _NV, _Co], [0, () => NormalizedValue, 1]);
export var Block = struct(
  n0,
  _Blo,
  0,
  [_BT, _Co, _T, _TT, _RI, _CI, _RS, _CS, _G, _I, _R, _ET, _SS, _Pa, _Q],
  [0, 1, 0, 0, 1, 1, 1, 1, () => Geometry, 0, () => RelationshipList, 64 | 0, 0, 1, () => Query]
);
export var BoundingBox = struct(n0, _BB, 0, [_W, _H, _L, _To], [1, 1, 1, 1]);
export var DocumentMetadata = struct(n0, _DM, 0, [_P], [1]);
export var ExpenseCurrency = struct(n0, _EC, 0, [_C, _Co], [0, 1]);
export var ExpenseDetection = struct(n0, _EDx, 0, [_T, _G, _Co], [0, () => Geometry, 1]);
export var ExpenseDocument = struct(
  n0,
  _EDxp,
  0,
  [_EI, _SF, _LIG, _Bl],
  [1, () => ExpenseFieldList, () => LineItemGroupList, () => BlockList]
);
export var ExpenseField = struct(
  n0,
  _EF,
  0,
  [_Ty, _LD, _VD, _PN, _Cu, _GP],
  [
    () => ExpenseType,
    () => ExpenseDetection,
    () => ExpenseDetection,
    1,
    () => ExpenseCurrency,
    () => ExpenseGroupPropertyList,
  ]
);
export var ExpenseGroupProperty = struct(n0, _EGP, 0, [_Typ, _I], [64 | 0, 0]);
export var ExpenseType = struct(n0, _ETx, 0, [_T, _Co], [0, 1]);
export var Geometry = struct(n0, _G, 0, [_BB, _Po, _RA], [() => BoundingBox, () => Polygon, 1]);
export var IdentityDocument = struct(
  n0,
  _IDd,
  0,
  [_DI, _IDF, _Bl],
  [1, () => IdentityDocumentFieldList, () => BlockList]
);
export var IdentityDocumentField = struct(
  n0,
  _IDFd,
  0,
  [_Ty, _VD],
  [() => AnalyzeIDDetections, () => AnalyzeIDDetections]
);
export var LineItemFields = struct(n0, _LIF, 0, [_LIEF], [() => ExpenseFieldList]);
export var LineItemGroup = struct(n0, _LIGi, 0, [_LIGI, _LI], [1, () => LineItemList]);
export var NormalizedValue = struct(n0, _NV, 0, [_Va, _VT], [0, 0]);
export var Point = struct(n0, _Poi, 0, [_X, _Y], [1, 1]);
export var Relationship = struct(n0, _Rel, 0, [_Ty, _Id], [0, 64 | 0]);
export var BlockList = list(n0, _BL, 0, () => Block);
export var EntityTypes = 64 | 0;

export var ExpenseDocumentList = list(n0, _EDL, 0, () => ExpenseDocument);
export var ExpenseFieldList = list(n0, _EFL, 0, () => ExpenseField);
export var ExpenseGroupPropertyList = list(n0, _EGPL, 0, () => ExpenseGroupProperty);
export var IdentityDocumentFieldList = list(n0, _IDFL, 0, () => IdentityDocumentField);
export var IdList = 64 | 0;

export var LineItemGroupList = list(n0, _LIGL, 0, () => LineItemGroup);
export var LineItemList = list(n0, _LIL, 0, () => LineItemFields);
export var Polygon = list(n0, _Po, 0, () => Point);
export var RelationshipList = list(n0, _RL, 0, () => Relationship);
export var StringList = 64 | 0;
