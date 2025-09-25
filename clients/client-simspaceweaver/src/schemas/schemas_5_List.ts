// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ap,
  _d,
  _Do,
  _h,
  _hQ,
  _LA,
  _LAI,
  _LAO,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _S,
  _s,
  _SAL,
  _SAM,
  _St,
  _TS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListAppsInput = struct(
  n0,
  _LAI,
  0,
  [_S, _Do, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
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
  ]
);
export var ListAppsOutput = struct(n0, _LAO, 0, [_Ap, _NT], [() => SimulationAppList, 0]);
export var SimulationAppMetadata = struct(n0, _SAM, 0, [_N, _S, _Do, _St, _TS], [0, 0, 0, 0, 0]);
export var SimulationAppList = list(n0, _SAL, 0, () => SimulationAppMetadata);
export var ListApps = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/listapps", 200],
  },
  () => ListAppsInput,
  () => ListAppsOutput
);
