// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _MAA, _MAAR, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var MarkAsArchivedRequest = struct(n0, _MAAR, 0, [_sSIDo, _aIDc], [0, 0]);
export var MarkAsArchived = op(
  n0,
  _MAA,
  {
    [_ht]: ["POST", "/MarkAsArchived", 200],
  },
  () => MarkAsArchivedRequest,
  () => SourceServer
);
