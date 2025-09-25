// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AS,
  _ASL,
  _CA,
  _D,
  _DA,
  _h,
  _hQ,
  _Id,
  _It,
  _LA,
  _LAI,
  _LAO,
  _LSG,
  _LSGI,
  _LSGO,
  _LUA,
  _MR,
  _NT,
  _RE,
  _S,
  _SC,
  _SGS,
  _SGSL,
  _Ty,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(
  n0,
  _AS,
  0,
  [_A, _Id, _D, _S, _CA, _LUA, _RE],
  [0, 0, 0, 0, 4, 4, () => RuntimeEnvironment]
);
export var DefaultApplication = struct(n0, _DA, 0, [_Id, _A], [0, 0]);
export var ListApplicationsInput = struct(
  n0,
  _LAI,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListApplicationsOutput = struct(n0, _LAO, 0, [_It, _NT], [() => ApplicationSummaryList, 0]);
export var ListStreamGroupsInput = struct(
  n0,
  _LSGI,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListStreamGroupsOutput = struct(n0, _LSGO, 0, [_It, _NT], [() => StreamGroupSummaryList, 0]);
export var RuntimeEnvironment = struct(n0, _RE, 0, [_Ty, _V], [0, 0]);
export var StreamGroupSummary = struct(
  n0,
  _SGS,
  0,
  [_A, _Id, _D, _DA, _SC, _S, _CA, _LUA],
  [0, 0, 0, () => DefaultApplication, 0, 0, 4, 4]
);
export var ApplicationSummaryList = list(n0, _ASL, 0, () => ApplicationSummary);
export var StreamGroupSummaryList = list(n0, _SGSL, 0, () => StreamGroupSummary);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsInput,
  () => ListApplicationsOutput
);
export var ListStreamGroups = op(
  n0,
  _LSG,
  {
    [_h]: ["GET", "/streamgroups", 200],
  },
  () => ListStreamGroupsInput,
  () => ListStreamGroupsOutput
);
