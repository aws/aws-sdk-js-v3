// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ARW,
  _CN,
  _CW,
  _DCF,
  _DN,
  _FE,
  _GDCF,
  _GDCFR,
  _GDCFRe,
  _h,
  _N,
  _RF,
  _TCI,
  _TD,
  _TN,
  _UDCF,
  _UDCFR,
  _UDCFRp,
  _VI,
  ColumnWildcard,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllRowsWildcard = struct(n0, _ARW, 0, [], []);
export var DataCellsFilter = struct(
  n0,
  _DCF,
  0,
  [_TCI, _DN, _TN, _N, _RF, _CN, _CW, _VI],
  [0, 0, 0, 0, () => RowFilter, 64 | 0, () => ColumnWildcard, 0]
);
export var GetDataCellsFilterRequest = struct(n0, _GDCFR, 0, [_TCI, _DN, _TN, _N], [0, 0, 0, 0]);
export var GetDataCellsFilterResponse = struct(n0, _GDCFRe, 0, [_DCF], [() => DataCellsFilter]);
export var RowFilter = struct(n0, _RF, 0, [_FE, _ARW], [0, () => AllRowsWildcard]);
export var UpdateDataCellsFilterRequest = struct(n0, _UDCFR, 0, [_TD], [() => DataCellsFilter]);
export var UpdateDataCellsFilterResponse = struct(n0, _UDCFRp, 0, [], []);
export var GetDataCellsFilter = op(
  n0,
  _GDCF,
  {
    [_h]: ["POST", "/GetDataCellsFilter", 200],
  },
  () => GetDataCellsFilterRequest,
  () => GetDataCellsFilterResponse
);
export var UpdateDataCellsFilter = op(
  n0,
  _UDCF,
  {
    [_h]: ["POST", "/UpdateDataCellsFilter", 200],
  },
  () => UpdateDataCellsFilterRequest,
  () => UpdateDataCellsFilterResponse
);
