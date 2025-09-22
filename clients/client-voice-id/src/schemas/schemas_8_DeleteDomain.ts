// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDR, 0, [_DI], [0]);
export var DeleteDomain = op(
  n0,
  _DD,
  2,
  () => DeleteDomainRequest,
  () => Unit
);
