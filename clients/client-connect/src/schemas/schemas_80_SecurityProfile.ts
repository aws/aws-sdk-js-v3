// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AP,
  _Ap,
  _App,
  _h,
  _hQ,
  _II,
  _LMR,
  _LMT,
  _LSPA,
  _LSPAR,
  _LSPARi,
  _mR,
  _MRa,
  _Na,
  _NT,
  _nT,
  _SPI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Application = struct(n0, _Ap, 0, [_Na, _AP], [0, 64 | 0]);
export var ListSecurityProfileApplicationsRequest = struct(
  n0,
  _LSPAR,
  0,
  [_SPI, _II, _NT, _MRa],
  [
    [0, 1],
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
export var ListSecurityProfileApplicationsResponse = struct(
  n0,
  _LSPARi,
  0,
  [_App, _NT, _LMT, _LMR],
  [() => Applications, 0, 4, 0]
);
export var ApplicationPermissions = 64 | 0;

export var Applications = list(n0, _App, 0, () => Application);
export var ListSecurityProfileApplications = op(
  n0,
  _LSPA,
  {
    [_h]: ["GET", "/security-profiles-applications/{InstanceId}/{SecurityProfileId}", 200],
  },
  () => ListSecurityProfileApplicationsRequest,
  () => ListSecurityProfileApplicationsResponse
);
