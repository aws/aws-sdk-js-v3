// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _Act,
  _AEIV,
  _AENIV,
  _AENIVw,
  _AEO,
  _AFE,
  _AFSI,
  _AFSR,
  _AIGR,
  _AIs,
  _ASf,
  _AT,
  _ATl,
  _AVPCSGV,
  _AZ,
  _C,
  _CANA,
  _CB,
  _CFSRT,
  _CIGRT,
  _CNAA,
  _CNAEA,
  _CP,
  _CPD,
  _CPI,
  _CRT,
  _CSo,
  _D,
  _DAPR,
  _DCB,
  _DDRGV,
  _De,
  _DICB,
  _DNAEA,
  _DP,
  _DPLI,
  _DPR,
  _DRGLEV,
  _DRGPCV,
  _DT,
  _E,
  _EAEEO,
  _ECARTA,
  _ECCRA,
  _ECCRTA,
  _ECCRTAr,
  _ECDRA,
  _ECRRA,
  _ECRRTAA,
  _ED,
  _EDn,
  _EDnt,
  _EE,
  _EEO,
  _EFE,
  _EFSI,
  _EFSR,
  _EIGR,
  _EPD,
  _ERN,
  _ERT,
  _ERx,
  _ERxp,
  _ET,
  _EV,
  _EVn,
  _EVR,
  _EWC,
  _F,
  _FCC,
  _FEi,
  _FMSCR,
  _FMSPUFCCA,
  _FP,
  _FSI,
  _FSIOOSV,
  _FSMVPCEV,
  _FSR,
  _GI,
  _GVD,
  _GVDR,
  _GVDRe,
  _ICB,
  _IDA,
  _IGI,
  _IGR,
  _INAEV,
  _IPVR,
  _IPVRa,
  _IRTUIDAZ,
  _ITC,
  _IVC,
  _IVCp,
  _MA,
  _NAE,
  _NAETBC,
  _NAETBD,
  _NAI,
  _NAITC,
  _NAPR,
  _NFBHRDV,
  _NFIRCV,
  _NFITNIV,
  _NFMERTV,
  _NFMERV,
  _NFMFV,
  _NFMSV,
  _NFPD,
  _NFPMV,
  _NFSRGO,
  _NFUFRV,
  _NFUGRV,
  _NORGAA,
  _O,
  _OOSRL,
  _ORA,
  _Ov,
  _P,
  _PI,
  _PLI,
  _PM,
  _PMa,
  _PR,
  _Pr,
  _PRA,
  _PRAL,
  _PRAo,
  _PSGRA,
  _RAe,
  _RAT,
  _RAu,
  _RAWO,
  _RD,
  _Re,
  _RGN,
  _RHOOSEV,
  _RI,
  _RNAAA,
  _RO,
  _Ro,
  _Rou,
  _RR,
  _RT,
  _RTe,
  _RTI,
  _RV,
  _RVe,
  _SAZ,
  _SAZI,
  _SCA,
  _SDA,
  _SDAt,
  _SEO,
  _SEP,
  _SFDA,
  _SGRA,
  _SGRAe,
  _SGRD,
  _SI,
  _SRG,
  _SRGL,
  _SRGLt,
  _SRGt,
  _SRGta,
  _SRGtat,
  _Su,
  _T,
  _Ta,
  _To,
  _TP,
  _TPFMERTV,
  _TPFMFV,
  _TPFMSV,
  _TT,
  _TVR,
  _TVRa,
  _UP,
  _V,
  _VD,
  _VEI,
  _VI,
  _VPC,
  _VRi,
  _VRio,
  _VSG,
  _VT,
  _VTD,
  _WACLA,
  _WACLHICV,
  _WACLHOOSRV,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_2_Resource";

/* eslint no-var: 0 */

