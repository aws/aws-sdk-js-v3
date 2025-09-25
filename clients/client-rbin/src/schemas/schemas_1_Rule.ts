// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _c,
  _CE,
  _CR,
  _CRR,
  _CRRr,
  _D,
  _DR,
  _DRR,
  _DRRe,
  _e,
  _ERT,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _hQ,
  _I,
  _ISE,
  _K,
  _LC,
  _LET,
  _LR,
  _LRo,
  _LRR,
  _LRRi,
  _LRRo,
  _LRRoc,
  _LS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _NT,
  _R,
  _RA,
  _RAe,
  _RNFE,
  _RP,
  _RPU,
  _RPV,
  _RS,
  _RSL,
  _RT,
  _RTe,
  _RTes,
  _RTK,
  _RTV,
  _Ru,
  _S,
  _s,
  _SQEE,
  _T,
  _Ta,
  _TK,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UD,
  _UDU,
  _UDV,
  _UR,
  _URn,
  _URp,
  _URR,
  _URRn,
  _URRnt,
  _URRnta,
  _URRp,
  _URRpd,
  _V,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _R],
  [0, 0],

  __ConflictException
);
export var CreateRuleRequest = struct(
  n0,
  _CRR,
  0,
  [_RP, _D, _T, _RT, _RTe, _LC, _ERT],
  [() => RetentionPeriod, 0, () => TagList, 0, () => ResourceTags, () => LockConfiguration, () => ExcludeResourceTags]
);
export var CreateRuleResponse = struct(
  n0,
  _CRRr,
  0,
  [_I, _RP, _D, _T, _RT, _RTe, _S, _LC, _LS, _RA, _ERT],
  [
    0,
    () => RetentionPeriod,
    0,
    () => TagList,
    0,
    () => ResourceTags,
    0,
    () => LockConfiguration,
    0,
    0,
    () => ExcludeResourceTags,
  ]
);
export var DeleteRuleRequest = struct(n0, _DRR, 0, [_I], [[0, 1]]);
export var DeleteRuleResponse = struct(n0, _DRRe, 0, [], []);
export var GetRuleRequest = struct(n0, _GRR, 0, [_I], [[0, 1]]);
export var GetRuleResponse = struct(
  n0,
  _GRRe,
  0,
  [_I, _D, _RT, _RP, _RTe, _S, _LC, _LS, _LET, _RA, _ERT],
  [0, 0, 0, () => RetentionPeriod, () => ResourceTags, 0, () => LockConfiguration, 0, 4, 0, () => ExcludeResourceTags]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListRulesRequest = struct(
  n0,
  _LRR,
  0,
  [_MR, _NT, _RT, _RTe, _LS, _ERT],
  [1, 0, 0, () => ResourceTags, 0, () => ExcludeResourceTags]
);
export var ListRulesResponse = struct(n0, _LRRi, 0, [_Ru, _NT], [() => RuleSummaryList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var LockConfiguration = struct(n0, _LC, 0, [_UD], [() => UnlockDelay]);
export var LockRuleRequest = struct(n0, _LRRo, 0, [_I, _LC], [[0, 1], () => LockConfiguration]);
export var LockRuleResponse = struct(
  n0,
  _LRRoc,
  0,
  [_I, _D, _RT, _RP, _RTe, _S, _LC, _LS, _RA, _ERT],
  [0, 0, 0, () => RetentionPeriod, () => ResourceTags, 0, () => LockConfiguration, 0, 0, () => ExcludeResourceTags]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _R],
  [0, 0],

  __ResourceNotFoundException
);
export var ResourceTag = struct(n0, _RTes, 0, [_RTK, _RTV], [0, 0]);
export var RetentionPeriod = struct(n0, _RP, 0, [_RPV, _RPU], [1, 0]);
export var RuleSummary = struct(n0, _RS, 0, [_I, _D, _RP, _LS, _RA], [0, 0, () => RetentionPeriod, 0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _R],
  [0, 0],

  __ServiceQuotaExceededException
);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _T], [[0, 1], () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UnlockDelay = struct(n0, _UD, 0, [_UDV, _UDU], [1, 0]);
export var UnlockRuleRequest = struct(n0, _URR, 0, [_I], [[0, 1]]);
export var UnlockRuleResponse = struct(
  n0,
  _URRn,
  0,
  [_I, _D, _RT, _RP, _RTe, _S, _LC, _LS, _LET, _RA, _ERT],
  [0, 0, 0, () => RetentionPeriod, () => ResourceTags, 0, () => LockConfiguration, 0, 4, 0, () => ExcludeResourceTags]
);
export var UntagResourceRequest = struct(
  n0,
  _URRnt,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRnta, 0, [], []);
export var UpdateRuleRequest = struct(
  n0,
  _URRp,
  0,
  [_I, _RP, _D, _RT, _RTe, _ERT],
  [[0, 1], () => RetentionPeriod, 0, 0, () => ResourceTags, () => ExcludeResourceTags]
);
export var UpdateRuleResponse = struct(
  n0,
  _URRpd,
  0,
  [_I, _RP, _D, _RT, _RTe, _S, _LS, _LET, _RA, _ERT],
  [0, () => RetentionPeriod, 0, 0, () => ResourceTags, 0, 0, 4, 0, () => ExcludeResourceTags]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R],
  [0, 0],

  __ValidationException
);
export var Unit = "unit" as const;

export var ExcludeResourceTags = list(n0, _ERT, 0, () => ResourceTag);
export var ResourceTags = list(n0, _RTe, 0, () => ResourceTag);
export var RuleSummaryList = list(n0, _RSL, 0, () => RuleSummary);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateRule = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/rules", 201],
  },
  () => CreateRuleRequest,
  () => CreateRuleResponse
);
export var DeleteRule = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/rules/{Identifier}", 204],
  },
  () => DeleteRuleRequest,
  () => DeleteRuleResponse
);
export var GetRule = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/rules/{Identifier}", 200],
  },
  () => GetRuleRequest,
  () => GetRuleResponse
);
export var ListRules = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/list-rules", 200],
  },
  () => ListRulesRequest,
  () => ListRulesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var LockRule = op(
  n0,
  _LRo,
  {
    [_h]: ["PATCH", "/rules/{Identifier}/lock", 200],
  },
  () => LockRuleRequest,
  () => LockRuleResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 201],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UnlockRule = op(
  n0,
  _UR,
  {
    [_h]: ["PATCH", "/rules/{Identifier}/unlock", 200],
  },
  () => UnlockRuleRequest,
  () => UnlockRuleResponse
);
export var UntagResource = op(
  n0,
  _URn,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateRule = op(
  n0,
  _URp,
  {
    [_h]: ["PATCH", "/rules/{Identifier}", 200],
  },
  () => UpdateRuleRequest,
  () => UpdateRuleResponse
);
