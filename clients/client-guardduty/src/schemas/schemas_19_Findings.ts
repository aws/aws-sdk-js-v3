// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AFR,
  _AFr,
  _AFRr,
  _Com,
  _com,
  _DI,
  _dI,
  _Fe,
  _fe,
  _FI,
  _fI,
  _hL,
  _ht,
  _jN,
  _UFF,
  _UFFR,
  _UFFRp,
  _UFn,
  _UFR,
  _UFRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ArchiveFindingsRequest = struct(
  n0,
  _AFR,
  0,
  [_DI, _FI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fI,
      },
    ],
  ]
);
export var ArchiveFindingsResponse = struct(n0, _AFRr, 0, [], []);
export var UnarchiveFindingsRequest = struct(
  n0,
  _UFR,
  0,
  [_DI, _FI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fI,
      },
    ],
  ]
);
export var UnarchiveFindingsResponse = struct(n0, _UFRn, 0, [], []);
export var UpdateFindingsFeedbackRequest = struct(
  n0,
  _UFFR,
  0,
  [_DI, _FI, _Fe, _Com],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fI,
      },
    ],
    [
      0,
      {
        [_jN]: _fe,
      },
    ],
    [
      0,
      {
        [_jN]: _com,
      },
    ],
  ]
);
export var UpdateFindingsFeedbackResponse = struct(n0, _UFFRp, 0, [], []);
export var FindingIds = 64 | 0;

export var ArchiveFindings = op(
  n0,
  _AFr,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings/archive", 200],
  },
  () => ArchiveFindingsRequest,
  () => ArchiveFindingsResponse
);
export var UnarchiveFindings = op(
  n0,
  _UFn,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings/unarchive", 200],
  },
  () => UnarchiveFindingsRequest,
  () => UnarchiveFindingsResponse
);
export var UpdateFindingsFeedback = op(
  n0,
  _UFF,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings/feedback", 200],
  },
  () => UpdateFindingsFeedbackRequest,
  () => UpdateFindingsFeedbackResponse
);
