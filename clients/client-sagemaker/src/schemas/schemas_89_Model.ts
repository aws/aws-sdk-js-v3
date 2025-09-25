// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CB,
  _CMC,
  _CMCR,
  _CMCRr,
  _Con,
  _CT,
  _CTA,
  _CTB,
  _DMCe,
  _DMCRe,
  _DMCRes,
  _KKI,
  _LMB,
  _LMC,
  _LMCR,
  _LMCRi,
  _LMCV,
  _LMCVR,
  _LMCVRi,
  _LMT,
  _MCA,
  _MCC,
  _MCN,
  _MCPS,
  _MCS,
  _MCSC,
  _MCSL,
  _MCSo,
  _MCSod,
  _MCV,
  _MCVS,
  _MCVSL,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SC,
  _SO,
  _T,
  _UMC,
  _UMCR,
  _UMCRp,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ModelCardContent = sim(n0, _MCC, 0, 8);
export var CreateModelCardRequest = struct(
  n0,
  _CMCR,
  0,
  [_MCN, _SC, _Con, _MCS, _T],
  [0, () => ModelCardSecurityConfig, [() => ModelCardContent, 0], 0, () => TagList]
);
export var CreateModelCardResponse = struct(n0, _CMCRr, 0, [_MCA], [0]);
export var DescribeModelCardRequest = struct(n0, _DMCRe, 0, [_MCN, _MCV], [0, 1]);
export var DescribeModelCardResponse = struct(
  n0,
  _DMCRes,
  0,
  [_MCA, _MCN, _MCV, _Con, _MCS, _SC, _CT, _CB, _LMT, _LMB, _MCPS],
  [
    0,
    0,
    1,
    [() => ModelCardContent, 0],
    0,
    () => ModelCardSecurityConfig,
    4,
    () => UserContext,
    4,
    () => UserContext,
    0,
  ]
);
export var ListModelCardsRequest = struct(
  n0,
  _LMCR,
  0,
  [_CTA, _CTB, _MR, _NCa, _MCS, _NT, _SBo, _SO],
  [4, 4, 1, 0, 0, 0, 0, 0]
);
export var ListModelCardsResponse = struct(n0, _LMCRi, 0, [_MCSo, _NT], [() => ModelCardSummaryList, 0]);
export var ListModelCardVersionsRequest = struct(
  n0,
  _LMCVR,
  0,
  [_CTA, _CTB, _MR, _MCN, _MCS, _NT, _SBo, _SO],
  [4, 4, 1, 0, 0, 0, 0, 0]
);
export var ListModelCardVersionsResponse = struct(
  n0,
  _LMCVRi,
  0,
  [_MCVSL, _NT],
  [() => ModelCardVersionSummaryList, 0]
);
export var ModelCardSecurityConfig = struct(n0, _MCSC, 0, [_KKI], [0]);
export var ModelCardSummary = struct(n0, _MCSod, 0, [_MCN, _MCA, _MCS, _CT, _LMT], [0, 0, 0, 4, 4]);
export var ModelCardVersionSummary = struct(n0, _MCVS, 0, [_MCN, _MCA, _MCS, _MCV, _CT, _LMT], [0, 0, 0, 1, 4, 4]);
export var UpdateModelCardRequest = struct(n0, _UMCR, 0, [_MCN, _Con, _MCS], [0, [() => ModelCardContent, 0], 0]);
export var UpdateModelCardResponse = struct(n0, _UMCRp, 0, [_MCA], [0]);
export var ModelCardSummaryList = list(n0, _MCSL, 0, () => ModelCardSummary);
export var ModelCardVersionSummaryList = list(n0, _MCVSL, 0, () => ModelCardVersionSummary);
export var CreateModelCard = op(
  n0,
  _CMC,
  0,
  () => CreateModelCardRequest,
  () => CreateModelCardResponse
);
export var DescribeModelCard = op(
  n0,
  _DMCe,
  0,
  () => DescribeModelCardRequest,
  () => DescribeModelCardResponse
);
export var ListModelCards = op(
  n0,
  _LMC,
  0,
  () => ListModelCardsRequest,
  () => ListModelCardsResponse
);
export var ListModelCardVersions = op(
  n0,
  _LMCV,
  0,
  () => ListModelCardVersionsRequest,
  () => ListModelCardVersionsResponse
);
export var UpdateModelCard = op(
  n0,
  _UMC,
  0,
  () => UpdateModelCardRequest,
  () => UpdateModelCardResponse
);
