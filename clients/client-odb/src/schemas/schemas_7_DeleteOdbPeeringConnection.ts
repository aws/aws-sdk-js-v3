// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DOPC, _DOPCI, _DOPCO, _oPCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOdbPeeringConnectionInput = struct(n0, _DOPCI, 0, [_oPCI], [[0, 1]]);
export var DeleteOdbPeeringConnectionOutput = struct(n0, _DOPCO, 0, [], []);
export var DeleteOdbPeeringConnection = op(
  n0,
  _DOPC,
  2,
  () => DeleteOdbPeeringConnectionInput,
  () => DeleteOdbPeeringConnectionOutput
);