export var ActionTarget = struct(n0, _AT, 0, [_RI, _D], [0, 0]);
export var AwsEc2InstanceViolation = struct(n0, _AEIV, 0, [_VT, _AENIV], [0, () => AwsEc2NetworkInterfaceViolations]);
export var AwsEc2NetworkInterfaceViolation = struct(n0, _AENIVw, 0, [_VT, _VSG], [0, 64 | 0]);
export var AwsVPCSecurityGroupViolation = struct(
  n0,
  _AVPCSGV,
  0,
  [_VT, _VTD, _PM, _PSGRA],
  [0, 0, () => PartialMatches, () => SecurityGroupRemediationActions]
);
export var CreateNetworkAclAction = struct(n0, _CNAA, 0, [_D, _V, _FMSCR], [0, () => ActionTarget, 2]);
export var CreateNetworkAclEntriesAction = struct(
  n0,
  _CNAEA,
  0,
  [_D, _NAI, _NAETBC, _FMSCR],
  [0, () => ActionTarget, () => EntriesDescription, 2]
);
export var DeleteNetworkAclEntriesAction = struct(
  n0,
  _DNAEA,
  0,
  [_D, _NAI, _NAETBD, _FMSCR],
  [0, () => ActionTarget, () => EntriesDescription, 2]
);
export var DeletePolicyRequest = struct(n0, _DPR, 0, [_PI, _DAPR], [0, 2]);
export var DnsDuplicateRuleGroupViolation = struct(n0, _DDRGV, 0, [_VT, _VTD], [0, 0]);
export var DnsRuleGroupLimitExceededViolation = struct(n0, _DRGLEV, 0, [_VT, _VTD, _NORGAA], [0, 0, 1]);
export var DnsRuleGroupPriorityConflictViolation = struct(
  n0,
  _DRGPCV,
  0,
  [_VT, _VTD, _CP, _CPI, _UP],
  [0, 0, 1, 0, 64 | 1]
);
export var EC2AssociateRouteTableAction = struct(
  n0,
  _ECARTA,
  0,
  [_D, _RTI, _SI, _GI],
  [0, () => ActionTarget, () => ActionTarget, () => ActionTarget]
);
export var EC2CopyRouteTableAction = struct(
  n0,
  _ECCRTA,
  0,
  [_D, _VI, _RTI],
  [0, () => ActionTarget, () => ActionTarget]
);
export var EC2CreateRouteAction = struct(
  n0,
  _ECCRA,
  0,
  [_D, _DCB, _DPLI, _DICB, _VEI, _GI, _RTI],
  [0, 0, 0, 0, () => ActionTarget, () => ActionTarget, () => ActionTarget]
);
export var EC2CreateRouteTableAction = struct(n0, _ECCRTAr, 0, [_D, _VI], [0, () => ActionTarget]);
export var EC2DeleteRouteAction = struct(
  n0,
  _ECDRA,
  0,
  [_D, _DCB, _DPLI, _DICB, _RTI],
  [0, 0, 0, 0, () => ActionTarget]
);
export var EC2ReplaceRouteAction = struct(
  n0,
  _ECRRA,
  0,
  [_D, _DCB, _DPLI, _DICB, _GI, _RTI],
  [0, 0, 0, 0, () => ActionTarget, () => ActionTarget]
);
export var EC2ReplaceRouteTableAssociationAction = struct(
  n0,
  _ECRRTAA,
  0,
  [_D, _AIs, _RTI],
  [0, () => ActionTarget, () => ActionTarget]
);
export var EntryDescription = struct(n0, _ED, 0, [_EDn, _ERN, _ET], [() => NetworkAclEntry, 1, 0]);
export var EntryViolation = struct(
  n0,
  _EV,
  0,
  [_EE, _EEO, _AEO, _EAEEO, _EWC, _EVR],
  [() => EntryDescription, 0, 0, () => EntryDescription, () => EntriesWithConflicts, 64 | 0]
);
export var ExpectedRoute = struct(n0, _ERx, 0, [_IVC, _PLI, _IVCp, _CSo, _ATl, _RTI], [0, 0, 0, 64 | 0, 64 | 0, 0]);
export var FirewallSubnetIsOutOfScopeViolation = struct(
  n0,
  _FSIOOSV,
  0,
  [_FSI, _VI, _SAZ, _SAZI, _VEI],
  [0, 0, 0, 0, 0]
);
export var FirewallSubnetMissingVPCEndpointViolation = struct(n0, _FSMVPCEV, 0, [_FSI, _VI, _SAZ, _SAZI], [0, 0, 0, 0]);
export var FMSPolicyUpdateFirewallCreationConfigAction = struct(n0, _FMSPUFCCA, 0, [_D, _FCC], [0, 0]);
export var GetViolationDetailsRequest = struct(n0, _GVDR, 0, [_PI, _MA, _RI, _RT], [0, 0, 0, 0]);
export var GetViolationDetailsResponse = struct(n0, _GVDRe, 0, [_VD], [() => ViolationDetail]);
export var InvalidNetworkAclEntriesViolation = struct(
  n0,
  _INAEV,
  0,
  [_V, _Su, _SAZ, _CANA, _EVn],
  [0, 0, 0, 0, () => EntryViolations]
);
export var NetworkAclEntry = struct(
  n0,
  _NAE,
  0,
  [_ITC, _P, _PR, _CB, _ICB, _RAu, _E],
  [() => NetworkAclIcmpTypeCode, 0, () => NetworkAclPortRange, 0, 0, 0, 2]
);
export var NetworkAclIcmpTypeCode = struct(n0, _NAITC, 0, [_C, _T], [1, 1]);
export var NetworkAclPortRange = struct(n0, _NAPR, 0, [_F, _To], [1, 1]);
export var NetworkFirewallBlackHoleRouteDetectedViolation = struct(
  n0,
  _NFBHRDV,
  0,
  [_VT, _RTI, _VI, _VRi],
  [0, 0, 0, () => Routes]
);
export var NetworkFirewallInternetTrafficNotInspectedViolation = struct(
  n0,
  _NFITNIV,
  0,
  [_SI, _SAZ, _RTI, _VRi, _IRTUIDAZ, _CFSRT, _EFE, _FSI, _EFSR, _AFSR, _IGI, _CIGRT, _EIGR, _AIGR, _VI],
  [0, 0, 0, () => Routes, 2, 0, 0, 0, () => ExpectedRoutes, () => Routes, 0, 0, () => ExpectedRoutes, () => Routes, 0]
);
export var NetworkFirewallInvalidRouteConfigurationViolation = struct(
  n0,
  _NFIRCV,
  0,
  [_ASf, _RTI, _IRTUIDAZ, _VRio, _CFSRT, _EFE, _AFE, _EFSI, _AFSI, _EFSR, _AFSR, _IGI, _CIGRT, _EIGR, _AIGR, _VI],
  [
    64 | 0,
    0,
    2,
    () => Route,
    0,
    0,
    0,
    0,
    0,
    () => ExpectedRoutes,
    () => Routes,
    0,
    0,
    () => ExpectedRoutes,
    () => Routes,
    0,
  ]
);
export var NetworkFirewallMissingExpectedRoutesViolation = struct(
  n0,
  _NFMERV,
  0,
  [_VT, _ERxp, _VI],
  [0, () => ExpectedRoutes, 0]
);
export var NetworkFirewallMissingExpectedRTViolation = struct(
  n0,
  _NFMERTV,
  0,
  [_VT, _VPC, _AZ, _CRT, _ERT],
  [0, 0, 0, 0, 0]
);
export var NetworkFirewallMissingFirewallViolation = struct(n0, _NFMFV, 0, [_VT, _VPC, _AZ, _TVR], [0, 0, 0, 0]);
export var NetworkFirewallMissingSubnetViolation = struct(n0, _NFMSV, 0, [_VT, _VPC, _AZ, _TVR], [0, 0, 0, 0]);
export var NetworkFirewallPolicyDescription = struct(
  n0,
  _NFPD,
  0,
  [_SRG, _SDA, _SFDA, _SCA, _SRGt, _SDAt, _SEO],
  [
    () => StatelessRuleGroupList,
    64 | 0,
    64 | 0,
    64 | 0,
    () => StatefulRuleGroupList,
    64 | 0,
    () => StatefulEngineOptions,
  ]
);
export var NetworkFirewallPolicyModifiedViolation = struct(
  n0,
  _NFPMV,
  0,
  [_VT, _CPD, _EPD],
  [0, () => NetworkFirewallPolicyDescription, () => NetworkFirewallPolicyDescription]
);
export var NetworkFirewallStatefulRuleGroupOverride = struct(n0, _NFSRGO, 0, [_Ac], [0]);
export var NetworkFirewallUnexpectedFirewallRoutesViolation = struct(
  n0,
  _NFUFRV,
  0,
  [_FSI, _VRi, _RTI, _FEi, _VI],
  [0, () => Routes, 0, 0, 0]
);
export var NetworkFirewallUnexpectedGatewayRoutesViolation = struct(
  n0,
  _NFUGRV,
  0,
  [_GI, _VRi, _RTI, _VI],
  [0, () => Routes, 0, 0]
);
export var PartialMatch = struct(n0, _PMa, 0, [_Re, _TVRa], [0, 64 | 0]);
export var PossibleRemediationAction = struct(n0, _PRA, 0, [_D, _ORA, _IDA], [0, () => OrderedRemediationActions, 2]);
export var PossibleRemediationActions = struct(n0, _PRAo, 0, [_D, _Act], [0, () => PossibleRemediationActionList]);
export var RemediationAction = struct(
  n0,
  _RAe,
  0,
  [_D, _ECCRA, _ECRRA, _ECDRA, _ECCRTA, _ECRRTAA, _ECARTA, _ECCRTAr, _FMSPUFCCA, _CNAA, _RNAAA, _CNAEA, _DNAEA],
  [
    0,
    () => EC2CreateRouteAction,
    () => EC2ReplaceRouteAction,
    () => EC2DeleteRouteAction,
    () => EC2CopyRouteTableAction,
    () => EC2ReplaceRouteTableAssociationAction,
    () => EC2AssociateRouteTableAction,
    () => EC2CreateRouteTableAction,
    () => FMSPolicyUpdateFirewallCreationConfigAction,
    () => CreateNetworkAclAction,
    () => ReplaceNetworkAclAssociationAction,
    () => CreateNetworkAclEntriesAction,
    () => DeleteNetworkAclEntriesAction,
  ]
);
export var RemediationActionWithOrder = struct(n0, _RAWO, 0, [_RAe, _O], [() => RemediationAction, 1]);
export var ReplaceNetworkAclAssociationAction = struct(
  n0,
  _RNAAA,
  0,
  [_D, _AIs, _NAI, _FMSCR],
  [0, () => ActionTarget, () => ActionTarget, 2]
);
export var ResourceViolation = struct(
  n0,
  _RV,
  0,
  [
    _AVPCSGV,
    _AENIVw,
    _AEIV,
    _NFMFV,
    _NFMSV,
    _NFMERTV,
    _NFPMV,
    _NFITNIV,
    _NFIRCV,
    _NFBHRDV,
    _NFUFRV,
    _NFUGRV,
    _NFMERV,
    _DRGPCV,
    _DDRGV,
    _DRGLEV,
    _FSIOOSV,
    _RHOOSEV,
    _TPFMFV,
    _TPFMSV,
    _TPFMERTV,
    _FSMVPCEV,
    _INAEV,
    _PRAo,
    _WACLHICV,
    _WACLHOOSRV,
  ],
  [
    () => AwsVPCSecurityGroupViolation,
    () => AwsEc2NetworkInterfaceViolation,
    () => AwsEc2InstanceViolation,
    () => NetworkFirewallMissingFirewallViolation,
    () => NetworkFirewallMissingSubnetViolation,
    () => NetworkFirewallMissingExpectedRTViolation,
    () => NetworkFirewallPolicyModifiedViolation,
    () => NetworkFirewallInternetTrafficNotInspectedViolation,
    () => NetworkFirewallInvalidRouteConfigurationViolation,
    () => NetworkFirewallBlackHoleRouteDetectedViolation,
    () => NetworkFirewallUnexpectedFirewallRoutesViolation,
    () => NetworkFirewallUnexpectedGatewayRoutesViolation,
    () => NetworkFirewallMissingExpectedRoutesViolation,
    () => DnsRuleGroupPriorityConflictViolation,
    () => DnsDuplicateRuleGroupViolation,
    () => DnsRuleGroupLimitExceededViolation,
    () => FirewallSubnetIsOutOfScopeViolation,
    () => RouteHasOutOfScopeEndpointViolation,
    () => ThirdPartyFirewallMissingFirewallViolation,
    () => ThirdPartyFirewallMissingSubnetViolation,
    () => ThirdPartyFirewallMissingExpectedRouteTableViolation,
    () => FirewallSubnetMissingVPCEndpointViolation,
    () => InvalidNetworkAclEntriesViolation,
    () => PossibleRemediationActions,
    () => WebACLHasIncompatibleConfigurationViolation,
    () => WebACLHasOutOfScopeResourcesViolation,
  ]
);
export var Route = struct(n0, _Ro, 0, [_DT, _TT, _De, _Ta], [0, 0, 0, 0]);
export var RouteHasOutOfScopeEndpointViolation = struct(
  n0,
  _RHOOSEV,
  0,
  [_SI, _VI, _RTI, _VRi, _SAZ, _SAZI, _CFSRT, _FSI, _FSR, _IGI, _CIGRT, _IGR],
  [0, 0, 0, () => Routes, 0, 0, 0, 0, () => Routes, 0, 0, () => Routes]
);
export var SecurityGroupRemediationAction = struct(
  n0,
  _SGRA,
  0,
  [_RAT, _D, _RR, _IDA],
  [0, 0, () => SecurityGroupRuleDescription, 2]
);
export var SecurityGroupRuleDescription = struct(n0, _SGRD, 0, [_IPVR, _IPVRa, _PLI, _P, _FP, _TP], [0, 0, 0, 0, 1, 1]);
export var StatefulEngineOptions = struct(n0, _SEO, 0, [_RO, _SEP], [0, 0]);
export var StatefulRuleGroup = struct(
  n0,
  _SRGta,
  0,
  [_RGN, _RI, _Pr, _Ov],
  [0, 0, 1, () => NetworkFirewallStatefulRuleGroupOverride]
);
export var StatelessRuleGroup = struct(n0, _SRGtat, 0, [_RGN, _RI, _Pr], [0, 0, 1]);
export var ThirdPartyFirewallMissingExpectedRouteTableViolation = struct(
  n0,
  _TPFMERTV,
  0,
  [_VT, _VPC, _AZ, _CRT, _ERT],
  [0, 0, 0, 0, 0]
);
export var ThirdPartyFirewallMissingFirewallViolation = struct(n0, _TPFMFV, 0, [_VT, _VPC, _AZ, _TVR], [0, 0, 0, 0]);
export var ThirdPartyFirewallMissingSubnetViolation = struct(n0, _TPFMSV, 0, [_VT, _VPC, _AZ, _TVR], [0, 0, 0, 0]);
export var ViolationDetail = struct(
  n0,
  _VD,
  0,
  [_PI, _MA, _RI, _RT, _RVe, _RTe, _RD],
  [0, 0, 0, 0, () => ResourceViolations, () => TagList, 0]
);
export var WebACLHasIncompatibleConfigurationViolation = struct(n0, _WACLHICV, 0, [_WACLA, _D], [0, 0]);
export var WebACLHasOutOfScopeResourcesViolation = struct(n0, _WACLHOOSRV, 0, [_WACLA, _OOSRL], [0, 64 | 0]);
export var AwsEc2NetworkInterfaceViolations = list(n0, _AENIV, 0, () => AwsEc2NetworkInterfaceViolation);
export var DnsRuleGroupPriorities = 64 | 1;

