// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { WAFExpiredManagedRuleGroupVersionException as __WAFExpiredManagedRuleGroupVersionException } from "../models/index";
import {
  _A,
  _AA,
  _All,
  _ALv,
  _BA,
  _Bl,
  _C,
  _c,
  _CA,
  _Ca,
  _CAh,
  _CAo,
  _Ch,
  _CHTTPH,
  _CHTTPHu,
  _CIP,
  _CL,
  _Cou,
  _Coun,
  _CR,
  _CRa,
  _CRBK,
  _CRH,
  _CRh,
  _DMRG,
  _DMRGR,
  _DMRGRe,
  _e,
  _ETn,
  _FR,
  _GSR,
  _GSRR,
  _GSRRe,
  _H,
  _HTTPH,
  _HTTPHe,
  _HTTPR,
  _HTTPV,
  _IH,
  _L,
  _La,
  _LN,
  _LSa,
  _LSab,
  _M,
  _Me,
  _MI,
  _N,
  _OAv,
  _PS,
  _R,
  _RAu,
  _RC,
  _RCS,
  _Req,
  _RH,
  _RHI,
  _RMN,
  _RNWRG,
  _RSu,
  _RSul,
  _Sc,
  _SHTTPR,
  _SHTTPRa,
  _SR,
  _ST,
  _STA,
  _STt,
  _Ti,
  _TW,
  _URI,
  _Val,
  _VN,
  _VNe,
  _W,
  _WAA,
  _WAFEMRGVE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllowAction = struct(n0, _AA, 0, [_CRH], [() => CustomRequestHandling]);
export var BlockAction = struct(n0, _BA, 0, [_CR], [() => CustomResponse]);
export var CaptchaAction = struct(n0, _CA, 0, [_CRH], [() => CustomRequestHandling]);
export var CaptchaResponse = struct(n0, _CRa, 0, [_RC, _ST, _FR], [1, 1, 0]);
export var ChallengeAction = struct(n0, _CAh, 0, [_CRH], [() => CustomRequestHandling]);
export var ChallengeResponse = struct(n0, _CRh, 0, [_RC, _ST, _FR], [1, 1, 0]);
export var CountAction = struct(n0, _CAo, 0, [_CRH], [() => CustomRequestHandling]);
export var CustomHTTPHeader = struct(n0, _CHTTPH, 0, [_N, _Val], [0, 0]);
export var CustomRequestHandling = struct(n0, _CRH, 0, [_IH], [() => CustomHTTPHeaders]);
export var CustomResponse = struct(n0, _CR, 0, [_RC, _CRBK, _RH], [1, 0, () => CustomHTTPHeaders]);
export var DescribeManagedRuleGroupRequest = struct(n0, _DMRGR, 0, [_VN, _N, _Sc, _VNe], [0, 0, 0, 0]);
export var DescribeManagedRuleGroupResponse = struct(
  n0,
  _DMRGRe,
  0,
  [_VNe, _STA, _C, _R, _LN, _ALv, _CL],
  [0, 0, 1, () => RuleSummaries, 0, () => LabelSummaries, () => LabelSummaries]
);
export var GetSampledRequestsRequest = struct(
  n0,
  _GSRR,
  0,
  [_WAA, _RMN, _Sc, _TW, _MI],
  [0, 0, 0, () => TimeWindow, 1]
);
export var GetSampledRequestsResponse = struct(
  n0,
  _GSRRe,
  0,
  [_SR, _PS, _TW],
  [() => SampledHTTPRequests, 1, () => TimeWindow]
);
export var HTTPHeader = struct(n0, _HTTPH, 0, [_N, _Val], [0, 0]);
export var HTTPRequest = struct(n0, _HTTPR, 0, [_CIP, _Cou, _URI, _M, _HTTPV, _H], [0, 0, 0, 0, 0, () => HTTPHeaders]);
export var Label = struct(n0, _L, 0, [_N], [0]);
export var LabelSummary = struct(n0, _LSa, 0, [_N], [0]);
export var RuleAction = struct(
  n0,
  _RAu,
  0,
  [_Bl, _All, _Coun, _Ca, _Ch],
  [() => BlockAction, () => AllowAction, () => CountAction, () => CaptchaAction, () => ChallengeAction]
);
export var RuleSummary = struct(n0, _RSu, 0, [_N, _A], [0, () => RuleAction]);
export var SampledHTTPRequest = struct(
  n0,
  _SHTTPR,
  0,
  [_Req, _W, _Ti, _A, _RNWRG, _RHI, _RCS, _La, _CRa, _CRh, _OAv],
  [() => HTTPRequest, 1, 4, 0, 0, () => HTTPHeaders, 1, () => Labels, () => CaptchaResponse, () => ChallengeResponse, 0]
);
export var TimeWindow = struct(n0, _TW, 0, [_STt, _ETn], [4, 4]);
export var WAFExpiredManagedRuleGroupVersionException = error(
  n0,
  _WAFEMRGVE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFExpiredManagedRuleGroupVersionException
);
export var CustomHTTPHeaders = list(n0, _CHTTPHu, 0, () => CustomHTTPHeader);
export var HTTPHeaders = list(n0, _HTTPHe, 0, () => HTTPHeader);
export var Labels = list(n0, _La, 0, () => Label);
export var LabelSummaries = list(n0, _LSab, 0, () => LabelSummary);
export var RuleSummaries = list(n0, _RSul, 0, () => RuleSummary);
export var SampledHTTPRequests = list(n0, _SHTTPRa, 0, () => SampledHTTPRequest);
export var DescribeManagedRuleGroup = op(
  n0,
  _DMRG,
  0,
  () => DescribeManagedRuleGroupRequest,
  () => DescribeManagedRuleGroupResponse
);
export var GetSampledRequests = op(
  n0,
  _GSR,
  0,
  () => GetSampledRequestsRequest,
  () => GetSampledRequestsResponse
);
