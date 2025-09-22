// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _GMSe, _GMSI, _GMSS, _GMSSe, _L, _LGMS, _LGMSR, _LGMSRi, _N, _NM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GeoMatchSetSummary = struct(n0, _GMSS, 0, [_GMSI, _N], [0, 0]);
export var ListGeoMatchSetsRequest = struct(n0, _LGMSR, 0, [_NM, _L], [0, 1]);
export var ListGeoMatchSetsResponse = struct(n0, _LGMSRi, 0, [_NM, _GMSe], [0, () => GeoMatchSetSummaries]);
export var GeoMatchSetSummaries = list(n0, _GMSSe, 0, () => GeoMatchSetSummary);
export var ListGeoMatchSets = op(
  n0,
  _LGMS,
  0,
  () => ListGeoMatchSetsRequest,
  () => ListGeoMatchSetsResponse
);
