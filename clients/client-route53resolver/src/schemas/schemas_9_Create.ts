// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidTagException as __InvalidTagException } from "../models/index";
import {
  _c,
  _COR,
  _CORR,
  _CORRr,
  _CRE,
  _CRER,
  _CRERr,
  _CRI,
  _CRQLC,
  _CRQLCR,
  _CRQLCRr,
  _CRR,
  _CRRR,
  _CRRRr,
  _D,
  _DA,
  _DN,
  _DR,
  _e,
  _IAp,
  _IAR,
  _IARpd,
  _IC,
  _Ip,
  _Ipv,
  _ITE,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _N,
  _NT,
  _OA,
  _OR,
  _PIT,
  _Pr,
  _RA,
  _RE,
  _REI,
  _RET,
  _RQLC,
  _RR,
  _RT,
  _SGI,
  _SI,
  _T,
  _Ta,
  _TI,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _Va,
  n0,
} from "./schemas_0";
import { ResolverRule, TargetList } from "./schemas_5_Resolver";
import { ResolverQueryLogConfig } from "./schemas_11_Query";
import { OutpostResolver } from "./schemas_15_Outpost";
import { ResolverEndpoint } from "./schemas_17_Resolver";

/* eslint no-var: 0 */

export var CreateOutpostResolverRequest = struct(
  n0,
  _CORR,
  0,
  [_CRI, _N, _IC, _PIT, _OA, _T],
  [0, 0, 1, 0, 0, () => TagList]
);
export var CreateOutpostResolverResponse = struct(n0, _CORRr, 0, [_OR], [() => OutpostResolver]);
export var CreateResolverEndpointRequest = struct(
  n0,
  _CRER,
  0,
  [_CRI, _N, _SGI, _D, _IAp, _OA, _PIT, _T, _RET, _Pr],
  [0, 0, 64 | 0, 0, () => IpAddressesRequest, 0, 0, () => TagList, 0, 64 | 0]
);
export var CreateResolverEndpointResponse = struct(n0, _CRERr, 0, [_RE], [() => ResolverEndpoint]);
export var CreateResolverQueryLogConfigRequest = struct(
  n0,
  _CRQLCR,
  0,
  [_N, _DA, _CRI, _T],
  [0, 0, [0, 4], () => TagList]
);
export var CreateResolverQueryLogConfigResponse = struct(n0, _CRQLCRr, 0, [_RQLC], [() => ResolverQueryLogConfig]);
export var CreateResolverRuleRequest = struct(
  n0,
  _CRRR,
  0,
  [_CRI, _N, _RT, _DN, _TI, _REI, _T, _DR],
  [0, 0, 0, 0, () => TargetList, 0, () => TagList, 0]
);
export var CreateResolverRuleResponse = struct(n0, _CRRRr, 0, [_RR], [() => ResolverRule]);
export var InvalidTagException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidTagException
);
export var IpAddressRequest = struct(n0, _IAR, 0, [_SI, _Ip, _Ipv], [0, 0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA, _MR, _NT], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T, _NT], [() => TagList, 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var IpAddressesRequest = list(n0, _IARpd, 0, () => IpAddressRequest);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateOutpostResolver = op(
  n0,
  _COR,
  0,
  () => CreateOutpostResolverRequest,
  () => CreateOutpostResolverResponse
);
export var CreateResolverEndpoint = op(
  n0,
  _CRE,
  0,
  () => CreateResolverEndpointRequest,
  () => CreateResolverEndpointResponse
);
export var CreateResolverQueryLogConfig = op(
  n0,
  _CRQLC,
  0,
  () => CreateResolverQueryLogConfigRequest,
  () => CreateResolverQueryLogConfigResponse
);
export var CreateResolverRule = op(
  n0,
  _CRR,
  0,
  () => CreateResolverRuleRequest,
  () => CreateResolverRuleResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
