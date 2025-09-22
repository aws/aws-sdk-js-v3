// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRSG, _DRSGM, _DRSGR, _RSGIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReplicationSubnetGroupMessage = struct(n0, _DRSGM, 0, [_RSGIe], [0]);
export var DeleteReplicationSubnetGroupResponse = struct(n0, _DRSGR, 0, [], []);
export var DeleteReplicationSubnetGroup = op(
  n0,
  _DRSG,
  0,
  () => DeleteReplicationSubnetGroupMessage,
  () => DeleteReplicationSubnetGroupResponse
);
