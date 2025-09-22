// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AT,
  _CA,
  _D,
  _DGI,
  _DS,
  _DSE,
  _DSI,
  _h,
  _hQ,
  _I,
  _LDS,
  _LDSR,
  _LDSRi,
  _LODSE,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _O,
  _o,
  _OD,
  _PI,
  _SI,
  _UA,
  _UDS,
  _UDSR,
  _UDSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSetEntry = struct(
  n0,
  _DSE,
  0,
  [_A, _AT, _CA, _D, _I, _N, _O, _OD, _SI, _UA],
  [0, 0, 5, 0, 0, 0, 0, () => OriginDetails, 0, 5]
);
export var ListDataSetsRequest = struct(
  n0,
  _LDSR,
  0,
  [_MR, _NT, _O],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
  ]
);
export var ListDataSetsResponse = struct(n0, _LDSRi, 0, [_DS, _NT], [() => ListOfDataSetEntry, 0]);
export var OriginDetails = struct(n0, _OD, 0, [_PI, _DGI], [0, 0]);
export var UpdateDataSetRequest = struct(n0, _UDSR, 0, [_DSI, _D, _N], [[0, 1], 0, 0]);
export var UpdateDataSetResponse = struct(
  n0,
  _UDSRp,
  0,
  [_A, _AT, _CA, _D, _I, _N, _O, _OD, _SI, _UA],
  [0, 0, 5, 0, 0, 0, 0, () => OriginDetails, 0, 5]
);
export var ListOfDataSetEntry = list(n0, _LODSE, 0, () => DataSetEntry);
export var ListDataSets = op(
  n0,
  _LDS,
  {
    [_h]: ["GET", "/v1/data-sets", 200],
  },
  () => ListDataSetsRequest,
  () => ListDataSetsResponse
);
export var UpdateDataSet = op(
  n0,
  _UDS,
  {
    [_h]: ["PATCH", "/v1/data-sets/{DataSetId}", 200],
  },
  () => UpdateDataSetRequest,
  () => UpdateDataSetResponse
);
