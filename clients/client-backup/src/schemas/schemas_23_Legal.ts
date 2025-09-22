// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _CDa,
  _CDan,
  _CLHIr,
  _CLHOr,
  _CLHr,
  _D,
  _DR,
  _FDr,
  _GLH,
  _GLHI,
  _GLHO,
  _h,
  _hQ,
  _IT,
  _LH,
  _LHA,
  _LHe,
  _LHI,
  _LHL,
  _LLH,
  _LLHI,
  _LLHO,
  _MR,
  _mR,
  _NT,
  _nT,
  _RIe,
  _RPS,
  _RRU,
  _St,
  _Ta,
  _TD,
  _Ti,
  _VN,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_41_Backup";

/* eslint no-var: 0 */

export var CreateLegalHoldInput = struct(
  n0,
  _CLHIr,
  0,
  [_Ti, _D, _IT, _RPS, _Ta],
  [0, 0, [0, 4], () => RecoveryPointSelection, [() => Tags, 0]]
);
export var CreateLegalHoldOutput = struct(
  n0,
  _CLHOr,
  0,
  [_Ti, _St, _D, _LHI, _LHA, _CD, _RPS],
  [0, 0, 0, 0, 0, 4, () => RecoveryPointSelection]
);
export var DateRange = struct(n0, _DR, 0, [_FDr, _TD], [4, 4]);
export var GetLegalHoldInput = struct(n0, _GLHI, 0, [_LHI], [[0, 1]]);
export var GetLegalHoldOutput = struct(
  n0,
  _GLHO,
  0,
  [_Ti, _St, _D, _CDa, _LHI, _LHA, _CD, _CDan, _RRU, _RPS],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, () => RecoveryPointSelection]
);
export var LegalHold = struct(n0, _LH, 0, [_Ti, _St, _D, _LHI, _LHA, _CD, _CDan], [0, 0, 0, 0, 0, 4, 4]);
export var ListLegalHoldsInput = struct(
  n0,
  _LLHI,
  0,
  [_NT, _MR],
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
  ]
);
export var ListLegalHoldsOutput = struct(n0, _LLHO, 0, [_NT, _LHe], [0, () => LegalHoldsList]);
export var RecoveryPointSelection = struct(n0, _RPS, 0, [_VN, _RIe, _DR], [64 | 0, 64 | 0, () => DateRange]);
export var LegalHoldsList = list(n0, _LHL, 0, () => LegalHold);
export var ResourceIdentifiers = 64 | 0;

export var VaultNames = 64 | 0;

export var CreateLegalHold = op(
  n0,
  _CLHr,
  {
    [_h]: ["POST", "/legal-holds", 200],
  },
  () => CreateLegalHoldInput,
  () => CreateLegalHoldOutput
);
export var GetLegalHold = op(
  n0,
  _GLH,
  {
    [_h]: ["GET", "/legal-holds/{LegalHoldId}", 200],
  },
  () => GetLegalHoldInput,
  () => GetLegalHoldOutput
);
export var ListLegalHolds = op(
  n0,
  _LLH,
  {
    [_h]: ["GET", "/legal-holds", 200],
  },
  () => ListLegalHoldsInput,
  () => ListLegalHoldsOutput
);
