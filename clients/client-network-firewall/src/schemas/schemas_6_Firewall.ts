// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ACIDRC,
  _AI,
  _AS,
  _ASR,
  _ASRs,
  _ASS,
  _At,
  _AZCP,
  _AZM,
  _AZMva,
  _AZSS,
  _CF,
  _CFR,
  _CFRr,
  _CIDR,
  _CIDRS,
  _Con,
  _CSSS,
  _CUS,
  _CVEA,
  _CVEAR,
  _CVEARr,
  _De,
  _DF,
  _DFe,
  _DFM,
  _DFMR,
  _DFMRe,
  _DFR,
  _DFRe,
  _DFRes,
  _DFResc,
  _DP,
  _DS,
  _DSR,
  _DSRi,
  _DVEA,
  _DVEAe,
  _DVEAR,
  _DVEARe,
  _DVEARes,
  _DVEAResc,
  _EAT,
  _EC,
  _EI,
  _F,
  _FAi,
  _FI,
  _FN,
  _FPA,
  _FPCP,
  _FS,
  _IPAT,
  _IPSM,
  _IPSMM,
  _IPSR,
  _NOA,
  _POS,
  _RCIDRC,
  _S,
  _SAZ,
  _SCP,
  _SI,
  _SIu,
  _SM,
  _SMt,
  _SMu,
  _SS,
  _SSC,
  _SSy,
  _SSyn,
  _T,
  _TGAI,
  _TGAS,
  _TGASS,
  _TGI,
  _TGOAI,
  _UCIDRC,
  _UT,
  _VEA,
  _VEAA,
  _VEAI,
  _VEAS,
  _VI,
  EncryptionConfiguration,
  n0,
  TagList,
} from "./schemas_0";
import { AvailabilityZoneMappings } from "./schemas_5_Firewall";

/* eslint no-var: 0 */

export var AssociateSubnetsRequest = struct(n0, _ASR, 0, [_UT, _FAi, _FN, _SM], [0, 0, 0, () => SubnetMappings]);
export var AssociateSubnetsResponse = struct(n0, _ASRs, 0, [_FAi, _FN, _SM, _UT], [0, 0, () => SubnetMappings, 0]);
export var Attachment = struct(n0, _At, 0, [_SI, _EI, _S, _SMt], [0, 0, 0, 0]);
export var AvailabilityZoneMetadata = struct(n0, _AZMva, 0, [_IPAT], [0]);
export var AZSyncState = struct(n0, _AZSS, 0, [_At], [() => Attachment]);
export var CapacityUsageSummary = struct(n0, _CUS, 0, [_CIDR], [() => CIDRSummary]);
export var CIDRSummary = struct(n0, _CIDRS, 0, [_ACIDRC, _UCIDRC, _IPSR], [1, 1, () => IPSetMetadataMap]);
export var CreateFirewallRequest = struct(
  n0,
  _CFR,
  0,
  [_FN, _FPA, _VI, _SM, _DP, _SCP, _FPCP, _De, _T, _EC, _EAT, _TGI, _AZM, _AZCP],
  [
    0,
    0,
    0,
    () => SubnetMappings,
    2,
    2,
    2,
    0,
    () => TagList,
    () => EncryptionConfiguration,
    64 | 0,
    0,
    () => AvailabilityZoneMappings,
    2,
  ]
);
export var CreateFirewallResponse = struct(n0, _CFRr, 0, [_F, _FS], [() => Firewall, () => FirewallStatus]);
export var CreateVpcEndpointAssociationRequest = struct(
  n0,
  _CVEAR,
  0,
  [_FAi, _VI, _SMu, _De, _T],
  [0, 0, () => SubnetMapping, 0, () => TagList]
);
export var CreateVpcEndpointAssociationResponse = struct(
  n0,
  _CVEARr,
  0,
  [_VEA, _VEAS],
  [() => VpcEndpointAssociation, () => VpcEndpointAssociationStatus]
);
export var DeleteFirewallRequest = struct(n0, _DFR, 0, [_FN, _FAi], [0, 0]);
export var DeleteFirewallResponse = struct(n0, _DFRe, 0, [_F, _FS], [() => Firewall, () => FirewallStatus]);
export var DeleteVpcEndpointAssociationRequest = struct(n0, _DVEAR, 0, [_VEAA], [0]);
export var DeleteVpcEndpointAssociationResponse = struct(
  n0,
  _DVEARe,
  0,
  [_VEA, _VEAS],
  [() => VpcEndpointAssociation, () => VpcEndpointAssociationStatus]
);
export var DescribeFirewallMetadataRequest = struct(n0, _DFMR, 0, [_FAi], [0]);
export var DescribeFirewallMetadataResponse = struct(
  n0,
  _DFMRe,
  0,
  [_FAi, _FPA, _De, _S, _SAZ, _TGAI],
  [0, 0, 0, 0, () => SupportedAvailabilityZones, 0]
);
export var DescribeFirewallRequest = struct(n0, _DFRes, 0, [_FN, _FAi], [0, 0]);
export var DescribeFirewallResponse = struct(n0, _DFResc, 0, [_UT, _F, _FS], [0, () => Firewall, () => FirewallStatus]);
export var DescribeVpcEndpointAssociationRequest = struct(n0, _DVEARes, 0, [_VEAA], [0]);
export var DescribeVpcEndpointAssociationResponse = struct(
  n0,
  _DVEAResc,
  0,
  [_VEA, _VEAS],
  [() => VpcEndpointAssociation, () => VpcEndpointAssociationStatus]
);
export var DisassociateSubnetsRequest = struct(n0, _DSR, 0, [_UT, _FAi, _FN, _SIu], [0, 0, 0, 64 | 0]);
export var DisassociateSubnetsResponse = struct(n0, _DSRi, 0, [_FAi, _FN, _SM, _UT], [0, 0, () => SubnetMappings, 0]);
export var Firewall = struct(
  n0,
  _F,
  0,
  [_FN, _FAi, _FPA, _VI, _SM, _DP, _SCP, _FPCP, _De, _FI, _T, _EC, _NOA, _EAT, _TGI, _TGOAI, _AZM, _AZCP],
  [
    0,
    0,
    0,
    0,
    () => SubnetMappings,
    2,
    2,
    2,
    0,
    0,
    () => TagList,
    () => EncryptionConfiguration,
    1,
    64 | 0,
    0,
    0,
    () => AvailabilityZoneMappings,
    2,
  ]
);
export var FirewallStatus = struct(
  n0,
  _FS,
  0,
  [_S, _CSSS, _SS, _CUS, _TGASS],
  [0, 0, () => SyncStates, () => CapacityUsageSummary, () => TransitGatewayAttachmentSyncState]
);
export var IPSetMetadata = struct(n0, _IPSM, 0, [_RCIDRC], [1]);
export var PerObjectStatus = struct(n0, _POS, 0, [_SSy, _UT], [0, 0]);
export var SubnetMapping = struct(n0, _SMu, 0, [_SI, _IPAT], [0, 0]);
export var SyncState = struct(n0, _SSyn, 0, [_At, _Con], [() => Attachment, () => SyncStateConfig]);
export var TransitGatewayAttachmentSyncState = struct(n0, _TGASS, 0, [_AI, _TGAS, _SMt], [0, 0, 0]);
export var VpcEndpointAssociation = struct(
  n0,
  _VEA,
  0,
  [_VEAI, _VEAA, _FAi, _VI, _SMu, _De, _T],
  [0, 0, 0, 0, () => SubnetMapping, 0, () => TagList]
);
export var VpcEndpointAssociationStatus = struct(n0, _VEAS, 0, [_S, _ASS], [0, () => AssociationSyncState]);
export var AzSubnets = 64 | 0;

