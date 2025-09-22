// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CP, _CPI, _CPO, _CRT, _h, _PAr, _PD, _PN, _PQ, _PQU, _PQUr, _PV, _QI, _SCI, _Ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateProfileInput = struct(
  n0,
  _CPI,
  0,
  [_PN, _PD, _PQ, _CRT, _Ta],
  [0, 0, () => ProfileQuestionUpdates, [0, 4], 128 | 0]
);
export var CreateProfileOutput = struct(n0, _CPO, 0, [_PAr, _PV], [0, 0]);
export var ProfileQuestionUpdate = struct(n0, _PQU, 0, [_QI, _SCI], [0, 64 | 0]);
export var ProfileQuestionUpdates = list(n0, _PQUr, 0, () => ProfileQuestionUpdate);
export var SelectedProfileChoiceIds = 64 | 0;

export var CreateProfile = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/profiles", 200],
  },
  () => CreateProfileInput,
  () => CreateProfileOutput
);
