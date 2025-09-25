// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _GQS, _GQSR, _GQSRe, _GT, _IV, _L, _LV, _QTI, _Qu, _S, _Su, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetQualificationScoreRequest = struct(n0, _GQSR, 0, [_QTI, _WI], [0, 0]);
export var GetQualificationScoreResponse = struct(n0, _GQSRe, 0, [_Qu], [() => Qualification]);
export var Locale = struct(n0, _L, 0, [_C, _Su], [0, 0]);
export var Qualification = struct(n0, _Qu, 0, [_QTI, _WI, _GT, _IV, _LV, _S], [0, 0, 4, 1, () => Locale, 0]);
export var GetQualificationScore = op(
  n0,
  _GQS,
  2,
  () => GetQualificationScoreRequest,
  () => GetQualificationScoreResponse
);
