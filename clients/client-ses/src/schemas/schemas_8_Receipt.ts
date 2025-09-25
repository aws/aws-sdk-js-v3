// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ci,
  _DRF,
  _DRFR,
  _DRFRe,
  _Fi,
  _FN,
  _IF,
  _LRF,
  _LRFR,
  _LRFRi,
  _N,
  _Po,
  _RF,
  _RFL,
  _RIF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReceiptFilterRequest = struct(n0, _DRFR, 0, [_FN], [0]);
export var DeleteReceiptFilterResponse = struct(n0, _DRFRe, 0, [], []);
export var ListReceiptFiltersRequest = struct(n0, _LRFR, 0, [], []);
export var ListReceiptFiltersResponse = struct(n0, _LRFRi, 0, [_Fi], [() => ReceiptFilterList]);
export var ReceiptFilter = struct(n0, _RF, 0, [_N, _IF], [0, () => ReceiptIpFilter]);
export var ReceiptIpFilter = struct(n0, _RIF, 0, [_Po, _Ci], [0, 0]);
export var ReceiptFilterList = list(n0, _RFL, 0, () => ReceiptFilter);
export var DeleteReceiptFilter = op(
  n0,
  _DRF,
  0,
  () => DeleteReceiptFilterRequest,
  () => DeleteReceiptFilterResponse
);
export var ListReceiptFilters = op(
  n0,
  _LRF,
  0,
  () => ListReceiptFiltersRequest,
  () => ListReceiptFiltersResponse
);
