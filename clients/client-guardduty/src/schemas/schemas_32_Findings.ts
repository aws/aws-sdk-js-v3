// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSF, _CSFR, _CSFRr, _DI, _dI, _FT, _fT, _hL, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSampleFindingsRequest = struct(
  n0,
  _CSFR,
  0,
  [_DI, _FT],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fT,
      },
    ],
  ]
);
export var CreateSampleFindingsResponse = struct(n0, _CSFRr, 0, [], []);
export var FindingTypes = 64 | 0;

export var CreateSampleFindings = op(
  n0,
  _CSF,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings/create", 200],
  },
  () => CreateSampleFindingsRequest,
  () => CreateSampleFindingsResponse
);
