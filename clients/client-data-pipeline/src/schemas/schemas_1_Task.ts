// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _CP,
  _CPI,
  _CPO,
  _d,
  _DO,
  _do,
  _DOI,
  _DOO,
  _DPes,
  _DPIes,
  _DPOe,
  _eE,
  _eI,
  _eM,
  _eST,
  _f,
  _fN,
  _GPD,
  _GPDI,
  _GPDO,
  _h,
  _hMR,
  _i,
  _id,
  _II,
  _iI,
  _l,
  _LP,
  _LPI,
  _LPO,
  _m,
  _n,
  _O,
  _o,
  _ob,
  _oI,
  _PD,
  _PDL,
  _pDL,
  _PFT,
  _PFTI,
  _PFTO,
  _pI,
  _pIi,
  _pIL,
  _PIN,
  _pL,
  _pO,
  _pOa,
  _POM,
  _pV,
  _Q,
  _q,
  _QO,
  _QOI,
  _QOO,
  _RT,
  _RTI,
  _RTO,
  _RTRH,
  _RTRHI,
  _RTRHO,
  _S,
  _s,
  _sel,
  _SL,
  _sp,
  _SS,
  _SSI,
  _st,
  _STS,
  _STSI,
  _STSO,
  _t,
  _te,
  _tI,
  _tIa,
  _tK,
  _TO,
  _tO,
  _tS,
  _ty,
  _uI,
  _v,
  _va,
  _wG,
  n0,
} from "./schemas_0";
import {
  fieldList,
  ParameterObjectList,
  ParameterValueList,
  PipelineObject,
  PipelineObjectList,
} from "./schemas_3_Pipeline";
import { tagList } from "./schemas_4_Pipeline";

/* eslint no-var: 0 */

export var CreatePipelineInput = struct(n0, _CPI, 0, [_n, _uI, _d, _t], [0, 0, 0, () => tagList]);
export var CreatePipelineOutput = struct(n0, _CPO, 0, [_pI], [0]);
export var DescribeObjectsInput = struct(n0, _DOI, 0, [_pI, _oI, _eE, _m], [0, 64 | 0, 2, 0]);
export var DescribeObjectsOutput = struct(n0, _DOO, 0, [_pO, _m, _hMR], [() => PipelineObjectList, 0, 2]);
export var DescribePipelinesInput = struct(n0, _DPIes, 0, [_pIi], [64 | 0]);
export var DescribePipelinesOutput = struct(n0, _DPOe, 0, [_pDL], [() => PipelineDescriptionList]);
export var GetPipelineDefinitionInput = struct(n0, _GPDI, 0, [_pI, _v], [0, 0]);
export var GetPipelineDefinitionOutput = struct(
  n0,
  _GPDO,
  0,
  [_pO, _pOa, _pV],
  [() => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList]
);
export var InstanceIdentity = struct(n0, _II, 0, [_do, _s], [0, 0]);
export var ListPipelinesInput = struct(n0, _LPI, 0, [_m], [0]);
export var ListPipelinesOutput = struct(n0, _LPO, 0, [_pIL, _m, _hMR], [() => pipelineList, 0, 2]);
export var Operator = struct(n0, _O, 0, [_ty, _va], [0, 64 | 0]);
export var PipelineDescription = struct(n0, _PD, 0, [_pI, _n, _f, _d, _t], [0, 0, () => fieldList, 0, () => tagList]);
export var PipelineIdName = struct(n0, _PIN, 0, [_i, _n], [0, 0]);
export var PollForTaskInput = struct(n0, _PFTI, 0, [_wG, _h, _iI], [0, 0, () => InstanceIdentity]);
export var PollForTaskOutput = struct(n0, _PFTO, 0, [_tO], [() => TaskObject]);
export var Query = struct(n0, _Q, 0, [_sel], [() => SelectorList]);
export var QueryObjectsInput = struct(n0, _QOI, 0, [_pI, _q, _sp, _m, _l], [0, () => Query, 0, 0, 1]);
export var QueryObjectsOutput = struct(n0, _QOO, 0, [_id, _m, _hMR], [64 | 0, 0, 2]);
export var RemoveTagsInput = struct(n0, _RTI, 0, [_pI, _tK], [0, 64 | 0]);
export var RemoveTagsOutput = struct(n0, _RTO, 0, [], []);
export var ReportTaskRunnerHeartbeatInput = struct(n0, _RTRHI, 0, [_tIa, _wG, _h], [0, 0, 0]);
export var ReportTaskRunnerHeartbeatOutput = struct(n0, _RTRHO, 0, [_te], [2]);
export var Selector = struct(n0, _S, 0, [_fN, _o], [0, () => Operator]);
export var SetStatusInput = struct(n0, _SSI, 0, [_pI, _oI, _st], [0, 64 | 0, 0]);
export var SetTaskStatusInput = struct(n0, _STSI, 0, [_tI, _tS, _eI, _eM, _eST], [0, 0, 0, 0, 0]);
export var SetTaskStatusOutput = struct(n0, _STSO, 0, [], []);
export var TaskObject = struct(n0, _TO, 0, [_tI, _pI, _aI, _ob], [0, 0, 0, () => PipelineObjectMap]);
export var Unit = "unit" as const;

export var idList = 64 | 0;

export var PipelineDescriptionList = list(n0, _PDL, 0, () => PipelineDescription);
export var pipelineList = list(n0, _pL, 0, () => PipelineIdName);
export var SelectorList = list(n0, _SL, 0, () => Selector);
export var stringList = 64 | 0;

export var PipelineObjectMap = map(n0, _POM, 0, 0, () => PipelineObject);
export var CreatePipeline = op(
  n0,
  _CP,
  0,
  () => CreatePipelineInput,
  () => CreatePipelineOutput
);
export var DescribeObjects = op(
  n0,
  _DO,
  0,
  () => DescribeObjectsInput,
  () => DescribeObjectsOutput
);
export var DescribePipelines = op(
  n0,
  _DPes,
  0,
  () => DescribePipelinesInput,
  () => DescribePipelinesOutput
);
export var GetPipelineDefinition = op(
  n0,
  _GPD,
  0,
  () => GetPipelineDefinitionInput,
  () => GetPipelineDefinitionOutput
);
export var ListPipelines = op(
  n0,
  _LP,
  0,
  () => ListPipelinesInput,
  () => ListPipelinesOutput
);
export var PollForTask = op(
  n0,
  _PFT,
  0,
  () => PollForTaskInput,
  () => PollForTaskOutput
);
export var QueryObjects = op(
  n0,
  _QO,
  0,
  () => QueryObjectsInput,
  () => QueryObjectsOutput
);
export var RemoveTags = op(
  n0,
  _RT,
  0,
  () => RemoveTagsInput,
  () => RemoveTagsOutput
);
export var ReportTaskRunnerHeartbeat = op(
  n0,
  _RTRH,
  0,
  () => ReportTaskRunnerHeartbeatInput,
  () => ReportTaskRunnerHeartbeatOutput
);
export var SetStatus = op(
  n0,
  _SS,
  0,
  () => SetStatusInput,
  () => Unit
);
export var SetTaskStatus = op(
  n0,
  _STS,
  0,
  () => SetTaskStatusInput,
  () => SetTaskStatusOutput
);
