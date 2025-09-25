// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DEI, _EA, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Phone";

/* eslint no-var: 0 */

export var DeleteEndpointInput = struct(n0, _DEI, 0, [_EA], [0]);
export var DeleteEndpoint = op(
  n0,
  _DE,
  0,
  () => DeleteEndpointInput,
  () => Unit
);
