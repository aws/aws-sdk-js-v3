// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _RR, _RRR, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var ResumeReplicationRequest = struct(n0, _RRR, 0, [_sSIDo, _aIDc], [0, 0]);
export var ResumeReplication = op(
  n0,
  _RR,
  {
    [_ht]: ["POST", "/ResumeReplication", 200],
  },
  () => ResumeReplicationRequest,
  () => SourceServer
);
