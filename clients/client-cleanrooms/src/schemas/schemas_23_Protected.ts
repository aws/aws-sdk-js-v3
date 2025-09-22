// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aTn,
  _cD,
  _cT,
  _dACD,
  _h,
  _hQ,
  _i,
  _LPJ,
  _LPJI,
  _LPJO,
  _mA,
  _mI,
  _mIe,
  _mR,
  _nT,
  _PJCD,
  _PJDACD,
  _pJr,
  _PJRC,
  _PJRCr,
  _PJSL,
  _PJSr,
  _rAI,
  _rCec,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProtectedJobsInput = struct(
  n0,
  _LPJI,
  0,
  [_mIe, _st, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
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
export var ListProtectedJobsOutput = struct(n0, _LPJO, 0, [_nT, _pJr], [0, () => ProtectedJobSummaryList]);
export var ProtectedJobDirectAnalysisConfigurationDetails = struct(n0, _PJDACD, 0, [_rAI], [64 | 0]);
export var ProtectedJobReceiverConfiguration = struct(
  n0,
  _PJRC,
  0,
  [_aTn, _cD],
  [0, () => ProtectedJobConfigurationDetails]
);
export var ProtectedJobSummary = struct(
  n0,
  _PJSr,
  0,
  [_i, _mI, _mA, _cT, _st, _rCec],
  [0, 0, 0, 4, 0, () => ProtectedJobReceiverConfigurations]
);
export var ProtectedJobReceiverAccountIds = 64 | 0;

export var ProtectedJobReceiverConfigurations = list(n0, _PJRCr, 0, () => ProtectedJobReceiverConfiguration);
export var ProtectedJobSummaryList = list(n0, _PJSL, 0, () => ProtectedJobSummary);
export var ProtectedJobConfigurationDetails = uni(
  n0,
  _PJCD,
  0,
  [_dACD],
  [() => ProtectedJobDirectAnalysisConfigurationDetails]
);
export var ListProtectedJobs = op(
  n0,
  _LPJ,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/protectedJobs", 200],
  },
  () => ListProtectedJobsInput,
  () => ListProtectedJobsOutput
);
