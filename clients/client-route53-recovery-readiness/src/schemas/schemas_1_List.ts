// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CA,
  _cA,
  _CAAr,
  _cAAr,
  _ce,
  _CI,
  _cI,
  _CN,
  _cN,
  _CO,
  _GAR,
  _GARR,
  _GARRe,
  _GCRS,
  _GCRSR,
  _GCRSRe,
  _GRCRS,
  _GRCRSR,
  _GRCRSRe,
  _GRCS,
  _GRCSR,
  _GRCSRe,
  _GRGRS,
  _GRGRSR,
  _GRGRSRe,
  _h,
  _hQ,
  _jN,
  _LAT,
  _lAT,
  _LC,
  _LCAA,
  _LCAAR,
  _LCAARi,
  _LCR,
  _LCRi,
  _LCT,
  _lCT,
  _lOCO,
  _lOLRO,
  _lOM,
  _lOR,
  _lORCO,
  _lORCS,
  _lORGO,
  _lORR,
  _lORRi,
  _lORSO,
  _LR,
  _LRC,
  _LRCR,
  _LRCRi,
  _LRG,
  _LRGR,
  _LRGRi,
  _LRO,
  _LRR,
  _LRRi,
  _LRS,
  _LRSR,
  _LRSRi,
  _M,
  _Me,
  _me,
  _MR,
  _mR,
  _MT,
  _mT,
  _NT,
  _nT,
  _PRS,
  _pRS,
  _R,
  _r,
  _RA,
  _rA,
  _RC,
  _rC,
  _RCA,
  _rCA,
  _RCN,
  _rCN,
  _RCO,
  _RCS,
  _RD,
  _rD,
  _Re,
  _re,
  _Rea,
  _rea,
  _Rec,
  _RG,
  _rG,
  _RGA,
  _rGA,
  _RGN,
  _rGN,
  _RGO,
  _RI,
  _rI,
  _RIu,
  _RR,
  _RRu,
  _RS,
  _rS,
  _RSA,
  _rSA,
  _RSe,
  _rSe,
  _RSN,
  _rSN,
  _RSO,
  _RST,
  _rST,
  _RTe,
  _rTe,
  _RTec,
  _rTec,
  _Ru,
  _ru,
  _T,
  _t,
  n0,
} from "./schemas_0";
import { __listOfResource } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var CellOutput = struct(
  n0,
  _CO,
  0,
  [_CA, _CN, _C, _PRS, _T],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pRS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var GetArchitectureRecommendationsRequest = struct(
  n0,
  _GARR,
  0,
  [_MR, _NT, _RGN],
  [
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
    [0, 1],
  ]
);
export var GetArchitectureRecommendationsResponse = struct(
  n0,
  _GARRe,
  0,
  [_LAT, _NT, _Re],
  [
    [
      5,
      {
        [_jN]: _lAT,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfRecommendation,
      {
        [_jN]: _re,
      },
    ],
  ]
);
export var GetCellReadinessSummaryRequest = struct(
  n0,
  _GCRSR,
  0,
  [_CN, _MR, _NT],
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
export var GetCellReadinessSummaryResponse = struct(
  n0,
  _GCRSRe,
  0,
  [_NT, _Rea, _RC],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      () => __listOfReadinessCheckSummary,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var GetReadinessCheckResourceStatusRequest = struct(
  n0,
  _GRCRSR,
  0,
  [_MR, _NT, _RCN, _RI],
  [
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
    [0, 1],
    [0, 1],
  ]
);
export var GetReadinessCheckResourceStatusResponse = struct(
  n0,
  _GRCRSRe,
  0,
  [_NT, _Rea, _Ru],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      () => __listOfRuleResult,
      {
        [_jN]: _ru,
      },
    ],
  ]
);
export var GetReadinessCheckStatusRequest = struct(
  n0,
  _GRCSR,
  0,
  [_MR, _NT, _RCN],
  [
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
    [0, 1],
  ]
);
export var GetReadinessCheckStatusResponse = struct(
  n0,
  _GRCSRe,
  0,
  [_Me, _NT, _Rea, _R],
  [
    [
      () => __listOfMessage,
      {
        [_jN]: _me,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      () => __listOfResourceResult,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var GetRecoveryGroupReadinessSummaryRequest = struct(
  n0,
  _GRGRSR,
  0,
  [_MR, _NT, _RGN],
  [
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
    [0, 1],
  ]
);
export var GetRecoveryGroupReadinessSummaryResponse = struct(
  n0,
  _GRGRSRe,
  0,
  [_NT, _Rea, _RC],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      () => __listOfReadinessCheckSummary,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var ListCellsRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NT],
  [
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
export var ListCellsResponse = struct(
  n0,
  _LCRi,
  0,
  [_C, _NT],
  [
    [
      () => __listOfCellOutput,
      {
        [_jN]: _ce,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListCrossAccountAuthorizationsRequest = struct(
  n0,
  _LCAAR,
  0,
  [_MR, _NT],
  [
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
export var ListCrossAccountAuthorizationsResponse = struct(
  n0,
  _LCAARi,
  0,
  [_CAAr, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _cAAr,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListReadinessChecksRequest = struct(
  n0,
  _LRCR,
  0,
  [_MR, _NT],
  [
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
export var ListReadinessChecksResponse = struct(
  n0,
  _LRCRi,
  0,
  [_NT, _RC],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfReadinessCheckOutput,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var ListRecoveryGroupsRequest = struct(
  n0,
  _LRGR,
  0,
  [_MR, _NT],
  [
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
export var ListRecoveryGroupsResponse = struct(
  n0,
  _LRGRi,
  0,
  [_NT, _RG],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfRecoveryGroupOutput,
      {
        [_jN]: _rG,
      },
    ],
  ]
);
export var ListResourceSetsRequest = struct(
  n0,
  _LRSR,
  0,
  [_MR, _NT],
  [
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
export var ListResourceSetsResponse = struct(
  n0,
  _LRSRi,
  0,
  [_NT, _RSe],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfResourceSetOutput,
      {
        [_jN]: _rSe,
      },
    ],
  ]
);
export var ListRulesOutput = struct(
  n0,
  _LRO,
  0,
  [_RTe, _RD, _RIu],
  [
    [
      0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      0,
      {
        [_jN]: _rD,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
  ]
);
export var ListRulesRequest = struct(
  n0,
  _LRR,
  0,
  [_MR, _NT, _RTe],
  [
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
    [
      0,
      {
        [_hQ]: _rTe,
      },
    ],
  ]
);
export var ListRulesResponse = struct(
  n0,
  _LRRi,
  0,
  [_NT, _Ru],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfListRulesOutput,
      {
        [_jN]: _ru,
      },
    ],
  ]
);
export var Message = struct(
  n0,
  _M,
  0,
  [_MT],
  [
    [
      0,
      {
        [_jN]: _mT,
      },
    ],
  ]
);
export var ReadinessCheckOutput = struct(
  n0,
  _RCO,
  0,
  [_RCA, _RCN, _RS, _T],
  [
    [
      0,
      {
        [_jN]: _rCA,
      },
    ],
    [
      0,
      {
        [_jN]: _rCN,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ReadinessCheckSummary = struct(
  n0,
  _RCS,
  0,
  [_Rea, _RCN],
  [
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      0,
      {
        [_jN]: _rCN,
      },
    ],
  ]
);
export var Recommendation = struct(
  n0,
  _Rec,
  0,
  [_RTec],
  [
    [
      0,
      {
        [_jN]: _rTec,
      },
    ],
  ]
);
export var RecoveryGroupOutput = struct(
  n0,
  _RGO,
  0,
  [_C, _RGA, _RGN, _T],
  [
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      0,
      {
        [_jN]: _rGA,
      },
    ],
    [
      0,
      {
        [_jN]: _rGN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ResourceResult = struct(
  n0,
  _RR,
  0,
  [_CI, _LCT, _Rea, _RA],
  [
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      5,
      {
        [_jN]: _lCT,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
  ]
);
export var ResourceSetOutput = struct(
  n0,
  _RSO,
  0,
  [_RSA, _RSN, _RST, _R, _T],
  [
    [
      0,
      {
        [_jN]: _rSA,
      },
    ],
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
    [
      0,
      {
        [_jN]: _rST,
      },
    ],
    [
      () => __listOfResource,
      {
        [_jN]: _r,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var RuleResult = struct(
  n0,
  _RRu,
  0,
  [_LCT, _Me, _Rea, _RIu],
  [
    [
      5,
      {
        [_jN]: _lCT,
      },
    ],
    [
      () => __listOfMessage,
      {
        [_jN]: _me,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
  ]
);
export var Unit = "unit" as const;

export var __listOfCellOutput = list(n0, _lOCO, 0, [() => CellOutput, 0]);
export var __listOfCrossAccountAuthorization = 64 | 0;

export var __listOfListRulesOutput = list(n0, _lOLRO, 0, [() => ListRulesOutput, 0]);
export var __listOfMessage = list(n0, _lOM, 0, [() => Message, 0]);
export var __listOfReadinessCheckOutput = list(n0, _lORCO, 0, [() => ReadinessCheckOutput, 0]);
export var __listOfReadinessCheckSummary = list(n0, _lORCS, 0, [() => ReadinessCheckSummary, 0]);
export var __listOfRecommendation = list(n0, _lOR, 0, [() => Recommendation, 0]);
export var __listOfRecoveryGroupOutput = list(n0, _lORGO, 0, [() => RecoveryGroupOutput, 0]);
export var __listOfResourceResult = list(n0, _lORR, 0, [() => ResourceResult, 0]);
export var __listOfResourceSetOutput = list(n0, _lORSO, 0, [() => ResourceSetOutput, 0]);
export var __listOfRuleResult = list(n0, _lORRi, 0, [() => RuleResult, 0]);
export var GetArchitectureRecommendations = op(
  n0,
  _GAR,
  {
    [_h]: ["GET", "/recoverygroups/{RecoveryGroupName}/architectureRecommendations", 200],
  },
  () => GetArchitectureRecommendationsRequest,
  () => GetArchitectureRecommendationsResponse
);
export var GetCellReadinessSummary = op(
  n0,
  _GCRS,
  {
    [_h]: ["GET", "/cellreadiness/{CellName}", 200],
  },
  () => GetCellReadinessSummaryRequest,
  () => GetCellReadinessSummaryResponse
);
export var GetReadinessCheckResourceStatus = op(
  n0,
  _GRCRS,
  {
    [_h]: ["GET", "/readinesschecks/{ReadinessCheckName}/resource/{ResourceIdentifier}/status", 200],
  },
  () => GetReadinessCheckResourceStatusRequest,
  () => GetReadinessCheckResourceStatusResponse
);
export var GetReadinessCheckStatus = op(
  n0,
  _GRCS,
  {
    [_h]: ["GET", "/readinesschecks/{ReadinessCheckName}/status", 200],
  },
  () => GetReadinessCheckStatusRequest,
  () => GetReadinessCheckStatusResponse
);
export var GetRecoveryGroupReadinessSummary = op(
  n0,
  _GRGRS,
  {
    [_h]: ["GET", "/recoverygroupreadiness/{RecoveryGroupName}", 200],
  },
  () => GetRecoveryGroupReadinessSummaryRequest,
  () => GetRecoveryGroupReadinessSummaryResponse
);
export var ListCells = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/cells", 200],
  },
  () => ListCellsRequest,
  () => ListCellsResponse
);
export var ListCrossAccountAuthorizations = op(
  n0,
  _LCAA,
  {
    [_h]: ["GET", "/crossaccountauthorizations", 200],
  },
  () => ListCrossAccountAuthorizationsRequest,
  () => ListCrossAccountAuthorizationsResponse
);
export var ListReadinessChecks = op(
  n0,
  _LRC,
  {
    [_h]: ["GET", "/readinesschecks", 200],
  },
  () => ListReadinessChecksRequest,
  () => ListReadinessChecksResponse
);
export var ListRecoveryGroups = op(
  n0,
  _LRG,
  {
    [_h]: ["GET", "/recoverygroups", 200],
  },
  () => ListRecoveryGroupsRequest,
  () => ListRecoveryGroupsResponse
);
export var ListResourceSets = op(
  n0,
  _LRS,
  {
    [_h]: ["GET", "/resourcesets", 200],
  },
  () => ListResourceSetsRequest,
  () => ListResourceSetsResponse
);
export var ListRules = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/rules", 200],
  },
  () => ListRulesRequest,
  () => ListRulesResponse
);
