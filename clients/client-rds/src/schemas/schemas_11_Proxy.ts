// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBProxyEndpointAlreadyExistsFault as __DBProxyEndpointAlreadyExistsFault,
  DBProxyEndpointQuotaExceededFault as __DBProxyEndpointQuotaExceededFault,
  DBProxyTargetAlreadyRegisteredFault as __DBProxyTargetAlreadyRegisteredFault,
  DBProxyTargetNotFoundFault as __DBProxyTargetNotFoundFault,
  InsufficientAvailableIPsInSubnetFault as __InsufficientAvailableIPsInSubnetFault,
  InvalidDBProxyStateFault as __InvalidDBProxyStateFault,
} from "../models/index";
import {
  _A,
  _aQE,
  _c,
  _CBT,
  _CDBPE,
  _CDBPER,
  _CDBPERr,
  _CDr,
  _CPC,
  _CPCI,
  _CPCo,
  _D,
  _DAS,
  _DBCIl,
  _DBIIn,
  _DBP,
  _DBPE,
  _DBPEAEF,
  _DBPEN,
  _DBPEQEF,
  _DBPN,
  _DBPT,
  _DBPTARF,
  _DBPTG,
  _DBPTNFF,
  _DBPTr,
  _DDBP,
  _DDBPR,
  _DDBPRe,
  _DDBPT,
  _DDBPTe,
  _DDBPTG,
  _DDBPTGR,
  _DDBPTGRe,
  _DDBPTR,
  _DDBPTRe,
  _DDBPTRes,
  _DDBPTResc,
  _DL,
  _e,
  _End,
  _ENT,
  _Fi,
  _hE,
  _IAIPISF,
  _ICT,
  _ID,
  _IDBPSF,
  _IQ,
  _m,
  _Ma,
  _MCP,
  _MDBP,
  _MDBPE,
  _MDBPER,
  _MDBPERo,
  _MDBPR,
  _MDBPRo,
  _MDBPTG,
  _MDBPTGR,
  _MDBPTGRo,
  _MICP,
  _MR,
  _NDBPEN,
  _NDBPN,
  _NN,
  _P,
  _RA,
  _RDBPT,
  _RDBPTR,
  _RDBPTRe,
  _Rea,
  _Ro,
  _RRId,
  _RTLS,
  _SG,
  _SPF,
  _St,
  _Sta,
  _T,
  _TA,
  _Tar,
  _TCI,
  _TG,
  _TGA,
  _TGL,
  _TGN,
  _TH,
  _TLa,
  _TR,
  _Ty,
  _UD,
  _VSGI,
  _VSI,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import { DBProxy, DBProxyEndpoint, UserAuthConfigList } from "./schemas_2_BProxy";

/* eslint no-var: 0 */

export var ConnectionPoolConfiguration = struct(n0, _CPC, 0, [_MCP, _MICP, _CBT, _SPF, _IQ], [1, 1, 1, 64 | 0, 0]);
export var ConnectionPoolConfigurationInfo = struct(n0, _CPCI, 0, [_MCP, _MICP, _CBT, _SPF, _IQ], [1, 1, 1, 64 | 0, 0]);
export var CreateDBProxyEndpointRequest = struct(
  n0,
  _CDBPER,
  0,
  [_DBPN, _DBPEN, _VSI, _VSGI, _TR, _T, _ENT],
  [0, 0, 64 | 0, 64 | 0, 0, [() => TagList, 0], 0]
);
export var CreateDBProxyEndpointResponse = struct(n0, _CDBPERr, 0, [_DBPE], [() => DBProxyEndpoint]);
export var DBProxyEndpointAlreadyExistsFault = error(
  n0,
  _DBPEAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBProxyEndpointAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBProxyEndpointAlreadyExistsFault
);
export var DBProxyEndpointQuotaExceededFault = error(
  n0,
  _DBPEQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBProxyEndpointQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __DBProxyEndpointQuotaExceededFault
);
export var DBProxyTarget = struct(
  n0,
  _DBPT,
  0,
  [_TA, _End, _TCI, _RRId, _P, _Ty, _Ro, _TH],
  [0, 0, 0, 0, 1, 0, 0, () => TargetHealth]
);
export var DBProxyTargetAlreadyRegisteredFault = error(
  n0,
  _DBPTARF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBProxyTargetAlreadyRegisteredFault`, 400],
  },
  [_m],
  [0],

  __DBProxyTargetAlreadyRegisteredFault
);
export var DBProxyTargetGroup = struct(
  n0,
  _DBPTG,
  0,
  [_DBPN, _TGN, _TGA, _ID, _St, _CPCo, _CDr, _UD],
  [0, 0, 0, 2, 0, () => ConnectionPoolConfigurationInfo, 4, 4]
);
export var DBProxyTargetNotFoundFault = error(
  n0,
  _DBPTNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBProxyTargetNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBProxyTargetNotFoundFault
);
export var DeleteDBProxyRequest = struct(n0, _DDBPR, 0, [_DBPN], [0]);
export var DeleteDBProxyResponse = struct(n0, _DDBPRe, 0, [_DBP], [() => DBProxy]);
export var DeregisterDBProxyTargetsRequest = struct(
  n0,
  _DDBPTR,
  0,
  [_DBPN, _TGN, _DBIIn, _DBCIl],
  [0, 0, 64 | 0, 64 | 0]
);
export var DeregisterDBProxyTargetsResponse = struct(n0, _DDBPTRe, 0, [], []);
export var DescribeDBProxyTargetGroupsRequest = struct(
  n0,
  _DDBPTGR,
  0,
  [_DBPN, _TGN, _Fi, _Ma, _MR],
  [0, 0, [() => FilterList, 0], 0, 1]
);
export var DescribeDBProxyTargetGroupsResponse = struct(n0, _DDBPTGRe, 0, [_TG, _Ma], [() => TargetGroupList, 0]);
export var DescribeDBProxyTargetsRequest = struct(
  n0,
  _DDBPTRes,
  0,
  [_DBPN, _TGN, _Fi, _Ma, _MR],
  [0, 0, [() => FilterList, 0], 0, 1]
);
export var DescribeDBProxyTargetsResponse = struct(n0, _DDBPTResc, 0, [_Tar, _Ma], [() => TargetList, 0]);
export var InsufficientAvailableIPsInSubnetFault = error(
  n0,
  _IAIPISF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientAvailableIPsInSubnetFault`, 400],
  },
  [_m],
  [0],

  __InsufficientAvailableIPsInSubnetFault
);
export var InvalidDBProxyStateFault = error(
  n0,
  _IDBPSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBProxyStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBProxyStateFault
);
export var ModifyDBProxyEndpointRequest = struct(n0, _MDBPER, 0, [_DBPEN, _NDBPEN, _VSGI], [0, 0, 64 | 0]);
export var ModifyDBProxyEndpointResponse = struct(n0, _MDBPERo, 0, [_DBPE], [() => DBProxyEndpoint]);
export var ModifyDBProxyRequest = struct(
  n0,
  _MDBPR,
  0,
  [_DBPN, _NDBPN, _DAS, _A, _RTLS, _ICT, _DL, _RA, _SG],
  [0, 0, 0, () => UserAuthConfigList, 2, 1, 2, 0, 64 | 0]
);
export var ModifyDBProxyResponse = struct(n0, _MDBPRo, 0, [_DBP], [() => DBProxy]);
export var ModifyDBProxyTargetGroupRequest = struct(
  n0,
  _MDBPTGR,
  0,
  [_TGN, _DBPN, _CPCo, _NN],
  [0, 0, () => ConnectionPoolConfiguration, 0]
);
export var ModifyDBProxyTargetGroupResponse = struct(n0, _MDBPTGRo, 0, [_DBPTG], [() => DBProxyTargetGroup]);
export var RegisterDBProxyTargetsRequest = struct(
  n0,
  _RDBPTR,
  0,
  [_DBPN, _TGN, _DBIIn, _DBCIl],
  [0, 0, 64 | 0, 64 | 0]
);
export var RegisterDBProxyTargetsResponse = struct(n0, _RDBPTRe, 0, [_DBPTr], [() => TargetList]);
export var TargetHealth = struct(n0, _TH, 0, [_Sta, _Rea, _D], [0, 0, 0]);
export var TargetGroupList = list(n0, _TGL, 0, () => DBProxyTargetGroup);
export var TargetList = list(n0, _TLa, 0, () => DBProxyTarget);
export var CreateDBProxyEndpoint = op(
  n0,
  _CDBPE,
  0,
  () => CreateDBProxyEndpointRequest,
  () => CreateDBProxyEndpointResponse
);
export var DeleteDBProxy = op(
  n0,
  _DDBP,
  0,
  () => DeleteDBProxyRequest,
  () => DeleteDBProxyResponse
);
export var DeregisterDBProxyTargets = op(
  n0,
  _DDBPT,
  0,
  () => DeregisterDBProxyTargetsRequest,
  () => DeregisterDBProxyTargetsResponse
);
export var DescribeDBProxyTargetGroups = op(
  n0,
  _DDBPTG,
  0,
  () => DescribeDBProxyTargetGroupsRequest,
  () => DescribeDBProxyTargetGroupsResponse
);
export var DescribeDBProxyTargets = op(
  n0,
  _DDBPTe,
  0,
  () => DescribeDBProxyTargetsRequest,
  () => DescribeDBProxyTargetsResponse
);
export var ModifyDBProxy = op(
  n0,
  _MDBP,
  0,
  () => ModifyDBProxyRequest,
  () => ModifyDBProxyResponse
);
export var ModifyDBProxyEndpoint = op(
  n0,
  _MDBPE,
  0,
  () => ModifyDBProxyEndpointRequest,
  () => ModifyDBProxyEndpointResponse
);
export var ModifyDBProxyTargetGroup = op(
  n0,
  _MDBPTG,
  0,
  () => ModifyDBProxyTargetGroupRequest,
  () => ModifyDBProxyTargetGroupResponse
);
export var RegisterDBProxyTargets = op(
  n0,
  _RDBPT,
  0,
  () => RegisterDBProxyTargetsRequest,
  () => RegisterDBProxyTargetsResponse
);
