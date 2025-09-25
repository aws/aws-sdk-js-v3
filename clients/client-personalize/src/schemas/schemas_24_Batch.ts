// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BIJa,
  _bIJA,
  _bIJa,
  _bIJM,
  _BIJS,
  _cDT,
  _fR,
  _jN,
  _LBIJ,
  _LBIJR,
  _LBIJRi,
  _lUDT,
  _mRa,
  _nT,
  _s,
  _sVA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchInferenceJobSummary = struct(
  n0,
  _BIJS,
  0,
  [_bIJA, _jN, _s, _cDT, _lUDT, _fR, _sVA, _bIJM],
  [0, 0, 0, 4, 4, 0, 0, 0]
);
export var ListBatchInferenceJobsRequest = struct(n0, _LBIJR, 0, [_sVA, _nT, _mRa], [0, 0, 1]);
export var ListBatchInferenceJobsResponse = struct(n0, _LBIJRi, 0, [_bIJa, _nT], [() => BatchInferenceJobs, 0]);
export var BatchInferenceJobs = list(n0, _BIJa, 0, () => BatchInferenceJobSummary);
export var ListBatchInferenceJobs = op(
  n0,
  _LBIJ,
  2,
  () => ListBatchInferenceJobsRequest,
  () => ListBatchInferenceJobsResponse
);
