// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _cD, _DDe, _DDRes, _DDResc, _h, _lMD, _n, _sVt, _ty, _UD, _UDR, _UDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDimensionRequest = struct(n0, _DDRes, 0, [_n], [[0, 1]]);
export var DescribeDimensionResponse = struct(n0, _DDResc, 0, [_n, _ar, _ty, _sVt, _cD, _lMD], [0, 0, 0, 64 | 0, 4, 4]);
export var UpdateDimensionRequest = struct(n0, _UDR, 0, [_n, _sVt], [[0, 1], 64 | 0]);
export var UpdateDimensionResponse = struct(n0, _UDRp, 0, [_n, _ar, _ty, _sVt, _cD, _lMD], [0, 0, 0, 64 | 0, 4, 4]);
export var DimensionStringValues = 64 | 0;

export var DescribeDimension = op(
  n0,
  _DDe,
  {
    [_h]: ["GET", "/dimensions/{name}", 200],
  },
  () => DescribeDimensionRequest,
  () => DescribeDimensionResponse
);
export var UpdateDimension = op(
  n0,
  _UD,
  {
    [_h]: ["PATCH", "/dimensions/{name}", 200],
  },
  () => UpdateDimensionRequest,
  () => UpdateDimensionResponse
);
