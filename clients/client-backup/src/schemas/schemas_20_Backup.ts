// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BVA,
  _BVAI,
  _bVAI,
  _BVN,
  _CD,
  _CRI,
  _DBVe,
  _DBVIe,
  _DBVO,
  _ED,
  _EKA,
  _h,
  _hQ,
  _ID,
  _LD,
  _LMATU,
  _Lo,
  _MATA,
  _MRD,
  _MRDa,
  _MSA,
  _NORP,
  _SBVA,
  _SM,
  _St,
  _VS,
  _VT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeBackupVaultInput = struct(
  n0,
  _DBVIe,
  0,
  [_BVN, _BVAI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _bVAI,
      },
    ],
  ]
);
export var DescribeBackupVaultOutput = struct(
  n0,
  _DBVO,
  0,
  [_BVN, _BVA, _VT, _VS, _EKA, _CD, _CRI, _NORP, _Lo, _MRD, _MRDa, _LD, _SBVA, _MATA, _MSA, _LMATU],
  [0, 0, 0, 0, 0, 4, 0, 1, 2, 1, 1, 4, 0, 0, 0, () => LatestMpaApprovalTeamUpdate]
);
export var LatestMpaApprovalTeamUpdate = struct(n0, _LMATU, 0, [_MSA, _St, _SM, _ID, _ED], [0, 0, 0, 4, 4]);
export var DescribeBackupVault = op(
  n0,
  _DBVe,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}", 200],
  },
  () => DescribeBackupVaultInput,
  () => DescribeBackupVaultOutput
);
