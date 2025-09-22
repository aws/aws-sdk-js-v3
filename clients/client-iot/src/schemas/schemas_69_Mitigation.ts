// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aAc, _aIc, _aN, _aT, _cD, _h, _hQ, _LMA, _LMAR, _LMARi, _MAI, _MAIL, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListMitigationActionsRequest = struct(
  n0,
  _LMAR,
  0,
  [_aT, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _aT,
      },
    ],
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
  ]
);
export var ListMitigationActionsResponse = struct(
  n0,
  _LMARi,
  0,
  [_aIc, _nT],
  [() => MitigationActionIdentifierList, 0]
);
export var MitigationActionIdentifier = struct(n0, _MAI, 0, [_aN, _aAc, _cD], [0, 0, 4]);
export var MitigationActionIdentifierList = list(n0, _MAIL, 0, () => MitigationActionIdentifier);
export var ListMitigationActions = op(
  n0,
  _LMA,
  {
    [_h]: ["GET", "/mitigationactions/actions", 200],
  },
  () => ListMitigationActionsRequest,
  () => ListMitigationActionsResponse
);
