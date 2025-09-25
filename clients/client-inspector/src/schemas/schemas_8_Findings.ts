// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AgentsAlreadyRunningAssessmentException as __AgentsAlreadyRunningAssessmentException } from "../models/index";
import {
  _AARA,
  _AARAE,
  _AARAL,
  _ag,
  _aI,
  _aRA,
  _aRN,
  _aT,
  _aTA,
  _c,
  _cR,
  _e,
  _m,
  _SAR,
  _SARR,
  _SARRt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentAlreadyRunningAssessment = struct(n0, _AARA, 0, [_aI, _aRA], [0, 0]);
export var AgentsAlreadyRunningAssessmentException = error(
  n0,
  _AARAE,
  {
    [_e]: _c,
  },
  [_m, _ag, _aT, _cR],
  [0, () => AgentAlreadyRunningAssessmentList, 2, 2],

  __AgentsAlreadyRunningAssessmentException
);
export var StartAssessmentRunRequest = struct(n0, _SARR, 0, [_aTA, _aRN], [0, 0]);
export var StartAssessmentRunResponse = struct(n0, _SARRt, 0, [_aRA], [0]);
export var AgentAlreadyRunningAssessmentList = list(n0, _AARAL, 0, () => AgentAlreadyRunningAssessment);
export var StartAssessmentRun = op(
  n0,
  _SAR,
  0,
  () => StartAssessmentRunRequest,
  () => StartAssessmentRunResponse
);
