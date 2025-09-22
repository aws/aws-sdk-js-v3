// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { RequestAlreadyInProgressException as __RequestAlreadyInProgressException } from "../models/index";
import {
  _a,
  _aC,
  _ac,
  _bRPM,
  _c,
  _CCU,
  _CDr,
  _CDRr,
  _CDRre,
  _CDS,
  _CDSo,
  _cL,
  _com,
  _cp,
  _CRW,
  _cTl,
  _cU,
  _cUP,
  _cV,
  _cVP,
  _DCUP,
  _DCVP,
  _dI,
  _DITJC,
  _dN,
  _DP,
  _dP,
  _e,
  _eR,
  _fHP,
  _fT,
  _GC,
  _GCR,
  _GCRe,
  _h,
  _hE,
  _hQ,
  _iF,
  _iJA,
  _iJC,
  _iJI,
  _iPTIM,
  _ITJAC,
  _ITJACL,
  _ITJACo,
  _ITJERC,
  _ITJERR,
  _ITJRIC,
  _ITJTC,
  _jERC,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _me,
  _mem,
  _mNOET,
  _mPM,
  _nONT,
  _nOST,
  _pTA,
  _pU,
  _r,
  _rAe,
  _RAIPE,
  _rec,
  _rIC,
  _rOF,
  _rW,
  _SRL,
  _sRL,
  _t,
  _tA,
  _tC,
  _tIS,
  _tK,
  _tP,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _wU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComponentConfigurationUpdate = struct(n0, _CCU, 0, [_me, _r], [0, 64 | 0]);
export var ComponentDeploymentSpecification = struct(
  n0,
  _CDS,
  0,
  [_cV, _cU, _rW],
  [0, () => ComponentConfigurationUpdate, () => ComponentRunWith]
);
export var ComponentRunWith = struct(n0, _CRW, 0, [_pU, _sRL, _wU], [0, () => SystemResourceLimits, 0]);
export var CreateDeploymentRequest = struct(
  n0,
  _CDRr,
  0,
  [_tA, _dN, _com, _iJC, _dP, _pTA, _t, _cTl],
  [
    0,
    0,
    () => ComponentDeploymentSpecifications,
    () => DeploymentIoTJobConfiguration,
    () => DeploymentPolicies,
    0,
    128 | 0,
    [0, 4],
  ]
);
export var CreateDeploymentResponse = struct(n0, _CDRre, 0, [_dI, _iJI, _iJA], [0, 0, 0]);
export var DeploymentComponentUpdatePolicy = struct(n0, _DCUP, 0, [_tIS, _ac], [1, 0]);
export var DeploymentConfigurationValidationPolicy = struct(n0, _DCVP, 0, [_tIS], [1]);
export var DeploymentIoTJobConfiguration = struct(
  n0,
  _DITJC,
  0,
  [_jERC, _aC, _tC],
  [() => IoTJobExecutionsRolloutConfig, () => IoTJobAbortConfig, () => IoTJobTimeoutConfig]
);
export var DeploymentPolicies = struct(
  n0,
  _DP,
  0,
  [_fHP, _cUP, _cVP],
  [0, () => DeploymentComponentUpdatePolicy, () => DeploymentConfigurationValidationPolicy]
);
export var GetComponentRequest = struct(
  n0,
  _GCR,
  0,
  [_rOF, _a],
  [
    [
      0,
      {
        [_hQ]: _rOF,
      },
    ],
    [0, 1],
  ]
);
export var GetComponentResponse = struct(n0, _GCRe, 0, [_rOF, _rec, _t], [0, 21, 128 | 0]);
export var IoTJobAbortConfig = struct(n0, _ITJAC, 0, [_cL], [() => IoTJobAbortCriteriaList]);
export var IoTJobAbortCriteria = struct(n0, _ITJACo, 0, [_fT, _ac, _tP, _mNOET], [0, 0, 1, 1]);
export var IoTJobExecutionsRolloutConfig = struct(n0, _ITJERC, 0, [_eR, _mPM], [() => IoTJobExponentialRolloutRate, 1]);
export var IoTJobExponentialRolloutRate = struct(
  n0,
  _ITJERR,
  0,
  [_bRPM, _iF, _rIC],
  [1, 1, () => IoTJobRateIncreaseCriteria]
);
export var IoTJobRateIncreaseCriteria = struct(n0, _ITJRIC, 0, [_nONT, _nOST], [1, 1]);
export var IoTJobTimeoutConfig = struct(n0, _ITJTC, 0, [_iPTIM], [1]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var RequestAlreadyInProgressException = error(
  n0,
  _RAIPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __RequestAlreadyInProgressException
);
export var SystemResourceLimits = struct(n0, _SRL, 0, [_mem, _cp], [1, 1]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ComponentConfigurationPathList = 64 | 0;

export var IoTJobAbortCriteriaList = list(n0, _ITJACL, 0, () => IoTJobAbortCriteria);
export var TagKeyList = 64 | 0;

export var ComponentDeploymentSpecifications = map(n0, _CDSo, 0, 0, () => ComponentDeploymentSpecification);
export var TagMap = 128 | 0;

export var CreateDeployment = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/greengrass/v2/deployments", 201],
  },
  () => CreateDeploymentRequest,
  () => CreateDeploymentResponse
);
export var GetComponent = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/greengrass/v2/components/{arn}", 200],
  },
  () => GetComponentRequest,
  () => GetComponentResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
