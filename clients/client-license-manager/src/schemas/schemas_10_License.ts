// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  NoEntitlementsAllowedException as __NoEntitlementsAllowedException,
  RedirectException as __RedirectException,
  UnsupportedDigitalSignatureMethodException as __UnsupportedDigitalSignatureMethodException,
} from "../models/index";
import {
  _B,
  _c,
  _CLh,
  _CLR,
  _CLRh,
  _CT,
  _CTh,
  _DD,
  _DL,
  _DLR,
  _DLRe,
  _DT,
  _DTR,
  _DTRe,
  _E,
  _e,
  _EA,
  _ED,
  _EDL,
  _Ex,
  _hE,
  _hH,
  _IA,
  _KF,
  _LA,
  _LCT,
  _Lo,
  _M,
  _N,
  _NEAE,
  _NI,
  _PSKU,
  _RE,
  _S,
  _ST,
  _SV,
  _TI,
  _U,
  _UDSME,
  _Val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CheckoutLicenseRequest = struct(
  n0,
  _CLR,
  0,
  [_PSKU, _CTh, _KF, _E, _CT, _B, _NI],
  [0, 0, 0, () => EntitlementDataList, 0, 0, 0]
);
export var CheckoutLicenseResponse = struct(
  n0,
  _CLRh,
  0,
  [_CTh, _LCT, _EA, _ST, _NI, _IA, _Ex, _LA],
  [0, 0, () => EntitlementDataList, 0, 0, 0, 0, 0]
);
export var DeleteLicenseRequest = struct(n0, _DLR, 0, [_LA, _SV], [0, 0]);
export var DeleteLicenseResponse = struct(n0, _DLRe, 0, [_S, _DD], [0, 0]);
export var DeleteTokenRequest = struct(n0, _DTR, 0, [_TI], [0]);
export var DeleteTokenResponse = struct(n0, _DTRe, 0, [], []);
export var EntitlementData = struct(n0, _ED, 0, [_N, _Val, _U], [0, 0, 0]);
export var NoEntitlementsAllowedException = error(
  n0,
  _NEAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NoEntitlementsAllowedException
);
export var RedirectException = error(
  n0,
  _RE,
  {
    [_e]: _c,
    [_hE]: 308,
  },
  [_Lo, _M],
  [
    [
      0,
      {
        [_hH]: _Lo,
      },
    ],
    0,
  ],

  __RedirectException
);
export var UnsupportedDigitalSignatureMethodException = error(
  n0,
  _UDSME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __UnsupportedDigitalSignatureMethodException
);
export var EntitlementDataList = list(n0, _EDL, 0, () => EntitlementData);
export var CheckoutLicense = op(
  n0,
  _CLh,
  0,
  () => CheckoutLicenseRequest,
  () => CheckoutLicenseResponse
);
export var DeleteLicense = op(
  n0,
  _DL,
  0,
  () => DeleteLicenseRequest,
  () => DeleteLicenseResponse
);
export var DeleteToken = op(
  n0,
  _DT,
  0,
  () => DeleteTokenRequest,
  () => DeleteTokenResponse
);
