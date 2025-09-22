// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSF, _CSFR, _CSFRr, _fT, _h, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSampleFindingsRequest = struct(
  n0,
  _CSFR,
  0,
  [_fT],
  [
    [
      64 | 0,
      {
        [_jN]: _fT,
      },
    ],
  ]
);
export var CreateSampleFindingsResponse = struct(n0, _CSFRr, 0, [], []);
export var __listOfFindingType = 64 | 0;

export var CreateSampleFindings = op(
  n0,
  _CSF,
  {
    [_h]: ["POST", "/findings/sample", 200],
  },
  () => CreateSampleFindingsRequest,
  () => CreateSampleFindingsResponse
);
