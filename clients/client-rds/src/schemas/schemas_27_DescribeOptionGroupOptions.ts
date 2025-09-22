// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AT,
  _AV,
  _AVl,
  _CCA,
  _D,
  _DOGO,
  _DOGOM,
  _DPe,
  _DV,
  _EN,
  _Fi,
  _ID,
  _IM,
  _IR,
  _Ma,
  _MEV,
  _MEVi,
  _MEVPAV,
  _MEVPAVL,
  _MR,
  _MRMEV,
  _N,
  _OCN,
  _OCW,
  _ODO,
  _OGO,
  _OGOL,
  _OGOM,
  _OGOp,
  _OGOS,
  _OGOSL,
  _OGOSp,
  _OGOV,
  _OGOVL,
  _ON,
  _OV,
  _Pe,
  _Per,
  _PR,
  _RAMEVU,
  _SDe,
  _SNe,
  _SOVD,
  _Ve,
  _VO,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeOptionGroupOptionsMessage = struct(
  n0,
  _DOGOM,
  0,
  [_EN, _MEV, _Fi, _MR, _Ma],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var MinimumEngineVersionPerAllowedValue = struct(n0, _MEVPAV, 0, [_AVl, _MEVi], [0, 0]);
export var OptionGroupOption = struct(
  n0,
  _OGO,
  0,
  [_N, _D, _EN, _MEV, _MRMEV, _PR, _DPe, _ODO, _OCW, _Pe, _Per, _RAMEVU, _VO, _SOVD, _OGOS, _OGOV, _CCA],
  [
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    [() => OptionsDependedOn, 0],
    [() => OptionsConflictsWith, 0],
    2,
    2,
    2,
    2,
    2,
    [() => OptionGroupOptionSettingsList, 0],
    [() => OptionGroupOptionVersionsList, 0],
    2,
  ]
);
export var OptionGroupOptionSetting = struct(
  n0,
  _OGOSp,
  0,
  [_SNe, _SDe, _DV, _AT, _AV, _IM, _IR, _MEVPAV],
  [0, 0, 0, 0, 0, 2, 2, [() => MinimumEngineVersionPerAllowedValueList, 0]]
);
export var OptionGroupOptionsMessage = struct(n0, _OGOM, 0, [_OGOp, _Ma], [[() => OptionGroupOptionsList, 0], 0]);
export var OptionVersion = struct(n0, _OV, 0, [_Ve, _ID], [0, 2]);
export var MinimumEngineVersionPerAllowedValueList = list(n0, _MEVPAVL, 0, [
  () => MinimumEngineVersionPerAllowedValue,
  {
    [_xN]: _MEVPAV,
  },
]);
export var OptionGroupOptionSettingsList = list(n0, _OGOSL, 0, [
  () => OptionGroupOptionSetting,
  {
    [_xN]: _OGOSp,
  },
]);
export var OptionGroupOptionsList = list(n0, _OGOL, 0, [
  () => OptionGroupOption,
  {
    [_xN]: _OGO,
  },
]);
export var OptionGroupOptionVersionsList = list(n0, _OGOVL, 0, [
  () => OptionVersion,
  {
    [_xN]: _OV,
  },
]);
export var OptionsConflictsWith = list(n0, _OCW, 0, [
  0,
  {
    [_xN]: _OCN,
  },
]);
export var OptionsDependedOn = list(n0, _ODO, 0, [
  0,
  {
    [_xN]: _ON,
  },
]);
export var DescribeOptionGroupOptions = op(
  n0,
  _DOGO,
  0,
  () => DescribeOptionGroupOptionsMessage,
  () => OptionGroupOptionsMessage
);
