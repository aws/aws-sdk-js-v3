// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jI, _jN, _jS, _UCJ, _UCJR, _UCJRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateClassificationJobRequest = struct(
  n0,
  _UCJR,
  0,
  [_jI, _jS],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _jS,
      },
    ],
  ]
);
export var UpdateClassificationJobResponse = struct(n0, _UCJRp, 0, [], []);
export var UpdateClassificationJob = op(
  n0,
  _UCJ,
  {
    [_h]: ["PATCH", "/jobs/{jobId}", 200],
  },
  () => UpdateClassificationJobRequest,
  () => UpdateClassificationJobResponse
);
