// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAIA, _DAIAM, _DAIAR, _IAN, _Ma, _MR, _MT, _RCA, _RIA, _RTA, _SEN, _TEN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeApplicableIndividualAssessmentsMessage = struct(
  n0,
  _DAIAM,
  0,
  [_RTA, _RIA, _RCA, _SEN, _TEN, _MT, _MR, _Ma],
  [0, 0, 0, 0, 0, 0, 1, 0]
);
export var DescribeApplicableIndividualAssessmentsResponse = struct(n0, _DAIAR, 0, [_IAN, _Ma], [64 | 0, 0]);
export var IndividualAssessmentNameList = 64 | 0;

export var DescribeApplicableIndividualAssessments = op(
  n0,
  _DAIA,
  0,
  () => DescribeApplicableIndividualAssessmentsMessage,
  () => DescribeApplicableIndividualAssessmentsResponse
);
