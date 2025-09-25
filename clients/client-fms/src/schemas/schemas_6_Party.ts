// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATPF,
  _ATPFR,
  _ATPFRs,
  _DTPF,
  _DTPFR,
  _DTPFRi,
  _FPI,
  _FPN,
  _GTPFAS,
  _GTPFASR,
  _GTPFASRe,
  _LTPFFP,
  _LTPFFPR,
  _LTPFFPRi,
  _MOS,
  _MR,
  _NT,
  _TPF,
  _TPFFP,
  _TPFFPh,
  _TPFS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateThirdPartyFirewallRequest = struct(n0, _ATPFR, 0, [_TPF], [0]);
export var AssociateThirdPartyFirewallResponse = struct(n0, _ATPFRs, 0, [_TPFS], [0]);
export var DisassociateThirdPartyFirewallRequest = struct(n0, _DTPFR, 0, [_TPF], [0]);
export var DisassociateThirdPartyFirewallResponse = struct(n0, _DTPFRi, 0, [_TPFS], [0]);
export var GetThirdPartyFirewallAssociationStatusRequest = struct(n0, _GTPFASR, 0, [_TPF], [0]);
export var GetThirdPartyFirewallAssociationStatusResponse = struct(n0, _GTPFASRe, 0, [_TPFS, _MOS], [0, 0]);
export var ListThirdPartyFirewallFirewallPoliciesRequest = struct(n0, _LTPFFPR, 0, [_TPF, _NT, _MR], [0, 0, 1]);
export var ListThirdPartyFirewallFirewallPoliciesResponse = struct(
  n0,
  _LTPFFPRi,
  0,
  [_TPFFP, _NT],
  [() => ThirdPartyFirewallFirewallPolicies, 0]
);
export var ThirdPartyFirewallFirewallPolicy = struct(n0, _TPFFPh, 0, [_FPI, _FPN], [0, 0]);
export var ThirdPartyFirewallFirewallPolicies = list(n0, _TPFFP, 0, () => ThirdPartyFirewallFirewallPolicy);
export var AssociateThirdPartyFirewall = op(
  n0,
  _ATPF,
  0,
  () => AssociateThirdPartyFirewallRequest,
  () => AssociateThirdPartyFirewallResponse
);
export var DisassociateThirdPartyFirewall = op(
  n0,
  _DTPF,
  0,
  () => DisassociateThirdPartyFirewallRequest,
  () => DisassociateThirdPartyFirewallResponse
);
export var GetThirdPartyFirewallAssociationStatus = op(
  n0,
  _GTPFAS,
  0,
  () => GetThirdPartyFirewallAssociationStatusRequest,
  () => GetThirdPartyFirewallAssociationStatusResponse
);
export var ListThirdPartyFirewallFirewallPolicies = op(
  n0,
  _LTPFFP,
  0,
  () => ListThirdPartyFirewallFirewallPoliciesRequest,
  () => ListThirdPartyFirewallFirewallPoliciesResponse
);
