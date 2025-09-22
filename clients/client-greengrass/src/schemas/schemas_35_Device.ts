// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _CAe,
  _CDD,
  _CDDR,
  _CDDRr,
  _CDDV,
  _CDDVR,
  _CDDVRr,
  _CT,
  _D,
  _DDI,
  _DDV,
  _DDVI,
  _Def,
  _Dev,
  _GDDV,
  _GDDVR,
  _GDDVRe,
  _h,
  _hH,
  _hQ,
  _I,
  _IV,
  _lOD,
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

export var CreateDeviceDefinitionRequest = struct(
  n0,
  _CDDR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => DeviceDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateDeviceDefinitionResponse = struct(
  n0,
  _CDDRr,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateDeviceDefinitionVersionRequest = struct(
  n0,
  _CDDVR,
  0,
  [_ACT, _DDI, _D],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
    () => __listOfDevice,
  ]
);
export var CreateDeviceDefinitionVersionResponse = struct(n0, _CDDVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var Device = struct(n0, _Dev, 0, [_CAe, _I, _SS, _TA], [0, 0, 2, 0]);
export var DeviceDefinitionVersion = struct(n0, _DDV, 0, [_D], [() => __listOfDevice]);
export var GetDeviceDefinitionVersionRequest = struct(
  n0,
  _GDDVR,
  0,
  [_DDI, _DDVI, _NT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetDeviceDefinitionVersionResponse = struct(
  n0,
  _GDDVRe,
  0,
  [_A, _CT, _Def, _I, _NT, _V],
  [0, 0, () => DeviceDefinitionVersion, 0, 0, 0]
);
export var __listOfDevice = list(n0, _lOD, 0, () => Device);
export var CreateDeviceDefinition = op(
  n0,
  _CDD,
  {
    [_h]: ["POST", "/greengrass/definition/devices", 200],
  },
  () => CreateDeviceDefinitionRequest,
  () => CreateDeviceDefinitionResponse
);
export var CreateDeviceDefinitionVersion = op(
  n0,
  _CDDV,
  {
    [_h]: ["POST", "/greengrass/definition/devices/{DeviceDefinitionId}/versions", 200],
  },
  () => CreateDeviceDefinitionVersionRequest,
  () => CreateDeviceDefinitionVersionResponse
);
export var GetDeviceDefinitionVersion = op(
  n0,
  _GDDV,
  {
    [_h]: ["GET", "/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}", 200],
  },
  () => GetDeviceDefinitionVersionRequest,
  () => GetDeviceDefinitionVersionResponse
);
