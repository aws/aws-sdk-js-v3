// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BVN,
  _h,
  _hQ,
  _LHI,
  _LRPBLH,
  _LRPBLHI,
  _LRPBLHO,
  _MR,
  _mR,
  _NT,
  _nT,
  _RA,
  _RPA,
  _RPe,
  _RPL,
  _RPM,
  _RT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRecoveryPointsByLegalHoldInput = struct(
  n0,
  _LRPBLHI,
  0,
  [_LHI, _NT, _MR],
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
export var ListRecoveryPointsByLegalHoldOutput = struct(n0, _LRPBLHO, 0, [_RPe, _NT], [() => RecoveryPointsList, 0]);
export var RecoveryPointMember = struct(n0, _RPM, 0, [_RPA, _RA, _RT, _BVN], [0, 0, 0, 0]);
export var RecoveryPointsList = list(n0, _RPL, 0, () => RecoveryPointMember);
export var ListRecoveryPointsByLegalHold = op(
  n0,
  _LRPBLH,
  {
    [_h]: ["GET", "/legal-holds/{LegalHoldId}/recovery-points", 200],
  },
  () => ListRecoveryPointsByLegalHoldInput,
  () => ListRecoveryPointsByLegalHoldOutput
);
