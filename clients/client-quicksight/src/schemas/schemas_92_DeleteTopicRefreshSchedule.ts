// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DA, _DIat, _DTRS, _DTRSR, _DTRSRe, _h, _RI, _St, _TAo, _TIo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTopicRefreshScheduleRequest = struct(
  n0,
  _DTRSR,
  0,
  [_AAI, _TIo, _DIat],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTopicRefreshScheduleResponse = struct(
  n0,
  _DTRSRe,
  0,
  [_TIo, _TAo, _DA, _St, _RI],
  [0, 0, 0, [1, 32], 0]
);
export var DeleteTopicRefreshSchedule = op(
  n0,
  _DTRS,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}", 200],
  },
  () => DeleteTopicRefreshScheduleRequest,
  () => DeleteTopicRefreshScheduleResponse
);
