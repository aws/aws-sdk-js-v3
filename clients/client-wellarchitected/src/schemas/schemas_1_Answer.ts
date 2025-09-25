// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AR,
  _ARL,
  _AS,
  _ASn,
  _ASns,
  _C,
  _CA,
  _CAh,
  _CAr,
  _CAS,
  _CASh,
  _CC,
  _CDho,
  _Ch,
  _Cho,
  _CI,
  _CIP,
  _CIPh,
  _CT,
  _CU,
  _CUh,
  _D,
  _DT,
  _GA,
  _GAI,
  _GAO,
  _GP,
  _GPI,
  _GPO,
  _GPT,
  _GPTI,
  _GPTO,
  _GRTA,
  _GRTAI,
  _GRTAO,
  _h,
  _hQ,
  _HR,
  _HRDT,
  _HRU,
  _IA,
  _IP,
  _IPm,
  _IPU,
  _ISm,
  _ISmp,
  _JC,
  _JIU,
  _LAe,
  _LAen,
  _LAI,
  _LAi,
  _LAO,
  _LLRII,
  _LLRIi,
  _LLRIO,
  _LRTA,
  _LRTAI,
  _LRTAO,
  _LST,
  _MNi,
  _MR,
  _MSC,
  _MSCa,
  _N,
  _NT,
  _O,
  _PAr,
  _PC,
  _PD,
  _PI,
  _PN,
  _PQ,
  _PQC,
  _PQr,
  _Pr,
  _PTC,
  _PTQ,
  _PTQC,
  _PTr,
  _PV,
  _QC,
  _QD,
  _QI,
  _QP,
  _QT,
  _QTu,
  _R,
  _Re,
  _RTAe,
  _RTAS,
  _RTASe,
  _SC,
  _SCI,
  _SII,
  _St,
  _T,
  _TA,
  _Ta,
  _Ti,
  _TN,
  _TQ,
  _U,
  _UA,
  _UAI,
  _UAO,
  _UAp,
  _UP,
  _UPI,
  _UPO,
  _Ur,
  _URTA,
  _URTAI,
  _URTAO,
  _WI,
  n0,
} from "./schemas_0";
import { ProfileQuestionUpdates } from "./schemas_13_Profile";

/* eslint no-var: 0 */

