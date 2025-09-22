// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CTr, _FRSIe, _FRSN, _FRSS, _FRSSI, _II, _LFRS, _LFRSR, _LFRSRi, _LUT, _MR, _NTe, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FeaturedResultsSetSummary = struct(n0, _FRSS, 0, [_FRSIe, _FRSN, _St, _LUT, _CTr], [0, 0, 0, 1, 1]);
export var ListFeaturedResultsSetsRequest = struct(n0, _LFRSR, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListFeaturedResultsSetsResponse = struct(
  n0,
  _LFRSRi,
  0,
  [_FRSSI, _NTe],
  [() => FeaturedResultsSetSummaryItems, 0]
);
export var FeaturedResultsSetSummaryItems = list(n0, _FRSSI, 0, () => FeaturedResultsSetSummary);
export var ListFeaturedResultsSets = op(
  n0,
  _LFRS,
  0,
  () => ListFeaturedResultsSetsRequest,
  () => ListFeaturedResultsSetsResponse
);
