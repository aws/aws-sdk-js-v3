// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABS,
  _ABSd,
  _BO,
  _BP,
  _BPA,
  _BPD,
  _BPI,
  _BPIa,
  _BPL,
  _BPLM,
  _BPN,
  _BPT,
  _BPTI,
  _BPTJ,
  _BPVL,
  _BR,
  _BRa,
  _BRI,
  _BRIac,
  _CA,
  _CAo,
  _CBP,
  _CBPI,
  _CBPO,
  _CD,
  _CRI,
  _CWM,
  _DBVA,
  _DD,
  _ECB,
  _GBP,
  _GBPFJSON,
  _GBPFJSONI,
  _GBPFJSONO,
  _GBPFT,
  _GBPFTI,
  _GBPFTO,
  _GBPI,
  _GBPO,
  _h,
  _hQ,
  _IA,
  _IAn,
  _iD,
  _IDn,
  _L,
  _LBP,
  _LBPI,
  _LBPO,
  _LBPV,
  _LBPVI,
  _LBPVO,
  _LED,
  _MR,
  _mR,
  _NT,
  _nT,
  _RI,
  _RNu,
  _RPT,
  _RT,
  _RTe,
  _Ru,
  _SE,
  _SET,
  _SWM,
  _TBVN,
  _UBP,
  _UBPI,
  _UBPO,
  _VI,
  _vI,
  n0,
} from "./schemas_0";
import { Lifecycle } from "./schemas_24_Backup";
import { Tags } from "./schemas_41_Backup";

/* eslint no-var: 0 */

