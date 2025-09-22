// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CN, _CTo, _DCS, _DCSa, _DCSL, _E, _LDC, _LDCI, _LDCO, _MR, _NT, _St, _T, _WG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DataCatalogSummary = struct(n0, _DCS, 0, [_CN, _T, _St, _CTo, _E], [0, 0, 0, 0, 0]);
export var ListDataCatalogsInput = struct(n0, _LDCI, 0, [_NT, _MR, _WG], [0, 1, 0]);
export var ListDataCatalogsOutput = struct(n0, _LDCO, 0, [_DCSa, _NT], [() => DataCatalogSummaryList, 0]);
export var DataCatalogSummaryList = list(n0, _DCSL, 0, () => DataCatalogSummary);
export var ListDataCatalogs = op(
  n0,
  _LDC,
  0,
  () => ListDataCatalogsInput,
  () => ListDataCatalogsOutput
);
