// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CT,
  _GIr,
  _Gr,
  _h,
  _hQ,
  _I,
  _LG,
  _LGR,
  _LGRi,
  _lOGI,
  _LUT,
  _LV,
  _LVA,
  _MR,
  _N,
  _NT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GroupInformation = struct(n0, _GIr, 0, [_A, _CT, _I, _LUT, _LV, _LVA, _N], [0, 0, 0, 0, 0, 0, 0]);
export var ListGroupsRequest = struct(
  n0,
  _LGR,
  0,
  [_MR, _NT],
  [
    [
      0,
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
  ]
);
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_Gr, _NT], [() => __listOfGroupInformation, 0]);
export var __listOfGroupInformation = list(n0, _lOGI, 0, () => GroupInformation);
export var ListGroups = op(
  n0,
  _LG,
  {
    [_h]: ["GET", "/greengrass/groups", 200],
  },
  () => ListGroupsRequest,
  () => ListGroupsResponse
);
