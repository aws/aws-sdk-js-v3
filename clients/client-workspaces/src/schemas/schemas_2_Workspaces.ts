// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _EC,
  _EM,
  _FR,
  _FRWR,
  _FRWRa,
  _FSWR,
  _FSWRa,
  _FTWR,
  _FWCR,
  _RR,
  _RRe,
  _RWeb,
  _RWebu,
  _RWR,
  _RWRe,
  _RWReb,
  _RWRebu,
  _RWRebui,
  _RWRebuil,
  _SRt,
  _SRto,
  _SWRt,
  _SWRta,
  _SWRtar,
  _SWRto,
  _SWRtop,
  _SWRtopo,
  _SWta,
  _SWto,
  _TR,
  _TW,
  _TWR,
  _TWRe,
  _TWRer,
  _WI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FailedWorkspaceChangeRequest = struct(n0, _FWCR, 0, [_WI, _EC, _EM], [0, 0, 0]);
export var RebootRequest = struct(n0, _RR, 0, [_WI], [0]);
export var RebootWorkspacesRequest = struct(n0, _RWR, 0, [_RWRe], [() => RebootWorkspaceRequests]);
export var RebootWorkspacesResult = struct(n0, _RWReb, 0, [_FR], [() => FailedRebootWorkspaceRequests]);
export var RebuildRequest = struct(n0, _RRe, 0, [_WI], [0]);
export var RebuildWorkspacesRequest = struct(n0, _RWRebu, 0, [_RWRebui], [() => RebuildWorkspaceRequests]);
export var RebuildWorkspacesResult = struct(n0, _RWRebuil, 0, [_FR], [() => FailedRebuildWorkspaceRequests]);
export var StartRequest = struct(n0, _SRt, 0, [_WI], [0]);
export var StartWorkspacesRequest = struct(n0, _SWRt, 0, [_SWRta], [() => StartWorkspaceRequests]);
export var StartWorkspacesResult = struct(n0, _SWRtar, 0, [_FR], [() => FailedStartWorkspaceRequests]);
export var StopRequest = struct(n0, _SRto, 0, [_WI], [0]);
export var StopWorkspacesRequest = struct(n0, _SWRto, 0, [_SWRtop], [() => StopWorkspaceRequests]);
export var StopWorkspacesResult = struct(n0, _SWRtopo, 0, [_FR], [() => FailedStopWorkspaceRequests]);
export var TerminateRequest = struct(n0, _TR, 0, [_WI], [0]);
export var TerminateWorkspacesRequest = struct(n0, _TWR, 0, [_TWRe], [() => TerminateWorkspaceRequests]);
export var TerminateWorkspacesResult = struct(n0, _TWRer, 0, [_FR], [() => FailedTerminateWorkspaceRequests]);
export var FailedRebootWorkspaceRequests = list(n0, _FRWR, 0, () => FailedWorkspaceChangeRequest);
export var FailedRebuildWorkspaceRequests = list(n0, _FRWRa, 0, () => FailedWorkspaceChangeRequest);
export var FailedStartWorkspaceRequests = list(n0, _FSWR, 0, () => FailedWorkspaceChangeRequest);
export var FailedStopWorkspaceRequests = list(n0, _FSWRa, 0, () => FailedWorkspaceChangeRequest);
export var FailedTerminateWorkspaceRequests = list(n0, _FTWR, 0, () => FailedWorkspaceChangeRequest);
export var RebootWorkspaceRequests = list(n0, _RWRe, 0, () => RebootRequest);
export var RebuildWorkspaceRequests = list(n0, _RWRebui, 0, () => RebuildRequest);
export var StartWorkspaceRequests = list(n0, _SWRta, 0, () => StartRequest);
export var StopWorkspaceRequests = list(n0, _SWRtop, 0, () => StopRequest);
export var TerminateWorkspaceRequests = list(n0, _TWRe, 0, () => TerminateRequest);
export var RebootWorkspaces = op(
  n0,
  _RWeb,
  0,
  () => RebootWorkspacesRequest,
  () => RebootWorkspacesResult
);
export var RebuildWorkspaces = op(
  n0,
  _RWebu,
  0,
  () => RebuildWorkspacesRequest,
  () => RebuildWorkspacesResult
);
export var StartWorkspaces = op(
  n0,
  _SWta,
  0,
  () => StartWorkspacesRequest,
  () => StartWorkspacesResult
);
export var StopWorkspaces = op(
  n0,
  _SWto,
  0,
  () => StopWorkspacesRequest,
  () => StopWorkspacesResult
);
export var TerminateWorkspaces = op(
  n0,
  _TW,
  0,
  () => TerminateWorkspacesRequest,
  () => TerminateWorkspacesResult
);
