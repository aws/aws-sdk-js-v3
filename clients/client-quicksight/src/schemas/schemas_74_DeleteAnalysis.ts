// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AIn,
  _Ar,
  _DAe,
  _DAR,
  _DARe,
  _DTe,
  _FDWR,
  _fdwr,
  _h,
  _hQ,
  _RI,
  _RWID,
  _rwid,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAnalysisRequest = struct(
  n0,
  _DAR,
  0,
  [_AAI, _AIn, _RWID, _FDWR],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _rwid,
      },
    ],
    [
      2,
      {
        [_hQ]: _fdwr,
      },
    ],
  ]
);
export var DeleteAnalysisResponse = struct(n0, _DARe, 0, [_St, _Ar, _AIn, _DTe, _RI], [[1, 32], 0, 0, 4, 0]);
export var DeleteAnalysis = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/analyses/{AnalysisId}", 200],
  },
  () => DeleteAnalysisRequest,
  () => DeleteAnalysisResponse
);
