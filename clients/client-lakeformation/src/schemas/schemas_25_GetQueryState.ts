// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _en, _Er, _GQS, _GQSR, _GQSRe, _h, _QI, _Sta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueryStateRequest = struct(n0, _GQSR, 0, [_QI], [0]);
export var GetQueryStateResponse = struct(n0, _GQSRe, 0, [_Er, _Sta], [0, 0]);
export var GetQueryState = op(
  n0,
  _GQS,
  {
    [_h]: ["POST", "/GetQueryState", 200],
    [_en]: ["query-"],
  },
  () => GetQueryStateRequest,
  () => GetQueryStateResponse
);