export var AdvancedBackupSetting = struct(n0, _ABS, 0, [_RT, _BO], [0, 128 | 0]);
export var BackupPlan = struct(
  n0,
  _BP,
  0,
  [_BPN, _Ru, _ABSd],
  [0, [() => BackupRules, 0], () => AdvancedBackupSettings]
);
export var BackupPlanInput = struct(
  n0,
  _BPI,
  0,
  [_BPN, _Ru, _ABSd],
  [0, [() => BackupRulesInput, 0], () => AdvancedBackupSettings]
);
export var BackupPlansListMember = struct(
  n0,
  _BPLM,
  0,
  [_BPA, _BPIa, _CD, _DD, _VI, _BPN, _CRI, _LED, _ABSd],
  [0, 0, 4, 4, 0, 0, 0, 4, () => AdvancedBackupSettings]
);
export var BackupRule = struct(
  n0,
  _BR,
  0,
  [_RNu, _TBVN, _SE, _SWM, _CWM, _L, _RPT, _RI, _CA, _ECB, _SET, _IA],
  [0, 0, 0, 1, 1, () => Lifecycle, [() => Tags, 0], 0, () => CopyActions, 2, 0, () => IndexActions]
);
export var BackupRuleInput = struct(
  n0,
  _BRI,
  0,
  [_RNu, _TBVN, _SE, _SWM, _CWM, _L, _RPT, _CA, _ECB, _SET, _IA],
  [0, 0, 0, 1, 1, () => Lifecycle, [() => Tags, 0], () => CopyActions, 2, 0, () => IndexActions]
);
export var CopyAction = struct(n0, _CAo, 0, [_L, _DBVA], [() => Lifecycle, 0]);
export var CreateBackupPlanInput = struct(
  n0,
  _CBPI,
  0,
  [_BP, _BPT, _CRI],
  [
    [() => BackupPlanInput, 0],
    [() => Tags, 0],
    [0, 4],
  ]
);
export var CreateBackupPlanOutput = struct(
  n0,
  _CBPO,
  0,
  [_BPIa, _BPA, _CD, _VI, _ABSd],
  [0, 0, 4, 0, () => AdvancedBackupSettings]
);
export var GetBackupPlanFromJSONInput = struct(n0, _GBPFJSONI, 0, [_BPTJ], [0]);
export var GetBackupPlanFromJSONOutput = struct(n0, _GBPFJSONO, 0, [_BP], [[() => BackupPlan, 0]]);
export var GetBackupPlanFromTemplateInput = struct(n0, _GBPFTI, 0, [_BPTI], [[0, 1]]);
export var GetBackupPlanFromTemplateOutput = struct(n0, _GBPFTO, 0, [_BPD], [[() => BackupPlan, 0]]);
export var GetBackupPlanInput = struct(
  n0,
  _GBPI,
  0,
  [_BPIa, _VI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var GetBackupPlanOutput = struct(
  n0,
  _GBPO,
  0,
  [_BP, _BPIa, _BPA, _VI, _CRI, _CD, _DD, _LED, _ABSd],
  [[() => BackupPlan, 0], 0, 0, 0, 0, 4, 4, 4, () => AdvancedBackupSettings]
);
export var IndexAction = struct(n0, _IAn, 0, [_RTe], [64 | 0]);
export var ListBackupPlansInput = struct(
  n0,
  _LBPI,
  0,
  [_NT, _MR, _IDn],
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
        [_hQ]: _iD,
      },
    ],
  ]
);
export var ListBackupPlansOutput = struct(n0, _LBPO, 0, [_NT, _BPL], [0, () => BackupPlansList]);
export var ListBackupPlanVersionsInput = struct(
  n0,
  _LBPVI,
  0,
  [_BPIa, _NT, _MR],
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
export var ListBackupPlanVersionsOutput = struct(n0, _LBPVO, 0, [_NT, _BPVL], [0, () => BackupPlanVersionsList]);
export var UpdateBackupPlanInput = struct(
  n0,
  _UBPI,
  0,
  [_BPIa, _BP],
  [
    [0, 1],
    [() => BackupPlanInput, 0],
  ]
);
export var UpdateBackupPlanOutput = struct(
  n0,
  _UBPO,
  0,
  [_BPIa, _BPA, _CD, _VI, _ABSd],
  [0, 0, 4, 0, () => AdvancedBackupSettings]
);
export var AdvancedBackupSettings = list(n0, _ABSd, 0, () => AdvancedBackupSetting);
export var BackupPlansList = list(n0, _BPL, 0, () => BackupPlansListMember);
export var BackupPlanVersionsList = list(n0, _BPVL, 0, () => BackupPlansListMember);
export var BackupRules = list(n0, _BRa, 0, [() => BackupRule, 0]);
export var BackupRulesInput = list(n0, _BRIac, 0, [() => BackupRuleInput, 0]);
export var CopyActions = list(n0, _CA, 0, () => CopyAction);
export var IndexActions = list(n0, _IA, 0, () => IndexAction);
export var BackupOptions = 128 | 0;

export var CreateBackupPlan = op(
  n0,
  _CBP,
  {
    [_h]: ["PUT", "/backup/plans", 200],
  },
  () => CreateBackupPlanInput,
  () => CreateBackupPlanOutput
);
export var GetBackupPlan = op(
  n0,
  _GBP,
  {
    [_h]: ["GET", "/backup/plans/{BackupPlanId}", 200],
  },
  () => GetBackupPlanInput,
  () => GetBackupPlanOutput
);
export var GetBackupPlanFromJSON = op(
  n0,
  _GBPFJSON,
  {
    [_h]: ["POST", "/backup/template/json/toPlan", 200],
  },
  () => GetBackupPlanFromJSONInput,
  () => GetBackupPlanFromJSONOutput
);
export var GetBackupPlanFromTemplate = op(
  n0,
  _GBPFT,
  {
    [_h]: ["GET", "/backup/template/plans/{BackupPlanTemplateId}/toPlan", 200],
  },
  () => GetBackupPlanFromTemplateInput,
  () => GetBackupPlanFromTemplateOutput
);
export var ListBackupPlans = op(
  n0,
  _LBP,
  {
    [_h]: ["GET", "/backup/plans", 200],
  },
  () => ListBackupPlansInput,
  () => ListBackupPlansOutput
);
export var ListBackupPlanVersions = op(
  n0,
  _LBPV,
  {
    [_h]: ["GET", "/backup/plans/{BackupPlanId}/versions", 200],
  },
  () => ListBackupPlanVersionsInput,
  () => ListBackupPlanVersionsOutput
);
export var UpdateBackupPlan = op(
  n0,
  _UBP,
  {
    [_h]: ["POST", "/backup/plans/{BackupPlanId}", 200],
  },
  () => UpdateBackupPlanInput,
  () => UpdateBackupPlanOutput
);
