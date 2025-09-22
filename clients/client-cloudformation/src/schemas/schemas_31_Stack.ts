// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _CA,
  _CT,
  _D,
  _DI,
  _DS,
  _DSDDS,
  _DSDDSI,
  _DSDDSO,
  _DSR,
  _DSr,
  _DSRC,
  _DTel,
  _LCT,
  _LDCT,
  _LS,
  _LSI,
  _LSO,
  _LSS,
  _LSSI,
  _LSSO,
  _LUT,
  _ME,
  _MR,
  _NT,
  _PIa,
  _PM,
  _RIo,
  _S,
  _SDDI,
  _SDIS,
  _SDS,
  _SI,
  _SN,
  _SSF,
  _SSI,
  _SSN,
  _SSR,
  _SSS,
  _SSSt,
  _SSt,
  _SSta,
  _SStac,
  _Su,
  _TDe,
  _Ti,
  n0,
} from "./schemas_0";
import { AutoDeployment, ManagedExecution } from "./schemas_11_Stack";

/* eslint no-var: 0 */

export var DescribeStackDriftDetectionStatusInput = struct(n0, _DSDDSI, 0, [_SDDI], [0]);
export var DescribeStackDriftDetectionStatusOutput = struct(
  n0,
  _DSDDSO,
  0,
  [_SI, _SDDI, _SDS, _DS, _DSR, _DSRC, _Ti],
  [0, 0, 0, 0, 0, 1, 4]
);
export var ListStackSetsInput = struct(n0, _LSSI, 0, [_NT, _MR, _S, _CA], [0, 1, 0, 0]);
export var ListStackSetsOutput = struct(n0, _LSSO, 0, [_Su, _NT], [() => StackSetSummaries, 0]);
export var ListStacksInput = struct(n0, _LSI, 0, [_NT, _SSF], [0, 64 | 0]);
export var ListStacksOutput = struct(n0, _LSO, 0, [_SSt, _NT], [() => StackSummaries, 0]);
export var StackDriftInformationSummary = struct(n0, _SDIS, 0, [_SDS, _LCT], [0, 4]);
export var StackSetSummary = struct(
  n0,
  _SSS,
  0,
  [_SSN, _SSI, _D, _S, _AD, _PM, _DSr, _LDCT, _ME],
  [0, 0, 0, 0, () => AutoDeployment, 0, 0, 4, () => ManagedExecution]
);
export var StackSummary = struct(
  n0,
  _SStac,
  0,
  [_SI, _SN, _TDe, _CT, _LUT, _DTel, _SSta, _SSR, _PIa, _RIo, _DI],
  [0, 0, 0, 4, 4, 4, 0, 0, 0, 0, () => StackDriftInformationSummary]
);
export var StackSetSummaries = list(n0, _SSSt, 0, () => StackSetSummary);
export var StackStatusFilter = 64 | 0;

export var StackSummaries = list(n0, _SSt, 0, () => StackSummary);
export var DescribeStackDriftDetectionStatus = op(
  n0,
  _DSDDS,
  0,
  () => DescribeStackDriftDetectionStatusInput,
  () => DescribeStackDriftDetectionStatusOutput
);
export var ListStacks = op(
  n0,
  _LS,
  0,
  () => ListStacksInput,
  () => ListStacksOutput
);
export var ListStackSets = op(
  n0,
  _LSS,
  0,
  () => ListStackSetsInput,
  () => ListStackSetsOutput
);
