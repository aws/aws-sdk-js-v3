// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AR,
  _Ar,
  _ARI,
  _ARna,
  _AT,
  _AZ,
  _FAi,
  _Fi,
  _FM,
  _FN,
  _FOI,
  _FOl,
  _FOM,
  _FOS,
  _FOT,
  _FPi,
  _FPM,
  _FRT,
  _LAR,
  _LARR,
  _LARRi,
  _LF,
  _LFO,
  _LFOR,
  _LFORi,
  _LFP,
  _LFPR,
  _LFPRi,
  _LFR,
  _LFRi,
  _LRG,
  _LRGR,
  _LRGRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LTLSIC,
  _LTLSICR,
  _LTLSICRi,
  _LVEA,
  _LVEAR,
  _LVEARi,
  _MR,
  _MT,
  _N,
  _NT,
  _RA,
  _RGM,
  _RGu,
  _RT,
  _S,
  _Sc,
  _T,
  _TGAI,
  _TLSICM,
  _TLSICn,
  _Ty,
  _VEAA,
  _VEAM,
  _VEAp,
  _VEI,
  _VIp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalysisReport = struct(n0, _AR, 0, [_ARI, _AT, _RT, _S], [0, 0, 4, 0]);
export var FirewallMetadata = struct(n0, _FM, 0, [_FN, _FAi, _TGAI], [0, 0, 0]);
export var FirewallPolicyMetadata = struct(n0, _FPM, 0, [_N, _Ar], [0, 0]);
export var FlowOperationMetadata = struct(n0, _FOM, 0, [_FOI, _FOT, _FRT, _FOS], [0, 0, 4, 0]);
export var ListAnalysisReportsRequest = struct(n0, _LARR, 0, [_FN, _FAi, _NT, _MR], [0, 0, 0, 1]);
export var ListAnalysisReportsResponse = struct(n0, _LARRi, 0, [_ARna, _NT], [() => AnalysisReports, 0]);
export var ListFirewallPoliciesRequest = struct(n0, _LFPR, 0, [_NT, _MR], [0, 1]);
export var ListFirewallPoliciesResponse = struct(n0, _LFPRi, 0, [_NT, _FPi], [0, () => FirewallPolicies]);
export var ListFirewallsRequest = struct(n0, _LFR, 0, [_NT, _VIp, _MR], [0, 64 | 0, 1]);
export var ListFirewallsResponse = struct(n0, _LFRi, 0, [_NT, _Fi], [0, () => Firewalls]);
export var ListFlowOperationsRequest = struct(
  n0,
  _LFOR,
  0,
  [_FAi, _AZ, _VEAA, _VEI, _FOT, _NT, _MR],
  [0, 0, 0, 0, 0, 0, 1]
);
export var ListFlowOperationsResponse = struct(n0, _LFORi, 0, [_FOl, _NT], [() => FlowOperations, 0]);
export var ListRuleGroupsRequest = struct(n0, _LRGR, 0, [_NT, _MR, _Sc, _MT, _Ty], [0, 1, 0, 0, 0]);
export var ListRuleGroupsResponse = struct(n0, _LRGRi, 0, [_NT, _RGu], [0, () => RuleGroups]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_NT, _MR, _RA], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_NT, _T], [0, () => TagList]);
export var ListTLSInspectionConfigurationsRequest = struct(n0, _LTLSICR, 0, [_NT, _MR], [0, 1]);
export var ListTLSInspectionConfigurationsResponse = struct(
  n0,
  _LTLSICRi,
  0,
  [_NT, _TLSICn],
  [0, () => TLSInspectionConfigurations]
);
export var ListVpcEndpointAssociationsRequest = struct(n0, _LVEAR, 0, [_NT, _MR, _FAi], [0, 1, 0]);
export var ListVpcEndpointAssociationsResponse = struct(
  n0,
  _LVEARi,
  0,
  [_NT, _VEAp],
  [0, () => VpcEndpointAssociations]
);
export var RuleGroupMetadata = struct(n0, _RGM, 0, [_N, _Ar], [0, 0]);
export var TLSInspectionConfigurationMetadata = struct(n0, _TLSICM, 0, [_N, _Ar], [0, 0]);
export var VpcEndpointAssociationMetadata = struct(n0, _VEAM, 0, [_VEAA], [0]);
export var AnalysisReports = list(n0, _ARna, 0, () => AnalysisReport);
export var FirewallPolicies = list(n0, _FPi, 0, () => FirewallPolicyMetadata);
export var Firewalls = list(n0, _Fi, 0, () => FirewallMetadata);
export var FlowOperations = list(n0, _FOl, 0, () => FlowOperationMetadata);
export var RuleGroups = list(n0, _RGu, 0, () => RuleGroupMetadata);
export var TLSInspectionConfigurations = list(n0, _TLSICn, 0, () => TLSInspectionConfigurationMetadata);
export var VpcEndpointAssociations = list(n0, _VEAp, 0, () => VpcEndpointAssociationMetadata);
export var VpcIds = 64 | 0;

export var ListAnalysisReports = op(
  n0,
  _LAR,
  0,
  () => ListAnalysisReportsRequest,
  () => ListAnalysisReportsResponse
);
export var ListFirewallPolicies = op(
  n0,
  _LFP,
  0,
  () => ListFirewallPoliciesRequest,
  () => ListFirewallPoliciesResponse
);
export var ListFirewalls = op(
  n0,
  _LF,
  0,
  () => ListFirewallsRequest,
  () => ListFirewallsResponse
);
export var ListFlowOperations = op(
  n0,
  _LFO,
  0,
  () => ListFlowOperationsRequest,
  () => ListFlowOperationsResponse
);
export var ListRuleGroups = op(
  n0,
  _LRG,
  0,
  () => ListRuleGroupsRequest,
  () => ListRuleGroupsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ListTLSInspectionConfigurations = op(
  n0,
  _LTLSIC,
  0,
  () => ListTLSInspectionConfigurationsRequest,
  () => ListTLSInspectionConfigurationsResponse
);
export var ListVpcEndpointAssociations = op(
  n0,
  _LVEA,
  0,
  () => ListVpcEndpointAssociationsRequest,
  () => ListVpcEndpointAssociationsResponse
);
