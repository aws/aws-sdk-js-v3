// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ECr, _h, _Id, _M, _PTS, _PTSR, _PTSRu, _TSD, _UTS, _UTSL, _UTSn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutTraceSegmentsRequest = struct(n0, _PTSR, 0, [_TSD], [64 | 0]);
export var PutTraceSegmentsResult = struct(n0, _PTSRu, 0, [_UTS], [() => UnprocessedTraceSegmentList]);
export var UnprocessedTraceSegment = struct(n0, _UTSn, 0, [_Id, _ECr, _M], [0, 0, 0]);
export var TraceSegmentDocumentList = 64 | 0;

export var UnprocessedTraceSegmentList = list(n0, _UTSL, 0, () => UnprocessedTraceSegment);
export var PutTraceSegments = op(
  n0,
  _PTS,
  {
    [_h]: ["POST", "/TraceSegments", 200],
  },
  () => PutTraceSegmentsRequest,
  () => PutTraceSegmentsResult
);
