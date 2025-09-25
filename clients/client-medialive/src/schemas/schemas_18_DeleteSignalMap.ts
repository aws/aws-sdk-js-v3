// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSM, _DSMR, _ht, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSignalMapRequest = struct(n0, _DSMR, 0, [_Id], [[0, 1]]);
export var DeleteSignalMap = op(
  n0,
  _DSM,
  {
    [_ht]: ["DELETE", "/prod/signal-maps/{Identifier}", 204],
  },
  () => DeleteSignalMapRequest,
  () => Unit
);
