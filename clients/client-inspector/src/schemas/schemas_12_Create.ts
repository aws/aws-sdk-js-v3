// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _aTAs,
  _aTN,
  _c,
  _CAT,
  _CATR,
  _CATRr,
  _cR,
  _e,
  _eC,
  _ev,
  _LEE,
  _m,
  _rAes,
  _rGA,
  _STE,
  _STER,
  _tA,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAssessmentTargetRequest = struct(n0, _CATR, 0, [_aTN, _rGA], [0, 0]);
export var CreateAssessmentTargetResponse = struct(n0, _CATRr, 0, [_aTAs], [0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m, _eC, _cR],
  [0, 0, 2],

  __LimitExceededException
);
export var SubscribeToEventRequest = struct(n0, _STER, 0, [_rAes, _ev, _tA], [0, 0, 0]);
export var CreateAssessmentTarget = op(
  n0,
  _CAT,
  0,
  () => CreateAssessmentTargetRequest,
  () => CreateAssessmentTargetResponse
);
export var SubscribeToEvent = op(
  n0,
  _STE,
  0,
  () => SubscribeToEventRequest,
  () => Unit
);
