// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPA, _DPAR, _h, _II, _N, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePredefinedAttributeRequest = struct(
  n0,
  _DPAR,
  0,
  [_II, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePredefinedAttribute = op(
  n0,
  _DPA,
  {
    [_h]: ["DELETE", "/predefined-attributes/{InstanceId}/{Name}", 200],
  },
  () => DeletePredefinedAttributeRequest,
  () => Unit
);
