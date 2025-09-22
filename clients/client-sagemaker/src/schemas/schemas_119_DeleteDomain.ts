// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDe, _DDR, _DI, _HEFS, _RPe, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDR, 0, [_DI, _RPe], [0, () => RetentionPolicy]);
export var RetentionPolicy = struct(n0, _RPe, 0, [_HEFS], [0]);
export var DeleteDomain = op(
  n0,
  _DDe,
  0,
  () => DeleteDomainRequest,
  () => Unit
);
