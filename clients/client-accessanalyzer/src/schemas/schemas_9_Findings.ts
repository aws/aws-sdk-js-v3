// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _cTl, _h, _id, _rA, _s, _UF, _UFR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFindingsRequest = struct(n0, _UFR, 0, [_aA, _s, _id, _rA, _cTl], [0, 0, 64 | 0, 0, [0, 4]]);
export var FindingIdList = 64 | 0;

export var UpdateFindings = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/finding", 200],
  },
  () => UpdateFindingsRequest,
  () => Unit
);
