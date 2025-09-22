// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _A,
  _BGV,
  _BGVE,
  _BGVEa,
  _BGVI,
  _BGVO,
  _C,
  _c,
  _CA,
  _CI,
  _CII,
  _CIO,
  _Co,
  _CT,
  _CV,
  _CVI,
  _CVO,
  _D,
  _DI,
  _DII,
  _DIO,
  _E,
  _e,
  _EM,
  _F,
  _FS,
  _GI,
  _GIO,
  _GMV,
  _GMVI,
  _GMVO,
  _GV,
  _GVI,
  _GVO,
  _h,
  _hE,
  _IP,
  _IPL,
  _IPn,
  _LR,
  _LRA,
  _LRI,
  _LRO,
  _LUA,
  _M,
  _MR,
  _MV,
  _MVA,
  _MVN,
  _N,
  _NT,
  _O,
  _OAI,
  _P,
  _QS,
  _R,
  _RC,
  _Res,
  _Reso,
  _RF,
  _RL,
  _RP,
  _RPe,
  _RPL,
  _RT,
  _RTes,
  _S,
  _Sc,
  _Se,
  _Sea,
  _SF,
  _SI,
  _SO,
  _SQEE,
  _T,
  _TR,
  _TS,
  _Ty,
  _UIT,
  _UITI,
  _UITO,
  _UV,
  _UVI,
  _UVO,
  _V,
  _VA,
  _Va,
  _VAi,
  _Ve,
  _Vi,
  _VL,
  _VN,
  n0,
  Unit,
} from "./schemas_0";
import { TagMap } from "./schemas_10_Create";

/* eslint no-var: 0 */

