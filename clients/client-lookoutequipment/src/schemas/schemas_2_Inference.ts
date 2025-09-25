// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DIS,
  _DISR,
  _ISA,
  _ISN,
  _MA,
  _MN,
  _S,
  _SIS,
  _SISR,
  _SISRt,
  _SISRto,
  _SISRtop,
  _SISt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInferenceSchedulerRequest = struct(n0, _DISR, 0, [_ISN], [0]);
export var StartInferenceSchedulerRequest = struct(n0, _SISR, 0, [_ISN], [0]);
export var StartInferenceSchedulerResponse = struct(n0, _SISRt, 0, [_MA, _MN, _ISN, _ISA, _S], [0, 0, 0, 0, 0]);
export var StopInferenceSchedulerRequest = struct(n0, _SISRto, 0, [_ISN], [0]);
export var StopInferenceSchedulerResponse = struct(n0, _SISRtop, 0, [_MA, _MN, _ISN, _ISA, _S], [0, 0, 0, 0, 0]);
export var DeleteInferenceScheduler = op(
  n0,
  _DIS,
  0,
  () => DeleteInferenceSchedulerRequest,
  () => Unit
);
export var StartInferenceScheduler = op(
  n0,
  _SIS,
  0,
  () => StartInferenceSchedulerRequest,
  () => StartInferenceSchedulerResponse
);
export var StopInferenceScheduler = op(
  n0,
  _SISt,
  0,
  () => StopInferenceSchedulerRequest,
  () => StopInferenceSchedulerResponse
);
