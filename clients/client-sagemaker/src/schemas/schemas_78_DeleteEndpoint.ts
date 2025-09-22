// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DEI, _EN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEndpointInput = struct(n0, _DEI, 0, [_EN], [0]);
export var DeleteEndpoint = op(
  n0,
  _DE,
  0,
  () => DeleteEndpointInput,
  () => Unit
);
