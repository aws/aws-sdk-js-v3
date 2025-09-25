// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AEF,
  _AEFR,
  _AEFRc,
  _An,
  _AV,
  _CAIo,
  _CB,
  _CI,
  _CNV,
  _CT,
  _CTre,
  _D,
  _DCEe,
  _DCERe,
  _DCERes,
  _DEF,
  _DEFe,
  _DEFes,
  _DEFR,
  _DEFRe,
  _DEFRel,
  _DEFRes,
  _DEFResc,
  _EAO,
  _EAOM,
  _EAv,
  _EAva,
  _EFA,
  _EFC,
  _EFI,
  _EFSL,
  _EFSv,
  _EFV,
  _EFv,
  _EFVS,
  _EFVSL,
  _EI,
  _EMv,
  _ESM,
  _Ev,
  _h,
  _hQ,
  _II,
  _It,
  _L,
  _LAB,
  _LAT,
  _LEF,
  _LEFR,
  _LEFRi,
  _LEFV,
  _LEFVR,
  _LEFVRi,
  _LMB,
  _LMT,
  _LV,
  _Meta,
  _mR,
  _MRa,
  _No,
  _NT,
  _nT,
  _Sc,
  _Sco,
  _SS,
  _SSV,
  _St,
  _Ta,
  _Ti,
  _UEF,
  _UEFR,
  _UEFRp,
  _V,
  _v,
  n0,
  Unit,
} from "./schemas_0";
import { EvaluationFormItemsList, EvaluationFormScoringStrategy, EvaluationScore } from "./schemas_22_Evaluation";
import { EvaluationAnswerData, EvaluationNotesMap } from "./schemas_39_Evaluation";

/* eslint no-var: 0 */

