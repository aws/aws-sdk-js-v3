// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APK,
  _APKR,
  _APKRd,
  _DN,
  _DPK,
  _DPKR,
  _DPKRe,
  _h,
  _hQ,
  _It,
  _KN,
  _LPO,
  _LPOI,
  _LPOR,
  _LPORi,
  _M,
  _MR,
  _mr,
  _NT,
  _nt,
  _Ob,
  _OF,
  _OTN,
  _PI,
  _POL,
  _POUK,
  _V,
  n0,
} from "./schemas_0";
import { stringifiedJson } from "./schemas_8_Profile";

/* eslint no-var: 0 */

export var AddProfileKeyRequest = struct(n0, _APKR, 0, [_PI, _KN, _V, _DN], [0, 0, 64 | 0, [0, 1]]);
export var AddProfileKeyResponse = struct(n0, _APKRd, 0, [_KN, _V], [0, 64 | 0]);
export var DeleteProfileKeyRequest = struct(n0, _DPKR, 0, [_PI, _KN, _V, _DN], [0, 0, 64 | 0, [0, 1]]);
export var DeleteProfileKeyResponse = struct(n0, _DPKRe, 0, [_M], [0]);
export var ListProfileObjectsItem = struct(n0, _LPOI, 0, [_OTN, _POUK, _Ob], [0, 0, [() => stringifiedJson, 0]]);
export var ListProfileObjectsRequest = struct(
  n0,
  _LPOR,
  0,
  [_NT, _MR, _DN, _OTN, _PI, _OF],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
    0,
    0,
    () => ObjectFilter,
  ]
);
export var ListProfileObjectsResponse = struct(n0, _LPORi, 0, [_It, _NT], [[() => ProfileObjectList, 0], 0]);
export var ObjectFilter = struct(n0, _OF, 0, [_KN, _V], [0, 64 | 0]);
export var ProfileObjectList = list(n0, _POL, 0, [() => ListProfileObjectsItem, 0]);
export var requestValueList = 64 | 0;

export var AddProfileKey = op(
  n0,
  _APK,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/keys", 200],
  },
  () => AddProfileKeyRequest,
  () => AddProfileKeyResponse
);
export var DeleteProfileKey = op(
  n0,
  _DPK,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/keys/delete", 200],
  },
  () => DeleteProfileKeyRequest,
  () => DeleteProfileKeyResponse
);
export var ListProfileObjects = op(
  n0,
  _LPO,
  {
    [_h]: ["POST", "/domains/{DomainName}/profiles/objects", 200],
  },
  () => ListProfileObjectsRequest,
  () => ListProfileObjectsResponse
);
