// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aS,
  _bP,
  _CCE,
  _CCER,
  _CCERr,
  _cEA,
  _cEN,
  _con,
  _CR,
  _cR,
  _dC,
  _EC,
  _eCAk,
  _eCc,
  _ECk,
  _eCk,
  _ECL,
  _eKP,
  _ht,
  _iI,
  _iIO,
  _iKV,
  _iR,
  _iT,
  _iTm,
  _kN,
  _lT,
  _lTI,
  _lTN,
  _LTS,
  _LTSO,
  _LTSOL,
  _mCa,
  _mCi,
  _ov,
  _pG,
  _sGI,
  _sIFR,
  _sRe,
  _st,
  _su,
  _t,
  _tIT,
  _ty,
  _uC,
  _uT,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComputeResource = struct(
  n0,
  _CR,
  0,
  [_ty, _aS, _mCi, _mCa, _dC, _iT, _iI, _su, _sGI, _eKP, _iR, _t, _pG, _bP, _sIFR, _lT, _eCc],
  [
    0,
    0,
    1,
    1,
    1,
    64 | 0,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    128 | 0,
    0,
    1,
    0,
    () => LaunchTemplateSpecification,
    () => Ec2ConfigurationList,
  ]
);
export var CreateComputeEnvironmentRequest = struct(
  n0,
  _CCER,
  0,
  [_cEN, _ty, _st, _uC, _cR, _sRe, _t, _eCk, _con],
  [0, 0, 0, 1, () => ComputeResource, 0, 128 | 0, () => EksConfiguration, 0]
);
export var CreateComputeEnvironmentResponse = struct(n0, _CCERr, 0, [_cEN, _cEA], [0, 0]);
export var Ec2Configuration = struct(n0, _EC, 0, [_iTm, _iIO, _iKV], [0, 0, 0]);
export var EksConfiguration = struct(n0, _ECk, 0, [_eCAk, _kN], [0, 0]);
export var LaunchTemplateSpecification = struct(
  n0,
  _LTS,
  0,
  [_lTI, _lTN, _ve, _ov, _uT],
  [0, 0, 0, () => LaunchTemplateSpecificationOverrideList, 0]
);
export var LaunchTemplateSpecificationOverride = struct(
  n0,
  _LTSO,
  0,
  [_lTI, _lTN, _ve, _tIT, _uT],
  [0, 0, 0, 64 | 0, 0]
);
export var Ec2ConfigurationList = list(n0, _ECL, 0, () => Ec2Configuration);
export var LaunchTemplateSpecificationOverrideList = list(n0, _LTSOL, 0, () => LaunchTemplateSpecificationOverride);
export var TagsMap = 128 | 0;

export var CreateComputeEnvironment = op(
  n0,
  _CCE,
  {
    [_ht]: ["POST", "/v1/createcomputeenvironment", 200],
  },
  () => CreateComputeEnvironmentRequest,
  () => CreateComputeEnvironmentResponse
);
