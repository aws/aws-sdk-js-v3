// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cRA,
  _cRN,
  _cRon,
  _CRS,
  _CRSL,
  _f,
  _ht,
  _iUQ,
  _jA,
  _jI,
  _jN,
  _jQ,
  _jS,
  _jSL,
  _KVPe,
  _lA,
  _LCR,
  _LCRFL,
  _LCRR,
  _LCRRi,
  _LJFL,
  _LSJ,
  _LSJR,
  _LSJRi,
  _mR,
  _n,
  _nT,
  _rT,
  _sA,
  _sAt,
  _sI,
  _SJS,
  _SJSL,
  _sJT,
  _sR,
  _sta,
  _tQ,
  _val,
  n0,
} from "./schemas_0";
import { LatestServiceJobAttempt } from "./schemas_12_Service";

/* eslint no-var: 0 */

export var ConsumableResourceSummary = struct(n0, _CRS, 0, [_cRA, _cRN, _tQ, _iUQ, _rT], [0, 0, 1, 1, 0]);
export var KeyValuesPair = struct(n0, _KVPe, 0, [_n, _val], [0, 64 | 0]);
export var ListConsumableResourcesRequest = struct(
  n0,
  _LCRR,
  0,
  [_f, _mR, _nT],
  [() => ListConsumableResourcesFilterList, 1, 0]
);
export var ListConsumableResourcesResponse = struct(
  n0,
  _LCRRi,
  0,
  [_cRon, _nT],
  [() => ConsumableResourceSummaryList, 0]
);
export var ListServiceJobsRequest = struct(
  n0,
  _LSJR,
  0,
  [_jQ, _jS, _mR, _nT, _f],
  [0, 0, 1, 0, () => ListJobsFilterList]
);
export var ListServiceJobsResponse = struct(n0, _LSJRi, 0, [_jSL, _nT], [() => ServiceJobSummaryList, 0]);
export var ServiceJobSummary = struct(
  n0,
  _SJS,
  0,
  [_lA, _cA, _jA, _jI, _jN, _sJT, _sI, _sta, _sR, _sA, _sAt],
  [() => LatestServiceJobAttempt, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
);
export var ConsumableResourceSummaryList = list(n0, _CRSL, 0, () => ConsumableResourceSummary);
export var ListConsumableResourcesFilterList = list(n0, _LCRFL, 0, () => KeyValuesPair);
export var ListJobsFilterList = list(n0, _LJFL, 0, () => KeyValuesPair);
export var ServiceJobSummaryList = list(n0, _SJSL, 0, () => ServiceJobSummary);
export var ListConsumableResources = op(
  n0,
  _LCR,
  {
    [_ht]: ["POST", "/v1/listconsumableresources", 200],
  },
  () => ListConsumableResourcesRequest,
  () => ListConsumableResourcesResponse
);
export var ListServiceJobs = op(
  n0,
  _LSJ,
  {
    [_ht]: ["POST", "/v1/listservicejobs", 200],
  },
  () => ListServiceJobsRequest,
  () => ListServiceJobsResponse
);
