// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aTn,
  _CD,
  _cD,
  _cT,
  _DACD,
  _dACD,
  _h,
  _hQ,
  _i,
  _LPQ,
  _LPQI,
  _LPQO,
  _mA,
  _mI,
  _mIe,
  _mR,
  _nT,
  _pQr,
  _PQSL,
  _PQSr,
  _rAI,
  _RC,
  _rCec,
  _RCL,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DirectAnalysisConfigurationDetails = struct(n0, _DACD, 0, [_rAI], [64 | 0]);
export var ListProtectedQueriesInput = struct(
  n0,
  _LPQI,
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
export var ListProtectedQueriesOutput = struct(n0, _LPQO, 0, [_nT, _pQr], [0, () => ProtectedQuerySummaryList]);
export var ProtectedQuerySummary = struct(
  n0,
  _PQSr,
  0,
  [_i, _mI, _mA, _cT, _st, _rCec],
  [0, 0, 0, 4, 0, () => ReceiverConfigurationsList]
);
export var ReceiverConfiguration = struct(n0, _RC, 0, [_aTn, _cD], [0, () => ConfigurationDetails]);
export var ProtectedQuerySummaryList = list(n0, _PQSL, 0, () => ProtectedQuerySummary);
export var ReceiverAccountIds = 64 | 0;

export var ReceiverConfigurationsList = list(n0, _RCL, 0, () => ReceiverConfiguration);
export var ConfigurationDetails = uni(n0, _CD, 0, [_dACD], [() => DirectAnalysisConfigurationDetails]);
export var ListProtectedQueries = op(
  n0,
  _LPQ,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/protectedQueries", 200],
  },
  () => ListProtectedQueriesInput,
  () => ListProtectedQueriesOutput
);
