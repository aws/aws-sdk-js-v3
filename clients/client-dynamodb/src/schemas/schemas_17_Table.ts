// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  BackupInUseException as __BackupInUseException,
  TableInUseException as __TableInUseException,
} from "../models/index";
import {
  _BA,
  _BCDT,
  _BDa,
  _BEDT,
  _BIUE,
  _BN,
  _BS,
  _BSa,
  _BSac,
  _BSB,
  _BT,
  _c,
  _CB,
  _CBI,
  _CBO,
  _e,
  _ESBA,
  _L,
  _LB,
  _LBI,
  _LBO,
  _LEBA,
  _m,
  _TA,
  _TI,
  _TIUE,
  _TN,
  _TRLB,
  _TRUB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackupDetails = struct(n0, _BDa, 0, [_BA, _BN, _BSB, _BS, _BT, _BCDT, _BEDT], [0, 0, 1, 0, 0, 4, 4]);
export var BackupInUseException = error(
  n0,
  _BIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BackupInUseException
);
export var BackupSummary = struct(
  n0,
  _BSa,
  0,
  [_TN, _TI, _TA, _BA, _BN, _BCDT, _BEDT, _BS, _BT, _BSB],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 1]
);
export var CreateBackupInput = struct(n0, _CBI, 0, [_TN, _BN], [0, 0]);
export var CreateBackupOutput = struct(n0, _CBO, 0, [_BDa], [() => BackupDetails]);
export var ListBackupsInput = struct(n0, _LBI, 0, [_TN, _L, _TRLB, _TRUB, _ESBA, _BT], [0, 1, 4, 4, 0, 0]);
export var ListBackupsOutput = struct(n0, _LBO, 0, [_BSac, _LEBA], [() => BackupSummaries, 0]);
export var TableInUseException = error(
  n0,
  _TIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TableInUseException
);
export var BackupSummaries = list(n0, _BSac, 0, () => BackupSummary);
export var CreateBackup = op(
  n0,
  _CB,
  0,
  () => CreateBackupInput,
  () => CreateBackupOutput
);
export var ListBackups = op(
  n0,
  _LB,
  0,
  () => ListBackupsInput,
  () => ListBackupsOutput
);
