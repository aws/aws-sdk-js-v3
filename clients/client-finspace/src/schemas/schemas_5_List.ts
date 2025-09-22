// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aZI,
  _aZIv,
  _cAA,
  _cDNSC,
  _cl,
  _cN,
  _cTr,
  _cTre,
  _cTrea,
  _d,
  _dN,
  _dS,
  _dSAI,
  _eA,
  _eI,
  _EL,
  _eM,
  _env,
  _h,
  _hQ,
  _hT,
  _iR,
  _KD,
  _kD,
  _KDLE,
  _KE,
  _KEL,
  _kKI,
  _KN,
  _KNS,
  _KSG,
  _KSGL,
  _KU,
  _KUL,
  _LE,
  _LER,
  _LERi,
  _LKCN,
  _LKCNR,
  _LKCNRi,
  _LKD,
  _LKDR,
  _LKDRi,
  _LKE,
  _LKER,
  _LKERi,
  _LKSG,
  _LKSGR,
  _LKSGRi,
  _LKU,
  _LKUR,
  _LKURi,
  _lMT,
  _lT,
  _mRa,
  _n,
  _nI,
  _no,
  _nTe,
  _s,
  _sG,
  _sGN,
  _sR,
  _tGC,
  _tS,
  _u,
  _uA,
  _uN,
  _uT,
  n0,
} from "./schemas_0";
import { CustomDNSConfiguration, Environment, TransitGatewayConfiguration } from "./schemas_4_Environment";

/* eslint no-var: 0 */

export var KxDatabaseListEntry = struct(n0, _KDLE, 0, [_dN, _cTr, _lMT], [0, 4, 4]);
export var KxEnvironment = struct(
  n0,
  _KE,
  0,
  [_n, _eI, _aAI, _s, _tS, _dS, _eM, _d, _eA, _kKI, _dSAI, _tGC, _cDNSC, _cTre, _uT, _aZIv, _cAA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => TransitGatewayConfiguration, () => CustomDNSConfiguration, 4, 4, 64 | 0, 0]
);
export var KxNode = struct(n0, _KN, 0, [_nI, _aZI, _lT, _s], [0, 0, 4, 0]);
export var KxScalingGroup = struct(
  n0,
  _KSG,
  0,
  [_sGN, _hT, _cl, _aZI, _s, _sR, _lMT, _cTr],
  [0, 0, 64 | 0, 0, 0, 0, 4, 4]
);
export var KxUser = struct(n0, _KU, 0, [_uA, _uN, _iR, _cTrea, _uT], [0, 0, 0, 4, 4]);
export var ListEnvironmentsRequest = struct(
  n0,
  _LER,
  0,
  [_nTe, _mRa],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListEnvironmentsResponse = struct(n0, _LERi, 0, [_env, _nTe], [() => EnvironmentList, 0]);
export var ListKxClusterNodesRequest = struct(
  n0,
  _LKCNR,
  0,
  [_eI, _cN, _nTe, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListKxClusterNodesResponse = struct(n0, _LKCNRi, 0, [_no, _nTe], [() => KxNodeSummaries, 0]);
export var ListKxDatabasesRequest = struct(
  n0,
  _LKDR,
  0,
  [_eI, _nTe, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListKxDatabasesResponse = struct(n0, _LKDRi, 0, [_kD, _nTe], [() => KxDatabases, 0]);
export var ListKxEnvironmentsRequest = struct(
  n0,
  _LKER,
  0,
  [_nTe, _mRa],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListKxEnvironmentsResponse = struct(n0, _LKERi, 0, [_env, _nTe], [() => KxEnvironmentList, 0]);
export var ListKxScalingGroupsRequest = struct(
  n0,
  _LKSGR,
  0,
  [_eI, _mRa, _nTe],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
  ]
);
export var ListKxScalingGroupsResponse = struct(n0, _LKSGRi, 0, [_sG, _nTe], [() => KxScalingGroupList, 0]);
export var ListKxUsersRequest = struct(
  n0,
  _LKUR,
  0,
  [_eI, _nTe, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListKxUsersResponse = struct(n0, _LKURi, 0, [_u, _nTe], [() => KxUserList, 0]);
export var EnvironmentList = list(n0, _EL, 0, () => Environment);
export var KxDatabases = list(n0, _KD, 0, () => KxDatabaseListEntry);
export var KxEnvironmentList = list(n0, _KEL, 0, () => KxEnvironment);
export var KxNodeSummaries = list(n0, _KNS, 0, () => KxNode);
export var KxScalingGroupList = list(n0, _KSGL, 0, () => KxScalingGroup);
export var KxUserList = list(n0, _KUL, 0, () => KxUser);
export var ListEnvironments = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/environment", 200],
  },
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResponse
);
export var ListKxClusterNodes = op(
  n0,
  _LKCN,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/clusters/{clusterName}/nodes", 200],
  },
  () => ListKxClusterNodesRequest,
  () => ListKxClusterNodesResponse
);
export var ListKxDatabases = op(
  n0,
  _LKD,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/databases", 200],
  },
  () => ListKxDatabasesRequest,
  () => ListKxDatabasesResponse
);
export var ListKxEnvironments = op(
  n0,
  _LKE,
  {
    [_h]: ["GET", "/kx/environments", 200],
  },
  () => ListKxEnvironmentsRequest,
  () => ListKxEnvironmentsResponse
);
export var ListKxScalingGroups = op(
  n0,
  _LKSG,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/scalingGroups", 200],
  },
  () => ListKxScalingGroupsRequest,
  () => ListKxScalingGroupsResponse
);
export var ListKxUsers = op(
  n0,
  _LKU,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/users", 200],
  },
  () => ListKxUsersRequest,
  () => ListKxUsersResponse
);
