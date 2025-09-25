// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cI,
  _CV,
  _CVL,
  _h,
  _hH,
  _iI,
  _ii,
  _mT,
  _sA,
  _sI,
  _sIu,
  _SM,
  _sM,
  _UQAS,
  _UQASI,
  _UQASO,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CardValue = struct(n0, _CV, 0, [_cI, _v, _sM], [0, 0, () => SubmissionMutation]);
export var SubmissionMutation = struct(n0, _SM, 0, [_sIu, _mT], [0, 0]);
export var UpdateQAppSessionInput = struct(
  n0,
  _UQASI,
  0,
  [_iI, _sI, _va],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
    () => CardValueList,
  ]
);
export var UpdateQAppSessionOutput = struct(n0, _UQASO, 0, [_sI, _sA], [0, 0]);
export var CardValueList = list(n0, _CVL, 0, () => CardValue);
export var UpdateQAppSession = op(
  n0,
  _UQAS,
  {
    [_h]: ["POST", "/runtime.updateQAppSession", 200],
  },
  () => UpdateQAppSessionInput,
  () => UpdateQAppSessionOutput
);
