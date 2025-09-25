// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _dA,
  _DEJa,
  _dEJA,
  _dEJa,
  _DEJS,
  _fR,
  _jN,
  _LDEJ,
  _LDEJR,
  _LDEJRi,
  _lUDT,
  _mRa,
  _nT,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DatasetExportJobSummary = struct(n0, _DEJS, 0, [_dEJA, _jN, _s, _cDT, _lUDT, _fR], [0, 0, 0, 4, 4, 0]);
export var ListDatasetExportJobsRequest = struct(n0, _LDEJR, 0, [_dA, _nT, _mRa], [0, 0, 1]);
export var ListDatasetExportJobsResponse = struct(n0, _LDEJRi, 0, [_dEJa, _nT], [() => DatasetExportJobs, 0]);
export var DatasetExportJobs = list(n0, _DEJa, 0, () => DatasetExportJobSummary);
export var ListDatasetExportJobs = op(
  n0,
  _LDEJ,
  2,
  () => ListDatasetExportJobsRequest,
  () => ListDatasetExportJobsResponse
);
