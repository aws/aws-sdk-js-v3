// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARN, _SI, _SRTR, _SRTRR, _SRTRRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopReplicationToReplicaRequest = struct(n0, _SRTRR, 0, [_SI], [0]);
export var StopReplicationToReplicaResponse = struct(n0, _SRTRRt, 0, [_ARN], [0]);
export var StopReplicationToReplica = op(
  n0,
  _SRTR,
  0,
  () => StopReplicationToReplicaRequest,
  () => StopReplicationToReplicaResponse
);
