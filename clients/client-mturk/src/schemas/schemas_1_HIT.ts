// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AADIS,
  _AB,
  _ADIS,
  _AGc,
  _AI,
  _ARP,
  _BA,
  _BP,
  _BPL,
  _BPo,
  _CHIT,
  _CHITR,
  _CHITRr,
  _CHITT,
  _CHITTR,
  _CHITTRr,
  _CHITWHITT,
  _CHITWHITTR,
  _CHITWHITTRr,
  _Co,
  _CT,
  _De,
  _E,
  _GA,
  _GAB,
  _GABR,
  _GABRe,
  _GAR,
  _GARe,
  _GHIT,
  _GHITR,
  _GHITRe,
  _GT,
  _HIT,
  _HITGI,
  _HITI,
  _HITL,
  _HITLI,
  _HITLP,
  _HITLPa,
  _HITLPL,
  _HITRP,
  _HITRS,
  _HITS,
  _HITs,
  _HITTI,
  _IVn,
  _K,
  _LBP,
  _LBPR,
  _LBPRi,
  _LHIT,
  _LHITFQT,
  _LHITFQTR,
  _LHITFQTRi,
  _LHITR,
  _LHITRi,
  _LIS,
  _LL,
  _LRHIT,
  _LRHITR,
  _LRHITRi,
  _LVo,
  _MA,
  _MR,
  _N,
  _NOAAu,
  _NOAC,
  _NOAP,
  _NR,
  _NT,
  _OHB,
  _Q,
  _QR,
  _QRLu,
  _QRual,
  _QTI,
  _R,
  _RA,
  _Re,
  _RTP,
  _S,
  _SB,
  _SBR,
  _SBRe,
  _T,
  _URT,
  _V,
  _WI,
  n0,
} from "./schemas_0";
import { ReviewPolicy } from "./schemas_8_HIT";
import { Assignment } from "./schemas_10_Assignment";
import { Locale } from "./schemas_11_HIT";

/* eslint no-var: 0 */

