// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bT, _ht, _n, _rIID, _UFRC, _UFRCR, _uPIP, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFailbackReplicationConfigurationRequest = struct(n0, _UFRCR, 0, [_rIID, _n, _bT, _uPIP], [0, 0, 1, 2]);
export var UpdateFailbackReplicationConfiguration = op(
  n0,
  _UFRC,
  {
    [_ht]: ["POST", "/UpdateFailbackReplicationConfiguration", 200],
  },
  () => UpdateFailbackReplicationConfigurationRequest,
  () => Unit
);
