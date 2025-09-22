// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DependencyThrottleException as __DependencyThrottleException,
  DuplicatePolicyNameException as __DuplicatePolicyNameException,
  PolicyNotFoundException as __PolicyNotFoundException,
  TooManyPoliciesException as __TooManyPoliciesException,
} from "../models/index";
import {
  _ACSP,
  _ACSPp,
  _AN,
  _aQE,
  _AV,
  _AZ,
  _BSD,
  _BSDa,
  _c,
  _CACSP,
  _CACSPI,
  _CACSPO,
  _CEP,
  _CHZN,
  _CHZNID,
  _CLBCSP,
  _CLBCSPI,
  _CLBCSPO,
  _CLBP,
  _CLBPI,
  _CLBPO,
  _CN,
  _CT,
  _DAPIe,
  _DAPOe,
  _DLBe,
  _DLBP,
  _DLBPe,
  _DLBPI,
  _DLBPIe,
  _DLBPO,
  _DLBPOe,
  _DNSN,
  _DPNE,
  _DTE,
  _e,
  _GN,
  _HC,
  _hE,
  _I,
  _IP,
  _LBCSP,
  _LBCSPo,
  _LBD,
  _LBDo,
  _LBN,
  _LBNo,
  _LBPo,
  _LD,
  _LDi,
  _Lis,
  _M,
  _Ma,
  _NM,
  _OA,
  _OP,
  _PA,
  _PAD,
  _PADo,
  _PAo,
  _PD,
  _PDo,
  _PN,
  _PNFE,
  _PNo,
  _Po,
  _PS,
  _PTN,
  _S,
  _Sc,
  _SG,
  _SLBPFBS,
  _SLBPFBSI,
  _SLBPFBSO,
  _SLBPOL,
  _SLBPOLI,
  _SLBPOLO,
  _SSG,
  _TMPE,
  _VPCI,
  n0,
} from "./schemas_0";
import { Instances } from "./schemas_7_Load";
import { Listener } from "./schemas_9_Load";
import { HealthCheck } from "./schemas_11_";

/* eslint no-var: 0 */

