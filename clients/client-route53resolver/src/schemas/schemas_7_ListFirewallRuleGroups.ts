// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ar, _CRI, _FRGi, _FRGM, _FRGML, _I, _LFRG, _LFRGR, _LFRGRi, _MR, _N, _NT, _OI, _SS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FirewallRuleGroupMetadata = struct(n0, _FRGM, 0, [_I, _Ar, _N, _OI, _CRI, _SS], [0, 0, 0, 0, 0, 0]);
export var ListFirewallRuleGroupsRequest = struct(n0, _LFRGR, 0, [_MR, _NT], [1, 0]);
export var ListFirewallRuleGroupsResponse = struct(
  n0,
  _LFRGRi,
  0,
  [_NT, _FRGi],
  [0, () => FirewallRuleGroupMetadataList]
);
export var FirewallRuleGroupMetadataList = list(n0, _FRGML, 0, () => FirewallRuleGroupMetadata);
export var ListFirewallRuleGroups = op(
  n0,
  _LFRG,
  0,
  () => ListFirewallRuleGroupsRequest,
  () => ListFirewallRuleGroupsResponse
);
