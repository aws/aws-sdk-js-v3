// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Car,
  _CCI,
  _CCN,
  _Ci,
  _Cou,
  _Coun,
  _CPNE,
  _CPNN,
  _h,
  _ICC,
  _NVR,
  _NVRu,
  _OCCI,
  _OPN,
  _PN,
  _PNV,
  _PNVR,
  _PNVRh,
  _PT,
  _PTC,
  _Ti,
  _ZC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NumberValidateRequest = struct(n0, _NVR, 0, [_ICC, _PN], [0, 0]);
export var NumberValidateResponse = struct(
  n0,
  _NVRu,
  0,
  [_Car, _Ci, _CPNE, _CPNN, _Cou, _CCI, _CCN, _Coun, _OCCI, _OPN, _PT, _PTC, _Ti, _ZC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
);
export var PhoneNumberValidateRequest = struct(n0, _PNVR, 0, [_NVR], [[() => NumberValidateRequest, 16]]);
export var PhoneNumberValidateResponse = struct(n0, _PNVRh, 0, [_NVRu], [[() => NumberValidateResponse, 16]]);
export var PhoneNumberValidate = op(
  n0,
  _PNV,
  {
    [_h]: ["POST", "/v1/phone/number/validate", 200],
  },
  () => PhoneNumberValidateRequest,
  () => PhoneNumberValidateResponse
);