export var AppCookieStickinessPolicy = struct(n0, _ACSP, 0, [_PN, _CN], [0, 0]);
export var BackendServerDescription = struct(n0, _BSD, 0, [_IP, _PNo], [1, 64 | 0]);
export var CreateAppCookieStickinessPolicyInput = struct(n0, _CACSPI, 0, [_LBN, _PN, _CN], [0, 0, 0]);
export var CreateAppCookieStickinessPolicyOutput = struct(n0, _CACSPO, 0, [], []);
export var CreateLBCookieStickinessPolicyInput = struct(n0, _CLBCSPI, 0, [_LBN, _PN, _CEP], [0, 0, 1]);
export var CreateLBCookieStickinessPolicyOutput = struct(n0, _CLBCSPO, 0, [], []);
export var CreateLoadBalancerPolicyInput = struct(
  n0,
  _CLBPI,
  0,
  [_LBN, _PN, _PTN, _PA],
  [0, 0, 0, () => PolicyAttributes]
);
export var CreateLoadBalancerPolicyOutput = struct(n0, _CLBPO, 0, [], []);
export var DeleteLoadBalancerPolicyInput = struct(n0, _DLBPI, 0, [_LBN, _PN], [0, 0]);
export var DeleteLoadBalancerPolicyOutput = struct(n0, _DLBPO, 0, [], []);
export var DependencyThrottleException = error(
  n0,
  _DTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DependencyThrottle`, 400],
  },
  [_M],
  [0],

  __DependencyThrottleException
);
export var DescribeAccessPointsInput = struct(n0, _DAPIe, 0, [_LBNo, _Ma, _PS], [64 | 0, 0, 1]);
export var DescribeAccessPointsOutput = struct(n0, _DAPOe, 0, [_LBD, _NM], [() => LoadBalancerDescriptions, 0]);
export var DescribeLoadBalancerPoliciesInput = struct(n0, _DLBPIe, 0, [_LBN, _PNo], [0, 64 | 0]);
export var DescribeLoadBalancerPoliciesOutput = struct(n0, _DLBPOe, 0, [_PD], [() => PolicyDescriptions]);
export var DuplicatePolicyNameException = error(
  n0,
  _DPNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicatePolicyName`, 400],
  },
  [_M],
  [0],

  __DuplicatePolicyNameException
);
export var LBCookieStickinessPolicy = struct(n0, _LBCSP, 0, [_PN, _CEP], [0, 1]);
export var ListenerDescription = struct(n0, _LD, 0, [_Lis, _PNo], [() => Listener, 64 | 0]);
export var LoadBalancerDescription = struct(
  n0,
  _LBDo,
  0,
  [_LBN, _DNSN, _CHZN, _CHZNID, _LDi, _Po, _BSDa, _AZ, _S, _VPCI, _I, _HC, _SSG, _SG, _CT, _Sc],
  [
    0,
    0,
    0,
    0,
    () => ListenerDescriptions,
    () => Policies,
    () => BackendServerDescriptions,
    64 | 0,
    64 | 0,
    0,
    () => Instances,
    () => HealthCheck,
    () => SourceSecurityGroup,
    64 | 0,
    4,
    0,
  ]
);
export var Policies = struct(
  n0,
  _Po,
  0,
  [_ACSPp, _LBCSPo, _OP],
  [() => AppCookieStickinessPolicies, () => LBCookieStickinessPolicies, 64 | 0]
);
export var PolicyAttribute = struct(n0, _PAo, 0, [_AN, _AV], [0, 0]);
export var PolicyAttributeDescription = struct(n0, _PAD, 0, [_AN, _AV], [0, 0]);
export var PolicyDescription = struct(n0, _PDo, 0, [_PN, _PTN, _PADo], [0, 0, () => PolicyAttributeDescriptions]);
export var PolicyNotFoundException = error(
  n0,
  _PNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PolicyNotFound`, 400],
  },
  [_M],
  [0],

  __PolicyNotFoundException
);
export var SetLoadBalancerPoliciesForBackendServerInput = struct(n0, _SLBPFBSI, 0, [_LBN, _IP, _PNo], [0, 1, 64 | 0]);
export var SetLoadBalancerPoliciesForBackendServerOutput = struct(n0, _SLBPFBSO, 0, [], []);
export var SetLoadBalancerPoliciesOfListenerInput = struct(n0, _SLBPOLI, 0, [_LBN, _LBPo, _PNo], [0, 1, 64 | 0]);
export var SetLoadBalancerPoliciesOfListenerOutput = struct(n0, _SLBPOLO, 0, [], []);
export var SourceSecurityGroup = struct(n0, _SSG, 0, [_OA, _GN], [0, 0]);
export var TooManyPoliciesException = error(
  n0,
  _TMPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyPolicies`, 400],
  },
  [_M],
  [0],

  __TooManyPoliciesException
);
export var AppCookieStickinessPolicies = list(n0, _ACSPp, 0, () => AppCookieStickinessPolicy);
export var BackendServerDescriptions = list(n0, _BSDa, 0, () => BackendServerDescription);
export var LBCookieStickinessPolicies = list(n0, _LBCSPo, 0, () => LBCookieStickinessPolicy);
export var ListenerDescriptions = list(n0, _LDi, 0, () => ListenerDescription);
export var LoadBalancerDescriptions = list(n0, _LBD, 0, () => LoadBalancerDescription);
export var PolicyAttributeDescriptions = list(n0, _PADo, 0, () => PolicyAttributeDescription);
export var PolicyAttributes = list(n0, _PA, 0, () => PolicyAttribute);
export var PolicyDescriptions = list(n0, _PD, 0, () => PolicyDescription);
export var PolicyNames = 64 | 0;

export var CreateAppCookieStickinessPolicy = op(
  n0,
  _CACSP,
  0,
  () => CreateAppCookieStickinessPolicyInput,
  () => CreateAppCookieStickinessPolicyOutput
);
export var CreateLBCookieStickinessPolicy = op(
  n0,
  _CLBCSP,
  0,
  () => CreateLBCookieStickinessPolicyInput,
  () => CreateLBCookieStickinessPolicyOutput
);
export var CreateLoadBalancerPolicy = op(
  n0,
  _CLBP,
  0,
  () => CreateLoadBalancerPolicyInput,
  () => CreateLoadBalancerPolicyOutput
);
export var DeleteLoadBalancerPolicy = op(
  n0,
  _DLBP,
  0,
  () => DeleteLoadBalancerPolicyInput,
  () => DeleteLoadBalancerPolicyOutput
);
export var DescribeLoadBalancerPolicies = op(
  n0,
  _DLBPe,
  0,
  () => DescribeLoadBalancerPoliciesInput,
  () => DescribeLoadBalancerPoliciesOutput
);
export var DescribeLoadBalancers = op(
  n0,
  _DLBe,
  0,
  () => DescribeAccessPointsInput,
  () => DescribeAccessPointsOutput
);
export var SetLoadBalancerPoliciesForBackendServer = op(
  n0,
  _SLBPFBS,
  0,
  () => SetLoadBalancerPoliciesForBackendServerInput,
  () => SetLoadBalancerPoliciesForBackendServerOutput
);
export var SetLoadBalancerPoliciesOfListener = op(
  n0,
  _SLBPOL,
  0,
  () => SetLoadBalancerPoliciesOfListenerInput,
  () => SetLoadBalancerPoliciesOfListenerOutput
);
