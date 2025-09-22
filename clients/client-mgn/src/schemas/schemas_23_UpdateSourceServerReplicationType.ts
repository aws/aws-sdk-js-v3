// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _rTep, _sSIDo, _USSRT, _USSRTR, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var UpdateSourceServerReplicationTypeRequest = struct(n0, _USSRTR, 0, [_sSIDo, _rTep, _aIDc], [0, 0, 0]);
export var UpdateSourceServerReplicationType = op(
  n0,
  _USSRT,
  {
    [_ht]: ["POST", "/UpdateSourceServerReplicationType", 200],
  },
  () => UpdateSourceServerReplicationTypeRequest,
  () => SourceServer
);
