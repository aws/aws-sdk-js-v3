// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  StatisticsNotReadyYetException as __StatisticsNotReadyYetException,
  ThrottledException as __ThrottledException,
} from "../models/index";
import {
  _AETM,
  _c,
  _DSB,
  _e,
  _EDTSB,
  _en,
  _ES,
  _GQSe,
  _GQSRet,
  _GQSRetu,
  _GWURet,
  _GWURR,
  _GWURRe,
  _h,
  _hE,
  _M,
  _PS,
  _PTM,
  _QI,
  _QST,
  _QTM,
  _RS,
  _s,
  _SGWURRWUTS,
  _SNRYE,
  _TE,
  _WUEC,
  _WUGC,
  _WUI,
  _WUT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ResultStream = sim(n0, _RS, 42, {
  [_s]: 1,
});
export var SyntheticGetWorkUnitResultsRequestWorkUnitTokenString = sim(n0, _SGWURRWUTS, 0, 8);
export var ExecutionStatistics = struct(n0, _ES, 0, [_AETM, _DSB, _WUEC], [1, 1, 1]);
export var GetQueryStatisticsRequest = struct(n0, _GQSRet, 0, [_QI], [0]);
export var GetQueryStatisticsResponse = struct(
  n0,
  _GQSRetu,
  0,
  [_ES, _PS, _QST],
  [() => ExecutionStatistics, () => PlanningStatistics, 5]
);
export var GetWorkUnitResultsRequest = struct(
  n0,
  _GWURR,
  0,
  [_QI, _WUI, _WUT],
  [0, 1, [() => SyntheticGetWorkUnitResultsRequestWorkUnitTokenString, 0]]
);
export var GetWorkUnitResultsResponse = struct(n0, _GWURRe, 0, [_RS], [[() => ResultStream, 16]]);
export var PlanningStatistics = struct(n0, _PS, 0, [_EDTSB, _PTM, _QTM, _WUGC], [1, 1, 1, 1]);
export var StatisticsNotReadyYetException = error(
  n0,
  _SNRYE,
  {
    [_e]: _c,
    [_hE]: 420,
  },
  [_M],
  [0],

  __StatisticsNotReadyYetException
);
export var ThrottledException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottledException
);
export var GetQueryStatistics = op(
  n0,
  _GQSe,
  {
    [_h]: ["POST", "/GetQueryStatistics", 200],
    [_en]: ["query-"],
  },
  () => GetQueryStatisticsRequest,
  () => GetQueryStatisticsResponse
);
export var GetWorkUnitResults = op(
  n0,
  _GWURet,
  {
    [_h]: ["POST", "/GetWorkUnitResults", 200],
    [_en]: ["data-"],
  },
  () => GetWorkUnitResultsRequest,
  () => GetWorkUnitResultsResponse
);
