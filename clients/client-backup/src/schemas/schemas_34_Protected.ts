// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BVAI,
  _bVAI,
  _BVN,
  _h,
  _hQ,
  _LBT,
  _LBVA,
  _LPR,
  _LPRBBV,
  _LPRBBVI,
  _LPRBBVO,
  _LPRI,
  _LPRO,
  _LRPA,
  _MR,
  _mR,
  _NT,
  _nT,
  _PR,
  _PRL,
  _RA,
  _Res,
  _RN,
  _RT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProtectedResourcesByBackupVaultInput = struct(
  n0,
  _LPRBBVI,
  0,
  [_BVN, _BVAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _bVAI,
      },
    ],
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
export var ListProtectedResourcesByBackupVaultOutput = struct(
  n0,
  _LPRBBVO,
  0,
  [_Res, _NT],
  [() => ProtectedResourcesList, 0]
);
export var ListProtectedResourcesInput = struct(
  n0,
  _LPRI,
  0,
  [_NT, _MR],
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
  ]
);
export var ListProtectedResourcesOutput = struct(n0, _LPRO, 0, [_Res, _NT], [() => ProtectedResourcesList, 0]);
export var ProtectedResource = struct(n0, _PR, 0, [_RA, _RT, _LBT, _RN, _LBVA, _LRPA], [0, 0, 4, 0, 0, 0]);
export var ProtectedResourcesList = list(n0, _PRL, 0, () => ProtectedResource);
export var ListProtectedResources = op(
  n0,
  _LPR,
  {
    [_h]: ["GET", "/resources", 200],
  },
  () => ListProtectedResourcesInput,
  () => ListProtectedResourcesOutput
);
export var ListProtectedResourcesByBackupVault = op(
  n0,
  _LPRBBV,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/resources", 200],
  },
  () => ListProtectedResourcesByBackupVaultInput,
  () => ListProtectedResourcesByBackupVaultOutput
);
