// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMF, _DMFR, _DSF, _DSFR, _fN, _lGN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMetricFilterRequest = struct(n0, _DMFR, 0, [_lGN, _fN], [0, 0]);
export var DeleteSubscriptionFilterRequest = struct(n0, _DSFR, 0, [_lGN, _fN], [0, 0]);
export var DeleteMetricFilter = op(
  n0,
  _DMF,
  0,
  () => DeleteMetricFilterRequest,
  () => Unit
);
export var DeleteSubscriptionFilter = op(
  n0,
  _DSF,
  0,
  () => DeleteSubscriptionFilterRequest,
  () => Unit
);