export var BonusPayment = struct(n0, _BP, 0, [_WI, _BA, _AI, _R, _GT], [0, 0, 0, 0, 4]);
export var CreateHITRequest = struct(
  n0,
  _CHITR,
  0,
  [_MA, _AADIS, _LIS, _ADIS, _Re, _T, _K, _De, _Q, _RA, _QR, _URT, _ARP, _HITRP, _HITLI, _HITLP],
  [
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    () => QualificationRequirementList,
    0,
    () => ReviewPolicy,
    () => ReviewPolicy,
    0,
    () => HITLayoutParameterList,
  ]
);
export var CreateHITResponse = struct(n0, _CHITRr, 0, [_HIT], [() => HIT]);
export var CreateHITTypeRequest = struct(
  n0,
  _CHITTR,
  0,
  [_AADIS, _ADIS, _Re, _T, _K, _De, _QR],
  [1, 1, 0, 0, 0, 0, () => QualificationRequirementList]
);
export var CreateHITTypeResponse = struct(n0, _CHITTRr, 0, [_HITTI], [0]);
export var CreateHITWithHITTypeRequest = struct(
  n0,
  _CHITWHITTR,
  0,
  [_HITTI, _MA, _LIS, _Q, _RA, _URT, _ARP, _HITRP, _HITLI, _HITLP],
  [0, 1, 1, 0, 0, 0, () => ReviewPolicy, () => ReviewPolicy, 0, () => HITLayoutParameterList]
);
export var CreateHITWithHITTypeResponse = struct(n0, _CHITWHITTRr, 0, [_HIT], [() => HIT]);
export var GetAccountBalanceRequest = struct(n0, _GABR, 0, [], []);
export var GetAccountBalanceResponse = struct(n0, _GABRe, 0, [_AB, _OHB], [0, 0]);
export var GetAssignmentRequest = struct(n0, _GAR, 0, [_AI], [0]);
export var GetAssignmentResponse = struct(n0, _GARe, 0, [_A, _HIT], [() => Assignment, () => HIT]);
export var GetHITRequest = struct(n0, _GHITR, 0, [_HITI], [0]);
export var GetHITResponse = struct(n0, _GHITRe, 0, [_HIT], [() => HIT]);
export var HIT = struct(
  n0,
  _HIT,
  0,
  [
    _HITI,
    _HITTI,
    _HITGI,
    _HITLI,
    _CT,
    _T,
    _De,
    _Q,
    _K,
    _HITS,
    _MA,
    _Re,
    _AADIS,
    _E,
    _ADIS,
    _RA,
    _QR,
    _HITRS,
    _NOAP,
    _NOAAu,
    _NOAC,
  ],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, () => QualificationRequirementList, 0, 1, 1, 1]
);
export var HITLayoutParameter = struct(n0, _HITLPa, 0, [_N, _V], [0, 0]);
export var ListBonusPaymentsRequest = struct(n0, _LBPR, 0, [_HITI, _AI, _NT, _MR], [0, 0, 0, 1]);
export var ListBonusPaymentsResponse = struct(n0, _LBPRi, 0, [_NR, _NT, _BPo], [1, 0, () => BonusPaymentList]);
export var ListHITsForQualificationTypeRequest = struct(n0, _LHITFQTR, 0, [_QTI, _NT, _MR], [0, 0, 1]);
export var ListHITsForQualificationTypeResponse = struct(n0, _LHITFQTRi, 0, [_NT, _NR, _HITs], [0, 1, () => HITList]);
export var ListHITsRequest = struct(n0, _LHITR, 0, [_NT, _MR], [0, 1]);
export var ListHITsResponse = struct(n0, _LHITRi, 0, [_NT, _NR, _HITs], [0, 1, () => HITList]);
export var ListReviewableHITsRequest = struct(n0, _LRHITR, 0, [_HITTI, _S, _NT, _MR], [0, 0, 0, 1]);
export var ListReviewableHITsResponse = struct(n0, _LRHITRi, 0, [_NT, _NR, _HITs], [0, 1, () => HITList]);
export var QualificationRequirement = struct(
  n0,
  _QRual,
  0,
  [_QTI, _Co, _IVn, _LVo, _RTP, _AGc],
  [0, 0, 64 | 1, () => LocaleList, 2, 0]
);
export var SendBonusRequest = struct(n0, _SBR, 0, [_WI, _BA, _AI, _R, _URT], [0, 0, 0, 0, 0]);
export var SendBonusResponse = struct(n0, _SBRe, 0, [], []);
export var BonusPaymentList = list(n0, _BPL, 0, () => BonusPayment);
export var HITLayoutParameterList = list(n0, _HITLPL, 0, () => HITLayoutParameter);
export var HITList = list(n0, _HITL, 0, () => HIT);
export var IntegerList = 64 | 1;

export var LocaleList = list(n0, _LL, 0, () => Locale);
export var QualificationRequirementList = list(n0, _QRLu, 0, () => QualificationRequirement);
export var CreateHIT = op(
  n0,
  _CHIT,
  0,
  () => CreateHITRequest,
  () => CreateHITResponse
);
export var CreateHITType = op(
  n0,
  _CHITT,
  2,
  () => CreateHITTypeRequest,
  () => CreateHITTypeResponse
);
export var CreateHITWithHITType = op(
  n0,
  _CHITWHITT,
  0,
  () => CreateHITWithHITTypeRequest,
  () => CreateHITWithHITTypeResponse
);
export var GetAccountBalance = op(
  n0,
  _GAB,
  2,
  () => GetAccountBalanceRequest,
  () => GetAccountBalanceResponse
);
export var GetAssignment = op(
  n0,
  _GA,
  2,
  () => GetAssignmentRequest,
  () => GetAssignmentResponse
);
export var GetHIT = op(
  n0,
  _GHIT,
  2,
  () => GetHITRequest,
  () => GetHITResponse
);
export var ListBonusPayments = op(
  n0,
  _LBP,
  2,
  () => ListBonusPaymentsRequest,
  () => ListBonusPaymentsResponse
);
export var ListHITs = op(
  n0,
  _LHIT,
  2,
  () => ListHITsRequest,
  () => ListHITsResponse
);
export var ListHITsForQualificationType = op(
  n0,
  _LHITFQT,
  2,
  () => ListHITsForQualificationTypeRequest,
  () => ListHITsForQualificationTypeResponse
);
export var ListReviewableHITs = op(
  n0,
  _LRHIT,
  2,
  () => ListReviewableHITsRequest,
  () => ListReviewableHITsResponse
);
export var SendBonus = op(
  n0,
  _SB,
  0,
  () => SendBonusRequest,
  () => SendBonusResponse
);
