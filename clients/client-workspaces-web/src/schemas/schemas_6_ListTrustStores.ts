// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTS, _LTSR, _LTSRi, _mR, _nT, _tSA, _tSr, _TSS, _TSSL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTrustStoresRequest = struct(
  n0,
  _LTSR,
  0,
  [_nT, _mR],
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
export var ListTrustStoresResponse = struct(n0, _LTSRi, 0, [_tSr, _nT], [() => TrustStoreSummaryList, 0]);
export var TrustStoreSummary = struct(n0, _TSS, 0, [_tSA], [0]);
export var TrustStoreSummaryList = list(n0, _TSSL, 0, () => TrustStoreSummary);
export var ListTrustStores = op(
  n0,
  _LTS,
  {
    [_h]: ["GET", "/trustStores", 200],
  },
  () => ListTrustStoresRequest,
  () => ListTrustStoresResponse
);
