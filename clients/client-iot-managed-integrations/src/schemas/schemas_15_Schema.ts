// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _h,
  _hQ,
  _It,
  _LSV,
  _LSVR,
  _LSVRi,
  _MR,
  _Na,
  _NF,
  _NT,
  _SI,
  _SIF,
  _SV,
  _SVF,
  _SVL,
  _SVLI,
  _T,
  _V,
  _VF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSchemaVersionsRequest = struct(
  n0,
  _LSVR,
  0,
  [_T, _MR, _NT, _SI, _Na, _V, _SV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _SIF,
      },
    ],
    [
      0,
      {
        [_hQ]: _NF,
      },
    ],
    [
      0,
      {
        [_hQ]: _VF,
      },
    ],
    [
      0,
      {
        [_hQ]: _SVF,
      },
    ],
  ]
);
export var ListSchemaVersionsResponse = struct(n0, _LSVRi, 0, [_It, _NT], [() => SchemaVersionList, 0]);
export var SchemaVersionListItem = struct(n0, _SVLI, 0, [_SI, _T, _D, _Na, _SV, _V], [0, 0, 0, 0, 0, 0]);
export var SchemaVersionList = list(n0, _SVL, 0, () => SchemaVersionListItem);
export var ListSchemaVersions = op(
  n0,
  _LSV,
  {
    [_h]: ["GET", "/schema-versions/{Type}", 200],
  },
  () => ListSchemaVersionsRequest,
  () => ListSchemaVersionsResponse
);
