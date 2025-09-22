// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _CSV,
  _CSVR,
  _CSVRr,
  _fR,
  _LSV,
  _LSVR,
  _LSVRi,
  _lUDT,
  _mRa,
  _n,
  _nT,
  _s,
  _sAo,
  _sVA,
  _SVo,
  _sVo,
  _SVS,
  _t,
  _tM,
  _tT,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSolutionVersionRequest = struct(n0, _CSVR, 0, [_n, _sAo, _tM, _t], [0, 0, 0, [() => Tags, 0]]);
export var CreateSolutionVersionResponse = struct(n0, _CSVRr, 0, [_sVA], [0]);
export var ListSolutionVersionsRequest = struct(n0, _LSVR, 0, [_sAo, _nT, _mRa], [0, 0, 1]);
export var ListSolutionVersionsResponse = struct(n0, _LSVRi, 0, [_sVo, _nT], [() => SolutionVersions, 0]);
export var SolutionVersionSummary = struct(n0, _SVS, 0, [_sVA, _s, _tM, _tT, _cDT, _lUDT, _fR], [0, 0, 0, 0, 4, 4, 0]);
export var SolutionVersions = list(n0, _SVo, 0, () => SolutionVersionSummary);
export var CreateSolutionVersion = op(
  n0,
  _CSV,
  0,
  () => CreateSolutionVersionRequest,
  () => CreateSolutionVersionResponse
);
export var ListSolutionVersions = op(
  n0,
  _LSV,
  2,
  () => ListSolutionVersionsRequest,
  () => ListSolutionVersionsResponse
);
