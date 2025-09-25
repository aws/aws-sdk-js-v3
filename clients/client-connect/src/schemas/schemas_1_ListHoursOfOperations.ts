// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _h,
  _HOOS,
  _HOOSL,
  _hQ,
  _I,
  _II,
  _LHOO,
  _LHOOR,
  _LHOORi,
  _LMR,
  _LMT,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var HoursOfOperationSummary = struct(n0, _HOOS, 0, [_I, _A, _N, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var ListHoursOfOperationsRequest = struct(
  n0,
  _LHOOR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListHoursOfOperationsResponse = struct(
  n0,
  _LHOORi,
  0,
  [_HOOSL, _NT],
  [() => HoursOfOperationSummaryList, 0]
);
export var HoursOfOperationSummaryList = list(n0, _HOOSL, 0, () => HoursOfOperationSummary);
export var ListHoursOfOperations = op(
  n0,
  _LHOO,
  {
    [_h]: ["GET", "/hours-of-operations-summary/{InstanceId}", 200],
  },
  () => ListHoursOfOperationsRequest,
  () => ListHoursOfOperationsResponse
);
