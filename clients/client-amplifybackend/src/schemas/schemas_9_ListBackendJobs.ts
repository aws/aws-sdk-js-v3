// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BEN,
  _bEN,
  _BJRO,
  _CT,
  _cT,
  _E,
  _e,
  _h,
  _J,
  _j,
  _JI,
  _jI,
  _jN,
  _LBJ,
  _LBJR,
  _LBJRi,
  _LOBJRO,
  _MR,
  _mR,
  _NT,
  _nT,
  _O,
  _o,
  _St,
  _st,
  _UT,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackendJobRespObj = struct(
  n0,
  _BJRO,
  0,
  [_AI, _BEN, _CT, _E, _JI, _O, _St, _UT],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _uT,
      },
    ],
  ]
);
export var ListBackendJobsRequest = struct(
  n0,
  _LBJR,
  0,
  [_AI, _BEN, _JI, _MR, _NT, _O, _St],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ListBackendJobsResponse = struct(
  n0,
  _LBJRi,
  0,
  [_J, _NT],
  [
    [
      () => ListOfBackendJobRespObj,
      {
        [_jN]: _j,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListOfBackendJobRespObj = list(n0, _LOBJRO, 0, [() => BackendJobRespObj, 0]);
export var ListBackendJobs = op(
  n0,
  _LBJ,
  {
    [_h]: ["POST", "/backend/{AppId}/job/{BackendEnvironmentName}", 200],
  },
  () => ListBackendJobsRequest,
  () => ListBackendJobsResponse
);
