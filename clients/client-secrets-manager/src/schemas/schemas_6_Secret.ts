// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ARN, _KKI, _LAD, _R, _RRFR, _RRFRR, _RRFRRe, _RRR, _RS, _RSLT, _RST, _S, _SI, _SM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveRegionsFromReplicationRequest = struct(n0, _RRFRR, 0, [_SI, _RRR], [0, 64 | 0]);
export var RemoveRegionsFromReplicationResponse = struct(
  n0,
  _RRFRRe,
  0,
  [_ARN, _RS],
  [0, () => ReplicationStatusListType]
);
export var ReplicationStatusType = struct(n0, _RST, 0, [_R, _KKI, _S, _SM, _LAD], [0, 0, 0, 0, 4]);
export var RemoveReplicaRegionListType = 64 | 0;

export var ReplicationStatusListType = list(n0, _RSLT, 0, () => ReplicationStatusType);
export var RemoveRegionsFromReplication = op(
  n0,
  _RRFR,
  0,
  () => RemoveRegionsFromReplicationRequest,
  () => RemoveRegionsFromReplicationResponse
);
