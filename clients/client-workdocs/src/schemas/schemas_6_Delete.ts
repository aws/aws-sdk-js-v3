// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _ARP,
  _ARPR,
  _ARPRd,
  _AT,
  _DA,
  _dA,
  _DCM,
  _DCMR,
  _DCMRe,
  _EM,
  _h,
  _hH,
  _hQ,
  _Id,
  _IPI,
  _K,
  _k,
  _MT,
  _NO,
  _PIr,
  _Pr,
  _R,
  _RI,
  _S,
  _SE,
  _SIh,
  _SM,
  _SP,
  _SPL,
  _SR,
  _SRh,
  _SRL,
  _T,
  _VI,
  _vI,
  AuthenticationHeaderType,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MessageType = sim(n0, _MT, 0, 8);
export var AddResourcePermissionsRequest = struct(
  n0,
  _ARPR,
  0,
  [_AT, _RI, _Pr, _NO],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    () => SharePrincipalList,
    [() => NotificationOptions, 0],
  ]
);
export var AddResourcePermissionsResponse = struct(n0, _ARPRd, 0, [_SR], [[() => ShareResultsList, 0]]);
export var DeleteCustomMetadataRequest = struct(
  n0,
  _DCMR,
  0,
  [_AT, _RI, _VI, _K, _DA],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _k,
      },
    ],
    [
      2,
      {
        [_hQ]: _dA,
      },
    ],
  ]
);
export var DeleteCustomMetadataResponse = struct(n0, _DCMRe, 0, [], []);
export var NotificationOptions = struct(n0, _NO, 0, [_SE, _EM], [2, [() => MessageType, 0]]);
export var SharePrincipal = struct(n0, _SP, 0, [_Id, _T, _R], [0, 0, 0]);
export var ShareResult = struct(n0, _SRh, 0, [_PIr, _IPI, _R, _S, _SIh, _SM], [0, 0, 0, 0, 0, [() => MessageType, 0]]);
export var CustomMetadataKeyList = 64 | 0;

export var SharePrincipalList = list(n0, _SPL, 0, () => SharePrincipal);
export var ShareResultsList = list(n0, _SRL, 0, [() => ShareResult, 0]);
export var AddResourcePermissions = op(
  n0,
  _ARP,
  {
    [_h]: ["POST", "/api/v1/resources/{ResourceId}/permissions", 201],
  },
  () => AddResourcePermissionsRequest,
  () => AddResourcePermissionsResponse
);
export var DeleteCustomMetadata = op(
  n0,
  _DCM,
  {
    [_h]: ["DELETE", "/api/v1/resources/{ResourceId}/customMetadata", 200],
  },
  () => DeleteCustomMetadataRequest,
  () => DeleteCustomMetadataResponse
);
