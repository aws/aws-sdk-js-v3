// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _cDT, _dGA, _fA, _Fi, _fR, _FS, _LF, _LFR, _LFRi, _lUDT, _mRa, _n, _nT, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FilterSummary = struct(n0, _FS, 0, [_n, _fA, _cDT, _lUDT, _dGA, _fR, _s], [0, 0, 4, 4, 0, 0, 0]);
export var ListFiltersRequest = struct(n0, _LFR, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListFiltersResponse = struct(n0, _LFRi, 0, [_Fi, _nT], [() => Filters, 0]);
export var Filters = list(n0, _Fi, 0, () => FilterSummary);
export var ListFilters = op(
  n0,
  _LF,
  2,
  () => ListFiltersRequest,
  () => ListFiltersResponse
);
