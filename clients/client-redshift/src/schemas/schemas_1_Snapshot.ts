// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACC,
  _ACL,
  _ACs,
  _CATS,
  _CIl,
  _DSSe,
  _DSSMe,
  _DSSOM,
  _M,
  _MR,
  _NI,
  _SAS,
  _SD,
  _SDc,
  _SDch,
  _SDL,
  _SIc,
  _SSL,
  _SSn,
  _SSna,
  _SSTL,
  _STna,
  _T,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  TagList,
} from "./schemas_0";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var ClusterAssociatedToSchedule = struct(n0, _CATS, 0, [_CIl, _SAS], [0, 0]);
export var DescribeSnapshotSchedulesMessage = struct(
  n0,
  _DSSMe,
  0,
  [_CIl, _SIc, _TK, _TV, _M, _MR],
  [0, 0, [() => TagKeyList, 0], [() => TagValueList, 0], 0, 1]
);
export var DescribeSnapshotSchedulesOutputMessage = struct(
  n0,
  _DSSOM,
  0,
  [_SSn, _M],
  [[() => SnapshotScheduleList, 0], 0]
);
export var SnapshotSchedule = struct(
  n0,
  _SSna,
  0,
  [_SD, _SIc, _SDc, _T, _NI, _ACC, _ACs],
  [
    [() => ScheduleDefinitionList, 0],
    0,
    0,
    [() => TagList, 0],
    [() => ScheduledSnapshotTimeList, 0],
    1,
    [() => AssociatedClusterList, 0],
  ]
);
export var AssociatedClusterList = list(n0, _ACL, 0, [
  () => ClusterAssociatedToSchedule,
  {
    [_xN]: _CATS,
  },
]);
export var ScheduleDefinitionList = list(n0, _SDL, 0, [
  0,
  {
    [_xN]: _SDch,
  },
]);
export var ScheduledSnapshotTimeList = list(n0, _SSTL, 0, [
  4,
  {
    [_xN]: _STna,
  },
]);
export var SnapshotScheduleList = list(n0, _SSL, 0, [
  () => SnapshotSchedule,
  {
    [_xN]: _SSna,
  },
]);
export var DescribeSnapshotSchedules = op(
  n0,
  _DSSe,
  0,
  () => DescribeSnapshotSchedulesMessage,
  () => DescribeSnapshotSchedulesOutputMessage
);
