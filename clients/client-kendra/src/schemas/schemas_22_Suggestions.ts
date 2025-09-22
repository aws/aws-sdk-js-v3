// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _De, _DQSBL, _DQSBLR, _I, _II, _N, _RA, _SSP, _UQSBL, _UQSBLR, n0, S3Path, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQuerySuggestionsBlockListRequest = struct(n0, _DQSBLR, 0, [_II, _I], [0, 0]);
export var UpdateQuerySuggestionsBlockListRequest = struct(
  n0,
  _UQSBLR,
  0,
  [_II, _I, _N, _De, _SSP, _RA],
  [0, 0, 0, 0, () => S3Path, 0]
);
export var DeleteQuerySuggestionsBlockList = op(
  n0,
  _DQSBL,
  0,
  () => DeleteQuerySuggestionsBlockListRequest,
  () => Unit
);
export var UpdateQuerySuggestionsBlockList = op(
  n0,
  _UQSBL,
  0,
  () => UpdateQuerySuggestionsBlockListRequest,
  () => Unit
);
