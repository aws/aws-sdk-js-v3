// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AFut,
  _Aut,
  _Cat,
  _CEF,
  _CEFR,
  _CEFRr,
  _CI,
  _cI,
  _Con,
  _CT,
  _CTre,
  _D,
  _DAi,
  _DORI,
  _EAv,
  _EAva,
  _EFA,
  _EFI,
  _EFIL,
  _EFIv,
  _EFNQA,
  _EFNQO,
  _EFNQOL,
  _EFNQP,
  _EFQ,
  _EFQTP,
  _EFS,
  _EFSS,
  _EFSSQA,
  _EFSSQAO,
  _EFSSQAOL,
  _EFSSQO,
  _EFSSQOL,
  _EFSSQP,
  _EFT,
  _EI,
  _ES,
  _ESL,
  _ESv,
  _h,
  _hQ,
  _II,
  _Ins,
  _It,
  _La,
  _LCE,
  _LCER,
  _LCERi,
  _LMT,
  _Mo,
  _MV,
  _MVa,
  _NA,
  _NAE,
  _NQPVA,
  _NT,
  _nT,
  _Num,
  _Op,
  _ORIp,
  _Per,
  _PVr,
  _QT,
  _QTP,
  _Que,
  _RCu,
  _RIef,
  _Sco,
  _Sec,
  _SS,
  _SSi,
  _SSQRCA,
  _St,
  _Te,
  _Ti,
  _W,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEvaluationFormRequest = struct(
  n0,
  _CEFR,
  0,
  [_II, _Ti, _D, _It, _SS, _CT],
  [[0, 1], 0, 0, () => EvaluationFormItemsList, () => EvaluationFormScoringStrategy, [0, 4]]
);
export var CreateEvaluationFormResponse = struct(n0, _CEFRr, 0, [_EFI, _EFA], [0, 0]);
export var EvaluationFormNumericQuestionOption = struct(n0, _EFNQO, 0, [_MV, _MVa, _Sco, _AFut], [1, 1, 1, 2]);
export var EvaluationFormNumericQuestionProperties = struct(
  n0,
  _EFNQP,
  0,
  [_MV, _MVa, _Op, _Aut],
  [1, 1, () => EvaluationFormNumericQuestionOptionList, () => EvaluationFormNumericQuestionAutomation]
);
export var EvaluationFormQuestion = struct(
  n0,
  _EFQ,
  0,
  [_Ti, _Ins, _RIef, _NAE, _QT, _QTP, _W],
  [0, 0, 0, 2, 0, () => EvaluationFormQuestionTypeProperties, 1]
);
export var EvaluationFormScoringStrategy = struct(n0, _EFSS, 0, [_Mo, _St], [0, 0]);
export var EvaluationFormSection = struct(
  n0,
  _EFS,
  0,
  [_Ti, _RIef, _Ins, _It, _W],
  [0, 0, 0, () => EvaluationFormItemsList, 1]
);
export var EvaluationFormSingleSelectQuestionAutomation = struct(
  n0,
  _EFSSQA,
  0,
  [_Op, _DORI],
  [() => EvaluationFormSingleSelectQuestionAutomationOptionList, 0]
);
export var EvaluationFormSingleSelectQuestionOption = struct(n0, _EFSSQO, 0, [_RIef, _Te, _Sco, _AFut], [0, 0, 1, 2]);
export var EvaluationFormSingleSelectQuestionProperties = struct(
  n0,
  _EFSSQP,
  0,
  [_Op, _DAi, _Aut],
  [() => EvaluationFormSingleSelectQuestionOptionList, 0, () => EvaluationFormSingleSelectQuestionAutomation]
);
export var EvaluationScore = struct(n0, _ES, 0, [_Per, _NA, _AFut], [1, 2, 2]);
export var EvaluationSummary = struct(
  n0,
  _ESv,
  0,
  [_EI, _EAv, _EFT, _EFI, _St, _EAva, _Sco, _CTre, _LMT],
  [0, 0, 0, 0, 0, 0, () => EvaluationScore, 4, 4]
);
export var ListContactEvaluationsRequest = struct(
  n0,
  _LCER,
  0,
  [_II, _CI, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cI,
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
export var ListContactEvaluationsResponse = struct(n0, _LCERi, 0, [_ESL, _NT], [() => EvaluationSummaryList, 0]);
export var NumericQuestionPropertyValueAutomation = struct(n0, _NQPVA, 0, [_La], [0]);
export var SingleSelectQuestionRuleCategoryAutomation = struct(n0, _SSQRCA, 0, [_Cat, _Con, _ORIp], [0, 0, 0]);
export var EvaluationFormItemsList = list(n0, _EFIL, 0, () => EvaluationFormItem);
export var EvaluationFormNumericQuestionOptionList = list(n0, _EFNQOL, 0, () => EvaluationFormNumericQuestionOption);
export var EvaluationFormSingleSelectQuestionAutomationOptionList = list(
  n0,
  _EFSSQAOL,
  0,
  () => EvaluationFormSingleSelectQuestionAutomationOption
);
export var EvaluationFormSingleSelectQuestionOptionList = list(
  n0,
  _EFSSQOL,
  0,
  () => EvaluationFormSingleSelectQuestionOption
);
export var EvaluationSummaryList = list(n0, _ESL, 0, () => EvaluationSummary);
export var EvaluationFormItem = uni(
  n0,
  _EFIv,
  0,
  [_Sec, _Que],
  [() => EvaluationFormSection, () => EvaluationFormQuestion]
);
export var EvaluationFormNumericQuestionAutomation = uni(
  n0,
  _EFNQA,
  0,
  [_PVr],
  [() => NumericQuestionPropertyValueAutomation]
);
export var EvaluationFormQuestionTypeProperties = uni(
  n0,
  _EFQTP,
  0,
  [_Num, _SSi],
  [() => EvaluationFormNumericQuestionProperties, () => EvaluationFormSingleSelectQuestionProperties]
);
export var EvaluationFormSingleSelectQuestionAutomationOption = uni(
  n0,
  _EFSSQAO,
  0,
  [_RCu],
  [() => SingleSelectQuestionRuleCategoryAutomation]
);
export var CreateEvaluationForm = op(
  n0,
  _CEF,
  {
    [_h]: ["PUT", "/evaluation-forms/{InstanceId}", 200],
  },
  () => CreateEvaluationFormRequest,
  () => CreateEvaluationFormResponse
);
export var ListContactEvaluations = op(
  n0,
  _LCE,
  {
    [_h]: ["GET", "/contact-evaluations/{InstanceId}", 200],
  },
  () => ListContactEvaluationsRequest,
  () => ListContactEvaluationsResponse
);
