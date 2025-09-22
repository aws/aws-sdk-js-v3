// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CIl, _RCeb, _RCM, _RCR, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootClusterMessage = struct(n0, _RCM, 0, [_CIl], [0]);
export var RebootClusterResult = struct(n0, _RCR, 0, [_C], [[() => Cluster, 0]]);
export var RebootCluster = op(
  n0,
  _RCeb,
  0,
  () => RebootClusterMessage,
  () => RebootClusterResult
);
