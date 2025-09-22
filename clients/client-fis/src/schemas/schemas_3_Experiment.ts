// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _eI, _h, _hQ, _LERT, _LERTR, _LERTRi, _mR, _nT, _RT, _rT, _rTes, _RTL, _tI, _tN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListExperimentResolvedTargetsRequest = struct(
  n0,
  _LERTR,
  0,
  [_eI, _mR, _nT, _tN],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
  ]
);
export var ListExperimentResolvedTargetsResponse = struct(n0, _LERTRi, 0, [_rTes, _nT], [() => ResolvedTargetList, 0]);
export var ResolvedTarget = struct(n0, _RT, 0, [_rT, _tN, _tI], [0, 0, 128 | 0]);
export var ResolvedTargetList = list(n0, _RTL, 0, () => ResolvedTarget);
export var TargetInformationMap = 128 | 0;

export var ListExperimentResolvedTargets = op(
  n0,
  _LERT,
  {
    [_h]: ["GET", "/experiments/{experimentId}/resolvedTargets", 200],
  },
  () => ListExperimentResolvedTargetsRequest,
  () => ListExperimentResolvedTargetsResponse
);
