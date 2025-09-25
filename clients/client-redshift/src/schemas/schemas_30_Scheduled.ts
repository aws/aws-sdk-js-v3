// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CIl, _PC, _PCM, _PCR, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PauseClusterMessage = struct(n0, _PCM, 0, [_CIl], [0]);
export var PauseClusterResult = struct(n0, _PCR, 0, [_C], [[() => Cluster, 0]]);
export var PauseCluster = op(
  n0,
  _PC,
  0,
  () => PauseClusterMessage,
  () => PauseClusterResult
);
