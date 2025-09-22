// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BCD,
  _BVA,
  _BVN,
  _cA,
  _CAr,
  _cB,
  _CBr,
  _GRPID,
  _GRPIDI,
  _GRPIDO,
  _h,
  _hQ,
  _I,
  _ICD,
  _ICDn,
  _IDD,
  _IRA,
  _IRP,
  _IRPL,
  _IRPn,
  _IS,
  _iS,
  _ISM,
  _LIRP,
  _LIRPI,
  _LIRPO,
  _MR,
  _mR,
  _NT,
  _nT,
  _RPA,
  _RT,
  _rT,
  _SRA,
  _sRA,
  _TII,
  _URPIS,
  _URPISI,
  _URPISO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRecoveryPointIndexDetailsInput = struct(
  n0,
  _GRPIDI,
  0,
  [_BVN, _RPA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRecoveryPointIndexDetailsOutput = struct(
  n0,
  _GRPIDO,
  0,
  [_RPA, _BVA, _SRA, _ICD, _IDD, _ICDn, _IS, _ISM, _TII],
  [0, 0, 0, 4, 4, 4, 0, 0, 1]
);
export var IndexedRecoveryPoint = struct(
  n0,
  _IRP,
  0,
  [_RPA, _SRA, _IRA, _BCD, _RT, _ICD, _IS, _ISM, _BVA],
  [0, 0, 0, 4, 0, 4, 0, 0, 0]
);
export var ListIndexedRecoveryPointsInput = struct(
  n0,
  _LIRPI,
  0,
  [_NT, _MR, _SRA, _CBr, _CAr, _RT, _IS],
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
      0,
      {
        [_hQ]: _sRA,
      },
    ],
    [
      4,
      {
        [_hQ]: _cB,
      },
    ],
    [
      4,
      {
        [_hQ]: _cA,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _iS,
      },
    ],
  ]
);
export var ListIndexedRecoveryPointsOutput = struct(n0, _LIRPO, 0, [_IRPn, _NT], [() => IndexedRecoveryPointList, 0]);
export var UpdateRecoveryPointIndexSettingsInput = struct(
  n0,
  _URPISI,
  0,
  [_BVN, _RPA, _IRA, _I],
  [[0, 1], [0, 1], 0, 0]
);
export var UpdateRecoveryPointIndexSettingsOutput = struct(n0, _URPISO, 0, [_BVN, _RPA, _IS, _I], [0, 0, 0, 0]);
export var IndexedRecoveryPointList = list(n0, _IRPL, 0, () => IndexedRecoveryPoint);
export var GetRecoveryPointIndexDetails = op(
  n0,
  _GRPID,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index", 200],
  },
  () => GetRecoveryPointIndexDetailsInput,
  () => GetRecoveryPointIndexDetailsOutput
);
export var ListIndexedRecoveryPoints = op(
  n0,
  _LIRP,
  {
    [_h]: ["GET", "/indexes/recovery-point", 200],
  },
  () => ListIndexedRecoveryPointsInput,
  () => ListIndexedRecoveryPointsOutput
);
export var UpdateRecoveryPointIndexSettings = op(
  n0,
  _URPIS,
  {
    [_h]: ["POST", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index", 200],
  },
  () => UpdateRecoveryPointIndexSettingsInput,
  () => UpdateRecoveryPointIndexSettingsOutput
);
