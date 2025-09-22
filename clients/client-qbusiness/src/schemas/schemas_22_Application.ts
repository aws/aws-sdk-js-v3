// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _aIp,
  _Ap,
  _ap,
  _cA,
  _cN,
  _dN,
  _hQ,
  _ht,
  _iT,
  _LA,
  _LAR,
  _LARi,
  _mRa,
  _nT,
  _QSC,
  _qSC,
  _s,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Application = struct(
  n0,
  _A,
  0,
  [_dN, _aIp, _cA, _uA, _s, _iT, _qSC],
  [0, 0, 4, 4, 0, 0, () => QuickSightConfiguration]
);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_nT, _ap], [0, () => Applications]);
export var QuickSightConfiguration = struct(n0, _QSC, 0, [_cN], [0]);
export var Applications = list(n0, _Ap, 0, () => Application);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_ht]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
