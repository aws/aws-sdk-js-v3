// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _h,
  _hQ,
  _LSPFT,
  _LSPFTR,
  _LSPFTRi,
  _mR,
  _n,
  _nT,
  _recu,
  _SPI,
  _sPIe,
  _sPTA,
  _SPTM,
  _sPTM,
  _SPTMe,
  _tar,
  n0,
} from "./schemas_0";
import { SecurityProfileTarget } from "./schemas_30_Security";

/* eslint no-var: 0 */

export var ListSecurityProfilesForTargetRequest = struct(
  n0,
  _LSPFTR,
  0,
  [_nT, _mR, _recu, _sPTA],
  [
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
    [
      2,
      {
        [_hQ]: _recu,
      },
    ],
    [
      0,
      {
        [_hQ]: _sPTA,
      },
    ],
  ]
);
export var ListSecurityProfilesForTargetResponse = struct(
  n0,
  _LSPFTRi,
  0,
  [_sPTM, _nT],
  [() => SecurityProfileTargetMappings, 0]
);
export var SecurityProfileIdentifier = struct(n0, _SPI, 0, [_n, _ar], [0, 0]);
export var SecurityProfileTargetMapping = struct(
  n0,
  _SPTM,
  0,
  [_sPIe, _tar],
  [() => SecurityProfileIdentifier, () => SecurityProfileTarget]
);
export var SecurityProfileTargetMappings = list(n0, _SPTMe, 0, () => SecurityProfileTargetMapping);
export var ListSecurityProfilesForTarget = op(
  n0,
  _LSPFT,
  {
    [_h]: ["GET", "/security-profiles-for-target", 200],
  },
  () => ListSecurityProfilesForTargetRequest,
  () => ListSecurityProfilesForTargetResponse
);
