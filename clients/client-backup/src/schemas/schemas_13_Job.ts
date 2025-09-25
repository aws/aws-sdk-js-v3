// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BAI,
  _BBPI,
  _BBVN,
  _BCA,
  _BCAy,
  _BCB,
  _BCBy,
  _BDVA,
  _BJ,
  _BJa,
  _BJI,
  _BJL,
  _BMC,
  _BO,
  _BPA,
  _bPI,
  _BPIa,
  _BPJI,
  _BPRPA,
  _BPV,
  _BRA,
  _BRIa,
  _BRT,
  _BSB,
  _BSIB,
  _BSy,
  _BSyh,
  _BT,
  _BTa,
  _BVA,
  _BVAI,
  _bVAI,
  _BVL,
  _BVLM,
  _BVN,
  _bVN,
  _BVTy,
  _cA,
  _cAo,
  _CB,
  _cB,
  _cBo,
  _CD,
  _CDo,
  _CJ,
  _CJI,
  _CJIS,
  _CJL,
  _CJo,
  _CL,
  _CMI,
  _CRI,
  _CSTTRR,
  _CWMo,
  _DBJ,
  _DBJI,
  _DBJO,
  _DBVA,
  _DCJ,
  _DCJI,
  _DCJO,
  _DRPA,
  _DRPes,
  _DRPIes,
  _DRPO,
  _dVA,
  _ECD,
  _EKA,
  _h,
  _hQ,
  _I,
  _ID,
  _IE,
  _IP,
  _IRA,
  _IS,
  _ISM,
  _IT,
  _L,
  _LBJ,
  _LBJI,
  _LBJO,
  _LBV,
  _LBVI,
  _LBVO,
  _LCJ,
  _LCJI,
  _LCJO,
  _LD,
  _Lo,
  _LRPBBV,
  _LRPBBVI,
  _LRPBBVO,
  _LRPBR,
  _LRPBRI,
  _LRPBRO,
  _LRT,
  _MBAWSBO,
  _mBAWSBO,
  _MC,
  _mC,
  _Me,
  _MR,
  _mR,
  _MRD,
  _MRDa,
  _NOCJ,
  _NORP,
  _NT,
  _nT,
  _PD,
  _PJI,
  _pJI,
  _PRPA,
  _pRPA,
  _RA,
  _rA,
  _RJIe,
  _RN,
  _RPA,
  _RPBBV,
  _RPBBVL,
  _RPBR,
  _RPBRL,
  _RPC,
  _RPe,
  _RPT,
  _RT,
  _rT,
  _S,
  _SB,
  _SBJ,
  _SBJI,
  _SBJO,
  _SBVA,
  _SBVN,
  _SC,
  _SCJ,
  _SCJI,
  _SCJO,
  _sh,
  _SM,
  _SRJIt,
  _SRJOt,
  _SRJt,
  _SRPA,
  _St,
  _st,
  _SWM,
  _VS,
  _VT,
  _vT,
  n0,
} from "./schemas_0";
import { Metadata } from "./schemas_12_Restore";
import { CalculatedLifecycle, Lifecycle } from "./schemas_24_Backup";
import { Tags } from "./schemas_41_Backup";

/* eslint no-var: 0 */

