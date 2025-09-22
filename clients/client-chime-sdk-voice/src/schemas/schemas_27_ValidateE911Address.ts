// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ad,
  _AEI,
  _CA,
  _CALa,
  _Ci,
  _ci,
  _Co,
  _co,
  _h,
  _PC,
  _pC,
  _pCP,
  _pD,
  _pDr,
  _s,
  _SI,
  _sI,
  _SN,
  _sN,
  _sNt,
  _sS,
  _St,
  _VEA,
  _VEAR,
  _VEARa,
  _VR,
  _xN,
  n0,
} from "./schemas_0";
import { SensitiveNonEmptyString } from "./schemas_30_Phone";

/* eslint no-var: 0 */

export var Address = struct(
  n0,
  _Ad,
  0,
  [_sN, _sS, _pD, _pDr, _sNt, _ci, _s, _pC, _pCP, _co],
  [
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
  ]
);
export var CandidateAddress = struct(
  n0,
  _CA,
  0,
  [_sI, _sNt, _ci, _s, _pC, _pCP, _co],
  [
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
  ]
);
export var ValidateE911AddressRequest = struct(
  n0,
  _VEAR,
  0,
  [_AAI, _SN, _SI, _Ci, _St, _Co, _PC],
  [
    0,
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
    [() => SensitiveNonEmptyString, 0],
  ]
);
export var ValidateE911AddressResponse = struct(
  n0,
  _VEARa,
  0,
  [_VR, _AEI, _Ad, _CALa],
  [1, 0, [() => Address, 0], [() => CandidateAddressList, 0]]
);
export var CandidateAddressList = list(n0, _CALa, 0, [
  () => CandidateAddress,
  {
    [_xN]: _CA,
  },
]);
export var ValidateE911Address = op(
  n0,
  _VEA,
  {
    [_h]: ["POST", "/emergency-calling/address", 202],
  },
  () => ValidateE911AddressRequest,
  () => ValidateE911AddressResponse
);
