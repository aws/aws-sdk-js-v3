// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _eTAP, _fOQ, _FOQD, _FOQJS, _FOQJSL, _GJQS, _GJQSR, _GJQSRe, _ht, _j, _jA, _jQ, _lUA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FrontOfQueueDetail = struct(n0, _FOQD, 0, [_j, _lUA], [() => FrontOfQueueJobSummaryList, 1]);
export var FrontOfQueueJobSummary = struct(n0, _FOQJS, 0, [_jA, _eTAP], [0, 1]);
export var GetJobQueueSnapshotRequest = struct(n0, _GJQSR, 0, [_jQ], [0]);
export var GetJobQueueSnapshotResponse = struct(n0, _GJQSRe, 0, [_fOQ], [() => FrontOfQueueDetail]);
export var FrontOfQueueJobSummaryList = list(n0, _FOQJSL, 0, () => FrontOfQueueJobSummary);
export var GetJobQueueSnapshot = op(
  n0,
  _GJQS,
  {
    [_ht]: ["POST", "/v1/getjobqueuesnapshot", 200],
  },
  () => GetJobQueueSnapshotRequest,
  () => GetJobQueueSnapshotResponse
);
