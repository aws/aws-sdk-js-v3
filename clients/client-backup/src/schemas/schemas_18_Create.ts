// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { AlreadyExistsException as __AlreadyExistsException } from "../models/index";
import {
  _A,
  _AEE,
  _BPIa,
  _BS,
  _BVA,
  _BVN,
  _BVT,
  _C,
  _c,
  _CBS,
  _CBSI,
  _CBSO,
  _CBV,
  _CBVI,
  _CBVO,
  _CD,
  _CF,
  _CFI,
  _CFO,
  _CLAGBV,
  _CLAGBVI,
  _CLAGBVO,
  _Co,
  _CRABV,
  _CRABVI,
  _CRABVO,
  _CRI,
  _CRP,
  _CRPI,
  _CRPO,
  _CTr,
  _e,
  _EKA,
  _FA,
  _FC,
  _FD,
  _FN,
  _FT,
  _h,
  _IT,
  _M,
  _MRD,
  _MRDa,
  _RABVA,
  _RABVN,
  _RC,
  _RDC,
  _RPAe,
  _RPD,
  _RPN,
  _RPTe,
  _RS,
  _SBVA,
  _SI,
  _T,
  _UF,
  _UFI,
  _UFO,
  _VS,
  n0,
} from "./schemas_0";
import { BackupSelection } from "./schemas_9_Backup";
import { FrameworkControls } from "./schemas_15_Framework";
import { RequesterComment } from "./schemas_27_Backup";
import { ReportDeliveryChannel, ReportSetting } from "./schemas_28_Report";
import { Tags } from "./schemas_41_Backup";

/* eslint no-var: 0 */

export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
  },
  [_C, _M, _CRI, _A, _T, _Co],
  [0, 0, 0, 0, 0, 0],

  __AlreadyExistsException
);
export var CreateBackupSelectionInput = struct(
  n0,
  _CBSI,
  0,
  [_BPIa, _BS, _CRI],
  [[0, 1], () => BackupSelection, [0, 4]]
);
export var CreateBackupSelectionOutput = struct(n0, _CBSO, 0, [_SI, _BPIa, _CD], [0, 0, 4]);
export var CreateBackupVaultInput = struct(
  n0,
  _CBVI,
  0,
  [_BVN, _BVT, _EKA, _CRI],
  [[0, 1], [() => Tags, 0], 0, [0, 4]]
);
export var CreateBackupVaultOutput = struct(n0, _CBVO, 0, [_BVN, _BVA, _CD], [0, 0, 4]);
export var CreateFrameworkInput = struct(
  n0,
  _CFI,
  0,
  [_FN, _FD, _FC, _IT, _FT],
  [0, 0, () => FrameworkControls, [0, 4], 128 | 0]
);
export var CreateFrameworkOutput = struct(n0, _CFO, 0, [_FN, _FA], [0, 0]);
export var CreateLogicallyAirGappedBackupVaultInput = struct(
  n0,
  _CLAGBVI,
  0,
  [_BVN, _BVT, _CRI, _MRD, _MRDa],
  [[0, 1], [() => Tags, 0], [0, 4], 1, 1]
);
export var CreateLogicallyAirGappedBackupVaultOutput = struct(n0, _CLAGBVO, 0, [_BVN, _BVA, _CD, _VS], [0, 0, 4, 0]);
export var CreateReportPlanInput = struct(
  n0,
  _CRPI,
  0,
  [_RPN, _RPD, _RDC, _RS, _RPTe, _IT],
  [0, 0, () => ReportDeliveryChannel, () => ReportSetting, 128 | 0, [0, 4]]
);
export var CreateReportPlanOutput = struct(n0, _CRPO, 0, [_RPN, _RPAe, _CTr], [0, 0, 4]);
export var CreateRestoreAccessBackupVaultInput = struct(
  n0,
  _CRABVI,
  0,
  [_SBVA, _BVN, _BVT, _CRI, _RC],
  [0, 0, [() => Tags, 0], [0, 4], [() => RequesterComment, 0]]
);
export var CreateRestoreAccessBackupVaultOutput = struct(n0, _CRABVO, 0, [_RABVA, _VS, _RABVN, _CD], [0, 0, 0, 4]);
export var UpdateFrameworkInput = struct(
  n0,
  _UFI,
  0,
  [_FN, _FD, _FC, _IT],
  [[0, 1], 0, () => FrameworkControls, [0, 4]]
);
export var UpdateFrameworkOutput = struct(n0, _UFO, 0, [_FN, _FA, _CTr], [0, 0, 4]);
export var CreateBackupSelection = op(
  n0,
  _CBS,
  {
    [_h]: ["PUT", "/backup/plans/{BackupPlanId}/selections", 200],
  },
  () => CreateBackupSelectionInput,
  () => CreateBackupSelectionOutput
);
export var CreateBackupVault = op(
  n0,
  _CBV,
  {
    [_h]: ["PUT", "/backup-vaults/{BackupVaultName}", 200],
  },
  () => CreateBackupVaultInput,
  () => CreateBackupVaultOutput
);
export var CreateFramework = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/audit/frameworks", 200],
  },
  () => CreateFrameworkInput,
  () => CreateFrameworkOutput
);
export var CreateLogicallyAirGappedBackupVault = op(
  n0,
  _CLAGBV,
  {
    [_h]: ["PUT", "/logically-air-gapped-backup-vaults/{BackupVaultName}", 200],
  },
  () => CreateLogicallyAirGappedBackupVaultInput,
  () => CreateLogicallyAirGappedBackupVaultOutput
);
export var CreateReportPlan = op(
  n0,
  _CRP,
  {
    [_h]: ["POST", "/audit/report-plans", 200],
  },
  () => CreateReportPlanInput,
  () => CreateReportPlanOutput
);
export var CreateRestoreAccessBackupVault = op(
  n0,
  _CRABV,
  {
    [_h]: ["PUT", "/restore-access-backup-vaults", 200],
  },
  () => CreateRestoreAccessBackupVaultInput,
  () => CreateRestoreAccessBackupVaultOutput
);
export var UpdateFramework = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/audit/frameworks/{FrameworkName}", 200],
  },
  () => UpdateFrameworkInput,
  () => UpdateFrameworkOutput
);
