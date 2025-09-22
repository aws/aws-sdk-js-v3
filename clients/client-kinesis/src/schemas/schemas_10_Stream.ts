// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSI, _ECD, _SARN, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStreamInput = struct(n0, _DSI, 0, [_SN, _ECD, _SARN], [0, 2, 0]);
export var DeleteStream = op(
  n0,
  _DS,
  0,
  () => DeleteStreamInput,
  () => Unit
);
