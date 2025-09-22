// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ev, _rAes, _tA, _UFEn, _UFER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UnsubscribeFromEventRequest = struct(n0, _UFER, 0, [_rAes, _ev, _tA], [0, 0, 0]);
export var UnsubscribeFromEvent = op(
  n0,
  _UFEn,
  0,
  () => UnsubscribeFromEventRequest,
  () => Unit
);
