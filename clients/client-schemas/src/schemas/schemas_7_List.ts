// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _jN,
  _l,
  _Li,
  _lORS,
  _lOSVS,
  _LR,
  _LRR,
  _LRRi,
  _LSV,
  _LSVR,
  _LSVRi,
  _NT,
  _nT,
  _R,
  _RA,
  _RN,
  _RNP,
  _rNP,
  _RS,
  _SAc,
  _Sc,
  _sc,
  _SN,
  _SV,
  _SVc,
  _SVS,
  _T,
  _t,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListRegistriesRequest = struct(
  n0,
  _LRR,
  0,
  [_Li, _NT, _RNP, _Sc],
  [
    [
      1,
      {
        [_hQ]: _l,
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
        [_hQ]: _rNP,
      },
    ],
    [
      0,
      {
        [_hQ]: _sc,
      },
    ],
  ]
);
export var ListRegistriesResponse = struct(n0, _LRRi, 0, [_NT, _R], [0, [() => __listOfRegistrySummary, 0]]);
export var ListSchemaVersionsRequest = struct(
  n0,
  _LSVR,
  0,
  [_Li, _NT, _RN, _SN],
  [
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ListSchemaVersionsResponse = struct(n0, _LSVRi, 0, [_NT, _SVc], [0, () => __listOfSchemaVersionSummary]);
export var RegistrySummary = struct(
  n0,
  _RS,
  0,
  [_RA, _RN, _T],
  [
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var SchemaVersionSummary = struct(n0, _SVS, 0, [_SAc, _SN, _SV, _Ty], [0, 0, 0, 0]);
export var __listOfRegistrySummary = list(n0, _lORS, 0, [() => RegistrySummary, 0]);
export var __listOfSchemaVersionSummary = list(n0, _lOSVS, 0, () => SchemaVersionSummary);
export var ListRegistries = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/v1/registries", 200],
  },
  () => ListRegistriesRequest,
  () => ListRegistriesResponse
);
export var ListSchemaVersions = op(
  n0,
  _LSV,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions", 200],
  },
  () => ListSchemaVersionsRequest,
  () => ListSchemaVersionsResponse
);
