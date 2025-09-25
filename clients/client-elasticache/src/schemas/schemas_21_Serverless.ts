// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidCredentialsException as __InvalidCredentialsException,
  InvalidServerlessCacheStateFault as __InvalidServerlessCacheStateFault,
  ServerlessCacheNotFoundFault as __ServerlessCacheNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _ARN,
  _c,
  _CSCSr,
  _CSCSRr,
  _CSCSRre,
  _CTr,
  _CUL,
  _D,
  _DS,
  _DSC,
  _DSCe,
  _DSCR,
  _DSCRe,
  _DSCRes,
  _DSCResc,
  _DSCSe,
  _DSCSRes,
  _DSCSResc,
  _DST,
  _E,
  _e,
  _ECPUPS,
  _En,
  _FEV,
  _FSN,
  _hE,
  _ICE,
  _ISCSF,
  _KKI,
  _m,
  _Ma,
  _MEVa,
  _Mi,
  _MRa,
  _NTe,
  _RE,
  _SC,
  _SCe,
  _SCL,
  _SCN,
  _SCNFF,
  _SCS,
  _SCSe,
  _SCSL,
  _SCSN,
  _SGI,
  _SI,
  _SILu,
  _SIub,
  _SRL,
  _St,
  _STn,
  _T,
  _U,
  _UGIs,
  _xN,
  Endpoint,
  n0,
  TagList,
} from "./schemas_0";
import { ServerlessCacheSnapshot } from "./schemas_5_Serverless";
import { SecurityGroupIdsList } from "./schemas_12_Cache";

/* eslint no-var: 0 */

export var CacheUsageLimits = struct(n0, _CUL, 0, [_DS, _ECPUPS], [() => DataStorage, () => ECPUPerSecond]);
export var CreateServerlessCacheSnapshotRequest = struct(
  n0,
  _CSCSRr,
  0,
  [_SCSN, _SCN, _KKI, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CreateServerlessCacheSnapshotResponse = struct(n0, _CSCSRre, 0, [_SCS], [() => ServerlessCacheSnapshot]);
export var DataStorage = struct(n0, _DS, 0, [_Ma, _Mi, _U], [1, 1, 0]);
export var DeleteServerlessCacheRequest = struct(n0, _DSCR, 0, [_SCN, _FSN], [0, 0]);
export var DeleteServerlessCacheResponse = struct(n0, _DSCRe, 0, [_SC], [[() => ServerlessCache, 0]]);
export var DescribeServerlessCacheSnapshotsRequest = struct(
  n0,
  _DSCSRes,
  0,
  [_SCN, _SCSN, _STn, _NTe, _MRa],
  [0, 0, 0, 0, 1]
);
export var DescribeServerlessCacheSnapshotsResponse = struct(
  n0,
  _DSCSResc,
  0,
  [_NTe, _SCSe],
  [0, [() => ServerlessCacheSnapshotList, 0]]
);
export var DescribeServerlessCachesRequest = struct(n0, _DSCRes, 0, [_SCN, _MRa, _NTe], [0, 1, 0]);
export var DescribeServerlessCachesResponse = struct(
  n0,
  _DSCResc,
  0,
  [_NTe, _SCe],
  [0, [() => ServerlessCacheList, 0]]
);
export var ECPUPerSecond = struct(n0, _ECPUPS, 0, [_Ma, _Mi], [1, 1]);
export var InvalidCredentialsException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 408,
    [_aQE]: [`InvalidCredentialsException`, 408],
  },
  [_m],
  [0],

  __InvalidCredentialsException
);
export var InvalidServerlessCacheStateFault = error(
  n0,
  _ISCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidServerlessCacheStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidServerlessCacheStateFault
);
export var ServerlessCache = struct(
  n0,
  _SC,
  0,
  [_SCN, _D, _CTr, _St, _E, _MEVa, _FEV, _CUL, _KKI, _SGI, _En, _RE, _ARN, _UGIs, _SI, _SRL, _DST],
  [
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    () => CacheUsageLimits,
    0,
    [() => SecurityGroupIdsList, 0],
    () => Endpoint,
    () => Endpoint,
    0,
    0,
    [() => SubnetIdsList, 0],
    1,
    0,
  ]
);
export var ServerlessCacheNotFoundFault = error(
  n0,
  _SCNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ServerlessCacheNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ServerlessCacheNotFoundFault
);
export var ServerlessCacheList = list(n0, _SCL, 0, [() => ServerlessCache, 0]);
export var ServerlessCacheSnapshotList = list(n0, _SCSL, 0, [
  () => ServerlessCacheSnapshot,
  {
    [_xN]: _SCS,
  },
]);
export var SubnetIdsList = list(n0, _SILu, 0, [
  0,
  {
    [_xN]: _SIub,
  },
]);
export var CreateServerlessCacheSnapshot = op(
  n0,
  _CSCSr,
  0,
  () => CreateServerlessCacheSnapshotRequest,
  () => CreateServerlessCacheSnapshotResponse
);
export var DeleteServerlessCache = op(
  n0,
  _DSC,
  0,
  () => DeleteServerlessCacheRequest,
  () => DeleteServerlessCacheResponse
);
export var DescribeServerlessCaches = op(
  n0,
  _DSCe,
  0,
  () => DescribeServerlessCachesRequest,
  () => DescribeServerlessCachesResponse
);
export var DescribeServerlessCacheSnapshots = op(
  n0,
  _DSCSe,
  0,
  () => DescribeServerlessCacheSnapshotsRequest,
  () => DescribeServerlessCacheSnapshotsResponse
);
