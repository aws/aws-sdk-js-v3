// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _a,
  _AIC,
  _aIC,
  _bDM,
  _cA,
  _CC,
  _CCL,
  _co,
  _CP,
  _CPL,
  _CR,
  _cTon,
  _d,
  _dC,
  _dN,
  _dOT,
  _dTD,
  _eb,
  _EIBDS,
  _en,
  _i,
  _IBDM,
  _IBDMn,
  _iC,
  _ICn,
  _io,
  _IR,
  _kKI,
  _n,
  _nD,
  _o,
  _p,
  _pa,
  _pI,
  _sIn,
  _SMA,
  _sMA,
  _t,
  _ta,
  _th,
  _tR,
  _uAB,
  _uDO,
  _v,
  _va,
  _vN,
  _vS,
  _vT,
  _wD,
  n0,
} from "./schemas_0";
import { TargetContainerRepository } from "./schemas_34_Configuration";

/* eslint no-var: 0 */

export var AdditionalInstanceConfiguration = struct(n0, _AIC, 0, [_sMA, _uDO], [() => SystemsManagerAgent, 0]);
export var ComponentConfiguration = struct(n0, _CC, 0, [_cA, _pa], [0, () => ComponentParameterList]);
export var ComponentParameter = struct(n0, _CP, 0, [_n, _va], [0, 64 | 0]);
export var ContainerRecipe = struct(
  n0,
  _CR,
  0,
  [_a, _cTon, _n, _d, _p, _o, _v, _co, _iC, _dTD, _kKI, _en, _pI, _dC, _ta, _wD, _tR],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => ComponentConfigurationList,
    () => InstanceConfiguration,
    0,
    0,
    2,
    0,
    0,
    128 | 0,
    0,
    () => TargetContainerRepository,
  ]
);
export var EbsInstanceBlockDeviceSpecification = struct(
  n0,
  _EIBDS,
  0,
  [_en, _dOT, _io, _kKI, _sIn, _vS, _vT, _th],
  [2, 2, 1, 0, 0, 1, 0, 1]
);
export var ImageRecipe = struct(
  n0,
  _IR,
  0,
  [_a, _t, _n, _d, _p, _o, _v, _co, _pI, _bDM, _dC, _ta, _wD, _aIC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => ComponentConfigurationList,
    0,
    () => InstanceBlockDeviceMappings,
    0,
    128 | 0,
    0,
    () => AdditionalInstanceConfiguration,
  ]
);
export var InstanceBlockDeviceMapping = struct(
  n0,
  _IBDM,
  0,
  [_dN, _eb, _vN, _nD],
  [0, () => EbsInstanceBlockDeviceSpecification, 0, 0]
);
export var InstanceConfiguration = struct(n0, _ICn, 0, [_i, _bDM], [0, () => InstanceBlockDeviceMappings]);
export var SystemsManagerAgent = struct(n0, _SMA, 0, [_uAB], [2]);
export var ComponentConfigurationList = list(n0, _CCL, 0, () => ComponentConfiguration);
export var ComponentParameterList = list(n0, _CPL, 0, () => ComponentParameter);
export var ComponentParameterValueList = 64 | 0;

export var InstanceBlockDeviceMappings = list(n0, _IBDMn, 0, () => InstanceBlockDeviceMapping);
