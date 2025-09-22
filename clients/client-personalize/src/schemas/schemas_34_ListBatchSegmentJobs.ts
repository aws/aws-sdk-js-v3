// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BSJa,
  _bSJA,
  _bSJa,
  _BSJS,
  _cDT,
  _fR,
  _jN,
  _LBSJ,
  _LBSJR,
  _LBSJRi,
  _lUDT,
  _mRa,
  _nT,
  _s,
  _sVA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchSegmentJobSummary = struct(
  n0,
  _BSJS,
  0,
  [_bSJA, _jN, _s, _cDT, _lUDT, _fR, _sVA],
  [0, 0, 0, 4, 4, 0, 0]
);
export var ListBatchSegmentJobsRequest = struct(n0, _LBSJR, 0, [_sVA, _nT, _mRa], [0, 0, 1]);
export var ListBatchSegmentJobsResponse = struct(n0, _LBSJRi, 0, [_bSJa, _nT], [() => BatchSegmentJobs, 0]);
export var BatchSegmentJobs = list(n0, _BSJa, 0, () => BatchSegmentJobSummary);
export var ListBatchSegmentJobs = op(
  n0,
  _LBSJ,
  2,
  () => ListBatchSegmentJobsRequest,
  () => ListBatchSegmentJobsResponse
);
