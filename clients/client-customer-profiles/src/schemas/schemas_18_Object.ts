// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _D,
  _DN,
  _h,
  _hQ,
  _It,
  _LPOT,
  _LPOTI,
  _LPOTR,
  _LPOTRi,
  _LUA,
  _MAPOC,
  _MPOC,
  _MR,
  _mr,
  _NT,
  _nt,
  _OTN,
  _POTL,
  _Ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProfileObjectTypeItem = struct(
  n0,
  _LPOTI,
  0,
  [_OTN, _D, _CA, _LUA, _MPOC, _MAPOC, _Ta],
  [0, 0, 4, 4, 1, 1, 128 | 0]
);
export var ListProfileObjectTypesRequest = struct(
  n0,
  _LPOTR,
  0,
  [_DN, _NT, _MR],
  [
    [0, 1],
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
  ]
);
export var ListProfileObjectTypesResponse = struct(n0, _LPOTRi, 0, [_It, _NT], [[() => ProfileObjectTypeList, 0], 0]);
export var ProfileObjectTypeList = list(n0, _POTL, 8, () => ListProfileObjectTypeItem);
export var ListProfileObjectTypes = op(
  n0,
  _LPOT,
  {
    [_h]: ["GET", "/domains/{DomainName}/object-types", 200],
  },
  () => ListProfileObjectTypesRequest,
  () => ListProfileObjectTypesResponse
);
