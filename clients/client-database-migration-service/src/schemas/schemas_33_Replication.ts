// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _CC,
  _DNS,
  _DRC,
  _DRCe,
  _DRCM,
  _DRCMe,
  _DRCR,
  _DRCRe,
  _F,
  _KKI,
  _Ma,
  _MAZ,
  _MCU,
  _MCUi,
  _MR,
  _PMW,
  _RC,
  _RCA,
  _RCCT,
  _RCe,
  _RCI,
  _RCL,
  _RCUT,
  _RSep,
  _RSGI,
  _RT,
  _SEA,
  _SSu,
  _TEA,
  _TM,
  _VSGI,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComputeConfig = struct(
  n0,
  _CC,
  0,
  [_AZ, _DNS, _KKI, _MCU, _MCUi, _MAZ, _PMW, _RSGI, _VSGI],
  [0, 0, 0, 1, 1, 2, 0, 0, 64 | 0]
);
export var DeleteReplicationConfigMessage = struct(n0, _DRCM, 0, [_RCA], [0]);
export var DeleteReplicationConfigResponse = struct(n0, _DRCR, 0, [_RC], [() => ReplicationConfig]);
export var DescribeReplicationConfigsMessage = struct(n0, _DRCMe, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeReplicationConfigsResponse = struct(
  n0,
  _DRCRe,
  0,
  [_Ma, _RCe],
  [0, [() => ReplicationConfigList, 0]]
);
export var ReplicationConfig = struct(
  n0,
  _RC,
  0,
  [_RCI, _RCA, _SEA, _TEA, _RT, _CC, _RSep, _SSu, _TM, _RCCT, _RCUT],
  [0, 0, 0, 0, 0, () => ComputeConfig, 0, 0, 0, 4, 4]
);
export var ReplicationConfigList = list(n0, _RCL, 0, [
  () => ReplicationConfig,
  {
    [_xN]: _RC,
  },
]);
export var DeleteReplicationConfig = op(
  n0,
  _DRC,
  0,
  () => DeleteReplicationConfigMessage,
  () => DeleteReplicationConfigResponse
);
export var DescribeReplicationConfigs = op(
  n0,
  _DRCe,
  0,
  () => DescribeReplicationConfigsMessage,
  () => DescribeReplicationConfigsResponse
);
