// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _DFS, _DFSR, _ht, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var DisconnectFromServiceRequest = struct(n0, _DFSR, 0, [_sSIDo, _aIDc], [0, 0]);
export var DisconnectFromService = op(
  n0,
  _DFS,
  {
    [_ht]: ["POST", "/DisconnectFromService", 200],
  },
  () => DisconnectFromServiceRequest,
  () => SourceServer
);
