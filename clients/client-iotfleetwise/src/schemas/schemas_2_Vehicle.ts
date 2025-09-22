// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _at,
  _aUM,
  _BUV,
  _BUVR,
  _BUVRa,
  _cod,
  _cT,
  _dMA,
  _DST,
  _DSTR,
  _DSTRe,
  _er,
  _GV,
  _GVR,
  _GVRe,
  _ht,
  _i,
  _id,
  _lMT,
  _m,
  _mMA,
  _n,
  _oC,
  _OCSTUS,
  _pe,
  _PSTUS,
  _STA,
  _STAt,
  _sTt,
  _sTTA,
  _sTTR,
  _sTTU,
  _sTUR,
  _STUS,
  _sTUS,
  _TP,
  _u,
  _UV,
  _UVE,
  _uVE,
  _UVR,
  _UVRI,
  _uVRI,
  _UVRIp,
  _uVRIp,
  _UVRp,
  _v,
  _va,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchUpdateVehicleRequest = struct(n0, _BUVR, 0, [_v], [() => updateVehicleRequestItems]);
export var BatchUpdateVehicleResponse = struct(
  n0,
  _BUVRa,
  0,
  [_v, _er],
  [() => updateVehicleResponseItems, () => updateVehicleErrors]
);
export var DeleteStateTemplateRequest = struct(n0, _DSTR, 0, [_id], [[0, 1]]);
export var DeleteStateTemplateResponse = struct(n0, _DSTRe, 0, [_n, _a, _i], [0, 0, 0]);
export var GetVehicleRequest = struct(n0, _GVR, 0, [_vN], [[0, 1]]);
export var GetVehicleResponse = struct(
  n0,
  _GVRe,
  0,
  [_vN, _a, _mMA, _dMA, _at, _sTt, _cT, _lMT],
  [0, 0, 0, 0, 128 | 0, () => StateTemplateAssociations, 4, 4]
);
export var OnChangeStateTemplateUpdateStrategy = struct(n0, _OCSTUS, 0, [], []);
export var PeriodicStateTemplateUpdateStrategy = struct(n0, _PSTUS, 0, [_sTUR], [() => TimePeriod]);
export var StateTemplateAssociation = struct(n0, _STA, 0, [_id, _sTUS], [0, () => StateTemplateUpdateStrategy]);
export var TimePeriod = struct(n0, _TP, 0, [_u, _va], [0, 1]);
export var UpdateVehicleError = struct(n0, _UVE, 0, [_vN, _cod, _m], [0, 1, 0]);
export var UpdateVehicleRequest = struct(
  n0,
  _UVR,
  0,
  [_vN, _mMA, _dMA, _at, _aUM, _sTTA, _sTTR, _sTTU],
  [[0, 1], 0, 0, 128 | 0, 0, () => StateTemplateAssociations, 64 | 0, () => StateTemplateAssociations]
);
export var UpdateVehicleRequestItem = struct(
  n0,
  _UVRI,
  0,
  [_vN, _mMA, _dMA, _at, _aUM, _sTTA, _sTTR, _sTTU],
  [0, 0, 0, 128 | 0, 0, () => StateTemplateAssociations, 64 | 0, () => StateTemplateAssociations]
);
export var UpdateVehicleResponse = struct(n0, _UVRp, 0, [_vN, _a], [0, 0]);
export var UpdateVehicleResponseItem = struct(n0, _UVRIp, 0, [_vN, _a], [0, 0]);
export var StateTemplateAssociationIdentifiers = 64 | 0;

export var StateTemplateAssociations = list(n0, _STAt, 0, () => StateTemplateAssociation);
export var updateVehicleErrors = list(n0, _uVE, 0, () => UpdateVehicleError);
export var updateVehicleRequestItems = list(n0, _uVRI, 0, () => UpdateVehicleRequestItem);
export var updateVehicleResponseItems = list(n0, _uVRIp, 0, () => UpdateVehicleResponseItem);
export var StateTemplateUpdateStrategy = uni(
  n0,
  _STUS,
  0,
  [_pe, _oC],
  [() => PeriodicStateTemplateUpdateStrategy, () => OnChangeStateTemplateUpdateStrategy]
);
export var BatchUpdateVehicle = op(
  n0,
  _BUV,
  {
    [_ht]: ["PUT", "/vehicles", 200],
  },
  () => BatchUpdateVehicleRequest,
  () => BatchUpdateVehicleResponse
);
export var DeleteStateTemplate = op(
  n0,
  _DST,
  {
    [_ht]: ["DELETE", "/state-templates/{identifier}", 200],
  },
  () => DeleteStateTemplateRequest,
  () => DeleteStateTemplateResponse
);
export var GetVehicle = op(
  n0,
  _GV,
  {
    [_ht]: ["GET", "/vehicles/{vehicleName}", 200],
  },
  () => GetVehicleRequest,
  () => GetVehicleResponse
);
export var UpdateVehicle = op(
  n0,
  _UV,
  {
    [_ht]: ["PATCH", "/vehicles/{vehicleName}", 204],
  },
  () => UpdateVehicleRequest,
  () => UpdateVehicleResponse
);
