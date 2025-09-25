// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ResourceNotFound as __ResourceNotFound } from "../models/index";
import {
  _ab,
  _AD,
  _c,
  _cD,
  _CSMA,
  _CSMAI,
  _CSMAO,
  _d,
  _DMR,
  _DMRI,
  _DMRO,
  _DSMA,
  _DSMAe,
  _DSMAI,
  _DSMAIe,
  _DSMAO,
  _DSMAOe,
  _e,
  _eA,
  _eCx,
  _EL,
  _ELI,
  _ex,
  _f,
  _fNR,
  _hE,
  _iC,
  _iCt,
  _LE,
  _LEI,
  _LEO,
  _LSMA,
  _LSMAI,
  _LSMAO,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _mC,
  _mR,
  _mRA,
  _MREC,
  _MRIC,
  _n,
  _nT,
  _pe,
  _pR,
  _rAe,
  _rC,
  _rCe,
  _RCL,
  _RCLI,
  _rD,
  _rF,
  _rN,
  _RNF,
  _ru,
  _rW,
  _s,
  _sD,
  _sDt,
  _sF,
  _sMA,
  _sMAA,
  _SMAL,
  _SMALI,
  _sMAt,
  _sMVA,
  _su,
  _ta,
  _tFC,
  _tFP,
  _tK,
  _tO,
  _to,
  _TR,
  _TRI,
  _TRO,
  _uD,
  _UMR,
  _UMRI,
  _UMRO,
  _UR,
  _URI,
  _URO,
  _USMA,
  _USMAI,
  _USMAO,
  _w,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var AliasDescription = sim(n0, _AD, 0, 8);
export var CreateStateMachineAliasInput = struct(
  n0,
  _CSMAI,
  0,
  [_d, _n, _rC],
  [[() => AliasDescription, 0], 0, () => RoutingConfigurationList]
);
export var CreateStateMachineAliasOutput = struct(n0, _CSMAO, 0, [_sMAA, _cD], [0, 4]);
export var DeleteStateMachineAliasInput = struct(n0, _DSMAI, 0, [_sMAA], [0]);
export var DeleteStateMachineAliasOutput = struct(n0, _DSMAO, 0, [], []);
export var DescribeMapRunInput = struct(n0, _DMRI, 0, [_mRA], [0]);
export var DescribeMapRunOutput = struct(
  n0,
  _DMRO,
  0,
  [_mRA, _eA, _s, _sD, _sDt, _mC, _tFP, _tFC, _iC, _eCx, _rCe, _rD],
  [0, 0, 0, 4, 4, 1, 1, 1, () => MapRunItemCounts, () => MapRunExecutionCounts, 1, 4]
);
export var DescribeStateMachineAliasInput = struct(n0, _DSMAIe, 0, [_sMAA], [0]);
export var DescribeStateMachineAliasOutput = struct(
  n0,
  _DSMAOe,
  0,
  [_sMAA, _n, _d, _rC, _cD, _uD],
  [0, 0, [() => AliasDescription, 0], () => RoutingConfigurationList, 4, 4]
);
export var ExecutionListItem = struct(
  n0,
  _ELI,
  0,
  [_eA, _sMA, _n, _s, _sD, _sDt, _mRA, _iCt, _sMVA, _sMAA, _rCe, _rD],
  [0, 0, 0, 0, 4, 4, 0, 1, 0, 0, 1, 4]
);
export var ListExecutionsInput = struct(n0, _LEI, 0, [_sMA, _sF, _mR, _nT, _mRA, _rF], [0, 0, 1, 0, 0, 0]);
export var ListExecutionsOutput = struct(n0, _LEO, 0, [_ex, _nT], [() => ExecutionList, 0]);
export var ListStateMachineAliasesInput = struct(n0, _LSMAI, 0, [_sMA, _nT, _mR], [0, 0, 1]);
export var ListStateMachineAliasesOutput = struct(n0, _LSMAO, 0, [_sMAt, _nT], [() => StateMachineAliasList, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rAe], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_ta], [() => TagList]);
export var MapRunExecutionCounts = struct(
  n0,
  _MREC,
  0,
  [_pe, _ru, _su, _f, _tO, _ab, _to, _rW, _fNR, _pR],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var MapRunItemCounts = struct(
  n0,
  _MRIC,
  0,
  [_pe, _ru, _su, _f, _tO, _ab, _to, _rW, _fNR, _pR],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var ResourceNotFound = error(
  n0,
  _RNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rN],
  [0, 0],

  __ResourceNotFound
);
export var RoutingConfigurationListItem = struct(n0, _RCLI, 0, [_sMVA, _w], [0, 1]);
export var StateMachineAliasListItem = struct(n0, _SMALI, 0, [_sMAA, _cD], [0, 4]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rAe, _ta], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(n0, _URI, 0, [_rAe, _tK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var UpdateMapRunInput = struct(n0, _UMRI, 0, [_mRA, _mC, _tFP, _tFC], [0, 1, 1, 1]);
export var UpdateMapRunOutput = struct(n0, _UMRO, 0, [], []);
export var UpdateStateMachineAliasInput = struct(
  n0,
  _USMAI,
  0,
  [_sMAA, _d, _rC],
  [0, [() => AliasDescription, 0], () => RoutingConfigurationList]
);
export var UpdateStateMachineAliasOutput = struct(n0, _USMAO, 0, [_uD], [4]);
export var ExecutionList = list(n0, _EL, 0, () => ExecutionListItem);
export var RoutingConfigurationList = list(n0, _RCL, 0, () => RoutingConfigurationListItem);
export var StateMachineAliasList = list(n0, _SMAL, 0, () => StateMachineAliasListItem);
export var TagKeyList = 64 | 0;

export var CreateStateMachineAlias = op(
  n0,
  _CSMA,
  0,
  () => CreateStateMachineAliasInput,
  () => CreateStateMachineAliasOutput
);
export var DeleteStateMachineAlias = op(
  n0,
  _DSMA,
  0,
  () => DeleteStateMachineAliasInput,
  () => DeleteStateMachineAliasOutput
);
export var DescribeMapRun = op(
  n0,
  _DMR,
  0,
  () => DescribeMapRunInput,
  () => DescribeMapRunOutput
);
export var DescribeStateMachineAlias = op(
  n0,
  _DSMAe,
  0,
  () => DescribeStateMachineAliasInput,
  () => DescribeStateMachineAliasOutput
);
export var ListExecutions = op(
  n0,
  _LE,
  0,
  () => ListExecutionsInput,
  () => ListExecutionsOutput
);
export var ListStateMachineAliases = op(
  n0,
  _LSMA,
  0,
  () => ListStateMachineAliasesInput,
  () => ListStateMachineAliasesOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceOutput
);
export var UpdateMapRun = op(
  n0,
  _UMR,
  0,
  () => UpdateMapRunInput,
  () => UpdateMapRunOutput
);
export var UpdateStateMachineAlias = op(
  n0,
  _USMA,
  0,
  () => UpdateStateMachineAliasInput,
  () => UpdateStateMachineAliasOutput
);
