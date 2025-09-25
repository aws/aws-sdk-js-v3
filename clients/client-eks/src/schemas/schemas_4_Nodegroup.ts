// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASG,
  _aSG,
  _ASGL,
  _aT,
  _cA,
  _cN,
  _co,
  _cTa,
  _DN,
  _DNe,
  _DNR,
  _DNRe,
  _DNRes,
  _DNResc,
  _dS,
  _dSe,
  _ef,
  _en,
  _eSK,
  _h,
  _ht,
  _i,
  _IL,
  _Is,
  _iT,
  _k,
  _la,
  _lTa,
  _m,
  _mA,
  _mS,
  _mSa,
  _mU,
  _mUP,
  _N,
  _n,
  _nA,
  _NH,
  _nN,
  _no,
  _NR,
  _nR,
  _NRC,
  _nRC,
  _NSC,
  _NUC,
  _r,
  _RAC,
  _rAe,
  _rASG,
  _rI,
  _rV,
  _s,
  _sCc,
  _sSG,
  _sub,
  _T,
  _t,
  _ta,
  _tL,
  _uC,
  _uS,
  _v,
  _va,
  n0,
} from "./schemas_0";
import { LaunchTemplateSpecification } from "./schemas_24_Nodegroup";

/* eslint no-var: 0 */

export var AutoScalingGroup = struct(n0, _ASG, 0, [_n], [0]);
export var DeleteNodegroupRequest = struct(
  n0,
  _DNR,
  0,
  [_cN, _nN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteNodegroupResponse = struct(n0, _DNRe, 0, [_no], [() => Nodegroup]);
export var DescribeNodegroupRequest = struct(
  n0,
  _DNRes,
  0,
  [_cN, _nN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeNodegroupResponse = struct(n0, _DNResc, 0, [_no], [() => Nodegroup]);
export var Issue = struct(n0, _Is, 0, [_co, _m, _rI], [0, 0, 64 | 0]);
export var Nodegroup = struct(
  n0,
  _N,
  0,
  [
    _nN,
    _nA,
    _cN,
    _v,
    _rV,
    _cA,
    _mA,
    _s,
    _cTa,
    _sCc,
    _iT,
    _sub,
    _rAe,
    _aT,
    _nR,
    _la,
    _ta,
    _r,
    _dS,
    _h,
    _uC,
    _nRC,
    _lTa,
    _t,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    () => NodegroupScalingConfig,
    64 | 0,
    64 | 0,
    () => RemoteAccessConfig,
    0,
    0,
    128 | 0,
    () => taintsList,
    () => NodegroupResources,
    1,
    () => NodegroupHealth,
    () => NodegroupUpdateConfig,
    () => NodeRepairConfig,
    () => LaunchTemplateSpecification,
    128 | 0,
  ]
);
export var NodegroupHealth = struct(n0, _NH, 0, [_i], [() => IssueList]);
export var NodegroupResources = struct(n0, _NR, 0, [_aSG, _rASG], [() => AutoScalingGroupList, 0]);
export var NodegroupScalingConfig = struct(n0, _NSC, 0, [_mS, _mSa, _dSe], [1, 1, 1]);
export var NodegroupUpdateConfig = struct(n0, _NUC, 0, [_mU, _mUP, _uS], [1, 1, 0]);
export var NodeRepairConfig = struct(n0, _NRC, 0, [_en], [2]);
export var RemoteAccessConfig = struct(n0, _RAC, 0, [_eSK, _sSG], [0, 64 | 0]);
export var Taint = struct(n0, _T, 0, [_k, _va, _ef], [0, 0, 0]);
export var AutoScalingGroupList = list(n0, _ASGL, 0, () => AutoScalingGroup);
export var IssueList = list(n0, _IL, 0, () => Issue);
export var taintsList = list(n0, _tL, 0, () => Taint);
export var labelsMap = 128 | 0;

export var DeleteNodegroup = op(
  n0,
  _DN,
  {
    [_ht]: ["DELETE", "/clusters/{clusterName}/node-groups/{nodegroupName}", 200],
  },
  () => DeleteNodegroupRequest,
  () => DeleteNodegroupResponse
);
export var DescribeNodegroup = op(
  n0,
  _DNe,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/node-groups/{nodegroupName}", 200],
  },
  () => DescribeNodegroupRequest,
  () => DescribeNodegroupResponse
);
