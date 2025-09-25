// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DT,
  _DTR,
  _GTML,
  _GTMLR,
  _GTMLRe,
  _h,
  _hQ,
  _mL,
  _n,
  _na,
  _nN,
  _nNN,
  _RT,
  _RTR,
  _tARN,
  _tBARN,
  _UTML,
  _UTMLR,
  _UTMLRp,
  _vT,
  _wL,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTableRequest = struct(
  n0,
  _DTR,
  0,
  [_tBARN, _n, _na, _vT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vT,
      },
    ],
  ]
);
export var GetTableMetadataLocationRequest = struct(
  n0,
  _GTMLR,
  0,
  [_tBARN, _n, _na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetTableMetadataLocationResponse = struct(n0, _GTMLRe, 0, [_vT, _mL, _wL], [0, 0, 0]);
export var RenameTableRequest = struct(
  n0,
  _RTR,
  0,
  [_tBARN, _n, _na, _nNN, _nN, _vT],
  [[0, 1], [0, 1], [0, 1], 0, 0, 0]
);
export var UpdateTableMetadataLocationRequest = struct(
  n0,
  _UTMLR,
  0,
  [_tBARN, _n, _na, _vT, _mL],
  [[0, 1], [0, 1], [0, 1], 0, 0]
);
export var UpdateTableMetadataLocationResponse = struct(
  n0,
  _UTMLRp,
  0,
  [_na, _tARN, _n, _vT, _mL],
  [0, 0, 64 | 0, 0, 0]
);
export var DeleteTable = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/tables/{tableBucketARN}/{namespace}/{name}", 204],
  },
  () => DeleteTableRequest,
  () => Unit
);
export var GetTableMetadataLocation = op(
  n0,
  _GTML,
  {
    [_h]: ["GET", "/tables/{tableBucketARN}/{namespace}/{name}/metadata-location", 200],
  },
  () => GetTableMetadataLocationRequest,
  () => GetTableMetadataLocationResponse
);
export var RenameTable = op(
  n0,
  _RT,
  {
    [_h]: ["PUT", "/tables/{tableBucketARN}/{namespace}/{name}/rename", 204],
  },
  () => RenameTableRequest,
  () => Unit
);
export var UpdateTableMetadataLocation = op(
  n0,
  _UTML,
  {
    [_h]: ["PUT", "/tables/{tableBucketARN}/{namespace}/{name}/metadata-location", 200],
  },
  () => UpdateTableMetadataLocationRequest,
  () => UpdateTableMetadataLocationResponse
);
