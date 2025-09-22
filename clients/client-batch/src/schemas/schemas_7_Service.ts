// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CL,
  _cL,
  _CLa,
  _CSE,
  _CSER,
  _CSERr,
  _cU,
  _DSEe,
  _DSERes,
  _DSEResc,
  _ht,
  _mC,
  _mR,
  _nT,
  _sE,
  _sEA,
  _SED,
  _SEDL,
  _sEe,
  _sEN,
  _sET,
  _st,
  _sta,
  _t,
  _USE,
  _USER,
  _USERp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CapacityLimit = struct(n0, _CL, 0, [_mC, _cU], [1, 0]);
export var CreateServiceEnvironmentRequest = struct(
  n0,
  _CSER,
  0,
  [_sEN, _sET, _st, _cL, _t],
  [0, 0, 0, () => CapacityLimits, 128 | 0]
);
export var CreateServiceEnvironmentResponse = struct(n0, _CSERr, 0, [_sEN, _sEA], [0, 0]);
export var DescribeServiceEnvironmentsRequest = struct(n0, _DSERes, 0, [_sEe, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeServiceEnvironmentsResponse = struct(
  n0,
  _DSEResc,
  0,
  [_sEe, _nT],
  [() => ServiceEnvironmentDetailList, 0]
);
export var ServiceEnvironmentDetail = struct(
  n0,
  _SED,
  0,
  [_sEN, _sEA, _sET, _st, _sta, _cL, _t],
  [0, 0, 0, 0, 0, () => CapacityLimits, 128 | 0]
);
export var UpdateServiceEnvironmentRequest = struct(n0, _USER, 0, [_sE, _st, _cL], [0, 0, () => CapacityLimits]);
export var UpdateServiceEnvironmentResponse = struct(n0, _USERp, 0, [_sEN, _sEA], [0, 0]);
export var CapacityLimits = list(n0, _CLa, 0, () => CapacityLimit);
export var ServiceEnvironmentDetailList = list(n0, _SEDL, 0, () => ServiceEnvironmentDetail);
export var CreateServiceEnvironment = op(
  n0,
  _CSE,
  {
    [_ht]: ["POST", "/v1/createserviceenvironment", 200],
  },
  () => CreateServiceEnvironmentRequest,
  () => CreateServiceEnvironmentResponse
);
export var DescribeServiceEnvironments = op(
  n0,
  _DSEe,
  {
    [_ht]: ["POST", "/v1/describeserviceenvironments", 200],
  },
  () => DescribeServiceEnvironmentsRequest,
  () => DescribeServiceEnvironmentsResponse
);
export var UpdateServiceEnvironment = op(
  n0,
  _USE,
  {
    [_ht]: ["POST", "/v1/updateserviceenvironment", 200],
  },
  () => UpdateServiceEnvironmentRequest,
  () => UpdateServiceEnvironmentResponse
);
