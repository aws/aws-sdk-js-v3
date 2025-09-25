// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _BVA, _BVAI, _bVAI, _BVN, _GRPRM, _GRPRMI, _GRPRMO, _h, _hQ, _Me, _RM, _RPA, _RT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRecoveryPointRestoreMetadataInput = struct(
  n0,
  _GRPRMI,
  0,
  [_BVN, _RPA, _BVAI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _bVAI,
      },
    ],
  ]
);
export var GetRecoveryPointRestoreMetadataOutput = struct(
  n0,
  _GRPRMO,
  0,
  [_BVA, _RPA, _RM, _RT],
  [0, 0, [() => Metadata, 0], 0]
);
export var Metadata = map(n0, _Me, 8, 0, 0);
export var GetRecoveryPointRestoreMetadata = op(
  n0,
  _GRPRM,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata", 200],
  },
  () => GetRecoveryPointRestoreMetadataInput,
  () => GetRecoveryPointRestoreMetadataOutput
);
