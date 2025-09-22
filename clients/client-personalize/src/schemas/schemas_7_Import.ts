// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _dA,
  _DIJa,
  _dIJA,
  _dIJa,
  _DIJS,
  _fR,
  _iMm,
  _jN,
  _LDIJ,
  _LDIJR,
  _LDIJRi,
  _lUDT,
  _mRa,
  _nT,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DatasetImportJobSummary = struct(
  n0,
  _DIJS,
  0,
  [_dIJA, _jN, _s, _cDT, _lUDT, _fR, _iMm],
  [0, 0, 0, 4, 4, 0, 0]
);
export var ListDatasetImportJobsRequest = struct(n0, _LDIJR, 0, [_dA, _nT, _mRa], [0, 0, 1]);
export var ListDatasetImportJobsResponse = struct(n0, _LDIJRi, 0, [_dIJa, _nT], [() => DatasetImportJobs, 0]);
export var DatasetImportJobs = list(n0, _DIJa, 0, () => DatasetImportJobSummary);
export var ListDatasetImportJobs = op(
  n0,
  _LDIJ,
  2,
  () => ListDatasetImportJobsRequest,
  () => ListDatasetImportJobsResponse
);
