// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  NotFoundException as __NotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _AA,
  _ADE,
  _AI,
  _AR,
  _ARR,
  _ARRs,
  _AT,
  _B,
  _BAOK,
  _BD,
  _BDSCT,
  _BN,
  _BNu,
  _c,
  _CA,
  _CAo,
  _CC,
  _CCR,
  _CCRR,
  _CCRr,
  _CCRRr,
  _CD,
  _CDSCT,
  _CE,
  _CFS,
  _CR,
  _CRA,
  _CRS,
  _CRSo,
  _CRT,
  _CRTo,
  _CTS,
  _D,
  _DBN,
  _DC,
  _DCR,
  _DCRR,
  _DCRRe,
  _De,
  _DR,
  _DRA,
  _DRAR,
  _DRARe,
  _DRF,
  _DRFR,
  _DRFRe,
  _DRR,
  _DRRi,
  _e,
  _EI,
  _EL,
  _EO,
  _FC,
  _FP,
  _GHES,
  _h,
  _hE,
  _hQ,
  _KMSKD,
  _KMSKI,
  _LCR,
  _LCRR,
  _LCRRi,
  _LD,
  _LR,
  _LRA,
  _LRAR,
  _LRARi,
  _LRF,
  _LRFR,
  _LRFRi,
  _LRR,
  _LRRi,
  _LUTS,
  _M,
  _MBC,
  _Me,
  _MLOCC,
  _MR,
  _MS,
  _N,
  _Na,
  _NFE,
  _NT,
  _O,
  _Ow,
  _PRF,
  _PRFR,
  _PRFRu,
  _PRI,
  _PT,
  _PTr,
  _R,
  _RA,
  _RAA,
  _RAe,
  _RAS,
  _RASe,
  _RC,
  _Re,
  _Req,
  _RF,
  _RFS,
  _RFSe,
  _RH,
  _RHSCT,
  _RI,
  _RIe,
  _RIeq,
  _RIu,
  _RM,
  _RMe,
  _RN,
  _RNe,
  _RNu,
  _RS,
  _RSe,
  _RT,
  _S,
  _SB,
  _SBN,
  _SBR,
  _SC,
  _SCAOK,
  _SCT,
  _SD,
  _Se,
  _SL,
  _SLOCC,
  _SR,
  _SRD,
  _SRe,
  _St,
  _T,
  _TE,
  _TPSR,
  _Ty,
  _UI,
  _UIs,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var AssociateRepositoryRequest = struct(
  n0,
  _ARR,
  0,
  [_R, _CRT, _T, _KMSKD],
  [() => Repository, [0, 4], 128 | 0, () => KMSKeyDetails]
);
export var AssociateRepositoryResponse = struct(n0, _ARRs, 0, [_RA, _T], [() => RepositoryAssociation, 128 | 0]);
export var BranchDiffSourceCodeType = struct(n0, _BDSCT, 0, [_SBN, _DBN], [0, 0]);
export var CodeArtifacts = struct(n0, _CA, 0, [_SCAOK, _BAOK], [0, 0]);
export var CodeCommitRepository = struct(n0, _CCR, 0, [_N], [0]);
export var CodeReview = struct(
  n0,
  _CR,
  0,
  [_N, _CRA, _RN, _O, _PT, _S, _SR, _CTS, _LUTS, _Ty, _PRI, _SCT, _AA, _Me, _AT, _CFS],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, () => SourceCodeType, 0, () => Metrics, 64 | 0, 0]
);
export var CodeReviewSummary = struct(
  n0,
  _CRS,
  0,
  [_N, _CRA, _RN, _O, _PT, _S, _CTS, _LUTS, _Ty, _PRI, _MS, _SCT],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, () => MetricsSummary, () => SourceCodeType]
);
export var CodeReviewType = struct(n0, _CRTo, 0, [_RAe, _AT], [() => RepositoryAnalysis, 64 | 0]);
export var CommitDiffSourceCodeType = struct(n0, _CDSCT, 0, [_SC, _DC, _MBC], [0, 0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateCodeReviewRequest = struct(n0, _CCRR, 0, [_N, _RAA, _Ty, _CRT], [0, 0, () => CodeReviewType, [0, 4]]);
export var CreateCodeReviewResponse = struct(n0, _CCRRr, 0, [_CR], [() => CodeReview]);
export var DescribeCodeReviewRequest = struct(n0, _DCRR, 0, [_CRA], [[0, 1]]);
export var DescribeCodeReviewResponse = struct(n0, _DCRRe, 0, [_CR], [() => CodeReview]);
export var DescribeRecommendationFeedbackRequest = struct(
  n0,
  _DRFR,
  0,
  [_CRA, _RI, _UI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _RI,
      },
    ],
    [
      0,
      {
        [_hQ]: _UI,
      },
    ],
  ]
);
export var DescribeRecommendationFeedbackResponse = struct(n0, _DRFRe, 0, [_RF], [() => RecommendationFeedback]);
export var DescribeRepositoryAssociationRequest = struct(n0, _DRAR, 0, [_AA], [[0, 1]]);
export var DescribeRepositoryAssociationResponse = struct(
  n0,
  _DRARe,
  0,
  [_RA, _T],
  [() => RepositoryAssociation, 128 | 0]
);
export var DisassociateRepositoryRequest = struct(n0, _DRR, 0, [_AA], [[0, 1]]);
export var DisassociateRepositoryResponse = struct(n0, _DRRi, 0, [_RA, _T], [() => RepositoryAssociation, 128 | 0]);
export var EventInfo = struct(n0, _EI, 0, [_N, _S], [0, 0]);
export var KMSKeyDetails = struct(n0, _KMSKD, 0, [_KMSKI, _EO], [0, 0]);
export var ListCodeReviewsRequest = struct(
  n0,
  _LCRR,
  0,
  [_PTr, _St, _RNe, _Ty, _MR, _NT],
  [
    [
      64 | 0,
      {
        [_hQ]: _PTr,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _St,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _RNe,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ty,
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
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListCodeReviewsResponse = struct(n0, _LCRRi, 0, [_CRSo, _NT], [() => CodeReviewSummaries, 0]);
export var ListRecommendationFeedbackRequest = struct(
  n0,
  _LRFR,
  0,
  [_NT, _MR, _CRA, _UIs, _RIe],
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
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _UIs,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _RIe,
      },
    ],
  ]
);
export var ListRecommendationFeedbackResponse = struct(
  n0,
  _LRFRi,
  0,
  [_RFS, _NT],
  [() => RecommendationFeedbackSummaries, 0]
);
export var ListRecommendationsRequest = struct(
  n0,
  _LRR,
  0,
  [_NT, _MR, _CRA],
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
    [0, 1],
  ]
);
export var ListRecommendationsResponse = struct(n0, _LRRi, 0, [_RS, _NT], [() => RecommendationSummaries, 0]);
export var ListRepositoryAssociationsRequest = struct(
  n0,
  _LRAR,
  0,
  [_PTr, _St, _Na, _Ow, _MR, _NT],
  [
    [
      64 | 0,
      {
        [_hQ]: _PT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _S,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _N,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _O,
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
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListRepositoryAssociationsResponse = struct(
  n0,
  _LRARi,
  0,
  [_RAS, _NT],
  [() => RepositoryAssociationSummaries, 0]
);
export var Metrics = struct(n0, _Me, 0, [_MLOCC, _SLOCC, _FC], [1, 1, 1]);
export var MetricsSummary = struct(n0, _MS, 0, [_MLOCC, _SLOCC, _FC], [1, 1, 1]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NotFoundException
);
export var PutRecommendationFeedbackRequest = struct(n0, _PRFR, 0, [_CRA, _RI, _Re], [0, 0, 64 | 0]);
export var PutRecommendationFeedbackResponse = struct(n0, _PRFRu, 0, [], []);
export var RecommendationFeedback = struct(n0, _RF, 0, [_CRA, _RI, _Re, _UI, _CTS, _LUTS], [0, 0, 64 | 0, 0, 4, 4]);
export var RecommendationFeedbackSummary = struct(n0, _RFSe, 0, [_RI, _Re, _UI], [0, 64 | 0, 0]);
export var RecommendationSummary = struct(
  n0,
  _RSe,
  0,
  [_FP, _RI, _SL, _EL, _D, _RC, _RM, _Se],
  [0, 0, 1, 1, 0, 0, () => RuleMetadata, 0]
);
export var Repository = struct(
  n0,
  _R,
  0,
  [_CC, _B, _GHES, _SB],
  [() => CodeCommitRepository, () => ThirdPartySourceRepository, () => ThirdPartySourceRepository, () => S3Repository]
);
export var RepositoryAnalysis = struct(
  n0,
  _RAe,
  0,
  [_RH, _SCT],
  [() => RepositoryHeadSourceCodeType, () => SourceCodeType]
);
export var RepositoryAssociation = struct(
  n0,
  _RA,
  0,
  [_AI, _AA, _CAo, _N, _O, _PT, _S, _SR, _LUTS, _CTS, _KMSKD, _SRD],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, () => KMSKeyDetails, () => S3RepositoryDetails]
);
export var RepositoryAssociationSummary = struct(
  n0,
  _RASe,
  0,
  [_AA, _CAo, _LUTS, _AI, _N, _O, _PT, _S],
  [0, 0, 4, 0, 0, 0, 0, 0]
);
export var RepositoryHeadSourceCodeType = struct(n0, _RHSCT, 0, [_BN], [0]);
export var RequestMetadata = struct(n0, _RMe, 0, [_RIeq, _Req, _EI, _VN], [0, 0, () => EventInfo, 0]);
export var RuleMetadata = struct(n0, _RM, 0, [_RIu, _RNu, _SD, _LD, _RT], [0, 0, 0, 0, 64 | 0]);
export var S3BucketRepository = struct(n0, _SBR, 0, [_N, _De], [0, () => S3RepositoryDetails]);
export var S3Repository = struct(n0, _SRe, 0, [_N, _BNu], [0, 0]);
export var S3RepositoryDetails = struct(n0, _SRD, 0, [_BNu, _CA], [0, () => CodeArtifacts]);
export var SourceCodeType = struct(
  n0,
  _SCT,
  0,
  [_CD, _RH, _BD, _SBR, _RMe],
  [
    () => CommitDiffSourceCodeType,
    () => RepositoryHeadSourceCodeType,
    () => BranchDiffSourceCodeType,
    () => S3BucketRepository,
    () => RequestMetadata,
  ]
);
export var ThirdPartySourceRepository = struct(n0, _TPSR, 0, [_N, _CAo, _O], [0, 0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var Unit = "unit" as const;

export var AnalysisTypes = 64 | 0;

export var CodeReviewSummaries = list(n0, _CRSo, 0, () => CodeReviewSummary);
export var JobStates = 64 | 0;

export var Names = 64 | 0;

export var Owners = 64 | 0;

export var ProviderTypes = 64 | 0;

export var Reactions = 64 | 0;

export var RecommendationFeedbackSummaries = list(n0, _RFS, 0, () => RecommendationFeedbackSummary);
export var RecommendationIds = 64 | 0;

export var RecommendationSummaries = list(n0, _RS, 0, () => RecommendationSummary);
export var RepositoryAssociationStates = 64 | 0;

export var RepositoryAssociationSummaries = list(n0, _RAS, 0, () => RepositoryAssociationSummary);
export var RepositoryNames = 64 | 0;

export var RuleTags = 64 | 0;

export var UserIds = 64 | 0;

export var AssociateRepository = op(
  n0,
  _AR,
  {
    [_h]: ["POST", "/associations", 200],
  },
  () => AssociateRepositoryRequest,
  () => AssociateRepositoryResponse
);
export var CreateCodeReview = op(
  n0,
  _CCRr,
  {
    [_h]: ["POST", "/codereviews", 200],
  },
  () => CreateCodeReviewRequest,
  () => CreateCodeReviewResponse
);
export var DescribeCodeReview = op(
  n0,
  _DCR,
  {
    [_h]: ["GET", "/codereviews/{CodeReviewArn}", 200],
  },
  () => DescribeCodeReviewRequest,
  () => DescribeCodeReviewResponse
);
export var DescribeRecommendationFeedback = op(
  n0,
  _DRF,
  {
    [_h]: ["GET", "/feedback/{CodeReviewArn}", 200],
  },
  () => DescribeRecommendationFeedbackRequest,
  () => DescribeRecommendationFeedbackResponse
);
export var DescribeRepositoryAssociation = op(
  n0,
  _DRA,
  {
    [_h]: ["GET", "/associations/{AssociationArn}", 200],
  },
  () => DescribeRepositoryAssociationRequest,
  () => DescribeRepositoryAssociationResponse
);
export var DisassociateRepository = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/associations/{AssociationArn}", 200],
  },
  () => DisassociateRepositoryRequest,
  () => DisassociateRepositoryResponse
);
export var ListCodeReviews = op(
  n0,
  _LCR,
  {
    [_h]: ["GET", "/codereviews", 200],
  },
  () => ListCodeReviewsRequest,
  () => ListCodeReviewsResponse
);
export var ListRecommendationFeedback = op(
  n0,
  _LRF,
  {
    [_h]: ["GET", "/feedback/{CodeReviewArn}/RecommendationFeedback", 200],
  },
  () => ListRecommendationFeedbackRequest,
  () => ListRecommendationFeedbackResponse
);
export var ListRecommendations = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/codereviews/{CodeReviewArn}/Recommendations", 200],
  },
  () => ListRecommendationsRequest,
  () => ListRecommendationsResponse
);
export var ListRepositoryAssociations = op(
  n0,
  _LRA,
  {
    [_h]: ["GET", "/associations", 200],
  },
  () => ListRepositoryAssociationsRequest,
  () => ListRepositoryAssociationsResponse
);
export var PutRecommendationFeedback = op(
  n0,
  _PRF,
  {
    [_h]: ["PUT", "/feedback", 200],
  },
  () => PutRecommendationFeedbackRequest,
  () => PutRecommendationFeedbackResponse
);
