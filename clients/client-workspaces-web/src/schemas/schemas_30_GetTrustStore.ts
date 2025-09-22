// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aPA, _GTS, _GTSR, _GTSRe, _h, _TS, _tS, _tSA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTrustStoreRequest = struct(n0, _GTSR, 0, [_tSA], [[0, 1]]);
export var GetTrustStoreResponse = struct(n0, _GTSRe, 0, [_tS], [() => TrustStore]);
export var TrustStore = struct(n0, _TS, 0, [_aPA, _tSA], [64 | 0, 0]);
export var GetTrustStore = op(
  n0,
  _GTS,
  {
    [_h]: ["GET", "/trustStores/{trustStoreArn+}", 200],
  },
  () => GetTrustStoreRequest,
  () => GetTrustStoreResponse
);
