// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _d,
  _end,
  _hQ,
  _ht,
  _i,
  _LPi,
  _LPRis,
  _LPRist,
  _lUD,
  _mR,
  _n,
  _nT,
  _pIo,
  _PSr,
  _pSr,
  _PSro,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProjectsRequest = struct(
  n0,
  _LPRis,
  0,
  [_pIo, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _pIo,
      },
    ],
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
export var ListProjectsResponse = struct(n0, _LPRist, 0, [_pSr, _nT], [() => ProjectSummaries, 0]);
export var ProjectSummary = struct(n0, _PSr, 0, [_i, _n, _d, _cD, _lUD], [0, 0, 0, 4, 4]);
export var ProjectSummaries = list(n0, _PSro, 0, () => ProjectSummary);
export var ListProjects = op(
  n0,
  _LPi,
  {
    [_ht]: ["GET", "/projects", 200],
    [_end]: ["monitor."],
  },
  () => ListProjectsRequest,
  () => ListProjectsResponse
);
