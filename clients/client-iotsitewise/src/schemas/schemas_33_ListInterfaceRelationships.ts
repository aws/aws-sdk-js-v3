// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _end, _hQ, _ht, _i, _iAMI, _IRS, _iRS, _IRSn, _LIR, _LIRR, _LIRRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InterfaceRelationshipSummary = struct(n0, _IRS, 0, [_i], [0]);
export var ListInterfaceRelationshipsRequest = struct(
  n0,
  _LIRR,
  0,
  [_iAMI, _nT, _mR],
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
export var ListInterfaceRelationshipsResponse = struct(
  n0,
  _LIRRi,
  0,
  [_iRS, _nT],
  [() => InterfaceRelationshipSummaries, 0]
);
export var InterfaceRelationshipSummaries = list(n0, _IRSn, 0, () => InterfaceRelationshipSummary);
export var ListInterfaceRelationships = op(
  n0,
  _LIR,
  {
    [_ht]: ["GET", "/interface/{interfaceAssetModelId}/asset-models", 200],
    [_end]: ["api."],
  },
  () => ListInterfaceRelationshipsRequest,
  () => ListInterfaceRelationshipsResponse
);
