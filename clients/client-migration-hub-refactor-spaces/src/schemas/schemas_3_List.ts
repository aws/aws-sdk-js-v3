// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _CB,
  _CT,
  _EI,
  _EIn,
  _EV,
  _EVL,
  _EVn,
  _h,
  _hQ,
  _LEV,
  _LEVR,
  _LEVRi,
  _LUT,
  _MR,
  _mR,
  _NT,
  _nT,
  _VI,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnvironmentVpc = struct(n0, _EV, 0, [_EI, _VI, _AIc, _CB, _VN, _LUT, _CT], [0, 0, 0, 64 | 0, 0, 4, 4]);
export var ListEnvironmentVpcsRequest = struct(
  n0,
  _LEVR,
  0,
  [_EIn, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListEnvironmentVpcsResponse = struct(n0, _LEVRi, 0, [_EVL, _NT], [() => EnvironmentVpcs, 0]);
export var CidrBlocks = 64 | 0;

export var EnvironmentVpcs = list(n0, _EVn, 0, () => EnvironmentVpc);
export var ListEnvironmentVpcs = op(
  n0,
  _LEV,
  {
    [_h]: ["GET", "/environments/{EnvironmentIdentifier}/vpcs", 200],
  },
  () => ListEnvironmentVpcsRequest,
  () => ListEnvironmentVpcsResponse
);
