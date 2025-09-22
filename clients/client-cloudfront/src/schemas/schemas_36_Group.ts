// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AILI,
  _Ar,
  _CG,
  _CTr,
  _E,
  _ET,
  _GCG,
  _GCGBRE,
  _GCGBRER,
  _GCGBRERe,
  _GCGR,
  _GCGRe,
  _h,
  _hH,
  _hQ,
  _ID,
  _Id,
  _Ide,
  _IE,
  _LMT,
  _N,
  _RE,
  _S,
  _Ta,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionGroup = struct(
  n0,
  _CG,
  0,
  [_Id, _N, _Ar, _CTr, _LMT, _Ta, _IE, _RE, _AILI, _S, _E, _ID],
  [0, 0, 0, 4, 4, [() => Tags, 0], 2, 0, 0, 0, 2, 2]
);
export var GetConnectionGroupByRoutingEndpointRequest = struct(
  n0,
  _GCGBRER,
  0,
  [_RE],
  [
    [
      0,
      {
        [_hQ]: _RE,
      },
    ],
  ]
);
export var GetConnectionGroupByRoutingEndpointResult = struct(
  n0,
  _GCGBRERe,
  0,
  [_CG, _ET],
  [
    [() => ConnectionGroup, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetConnectionGroupRequest = struct(n0, _GCGR, 0, [_Ide], [[0, 1]]);
export var GetConnectionGroupResult = struct(
  n0,
  _GCGRe,
  0,
  [_CG, _ET],
  [
    [() => ConnectionGroup, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetConnectionGroup = op(
  n0,
  _GCG,
  {
    [_h]: ["GET", "/2020-05-31/connection-group/{Identifier}", 200],
  },
  () => GetConnectionGroupRequest,
  () => GetConnectionGroupResult
);
export var GetConnectionGroupByRoutingEndpoint = op(
  n0,
  _GCGBRE,
  {
    [_h]: ["GET", "/2020-05-31/connection-group", 200],
  },
  () => GetConnectionGroupByRoutingEndpointRequest,
  () => GetConnectionGroupByRoutingEndpointResult
);
