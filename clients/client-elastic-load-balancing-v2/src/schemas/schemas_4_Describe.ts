// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ci,
  _Cip,
  _DAL,
  _DALI,
  _DALO,
  _DLBe,
  _DLBIe,
  _DLBOe,
  _DSSLP,
  _DSSLPI,
  _DSSLPO,
  _DTGe,
  _DTGIe,
  _DTGOe,
  _DTSA,
  _DTSAI,
  _DTSAO,
  _DTSe,
  _DTSIe,
  _DTSOe,
  _DTSR,
  _DTSRe,
  _DTSRI,
  _DTSRO,
  _DTSRR,
  _LB,
  _LBAo,
  _LBAoa,
  _LBT,
  _Li,
  _Lim,
  _Mar,
  _Max,
  _N,
  _Na,
  _NM,
  _NORE,
  _P,
  _PS,
  _RAe,
  _RI,
  _RIe,
  _RT,
  _SLBT,
  _SP,
  _SPs,
  _SPsl,
  _TG,
  _TGAa,
  _TS,
  _TSA,
  _TSAr,
  _TSAru,
  _TSArus,
  _TSR,
  n0,
} from "./schemas_0";
import { TargetGroups } from "./schemas_1_Target";
import { LoadBalancers } from "./schemas_3_Describe";
import { TrustStores } from "./schemas_7_Trust";

/* eslint no-var: 0 */

export var Cipher = struct(n0, _Ci, 0, [_N, _P], [0, 1]);
export var DescribeAccountLimitsInput = struct(n0, _DALI, 0, [_Mar, _PS], [0, 1]);
export var DescribeAccountLimitsOutput = struct(n0, _DALO, 0, [_Li, _NM], [() => Limits, 0]);
export var DescribeLoadBalancersInput = struct(n0, _DLBIe, 0, [_LBAoa, _Na, _Mar, _PS], [64 | 0, 64 | 0, 0, 1]);
export var DescribeLoadBalancersOutput = struct(n0, _DLBOe, 0, [_LB, _NM], [() => LoadBalancers, 0]);
export var DescribeSSLPoliciesInput = struct(n0, _DSSLPI, 0, [_Na, _Mar, _PS, _LBT], [64 | 0, 0, 1, 0]);
export var DescribeSSLPoliciesOutput = struct(n0, _DSSLPO, 0, [_SPs, _NM], [() => SslPolicies, 0]);
export var DescribeTargetGroupsInput = struct(n0, _DTGIe, 0, [_LBAo, _TGAa, _Na, _Mar, _PS], [0, 64 | 0, 64 | 0, 0, 1]);
export var DescribeTargetGroupsOutput = struct(n0, _DTGOe, 0, [_TG, _NM], [() => TargetGroups, 0]);
export var DescribeTrustStoreAssociationsInput = struct(n0, _DTSAI, 0, [_TSA, _Mar, _PS], [0, 0, 1]);
export var DescribeTrustStoreAssociationsOutput = struct(
  n0,
  _DTSAO,
  0,
  [_TSAr, _NM],
  [() => TrustStoreAssociations, 0]
);
export var DescribeTrustStoreRevocation = struct(n0, _DTSR, 0, [_TSA, _RI, _RT, _NORE], [0, 1, 0, 1]);
export var DescribeTrustStoreRevocationsInput = struct(n0, _DTSRI, 0, [_TSA, _RIe, _Mar, _PS], [0, 64 | 1, 0, 1]);
export var DescribeTrustStoreRevocationsOutput = struct(
  n0,
  _DTSRO,
  0,
  [_TSR, _NM],
  [() => DescribeTrustStoreRevocationResponse, 0]
);
export var DescribeTrustStoresInput = struct(n0, _DTSIe, 0, [_TSAru, _Na, _Mar, _PS], [64 | 0, 64 | 0, 0, 1]);
export var DescribeTrustStoresOutput = struct(n0, _DTSOe, 0, [_TS, _NM], [() => TrustStores, 0]);
export var Limit = struct(n0, _Lim, 0, [_N, _Max], [0, 0]);
export var SslPolicy = struct(n0, _SP, 0, [_SPsl, _Cip, _N, _SLBT], [64 | 0, () => Ciphers, 0, 64 | 0]);
export var TrustStoreAssociation = struct(n0, _TSArus, 0, [_RAe], [0]);
export var Ciphers = list(n0, _Cip, 0, () => Cipher);
export var DescribeTrustStoreRevocationResponse = list(n0, _DTSRR, 0, () => DescribeTrustStoreRevocation);
export var Limits = list(n0, _Li, 0, () => Limit);
export var LoadBalancerNames = 64 | 0;

export var SslPolicies = list(n0, _SPs, 0, () => SslPolicy);
export var SslPolicyNames = 64 | 0;

export var SslProtocols = 64 | 0;

export var TargetGroupArns = 64 | 0;

export var TargetGroupNames = 64 | 0;

export var TrustStoreArns = 64 | 0;

export var TrustStoreAssociations = list(n0, _TSAr, 0, () => TrustStoreAssociation);
export var TrustStoreNames = 64 | 0;

export var DescribeAccountLimits = op(
  n0,
  _DAL,
  0,
  () => DescribeAccountLimitsInput,
  () => DescribeAccountLimitsOutput
);
export var DescribeLoadBalancers = op(
  n0,
  _DLBe,
  0,
  () => DescribeLoadBalancersInput,
  () => DescribeLoadBalancersOutput
);
export var DescribeSSLPolicies = op(
  n0,
  _DSSLP,
  0,
  () => DescribeSSLPoliciesInput,
  () => DescribeSSLPoliciesOutput
);
export var DescribeTargetGroups = op(
  n0,
  _DTGe,
  0,
  () => DescribeTargetGroupsInput,
  () => DescribeTargetGroupsOutput
);
export var DescribeTrustStoreAssociations = op(
  n0,
  _DTSA,
  0,
  () => DescribeTrustStoreAssociationsInput,
  () => DescribeTrustStoreAssociationsOutput
);
export var DescribeTrustStoreRevocations = op(
  n0,
  _DTSRe,
  0,
  () => DescribeTrustStoreRevocationsInput,
  () => DescribeTrustStoreRevocationsOutput
);
export var DescribeTrustStores = op(
  n0,
  _DTSe,
  0,
  () => DescribeTrustStoresInput,
  () => DescribeTrustStoresOutput
);
