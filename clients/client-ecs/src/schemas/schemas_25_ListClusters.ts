// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cAl, _LCi, _LCR, _LCRi, _mRa, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListClustersRequest = struct(n0, _LCR, 0, [_nT, _mRa], [0, 1]);
export var ListClustersResponse = struct(n0, _LCRi, 0, [_cAl, _nT], [64 | 0, 0]);
export var ListClusters = op(
  n0,
  _LCi,
  0,
  () => ListClustersRequest,
  () => ListClustersResponse
);
