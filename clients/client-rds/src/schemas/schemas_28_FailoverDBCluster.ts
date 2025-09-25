// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBC, _DBCI, _FDBC, _FDBCM, _FDBCR, _TDBII, n0 } from "./schemas_0";
import { DBCluster } from "./schemas_18_Cluster";

/* eslint no-var: 0 */

export var FailoverDBClusterMessage = struct(n0, _FDBCM, 0, [_DBCI, _TDBII], [0, 0]);
export var FailoverDBClusterResult = struct(n0, _FDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var FailoverDBCluster = op(
  n0,
  _FDBC,
  0,
  () => FailoverDBClusterMessage,
  () => FailoverDBClusterResult
);
