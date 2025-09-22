// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aCR,
  _aEC,
  _aI,
  _aLC,
  _ar,
  _b,
  _cPI,
  _cT,
  _cWL,
  _CWLD,
  _d,
  _dD,
  _eCx,
  _eIn,
  _fC,
  _GP,
  _GPR,
  _GPRe,
  _h,
  _lC,
  _lG,
  _lUT,
  _n,
  _P,
  _p,
  _PACR,
  _PDD,
  _pre,
  _SD,
  _sD,
  _st,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogsDestination = struct(n0, _CWLD, 0, [_lG], [0]);
export var GetProjectRequest = struct(n0, _GPR, 0, [_p], [[0, 1]]);
export var GetProjectResponse = struct(n0, _GPRe, 0, [_p], [() => Project]);
export var Project = struct(
  n0,
  _P,
  0,
  [_ar, _n, _st, _d, _cT, _lUT, _fC, _lC, _aLC, _eCx, _aEC, _dD, _aCR, _ta],
  [0, 0, 0, 0, 4, 4, 1, 1, 1, 1, 1, () => ProjectDataDelivery, () => ProjectAppConfigResource, 128 | 0]
);
export var ProjectAppConfigResource = struct(n0, _PACR, 0, [_aI, _eIn, _cPI], [0, 0, 0]);
export var ProjectDataDelivery = struct(
  n0,
  _PDD,
  0,
  [_sD, _cWL],
  [() => S3Destination, () => CloudWatchLogsDestination]
);
export var S3Destination = struct(n0, _SD, 0, [_b, _pre], [0, 0]);
export var GetProject = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/projects/{project}", 200],
  },
  () => GetProjectRequest,
  () => GetProjectResponse
);
