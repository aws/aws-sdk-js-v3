// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _ASP,
  _ASPR,
  _ASPRt,
  _DSPet,
  _DSPRet,
  _DSPReta,
  _h,
  _hQ,
  _LTFSP,
  _LTFSPR,
  _LTFSPRi,
  _mR,
  _nT,
  _sPN,
  _SPT,
  _sPT,
  _sPTA,
  _SPTe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachSecurityProfileRequest = struct(
  n0,
  _ASPR,
  0,
  [_sPN, _sPTA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sPTA,
      },
    ],
  ]
);
export var AttachSecurityProfileResponse = struct(n0, _ASPRt, 0, [], []);
export var DetachSecurityProfileRequest = struct(
  n0,
  _DSPRet,
  0,
  [_sPN, _sPTA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sPTA,
      },
    ],
  ]
);
export var DetachSecurityProfileResponse = struct(n0, _DSPReta, 0, [], []);
export var ListTargetsForSecurityProfileRequest = struct(
  n0,
  _LTFSPR,
  0,
  [_sPN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListTargetsForSecurityProfileResponse = struct(
  n0,
  _LTFSPRi,
  0,
  [_sPT, _nT],
  [() => SecurityProfileTargets, 0]
);
export var SecurityProfileTarget = struct(n0, _SPT, 0, [_ar], [0]);
export var SecurityProfileTargets = list(n0, _SPTe, 0, () => SecurityProfileTarget);
export var AttachSecurityProfile = op(
  n0,
  _ASP,
  {
    [_h]: ["PUT", "/security-profiles/{securityProfileName}/targets", 200],
  },
  () => AttachSecurityProfileRequest,
  () => AttachSecurityProfileResponse
);
export var DetachSecurityProfile = op(
  n0,
  _DSPet,
  {
    [_h]: ["DELETE", "/security-profiles/{securityProfileName}/targets", 200],
  },
  () => DetachSecurityProfileRequest,
  () => DetachSecurityProfileResponse
);
export var ListTargetsForSecurityProfile = op(
  n0,
  _LTFSP,
  {
    [_h]: ["GET", "/security-profiles/{securityProfileName}/targets", 200],
  },
  () => ListTargetsForSecurityProfileRequest,
  () => ListTargetsForSecurityProfileResponse
);
