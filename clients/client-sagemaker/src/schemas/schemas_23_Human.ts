// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _ACC,
  _ACLA,
  _AIU,
  _AMHLRS,
  _Ce,
  _CFD,
  _CFDR,
  _CFDRr,
  _CHTU,
  _CHTUR,
  _CHTURr,
  _CLJ,
  _CLJR,
  _CLJRr,
  _Co,
  _Con,
  _CSonte,
  _CT,
  _CTA,
  _CTB,
  _DFDe,
  _DFDRes,
  _DFDResc,
  _DHTUe,
  _DHTURes,
  _DHTUResc,
  _DLJ,
  _DLJR,
  _DLJRe,
  _Dol,
  _Err,
  _FDA,
  _FDN,
  _FDOC,
  _FDS,
  _FR,
  _HLAC,
  _HLACC,
  _HLACu,
  _HLC,
  _HLRS,
  _HTC,
  _HTUA,
  _HTUN,
  _HTUS,
  _HTUSu,
  _HTUSum,
  _IALMA,
  _ICnp,
  _In,
  _JRC,
  _KKI,
  _LAN,
  _LC,
  _LCCSU,
  _LHTU,
  _LHTUR,
  _LHTURi,
  _LJA,
  _LJAC,
  _LJASA,
  _LJN,
  _LJO,
  _LJOC,
  _LJRC,
  _LJS,
  _LJSC,
  _LMT,
  _MCTC,
  _Me,
  _MHLOC,
  _MPOIDL,
  _MR,
  _mT,
  _NOHWPDO,
  _NT,
  _OC,
  _PHTLA,
  _PWTP,
  _RAo,
  _RCen,
  _RE,
  _REL,
  _RTen,
  _RUT,
  _RUTR,
  _RUTRe,
  _SCto,
  _SO,
  _SOP,
  _STA,
  _T,
  _Ta,
  _TALIS,
  _TCas,
  _TD,
  _TFOAC,
  _TKa,
  _TT,
  _TTLIS,
  _U,
  _UC,
  _USD,
  _UT,
  _UTI,
  _UTSU,
  _VC,
  _VKKI,
  _WAo,
  n0,
  TagList,
  VpcConfig,
} from "./schemas_0";
import { LabelCounters, LabelingJobInputConfig, LabelingJobOutput } from "./schemas_13_Labeling";

/* eslint no-var: 0 */

