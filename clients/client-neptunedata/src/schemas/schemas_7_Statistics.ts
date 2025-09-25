// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { StatisticsNotAvailableException as __StatisticsNotAvailableException } from "../models/index";
import {
  _aC,
  _ac,
  _c,
  _co,
  _dat,
  _dM,
  _DPS,
  _DPSO,
  _DSS,
  _DSSO,
  _DSVM,
  _e,
  _GPS,
  _GPSO,
  _GSS,
  _GSSO,
  _h,
  _hE,
  _iC,
  _no,
  _p,
  _pCr,
  _rI,
  _S,
  _s,
  _sC,
  _sCi,
  _sI,
  _sIi,
  _SNAE,
  _SS,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_1_Get";

/* eslint no-var: 0 */

export var DeletePropertygraphStatisticsOutput = struct(
  n0,
  _DPSO,
  0,
  [_sC, _s, _p],
  [[1, 32], 0, () => DeleteStatisticsValueMap]
);
export var DeleteSparqlStatisticsOutput = struct(
  n0,
  _DSSO,
  0,
  [_sC, _s, _p],
  [[1, 32], 0, () => DeleteStatisticsValueMap]
);
export var DeleteStatisticsValueMap = struct(n0, _DSVM, 0, [_ac, _sI], [2, 0]);
export var GetPropertygraphStatisticsOutput = struct(n0, _GPSO, 0, [_s, _p], [0, () => Statistics]);
export var GetSparqlStatisticsOutput = struct(n0, _GSSO, 0, [_s, _p], [0, () => Statistics]);
export var Statistics = struct(n0, _S, 0, [_aC, _ac, _sI, _dat, _no, _sIi], [2, 2, 0, 5, 0, () => StatisticsSummary]);
export var StatisticsNotAvailableException = error(
  n0,
  _SNAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __StatisticsNotAvailableException
);
export var StatisticsSummary = struct(n0, _SS, 0, [_sCi, _iC, _pCr], [1, 1, 1]);
export var DeletePropertygraphStatistics = op(
  n0,
  _DPS,
  {
    [_h]: ["DELETE", "/propertygraph/statistics", 200],
  },
  () => Unit,
  () => DeletePropertygraphStatisticsOutput
);
export var DeleteSparqlStatistics = op(
  n0,
  _DSS,
  {
    [_h]: ["DELETE", "/sparql/statistics", 200],
  },
  () => Unit,
  () => DeleteSparqlStatisticsOutput
);
export var GetPropertygraphStatistics = op(
  n0,
  _GPS,
  {
    [_h]: ["GET", "/propertygraph/statistics", 200],
  },
  () => Unit,
  () => GetPropertygraphStatisticsOutput
);
export var GetSparqlStatistics = op(
  n0,
  _GSS,
  {
    [_h]: ["GET", "/sparql/statistics", 200],
  },
  () => Unit,
  () => GetSparqlStatisticsOutput
);
