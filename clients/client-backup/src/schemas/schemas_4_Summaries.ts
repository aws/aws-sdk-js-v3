// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AP,
  _BJS,
  _BJSa,
  _BJSL,
  _CJS,
  _CJSL,
  _CJSo,
  _Cou,
  _ET,
  _h,
  _hQ,
  _LBJS,
  _LBJSI,
  _LBJSO,
  _LCJS,
  _LCJSI,
  _LCJSO,
  _LRJS,
  _LRJSI,
  _LRJSO,
  _MC,
  _MR,
  _NT,
  _R,
  _RJS,
  _RJSe,
  _RJSL,
  _RT,
  _S,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackupJobSummary = struct(n0, _BJS, 0, [_R, _AI, _S, _RT, _MC, _Cou, _ST, _ET], [0, 0, 0, 0, 0, 1, 4, 4]);
export var CopyJobSummary = struct(n0, _CJS, 0, [_R, _AI, _S, _RT, _MC, _Cou, _ST, _ET], [0, 0, 0, 0, 0, 1, 4, 4]);
export var ListBackupJobSummariesInput = struct(
  n0,
  _LBJSI,
  0,
  [_AI, _S, _RT, _MC, _AP, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _AI,
      },
    ],
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
    [
      0,
      {
        [_hQ]: _RT,
      },
    ],
    [
      0,
      {
        [_hQ]: _MC,
      },
    ],
    [
      0,
      {
        [_hQ]: _AP,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListBackupJobSummariesOutput = struct(n0, _LBJSO, 0, [_BJSa, _AP, _NT], [() => BackupJobSummaryList, 0, 0]);
export var ListCopyJobSummariesInput = struct(
  n0,
  _LCJSI,
  0,
  [_AI, _S, _RT, _MC, _AP, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _AI,
      },
    ],
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
    [
      0,
      {
        [_hQ]: _RT,
      },
    ],
    [
      0,
      {
        [_hQ]: _MC,
      },
    ],
    [
      0,
      {
        [_hQ]: _AP,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListCopyJobSummariesOutput = struct(n0, _LCJSO, 0, [_CJSo, _AP, _NT], [() => CopyJobSummaryList, 0, 0]);
export var ListRestoreJobSummariesInput = struct(
  n0,
  _LRJSI,
  0,
  [_AI, _S, _RT, _AP, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _AI,
      },
    ],
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
    [
      0,
      {
        [_hQ]: _RT,
      },
    ],
    [
      0,
      {
        [_hQ]: _AP,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListRestoreJobSummariesOutput = struct(n0, _LRJSO, 0, [_RJS, _AP, _NT], [() => RestoreJobSummaryList, 0, 0]);
export var RestoreJobSummary = struct(n0, _RJSe, 0, [_R, _AI, _S, _RT, _Cou, _ST, _ET], [0, 0, 0, 0, 1, 4, 4]);
export var BackupJobSummaryList = list(n0, _BJSL, 0, () => BackupJobSummary);
export var CopyJobSummaryList = list(n0, _CJSL, 0, () => CopyJobSummary);
export var RestoreJobSummaryList = list(n0, _RJSL, 0, () => RestoreJobSummary);
export var ListBackupJobSummaries = op(
  n0,
  _LBJS,
  {
    [_h]: ["GET", "/audit/backup-job-summaries", 200],
  },
  () => ListBackupJobSummariesInput,
  () => ListBackupJobSummariesOutput
);
export var ListCopyJobSummaries = op(
  n0,
  _LCJS,
  {
    [_h]: ["GET", "/audit/copy-job-summaries", 200],
  },
  () => ListCopyJobSummariesInput,
  () => ListCopyJobSummariesOutput
);
export var ListRestoreJobSummaries = op(
  n0,
  _LRJS,
  {
    [_h]: ["GET", "/audit/restore-job-summaries", 200],
  },
  () => ListRestoreJobSummariesInput,
  () => ListRestoreJobSummariesOutput
);
