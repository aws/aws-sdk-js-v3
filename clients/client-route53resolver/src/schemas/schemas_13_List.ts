// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextTokenException as __InvalidNextTokenException } from "../models/index";
import {
  _c,
  _e,
  _Fi,
  _INTE,
  _LRC,
  _LRCR,
  _LRCRi,
  _LRDC,
  _LRDCR,
  _LRDCRi,
  _LRE,
  _LRER,
  _LRERi,
  _LRQLC,
  _LRQLCR,
  _LRQLCRi,
  _LRRA,
  _LRRAR,
  _LRRARi,
  _M,
  _MR,
  _NT,
  _RCes,
  _RCL,
  _RDC,
  _RDCL,
  _REe,
  _RQLCe,
  _RQLCL,
  _RRAe,
  _SB,
  _SO,
  _TC,
  _TFC,
  n0,
} from "./schemas_0";
import { Filters } from "./schemas_6_Resolver";
import { ResolverRuleAssociation } from "./schemas_8_ResolverRule";
import { ResolverQueryLogConfig } from "./schemas_11_Query";
import { ResolverConfig } from "./schemas_14_Resolver";
import { ResolverEndpoint } from "./schemas_17_Resolver";
import { ResolverDnssecConfig } from "./schemas_20_Resolver";

/* eslint no-var: 0 */

export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var ListResolverConfigsRequest = struct(n0, _LRCR, 0, [_MR, _NT], [1, 0]);
export var ListResolverConfigsResponse = struct(n0, _LRCRi, 0, [_NT, _RCes], [0, () => ResolverConfigList]);
export var ListResolverDnssecConfigsRequest = struct(n0, _LRDCR, 0, [_MR, _NT, _Fi], [1, 0, () => Filters]);
export var ListResolverDnssecConfigsResponse = struct(n0, _LRDCRi, 0, [_NT, _RDC], [0, () => ResolverDnssecConfigList]);
export var ListResolverEndpointsRequest = struct(n0, _LRER, 0, [_MR, _NT, _Fi], [1, 0, () => Filters]);
export var ListResolverEndpointsResponse = struct(n0, _LRERi, 0, [_NT, _MR, _REe], [0, 1, () => ResolverEndpoints]);
export var ListResolverQueryLogConfigsRequest = struct(
  n0,
  _LRQLCR,
  0,
  [_MR, _NT, _Fi, _SB, _SO],
  [1, 0, () => Filters, 0, 0]
);
export var ListResolverQueryLogConfigsResponse = struct(
  n0,
  _LRQLCRi,
  0,
  [_NT, _TC, _TFC, _RQLCe],
  [0, 1, 1, () => ResolverQueryLogConfigList]
);
export var ListResolverRuleAssociationsRequest = struct(n0, _LRRAR, 0, [_MR, _NT, _Fi], [1, 0, () => Filters]);
export var ListResolverRuleAssociationsResponse = struct(
  n0,
  _LRRARi,
  0,
  [_NT, _MR, _RRAe],
  [0, 1, () => ResolverRuleAssociations]
);
export var ResolverConfigList = list(n0, _RCL, 0, () => ResolverConfig);
export var ResolverDnssecConfigList = list(n0, _RDCL, 0, () => ResolverDnssecConfig);
export var ResolverEndpoints = list(n0, _REe, 0, () => ResolverEndpoint);
export var ResolverQueryLogConfigList = list(n0, _RQLCL, 0, () => ResolverQueryLogConfig);
export var ResolverRuleAssociations = list(n0, _RRAe, 0, () => ResolverRuleAssociation);
export var ListResolverConfigs = op(
  n0,
  _LRC,
  0,
  () => ListResolverConfigsRequest,
  () => ListResolverConfigsResponse
);
export var ListResolverDnssecConfigs = op(
  n0,
  _LRDC,
  0,
  () => ListResolverDnssecConfigsRequest,
  () => ListResolverDnssecConfigsResponse
);
export var ListResolverEndpoints = op(
  n0,
  _LRE,
  0,
  () => ListResolverEndpointsRequest,
  () => ListResolverEndpointsResponse
);
export var ListResolverQueryLogConfigs = op(
  n0,
  _LRQLC,
  0,
  () => ListResolverQueryLogConfigsRequest,
  () => ListResolverQueryLogConfigsResponse
);
export var ListResolverRuleAssociations = op(
  n0,
  _LRRA,
  0,
  () => ListResolverRuleAssociationsRequest,
  () => ListResolverRuleAssociationsResponse
);
