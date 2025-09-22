// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cIl, _cNGIo, _cT, _DC, _DCNG, _DCNGR, _DCNGRe, _DCR, _DCRe, _DQ, _DQR, _DQRe, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClusterRequest = struct(n0, _DCR, 0, [_cIl, _cT], [0, [0, 4]]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteComputeNodeGroupRequest = struct(n0, _DCNGR, 0, [_cIl, _cNGIo, _cT], [0, 0, [0, 4]]);
export var DeleteComputeNodeGroupResponse = struct(n0, _DCNGRe, 0, [], []);
export var DeleteQueueRequest = struct(n0, _DQR, 0, [_cIl, _qI, _cT], [0, 0, [0, 4]]);
export var DeleteQueueResponse = struct(n0, _DQRe, 0, [], []);
export var DeleteCluster = op(
  n0,
  _DC,
  2,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DeleteComputeNodeGroup = op(
  n0,
  _DCNG,
  2,
  () => DeleteComputeNodeGroupRequest,
  () => DeleteComputeNodeGroupResponse
);
export var DeleteQueue = op(
  n0,
  _DQ,
  2,
  () => DeleteQueueRequest,
  () => DeleteQueueResponse
);
