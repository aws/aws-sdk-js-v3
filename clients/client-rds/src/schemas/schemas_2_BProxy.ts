// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBProxyAlreadyExistsFault as __DBProxyAlreadyExistsFault,
  DBProxyEndpointNotFoundFault as __DBProxyEndpointNotFoundFault,
  DBProxyQuotaExceededFault as __DBProxyQuotaExceededFault,
  InvalidDBProxyEndpointStateFault as __InvalidDBProxyEndpointStateFault,
} from "../models/index";
import {
  _A,
  _aQE,
  _ASu,
  _c,
  _CDBP,
  _CDBPR,
  _CDBPRr,
  _CDr,
  _CPAT,
  _D,
  _DAS,
  _DBP,
  _DBPA,
  _DBPAEF,
  _DBPE,
  _DBPEA,
  _DBPEL,
  _DBPEN,
  _DBPENFF,
  _DBPEr,
  _DBPL,
  _DBPN,
  _DBPQEF,
  _DBPr,
  _DDBPE,
  _DDBPEe,
  _DDBPER,
  _DDBPERe,
  _DDBPERes,
  _DDBPEResc,
  _DDBPes,
  _DDBPRes,
  _DDBPResc,
  _DL,
  _e,
  _EF,
  _End,
  _ENT,
  _Fi,
  _hE,
  _IAMA,
  _ICT,
  _ID,
  _IDBPESF,
  _m,
  _Ma,
  _MR,
  _RA,
  _RTLS,
  _SAe,
  _St,
  _T,
  _TCNT,
  _TR,
  _UAC,
  _UACI,
  _UACIL,
  _UACL,
  _UD,
  _UN,
  _VI,
  _VSGI,
  _VSI,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDBProxyRequest = struct(
  n0,
  _CDBPR,
  0,
  [_DBPN, _EF, _DAS, _A, _RA, _VSI, _VSGI, _RTLS, _ICT, _DL, _T, _ENT, _TCNT],
  [0, 0, 0, () => UserAuthConfigList, 0, 64 | 0, 64 | 0, 2, 1, 2, [() => TagList, 0], 0, 0]
);
export var CreateDBProxyResponse = struct(n0, _CDBPRr, 0, [_DBP], [() => DBProxy]);
export var DBProxy = struct(
  n0,
  _DBP,
  0,
  [_DBPN, _DBPA, _St, _EF, _VI, _VSGI, _VSI, _DAS, _A, _RA, _End, _RTLS, _ICT, _DL, _CDr, _UD, _ENT, _TCNT],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0, () => UserAuthConfigInfoList, 0, 0, 2, 1, 2, 4, 4, 0, 0]
);
export var DBProxyAlreadyExistsFault = error(
  n0,
  _DBPAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBProxyAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBProxyAlreadyExistsFault
);
export var DBProxyEndpoint = struct(
  n0,
  _DBPE,
  0,
  [_DBPEN, _DBPEA, _DBPN, _St, _VI, _VSGI, _VSI, _End, _CDr, _TR, _ID, _ENT],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0, 4, 0, 2, 0]
);
export var DBProxyEndpointNotFoundFault = error(
  n0,
  _DBPENFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBProxyEndpointNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBProxyEndpointNotFoundFault
);
export var DBProxyQuotaExceededFault = error(
  n0,
  _DBPQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBProxyQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __DBProxyQuotaExceededFault
);
export var DeleteDBProxyEndpointRequest = struct(n0, _DDBPER, 0, [_DBPEN], [0]);
export var DeleteDBProxyEndpointResponse = struct(n0, _DDBPERe, 0, [_DBPE], [() => DBProxyEndpoint]);
export var DescribeDBProxiesRequest = struct(n0, _DDBPRes, 0, [_DBPN, _Fi, _Ma, _MR], [0, [() => FilterList, 0], 0, 1]);
export var DescribeDBProxiesResponse = struct(n0, _DDBPResc, 0, [_DBPr, _Ma], [() => DBProxyList, 0]);
export var DescribeDBProxyEndpointsRequest = struct(
  n0,
  _DDBPERes,
  0,
  [_DBPN, _DBPEN, _Fi, _Ma, _MR],
  [0, 0, [() => FilterList, 0], 0, 1]
);
export var DescribeDBProxyEndpointsResponse = struct(n0, _DDBPEResc, 0, [_DBPEr, _Ma], [() => DBProxyEndpointList, 0]);
export var InvalidDBProxyEndpointStateFault = error(
  n0,
  _IDBPESF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBProxyEndpointStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBProxyEndpointStateFault
);
export var UserAuthConfig = struct(n0, _UAC, 0, [_D, _UN, _ASu, _SAe, _IAMA, _CPAT], [0, 0, 0, 0, 0, 0]);
export var UserAuthConfigInfo = struct(n0, _UACI, 0, [_D, _UN, _ASu, _SAe, _IAMA, _CPAT], [0, 0, 0, 0, 0, 0]);
export var DBProxyEndpointList = list(n0, _DBPEL, 0, () => DBProxyEndpoint);
export var DBProxyList = list(n0, _DBPL, 0, () => DBProxy);
export var UserAuthConfigInfoList = list(n0, _UACIL, 0, () => UserAuthConfigInfo);
export var UserAuthConfigList = list(n0, _UACL, 0, () => UserAuthConfig);
export var CreateDBProxy = op(
  n0,
  _CDBP,
  0,
  () => CreateDBProxyRequest,
  () => CreateDBProxyResponse
);
export var DeleteDBProxyEndpoint = op(
  n0,
  _DDBPE,
  0,
  () => DeleteDBProxyEndpointRequest,
  () => DeleteDBProxyEndpointResponse
);
export var DescribeDBProxies = op(
  n0,
  _DDBPes,
  0,
  () => DescribeDBProxiesRequest,
  () => DescribeDBProxiesResponse
);
export var DescribeDBProxyEndpoints = op(
  n0,
  _DDBPEe,
  0,
  () => DescribeDBProxyEndpointsRequest,
  () => DescribeDBProxyEndpointsResponse
);
