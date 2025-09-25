// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _cA, _ht, _sSIDo, _USS, _USSR, n0 } from "./schemas_0";
import { SourceServer, SourceServerConnectorAction } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var UpdateSourceServerRequest = struct(
  n0,
  _USSR,
  0,
  [_aIDc, _sSIDo, _cA],
  [0, 0, () => SourceServerConnectorAction]
);
export var UpdateSourceServer = op(
  n0,
  _USS,
  {
    [_ht]: ["POST", "/UpdateSourceServer", 200],
  },
  () => UpdateSourceServerRequest,
  () => SourceServer
);