export var ActivateEvaluationFormRequest = struct(n0, _AEFR, 0, [_II, _EFI, _EFV], [[0, 1], [0, 1], 1]);
export var ActivateEvaluationFormResponse = struct(n0, _AEFRc, 0, [_EFI, _EFA, _EFV], [0, 0, 1]);
export var DeactivateEvaluationFormRequest = struct(n0, _DEFR, 0, [_II, _EFI, _EFV], [[0, 1], [0, 1], 1]);
export var DeactivateEvaluationFormResponse = struct(n0, _DEFRe, 0, [_EFI, _EFA, _EFV], [0, 0, 1]);
export var DeleteEvaluationFormRequest = struct(
  n0,
  _DEFRel,
  0,
  [_II, _EFI, _EFV],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var DescribeContactEvaluationRequest = struct(
  n0,
  _DCERe,
  0,
  [_II, _EI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeContactEvaluationResponse = struct(
  n0,
  _DCERes,
  0,
  [_Ev, _EFv],
  [() => Evaluation, () => EvaluationFormContent]
);
export var DescribeEvaluationFormRequest = struct(
  n0,
  _DEFRes,
  0,
  [_II, _EFI, _EFV],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var DescribeEvaluationFormResponse = struct(n0, _DEFResc, 0, [_EFv], [() => EvaluationForm]);
export var Evaluation = struct(
  n0,
  _Ev,
  0,
  [_EI, _EAv, _Meta, _An, _No, _St, _Sc, _CTre, _LMT, _Ta],
  [
    0,
    0,
    () => EvaluationMetadata,
    () => EvaluationAnswersOutputMap,
    () => EvaluationNotesMap,
    0,
    () => EvaluationScoresMap,
    4,
    4,
    128 | 0,
  ]
);
export var EvaluationAnswerOutput = struct(
  n0,
  _EAO,
  0,
  [_V, _SSV],
  [() => EvaluationAnswerData, () => EvaluationAnswerData]
);
export var EvaluationForm = struct(
  n0,
  _EFv,
  0,
  [_EFI, _EFV, _L, _EFA, _Ti, _D, _St, _It, _SS, _CTre, _CB, _LMT, _LMB, _Ta],
  [0, 1, 2, 0, 0, 0, 0, () => EvaluationFormItemsList, () => EvaluationFormScoringStrategy, 4, 0, 4, 0, 128 | 0]
);
export var EvaluationFormContent = struct(
  n0,
  _EFC,
  0,
  [_EFV, _EFI, _EFA, _Ti, _D, _It, _SS],
  [1, 0, 0, 0, 0, () => EvaluationFormItemsList, () => EvaluationFormScoringStrategy]
);
export var EvaluationFormSummary = struct(
  n0,
  _EFSv,
  0,
  [_EFI, _EFA, _Ti, _CTre, _CB, _LMT, _LMB, _LAT, _LAB, _LV, _AV],
  [0, 0, 0, 4, 0, 4, 0, 4, 0, 1, 1]
);
export var EvaluationFormVersionSummary = struct(
  n0,
  _EFVS,
  0,
  [_EFA, _EFI, _EFV, _L, _St, _CTre, _CB, _LMT, _LMB],
  [0, 0, 1, 2, 0, 4, 0, 4, 0]
);
export var EvaluationMetadata = struct(n0, _EMv, 0, [_CI, _EAva, _CAIo, _Sco], [0, 0, 0, () => EvaluationScore]);
export var ListEvaluationFormsRequest = struct(
  n0,
  _LEFR,
  0,
  [_II, _MRa, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEvaluationFormsResponse = struct(n0, _LEFRi, 0, [_EFSL, _NT], [() => EvaluationFormSummaryList, 0]);
export var ListEvaluationFormVersionsRequest = struct(
  n0,
  _LEFVR,
  0,
  [_II, _EFI, _MRa, _NT],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEvaluationFormVersionsResponse = struct(
  n0,
  _LEFVRi,
  0,
  [_EFVSL, _NT],
  [() => EvaluationFormVersionSummaryList, 0]
);
export var UpdateEvaluationFormRequest = struct(
  n0,
  _UEFR,
  0,
  [_II, _EFI, _EFV, _CNV, _Ti, _D, _It, _SS, _CT],
  [[0, 1], [0, 1], 1, 2, 0, 0, () => EvaluationFormItemsList, () => EvaluationFormScoringStrategy, [0, 4]]
);
export var UpdateEvaluationFormResponse = struct(n0, _UEFRp, 0, [_EFI, _EFA, _EFV], [0, 0, 1]);
export var EvaluationFormSummaryList = list(n0, _EFSL, 0, () => EvaluationFormSummary);
export var EvaluationFormVersionSummaryList = list(n0, _EFVSL, 0, () => EvaluationFormVersionSummary);
export var EvaluationAnswersOutputMap = map(n0, _EAOM, 0, 0, () => EvaluationAnswerOutput);
export var EvaluationScoresMap = map(n0, _ESM, 0, 0, () => EvaluationScore);
export var ActivateEvaluationForm = op(
  n0,
  _AEF,
  {
    [_h]: ["POST", "/evaluation-forms/{InstanceId}/{EvaluationFormId}/activate", 200],
  },
  () => ActivateEvaluationFormRequest,
  () => ActivateEvaluationFormResponse
);
export var DeactivateEvaluationForm = op(
  n0,
  _DEF,
  {
    [_h]: ["POST", "/evaluation-forms/{InstanceId}/{EvaluationFormId}/deactivate", 200],
  },
  () => DeactivateEvaluationFormRequest,
  () => DeactivateEvaluationFormResponse
);
export var DeleteEvaluationForm = op(
  n0,
  _DEFe,
  {
    [_h]: ["DELETE", "/evaluation-forms/{InstanceId}/{EvaluationFormId}", 200],
  },
  () => DeleteEvaluationFormRequest,
  () => Unit
);
export var DescribeContactEvaluation = op(
  n0,
  _DCEe,
  {
    [_h]: ["GET", "/contact-evaluations/{InstanceId}/{EvaluationId}", 200],
  },
  () => DescribeContactEvaluationRequest,
  () => DescribeContactEvaluationResponse
);
export var DescribeEvaluationForm = op(
  n0,
  _DEFes,
  {
    [_h]: ["GET", "/evaluation-forms/{InstanceId}/{EvaluationFormId}", 200],
  },
  () => DescribeEvaluationFormRequest,
  () => DescribeEvaluationFormResponse
);
export var ListEvaluationForms = op(
  n0,
  _LEF,
  {
    [_h]: ["GET", "/evaluation-forms/{InstanceId}", 200],
  },
  () => ListEvaluationFormsRequest,
  () => ListEvaluationFormsResponse
);
export var ListEvaluationFormVersions = op(
  n0,
  _LEFV,
  {
    [_h]: ["GET", "/evaluation-forms/{InstanceId}/{EvaluationFormId}/versions", 200],
  },
  () => ListEvaluationFormVersionsRequest,
  () => ListEvaluationFormVersionsResponse
);
export var UpdateEvaluationForm = op(
  n0,
  _UEF,
  {
    [_h]: ["PUT", "/evaluation-forms/{InstanceId}/{EvaluationFormId}", 200],
  },
  () => UpdateEvaluationFormRequest,
  () => UpdateEvaluationFormResponse
);
