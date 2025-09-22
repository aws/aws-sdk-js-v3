// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ANt,
  _DN,
  _h,
  _hQ,
  _It,
  _LOTA,
  _LOTAI,
  _LOTAL,
  _LOTAR,
  _LOTARi,
  _LUA,
  _MR,
  _mr,
  _NT,
  _nt,
  _OTN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListObjectTypeAttributeItem = struct(n0, _LOTAI, 0, [_ANt, _LUA], [0, 4]);
export var ListObjectTypeAttributesRequest = struct(
  n0,
  _LOTAR,
  0,
  [_NT, _MR, _DN, _OTN],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ListObjectTypeAttributesResponse = struct(
  n0,
  _LOTARi,
  0,
  [_It, _NT],
  [() => ListObjectTypeAttributesList, 0]
);
export var ListObjectTypeAttributesList = list(n0, _LOTAL, 0, () => ListObjectTypeAttributeItem);
export var ListObjectTypeAttributes = op(
  n0,
  _LOTA,
  {
    [_h]: ["GET", "/domains/{DomainName}/object-types/{ObjectTypeName}/attributes", 200],
  },
  () => ListObjectTypeAttributesRequest,
  () => ListObjectTypeAttributesResponse
);
