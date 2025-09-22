// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDiscovererRequest = struct(n0, _DDR, 0, [_DI], [[0, 1]]);
export var DeleteDiscoverer = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/v1/discoverers/id/{DiscovererId}", 204],
  },
  () => DeleteDiscovererRequest,
  () => Unit
);
