// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidSubnet as __InvalidSubnet,
  ReplicationSubnetGroupDoesNotCoverEnoughAZs as __ReplicationSubnetGroupDoesNotCoverEnoughAZs,
} from "../models/index";
import {
  _c,
  _CC,
  _CRC,
  _CRCM,
  _CRCR,
  _e,
  _IS,
  _m,
  _MRCM,
  _MRCo,
  _MRCR,
  _RC,
  _RCA,
  _RCI,
  _RI,
  _RSep,
  _RSGDNCEAZ,
  _RT,
  _SEA,
  _SSu,
  _T,
  _TEA,
  _TM,
  n0,
  TagList,
} from "./schemas_0";
import { ComputeConfig, ReplicationConfig } from "./schemas_33_Replication";

/* eslint no-var: 0 */

export var CreateReplicationConfigMessage = struct(
  n0,
  _CRCM,
  0,
  [_RCI, _SEA, _TEA, _CC, _RT, _TM, _RSep, _SSu, _RI, _T],
  [0, 0, 0, () => ComputeConfig, 0, 0, 0, 0, 0, [() => TagList, 0]]
);
export var CreateReplicationConfigResponse = struct(n0, _CRCR, 0, [_RC], [() => ReplicationConfig]);
export var InvalidSubnet = error(
  n0,
  _IS,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidSubnet
);
export var ModifyReplicationConfigMessage = struct(
  n0,
  _MRCM,
  0,
  [_RCA, _RCI, _RT, _TM, _RSep, _SSu, _CC, _SEA, _TEA],
  [0, 0, 0, 0, 0, 0, () => ComputeConfig, 0, 0]
);
export var ModifyReplicationConfigResponse = struct(n0, _MRCR, 0, [_RC], [() => ReplicationConfig]);
export var ReplicationSubnetGroupDoesNotCoverEnoughAZs = error(
  n0,
  _RSGDNCEAZ,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReplicationSubnetGroupDoesNotCoverEnoughAZs
);
export var CreateReplicationConfig = op(
  n0,
  _CRC,
  0,
  () => CreateReplicationConfigMessage,
  () => CreateReplicationConfigResponse
);
export var ModifyReplicationConfig = op(
  n0,
  _MRCo,
  0,
  () => ModifyReplicationConfigMessage,
  () => ModifyReplicationConfigResponse
);
