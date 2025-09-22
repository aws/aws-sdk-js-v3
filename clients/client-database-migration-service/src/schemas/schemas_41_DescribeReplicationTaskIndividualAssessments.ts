// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DRTIA,
  _DRTIAM,
  _DRTIAR,
  _F,
  _IANn,
  _Ma,
  _MR,
  _RTARA,
  _RTIA,
  _RTIAA,
  _RTIAe,
  _RTIAL,
  _RTIASD,
  _S,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReplicationTaskIndividualAssessmentsMessage = struct(
  n0,
  _DRTIAM,
  0,
  [_F, _MR, _Ma],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeReplicationTaskIndividualAssessmentsResponse = struct(
  n0,
  _DRTIAR,
  0,
  [_Ma, _RTIA],
  [0, () => ReplicationTaskIndividualAssessmentList]
);
export var ReplicationTaskIndividualAssessment = struct(
  n0,
  _RTIAe,
  0,
  [_RTIAA, _RTARA, _IANn, _S, _RTIASD],
  [0, 0, 0, 0, 4]
);
export var ReplicationTaskIndividualAssessmentList = list(n0, _RTIAL, 0, () => ReplicationTaskIndividualAssessment);
export var DescribeReplicationTaskIndividualAssessments = op(
  n0,
  _DRTIA,
  0,
  () => DescribeReplicationTaskIndividualAssessmentsMessage,
  () => DescribeReplicationTaskIndividualAssessmentsResponse
);
