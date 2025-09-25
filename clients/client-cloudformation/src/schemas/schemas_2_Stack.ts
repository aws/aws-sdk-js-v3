// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { StackRefactorNotFoundException as __StackRefactorNotFoundException } from "../models/index";
import {
  _aQE,
  _c,
  _D,
  _Des,
  _DSRe,
  _DSRI,
  _DSRO,
  _e,
  _ES,
  _ESF,
  _ESR,
  _ESRI,
  _ESRx,
  _hE,
  _LRI,
  _LSR,
  _LSRI,
  _LSRO,
  _M,
  _MR,
  _NT,
  _RL,
  _RMes,
  _S,
  _SIta,
  _SN,
  _So,
  _SR,
  _SRI,
  _SRNFE,
  _SRS,
  _SRSta,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeStackRefactorInput = struct(n0, _DSRI, 0, [_SRI], [0]);
export var DescribeStackRefactorOutput = struct(
  n0,
  _DSRO,
  0,
  [_D, _SRI, _SIta, _ES, _ESR, _S, _SR],
  [0, 0, 64 | 0, 0, 0, 0, 0]
);
export var ExecuteStackRefactorInput = struct(n0, _ESRI, 0, [_SRI], [0]);
export var ListStackRefactorsInput = struct(n0, _LSRI, 0, [_ESF, _NT, _MR], [64 | 0, 0, 1]);
export var ListStackRefactorsOutput = struct(n0, _LSRO, 0, [_SRS, _NT], [() => StackRefactorSummaries, 0]);
export var ResourceLocation = struct(n0, _RL, 0, [_SN, _LRI], [0, 0]);
export var ResourceMapping = struct(n0, _RMes, 0, [_So, _Des], [() => ResourceLocation, () => ResourceLocation]);
export var StackRefactorNotFoundException = error(
  n0,
  _SRNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`StackRefactorNotFoundException`, 404],
  },
  [_M],
  [0],

  __StackRefactorNotFoundException
);
export var StackRefactorSummary = struct(n0, _SRSta, 0, [_SRI, _D, _ES, _ESR, _S, _SR], [0, 0, 0, 0, 0, 0]);
export var StackIds = 64 | 0;

export var StackRefactorExecutionStatusFilter = 64 | 0;

export var StackRefactorSummaries = list(n0, _SRS, 0, () => StackRefactorSummary);
export var DescribeStackRefactor = op(
  n0,
  _DSRe,
  0,
  () => DescribeStackRefactorInput,
  () => DescribeStackRefactorOutput
);
export var ExecuteStackRefactor = op(
  n0,
  _ESRx,
  0,
  () => ExecuteStackRefactorInput,
  () => Unit
);
export var ListStackRefactors = op(
  n0,
  _LSR,
  0,
  () => ListStackRefactorsInput,
  () => ListStackRefactorsOutput
);
