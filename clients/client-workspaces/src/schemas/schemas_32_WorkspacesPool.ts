// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { OperationInProgressException as __OperationInProgressException } from "../models/index";
import {
  _c,
  _e,
  _m,
  _OIPE,
  _PI,
  _SIe,
  _SWPR,
  _SWPRt,
  _SWPRto,
  _SWPRtop,
  _SWPt,
  _SWPto,
  _TWP,
  _TWPR,
  _TWPRe,
  _TWPS,
  _TWPSR,
  _TWPSRe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var OperationInProgressException = error(
  n0,
  _OIPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __OperationInProgressException
);
export var StartWorkspacesPoolRequest = struct(n0, _SWPR, 0, [_PI], [0]);
export var StartWorkspacesPoolResult = struct(n0, _SWPRt, 0, [], []);
export var StopWorkspacesPoolRequest = struct(n0, _SWPRto, 0, [_PI], [0]);
export var StopWorkspacesPoolResult = struct(n0, _SWPRtop, 0, [], []);
export var TerminateWorkspacesPoolRequest = struct(n0, _TWPR, 0, [_PI], [0]);
export var TerminateWorkspacesPoolResult = struct(n0, _TWPRe, 0, [], []);
export var TerminateWorkspacesPoolSessionRequest = struct(n0, _TWPSR, 0, [_SIe], [0]);
export var TerminateWorkspacesPoolSessionResult = struct(n0, _TWPSRe, 0, [], []);
export var StartWorkspacesPool = op(
  n0,
  _SWPt,
  0,
  () => StartWorkspacesPoolRequest,
  () => StartWorkspacesPoolResult
);
export var StopWorkspacesPool = op(
  n0,
  _SWPto,
  0,
  () => StopWorkspacesPoolRequest,
  () => StopWorkspacesPoolResult
);
export var TerminateWorkspacesPool = op(
  n0,
  _TWP,
  0,
  () => TerminateWorkspacesPoolRequest,
  () => TerminateWorkspacesPoolResult
);
export var TerminateWorkspacesPoolSession = op(
  n0,
  _TWPS,
  0,
  () => TerminateWorkspacesPoolSessionRequest,
  () => TerminateWorkspacesPoolSessionResult
);
