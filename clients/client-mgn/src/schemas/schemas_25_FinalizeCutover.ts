// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _FC, _FCR, _ht, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var FinalizeCutoverRequest = struct(n0, _FCR, 0, [_sSIDo, _aIDc], [0, 0]);
export var FinalizeCutover = op(
  n0,
  _FC,
  {
    [_ht]: ["POST", "/FinalizeCutover", 200],
  },
  () => FinalizeCutoverRequest,
  () => SourceServer
);
