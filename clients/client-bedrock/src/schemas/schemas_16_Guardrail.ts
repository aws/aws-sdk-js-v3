// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cA,
  _CPR,
  _CPRR,
  _CPRRr,
  _cRT,
  _d,
  _fM,
  _GPR,
  _GPRR,
  _GPRRe,
  _hQ,
  _ht,
  _LPR,
  _LPRR,
  _LPRRi,
  _mA,
  _mo,
  _mR,
  _nT,
  _pRA,
  _PRD,
  _pRN,
  _PRS,
  _pRS,
  _PRSr,
  _PRTM,
  _PRTMr,
  _RCo,
  _rCo,
  _rQD,
  _s,
  _ta,
  _ty,
  _uA,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PromptRouterDescription = sim(n0, _PRD, 0, 8);
export var CreatePromptRouterRequest = struct(
  n0,
  _CPRR,
  0,
  [_cRT, _pRN, _mo, _d, _rCo, _fM, _ta],
  [
    [0, 4],
    0,
    () => PromptRouterTargetModels,
    [() => PromptRouterDescription, 0],
    () => RoutingCriteria,
    () => PromptRouterTargetModel,
    () => TagList,
  ]
);
export var CreatePromptRouterResponse = struct(n0, _CPRRr, 0, [_pRA], [0]);
export var GetPromptRouterRequest = struct(n0, _GPRR, 0, [_pRA], [[0, 1]]);
export var GetPromptRouterResponse = struct(
  n0,
  _GPRRe,
  0,
  [_pRN, _rCo, _d, _cA, _uA, _pRA, _mo, _fM, _s, _ty],
  [
    0,
    () => RoutingCriteria,
    [() => PromptRouterDescription, 0],
    5,
    5,
    0,
    () => PromptRouterTargetModels,
    () => PromptRouterTargetModel,
    0,
    0,
  ]
);
export var ListPromptRoutersRequest = struct(
  n0,
  _LPRR,
  0,
  [_mR, _nT, _ty],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ListPromptRoutersResponse = struct(n0, _LPRRi, 0, [_pRS, _nT], [[() => PromptRouterSummaries, 0], 0]);
export var PromptRouterSummary = struct(
  n0,
  _PRS,
  0,
  [_pRN, _rCo, _d, _cA, _uA, _pRA, _mo, _fM, _s, _ty],
  [
    0,
    () => RoutingCriteria,
    [() => PromptRouterDescription, 0],
    5,
    5,
    0,
    () => PromptRouterTargetModels,
    () => PromptRouterTargetModel,
    0,
    0,
  ]
);
export var PromptRouterTargetModel = struct(n0, _PRTM, 0, [_mA], [0]);
export var RoutingCriteria = struct(n0, _RCo, 0, [_rQD], [1]);
export var PromptRouterSummaries = list(n0, _PRSr, 0, [() => PromptRouterSummary, 0]);
export var PromptRouterTargetModels = list(n0, _PRTMr, 0, () => PromptRouterTargetModel);
export var CreatePromptRouter = op(
  n0,
  _CPR,
  {
    [_ht]: ["POST", "/prompt-routers", 200],
  },
  () => CreatePromptRouterRequest,
  () => CreatePromptRouterResponse
);
export var GetPromptRouter = op(
  n0,
  _GPR,
  {
    [_ht]: ["GET", "/prompt-routers/{promptRouterArn}", 200],
  },
  () => GetPromptRouterRequest,
  () => GetPromptRouterResponse
);
export var ListPromptRouters = op(
  n0,
  _LPR,
  {
    [_ht]: ["GET", "/prompt-routers", 200],
  },
  () => ListPromptRoutersRequest,
  () => ListPromptRoutersResponse
);
