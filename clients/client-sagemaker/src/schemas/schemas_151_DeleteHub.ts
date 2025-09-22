// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DHe, _DHR, _HN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHubRequest = struct(n0, _DHR, 0, [_HN], [0]);
export var DeleteHub = op(
  n0,
  _DHe,
  0,
  () => DeleteHubRequest,
  () => Unit
);
