// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DWS, _DWSR, _DWSRe, _RSe, _RSes, _SLn, _Sn, _STn, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeWorkspaceSnapshotsRequest = struct(n0, _DWSR, 0, [_WI], [0]);
export var DescribeWorkspaceSnapshotsResult = struct(
  n0,
  _DWSRe,
  0,
  [_RSe, _RSes],
  [() => SnapshotList, () => SnapshotList]
);
export var Snapshot = struct(n0, _Sn, 0, [_STn], [4]);
export var SnapshotList = list(n0, _SLn, 0, () => Snapshot);
export var DescribeWorkspaceSnapshots = op(
  n0,
  _DWS,
  0,
  () => DescribeWorkspaceSnapshotsRequest,
  () => DescribeWorkspaceSnapshotsResult
);