export var AdditionalResources = struct(n0, _AR, 0, [_T, _C], [0, () => Urls]);
export var Answer = struct(
  n0,
  _A,
  0,
  [_QI, _PI, _QT, _QD, _IPU, _HRU, _HRDT, _Ch, _SC, _CA, _IA, _R, _N, _Re, _JC],
  [0, 0, 0, 0, 0, 0, 0, () => Choices, 64 | 0, () => ChoiceAnswers, 2, 0, 0, 0, () => JiraConfiguration]
);
export var AnswerSummary = struct(
  n0,
  _AS,
  0,
  [_QI, _PI, _QT, _Ch, _SC, _CAS, _IA, _R, _Re, _QTu, _JC],
  [0, 0, 0, () => Choices, 64 | 0, () => ChoiceAnswerSummaries, 2, 0, 0, 0, () => JiraConfiguration]
);
export var Choice = struct(
  n0,
  _Cho,
  0,
  [_CI, _Ti, _D, _HR, _IP, _AR],
  [0, 0, 0, () => ChoiceContent, () => ChoiceContent, () => AdditionalResourcesList]
);
export var ChoiceAnswer = struct(n0, _CAh, 0, [_CI, _St, _Re, _N], [0, 0, 0, 0]);
export var ChoiceAnswerSummary = struct(n0, _CASh, 0, [_CI, _St, _Re], [0, 0, 0]);
export var ChoiceContent = struct(n0, _CC, 0, [_DT, _U], [0, 0]);
export var ChoiceImprovementPlan = struct(n0, _CIP, 0, [_CI, _DT, _IPU], [0, 0, 0]);
export var ChoiceUpdate = struct(n0, _CU, 0, [_St, _Re, _N], [0, 0, 0]);
export var GetAnswerInput = struct(
  n0,
  _GAI,
  0,
  [_WI, _LAen, _QI, _MNi],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _MNi,
      },
    ],
  ]
);
export var GetAnswerOutput = struct(n0, _GAO, 0, [_WI, _MNi, _LAen, _LAe, _A], [0, 1, 0, 0, () => Answer]);
export var GetProfileInput = struct(
  n0,
  _GPI,
  0,
  [_PAr, _PV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _PV,
      },
    ],
  ]
);
export var GetProfileOutput = struct(n0, _GPO, 0, [_Pr], [() => Profile]);
export var GetProfileTemplateInput = struct(n0, _GPTI, 0, [], []);
export var GetProfileTemplateOutput = struct(n0, _GPTO, 0, [_PTr], [() => ProfileTemplate]);
export var GetReviewTemplateAnswerInput = struct(
  n0,
  _GRTAI,
  0,
  [_TA, _LAen, _QI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetReviewTemplateAnswerOutput = struct(n0, _GRTAO, 0, [_TA, _LAen, _A], [0, 0, () => ReviewTemplateAnswer]);
export var ImprovementSummary = struct(
  n0,
  _ISm,
  0,
  [_QI, _PI, _QT, _R, _IPU, _IPm, _JC],
  [0, 0, 0, 0, 0, () => ChoiceImprovementPlans, () => JiraConfiguration]
);
export var JiraConfiguration = struct(n0, _JC, 0, [_JIU, _LST], [0, 4]);
export var ListAnswersInput = struct(
  n0,
  _LAI,
  0,
  [_WI, _LAen, _PI, _MNi, _NT, _MR, _QP],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _PI,
      },
    ],
    [
      1,
      {
        [_hQ]: _MNi,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _QP,
      },
    ],
  ]
);
export var ListAnswersOutput = struct(
  n0,
  _LAO,
  0,
  [_WI, _MNi, _LAen, _LAe, _ASn, _NT],
  [0, 1, 0, 0, () => AnswerSummaries, 0]
);
export var ListLensReviewImprovementsInput = struct(
  n0,
  _LLRII,
  0,
  [_WI, _LAen, _PI, _MNi, _NT, _MR, _QP],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _PI,
      },
    ],
    [
      1,
      {
        [_hQ]: _MNi,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _QP,
      },
    ],
  ]
);
export var ListLensReviewImprovementsOutput = struct(
  n0,
  _LLRIO,
  0,
  [_WI, _MNi, _LAen, _LAe, _ISmp, _NT],
  [0, 1, 0, 0, () => ImprovementSummaries, 0]
);
export var ListReviewTemplateAnswersInput = struct(
  n0,
  _LRTAI,
  0,
  [_TA, _LAen, _PI, _NT, _MR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _PI,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListReviewTemplateAnswersOutput = struct(
  n0,
  _LRTAO,
  0,
  [_TA, _LAen, _ASn, _NT],
  [0, 0, () => ReviewTemplateAnswerSummaries, 0]
);
export var Profile = struct(
  n0,
  _Pr,
  0,
  [_PAr, _PV, _PN, _PD, _PQ, _O, _CAr, _UA, _SII, _Ta],
  [0, 0, 0, 0, () => ProfileQuestions, 0, 4, 4, 0, 128 | 0]
);
export var ProfileChoice = struct(n0, _PC, 0, [_CI, _CT, _CDho], [0, 0, 0]);
export var ProfileQuestion = struct(
  n0,
  _PQr,
  0,
  [_QI, _QT, _QD, _QC, _SCI, _MSC, _MSCa],
  [0, 0, 0, () => ProfileQuestionChoices, 64 | 0, 1, 1]
);
export var ProfileTemplate = struct(n0, _PTr, 0, [_TN, _TQ, _CAr, _UA], [0, () => TemplateQuestions, 4, 4]);
export var ProfileTemplateChoice = struct(n0, _PTC, 0, [_CI, _CT, _CDho], [0, 0, 0]);
export var ProfileTemplateQuestion = struct(
  n0,
  _PTQ,
  0,
  [_QI, _QT, _QD, _QC, _MSC, _MSCa],
  [0, 0, 0, () => ProfileTemplateQuestionChoices, 1, 1]
);
export var ReviewTemplateAnswer = struct(
  n0,
  _RTAe,
  0,
  [_QI, _PI, _QT, _QD, _IPU, _HRU, _HRDT, _Ch, _SC, _CA, _IA, _ASns, _N, _Re],
  [0, 0, 0, 0, 0, 0, 0, () => Choices, 64 | 0, () => ChoiceAnswers, 2, 0, 0, 0]
);
export var ReviewTemplateAnswerSummary = struct(
  n0,
  _RTAS,
  0,
  [_QI, _PI, _QT, _Ch, _SC, _CAS, _IA, _ASns, _Re, _QTu],
  [0, 0, 0, () => Choices, 64 | 0, () => ChoiceAnswerSummaries, 2, 0, 0, 0]
);
export var UpdateAnswerInput = struct(
  n0,
  _UAI,
  0,
  [_WI, _LAen, _QI, _SC, _CUh, _N, _IA, _Re],
  [[0, 1], [0, 1], [0, 1], 64 | 0, () => ChoiceUpdates, 0, 2, 0]
);
export var UpdateAnswerOutput = struct(n0, _UAO, 0, [_WI, _LAen, _LAe, _A], [0, 0, 0, () => Answer]);
export var UpdateProfileInput = struct(n0, _UPI, 0, [_PAr, _PD, _PQ], [[0, 1], 0, () => ProfileQuestionUpdates]);
export var UpdateProfileOutput = struct(n0, _UPO, 0, [_Pr], [() => Profile]);
export var UpdateReviewTemplateAnswerInput = struct(
  n0,
  _URTAI,
  0,
  [_TA, _LAen, _QI, _SC, _CUh, _N, _IA, _Re],
  [[0, 1], [0, 1], [0, 1], 64 | 0, () => ChoiceUpdates, 0, 2, 0]
);
export var UpdateReviewTemplateAnswerOutput = struct(
  n0,
  _URTAO,
  0,
  [_TA, _LAen, _A],
  [0, 0, () => ReviewTemplateAnswer]
);
export var AdditionalResourcesList = list(n0, _ARL, 0, () => AdditionalResources);
export var AnswerSummaries = list(n0, _ASn, 0, () => AnswerSummary);
export var ChoiceAnswers = list(n0, _CA, 0, () => ChoiceAnswer);
export var ChoiceAnswerSummaries = list(n0, _CAS, 0, () => ChoiceAnswerSummary);
export var ChoiceImprovementPlans = list(n0, _CIPh, 0, () => ChoiceImprovementPlan);
export var Choices = list(n0, _Ch, 0, () => Choice);
export var ImprovementSummaries = list(n0, _ISmp, 0, () => ImprovementSummary);
export var ProfileQuestionChoices = list(n0, _PQC, 0, () => ProfileChoice);
export var ProfileQuestions = list(n0, _PQ, 0, () => ProfileQuestion);
export var ProfileTemplateQuestionChoices = list(n0, _PTQC, 0, () => ProfileTemplateChoice);
export var ReviewTemplateAnswerSummaries = list(n0, _RTASe, 0, () => ReviewTemplateAnswerSummary);
export var SelectedChoiceIds = 64 | 0;

export var SelectedChoices = 64 | 0;

export var TemplateQuestions = list(n0, _TQ, 0, () => ProfileTemplateQuestion);
export var Urls = list(n0, _Ur, 0, () => ChoiceContent);
export var ChoiceUpdates = map(n0, _CUh, 0, 0, () => ChoiceUpdate);
export var GetAnswer = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}", 200],
  },
  () => GetAnswerInput,
  () => GetAnswerOutput
);
export var GetProfile = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/profiles/{ProfileArn}", 200],
  },
  () => GetProfileInput,
  () => GetProfileOutput
);
export var GetProfileTemplate = op(
  n0,
  _GPT,
  {
    [_h]: ["GET", "/profileTemplate", 200],
  },
  () => GetProfileTemplateInput,
  () => GetProfileTemplateOutput
);
export var GetReviewTemplateAnswer = op(
  n0,
  _GRTA,
  {
    [_h]: ["GET", "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}", 200],
  },
  () => GetReviewTemplateAnswerInput,
  () => GetReviewTemplateAnswerOutput
);
export var ListAnswers = op(
  n0,
  _LAi,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers", 200],
  },
  () => ListAnswersInput,
  () => ListAnswersOutput
);
export var ListLensReviewImprovements = op(
  n0,
  _LLRIi,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements", 200],
  },
  () => ListLensReviewImprovementsInput,
  () => ListLensReviewImprovementsOutput
);
export var ListReviewTemplateAnswers = op(
  n0,
  _LRTA,
  {
    [_h]: ["GET", "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers", 200],
  },
  () => ListReviewTemplateAnswersInput,
  () => ListReviewTemplateAnswersOutput
);
export var UpdateAnswer = op(
  n0,
  _UAp,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}", 200],
  },
  () => UpdateAnswerInput,
  () => UpdateAnswerOutput
);
export var UpdateProfile = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/profiles/{ProfileArn}", 200],
  },
  () => UpdateProfileInput,
  () => UpdateProfileOutput
);
export var UpdateReviewTemplateAnswer = op(
  n0,
  _URTA,
  {
    [_h]: ["PATCH", "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}", 200],
  },
  () => UpdateReviewTemplateAnswerInput,
  () => UpdateReviewTemplateAnswerOutput
);
