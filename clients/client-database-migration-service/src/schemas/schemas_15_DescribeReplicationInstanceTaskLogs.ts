// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DRITL, _DRITLM, _DRITLR, _Ma, _MR, _RIA, _RITL, _RITLe, _RITLL, _RITLS, _RTA, _RTN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReplicationInstanceTaskLogsMessage = struct(n0, _DRITLM, 0, [_RIA, _MR, _Ma], [0, 1, 0]);
export var DescribeReplicationInstanceTaskLogsResponse = struct(
  n0,
  _DRITLR,
  0,
  [_RIA, _RITL, _Ma],
  [0, () => ReplicationInstanceTaskLogsList, 0]
);
export var ReplicationInstanceTaskLog = struct(n0, _RITLe, 0, [_RTN, _RTA, _RITLS], [0, 0, 1]);
export var ReplicationInstanceTaskLogsList = list(n0, _RITLL, 0, () => ReplicationInstanceTaskLog);
export var DescribeReplicationInstanceTaskLogs = op(
  n0,
  _DRITL,
  0,
  () => DescribeReplicationInstanceTaskLogsMessage,
  () => DescribeReplicationInstanceTaskLogsResponse
);
