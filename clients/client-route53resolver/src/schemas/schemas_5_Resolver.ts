// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _Ar,
  _AREIA,
  _AREIAR,
  _AREIARs,
  _C,
  _c,
  _CRI,
  _CTr,
  _DN,
  _DR,
  _DREIA,
  _DREIAR,
  _DREIARi,
  _DRR,
  _DRRR,
  _DRRRe,
  _e,
  _Fi,
  _GRR,
  _GRRR,
  _GRRRe,
  _I,
  _IA,
  _IAp,
  _IARp,
  _IARpdd,
  _IAU,
  _II,
  _Ip,
  _Ipv,
  _LREIA,
  _LREIAR,
  _LREIARi,
  _LRR,
  _LRRR,
  _LRRRi,
  _M,
  _MR,
  _MT,
  _N,
  _NT,
  _OI,
  _Po,
  _Pr,
  _Pro,
  _RE,
  _REI,
  _RET,
  _RIUE,
  _RR,
  _RRC,
  _RRe,
  _RRI,
  _RT,
  _RTe,
  _S,
  _SI,
  _SM,
  _SNI,
  _SS,
  _TA,
  _TI,
  _TLa,
  _UIA,
  _UIAp,
  _UREp,
  _URER,
  _URERp,
  _URRp,
  _URRR,
  _URRRp,
  n0,
} from "./schemas_0";
import { Filters } from "./schemas_6_Resolver";
import { ResolverEndpoint } from "./schemas_17_Resolver";

/* eslint no-var: 0 */

export var AssociateResolverEndpointIpAddressRequest = struct(n0, _AREIAR, 0, [_REI, _IA], [0, () => IpAddressUpdate]);
export var AssociateResolverEndpointIpAddressResponse = struct(n0, _AREIARs, 0, [_RE], [() => ResolverEndpoint]);
export var DeleteResolverRuleRequest = struct(n0, _DRRR, 0, [_RRI], [0]);
export var DeleteResolverRuleResponse = struct(n0, _DRRRe, 0, [_RR], [() => ResolverRule]);
export var DisassociateResolverEndpointIpAddressRequest = struct(
  n0,
  _DREIAR,
  0,
  [_REI, _IA],
  [0, () => IpAddressUpdate]
);
export var DisassociateResolverEndpointIpAddressResponse = struct(n0, _DREIARi, 0, [_RE], [() => ResolverEndpoint]);
export var GetResolverRuleRequest = struct(n0, _GRRR, 0, [_RRI], [0]);
export var GetResolverRuleResponse = struct(n0, _GRRRe, 0, [_RR], [() => ResolverRule]);
export var IpAddressResponse = struct(
  n0,
  _IARp,
  0,
  [_II, _SI, _Ip, _Ipv, _S, _SM, _CTr, _MT],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var IpAddressUpdate = struct(n0, _IAU, 0, [_II, _SI, _Ip, _Ipv], [0, 0, 0, 0]);
export var ListResolverEndpointIpAddressesRequest = struct(n0, _LREIAR, 0, [_REI, _MR, _NT], [0, 1, 0]);
export var ListResolverEndpointIpAddressesResponse = struct(
  n0,
  _LREIARi,
  0,
  [_NT, _MR, _IAp],
  [0, 1, () => IpAddressesResponse]
);
export var ListResolverRulesRequest = struct(n0, _LRRR, 0, [_MR, _NT, _Fi], [1, 0, () => Filters]);
export var ListResolverRulesResponse = struct(n0, _LRRRi, 0, [_NT, _MR, _RRe], [0, 1, () => ResolverRules]);
export var ResolverRule = struct(
  n0,
  _RR,
  0,
  [_I, _CRI, _Ar, _DN, _S, _SM, _RT, _N, _TI, _REI, _OI, _SS, _CTr, _MT, _DR],
  [0, 0, 0, 0, 0, 0, 0, 0, () => TargetList, 0, 0, 0, 0, 0, 0]
);
export var ResolverRuleConfig = struct(n0, _RRC, 0, [_N, _TI, _REI], [0, () => TargetList, 0]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
  },
  [_M, _RTe],
  [0, 0],

  __ResourceInUseException
);
export var TargetAddress = struct(n0, _TA, 0, [_Ip, _Po, _Ipv, _Pro, _SNI], [0, 1, 0, 0, 0]);
export var UpdateIpAddress = struct(n0, _UIA, 0, [_II, _Ipv], [0, 0]);
export var UpdateResolverEndpointRequest = struct(
  n0,
  _URER,
  0,
  [_REI, _N, _RET, _UIAp, _Pr],
  [0, 0, 0, () => UpdateIpAddresses, 64 | 0]
);
export var UpdateResolverEndpointResponse = struct(n0, _URERp, 0, [_RE], [() => ResolverEndpoint]);
export var UpdateResolverRuleRequest = struct(n0, _URRR, 0, [_RRI, _C], [0, () => ResolverRuleConfig]);
export var UpdateResolverRuleResponse = struct(n0, _URRRp, 0, [_RR], [() => ResolverRule]);
export var IpAddressesResponse = list(n0, _IARpdd, 0, () => IpAddressResponse);
export var ResolverRules = list(n0, _RRe, 0, () => ResolverRule);
export var TargetList = list(n0, _TLa, 0, () => TargetAddress);
export var UpdateIpAddresses = list(n0, _UIAp, 0, () => UpdateIpAddress);
export var AssociateResolverEndpointIpAddress = op(
  n0,
  _AREIA,
  0,
  () => AssociateResolverEndpointIpAddressRequest,
  () => AssociateResolverEndpointIpAddressResponse
);
export var DeleteResolverRule = op(
  n0,
  _DRR,
  0,
  () => DeleteResolverRuleRequest,
  () => DeleteResolverRuleResponse
);
export var DisassociateResolverEndpointIpAddress = op(
  n0,
  _DREIA,
  0,
  () => DisassociateResolverEndpointIpAddressRequest,
  () => DisassociateResolverEndpointIpAddressResponse
);
export var GetResolverRule = op(
  n0,
  _GRR,
  0,
  () => GetResolverRuleRequest,
  () => GetResolverRuleResponse
);
export var ListResolverEndpointIpAddresses = op(
  n0,
  _LREIA,
  0,
  () => ListResolverEndpointIpAddressesRequest,
  () => ListResolverEndpointIpAddressesResponse
);
export var ListResolverRules = op(
  n0,
  _LRR,
  0,
  () => ListResolverRulesRequest,
  () => ListResolverRulesResponse
);
export var UpdateResolverEndpoint = op(
  n0,
  _UREp,
  0,
  () => UpdateResolverEndpointRequest,
  () => UpdateResolverEndpointResponse
);
export var UpdateResolverRule = op(
  n0,
  _URRp,
  0,
  () => UpdateResolverRuleRequest,
  () => UpdateResolverRuleResponse
);
