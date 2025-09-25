// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _aSGA,
  _ASGP,
  _aSGP,
  _ASGPU,
  _c,
  _CCP,
  _CCPR,
  _CCPRr,
  _CP,
  _cP,
  _CPa,
  _cPA,
  _cPa,
  _DCP,
  _DCPe,
  _DCPR,
  _DCPRe,
  _DCPRes,
  _DCPResc,
  _e,
  _fa,
  _inc,
  _iWP,
  _LEE,
  _m,
  _mD,
  _mRa,
  _MS,
  _mS,
  _mSSS,
  _mSSSa,
  _mTP,
  _n,
  _nT,
  _s,
  _ta,
  _tC,
  _UCP,
  _UCPR,
  _UCPRp,
  _uS,
  _uSR,
  Failures,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoScalingGroupProvider = struct(n0, _ASGP, 0, [_aSGA, _mS, _mTP, _mD], [0, () => ManagedScaling, 0, 0]);
export var AutoScalingGroupProviderUpdate = struct(n0, _ASGPU, 0, [_mS, _mTP, _mD], [() => ManagedScaling, 0, 0]);
export var CapacityProvider = struct(
  n0,
  _CP,
  0,
  [_cPA, _n, _s, _aSGP, _uS, _uSR, _ta],
  [0, 0, 0, () => AutoScalingGroupProvider, 0, 0, () => Tags]
);
export var CreateCapacityProviderRequest = struct(
  n0,
  _CCPR,
  0,
  [_n, _aSGP, _ta],
  [0, () => AutoScalingGroupProvider, () => Tags]
);
export var CreateCapacityProviderResponse = struct(n0, _CCPRr, 0, [_cP], [() => CapacityProvider]);
export var DeleteCapacityProviderRequest = struct(n0, _DCPR, 0, [_cP], [0]);
export var DeleteCapacityProviderResponse = struct(n0, _DCPRe, 0, [_cP], [() => CapacityProvider]);
export var DescribeCapacityProvidersRequest = struct(n0, _DCPRes, 0, [_cPa, _inc, _mRa, _nT], [64 | 0, 64 | 0, 1, 0]);
export var DescribeCapacityProvidersResponse = struct(
  n0,
  _DCPResc,
  0,
  [_cPa, _fa, _nT],
  [() => CapacityProviders, () => Failures, 0]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ManagedScaling = struct(n0, _MS, 0, [_s, _tC, _mSSS, _mSSSa, _iWP], [0, 1, 1, 1, 1]);
export var UpdateCapacityProviderRequest = struct(n0, _UCPR, 0, [_n, _aSGP], [0, () => AutoScalingGroupProviderUpdate]);
export var UpdateCapacityProviderResponse = struct(n0, _UCPRp, 0, [_cP], [() => CapacityProvider]);
export var CapacityProviderFieldList = 64 | 0;

export var CapacityProviders = list(n0, _CPa, 0, () => CapacityProvider);
export var CreateCapacityProvider = op(
  n0,
  _CCP,
  0,
  () => CreateCapacityProviderRequest,
  () => CreateCapacityProviderResponse
);
export var DeleteCapacityProvider = op(
  n0,
  _DCP,
  0,
  () => DeleteCapacityProviderRequest,
  () => DeleteCapacityProviderResponse
);
export var DescribeCapacityProviders = op(
  n0,
  _DCPe,
  0,
  () => DescribeCapacityProvidersRequest,
  () => DescribeCapacityProvidersResponse
);
export var UpdateCapacityProvider = op(
  n0,
  _UCP,
  0,
  () => UpdateCapacityProviderRequest,
  () => UpdateCapacityProviderResponse
);
