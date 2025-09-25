// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aRA, _SARRto, _SARt, _sAt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopAssessmentRunRequest = struct(n0, _SARRto, 0, [_aRA, _sAt], [0, 0]);
export var StopAssessmentRun = op(
  n0,
  _SARt,
  0,
  () => StopAssessmentRunRequest,
  () => Unit
);