export var HumanLoopActivationConditions = sim(n0, _HLAC, 0, {
  [_mT]: _a,
});
export var AnnotationConsolidationConfig = struct(n0, _ACC, 0, [_ACLA], [0]);
export var CreateFlowDefinitionRequest = struct(
  n0,
  _CFDR,
  0,
  [_FDN, _HLRS, _HLACu, _HLC, _OC, _RAo, _T],
  [
    0,
    () => HumanLoopRequestSource,
    [() => HumanLoopActivationConfig, 0],
    () => HumanLoopConfig,
    () => FlowDefinitionOutputConfig,
    0,
    () => TagList,
  ]
);
export var CreateFlowDefinitionResponse = struct(n0, _CFDRr, 0, [_FDA], [0]);
export var CreateHumanTaskUiRequest = struct(n0, _CHTUR, 0, [_HTUN, _UT, _T], [0, () => UiTemplate, () => TagList]);
export var CreateHumanTaskUiResponse = struct(n0, _CHTURr, 0, [_HTUA], [0]);
export var CreateLabelingJobRequest = struct(
  n0,
  _CLJR,
  0,
  [_LJN, _LAN, _ICnp, _OC, _RAo, _LCCSU, _SCto, _LJAC, _HTC, _T],
  [
    0,
    0,
    () => LabelingJobInputConfig,
    () => LabelingJobOutputConfig,
    0,
    0,
    () => LabelingJobStoppingConditions,
    () => LabelingJobAlgorithmsConfig,
    () => HumanTaskConfig,
    () => TagList,
  ]
);
export var CreateLabelingJobResponse = struct(n0, _CLJRr, 0, [_LJA], [0]);
export var DescribeFlowDefinitionRequest = struct(n0, _DFDRes, 0, [_FDN], [0]);
export var DescribeFlowDefinitionResponse = struct(
  n0,
  _DFDResc,
  0,
  [_FDA, _FDN, _FDS, _CT, _HLRS, _HLACu, _HLC, _OC, _RAo, _FR],
  [
    0,
    0,
    0,
    4,
    () => HumanLoopRequestSource,
    [() => HumanLoopActivationConfig, 0],
    () => HumanLoopConfig,
    () => FlowDefinitionOutputConfig,
    0,
    0,
  ]
);
export var DescribeHumanTaskUiRequest = struct(n0, _DHTURes, 0, [_HTUN], [0]);
export var DescribeHumanTaskUiResponse = struct(
  n0,
  _DHTUResc,
  0,
  [_HTUA, _HTUN, _HTUS, _CT, _UT],
  [0, 0, 0, 4, () => UiTemplateInfo]
);
export var DescribeLabelingJobRequest = struct(n0, _DLJR, 0, [_LJN], [0]);
export var DescribeLabelingJobResponse = struct(
  n0,
  _DLJRe,
  0,
  [_LJS, _LC, _FR, _CT, _LMT, _JRC, _LJN, _LJA, _LAN, _ICnp, _OC, _RAo, _LCCSU, _SCto, _LJAC, _HTC, _T, _LJO],
  [
    0,
    () => LabelCounters,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    () => LabelingJobInputConfig,
    () => LabelingJobOutputConfig,
    0,
    0,
    () => LabelingJobStoppingConditions,
    () => LabelingJobAlgorithmsConfig,
    () => HumanTaskConfig,
    () => TagList,
    () => LabelingJobOutput,
  ]
);
export var FlowDefinitionOutputConfig = struct(n0, _FDOC, 0, [_SOP, _KKI], [0, 0]);
export var HumanLoopActivationConditionsConfig = struct(
  n0,
  _HLACC,
  0,
  [_HLAC],
  [[() => HumanLoopActivationConditions, 0]]
);
export var HumanLoopActivationConfig = struct(
  n0,
  _HLACu,
  0,
  [_HLACC],
  [[() => HumanLoopActivationConditionsConfig, 0]]
);
export var HumanLoopConfig = struct(
  n0,
  _HLC,
  0,
  [_WAo, _HTUA, _TT, _TD, _TCas, _TALIS, _TTLIS, _TKa, _PWTP],
  [0, 0, 0, 0, 1, 1, 1, 64 | 0, () => PublicWorkforceTaskPrice]
);
export var HumanLoopRequestSource = struct(n0, _HLRS, 0, [_AMHLRS], [0]);
export var HumanTaskConfig = struct(
  n0,
  _HTC,
  0,
  [_WAo, _UC, _PHTLA, _TKa, _TT, _TD, _NOHWPDO, _TTLIS, _TALIS, _MCTC, _ACC, _PWTP],
  [0, () => UiConfig, 0, 64 | 0, 0, 0, 1, 1, 1, 1, () => AnnotationConsolidationConfig, () => PublicWorkforceTaskPrice]
);
export var HumanTaskUiSummary = struct(n0, _HTUSu, 0, [_HTUN, _HTUA, _CT], [0, 0, 4]);
export var LabelingJobAlgorithmsConfig = struct(
  n0,
  _LJAC,
  0,
  [_LJASA, _IALMA, _LJRC],
  [0, 0, () => LabelingJobResourceConfig]
);
export var LabelingJobOutputConfig = struct(n0, _LJOC, 0, [_SOP, _KKI, _STA], [0, 0, 0]);
export var LabelingJobResourceConfig = struct(n0, _LJRC, 0, [_VKKI, _VC], [0, () => VpcConfig]);
export var LabelingJobStoppingConditions = struct(n0, _LJSC, 0, [_MHLOC, _MPOIDL], [1, 1]);
export var ListHumanTaskUisRequest = struct(n0, _LHTUR, 0, [_CTA, _CTB, _SO, _NT, _MR], [4, 4, 0, 0, 1]);
export var ListHumanTaskUisResponse = struct(n0, _LHTURi, 0, [_HTUSum, _NT], [() => HumanTaskUiSummaries, 0]);
export var PublicWorkforceTaskPrice = struct(n0, _PWTP, 0, [_AIU], [() => USD]);
export var RenderableTask = struct(n0, _RTen, 0, [_In], [0]);
export var RenderingError = struct(n0, _RE, 0, [_Co, _Me], [0, 0]);
export var RenderUiTemplateRequest = struct(
  n0,
  _RUTR,
  0,
  [_UT, _Ta, _RAo, _HTUA],
  [() => UiTemplate, () => RenderableTask, 0, 0]
);
export var RenderUiTemplateResponse = struct(n0, _RUTRe, 0, [_RCen, _Err], [0, () => RenderingErrorList]);
export var UiConfig = struct(n0, _UC, 0, [_UTSU, _HTUA], [0, 0]);
export var UiTemplate = struct(n0, _UT, 0, [_Con], [0]);
export var UiTemplateInfo = struct(n0, _UTI, 0, [_U, _CSonte], [0, 0]);
export var USD = struct(n0, _USD, 0, [_Dol, _Ce, _TFOAC], [1, 1, 1]);
export var FlowDefinitionTaskKeywords = 64 | 0;

export var HumanTaskUiSummaries = list(n0, _HTUSum, 0, () => HumanTaskUiSummary);
export var RenderingErrorList = list(n0, _REL, 0, () => RenderingError);
export var TaskKeywords = 64 | 0;

export var CreateFlowDefinition = op(
  n0,
  _CFD,
  0,
  () => CreateFlowDefinitionRequest,
  () => CreateFlowDefinitionResponse
);
export var CreateHumanTaskUi = op(
  n0,
  _CHTU,
  0,
  () => CreateHumanTaskUiRequest,
  () => CreateHumanTaskUiResponse
);
export var CreateLabelingJob = op(
  n0,
  _CLJ,
  0,
  () => CreateLabelingJobRequest,
  () => CreateLabelingJobResponse
);
export var DescribeFlowDefinition = op(
  n0,
  _DFDe,
  0,
  () => DescribeFlowDefinitionRequest,
  () => DescribeFlowDefinitionResponse
);
export var DescribeHumanTaskUi = op(
  n0,
  _DHTUe,
  0,
  () => DescribeHumanTaskUiRequest,
  () => DescribeHumanTaskUiResponse
);
export var DescribeLabelingJob = op(
  n0,
  _DLJ,
  0,
  () => DescribeLabelingJobRequest,
  () => DescribeLabelingJobResponse
);
export var ListHumanTaskUis = op(
  n0,
  _LHTU,
  0,
  () => ListHumanTaskUisRequest,
  () => ListHumanTaskUisResponse
);
export var RenderUiTemplate = op(
  n0,
  _RUT,
  0,
  () => RenderUiTemplateRequest,
  () => RenderUiTemplateResponse
);
