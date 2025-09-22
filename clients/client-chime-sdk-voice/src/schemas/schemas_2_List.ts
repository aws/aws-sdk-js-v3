// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _De,
  _ETx,
  _h,
  _hQ,
  _LPS,
  _LPSR,
  _LPSRi,
  _LSMA,
  _LSMAR,
  _LSMARi,
  _LSR,
  _LSRR,
  _LSRRi,
  _LVC,
  _LVCG,
  _LVCGR,
  _LVCGRi,
  _LVCR,
  _LVCRi,
  _LVP,
  _LVPD,
  _LVPDR,
  _LVPDRi,
  _LVPR,
  _LVPRi,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _PSr,
  _S,
  _sma,
  _SMAI,
  _SMAi,
  _SMAL,
  _SRi,
  _SRL,
  _st,
  _UT,
  _VCGL,
  _VCGo,
  _VCI,
  _VCL,
  _VCo,
  _VPA,
  _VPDA,
  _VPDI,
  _vpdi,
  _VPDo,
  _VPDS,
  _VPDSL,
  _VPI,
  _VPo,
  _VPS,
  _VPSL,
  Arn,
  n0,
} from "./schemas_0";
import { ProxySession } from "./schemas_6_Proxy";
import { VoiceConnectorGroup } from "./schemas_7_Connector";
import { SipRule } from "./schemas_11_Sip";
import { VoiceConnector } from "./schemas_21_Voice";
import { SipMediaApplication } from "./schemas_31_SipMedia";

/* eslint no-var: 0 */

export var ListProxySessionsRequest = struct(
  n0,
  _LPSR,
  0,
  [_VCI, _S, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListProxySessionsResponse = struct(n0, _LPSRi, 0, [_PSr, _NT], [[() => ProxySessions, 0], 0]);
export var ListSipMediaApplicationsRequest = struct(
  n0,
  _LSMAR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListSipMediaApplicationsResponse = struct(
  n0,
  _LSMARi,
  0,
  [_SMAi, _NT],
  [[() => SipMediaApplicationList, 0], 0]
);
export var ListSipRulesRequest = struct(
  n0,
  _LSRR,
  0,
  [_SMAI, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _sma,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListSipRulesResponse = struct(n0, _LSRRi, 0, [_SRi, _NT], [() => SipRuleList, 0]);
export var ListVoiceConnectorGroupsRequest = struct(
  n0,
  _LVCGR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListVoiceConnectorGroupsResponse = struct(n0, _LVCGRi, 0, [_VCGo, _NT], [() => VoiceConnectorGroupList, 0]);
export var ListVoiceConnectorsRequest = struct(
  n0,
  _LVCR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListVoiceConnectorsResponse = struct(n0, _LVCRi, 0, [_VCo, _NT], [() => VoiceConnectorList, 0]);
export var ListVoiceProfileDomainsRequest = struct(
  n0,
  _LVPDR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListVoiceProfileDomainsResponse = struct(
  n0,
  _LVPDRi,
  0,
  [_VPDo, _NT],
  [[() => VoiceProfileDomainSummaryList, 0], 0]
);
export var ListVoiceProfilesRequest = struct(
  n0,
  _LVPR,
  0,
  [_VPDI, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _vpdi,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListVoiceProfilesResponse = struct(n0, _LVPRi, 0, [_VPo, _NT], [[() => VoiceProfileSummaryList, 0], 0]);
export var VoiceProfileDomainSummary = struct(
  n0,
  _VPDS,
  0,
  [_VPDI, _VPDA, _N, _De, _CT, _UT],
  [0, [() => Arn, 0], 0, 0, 5, 5]
);
export var VoiceProfileSummary = struct(
  n0,
  _VPS,
  0,
  [_VPI, _VPA, _VPDI, _CT, _UT, _ETx],
  [0, [() => Arn, 0], 0, 5, 5, 5]
);
export var ProxySessions = list(n0, _PSr, 0, [() => ProxySession, 0]);
export var SipMediaApplicationList = list(n0, _SMAL, 0, [() => SipMediaApplication, 0]);
export var SipRuleList = list(n0, _SRL, 0, () => SipRule);
export var VoiceConnectorGroupList = list(n0, _VCGL, 0, () => VoiceConnectorGroup);
export var VoiceConnectorList = list(n0, _VCL, 0, () => VoiceConnector);
export var VoiceProfileDomainSummaryList = list(n0, _VPDSL, 0, [() => VoiceProfileDomainSummary, 0]);
export var VoiceProfileSummaryList = list(n0, _VPSL, 0, [() => VoiceProfileSummary, 0]);
export var ListProxySessions = op(
  n0,
  _LPS,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/proxy-sessions", 200],
  },
  () => ListProxySessionsRequest,
  () => ListProxySessionsResponse
);
export var ListSipMediaApplications = op(
  n0,
  _LSMA,
  {
    [_h]: ["GET", "/sip-media-applications", 200],
  },
  () => ListSipMediaApplicationsRequest,
  () => ListSipMediaApplicationsResponse
);
export var ListSipRules = op(
  n0,
  _LSR,
  {
    [_h]: ["GET", "/sip-rules", 200],
  },
  () => ListSipRulesRequest,
  () => ListSipRulesResponse
);
export var ListVoiceConnectorGroups = op(
  n0,
  _LVCG,
  {
    [_h]: ["GET", "/voice-connector-groups", 200],
  },
  () => ListVoiceConnectorGroupsRequest,
  () => ListVoiceConnectorGroupsResponse
);
export var ListVoiceConnectors = op(
  n0,
  _LVC,
  {
    [_h]: ["GET", "/voice-connectors", 200],
  },
  () => ListVoiceConnectorsRequest,
  () => ListVoiceConnectorsResponse
);
export var ListVoiceProfileDomains = op(
  n0,
  _LVPD,
  {
    [_h]: ["GET", "/voice-profile-domains", 200],
  },
  () => ListVoiceProfileDomainsRequest,
  () => ListVoiceProfileDomainsResponse
);
export var ListVoiceProfiles = op(
  n0,
  _LVP,
  {
    [_h]: ["GET", "/voice-profiles", 200],
  },
  () => ListVoiceProfilesRequest,
  () => ListVoiceProfilesResponse
);
