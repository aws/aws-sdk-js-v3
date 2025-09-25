// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dAH, _DE, _DER, _DERe, _eI, _eTN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventRequest = struct(n0, _DER, 0, [_eI, _eTN, _dAH], [0, 0, 2]);
export var DeleteEventResult = struct(n0, _DERe, 0, [], []);
export var DeleteEvent = op(
  n0,
  _DE,
  0,
  () => DeleteEventRequest,
  () => DeleteEventResult
);
