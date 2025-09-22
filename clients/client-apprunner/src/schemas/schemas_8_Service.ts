// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _EA,
  _Id,
  _LOi,
  _LOR,
  _LORi,
  _MR,
  _NT,
  _OI,
  _OS,
  _OSL,
  _S,
  _SA,
  _SAt,
  _SDR,
  _SDRt,
  _SDt,
  _T,
  _TA,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListOperationsRequest = struct(n0, _LOR, 0, [_SA, _NT, _MR], [0, 0, 1]);
export var ListOperationsResponse = struct(n0, _LORi, 0, [_OSL, _NT], [() => OperationSummaryList, 0]);
export var OperationSummary = struct(n0, _OS, 0, [_Id, _T, _S, _TA, _SAt, _EA, _UA], [0, 0, 0, 0, 4, 4, 4]);
export var StartDeploymentRequest = struct(n0, _SDR, 0, [_SA], [0]);
export var StartDeploymentResponse = struct(n0, _SDRt, 0, [_OI], [0]);
export var OperationSummaryList = list(n0, _OSL, 0, () => OperationSummary);
export var ListOperations = op(
  n0,
  _LOi,
  0,
  () => ListOperationsRequest,
  () => ListOperationsResponse
);
export var StartDeployment = op(
  n0,
  _SDt,
  0,
  () => StartDeploymentRequest,
  () => StartDeploymentResponse
);
