// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aDSG,
  _aIDc,
  _bT,
  _cPIP,
  _dLSDT,
  _dN,
  _dPR,
  _DRCTe,
  _DRCTRes,
  _DRCTResc,
  _eE,
  _eEKA,
  _GRC,
  _GRCR,
  _ht,
  _i,
  _iBD,
  _io,
  _mR,
  _n,
  _nT,
  _RC,
  _RCRD,
  _RCRDe,
  _RCT,
  _RCTe,
  _rCTID,
  _rCTIDe,
  _rD,
  _rSIT,
  _rSSGID,
  _sASI,
  _sAT,
  _sDTt,
  _sSIDo,
  _t,
  _th,
  _uDRS,
  _uFE,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReplicationConfigurationTemplatesRequest = struct(
  n0,
  _DRCTRes,
  0,
  [_rCTIDe, _mR, _nT],
  [64 | 0, 1, 0]
);
export var DescribeReplicationConfigurationTemplatesResponse = struct(
  n0,
  _DRCTResc,
  0,
  [_i, _nT],
  [[() => ReplicationConfigurationTemplates, 0], 0]
);
export var GetReplicationConfigurationRequest = struct(n0, _GRCR, 0, [_sSIDo, _aIDc], [0, 0]);
export var ReplicationConfiguration = struct(
  n0,
  _RC,
  0,
  [_sSIDo, _n, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _rD, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _uFE],
  [0, 0, 0, 2, 64 | 0, 0, 2, 0, () => ReplicationConfigurationReplicatedDisks, 0, 0, 1, 0, 2, [() => TagsMap, 0], 2]
);
export var ReplicationConfigurationReplicatedDisk = struct(n0, _RCRD, 0, [_dN, _iBD, _sDTt, _io, _th], [0, 2, 0, 1, 1]);
export var ReplicationConfigurationTemplate = struct(
  n0,
  _RCT,
  0,
  [_rCTID, _a, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _uFE, _t],
  [0, 0, 0, 2, 64 | 0, 0, 2, 0, 0, 0, 1, 0, 2, [() => TagsMap, 0], 2, [() => TagsMap, 0]]
);
export var ReplicationConfigurationReplicatedDisks = list(n0, _RCRDe, 0, () => ReplicationConfigurationReplicatedDisk);
export var ReplicationConfigurationTemplateIDs = 64 | 0;

export var ReplicationConfigurationTemplates = list(n0, _RCTe, 0, [() => ReplicationConfigurationTemplate, 0]);
export var ReplicationServersSecurityGroupsIDs = 64 | 0;

export var DescribeReplicationConfigurationTemplates = op(
  n0,
  _DRCTe,
  {
    [_ht]: ["POST", "/DescribeReplicationConfigurationTemplates", 200],
  },
  () => DescribeReplicationConfigurationTemplatesRequest,
  () => DescribeReplicationConfigurationTemplatesResponse
);
export var GetReplicationConfiguration = op(
  n0,
  _GRC,
  {
    [_ht]: ["POST", "/GetReplicationConfiguration", 200],
  },
  () => GetReplicationConfigurationRequest,
  () => ReplicationConfiguration
);