export var BackupJob = struct(
  n0,
  _BJ,
  0,
  [
    _AI,
    _BJI,
    _BVN,
    _BVA,
    _RPA,
    _RA,
    _CD,
    _CDo,
    _S,
    _SM,
    _PD,
    _BSIB,
    _IRA,
    _CB,
    _ECD,
    _SB,
    _RT,
    _BT,
    _BO,
    _BTa,
    _PJI,
    _IP,
    _RN,
    _ID,
    _MC,
  ],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 1, 0, () => RecoveryPointCreator, 4, 4, 0, 1, 128 | 0, 0, 0, 2, 0, 4, 0]
);
export var BackupVaultListMember = struct(
  n0,
  _BVLM,
  0,
  [_BVN, _BVA, _VT, _VS, _CD, _EKA, _CRI, _NORP, _Lo, _MRD, _MRDa, _LD],
  [0, 0, 0, 0, 4, 0, 0, 1, 2, 1, 1, 4]
);
export var CopyJob = struct(
  n0,
  _CJ,
  0,
  [
    _AI,
    _CJI,
    _SBVA,
    _SRPA,
    _DBVA,
    _DRPA,
    _RA,
    _CD,
    _CDo,
    _S,
    _SM,
    _BSIB,
    _IRA,
    _CB,
    _RT,
    _PJI,
    _IP,
    _CMI,
    _NOCJ,
    _CJIS,
    _RN,
    _MC,
  ],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 1, 0, () => RecoveryPointCreator, 0, 0, 2, 0, 1, 128 | 1, 0, 0]
);
export var DescribeBackupJobInput = struct(n0, _DBJI, 0, [_BJI], [[0, 1]]);
export var DescribeBackupJobOutput = struct(
  n0,
  _DBJO,
  0,
  [
    _AI,
    _BJI,
    _BVN,
    _BVA,
    _RPA,
    _RA,
    _CD,
    _CDo,
    _S,
    _SM,
    _PD,
    _BSIB,
    _IRA,
    _CB,
    _RT,
    _BT,
    _ECD,
    _SB,
    _BO,
    _BTa,
    _PJI,
    _IP,
    _NOCJ,
    _CJIS,
    _RN,
    _ID,
    _MC,
  ],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 1, 0, () => RecoveryPointCreator, 0, 1, 4, 4, 128 | 0, 0, 0, 2, 1, 128 | 1, 0, 4, 0]
);
export var DescribeCopyJobInput = struct(n0, _DCJI, 0, [_CJI], [[0, 1]]);
export var DescribeCopyJobOutput = struct(n0, _DCJO, 0, [_CJ], [() => CopyJob]);
export var DescribeRecoveryPointInput = struct(
  n0,
  _DRPIes,
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
export var DescribeRecoveryPointOutput = struct(
  n0,
  _DRPO,
  0,
  [
    _RPA,
    _BVN,
    _BVA,
    _SBVA,
    _RA,
    _RT,
    _CB,
    _IRA,
    _St,
    _SM,
    _CD,
    _ID,
    _CDo,
    _BSIB,
    _CL,
    _L,
    _EKA,
    _IE,
    _SC,
    _LRT,
    _PRPA,
    _CMI,
    _IP,
    _RN,
    _VT,
    _IS,
    _ISM,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => RecoveryPointCreator,
    0,
    0,
    0,
    4,
    4,
    4,
    1,
    () => CalculatedLifecycle,
    () => Lifecycle,
    0,
    2,
    0,
    4,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
  ]
);
export var ListBackupJobsInput = struct(
  n0,
  _LBJI,
  0,
  [_NT, _MR, _BRA, _BSy, _BBVN, _BCB, _BCA, _BRT, _BAI, _BCAy, _BCBy, _BPJI, _BMC],
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
        [_hQ]: _rA,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _bVN,
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
        [_hQ]: _aI,
      },
    ],
    [
      4,
      {
        [_hQ]: _cAo,
      },
    ],
    [
      4,
      {
        [_hQ]: _cBo,
      },
    ],
    [
      0,
      {
        [_hQ]: _pJI,
      },
    ],
    [
      0,
      {
        [_hQ]: _mC,
      },
    ],
  ]
);
export var ListBackupJobsOutput = struct(n0, _LBJO, 0, [_BJa, _NT], [() => BackupJobsList, 0]);
export var ListBackupVaultsInput = struct(
  n0,
  _LBVI,
  0,
  [_BVTy, _BSyh, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _vT,
      },
    ],
    [
      2,
      {
        [_hQ]: _sh,
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
export var ListBackupVaultsOutput = struct(n0, _LBVO, 0, [_BVL, _NT], [() => BackupVaultList, 0]);
export var ListCopyJobsInput = struct(
  n0,
  _LCJI,
  0,
  [_NT, _MR, _BRA, _BSy, _BCB, _BCA, _BRT, _BDVA, _BAI, _BCBy, _BCAy, _BPJI, _BMC],
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
        [_hQ]: _rA,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
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
        [_hQ]: _dVA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
    [
      4,
      {
        [_hQ]: _cBo,
      },
    ],
    [
      4,
      {
        [_hQ]: _cAo,
      },
    ],
    [
      0,
      {
        [_hQ]: _pJI,
      },
    ],
    [
      0,
      {
        [_hQ]: _mC,
      },
    ],
  ]
);
export var ListCopyJobsOutput = struct(n0, _LCJO, 0, [_CJo, _NT], [() => CopyJobsList, 0]);
export var ListRecoveryPointsByBackupVaultInput = struct(
  n0,
  _LRPBBVI,
  0,
  [_BVN, _BVAI, _NT, _MR, _BRA, _BRT, _BBPI, _BCB, _BCA, _BPRPA],
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
    [
      0,
      {
        [_hQ]: _rA,
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
        [_hQ]: _bPI,
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
        [_hQ]: _pRPA,
      },
    ],
  ]
);
export var ListRecoveryPointsByBackupVaultOutput = struct(
  n0,
  _LRPBBVO,
  0,
  [_NT, _RPe],
  [0, () => RecoveryPointByBackupVaultList]
);
export var ListRecoveryPointsByResourceInput = struct(
  n0,
  _LRPBRI,
  0,
  [_RA, _NT, _MR, _MBAWSBO],
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
    [
      2,
      {
        [_hQ]: _mBAWSBO,
      },
    ],
  ]
);
export var ListRecoveryPointsByResourceOutput = struct(
  n0,
  _LRPBRO,
  0,
  [_NT, _RPe],
  [0, () => RecoveryPointByResourceList]
);
export var RecoveryPointByBackupVault = struct(
  n0,
  _RPBBV,
  0,
  [
    _RPA,
    _BVN,
    _BVA,
    _SBVA,
    _RA,
    _RT,
    _CB,
    _IRA,
    _St,
    _SM,
    _CD,
    _ID,
    _CDo,
    _BSIB,
    _CL,
    _L,
    _EKA,
    _IE,
    _LRT,
    _PRPA,
    _CMI,
    _IP,
    _RN,
    _VT,
    _IS,
    _ISM,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => RecoveryPointCreator,
    0,
    0,
    0,
    4,
    4,
    4,
    1,
    () => CalculatedLifecycle,
    () => Lifecycle,
    0,
    2,
    4,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
  ]
);
export var RecoveryPointByResource = struct(
  n0,
  _RPBR,
  0,
  [_RPA, _CD, _St, _SM, _EKA, _BSB, _BVN, _IP, _PRPA, _RN, _VT, _IS, _ISM],
  [0, 4, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0]
);
export var RecoveryPointCreator = struct(n0, _RPC, 0, [_BPIa, _BPA, _BPV, _BRIa], [0, 0, 0, 0]);
export var StartBackupJobInput = struct(
  n0,
  _SBJI,
  0,
  [_BVN, _RA, _IRA, _IT, _SWM, _CWMo, _L, _RPT, _BO, _I],
  [0, 0, 0, [0, 4], 1, 1, () => Lifecycle, [() => Tags, 0], 128 | 0, 0]
);
export var StartBackupJobOutput = struct(n0, _SBJO, 0, [_BJI, _RPA, _CD, _IP], [0, 0, 4, 2]);
export var StartCopyJobInput = struct(
  n0,
  _SCJI,
  0,
  [_RPA, _SBVN, _DBVA, _IRA, _IT, _L],
  [0, 0, 0, 0, [0, 4], () => Lifecycle]
);
export var StartCopyJobOutput = struct(n0, _SCJO, 0, [_CJI, _CD, _IP], [0, 4, 2]);
export var StartRestoreJobInput = struct(
  n0,
  _SRJIt,
  0,
  [_RPA, _Me, _IRA, _IT, _RT, _CSTTRR],
  [0, [() => Metadata, 0], 0, [0, 4], 0, 2]
);
export var StartRestoreJobOutput = struct(n0, _SRJOt, 0, [_RJIe], [0]);
export var BackupJobsList = list(n0, _BJL, 0, () => BackupJob);
export var BackupVaultList = list(n0, _BVL, 0, () => BackupVaultListMember);
export var CopyJobsList = list(n0, _CJL, 0, () => CopyJob);
export var RecoveryPointByBackupVaultList = list(n0, _RPBBVL, 0, () => RecoveryPointByBackupVault);
export var RecoveryPointByResourceList = list(n0, _RPBRL, 0, () => RecoveryPointByResource);
export var BackupJobChildJobsInState = 128 | 1;

