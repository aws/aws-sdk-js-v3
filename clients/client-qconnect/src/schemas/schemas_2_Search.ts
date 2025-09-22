// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aI,
  _F,
  _f,
  _fi,
  _FL,
  _hQ,
  _htt,
  _mR,
  _nT,
  _op,
  _sAe,
  _SE,
  _sE,
  _sI,
  _SSe,
  _sSe,
  _SSea,
  _SSes,
  _SSR,
  _SSRe,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Filter = struct(n0, _F, 0, [_f, _op, _v], [0, 0, 0]);
export var SearchExpression = struct(n0, _SE, 0, [_fi], [() => FilterList]);
export var SearchSessionsRequest = struct(
  n0,
  _SSR,
  0,
  [_nT, _mR, _aI, _sE],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    () => SearchExpression,
  ]
);
export var SearchSessionsResponse = struct(n0, _SSRe, 0, [_sSe, _nT], [() => SessionSummaries, 0]);
export var SessionSummary = struct(n0, _SSe, 0, [_sI, _sAe, _aI, _aA], [0, 0, 0, 0]);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var SessionSummaries = list(n0, _SSes, 0, () => SessionSummary);
export var SearchSessions = op(
  n0,
  _SSea,
  {
    [_htt]: ["POST", "/assistants/{assistantId}/searchSessions", 200],
  },
  () => SearchSessionsRequest,
  () => SearchSessionsResponse
);
