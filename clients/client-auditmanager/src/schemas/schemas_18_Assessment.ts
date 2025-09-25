// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAFS, _DAFSR, _DAFSRe, _h, _hQ, _rI, _rTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssessmentFrameworkShareRequest = struct(
  n0,
  _DAFSR,
  0,
  [_rI, _rTe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rTe,
      },
    ],
  ]
);
export var DeleteAssessmentFrameworkShareResponse = struct(n0, _DAFSRe, 0, [], []);
export var DeleteAssessmentFrameworkShare = op(
  n0,
  _DAFS,
  {
    [_h]: ["DELETE", "/assessmentFrameworkShareRequests/{requestId}", 200],
  },
  () => DeleteAssessmentFrameworkShareRequest,
  () => DeleteAssessmentFrameworkShareResponse
);
