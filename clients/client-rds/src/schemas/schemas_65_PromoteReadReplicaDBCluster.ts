// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBC, _DBCI, _PRRDBC, _PRRDBCM, _PRRDBCR, n0 } from "./schemas_0";
import { DBCluster } from "./schemas_18_Cluster";

/* eslint no-var: 0 */

export var PromoteReadReplicaDBClusterMessage = struct(n0, _PRRDBCM, 0, [_DBCI], [0]);
export var PromoteReadReplicaDBClusterResult = struct(n0, _PRRDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var PromoteReadReplicaDBCluster = op(
  n0,
  _PRRDBC,
  0,
  () => PromoteReadReplicaDBClusterMessage,
  () => PromoteReadReplicaDBClusterResult
);
