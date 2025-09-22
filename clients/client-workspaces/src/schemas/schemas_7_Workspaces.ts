// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSW,
  _CSWR,
  _CSWRr,
  _DI,
  _DR,
  _EC,
  _EM,
  _FCSWR,
  _FCSWRL,
  _FSR,
  _PCSWR,
  _PCSWRL,
  _PR,
  _PSR,
  _PWI,
  _S,
  _SW,
  _SWL,
  _SWR,
  _SWt,
  _T,
  _UN,
  _VEK,
  _WI,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateStandbyWorkspacesRequest = struct(n0, _CSWR, 0, [_PR, _SW], [0, () => StandbyWorkspacesList]);
export var CreateStandbyWorkspacesResult = struct(
  n0,
  _CSWRr,
  0,
  [_FSR, _PSR],
  [() => FailedCreateStandbyWorkspacesRequestList, () => PendingCreateStandbyWorkspacesRequestList]
);
export var FailedCreateStandbyWorkspacesRequest = struct(
  n0,
  _FCSWR,
  0,
  [_SWR, _EC, _EM],
  [() => StandbyWorkspace, 0, 0]
);
export var PendingCreateStandbyWorkspacesRequest = struct(n0, _PCSWR, 0, [_UN, _DI, _S, _WI], [0, 0, 0, 0]);
export var StandbyWorkspace = struct(n0, _SWt, 0, [_PWI, _VEK, _DI, _T, _DR], [0, 0, 0, () => TagList, 0]);
export var FailedCreateStandbyWorkspacesRequestList = list(n0, _FCSWRL, 0, () => FailedCreateStandbyWorkspacesRequest);
export var PendingCreateStandbyWorkspacesRequestList = list(
  n0,
  _PCSWRL,
  0,
  () => PendingCreateStandbyWorkspacesRequest
);
export var StandbyWorkspacesList = list(n0, _SWL, 0, () => StandbyWorkspace);
export var CreateStandbyWorkspaces = op(
  n0,
  _CSW,
  0,
  () => CreateStandbyWorkspacesRequest,
  () => CreateStandbyWorkspacesResult
);