export var CopyJobChildJobsInState = 128 | 1;

export var DescribeBackupJob = op(
  n0,
  _DBJ,
  {
    [_h]: ["GET", "/backup-jobs/{BackupJobId}", 200],
  },
  () => DescribeBackupJobInput,
  () => DescribeBackupJobOutput
);
export var DescribeCopyJob = op(
  n0,
  _DCJ,
  {
    [_h]: ["GET", "/copy-jobs/{CopyJobId}", 200],
  },
  () => DescribeCopyJobInput,
  () => DescribeCopyJobOutput
);
export var DescribeRecoveryPoint = op(
  n0,
  _DRPes,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}", 200],
  },
  () => DescribeRecoveryPointInput,
  () => DescribeRecoveryPointOutput
);
export var ListBackupJobs = op(
  n0,
  _LBJ,
  {
    [_h]: ["GET", "/backup-jobs", 200],
  },
  () => ListBackupJobsInput,
  () => ListBackupJobsOutput
);
export var ListBackupVaults = op(
  n0,
  _LBV,
  {
    [_h]: ["GET", "/backup-vaults", 200],
  },
  () => ListBackupVaultsInput,
  () => ListBackupVaultsOutput
);
export var ListCopyJobs = op(
  n0,
  _LCJ,
  {
    [_h]: ["GET", "/copy-jobs", 200],
  },
  () => ListCopyJobsInput,
  () => ListCopyJobsOutput
);
export var ListRecoveryPointsByBackupVault = op(
  n0,
  _LRPBBV,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/recovery-points", 200],
  },
  () => ListRecoveryPointsByBackupVaultInput,
  () => ListRecoveryPointsByBackupVaultOutput
);
export var ListRecoveryPointsByResource = op(
  n0,
  _LRPBR,
  {
    [_h]: ["GET", "/resources/{ResourceArn}/recovery-points", 200],
  },
  () => ListRecoveryPointsByResourceInput,
  () => ListRecoveryPointsByResourceOutput
);
export var StartBackupJob = op(
  n0,
  _SBJ,
  {
    [_h]: ["PUT", "/backup-jobs", 200],
  },
  () => StartBackupJobInput,
  () => StartBackupJobOutput
);
export var StartCopyJob = op(
  n0,
  _SCJ,
  {
    [_h]: ["PUT", "/copy-jobs", 200],
  },
  () => StartCopyJobInput,
  () => StartCopyJobOutput
);
export var StartRestoreJob = op(
  n0,
  _SRJt,
  {
    [_h]: ["PUT", "/restore-jobs", 200],
  },
  () => StartRestoreJobInput,
  () => StartRestoreJobOutput
);
