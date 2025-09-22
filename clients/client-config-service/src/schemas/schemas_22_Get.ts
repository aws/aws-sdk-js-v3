// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _co, _GDRC, _GDRCR, _GDRCRe, _l, _nT, _rC, _RCes, _RCesou, _rT, _rTe, _tDR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDiscoveredResourceCountsRequest = struct(n0, _GDRCR, 0, [_rTe, _l, _nT], [64 | 0, 1, 0]);
export var GetDiscoveredResourceCountsResponse = struct(n0, _GDRCRe, 0, [_tDR, _rC, _nT], [1, () => ResourceCounts, 0]);
export var ResourceCount = struct(n0, _RCes, 0, [_rT, _co], [0, 1]);
export var ResourceCounts = list(n0, _RCesou, 0, () => ResourceCount);
export var ResourceTypes = 64 | 0;

export var GetDiscoveredResourceCounts = op(
  n0,
  _GDRC,
  0,
  () => GetDiscoveredResourceCountsRequest,
  () => GetDiscoveredResourceCountsResponse
);
