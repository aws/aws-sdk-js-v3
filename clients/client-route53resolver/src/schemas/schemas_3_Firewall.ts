// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _AFRG,
  _AFRGR,
  _AFRGRs,
  _BOD,
  _BODT,
  _BOT,
  _BR,
  _c,
  _CE,
  _CRI,
  _CT,
  _DFDL,
  _DFDLR,
  _DFDLRe,
  _DFRG,
  _DFRGi,
  _DFRGR,
  _DFRGRe,
  _DFRGRi,
  _DFRGRis,
  _DFU,
  _Do,
  _DOR,
  _DORR,
  _DORRe,
  _DTP,
  _e,
  _FDL,
  _FDLI,
  _FDRA,
  _FR,
  _FRG,
  _FRGA,
  _FRGAI,
  _FRGI,
  _FTPI,
  _I,
  _IC,
  _IFD,
  _IFDR,
  _IFDRm,
  _M,
  _MP,
  _N,
  _O,
  _OR,
  _P,
  _PIT,
  _Q,
  _S,
  _SM,
  _T,
  _UFD,
  _UFDR,
  _UFDRp,
  _UFR,
  _UFRGA,
  _UFRGAR,
  _UFRGARp,
  _UFRR,
  _UFRRp,
  _UOR,
  _UORR,
  _UORRp,
  _VI,
  n0,
} from "./schemas_0";
import { FirewallDomainList, FirewallRule, FirewallRuleGroup } from "./schemas_2_Firewall";
import { TagList } from "./schemas_9_Create";
import { OutpostResolver } from "./schemas_15_Outpost";
import { FirewallRuleGroupAssociation } from "./schemas_22_Firewall";

/* eslint no-var: 0 */

export var AssociateFirewallRuleGroupRequest = struct(
  n0,
  _AFRGR,
  0,
  [_CRI, _FRGI, _VI, _P, _N, _MP, _T],
  [[0, 4], 0, 0, 1, 0, 0, () => TagList]
);
export var AssociateFirewallRuleGroupResponse = struct(n0, _AFRGRs, 0, [_FRGA], [() => FirewallRuleGroupAssociation]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConflictException
);
export var DeleteFirewallDomainListRequest = struct(n0, _DFDLR, 0, [_FDLI], [0]);
export var DeleteFirewallDomainListResponse = struct(n0, _DFDLRe, 0, [_FDL], [() => FirewallDomainList]);
export var DeleteFirewallRuleGroupRequest = struct(n0, _DFRGR, 0, [_FRGI], [0]);
export var DeleteFirewallRuleGroupResponse = struct(n0, _DFRGRe, 0, [_FRG], [() => FirewallRuleGroup]);
export var DeleteOutpostResolverRequest = struct(n0, _DORR, 0, [_I], [0]);
export var DeleteOutpostResolverResponse = struct(n0, _DORRe, 0, [_OR], [() => OutpostResolver]);
export var DisassociateFirewallRuleGroupRequest = struct(n0, _DFRGRi, 0, [_FRGAI], [0]);
export var DisassociateFirewallRuleGroupResponse = struct(
  n0,
  _DFRGRis,
  0,
  [_FRGA],
  [() => FirewallRuleGroupAssociation]
);
export var ImportFirewallDomainsRequest = struct(n0, _IFDR, 0, [_FDLI, _O, _DFU], [0, 0, 0]);
export var ImportFirewallDomainsResponse = struct(n0, _IFDRm, 0, [_I, _N, _S, _SM], [0, 0, 0, 0]);
export var UpdateFirewallDomainsRequest = struct(n0, _UFDR, 0, [_FDLI, _O, _Do], [0, 0, 64 | 0]);
export var UpdateFirewallDomainsResponse = struct(n0, _UFDRp, 0, [_I, _N, _S, _SM], [0, 0, 0, 0]);
export var UpdateFirewallRuleGroupAssociationRequest = struct(n0, _UFRGAR, 0, [_FRGAI, _P, _MP, _N], [0, 1, 0, 0]);
export var UpdateFirewallRuleGroupAssociationResponse = struct(
  n0,
  _UFRGARp,
  0,
  [_FRGA],
  [() => FirewallRuleGroupAssociation]
);
export var UpdateFirewallRuleRequest = struct(
  n0,
  _UFRR,
  0,
  [_FRGI, _FDLI, _FTPI, _P, _A, _BR, _BOD, _BODT, _BOT, _N, _FDRA, _Q, _DTP, _CT],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
);
export var UpdateFirewallRuleResponse = struct(n0, _UFRRp, 0, [_FR], [() => FirewallRule]);
export var UpdateOutpostResolverRequest = struct(n0, _UORR, 0, [_I, _N, _IC, _PIT], [0, 0, 1, 0]);
export var UpdateOutpostResolverResponse = struct(n0, _UORRp, 0, [_OR], [() => OutpostResolver]);
export var AssociateFirewallRuleGroup = op(
  n0,
  _AFRG,
  0,
  () => AssociateFirewallRuleGroupRequest,
  () => AssociateFirewallRuleGroupResponse
);
export var DeleteFirewallDomainList = op(
  n0,
  _DFDL,
  0,
  () => DeleteFirewallDomainListRequest,
  () => DeleteFirewallDomainListResponse
);
export var DeleteFirewallRuleGroup = op(
  n0,
  _DFRG,
  0,
  () => DeleteFirewallRuleGroupRequest,
  () => DeleteFirewallRuleGroupResponse
);
export var DeleteOutpostResolver = op(
  n0,
  _DOR,
  0,
  () => DeleteOutpostResolverRequest,
  () => DeleteOutpostResolverResponse
);
export var DisassociateFirewallRuleGroup = op(
  n0,
  _DFRGi,
  0,
  () => DisassociateFirewallRuleGroupRequest,
  () => DisassociateFirewallRuleGroupResponse
);
export var ImportFirewallDomains = op(
  n0,
  _IFD,
  0,
  () => ImportFirewallDomainsRequest,
  () => ImportFirewallDomainsResponse
);
export var UpdateFirewallDomains = op(
  n0,
  _UFD,
  0,
  () => UpdateFirewallDomainsRequest,
  () => UpdateFirewallDomainsResponse
);
export var UpdateFirewallRule = op(
  n0,
  _UFR,
  0,
  () => UpdateFirewallRuleRequest,
  () => UpdateFirewallRuleResponse
);
export var UpdateFirewallRuleGroupAssociation = op(
  n0,
  _UFRGA,
  0,
  () => UpdateFirewallRuleGroupAssociationRequest,
  () => UpdateFirewallRuleGroupAssociationResponse
);
export var UpdateOutpostResolver = op(
  n0,
  _UOR,
  0,
  () => UpdateOutpostResolverRequest,
  () => UpdateOutpostResolverResponse
);
