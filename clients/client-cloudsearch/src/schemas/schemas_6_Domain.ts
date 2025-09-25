// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARN,
  _Cr,
  _DD,
  _DDe,
  _DDR,
  _DDRe,
  _DDRes,
  _DDResc,
  _De,
  _DI,
  _DN,
  _DNo,
  _DS,
  _DSL,
  _DSo,
  _En,
  _L,
  _MPC,
  _MRC,
  _P,
  _RID,
  _SEe,
  _SIC,
  _SIT,
  _SPC,
  _SS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDR, 0, [_DN], [0]);
export var DeleteDomainResponse = struct(n0, _DDRe, 0, [_DS], [() => DomainStatus]);
export var DescribeDomainsRequest = struct(n0, _DDRes, 0, [_DNo], [64 | 0]);
export var DescribeDomainsResponse = struct(n0, _DDResc, 0, [_DSL], [() => DomainStatusList]);
export var DomainStatus = struct(
  n0,
  _DS,
  0,
  [_DI, _DN, _ARN, _Cr, _De, _DSo, _SS, _RID, _P, _SIT, _SPC, _SIC, _L],
  [0, 0, 0, 2, 2, () => ServiceEndpoint, () => ServiceEndpoint, 2, 2, 0, 1, 1, () => Limits]
);
export var Limits = struct(n0, _L, 0, [_MRC, _MPC], [1, 1]);
export var ServiceEndpoint = struct(n0, _SEe, 0, [_En], [0]);
export var DomainNameList = 64 | 0;

export var DomainStatusList = list(n0, _DSL, 0, () => DomainStatus);
export var DeleteDomain = op(
  n0,
  _DD,
  0,
  () => DeleteDomainRequest,
  () => DeleteDomainResponse
);
export var DescribeDomains = op(
  n0,
  _DDe,
  0,
  () => DescribeDomainsRequest,
  () => DescribeDomainsResponse
);
