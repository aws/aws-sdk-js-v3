// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CidrCollectionAlreadyExistsException as __CidrCollectionAlreadyExistsException,
  InsufficientCloudWatchLogsResourcePolicy as __InsufficientCloudWatchLogsResourcePolicy,
  InvalidTrafficPolicyDocument as __InvalidTrafficPolicyDocument,
  NoSuchCloudWatchLogsLogGroup as __NoSuchCloudWatchLogsLogGroup,
  QueryLoggingConfigAlreadyExists as __QueryLoggingConfigAlreadyExists,
  TooManyTrafficPolicies as __TooManyTrafficPolicies,
  TooManyTrafficPolicyVersionsForCurrentPolicy as __TooManyTrafficPolicyVersionsForCurrentPolicy,
  TrafficPolicyAlreadyExists as __TrafficPolicyAlreadyExists,
} from "../models/index";
import {
  _Ar,
  _C,
  _c,
  _CC,
  _CCAEE,
  _CCCr,
  _CCCRr,
  _CCCRre,
  _Col,
  _CQLC,
  _CQLCR,
  _CQLCRr,
  _CR,
  _CTP,
  _CTPR,
  _CTPRr,
  _CTPV,
  _CTPVR,
  _CTPVRr,
  _CWLLGA,
  _Do,
  _e,
  _hE,
  _hH,
  _ht,
  _HZI,
  _I,
  _ICWLRP,
  _ITPD,
  _Loc,
  _M,
  _m,
  _N,
  _NSCWLLG,
  _QLC,
  _QLCAE,
  _TMTP,
  _TMTPVFCP,
  _TP,
  _TPAE,
  _Ve,
  n0,
} from "./schemas_0";
import { QueryLoggingConfig } from "./schemas_16_Logging";
import { TrafficPolicy } from "./schemas_28_Traffic";

/* eslint no-var: 0 */

export var CidrCollection = struct(n0, _CC, 0, [_Ar, _I, _N, _Ve], [0, 0, 0, 1]);
export var CidrCollectionAlreadyExistsException = error(
  n0,
  _CCAEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __CidrCollectionAlreadyExistsException
);
export var CreateCidrCollectionRequest = struct(n0, _CCCRr, 0, [_N, _CR], [0, 0]);
export var CreateCidrCollectionResponse = struct(
  n0,
  _CCCRre,
  0,
  [_Col, _Loc],
  [
    () => CidrCollection,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var CreateQueryLoggingConfigRequest = struct(n0, _CQLCR, 0, [_HZI, _CWLLGA], [0, 0]);
export var CreateQueryLoggingConfigResponse = struct(
  n0,
  _CQLCRr,
  0,
  [_QLC, _Loc],
  [
    () => QueryLoggingConfig,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var CreateTrafficPolicyRequest = struct(n0, _CTPR, 0, [_N, _Do, _C], [0, 0, 0]);
export var CreateTrafficPolicyResponse = struct(
  n0,
  _CTPRr,
  0,
  [_TP, _Loc],
  [
    () => TrafficPolicy,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var CreateTrafficPolicyVersionRequest = struct(n0, _CTPVR, 0, [_I, _Do, _C], [[0, 1], 0, 0]);
export var CreateTrafficPolicyVersionResponse = struct(
  n0,
  _CTPVRr,
  0,
  [_TP, _Loc],
  [
    () => TrafficPolicy,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var InsufficientCloudWatchLogsResourcePolicy = error(
  n0,
  _ICWLRP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InsufficientCloudWatchLogsResourcePolicy
);
export var InvalidTrafficPolicyDocument = error(
  n0,
  _ITPD,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidTrafficPolicyDocument
);
export var NoSuchCloudWatchLogsLogGroup = error(
  n0,
  _NSCWLLG,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchCloudWatchLogsLogGroup
);
export var QueryLoggingConfigAlreadyExists = error(
  n0,
  _QLCAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __QueryLoggingConfigAlreadyExists
);
export var TooManyTrafficPolicies = error(
  n0,
  _TMTP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTrafficPolicies
);
export var TooManyTrafficPolicyVersionsForCurrentPolicy = error(
  n0,
  _TMTPVFCP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTrafficPolicyVersionsForCurrentPolicy
);
export var TrafficPolicyAlreadyExists = error(
  n0,
  _TPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __TrafficPolicyAlreadyExists
);
export var CreateCidrCollection = op(
  n0,
  _CCCr,
  {
    [_ht]: ["POST", "/2013-04-01/cidrcollection", 201],
  },
  () => CreateCidrCollectionRequest,
  () => CreateCidrCollectionResponse
);
export var CreateQueryLoggingConfig = op(
  n0,
  _CQLC,
  {
    [_ht]: ["POST", "/2013-04-01/queryloggingconfig", 201],
  },
  () => CreateQueryLoggingConfigRequest,
  () => CreateQueryLoggingConfigResponse
);
export var CreateTrafficPolicy = op(
  n0,
  _CTP,
  {
    [_ht]: ["POST", "/2013-04-01/trafficpolicy", 201],
  },
  () => CreateTrafficPolicyRequest,
  () => CreateTrafficPolicyResponse
);
export var CreateTrafficPolicyVersion = op(
  n0,
  _CTPV,
  {
    [_ht]: ["POST", "/2013-04-01/trafficpolicy/{Id}", 201],
  },
  () => CreateTrafficPolicyVersionRequest,
  () => CreateTrafficPolicyVersionResponse
);
