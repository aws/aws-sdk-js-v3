// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Bu,
  _CAre,
  _CB,
  _CBr,
  _CPr,
  _CPRr,
  _CPRre,
  _CRT,
  _CT,
  _DPE,
  _DPel,
  _DPER,
  _DPERe,
  _DPes,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _ENx,
  _FR,
  _LEPEAa,
  _LET,
  _LMB,
  _LMT,
  _LPi,
  _LPR,
  _LPRi,
  _LPV,
  _LPVR,
  _LPVRi,
  _LRT,
  _MR,
  _NT,
  _OK,
  _PAi,
  _PCa,
  _PD,
  _PDi,
  _PDN,
  _PDSL,
  _PEA,
  _PEC,
  _PED,
  _PEDN,
  _PES,
  _PNi,
  _PNP,
  _PS,
  _PSi,
  _PSip,
  _PSLi,
  _PVD,
  _PVDN,
  _PVI,
  _PVS,
  _PVSi,
  _PVSL,
  _RAo,
  _SBo,
  _SEC,
  _SO,
  _T,
  _TN,
  _UPp,
  _UPR,
  _UPRp,
  _UPV,
  _UPVR,
  _UPVRp,
  _VIe,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";
import { ParallelismConfiguration, SelectiveExecutionConfig } from "./schemas_45_Pipeline";

/* eslint no-var: 0 */

export var CreatePipelineRequest = struct(
  n0,
  _CPRr,
  0,
  [_PNi, _PDN, _PD, _PDSL, _PDi, _CRT, _RAo, _T, _PCa],
  [0, 0, 0, () => PipelineDefinitionS3Location, 0, [0, 4], 0, () => TagList, () => ParallelismConfiguration]
);
export var CreatePipelineResponse = struct(n0, _CPRre, 0, [_PAi], [0]);
export var DeletePipelineRequest = struct(n0, _DPR, 0, [_PNi, _CRT], [0, [0, 4]]);
export var DeletePipelineResponse = struct(n0, _DPRe, 0, [_PAi], [0]);
export var DescribePipelineExecutionRequest = struct(n0, _DPER, 0, [_PEA], [0]);
export var DescribePipelineExecutionResponse = struct(
  n0,
  _DPERe,
  0,
  [_PAi, _PEA, _PEDN, _PES, _PED, _PEC, _FR, _CT, _LMT, _CB, _LMB, _PCa, _SEC, _PVI],
  [
    0,
    0,
    0,
    0,
    0,
    () => PipelineExperimentConfig,
    0,
    4,
    4,
    () => UserContext,
    () => UserContext,
    () => ParallelismConfiguration,
    () => SelectiveExecutionConfig,
    1,
  ]
);
export var DescribePipelineRequest = struct(n0, _DPRes, 0, [_PNi, _PVI], [0, 1]);
export var DescribePipelineResponse = struct(
  n0,
  _DPResc,
  0,
  [_PAi, _PNi, _PDN, _PD, _PDi, _RAo, _PS, _CT, _LMT, _LRT, _CB, _LMB, _PCa, _PVDN, _PVD],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, () => UserContext, () => UserContext, () => ParallelismConfiguration, 0, 0]
);
export var ListPipelinesRequest = struct(n0, _LPR, 0, [_PNP, _CAre, _CBr, _SBo, _SO, _NT, _MR], [0, 4, 4, 0, 0, 0, 1]);
export var ListPipelinesResponse = struct(n0, _LPRi, 0, [_PSi, _NT], [() => PipelineSummaryList, 0]);
export var ListPipelineVersionsRequest = struct(n0, _LPVR, 0, [_PNi, _CAre, _CBr, _SO, _NT, _MR], [0, 4, 4, 0, 0, 1]);
export var ListPipelineVersionsResponse = struct(n0, _LPVRi, 0, [_PVS, _NT], [() => PipelineVersionSummaryList, 0]);
export var PipelineDefinitionS3Location = struct(n0, _PDSL, 0, [_Bu, _OK, _VIe], [0, 0, 0]);
export var PipelineExperimentConfig = struct(n0, _PEC, 0, [_ENx, _TN], [0, 0]);
export var PipelineSummary = struct(
  n0,
  _PSip,
  0,
  [_PAi, _PNi, _PDN, _PDi, _RAo, _CT, _LMT, _LET],
  [0, 0, 0, 0, 0, 4, 4, 4]
);
export var PipelineVersionSummary = struct(n0, _PVSi, 0, [_PAi, _PVI, _CT, _PVD, _PVDN, _LEPEAa], [0, 1, 4, 0, 0, 0]);
export var UpdatePipelineRequest = struct(
  n0,
  _UPR,
  0,
  [_PNi, _PDN, _PD, _PDSL, _PDi, _RAo, _PCa],
  [0, 0, 0, () => PipelineDefinitionS3Location, 0, 0, () => ParallelismConfiguration]
);
export var UpdatePipelineResponse = struct(n0, _UPRp, 0, [_PAi, _PVI], [0, 1]);
export var UpdatePipelineVersionRequest = struct(n0, _UPVR, 0, [_PAi, _PVI, _PVDN, _PVD], [0, 1, 0, 0]);
export var UpdatePipelineVersionResponse = struct(n0, _UPVRp, 0, [_PAi, _PVI], [0, 1]);
export var PipelineSummaryList = list(n0, _PSLi, 0, () => PipelineSummary);
export var PipelineVersionSummaryList = list(n0, _PVSL, 0, () => PipelineVersionSummary);
export var CreatePipeline = op(
  n0,
  _CPr,
  0,
  () => CreatePipelineRequest,
  () => CreatePipelineResponse
);
export var DeletePipeline = op(
  n0,
  _DPel,
  0,
  () => DeletePipelineRequest,
  () => DeletePipelineResponse
);
export var DescribePipeline = op(
  n0,
  _DPes,
  0,
  () => DescribePipelineRequest,
  () => DescribePipelineResponse
);
export var DescribePipelineExecution = op(
  n0,
  _DPE,
  0,
  () => DescribePipelineExecutionRequest,
  () => DescribePipelineExecutionResponse
);
export var ListPipelines = op(
  n0,
  _LPi,
  0,
  () => ListPipelinesRequest,
  () => ListPipelinesResponse
);
export var ListPipelineVersions = op(
  n0,
  _LPV,
  0,
  () => ListPipelineVersionsRequest,
  () => ListPipelineVersionsResponse
);
export var UpdatePipeline = op(
  n0,
  _UPp,
  0,
  () => UpdatePipelineRequest,
  () => UpdatePipelineResponse
);
export var UpdatePipelineVersion = op(
  n0,
  _UPV,
  0,
  () => UpdatePipelineVersionRequest,
  () => UpdatePipelineVersionResponse
);
