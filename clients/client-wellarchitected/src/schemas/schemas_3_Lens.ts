// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BLV,
  _CAr,
  _CLV,
  _CLVI,
  _CLVO,
  _CLVr,
  _CRT,
  _D,
  _DS,
  _EL,
  _ELI,
  _ELO,
  _GL,
  _GLI,
  _GLO,
  _GLR,
  _GLRI,
  _GLRO,
  _GLVD,
  _GLVDI,
  _GLVDO,
  _GRTLR,
  _GRTLRI,
  _GRTLRO,
  _h,
  _hQ,
  _IMV,
  _JC,
  _JSQC,
  _LAe,
  _LAen,
  _Le,
  _LJSON,
  _LL,
  _LLI,
  _LLO,
  _LLR,
  _LLRI,
  _LLRO,
  _LLV,
  _LN,
  _LNe,
  _LNI,
  _LNi,
  _LNO,
  _LR,
  _LRS,
  _LRSe,
  _LS,
  _LSe,
  _LSen,
  _LT,
  _LUS,
  _LV,
  _MNi,
  _MR,
  _N,
  _Na,
  _NS,
  _NSo,
  _NT,
  _O,
  _PDi,
  _PDil,
  _PI,
  _PNi,
  _PNil,
  _PRC,
  _Pro,
  _PRS,
  _PRSi,
  _QCu,
  _QDu,
  _QDue,
  _QI,
  _QT,
  _RA,
  _RC,
  _RN,
  _RTLR,
  _RTPRS,
  _RTPRSe,
  _SII,
  _SP,
  _SPe,
  _SQI,
  _T,
  _TA,
  _Ta,
  _TLV,
  _UA,
  _ULR,
  _ULRI,
  _ULRO,
  _URTLR,
  _URTLRI,
  _URTLRO,
  _VD,
  _WI,
  _WN,
  n0,
} from "./schemas_0";
import { WorkloadProfiles } from "./schemas_8_Get";

/* eslint no-var: 0 */

