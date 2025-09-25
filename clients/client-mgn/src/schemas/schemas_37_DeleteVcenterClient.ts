// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVC, _DVCR, _ht, _vCID, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVcenterClientRequest = struct(n0, _DVCR, 0, [_vCID], [0]);
export var DeleteVcenterClient = op(
  n0,
  _DVC,
  {
    [_ht]: ["POST", "/DeleteVcenterClient", 204],
  },
  () => DeleteVcenterClientRequest,
  () => Unit
);
