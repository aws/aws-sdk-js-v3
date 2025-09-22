// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _d, _GTRT, _GTRTR, _GTRTRe, _h, _p, _r, _rT, _TRT, _tRT, _TRTP, _TRTPM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTargetResourceTypeRequest = struct(n0, _GTRTR, 0, [_rT], [[0, 1]]);
export var GetTargetResourceTypeResponse = struct(n0, _GTRTRe, 0, [_tRT], [() => TargetResourceType]);
export var TargetResourceType = struct(n0, _TRT, 0, [_rT, _d, _p], [0, 0, () => TargetResourceTypeParameterMap]);
export var TargetResourceTypeParameter = struct(n0, _TRTP, 0, [_d, _r], [0, 2]);
export var TargetResourceTypeParameterMap = map(n0, _TRTPM, 0, 0, () => TargetResourceTypeParameter);
export var GetTargetResourceType = op(
  n0,
  _GTRT,
  {
    [_h]: ["GET", "/targetResourceTypes/{resourceType}", 200],
  },
  () => GetTargetResourceTypeRequest,
  () => GetTargetResourceTypeResponse
);