export var CreateLensVersionInput = struct(n0, _CLVI, 0, [_LAen, _LV, _IMV, _CRT], [[0, 1], 0, 2, [0, 4]]);
export var CreateLensVersionOutput = struct(n0, _CLVO, 0, [_LAe, _LV], [0, 0]);
export var ExportLensInput = struct(
  n0,
  _ELI,
  0,
  [_LAen, _LV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _LV,
      },
    ],
  ]
);
export var ExportLensOutput = struct(n0, _ELO, 0, [_LJSON], [0]);
export var GetLensInput = struct(
  n0,
  _GLI,
  0,
  [_LAen, _LV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _LV,
      },
    ],
  ]
);
export var GetLensOutput = struct(n0, _GLO, 0, [_Le], [() => Lens]);
export var GetLensReviewInput = struct(
  n0,
  _GLRI,
  0,
  [_WI, _LAen, _MNi],
  [
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
export var GetLensReviewOutput = struct(n0, _GLRO, 0, [_WI, _MNi, _LR], [0, 1, () => LensReview]);
export var GetLensVersionDifferenceInput = struct(
  n0,
  _GLVDI,
  0,
  [_LAen, _BLV, _TLV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _BLV,
      },
    ],
    [
      0,
      {
        [_hQ]: _TLV,
      },
    ],
  ]
);
export var GetLensVersionDifferenceOutput = struct(
  n0,
  _GLVDO,
  0,
  [_LAen, _LAe, _BLV, _TLV, _LLV, _VD],
  [0, 0, 0, 0, 0, () => VersionDifferences]
);
export var GetReviewTemplateLensReviewInput = struct(
  n0,
  _GRTLRI,
  0,
  [_TA, _LAen],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReviewTemplateLensReviewOutput = struct(n0, _GRTLRO, 0, [_TA, _LR], [0, () => ReviewTemplateLensReview]);
export var JiraSelectedQuestionConfiguration = struct(n0, _JSQC, 0, [_SP], [() => SelectedPillars]);
export var Lens = struct(n0, _Le, 0, [_LAe, _LV, _Na, _D, _O, _SII, _Ta], [0, 0, 0, 0, 0, 0, 128 | 0]);
export var LensReview = struct(
  n0,
  _LR,
  0,
  [_LAen, _LAe, _LV, _LN, _LS, _PRS, _JC, _UA, _N, _RC, _NT, _Pro, _PRC],
  [
    0,
    0,
    0,
    0,
    0,
    () => PillarReviewSummaries,
    () => JiraSelectedQuestionConfiguration,
    4,
    0,
    128 | 1,
    0,
    () => WorkloadProfiles,
    128 | 1,
  ]
);
export var LensReviewSummary = struct(
  n0,
  _LRS,
  0,
  [_LAen, _LAe, _LV, _LN, _LS, _UA, _RC, _Pro, _PRC],
  [0, 0, 0, 0, 0, 4, 128 | 1, () => WorkloadProfiles, 128 | 1]
);
export var LensSummary = struct(
  n0,
  _LSe,
  0,
  [_LAe, _LAen, _LN, _LT, _D, _CAr, _UA, _LV, _O, _LS],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var LensUpgradeSummary = struct(
  n0,
  _LUS,
  0,
  [_WI, _WN, _LAen, _LAe, _CLV, _LLV, _RA, _RN],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var ListLensesInput = struct(
  n0,
  _LLI,
  0,
  [_NT, _MR, _LT, _LS, _LN],
  [
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
        [_hQ]: _LT,
      },
    ],
    [
      0,
      {
        [_hQ]: _LS,
      },
    ],
    [
      0,
      {
        [_hQ]: _LN,
      },
    ],
  ]
);
export var ListLensesOutput = struct(n0, _LLO, 0, [_LSen, _NT], [() => LensSummaries, 0]);
export var ListLensReviewsInput = struct(
  n0,
  _LLRI,
  0,
  [_WI, _MNi, _NT, _MR],
  [
    [0, 1],
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
  ]
);
export var ListLensReviewsOutput = struct(n0, _LLRO, 0, [_WI, _MNi, _LRSe, _NT], [0, 1, () => LensReviewSummaries, 0]);
export var ListNotificationsInput = struct(n0, _LNI, 0, [_WI, _NT, _MR, _RA], [0, 0, 1, 0]);
export var ListNotificationsOutput = struct(n0, _LNO, 0, [_NS, _NT], [() => NotificationSummaries, 0]);
export var NotificationSummary = struct(n0, _NSo, 0, [_T, _LUS], [0, () => LensUpgradeSummary]);
export var PillarDifference = struct(n0, _PDi, 0, [_PI, _PNi, _DS, _QDu], [0, 0, 0, () => QuestionDifferences]);
export var PillarReviewSummary = struct(n0, _PRSi, 0, [_PI, _PNi, _N, _RC, _PRC], [0, 0, 0, 128 | 1, 128 | 1]);
export var QuestionDifference = struct(n0, _QDue, 0, [_QI, _QT, _DS], [0, 0, 0]);
export var ReviewTemplateLensReview = struct(
  n0,
  _RTLR,
  0,
  [_LAen, _LAe, _LV, _LN, _LS, _PRS, _UA, _N, _QCu, _NT],
  [0, 0, 0, 0, 0, () => ReviewTemplatePillarReviewSummaries, 4, 0, 128 | 1, 0]
);
export var ReviewTemplatePillarReviewSummary = struct(n0, _RTPRS, 0, [_PI, _PNi, _N, _QCu], [0, 0, 0, 128 | 1]);
export var SelectedPillar = struct(n0, _SPe, 0, [_PI, _SQI], [0, 64 | 0]);
export var UpdateLensReviewInput = struct(
  n0,
  _ULRI,
  0,
  [_WI, _LAen, _LNe, _PNil, _JC],
  [[0, 1], [0, 1], 0, 128 | 0, () => JiraSelectedQuestionConfiguration]
);
export var UpdateLensReviewOutput = struct(n0, _ULRO, 0, [_WI, _LR], [0, () => LensReview]);
export var UpdateReviewTemplateLensReviewInput = struct(
  n0,
  _URTLRI,
  0,
  [_TA, _LAen, _LNe, _PNil],
  [[0, 1], [0, 1], 0, 128 | 0]
);
export var UpdateReviewTemplateLensReviewOutput = struct(
  n0,
  _URTLRO,
  0,
  [_TA, _LR],
  [0, () => ReviewTemplateLensReview]
);
export var VersionDifferences = struct(n0, _VD, 0, [_PDil], [() => PillarDifferences]);
export var LensReviewSummaries = list(n0, _LRSe, 0, () => LensReviewSummary);
export var LensSummaries = list(n0, _LSen, 0, () => LensSummary);
export var NotificationSummaries = list(n0, _NS, 0, () => NotificationSummary);
export var PillarDifferences = list(n0, _PDil, 0, () => PillarDifference);
export var PillarReviewSummaries = list(n0, _PRS, 0, () => PillarReviewSummary);
export var QuestionDifferences = list(n0, _QDu, 0, () => QuestionDifference);
export var ReviewTemplatePillarReviewSummaries = list(n0, _RTPRSe, 0, () => ReviewTemplatePillarReviewSummary);
export var SelectedPillars = list(n0, _SP, 0, () => SelectedPillar);
export var SelectedQuestionIds = 64 | 0;

export var PillarNotes = 128 | 0;

export var CreateLensVersion = op(
  n0,
  _CLVr,
  {
    [_h]: ["POST", "/lenses/{LensAlias}/versions", 200],
  },
  () => CreateLensVersionInput,
  () => CreateLensVersionOutput
);
export var ExportLens = op(
  n0,
  _EL,
  {
    [_h]: ["GET", "/lenses/{LensAlias}/export", 200],
  },
  () => ExportLensInput,
  () => ExportLensOutput
);
export var GetLens = op(
  n0,
  _GL,
  {
    [_h]: ["GET", "/lenses/{LensAlias}", 200],
  },
  () => GetLensInput,
  () => GetLensOutput
);
export var GetLensReview = op(
  n0,
  _GLR,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/lensReviews/{LensAlias}", 200],
  },
  () => GetLensReviewInput,
  () => GetLensReviewOutput
);
export var GetLensVersionDifference = op(
  n0,
  _GLVD,
  {
    [_h]: ["GET", "/lenses/{LensAlias}/versionDifference", 200],
  },
  () => GetLensVersionDifferenceInput,
  () => GetLensVersionDifferenceOutput
);
export var GetReviewTemplateLensReview = op(
  n0,
  _GRTLR,
  {
    [_h]: ["GET", "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}", 200],
  },
  () => GetReviewTemplateLensReviewInput,
  () => GetReviewTemplateLensReviewOutput
);
export var ListLenses = op(
  n0,
  _LL,
  {
    [_h]: ["GET", "/lenses", 200],
  },
  () => ListLensesInput,
  () => ListLensesOutput
);
export var ListLensReviews = op(
  n0,
  _LLR,
  {
    [_h]: ["GET", "/workloads/{WorkloadId}/lensReviews", 200],
  },
  () => ListLensReviewsInput,
  () => ListLensReviewsOutput
);
export var ListNotifications = op(
  n0,
  _LNi,
  {
    [_h]: ["POST", "/notifications", 200],
  },
  () => ListNotificationsInput,
  () => ListNotificationsOutput
);
export var UpdateLensReview = op(
  n0,
  _ULR,
  {
    [_h]: ["PATCH", "/workloads/{WorkloadId}/lensReviews/{LensAlias}", 200],
  },
  () => UpdateLensReviewInput,
  () => UpdateLensReviewOutput
);
export var UpdateReviewTemplateLensReview = op(
  n0,
  _URTLR,
  {
    [_h]: ["PATCH", "/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}", 200],
  },
  () => UpdateReviewTemplateLensReviewInput,
  () => UpdateReviewTemplateLensReviewOutput
);
