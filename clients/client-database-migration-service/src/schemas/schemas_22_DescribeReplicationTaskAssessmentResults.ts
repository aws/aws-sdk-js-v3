// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AR,
  _ARF,
  _ASss,
  _BN,
  _DRTARe,
  _DRTARMe,
  _DRTARRe,
  _Ma,
  _MR,
  _RTA,
  _RTARe,
  _RTARepl,
  _RTARL,
  _RTI,
  _RTLAD,
  _SOU,
  _xN,
  n0,
} from "./schemas_0";
import { SecretString } from "./schemas_46_Data";

/* eslint no-var: 0 */

export var DescribeReplicationTaskAssessmentResultsMessage = struct(n0, _DRTARMe, 0, [_RTA, _MR, _Ma], [0, 1, 0]);
export var DescribeReplicationTaskAssessmentResultsResponse = struct(
  n0,
  _DRTARRe,
  0,
  [_Ma, _BN, _RTARe],
  [0, 0, [() => ReplicationTaskAssessmentResultList, 0]]
);
export var ReplicationTaskAssessmentResult = struct(
  n0,
  _RTARepl,
  0,
  [_RTI, _RTA, _RTLAD, _ASss, _ARF, _AR, _SOU],
  [0, 0, 4, 0, 0, 0, [() => SecretString, 0]]
);
export var ReplicationTaskAssessmentResultList = list(n0, _RTARL, 0, [
  () => ReplicationTaskAssessmentResult,
  {
    [_xN]: _RTARepl,
  },
]);
export var DescribeReplicationTaskAssessmentResults = op(
  n0,
  _DRTARe,
  0,
  () => DescribeReplicationTaskAssessmentResultsMessage,
  () => DescribeReplicationTaskAssessmentResultsResponse
);
