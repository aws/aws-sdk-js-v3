// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBC, _DBCI, _RDBC, _RDBCM, _RDBCR, n0 } from "./schemas_0";
import { DBCluster } from "./schemas_18_Cluster";

/* eslint no-var: 0 */

export var RebootDBClusterMessage = struct(n0, _RDBCM, 0, [_DBCI], [0]);
export var RebootDBClusterResult = struct(n0, _RDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var RebootDBCluster = op(
  n0,
  _RDBC,
  0,
  () => RebootDBClusterMessage,
  () => RebootDBClusterResult
);
