// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _DDJa,
  _dDJA,
  _dDJa,
  _DDJS,
  _dGA,
  _fR,
  _jN,
  _LDDJ,
  _LDDJR,
  _LDDJRi,
  _lUDT,
  _mRa,
  _nT,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataDeletionJobSummary = struct(
  n0,
  _DDJS,
  0,
  [_dDJA, _dGA, _jN, _s, _cDT, _lUDT, _fR],
  [0, 0, 0, 0, 4, 4, 0]
);
export var ListDataDeletionJobsRequest = struct(n0, _LDDJR, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListDataDeletionJobsResponse = struct(n0, _LDDJRi, 0, [_dDJa, _nT], [() => DataDeletionJobs, 0]);
export var DataDeletionJobs = list(n0, _DDJa, 0, () => DataDeletionJobSummary);
export var ListDataDeletionJobs = op(
  n0,
  _LDDJ,
  2,
  () => ListDataDeletionJobsRequest,
  () => ListDataDeletionJobsResponse
);
