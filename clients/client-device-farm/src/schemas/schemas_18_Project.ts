// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _CP,
  _CPR,
  _CPRr,
  _cr,
  _dJTM,
  _GP,
  _GPR,
  _GPRe,
  _LP,
  _LPR,
  _LPRi,
  _n,
  _nT,
  _Pr,
  _pr,
  _pro,
  _Proj,
  _UPp,
  _UPR,
  _UPRp,
  _vC,
  n0,
} from "./schemas_0";
import { VpcConfig } from "./schemas_3_RemoteAccess";

/* eslint no-var: 0 */

export var CreateProjectRequest = struct(n0, _CPR, 0, [_n, _dJTM, _vC], [0, 1, () => VpcConfig]);
export var CreateProjectResult = struct(n0, _CPRr, 0, [_pr], [() => Project]);
export var GetProjectRequest = struct(n0, _GPR, 0, [_a], [0]);
export var GetProjectResult = struct(n0, _GPRe, 0, [_pr], [() => Project]);
export var ListProjectsRequest = struct(n0, _LPR, 0, [_a, _nT], [0, 0]);
export var ListProjectsResult = struct(n0, _LPRi, 0, [_pro, _nT], [() => Projects, 0]);
export var Project = struct(n0, _Pr, 0, [_a, _n, _dJTM, _cr, _vC], [0, 0, 1, 4, () => VpcConfig]);
export var UpdateProjectRequest = struct(n0, _UPR, 0, [_a, _n, _dJTM, _vC], [0, 0, 1, () => VpcConfig]);
export var UpdateProjectResult = struct(n0, _UPRp, 0, [_pr], [() => Project]);
export var Projects = list(n0, _Proj, 0, () => Project);
export var CreateProject = op(
  n0,
  _CP,
  0,
  () => CreateProjectRequest,
  () => CreateProjectResult
);
export var GetProject = op(
  n0,
  _GP,
  0,
  () => GetProjectRequest,
  () => GetProjectResult
);
export var ListProjects = op(
  n0,
  _LP,
  0,
  () => ListProjectsRequest,
  () => ListProjectsResult
);
export var UpdateProject = op(
  n0,
  _UPp,
  0,
  () => UpdateProjectRequest,
  () => UpdateProjectResult
);
