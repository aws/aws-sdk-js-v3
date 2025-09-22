// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bT, _GFRC, _GFRCR, _GFRCRe, _ht, _n, _rIID, _uPIP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFailbackReplicationConfigurationRequest = struct(n0, _GFRCR, 0, [_rIID], [0]);
export var GetFailbackReplicationConfigurationResponse = struct(n0, _GFRCRe, 0, [_rIID, _n, _bT, _uPIP], [0, 0, 1, 2]);
export var GetFailbackReplicationConfiguration = op(
  n0,
  _GFRC,
  {
    [_ht]: ["POST", "/GetFailbackReplicationConfiguration", 200],
  },
  () => GetFailbackReplicationConfigurationRequest,
  () => GetFailbackReplicationConfigurationResponse
);
