// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DRR, _h, _RN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRegistryRequest = struct(n0, _DRR, 0, [_RN], [[0, 1]]);
export var DeleteRegistry = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/v1/registries/name/{RegistryName}", 204],
  },
  () => DeleteRegistryRequest,
  () => Unit
);
