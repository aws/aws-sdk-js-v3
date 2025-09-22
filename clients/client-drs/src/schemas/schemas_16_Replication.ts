// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rDSSA, _rIID, _RR, _RRR, _RRRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ReverseReplicationRequest = struct(n0, _RRR, 0, [_rIID], [0]);
export var ReverseReplicationResponse = struct(n0, _RRRe, 0, [_rDSSA], [0]);
export var ReverseReplication = op(
  n0,
  _RR,
  {
    [_ht]: ["POST", "/ReverseReplication", 200],
  },
  () => ReverseReplicationRequest,
  () => ReverseReplicationResponse
);
