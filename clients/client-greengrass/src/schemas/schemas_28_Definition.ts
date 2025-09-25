// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _CAe,
  _CCDr,
  _CCDRre,
  _CCDRrea,
  _CCDVr,
  _CCDVRre,
  _CCDVRrea,
  _CDIo,
  _CDVIo,
  _CDVo,
  _Cor,
  _Core,
  _CT,
  _Def,
  _GCDVe,
  _GCDVRet,
  _GCDVReto,
  _h,
  _hH,
  _I,
  _IV,
  _lOCi,
  _LUT,
  _LV,
  _LVA,
  _N,
  _NT,
  _SS,
  _t,
  _TA,
  _V,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Core = struct(n0, _Cor, 0, [_CAe, _I, _SS, _TA], [0, 0, 2, 0]);
export var CoreDefinitionVersion = struct(n0, _CDVo, 0, [_Core], [() => __listOfCore]);
export var CreateCoreDefinitionRequest = struct(
  n0,
  _CCDRre,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => CoreDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateCoreDefinitionResponse = struct(
  n0,
  _CCDRrea,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateCoreDefinitionVersionRequest = struct(
  n0,
  _CCDVRre,
  0,
  [_ACT, _CDIo, _Core],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
    () => __listOfCore,
  ]
);
export var CreateCoreDefinitionVersionResponse = struct(n0, _CCDVRrea, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var GetCoreDefinitionVersionRequest = struct(
  n0,
  _GCDVRet,
  0,
  [_CDIo, _CDVIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCoreDefinitionVersionResponse = struct(
  n0,
  _GCDVReto,
  0,
  [_A, _CT, _Def, _I, _NT, _V],
  [0, 0, () => CoreDefinitionVersion, 0, 0, 0]
);
export var __listOfCore = list(n0, _lOCi, 0, () => Core);
export var CreateCoreDefinition = op(
  n0,
  _CCDr,
  {
    [_h]: ["POST", "/greengrass/definition/cores", 200],
  },
  () => CreateCoreDefinitionRequest,
  () => CreateCoreDefinitionResponse
);
export var CreateCoreDefinitionVersion = op(
  n0,
  _CCDVr,
  {
    [_h]: ["POST", "/greengrass/definition/cores/{CoreDefinitionId}/versions", 200],
  },
  () => CreateCoreDefinitionVersionRequest,
  () => CreateCoreDefinitionVersionResponse
);
export var GetCoreDefinitionVersion = op(
  n0,
  _GCDVe,
  {
    [_h]: ["GET", "/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}", 200],
  },
  () => GetCoreDefinitionVersionRequest,
  () => GetCoreDefinitionVersionResponse
);