export var QueryString = sim(n0, _QS, 0, 8);
export var BatchGetViewError = struct(n0, _BGVE, 0, [_VA, _EM], [0, 0]);
export var BatchGetViewInput = struct(n0, _BGVI, 0, [_VAi], [64 | 0]);
export var BatchGetViewOutput = struct(n0, _BGVO, 0, [_V, _E], [[() => ViewList, 0], () => BatchGetViewErrors]);
export var CreateIndexInput = struct(
  n0,
  _CII,
  0,
  [_CT, _T],
  [
    [0, 4],
    [() => TagMap, 0],
  ]
);
export var CreateIndexOutput = struct(n0, _CIO, 0, [_A, _S, _CA], [0, 0, 5]);
export var CreateViewInput = struct(
  n0,
  _CVI,
  0,
  [_CT, _VN, _IP, _Sc, _F, _T],
  [[0, 4], 0, () => IncludedPropertyList, 0, [() => SearchFilter, 0], [() => TagMap, 0]]
);
export var CreateViewOutput = struct(n0, _CVO, 0, [_Vi], [[() => View, 0]]);
export var DeleteIndexInput = struct(n0, _DII, 0, [_A], [0]);
export var DeleteIndexOutput = struct(n0, _DIO, 0, [_A, _S, _LUA], [0, 0, 5]);
export var GetIndexOutput = struct(
  n0,
  _GIO,
  0,
  [_A, _Ty, _S, _RF, _RT, _CA, _LUA, _T],
  [0, 0, 0, 64 | 0, 64 | 0, 5, 5, [() => TagMap, 0]]
);
export var GetManagedViewInput = struct(n0, _GMVI, 0, [_MVA], [0]);
export var GetManagedViewOutput = struct(n0, _GMVO, 0, [_MV], [[() => ManagedView, 0]]);
export var GetViewInput = struct(n0, _GVI, 0, [_VA], [0]);
export var GetViewOutput = struct(
  n0,
  _GVO,
  0,
  [_Vi, _T],
  [
    [() => View, 0],
    [() => TagMap, 0],
  ]
);
export var IncludedProperty = struct(n0, _IPn, 0, [_N], [0]);
export var ListResourcesInput = struct(n0, _LRI, 0, [_F, _MR, _VA, _NT], [[() => SearchFilter, 0], 1, 0, 0]);
export var ListResourcesOutput = struct(n0, _LRO, 0, [_Res, _NT, _VA], [() => ResourceList, 0, 0]);
export var ManagedView = struct(
  n0,
  _MV,
  0,
  [_MVA, _MVN, _TS, _LUA, _O, _Sc, _IP, _F, _RP, _Ve],
  [0, 0, 0, 5, 0, 0, () => IncludedPropertyList, [() => SearchFilter, 0], 0, 0]
);
export var Resource = struct(
  n0,
  _Reso,
  0,
  [_A, _OAI, _R, _RTes, _Se, _LRA, _P],
  [0, 0, 0, 0, 0, 5, () => ResourcePropertyList]
);
export var ResourceCount = struct(n0, _RC, 0, [_TR, _C], [1, 2]);
export var ResourceProperty = struct(n0, _RPe, 0, [_N, _LRA, _D], [0, 5, 15]);
export var SearchFilter = struct(n0, _SF, 8, [_FS], [0]);
export var SearchInput = struct(n0, _SI, 0, [_QS, _MR, _VA, _NT], [[() => QueryString, 0], 1, 0, 0]);
export var SearchOutput = struct(n0, _SO, 0, [_Res, _NT, _VA, _Co], [() => ResourceList, 0, 0, () => ResourceCount]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _N, _Va],
  [0, 0, 0],

  __ServiceQuotaExceededException
);
export var UpdateIndexTypeInput = struct(n0, _UITI, 0, [_A, _Ty], [0, 0]);
export var UpdateIndexTypeOutput = struct(n0, _UITO, 0, [_A, _Ty, _S, _LUA], [0, 0, 0, 5]);
export var UpdateViewInput = struct(
  n0,
  _UVI,
  0,
  [_VA, _IP, _F],
  [0, () => IncludedPropertyList, [() => SearchFilter, 0]]
);
export var UpdateViewOutput = struct(n0, _UVO, 0, [_Vi], [[() => View, 0]]);
export var View = struct(
  n0,
  _Vi,
  0,
  [_VA, _O, _LUA, _Sc, _IP, _F],
  [0, 0, 5, 0, () => IncludedPropertyList, [() => SearchFilter, 0]]
);
export var BatchGetViewErrors = list(n0, _BGVEa, 0, () => BatchGetViewError);
export var IncludedPropertyList = list(n0, _IPL, 0, () => IncludedProperty);
export var ResourceList = list(n0, _RL, 0, () => Resource);
export var ResourcePropertyList = list(n0, _RPL, 0, () => ResourceProperty);
export var ViewList = list(n0, _VL, 0, [() => View, 0]);
export var BatchGetView = op(
  n0,
  _BGV,
  {
    [_h]: ["POST", "/BatchGetView", 200],
  },
  () => BatchGetViewInput,
  () => BatchGetViewOutput
);
export var CreateIndex = op(
  n0,
  _CI,
  {
    [_h]: ["POST", "/CreateIndex", 200],
  },
  () => CreateIndexInput,
  () => CreateIndexOutput
);
export var CreateView = op(
  n0,
  _CV,
  {
    [_h]: ["POST", "/CreateView", 200],
  },
  () => CreateViewInput,
  () => CreateViewOutput
);
export var DeleteIndex = op(
  n0,
  _DI,
  {
    [_h]: ["POST", "/DeleteIndex", 200],
  },
  () => DeleteIndexInput,
  () => DeleteIndexOutput
);
export var GetIndex = op(
  n0,
  _GI,
  {
    [_h]: ["POST", "/GetIndex", 200],
  },
  () => Unit,
  () => GetIndexOutput
);
export var GetManagedView = op(
  n0,
  _GMV,
  {
    [_h]: ["POST", "/GetManagedView", 200],
  },
  () => GetManagedViewInput,
  () => GetManagedViewOutput
);
export var GetView = op(
  n0,
  _GV,
  {
    [_h]: ["POST", "/GetView", 200],
  },
  () => GetViewInput,
  () => GetViewOutput
);
export var ListResources = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/ListResources", 200],
  },
  () => ListResourcesInput,
  () => ListResourcesOutput
);
export var Search = op(
  n0,
  _Sea,
  {
    [_h]: ["POST", "/Search", 200],
  },
  () => SearchInput,
  () => SearchOutput
);
export var UpdateIndexType = op(
  n0,
  _UIT,
  {
    [_h]: ["POST", "/UpdateIndexType", 200],
  },
  () => UpdateIndexTypeInput,
  () => UpdateIndexTypeOutput
);
export var UpdateView = op(
  n0,
  _UV,
  {
    [_h]: ["POST", "/UpdateView", 200],
  },
  () => UpdateViewInput,
  () => UpdateViewOutput
);
