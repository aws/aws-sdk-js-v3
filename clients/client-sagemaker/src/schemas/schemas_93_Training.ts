// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTPR, _CTPr, _CTPRr, _SICPUS, _T, _TPA, _TPN, _TPOI, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTrainingPlanRequest = struct(n0, _CTPR, 0, [_TPN, _TPOI, _SICPUS, _T], [0, 0, 1, () => TagList]);
export var CreateTrainingPlanResponse = struct(n0, _CTPRr, 0, [_TPA], [0]);
export var CreateTrainingPlan = op(
  n0,
  _CTPr,
  0,
  () => CreateTrainingPlanRequest,
  () => CreateTrainingPlanResponse
);
