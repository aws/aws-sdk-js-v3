// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _AIn, _Ar, _h, _hQ, _RAest, _RAR, _RARe, _RFFA, _RI, _RTF, _rtf, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RestoreAnalysisRequest = struct(
  n0,
  _RAR,
  0,
  [_AAI, _AIn, _RTF],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _rtf,
      },
    ],
  ]
);
export var RestoreAnalysisResponse = struct(n0, _RARe, 0, [_St, _Ar, _AIn, _RI, _RFFA], [[1, 32], 0, 0, 0, 64 | 0]);
export var FolderArnList = 64 | 0;

export var RestoreAnalysis = op(
  n0,
  _RAest,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/restore/analyses/{AnalysisId}", 200],
  },
  () => RestoreAnalysisRequest,
  () => RestoreAnalysisResponse
);