export var SubnetMappings = list(n0, _SM, 0, () => SubnetMapping);
export var AssociationSyncState = map(n0, _ASS, 0, 0, () => AZSyncState);
export var IPSetMetadataMap = map(n0, _IPSMM, 0, 0, () => IPSetMetadata);
export var SupportedAvailabilityZones = map(n0, _SAZ, 0, 0, () => AvailabilityZoneMetadata);
export var SyncStateConfig = map(n0, _SSC, 0, 0, () => PerObjectStatus);
export var SyncStates = map(n0, _SS, 0, 0, () => SyncState);
export var AssociateSubnets = op(
  n0,
  _AS,
  0,
  () => AssociateSubnetsRequest,
  () => AssociateSubnetsResponse
);
export var CreateFirewall = op(
  n0,
  _CF,
  0,
  () => CreateFirewallRequest,
  () => CreateFirewallResponse
);
export var CreateVpcEndpointAssociation = op(
  n0,
  _CVEA,
  0,
  () => CreateVpcEndpointAssociationRequest,
  () => CreateVpcEndpointAssociationResponse
);
export var DeleteFirewall = op(
  n0,
  _DF,
  0,
  () => DeleteFirewallRequest,
  () => DeleteFirewallResponse
);
export var DeleteVpcEndpointAssociation = op(
  n0,
  _DVEA,
  0,
  () => DeleteVpcEndpointAssociationRequest,
  () => DeleteVpcEndpointAssociationResponse
);
export var DescribeFirewall = op(
  n0,
  _DFe,
  0,
  () => DescribeFirewallRequest,
  () => DescribeFirewallResponse
);
export var DescribeFirewallMetadata = op(
  n0,
  _DFM,
  0,
  () => DescribeFirewallMetadataRequest,
  () => DescribeFirewallMetadataResponse
);
export var DescribeVpcEndpointAssociation = op(
  n0,
  _DVEAe,
  0,
  () => DescribeVpcEndpointAssociationRequest,
  () => DescribeVpcEndpointAssociationResponse
);
export var DisassociateSubnets = op(
  n0,
  _DS,
  0,
  () => DisassociateSubnetsRequest,
  () => DisassociateSubnetsResponse
);
