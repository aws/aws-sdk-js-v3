// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CRI,
  _CTr,
  _FDLi,
  _FDLM,
  _FDLML,
  _FRGA,
  _FRGAI,
  _FRGAi,
  _FRGI,
  _GFRGA,
  _GFRGAR,
  _GFRGARe,
  _I,
  _LFDL,
  _LFDLR,
  _LFDLRi,
  _LFRGA,
  _LFRGAR,
  _LFRGARi,
  _MON,
  _MP,
  _MR,
  _MT,
  _N,
  _NT,
  _P,
  _S,
  _SM,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FirewallDomainListMetadata = struct(n0, _FDLM, 0, [_I, _Ar, _N, _CRI, _MON], [0, 0, 0, 0, 0]);
export var FirewallRuleGroupAssociation = struct(
  n0,
  _FRGA,
  0,
  [_I, _Ar, _FRGI, _VI, _N, _P, _MP, _MON, _S, _SM, _CRI, _CTr, _MT],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var GetFirewallRuleGroupAssociationRequest = struct(n0, _GFRGAR, 0, [_FRGAI], [0]);
export var GetFirewallRuleGroupAssociationResponse = struct(
  n0,
  _GFRGARe,
  0,
  [_FRGA],
  [() => FirewallRuleGroupAssociation]
);
export var ListFirewallDomainListsRequest = struct(n0, _LFDLR, 0, [_MR, _NT], [1, 0]);
export var ListFirewallDomainListsResponse = struct(
  n0,
  _LFDLRi,
  0,
  [_NT, _FDLi],
  [0, () => FirewallDomainListMetadataList]
);
export var ListFirewallRuleGroupAssociationsRequest = struct(
  n0,
  _LFRGAR,
  0,
  [_FRGI, _VI, _P, _S, _MR, _NT],
  [0, 0, 1, 0, 1, 0]
);
export var ListFirewallRuleGroupAssociationsResponse = struct(
  n0,
  _LFRGARi,
  0,
  [_NT, _FRGAi],
  [0, () => FirewallRuleGroupAssociations]
);
export var FirewallDomainListMetadataList = list(n0, _FDLML, 0, () => FirewallDomainListMetadata);
export var FirewallRuleGroupAssociations = list(n0, _FRGAi, 0, () => FirewallRuleGroupAssociation);
export var GetFirewallRuleGroupAssociation = op(
  n0,
  _GFRGA,
  0,
  () => GetFirewallRuleGroupAssociationRequest,
  () => GetFirewallRuleGroupAssociationResponse
);
export var ListFirewallDomainLists = op(
  n0,
  _LFDL,
  0,
  () => ListFirewallDomainListsRequest,
  () => ListFirewallDomainListsResponse
);
export var ListFirewallRuleGroupAssociations = op(
  n0,
  _LFRGA,
  0,
  () => ListFirewallRuleGroupAssociationsRequest,
  () => ListFirewallRuleGroupAssociationsResponse
);
