// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BPIa,
  _BS,
  _BSL,
  _BSLM,
  _CD,
  _CK,
  _Con,
  _Cond,
  _CP,
  _CPo,
  _CRI,
  _CT,
  _CV,
  _GBS,
  _GBSI,
  _GBSO,
  _h,
  _hQ,
  _IRA,
  _LBS,
  _LBSI,
  _LBSO,
  _LOT,
  _MR,
  _mR,
  _NR,
  _NT,
  _nT,
  _Re,
  _SEt,
  _SI,
  _SL,
  _SN,
  _SNE,
  _SNL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackupSelection = struct(
  n0,
  _BS,
  0,
  [_SN, _IRA, _Re, _LOT, _NR, _Con],
  [0, 0, 64 | 0, () => ListOfTags, 64 | 0, () => Conditions]
);
export var BackupSelectionsListMember = struct(n0, _BSLM, 0, [_SI, _SN, _BPIa, _CD, _CRI, _IRA], [0, 0, 0, 4, 0, 0]);
export var Condition = struct(n0, _Cond, 0, [_CT, _CK, _CV], [0, 0, 0]);
export var ConditionParameter = struct(n0, _CP, 0, [_CK, _CV], [0, 0]);
export var Conditions = struct(
  n0,
  _Con,
  0,
  [_SEt, _SNE, _SL, _SNL],
  [() => ConditionParameters, () => ConditionParameters, () => ConditionParameters, () => ConditionParameters]
);
export var GetBackupSelectionInput = struct(
  n0,
  _GBSI,
  0,
  [_BPIa, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBackupSelectionOutput = struct(
  n0,
  _GBSO,
  0,
  [_BS, _SI, _BPIa, _CD, _CRI],
  [() => BackupSelection, 0, 0, 4, 0]
);
export var ListBackupSelectionsInput = struct(
  n0,
  _LBSI,
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
export var ListBackupSelectionsOutput = struct(n0, _LBSO, 0, [_NT, _BSL], [0, () => BackupSelectionsList]);
export var BackupSelectionsList = list(n0, _BSL, 0, () => BackupSelectionsListMember);
export var ConditionParameters = list(n0, _CPo, 0, () => ConditionParameter);
export var ListOfTags = list(n0, _LOT, 0, () => Condition);
export var ResourceArns = 64 | 0;

export var GetBackupSelection = op(
  n0,
  _GBS,
  {
    [_h]: ["GET", "/backup/plans/{BackupPlanId}/selections/{SelectionId}", 200],
  },
  () => GetBackupSelectionInput,
  () => GetBackupSelectionOutput
);
export var ListBackupSelections = op(
  n0,
  _LBS,
  {
    [_h]: ["GET", "/backup/plans/{BackupPlanId}/selections", 200],
  },
  () => ListBackupSelectionsInput,
  () => ListBackupSelectionsOutput
);
