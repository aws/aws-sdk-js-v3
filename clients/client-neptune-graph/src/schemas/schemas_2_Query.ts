// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  UnprocessableException as __UnprocessableException,
} from "../models/index";
import {
  _ADE,
  _c,
  _co,
  _CQ,
  _CQI,
  _dOEL,
  _e,
  _eL,
  _el,
  _eM,
  _en,
  _eP,
  _EQ,
  _EQI,
  _EQO,
  _ES,
  _eS,
  _ESd,
  _ex,
  _GDS,
  _GGSe,
  _GGSIe,
  _GGSOe,
  _gIr,
  _GQ,
  _GQI,
  _GQO,
  _gS,
  _h,
  _hE,
  _hH,
  _hL,
  _hQ,
  _i,
  _jN,
  _l,
  _LQ,
  _LQI,
  _LQO,
  _lSCT,
  _LVML,
  _m,
  _mo,
  _mR,
  _nE,
  _nEL,
  _nEP,
  _nL,
  _nN,
  _nNL,
  _nNP,
  _nP,
  _NS,
  _nS,
  _NSo,
  _p,
  _pa,
  _pCl,
  _q,
  _qI,
  _QRB,
  _QS,
  _qS,
  _QSL,
  _qTM,
  _qu,
  _r,
  _s,
  _sta,
  _tEPV,
  _tNPV,
  _UE,
  _v,
  _w,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var QueryResponseBlob = sim(n0, _QRB, 42, {
  [_s]: 1,
});
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var CancelQueryInput = struct(
  n0,
  _CQI,
  0,
  [_gIr, _qI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _gIr,
      },
    ],
    [0, 1],
  ]
);
export var EdgeStructure = struct(n0, _ES, 0, [_co, _eP], [1, 64 | 0]);
export var ExecuteQueryInput = struct(
  n0,
  _EQI,
  0,
  [_gIr, _qS, _l, _p, _pCl, _eM, _qTM],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _gIr,
      },
    ],
    [
      0,
      {
        [_jN]: _q,
      },
    ],
    0,
    128 | 15,
    0,
    [
      0,
      {
        [_jN]: _ex,
      },
    ],
    1,
  ]
);
export var ExecuteQueryOutput = struct(n0, _EQO, 0, [_pa], [[() => QueryResponseBlob, 16]]);
export var GetGraphSummaryInput = struct(
  n0,
  _GGSIe,
  0,
  [_gIr, _mo],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _gIr,
      },
    ],
    [
      0,
      {
        [_hQ]: _mo,
      },
    ],
  ]
);
export var GetGraphSummaryOutput = struct(n0, _GGSOe, 0, [_v, _lSCT, _gS], [0, 5, () => GraphDataSummary]);
export var GetQueryInput = struct(
  n0,
  _GQI,
  0,
  [_gIr, _qI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _gIr,
      },
    ],
    [0, 1],
  ]
);
export var GetQueryOutput = struct(n0, _GQO, 0, [_i, _qS, _w, _el, _sta], [0, 0, 1, 1, 0]);
export var GraphDataSummary = struct(
  n0,
  _GDS,
  0,
  [_nN, _nE, _nNL, _nEL, _nL, _eL, _nNP, _nEP, _nP, _eP, _tNPV, _tEPV, _nS, _eS],
  [
    1,
    1,
    1,
    1,
    64 | 0,
    64 | 0,
    1,
    1,
    list(n0, _LVML, 0, 128 | 1),
    list(n0, _LVML, 0, 128 | 1),
    1,
    1,
    () => NodeStructures,
    () => EdgeStructures,
  ]
);
export var ListQueriesInput = struct(
  n0,
  _LQI,
  0,
  [_gIr, _mR, _sta],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _gIr,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
  ]
);
export var ListQueriesOutput = struct(n0, _LQO, 0, [_qu], [() => QuerySummaryList]);
export var NodeStructure = struct(n0, _NS, 0, [_co, _nP, _dOEL], [1, 64 | 0, 64 | 0]);
export var QuerySummary = struct(n0, _QS, 0, [_i, _qS, _w, _el, _sta], [0, 0, 1, 1, 0]);
export var UnprocessableException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_m, _r],
  [0, 0],

  __UnprocessableException
);
export var EdgeLabels = 64 | 0;

export var EdgeProperties = 64 | 0;

export var EdgeStructures = list(n0, _ESd, 0, () => EdgeStructure);
export var LongValuedMapList = list(n0, _LVML, 0, 128 | 1);
export var NodeLabels = 64 | 0;

export var NodeProperties = 64 | 0;

export var NodeStructures = list(n0, _NSo, 0, () => NodeStructure);
export var OutgoingEdgeLabels = 64 | 0;

export var QuerySummaryList = list(n0, _QSL, 0, () => QuerySummary);
export var DocumentValuedMap = 128 | 15;

export var LongValuedMap = 128 | 1;

export var CancelQuery = op(
  n0,
  _CQ,
  {
    [_en]: ["{graphIdentifier}."],
    [_h]: ["DELETE", "/queries/{queryId}", 200],
  },
  () => CancelQueryInput,
  () => Unit
);
export var ExecuteQuery = op(
  n0,
  _EQ,
  {
    [_h]: ["POST", "/queries", 200],
    [_en]: ["{graphIdentifier}."],
  },
  () => ExecuteQueryInput,
  () => ExecuteQueryOutput
);
export var GetGraphSummary = op(
  n0,
  _GGSe,
  {
    [_en]: ["{graphIdentifier}."],
    [_h]: ["GET", "/summary", 200],
  },
  () => GetGraphSummaryInput,
  () => GetGraphSummaryOutput
);
export var GetQuery = op(
  n0,
  _GQ,
  {
    [_en]: ["{graphIdentifier}."],
    [_h]: ["GET", "/queries/{queryId}", 200],
  },
  () => GetQueryInput,
  () => GetQueryOutput
);
export var ListQueries = op(
  n0,
  _LQ,
  {
    [_en]: ["{graphIdentifier}."],
    [_h]: ["GET", "/queries", 200],
  },
  () => ListQueriesInput,
  () => ListQueriesOutput
);
