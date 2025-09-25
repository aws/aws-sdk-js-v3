// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AIA,
  _aia,
  _AIL,
  _AIp,
  _AIS,
  _AIUA,
  _AIUL,
  _AIUp,
  _AIUS,
  _h,
  _hQ,
  _LAI,
  _LAIR,
  _LAIRi,
  _LAIU,
  _LAIUR,
  _LAIURi,
  _M,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  n0,
} from "./schemas_0";
import { NonEmptyResourceName } from "./schemas_9_App";
import { UserName } from "./schemas_11_App";
import { Metadata } from "./schemas_13_App";

/* eslint no-var: 0 */

export var NextToken = sim(n0, _NT, 0, 8);
export var AppInstanceSummary = struct(
  n0,
  _AIS,
  0,
  [_AIA, _N, _M],
  [0, [() => NonEmptyResourceName, 0], [() => Metadata, 0]]
);
export var AppInstanceUserSummary = struct(
  n0,
  _AIUS,
  0,
  [_AIUA, _N, _M],
  [0, [() => UserName, 0], [() => Metadata, 0]]
);
export var ListAppInstancesRequest = struct(
  n0,
  _LAIR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListAppInstancesResponse = struct(
  n0,
  _LAIRi,
  0,
  [_AIp, _NT],
  [
    [() => AppInstanceList, 0],
    [() => NextToken, 0],
  ]
);
export var ListAppInstanceUsersRequest = struct(
  n0,
  _LAIUR,
  0,
  [_AIA, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _aia,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListAppInstanceUsersResponse = struct(
  n0,
  _LAIURi,
  0,
  [_AIA, _AIUp, _NT],
  [0, [() => AppInstanceUserList, 0], [() => NextToken, 0]]
);
export var AppInstanceList = list(n0, _AIL, 0, [() => AppInstanceSummary, 0]);
export var AppInstanceUserList = list(n0, _AIUL, 0, [() => AppInstanceUserSummary, 0]);
export var ListAppInstances = op(
  n0,
  _LAI,
  {
    [_h]: ["GET", "/app-instances", 200],
  },
  () => ListAppInstancesRequest,
  () => ListAppInstancesResponse
);
export var ListAppInstanceUsers = op(
  n0,
  _LAIU,
  {
    [_h]: ["GET", "/app-instance-users", 200],
  },
  () => ListAppInstanceUsersRequest,
  () => ListAppInstanceUsersResponse
);
