// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextTokenException as __InvalidNextTokenException } from "../models/index";
import {
  _c,
  _e,
  _ET,
  _ETB,
  _ETIv,
  _ETN,
  _ETS,
  _F,
  _h,
  _hE,
  _INTE,
  _LET,
  _LETF,
  _LETFi,
  _LETR,
  _LETRi,
  _M,
  _MR,
  _N,
  _NT,
  _RT,
  _SN,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EventTypeSummary = struct(n0, _ETS, 0, [_ETIv, _SN, _ETN, _RT], [0, 0, 0, 0]);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var ListEventTypesFilter = struct(n0, _LETF, 0, [_N, _V], [0, 0]);
export var ListEventTypesRequest = struct(n0, _LETR, 0, [_F, _NT, _MR], [() => ListEventTypesFilters, 0, 1]);
export var ListEventTypesResult = struct(n0, _LETRi, 0, [_ET, _NT], [() => EventTypeBatch, 0]);
export var Unit = "unit" as const;

export var EventTypeBatch = list(n0, _ETB, 0, () => EventTypeSummary);
export var ListEventTypesFilters = list(n0, _LETFi, 0, () => ListEventTypesFilter);
export var ListEventTypes = op(
  n0,
  _LET,
  {
    [_h]: ["POST", "/listEventTypes", 200],
  },
  () => ListEventTypesRequest,
  () => ListEventTypesResult
);