export var EntriesDescription = list(n0, _EDnt, 0, () => EntryDescription);
export var EntriesWithConflicts = list(n0, _EWC, 0, () => EntryDescription);
export var EntryViolationReasons = 64 | 0;

export var EntryViolations = list(n0, _EVn, 0, () => EntryViolation);
export var ExpectedRoutes = list(n0, _ERxp, 0, () => ExpectedRoute);
export var LengthBoundedStringList = 64 | 0;

export var NetworkFirewallActionList = 64 | 0;

export var OrderedRemediationActions = list(n0, _ORA, 0, () => RemediationActionWithOrder);
export var PartialMatches = list(n0, _PM, 0, () => PartialMatch);
export var PossibleRemediationActionList = list(n0, _PRAL, 0, () => PossibleRemediationAction);
export var ResourceArnList = 64 | 0;

export var ResourceIdList = 64 | 0;

export var ResourceViolations = list(n0, _RVe, 0, () => ResourceViolation);
export var Routes = list(n0, _Rou, 0, () => Route);
export var SecurityGroupRemediationActions = list(n0, _SGRAe, 0, () => SecurityGroupRemediationAction);
export var StatefulRuleGroupList = list(n0, _SRGL, 0, () => StatefulRuleGroup);
export var StatelessRuleGroupList = list(n0, _SRGLt, 0, () => StatelessRuleGroup);
export var TargetViolationReasons = 64 | 0;

export var DeletePolicy = op(
  n0,
  _DP,
  0,
  () => DeletePolicyRequest,
  () => Unit
);
export var GetViolationDetails = op(
  n0,
  _GVD,
  0,
  () => GetViolationDetailsRequest,
  () => GetViolationDetailsResponse
);
