// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aL, _eI, _eTN, _lT, _UEL, _UELR, _UELRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateEventLabelRequest = struct(n0, _UELR, 0, [_eI, _eTN, _aL, _lT], [0, 0, 0, 0]);
export var UpdateEventLabelResult = struct(n0, _UELRp, 0, [], []);
export var UpdateEventLabel = op(
  n0,
  _UEL,
  0,
  () => UpdateEventLabelRequest,
  () => UpdateEventLabelResult
);
