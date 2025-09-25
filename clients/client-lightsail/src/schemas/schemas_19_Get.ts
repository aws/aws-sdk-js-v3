// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aBU,
  _aDN,
  _aTUB,
  _bIu,
  _cA,
  _cAN,
  _cB,
  _cBS,
  _cDN,
  _CDr,
  _CDRre,
  _CDRrea,
  _CLB,
  _CLBR,
  _CLBRr,
  _cN,
  _cOo,
  _dCB,
  _dis,
  _dist,
  _DLi,
  _dN,
  _dNn,
  _dNo,
  _GDet,
  _GDRetis,
  _GDRetist,
  _GLB,
  _GLBe,
  _GLBR,
  _GLBRe,
  _GLBRet,
  _GLBReto,
  _hCP,
  _hRE,
  _ht,
  _iAst,
  _iAT,
  _iE,
  _iH,
  _iHR,
  _IHS,
  _iHS,
  _IHSL,
  _iN,
  _iP,
  _l,
  _LB,
  _lB,
  _LBL,
  _lBN,
  _lBo,
  _LBTCS,
  _LBTCSL,
  _LD,
  _n,
  _nPT,
  _o,
  _op,
  _oPDNS,
  _Or,
  _or,
  _pP,
  _pPu,
  _pro,
  _pT,
  _rN,
  _rNe,
  _rT,
  _rTes,
  _s,
  _sC,
  _SIAT,
  _SIATR,
  _SIATRe,
  _sta,
  _ta,
  _tCS,
  _tPN,
  _vMTPV,
  n0,
  Operation,
  OperationList,
  ResourceLocation,
  TagList,
} from "./schemas_0";
import { CacheBehavior, CacheBehaviorList, CacheSettings, InputOrigin } from "./schemas_9_Distribution";

/* eslint no-var: 0 */

export var CreateDistributionRequest = struct(
  n0,
  _CDRre,
  0,
  [_dN, _or, _dCB, _cBS, _cB, _bIu, _iAT, _ta, _cN, _vMTPV],
  [0, () => InputOrigin, () => CacheBehavior, () => CacheSettings, () => CacheBehaviorList, 0, 0, () => TagList, 0, 0]
);
export var CreateDistributionResult = struct(
  n0,
  _CDRrea,
  0,
  [_dis, _op],
  [() => LightsailDistribution, () => Operation]
);
export var CreateLoadBalancerRequest = struct(
  n0,
  _CLBR,
  0,
  [_lBN, _iP, _hCP, _cN, _cDN, _cAN, _ta, _iAT, _tPN],
  [0, 1, 0, 0, 0, 64 | 0, () => TagList, 0, 0]
);
export var CreateLoadBalancerResult = struct(n0, _CLBRr, 0, [_o], [() => OperationList]);
export var GetDistributionsRequest = struct(n0, _GDRetis, 0, [_dN, _pT], [0, 0]);
export var GetDistributionsResult = struct(n0, _GDRetist, 0, [_dist, _nPT], [() => DistributionList, 0]);
export var GetLoadBalancerRequest = struct(n0, _GLBR, 0, [_lBN], [0]);
export var GetLoadBalancerResult = struct(n0, _GLBRe, 0, [_lB], [() => LoadBalancer]);
export var GetLoadBalancersRequest = struct(n0, _GLBRet, 0, [_pT], [0]);
export var GetLoadBalancersResult = struct(n0, _GLBReto, 0, [_lBo, _nPT], [() => LoadBalancerList, 0]);
export var InstanceHealthSummary = struct(n0, _IHS, 0, [_iN, _iH, _iHR], [0, 0, 0]);
export var LightsailDistribution = struct(
  n0,
  _LD,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _aDN, _s, _iE, _dNo, _bIu, _cN, _or, _oPDNS, _dCB, _cBS, _cB, _aTUB, _iAT, _ta, _vMTPV],
  [
    0,
    0,
    0,
    4,
    () => ResourceLocation,
    0,
    64 | 0,
    0,
    2,
    0,
    0,
    0,
    () => Origin,
    0,
    () => CacheBehavior,
    () => CacheSettings,
    () => CacheBehaviorList,
    2,
    0,
    () => TagList,
    0,
  ]
);
export var LoadBalancer = struct(
  n0,
  _LB,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _dNn, _sta, _pro, _pPu, _hCP, _iP, _iHS, _tCS, _cOo, _iAT, _hRE, _tPN],
  [
    0,
    0,
    0,
    4,
    () => ResourceLocation,
    0,
    () => TagList,
    0,
    0,
    0,
    64 | 1,
    0,
    1,
    () => InstanceHealthSummaryList,
    () => LoadBalancerTlsCertificateSummaryList,
    128 | 0,
    0,
    2,
    0,
  ]
);
export var LoadBalancerTlsCertificateSummary = struct(n0, _LBTCS, 0, [_n, _iAst], [0, 2]);
export var Origin = struct(n0, _Or, 0, [_n, _rT, _rNe, _pP, _rTes], [0, 0, 0, 0, 1]);
export var SetIpAddressTypeRequest = struct(n0, _SIATR, 0, [_rT, _rN, _iAT, _aBU], [0, 0, 0, 2]);
export var SetIpAddressTypeResult = struct(n0, _SIATRe, 0, [_o], [() => OperationList]);
export var DistributionList = list(n0, _DLi, 0, () => LightsailDistribution);
export var InstanceHealthSummaryList = list(n0, _IHSL, 0, () => InstanceHealthSummary);
export var LoadBalancerList = list(n0, _LBL, 0, () => LoadBalancer);
export var LoadBalancerTlsCertificateSummaryList = list(n0, _LBTCSL, 0, () => LoadBalancerTlsCertificateSummary);
export var PortList = 64 | 1;

export var LoadBalancerConfigurationOptions = 128 | 0;

export var CreateDistribution = op(
  n0,
  _CDr,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateDistribution", 200],
  },
  () => CreateDistributionRequest,
  () => CreateDistributionResult
);
export var CreateLoadBalancer = op(
  n0,
  _CLB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateLoadBalancer", 200],
  },
  () => CreateLoadBalancerRequest,
  () => CreateLoadBalancerResult
);
export var GetDistributions = op(
  n0,
  _GDet,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDistributions", 200],
  },
  () => GetDistributionsRequest,
  () => GetDistributionsResult
);
export var GetLoadBalancer = op(
  n0,
  _GLB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetLoadBalancer", 200],
  },
  () => GetLoadBalancerRequest,
  () => GetLoadBalancerResult
);
export var GetLoadBalancers = op(
  n0,
  _GLBe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetLoadBalancers", 200],
  },
  () => GetLoadBalancersRequest,
  () => GetLoadBalancersResult
);
export var SetIpAddressType = op(
  n0,
  _SIAT,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/SetIpAddressType", 200],
  },
  () => SetIpAddressTypeRequest,
  () => SetIpAddressTypeResult
);
