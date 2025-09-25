// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Acti,
  _CA,
  _CM,
  _CTr,
  _DSSD,
  _DSSDI,
  _DSSDO,
  _ETn,
  _FSIC,
  _FTC,
  _FTP,
  _LSSOI,
  _LSSOi,
  _LSSOO,
  _MCC,
  _MCP,
  _MR,
  _NT,
  _OI,
  _OP,
  _RCT,
  _RO,
  _S,
  _SDta,
  _SR,
  _SSN,
  _SSOP,
  _SSOS,
  _SSOSD,
  _SSOSt,
  _Su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetectStackSetDriftInput = struct(
  n0,
  _DSSDI,
  0,
  [_SSN, _OP, _OI, _CA],
  [0, () => StackSetOperationPreferences, [0, 4], 0]
);
export var DetectStackSetDriftOutput = struct(n0, _DSSDO, 0, [_OI], [0]);
export var ListStackSetOperationsInput = struct(n0, _LSSOI, 0, [_SSN, _NT, _MR, _CA], [0, 0, 1, 0]);
export var ListStackSetOperationsOutput = struct(n0, _LSSOO, 0, [_Su, _NT], [() => StackSetOperationSummaries, 0]);
export var StackSetOperationPreferences = struct(
  n0,
  _SSOP,
  0,
  [_RCT, _RO, _FTC, _FTP, _MCC, _MCP, _CM],
  [0, 64 | 0, 1, 1, 1, 1, 0]
);
export var StackSetOperationStatusDetails = struct(n0, _SSOSD, 0, [_FSIC], [1]);
export var StackSetOperationSummary = struct(
  n0,
  _SSOS,
  0,
  [_OI, _Acti, _S, _CTr, _ETn, _SR, _SDta, _OP],
  [0, 0, 0, 4, 4, 0, () => StackSetOperationStatusDetails, () => StackSetOperationPreferences]
);
export var RegionList = 64 | 0;

export var StackSetOperationSummaries = list(n0, _SSOSt, 0, () => StackSetOperationSummary);
export var DetectStackSetDrift = op(
  n0,
  _DSSD,
  0,
  () => DetectStackSetDriftInput,
  () => DetectStackSetDriftOutput
);
export var ListStackSetOperations = op(
  n0,
  _LSSOi,
  0,
  () => ListStackSetOperationsInput,
  () => ListStackSetOperationsOutput
);
